"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { revHomeHref } from "../data";
import { formatRevPrice, type RevProduct } from "../products";
import { RevImage } from "./rev-image";
import { useShop } from "./shop-provider";

interface ProductCardProps {
  product: RevProduct;
  sizes?: string;
  /** Staggered entrance delay in seconds. */
  delay?: number;
  className?: string;
}

/**
 * Editorial product card with a restrained hover animation, wishlist toggle
 * and enquiry-only price treatment.
 */
export function ProductCard({
  product,
  sizes,
  delay = 0,
  className,
}: ProductCardProps) {
  const { isWished, toggleWishlist } = useShop();
  const reduce = useReducedMotion();
  const wished = isWished(product.slug);

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative", className)}
    >
      <Link
        href={`${revHomeHref}/products/${product.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]"
      >
        <div className="relative overflow-hidden rounded-[2px]">
          <RevImage
            src={product.image}
            alt={product.imageAlt}
            tone={product.tone}
            tileLabel={product.category.replace("-", " ")}
            aspectClassName="aspect-[4/5]"
            sizes={sizes}
            imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 bg-[#1A1618]/0 transition-colors duration-500 group-hover:bg-[#1A1618]/6" />
          <span className="absolute left-3 top-3 rounded-[2px] bg-[#FAF4F3]/90 px-2.5 py-1 text-[9px] font-semibold tracking-[0.22em] text-[#1A1618] uppercase backdrop-blur-sm">
            Demo entry
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-label={
          wished
            ? `Remove ${product.name} from wishlist`
            : `Save ${product.name} to wishlist`
        }
        aria-pressed={wished}
        className={cn(
          "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-[2px] backdrop-blur-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]",
          wished
            ? "bg-[#B4707F] text-white"
            : "bg-[#FAF4F3]/90 text-[#1A1618] hover:bg-[#F3DCE1]",
        )}
      >
        <Heart
          aria-hidden
          className={cn("h-4 w-4", wished && "fill-current")}
        />
      </button>

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link
            href={`${revHomeHref}/products/${product.slug}`}
            className="font-rev-body text-[15px] font-semibold text-[#1A1618] transition hover:text-[#B4707F]"
          >
            {product.name}
          </Link>
          <p className="mt-1 text-[10px] tracking-[0.22em] text-[#7C7073] uppercase">
            {product.category.replace("-", " ")}
          </p>
        </div>
        <p className="shrink-0 text-right text-[12px] font-semibold text-[#B4707F]">
          {formatRevPrice(product.price)}
        </p>
      </div>
    </motion.article>
  );
}
