import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { revBrand, revContact, revLookbook } from "../data";
import { RevLogo } from "../components/logo";

/**
 * Asymmetric split hero: oversized uppercase display lock-up on the left with
 * a numbered lookbook index, tall brand panel on the right. Distinct from the
 * full-bleed heroes used by sibling fashion demos.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="rev-hero-title"
      className="border-b border-[#E8D9DC] bg-[#FAF4F3]"
    >
      <div className="mx-auto grid max-w-[1400px] gap-0 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="flex flex-col justify-center py-14 lg:py-24 lg:pr-16">
          <Reveal y={16}>
            <p className="text-[10px] font-semibold tracking-[0.4em] text-[#B4707F] uppercase">
              {revBrand.shortName} · Lookbook concept
            </p>
          </Reveal>

          <Reveal delay={0.06} y={22}>
            <h1
              id="rev-hero-title"
              className="font-rev-heading mt-5 text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.86] text-[#1A1618]"
            >
              Lady
              <br />
              Boss
              <span className="text-[#B4707F]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5F5458]">
              {revBrand.conceptLine}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/demos/rev-ladyboss/collections"
                className="inline-flex items-center gap-2.5 rounded-[2px] bg-[#1A1618] px-7 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
              >
                Shop the lookbook
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <a
                href={revContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[2px] border border-[#1A1618] px-7 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#1A1618] uppercase transition hover:border-[#B4707F] hover:text-[#B4707F]"
              >
                {revContact.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ol className="mt-12 border-t border-[#E8D9DC]">
              {revLookbook.map((entry) => (
                <li key={entry.key}>
                  <Link
                    href={entry.href}
                    className="group flex items-baseline gap-5 border-b border-[#E8D9DC] py-4 transition hover:bg-[#F3DCE1]/40"
                  >
                    <span className="font-rev-display w-8 shrink-0 text-[11px] tracking-[0.1em] text-[#B4707F]">
                      {entry.index}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-rev-heading block text-[1.05rem] text-[#1A1618] transition group-hover:text-[#B4707F]">
                        {entry.label}
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-[#7C7073]">
                        {entry.blurb}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 shrink-0 translate-x-0 text-[#B4707F] transition group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="relative hidden border-l border-[#E8D9DC] bg-[#F3DCE1] lg:block">
          <RevealImage className="h-full">
            <div className="flex h-full min-h-[40rem] flex-col items-center justify-center gap-8 px-12 py-16">
              <RevLogo size={200} priority />
              <p className="font-rev-heading max-w-xs text-center text-[1.6rem] leading-[1.05] text-[#1A1618]">
                Contemporary fashion,
                <br />
                ordered by DM
              </p>
              <p className="max-w-xs text-center text-[13px] leading-relaxed text-[#5F5458]">
                {revBrand.orderLine}
              </p>
              <span className="rounded-[2px] border border-[#B4707F]/40 px-3 py-1.5 text-[9px] font-semibold tracking-[0.3em] text-[#8E5765] uppercase">
                Unofficial concept
              </span>
            </div>
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
