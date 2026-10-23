import type { Metadata } from "next";
import { KhaleeziCatalogue } from "@/demos/khaleezi-designs/components/catalogue";
import { KHALEEZI_PRODUCTS } from "@/demos/khaleezi-designs/products";

export const metadata: Metadata = {
  title: "Shop the collection | Khaleezi Designs concept",
  description:
    "Browse eight demonstration ethnicwear pieces — cotton dupatta sets, cotton sets and straight pants in small to 7XL.",
  robots: { index: false, follow: false },
};

export default function KhaleeziCollectionsPage() {
  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="flex flex-col gap-4 border-b border-[#E4DCD0] pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">The collection</p>
          <h1 className="font-khaleezi-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)] leading-tight text-[#2A2320]">
            Shop all pieces
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#7A6E67]">
            {KHALEEZI_PRODUCTS.length} representative pieces across dupatta sets,
            cotton sets and straight pants. Filter by category or size, and build an
            enquiry list as you browse.
          </p>
        </div>
        <p className="max-w-xs text-[11px] leading-relaxed text-[#7A6E67]">
          Every piece is enquiry-only — no public prices, no invented stock.
        </p>
      </div>

      <div className="mt-6">
        <KhaleeziCatalogue />
      </div>
    </div>
  );
}
