import { Suspense } from "react";
import { notFound } from "next/navigation";
import CollectionsPage from "@/demos/exotix-in/pages/collections";
import { exotixCategories } from "@/demos/exotix-in/data";
import type { ExotixCategory } from "@/demos/exotix-in/products";

const KEYS = exotixCategories.map((category) => category.key);

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
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-exotix-mono text-[11px] uppercase tracking-[0.24em] text-[#8A8A92]">
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
  if (!KEYS.includes(category as ExotixCategory)) notFound();
  return <CollectionsPage category={category as ExotixCategory} />;
}
