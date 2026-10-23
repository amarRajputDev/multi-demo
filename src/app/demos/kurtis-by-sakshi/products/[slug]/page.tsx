import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductPage from "@/demos/kurtis-by-sakshi/pages/product";
import {
  getSakshiProduct,
  sakshiProducts,
} from "@/demos/kurtis-by-sakshi/products";

export function generateStaticParams() {
  return sakshiProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getSakshiProduct(slug);
  if (!product) return { title: "Piece not found | Kurtis By Sakshi concept" };
  return {
    title: `${product.name} | Kurtis By Sakshi concept`,
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
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#7A6461]">
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
  const product = getSakshiProduct(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
