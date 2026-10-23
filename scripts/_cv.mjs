import { chromium } from "playwright";
import { readdirSync, writeFileSync } from "node:fs";

const dirs = [
  "public/images/cielshop/products",
  "public/images/cielshop/brand",
];
const items = dirs
  .flatMap((d) => readdirSync(d).map((f) => ({ d, f })))
  .map(
    ({ d, f }) =>
      `<div><img src="../${d}/${f}" style="width:230px;height:280px;object-fit:contain;background:#222"><div style="color:#fff;font:11px sans-serif;width:230px;overflow:hidden">${f}</div></div>`,
  )
  .join("");
writeFileSync(
  "screenshots/_cv2.html",
  `<html><body style="background:#111;margin:0;padding:8px;display:flex;flex-wrap:wrap;gap:8px">${items}</body></html>`,
);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1250, height: 900 } });
await page.goto(
  "file:///" + process.cwd().replace(/\\/g, "/") + "/screenshots/_cv2.html",
);
await page.waitForTimeout(1200);
await page.screenshot({
  path: "screenshots/_cv2.png",
  fullPage: true,
});
await browser.close();
