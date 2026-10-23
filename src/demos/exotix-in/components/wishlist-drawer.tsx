"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { exotixDemo, exotixHomeHref } from "../data";
import { EXOTIX_DATA_NOTE, exotixProducts, formatExotixPrice } from "../products";
import { Drawer } from "./drawer";
import { ExotixImage } from "./exotix-image";
import { useShop } from "./shop-provider";

/** Saved-list drawer backed by the provider's localStorage wishlist. */
export function WishlistDrawer() {
  const { wishlist, wishlistOpen, closeWishlist, toggleWishlist } = useShop();
  const saved = exotixProducts.filter((product) =>
    wishlist.includes(product.slug),
  );

  return (
    <Drawer
      open={wishlistOpen}
      onClose={closeWishlist}
      lockKey="exotix-wishlist"
      title="Saved list"
      subtitle={`${saved.length} ${saved.length === 1 ? "piece" : "pieces"} — stored on this device`}
    >
      {saved.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-sm border border-[#2A2A30] text-[#E23B2E]">
            <Heart aria-hidden className="h-6 w-6" />
          </span>
          <p className="font-exotix-display text-lg text-[#F2EFEA]">
            Nothing saved yet
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#8A8A92]">
            Tap the heart on any product card to stage it here. Saved pieces
            stay on this device only.
          </p>
          <Link
            href={`${exotixHomeHref}/collections`}
            onClick={closeWishlist}
            className="rounded-sm bg-[#E23B2E] px-6 py-3 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F]"
          >
            Browse the grid
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-[#232327]">
            {saved.map((product) => (
              <li key={product.slug} className="flex gap-4 px-5 py-4 sm:px-6">
                <Link
                  href={`${exotixHomeHref}/products/${product.slug}`}
                  onClick={closeWishlist}
                  className="block w-16 shrink-0 sm:w-20"
                  aria-label={`View ${product.name}`}
                >
                  <ExotixImage
                    src={product.image}
                    alt={product.imageAlt}
                    aspectClassName="aspect-[4/5]"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={`${exotixHomeHref}/products/${product.slug}`}
                      onClick={closeWishlist}
                      className="font-exotix-display text-[15px] leading-snug text-[#F2EFEA] hover:text-[#E23B2E]"
                    >
                      {product.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product)}
                      aria-label={`Remove ${product.name} from saved list`}
                      className="shrink-0 rounded-sm p-1.5 text-[#8A8A92] transition hover:bg-[#1A1A1E] hover:text-[#E23B2E]"
                    >
                      <Trash2 aria-hidden className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="font-exotix-mono mt-1 text-[10px] tracking-[0.16em] text-[#8A8A92] uppercase">
                    {product.code}
                  </p>
                  <p className="font-exotix-display mt-auto pt-2 text-[15px] text-[#E23B2E]">
                    {product.price === null
                      ? "Enquire for price"
                      : formatExotixPrice(product.price)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="px-5 py-4 text-[11px] leading-relaxed text-[#8A8A92] sm:px-6">
            {exotixDemo.stockNotice} {EXOTIX_DATA_NOTE}
          </p>
        </>
      )}
    </Drawer>
  );
}
