import type { Metadata } from "next";
import { CheckoutView } from "@/demos/ciel-shop/components/checkout-view";

export const metadata: Metadata = {
  title: "Bag & checkout preview | CIÈL concept store",
  description:
    "Demonstration shopping bag and checkout preview for the CIÈL concept store. No payments are processed.",
  robots: { index: false, follow: false },
};

export default function CielCheckoutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
            Demonstration
          </p>
          <h1 className="font-ciel-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.98] text-[#F4F1EC]">
            Your bag
          </h1>
        </div>
        <p className="max-w-sm text-[11px] leading-relaxed text-[#8A8F96]">
          Checkout preview only — no card fields, no payment processing and no
          order is created. Bag contents are stored in this browser.
        </p>
      </div>

      <div className="mt-8">
        <CheckoutView />
      </div>
    </div>
  );
}
