import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { pulseMock } from "../data";

export function MockTests() {
  return (
    <section aria-labelledby="mock-heading" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal y={16} duration={0.45}>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                Mock &amp; practice engine
              </p>
              <h2
                id="mock-heading"
                className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                {pulseMock.headline}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5A6A99] sm:text-base">
                {pulseMock.intro}
              </p>
            </Reveal>

            <Reveal y={16} delay={0.08} duration={0.45}>
              <ul className="mt-6 space-y-2.5">
                {pulseMock.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] bg-[#2447F0]">
                      <Check
                        aria-hidden
                        className="h-3.5 w-3.5 text-white"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-sm leading-relaxed text-[#0A1B4D]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal y={16} delay={0.12} duration={0.45}>
              <figure className="mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="/images/pulse-prep/whiteboard.jpg"
                  alt="Faculty mapping a mock-test analysis on a whiteboard during a Pulse Prep review session"
                  width={1400}
                  height={933}
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="h-44 w-full object-cover"
                />
                <figcaption className="bg-[#F2F5FF] px-4 py-3 text-xs text-[#5A6A99]">
                  Monday analysis clinic — every test is dissected in front of
                  the whole batch.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={20} delay={0.06} duration={0.5}>
              <div className="rounded-3xl bg-[#2447F0] p-5 text-white sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-4">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] text-white/80 uppercase">
                      Batch scoreboard · last four mocks
                    </p>
                    <p className="font-pulse-display mt-1.5 text-2xl leading-none font-black tracking-[-0.03em] uppercase">
                      Everyone moves
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#D8FF3E] px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#0A1B4D]" />
                    Reports in 24 h
                  </span>
                </div>

                <ul className="mt-5 space-y-5">
                  {pulseMock.trend.map((row) => (
                    <li key={row.label}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold">{row.label}</span>
                        <span className="flex items-center gap-2.5">
                          <span className="text-xs text-white/85">
                            {row.score}%
                          </span>
                          <span className="rounded-md bg-[#D8FF3E] px-2 py-0.5 text-[11px] font-bold text-[#0A1B4D]">
                            ▲ {row.delta}
                          </span>
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                        <div
                          className="h-full rounded-full bg-[#D8FF3E]"
                          style={{ width: `${row.score}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <dl className="mt-7 grid gap-3 border-t border-white/20 pt-5 sm:grid-cols-2">
                  {pulseMock.cadence.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      <dt className="text-[10px] font-bold tracking-[0.16em] text-white/80 uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-white">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="/demos/pulse-prep/contact"
                  className="group mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D8FF3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1B4D]"
                >
                  Sit in on an analysis clinic
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
