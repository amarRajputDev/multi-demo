"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { pulseContact, pulseFaqs } from "../data";

export function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal y={16} duration={0.45}>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                Before you ask
              </p>
              <h2
                id="faq-heading"
                className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                Straight
                <br />
                answers.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5A6A99]">
                The five questions every family asks in the first ten minutes.
                If yours is not here, the desk answers on WhatsApp in minutes.
              </p>
              <a
                href={`https://wa.me/${pulseContact.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#0A1B4D]/20 px-5 py-3.5 text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2447F0] hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
              >
                Ask on WhatsApp
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal y={18} delay={0.06} duration={0.45}>
              <Accordion
                items={pulseFaqs}
                className="divide-y divide-[#0A1B4D]/10 border-y border-[#0A1B4D]/10"
                buttonClassName="min-h-14 py-5 font-pulse-display text-base leading-snug font-extrabold tracking-[-0.02em] text-[#0A1B4D] uppercase transition-colors duration-200 hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0] sm:text-lg"
                answerClassName="pb-6 pr-4 text-sm leading-relaxed text-[#5A6A99] sm:pr-14"
                renderIndicator={(open) => (
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border text-lg leading-none font-bold transition-all duration-300",
                      open
                        ? "rotate-45 border-[#2447F0] bg-[#D8FF3E] text-[#0A1B4D]"
                        : "border-[#0A1B4D]/20 bg-[#F2F5FF] text-[#0A1B4D]",
                    )}
                  >
                    +
                  </span>
                )}
              />
            </Reveal>

            <p className="mt-6 text-xs text-[#5A6A99]">
              Still unsure about fit?{" "}
              <Link
                href="/demos/pulse-prep/contact"
                className="font-semibold text-[#2447F0] underline underline-offset-4 hover:text-[#0A1B4D]"
              >
                Book a free diagnostic test
              </Link>{" "}
              and decide afterwards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
