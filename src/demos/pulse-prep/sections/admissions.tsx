import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { pulseAdmissions } from "../data";

export function Admissions() {
  return (
    <section aria-labelledby="admissions-heading" className="bg-[#F2F5FF]">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Reveal y={16} duration={0.45}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                Admissions in four moves
              </p>
              <h2
                id="admissions-heading"
                className="font-pulse-display mt-3 max-w-2xl text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                From first call
                <br />
                to first mock.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#5A6A99]">
              Most families finish all four steps inside a week. Nothing is
              signed before you have sat in on a live class.
            </p>
          </div>
        </Reveal>

        <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pulseAdmissions.map((step, index) => (
            <li key={step.step} className="h-full">
              <Reveal
                y={18}
                delay={index * 0.07}
                duration={0.45}
                className="h-full"
              >
                <div
                  className={`flex h-full flex-col rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1.5 ${
                    index === pulseAdmissions.length - 1
                      ? "bg-[#2447F0] text-white"
                      : "border border-[#0A1B4D]/10 bg-white text-[#0A1B4D]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-pulse-display text-[2.5rem] leading-none font-black tracking-[-0.05em] ${
                        index === pulseAdmissions.length - 1
                          ? "text-[#D8FF3E]"
                          : "text-[#2447F0]"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span aria-hidden className="h-2 w-10 bg-[#D8FF3E]" />
                  </div>
                  <h3 className="font-pulse-display mt-5 text-lg leading-none font-extrabold tracking-[-0.03em] uppercase">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 text-[13px] leading-relaxed ${
                      index === pulseAdmissions.length - 1
                        ? "text-white/75"
                        : "text-[#5A6A99]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal y={16} delay={0.1} duration={0.45}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#0A1B4D]/10 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
            <p className="text-sm text-[#0A1B4D]">
              <span className="font-semibold">Walk-in diagnostics:</span> every
              Saturday, 10 AM – 4 PM · no appointment needed
            </p>
            <Link
              href="/demos/pulse-prep/contact"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0A1B4D] px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
            >
              Start step one
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
