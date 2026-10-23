import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { northstarAdmissions } from "../data";

export function Admissions() {
  return (
    <section
      aria-labelledby="admissions-heading"
      className="border-y border-[#26241F]/12 bg-[#F1ECE3]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
                Admissions
              </p>
              <h2
                id="admissions-heading"
                className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
              >
                Four steps,
                <br className="hidden sm:block" />
                <span className="text-[#9C4F36] italic">
                  no pressure at any of them.
                </span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6E6A62]">
                The process is deliberately slow at the start. We would rather
                lose an admission than mismatch a mentor, a batch or a plan.
              </p>
              <Link
                href="/demos/northstar/contact"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 bg-[#26241F] px-8 py-3.5 text-[13px] tracking-[0.16em] text-[#F7F4EF] uppercase transition-colors duration-300 hover:bg-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Begin the conversation
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <ol className="lg:col-span-8">
            {northstarAdmissions.map((step, index) => (
              <li key={step.step}>
                <Reveal delay={index * 0.07} duration={0.8} y={18}>
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-t border-[#26241F]/15 py-7 sm:gap-x-8">
                    <span
                      aria-hidden
                      className="font-northstar-display text-sm text-[#9C4F36] tabular-nums"
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-northstar-display text-2xl leading-snug text-[#26241F]">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-[#6E6A62]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
            <li aria-hidden className="border-t border-[#26241F]/15" />
          </ol>
        </div>
      </div>
    </section>
  );
}
