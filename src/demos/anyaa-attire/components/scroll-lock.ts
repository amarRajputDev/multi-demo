"use client";

import { useEffect } from "react";

/** Shared body-scroll lock so overlapping overlays never fight over overflow. */
const locks = new Set<string>();

export function useScrollLock(key: string, active: boolean) {
  useEffect(() => {
    if (!active) return;

    locks.add(key);
    const { style } = document.body;
    const previous = style.overflow;
    style.overflow = "hidden";

    return () => {
      locks.delete(key);
      if (locks.size === 0) style.overflow = previous;
    };
  }, [key, active]);
}
