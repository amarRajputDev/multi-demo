/* eslint-disable @next/next/no-img-element -- Rev Ladyboss hot-links the brand's
   remote profile image on purpose. next/image would require a global
   remotePatterns change that affects every other demo, so this demo keeps an
   isolated direct <img> implementation with a graceful, non-repeating on-error
   fallback. Nothing is downloaded or stored locally. */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { revBrand } from "../data";

interface RemoteImgProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  fallback?: ReactNode;
}

/**
 * Direct remote image with a one-shot error fallback. When the URL fails, the
 * <img> is unmounted and replaced by the fallback, so the browser never
 * retries the failed request in a loop.
 */
export function RemoteImg({
  src,
  alt,
  className,
  loading = "lazy",
  width,
  height,
  fallback,
}: RemoteImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback ?? <MonogramTile label={alt} />}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

interface RevImageProps {
  /** Remote URL. When empty, the typographic tile is rendered instead. */
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  loading?: "lazy" | "eager";
  sizes?: string;
  fallback?: ReactNode;
  /** Deterministic placeholder tone (1-4) used for the typographic tile. */
  tone?: 1 | 2 | 3 | 4;
  /** Optional label rendered inside the placeholder tile. */
  tileLabel?: string;
}

const TILE_STYLES: Record<
  1 | 2 | 3 | 4,
  { bg: string; ink: string; accent: string; soft: string }
> = {
  1: {
    bg: "linear-gradient(150deg,#FAF4F3 0%,#F3DCE1 52%,#EBD0D7 100%)",
    ink: "#1A1618",
    accent: "#B4707F",
    soft: "#F3DCE1",
  },
  2: {
    bg: "linear-gradient(160deg,#1A1618 0%,#2A2226 60%,#3A2C32 100%)",
    ink: "#F7ECEE",
    accent: "#D9A3AE",
    soft: "#2A2226",
  },
  3: {
    bg: "linear-gradient(145deg,#F3DCE1 0%,#E7C6CF 48%,#DDB4C0 100%)",
    ink: "#1A1618",
    accent: "#8E5765",
    soft: "#EBD5DB",
  },
  4: {
    bg: "linear-gradient(150deg,#241D21 0%,#1A1618 55%,#0F0C0E 100%)",
    ink: "#F3DCE1",
    accent: "#B4707F",
    soft: "#241D21",
  },
};

/**
 * Approved fallback for products with no accessible brand photography: a
 * tasteful typographic tile in the brand palette (no fabricated product image).
 */
export function MonogramTile({
  label,
  tone = 1,
  compact = false,
  className,
}: {
  label: string;
  tone?: 1 | 2 | 3 | 4;
  compact?: boolean;
  className?: string;
}) {
  const style = TILE_STYLES[tone] ?? TILE_STYLES[1];
  return (
    <div
      role="img"
      aria-label={label}
      style={{ background: style.bg }}
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-5 text-center",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-6 h-px"
        style={{ background: style.accent, opacity: 0.5 }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-6 h-px"
        style={{ background: style.accent, opacity: 0.5 }}
      />
      <span
        className="font-rev-heading leading-none"
        style={{ color: style.ink, fontSize: compact ? "1.6rem" : "clamp(2.2rem,6vw,4rem)" }}
      >
        {revBrand.monogram}
      </span>
      <span
        className="font-rev-body mt-2 text-[9px] uppercase tracking-[0.4em]"
        style={{ color: style.accent }}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Framed image used across the demo. Sits inside a fixed aspect box so
 * nothing shifts while the image decodes. Empty `src` (or a failed load)
 * renders the brand-styled typographic tile.
 */
export function RevImage({
  src,
  alt,
  aspectClassName = "aspect-[4/5]",
  className,
  imgClassName,
  fit = "cover",
  loading = "lazy",
  sizes,
  fallback,
  tone = 1,
  tileLabel,
}: RevImageProps) {
  const [failed, setFailed] = useState(false);
  const showFallback = failed || !src;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#F3DCE1]",
        aspectClassName,
        className,
      )}
    >
      {showFallback ? (
        <>
          {fallback ?? (
            <MonogramTile label={tileLabel ?? alt} tone={tone} />
          )}
        </>
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
