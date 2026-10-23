/**
 * Rev Ladyboss - brand, navigation and site configuration for the concept.
 *
 * Verified: the business trades as "Lady Boss" on Instagram (@rev_ladyboss),
 * is a fashion/apparel seller, lists a public contact channel in its profile,
 * takes orders via Instagram DM, and has no standalone website.
 * Unverified third-party observations: free shipping when buying three items
 * and a fast-delivery claim - both rendered only as historical/unverified
 * notes, never as live promotions. No phone number, email address, physical
 * address, COD service, stock state or delivery guarantee is published here.
 *
 * This is an unofficial concept by Vizo Technology. It is not the brand's
 * official website and does not process real orders.
 */

import { revImages } from "./images";
import type { RevCategory } from "./products";
import {
  revProductCount,
  revProducts,
  revProductMatchesCategory,
} from "./products";

export const revHomeHref = "/demos/rev-ladyboss";

export const revBrand = {
  name: "Rev Ladyboss",
  shortName: "Ladyboss",
  /** Account-facing monogram used in editorial headings. */
  monogram: "LB",
  logo: revImages.logo,
  announcement: "Instagram-first fashion · Orders by DM",
  tagline:
    "Contemporary womenswear - tunics, cotton maxis and denim, sold directly through Instagram.",
  conceptLine:
    "A storefront concept for a social-first boutique: bold collection headings, editorial grids and an enquiry-led bag.",
  /** Sourced from the account's own public ordering caption. */
  orderLine: "Screenshot the piece you love and send it in a DM to order.",
} as const;

export interface RevNavLink {
  href: string;
  label: string;
}

export const revNav: RevNavLink[] = [
  { href: revHomeHref, label: "Home" },
  { href: `${revHomeHref}/collections`, label: "Shop All" },
  { href: `${revHomeHref}/collections/tunics`, label: "Tunics" },
  { href: `${revHomeHref}/collections/cotton-maxis`, label: "Cotton Maxis" },
  { href: `${revHomeHref}/collections/jeans`, label: "Denim" },
  { href: `${revHomeHref}/contact`, label: "Contact" },
];

/** Numbered lookbook index used by the hero and collection nav. */
export interface RevLookbookEntry {
  index: string;
  key: RevCategory;
  label: string;
  blurb: string;
  href: string;
}

export const revLookbook: RevLookbookEntry[] = [
  {
    index: "01",
    key: "tunics",
    label: "Tunics",
    blurb: "Relaxed cotton tops and tunic silhouettes for everyday wear.",
    href: `${revHomeHref}/collections/tunics`,
  },
  {
    index: "02",
    key: "cotton-maxis",
    label: "Cotton Maxis",
    blurb: "Full-length cotton maxis - the edit most featured on the feed.",
    href: `${revHomeHref}/collections/cotton-maxis`,
  },
  {
    index: "03",
    key: "jeans",
    label: "Denim",
    blurb: "Straight and relaxed jeans styled with the tunic collection.",
    href: `${revHomeHref}/collections/jeans`,
  },
];

export interface RevCategoryMeta extends RevLookbookEntry {
  productCount: number;
}

export const revCategories: RevCategoryMeta[] = revLookbook.map((entry) => ({
  ...entry,
  productCount: revProducts.filter((product) =>
    revProductMatchesCategory(product, entry.key),
  ).length,
}));

export function getRevCategoryMeta(key: RevCategory): RevCategoryMeta {
  const found = revCategories.find((category) => category.key === key);
  if (!found) throw new Error(`Unknown Rev Ladyboss category: ${key}`);
  return found;
}

export const revContact = {
  brandName: revBrand.name,
  instagram: "https://www.instagram.com/rev_ladyboss/",
  instagramHandle: "@rev_ladyboss",
  /** Ordering channel observed on the account (DM) - no phone/email published in this concept. */
  orderChannel: "Instagram direct message",
  phoneDisplay: null,
  phoneHref: null,
  email: null,
  addressLines: null,
  verificationNote:
    "The only contact channel confirmed for this concept is the public Instagram account @rev_ladyboss. No phone number, email address or physical address is published here - request current details directly from the account.",
} as const;

export const revDemo = {
  disclosure:
    "Unofficial website concept by Vizo Technology. Product names, images, prices and availability are demonstration data pending confirmation with the business.",
  headerNotice: "Unofficial website concept",
  sizeNotice:
    "Size options here are demonstration functionality. The account describes sizing as bust-based - confirm your size directly with the seller.",
  stockNotice: "Stock and availability are not confirmed for this concept.",
  orderNotice:
    "This bag is a front-end demonstration. Nothing is charged and no order is placed - real orders happen through an Instagram DM to @rev_ladyboss.",
  /** Unverified/historical observation - never presented as a live promotion. */
  shippingHistoryNote:
    "Historical note (unverified): third-party observations of this account mention a free-shipping offer when buying three items. This is NOT a current promotion on this concept - confirm any shipping terms directly with the business.",
  deliveryHistoryNote:
    "Historical note (unverified): third-party observations mention a fast-delivery claim. No delivery timeframe is guaranteed here - confirm with the seller.",
  codNote:
    "Cash on delivery has been reported as unavailable for this business. Confirm the current payment methods directly with the seller.",
} as const;

export const revInstagramTiles = [
  { label: "Tunics", caption: "From the feed - tunic edits" },
  { label: "Cotton Maxis", caption: "From the feed - maxi collections" },
  { label: "Denim", caption: "From the feed - jeans styling" },
  { label: "Styled", caption: "From the feed - pairings" },
  { label: "New", caption: "From the feed - new drops" },
  { label: "DM", caption: "Order by direct message" },
];

export const revFooterNote = `All ${revProductCount} pieces in this concept are demonstration entries, not confirmed live inventory.`;
