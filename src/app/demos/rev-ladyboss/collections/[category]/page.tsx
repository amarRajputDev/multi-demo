import { Suspense } from "react";
import { notFound } from "next/navigation";
import RevCollectionsPage from "@/demos/rev-ladyboss/pages/collections";
import { revCategories } from "@/demos/rev-ladyboss/data";
import type { RevCategory } from "@/demos/rev-ladyboss/products";

const KEYS = revCategories.map((category) => category.key);

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
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#7C7073]">
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
  if (!KEYS.includes(category as RevCategory)) notFound();
  return <RevCollectionsPage category={category as RevCategory} />;
}
