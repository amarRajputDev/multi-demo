"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useScrollLock } from "./scroll-lock";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  id: string;
  side?: "right" | "left";
  footer?: ReactNode;
  children: ReactNode;
}

/** Accessible side drawer used for the enquiry list and wishlist. */
export function Drawer({
  open,
  onClose,
  title,
  id,
  side = "right",
  footer,
  children,
}: DrawerProps) {
  const reduce = useReducedMotion();
  useScrollLock(id, open);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-[#3B1F24]/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.24 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={reduce ? { opacity: 0 } : { x: side === "right" ? "100%" : "-100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: side === "right" ? "100%" : "-100%" }}
            transition={{ duration: reduce ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
            className={
              side === "right"
                ? "fixed inset-y-0 right-0 z-[75] flex w-full max-w-[26rem] flex-col bg-[#FBF6EF] shadow-2xl outline-none"
                : "fixed inset-y-0 left-0 z-[75] flex w-full max-w-[26rem] flex-col bg-[#FBF6EF] shadow-2xl outline-none"
            }
          >
            <header className="flex items-center justify-between border-b border-[#E9DDD4] px-5 py-4">
              <h2 className="font-sakshi-display text-xl tracking-wide text-[#3B1F24]">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="grid h-9 w-9 place-items-center rounded-full text-[#3B1F24] transition hover:bg-[#EFD9D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B47]"
              >
                <X aria-hidden className="h-4.5 w-4.5" />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto px-5 py-5">{children}</div>
            {footer ? (
              <footer className="border-t border-[#E9DDD4] bg-[#F6EEE6] px-5 py-4">
                {footer}
              </footer>
            ) : null}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
