import { Reveal } from "@/components/shared/reveal";
import { auroraStats } from "../data";

export function Trust() {
  return (
    <section
      aria-label="Aurora Academy in numbers"
      className="border-b border-white/10 bg-[#0A1729]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {auroraStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#0A1729] px-5 py-7 sm:px-7 sm:py-9"
              >
                <p className="font-aurora-display text-[clamp(1.9rem,3.6vw,2.6rem)] leading-none text-[#E8D9A0]">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#F4EFE6]/70 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mt-5 text-xs text-[#F4EFE6]/60">
          Illustrative figures for this design demo — not verified outcomes.
        </p>
      </div>
    </section>
  );
}
