"use client";

import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { scholarFaqs } from "../data";

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-[#1F3A2E]/12 bg-[#F5EFE1]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
          <Reveal y={16}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
            >
              Answers before
              <br className="hidden sm:block" /> you ask
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#5C6B60]">
              Can&apos;t find what you&apos;re looking for? Call the front desk
              and speak with the admissions counsellor directly.
            </p>
          </Reveal>

          <Reveal delay={0.1} y={18}>
            <Accordion
              items={scholarFaqs}
              defaultOpenIndex={0}
              itemClassName="border-b border-[#1F3A2E]/15 first:border-t"
              buttonClassName="min-h-14 py-5 font-scholar-display text-lg font-medium text-[#1F3A2E] transition-colors hover:text-[#A8842C] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
              answerClassName="pb-6 pr-8 text-[15px] leading-relaxed text-[#5C6B60]"
              renderIndicator={(open) => (
                <span
                  aria-hidden
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-[#A8842C]/50 text-[#A8842C] transition-transform duration-300"
                  style={{ transform: open ? "rotate(45deg)" : undefined }}
                >
                  +
                </span>
              )}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
