"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollLock } from "./scroll-lock";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  /** Unique key so overlapping overlays never release each other's lock. */
  lockKey: string;
  children: ReactNode;
  side?: "right" | "bottom";
  className?: string;
  /** Optional footer pinned below the scrollable content. */
  footer?: ReactNode;
}

/** Slide-in panel used for the bag, wishlist and mobile filters. */
export function Drawer({
  open,
  onClose,
  title,
  subtitle,
  lockKey,
  children,
  side = "right",
  className,
  footer,
}: DrawerProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useScrollLock(lockKey, open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const duration = reduce ? 0 : 0.4;
  const hidden =
    side === "right" ? { x: "100%", y: 0 } : { x: 0, y: "100%" };
  const shown = { x: 0, y: 0 };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80]">
          <motion.div
            className="absolute inset-0 bg-[#22332F]/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={reduce ? { opacity: 0, x: 0, y: 0 } : hidden}
            animate={{ opacity: 1, ...shown }}
            exit={reduce ? { opacity: 0, x: 0, y: 0 } : { ...hidden, opacity: 1 }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute flex flex-col bg-[#FAF8F3] shadow-[0_24px_60px_rgba(34,51,47,0.28)]",
              side === "right"
                ? "right-0 top-0 h-full w-[min(100%,27rem)]"
                : "inset-x-0 bottom-0 max-h-[88vh] w-full rounded-t-3xl",
              className,
            )}
          >
            <header
              className={cn(
                "flex items-start justify-between gap-4 border-b border-[#DFE7E2] px-5 py-4 sm:px-6",
                side === "bottom" && "rounded-t-3xl",
              )}
            >
              <div className="min-w-0">
                <p className="font-anyaa-display text-xl leading-tight text-[#22332F]">
                  {title}
                </p>
                {subtitle ? (
                  <p className="font-anyaa-body mt-1 text-xs tracking-[0.14em] text-[#6E7C77] uppercase">
                    {subtitle}
                  </p>
                ) : null}
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={`Close ${title}`}
                className="-m-1 grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
              >
                <X aria-hidden className="h-4.5 w-4.5" />
              </button>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              {children}
            </div>

            {footer ? (
              <div className="border-t border-[#DFE7E2] bg-[#F2F5F1] px-5 py-4 sm:px-6">
                {footer}
              </div>
            ) : null}
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
