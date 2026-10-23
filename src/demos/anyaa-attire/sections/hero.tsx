import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { anyaaBrand, anyaaHomeHref } from "../data";
import { AnyaaImage } from "../components/anyaa-image";
import { BotanicalSprig } from "../components/icons";
import { AnyaaLogo } from "../components/logo";

/** Premium editorial hero - logo, botanical line-art and a calm teal field. */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DFE7E2] bg-[#FAF8F3]">
      {/* Decorative botanical field - pure SVG, no downloaded assets. */}
      <svg
        aria-hidden
        viewBox="0 0 800 600"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-[62%] text-[#2E6F62]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <g opacity="0.16">
          <path d="M60 560 C160 460 240 380 320 300 C400 220 470 140 560 60" />
          <path d="M150 570 C250 470 330 400 420 320 C510 240 600 160 700 90" />
          <path d="M260 580 C340 500 420 430 520 360 C620 290 700 220 780 160" />
          <path d="M320 300 C300 260 310 210 350 180 C370 230 360 280 320 300 Z" />
          <path d="M420 320 C410 270 430 220 480 200 C480 255 460 300 420 320 Z" />
          <path d="M520 360 C520 300 550 250 610 240 C600 300 570 350 520 360 Z" />
          <path d="M240 470 C210 440 205 390 230 350 C265 390 270 440 240 470 Z" />
          <circle cx="560" cy="60" r="8" />
          <circle cx="700" cy="90" r="5" />
        </g>
      </svg>

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <AnyaaLogo size={44} priority />
            <span className="font-anyaa-body text-[10px] tracking-[0.32em] text-[#6E7C77] uppercase">
              Unofficial website concept
            </span>
          </div>

          <BotanicalSprig className="mt-6 h-8 w-24 text-[#2E6F62]/70" />

          <h1 className="font-anyaa-display mt-5 text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.02] tracking-tight text-[#22332F]">
            Quiet luxury for
            <span className="block italic text-[#2E6F62]">everyday dressing.</span>
          </h1>

          <p className="font-anyaa-body mt-6 max-w-xl text-[16px] leading-relaxed text-[#6E7C77]">
            {anyaaBrand.tagline} A boutique storefront concept with botanical
            detail, editorial typography and an honest &quot;enquire for
            price&quot; shopping experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`${anyaaHomeHref}/collections`}
              className="font-anyaa-body inline-flex items-center gap-2 rounded-full bg-[#2E6F62] px-7 py-4 text-[11px] font-medium tracking-[0.22em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22332F]"
            >
              Shop the edit
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link
              href={`${anyaaHomeHref}/#enquire`}
              className="font-anyaa-body inline-flex items-center gap-2 rounded-full border border-[#2E6F62]/40 px-7 py-4 text-[11px] font-medium tracking-[0.22em] text-[#22332F] uppercase transition hover:border-[#2E6F62] hover:text-[#2E6F62]"
            >
              Enquire about a piece
            </Link>
          </div>

          <p className="font-anyaa-body mt-6 text-[11px] leading-relaxed text-[#6E7C77]/90">
            Concept by Vizo Technology - not the brand&apos;s official store.
            Prices, sizes and availability require confirmation.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[3px] border border-[#2E6F62]/20" aria-hidden />
            <AnyaaImage
              src={null}
              alt="Editorial placeholder card introducing the Anyaa Attire everyday edit"
              tint="sage"
              aspectClassName="aspect-[4/5]"
              loading="eager"
              className="rounded-[2px]"
            />
            <div className="absolute -bottom-4 -left-4 rounded-[2px] border border-[#DFE7E2] bg-[#FAF8F3] px-4 py-3 shadow-[0_12px_30px_rgba(34,51,47,0.08)]">
              <p className="font-anyaa-body text-[9px] tracking-[0.3em] text-[#2E6F62] uppercase">
                The edit
              </p>
              <p className="font-anyaa-display mt-1 text-[15px] text-[#22332F]">
                Botanical · Contemporary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
