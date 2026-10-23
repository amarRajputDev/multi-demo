import { Reveal } from "@/components/shared/reveal";
import { bloomTrust } from "../data";

export function Trust() {
  return (
    <section aria-labelledby="trust-heading" className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F3EDF8] via-[#FBF7F2] to-[#FDF0EA] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <Reveal y={14}>
          <h2 id="trust-heading" className="sr-only">
            Why families trust Bloom Learning
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bloomTrust.map((point) => (
              <div
                key={point.label}
                className="flex flex-col rounded-[22px] bg-white/80 p-5 shadow-[0_2px_14px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_24px_rgba(59,51,88,0.09)]"
              >
                <p className="font-bloom-display text-4xl leading-none font-semibold text-[#C2503A]">
                  {point.figure}
                </p>
                <p className="mt-3 font-bloom-display text-base leading-snug font-semibold text-[#3B3358]">
                  {point.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5F5878]">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
