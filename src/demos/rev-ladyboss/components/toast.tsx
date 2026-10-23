"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useShop } from "./shop-provider";

/** Lightweight confirmation feedback for bag and wishlist actions. */
export function Toast() {
  const { toast } = useShop();
  const reduce = useReducedMotion();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-4 bottom-4 z-[90] flex justify-center sm:inset-x-auto sm:right-6 sm:justify-end"
    >
      <AnimatePresence>
        {toast ? (
          <motion.p
            key={toast.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2px] border border-[#2A2226] bg-[#1A1618] px-5 py-3 text-[11px] tracking-[0.16em] text-[#F7ECEE] uppercase shadow-[0_16px_40px_rgba(26,22,24,0.3)]"
          >
            {toast.message}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
