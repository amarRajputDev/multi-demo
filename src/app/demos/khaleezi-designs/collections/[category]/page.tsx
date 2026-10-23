import { Suspense } from "react";
import { notFound } from "next/navigation";
import { KhaleeziCatalogue } from "@/demos/khaleezi-designs/components/catalogue";
import {
  KHALEEZI_CATEGORIES,
  type KhaleeziCategory,
} from "@/demos/khaleezi-designs/products";

const KEYS = KHALEEZI_CATEGORIES.map((category) => category.key);

export function generateStaticParams() {
  return KEYS.map((category) => ({ category }));
}

export default function KhaleeziCategoryRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7A6E67]">
            Loading collection…
          </p>
        </div>
      }
    >
      <Content params={params} />
    </Suspense>
  );
}

async function Content({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!KEYS.includes(category as KhaleeziCategory)) notFound();
  const meta = KHALEEZI_CATEGORIES.find((entry) => entry.key === category);

  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="border-b border-[#E4DCD0] pb-8">
        <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">Collection</p>
        <h1 className="font-khaleezi-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)] leading-tight text-[#2A2320]">
          {meta?.label}
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#7A6E67]">
          {meta?.blurb}. All pieces are demonstration entries priced on enquiry.
        </p>
      </div>
      <div className="mt-6">
        <KhaleeziCatalogue initialCategory={category as KhaleeziCategory} />
      </div>
    </div>
  );
}
