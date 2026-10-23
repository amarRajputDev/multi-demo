/* Headless QA pass: horizontal-overflow checks across breakpoints, console
 * errors, failed requests, and screenshots for visual review.
 *
 * Usage: node scripts/qa-visual.mjs  (expects an up-to-date `npm run build`)  */
import { spawn } from "node:child_process";
import { mkdirSync, existsSync, rmSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";

const PORT = 3322;
const BASE = `http://localhost:${PORT}`;
const WIDTHS = [320, 390, 768, 1440];

const ROUTES = [
  "/",
  "/demos/aurora",
  "/demos/scholar-house",
  "/demos/pulse-prep",
  "/demos/northstar",
  "/demos/quantum",
  "/demos/bloom",
  "/demos/tm-sons",
];

const EXTRA = [
  "/demos/aurora/courses",
  "/demos/aurora/contact",
  "/demos/scholar-house/courses",
  "/demos/scholar-house/contact",
  "/demos/pulse-prep/courses",
  "/demos/pulse-prep/contact",
  "/demos/northstar/courses",
  "/demos/northstar/contact",
  "/demos/quantum/courses",
  "/demos/quantum/contact",
  "/demos/bloom/courses",
  "/demos/bloom/contact",
  "/demos/tm-sons/shop",
  "/demos/tm-sons/wholesale",
  "/demos/tm-sons/contact",
  "/demos/tm-sons/collections/winterwear",
  "/demos/tm-sons/products/premium-embroidered-cardigan",
];

const SHOTS = [
  { route: "/", name: "showcase" },
  ...ROUTES.slice(1).map((r) => ({
    route: r,
    name: r.replace("/demos/", ""),
  })),
];

const server = spawn(
  "node",
  ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)],
  { stdio: "ignore" },
);

let exitCode = 0;
try {
  // Wait for server.
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE + "/");
      if (res.ok) break;
    } catch {
      /* not up yet */
    }
    await sleep(500);
    if (i === 59) throw new Error("server did not start");
  }

  const browser = await chromium.launch();
  const consoleErrors = new Map();
  const failedRequests = new Map();
  const overflow = [];

  const context = await browser.newContext();
  const page = await context.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const key = msg.text().slice(0, 160);
      consoleErrors.set(key, (consoleErrors.get(key) ?? 0) + 1);
    }
  });
  page.on("response", (res) => {
    if (res.status() >= 400 && !res.url().endsWith("/favicon.ico")) {
      const key = `${res.status()} ${res.url().replace(BASE, "")}`;
      failedRequests.set(key, (failedRequests.get(key) ?? 0) + 1);
    }
  });

  // Overflow sweep: every route at every breakpoint.
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [...ROUTES, ...EXTRA]) {
      await page.goto(BASE + route, { waitUntil: "load", timeout: 30000 });
      await sleep(150);
      const metrics = await page.evaluate(() => ({
        doc: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
        win: window.innerWidth,
      }));
      const max = Math.max(metrics.doc, metrics.body);
      if (max > metrics.win + 1) {
        overflow.push(`${route} @${width}px -> scrollWidth ${max}`);
      }
    }
  }

  // Screenshots for human review (desktop + mobile).
  // Reduced motion is emulated so scroll-reveal elements render in their
  // final state — full-page screenshots never trigger whileInView.
  const outDir = "screenshots";
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const shotContext = await browser.newContext({
    reducedMotion: "reduce",
    colorScheme: "light",
  });
  const shotPage = await shotContext.newPage();

  for (const shot of SHOTS) {
    for (const [w, h, tag] of [
      [1440, 950, "desktop"],
      [390, 844, "mobile"],
    ]) {
      await shotPage.setViewportSize({ width: w, height: h });
      await shotPage.goto(BASE + shot.route, {
        waitUntil: "load",
        timeout: 30000,
      });
      // Walk the page so lazy images below the fold decode before capture.
      await shotPage.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await sleep(500);
      await shotPage.screenshot({
        path: `${outDir}/${shot.name}-${tag}.png`,
        fullPage: tag === "desktop",
      });
    }
  }

  await shotContext.close();
  await browser.close();

  console.log("=== OVERFLOW ===");
  console.log(overflow.length ? overflow.join("\n") : "none");
  console.log("\n=== CONSOLE ERRORS ===");
  console.log(
    consoleErrors.size
      ? [...consoleErrors].map(([k, v]) => `${v}x ${k}`).join("\n")
      : "none",
  );
  console.log("\n=== FAILED REQUESTS ===");
  console.log(
    failedRequests.size
      ? [...failedRequests].map(([k, v]) => `${v}x ${k}`).join("\n")
      : "none",
  );

  if (overflow.length || consoleErrors.size || failedRequests.size) {
    exitCode = 1;
  }
} catch (err) {
  console.error(err);
  exitCode = 1;
} finally {
  server.kill();
}
process.exit(exitCode);
