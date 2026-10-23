/* eslint-disable @next/next/no-img-element -- Kurtis By Sakshi hot-links
   remote brand photography when available. next/image would require a global
   remotePatterns change that affects every other demo, so this demo keeps an
   isolated direct <img> implementation with a graceful, one-shot on-error
   fallback (no retry loop). Today every product uses the placeholder path
   because no genuine brand photo could be verified. */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PetalMotif } from "./icons";
import { SakshiWordmark } from "./logo";

interface SakshiImageProps {
  /** Remote URL, or null to render the typographic placeholder directly. */
  src: string | null;
  alt: string;
  aspectClassName?: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  loading?: "lazy" | "eager";
  /** Placeholder tone token (1–5); defaults to 1. */
  tone?: 1 | 2 | 3 | 4 | 5;
  /** Compact placeholder (product cards); larger lock-up on detail/hero. */
  compact?: boolean;
  /** Optional label shown under the wordmark inside the placeholder. */
  caption?: string;
  fallback?: ReactNode;
}

/**
 * Framed image used across the demo. Sits in a fixed aspect box so nothing
 * shifts while decoding. With a null src (or after a one-shot load error) it
 * renders a brand-styled typographic placeholder — never a broken image and
 * never a retry loop.
 */
export function SakshiImage({
  src,
  alt,
  aspectClassName = "aspect-[4/5]",
  className,
  imgClassName,
  fit = "cover",
  loading = "lazy",
  tone = 1,
  compact = false,
  caption,
  fallback,
}: SakshiImageProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspectClassName,
        className,
      )}
    >
      {showPlaceholder ? (
        <>
          {fallback ?? (
            <PlaceholderCard
              alt={alt}
              tone={tone}
              compact={compact}
              caption={caption}
            />
          )}
        </>
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

/** On-brand typographic placeholder used in place of unverified photography. */
export function PlaceholderCard({
  alt,
  tone = 1,
  compact = false,
  caption,
}: {
  alt: string;
  tone?: 1 | 2 | 3 | 4 | 5;
  compact?: boolean;
  caption?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "sakshi-weave flex h-full w-full flex-col items-center justify-center gap-2 border border-[#E7D5CE]/70 px-5 text-center",
        `sakshi-tone-${tone}`,
      )}
    >
      <div className="grid place-items-center rounded-full border border-[#8E3B47]/25 bg-[#FBF6EF]/70 p-2.5">
        <PetalMotif
          className={compact ? "h-3.5 w-3.5 text-[#8E3B47]" : "h-5 w-5 text-[#8E3B47]"}
        />
      </div>
      <SakshiWordmark size={compact ? "sm" : "md"} />
      {!compact ? (
        <p className="font-sakshi-body max-w-[15rem] text-[10px] leading-relaxed tracking-[0.12em] text-[#7A6461] uppercase">
          {caption ?? "Photography placeholder · concept only"}
        </p>
      ) : null}
    </div>
  );
}
