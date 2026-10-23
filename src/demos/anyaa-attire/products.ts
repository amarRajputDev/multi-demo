/**
 * Anyaa Attire - typed product-data module for the website concept.
 *
 * DEMONSTRATION DATA. No official Anyaa Attire website or verifiable live
 * catalogue was found during research, so every price is null ("Enquire for
 * Price") and every product record is marked demo-only. The single genuine
 * brand-linked image (an August 2023 post of a yellow floral flex-cotton
 * kurti) is a historical reference only. No SKU, material claim, rating,
 * review, stock count or discount is invented here.
 *
 * Images are direct remote URLs (see ./images.ts) or CSS/SVG placeholder
 * cards - never local copies.
 */

import { anyaaImages } from "./images";
import type { AnyaaTint } from "./data";

export type AnyaaCategory =
  | "everyday-fashion"
  | "kurti-collection"
  | "floral-edits";

/** Per-record honesty flag used throughout the interface. */
export type AnyaaVerification = "verified" | "unverified" | "demo-only";

export interface AnyaaProduct {
  id: string;
  name: string;
  slug: string;
  category: AnyaaCategory;
  /** null = "Enquire for Price". Never a fabricated amount. */
  price: number | null;
  /** Remote image URL, or null to render the botanical placeholder card. */
  image: string | null;
  imageAlt: string;
  /** Placeholder tint used when image is null or fails to load. */
  tint: AnyaaTint;
  description: string;
  /** Demonstration size run - inventory is not confirmed. */
  sizes: string[];
  sizesVerified: boolean;
  /** Verification status of this product record. */
  verification: AnyaaVerification;
  /** Extra category keys this product should surface under. */
  tags: AnyaaCategory[];
  /** Historical source page, when one exists. */
  sourceUrl: string | null;
  /** Editorial ordering for the "Featured" sort (lower shows first). */
  featuredRank: number;
}

/** Shared demonstration size run - never presented as live inventory. */
export const ANYAA_DEMO_SIZES = ["XS", "S", "M", "L", "XL"];

/** Shared honesty note rendered wherever prices or sizes are displayed. */
export const ANYAA_DATA_NOTE =
  "Prices, sizes and availability shown in this concept are demonstration placeholders pending confirmation with the business.";

export const anyaaProducts: AnyaaProduct[] = [
  {
    id: "anyaa-001",
    name: "Yellow Floral Flex Cotton Kurti",
    slug: "yellow-floral-flex-cotton-kurti",
    category: "kurti-collection",
    price: null,
    image: anyaaImages.yellowFloralKurti,
    imageAlt:
      "Yellow-and-white floral flex-cotton kurti, archived from an Anyaa Attire post dated August 2023",
    tint: "ivory",
    description:
      "A yellow-and-white floral kurti in flex cotton, as posted by Anyaa Attire in August 2023. Historical reference only - current availability, sizing and pricing require confirmation with the business.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: ["floral-edits", "everyday-fashion"],
    sourceUrl:
      "https://in.pinterest.com/pin/971229475873338654/",
    featuredRank: 1,
  },
  {
    id: "anyaa-002",
    name: "Sage Embroidered Kurti",
    slug: "sage-embroidered-kurti",
    category: "kurti-collection",
    price: null,
    image: null,
    imageAlt:
      "Placeholder card for the Sage Embroidered Kurti concept entry",
    tint: "sage",
    description:
      "A soft sage kurti with delicate tonal embroidery, shown here as a concept entry. No photograph, price or stock record has been confirmed for this piece.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: ["floral-edits"],
    sourceUrl: null,
    featuredRank: 2,
  },
  {
    id: "anyaa-003",
    name: "Ivory Printed Kurti",
    slug: "ivory-printed-kurti",
    category: "kurti-collection",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Ivory Printed Kurti concept entry",
    tint: "ivory",
    description:
      "An ivory kurti with a light botanical print - a concept entry representing the brand's printed kurti direction. Details require confirmation.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: ["floral-edits", "everyday-fashion"],
    sourceUrl: null,
    featuredRank: 3,
  },
  {
    id: "anyaa-004",
    name: "Teal A-Line Kurti",
    slug: "teal-aline-kurti",
    category: "kurti-collection",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Teal A-Line Kurti concept entry",
    tint: "teal",
    description:
      "A clean A-line kurti in a deep teal tone, sketched as a concept silhouette. Fabric, sizing and pricing are unconfirmed.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: [],
    sourceUrl: null,
    featuredRank: 4,
  },
  {
    id: "anyaa-005",
    name: "Linen-Look Co-ord",
    slug: "linen-look-co-ord",
    category: "everyday-fashion",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Linen-Look Co-ord concept entry",
    tint: "mist",
    description:
      "A relaxed linen-look co-ord for everyday wear - a concept entry standing in for the brand's contemporary everyday direction.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: [],
    sourceUrl: null,
    featuredRank: 5,
  },
  {
    id: "anyaa-006",
    name: "Everyday Tunic Top",
    slug: "everyday-tunic-top",
    category: "everyday-fashion",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Everyday Tunic Top concept entry",
    tint: "sage",
    description:
      "An easy tunic top for daily wear, presented as a concept silhouette. No product photograph has been confirmed for this entry.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: [],
    sourceUrl: null,
    featuredRank: 6,
  },
  {
    id: "anyaa-007",
    name: "Relaxed Kurta Set",
    slug: "relaxed-kurta-set",
    category: "everyday-fashion",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Relaxed Kurta Set concept entry",
    tint: "teal",
    description:
      "A relaxed kurta pairing sketched for the everyday edit. Availability, sizing and pricing require confirmation with the business.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: ["kurti-collection"],
    sourceUrl: null,
    featuredRank: 7,
  },
  {
    id: "anyaa-008",
    name: "Botanical Midi Dress",
    slug: "botanical-midi-dress",
    category: "floral-edits",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Botanical Midi Dress concept entry",
    tint: "mist",
    description:
      "A botanical midi dress concept inspired by the floral language of the brand's archive. Details are unconfirmed demonstration content.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: ["everyday-fashion"],
    sourceUrl: null,
    featuredRank: 8,
  },
  {
    id: "anyaa-009",
    name: "Cream Floral Kurti",
    slug: "cream-floral-kurti",
    category: "floral-edits",
    price: null,
    image: null,
    imageAlt: "Placeholder card for the Cream Floral Kurti concept entry",
    tint: "ivory",
    description:
      "A cream floral kurti concept entry, echoing the floral flex-cotton direction seen in the brand's 2023 archive. Unconfirmed.",
    sizes: ANYAA_DEMO_SIZES,
    sizesVerified: false,
    verification: "demo-only",
    tags: ["kurti-collection"],
    sourceUrl: null,
    featuredRank: 9,
  },
];

export const anyaaProductCount = anyaaProducts.length;

export function getAnyaaProduct(slug: string): AnyaaProduct | undefined {
  return anyaaProducts.find((product) => product.slug === slug);
}

/** Matches primary category plus every tag so chips filter sensibly. */
export function anyaaProductMatchesCategory(
  product: AnyaaProduct,
  category: AnyaaCategory,
): boolean {
  return product.category === category || product.tags.includes(category);
}

export function getAnyaaProductsByCategory(
  category: AnyaaCategory,
): AnyaaProduct[] {
  return anyaaProducts.filter((product) =>
    anyaaProductMatchesCategory(product, category),
  );
}

export function getAnyaaRelatedProducts(
  product: AnyaaProduct,
  limit = 3,
): AnyaaProduct[] {
  const related = anyaaProducts.filter((candidate) => {
    if (candidate.slug === product.slug) return false;
    return (
      candidate.category === product.category ||
      candidate.tags.includes(product.category) ||
      product.tags.includes(candidate.category)
    );
  });

  const fallback =
    related.length >= limit
      ? related
      : anyaaProducts.filter((item) => item.id !== product.id);

  return fallback.slice(0, limit);
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Indian currency formatting for any verified price added later. */
export function formatAnyaaPrice(value: number): string {
  return inr.format(value);
}

/** Human price label - honest about null (enquire-for-price) products. */
export function anyaaPriceLabel(product: AnyaaProduct): string {
  return product.price === null ? "Enquire for Price" : formatAnyaaPrice(product.price);
}
