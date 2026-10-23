"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { AnyaaProduct } from "../products";
import { AnyaaImage } from "./anyaa-image";

/** Main image + thumbnail switcher used on product detail pages. */
export function ProductGallery({ product }: { product: AnyaaProduct }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <AnyaaImage
        src={product.image}
        alt={product.imageAlt}
        tint={product.tint}
        aspectClassName="aspect-[4/5]"
        loading="eager"
        className="rounded-[2px]"
      />

      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => setActive(0)}
          aria-label="Show primary view"
          aria-pressed={active === 0}
          className={cn(
            "w-20 rounded-[2px] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]",
            active === 0
              ? "ring-1 ring-[#2E6F62] ring-offset-2 ring-offset-[#FAF8F3]"
              : "opacity-75 hover:opacity-100",
          )}
        >
          <AnyaaImage
            src={product.image}
            alt=""
            tint={product.tint}
            aspectClassName="aspect-[4/5]"
            compactPlaceholder
          />
        </button>
        <span className="font-anyaa-body flex items-center text-[11px] leading-relaxed text-[#6E7C77]">
          {product.image
            ? "Archived brand image"
            : "Concept placeholder - no confirmed photograph"}
        </span>
      </div>
    </div>
  );
}
