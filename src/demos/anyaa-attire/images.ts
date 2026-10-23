/**
 * Anyaa Attire - central remote-image map.
 *
 * Every entry is a live remote URL referenced directly by the demo UI. Nothing
 * is downloaded, copied into /public, base64-encoded or duplicated as a local
 * asset. Only two genuine brand-linked images were found during research; all
 * other product tiles use the demo's CSS/SVG placeholder cards instead of any
 * unrelated business's photography.
 *
 * This is an unofficial website concept. Images remain the property of their
 * respective owners and are hot-linked for presentation only.
 */

export const anyaaImages = {
  /** Official Anyaa Attire profile/logo image (third-party business listing CDN). */
  logo: "https://hopinio-bucket.s3.amazonaws.com/CACHE/images/business_image/anyaa_attire/d482f3107f9bb8f215a1fe5b52460519.png",

  /** Yellow-and-white floral flex-cotton kurti - brand's own August 2023 post,
   *  archived on Pinterest. Historical reference only; marked demo-only. */
  yellowFloralKurti:
    "https://i.pinimg.com/736x/21/0c/3e/210c3e62c200198d9eeb7355437e91b2.jpg",
} as const;

export type AnyaaImageKey = keyof typeof anyaaImages;
