/**
 * S_Y COLLECTIONS - typed product-data module for the redesign concept.
 *
 * DEMONSTRATION DATA. Representative products and prices observed on the live
 * sycollections.shop catalogue while researching this concept. Prices can
 * change, availability is not confirmed, and no SKU, material, dimension,
 * colour variant, rating or stock claim is invented here. Verify everything
 * with the business before any commercial use.
 *
 * Images are direct remote URLs (see ./images.ts) - never local copies.
 */

import { syImages } from "./images";

export type SyCategory =
  | "everyday-kurtis"
  | "premium-cotton"
  | "kurti-pant-sets"
  | "tissue-silk"
  | "printed-kurtis"
  | "bottomwear";

/** Availability is deliberately never assumed to be "in stock". */
export type SyAvailability = "unverified" | "in-stock" | "sold-out";

export interface SyProduct {
  id: string;
  name: string;
  slug: string;
  category: SyCategory;
  /** Observed selling price in whole rupees. Editable demo data. */
  price: number;
  /** Reference (compare-at) price in whole rupees. Not a guaranteed live price. */
  referencePrice?: number;
  /** Primary remote image URL. */
  image: string;
  /** Optional extra remote image URLs for the detail gallery. */
  gallery?: string[];
  imageAlt: string;
  description: string;
  /** Demonstration sizes - inventory is not confirmed for this concept. */
  sizes: string[];
  sizesVerified: boolean;
  availability: SyAvailability;
  /** Additional category keys this product should surface under. */
  tags: SyCategory[];
  /** Canonical source page on the live store. */
  sourceUrl: string;
  /** Editorial ordering for the "Featured" sort (lower shows first). */
  featuredRank: number;
}

/**
 * The size run shown in the interface. Nothing in the source catalogue
 * confirmed live inventory, so every selector using this list is labelled as
 * demonstration functionality.
 */
export const SY_DEMO_SIZES = ["S", "M", "L", "XL", "XXL"];

/** Shared honesty note rendered wherever prices or sizes are displayed. */
export const SY_DATA_NOTE =
  "Prices and size options in this concept are demonstration data observed on the live catalogue. Confirm current pricing, sizes and availability before launch.";

export const syProducts: SyProduct[] = [
  {
    id: "sy-001",
    name: "Aline Kurtis",
    slug: "aline-kurtis",
    category: "everyday-kurtis",
    price: 399,
    referencePrice: 1299,
    image: syImages.darkFloralAline,
    imageAlt:
      "Dark floral loose-fit A-line kurti with a button-front design on a model",
    description:
      "A loose A-line silhouette with a dark floral, button-front design - an easy everyday kurti from the current catalogue.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["printed-kurtis"],
    sourceUrl: "https://sycollections.shop/products/aline-kurtis",
    featuredRank: 1,
  },
  {
    id: "sy-002",
    name: "Avaasa Aline Kurti Pant Sets",
    slug: "avaasa-aline-kurti-pant-sets",
    category: "kurti-pant-sets",
    price: 599,
    referencePrice: 1499,
    image: syImages.pinkEmbroideredSet,
    imageAlt:
      "Bright pink coordinated kurti and pant set with embroidered detailing",
    description:
      "A coordinated kurti-and-pant pairing in a bright pink tone with embroidered detailing, styled as one ready-to-wear look.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["bottomwear"],
    sourceUrl:
      "https://sycollections.shop/products/avaasa-aline-kurti-pant-sets",
    featuredRank: 4,
  },
  {
    id: "sy-003",
    name: "Avaasa Cotton Kurtis",
    slug: "avaasa-cotton-kurtis",
    category: "premium-cotton",
    price: 399,
    referencePrice: 799,
    image: syImages.pinkEmbroideredModel,
    imageAlt: "Pink embroidered kurti photographed on a model",
    description:
      "A pink embroidered kurti shown on model - part of the everyday cotton edit carried in the current catalogue.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["everyday-kurtis"],
    sourceUrl: "https://sycollections.shop/products/avaasa-cotton-kurtis",
    featuredRank: 3,
  },
  {
    id: "sy-004",
    name: "Pockets Kurtis",
    slug: "pockets-kurtis",
    category: "everyday-kurtis",
    price: 399,
    referencePrice: 999,
    image: syImages.darkPrintedRed,
    imageAlt:
      "Dark printed kurti with a red neckline and patterned body on a model",
    description:
      "A dark printed kurti with red neckline detailing and an all-over pattern - a practical everyday piece as pictured.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["printed-kurtis"],
    sourceUrl: "https://sycollections.shop/products/pockets-kurtis-54",
    featuredRank: 5,
  },
  {
    id: "sy-005",
    name: "Kurti Pant Sets",
    slug: "kurti-pant-sets",
    category: "kurti-pant-sets",
    price: 550,
    referencePrice: 1299,
    image: syImages.redFloralSet,
    gallery: [syImages.redFloralSet, syImages.redFloralSetAlt],
    imageAlt:
      "Red floral kurti top shown with its matching trousers as a coordinated outfit",
    description:
      "A cream-and-red floral top shown with matching trousers - a coordinated set built for everyday wear.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["bottomwear", "printed-kurtis"],
    sourceUrl: "https://sycollections.shop/products/kurti-pant-sets-6",
    featuredRank: 2,
  },
  {
    id: "sy-006",
    name: "Chettinad Cotton Kurtis",
    slug: "chettinad-cotton-kurtis",
    category: "premium-cotton",
    price: 399,
    referencePrice: 1299,
    image: syImages.lightGreenPrint,
    imageAlt: "Light-green kurti with a dark botanical pattern",
    description:
      "A light-green kurti with a dark botanical pattern, shown from the Chettinad cotton selection in the catalogue.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["printed-kurtis", "everyday-kurtis"],
    sourceUrl: "https://sycollections.shop/products/chettinad-cotton-kurtis-17",
    featuredRank: 6,
  },
  {
    id: "sy-007",
    name: "Hakooba Cotton Kurtis",
    slug: "hakooba-cotton-kurtis",
    category: "premium-cotton",
    price: 450,
    referencePrice: 1299,
    image: syImages.brownPrint,
    imageAlt: "Brown printed kurti with contrasting ornamental borders",
    description:
      "A brown printed kurti finished with contrasting ornamental borders along the front and hem.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["printed-kurtis"],
    sourceUrl: "https://sycollections.shop/products/hakooba-cotton-kurtis",
    featuredRank: 7,
  },
  {
    id: "sy-008",
    name: "Kalamkari Cotton Kurtis",
    slug: "kalamkari-cotton-kurtis",
    category: "printed-kurtis",
    price: 399,
    referencePrice: 1299,
    image: syImages.burgundyOnForm,
    imageAlt:
      "Burgundy floral kurti with matching bottomwear displayed on a dress form",
    description:
      "A deep burgundy floral kurti displayed with its matching bottom - a printed statement piece from the catalogue.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: ["premium-cotton", "bottomwear"],
    sourceUrl: "https://sycollections.shop/products/kalamkari-cotton-kurtis",
    featuredRank: 8,
  },
  {
    id: "sy-009",
    name: "Tissue Silk Kurtis",
    slug: "tissue-silk-kurtis",
    category: "tissue-silk",
    price: 399,
    referencePrice: 1299,
    image: syImages.navyEmbroidered,
    imageAlt:
      "Navy-blue kurti with gold-toned embroidery and decorative detailing",
    description:
      "A navy kurti with gold-toned embroidery and decorative detailing - the occasion-leaning piece of the tissue silk edit.",
    sizes: SY_DEMO_SIZES,
    sizesVerified: false,
    availability: "unverified",
    tags: [],
    sourceUrl: "https://sycollections.shop/products/tissue-silk-kurtis",
    featuredRank: 9,
  },
];

export const syProductCount = syProducts.length;

export function getSyProduct(slug: string): SyProduct | undefined {
  return syProducts.find((product) => product.slug === slug);
}

/** Matches primary category plus every tag so chips filter sensibly. */
export function syProductMatchesCategory(
  product: SyProduct,
  category: SyCategory,
): boolean {
  return product.category === category || product.tags.includes(category);
}

export function getSyProductsByCategory(category: SyCategory): SyProduct[] {
  return syProducts.filter((product) =>
    syProductMatchesCategory(product, category),
  );
}

export function getSyRelatedProducts(
  product: SyProduct,
  limit = 4,
): SyProduct[] {
  const related = syProducts.filter((candidate) => {
    if (candidate.slug === product.slug) return false;
    return (
      candidate.category === product.category ||
      candidate.tags.includes(product.category) ||
      product.tags.includes(candidate.category)
    );
  });

  const fallback =
    related.length >= limit ? related : syProducts.filter((p) => p.id !== product.id);

  return fallback.slice(0, limit);
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Indian currency formatting, e.g. ₹399. */
export function formatSyPrice(value: number): string {
  return inr.format(value);
}
