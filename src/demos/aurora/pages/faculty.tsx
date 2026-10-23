import Image from "next/image";
import { auroraFaculty, auroraRelationship } from "../data";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

export default function AuroraFacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="Four mentors, each responsible for a full year of a student's work."
        lead="Aurora hires subject specialists, not rotating lecturers. Every profile below describes how the mentor teaches — because that is what you are actually choosing."
        meta={[
          "Subject specialists",
          "Same mentor for the full year",
          "Profiles are illustrative demo content",
        ]}
      >
        <Reveal delay={0.15} className="mt-12">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 border border-[#C9A227]/30 sm:-inset-4"
            />
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 sm:aspect-[12/5]">
              <Image
                src="/images/aurora/mentor.jpg"
                alt="An Aurora Academy mentor working one-to-one with a student at the doubt desk (demo image)"
                width={1400}
                height={933}
                priority
                sizes="(min-width: 1240px) 1200px, 100vw"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#0B1A33] via-[#0B1A33]/30 to-transparent"
              />
            </div>
          </div>
        </Reveal>
      </PageHero>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <h2 className="sr-only">Aurora Academy mentor profiles</h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {auroraFaculty.map((mentor, index) => (
              <Reveal key={mentor.id} delay={(index % 2) * 0.08}>
                <article className="grid h-full gap-6 border border-white/10 bg-[#0D1F3B]/60 p-4 transition-colors duration-300 hover:border-[#C9A227]/45 sm:grid-cols-5 sm:gap-7 sm:p-6">
                  <div className="sm:col-span-2">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={mentor.image}
                        alt={mentor.imageAlt}
                        width={1400}
                        height={2100}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                      {mentor.role}
                    </p>
                    <h3 className="font-aurora-display mt-2 text-2xl text-[#F4EFE6]">
                      {mentor.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#F4EFE6]/60">
                      {mentor.credential}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#F4EFE6]/75">
                      {mentor.bio}
                    </p>
                    <dl className="mt-5 border-t border-white/10 pt-4">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                        Teaches
                      </dt>
                      <dd className="mt-1 text-sm text-[#F4EFE6]/80">
                        {mentor.focus}
                      </dd>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs text-[#F4EFE6]/60">
            Names, credentials and portraits on this page are fictional
            placeholders created for a design demo.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A1729]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              The mentoring relationship
            </p>
            <h2 className="font-aurora-display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.08] text-[#F4EFE6] [text-wrap:balance]">
              How a mentor stays responsible after the bell.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
            {auroraRelationship.map((point, index) => (
              <Reveal
                key={point.id}
                delay={index * 0.07}
                className="bg-[#0A1729]"
              >
                <div className="h-full border-t-2 border-[#C9A227]/60 p-6 sm:p-7">
                  <h3 className="font-aurora-display text-xl text-[#F4EFE6]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
