"use client";

import { cn } from "@/lib/utils";
import { revBrand } from "../data";
import { RemoteImg } from "./rev-image";

interface RevLogoProps {
  /** Height of the logo mark in px - the remote aspect ratio is preserved. */
  size?: number;
  className?: string;
  withWordmark?: boolean;
  priority?: boolean;
  wordmarkClassName?: string;
}

/**
 * Official Rev Ladyboss profile image, hot-linked from the public S3 cache
 * used by the business directory listing. Original proportions are preserved
 * (object-contain, no crop). If the remote file fails, a typographic "Lady
 * Boss" fallback takes its place so no broken-image icon is ever shown.
 */
export function RevLogo({
  size = 44,
  className,
  withWordmark = false,
  priority = false,
  wordmarkClassName,
}: RevLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="relative inline-block shrink-0 overflow-hidden rounded-[2px] bg-[#F3DCE1]"
        style={{ height: size, minWidth: size }}
      >
        <RemoteImg
          src={revBrand.logo}
          alt={`${revBrand.name} logo`}
          loading={priority ? "eager" : "lazy"}
          fallback={
            <span
              role="img"
              aria-label={revBrand.name}
              className="flex h-full w-full flex-col items-center justify-center bg-[#F3DCE1] px-1 text-center leading-none"
            >
              <span
                className="font-rev-heading text-[#1A1618]"
                style={{ fontSize: size * 0.34 }}
              >
                {revBrand.monogram}
              </span>
              <span
                className="font-rev-body tracking-[0.2em] text-[#B4707F] uppercase"
                style={{ fontSize: Math.max(6, size * 0.14) }}
              >
                Lady Boss
              </span>
            </span>
          }
          className="h-full w-full object-contain"
        />
      </span>

      {withWordmark ? (
        <span className={cn("flex flex-col leading-none", wordmarkClassName)}>
          <span className="font-rev-heading text-[0.95rem] text-current">
            {revBrand.name}
          </span>
          <span className="font-rev-body mt-1.5 text-[9px] tracking-[0.32em] text-[#B4707F] uppercase">
            Instagram fashion
          </span>
        </span>
      ) : null}
    </span>
  );
}
