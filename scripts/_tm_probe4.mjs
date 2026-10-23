import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";
const PORT = 3347;
const BASE = `http://localhost:${PORT}`;
const server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], { stdio: "ignore" });
try {
  for (let i = 0; i < 60; i++) { try { const r = await fetch(BASE + "/"); if (r.ok) break; } catch {} await sleep(500); }
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 950 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on("console", m => { if (m.type() === "error") errs.push(m.text().slice(0, 200)); });
  page.on("pageerror", e => errs.push("PAGEERROR " + String(e).slice(0, 300)));
  await page.goto(BASE + "/demos/tm-sons", { waitUntil: "load" });
  await sleep(1500);
  const out = await page.evaluate(() => {
    const els = [...document.querySelectorAll('[style*="opacity: 0"]')];
    const first = els[0];
    const reduceNow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return {
      reduceNow,
      count: els.length,
      firstHTML: first ? first.outerHTML.slice(0, 300) : null,
      firstRect: first ? JSON.stringify(first.getBoundingClientRect()) : null,
      sampleClasses: els.slice(0, 6).map(e => (e.className || "").toString().slice(0, 70)),
    };
  });
  console.log(JSON.stringify(out, null, 2));
  console.log("console errors:", errs);
  await browser.close();
} finally { server.kill(); }
