/**
 * Kurtis By Sakshi — typed product data for the website concept.
 *
 * DEMONSTRATION CATALOGUE. The brand sells kurtis / women's fashion via
 * Instagram DMs (third-party observation, unverified). No public product
 * list, prices, fabric specs or size chart was documentable within the
 * research window, so:
 *   - every product entry below is demo-only;
 *   - `price` is always null ("Enquire for Price");
 *   - sizes are a clearly labelled demonstration run;
 *   - imagery is placeholder-rendered (see ./images.ts).
 * Nothing here is an invented price, stock claim or policy guarantee.
 */

export type SakshiCategory =
  | "everyday-kurtis"
  | "printed-kurtis"
  | "cotton-kurtis"
  | "kurti-sets"
  | "occasion-kurtis";

export type Verification = "verified" | "unverified" | "demo-only";

export interface SakshiProduct {
  id: string;
  /** Demo-only placeholder name pending confirmation of the live catalogue. */
  name: string;
  slug: string;
  category: SakshiCategory;
  /** Not published publicly — always null; ordering is enquiry-based. */
  price: null;
  /** Remote image URL when verified brand photography exists; null = placeholder. */
  image: string | null;
  gallery: string[] | null;
  imageAlt: string;
  /** Placeholder tone token matched to .sakshi-tone-N classes. */
  tone: 1 | 2 | 3 | 4 | 5;
  description: string;
  /** Demonstration size run — not a confirmed size chart. */
  sizes: string[];
  sizesVerified: boolean;
  /** Fabric/fit notes are demo-only unless documented. */
  details: string[];
  detailsVerification: Verification;
  featuredRank: number;
  productVerification: Verification;
}

/** Demonstration size run used across the demo; not a verified size chart. */
export const SAKSHI_DEMO_SIZES = ["S", "M", "L", "XL", "XXL"];

/** Rendered wherever prices, sizes, shipping or returns appear. */
export const SAKSHI_DATA_NOTE =
  "Data note: product names, categories, imagery and sizes in this concept are demonstration placeholders. Prices are not published publicly — enquire via Instagram DM. Delivery and return/exchange details below are unverified third-party observations and require confirmation.";

/** Short price-specific note for cards and product detail. */
export const SAKSHI_PRICE_NOTE =
  "Price not published. Enquire for current pricing, availability and sizing before ordering.";

export const sakshiProducts: SakshiProduct[] = [
  {
    id: "kbs-001",
    name: "Maroon Everyday A-Line Kurti",
    slug: "maroon-everyday-aline-kurti",
    category: "everyday-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt:
      "Placeholder card for a maroon everyday A-line kurti (demo concept)",
    tone: 1,
    description:
      "An easy A-line everyday kurti, shown here as a demonstration entry in the concept catalogue. Ask on Instagram for the current piece, fabric and price.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry — silhouette shown for concept purposes only.",
      "Fabric, length and fit to be confirmed with the seller.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 1,
    productVerification: "demo-only",
  },
  {
    id: "kbs-002",
    name: "Ivory Cotton Straight Kurti",
    slug: "ivory-cotton-straight-kurti",
    category: "cotton-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for an ivory cotton straight kurti (demo concept)",
    tone: 2,
    description:
      "A straight-cut cotton kurti concept entry in soft ivory. Cotton edits are a common staple of kurti sellers; exact fabric for this look is unconfirmed.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for the cotton edit.",
      "Fabric composition and care instructions to be confirmed.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 2,
    productVerification: "demo-only",
  },
  {
    id: "kbs-003",
    name: "Rose Floral Printed Kurti",
    slug: "rose-floral-printed-kurti",
    category: "printed-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a rose floral printed kurti (demo concept)",
    tone: 3,
    description:
      "A floral printed kurti concept entry in rose tones. Prints, placement and colourways shown here are illustrative only.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for the printed edit.",
      "Actual print and colourway to be confirmed from current posts.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 3,
    productVerification: "demo-only",
  },
  {
    id: "kbs-004",
    name: "Terracotta Festive Kurti",
    slug: "terracotta-festive-kurti",
    category: "occasion-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a terracotta festive kurti (demo concept)",
    tone: 4,
    description:
      "An occasion-leaning kurti concept entry in terracotta. Any embellishment or finish shown is illustrative of the category, not a specific listed product.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for occasion wear.",
      "Work, fabric and finish to be confirmed with the seller.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 4,
    productVerification: "demo-only",
  },
  {
    id: "kbs-005",
    name: "Ink Anarkali-Flare Kurti",
    slug: "ink-anarkali-flare-kurti",
    category: "occasion-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a deep ink flare kurti (demo concept)",
    tone: 5,
    description:
      "A flared, occasion-ready kurti concept entry in deep ink. Flare volume and length shown are for concept presentation only.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry — flare and length illustrative.",
      "Lining, can-can or dupatta inclusion, if any, to be confirmed.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 5,
    productVerification: "demo-only",
  },
  {
    id: "kbs-006",
    name: "Ochre Printed Kurti",
    slug: "ochre-printed-kurti",
    category: "printed-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for an ochre printed kurti (demo concept)",
    tone: 2,
    description:
      "An ochre-toned printed kurti concept entry. Print family and scale are illustrative of a printed everyday edit.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for the printed edit.",
      "Print and base colour to be confirmed from current stock.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 6,
    productVerification: "demo-only",
  },
  {
    id: "kbs-007",
    name: "Blush Cotton A-Line Kurti",
    slug: "blush-cotton-aline-kurti",
    category: "cotton-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a blush cotton A-line kurti (demo concept)",
    tone: 1,
    description:
      "A blush-toned cotton A-line kurti concept entry for warm-weather dressing. Fabric weight and opacity unconfirmed.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for the cotton edit.",
      "Opacity, lining and sleeve length to be confirmed.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 7,
    productVerification: "demo-only",
  },
  {
    id: "kbs-008",
    name: "Plum Kurti & Trouser Set",
    slug: "plum-kurti-trouser-set",
    category: "kurti-sets",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a plum kurti and trouser set (demo concept)",
    tone: 3,
    description:
      "A coordinated kurti-and-trouser set concept entry in plum. Coordinated sets are shown here as a category — pairing details to be confirmed.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for coordinated sets.",
      "Number of pieces and bottom fabric to be confirmed.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 8,
    productVerification: "demo-only",
  },
  {
    id: "kbs-009",
    name: "Sage Everyday Kurti",
    slug: "sage-everyday-kurti",
    category: "everyday-kurtis",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a sage everyday kurti (demo concept)",
    tone: 4,
    description:
      "A muted sage everyday kurti concept entry — a calm work-and-college silhouette for the everyday edit.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for the everyday edit.",
      "Neck, sleeve and slit details to be confirmed.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 9,
    productVerification: "demo-only",
  },
  {
    id: "kbs-010",
    name: "Wine Dupatta Kurti Set",
    slug: "wine-dupatta-kurti-set",
    category: "kurti-sets",
    price: null,
    image: null,
    gallery: null,
    imageAlt: "Placeholder card for a wine kurti set with dupatta (demo concept)",
    tone: 5,
    description:
      "A kurti set with dupatta concept entry in wine tones. Dupatta fabric and length are illustrative only.",
    sizes: SAKSHI_DEMO_SIZES,
    sizesVerified: false,
    details: [
      "Demonstration entry for set-with-dupatta looks.",
      "Dupatta material and dimensions to be confirmed.",
    ],
    detailsVerification: "demo-only",
    featuredRank: 10,
    productVerification: "demo-only",
  },
];

export const sakshiProductCount = sakshiProducts.length;

export function getSakshiProduct(slug: string): SakshiProduct | undefined {
  return sakshiProducts.find((product) => product.slug === slug);
}

export function sakshiProductsInCategory(category: SakshiCategory) {
  return sakshiProducts.filter((product) => product.category === category);
}
