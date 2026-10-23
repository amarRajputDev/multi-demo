/**
 * CIÈL Shop — product image manifest.
 *
 * Every entry records the ORIGINAL historical source URL and, where the
 * Internet Archive had a capture, the local file recovered from it. Products
 * whose photographs could not be recovered anywhere keep `localPath: null`
 * and render a clearly replaceable placeholder in the UI — never an
 * unrelated photograph.
 *
 * To restore an image later: drop the file at `localPath` (create the path
 * shown) — no component changes required.
 */

export type CielAssetStatus = "recovered" | "unavailable";

export interface CielImageAsset {
  /** Key used by products/sections to reference this asset. */
  key: string;
  label: string;
  /** Historical source URL from the original catalogue / brand reference. */
  sourceUrl: string;
  /** Wayback capture the local file was taken from, when applicable. */
  archiveUrl: string | null;
  /** Local path served by the app, or null when nothing was recovered. */
  localPath: string | null;
  status: CielAssetStatus;
  note: string;
}

const PRODUCT_ROOT = "https://cielshop.in/wp-content/uploads/elementor/thumbs";
const WP_ROOT = "https://cielshop.in/wp-content/uploads";

function recovered(
  key: string,
  label: string,
  sourceUrl: string,
  archiveUrl: string,
  localPath: string,
  note: string,
): CielImageAsset {
  return {
    key,
    label,
    sourceUrl,
    archiveUrl,
    localPath,
    status: "recovered",
    note,
  };
}

function unavailable(
  key: string,
  label: string,
  sourceUrl: string,
  note: string,
): CielImageAsset {
  return {
    key,
    label,
    sourceUrl,
    archiveUrl: null,
    localPath: null,
    status: "unavailable",
    note,
  };
}

export const cielImageManifest: CielImageAsset[] = [
  /* ---------------------------------------------------------------- */
  /* Brand                                                             */
  /* ---------------------------------------------------------------- */
  {
    key: "brand-logo",
    label: "CIÈL monogram (Ç) avatar",
    sourceUrl:
      "https://hopinio-bucket.s3.amazonaws.com/CACHE/images/business_image/ciel_shop.in/ca843ff8b2cb63cff38e67f9defb1366.png",
    archiveUrl: null,
    localPath: "/images/cielshop/brand-logo.png",
    status: "recovered",
    note: "Brand avatar supplied in the brief. Small (140×140) — replace with the official high-resolution mark when available.",
  },
  {
    key: "brand-lookbook-monogram",
    label: "CIÈL monogram lookbook card",
    sourceUrl: `${WP_ROOT}/2024/12/2-pdf_page-0001-1-1536x1087.jpg`,
    archiveUrl:
      "http://web.archive.org/web/20250618151213id_/https://cielshop.in/wp-content/uploads/2024/12/2-pdf_page-0001-1-1536x1087.jpg",
    localPath: "/images/cielshop/brand/lookbook-page.jpg",
    status: "recovered",
    note: "Brand-owned lookbook card recovered from the Wayback Machine (1536×1087).",
  },
  {
    key: "brand-campaign-coord",
    label: "Campaign photograph — grey checked co-ord on model",
    sourceUrl: `${WP_ROOT}/2024/12/931905BF-3756-471D-8186-9B18B0F247A0.jpg`,
    archiveUrl:
      "http://web.archive.org/web/20250620113547id_/https://cielshop.in/wp-content/uploads/2024/12/931905BF-3756-471D-8186-9B18B0F247A0.jpg",
    localPath: "/images/cielshop/brand/brand-931905-full.jpg",
    status: "recovered",
    note: "Highest-resolution archived brand photograph (1440×1440). Used for the editorial hero. The archived shop page pairs this file with the product 'BEE check coord set' — shown here as brand campaign imagery, not as a listed product of the 13.",
  },
  {
    key: "gallery-4401",
    label: "Catalogue photograph — printed shirt on hanger",
    sourceUrl: `${PRODUCT_ROOT}/IMG_4401-scaled-qyc3m84tph2db1rwle2sn17e7prkth2tnz7e4z7ryc.jpeg`,
    archiveUrl:
      "http://web.archive.org/web/20250618164224id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_4401-scaled-qyc3m84tph2db1rwle2sn17e7prkth2tnz7e4z7ryc.jpeg",
    localPath: "/images/cielshop/brand/gallery-4401.jpg",
    status: "recovered",
    note: "Archived homepage pairs IMG_4401 with 'COORD – cièl patchwork set'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-3733",
    label: "Catalogue photograph — striped overshirt on model",
    sourceUrl: `${PRODUCT_ROOT}/IMG_3733-scaled-qyb3z5hunumv97idu9x4kb92nzvcrad6xcrtyjn3gk.jpg`,
    archiveUrl:
      "http://web.archive.org/web/20250619010657id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_3733-scaled-qyb3z5hunumv97idu9x4kb92nzvcrad6xcrtyjn3gk.jpg",
    localPath: "/images/cielshop/brand/gallery-3733.jpg",
    status: "recovered",
    note: "Archived homepage pairs IMG_3733 with 'Stripped boxy jackets 24'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-8097",
    label: "Catalogue photograph — corduroy-panel co-ord on model",
    sourceUrl: `${PRODUCT_ROOT}/IMG_8097-scaled-qy7mqu4zc33a70398j4ogyxgrcs896nzr9jc3g5yys.jpg`,
    archiveUrl:
      "http://web.archive.org/web/20250618161144id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_8097-scaled-qy7mqu4zc33a70398j4ogyxgrcs896nzr9jc3g5yys.jpg",
    localPath: "/images/cielshop/brand/gallery-8097.jpg",
    status: "recovered",
    note: "Archived homepage pairs IMG_8097 with 'coord _ corduroy panel set'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-9949",
    label: "Catalogue photograph — distressed zip co-ord detail",
    sourceUrl: `${PRODUCT_ROOT}/IMG_9949-scaled-qyc4vqhilpd5fdo3uk9iv1rtmbgchwqyx8apm9qkp0.jpeg`,
    archiveUrl:
      "http://web.archive.org/web/20250618161755id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_9949-scaled-qyc4vqhilpd5fdo3uk9iv1rtmbgchwqyx8apm9qkp0.jpeg",
    localPath: "/images/cielshop/brand/gallery-9949.jpg",
    status: "recovered",
    note: "Archived homepage pairs IMG_9949 with 'coord – zipper distressed coord set'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-3960",
    label: "Catalogue photograph — camo cargo on model",
    sourceUrl: `${WP_ROOT}/2024/12/IMG_3960-scaled-300x300.jpg`,
    archiveUrl:
      "http://web.archive.org/web/20250619013106id_/https://cielshop.in/wp-content/uploads/2024/12/IMG_3960-scaled-300x300.jpg",
    localPath: "/images/cielshop/brand/gallery-3960.jpg",
    status: "recovered",
    note: "Archived shop page pairs IMG_3960 with 'Camo cargo / jorts'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-7574",
    label: "Catalogue photograph — utility denim on model",
    sourceUrl: `${WP_ROOT}/2024/12/IMG_7574-scaled-300x300.jpg`,
    archiveUrl:
      "http://web.archive.org/web/20250618142552id_/https://cielshop.in/wp-content/uploads/2024/12/IMG_7574-scaled-300x300.jpg",
    localPath: "/images/cielshop/brand/gallery-7574.jpg",
    status: "recovered",
    note: "Archived shop page pairs IMG_7574 with '8 pocket utility denim'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-7759",
    label: "Catalogue photograph — jacquard utility pants",
    sourceUrl: `${WP_ROOT}/2025/02/IMG_7759-300x300.jpeg`,
    archiveUrl:
      "http://web.archive.org/web/20250618145431id_/https://cielshop.in/wp-content/uploads/2025/02/IMG_7759-300x300.jpeg",
    localPath: "/images/cielshop/brand/gallery-7759.jpg",
    status: "recovered",
    note: "Archived shop page pairs IMG_7759 with 'Bee-jacquard utility pants'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-1015",
    label: "Catalogue photograph — printed shirt on hanger",
    sourceUrl: `${WP_ROOT}/2025/06/IMG_1015-300x300.jpeg`,
    archiveUrl:
      "http://web.archive.org/web/20250618152445id_/https://cielshop.in/wp-content/uploads/2025/06/IMG_1015-300x300.jpeg",
    localPath: "/images/cielshop/brand/gallery-1015.jpg",
    status: "recovered",
    note: "Archived shop page pairs IMG_1015 with 'breezy printed shirts 25'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-1055",
    label: "Catalogue photograph — patchwork shirt on hanger",
    sourceUrl: `${WP_ROOT}/2025/06/IMG_1055-300x300.jpeg`,
    archiveUrl:
      "http://web.archive.org/web/20250618143532id_/https://cielshop.in/wp-content/uploads/2025/06/IMG_1055-300x300.jpeg",
    localPath: "/images/cielshop/brand/gallery-1055.jpg",
    status: "recovered",
    note: "Archived shop page pairs IMG_1055 with 'breezy patchwork shirts'. Used only as brand gallery imagery.",
  },
  {
    key: "gallery-3563",
    label: "Catalogue photograph — three-zipper pants",
    sourceUrl: `${WP_ROOT}/2024/12/IMG_3563-300x300.jpeg`,
    archiveUrl:
      "http://web.archive.org/web/20250621075636id_/https://cielshop.in/wp-content/uploads/2024/12/IMG_3563-300x300.jpeg",
    localPath: "/images/cielshop/brand/gallery-3563.jpg",
    status: "recovered",
    note: "Archived shop page pairs IMG_3563 with '3 zipper pants*'. Used only as brand gallery imagery.",
  },

  /* ---------------------------------------------------------------- */
  /* The 13 catalogue products                                         */
  /* ---------------------------------------------------------------- */
  unavailable(
    "stripped-club-shirt",
    "Stripped Club Shirt",
    `${PRODUCT_ROOT}/53581D51-1DA6-478B-A893-D91F2E905285-rctjvquzcyee3ud0dbdqzvghn23bks9oexxhr1kd38.png`,
    "No capture exists in the Internet Archive for this file. Placeholder shown until replaced at /images/cielshop/products/stripped-club-shirt.png",
  ),
  recovered(
    "breezy-embroidered-shirt",
    "Breezy Embroidered Shirts",
    `${PRODUCT_ROOT}/IMG_0996-scaled-r74ydmhs0gx64rbrk9c7ulodekpz66wnw3dl6q5l50.jpeg`,
    "http://web.archive.org/web/20250618143247id_/https://cielshop.in/wp-content/uploads/2025/06/IMG_0996-300x300.jpeg",
    "/images/cielshop/products/breezy-embroidered-shirt.jpg",
    "Recovered from the archived shop page, which pairs IMG_0996 with this exact product name (300×300 derivative of the same source photograph).",
  ),
  unavailable(
    "racer-shirt-25",
    "RACER – Shirts 25",
    `${PRODUCT_ROOT}/img_7818-scaled-r3s175gr5mmedfuc0kdwdybrzeetknb8zgwjjc9lc4.jpeg`,
    "No capture exists in the Internet Archive for this file. Placeholder shown until replaced at /images/cielshop/products/racer-shirt-25.jpeg",
  ),
  unavailable(
    "la-familia-zipper-shacket",
    "Zipper LA Familia Printed Shacket",
    `${PRODUCT_ROOT}/IMG_0190-scaled-r7kt23irzcr7xpc09pyan9xm9vmnft1h5sl39snrr8.jpeg`,
    "No capture exists in the Internet Archive for this file. Placeholder shown until replaced at /images/cielshop/products/la-familia-zipper-shacket.jpeg",
  ),
  recovered(
    "henley-pu-leather-shirt",
    "Henley PU Leather Zipper Shirt",
    `${PRODUCT_ROOT}/IMG_7797-qy7hlnxkz1lr0h2aihmj9p4fuph3vrjmaqvsl2q0qs.jpg`,
    "http://web.archive.org/web/20250618170613id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_7797-qy7hlnxkz1lr0h2aihmj9p4fuph3vrjmaqvsl2q0qs.jpg",
    "/images/cielshop/products/henley-pu-leather-shirt.jpg",
    "Recovered from the exact thumbnail URL in the brief (250×250 capture).",
  ),
  unavailable(
    "gothic-zipper-shirt",
    "Gothic – Zipper Shirt",
    `${PRODUCT_ROOT}/IMG_4060-1-scaled-r2popnclm0hj0q8lj1p1lg16ml2uqoo3vo094l8zt0.jpeg`,
    "No capture exists in the Internet Archive for this file. Placeholder shown until replaced at /images/cielshop/products/gothic-zipper-shirt.jpeg",
  ),
  unavailable(
    "rebel-strap-cargo",
    "Rebel Strap Cargo",
    `${PRODUCT_ROOT}/1742473295531_IMG_7915-scaled-r34yx438wdevkksgufkxulmbmmlsnxxktil1u6iv5w.jpeg`,
    "No capture exists in the Internet Archive for this file. Placeholder shown until replaced at /images/cielshop/products/rebel-strap-cargo.jpeg",
  ),
  unavailable(
    "punk-wave-patch-denims",
    "Punk Wave Patch Denims",
    `${PRODUCT_ROOT}/IMG_5763-scaled-r1ne91lu3u583aqtd1ek6jhjtkfovnfjgojmme57pg.jpeg`,
    "No capture exists in the Internet Archive for this file (archived homepage references the product but not its image). Placeholder shown until replaced at /images/cielshop/products/punk-wave-patch-denims.jpeg",
  ),
  recovered(
    "two-zipper-pants",
    "2 Zipper Pants",
    `${PRODUCT_ROOT}/IMG_7567-r2pog656p5ifya07vg7gyc4uzpsm4k1jkr6zx5awjo.jpeg`,
    "http://web.archive.org/web/20250618155535id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_7567-r2pog656p5ifya07vg7gyc4uzpsm4k1jkr6zx5awjo.jpeg",
    "/images/cielshop/products/two-zipper-pants.jpg",
    "Recovered from the exact thumbnail URL in the brief (250×250 capture).",
  ),
  recovered(
    "gothic-patchwork-denims",
    "Gothic Patchwork Denims",
    `${PRODUCT_ROOT}/IMG_7991-qyg3bkb0biz4hf7nxleztk5a8b1h6eve9mgx9onm84.jpeg`,
    "http://web.archive.org/web/20250618180122id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_7991-qyg3bkb0biz4hf7nxleztk5a8b1h6eve9mgx9onm84.jpeg",
    "/images/cielshop/products/gothic-patchwork-denims.jpg",
    "Recovered from the exact thumbnail URL in the brief (250×250 capture).",
  ),
  recovered(
    "camo-coord-set",
    "Camo Co-ord Set",
    `${PRODUCT_ROOT}/Photoroom_20250407_163655-r453tidenpfm6g4djhs6g3wg65ol76auocwmxtnupw.jpeg`,
    "http://web.archive.org/web/20250618151629id_/https://cielshop.in/wp-content/uploads/2025/04/Photoroom_20250407_163655-300x300.jpeg",
    "/images/cielshop/products/camo-coord-set.jpg",
    "Recovered via the archived shop page, which pairs Photoroom_20250407_163655 with this exact product name (300×300 derivative of the same source photograph).",
  ),
  unavailable(
    "denim-coord-set",
    "Denim Co-ord Set",
    `${PRODUCT_ROOT}/IMG_4341-1-qyghhvuksfkdrzxz0om81a5go9qh6lt5fh622tzy2s.jpg`,
    "No capture exists in the Internet Archive for this file. Placeholder shown until replaced at /images/cielshop/products/denim-coord-set.jpg",
  ),
  recovered(
    "ciel-patchwork-denims",
    "Cièl Patchwork Denims",
    `${PRODUCT_ROOT}/IMG_6279-scaled-qy7csubuen0udi3ioaaxbt4fxbaln6ga7csx2kyuro.jpg`,
    "http://web.archive.org/web/20250618164422id_/https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_6279-scaled-qy7csubuen0udi3ioaaxbt4fxbaln6ga7csx2kyuro.jpg",
    "/images/cielshop/products/ciel-patchwork-denims.jpg",
    "Recovered from the exact thumbnail URL in the brief (250×250 capture).",
  ),
];

const manifestByKey = new Map(cielImageManifest.map((asset) => [asset.key, asset]));

export function cielAsset(key: string): CielImageAsset | undefined {
  return manifestByKey.get(key);
}

/** Local path for an asset key, or null when nothing was recovered. */
export function cielAssetPath(key: string): string | null {
  return manifestByKey.get(key)?.localPath ?? null;
}

export const cielRecoveredCount = cielImageManifest.filter(
  (asset) => asset.key !== "brand-logo" && asset.status === "recovered",
).length;

export const cielUnavailableProducts = cielImageManifest.filter(
  (asset) => asset.status === "unavailable",
);
