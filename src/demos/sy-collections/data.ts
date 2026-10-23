/**
 * S_Y COLLECTIONS - brand, navigation and site configuration for the demo.
 *
 * Copy, links and contact details are either published by the brand on
 * sycollections.shop / Instagram, or are neutral demo copy for this redesign
 * concept. Contact details come from the brand's contact page and are pending
 * owner confirmation - they are kept here as configurable values.
 *
 * This is an unofficial redesign concept by Vizo Technology. It is not the
 * brand's official website and does not process real orders.
 */

import { syImages } from "./images";
import type { SyCategory } from "./products";
import { syProductCount } from "./products";

export const syHomeHref = "/demos/sy-collections";

export const syBrand = {
  name: "S_Y COLLECTIONS",
  shortName: "S_Y",
  logo: syImages.logo,
  /** Published announcement copy - no invented promotions. */
  announcement: "Everyday Style. Thoughtfully Priced.",
  tagline:
    "Affordable women's fashion - everyday kurtis, coordinated sets and bottomwear.",
  /** Line published by the brand on its existing storefront. */
  positionLine: "We hope you find the perfect blend of fashion in budget.",
  conceptLine: "Find the pieces you love, without overcomplicating your wardrobe.",
} as const;

export interface SyNavLink {
  href: string;
  label: string;
}

export const syNav: SyNavLink[] = [
  { href: syHomeHref, label: "Home" },
  { href: `${syHomeHref}/collections`, label: "Shop All" },
  { href: `${syHomeHref}/collections/everyday-kurtis`, label: "Kurtis" },
  { href: `${syHomeHref}/collections/premium-cotton`, label: "Premium Cotton" },
  {
    href: `${syHomeHref}/collections/kurti-pant-sets`,
    label: "Kurti-Pant Sets",
  },
  { href: `${syHomeHref}/collections/tissue-silk`, label: "Tissue Silk" },
  { href: `${syHomeHref}/collections/bottomwear`, label: "Bottomwear" },
];

export interface SyCategoryMeta {
  key: SyCategory;
  label: string;
  blurb: string;
  image: string;
  imageAlt: string;
  href: string;
}

/** Category cards on the homepage + filter labels. Images follow product mapping. */
export const syCategories: SyCategoryMeta[] = [
  {
    key: "everyday-kurtis",
    label: "Everyday Kurtis",
    blurb: "Easy silhouettes for work, college and everything in between.",
    image: syImages.darkFloralAline,
    imageAlt: "Dark floral A-line kurti styled for everyday wear",
    href: `${syHomeHref}/collections/everyday-kurtis`,
  },
  {
    key: "premium-cotton",
    label: "Premium Cotton",
    blurb: "Cotton edits with considered prints and finishes.",
    image: syImages.lightGreenPrint,
    imageAlt: "Light-green patterned cotton kurti",
    href: `${syHomeHref}/collections/premium-cotton`,
  },
  {
    key: "kurti-pant-sets",
    label: "Kurti-Pant Sets",
    blurb: "Coordinated pairings, ready to wear together.",
    image: syImages.redFloralSet,
    imageAlt: "Red floral kurti-pant set styled as a coordinated outfit",
    href: `${syHomeHref}/collections/kurti-pant-sets`,
  },
  {
    key: "tissue-silk",
    label: "Tissue Silk",
    blurb: "Occasion-leaning pieces with a dressier finish.",
    image: syImages.navyEmbroidered,
    imageAlt: "Navy embroidered kurti for occasion wear",
    href: `${syHomeHref}/collections/tissue-silk`,
  },
  {
    key: "printed-kurtis",
    label: "Printed Kurtis",
    blurb: "Kalamkari-inspired prints and bold everyday patterns.",
    image: syImages.brownPrint,
    imageAlt: "Brown printed kurti with ornamental borders",
    href: `${syHomeHref}/collections/printed-kurtis`,
  },
  {
    key: "bottomwear",
    label: "Bottomwear",
    blurb: "Trousers and pant pairings from the set collection.",
    image: syImages.redFloralSetAlt,
    imageAlt: "Cream-and-red floral top with coordinating trousers",
    href: `${syHomeHref}/collections/bottomwear`,
  },
];

export function getSyCategoryMeta(key: SyCategory): SyCategoryMeta {
  const found = syCategories.find((category) => category.key === key);
  if (!found) throw new Error(`Unknown S_Y category: ${key}`);
  return found;
}

export const syContact = {
  brandName: syBrand.name,
  phoneDisplay: "79783 10499",
  phoneHref: "+917978310499",
  email: "Shopsycollections@GMAIL.COM",
  emailHref: "mailto:Shopsycollections@GMAIL.COM",
  addressLines: ["Madanapalle", "517325, Andhra Pradesh, India"],
  instagram: "https://www.instagram.com/s_y_collections/",
  instagramHandle: "@s_y_collections",
  sourceSite: "https://sycollections.shop/",
  contactPage: "https://sycollections.shop/pages/contact",
  aboutPage: "https://sycollections.shop/pages/about-us",
  catalogueUrl: "https://sycollections.shop/collections/all",
  collectionsUrl: "https://sycollections.shop/collections",
  verificationNote:
    "Contact details as published on the brand's contact page - confirm with the business before production use.",
} as const;

export const syDemo = {
  disclosure:
    "Concept redesign by Vizo Technology. Product information, prices, sizes and availability must be confirmed before launch.",
  headerNotice: "Unofficial redesign concept",
  checkoutNoticeTitle: "This is a demonstration checkout",
  checkoutNotice:
    "No order has been placed and nothing has been charged. This redesign concept is a front-end demo only - it is not connected to the brand's store, inventory or payment systems.",
  sizeNotice:
    "Size options shown here are demonstration functionality - live inventory has not been confirmed.",
  stockNotice: "Stock and availability are not confirmed for this concept.",
} as const;

export const syInstagramTiles = [
  {
    src: syImages.redFloralSet,
    alt: "Red floral kurti-pant set from the S_Y COLLECTIONS catalogue",
  },
  {
    src: syImages.pinkEmbroideredSet,
    alt: "Bright pink coordinated outfit with embroidered detailing",
  },
  {
    src: syImages.brownPrint,
    alt: "Brown printed kurti with ornamental borders",
  },
  {
    src: syImages.redFloralSetAlt,
    alt: "Cream-and-red floral top with matching trousers",
  },
  {
    src: syImages.darkPrintedRed,
    alt: "Dark printed kurti with red neckline detailing",
  },
  {
    src: syImages.lightGreenPrint,
    alt: "Light-green kurti with a dark botanical pattern",
  },
];

export const syFooterNote = `All ${syProductCount} pieces in this concept are a representative selection of the live catalogue.`;
