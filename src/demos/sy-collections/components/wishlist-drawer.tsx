"use client";

import Link from "next/link";
import { Heart, X } from "lucide-react";
import { syHomeHref } from "../data";
import { formatSyPrice, getSyProduct } from "../products";
import { Drawer } from "./drawer";
import { SyImage } from "./sy-image";
import { useShop } from "./shop-provider";

/** Wishlist sheet - local demonstration state, never synced anywhere. */
export function WishlistDrawer() {
  const { wishlist, wishlistOpen, closeWishlist, toggleWishlist } = useShop();
  const products = wishlist
    .map((slug) => getSyProduct(slug))
    .filter((product): product is NonNullable<typeof product> =>
      Boolean(product),
    );

  return (
    <Drawer
      open={wishlistOpen}
      onClose={closeWishlist}
      lockKey="sy-wishlist"
      title="Wishlist"
      subtitle={`${products.length} saved ${
        products.length === 1 ? "piece" : "pieces"
      }`}
    >
      {products.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F6EEEA] text-[#A63D57]">
            <Heart aria-hidden className="h-6 w-6" />
          </span>
          <p className="font-sy-display text-lg text-[#2C1F26]">
            Nothing saved yet
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#7A6A71]">
            Tap the heart on any product to keep it here while you browse.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-[#EFE5E1]">
          {products.map((product) => (
            <li key={product.slug} className="flex gap-4 px-5 py-4 sm:px-6">
              <Link
                href={`${syHomeHref}/products/${product.slug}`}
                onClick={closeWishlist}
                aria-label={`View ${product.name}`}
                className="block w-16 shrink-0 sm:w-20"
              >
                <SyImage
                  src={product.image}
                  alt={product.imageAlt}
                  aspectClassName="aspect-[4/5]"
                />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`${syHomeHref}/products/${product.slug}`}
                    onClick={closeWishlist}
                    className="font-sy-display text-[15px] leading-snug text-[#2C1F26] hover:text-[#A63D57]"
                  >
                    {product.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="shrink-0 rounded-full p-1.5 text-[#A63D57] transition hover:bg-[#F6EEEA]"
                  >
                    <X aria-hidden className="h-4 w-4" />
                  </button>
                </div>
                <span className="font-sy-display mt-1 text-[15px] text-[#A63D57]">
                  {formatSyPrice(product.price)}
                </span>
                <Link
                  href={`${syHomeHref}/products/${product.slug}`}
                  onClick={closeWishlist}
                  className="mt-auto w-fit text-[11px] font-medium tracking-[0.18em] text-[#4B2C3B] uppercase underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
                >
                  View details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
}
