import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Activity } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";

const targets = ["JEE Main", "NEET UG", "MHT-CET", "Olympiads"];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 hidden h-72 w-72 rotate-12 border-[6px] border-[#2447F0]/15 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-16 hidden h-40 w-40 -rotate-12 border-[6px] border-[#0A1B4D]/10 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-10 hidden h-3 w-3 bg-[#D8FF3E] lg:block"
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 pt-10 pb-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-7 lg:pr-6">
          <Reveal y={16} duration={0.45}>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold tracking-[0.26em] text-[#2447F0] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#2447F0]" />
              Admissions open · 2026 cohorts
            </p>
          </Reveal>

          <Reveal y={22} delay={0.05} duration={0.5}>
            <h1
              id="hero-heading"
              className="font-pulse-display mt-5 text-[clamp(2.5rem,8.5vw,5.75rem)] leading-[0.88] font-black tracking-[-0.045em] text-[#0A1B4D] uppercase"
            >
              <span className="block">
                Prep <span className="text-[#2447F0]">faster.</span>
              </span>
              <span className="block">
                Rank <span className="text-[#2447F0]">higher.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal y={18} delay={0.1} duration={0.5}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5A6A99] sm:text-lg">
              Pulse Prep is a competitive entrance centre for students who want
              a measurable climb — diagnostic-led blueprints, nine ranked mocks
              a month, and faculty on the doubt desk until 9 PM.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.15} duration={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/demos/pulse-prep/contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#2447F0] px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0A1B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Book a free diagnostic
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/demos/pulse-prep/courses"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[#0A1B4D]/20 px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A1B4D] hover:bg-[#F2F5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
              >
                See all programmes
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal y={14} delay={0.2} duration={0.45}>
            <ul className="mt-8 flex flex-wrap gap-2 border-t border-[#0A1B4D]/10 pt-6">
              {targets.map((target) => (
                <li
                  key={target}
                  className="rounded-full border border-[#0A1B4D]/15 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#0A1B4D] uppercase"
                >
                  {target}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:translate-y-6">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 bg-[#2447F0] sm:translate-x-4 sm:translate-y-4"
            />
            <RevealImage className="relative">
              <figure className="relative aspect-[4/3] overflow-hidden bg-[#F2F5FF]">
                <Image
                  src="/images/pulse-prep/hero-team.jpg"
                  alt="Pulse Prep students working through a problem set together in a bright classroom"
                  width={1400}
                  height={933}
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#D8FF3E] px-3.5 py-2 text-[10px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                  Free diagnostic test
                </figcaption>
              </figure>
            </RevealImage>
          </div>

          <Reveal
            y={18}
            delay={0.25}
            duration={0.45}
            className="relative -mt-6 ml-4 inline-block sm:ml-8 lg:-ml-6"
          >
            <div className="flex items-center gap-3 rounded-2xl bg-[#0A1B4D] px-4 py-3 shadow-[0_24px_50px_-35px_rgba(10,27,77,1)]">
              <Activity aria-hidden className="h-5 w-5 text-[#D8FF3E]" />
              <span className="text-left">
                <span className="block text-[10px] font-bold tracking-[0.18em] text-white/65 uppercase">
                  Last Sunday&apos;s batch
                </span>
                <span className="block text-sm font-semibold text-white">
                  Median percentile{" "}
                  <span className="text-[#D8FF3E]">+11</span>
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
