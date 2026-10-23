import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";
const PORT = 3345;
const BASE = `http://localhost:${PORT}`;
const server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], { stdio: "ignore" });
try {
  for (let i = 0; i < 60; i++) { try { const r = await fetch(BASE + "/"); if (r.ok) break; } catch {} await sleep(500); }
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ reducedMotion: "reduce", colorScheme: "light", viewport: { width: 1440, height: 950 } });
  const page = await ctx.newPage();
  await page.goto(BASE + "/demos/tm-sons", { waitUntil: "load" });
  const mm = await page.evaluate(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  console.log("matchMedia reduce =", mm);
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
  });
  await sleep(800);
  const out = await page.evaluate(() => {
    const d = document.querySelectorAll("article").length;
    const wraps = [...document.querySelectorAll("article")].map(a => getComputedStyle(a.parentElement).opacity);
    const heroH1 = document.querySelector("h1");
    let n = heroH1, chain = [];
    for (let k = 0; k < 5 && n; k++) { chain.push(`${n.tagName} op=${getComputedStyle(n).opacity}`); n = n.parentElement; }
    return { articleCount: d, revealOpacities: wraps, h1: heroH1 ? heroH1.innerText : null, chain, h1Opacity: heroH1 ? getComputedStyle(heroH1).opacity : null };
  });
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
} finally { server.kill(); }
