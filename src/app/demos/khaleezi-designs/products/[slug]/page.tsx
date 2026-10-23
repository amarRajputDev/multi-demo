import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { KhaleeziProductDetail } from "@/demos/khaleezi-designs/components/product-detail";
import {
  KHALEEZI_PRODUCTS,
  getKhaleeziProduct,
} from "@/demos/khaleezi-designs/products";

export function generateStaticParams() {
  return KHALEEZI_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getKhaleeziProduct(slug);
  if (!product) return { title: "Piece not found | Khaleezi Designs concept" };
  return {
    title: `${product.name} | Khaleezi Designs concept`,
    description: product.description,
    robots: { index: false, follow: false },
  };
}

export default function KhaleeziProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7A6E67]">
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
  const product = getKhaleeziProduct(slug);
  if (!product) notFound();
  return <KhaleeziProductDetail product={product} />;
}
