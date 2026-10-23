/**
 * Kurtis By Sakshi — brand, navigation and configuration for the concept.
 *
 * Verified: the brand trades on Instagram as @kurtis_by_sakshi (profile URL
 * supplied in the brief). Unverified third-party observations (Hopinio AI
 * analysis, marked as such in the UI): kurti / women's fashion focus, DM-based
 * ordering, all-India delivery, seven-day return/exchange, no linked official
 * website, no verified address, no published phone. Contact fields that are
 * not published stay null and render nothing.
 */

import type { SakshiCategory, Verification } from "./products";
import { sakshiProductCount } from "./products";

export const sakshiHomeHref = "/demos/kurtis-by-sakshi";

export const sakshiBrand = {
  name: "Kurtis By Sakshi",
  shortName: "Sakshi",
  /** Text wordmark — no logo image is used (see ./images.ts for reasoning). */
  announcement: "Kurtis & Women's Fashion · Enquire to Order on Instagram",
  tagline:
    "Contemporary kurtis, curated with care — browse the edit, then enquire on Instagram.",
  positionLine: "Find your everyday elegance.",
  conceptLine:
    "A calm, contemporary storefront concept for a kurti-first Instagram label.",
} as const;

export interface SakshiNavLink {
  href: string;
  label: string;
}

export const sakshiNav: SakshiNavLink[] = [
  { href: sakshiHomeHref, label: "Home" },
  { href: `${sakshiHomeHref}/collections`, label: "Collections" },
  { href: `${sakshiHomeHref}/collections/everyday-kurtis`, label: "Everyday" },
  { href: `${sakshiHomeHref}/collections/printed-kurtis`, label: "Printed" },
  { href: `${sakshiHomeHref}/collections/kurti-sets`, label: "Sets" },
  { href: `${sakshiHomeHref}/contact`, label: "Enquire" },
];

export interface SakshiCategoryMeta {
  key: SakshiCategory;
  label: string;
  blurb: string;
  tone: 1 | 2 | 3 | 4 | 5;
  href: string;
  verification: Verification;
}

/** Concept collection cards — demonstration groupings, not confirmed stock. */
export const sakshiCategories: SakshiCategoryMeta[] = [
  {
    key: "everyday-kurtis",
    label: "Everyday Kurtis",
    blurb: "Easy silhouettes for work, college and daily wear.",
    tone: 1,
    href: `${sakshiHomeHref}/collections/everyday-kurtis`,
    verification: "demo-only",
  },
  {
    key: "printed-kurtis",
    label: "Printed Kurtis",
    blurb: "Print-led pieces with colour and character.",
    tone: 3,
    href: `${sakshiHomeHref}/collections/printed-kurtis`,
    verification: "demo-only",
  },
  {
    key: "cotton-kurtis",
    label: "Cotton Kurtis",
    blurb: "Breathable cotton edits for warm days.",
    tone: 2,
    href: `${sakshiHomeHref}/collections/cotton-kurtis`,
    verification: "demo-only",
  },
  {
    key: "kurti-sets",
    label: "Kurti Sets",
    blurb: "Coordinated looks, styled to wear together.",
    tone: 4,
    href: `${sakshiHomeHref}/collections/kurti-sets`,
    verification: "demo-only",
  },
  {
    key: "occasion-kurtis",
    label: "Occasion Kurtis",
    blurb: "Dressier silhouettes for festive moments.",
    tone: 5,
    href: `${sakshiHomeHref}/collections/occasion-kurtis`,
    verification: "demo-only",
  },
];

export function getSakshiCategoryMeta(
  category: SakshiCategory,
): SakshiCategoryMeta {
  const meta = sakshiCategories.find((entry) => entry.key === category);
  if (!meta) {
    throw new Error(`Unknown kurtis-by-sakshi category: ${category}`);
  }
  return meta;
}

export interface SakshiContact {
  instagram: string;
  instagramHandle: string;
  phone: string | null;
  email: string | null;
  addressLines: string[] | null;
  orderingNote: string;
  verificationNote: string;
}

export const sakshiContact: SakshiContact = {
  instagram: "https://www.instagram.com/kurtis_by_sakshi/",
  instagramHandle: "@kurtis_by_sakshi",
  phone: null,
  email: null,
  addressLines: null,
  orderingNote:
    "Ordering happens by Instagram DM — tap below to open the profile and send your enquiry.",
  verificationNote:
    "Unverified third-party observations only: DM-based ordering, all-India delivery and a seven-day return/exchange policy are reported by a listing site and require confirmation directly with the seller. No official phone number, email or physical address is published.",
};

export const sakshiDemo = {
  disclosure:
    "Website concept by Vizo Technology. Product information, pricing, availability and business policies require confirmation.",
  footerNote: "Unofficial concept · Not the brand's official store",
  productCount: sakshiProductCount,
};

/** Showcase-card copy (also mirrored in the repo registry entry). */
export const sakshiShowcase = {
  name: "Kurtis By Sakshi",
  shortName: "Sakshi",
  tagline:
    "A premium kurti storefront in muted maroon and terracotta — elegant serif headings, refined collection cards and an enquiry-first ordering flow.",
  styleLabel: "Kurtis · Serif · Refined",
  audience: "Kurtis & ethnicwear · DM ordering",
} as const;
