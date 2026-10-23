/* eslint-disable @next/next/no-img-element -- Anyaa Attire hot-links remote
   images on purpose. next/image would require a global remotePatterns change
   that affects every other demo, so this demo keeps an isolated direct <img>
   implementation with a graceful, non-repeating on-error fallback. */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { AnyaaTint } from "../data";
import { LeafPair } from "./icons";

const TINT_BACKGROUNDS: Record<AnyaaTint, string> = {
  sage: "linear-gradient(150deg,#EDF2EE 0%,#D3E5DF 55%,#E7EEE9 100%)",
  teal: "linear-gradient(150deg,#E3EEEA 0%,#C6DCD5 50%,#DFEDE8 100%)",
  mist: "linear-gradient(150deg,#F3F5F2 0%,#E2EAE6 55%,#EDF1EE 100%)",
  ivory: "linear-gradient(150deg,#FBF9F4 0%,#F0EDE2 55%,#F7F5EE 100%)",
};

const TINT_INKS: Record<AnyaaTint, string> = {
  sage: "#2E6F62",
  teal: "#22332F",
  mist: "#6E7C77",
  ivory: "#2E6F62",
};

interface RemoteImgProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
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
  fallback,
}: RemoteImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback ?? <PlaceholderCard label={alt} />}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

interface PlaceholderCardProps {
  label: string;
  tint?: AnyaaTint;
  compact?: boolean;
}

/**
 * Tasteful typographic/gradient card used in place of product photography.
 * No garment photo exists for most concept entries, so this original CSS/SVG
 * artwork (never a downloaded asset) is the approved, honest fallback.
 */
export function PlaceholderCard({
  label,
  tint = "sage",
  compact = false,
}: PlaceholderCardProps) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ background: TINT_BACKGROUNDS[tint] }}
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-3 rounded-[2px] border"
        style={{ borderColor: `${TINT_INKS[tint]}22` }}
      />
      <LeafPair
        className={cn(
          "text-[#2E6F62]/60",
          compact ? "h-5 w-8" : "h-8 w-12 sm:h-10 sm:w-16",
        )}
      />
      <span
        className={cn(
          "font-anyaa-display mt-3 leading-none tracking-[0.34em] uppercase",
          compact ? "text-[9px]" : "text-[0.78rem] sm:text-[0.95rem]",
        )}
        style={{ color: TINT_INKS[tint] }}
      >
        Anyaa
      </span>
      {!compact ? (
        <span className="font-anyaa-body mt-2 max-w-[15rem] text-[10px] leading-relaxed tracking-[0.2em] text-[#6E7C77] uppercase">
          Concept placeholder
        </span>
      ) : null}
    </div>
  );
}

interface AnyaaImageProps {
  /** null renders the botanical placeholder card directly (no request). */
  src: string | null;
  alt: string;
  tint?: AnyaaTint;
  /** Aspect frame for the image box, e.g. "aspect-[4/5]". */
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  loading?: "lazy" | "eager";
  compactPlaceholder?: boolean;
  fallback?: ReactNode;
}

/**
 * Framed product/editorial image. Always sits inside a fixed aspect box so
 * nothing shifts while the image decodes, and always uses the supplied remote
 * URL directly - or the placeholder card when no genuine photo exists.
 */
export function AnyaaImage({
  src,
  alt,
  tint = "sage",
  aspectClassName = "aspect-[4/5]",
  className,
  imgClassName,
  fit = "cover",
  loading = "lazy",
  compactPlaceholder = false,
  fallback,
}: AnyaaImageProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#EFF3EF]",
        aspectClassName,
        className,
      )}
    >
      {showPlaceholder ? (
        <>{fallback ?? <PlaceholderCard label={alt} tint={tint} compact={compactPlaceholder} />}</>
      ) : (
        <img
          src={src}
          alt={alt}
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
