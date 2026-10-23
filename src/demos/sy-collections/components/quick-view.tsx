"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { getSyCategoryMeta, syDemo, syHomeHref } from "../data";
import { formatSyPrice, getSyProduct, type SyProduct } from "../products";
import { Drawer } from "./drawer";
import { SyImage } from "./sy-image";
import { useShop } from "./shop-provider";

/**
 * Quick-view drawer: enough detail to decide without leaving the grid, with a
 * clearly-marked demonstration size selector and a demo-only bag action.
 */
export function QuickViewDrawer() {
  const { quickViewSlug, closeQuickView } = useShop();
  const product = quickViewSlug ? getSyProduct(quickViewSlug) : undefined;

  return (
    <Drawer
      open={Boolean(product)}
      onClose={closeQuickView}
      lockKey="sy-quick-view"
      title="Quick view"
      subtitle="Demonstration panel"
    >
      {product ? <QuickViewBody key={product.slug} product={product} /> : null}
    </Drawer>
  );
}

function QuickViewBody({ product }: { product: SyProduct }) {
  const { addToCart, toggleWishlist, isWished, closeQuickView } = useShop();
  const [size, setSize] = useState(product.sizes[0]);
  const wished = isWished(product.slug);

  return (
    <div>
      <SyImage
        src={product.image}
        alt={product.imageAlt}
        aspectClassName="aspect-[4/5]"
      />

      <div className="space-y-5 px-5 py-5 sm:px-6">
        <div>
          <p className="text-[10px] tracking-[0.28em] text-[#A63D57] uppercase">
            {getSyCategoryMeta(product.category).label}
          </p>
          <h2 className="font-sy-display mt-2 text-2xl leading-tight text-[#2C1F26]">
            {product.name}
          </h2>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-sy-display text-xl text-[#A63D57]">
              {formatSyPrice(product.price)}
            </span>
            {product.referencePrice ? (
              <span className="text-sm text-[#9A8A90] line-through">
                {formatSyPrice(product.referencePrice)}
              </span>
            ) : null}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[#6B5A61]">
          {product.description}
        </p>

        <div>
          <p className="text-[10px] tracking-[0.22em] text-[#7A6A71] uppercase">
            Size - demonstration
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                aria-pressed={size === option}
                className={`min-w-11 rounded-full border px-3 py-1.5 text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57] ${
                  size === option
                    ? "border-[#2C1F26] bg-[#2C1F26] text-[#FBF6F2]"
                    : "border-[#E4D8D3] bg-white text-[#4B2C3B] hover:border-[#A63D57]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-[#7A6A71]">
            {syDemo.sizeNotice}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => addToCart(product, size, 1)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2C1F26] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
          >
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Add to bag
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wished}
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57] ${
              wished
                ? "border-[#A63D57] bg-[#FBEFF1] text-[#A63D57]"
                : "border-[#E4D8D3] bg-white text-[#4B2C3B] hover:border-[#A63D57]"
            }`}
          >
            <Heart
              aria-hidden
              className="h-4.5 w-4.5"
              fill={wished ? "currentColor" : "none"}
            />
          </button>
        </div>

        <Link
          href={`${syHomeHref}/products/${product.slug}`}
          onClick={closeQuickView}
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.18em] text-[#A63D57] uppercase underline decoration-[#E9CFD5] underline-offset-4 transition hover:decoration-[#A63D57]"
        >
          View full details
        </Link>

        <p className="border-t border-[#EFE5E1] pt-4 text-[11px] leading-relaxed text-[#7A6A71]">
          {syDemo.stockNotice} Prices shown are demonstration data.
        </p>
      </div>
    </div>
  );
}
