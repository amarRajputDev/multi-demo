/**
 * KHALEEZI DESIGNS — demo catalogue.
 *
 * DEMONSTRATION DATA. Category names follow the label's public profile
 * (cotton dupatta sets, straight pants, size-inclusive ethnicwear). No price
 * is published publicly, so every entry is enquiry-only — no price is
 * invented. No material specification beyond "pure cotton dupatta set" as
 * described in the label's own post is claimed, and no stock, review or
 * discount data exists here.
 */

export type KhaleeziCategory =
  | "dupatta-sets"
  | "cotton-sets"
  | "straight-pants"
  | "size-inclusive";

export interface KhaleeziProduct {
  id: string;
  name: string;
  slug: string;
  category: KhaleeziCategory;
  tags?: KhaleeziCategory[];
  /** Always null: the label does not publish prices publicly. */
  price: number | null;
  /** Descriptive demo label for the placeholder artwork. */
  tone: 1 | 2 | 3 | 4 | 5;
  description: string;
  /** Documented size range on the label's public post: small to 7XL. */
  sizes: string[];
  fabric: string | null;
  isDemoData: true;
}

export const KHALEEZI_SIZES = [
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "7XL",
];

export const KHALEEZI_CATEGORIES: {
  key: KhaleeziCategory;
  label: string;
  blurb: string;
}[] = [
  {
    key: "dupatta-sets",
    label: "Dupatta Sets",
    blurb: "Pure cotton sets with a soft cotton dupatta",
  },
  {
    key: "cotton-sets",
    label: "Cotton Sets",
    blurb: "Everyday cotton ethnicwear, cut generously",
  },
  {
    key: "straight-pants",
    label: "Straight Pants",
    blurb: "Straight-leg bottoms to pair with every set",
  },
  {
    key: "size-inclusive",
    label: "Size Inclusive",
    blurb: "Small to 7XL across the collection",
  },
];

export const KHALEEZI_PRODUCTS: KhaleeziProduct[] = [
  {
    id: "kh-01",
    name: "Ivory Cotton Dupatta Set",
    slug: "ivory-cotton-dupatta-set",
    category: "dupatta-sets",
    tags: ["size-inclusive"],
    price: null,
    tone: 1,
    description:
      "A pure cotton dupatta set in ivory, paired with a soft cotton dupatta. Cut as a straight set; confirm the exact fit and finish with the label.",
    sizes: KHALEEZI_SIZES,
    fabric: "Pure cotton (as described by the label)",
    isDemoData: true,
  },
  {
    id: "kh-02",
    name: "Rose Cotton Dupatta Set",
    slug: "rose-cotton-dupatta-set",
    category: "dupatta-sets",
    tags: ["size-inclusive"],
    price: null,
    tone: 2,
    description:
      "Rose-toned cotton set with a coordinated dupatta. The label's public posts describe pure cotton dupatta sets in a wide size run.",
    sizes: KHALEEZI_SIZES,
    fabric: "Pure cotton (as described by the label)",
    isDemoData: true,
  },
  {
    id: "kh-03",
    name: "Sand Straight Pants",
    slug: "sand-straight-pants",
    category: "straight-pants",
    tags: ["size-inclusive"],
    price: null,
    tone: 3,
    description:
      "Straight-leg cotton pants in sand, styled to pair with the label's dupatta sets. Waist and length are not published — request them in your enquiry.",
    sizes: KHALEEZI_SIZES,
    fabric: null,
    isDemoData: true,
  },
  {
    id: "kh-04",
    name: "Ink Straight Pants",
    slug: "ink-straight-pants",
    category: "straight-pants",
    tags: ["size-inclusive"],
    price: null,
    tone: 4,
    description:
      "Ink-toned straight pants from the label's everyday range. Sizing runs small to 7XL as stated on the public profile.",
    sizes: KHALEEZI_SIZES,
    fabric: null,
    isDemoData: true,
  },
  {
    id: "kh-05",
    name: "Sage Cotton Kurta Set",
    slug: "sage-cotton-kurta-set",
    category: "cotton-sets",
    tags: ["size-inclusive"],
    price: null,
    tone: 5,
    description:
      "A sage cotton kurta set conceived for the label's everyday ethnicwear line. Details beyond the cotton description are unconfirmed.",
    sizes: KHALEEZI_SIZES,
    fabric: "Cotton",
    isDemoData: true,
  },
  {
    id: "kh-06",
    name: "Cream Everyday Cotton Set",
    slug: "cream-everyday-cotton-set",
    category: "cotton-sets",
    tags: ["size-inclusive"],
    price: null,
    tone: 1,
    description:
      "Cream two-piece cotton set for repeat wear. The label orders over WhatsApp — this concept mirrors that enquiry-led flow.",
    sizes: KHALEEZI_SIZES,
    fabric: "Cotton",
    isDemoData: true,
  },
  {
    id: "kh-07",
    name: "Plum Ajrakh Dupatta Set",
    slug: "plum-ajrakh-dupatta-set",
    category: "dupatta-sets",
    tags: ["size-inclusive"],
    price: null,
    tone: 4,
    description:
      "A plum dupatta set inspired by block-printed Ajrakh patterning. Print method and origin are not confirmed by the label.",
    sizes: KHALEEZI_SIZES,
    fabric: "Pure cotton (as described by the label)",
    isDemoData: true,
  },
  {
    id: "kh-08",
    name: "Muted Teal Cotton Set",
    slug: "muted-teal-cotton-set",
    category: "cotton-sets",
    tags: ["size-inclusive"],
    price: null,
    tone: 3,
    description:
      "Muted teal cotton set with a relaxed straight silhouette. Enquire for the current size chart and available colourways.",
    sizes: KHALEEZI_SIZES,
    fabric: "Cotton",
    isDemoData: true,
  },
];

export const KHALEEZI_DATA_NOTE =
  "Demo catalogue. The label publishes no prices, so every piece is enquiry-only. Sizes follow the publicly stated small-to-7XL range; confirm before ordering.";

export function getKhaleeziProduct(slug: string): KhaleeziProduct | undefined {
  return KHALEEZI_PRODUCTS.find((product) => product.slug === slug);
}

export function khaleeziProductsByCategory(
  category: KhaleeziCategory,
): KhaleeziProduct[] {
  return KHALEEZI_PRODUCTS.filter(
    (product) =>
      product.category === category || product.tags?.includes(category),
  );
}

export function khaleeziRelated(product: KhaleeziProduct, limit = 3) {
  return KHALEEZI_PRODUCTS.filter(
    (candidate) => candidate.slug !== product.slug,
  ).slice(0, limit);
}

export const featuredKhaleezi = KHALEEZI_PRODUCTS.slice(0, 3);
