/* eslint-disable @next/next/no-img-element -- this demo hot-links one remote
   brand avatar on purpose; next/image would require a global remotePatterns
   change that would affect every other demo. */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { khaleeziBrand } from "../data";

/** Remote profile avatar with a one-shot text-wordmark fallback. */
export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || compact) {
    return (
      <span className={cn("inline-flex items-baseline gap-2", className)}>
        <span className="font-khaleezi-display text-xl leading-none tracking-[0.18em] text-[#2A2320]">
          KHALEEZI
        </span>
        <span className="khaleezi-eyebrow text-[8px] text-[#2F6D72]">designs</span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={khaleeziBrand.avatarUrl}
        alt="Khaleezi Designs profile avatar"
        width={32}
        height={32}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-8 w-8 rounded-full border border-[#2F6D72]/25 object-cover"
      />
      <span className="flex flex-col leading-none">
        <span className="font-khaleezi-display text-lg tracking-[0.16em] text-[#2A2320]">
          KHALEEZI
        </span>
        <span className="khaleezi-eyebrow mt-1 text-[8px] text-[#2F6D72]">
          designs
        </span>
      </span>
    </span>
  );
}

/** Fine botanical/architectural divider. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden>
      <span className="khaleezi-rule flex-1" />
      <span className="text-[10px] tracking-[0.4em] text-[#2F6D72]">◆</span>
      <span className="khaleezi-rule flex-1" />
    </div>
  );
}

const TONES = {
  1: ["#F1EADF", "#DFCFC0", "#8C6F5C"],
  2: ["#F7EFEA", "#E7CFD2", "#9A5F68"],
  3: ["#EFF2ED", "#CFDCD6", "#3F6B63"],
  4: ["#F0E9EC", "#D9C7D6", "#6B5468"],
  5: ["#F4F0E6", "#DED6BE", "#7A6E4E"],
} as const;

/**
 * Replaceable placeholder artwork.
 *
 * No garment photograph is used because none could be verified as the label's
 * own. Each tile states it is pending artwork and keeps the same aspect ratio,
 * so replacing it later is a data change only.
 */
export function PendingArtwork({
  tone,
  label,
  className,
  imageClassName,
}: {
  tone: 1 | 2 | 3 | 4 | 5;
  label: string;
  className?: string;
  imageClassName?: string;
}) {
  const [light, mid, ink] = TONES[tone];
  return (
    <div
      role="img"
      aria-label={`${label} — product photograph pending`}
      className={cn(
        "khaleezi-weave relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
      style={{ background: `linear-gradient(155deg, ${light} 0%, ${mid} 100%)` }}
    >
      <div
        aria-hidden
        className="absolute inset-5 border"
        style={{ borderColor: `${ink}33` }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <svg
          aria-hidden
          viewBox="0 0 48 48"
          className="h-10 w-10"
          fill="none"
          stroke={ink}
          strokeWidth="1"
          opacity="0.55"
        >
          <path d="M24 5c5 7 7 12 7 17a7 7 0 1 1-14 0c0-5 2-10 7-17Z" />
          <path d="M24 22v21M15 43h18" />
        </svg>
        <span
          className="font-khaleezi-display text-[13px] leading-snug tracking-wide"
          style={{ color: ink }}
        >
          {label}
        </span>
        <span
          className="khaleezi-eyebrow text-[7.5px]"
          style={{ color: `${ink}CC` }}
        >
          artwork pending
        </span>
      </div>
      {imageClassName ? <span className={imageClassName} /> : null}
    </div>
  );
}
