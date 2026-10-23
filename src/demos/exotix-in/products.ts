/**
 * Exotix In - typed product data for the redesign concept.
 *
 * VERIFIED CATALOGUE SNAPSHOT. Handles, prices (INR), size runs and image URLs
 * were read from the brand's own live Shopify feed (exotix.in/products.json)
 * on 23 October 2026 and each image URL was HTTP-checked. Prices and stock can
 * change at any time; availability is never claimed here, and no rating,
 * review, discount or delivery promise is invented. Verify everything with
 * the business before any commercial use.
 *
 * Images are direct remote URLs (see ./images.ts) - never local copies.
 */

import { exotixImages } from "./images";

export type ExotixCategory =
  | "hoodies"
  | "jackets"
  | "leather-jackets"
  | "sweatshirts"
  | "t-shirts"
  | "bottoms"
  | "co-ord-sets";

/** Per-field honesty flag required across this concept's data. */
export type Verification = "verified" | "unverified" | "demo-only";

export interface ExotixProduct {
  id: string;
  name: string;
  slug: string;
  /** Monospaced concept code, e.g. EXO-CNY-001 (design motif, not a live SKU). */
  code: string;
  category: ExotixCategory;
  /** Observed selling price in whole rupees. null → "Enquire for price". */
  price: number | null;
  priceVerification: Verification;
  /** Primary remote image URL. */
  image: string;
  /** Optional extra remote image URLs for the detail gallery. */
  gallery?: string[];
  imageAlt: string;
  description: string;
  /** Size run published on the live listing (verified from variants). */
  sizes: string[];
  sizesVerified: boolean;
  /** Colour options published on the live listing, when the listing has any. */
  colors?: string[];
  /** Stock is deliberately never assumed - always unconfirmed in this demo. */
  availability: "unverified";
  verification: Verification;
  /** Additional category keys this product should surface under. */
  tags: ExotixCategory[];
  /** Drop-band label used on the homepage (motorsport structure). */
  drop: string;
  /** Canonical source page on the live store. */
  sourceUrl: string;
  /** Editorial ordering for the default featured sort (lower shows first). */
  featuredRank: number;
}

/** Shared honesty note rendered wherever prices/sizes/policies appear. */
export const EXOTIX_DATA_NOTE =
  "Prices, size runs and images were read from Exotix's live catalogue feed (exotix.in) on 23 October 2026 and can change. Stock, delivery and store policies are not confirmed in this concept - message the brand to confirm before ordering.";

const SIZE_RUN = ["S", "M", "L", "XL", "XXL"];

function product(overrides: Partial<ExotixProduct> & Pick<ExotixProduct, "id" | "name" | "slug" | "code" | "category" | "price" | "image" | "imageAlt" | "description" | "featuredRank" | "drop" | "sourceUrl">): ExotixProduct {
  return {
    sizes: SIZE_RUN,
    sizesVerified: true,
    availability: "unverified",
    verification: "verified",
    priceVerification: "verified",
    tags: [],
    ...overrides,
  };
}

export const exotixProducts: ExotixProduct[] = [
  product({
    id: "exo-001",
    name: "Exotix Chinese New Year Knot Jacket",
    slug: "exotix-chinese-new-year-jacket-cny-festive-edition",
    code: "EXO-CNY-001",
    category: "jackets",
    price: 1499,
    image: exotixImages.cnyKnotJacket,
    gallery: [exotixImages.cnyKnotJacket, exotixImages.cnyKnotJacketAlt, exotixImages.cnyKnotDetail],
    imageAlt:
      "Unisex CNY knot jacket in black and navy, Tang-style frog closures",
    description:
      "The festive-edition Chinese New Year knot jacket from the live catalogue - a Tang-style silhouette with traditional frog-button closures. The live listing runs S-XXL in black, blue, cream, gray, maroon, olive, sky blue and yellow.",
    colors: ["Black", "Blue", "Cream", "Gray", "Maroon", "Olive", "Sky Blue", "Yellow"],
    tags: ["leather-jackets"],
    drop: "DROP 01 — CNY ARCHIVE",
    sourceUrl:
      "https://exotix.in/products/exotix-chinese-new-year-jacket-cny-festive-edition",
    featuredRank: 1,
  }),
  product({
    id: "exo-002",
    name: "Olive Green CNY Jacket",
    slug: "olive-green-cny-jacket-tang-style-oversized-exotix",
    code: "EXO-CNY-002",
    category: "jackets",
    price: 1499,
    image: exotixImages.oliveCny,
    gallery: [exotixImages.oliveCny, exotixImages.oliveCnyAlt],
    imageAlt:
      "Olive green Tang-style Chinese New Year jacket with frog buttons",
    description:
      "An olive-green Tang-style CNY jacket with a Mandarin collar and frog-button front, listed oversized across S-XXL on the live store.",
    tags: [],
    drop: "DROP 01 — CNY ARCHIVE",
    sourceUrl:
      "https://exotix.in/products/olive-green-cny-jacket-tang-style-oversized-exotix",
    featuredRank: 2,
  }),
  product({
    id: "exo-003",
    name: "Maroon CNY Jacket",
    slug: "maroon-cny-jacket-exotix",
    code: "EXO-CNY-003",
    category: "jackets",
    price: 1499,
    image: exotixImages.maroonCny,
    gallery: [exotixImages.maroonCny, exotixImages.maroonCnyAlt],
    imageAlt: "Maroon Chinese New Year jacket photographed on a model",
    description:
      "The maroon colourway of the Exotix CNY jacket line - festive streetwear tailoring in a deep maroon tone, listed S-XXL.",
    tags: [],
    drop: "DROP 01 — CNY ARCHIVE",
    sourceUrl: "https://exotix.in/products/maroon-cny-jacket-exotix",
    featuredRank: 3,
  }),
  product({
    id: "exo-004",
    name: "Black CNY Jacket",
    slug: "black-cny-jacket-tang-style-oversized-exotix",
    code: "EXO-CNY-004",
    category: "jackets",
    price: 1499,
    image: exotixImages.blackCny,
    gallery: [exotixImages.blackCny, exotixImages.blackCnyAlt, exotixImages.cnyKnotDetail],
    imageAlt:
      "Black Tang-style oversized Chinese New Year jacket with frog closures",
    description:
      "A black Tang-style CNY jacket with an oversized drape and frog-button front - one of the label's best-selling festive pieces on the live catalogue.",
    tags: [],
    drop: "DROP 01 — CNY ARCHIVE",
    sourceUrl:
      "https://exotix.in/products/black-cny-jacket-tang-style-oversized-exotix",
    featuredRank: 4,
  }),
  product({
    id: "exo-005",
    name: "Mustard Yellow CNY Jacket",
    slug: "mustard-yellow-cny-jacket-chinese-streetwear",
    code: "EXO-CNY-005",
    category: "jackets",
    price: 1499,
    image: exotixImages.mustardCny,
    gallery: [exotixImages.mustardCny, exotixImages.mustardCnyAlt],
    imageAlt:
      "Mustard yellow Chinese streetwear jacket with traditional knot buttons",
    description:
      "A mustard-yellow Mandarin-collar jacket from the CNY line - the brightest colourway in the festive drop, listed S-XXL.",
    tags: [],
    drop: "DROP 01 — CNY ARCHIVE",
    sourceUrl:
      "https://exotix.in/products/mustard-yellow-cny-jacket-chinese-streetwear",
    featuredRank: 5,
  }),
  product({
    id: "exo-006",
    name: "Black Ferrari Jacket",
    slug: "black-ferrari-jacket-f1-inspired-streetwear-by-exotix",
    code: "EXO-RCE-006",
    category: "jackets",
    price: 1199,
    image: exotixImages.blackFerrari,
    gallery: [exotixImages.blackFerrari, exotixImages.blackFerrariAlt, exotixImages.ferrariCloseup],
    imageAlt:
      "Black F1-inspired Ferrari racing jacket styled as streetwear",
    description:
      "A black, F1-inspired racing jacket from the Exotix motorsport line - unisex fit, listed S-XXL on the live store. Racing-team references are stylistic; this is not official team merchandise.",
    tags: ["leather-jackets"],
    drop: "DROP 02 — GRID RACING",
    sourceUrl:
      "https://exotix.in/products/black-ferrari-jacket-f1-inspired-streetwear-by-exotix",
    featuredRank: 6,
  }),
  product({
    id: "exo-007",
    name: "Embroidered Red Bull Racing Jacket",
    slug: "premium-embroidered-red-bull-racing-jacket-exotix-streetwear",
    code: "EXO-RCE-007",
    category: "jackets",
    price: 1999,
    image: exotixImages.redBull,
    gallery: [exotixImages.redBull, exotixImages.redBullAlt],
    imageAlt:
      "Premium embroidered Red Bull-inspired racing jacket in team colours",
    description:
      "An embroidered racing jacket in Red Bull team-inspired colours from the Exotix racing collection. Stylistic motorsport references only - not official team merchandise. Listed S-XXL.",
    tags: [],
    drop: "DROP 02 — GRID RACING",
    sourceUrl:
      "https://exotix.in/products/premium-embroidered-red-bull-racing-jacket-exotix-streetwear",
    featuredRank: 7,
  }),
  product({
    id: "exo-008",
    name: "Marlboro Vintage F1 Racing Jacket",
    slug: "marlboro-jacket-vintage-f1-racing-leather-exotix",
    code: "EXO-RCE-008",
    category: "leather-jackets",
    price: 2799,
    image: exotixImages.marlboro,
    gallery: [exotixImages.marlboro, exotixImages.marlboroAlt],
    imageAlt:
      "Vintage F1 racing leather jacket with red and white Marlboro-style livery",
    description:
      "A vintage F1-style racing leather jacket with red-and-white livery, categorised as a leather jacket on the live store. Stylistic retro references only. Listed S-XXL.",
    tags: ["jackets"],
    drop: "DROP 02 — GRID RACING",
    sourceUrl:
      "https://exotix.in/products/marlboro-jacket-vintage-f1-racing-leather-exotix",
    featuredRank: 8,
  }),
  product({
    id: "exo-009",
    name: "Spiderman Embroidered Hoodie",
    slug: "spiderman-embroidered-hoodie-premium-threadwork",
    code: "EXO-HDY-009",
    category: "hoodies",
    price: 1499,
    image: exotixImages.spidermanHoodie,
    gallery: [exotixImages.spidermanHoodie, exotixImages.spidermanHoodieAlt],
    imageAlt:
      "Premium embroidered Spiderman zip-up hoodie with real threadwork",
    description:
      "A premium zip-up hoodie with embroidered Spiderman threadwork, listed in black and white across S-XXL. Character artwork is the property of its respective owner.",
    colors: ["Black", "White"],
    tags: [],
    drop: "DROP 03 — GRAPHIC LAB",
    sourceUrl:
      "https://exotix.in/products/spiderman-embroidered-hoodie-premium-threadwork",
    featuredRank: 9,
  }),
  product({
    id: "exo-010",
    name: "Tribal Shadow Depth Oversized Hoodie",
    slug: "depth-hoodie-tribal-shadow-oversized-y2k-exotix",
    code: "EXO-HDY-010",
    category: "hoodies",
    price: 1199,
    image: exotixImages.tribalDepthHoodie,
    gallery: [exotixImages.tribalDepthHoodie, exotixImages.tribalDepthHoodieAlt],
    imageAlt:
      "Oversized black hoodie with a 3D puff-print tribal shadow graphic",
    description:
      "The Depth hoodie - an oversized Y2K-leaning silhouette with a 3D puff-print tribal shadow graphic. Listed S-XXL on the live store.",
    tags: [],
    drop: "DROP 03 — GRAPHIC LAB",
    sourceUrl:
      "https://exotix.in/products/depth-hoodie-tribal-shadow-oversized-y2k-exotix",
    featuredRank: 10,
  }),
  product({
    id: "exo-011",
    name: "Exotix Balaclava Hoodie",
    slug: "exotix-balaclava-hoodie-where-street-meets-statement",
    code: "EXO-HDY-011",
    category: "hoodies",
    price: 899,
    image: exotixImages.balaclavaHoodie,
    gallery: [exotixImages.balaclavaHoodie, exotixImages.balaclavaHoodieAlt],
    imageAlt:
      "Black balaclava hoodie with built-in face mask, streetwear ninja style",
    description:
      "A balaclava hoodie with a built-in face mask - the label's ninja-inspired statement piece, listed in black and white across S-XXL.",
    colors: ["Black", "White"],
    tags: [],
    drop: "DROP 03 — GRAPHIC LAB",
    sourceUrl:
      "https://exotix.in/products/exotix-balaclava-hoodie-where-street-meets-statement",
    featuredRank: 11,
  }),
  product({
    id: "exo-012",
    name: "Babe Printed Black Sweatshirt",
    slug: "babe-printed-black-sweatshirt",
    code: "EXO-SWT-012",
    category: "sweatshirts",
    price: 849,
    image: exotixImages.babeSweatshirt,
    imageAlt: "Black printed sweatshirt from the Exotix sweatshirt line",
    description:
      "A printed black sweatshirt from the Exotix everyday line. The live listing uses written size names (small through double-extra-large).",
    sizes: ["Small", "Medium", "Large", "Extra Large", "Double Extra Large"],
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl: "https://exotix.in/products/babe-printed-black-sweatshirt",
    featuredRank: 12,
  }),
  product({
    id: "exo-013",
    name: "Fine AF Crewneck Sweatshirt",
    slug: "exotix-fine-af-crewneck-sweatshirt-for-women-ultimate-softness-and-fashion",
    code: "EXO-SWT-013",
    category: "sweatshirts",
    price: 899,
    image: exotixImages.crewneckSweatshirt,
    imageAlt: "Soft crewneck sweatshirt styled casually",
    description:
      "A soft crewneck sweatshirt listed on the live store in the women's edit, available S-XXL.",
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/exotix-fine-af-crewneck-sweatshirt-for-women-ultimate-softness-and-fashion",
    featuredRank: 13,
  }),
  product({
    id: "exo-014",
    name: "Black Boxy Cropped Leather Jacket",
    slug: "black-boxy-leather-jacket-cropped-fit",
    code: "EXO-LTH-014",
    category: "leather-jackets",
    price: 1249,
    image: exotixImages.boxyLeather,
    imageAlt: "Black boxy cropped faux leather jacket",
    description:
      "A boxy, cropped faux-leather jacket with a minimal black finish. The live listing runs S-2XL.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    tags: ["jackets"],
    drop: "DROP 02 — GRID RACING",
    sourceUrl: "https://exotix.in/products/black-boxy-leather-jacket-cropped-fit",
    featuredRank: 14,
  }),
  product({
    id: "exo-015",
    name: "Gothic Cross Patch Leather Jacket",
    slug: "exotix-gothic-cross-patch-faux-leather-jacket-luxury-dark-streetwear-trucker",
    code: "EXO-LTH-015",
    category: "leather-jackets",
    price: 1999,
    image: exotixImages.gothicCrossJacket,
    imageAlt:
      "Obsidian black faux-leather trucker jacket with gothic cross patches",
    description:
      "A dark-luxury faux-leather trucker jacket with gothic cross patch applique, listed in black and white across S-2XL.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "White"],
    tags: ["jackets"],
    drop: "DROP 02 — GRID RACING",
    sourceUrl:
      "https://exotix.in/products/exotix-gothic-cross-patch-faux-leather-jacket-luxury-dark-streetwear-trucker",
    featuredRank: 15,
  }),
  product({
    id: "exo-016",
    name: "Black Cropped Leather Jacket",
    slug: "black-cropped-leather-jacket-for-men-women-exotix-streetwear",
    code: "EXO-LTH-016",
    category: "leather-jackets",
    price: 1249,
    image: exotixImages.croppedLeather,
    imageAlt: "Minimal black cropped faux leather jacket, unisex streetwear",
    description:
      "A minimal cropped faux-leather jacket cut for men and women, listed S-XXL on the live store.",
    tags: ["jackets"],
    drop: "DROP 02 — GRID RACING",
    sourceUrl:
      "https://exotix.in/products/black-cropped-leather-jacket-for-men-women-exotix-streetwear",
    featuredRank: 16,
  }),
  product({
    id: "exo-017",
    name: "Red Acid Wash Oversized T-Shirt",
    slug: "exotix-red-acid-wash-oversized-t-shirt-unisex-vintage-streetwear",
    code: "EXO-TEE-017",
    category: "t-shirts",
    price: 999,
    image: exotixImages.redAcidTee,
    imageAlt: "Red acid wash oversized unisex t-shirt",
    description:
      "A red acid-wash oversized tee from the unisex summer streetwear run, listed S-XXL.",
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/exotix-red-acid-wash-oversized-t-shirt-unisex-vintage-streetwear",
    featuredRank: 17,
  }),
  product({
    id: "exo-018",
    name: "Bottle Green Acid Wash Oversized T-Shirt",
    slug: "exotix-bottle-green-acid-wash-oversized-t-shirt-unisex-trendy-summer-wear",
    code: "EXO-TEE-018",
    category: "t-shirts",
    price: 999,
    image: exotixImages.greenAcidTee,
    imageAlt: "Bottle green acid wash oversized unisex t-shirt",
    description:
      "A bottle-green acid-wash oversized tee, unisex fit, listed S-XXL.",
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/exotix-bottle-green-acid-wash-oversized-t-shirt-unisex-trendy-summer-wear",
    featuredRank: 18,
  }),
  product({
    id: "exo-019",
    name: "Cross Printed Baggy Jeans",
    slug: "cross-printed-baggy-jeans-vintage-streetwear-straight-fit-jeans",
    code: "EXO-BTM-019",
    category: "bottoms",
    price: 1499,
    image: exotixImages.crossJeans,
    imageAlt: "Cross-printed straight-fit baggy jeans in vintage streetwear wash",
    description:
      "Straight-fit baggy jeans with a cross print and vintage wash, listed S-XXL in the bottoms line.",
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/cross-printed-baggy-jeans-vintage-streetwear-straight-fit-jeans",
    featuredRank: 19,
  }),
  product({
    id: "exo-020",
    name: "Snap Button Baggy Pant",
    slug: "baggy-fit-snap-button-baggy-pant-for-men-s",
    code: "EXO-BTM-020",
    category: "bottoms",
    price: 1299,
    image: exotixImages.snapPant,
    imageAlt: "Snap-button baggy track pant for men",
    description:
      "A snap-button baggy pant from the men's bottoms line, listed S-XXL.",
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/baggy-fit-snap-button-baggy-pant-for-men-s",
    featuredRank: 20,
  }),
  product({
    id: "exo-021",
    name: "Trust Issue Printed Baggy Pant",
    slug: "exotix-trust-issue-printed-baggy-pant-bold-streetwear-style",
    code: "EXO-BTM-021",
    category: "bottoms",
    price: 1299,
    image: exotixImages.trustIssuePant,
    imageAlt: "Trust Issue printed baggy pant in bold streetwear style",
    description:
      "A printed baggy pant with the label's Trust Issue graphic, listed S-XXL.",
    tags: [],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/exotix-trust-issue-printed-baggy-pant-bold-streetwear-style",
    featuredRank: 21,
  }),
  product({
    id: "exo-022",
    name: "Half-Zip Sweatshirt Co-ord",
    slug: "exotix-half-zip-sweatshirt-co-ord",
    code: "EXO-CRD-022",
    category: "co-ord-sets",
    price: 1699,
    image: exotixImages.halfZipCoord,
    imageAlt: "Half-zip sweatshirt co-ord set styled as a matching tracksuit",
    description:
      "A half-zip sweatshirt co-ord from the matching-set line, listed S-XXL.",
    tags: ["sweatshirts"],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl: "https://exotix.in/products/exotix-half-zip-sweatshirt-co-ord",
    featuredRank: 22,
  }),
  product({
    id: "exo-023",
    name: "Cup Sweatshirt 3-Stripes Pant Co-ord",
    slug: "cup-sweatshirt-exotix-3-strips-pant-co-ord-set-for-mens",
    code: "EXO-CRD-023",
    category: "co-ord-sets",
    price: 1599,
    image: exotixImages.cupCoord,
    imageAlt: "Cup-print sweatshirt with striped pant co-ord set for men",
    description:
      "A cup-print sweatshirt paired with a striped pant as one co-ord set. The live listing uses written size names.",
    sizes: ["Small", "Medium", "Large", "Extra Large", "Double Extra Large"],
    tags: ["sweatshirts", "bottoms"],
    drop: "DROP 04 — CORE UNIFORM",
    sourceUrl:
      "https://exotix.in/products/cup-sweatshirt-exotix-3-strips-pant-co-ord-set-for-mens",
    featuredRank: 23,
  }),
];

export const exotixProductCount = exotixProducts.length;

export function getExotixProduct(slug: string): ExotixProduct | undefined {
  return exotixProducts.find((candidate) => candidate.slug === slug);
}

/** Matches primary category plus every tag so filters surface sensibly. */
export function exotixProductMatchesCategory(
  product: ExotixProduct,
  category: ExotixCategory,
): boolean {
  return product.category === category || product.tags.includes(category);
}

export function getExotixProductsByCategory(
  category: ExotixCategory,
): ExotixProduct[] {
  return exotixProducts.filter((product) =>
    exotixProductMatchesCategory(product, category),
  );
}

export function getExotixRelatedProducts(
  product: ExotixProduct,
  limit = 4,
): ExotixProduct[] {
  const related = exotixProducts.filter((candidate) => {
    if (candidate.slug === product.slug) return false;
    return (
      candidate.category === product.category ||
      candidate.drop === product.drop ||
      candidate.tags.includes(product.category)
    );
  });
  const fallback =
    related.length >= limit
      ? related
      : exotixProducts.filter((candidate) => candidate.slug !== product.slug);
  return fallback.slice(0, limit);
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Indian currency formatting, e.g. ₹1,499. */
export function formatExotixPrice(value: number): string {
  return inr.format(value);
}
