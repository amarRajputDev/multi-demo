/**
 * Kurtis By Sakshi — image sources for the concept.
 *
 * DECISION: no genuine @kurtis_by_sakshi product photography was reachable
 * within the research window (the Instagram profile is login-walled and the
 * third-party Hopinio listing embeds no product photos). The candidate logo at
 * hopinio-bucket.s3.amazonaws.com (…/kurtis_by_sakshi/637ea723….png) appears to
 * read "Sakshi Collection", so ownership under @kurtis_by_sakshi cannot be
 * established — per the brief's default-doubt rule it is NOT used anywhere.
 *
 * This demo therefore renders tasteful typographic/CSS-SVG placeholder cards
 * (see components/sakshi-image.tsx) for every product and editorial slot.
 * Nothing is downloaded; no unrelated business's garment photo is used. If
 * verified brand photography becomes available later, drop its remote URLs
 * here as `image`/`gallery` entries on each product and they will render via
 * the same one-shot-fallback <img> path.
 */

export const sakshiImages = {
  /** Not used — documented for provenance only (reads "Sakshi Collection"). */
  logoCandidate:
    "https://hopinio-bucket.s3.amazonaws.com/CACHE/images/business_image/kurtis_by_sakshi/637ea72391756566ab3a79542dc866d3.png",
  /** All product/editorial imagery is placeholder-rendered (null src). */
  logo: null as string | null,
} as const;
