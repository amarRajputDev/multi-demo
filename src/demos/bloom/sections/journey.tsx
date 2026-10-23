import { Reveal } from "@/components/shared/reveal";
import { bloomJourney } from "../data";

export function Journey() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-white/60 py-16 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 -left-24 h-56 w-56 rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-[#FDF0EA]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#F3EDF8]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#F3EDF8] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
              The Bloom journey
            </p>
            <h2
              id="journey-heading"
              className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              A gentle path from hello
              <br className="hidden sm:block" /> to confident learner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5F5878]">
              No pressure, no surprises — just a clear, friendly process that
              families and mentors walk through together.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <span
            aria-hidden
            className="absolute top-7 right-[calc(10%-14px)] left-[calc(10%-14px)] hidden h-0.5 rounded-full bg-gradient-to-r from-[#E8836F]/30 via-[#F5C86B]/60 to-[#E8836F]/30 lg:block"
          />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {bloomJourney.map((step, index) => (
              <li key={step.step} className="relative">
                <Reveal delay={index * 0.07} y={18}>
                  <div className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#C2503A] font-bloom-display text-xl font-semibold text-white shadow-[0_4px_16px_rgba(194,80,58,0.28)] transition-transform duration-300 hover:scale-105">
                        {step.step}
                      </span>
                      {index < bloomJourney.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute top-[3.75rem] left-1/2 h-[calc(100%-2.5rem)] w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#E8836F]/40 to-[#E8836F]/10 lg:hidden"
                        />
                      )}
                    </div>
                    <div className="lg:mt-5">
                      <h3 className="font-bloom-display text-lg font-semibold text-[#3B3358]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5F5878] lg:mx-auto lg:max-w-[220px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
