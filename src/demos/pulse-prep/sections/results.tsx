import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { pulseResults } from "../data";

interface ResultsProps {
  showLink?: boolean;
}

export function Results({ showLink = true }: ResultsProps) {
  return (
    <section aria-labelledby="results-heading" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal y={16} duration={0.45}>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                The scoreboard
              </p>
              <h2
                id="results-heading"
                className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                Ranks are the receipts.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5A6A99]">
                Every score here started as a diagnostic gap on a mentor&apos;s
                sheet. These are the shapes our cohort has produced across the
                last attempt cycle.
              </p>

              <p className="mt-6 flex items-start gap-2.5 rounded-2xl bg-[#F2F5FF] px-4 py-3.5 text-xs leading-relaxed text-[#5A6A99]">
                <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2447F0]" />
                Names, ranks and scores on this page are illustrative demo
                placeholders — not verified real-world achievements.
              </p>

              {showLink ? (
                <Link
                  href="/demos/pulse-prep/results"
                  className="group mt-6 inline-flex min-h-11 items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-colors duration-200 hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
                >
                  <span className="border-b-2 border-[#D8FF3E] pb-1">
                    Full result archive
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ) : null}
            </Reveal>
          </div>

          <ul className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
            {pulseResults.map((result, index) => (
              <li key={`${result.exam}-${result.student}`}>
                <Reveal y={18} delay={index * 0.06} duration={0.45}>
                  <article className="group h-full rounded-2xl border border-[#0A1B4D]/12 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#2447F0] hover:shadow-[0_26px_50px_-40px_rgba(36,71,240,1)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#F2F5FF] px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#2447F0] uppercase">
                        {result.exam}
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.14em] text-[#5A6A99] uppercase">
                        {result.student}
                      </span>
                    </div>
                    <p className="font-pulse-display mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-none font-black tracking-[-0.045em] text-[#0A1B4D]">
                      {result.achievement}
                    </p>
                    <span
                      aria-hidden
                      className="mt-2.5 block h-1.5 w-12 bg-[#D8FF3E] transition-all duration-300 group-hover:w-20"
                    />
                    <p className="mt-3 text-[13px] leading-relaxed text-[#5A6A99]">
                      {result.detail}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
