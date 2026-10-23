import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { quantumFeatures } from "../data";
import { SectionHeading } from "./section-heading";

export function Features({
  index = "03",
}: {
  index?: string;
}) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <SectionHeading
            index={index}
            eyebrow="Why Quantum"
            title="Preparation engineered around evidence, not attendance."
            lead="Four commitments shape every batch — and each one is visible in the weekly routine of the classroom."
          />
          <Reveal delay={0.1} className="mt-10">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 border border-[#22D3EE]/25"
              />
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10">
                <Image
                  src="/images/quantum/laptops.jpg"
                  alt="Students reviewing an error analysis on laptops during a Quantum Learning session (demo image)"
                  width={1400}
                  height={933}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 90vw, 90vw"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#050A18]/80 via-transparent to-transparent"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <ul className="border-t border-white/10">
            {quantumFeatures.map((point, indexValue) => (
              <li key={point.id} className="border-b border-white/10">
                <Reveal
                  delay={indexValue * 0.06}
                  className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6 sm:py-9"
                >
                  <span
                    aria-hidden
                    className="font-quantum-mono text-sm tracking-[0.2em] text-[#22D3EE] sm:col-span-1"
                  >
                    0{indexValue + 1}
                  </span>
                  <div className="sm:col-span-11">
                    <h3 className="font-quantum-display text-xl font-semibold leading-snug text-[#EAF2FF] sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#7C93B8] sm:text-base">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
