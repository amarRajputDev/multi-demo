import { Suspense } from "react";
import { notFound } from "next/navigation";
import CollectionsPage from "@/demos/anyaa-attire/pages/collections";
import { anyaaCategories } from "@/demos/anyaa-attire/data";
import type { AnyaaCategory } from "@/demos/anyaa-attire/products";

const KEYS = anyaaCategories.map((category) => category.key);

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
        <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#6E7C77]">
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
  if (!KEYS.includes(category as AnyaaCategory)) notFound();
  return <CollectionsPage category={category as AnyaaCategory} />;
}
