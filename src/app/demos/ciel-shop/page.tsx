import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Scissors, Sparkles } from "lucide-react";
import {
  CIEL_CATEGORIES,
  CIEL_PRODUCTS,
  featuredProducts,
  newArrivals,
} from "@/demos/ciel-shop/products";
import { CielImage } from "@/demos/ciel-shop/components/ciel-image";
import { ProductCard } from "@/demos/ciel-shop/components/product-card";
import { CielEnquiryForm } from "@/demos/ciel-shop/components/enquiry-form";

export const metadata: Metadata = {
  title: "CIÈL — Where the sky knows no limits | Store concept",
  description:
    "Editorial streetwear store concept for CIÈL: experimental shirts, patchwork denim, co-ord sets and a premium demo shopping experience.",
};

const INSTAGRAM = "https://www.instagram.com/ciel_shop.in/";

const GALLERY = [
  { src: "/images/cielshop/brand/gallery-4401.jpg", label: "Catalogue still" },
  { src: "/images/cielshop/brand/gallery-8097.jpg", label: "Corduroy panel set" },
  { src: "/images/cielshop/brand/gallery-9949.jpg", label: "Distressed zip set" },
  { src: "/images/cielshop/brand/gallery-3960.jpg", label: "Camo cargo" },
  { src: "/images/cielshop/brand/gallery-1055.jpg", label: "Patchwork shirt" },
];

export default function CielShopHome() {
  const hero = CIEL_PRODUCTS[9];
  const showcase = CIEL_PRODUCTS[4];

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Editorial hero                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-[#A9D6E5]/[0.07] blur-[120px]"
        />
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-0 lg:pt-16">
          <div className="flex flex-col justify-center lg:pb-16">
            <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
              <Sparkles aria-hidden className="h-3.5 w-3.5" />
              Concept store · Archive catalogue
            </p>

            <h1 className="mt-6">
              <span className="ciel-wordmark block text-[clamp(3.6rem,12vw,8rem)] leading-[0.84]">
                CIÈL
              </span>
              <span className="font-ciel-display mt-4 block max-w-xl text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-[1.1] text-[#F4F1EC]">
                Where the sky knows
                <br />
                <span className="text-[#8A8F96]">no limits.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#8A8F96]">
              Experimental streetwear cut in small runs — statement shirts,
              printed shackets, patchwork denim and coordinated looks from the
              CIÈL archive.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/demos/ciel-shop/shop"
                className="inline-flex items-center gap-2 bg-[#F4F1EC] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5]"
              >
                Explore the collection
                <ArrowRight aria-hidden className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demos/ciel-shop/shop"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#F4F1EC] transition-colors hover:border-[#A9D6E5] hover:text-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5]"
              >
                Shop new arrivals
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.16em] text-[#8A8F96]">
              <div>
                <dt className="text-[#F4F1EC]/60">Pieces</dt>
                <dd className="mt-1 font-ciel-display text-lg tracking-normal text-[#F4F1EC]">
                  {CIEL_PRODUCTS.length}
                </dd>
              </div>
              <div>
                <dt className="text-[#F4F1EC]/60">Line</dt>
                <dd className="mt-1 font-ciel-display text-lg tracking-normal text-[#F4F1EC]">
                  Streetwear
                </dd>
              </div>
              <div>
                <dt className="text-[#F4F1EC]/60">Mood</dt>
                <dd className="mt-1 font-ciel-display text-lg tracking-normal text-[#F4F1EC]">
                  One of one
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-[1.35fr_1fr]">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#17171A]">
              <CielImage
                src="/images/cielshop/brand/brand-931905-full.jpg"
                alt="CIÈL campaign photograph — checked co-ord set photographed on a model"
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/80 via-transparent to-transparent"
              />
              <p className="absolute inset-x-4 bottom-4 text-[10px] uppercase tracking-[0.22em] text-[#F4F1EC]">
                Campaign archive · checked co-ord
              </p>
            </div>

            <div className="hidden flex-col gap-3 sm:flex">
              <div className="relative aspect-square overflow-hidden bg-[#17171A]">
                <CielImage
                  src={hero.image}
                  alt={hero.imageAlt}
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between border border-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
                  Spotlight
                </p>
                <div>
                  <p className="font-ciel-display text-lg leading-tight text-[#F4F1EC]">
                    {hero.name}
                  </p>
                  <Link
                    href={`/demos/ciel-shop/products/${hero.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-[#A9D6E5] hover:underline"
                  >
                    View piece
                    <ArrowUpRight aria-hidden className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div className="ciel-marquee flex w-max gap-8 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-[#8A8F96]">
          {Array.from({ length: 2 }).map((_, copy) => (
            <span key={copy} className="flex gap-8">
              {[
                "Experimental streetwear",
                "Patchwork denim",
                "Statement shirts",
                "Co-ord sets",
                "Made in small runs",
                "One of one",
              ].map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-8">
                  {item}
                  <span aria-hidden className="h-1 w-1 bg-[#A9D6E5]" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Shop by category                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
              01 / Categories
            </p>
            <h2 className="font-ciel-display mt-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-[#F4F1EC]">
              Shop by category
            </h2>
          </div>
          <Link
            href="/demos/ciel-shop/shop"
            className="ciel-underline text-[11px] uppercase tracking-[0.18em] text-[#F4F1EC]/75 hover:text-[#F4F1EC]"
          >
            All pieces
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CIEL_CATEGORIES.map((category, index) => (
            <Link
              key={category.key}
              href="/demos/ciel-shop/shop"
              className={
                index === 0
                  ? "group relative row-span-2 aspect-[4/5] overflow-hidden bg-[#17171A] sm:col-span-2 lg:aspect-auto"
                  : "group relative aspect-[4/3] overflow-hidden bg-[#17171A]"
              }
            >
              <CielImage
                src={category.image}
                alt={`${category.label} — CIÈL archive photograph`}
                sizes={index === 0 ? "(max-width: 1024px) 90vw, 50vw" : "(max-width: 1024px) 45vw, 25vw"}
                imageClassName="transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/25 to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-ciel-display text-xl text-[#F4F1EC]">
                  {category.label}
                </p>
                <p className="mt-1 text-[11px] text-[#8A8F96]">{category.blurb}</p>
              </div>
              <ArrowUpRight
                aria-hidden
                className="absolute right-4 top-4 h-4 w-4 text-[#F4F1EC]/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Featured collection                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-white/10 bg-[#0B0B0D]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
                02 / Featured
              </p>
              <h2 className="font-ciel-display mt-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-[#F4F1EC]">
                The loudest pieces
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8A8F96]">
                A short edit from the archive — denim, cargos and shirting cut in
                limited runs.
              </p>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/demos/ciel-shop/shop"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#F4F1EC] transition-colors hover:border-[#A9D6E5] hover:text-[#A9D6E5]"
            >
              Shop the full collection
              <ArrowRight aria-hidden className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* New arrivals                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
              03 / New arrivals
            </p>
            <h2 className="font-ciel-display mt-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-[#F4F1EC]">
              Fresh from the studio
            </h2>
          </div>
          <p className="max-w-xs text-[11px] leading-relaxed text-[#8A8F96]">
            Archive ordering only — availability is not confirmed for any piece.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Campaign                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div className="relative h-[64vh] min-h-[420px] w-full">
          <CielImage
            src="/images/cielshop/brand/gallery-9949.jpg"
            alt="CIÈL campaign still — distressed zip co-ord set"
            sizes="100vw"
            className="absolute inset-0"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/70 to-transparent"
          />
          <div className="relative mx-auto flex h-full max-w-[1400px] items-end px-4 pb-12 sm:px-6 sm:pb-16">
            <div className="max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
                Campaign · cut from the archive
              </p>
              <h2 className="font-ciel-display mt-4 text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] text-[#F4F1EC]">
                Denim that refuses
                <br />
                to match.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F4F1EC]/70">
                Patchwork panels, exposed stitching and zipped detailing —
                assembled piece by piece, never twice the same.
              </p>
              <Link
                href="/demos/ciel-shop/shop"
                className="mt-7 inline-flex items-center gap-2 bg-[#F4F1EC] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5]"
              >
                See the denim edit
                <ArrowRight aria-hidden className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Product-detail showcase                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden bg-[#17171A]">
            <CielImage
              src={showcase.image}
              alt={showcase.imageAlt}
              sizes="(max-width: 1024px) 90vw, 50vw"
              imageClassName="transition-transform duration-[1.2s] hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
              04 / Piece study
            </p>
            <h2 className="font-ciel-display mt-4 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.05] text-[#F4F1EC]">
              {showcase.name}
            </h2>
            <p className="mt-3 text-lg text-[#F4F1EC]/85">
              ₹{showcase.price.toLocaleString("en-IN")}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8A8F96]">
              {showcase.description}
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
                  Category
                </dt>
                <dd className="mt-1 text-[#F4F1EC]">Upper wear</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
                  Finish
                </dt>
                <dd className="mt-1 text-[#F4F1EC]">PU leather look · front zip</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
                  Sizes
                </dt>
                <dd className="mt-1 text-[#F4F1EC]">Confirm with the brand</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
                  Source
                </dt>
                <dd className="mt-1 text-[#F4F1EC]">Archive catalogue</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/demos/ciel-shop/products/${showcase.slug}`}
                className="inline-flex items-center gap-2 bg-[#F4F1EC] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5]"
              >
                View the piece
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demos/ciel-shop#made-to-order"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#F4F1EC] transition-colors hover:border-[#A9D6E5] hover:text-[#A9D6E5]"
              >
                <Scissors aria-hidden className="h-3.5 w-3.5" />
                Made to order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Brand story                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="story"
        className="scroll-mt-24 border-y border-white/10 bg-[#0B0B0D]"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#17171A]">
            <CielImage
              src="/images/cielshop/brand/lookbook-page.jpg"
              alt="CIÈL lookbook page from the brand's own archive"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
              05 / The label
            </p>
            <h2 className="font-ciel-display mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-[#F4F1EC]">
              Built in the space
              <br />
              between rules.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#8A8F96]">
              <p>
                CIÈL works in the experimental end of Indian streetwear — graphic
                shirting, zipped shackets, cargo silhouettes and patchwork denim
                assembled from mixed panels. The label&rsquo;s own line is
                &ldquo;where the sky knows no limits.&rdquo;
              </p>
              <p>
                Pieces are produced in small runs, which is why the same patchwork
                style rarely appears twice. This concept store presents the
                archive as an editorial catalogue: fewer products, more detail,
                and no invented specifications.
              </p>
              <p className="text-[#F4F1EC]/70">
                This is a design demonstration by Vizo Technology, not the
                brand&rsquo;s official website. Catalogue details come from the
                brand&rsquo;s former public store and public profile.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.18em] text-[#8A8F96]">
              <span>Streetwear</span>
              <span className="h-1 w-1 bg-[#A9D6E5]" />
              <span>Small runs</span>
              <span className="h-1 w-1 bg-[#A9D6E5]" />
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[#A9D6E5] hover:underline"
              >
                @ciel_shop.in
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Made-to-order enquiry                                            */}
      {/* ---------------------------------------------------------------- */}
      <section id="made-to-order" className="scroll-mt-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
              06 / Made to order
            </p>
            <h2 className="font-ciel-display mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-[#F4F1EC]">
              Want it cut
              <br />
              for you?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8A8F96]">
              Share the piece, size range and timeline you have in mind. Custom
              runs depend on fabric availability and studio capacity — nothing is
              confirmed until the brand replies.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-[#F4F1EC]/75">
              {[
                "Reference a piece from the archive",
                "Mention your size range and fit notes",
                "Ask about fabric and lead time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-[#A9D6E5]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-sm border-l border-[#A9D6E5]/40 pl-4 text-[11px] leading-relaxed text-[#8A8F96]">
              Demo form: submissions are not sent or stored. The last published
              email for the brand was info@cielshop.in — verify before use.
            </p>
          </div>

          <div className="border border-white/10 bg-[#0B0B0D] p-5 sm:p-8">
            <p className="font-ciel-display text-xl text-[#F4F1EC]">
              Custom order brief
            </p>
            <p className="mt-1.5 text-xs text-[#8A8F96]">
              All fields are checked in the browser only.
            </p>
            <CielEnquiryForm
              className="mt-6"
              subject="Made-to-order enquiry"
              pieceOptions={[
                "Made to order",
                ...CIEL_PRODUCTS.map((product) => product.name),
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Instagram gallery                                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
                07 / From the archive
              </p>
              <h2 className="font-ciel-display mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.05] text-[#F4F1EC]">
                @ciel_shop.in
              </h2>
            </div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F4F1EC]/75 transition-colors hover:text-[#A9D6E5]"
            >
              Open Instagram
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {GALLERY.map((item) => (
              <a
                key={item.src}
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative aspect-square overflow-hidden bg-[#17171A]"
              >
                <CielImage
                  src={item.src}
                  alt={`CIÈL archive image — ${item.label}`}
                  sizes="(max-width: 640px) 45vw, 20vw"
                  imageClassName="transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-[9px] uppercase tracking-[0.18em] text-[#F4F1EC] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-[11px] text-[#8A8F96]">
            Imagery recovered from the brand&rsquo;s public catalogue and profile.
            Links open Instagram — no feed is embedded and no engagement figures
            are claimed.
          </p>
        </div>
      </section>
    </>
  );
}
