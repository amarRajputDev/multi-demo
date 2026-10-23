import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { northstarPrinciples } from "../data";

export function Principles() {
  return (
    <section
      aria-labelledby="principles-heading"
      className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal y={14} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Why Northstar
            </p>
            <h2
              id="principles-heading"
              className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
            >
              Four commitments,
              <br className="hidden sm:block" />
              <span className="text-[#9C4F36] italic">
                kept in writing.
              </span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6E6A62]">
              Coaching in this category often sells access to lectures. We think
              the defensible difference is structure, mentor contact, and the
              willingness to give uncomfortable advice early.
            </p>
            <Link
              href="/demos/northstar/about"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#9C4F36] pb-0.5 text-[13px] tracking-[0.14em] text-[#26241F] uppercase transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
            >
              Read our philosophy
              <ArrowRight
                aria-hidden
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <ol className="lg:col-span-8">
          {northstarPrinciples.map((principle, index) => (
            <li key={principle.index}>
              <Reveal delay={index * 0.07} duration={0.8} y={18}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-1 border-t border-[#26241F]/15 py-7 sm:gap-x-8">
                  <span
                    aria-hidden
                    className="font-northstar-display text-sm text-[#9C4F36] tabular-nums"
                  >
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="font-northstar-display text-2xl leading-snug text-[#26241F]">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-[#6E6A62]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
          <li aria-hidden className="border-t border-[#26241F]/15" />
        </ol>
      </div>
    </section>
  );
}
