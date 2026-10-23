"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { tmAssetPath } from "../data";

/** Intrinsic dimensions of every recovered TM SONS product photograph. */
export const TM_PRODUCT_W = 361;
export const TM_PRODUCT_H = 640;

interface TmProductImageProps {
  imageId: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Aspect box used when `fill` is not requested. */
  aspectClassName?: string;
  /** Cover-crop instead of contain (used for editorial hero frames). */
  fit?: "cover" | "contain";
}

/**
 * Product image with a graceful placeholder.
 *
 * Every photograph sits inside a fixed aspect box so nothing shifts while the
 * image decodes. If the local asset is missing, an on-brand placeholder is
 * rendered instead of a broken image icon, and the manifest path stays
 * replaceable.
 */
export function TmProductImage({
  imageId,
  alt,
  className,
  sizes = "(max-width: 640px) 50vw, 33vw",
  priority = false,
  aspectClassName = "aspect-[9/16]",
  fit = "cover",
}: TmProductImageProps) {
  const [failed, setFailed] = useState(false);
  const path = tmAssetPath(imageId);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#EFE9E1]",
        aspectClassName,
        className,
      )}
    >
      {path && !failed ? (
        <Image
          src={path}
          alt={alt}
          width={TM_PRODUCT_W}
          height={TM_PRODUCT_H}
          priority={priority}
          sizes={sizes}
          className={cn(
            "h-full w-full",
            fit === "cover" ? "object-cover" : "object-contain",
          )}
          onError={() => setFailed(true)}
        />
      ) : (
        <ImagePlaceholder alt={alt} />
      )}
    </div>
  );
}

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#F3EEE6_0%,#E7DFD4_100%)] px-4 text-center"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8 text-[#B23B2E]/60"
      >
        <path
          d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 4v2m0 0 7.5 7.2c.6.6.2 1.6-.7 1.6H5.2c-.9 0-1.3-1-.7-1.6L12 10Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[10px] leading-relaxed tracking-[0.18em] text-[#6F6A61] uppercase">
        Image pending
        <br />
        confirmation
      </span>
    </div>
  );
}

