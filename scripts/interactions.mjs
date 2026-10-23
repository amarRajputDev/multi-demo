/* Interaction QA: mobile menus, FAQ accordions, enquiry-form validation and
 * the demo-only WhatsApp hand-off. Run after `npm run build`. */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";

const PORT = 3323;
const BASE = `http://localhost:${PORT}`;
const DEMOS = [
  "aurora",
  "scholar-house",
  "pulse-prep",
  "northstar",
  "quantum",
  "bloom",
  "tm-sons",
];

const server = spawn(
  "node",
  ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)],
  { stdio: "ignore" },
);

let failures = [];
let passed = 0;

try {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE + "/");
      if (res.ok) break;
    } catch {
      /* not up */
    }
    await sleep(500);
    if (i === 59) throw new Error("server did not start");
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();

  // 1. Mobile menu: opens, locks scroll, Escape closes — for every demo.
  for (const demo of DEMOS) {
    await page.goto(`${BASE}/demos/${demo}`, { waitUntil: "load" });
    const trigger = page.locator('button[aria-label="Open menu"]').first();
    await trigger.click();
    const dialog = page.locator('[role="dialog"]');
    await dialog.waitFor({ state: "visible", timeout: 5000 });
    const locked = await page.evaluate(
      () => document.body.style.overflow === "hidden",
    );
    if (!locked) failures.push(`${demo}: body scroll not locked while menu open`);
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden", timeout: 5000 });
    passed++;

    // 2. Menu links close the sheet on navigation.
    await trigger.click();
    await dialog.waitFor({ state: "visible" });
    const firstLink = dialog.locator("nav a").first();
    await firstLink.click();
    await dialog.waitFor({ state: "hidden", timeout: 5000 }).catch(() => {
      failures.push(`${demo}: menu did not close after navigation`);
    });
    passed++;
  }

  // 3. FAQ accordion: opens with correct ARIA.
  await page.goto(`${BASE}/demos/aurora`, { waitUntil: "load" });
  const faqButton = page.locator('h3 button[aria-expanded]').first();
  await faqButton.scrollIntoViewIfNeeded();
  await faqButton.click();
  const expanded = await faqButton.getAttribute("aria-expanded");
  if (expanded !== "true") failures.push("aurora: FAQ did not expand");
  const panel = page.locator('div[role="region"]').first();
  if (!(await panel.isVisible())) failures.push("aurora: FAQ panel not visible");
  passed++;

  // 4. Enquiry form: empty submit shows errors, valid submit reaches the
  //    demo-only success state with a prefilled wa.me link.
  await page.goto(`${BASE}/demos/aurora/contact`, { waitUntil: "load" });
  const submit = page.locator('button[type="submit"]').first();
  await submit.scrollIntoViewIfNeeded();
  await submit.click();
  await page.waitForSelector('[aria-invalid="true"]', { timeout: 5000 });
  const errorCount = await page.locator("[role=alert]").count();
  if (errorCount < 2) failures.push(`aurora: expected field errors, got ${errorCount}`);
  passed++;

  await page.fill("#enquiry-name", "Test Student");
  await page.fill("#enquiry-class", "Class 11 · JEE 2027");
  await page.fill("#enquiry-phone", "98765 43210");
  await submit.click();
  await page.getByText(/Enquiry ready/i).waitFor({ timeout: 8000 });
  const waHref = await page
    .locator('a[href*="wa.me"]')
    .first()
    .getAttribute("href");
  if (!waHref || !waHref.includes("Test%20Student")) {
    failures.push(`aurora: WhatsApp link missing or not prefilled (${waHref})`);
  }
  if (!waHref.includes("98765")) {
    failures.push("aurora: WhatsApp link missing phone");
  }
  const demoNote = await page.getByText(/nothing was stored or sent/i).count();
  if (!demoNote) failures.push("aurora: demo-only disclosure missing on success");
  passed++;

  // 5. TM SONS enquiry list: add → drawer → quantity stepper → remove.
  await page.goto(`${BASE}/demos/tm-sons`, { waitUntil: "load" });
  const addButton = page.locator('button[aria-label^="Add "]').first();
  await addButton.scrollIntoViewIfNeeded();
  await addButton.click();
  const drawer = page.locator('[role="dialog"][aria-label="Enquiry list"]');
  await drawer.waitFor({ state: "visible", timeout: 5000 });
  const drawerLocked = await page.evaluate(
    () => document.body.style.overflow === "hidden",
  );
  if (!drawerLocked) failures.push("tm-sons: body scroll not locked in enquiry drawer");
  passed++;

  const qty = drawer.locator('input[type="number"]').first();
  if ((await qty.inputValue()) !== "1") {
    failures.push(`tm-sons: expected initial quantity 1, got ${await qty.inputValue()}`);
  }
  await drawer.locator('button[aria-label^="Increase quantity"]').first().click();
  if ((await qty.inputValue()) !== "2") {
    failures.push(`tm-sons: quantity stepper did not increment (${await qty.inputValue()})`);
  }
  passed++;

  await drawer.locator('button[aria-label^="Remove "]').first().click();
  const emptyText = await drawer.getByText(/Nothing added yet/i).count();
  if (!emptyText) failures.push("tm-sons: drawer did not return to empty state");
  passed++;

  await page.keyboard.press("Escape");
  await drawer.waitFor({ state: "hidden", timeout: 5000 });
  passed++;

  // 6. TM SONS quote builder: empty submit surfaces errors; a valid submit
  //    ends on the demo-only preview — never a "sent" confirmation.
  await page.goto(`${BASE}/demos/tm-sons/wholesale`, { waitUntil: "load" });
  const preview = page.locator('button:has-text("Preview enquiry")').first();
  await preview.scrollIntoViewIfNeeded();
  await preview.click();
  await page.waitForSelector('[aria-invalid="true"]', { timeout: 5000 });
  const quoteErrors = await page.locator("[role=alert]").count();
  if (quoteErrors < 3) failures.push(`tm-sons: expected field errors, got ${quoteErrors}`);
  passed++;

  const picker = page.locator("#tm-product-picker");
  await picker.selectOption({ index: 1 });
  await page.getByRole("button", { name: "Add", exact: true }).click();

  await page.fill("#tm-business", "Test Boutique");
  await page.fill("#tm-contact-person", "Ritika Sharma");
  await page.fill("#tm-phone", "9876543210");
  await page.fill("#tm-city", "Ludhiana");
  await page.fill("#tm-state", "Punjab");
  await preview.click();

  await page.getByText(/nothing was sent/i).waitFor({ timeout: 8000 });
  const receivedNote = await page.getByText(/has not received this enquiry/i).count();
  if (!receivedNote) failures.push("tm-sons: demo-only disclosure missing on preview");
  const falseSuccess = await page.getByText(/successfully sent|order placed/i).count();
  if (falseSuccess) failures.push("tm-sons: preview claims a real submission");
  passed++;

  await browser.close();
} catch (err) {
  console.error(err);
  failures.push(String(err));
} finally {
  server.kill();
}

console.log(`checks passed: ${passed}`);
if (failures.length) {
  console.log("FAILURES:");
  for (const f of failures) console.log(" - " + f);
  process.exit(1);
}
console.log("all interaction checks passed");
process.exit(0);
