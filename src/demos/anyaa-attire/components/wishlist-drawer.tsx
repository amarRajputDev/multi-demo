"use client";

import Link from "next/link";
import { Heart, X } from "lucide-react";
import { anyaaHomeHref } from "../data";
import { anyaaPriceLabel, getAnyaaProduct } from "../products";
import { AnyaaImage } from "./anyaa-image";
import { Drawer } from "./drawer";
import { useShop } from "./shop-provider";

/** Wishlist sheet - local demonstration state stored on this device only. */
export function WishlistDrawer() {
  const { wishlist, wishlistOpen, closeWishlist, toggleWishlist } = useShop();
  const products = wishlist
    .map((slug) => getAnyaaProduct(slug))
    .filter((product): product is NonNullable<typeof product> =>
      Boolean(product),
    );

  return (
    <Drawer
      open={wishlistOpen}
      onClose={closeWishlist}
      lockKey="anyaa-wishlist"
      title="Wishlist"
      subtitle={`${products.length} saved ${products.length === 1 ? "piece" : "pieces"}`}
    >
      {products.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#D3E5DF] text-[#2E6F62]">
            <Heart aria-hidden className="h-6 w-6" />
          </span>
          <p className="font-anyaa-display text-lg text-[#22332F]">
            Nothing saved yet
          </p>
          <p className="font-anyaa-body max-w-xs text-sm leading-relaxed text-[#6E7C77]">
            Tap the heart on any piece to keep it here while you browse the
            concept edit.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-[#DFE7E2]">
          {products.map((product) => (
            <li key={product.slug} className="flex gap-4 px-5 py-4 sm:px-6">
              <Link
                href={`${anyaaHomeHref}/products/${product.slug}`}
                onClick={closeWishlist}
                aria-label={`View ${product.name}`}
                className="block w-16 shrink-0 sm:w-20"
              >
                <AnyaaImage
                  src={product.image}
                  alt={product.imageAlt}
                  tint={product.tint}
                  aspectClassName="aspect-[4/5]"
                  compactPlaceholder
                />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`${anyaaHomeHref}/products/${product.slug}`}
                    onClick={closeWishlist}
                    className="font-anyaa-display text-[15px] leading-snug text-[#22332F] hover:text-[#2E6F62]"
                  >
                    {product.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="shrink-0 rounded-full p-1.5 text-[#2E6F62] transition hover:bg-[#D3E5DF]/60"
                  >
                    <X aria-hidden className="h-4 w-4" />
                  </button>
                </div>
                <span className="font-anyaa-display mt-1 text-[15px] text-[#2E6F62]">
                  {anyaaPriceLabel(product)}
                </span>
                <Link
                  href={`${anyaaHomeHref}/products/${product.slug}`}
                  onClick={closeWishlist}
                  className="font-anyaa-body mt-auto w-fit text-[11px] font-medium tracking-[0.18em] text-[#22332F] uppercase underline decoration-[#DFE7E2] underline-offset-4 transition hover:text-[#2E6F62]"
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
