import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Scissors } from "lucide-react";
import {
  CIEL_PRICE_NOTE,
  CIEL_PRODUCTS,
  formatPrice,
  getCielProduct,
  relatedProducts,
} from "@/demos/ciel-shop/products";
import { CielImage } from "@/demos/ciel-shop/components/ciel-image";
import { BuyPanel } from "@/demos/ciel-shop/components/buy-panel";
import { ProductCard } from "@/demos/ciel-shop/components/product-card";

export function generateStaticParams() {
  return CIEL_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getCielProduct(slug);
  if (!product) return { title: "Piece not found | CIÈL concept store" };

  return {
    title: `${product.name} | CIÈL concept store`,
    description: product.description,
    robots: { index: false, follow: false },
  };
}

export default async function CielProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getCielProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-8 sm:px-6">
      <Link
        href="/demos/ciel-shop/shop"
        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8A8F96] transition-colors hover:text-[#F4F1EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
      >
        <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
        All pieces
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#17171A]">
            <CielImage
              src={product.image}
              alt={product.imageAlt}
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
            <span className="absolute left-4 top-4 border border-white/20 bg-black/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F4F1EC] backdrop-blur-sm">
              Archive image
            </span>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-[#8A8F96]">
            {product.image
              ? "Single catalogue photograph recovered from the brand's public store. No additional angles have been fabricated."
              : "No authentic photograph of this piece could be recovered. The placeholder is intentionally replaceable — drop the real file into /public/images/cielshop/products/ and update the manifest."}
          </p>
        </div>

        <div className="lg:pt-2">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#A9D6E5]">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="font-ciel-display mt-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-[#F4F1EC]">
            {product.name}
          </h1>
          <p className="mt-3 text-xl text-[#F4F1EC]/90">{formatPrice(product.price)}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#8A8F96]">
            Historical price · requires confirmation
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#8A8F96]">
            {product.description}
          </p>

          <BuyPanel product={product} />

          <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6">
            <Scissors aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A9D6E5]" />
            <div>
              <p className="text-sm text-[#F4F1EC]">Want a custom version?</p>
              <p className="mt-1 text-xs leading-relaxed text-[#8A8F96]">
                Send a made-to-order brief with your size range and timeline.
              </p>
              <Link
                href="/demos/ciel-shop/contact"
                className="mt-2 inline-block text-[10px] uppercase tracking-[0.18em] text-[#A9D6E5] hover:underline"
              >
                Open enquiry form
              </Link>
            </div>
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-[#8A8F96]">
            {CIEL_PRICE_NOTE}
          </p>
        </div>
      </div>

      <section className="mt-16 border-t border-white/10 pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-ciel-display text-[clamp(1.5rem,3vw,2.2rem)] text-[#F4F1EC]">
            Pairs well with
          </h2>
          <Link
            href="/demos/ciel-shop/shop"
            className="text-[10px] uppercase tracking-[0.18em] text-[#8A8F96] transition-colors hover:text-[#F4F1EC]"
          >
            Shop all
          </Link>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
