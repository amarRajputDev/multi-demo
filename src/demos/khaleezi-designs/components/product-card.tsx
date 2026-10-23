"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { khaleeziBrand } from "../data";
import type { KhaleeziProduct } from "../products";
import { PendingArtwork } from "./brand";
import { WishlistButton } from "./enquiry-provider";

export function KhaleeziCard({ product }: { product: KhaleeziProduct }) {
  return (
    <article className="khaleezi-lift group relative flex h-full flex-col bg-[#FBF8F2]">
      <div className="relative aspect-[3/4] overflow-hidden border border-[#E4DCD0]">
        <Link
          href={`${khaleeziBrand.homeHref}/products/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        >
          <PendingArtwork tone={product.tone} label={product.name} />
        </Link>
        <div className="absolute right-2.5 top-2.5 z-20">
          <WishlistButton slug={product.slug} name={product.name} />
        </div>
        <span className="absolute bottom-0 left-0 z-20 bg-[#FBF8F2]/95 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-[#2F6D72]">
          Enquire for price
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-3">
        <h3 className="font-khaleezi-display text-[15px] leading-snug text-[#2A2320]">
          <Link
            href={`${khaleeziBrand.homeHref}/products/${product.slug}`}
            className="hover:text-[#2F6D72]"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#7A6E67]">
          S – 7XL
        </p>
        <Link
          href={`${khaleeziBrand.homeHref}/products/${product.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-[#2F6D72] opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          tabIndex={-1}
        >
          View piece
          <ArrowUpRight aria-hidden className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
