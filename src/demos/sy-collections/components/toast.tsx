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
            className="rounded-full border border-[#EADFDB] bg-[#2C1F26] px-5 py-3 text-xs tracking-[0.12em] text-[#FBF6F2] shadow-[0_16px_40px_rgba(44,31,38,0.3)] uppercase"
          >
            {toast.message}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
