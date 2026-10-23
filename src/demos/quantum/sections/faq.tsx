"use client";

import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { quantumFaqs } from "../data";

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
            <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
              {eyebrow}
            </p>
            <h2 className="font-quantum-display mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[#EAF2FF] [text-wrap:balance]">
              {title}
            </h2>
            {lead ? (
              <p className="mt-4 text-sm leading-relaxed text-[#7C93B8]">
                {lead}
              </p>
            ) : null}
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Accordion
            items={quantumFaqs}
            className="border-t border-white/10"
            itemClassName="border-b border-white/10"
            buttonClassName="min-h-14 py-5 pr-2 text-base font-medium tracking-tight text-[#EAF2FF] transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] sm:text-lg"
            answerClassName="pb-6 pr-2 text-sm leading-relaxed text-[#7C93B8] sm:text-base"
            renderIndicator={(open) => (
              <span
                aria-hidden
                className={cn(
                  "font-quantum-mono mt-0.5 grid h-8 w-8 shrink-0 place-items-center border border-[#22D3EE]/50 text-base leading-none text-[#22D3EE] transition-transform duration-300",
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
