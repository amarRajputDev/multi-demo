import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { auroraAdmissions } from "../data";
import { SectionHeading } from "./section-heading";

export function Admissions({
  index = "06",
  heading = "Four steps from first call to first class.",
}: {
  index?: string;
  heading?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-[#0A1729]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index={index}
          eyebrow="Admissions"
          title={heading}
          lead="No entrance test to enter the programme — only an honest diagnostic so the batch we recommend is the right one."
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {auroraAdmissions.map((step, indexValue) => (
            <li
              key={step.id}
              className="border-t border-[#C9A227]/40 pt-6"
            >
              <Reveal delay={indexValue * 0.07}>
                <span
                  aria-hidden
                  className="font-aurora-display block text-sm tracking-[0.24em] text-[#C9A227]"
                >
                  {step.step}
                </span>
                <h3 className="font-aurora-display mt-4 text-xl text-[#F4EFE6]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/demos/aurora/contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-sm font-semibold tracking-wide text-[#0B1A33] transition-colors hover:bg-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
          >
            Start step one
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
