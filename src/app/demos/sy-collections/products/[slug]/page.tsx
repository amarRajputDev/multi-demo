import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductPage from "@/demos/sy-collections/pages/product";
import { getSyProduct, syProducts } from "@/demos/sy-collections/products";

export function generateStaticParams() {
  return syProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getSyProduct(slug);

  if (!product) {
    return { title: "Product not found | S_Y COLLECTIONS concept" };
  }

  return {
    title: `${product.name} | S_Y COLLECTIONS redesign concept`,
    description: product.description,
  };
}

/**
 * `params` is read inside a <Suspense> boundary so the shared header and
 * footer shell stay prerenderable under `cacheComponents`.
 */
export default function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.24em] text-[#8B7B81] uppercase">
            Loading piece...
          </p>
        </div>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getSyProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
