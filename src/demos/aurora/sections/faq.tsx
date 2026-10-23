"use client";

import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { auroraFaqs } from "../data";

interface FaqProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
}

export function Faq({
  eyebrow = "Questions",
  title = "Answers before you enquire.",
  lead = "The five things families ask us most often — answered plainly, including how this demo handles figures.",
}: FaqProps) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-32">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              {eyebrow}
            </p>
            <h2 className="font-aurora-display mt-5 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.08] tracking-[-0.01em] text-[#F4EFE6] [text-wrap:balance]">
              {title}
            </h2>
            {lead ? (
              <p className="mt-4 text-sm leading-relaxed text-[#F4EFE6]/70">
                {lead}
              </p>
            ) : null}
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Accordion
            items={auroraFaqs}
            className="border-t border-white/10"
            itemClassName="border-b border-white/10"
            buttonClassName="min-h-14 py-5 pr-2 text-base font-medium tracking-tight text-[#F4EFE6] transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] sm:text-lg"
            answerClassName="pb-6 pr-2 text-sm leading-relaxed text-[#F4EFE6]/70 sm:text-base"
            renderIndicator={(open) => (
              <span
                aria-hidden
                className={cn(
                  "mt-0.5 grid h-8 w-8 shrink-0 place-items-center border border-[#C9A227]/50 text-lg leading-none text-[#C9A227] transition-transform duration-300",
                  open && "rotate-45",
                )}
              >
                +
              </span>
            )}
          />
        </div>
      </div>
    </section>
  );
}
