"use client";

import { useShop } from "./shop-provider";

/** Lightweight confirmation feedback for bag and wishlist actions. */
export function Toast() {
  const { toast } = useShop();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-4 bottom-4 z-[90] flex justify-center sm:inset-x-auto sm:right-6 sm:justify-end"
    >
      {toast ? (
        <p
          key={toast.id}
          className="font-exotix-mono rounded-sm border border-[#E23B2E]/40 bg-[#141416] px-5 py-3 text-[11px] tracking-[0.14em] text-[#F2EFEA] shadow-[0_16px_40px_rgba(0,0,0,0.5)] uppercase"
        >
          {toast.message}
        </p>
      ) : null}
    </div>
  );
}
