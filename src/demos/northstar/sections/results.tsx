import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { northstarResults } from "../data";

export function Results() {
  return (
    <section
      aria-labelledby="results-heading"
      className="border-y border-[#26241F]/12 bg-[#E5C9BC]/40"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
                Results
              </p>
              <h2
                id="results-heading"
                className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
              >
                Results are a
                <br className="hidden sm:block" />{" "}
                <span className="text-[#9C4F36] italic">
                  by-product, carefully.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6E6A62]">
                Nobody here chases a rank directly. Aspirants follow the
                timetable, hand in weekly writing, and revise on a published
                cycle. Marks follow understanding — and understanding follows
                steady, mentored effort.
              </p>
              <p className="mt-5 max-w-md text-xs leading-relaxed text-[#6E6A62]/90 italic">
                Every figure on this page is an illustrative placeholder for
                this design demo, not a verified real-world claim.
              </p>
              <Link
                href="/demos/northstar/results"
                className="group mt-8 inline-flex min-h-12 items-center gap-2 border-b border-[#9C4F36] pb-0.5 text-[13px] tracking-[0.14em] text-[#26241F] uppercase transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
              >
                The results record
                <ArrowRight
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {northstarResults.map((item, index) => (
                <div
                  key={item.label}
                  className="border-t border-[#26241F]/20 pt-5"
                >
                  <Reveal delay={index * 0.06} duration={0.8} y={16}>
                    <dt>
                      <span className="font-northstar-display text-[3rem] leading-none text-[#26241F]">
                        {item.figure}
                      </span>
                      <span className="mt-3 block text-sm font-semibold tracking-[0.08em] text-[#26241F]">
                        {item.label}
                      </span>
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-[#6E6A62]">
                      {item.detail}
                    </dd>
                  </Reveal>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
