"use client";

import Image from "next/image";
import { useState } from "react";
import { tmAssetPath, tmContact } from "../data";

interface BrandMarkProps {
  /** Pixel size of the square logo tile. */
  size?: number;
  className?: string;
  priority?: boolean;
  /** Show the text lock-up beside the mark (used in the footer). */
  withWordmark?: boolean;
  /** Text rendered beside the mark. */
  wordmark?: string;
  subWordmark?: string;
}

/**
 * TM SONS logo, using the supplied reference asset.
 *
 * The original proportions are preserved (`object-contain`, no crop, no
 * letter-spacing tricks). If the asset ever fails to load, a text-based
 * fallback built from the same red-circle + SONS lettering takes its place so
 * the header never shows a broken image icon.
 */
export function BrandMark({
  size = 40,
  className,
  priority = false,
  withWordmark = false,
  wordmark = tmContact.brandName,
  subWordmark = "Ludhiana",
}: BrandMarkProps) {
  const [failed, setFailed] = useState(false);
  const path = tmAssetPath("brand-logo");

  const tile = (
    <span
      className="relative inline-block shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      {path && !failed ? (
        <Image
          src={path}
          alt={tmContact.brandName}
          width={150}
          height={150}
          priority={priority}
          sizes={`${size}px`}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <FallbackMark size={size} />
      )}
    </span>
  );

  if (!withWordmark) return <span className={className}>{tile}</span>;

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      {tile}
      <span className="flex flex-col leading-none">
        <span className="font-tmsons-display text-[1.05rem] tracking-[0.28em] text-[#1C1A17] uppercase">
          {wordmark}
        </span>
        {subWordmark ? (
          <span className="mt-1.5 text-[9px] tracking-[0.34em] text-[#6F6A61] uppercase">
            {subWordmark}
          </span>
        ) : null}
      </span>
    </span>
  );
}

/** Text-based fallback echoing the red circular TM mark + SONS lettering. */
function FallbackMark({ size }: { size: number }) {
  const circle = Math.round(size * 0.6);
  return (
    <span
      aria-label={tmContact.brandName}
      role="img"
      className="flex h-full w-full flex-col items-center justify-center gap-[0.15em] bg-[#FAF7F2]"
    >
      <span
        className="grid place-items-center rounded-full border-2 border-[#B23B2E] font-tmsons-display font-semibold text-[#B23B2E]"
        style={{ width: circle, height: circle, fontSize: circle * 0.42 }}
      >
        TM
      </span>
      <span
        className="font-tmsons-display tracking-[0.2em] text-[#1C1A17] uppercase"
        style={{ fontSize: Math.max(7, size * 0.16), lineHeight: 1 }}
      >
        Sons
      </span>
    </span>
  );
}
