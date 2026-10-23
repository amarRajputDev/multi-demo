"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollLock } from "./scroll-lock";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  lockKey: string;
  children: ReactNode;
  side?: "right" | "bottom";
  className?: string;
  footer?: ReactNode;
}

/**
 * Slide-in panel used for the bag, wishlist and search. Handles
 * escape-to-close, backdrop click, focus placement and scroll locking with a
 * simple CSS transition (no animation library).
 */
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <div
        className="exotix-fade absolute inset-0 bg-[#0C0C0E]/70 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "exotix-slide absolute flex flex-col bg-[#101013] text-[#F2EFEA] shadow-[0_24px_60px_rgba(0,0,0,0.6)]",
          side === "right"
            ? "right-0 top-0 h-full w-[min(100%,26rem)]"
            : "inset-x-0 bottom-0 max-h-[88vh] w-full rounded-t-2xl",
          className,
        )}
      >
        <header
          className={cn(
            "flex items-start justify-between gap-4 border-b border-[#232327] px-5 py-4 sm:px-6",
            side === "bottom" && "rounded-t-2xl",
          )}
        >
          <div className="min-w-0">
            <p className="font-exotix-display text-lg leading-tight tracking-tight text-[#F2EFEA]">
              {title}
            </p>
            {subtitle ? (
              <p className="font-exotix-mono mt-1 text-[10px] tracking-[0.22em] text-[#8A8A92] uppercase">
                {subtitle}
              </p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="-m-1 grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#B9BDC4] transition hover:bg-[#1A1A1E] hover:text-[#F2EFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>

        {footer ? (
          <div className="border-t border-[#232327] bg-[#141416] px-5 py-4 sm:px-6">
            {footer}
          </div>
        ) : null}
      </aside>
    </div>
  );
}
