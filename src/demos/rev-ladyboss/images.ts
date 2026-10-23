/**
 * Rev Ladyboss - central remote-image map.
 *
 * Every entry is a live remote URL referenced directly by the demo UI.
 * Nothing is downloaded, copied into /public, base64-encoded or duplicated as
 * a local asset. Swap any URL here without touching a component.
 *
 * The only asset published for this brand that could be verified within the
 * research window is the official Instagram profile image. The account does
 * not expose a standalone product catalogue, so product tiles use the
 * approved typographic/gradient fallback (see ./components/rev-image.tsx)
 * rather than another business's photography.
 *
 * Images remain the property of Rev Ladyboss and are hot-linked for this
 * concept presentation only.
 */

export const revImages = {
  /** Official @rev_ladyboss Instagram profile image - pale pink with black Lady Boss monogram. */
  logo: "https://hopinio-bucket.s3.amazonaws.com/CACHE/images/business_image/rev_ladyboss/a957866a0a107b655a3c01642a87d8e7.png",
} as const;

export type RevImageKey = keyof typeof revImages;
