"use cache";

/**
 * Season label for the homepage editorial band.
 *
 * Cached (like `@/lib/site-year`) so `new Date()` stays a stable value during
 * static prerendering. Re-curation is a one-line edit here plus
 * `tmSeasonalSlugs` in `data.ts` — no component changes required.
 */
export async function tmSeasonLabel(): Promise<string> {
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  let name: string;
  if (month === 11 || month <= 1) name = "Winter";
  else if (month <= 4) name = "Spring";
  else if (month <= 7) name = "Summer";
  else name = "Autumn";
  return `${name} ${year}`;
}
