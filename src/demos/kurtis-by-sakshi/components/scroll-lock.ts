"use client";

import { useEffect } from "react";

/** Locks body scroll while an overlay with the given id is open. */
export function useScrollLock(overlayId: string, locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = document.getElementById(overlayId);
    root?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previous;
    };
  }, [overlayId, locked]);
}
