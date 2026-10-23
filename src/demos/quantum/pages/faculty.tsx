import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { quantumFaculty, quantumFeatures } from "../data";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";

export default function QuantumFacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="Four specialists, each responsible for a full year of a student's work."
        lead="Quantum hires subject specialists, not rotating lecturers. Every profile below describes how the mentor teaches — because that is what you are actually choosing."
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
              className="absolute -inset-3 border border-[#22D3EE]/25 sm:-inset-4"
            />
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 sm:aspect-[12/5]">
              <Image
                src="/images/quantum/chemistry.jpg"
                alt="A Quantum Learning mentor guiding students through a chemistry problem (demo image)"
                width={1400}
                height={933}
                priority
                sizes="(min-width: 1240px) 1200px, 100vw"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/35 to-transparent"
              />
            </div>
          </div>
        </Reveal>
      </PageHero>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <h2 className="sr-only">Quantum Learning mentor profiles</h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {quantumFaculty.map((mentor, index) => (
              <Reveal key={mentor.id} delay={(index % 2) * 0.08}>
                <article className="grid h-full gap-6 border border-white/10 bg-[#0B1430]/60 p-4 transition-colors duration-300 hover:border-[#22D3EE]/45 sm:grid-cols-5 sm:gap-7 sm:p-6">
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
                    <p className="font-quantum-mono text-[11px] uppercase tracking-[0.2em] text-[#22D3EE]">
                      {mentor.role}
                    </p>
                    <h3 className="font-quantum-display mt-2 text-2xl font-semibold text-[#EAF2FF]">
                      {mentor.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#7C93B8]">
                      {mentor.credential}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#7C93B8]">
                      {mentor.bio}
                    </p>
                    <dl className="mt-5 border-t border-white/10 pt-4">
                      <dt className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5CF6]">
                        Teaches
                      </dt>
                      <dd className="mt-1 text-sm text-[#EAF2FF]/80">
                        {mentor.focus}
                      </dd>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs text-[#7C93B8]">
            Names, credentials and portraits on this page are fictional
            placeholders created for a design demo.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0B1430]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
              The mentoring thread
            </p>
            <h2 className="font-quantum-display mt-5 text-[clamp(1.65rem,3vw,2.4rem)] font-semibold leading-[1.1] text-[#EAF2FF] [text-wrap:balance]">
              How a mentor stays responsible after the bell.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {quantumFeatures.map((point, index) => (
              <Reveal
                key={point.id}
                delay={index * 0.06}
                className="bg-[#0B1430]"
              >
                <div className="h-full border-t-2 border-[#22D3EE]/50 p-6 sm:p-7">
                  <h3 className="font-quantum-display text-xl font-semibold text-[#EAF2FF]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
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
