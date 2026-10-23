/* eslint-disable @next/next/no-img-element -- Exotix In hot-links the brand's
   live Shopify CDN images on purpose. next/image would require a global
   remotePatterns change that affects every other demo, so this demo keeps an
   isolated direct <img> implementation with a graceful, non-repeating on-error
   fallback. Nothing is downloaded or stored locally. */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Framed remote image used across the demo. Always sits inside a fixed aspect
 * box so nothing shifts while the image decodes, and always uses the supplied
 * remote URL directly. On error the <img> is unmounted once and replaced by
 * the brand-styled typographic placeholder - the browser never retries.
 */
interface ExotixImageProps {
  src: string;
  alt: string;
  /** Aspect frame for the image box, e.g. "aspect-[4/5]". */
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  loading?: "lazy" | "eager";
  sizes?: string;
  fallback?: ReactNode;
}

export function ExotixImage({
  src,
  alt,
  aspectClassName = "aspect-[4/5]",
  className,
  imgClassName,
  fit = "cover",
  loading = "lazy",
  sizes,
  fallback,
}: ExotixImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#141416]",
        aspectClassName,
        className,
      )}
    >
      {failed ? (
        <>{fallback ?? <ExotixPlaceholder label={alt} />}</>
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={loading}
          decoding="async"
          draggable={false}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full",
            fit === "cover" ? "object-cover" : "object-contain",
            imgClassName,
          )}
        />
      )}
    </div>
  );
}

/** Typographic placeholder used whenever a remote image does not resolve. */
export function ExotixPlaceholder({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-[linear-gradient(155deg,#141416_0%,#0C0C0E_55%,#1A1A1E_100%)] px-5 text-center"
    >
      <span className="font-exotix-display text-[clamp(0.95rem,2.4vw,1.4rem)] leading-none tracking-[0.18em] text-[#F2EFEA] uppercase">
        Exotix
      </span>
      <span className="font-exotix-mono text-[9px] tracking-[0.4em] text-[#E23B2E] uppercase">
        Image unavailable
      </span>
      {!compact ? (
        <span className="mt-1 max-w-[16rem] text-[10px] leading-relaxed text-[#8A8A92]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
