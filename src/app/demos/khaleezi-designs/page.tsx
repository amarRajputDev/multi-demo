import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  khaleeziBrand,
  khaleeziContact,
  khaleeziDemo,
  khaleeziInstagramTiles,
} from "@/demos/khaleezi-designs/data";
import {
  KHALEEZI_CATEGORIES,
  KHALEEZI_DATA_NOTE,
  KHALEEZI_SIZES,
  featuredKhaleezi,
} from "@/demos/khaleezi-designs/products";
import { Ornament, PendingArtwork } from "@/demos/khaleezi-designs/components/brand";
import { KhaleeziCard } from "@/demos/khaleezi-designs/components/product-card";
import { KhaleeziEnquiryForm } from "@/demos/khaleezi-designs/components/enquiry-form";

const HOME = khaleeziBrand.homeHref;

export default function KhaleeziHome() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#E4DCD0] bg-[#FBF8F2]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-16">
          <div className="flex flex-col justify-center">
            <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">
              Ethnicwear · size inclusive · small to 7XL
            </p>
            <h1 className="font-khaleezi-display mt-5 text-[clamp(2.6rem,6.5vw,4.6rem)] font-light leading-[0.98] text-[#2A2320]">
              Ethnicwear,
              <br />
              cut for <em className="italic text-[#2F6D72]">every</em> body.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#7A6E67]">
              Pure cotton dupatta sets, straight pants and everyday ethnicwear
              from the Khaleezi Designs studio — ordered over WhatsApp, sized from
              small to 7XL, shipped worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`${HOME}/collections`}
                className="inline-flex items-center gap-2 bg-[#2F6D72] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FBF8F2] transition-colors hover:bg-[#255A5E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6D72]"
              >
                Shop the collection
                <ArrowRight aria-hidden className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#sizing"
                className="inline-flex items-center gap-2 border border-[#2A2320]/25 px-7 py-3.5 text-[10px] uppercase tracking-[0.2em] text-[#2A2320] transition-colors hover:border-[#2F6D72] hover:text-[#2F6D72]"
              >
                Size guide
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[#E4DCD0] pt-5">
              {[
                { label: "Sizes", value: "S – 7XL" },
                { label: "Fabric", value: "Cotton" },
                { label: "Ordering", value: "WhatsApp" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="khaleezi-eyebrow text-[8px] text-[#7A6E67]">
                    {item.label}
                  </dt>
                  <dd className="font-khaleezi-display mt-1.5 text-lg text-[#2A2320]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#E4DCD0]">
              <PendingArtwork
                tone={3}
                label="Cotton dupatta set — campaign artwork pending"
                className="transition-transform duration-[900ms] hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-4 border border-[#E4DCD0] bg-[#FBF8F2] px-4 py-3 sm:left-6 sm:right-auto sm:w-72">
              <div>
                <p className="khaleezi-eyebrow text-[8px] text-[#2F6D72]">
                  Signature edit
                </p>
                <p className="font-khaleezi-display mt-1 text-sm text-[#2A2320]">
                  Pure cotton dupatta sets
                </p>
              </div>
              <Link
                href={`${HOME}/collections/dupatta-sets`}
                aria-label="Shop dupatta sets"
                className="grid h-9 w-9 place-items-center border border-[#2A2320]/20 text-[#2A2320] transition-colors hover:border-[#2F6D72] hover:text-[#2F6D72]"
              >
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">01 / Explore</p>
            <h2 className="font-khaleezi-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-[#2A2320]">
              Four ways to wear it
            </h2>
          </div>
          <Link
            href={`${HOME}/collections`}
            className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E67] transition-colors hover:text-[#2A2320]"
          >
            View everything
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KHALEEZI_CATEGORIES.map((category, index) => (
            <Link
              key={category.key}
              href={`${HOME}/collections/${category.key}`}
              className="group relative block border border-[#E4DCD0] bg-[#FBF8F2] p-5 transition-colors hover:border-[#2F6D72]/50"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                <PendingArtwork
                  tone={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5}
                  label={category.label}
                />
              </div>
              <p className="font-khaleezi-display text-lg text-[#2A2320]">
                {category.label}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#7A6E67]">
                {category.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] text-[#2F6D72]">
                Browse
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-[#E4DCD0] bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:py-20">
          <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">02 / The edit</p>
          <h2 className="font-khaleezi-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-[#2A2320]">
            From the studio
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#7A6E67]">
            Demonstration entries built around the label&rsquo;s own categories.
            Prices are shared directly, so every card invites an enquiry.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
            {featuredKhaleezi.map((product) => (
              <KhaleeziCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sizing */}
      <section id="sizing" className="scroll-mt-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div>
            <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">03 / Sizing</p>
            <h2 className="font-khaleezi-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-[#2A2320]">
              Small to 7XL, as standard.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#7A6E67]">
              The label builds across a wide size run rather than scaling a single
              fit. This concept lists every documented size, and asks the label to
              confirm the current measurement chart before you order.
            </p>
            <p className="mt-4 max-w-md border-l-2 border-[#2F6D72]/40 pl-4 text-[11px] leading-relaxed text-[#7A6E67]">
              Sizes below reflect public posts only. Exact garment measurements are
              not published and are not invented here.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-5 gap-2">
              {KHALEEZI_SIZES.map((size) => (
                <span
                  key={size}
                  className="grid h-14 place-items-center border border-[#2A2320]/15 bg-[#FBF8F2] font-khaleezi-display text-sm text-[#2A2320]"
                >
                  {size}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-[#7A6E67]">
              Availability per size requires confirmation · {khaleeziDemo.noCod}
            </p>
          </div>
        </div>
      </section>

      {/* Label story */}
      <section
        id="label"
        className="scroll-mt-24 border-y border-[#E4DCD0] bg-[#F3EDE2]"
      >
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:py-20">
          <Ornament className="mx-auto max-w-md" />
          <div className="mx-auto mt-8 grid max-w-4xl gap-8 text-center sm:grid-cols-2 sm:text-left">
            <div>
              <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">04 / The label</p>
              <h2 className="font-khaleezi-display mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight text-[#2A2320]">
                WhatsApp-first,
                <br />
                wardrobe-led.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[#7A6E67] sm:pt-2">
              <p>
                Khaleezi Designs sells directly through Instagram and WhatsApp —
                no storefront, no cart, no checkout. This concept keeps that
                enquiry-led rhythm instead of pretending an online checkout
                exists.
              </p>
              <p>
                Cotton dupatta sets, straight pants and inclusive sizing sit at
                the centre of the range. Worldwide shipping is offered; cash on
                delivery is not.
              </p>
              <p className="text-[#2A2320]/80">{khaleeziDemo.disclosure}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">05 / Enquire</p>
            <h2 className="font-khaleezi-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-[#2A2320]">
              Ask about a piece
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#7A6E67]">
              Share the piece, size and what you&rsquo;d like to know — price,
              fabric, sizing or delivery. In a live build this would reach the
              label on WhatsApp.
            </p>
            <a
              href={khaleeziContact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#2F6D72] hover:underline"
            >
              Or DM {khaleeziBrand.instagramHandle}
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
            <p className="mt-6 max-w-sm text-[11px] leading-relaxed text-[#7A6E67]">
              {KHALEEZI_DATA_NOTE}
            </p>
          </div>

          <div className="border border-[#E4DCD0] bg-[#FBF8F2] p-5 sm:p-8">
            <KhaleeziEnquiryForm />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="border-t border-[#E4DCD0] bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">06 / Instagram</p>
              <h2 className="font-khaleezi-display mt-3 text-[clamp(1.6rem,3.4vw,2.3rem)] leading-tight text-[#2A2320]">
                {khaleeziBrand.instagramHandle}
              </h2>
            </div>
            <a
              href={khaleeziContact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7A6E67] hover:text-[#2F6D72]"
            >
              Open Instagram
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {khaleeziInstagramTiles.map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative aspect-square overflow-hidden border border-[#E4DCD0]"
              >
                <PendingArtwork
                  tone={tile.tone as 1 | 2 | 3 | 4 | 5}
                  label={tile.label}
                />
                <span className="absolute inset-x-0 bottom-0 bg-[#2A2320]/75 p-2.5 text-[9px] uppercase tracking-[0.16em] text-[#FBF8F2]">
                  {tile.label}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-[11px] text-[#7A6E67]">
            Links open the label&rsquo;s Instagram profile. No feed is embedded and
            no follower or engagement figures are claimed.
          </p>
        </div>
      </section>
    </>
  );
}
