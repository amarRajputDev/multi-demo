import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { exotixBrand, exotixContact, exotixHomeHref } from "../data";
import { exotixImages } from "../images";
import { ExotixImage } from "../components/exotix-image";

/**
 * Campaign hero: oversized racing-jacket imagery, numbered drop label and the
 * brand's own positioning line. Eager image loading for the lead visual.
 */
export function Hero() {
  return (
    <section aria-labelledby="exotix-hero-title" className="relative overflow-hidden border-b border-[#232327]">
      {/* Racing lane dashes behind the hero copy */}
      <div aria-hidden className="exotix-lane absolute inset-x-0 top-0 h-[3px] opacity-90" />

      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="font-exotix-mono flex items-center gap-3 text-[10px] tracking-[0.32em] text-[#E23B2E] uppercase">
            <span>SS CONCEPT</span>
            <span aria-hidden className="exotix-timing-strip h-2.5 w-14 opacity-80" />
            <span className="text-[#8A8A92]">MUMBAI</span>
          </p>

          <h1
            id="exotix-hero-title"
            className="font-exotix-display mt-5 text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.98] tracking-[-0.02em] text-[#F2EFEA] uppercase"
          >
            Streetwear
            <span className="block text-[#E23B2E]">on the grid.</span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#B9BDC4]">
            {exotixBrand.conceptLine} This page is an independent redesign
            concept for the live{" "}
            <a
              href={exotixContact.sourceSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EFEA] underline decoration-[#E23B2E] underline-offset-4"
            >
              exotix.in
            </a>{" "}
            label.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`${exotixHomeHref}/collections`}
              className="inline-flex items-center gap-2 rounded-sm bg-[#E23B2E] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
            >
              Enter the shop
              <ArrowDown aria-hidden className="h-4 w-4" />
            </Link>
            <Link
              href={`${exotixHomeHref}/contact`}
              className="inline-flex items-center gap-2 rounded-sm border border-[#2A2A30] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
            >
              Contact &amp; sizes
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <dl className="font-exotix-mono mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[#232327] pt-6 text-[10px] uppercase">
            <div>
              <dt className="text-[#5A5A62]">Positioning</dt>
              <dd className="mt-1 tracking-[0.14em] text-[#B9BDC4]">
                Vintage · Motorsport
              </dd>
            </div>
            <div>
              <dt className="text-[#5A5A62]">Base</dt>
              <dd className="mt-1 tracking-[0.14em] text-[#B9BDC4]">Govandi, Mumbai</dd>
            </div>
            <div>
              <dt className="text-[#5A5A62]">Concept</dt>
              <dd className="mt-1 tracking-[0.14em] text-[#B9BDC4]">By Vizo</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="relative">
            <ExotixImage
              src={exotixImages.campaignRacing}
              alt="Exotix racing jacket campaign photograph on the live store"
              aspectClassName="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
              loading="eager"
              className="border border-[#1C1C20]"
            />
            <span className="font-exotix-mono absolute bottom-3 left-3 bg-[#0C0C0E]/85 px-2.5 py-1.5 text-[9px] tracking-[0.22em] text-[#B9BDC4] uppercase backdrop-blur-sm">
              Campaign visual · exotix.in
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <ExotixImage
              src={exotixImages.cnyCouples}
              alt="Matching CNY knot jackets photographed as a couples set"
              aspectClassName="aspect-[4/3]"
              loading="eager"
              className="border border-[#1C1C20]"
            />
            <ExotixImage
              src={exotixImages.ferrariCloseup}
              alt="Close-up of embroidered racing jacket panel detail"
              aspectClassName="aspect-[4/3]"
              loading="eager"
              className="border border-[#1C1C20]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
