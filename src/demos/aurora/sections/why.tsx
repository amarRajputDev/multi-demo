import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { auroraWhy } from "../data";
import { SectionHeading } from "./section-heading";

export function Why() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <SectionHeading
            index="01"
            eyebrow="Why Aurora"
            title="Preparation designed around attention, not attendance."
            lead="Four commitments shape every batch we run — and each one is visible in the weekly routine of the classroom."
          />
          <Reveal delay={0.1} className="mt-10">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 border border-[#C9A227]/30"
              />
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10">
                <Image
                  src="/images/aurora/mentor.jpg"
                  alt="An Aurora Academy mentor guiding a student through a worked problem (demo image)"
                  width={1400}
                  height={933}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 90vw, 90vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <ul className="border-t border-white/10">
            {auroraWhy.map((point, index) => (
              <li key={point.id} className="border-b border-white/10">
                <Reveal
                  delay={index * 0.06}
                  className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6 sm:py-9"
                >
                  <span
                    aria-hidden
                    className="font-aurora-display text-lg text-[#C9A227] sm:col-span-1"
                  >
                    0{index + 1}
                  </span>
                  <div className="sm:col-span-11">
                    <h3 className="font-aurora-display text-xl leading-snug text-[#F4EFE6] sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#F4EFE6]/70 sm:text-base">
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
