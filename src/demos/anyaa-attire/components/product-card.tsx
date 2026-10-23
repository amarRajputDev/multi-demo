"use client";

import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAnyaaCategoryMeta, anyaaHomeHref } from "../data";
import { anyaaPriceLabel, type AnyaaProduct } from "../products";
import { AnyaaImage } from "./anyaa-image";
import { useShop } from "./shop-provider";

interface ProductCardProps {
  product: AnyaaProduct;
  priority?: boolean;
  className?: string;
}

/**
 * Editorial product card: placeholder-or-photo frame, wishlist toggle and a
 * clear route into the product detail page. Prices stay honest - "Enquire for
 * Price" whenever the record has no verified amount.
 */
export function ProductCard({
  product,
  priority = false,
  className,
}: ProductCardProps) {
  const { isWished, toggleWishlist } = useShop();
  const wished = isWished(product.slug);
  const category = getAnyaaCategoryMeta(product.category);
  const detailHref = `${anyaaHomeHref}/products/${product.slug}`;

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative">
        <Link
          href={detailHref}
          aria-label={`View ${product.name}`}
          className="block overflow-hidden rounded-[2px] ring-offset-2 ring-offset-[#FAF8F3] focus-visible:outline-2 focus-visible:outline-[#2E6F62]"
        >
          <AnyaaImage
            src={product.image}
            alt={product.imageAlt}
            tint={product.tint}
            aspectClassName="aspect-[4/5]"
            loading={priority ? "eager" : "lazy"}
            imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        </Link>

        <span className="font-anyaa-body pointer-events-none absolute left-3 top-3 rounded-full bg-[#FAF8F3]/92 px-2.5 py-1 text-[9px] font-medium tracking-[0.2em] text-[#22332F] uppercase backdrop-blur-sm">
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
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]",
            wished
              ? "border-[#2E6F62] bg-[#2E6F62] text-white"
              : "border-[#DFE7E2] bg-[#FAF8F3]/92 text-[#22332F] backdrop-blur-sm hover:border-[#2E6F62] hover:text-[#2E6F62]",
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
        <p className="font-anyaa-body text-[10px] tracking-[0.24em] text-[#6E7C77] uppercase">
          {category.label}
        </p>
        <h3 className="mt-1">
          <Link
            href={detailHref}
            className="font-anyaa-display text-[1.05rem] leading-snug text-[#22332F] transition-colors hover:text-[#2E6F62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
          >
            {product.name}
          </Link>
        </h3>

        <p className="font-anyaa-display mt-1.5 text-[1.02rem] text-[#2E6F62]">
          {anyaaPriceLabel(product)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#DFE7E2] pt-3">
          <span className="font-anyaa-body text-[10px] tracking-[0.16em] text-[#6E7C77] uppercase">
            {product.verification === "demo-only" ? "Concept entry" : "Entry"}
          </span>
          <Link
            href={detailHref}
            className="font-anyaa-body inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.16em] text-[#2E6F62] uppercase transition hover:gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
          >
            Details
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
