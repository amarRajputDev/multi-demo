import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { scholarAdmissions } from "../data";

export function Admissions() {
  return (
    <section
      aria-labelledby="admissions-heading"
      className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal y={16}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Admissions
            </p>
            <h2
              id="admissions-heading"
              className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
            >
              Four unhurried steps
            </h2>
          </div>
          <Link
            href="/demos/scholar-house/contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start bg-[#1F3A2E] px-6 py-3 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors hover:bg-[#2a4d3c] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none sm:self-auto"
          >
            Start your enquiry
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div aria-hidden className="mt-6 border-t-2 border-b border-[#1F3A2E]/20 pt-1">
          <div className="border-t border-[#A8842C]/40" />
        </div>
      </Reveal>

      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {scholarAdmissions.map((step, index) => (
          <li key={step.step} className="border-t-2 border-[#1F3A2E] pt-5">
            <Reveal delay={index * 0.07} y={18}>
              <span
                aria-hidden
                className="font-scholar-display text-sm font-medium tracking-widest text-[#A8842C]"
              >
                Step {step.step}
              </span>
              <h3 className="mt-2 font-scholar-display text-2xl font-medium text-[#1F3A2E]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5C6B60]">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
