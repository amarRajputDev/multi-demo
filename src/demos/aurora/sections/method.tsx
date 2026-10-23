import { Reveal } from "@/components/shared/reveal";
import { auroraMethod } from "../data";
import { SectionHeading } from "./section-heading";

export function Method() {
  return (
    <section className="border-b border-white/10 bg-[#0A1729]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index="02"
          eyebrow="The Aurora method"
          title="Four movements, repeated until the exam feels familiar."
          lead="Nothing in the year is improvised. Each batch runs the same disciplined loop, with the mentor deciding the pace."
        />

        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {auroraMethod.map((step, index) => (
            <Reveal
              key={step.id}
              delay={index * 0.07}
              className="bg-[#0A1729]"
            >
              <div className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span aria-hidden className="h-px flex-1 bg-[#C9A227]/40" />
                  <span className="font-aurora-display text-sm tracking-[0.2em] text-[#C9A227]">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-aurora-display mt-6 text-2xl text-[#F4EFE6]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
