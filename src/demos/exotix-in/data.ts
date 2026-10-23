/**
 * Exotix In - brand, navigation and site configuration for the demo.
 *
 * Copy, links and contact details are taken from the brand's own public pages
 * (exotix.in, exotix.in/pages/contact, linktr.ee/exotix.in) and are kept here
 * as configurable values pending owner confirmation. This is an unofficial
 * redesign concept by Vizo Technology - it is not the brand's official store.
 */

import { exotixImages } from "./images";
import type { ExotixCategory } from "./products";
import { exotixProductCount } from "./products";

export const exotixHomeHref = "/demos/exotix-in";

export const exotixBrand = {
  name: "EXOTIX IN",
  shortName: "Exotix",
  announcement: "STREETWEAR · VINTAGE · MOTORSPORT-INSPIRED — MUMBAI",
  tagline:
    "Gen-Z streetwear out of Mumbai - vintage cuts, motorsport references and oversized everyday uniforms.",
  positionLine:
    "Bold streetwear clothing India - vintage, urban styles and oversized fits.",
  conceptLine:
    "A numbered-drop rework of the Exotix catalogue: grid-ready jackets, graphic hoodies and core uniforms.",
} as const;

export interface ExotixNavLink {
  href: string;
  label: string;
  code: string;
}

export const exotixNav: ExotixNavLink[] = [
  { href: exotixHomeHref, label: "Home", code: "00" },
  { href: `${exotixHomeHref}/collections`, label: "Shop All", code: "01" },
  { href: `${exotixHomeHref}/collections/jackets`, label: "Jackets", code: "02" },
  { href: `${exotixHomeHref}/collections/hoodies`, label: "Hoodies", code: "03" },
  {
    href: `${exotixHomeHref}/collections/leather-jackets`,
    label: "Leather",
    code: "04",
  },
  { href: `${exotixHomeHref}/collections/t-shirts`, label: "Tees", code: "05" },
  { href: `${exotixHomeHref}/collections/bottoms`, label: "Bottoms", code: "06" },
  {
    href: `${exotixHomeHref}/collections/co-ord-sets`,
    label: "Co-ords",
    code: "07",
  },
  { href: `${exotixHomeHref}/contact`, label: "Contact", code: "08" },
];

export interface ExotixCategoryMeta {
  key: ExotixCategory;
  label: string;
  /** Monospaced lane code used as a motorsport motif. */
  lane: string;
  blurb: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const exotixCategories: ExotixCategoryMeta[] = [
  {
    key: "jackets",
    label: "Jackets",
    lane: "LANE A",
    blurb:
      "CNY knot jackets and motorsport-inspired shells - the label's loudest silhouettes.",
    image: exotixImages.cnyGroup,
    imageAlt: "Group of maroon, grey and green CNY jackets",
    href: `${exotixHomeHref}/collections/jackets`,
  },
  {
    key: "hoodies",
    label: "Hoodies",
    lane: "LANE B",
    blurb:
      "Oversized graphic hoodies, puff prints and the balaclava statement piece.",
    image: exotixImages.tribalDepthHoodie,
    imageAlt: "Oversized black hoodie with tribal shadow puff print",
    href: `${exotixHomeHref}/collections/hoodies`,
  },
  {
    key: "leather-jackets",
    label: "Leather jackets",
    lane: "LANE C",
    blurb:
      "Faux-leather truckers, cropped boxy fits and vintage racing livery.",
    image: exotixImages.marlboro,
    imageAlt: "Vintage F1-style racing leather jacket",
    href: `${exotixHomeHref}/collections/leather-jackets`,
  },
  {
    key: "sweatshirts",
    label: "Sweatshirts",
    lane: "LANE D",
    blurb: "Crewnecks and printed sweat layers for the everyday rotation.",
    image: exotixImages.babeSweatshirt,
    imageAlt: "Black printed sweatshirt from the Exotix line",
    href: `${exotixHomeHref}/collections/sweatshirts`,
  },
  {
    key: "t-shirts",
    label: "T-shirts",
    lane: "LANE E",
    blurb: "Acid-wash oversized tees in unisex cuts.",
    image: exotixImages.redAcidTee,
    imageAlt: "Red acid wash oversized t-shirt",
    href: `${exotixHomeHref}/collections/t-shirts`,
  },
  {
    key: "bottoms",
    label: "Bottoms",
    lane: "LANE F",
    blurb: "Baggy pants and straight-fit jeans built for the street uniform.",
    image: exotixImages.crossJeans,
    imageAlt: "Cross-printed baggy straight-fit jeans",
    href: `${exotixHomeHref}/collections/bottoms`,
  },
  {
    key: "co-ord-sets",
    label: "Co-ord sets",
    lane: "LANE G",
    blurb: "Matching sweat sets - top and pant, one decision.",
    image: exotixImages.halfZipCoord,
    imageAlt: "Half-zip sweatshirt co-ord set",
    href: `${exotixHomeHref}/collections/co-ord-sets`,
  },
];

export function getExotixCategoryMeta(key: ExotixCategory): ExotixCategoryMeta {
  const found = exotixCategories.find((category) => category.key === key);
  if (!found) throw new Error(`Unknown Exotix category: ${key}`);
  return found;
}

/**
 * Contact block - kept fully configurable. The two published email addresses
 * differ between the brand's header and its contact page; both are exposed
 * below and BOTH are rendered on the contact page, labelled as alternatives.
 */
export const exotixContact = {
  brandName: exotixBrand.name,
  phoneDisplay: "+91 79778 41023",
  phoneHref: "+917977841023",
  /** Published in the exotix.in site header. */
  emailHeader: "exotixclothes@gmail.com",
  /** Published on the exotix.in contact page. */
  emailContactPage: "exotix.in@gmail.com",
  // EMAIL DISCREPANCY — confirm with owner.
  // The live exotix.in header publishes exotixclothes@gmail.com while the live
  // contact page publishes exotix.in@gmail.com. This concept never silently
  // picks one: both are shown on the contact page as labelled alternatives and
  // must be confirmed with the business before production use.
  emailDiscrepancyNote:
    "Two different email addresses are published on the brand's own site - the header shows one, the contact page another. Both are listed here as alternatives; confirm with Exotix which address is current.",
  addressLines: [
    "Subhan Boutique, Plot No 12/K/5, Opp. Durga Mata Mandir",
    "Baiganwadi, Govandi, Mumbai Suburban",
    "Maharashtra 400043",
  ],
  hours: "Monday - Saturday, 11:00 AM - 7:00 PM",
  instagram: "https://www.instagram.com/exotix.in/",
  instagramHandle: "@exotix.in",
  linkHub: "https://linktr.ee/exotix.in",
  sourceSite: "https://exotix.in/",
  shopUrl: "https://exotix.in/shop/",
  contactPage: "https://exotix.in/pages/contact",
  shippingPolicy: "https://exotix.in/policies/shipping-policy",
  refundPolicy: "https://exotix.in/policies/refund-policy",
  privacyPolicy: "https://exotix.in/policies/privacy-policy",
  verificationNote:
    "Phone, address, hours and both email addresses are as published on exotix.in and its contact page - confirm with the business before production use.",
} as const;

export const exotixDemo = {
  disclosure:
    "Website concept by Vizo Technology. Product information, pricing, availability and business policies require confirmation.",
  headerNotice: "Unofficial redesign concept",
  checkoutNoticeTitle: "This is a demonstration bag",
  checkoutNotice:
    "No order has been placed and nothing has been charged. This concept is a front-end demonstration only - it is not connected to Exotix's store, inventory, WhatsApp or payment systems. To buy, message the brand directly.",
  sizeNotice:
    "Size runs shown here were read from the live catalogue listing and can change - confirm current stock with the brand.",
  stockNotice: "Stock and availability are not confirmed for this concept.",
  policyNotice:
    "Shipping, returns and privacy terms are not restated in this concept - read the brand's official policy pages on exotix.in via the links provided.",
} as const;

/** Verified link-hub destinations (linktr.ee/exotix.in returned 200). */
export const exotixLinkHub = [
  { label: "Instagram", href: exotixContact.instagram, handle: exotixContact.instagramHandle },
  { label: "Live store", href: exotixContact.shopUrl, handle: "exotix.in/shop" },
  { label: "Contact page", href: exotixContact.contactPage, handle: "exotix.in/pages/contact" },
  { label: "Link hub", href: exotixContact.linkHub, handle: "linktr.ee/exotix.in" },
] as const;

export const exotixFooterNote = `All ${exotixProductCount} pieces in this concept are a representative selection of the live Exotix catalogue, snapshotted 23 October 2026.`;
