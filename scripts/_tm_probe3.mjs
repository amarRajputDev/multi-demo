import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";
const PORT = 3346;
const BASE = `http://localhost:${PORT}`;
const server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], { stdio: "ignore" });
try {
  for (let i = 0; i < 60; i++) { try { const r = await fetch(BASE + "/"); if (r.ok) break; } catch {} await sleep(500); }
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ reducedMotion: "reduce", colorScheme: "light", viewport: { width: 1440, height: 950 } });
  const page = await ctx.newPage();
  for (const route of ["/demos/northstar", "/demos/tm-sons"]) {
    await page.goto(BASE + route, { waitUntil: "load" });
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await sleep(900);
    const out = await page.evaluate(() => {
      const zero = [...document.querySelectorAll("main *")].filter(el => el.parentElement && getComputedStyle(el).opacity === "0" && getComputedStyle(el.parentElement).opacity !== "0").length;
      const total = document.querySelectorAll("main *").length;
      const zeroStyle = [...document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]')].length;
      return { total, zero, zeroStyle };
    });
    console.log(route, JSON.stringify(out));
  }
  await browser.close();
} finally { server.kill(); }
