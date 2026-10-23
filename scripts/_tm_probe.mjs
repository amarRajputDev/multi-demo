import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";
const PORT = 3344;
const BASE = `http://localhost:${PORT}`;
const server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], { stdio: "ignore" });
try {
  for (let i = 0; i < 60; i++) { try { const r = await fetch(BASE + "/"); if (r.ok) break; } catch {} await sleep(500); }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(BASE + "/demos/tm-sons", { waitUntil: "networkidle" });
  await sleep(1500);
  const info = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll("img")].map(i => ({ src: i.currentSrc || i.src, nat: i.naturalWidth, complete: i.complete }));
    const articles = [...document.querySelectorAll("article")];
    const firstArticle = articles[0];
    let op = null, chain = [];
    if (firstArticle) {
      let n = firstArticle;
      for (let k = 0; k < 6 && n; k++) {
        const cs = getComputedStyle(n);
        chain.push(`${n.tagName}.${(n.className||"").toString().slice(0,60)} op=${cs.opacity} vis=${cs.visibility} disp=${cs.display} h=${n.getBoundingClientRect().height}`);
        n = n.parentElement;
      }
    }
    return {
      imgCount: imgs.length,
      broken: imgs.filter(i => i.nat === 0).length,
      sampleImgs: imgs.slice(0, 4),
      articleCount: articles.length,
      chain,
      bodyText: document.body.innerText.slice(0, 300),
      pageH: document.documentElement.scrollHeight,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
} finally { server.kill(); }
