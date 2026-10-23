import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { bloomAdmissions } from "../data";

export function Admissions() {
  return (
    <section
      aria-labelledby="admissions-heading"
      className="relative overflow-hidden bg-white/60 py-16 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-[12%] h-52 w-52 rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-[#F5C86B]/20"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              <Heart aria-hidden className="h-3.5 w-3.5 text-[#E8836F]" />
              Joining Bloom
            </p>
            <h2
              id="admissions-heading"
              className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              Four easy steps
              <br className="hidden sm:block" /> to get started
            </h2>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bloomAdmissions.map((step, index) => (
            <li key={step.step}>
              <Reveal delay={index * 0.06} y={18}>
                <article className="flex h-full flex-col rounded-[24px] border border-[#3B3358]/8 bg-[#FBF7F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(59,51,88,0.09)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F5C86B]/40 font-bloom-display text-lg font-semibold text-[#3B3358] transition-transform duration-300 hover:scale-110">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-bloom-display text-xl font-semibold text-[#3B3358]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5878]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal y={14}>
          <div className="mt-12 text-center">
            <Link
              href="/demos/bloom/contact"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(194,80,58,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Start step one today
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
