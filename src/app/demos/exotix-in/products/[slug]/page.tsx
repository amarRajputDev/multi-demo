import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductPage from "@/demos/exotix-in/pages/product";
import {
  exotixProducts,
  getExotixProduct,
} from "@/demos/exotix-in/products";

export function generateStaticParams() {
  return exotixProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getExotixProduct(slug);
  if (!product) return { title: "Piece not found | Exotix In concept" };
  return {
    title: `${product.name} | Exotix In concept`,
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
          <p className="font-exotix-mono text-[11px] uppercase tracking-[0.24em] text-[#8A8A92]">
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
  const product = getExotixProduct(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
