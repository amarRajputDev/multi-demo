/* eslint-disable @next/next/no-img-element -- S_Y COLLECTIONS hot-links remote
   CDN images on purpose. next/image would require a global remotePatterns
   change that affects every other demo, so this demo keeps an isolated direct
   <img> implementation with a graceful, non-repeating on-error fallback. */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
 * Direct remote image with a one-shot error fallback.
 *
 * When the URL fails, the <img> is unmounted and replaced by the fallback, so
 * the browser never retries the failed request in a loop.
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
    return <>{fallback ?? <WordmarkFallback label={alt} />}</>;
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

interface SyImageProps {
  src: string;
  alt: string;
  /** Aspect frame for the image box, e.g. "aspect-[4/5]". */
  aspectClassName?: string;
  /** Classes for the outer frame. */
  className?: string;
  /** Classes for the image element itself. */
  imgClassName?: string;
  fit?: "cover" | "contain";
  loading?: "lazy" | "eager";
  /** Hint for responsive grids (harmless without srcset). */
  sizes?: string;
  /** Custom fallback node rendered if the remote image cannot load. */
  fallback?: ReactNode;
}

/**
 * Framed product/editorial image used across the demo. Always sits inside a
 * fixed aspect box so nothing shifts while the image decodes, and always uses
 * the supplied remote URL directly.
 */
export function SyImage({
  src,
  alt,
  aspectClassName = "aspect-[4/5]",
  className,
  imgClassName,
  fit = "cover",
  loading = "lazy",
  sizes,
  fallback,
}: SyImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#F2E8E3]",
        aspectClassName,
        className,
      )}
    >
      {failed ? (
        <>{fallback ?? <WordmarkFallback label={alt} />}</>
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

/** On-brand placeholder used whenever a remote image does not resolve. */
export function WordmarkFallback({
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
      className="flex h-full w-full flex-col items-center justify-center gap-1 bg-[linear-gradient(140deg,#F7EDE9_0%,#EFE0E4_55%,#F6ECE6_100%)] px-5 text-center"
    >
      <span className="font-sy-display text-[clamp(0.9rem,2.2vw,1.35rem)] leading-none tracking-[0.22em] text-[#4B2C3B] uppercase">
        S_Y
      </span>
      <span className="font-sy-body text-[9px] tracking-[0.42em] text-[#A63D57] uppercase">
        Collections
      </span>
      {!compact ? (
        <span className="mt-1 max-w-[16rem] text-[10px] leading-relaxed text-[#7A6A71]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
