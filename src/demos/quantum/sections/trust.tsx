import { Reveal } from "@/components/shared/reveal";
import { quantumStats } from "../data";

export function Trust() {
  return (
    <section
      aria-label="Quantum Learning in numbers"
      className="border-b border-white/10 bg-[#0B1430]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {quantumStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#0B1430] px-5 py-7 sm:px-7 sm:py-9"
              >
                <p className="font-quantum-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-none text-[#22D3EE]">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#7C93B8] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mt-5 text-xs text-[#7C93B8]">
          Illustrative figures for this design demo — not verified outcomes.
        </p>
      </div>
    </section>
  );
}
