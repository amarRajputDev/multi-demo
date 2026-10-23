"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { RevProduct } from "../products";
import { MonogramTile, RevImage } from "./rev-image";

/**
 * Product gallery. This concept has no accessible product photography, so
 * each piece renders a series of brand-styled typographic plates (labelled as
 * demonstration art). If real remote URLs are added to a product's `gallery`
 * later they render here automatically.
 */
export function ProductGallery({ product }: { product: RevProduct }) {
  const frames: { src: string; label: string }[] =
    product.gallery && product.gallery.length > 0
      ? product.gallery.map((src, index) => ({
          src,
          label: `${product.name} view ${index + 1}`,
        }))
      : [
          { src: product.image, label: product.name },
          { src: "", label: "Fabric note" },
          { src: "", label: "Styled look" },
        ];
  const [active, setActive] = useState(0);
  const current = frames[active] ?? frames[0];

  return (
    <div>
      <div className="relative overflow-hidden rounded-[2px] border border-[#E8D9DC] bg-[#F3DCE1]">
        {current.src ? (
          <RevImage
            src={current.src}
            alt={`${product.name} - ${current.label}`}
            tone={product.tone}
            aspectClassName="aspect-[4/5]"
            loading="eager"
          />
        ) : (
          <div className="aspect-[4/5] w-full">
            <MonogramTile
              label={current.label}
              tone={
                active === 0
                  ? product.tone
                  : ((((product.tone - 1 + active) % 4) + 1) as 1 | 2 | 3 | 4)
              }
            />
          </div>
        )}
        <span className="absolute bottom-3 left-3 rounded-[2px] bg-[#FAF4F3]/90 px-2.5 py-1 text-[9px] font-semibold tracking-[0.2em] text-[#1A1618] uppercase">
          {active === 0 ? "Demo cover plate" : "Demo detail plate"}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {frames.map((frame, index) => (
          <button
            key={`${frame.label}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${frame.label}`}
            aria-current={active === index}
            className={cn(
              "overflow-hidden rounded-[2px] border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]",
              active === index
                ? "border-[#1A1618]"
                : "border-[#E8D9DC] hover:border-[#B4707F]",
            )}
          >
            {frame.src ? (
              <RevImage
                src={frame.src}
                alt={`${product.name} thumbnail ${index + 1}`}
                tone={product.tone}
                aspectClassName="aspect-square"
              />
            ) : (
              <div className="aspect-square w-full">
                <MonogramTile
                  label={frame.label}
                  tone={
                    ((((product.tone - 1 + index) % 4) + 1) as 1 | 2 | 3 | 4)
                  }
                  compact
                />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
