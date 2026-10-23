import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";

export interface PageHeroMeta {
  label: string;
  value: string;
}

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  meta?: PageHeroMeta[];
  headingId?: string;
}

export function PageHero({
  eyebrow,
  heading,
  intro,
  meta,
  headingId = "page-hero",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-[#0A1B4D] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-14 hidden h-64 w-64 rotate-12 border-[6px] border-white/15 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-6 hidden h-3 w-3 bg-[#D8FF3E] lg:block"
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-20">
        <div className="lg:col-span-7">
          <Reveal y={16} duration={0.45}>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#D8FF3E] uppercase">
              {eyebrow}
            </p>
            <h1
              id={headingId}
              className="font-pulse-display mt-4 text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[0.9] font-black tracking-[-0.045em] uppercase"
            >
              {heading}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {intro}
            </p>
          </Reveal>
        </div>

        {meta && meta.length > 0 ? (
          <Reveal y={16} delay={0.08} duration={0.45} className="self-end lg:col-span-5">
            <dl className="grid grid-cols-2 gap-3">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4"
                >
                  <dt className="text-[10px] font-bold tracking-[0.18em] text-white/80 uppercase">
                    {item.label}
                  </dt>
                  <dd className="font-pulse-display mt-1.5 text-base leading-tight font-extrabold tracking-[-0.02em] text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
