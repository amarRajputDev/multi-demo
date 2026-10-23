import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealImage } from "@/components/shared/reveal";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]";

const trustChips = [
  "Batches capped at 18",
  "Weekly graded papers",
  "Fortnightly mentor reviews",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(120%_80%_at_80%_-10%,rgba(201,162,39,0.14),transparent_60%)]">
      <div className="mx-auto grid w-full max-w-[1240px] gap-14 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-6 lg:pt-6">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Aurora Academy
              <span aria-hidden className="h-px w-12 bg-[#C9A227]/40" />
              JEE · NEET
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-aurora-display mt-6 text-[clamp(2.35rem,6vw,4.6rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#F4EFE6] [text-wrap:balance]">
              Big dreams deserve{" "}
              <span className="text-[#E8D9A0]">exceptional</span> preparation.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F4EFE6]/75 sm:text-lg">
              A small-batch coaching institute built on a single conviction:
              exceptional results come from attention, not volume. Concept-first
              teaching, graded weekly papers and mentors who stay with your
              batch for the full year.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/demos/aurora/courses"
                className={`inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-sm font-semibold tracking-wide text-[#0B1A33] transition-colors hover:bg-[#E8D9A0] ${focusRing}`}
              >
                Explore the programmes
              </Link>
              <Link
                href="/demos/aurora/contact"
                className={`inline-flex min-h-12 items-center justify-center border border-[#C9A227]/50 px-7 text-sm font-semibold tracking-wide text-[#F4EFE6] transition-colors hover:border-[#C9A227] hover:text-[#E8D9A0] ${focusRing}`}
              >
                Book a diagnostic sitting
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-[#F4EFE6]/60">
              {trustChips.map((chip) => (
                <li key={chip} className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 bg-[#C9A227]"
                  />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 border border-[#C9A227]/35 sm:-inset-4"
            />
            <RevealImage delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 sm:aspect-[3/2]">
                <Image
                  src="/images/aurora/hero-lecture.jpg"
                  alt="Students working through a physics problem during an Aurora Academy lecture (demo image)"
                  width={1400}
                  height={934}
                  priority
                  sizes="(min-width: 1024px) 46vw, (min-width: 640px) 90vw, 90vw"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-[#0B1A33]/10 to-transparent"
                />
              </div>
            </RevealImage>
          </div>

          <Reveal
            delay={0.2}
            className="relative z-10 -mt-10 ml-4 w-40 sm:-mt-14 sm:ml-8 sm:w-52 lg:-ml-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#C9A227]/40 shadow-[0_18px_50px_rgba(4,10,22,0.55)]">
              <Image
                src="/images/aurora/study.jpg"
                alt="Aurora Academy student revising notes beside practice papers (demo image)"
                width={1400}
                height={1051}
                sizes="(min-width: 640px) 208px, 160px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 flex items-center gap-3 text-xs text-[#F4EFE6]/60">
              <span aria-hidden className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping bg-[#C9A227]/60" />
                <span className="relative inline-flex h-2 w-2 bg-[#C9A227]" />
              </span>
              Admissions open for the 2026–27 session (demo)
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
