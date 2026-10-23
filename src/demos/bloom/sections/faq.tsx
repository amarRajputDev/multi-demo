"use client";

import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { bloomFaqs } from "../data";
import { FlowerMark } from "../components/illustrations";

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
        <Reveal y={16}>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F3EDF8] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
            <FlowerMark className="h-4 w-4 text-[#E8836F]" />
            Parents ask us
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.5rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
          >
            Answers,
            <br className="hidden sm:block" /> before you ask
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#5F5878]">
            Can&apos;t find what you&apos;re looking for? Call the front desk —
            a real mentor will pick up, usually before the second ring.
          </p>
        </Reveal>

        <Reveal delay={0.1} y={18}>
          <Accordion
            items={bloomFaqs}
            defaultOpenIndex={0}
            itemClassName="mb-3 rounded-[20px] border border-[#3B3358]/8 bg-white px-5 shadow-[0_2px_12px_rgba(59,51,88,0.04)] transition-shadow duration-300 has-[:focus-visible]:shadow-[0_0_0_3px_rgba(232,131,111,0.35)]"
            buttonClassName="min-h-14 py-4 font-bloom-display text-lg font-semibold text-[#3B3358] transition-colors hover:text-[#B34832] focus-visible:outline-none"
            answerClassName="pb-5 pr-4 text-[15px] leading-relaxed text-[#5F5878]"
            renderIndicator={(open) => (
              <span
                aria-hidden
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FBF7F2] text-[#C2503A] transition-all duration-300"
                style={{ transform: open ? "rotate(45deg) scale(1.05)" : undefined }}
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M8 2.5v11M2.5 8h11" />
                </svg>
              </span>
            )}
          />
        </Reveal>
      </div>
    </section>
  );
}
