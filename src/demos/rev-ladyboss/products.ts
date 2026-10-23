/**
 * Rev Ladyboss - typed product data for the concept.
 *
 * DEMONSTRATION DATA. The @rev_ladyboss Instagram account is an
 * Instagram-first fashion seller with no standalone website. Product names,
 * prices, stock and sizing were NOT accessible from the account during
 * research for this concept, so every product below is a clearly labelled
 * demo-only entry built from the seller's own public content themes
 * (tunics, cotton maxis, jeans - per the account's post captions/hashtags).
 *
 * Every price is intentionally `null` ("Enquire for Price"). No price, stock,
 * discount, rating, delivery window or material claim is invented here.
 * Verify everything with the business before any commercial use.
 */

export type RevCategory = "tunics" | "cotton-maxis" | "jeans";

/** Availability is deliberately never assumed to be "in stock". */
export type RevAvailability = "unverified";

/** How the product tile is rendered - no product photography was available. */
export type RevTileTone = 1 | 2 | 3 | 4;

export interface RevProduct {
  id: string;
  /** Demo-only descriptive label, not a confirmed catalogue name. */
  name: string;
  slug: string;
  category: RevCategory;
  /** Always null in this concept - prices were not published in an accessible form. */
  price: number | null;
  image: string;
  imageAlt: string;
  /** Optional extra remote image URLs for the detail gallery (none available yet). */
  gallery?: string[];
  /** Editorial descriptor used on cards and detail pages. */
  description: string;
  /** Demonstration sizes - the account describes sizing as bust-based. */
  sizes: string[];
  sizesVerified: boolean;
  availability: RevAvailability;
  tags: RevCategory[];
  /** Proof of verification for each data field group. */
  verification: "demo-only";
  tone: RevTileTone;
  featuredRank: number;
}

/** Bust-based sizing was referenced in the account's public ordering reel - the run below is demonstration functionality only. */
export const REV_DEMO_SIZES = ["S", "M", "L", "XL"];

/** Shared honesty note rendered wherever prices, sizes or promotions appear. */
export const REV_DATA_NOTE =
  "Product names, sizes and pricing in this concept are demonstration data. The @rev_ladyboss account was not accessible for a live catalogue during research, so every piece is shown as 'Enquire for Price'. Confirm current products, sizing, availability and policies directly with the business before any purchase.";

export const revProducts: RevProduct[] = [
  {
    id: "rev-001",
    name: "Everyday Cotton Tunic",
    slug: "everyday-cotton-tunic",
    category: "tunics",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Everyday Cotton Tunic demonstration entry",
    description:
      "A relaxed cotton tunic silhouette - demo entry based on the tunics shared on the @rev_ladyboss account. Exact fabric, colour and fit must be confirmed with the seller.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    verification: "demo-only",
    tone: 1,
    featuredRank: 1,
  },
  {
    id: "rev-002",
    name: "Cotton Maxi - Long Line",
    slug: "cotton-maxi-long-line",
    category: "cotton-maxis",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Cotton Maxi - Long Line demonstration entry",
    description:
      "A full-length cotton maxi concept drawn from the account's cotton-maxi posts. Length, print and sizing are demonstration details pending confirmation.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["tunics"],
    verification: "demo-only",
    tone: 2,
    featuredRank: 2,
  },
  {
    id: "rev-003",
    name: "Straight-Fit Everyday Denim",
    slug: "straight-fit-everyday-denim",
    category: "jeans",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Straight-Fit Everyday Denim demonstration entry",
    description:
      "A straight-fit denim entry referencing the jeans featured on the account. Wash, rise and inseam are not confirmed.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    verification: "demo-only",
    tone: 3,
    featuredRank: 3,
  },
  {
    id: "rev-004",
    name: "Printed Tunic Top",
    slug: "printed-tunic-top",
    category: "tunics",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Printed Tunic Top demonstration entry",
    description:
      "A printed tunic-top concept in the tunics edit. Print placement, sleeve length and fabric are demonstration details only.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    verification: "demo-only",
    tone: 4,
    featuredRank: 4,
  },
  {
    id: "rev-005",
    name: "Tiered Cotton Maxi",
    slug: "tiered-cotton-maxi",
    category: "cotton-maxis",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Tiered Cotton Maxi demonstration entry",
    description:
      "A tiered cotton-maxi silhouette from the maxi collection theme. Tier count, flare and colourway are not confirmed.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    verification: "demo-only",
    tone: 1,
    featuredRank: 5,
  },
  {
    id: "rev-006",
    name: "Tunic & Denim Pairing",
    slug: "tunic-and-denim-pairing",
    category: "tunics",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Tunic and Denim Pairing demonstration entry",
    description:
      "A styled pairing concept of a tunic top with straight denim - an editorial combination, not a confirmed bundle.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["jeans"],
    verification: "demo-only",
    tone: 2,
    featuredRank: 6,
  },
  {
    id: "rev-007",
    name: "Relaxed Wide Denim",
    slug: "relaxed-wide-denim",
    category: "jeans",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Relaxed Wide Denim demonstration entry",
    description:
      "A relaxed wide-leg denim entry for the jeans collection. Rise, hem and wash details are demonstration placeholders.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    verification: "demo-only",
    tone: 3,
    featuredRank: 7,
  },
  {
    id: "rev-008",
    name: "Cotton Maxi - Wrap Style",
    slug: "cotton-maxi-wrap-style",
    category: "cotton-maxis",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Cotton Maxi - Wrap Style demonstration entry",
    description:
      "A wrap-style cotton-maxi concept. Closure, lining and exact length must be confirmed with the business.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    verification: "demo-only",
    tone: 4,
    featuredRank: 8,
  },
  {
    id: "rev-009",
    name: "Cropped Everyday Tunic",
    slug: "cropped-everyday-tunic",
    category: "tunics",
    price: null,
    image: "",
    imageAlt:
      "Typographic placeholder tile for the Cropped Everyday Tunic demonstration entry",
    description:
      "A shorter everyday tunic concept rounding out the tunics edit. Hem length and sleeve finish are demonstration details.",
    sizes: REV_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["cotton-maxis"],
    verification: "demo-only",
    tone: 1,
    featuredRank: 9,
  },
];

export const revProductCount = revProducts.length;

export function getRevProduct(slug: string): RevProduct | undefined {
  return revProducts.find((product) => product.slug === slug);
}

export function revProductMatchesCategory(
  product: RevProduct,
  category: RevCategory,
): boolean {
  return product.category === category || product.tags.includes(category);
}

export function getRevProductsByCategory(category: RevCategory): RevProduct[] {
  return revProducts.filter((product) =>
    revProductMatchesCategory(product, category),
  );
}

export function getRevRelatedProducts(
  product: RevProduct,
  limit = 3,
): RevProduct[] {
  const related = revProducts.filter(
    (candidate) =>
      candidate.slug !== product.slug &&
      (candidate.category === product.category ||
        candidate.tags.includes(product.category) ||
        product.tags.includes(candidate.category)),
  );
  const pool =
    related.length >= limit
      ? related
      : revProducts.filter((candidate) => candidate.id !== product.id);
  return pool.slice(0, limit);
}

/** Enquiry-only concept: nothing has a price, so this renders "Enquire for Price". */
export function formatRevPrice(value: number | null): string {
  if (value === null) return "Enquire for Price";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
