/**
 * KHALEEZI DESIGNS — brand + public contact configuration.
 *
 * Every field below is either taken from the label's public Instagram profile
 * or explicitly marked unverified. Nothing here is conclusive: the WhatsApp
 * number appeared in a public post caption and the short brand description
 * blends profile copy with third-party observations, so it is flagged for
 * owner confirmation rather than presented as an official channel.
 */

export type KhaleeziContactChannel =
  | { kind: "instagram"; handle: string; url: string }
  | { kind: "whatsapp"; numberDigits: string; display: string; url: string };

export const khaleeziBrand = {
  name: "Khaleezi Designs",
  wordmark: "KHALEEZI",
  tagline: "Ethnicwear, cut for every body.",
  instagramHandle: "@khaleezidesigns",
  instagramUrl: "https://www.instagram.com/khaleezidesigns/",
  /** Remote brand avatar referenced directly — never downloaded. */
  avatarUrl:
    "https://hopinio-bucket.s3.amazonaws.com/CACHE/images/business_image/khaleezidesigns/04ce7614d5688b6384c7b1a7bcd4cb9a.png",
  homeHref: "/demos/khaleezi-designs",
};

export const khaleeziContact = {
  instagramUrl: khaleeziBrand.instagramUrl,
  instagramHandle: khaleeziBrand.instagramHandle,
  /**
   * Public post caption reference — keep configurable and verify before use.
   * Set `whatsappNumberDigits` to "" to hide WhatsApp actions entirely.
   */
  whatsappNumberDigits: "918848639020",
  whatsappDisplay: "+91 88486 39020",
  whatsappVerified: false,
  contactNote:
    "WhatsApp number and sizing details come from a public post on the label's profile and require confirmation before ordering.",
};

export function khaleeziWhatsAppUrl(message: string): string | null {
  if (!khaleeziContact.whatsappNumberDigits) return null;
  return `https://wa.me/${khaleeziContact.whatsappNumberDigits}?text=${encodeURIComponent(
    message,
  )}`;
}

export const khaleeziNav = [
  { label: "Shop", href: `${khaleeziBrand.homeHref}/collections` },
  { label: "Dupatta sets", href: `${khaleeziBrand.homeHref}/collections/dupatta-sets` },
  { label: "The label", href: `${khaleeziBrand.homeHref}#label` },
  { label: "Sizing", href: `${khaleeziBrand.homeHref}#sizing` },
  { label: "Enquire", href: `${khaleeziBrand.homeHref}/contact` },
];

export const khaleeziDemo = {
  disclosure:
    "Website concept by Vizo Technology. Product information, pricing, availability and business policies require confirmation.",
  noCod: "Cash on delivery is not offered (as stated publicly by the label); this concept mirrors that.",
};

export const khaleeziInstagramTiles = [
  { label: "Cotton dupatta sets", href: khaleeziBrand.instagramUrl, tone: 1 },
  { label: "Straight pants", href: khaleeziBrand.instagramUrl, tone: 2 },
  { label: "Small to 7XL", href: khaleeziBrand.instagramUrl, tone: 3 },
  { label: "Soft cotton dupattas", href: khaleeziBrand.instagramUrl, tone: 4 },
  { label: "Everyday ethnicwear", href: khaleeziBrand.instagramUrl, tone: 5 },
];
