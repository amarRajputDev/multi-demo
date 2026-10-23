import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gauge, LineChart, Timer, Users } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { pulseCourses, pulseFeatures } from "../data";

export function Bento() {
  return (
    <section aria-labelledby="bento-heading" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Reveal y={16} duration={0.45}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                Programmes &amp; proof
              </p>
              <h2
                id="bento-heading"
                className="font-pulse-display mt-3 max-w-2xl text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                Pick a programme.
                <br />
                Keep the engine running.
              </h2>
            </div>
            <Link
              href="/demos/pulse-prep/courses"
              className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-[#0A1B4D]/20 px-5 py-3 text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2447F0] hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0] sm:self-auto"
            >
              All 5 programmes
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-6">
          <Reveal
            y={18}
            duration={0.45}
            className="md:col-span-6 lg:col-span-4"
          >
            <div className="flex h-full flex-col rounded-3xl bg-[#2447F0] p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-pulse-display text-[clamp(1.5rem,3vw,2rem)] leading-none font-black tracking-[-0.04em] uppercase">
                  The lineup
                </h3>
                <span className="rounded-full bg-[#D8FF3E] px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                  2026 batches
                </span>
              </div>
              <ul className="mt-5">
                {pulseCourses.map((course) => (
                  <li key={course.id}>
                    <Link
                      href="/demos/pulse-prep/courses"
                      className="group -mx-2 flex min-h-12 items-center justify-between gap-4 rounded-xl px-2 py-3 transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF3E]"
                    >
                      <span className="min-w-0">
                        <span className="font-pulse-display block truncate text-base font-extrabold tracking-[-0.02em] uppercase sm:text-lg">
                          {course.name}
                        </span>
                        <span className="block truncate text-xs text-white/80">
                          {course.duration}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        <span className="hidden text-xs font-semibold text-[#D8FF3E] sm:block">
                          {course.fee}
                        </span>
                        <ArrowUpRight
                          aria-hidden
                          className="h-4 w-4 text-white/70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D8FF3E]"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal y={18} delay={0.06} duration={0.45} className="md:col-span-3 lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-[#F2F5FF] p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0A1B4D] text-[#D8FF3E]">
                <Gauge aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="font-pulse-display mt-5 text-xl leading-tight font-extrabold tracking-[-0.02em] text-[#0A1B4D] uppercase">
                {pulseFeatures[1].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5A6A99]">
                {pulseFeatures[1].body}
              </p>
              <p className="mt-auto pt-5 text-[10px] font-bold tracking-[0.18em] text-[#2447F0] uppercase">
                {pulseFeatures[1].meta}
              </p>
            </div>
          </Reveal>

          <Reveal y={18} delay={0.1} duration={0.45} className="md:col-span-3 lg:col-span-2">
            <figure className="relative h-full min-h-[240px] overflow-hidden rounded-3xl bg-[#F2F5FF]">
              <Image
                src="/images/pulse-prep/lab.jpg"
                alt="Students seated at the Pulse Prep doubt desk working through physics problems"
                width={1400}
                height={933}
                sizes="(max-width: 768px) 100vw, 32vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1B4D] via-[#0A1B4D]/70 to-transparent p-5 pt-12 text-xs font-semibold text-white">
                The doubt desk, open till 9 PM six days a week.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal y={18} delay={0.14} duration={0.45} className="md:col-span-3 lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-[#0A1B4D]/12 bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2447F0] text-white">
                <Timer aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="font-pulse-display mt-5 text-xl leading-tight font-extrabold tracking-[-0.02em] text-[#0A1B4D] uppercase">
                {pulseFeatures[0].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5A6A99]">
                {pulseFeatures[0].body}
              </p>
              <p className="mt-auto pt-5 text-[10px] font-bold tracking-[0.18em] text-[#2447F0] uppercase">
                {pulseFeatures[0].meta}
              </p>
            </div>
          </Reveal>

          <Reveal y={18} delay={0.18} duration={0.45} className="md:col-span-3 lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-[#0A1B4D]/12 bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2447F0] text-white">
                <Users aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="font-pulse-display mt-5 text-xl leading-tight font-extrabold tracking-[-0.02em] text-[#0A1B4D] uppercase">
                {pulseFeatures[3].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5A6A99]">
                {pulseFeatures[3].body}
              </p>
              <p className="mt-auto pt-5 text-[10px] font-bold tracking-[0.18em] text-[#2447F0] uppercase">
                {pulseFeatures[3].meta}
              </p>
            </div>
          </Reveal>

          <Reveal y={18} delay={0.06} duration={0.45} className="md:col-span-6 lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-[#0A1B4D] p-6 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2447F0] text-[#D8FF3E]">
                <LineChart aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="font-pulse-display mt-5 text-xl leading-tight font-extrabold tracking-[-0.02em] uppercase">
                {pulseFeatures[2].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {pulseFeatures[2].body}
              </p>
              <p className="mt-auto pt-5 text-[10px] font-bold tracking-[0.18em] text-[#D8FF3E] uppercase">
                {pulseFeatures[2].meta}
              </p>
            </div>
          </Reveal>

          <Reveal y={18} delay={0.12} duration={0.45} className="md:col-span-6 lg:col-span-4">
            <div className="grid h-full overflow-hidden rounded-3xl border border-[#0A1B4D]/12 bg-white sm:grid-cols-2">
              <div className="order-2 flex flex-col justify-center p-6 sm:order-1 sm:p-8">
                <p className="text-[10px] font-bold tracking-[0.24em] text-[#2447F0] uppercase">
                  Practice engine
                </p>
                <h3 className="font-pulse-display mt-3 text-[clamp(1.35rem,2.6vw,1.9rem)] leading-[0.98] font-black tracking-[-0.035em] text-[#0A1B4D] uppercase">
                  Drills built from your own mistakes.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6A99]">
                  Every wrong answer is tagged by concept and difficulty, then
                  re-served until it stops being wrong. Students see the list
                  shrink week after week.
                </p>
                <Link
                  href="/demos/pulse-prep/courses"
                  className="group mt-5 inline-flex min-h-11 items-center gap-2 self-start text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-colors duration-200 hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
                >
                  <span className="border-b-2 border-[#D8FF3E] pb-1">
                    How the test series works
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
              <div className="relative order-1 min-h-[220px] sm:order-2">
                <Image
                  src="/images/pulse-prep/coding.jpg"
                  alt="A Pulse Prep student reviewing test analytics on a laptop"
                  width={1400}
                  height={933}
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-4 right-4 rounded-full bg-[#D8FF3E] px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#0A1B4D] uppercase">
                  24-hour reports
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
