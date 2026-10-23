import { Reveal } from "@/components/shared/reveal";
import { quantumProcess } from "../data";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section className="border-b border-white/10 bg-[#0B1430]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index="02"
          eyebrow="The concept loop"
          title="Five stages, repeated until the exam feels familiar."
          lead="Every batch runs the same disciplined loop. The mentor sets the pace; the data decides the target."
        />

        <div className="relative mt-14">
          <svg
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px w-full lg:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="rgba(34,211,238,0.35)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {quantumProcess.map((step, index) => (
              <li key={step.id} className="relative">
                <Reveal delay={index * 0.06}>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="relative z-10 h-3.5 w-3.5 shrink-0 rotate-45 border border-[#22D3EE] bg-[#0B1430]"
                    />
                    <span className="font-quantum-mono text-[11px] uppercase tracking-[0.24em] text-[#22D3EE]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-quantum-display mt-5 text-xl font-semibold text-[#EAF2FF]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-[#7C93B8]">
            The loop restarts every fortnight: a new map, a new target, a new
            simulation. Nothing in the year is improvised.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
