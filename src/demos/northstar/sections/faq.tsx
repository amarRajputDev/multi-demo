"use client";

import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { northstarFaqs } from "../data";

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal y={14} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Questions, answered plainly
            </p>
            <h2
              id="faq-heading"
              className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
            >
              Before you
              <span className="text-[#9C4F36] italic"> decide.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6E6A62]">
              If your question is not here, write or call — a counsellor, not a
              script, will answer.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal y={16} duration={0.8}>
            <Accordion
              items={northstarFaqs}
              className="border-t border-[#26241F]/20"
              itemClassName="border-b border-[#26241F]/15"
              buttonClassName="min-h-14 py-5 font-northstar-display text-xl leading-snug text-[#26241F] transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none sm:text-[1.375rem]"
              answerClassName="pb-6 pr-8 text-[15px] leading-relaxed text-[#6E6A62]"
              renderIndicator={(open) => (
                <span
                  aria-hidden
                  className="mt-1.5 shrink-0 font-northstar-display text-[#9C4F36] transition-transform duration-300"
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
