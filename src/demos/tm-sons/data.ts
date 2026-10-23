/**
 * TM SONS — Ludhiana · demonstration content.
 *
 * Rules applied throughout this file:
 * - No invented prices, minimum order quantities, discount slabs, stock levels,
 *   delivery guarantees, opening hours or email addresses.
 * - Product names are DESCRIPTIVE DEMO LABELS, not confirmed SKUs.
 * - Descriptions only repeat what is visible in the supplied reference images.
 * - Contact numbers and the location line come from public listings and are
 *   PENDING OWNER VERIFICATION.
 * - Images are third-party cached copies of publicly indexed Instagram posts.
 *   They are downloaded locally for this concept and must be replaced with
 *   owner-approved assets before any commercial launch.
 */

/* ------------------------------------------------------------------ */
/* Brand + contact                                                     */
/* ------------------------------------------------------------------ */

export interface TmPhone {
  label: string;
  /** Exactly as supplied by the client brief. */
  display: string;
  /** tel: href — verified format only, no fabricated WhatsApp link. */
  telHref: string;
}

export interface TmContact {
  brandName: string;
  /** Short location from the Instagram bio — used as the default. */
  locationShort: string;
  locationCity: string;
  addressLines: string[];
  /** Third-party directory address — never published as the official address. */
  pendingAddressLine: string;
  phones: TmPhone[];
  instagramUrl: string;
  instagramHandle: string;
  /** Deliberately absent: no verified business email has been supplied. */
  email: null;
  /** Deliberately absent: no verified opening hours have been supplied. */
  hours: null;
}

export const tmContact: TmContact = {
  brandName: "TM SONS",
  locationShort: "Thapran Mohalla, near Daresi Ground, Ludhiana",
  locationCity: "Ludhiana, Punjab, India",
  addressLines: ["Thapran Mohalla, near Daresi Ground", "Ludhiana, Punjab"],
  pendingAddressLine:
    "B-IV-1291, Mohalla Thapran, Abadi Sudan Mohalla, Ludhiana, Punjab 141008",
  phones: [
    {
      label: "Wholesale enquiries",
      display: "+91 9914433647",
      telHref: "tel:+919914433647",
    },
    {
      label: "Retail & collections",
      display: "+91 9780541387",
      telHref: "tel:+919780541387",
    },
  ],
  instagramUrl: "https://www.instagram.com/tmsonsludhiana/",
  instagramHandle: "@tmsonsludhiana",
  email: null,
  hours: null,
};

export const tmHomeHref = "/demos/tm-sons";

/** Shown wherever the visitor could mistake this concept for a live store. */
export const tmDemoNotice =
  "Website concept by Vizo Technology. Product details, prices, availability, terms and contact information require confirmation.";

/* ------------------------------------------------------------------ */
/* Image manifest                                                      */
/* ------------------------------------------------------------------ */

export type TmAssetStatus =
  | "downloaded-pending-approval"
  | "unavailable-placeholder";

export interface TmImageAsset {
  id: string;
  label: string;
  sourceUrl: string;
  localPath: string;
  alt: string;
  status: TmAssetStatus;
  note: string;
}

const SOURCE_ROOT =
  "https://pub-d1767b924c1540b4ae0c70a57adb5aa7.r2.dev";

export const tmImageManifest: TmImageAsset[] = [
  {
    id: "brand-logo",
    label: "TM SONS logo reference",
    sourceUrl: `${SOURCE_ROOT}/influencers/1791679504844_0c2b2646-1100-4171-be1a-463f135a5e0e.jpg`,
    localPath: "/images/tm-sons/brand-logo.jpg",
    alt: "TM SONS logo — a red circular TM monogram beside black SONS lettering",
    status: "downloaded-pending-approval",
    note: "Low-resolution reference. Confirm the official high-resolution logo with the owner.",
  },
  {
    id: "premium-cardigan",
    label: "Premium Embroidered Cardigan",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506789_874292fc-1d9f-4a93-abac-23f13344a57c.jpg`,
    localPath: "/images/tm-sons/products/premium-cardigan.jpg",
    alt: "A light-coloured cardigan with decorative embroidery, photographed in store",
    status: "downloaded-pending-approval",
    note: "Cached copy of a publicly indexed Instagram post.",
  },
  {
    id: "woollen-collection",
    label: "Premium Woollen Collection",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506746_0be34d42-fad8-4ede-b2d8-6aae01947651.jpg`,
    localPath: "/images/tm-sons/products/woollen-collection.jpg",
    alt: "A mustard-toned woollen garment presented in store",
    status: "downloaded-pending-approval",
    note: "Confirm the full original post before naming the garment precisely.",
  },
  {
    id: "patterned-winterwear",
    label: "Patterned Winterwear",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506840_f7e26cea-a01a-43a8-9009-69eaa5dc7ab9.jpg`,
    localPath: "/images/tm-sons/products/patterned-winterwear.jpg",
    alt: "A geometric-patterned button-front garment in dark, cream and warm tones",
    status: "downloaded-pending-approval",
    note: "Cached copy of a publicly indexed Instagram post.",
  },
  {
    id: "farshi-sets",
    label: "Farshi Sets",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506855_fd692bf5-10ad-4359-ba7e-05399a9c792b.jpg`,
    localPath: "/images/tm-sons/products/farshi-sets.jpg",
    alt: "Garments stacked in store beneath a Farshi sets label",
    status: "downloaded-pending-approval",
    note: "Category reference photograph, not a finished product-on-model shot.",
  },
  {
    id: "winter-sweatshirts",
    label: "Imported Sweatshirts",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506842_f46ab654-59ae-48d5-8616-065f8e28b535.jpg`,
    localPath: "/images/tm-sons/products/winter-sweatshirts.jpg",
    alt: "Folded winter sweatshirts in pastel and neutral colours",
    status: "downloaded-pending-approval",
    note: "Cached copy of a publicly indexed Instagram post.",
  },
  {
    id: "woollen-coord",
    label: "Woollen Co-ord Set",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506820_f997c7e2-eac3-4ced-bc39-fef789f43225.jpg`,
    localPath: "/images/tm-sons/products/woollen-coord.jpg",
    alt: "An olive-coloured woollen co-ord style garment",
    status: "downloaded-pending-approval",
    note: "Cached copy of a publicly indexed Instagram post.",
  },
  {
    id: "premium-ethnicwear",
    label: "Premium Ethnicwear",
    sourceUrl: `${SOURCE_ROOT}/posts/1791679506813_3b4895cd-6ce7-445b-95ef-cd61fac73ebb.jpg`,
    localPath: "/images/tm-sons/products/premium-ethnicwear.jpg",
    alt: "A dark garment being presented in store",
    status: "downloaded-pending-approval",
    note: "Confirm the exact garment type with the owner before naming it.",
  },
];

const assetsById = new Map(tmImageManifest.map((asset) => [asset.id, asset]));

/**
 * Resolve an asset id to a local path. Returns an empty string when the asset
 * is missing so callers can render a graceful placeholder instead of a broken
 * image icon.
 */
export function tmAssetPath(id: string): string {
  const asset = assetsById.get(id);
  if (!asset || asset.status === "unavailable-placeholder") return "";
  return asset.localPath;
}

export function tmAssetAlt(id: string, fallback: string): string {
  return assetsById.get(id)?.alt ?? fallback;
}

export function tmAssetSource(id: string): string | undefined {
  return assetsById.get(id)?.sourceUrl;
}

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export const TM_CATEGORY_SLUGS = [
  "winterwear",
  "cardigans",
  "co-ord-sets",
  "western-wear",
  "ethnicwear",
  "farshi-sets",
  "sweatshirts",
] as const;

export type TmCategorySlug = (typeof TM_CATEGORY_SLUGS)[number];

export interface TmCategory {
  slug: TmCategorySlug;
  label: string;
  /** Long label used on editorial headings. */
  title: string;
  blurb: string;
  imageId: string;
  /** Categories with no verified product are hidden from navigation. */
  verified: boolean;
}

export const tmCategories: TmCategory[] = [
  {
    slug: "winterwear",
    label: "Winterwear",
    title: "Winterwear",
    blurb:
      "Cardigans, woollen sets and sweatshirts from the current cold-weather selection.",
    imageId: "woollen-collection",
    verified: true,
  },
  {
    slug: "cardigans",
    label: "Cardigans",
    title: "Cardigans",
    blurb:
      "Light-toned and embroidered cardigans, shown as part of the winter selection.",
    imageId: "premium-cardigan",
    verified: true,
  },
  {
    slug: "co-ord-sets",
    label: "Co-ord Sets",
    title: "Co-ord Sets",
    blurb:
      "Matched woollen and western co-ord pieces photographed in store.",
    imageId: "woollen-coord",
    verified: true,
  },
  {
    slug: "western-wear",
    label: "Western Wear",
    title: "Western Wear",
    blurb:
      "Button-front, patterned and everyday western styles for the season.",
    imageId: "patterned-winterwear",
    verified: true,
  },
  {
    slug: "ethnicwear",
    label: "Ethnicwear",
    title: "Ethnicwear",
    blurb:
      "Ethnic and fusion pieces, including the farshi sets selection.",
    imageId: "premium-ethnicwear",
    verified: true,
  },
  {
    slug: "farshi-sets",
    label: "Farshi Sets",
    title: "Farshi Sets",
    blurb:
      "Farshi sets and related ethnic collections, stacked in store.",
    imageId: "farshi-sets",
    verified: true,
  },
  {
    slug: "sweatshirts",
    label: "Sweatshirts",
    title: "Sweatshirts & Winter Essentials",
    blurb:
      "Sweatshirts and winter essentials in pastel and neutral shades.",
    imageId: "winter-sweatshirts",
    verified: true,
  },
];

export function tmCategoryBySlug(slug: string): TmCategory | undefined {
  return tmCategories.find((category) => category.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export type TmPriceStatus = "request";

export interface TmProduct {
  slug: string;
  /** Descriptive demo label — not a confirmed official product name. */
  title: string;
  categories: TmCategorySlug[];
  imageId: string;
  alt: string;
  /** One line drawn only from what the reference photograph shows. */
  summary: string;
  /** Slightly longer description. No fabric, size or care claims. */
  detail: string;
  priceStatus: TmPriceStatus;
  /** null = colours/sizes are not verified, so nothing is shown. */
  variants: string[] | null;
  featured: boolean;
  seasonal: boolean;
  /** Lower number = shown earlier on the shop grid. */
  order: number;
}

export const tmProducts: TmProduct[] = [
  {
    slug: "premium-embroidered-cardigan",
    title: "Premium Embroidered Cardigan",
    categories: ["cardigans", "winterwear"],
    imageId: "premium-cardigan",
    alt: "A light-coloured cardigan with decorative embroidery, photographed in store",
    summary:
      "A light-coloured cardigan with decorative embroidery across the front.",
    detail:
      "Shown in a light tone with decorative embroidery. Part of the winter cardigan selection — enquire for current colours, sizes and wholesale availability.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: true,
    order: 1,
  },
  {
    slug: "premium-woollen-collection",
    title: "Premium Woollen Collection",
    categories: ["winterwear", "co-ord-sets"],
    imageId: "woollen-collection",
    alt: "A mustard-toned woollen garment presented in store",
    summary:
      "A mustard-toned woollen piece presented in store, from the winter woollen selection.",
    detail:
      "Photographed in store as part of the woollen winter range. Exact garment type and available colours are confirmed on enquiry.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: true,
    order: 2,
  },
  {
    slug: "patterned-winterwear",
    title: "Patterned Winterwear",
    categories: ["western-wear", "winterwear"],
    imageId: "patterned-winterwear",
    alt: "A geometric-patterned button-front garment in dark, cream and warm tones",
    summary:
      "A geometric-patterned, button-front garment in dark, cream and warm tones.",
    detail:
      "A patterned button-front style photographed against a dark, cream and warm-toned palette. Current colourways and sizes are shared on enquiry.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: false,
    order: 3,
  },
  {
    slug: "farshi-sets-collection",
    title: "Farshi Sets Collection",
    categories: ["farshi-sets", "ethnicwear"],
    imageId: "farshi-sets",
    alt: "Garments stacked in store beneath a Farshi sets label",
    summary:
      "Garments stacked in store under the Farshi sets label.",
    detail:
      "A category reference from the shop floor rather than a product-on-model shot. Individual farshi designs and availability are confirmed on enquiry.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: false,
    order: 4,
  },
  {
    slug: "imported-sweatshirts-collection",
    title: "Imported Sweatshirts Collection",
    categories: ["sweatshirts", "winterwear"],
    imageId: "winter-sweatshirts",
    alt: "Folded winter sweatshirts in pastel and neutral colours",
    summary:
      "Folded winter sweatshirts in pastel and neutral shades.",
    detail:
      "Winter sweatshirts photographed folded in store. Sizes, packs and wholesale availability are confirmed on enquiry.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: true,
    order: 5,
  },
  {
    slug: "olive-woollen-coord",
    title: "Olive Woollen Co-ord",
    categories: ["co-ord-sets", "winterwear"],
    imageId: "woollen-coord",
    alt: "An olive-coloured woollen co-ord style garment",
    summary: "An olive-coloured woollen co-ord style garment.",
    detail:
      "An olive-tone co-ord from the woollen collection. Available colours, sizing and current stock are confirmed on enquiry.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: true,
    order: 6,
  },
  {
    slug: "premium-ethnicwear-collection",
    title: "Premium Ethnicwear Collection",
    categories: ["ethnicwear", "farshi-sets"],
    imageId: "premium-ethnicwear",
    alt: "A dark garment being presented in store",
    summary: "A dark garment presented in store within the ethnicwear selection.",
    detail:
      "Photographed on the shop floor as part of the ethnicwear range. The exact garment type, fabric and sizing are confirmed with the owner before publication.",
    priceStatus: "request",
    variants: null,
    featured: true,
    seasonal: false,
    order: 7,
  },
];

export function tmProductBySlug(slug: string): TmProduct | undefined {
  return tmProducts.find((product) => product.slug === slug);
}

export function tmProductsInCategory(slug: TmCategorySlug): TmProduct[] {
  return tmProducts
    .filter((product) => product.categories.includes(slug))
    .sort((a, b) => a.order - b.order);
}

export function tmSortedProducts(products: TmProduct[]): TmProduct[] {
  return [...products].sort((a, b) => a.order - b.order);
}

export function tmRelatedProducts(product: TmProduct): TmProduct[] {
  return tmSortedProducts(
    tmProducts.filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        candidate.categories.some((slug) => product.categories.includes(slug)),
    ),
  ).slice(0, 3);
}

/** Homepage "Shop by category" cards — labels from the client brief. */
export interface TmCategoryCard {
  label: string;
  blurb: string;
  categorySlug: TmCategorySlug;
  imageId: string;
}

export const tmHomeCategoryCards: TmCategoryCard[] = [
  {
    label: "Cardigans",
    blurb: "Embroidered and light-toned winter cardigans",
    categorySlug: "cardigans",
    imageId: "premium-cardigan",
  },
  {
    label: "Woollen Co-ord Sets",
    blurb: "Matched woollen sets for the season",
    categorySlug: "co-ord-sets",
    imageId: "woollen-coord",
  },
  {
    label: "Western Wear",
    blurb: "Patterned button-front and everyday styles",
    categorySlug: "western-wear",
    imageId: "patterned-winterwear",
  },
  {
    label: "Farshi & Ethnic Sets",
    blurb: "Farshi sets and ethnic collections",
    categorySlug: "farshi-sets",
    imageId: "farshi-sets",
  },
  {
    label: "Sweatshirts & Winterwear",
    blurb: "Sweatshirts and cold-weather essentials",
    categorySlug: "winterwear",
    imageId: "winter-sweatshirts",
  },
];

/** Homepage seasonal row — winter-relevant products, easy to re-curate. */
export const tmSeasonalSlugs = [
  "premium-embroidered-cardigan",
  "olive-woollen-coord",
  "imported-sweatshirts-collection",
  "premium-woollen-collection",
];

export function tmSeasonalProducts(): TmProduct[] {
  return tmSeasonalSlugs
    .map((slug) => tmProductBySlug(slug))
    .filter((product): product is TmProduct => Boolean(product));
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface TmNavLink {
  href: string;
  label: string;
}

export const tmPrimaryNav: TmNavLink[] = [
  { href: tmHomeHref, label: "Home" },
  { href: "/demos/tm-sons/shop", label: "Shop All" },
  { href: "/demos/tm-sons/wholesale", label: "Wholesale" },
  { href: "/demos/tm-sons/about", label: "About" },
  { href: "/demos/tm-sons/contact", label: "Contact" },
];

export const tmCollectionNav: TmNavLink[] = tmCategories.map((category) => ({
  href: `/demos/tm-sons/collections/${category.slug}`,
  label: category.label,
}));

/** Flat list used by the mobile sheet. */
export const tmMobileNav: TmNavLink[] = [
  { href: tmHomeHref, label: "Home" },
  { href: "/demos/tm-sons/shop", label: "Shop All" },
  ...tmCollectionNav,
  { href: "/demos/tm-sons/wholesale", label: "Wholesale Enquiries" },
  { href: "/demos/tm-sons/about", label: "About" },
  { href: "/demos/tm-sons/contact", label: "Contact" },
];

export const tmFooterNav: TmNavLink[] = [
  { href: tmHomeHref, label: "Home" },
  { href: "/demos/tm-sons/shop", label: "Shop All" },
  { href: "/demos/tm-sons/wholesale", label: "Wholesale Enquiries" },
  { href: "/demos/tm-sons/about", label: "About TM SONS" },
  { href: "/demos/tm-sons/contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/* Wholesale enquiry form                                              */
/* ------------------------------------------------------------------ */

export interface TmEnquiryField {
  id: string;
  label: string;
  name: string;
  type: "text" | "tel" | "email" | "textarea" | "select";
  required: boolean;
  autoComplete?: string;
  placeholder?: string;
  hint?: string;
  options?: string[];
}

export const tmEnquiryFields: TmEnquiryField[] = [
  {
    id: "tm-business",
    label: "Business / boutique name",
    name: "business",
    type: "text",
    required: true,
    autoComplete: "organization",
    placeholder: "e.g. Sharma Ladies Boutique",
  },
  {
    id: "tm-contact-person",
    label: "Contact person",
    name: "contactPerson",
    type: "text",
    required: true,
    autoComplete: "name",
    placeholder: "e.g. Ritika Sharma",
  },
  {
    id: "tm-phone",
    label: "Phone number",
    name: "phone",
    type: "tel",
    required: true,
    autoComplete: "tel",
    placeholder: "e.g. 98765 43210",
  },
  {
    id: "tm-email",
    label: "Email",
    name: "email",
    type: "email",
    required: false,
    autoComplete: "email",
    placeholder: "optional",
    hint: "Optional — no business email is published for TM SONS yet.",
  },
  {
    id: "tm-city",
    label: "City",
    name: "city",
    type: "text",
    required: true,
    autoComplete: "address-level2",
    placeholder: "e.g. Ludhiana",
  },
  {
    id: "tm-state",
    label: "State",
    name: "state",
    type: "text",
    required: true,
    autoComplete: "address-level1",
    placeholder: "e.g. Punjab",
  },
  {
    id: "tm-notes",
    label: "Enquiry notes",
    name: "notes",
    type: "textarea",
    required: false,
    placeholder:
      "Collections of interest, preferred colours, delivery city, or anything else",
    hint: "Optional.",
  },
];
