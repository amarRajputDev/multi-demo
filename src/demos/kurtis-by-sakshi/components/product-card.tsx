"use client";

import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { sakshiCategories, sakshiHomeHref } from "../data";
import { SAKSHI_PRICE_NOTE, type SakshiProduct } from "../products";
import { SakshiImage } from "./sakshi-image";
import { useShop } from "./shop-provider";

/** Quick-add size popover used on cards (demonstration size run). */
function QuickAdd({ product }: { product: SakshiProduct }) {
  const { addToList } = useShop();

  return (
    <div className="absolute inset-x-3 bottom-3 flex flex-wrap justify-center gap-1.5 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
      {product.sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => addToList(product, size, 1)}
          className="grid h-8 min-w-8 place-items-center rounded-full bg-[#FBF6EF]/95 px-2 text-[11px] font-semibold text-[#3B1F24] shadow-sm transition hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
          aria-label={`Add ${product.name}, size ${size}, to enquiry list`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

/** Product card: placeholder art, enquiry pricing, wishlist and quick-add. */
export function ProductCard({
  product,
  className,
}: {
  product: SakshiProduct;
  className?: string;
}) {
  const { isWished, toggleWishlist, addToList } = useShop();
  const wished = isWished(product.slug);
  const categoryLabel =
    sakshiCategories.find((entry) => entry.key === product.category)?.label ??
    product.category;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[#E9DDD4] bg-white/70 transition hover:border-[#D8C3BB] hover:shadow-[0_16px_40px_rgba(59,31,36,0.08)]",
        className,
      )}
    >
      <div className="relative">
        <Link
          href={`${sakshiHomeHref}/products/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B47]"
        >
          <SakshiImage
            src={product.image}
            alt={product.imageAlt}
            tone={product.tone}
            compact
            aspectClassName="aspect-[4/5]"
          />
        </Link>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Save ${product.name} to wishlist`
          }
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[#FBF6EF]/90 shadow-sm transition hover:bg-white",
            wished ? "text-[#8E3B47]" : "text-[#3B1F24]",
          )}
        >
          <Heart
            aria-hidden
            className={cn("h-4 w-4", wished && "fill-current")}
          />
        </button>

        <span className="absolute left-3 top-3 rounded-full bg-[#3B1F24]/85 px-2.5 py-1 text-[9px] font-medium tracking-[0.2em] text-[#F3E4DF] uppercase">
          Demo entry
        </span>

        <QuickAdd product={product} />
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-[10px] tracking-[0.24em] text-[#8E3B47] uppercase">
          {categoryLabel}
        </p>
        <h3 className="font-sakshi-display text-lg leading-snug text-[#3B1F24]">
          <Link
            href={`${sakshiHomeHref}/products/${product.slug}`}
            className="transition hover:text-[#8E3B47]"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-auto pt-2 text-[12px] font-semibold tracking-[0.14em] text-[#8E3B47] uppercase">
          Enquire for price
        </p>
        <p className="text-[11px] leading-relaxed text-[#7A6461]">
          {SAKSHI_PRICE_NOTE}
        </p>
        <button
          type="button"
          onClick={() => addToList(product, product.sizes[0] ?? "M", 1)}
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#D8C3BB] px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#3B1F24] uppercase transition hover:border-[#8E3B47] hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
        >
          <MessageCircle aria-hidden className="h-3.5 w-3.5" />
          Add to enquiry
        </button>
      </div>
    </article>
  );
}
