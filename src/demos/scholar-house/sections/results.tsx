import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { scholarResults } from "../data";

export function Results() {
  return (
    <section
      aria-labelledby="results-heading"
      className="border-y border-[#1F3A2E]/12 bg-[#1F3A2E] text-[#FBF8F1]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#E7D8B4] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#E7D8B4]" />
                Achievement Highlights
              </p>
              <h2
                id="results-heading"
                className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#FBF8F1] sm:text-5xl"
              >
                Quiet work,
                <br className="hidden sm:block" /> steady results
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#FBF8F1]/70 italic">
                The figures below are illustrative placeholders created for
                this design demo — not verified real-world claims.
              </p>
            </div>
            <Link
              href="/demos/scholar-house/results"
              className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[#E7D8B4] py-1 text-sm font-medium text-[#FBF8F1] transition-colors hover:text-[#E7D8B4] sm:self-auto"
            >
              See results in detail
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-px border border-[#FBF8F1]/15 bg-[#FBF8F1]/15 sm:grid-cols-2 lg:grid-cols-4">
          {scholarResults.map((item, index) => (
            <li key={item.label} className="bg-[#1F3A2E]">
              <Reveal delay={index * 0.06} y={18} className="flex h-full flex-col p-7">
                <p className="font-scholar-display text-5xl leading-none font-medium text-[#E7D8B4]">
                  {item.figure}
                </p>
                <p className="mt-4 text-sm font-semibold tracking-wide text-[#FBF8F1]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#FBF8F1]/65">
                  {item.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
