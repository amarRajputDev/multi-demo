"use client";

import Link from "next/link";
import { Eye, Heart, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice, type CielProduct } from "../products";
import { CielImage } from "./ciel-image";
import { useCielStore } from "./store-provider";

export function ProductCard({
  product,
  onQuickView,
  priority = false,
}: {
  product: CielProduct;
  onQuickView?: (product: CielProduct) => void;
  priority?: boolean;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useCielStore();
  const wishlisted = isWishlisted(product.slug);

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#17171A]">
        <Link
          href={`/demos/ciel-shop/products/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        >
          <CielImage
            src={product.image}
            alt={product.imageAlt}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            priority={priority}
            imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>

        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-pressed={wishlisted}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Save ${product.name} to wishlist`
          }
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/40 text-[#F4F1EC] backdrop-blur-sm transition-colors hover:border-[#A9D6E5] hover:text-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
        >
          <Heart
            aria-hidden
            className={cn("h-4 w-4", wishlisted && "fill-[#A9D6E5] text-[#A9D6E5]")}
          />
        </button>

        <div className="absolute inset-x-3 bottom-3 z-20 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
          <button
            type="button"
            onClick={() => addToCart(product.slug, "M")}
            className="flex flex-1 items-center justify-center gap-1.5 bg-[#F4F1EC] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
          >
            <Plus aria-hidden className="h-3.5 w-3.5" />
            Add · M
          </button>
          {onQuickView ? (
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="grid h-9 w-9 place-items-center border border-white/20 bg-black/40 text-[#F4F1EC] backdrop-blur-sm transition-colors hover:border-[#A9D6E5] hover:text-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
              aria-label={`Quick view ${product.name}`}
            >
              <Eye aria-hidden className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-ciel-body text-sm font-medium leading-snug text-[#F4F1EC]">
            <Link
              href={`/demos/ciel-shop/products/${product.slug}`}
              className="ciel-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
            >
              {product.name}
            </Link>
          </h3>
          <span className="shrink-0 text-sm text-[#F4F1EC]/80">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-[#8A8F96]">
          {product.image ? "Archive image" : "Image to be supplied"}
        </p>
      </div>
    </article>
  );
}
