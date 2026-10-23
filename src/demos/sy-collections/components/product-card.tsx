"use client";

import Link from "next/link";
import { Heart, Eye, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSyCategoryMeta, syHomeHref } from "../data";
import { formatSyPrice, type SyProduct } from "../products";
import { SyImage } from "./sy-image";
import { useShop } from "./shop-provider";

interface ProductCardProps {
  product: SyProduct;
  /** Above-the-fold cards can opt into eager loading. */
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Editorial product card: image, wishlist toggle, quick view and a clear
 * route into the product detail page. Prices stay editable demo data.
 */
export function ProductCard({
  product,
  priority = false,
  sizes,
  className,
}: ProductCardProps) {
  const { isWished, toggleWishlist, openQuickView } = useShop();
  const wished = isWished(product.slug);
  const category = getSyCategoryMeta(product.category);
  const detailHref = `${syHomeHref}/products/${product.slug}`;

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative">
        <Link
          href={detailHref}
          aria-label={`View ${product.name}`}
          className="block overflow-hidden rounded-[2px] ring-offset-2 ring-offset-[#FBF6F2] focus-visible:outline-2 focus-visible:outline-[#A63D57]"
        >
          <SyImage
            src={product.image}
            alt={product.imageAlt}
            aspectClassName="aspect-[4/5]"
            loading={priority ? "eager" : "lazy"}
            sizes={sizes}
            imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
        </Link>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#FBF6F2]/92 px-2.5 py-1 text-[9px] font-medium tracking-[0.2em] text-[#4B2C3B] uppercase backdrop-blur-sm">
          {category.label}
        </span>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]",
            wished
              ? "border-[#A63D57] bg-[#A63D57] text-white"
              : "border-[#EADFDB] bg-[#FBF6F2]/92 text-[#4B2C3B] backdrop-blur-sm hover:border-[#A63D57] hover:text-[#A63D57]",
          )}
        >
          <Heart
            aria-hidden
            className={cn("h-4 w-4 transition-transform", wished && "scale-110")}
            fill={wished ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="mt-3.5 flex flex-1 flex-col">
        <p className="text-[10px] tracking-[0.24em] text-[#8B7B81] uppercase">
          {category.label}
        </p>
        <h3 className="mt-1">
          <Link
            href={detailHref}
            className="font-sy-display text-[1.05rem] leading-snug text-[#2C1F26] transition-colors hover:text-[#A63D57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
          >
            {product.name}
          </Link>
        </h3>

        <div className="mt-1.5 flex items-baseline gap-2.5">
          <span className="font-sy-display text-[1.05rem] text-[#A63D57]">
            {formatSyPrice(product.price)}
          </span>
          {product.referencePrice ? (
            <span className="text-xs text-[#9A8A90] line-through">
              {formatSyPrice(product.referencePrice)}
            </span>
          ) : null}
        </div>

        <div className="mt-3 flex items-center gap-4 border-t border-[#EFE5E1] pt-3">
          <button
            type="button"
            onClick={() => openQuickView(product.slug)}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.16em] text-[#4B2C3B] uppercase transition hover:text-[#A63D57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
          >
            <Eye aria-hidden className="h-3.5 w-3.5" />
            Quick view
          </button>
          <Link
            href={detailHref}
            className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.16em] text-[#A63D57] uppercase transition hover:gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
          >
            Details
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
