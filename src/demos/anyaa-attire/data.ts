/**
 * Anyaa Attire - brand, navigation and site configuration for the concept.
 *
 * This is an unofficial website concept by Vizo Technology. It is not the
 * brand's official website and does not process real orders.
 *
 * Contact policy: no phone number, email or street address for Anyaa Attire
 * could be verified during research, so every such field is null and is never
 * rendered. Only the brand's public Instagram profile is linked.
 */

import { anyaaImages } from "./images";
import type { AnyaaCategory } from "./products";
import { anyaaProductCount } from "./products";

export const anyaaHomeHref = "/demos/anyaa-attire";

export const anyaaBrand = {
  name: "ANYAA ATTIRE",
  shortName: "Anyaa",
  logo: anyaaImages.logo,
  announcement: "Contemporary Women's Fashion — Concept Store",
  tagline:
    "Contemporary women's kurtis and everyday wear — a soft teal and ivory boutique with delicate editorial detail.",
  positionLine: "Thoughtful silhouettes for the everyday wardrobe.",
  conceptLine:
    "A quiet, botanical boutique experience - browse the edit, save your favourites, enquire for details.",
} as const;

export interface AnyaaNavLink {
  href: string;
  label: string;
}

export const anyaaNav: AnyaaNavLink[] = [
  { href: anyaaHomeHref, label: "Home" },
  { href: `${anyaaHomeHref}/collections`, label: "Shop All" },
  { href: `${anyaaHomeHref}/collections/everyday-fashion`, label: "Everyday" },
  { href: `${anyaaHomeHref}/collections/kurti-collection`, label: "Kurtis" },
  { href: `${anyaaHomeHref}/collections/floral-edits`, label: "Floral Edits" },
  { href: `${anyaaHomeHref}/#enquire`, label: "Enquire" },
];

export interface AnyaaCategoryMeta {
  key: AnyaaCategory;
  label: string;
  blurb: string;
  href: string;
  /** Placeholder tint used when a category has no genuine photograph. */
  tint: AnyaaTint;
}

export type AnyaaTint = "sage" | "teal" | "mist" | "ivory";

export const anyaaCategories: AnyaaCategoryMeta[] = [
  {
    key: "everyday-fashion",
    label: "Everyday Fashion",
    blurb:
      "Easy, contemporary pieces for work, college and unhurried weekends.",
    href: `${anyaaHomeHref}/collections/everyday-fashion`,
    tint: "sage",
  },
  {
    key: "kurti-collection",
    label: "Kurti Collection",
    blurb:
      "The brand's signature category - kurtis in soft cottons and botanical prints.",
    href: `${anyaaHomeHref}/collections/kurti-collection`,
    tint: "teal",
  },
  {
    key: "floral-edits",
    label: "Floral Edits",
    blurb:
      "Floral-led pieces, inspired by the brand's own posted looks over the years.",
    href: `${anyaaHomeHref}/collections/floral-edits`,
    tint: "mist",
  },
];

export function getAnyaaCategoryMeta(key: AnyaaCategory): AnyaaCategoryMeta {
  const found = anyaaCategories.find((category) => category.key === key);
  if (!found) throw new Error(`Unknown Anyaa Attire category: ${key}`);
  return found;
}

export interface AnyaaContact {
  brandName: string;
  /** Unverified - kept null and never rendered. */
  phoneDisplay: string | null;
  phoneHref: string | null;
  /** Unverified - kept null and never rendered. */
  email: string | null;
  emailHref: string | null;
  /** Unverified - kept null and never rendered. */
  addressLines: string[] | null;
  instagram: string;
  instagramHandle: string;
  /** The only verified public profile found during research. */
  verification: "verified" | "unverified";
}

export const anyaaContact: AnyaaContact = {
  brandName: anyaaBrand.name,
  phoneDisplay: null,
  phoneHref: null,
  email: null,
  emailHref: null,
  addressLines: null,
  instagram: "https://www.instagram.com/anyaa_attire/",
  instagramHandle: "@anyaa_attire",
  verification: "verified",
};

export const anyaaDemo = {
  disclosure:
    "Website concept by Vizo Technology. Product information, pricing, availability and business policies require confirmation.",
  headerNotice: "Unofficial website concept",
  sizeNotice:
    "Size options here are demonstration selectors - live inventory has not been confirmed.",
  stockNotice:
    "Stock and availability are not confirmed for this concept.",
  checkoutNoticeTitle: "This is a demonstration summary",
  checkoutNotice:
    "No order has been placed and nothing has been charged. This bag is front-end demonstration state only - it is not connected to any store, inventory or payment system.",
} as const;

/** Shared honesty note rendered wherever prices or sizes appear. */
export const anyaaDataNote: string =
  "Prices, sizes and availability shown in this concept are demonstration placeholders pending confirmation with the business.";

export interface AnyaaInstagramTile {
  /** null renders the botanical placeholder tile (no genuine photo found). */
  src: string | null;
  alt: string;
  caption: string;
  tint: AnyaaTint;
}

export const anyaaInstagramTiles: AnyaaInstagramTile[] = [
  {
    src: anyaaImages.yellowFloralKurti,
    alt: "Yellow-and-white floral flex-cotton kurti posted by Anyaa Attire in August 2023",
    caption: "Floral flex-cotton kurti — August 2023 archive",
    tint: "ivory",
  },
  {
    src: null,
    alt: "Concept placeholder tile for an Anyaa Attire everyday look",
    caption: "Everyday edit — concept tile",
    tint: "sage",
  },
  {
    src: null,
    alt: "Concept placeholder tile for an Anyaa Attire kurti look",
    caption: "Kurti edit — concept tile",
    tint: "teal",
  },
  {
    src: null,
    alt: "Concept placeholder tile for an Anyaa Attire floral look",
    caption: "Floral edit — concept tile",
    tint: "mist",
  },
  {
    src: null,
    alt: "Concept placeholder tile for an Anyaa Attire studio flat-lay",
    caption: "Studio flat-lay — concept tile",
    tint: "ivory",
  },
  {
    src: null,
    alt: "Concept placeholder tile for an Anyaa Attire detail shot",
    caption: "Detail study — concept tile",
    tint: "sage",
  },
];

export const anyaaFooterNote = `All ${anyaaProductCount} pieces in this concept are representative demonstration entries - not a live catalogue.`;
