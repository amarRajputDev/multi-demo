import type { Metadata } from "next";
import { CIEL_PRICE_NOTE, CIEL_PRODUCTS } from "@/demos/ciel-shop/products";
import { ShopBrowser } from "@/demos/ciel-shop/components/shop-browser";

export const metadata: Metadata = {
  title: "Shop the collection | CIÈL concept store",
  description:
    "Browse the 13 archived CIÈL pieces — experimental shirting, patchwork denim, cargos and co-ord sets. Demonstration catalogue.",
  robots: { index: false, follow: false },
};

export default function CielShopPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
            The catalogue
          </p>
          <h1 className="font-ciel-display mt-3 text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] text-[#F4F1EC]">
            All pieces
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#8A8F96]">
            {CIEL_PRODUCTS.length} pieces from the CIÈL archive, presented as a
            concept store. Search, filter and sort — every control works.
          </p>
        </div>
        <p className="max-w-xs text-[11px] leading-relaxed text-[#8A8F96]">
          {CIEL_PRICE_NOTE}
        </p>
      </div>

      <div className="mt-6">
        <ShopBrowser />
      </div>
    </div>
  );
}
