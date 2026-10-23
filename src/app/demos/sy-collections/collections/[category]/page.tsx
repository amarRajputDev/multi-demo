import { Suspense } from "react";
import { notFound } from "next/navigation";
import CollectionsPage from "@/demos/sy-collections/pages/collections";
import { syCategories } from "@/demos/sy-collections/data";
import type { SyCategory } from "@/demos/sy-collections/products";

const CATEGORY_KEYS = syCategories.map((category) => category.key);

export function generateStaticParams() {
  return CATEGORY_KEYS.map((category) => ({ category }));
}

/**
 * `params` is read inside a <Suspense> boundary so the layout shell stays
 * prerenderable under `cacheComponents`, exactly as the App Router docs
 * recommend for URL data.
 */
export default function CategoryRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.24em] text-[#8B7B81] uppercase">
            Loading collection...
          </p>
        </div>
      }
    >
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!CATEGORY_KEYS.includes(category as SyCategory)) {
    notFound();
  }

  return <CollectionsPage category={category as SyCategory} />;
}
