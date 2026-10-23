"use client";

import { cn } from "@/lib/utils";
import { syBrand } from "../data";
import { RemoteImg } from "./sy-image";

interface SyLogoProps {
  /** Height of the logo mark in px - the remote aspect ratio is preserved. */
  size?: number;
  className?: string;
  /** Render the typographic wordmark next to the mark (footer, hero). */
  withWordmark?: boolean;
  priority?: boolean;
  /** Hide the wordmark on very narrow screens. */
  wordmarkClassName?: string;
}

/**
 * Official S_Y COLLECTIONS logo, hot-linked from the live CDN.
 *
 * The original proportions are preserved (no crop, no stretch, object-contain).
 * If the remote file ever fails to load, a text-based "S_Y COLLECTIONS"
 * fallback takes its place so no broken-image icon is shown.
 */
export function SyLogo({
  size = 44,
  className,
  withWordmark = false,
  priority = false,
  wordmarkClassName,
}: SyLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="relative inline-block shrink-0 overflow-hidden"
        style={{ height: size, minWidth: size }}
      >
        <RemoteImg
          src={syBrand.logo}
          alt={`${syBrand.name} logo`}
          loading={priority ? "eager" : "lazy"}
          fallback={
            <span
              role="img"
              aria-label={syBrand.name}
              className="flex h-full w-full flex-col items-center justify-center bg-[#F7EDE9] px-1 text-center leading-none"
            >
              <span className="font-sy-display text-[#A63D57]" style={{ fontSize: size * 0.3 }}>
                S_Y
              </span>
              <span
                className="font-sy-body tracking-[0.18em] text-[#4B2C3B] uppercase"
                style={{ fontSize: Math.max(6, size * 0.14) }}
              >
                Collections
              </span>
            </span>
          }
          className="h-full w-auto"
        />
      </span>

      {withWordmark ? (
        <span className={cn("flex flex-col leading-none", wordmarkClassName)}>
          <span className="font-sy-display text-[0.98rem] tracking-[0.3em] text-[#2C1F26] uppercase">
            {syBrand.name}
          </span>
          <span className="mt-1.5 font-sy-body text-[9px] tracking-[0.34em] text-[#A63D57] uppercase">
            Everyday fashion
          </span>
        </span>
      ) : null}
    </span>
  );
}
