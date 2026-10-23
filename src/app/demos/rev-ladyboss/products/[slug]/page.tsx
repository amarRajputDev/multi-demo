import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import RevProductPage from "@/demos/rev-ladyboss/pages/product";
import { getRevProduct, revProducts } from "@/demos/rev-ladyboss/products";

export function generateStaticParams() {
  return revProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getRevProduct(slug);
  if (!product) return { title: "Piece not found | Rev Ladyboss concept" };
  return {
    title: `${product.name} | Rev Ladyboss concept`,
    description: product.description,
    robots: { index: false, follow: false },
  };
}

export default function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#7C7073]">
            Loading piece…
          </p>
        </div>
      }
    >
      <Content params={params} />
    </Suspense>
  );
}

async function Content({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getRevProduct(slug);
  if (!product) notFound();
  return <RevProductPage product={product} />;
}
