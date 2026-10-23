import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { quantumAdmissions } from "../data";
import { SectionHeading } from "./section-heading";

export function Admissions({
  index = "07",
  heading = "Four steps from first call to first class.",
}: {
  index?: string;
  heading?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-[#0B1430]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index={index}
          eyebrow="Admissions"
          title={heading}
          lead="No entrance test to enter the programme — only an honest diagnostic so the batch we recommend is the right one."
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {quantumAdmissions.map((step, indexValue) => (
            <li key={step.id} className="border-t border-[#22D3EE]/40 pt-6">
              <Reveal delay={indexValue * 0.07}>
                <span
                  aria-hidden
                  className="font-quantum-mono block text-sm tracking-[0.24em] text-[#22D3EE]"
                >
                  {step.step}
                </span>
                <h3 className="font-quantum-display mt-4 text-xl font-semibold text-[#EAF2FF]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/demos/quantum/contact"
            className="inline-flex min-h-12 items-center justify-center border border-[#22D3EE] bg-[#22D3EE] px-7 text-sm font-semibold tracking-wide text-[#050A18] shadow-[0_0_22px_rgba(34,211,238,0.22)] transition-all duration-300 hover:bg-[#67E8F9] hover:shadow-[0_0_28px_rgba(34,211,238,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6]"
          >
            Start step one
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
