"use client";

import Link from "next/link";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { tmCategoryBySlug, type TmProduct } from "../data";
import { useTmEnquiry } from "./enquiry-provider";
import { TmProductImage } from "./product-image";

interface ProductCardProps {
  product: TmProduct;
  /** Larger editorial treatment on the homepage. */
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Catalogue card. Pricing is deliberately never invented: unverified prices
 * render as an explicit "Request Wholesale Price" prompt that opens the
 * enquiry list instead of a checkout.
 */
export function ProductCard({
  product,
  priority = false,
  sizes = "(max-width: 640px) 50vw, 33vw",
  className,
}: ProductCardProps) {
  const { addItem, has, openDrawer } = useTmEnquiry();
  const inList = has(product.slug);
  const primaryCategory = tmCategoryBySlug(product.categories[0]);

  return (
    <article
      className={cn(
        "group flex h-full flex-col border border-[#1C1A17]/10 bg-[#FFFDFA] transition-colors duration-300 hover:border-[#1C1A17]/30",
        className,
      )}
    >
      <Link
        href={`/demos/tm-sons/products/${product.slug}`}
        className="relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
        aria-label={`${product.title} — view details`}
      >
        <TmProductImage
          imageId={product.imageId}
          alt={product.alt}
          sizes={sizes}
          priority={priority}
          className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 bg-[#FAF7F2]/95 px-2.5 py-1 text-[9px] tracking-[0.2em] text-[#1C1A17] uppercase">
          {primaryCategory?.label ?? "Collection"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-tmsons-display text-[1.05rem] leading-snug text-[#1C1A17]">
          <Link
            href={`/demos/tm-sons/products/${product.slug}`}
            className="transition-colors hover:text-[#B23B2E]"
          >
            {product.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[#6F6A61]">
          {product.summary}
        </p>

        <p className="mt-4 text-[11px] tracking-[0.18em] text-[#B23B2E] uppercase">
          Request Wholesale Price
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Link
            href={`/demos/tm-sons/products/${product.slug}`}
            className="inline-flex min-h-10 items-center border border-[#1C1A17]/25 px-4 text-[11px] tracking-[0.16em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
          >
            View details
          </Link>
          <button
            type="button"
            onClick={() => {
              if (!inList) {
                addItem({
                  slug: product.slug,
                  title: product.title,
                  image: product.imageId,
                  alt: product.alt,
                  categoryLabel: primaryCategory?.label ?? "Collection",
                });
              }
              openDrawer();
            }}
            aria-label={
              inList
                ? `${product.title} is in your enquiry list — open list`
                : `Add ${product.title} to enquiry list`
            }
            className={cn(
              "inline-flex min-h-10 items-center gap-1.5 px-4 text-[11px] tracking-[0.16em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]",
              inList
                ? "bg-[#1C1A17] text-[#FAF7F2] hover:bg-[#332F29]"
                : "bg-[#B23B2E] text-[#FFFFFF] hover:bg-[#8F2E23]",
            )}
          >
            {inList ? (
              <>
                <Check aria-hidden className="h-3.5 w-3.5" />
                In enquiry
              </>
            ) : (
              <>
                <Plus aria-hidden className="h-3.5 w-3.5" />
                Add to enquiry
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
