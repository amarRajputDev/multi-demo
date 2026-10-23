import { Reveal } from "@/components/shared/reveal";
import { pulseRoadmap } from "../data";

export function Roadmap() {
  return (
    <section aria-labelledby="roadmap-heading" className="bg-[#F2F5FF]">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal y={16} duration={0.45} className="lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
              The route to exam day
            </p>
            <h2
              id="roadmap-heading"
              className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
            >
              Five stages.
              <br />
              No guessing what&apos;s next.
            </h2>
          </Reveal>
          <Reveal y={16} delay={0.08} duration={0.45} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#5A6A99] lg:pb-2">
              Every student follows the same published sequence, with the
              checkpoints moved to match their diagnostic. You always know
              which stage you are in and what has to be true before the next
              one starts.
            </p>
          </Reveal>
        </div>

        <div
          aria-hidden
          className="mt-10 hidden gap-3 lg:grid lg:grid-cols-5"
        >
          {pulseRoadmap.map((stage, index) => (
            <span
              key={stage.stage}
              className={
                index === pulseRoadmap.length - 1
                  ? "h-2.5 rounded-full bg-[#D8FF3E]"
                  : "h-2.5 rounded-full bg-[#2447F0]"
              }
            />
          ))}
        </div>

        <ol className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-5 lg:gap-3">
          {pulseRoadmap.map((stage, index) => (
            <li key={stage.stage} className="h-full">
              <Reveal
                y={18}
                delay={index * 0.07}
                duration={0.45}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-[#0A1B4D]/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-pulse-display text-[2rem] leading-none font-black tracking-[-0.05em] text-[#2447F0]">
                      {stage.stage}
                    </span>
                    <span className="rounded-full bg-[#D8FF3E] px-2.5 py-1 text-[9px] font-bold tracking-[0.14em] text-[#0A1B4D] uppercase">
                      {stage.window}
                    </span>
                  </div>
                  <h3 className="font-pulse-display mt-4 text-lg leading-none font-extrabold tracking-[-0.03em] text-[#0A1B4D] uppercase">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#5A6A99]">
                    {stage.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
