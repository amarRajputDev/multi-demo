import { Suspense } from "react";
import { notFound } from "next/navigation";
import CollectionsPage from "@/demos/kurtis-by-sakshi/pages/collections";
import { sakshiCategories } from "@/demos/kurtis-by-sakshi/data";
import type { SakshiCategory } from "@/demos/kurtis-by-sakshi/products";

const KEYS = sakshiCategories.map((category) => category.key);

export function generateStaticParams() {
  return KEYS.map((category) => ({ category }));
}

export default function CategoryRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#7A6461]">
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
  if (!KEYS.includes(category as SakshiCategory)) notFound();
  return <CollectionsPage category={category as SakshiCategory} />;
}
