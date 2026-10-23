/**
 * CIÈL / Ciel Shop — demo product catalogue.
 *
 * DEMONSTRATION DATA. Names and historical prices were observed on the
 * brand's former public catalogue (cielshop.in) and are kept here as
 * provisional reference values only. Nothing about live stock, materials,
 * measurements, size runs, ratings or discounts is invented.
 *
 * Images resolve through ./image-manifest.ts, which records the original
 * source URL for every asset and sets `localPath: null` when nothing could be
 * recovered. Products without a recovered photograph render a clearly
 * replaceable placeholder instead of an unrelated image.
 */

import { cielAssetPath } from "./image-manifest";

export type CielCategory =
  | "upper-wear"
  | "bottom-wear"
  | "co-ord-sets"
  | "one-of-one"
  | "athleisure";

export interface CielProduct {
  id: string;
  name: string;
  slug: string;
  category: CielCategory;
  /** Additional categories the piece should surface under. */
  tags?: CielCategory[];
  /** Historical catalogue price in whole rupees. Provisional reference only. */
  price: number;
  /** Local image path, or null when no authentic photograph was recovered. */
  image: string | null;
  imageAlt: string;
  /** Short, catalogue-derived description. No invented specs. */
  description: string;
  /** True when the record is demonstration data rather than confirmed stock. */
  isDemoData: true;
  /** Editorial ordering for the featured row (lower shows first). */
  featuredRank?: number;
}

export const CIEL_CATEGORIES: {
  key: CielCategory;
  label: string;
  blurb: string;
  image: string | null;
}[] = [
  {
    key: "upper-wear",
    label: "Upper Wear",
    blurb: "Printed shirts, shackets and zipper tops",
    image: cielAssetPath("gallery-1055"),
  },
  {
    key: "bottom-wear",
    label: "Bottom Wear",
    blurb: "Cargos and patchwork denim",
    image: cielAssetPath("gallery-7574"),
  },
  {
    key: "co-ord-sets",
    label: "Co-ord Sets",
    blurb: "Matched sets cut as one look",
    image: cielAssetPath("gallery-8097"),
  },
  {
    key: "one-of-one",
    label: "One of One",
    blurb: "Patchwork pieces with no repeat run",
    image: cielAssetPath("gallery-9949"),
  },
  {
    key: "athleisure",
    label: "Athleisure",
    blurb: "Archive had no confirmed athleisure pieces",
    image: cielAssetPath("gallery-3563"),
  },
];

export const CIEL_PRODUCTS: CielProduct[] = [
  {
    id: "ciel-01",
    name: "Stripped Club Shirt",
    slug: "stripped-club-shirt",
    category: "upper-wear",
    price: 1699,
    image: cielAssetPath("stripped-club-shirt"),
    imageAlt: "Stripped Club Shirt — catalogue photograph",
    description:
      "A striped club shirt from the CIÈL shirt programme. Listed in the archive at ₹1,699; fabric and fit are unconfirmed.",
    isDemoData: true,
  },
  {
    id: "ciel-02",
    name: "Breezy Embroidered Shirts",
    slug: "breezy-embroidered-shirt",
    category: "upper-wear",
    price: 1799,
    image: cielAssetPath("breezy-embroidered-shirt"),
    imageAlt: "Breezy Embroidered Shirts — embroidered shirt photographed on a model",
    description:
      "An embroidered shirt from the Breezy series — a lighter, relaxed cut intended for everyday wear.",
    isDemoData: true,
    featuredRank: 4,
  },
  {
    id: "ciel-03",
    name: "RACER – Shirts 25",
    slug: "racer-shirt-25",
    category: "upper-wear",
    price: 1799,
    image: cielAssetPath("racer-shirt-25"),
    imageAlt: "RACER Shirts 25 — catalogue photograph",
    description:
      "RACER shirt from the 2025 shirt drop, named for its motorsport-leaning print direction.",
    isDemoData: true,
  },
  {
    id: "ciel-04",
    name: "Zipper LA Familia Printed Shacket",
    slug: "la-familia-zipper-shacket",
    category: "upper-wear",
    price: 2249,
    image: cielAssetPath("la-familia-zipper-shacket"),
    imageAlt: "Zipper LA Familia Printed Shacket — catalogue photograph",
    description:
      "A zipped shacket in a printed LA Familia graphic — the heaviest piece in the archive's shirt range.",
    isDemoData: true,
    featuredRank: 5,
  },
  {
    id: "ciel-05",
    name: "Henley PU Leather Zipper Shirt",
    slug: "henley-pu-leather-zipper-shirt",
    category: "upper-wear",
    price: 1549,
    image: cielAssetPath("henley-pu-leather-shirt"),
    imageAlt: "Henley PU Leather Zipper Shirt — leather-look zipper shirt",
    description:
      "A henley-collar shirt finished in a PU leather look with a front zip. Surface finish is described by name only.",
    isDemoData: true,
    featuredRank: 2,
  },
  {
    id: "ciel-06",
    name: "Gothic – Zipper Shirt",
    slug: "gothic-zipper-shirt",
    category: "upper-wear",
    price: 1629,
    image: cielAssetPath("gothic-zipper-shirt"),
    imageAlt: "Gothic Zipper Shirt — catalogue photograph",
    description:
      "Zipper shirt from the Gothic line, part of the label's darker graphic series.",
    isDemoData: true,
  },
  {
    id: "ciel-07",
    name: "Rebel Strap Cargo",
    slug: "rebel-strap-cargo",
    category: "bottom-wear",
    price: 2599,
    image: cielAssetPath("rebel-strap-cargo"),
    imageAlt: "Rebel Strap Cargo — catalogue photograph",
    description:
      "Cargo trousers with strap detailing, listed in the archive at ₹2,599. Pocket count and fabric are unconfirmed.",
    isDemoData: true,
    featuredRank: 3,
  },
  {
    id: "ciel-08",
    name: "Punk Wave Patch Denims",
    slug: "punk-wave-patch-denims",
    category: "bottom-wear",
    tags: ["one-of-one"],
    price: 2699,
    image: cielAssetPath("punk-wave-patch-denims"),
    imageAlt: "Punk Wave Patch Denims — catalogue photograph",
    description:
      "Patchwork denim built from mixed panels, listed under the label's patch denim programme.",
    isDemoData: true,
  },
  {
    id: "ciel-09",
    name: "2 Zipper Pants",
    slug: "2-zipper-pants",
    category: "bottom-wear",
    price: 2099,
    image: cielAssetPath("two-zipper-pants"),
    imageAlt: "2 Zipper Pants — utility trousers with two zips",
    description:
      "Utility trousers with two zip details. The name is the archive's own product title.",
    isDemoData: true,
  },
  {
    id: "ciel-10",
    name: "Gothic Patchwork Denims",
    slug: "gothic-patchwork-denims",
    category: "bottom-wear",
    tags: ["one-of-one"],
    price: 2499,
    image: cielAssetPath("gothic-patchwork-denims"),
    imageAlt: "Gothic Patchwork Denims — patchwork denim photographed on a model",
    description:
      "Gothic-line patchwork denim, assembled from contrasting panels by the label's studio.",
    isDemoData: true,
    featuredRank: 1,
  },
  {
    id: "ciel-11",
    name: "Camo Co-ord Set",
    slug: "camo-coord-set",
    category: "co-ord-sets",
    price: 2799,
    image: cielAssetPath("camo-coord-set"),
    imageAlt: "Camo Co-ord Set — camouflage co-ord photographed on a model",
    description:
      "A camouflage co-ord set sold as a matched look — shirt and bottom together.",
    isDemoData: true,
    featuredRank: 6,
  },
  {
    id: "ciel-12",
    name: "Denim Co-ord Set",
    slug: "denim-coord-set",
    category: "co-ord-sets",
    price: 2499,
    image: cielAssetPath("denim-coord-set"),
    imageAlt: "Denim Co-ord Set — catalogue photograph",
    description:
      "A denim co-ord set from the label's coordinated range, listed at ₹2,499 in the archive.",
    isDemoData: true,
  },
  {
    id: "ciel-13",
    name: "Cièl Patchwork Denims",
    slug: "ciel-patchwork-denims",
    category: "bottom-wear",
    tags: ["one-of-one"],
    price: 2499,
    image: cielAssetPath("ciel-patchwork-denims"),
    imageAlt: "Cièl Patchwork Denims — patchwork denim photographed on a model",
    description:
      "The label's signature Cièl patchwork denim — mixed denim panels with visible stitching.",
    isDemoData: true,
  },
];

/** Demonstration size run shown on product pages; inventory is unconfirmed. */
export const CIEL_DEMO_SIZES = ["S", "M", "L", "XL", "XXL"];

export const CIEL_PRICE_NOTE =
  "Historical catalogue prices, shown for reference only. Prices, sizes and availability require confirmation.";

export function getCielProduct(slug: string): CielProduct | undefined {
  return CIEL_PRODUCTS.find((product) => product.slug === slug);
}

export function productsInCategory(category: CielCategory): CielProduct[] {
  return CIEL_PRODUCTS.filter(
    (product) => product.category === category || product.tags?.includes(category),
  );
}

export function relatedProducts(product: CielProduct, limit = 3): CielProduct[] {
  const sameCategory = CIEL_PRODUCTS.filter(
    (candidate) =>
      candidate.slug !== product.slug &&
      (candidate.category === product.category ||
        candidate.tags?.includes(product.category) ||
        product.tags?.includes(candidate.category)),
  );
  const rest = CIEL_PRODUCTS.filter(
    (candidate) =>
      candidate.slug !== product.slug && !sameCategory.includes(candidate),
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export const featuredProducts = CIEL_PRODUCTS.filter(
  (product) => product.featuredRank !== undefined,
).sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));

export const newArrivals = [...CIEL_PRODUCTS].slice(1, 5);

export function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}
