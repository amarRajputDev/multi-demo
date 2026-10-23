"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SyProduct } from "../products";
import { SyImage } from "./sy-image";

/** Main image + thumbnail switcher used on product detail pages. */
export function ProductGallery({ product }: { product: SyProduct }) {
  const images = product.gallery?.length ? product.gallery : [product.image];
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div>
      <SyImage
        src={current}
        alt={
          active === 0
            ? product.imageAlt
            : `${product.imageAlt} - alternate view ${active + 1}`
        }
        aspectClassName="aspect-[4/5]"
        loading="eager"
        className="rounded-[2px]"
      />

      {images.length > 1 ? (
        <div className="mt-3 flex gap-3">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show view ${index + 1} of ${images.length}`}
              aria-pressed={active === index}
              className={cn(
                "w-20 rounded-[2px] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]",
                active === index
                  ? "ring-1 ring-[#2C1F26] ring-offset-2 ring-offset-[#FBF6F2]"
                  : "opacity-75 hover:opacity-100",
              )}
            >
              <SyImage src={src} alt="" aspectClassName="aspect-[4/5]" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
