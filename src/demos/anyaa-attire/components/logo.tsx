"use client";

import { cn } from "@/lib/utils";
import { anyaaBrand } from "../data";
import { RemoteImg } from "./anyaa-image";

interface AnyaaLogoProps {
  /** Height of the logo mark in px - the remote aspect ratio is preserved. */
  size?: number;
  className?: string;
  /** Render the typographic wordmark next to the mark (footer, hero). */
  withWordmark?: boolean;
  priority?: boolean;
  wordmarkClassName?: string;
}

/**
 * Anyaa Attire logo, hot-linked from its public listing CDN. Original
 * proportions are preserved (object-contain). If the remote file fails, a
 * typographic "ANYAA ATTIRE" fallback takes its place.
 */
export function AnyaaLogo({
  size = 44,
  className,
  withWordmark = false,
  priority = false,
  wordmarkClassName,
}: AnyaaLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="relative inline-block shrink-0 overflow-hidden rounded-full bg-[#EFF3EF]"
        style={{ height: size, width: size }}
      >
        <RemoteImg
          src={anyaaBrand.logo}
          alt={`${anyaaBrand.name} logo`}
          loading={priority ? "eager" : "lazy"}
          fallback={
            <span
              role="img"
              aria-label={anyaaBrand.name}
              className="flex h-full w-full flex-col items-center justify-center bg-[#D3E5DF] text-center leading-none"
            >
              <span
                className="font-anyaa-display tracking-[0.14em] text-[#2E6F62] uppercase"
                style={{ fontSize: size * 0.22 }}
              >
                A
              </span>
            </span>
          }
          className="h-full w-full object-contain"
        />
      </span>

      {withWordmark ? (
        <span className={cn("flex flex-col leading-none", wordmarkClassName)}>
          <span className="font-anyaa-display text-[0.98rem] tracking-[0.3em] text-[#22332F] uppercase">
            {anyaaBrand.name}
          </span>
          <span className="font-anyaa-body mt-1.5 text-[9px] tracking-[0.34em] text-[#2E6F62] uppercase">
            Contemporary wear
          </span>
        </span>
      ) : null}
    </span>
  );
}
