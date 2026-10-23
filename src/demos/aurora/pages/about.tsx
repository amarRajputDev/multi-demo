import Image from "next/image";
import { auroraCampus, auroraManifesto } from "../data";
import { Admissions } from "../sections/admissions";
import { ContactCta } from "../sections/contact-cta";
import { Method } from "../sections/method";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "../sections/section-heading";
import { Why } from "../sections/why";

export default function AuroraAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · Since 2014 (demo)"
        title="An institution built on attention, and deliberately kept small."
        lead="Aurora Academy is a coaching institute for JEE and NEET aspirants that chose constraints over scale: eighteen seats to a room, one mentor to a batch, and a calendar every family can read."
        meta={[
          "Founded as a twelve-seat room",
          "JEE · NEET · integrated preparation",
          "Design demo by Vizo Technology",
        ]}
      />

      <section aria-label="Aurora Academy campus" className="border-b border-white/10">
        <div className="relative h-[46vw] max-h-[520px] min-h-[240px] w-full overflow-hidden">
          <Image
            src="/images/aurora/campus.jpg"
            alt="The Aurora Academy campus building at dusk (demo image)"
            width={1400}
            height={917}
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-[#0B1A33]/25 to-transparent"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="mx-auto w-full max-w-[1240px] px-5 pb-6 sm:px-8 lg:px-10">
              <p className="max-w-md text-xs leading-relaxed text-[#F4EFE6]/80 sm:text-sm">
                The campus houses four eighteen-seat classrooms, an evening
                doubt desk and an in-house test hall (demo description).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                The story
              </p>
              <div className="mt-6 space-y-6 text-base leading-relaxed text-[#F4EFE6]/75 sm:text-lg">
                {auroraManifesto.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="h-full">
              <figure className="flex h-full flex-col justify-center border border-[#C9A227]/35 bg-[#0D1F3B] p-6 sm:p-8">
                <span
                  aria-hidden
                  className="font-aurora-display text-5xl leading-none text-[#C9A227]"
                >
                  “
                </span>
                <blockquote className="font-aurora-display mt-5 text-2xl leading-snug text-[#F4EFE6] sm:text-[1.7rem]">
                  {auroraManifesto.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-[#F4EFE6]/60">
                  {auroraManifesto.attribution}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Why />
      <Method />

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <SectionHeading
            index="03"
            eyebrow="Inside the campus"
            title="Four rooms, one routine."
          />

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {auroraCampus.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.06}
                className="bg-[#0B1A33]"
              >
                <div className="h-full p-6 sm:p-7">
                  <span
                    aria-hidden
                    className="block h-1.5 w-6 bg-[#C9A227]"
                  />
                  <h3 className="font-aurora-display mt-5 text-xl text-[#F4EFE6]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Admissions
        index="04"
        heading="Four steps from first enquiry to first class."
      />
      <ContactCta />
    </>
  );
}
