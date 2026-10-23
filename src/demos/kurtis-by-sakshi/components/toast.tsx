"use client";

import { AnimatePresence, motion } from "motion/react";
import { useShop } from "./shop-provider";

/** Lightweight brand-styled toast for wishlist/enquiry feedback. */
export function Toast() {
  const { toast } = useShop();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[90] flex justify-center px-4"
    >
      <AnimatePresence>
        {toast ? (
          <motion.p
            key={toast.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="font-sakshi-body rounded-full border border-[#8E3B47]/25 bg-[#3B1F24] px-5 py-2.5 text-center text-[13px] text-[#FBF6EF] shadow-lg"
          >
            {toast.message}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
