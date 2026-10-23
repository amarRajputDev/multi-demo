"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { sakshiHomeHref } from "../data";
import { getSakshiProduct } from "../products";
import { Drawer } from "./drawer";
import { SakshiImage } from "./sakshi-image";
import { useShop } from "./shop-provider";

/** Wishlist drawer — slugs persist in localStorage via the shop provider. */
export function WishlistDrawer() {
  const { wishlist, wishlistOpen, closeWishlist, toggleWishlist } = useShop();
  const products = wishlist
    .map((slug) => getSakshiProduct(slug))
    .filter((product) => product !== undefined);

  return (
    <Drawer
      id="kbs-wishlist-drawer"
      open={wishlistOpen}
      onClose={closeWishlist}
      title="Wishlist"
    >
      {products.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
          <Heart aria-hidden className="h-8 w-8 text-[#8E3B47]/50" />
          <p className="font-sakshi-display text-2xl text-[#3B1F24]">
            Nothing saved yet
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#7A6461]">
            Tap the heart on any piece to keep it here while you decide what to
            enquire about.
          </p>
          <Link
            href={`${sakshiHomeHref}/collections`}
            onClick={closeWishlist}
            className="mt-2 rounded-full border border-[#8E3B47] px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-[#8E3B47] uppercase transition hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
          >
            Browse collections
          </Link>
        </div>
      ) : (
        <ul className="grid gap-4">
          {products.map((product) => (
            <li
              key={product.slug}
              className="flex gap-4 border-b border-[#E9DDD4] pb-4 last:border-b-0"
            >
              <div className="w-20 shrink-0">
                <SakshiImage
                  src={product.image}
                  alt={product.imageAlt}
                  tone={product.tone}
                  compact
                  aspectClassName="aspect-[4/5]"
                  className="rounded-md"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={`${sakshiHomeHref}/products/${product.slug}`}
                  onClick={closeWishlist}
                  className="font-sakshi-display text-base leading-snug text-[#3B1F24] transition hover:text-[#8E3B47]"
                >
                  {product.name}
                </Link>
                <p className="mt-0.5 text-[11px] tracking-[0.14em] text-[#7A6461] uppercase">
                  Enquire for price
                </p>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="mt-2 text-[11px] tracking-[0.14em] text-[#7A6461] uppercase underline underline-offset-4 transition hover:text-[#8E3B47]"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
}
