"use client";

import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { getExotixCategoryMeta, exotixHomeHref } from "../data";
import {
  EXOTIX_DATA_NOTE,
  formatExotixPrice,
  type ExotixProduct,
} from "../products";
import { ExotixImage } from "./exotix-image";
import { useShop } from "./shop-provider";

interface ProductCardProps {
  product: ExotixProduct;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Premium product card: framed image, wishlist toggle, monospaced code,
 * verified price (or "Enquire") and a clear route into the detail page.
 */
export function ProductCard({
  product,
  priority = false,
  sizes,
  className,
}: ProductCardProps) {
  const { isWished, toggleWishlist } = useShop();
  const wished = isWished(product.slug);
  const category = getExotixCategoryMeta(product.category);
  const detailHref = `${exotixHomeHref}/products/${product.slug}`;

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative">
        <Link
          href={detailHref}
          aria-label={`View ${product.name}`}
          className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
        >
          <ExotixImage
            src={product.image}
            alt={product.imageAlt}
            aspectClassName="aspect-[4/5]"
            loading={priority ? "eager" : "lazy"}
            sizes={sizes}
            imgClassName="transition-transform duration-[700ms] ease-out group-hover:scale-[1.045]"
            className="border border-[#1C1C20] transition-colors duration-300 group-hover:border-[#E23B2E]/50"
          />
        </Link>

        <span className="font-exotix-mono pointer-events-none absolute left-3 top-3 bg-[#0C0C0E]/85 px-2 py-1 text-[9px] tracking-[0.2em] text-[#B9BDC4] uppercase backdrop-blur-sm">
          {category.lane}
        </span>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={
            wished
              ? `Remove ${product.name} from saved list`
              : `Save ${product.name}`
          }
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-sm border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]",
            wished
              ? "border-[#E23B2E] bg-[#E23B2E] text-[#F2EFEA]"
              : "border-[#2A2A30] bg-[#0C0C0E]/85 text-[#B9BDC4] backdrop-blur-sm hover:border-[#E23B2E] hover:text-[#F2EFEA]",
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
        <p className="font-exotix-mono flex items-center justify-between gap-2 text-[10px] tracking-[0.2em] text-[#5A5A62] uppercase">
          <span>{product.code}</span>
          <span className="text-[#8A8A92]">{product.category.replace("-", " ")}</span>
        </p>
        <h3 className="mt-1">
          <Link
            href={detailHref}
            className="font-exotix-display text-[1.02rem] leading-snug tracking-tight text-[#F2EFEA] transition-colors hover:text-[#E23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
          >
            {product.name}
          </Link>
        </h3>

        <div className="mt-1.5 flex items-baseline gap-2.5">
          <span className="font-exotix-display text-[1.05rem] text-[#E23B2E]">
            {product.price === null ? "Enquire for price" : formatExotixPrice(product.price)}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#232327] pt-3">
          <span
            className="font-exotix-mono text-[9px] leading-relaxed tracking-[0.1em] text-[#5A5A62] uppercase"
            title={EXOTIX_DATA_NOTE}
          >
            Price verified 23.10.26 · stock unconfirmed
          </span>
          <Link
            href={detailHref}
            className="font-exotix-mono inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.16em] text-[#B9BDC4] uppercase transition hover:gap-2 hover:text-[#E23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
          >
            Details
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
