/**
 * Exotix In - central remote-image map for the redesign concept.
 *
 * Every entry is a live URL on the brand's own hosts (exotix.in/cdn/shop/files
 * or cdn.shopify.com/s/files/1/0973/3891/7164/files/) — hot-linked only.
 * Nothing is downloaded, copied into /public or base64-encoded.
 *
 * Verification (HEAD-checked 23 Oct 2026): the legacy wp-content URLs from the
 * brand's older WordPress site (including the campaign prototype JPG and the
 * 2023 crewneck image supplied in the brief) now return 404, so they are NOT
 * hard-coded here. Verified Shopify-CDN replacements from the live catalogue
 * feed are used instead, and any failing URL falls back to the typographic
 * placeholder in components/exotix-image.tsx.
 *
 * Images remain the property of Exotix (exotix.in) and are referenced for this
 * unofficial redesign concept only.
 */

const CDN = "https://exotix.in/cdn/shop/files/";
const SHOPIFY =
  "https://cdn.shopify.com/s/files/1/0973/3891/7164/files/";

/** Build an exotix.in CDN URL at a sensible catalogue width. */
function cdn(name: string, width = 1000): string {
  return `${CDN}${name}?width=${width}`;
}

export const exotixImages = {
  /* --- Campaign / editorial (verified 200, 23 Oct 2026) --- */
  /** Racing jacket desktop campaign banner shot. */
  campaignRacing: cdn("racing_jacket_descktop.jpg", 1600),
  /** Homepage collection banner asset. */
  campaignBanner1: cdn("1_700x_6012a019-1f9e-48f6-9993-9a52832655e6.jpg", 1600),
  /** CNY jackets shot on a cream/navy couples set. */
  cnyCouples: cdn("couples-matching-cny-jacket-cream-navy.jpg", 1200),
  /** Group shot of maroon / grey / green CNY jackets. */
  cnyGroup: cdn("exotix-cny-jacket-group-maroon-grey-green-1.jpg", 1200),
  /** Close-up of Ferrari-style racing jacket embroidery. */
  ferrariCloseup: cdn("close-up-ferrari-racing-jacket-embroidery-womens.jpg", 1200),
  /** Knot-button detail on the black Tang-style CNY jacket. */
  cnyKnotDetail: cdn("black-suede-tang-style-frog-knot-closure-detail.jpg", 1000),

  /* --- CNY / festive jackets --- */
  cnyKnotJacket: `${SHOPIFY}unisex-cny-knot-jacket-black-navy-blue-streetwear.jpg?width=1000`,
  cnyKnotJacketAlt: cdn("cream-cny-knot-jacket-womens-y2k-1.jpg", 1000),
  oliveCny: cdn("mens-olive-green-cny-jacket-chinese-streetwear.jpg", 1000),
  oliveCnyAlt: cdn("olive-green-cny-festive-jacket-mens-1.jpg", 1000),
  maroonCny: `${SHOPIFY}Maroon-CNY-Jacket-Exotix-1.png?width=1000`,
  maroonCnyAlt: cdn("maroon-cny-knot-jacket-mens-streetwear.jpg", 1000),
  blackCny: cdn("ack-cny-jacket-tang-style-oversized-streetwear.jpg", 1000),
  blackCnyAlt: cdn("black-cny-jacket-mens-y2k-streetwear.jpg", 1000),
  mustardCny: cdn("mens-mustard-yellow-cny-jacket-chinese-streetwear.jpg", 1000),
  mustardCnyAlt: cdn("mustard-yellow-cny-jacket-mens-streetwear-1.jpg", 1000),

  /* --- Motorsport / racing jackets --- */
  blackFerrari: cdn("ferrari-jacket.jpg", 1000),
  blackFerrariAlt: cdn("womens-black-ferrari-motorsport-jacket-layering.jpg", 1000),
  redBull: cdn("1000206110.jpg", 1000),
  redBullAlt: cdn("1000206109.jpg", 1000),
  marlboro: cdn("1000206790.jpg", 1000),
  marlboroAlt: cdn("1000206791.jpg", 1000),

  /* --- Hoodies --- */
  spidermanHoodie: `${SHOPIFY}Spiderman-Embroidered-Hoodie-Exotix-3.png?width=1000`,
  spidermanHoodieAlt: cdn("oversized-red-spiderman-zip-hoodie-mens-fit.png", 1000),
  tribalDepthHoodie: cdn("3_700x_a35afcf1-34dc-4a44-920f-9cddc6d659bb.jpg", 1000),
  tribalDepthHoodieAlt: cdn("white-tribal-shadow-hoodie-mens-puff-print-detail.png", 1000),
  balaclavaHoodie: cdn("mens-black-balaclava-hoodie-streetwear.webp", 1000),
  balaclavaHoodieAlt: cdn("black-and-white-balaclava-hoodies-streetwear-duo.webp", 1000),

  /* --- Sweatshirts --- */
  babeSweatshirt: cdn("exotix.in-20231017-0002.jpg", 1000),
  crewneckSweatshirt: cdn("404305625_869998947861579_4232036371609620733_n_webp.jpg", 1000),

  /* --- Leather jackets --- */
  boxyLeather: cdn("mens-black-boxy-cropped-leather-jacket-opium-fit.jpg", 1000),
  gothicCrossJacket: cdn("exotix-mens-obsidian-black-gothic-cross-patch-jacket.png", 1000),
  croppedLeather: cdn("black-minimal-leather-jacket-unisex-streetwear.jpg", 1000),

  /* --- T-shirts --- */
  redAcidTee: cdn("exotix.in-20250316-0001.jpg", 1000),
  greenAcidTee: cdn("exotix.in-20250314-0014-2.jpg", 1000),

  /* --- Bottoms --- */
  crossJeans: cdn("exotix.in-20240531-0001.jpg", 1000),
  snapPant: cdn("you.design.we_.create-20230619-0001.jpg", 1000),
  trustIssuePant: cdn("IMG-20240920-WA0108-scaled-e1726828891370.jpg", 1000),

  /* --- Co-ord sets --- */
  halfZipCoord: cdn("403992767_280001235040791_8432144297439509835_n_webp.jpg", 1000),
  cupCoord: cdn("exotix.in-20230816-0001.jpg", 1000),
} as const;

export type ExotixImageKey = keyof typeof exotixImages;
