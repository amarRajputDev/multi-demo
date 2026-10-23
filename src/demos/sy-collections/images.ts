/**
 * S_Y COLLECTIONS - central remote-image map.
 *
 * Every entry is a live CDN URL on sycollections.shop, referenced directly by
 * the demo UI. Nothing is downloaded, copied into /public, base64-encoded or
 * duplicated as a local asset, so any URL can be swapped here without touching
 * a component.
 *
 * NOTE: this demo is an unofficial redesign concept. Images and logo remain the
 * property of S_Y COLLECTIONS and are hot-linked for presentation only.
 */

export const syImages = {
  /** Official pink-and-white S_y_collections logo (female profile + floral). */
  logo: "https://sycollections.shop/cdn/shop/files/logo.jpg?v=1726054768&width=1100",

  /** Dark floral, loose-fit, button-front A-line kurti. */
  darkFloralAline:
    "https://sycollections.shop/cdn/shop/files/DDA12BA1-D944-4B4D-9D0C-897D75423D5D.jpg?v=1759729935&width=1946",

  /** Navy-blue kurti with gold-toned embroidery and decorative detailing. */
  navyEmbroidered:
    "https://sycollections.shop/cdn/shop/files/9474AAA3-24EC-4E4D-971F-98AB87122047.jpg?v=1792641446&width=1946",

  /** Dark printed kurti with a red neckline and patterned body. */
  darkPrintedRed:
    "https://sycollections.shop/cdn/shop/files/5EBAA28C-D47F-425D-B630-02572E063B3F.jpg?v=1792555390&width=1946",

  /** Red floral kurti with matching trousers, shown as a coordinated outfit. */
  redFloralSet:
    "https://sycollections.shop/cdn/shop/files/D3FF8A80-72DF-45A8-AC01-0738ACFCCBEF.jpg?v=1789893562&width=1780",

  /** Burgundy floral kurti with matching bottomwear on a dress form. */
  burgundyOnForm:
    "https://sycollections.shop/cdn/shop/files/859AE798-5847-4D96-9143-1CE3080174DD.jpg?v=1789894121&width=1946",

  /** Bright pink coordinated outfit with embroidered detailing. */
  pinkEmbroideredSet:
    "https://sycollections.shop/cdn/shop/files/2EBF08DB-C921-4F97-B355-BA2E995EFB20.jpg?v=1780903423&width=1946",

  /** Pink embroidered kurti photographed on a model. */
  pinkEmbroideredModel:
    "https://sycollections.shop/cdn/shop/files/853EAAF0-88E9-4B24-B498-298FEAAA1D86.jpg?v=1780903422&width=1946",

  /** Light-green garment with a dark botanical pattern. */
  lightGreenPrint:
    "https://sycollections.shop/cdn/shop/files/47B4D3F8-837A-4544-A798-0E3C72E1E973.jpg?v=1791699254&width=1946",

  /** Brown kurti with contrasting ornamental borders. */
  brownPrint:
    "https://sycollections.shop/cdn/shop/files/BE54EEBE-9D81-4020-8AC6-56CC8464D3A7.jpg?v=1787977100&width=1946",

  /** Cream-and-red floral top with coordinating trousers (alternate set shot). */
  redFloralSetAlt:
    "https://sycollections.shop/cdn/shop/files/D968B87A-698C-4B12-BE45-9B9D86D24F86.jpg?v=1789893562&width=533",
} as const;

export type SyImageKey = keyof typeof syImages;
