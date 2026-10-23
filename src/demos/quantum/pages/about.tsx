import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { quantumLab, quantumManifesto } from "../data";
import { Admissions } from "../sections/admissions";
import { ContactCta } from "../sections/contact-cta";
import { Features } from "../sections/features";
import { PageHero } from "../sections/page-hero";
import { Process } from "../sections/process";
import { SectionHeading } from "../sections/section-heading";

export default function QuantumAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · Since 2017 (demo)"
        title="An institution built on watched problem solving."
        lead="Quantum Learning is a STEM coaching institute for JEE, NEET and coding aspirants that chose evidence over volume: diagnostic maps before teaching, labs instead of lectures, and error analytics after every paper."
        meta={[
          "Founded as an eight-seat problem lab",
          "JEE · NEET · coding preparation",
          "Design demo by Vizo Technology",
        ]}
      />

      <section aria-label="Quantum Learning lab" className="border-b border-white/10">
        <div className="relative h-[46vw] max-h-[520px] min-h-[240px] w-full overflow-hidden">
          <Image
            src="/images/quantum/lab.jpg"
            alt="The Quantum Learning lab with benches prepared for a session (demo image)"
            width={1400}
            height={933}
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/25 to-transparent"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="mx-auto w-full max-w-[1240px] px-5 pb-6 sm:px-8 lg:px-10">
              <p className="max-w-md text-xs leading-relaxed text-[#EAF2FF]/80 sm:text-sm">
                The campus houses four problem rooms, a supervised diagnostic
                suite and an evening mentor desk (demo description).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
                The story
              </p>
              <div className="mt-6 space-y-6 text-base leading-relaxed text-[#7C93B8] sm:text-lg">
                {quantumManifesto.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="h-full">
              <figure className="flex h-full flex-col justify-center border border-[#8B5CF6]/35 bg-[#0B1430] p-6 sm:p-8">
                <span
                  aria-hidden
                  className="font-quantum-display text-5xl leading-none text-[#8B5CF6]"
                >
                  “
                </span>
                <blockquote className="font-quantum-display mt-5 text-2xl font-medium leading-snug text-[#EAF2FF] sm:text-[1.7rem]">
                  {quantumManifesto.quote}
                </blockquote>
                <figcaption className="font-quantum-mono mt-6 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-[#7C93B8]">
                  {quantumManifesto.attribution}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Features index="02" />
      <Process />

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            index="04"
            eyebrow="Inside the campus"
            title="Four rooms, one routine."
          />

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {quantumLab.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.06}
                className="bg-[#0B1430]"
              >
                <div className="h-full p-6 sm:p-7">
                  <span aria-hidden className="block h-1.5 w-6 bg-[#22D3EE]" />
                  <h3 className="font-quantum-display mt-5 text-xl font-semibold text-[#EAF2FF]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Admissions
        index="05"
        heading="Four steps from first enquiry to first class."
      />
      <ContactCta />
    </>
  );
}
