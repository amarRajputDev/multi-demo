import { Reveal } from "@/components/shared/reveal";
import { pulseStats } from "../data";

export function Trust() {
  return (
    <section aria-labelledby="trust-heading" className="bg-[#0A1B4D] text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <Reveal y={14} duration={0.45}>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="trust-heading"
              className="font-pulse-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[0.95] font-black tracking-[-0.04em] uppercase"
            >
              Preparation you can{" "}
              <span className="text-[#D8FF3E]">measure</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              Pulse runs on visible progress: every mock is ranked, every error
              is logged, and every mentor reports the same numbers to parents.
            </p>
          </div>
        </Reveal>

        <dl className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pulseStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              y={16}
              delay={index * 0.06}
              duration={0.45}
              className="border-l-2 border-[#2447F0] pl-4"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-pulse-display block text-[clamp(2rem,4.5vw,2.75rem)] leading-none font-black tracking-[-0.04em] text-[#D8FF3E]">
                  {stat.value}
                </span>
                <span className="mt-3 block text-sm font-semibold tracking-wide text-white">
                  {stat.label}
                </span>
                <span className="mt-1 block text-xs text-white/55">
                  {stat.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
