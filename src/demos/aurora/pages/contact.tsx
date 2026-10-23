import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { auroraContact, auroraNextSteps } from "../data";
import { Enquiry } from "../components/enquiry";
import { Faq } from "../sections/faq";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

const whatsappUrl = `https://wa.me/${auroraContact.whatsappDigits}`;

export default function AuroraContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Admissions desk"
        title="One conversation is enough to know if we fit."
        lead="Tell us the student's class, target exam and timeline. A counsellor replies within a day with the batches currently open and the next diagnostic dates — no pressure, no drip campaign."
        meta={[
          auroraContact.phoneDisplay,
          auroraContact.email,
          auroraContact.hours,
        ]}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-white/10 bg-[#0D1F3B] p-5 sm:p-8 lg:p-10">
                <Enquiry
                  heading="Request a callback"
                  subheading="Share a few details and we will prepare a WhatsApp message you can send yourself — this demo site never stores what you type."
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-[#0A1729] p-5 sm:p-7">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C9A227]">
                  Reach the desk directly
                </h2>

                <ul className="mt-5 border-t border-white/10">
                  <li className="border-b border-white/10">
                    <a
                      href={`tel:${auroraContact.phoneDigits}`}
                      className="flex min-h-14 items-center gap-3.5 py-4 transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                    >
                      <Phone
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-[#C9A227]"
                      />
                      <span className="text-sm text-[#F4EFE6]">
                        {auroraContact.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li className="border-b border-white/10">
                    <a
                      href={`mailto:${auroraContact.email}`}
                      className="flex min-h-14 items-center gap-3.5 py-4 transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                    >
                      <Mail
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-[#C9A227]"
                      />
                      <span className="min-w-0 break-all text-sm text-[#F4EFE6]">
                        {auroraContact.email}
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5 border-b border-white/10 py-5">
                    <MapPin
                      aria-hidden
                      className="mt-1 h-4 w-4 shrink-0 text-[#C9A227]"
                    />
                    <span className="text-sm text-[#F4EFE6]">
                      {auroraContact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <span className="mt-2 block text-xs text-[#F4EFE6]/60">
                        Demonstration address — this is a design demo.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5 py-5">
                    <Clock
                      aria-hidden
                      className="mt-1 h-4 w-4 shrink-0 text-[#C9A227]"
                    />
                    <span className="text-sm text-[#F4EFE6]">
                      {auroraContact.hours}
                      <span className="mt-1 block text-xs text-[#F4EFE6]/60">
                        Counselling visits by appointment.
                      </span>
                    </span>
                  </li>
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#C9A227]/50 px-5 text-sm font-semibold tracking-wide text-[#F4EFE6] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                >
                  <MessageCircle aria-hidden className="h-4 w-4" />
                  Message the admissions desk
                </a>
                <p className="mt-3 text-[11px] leading-relaxed text-[#F4EFE6]/60">
                  Opens WhatsApp with a placeholder demo number — nothing is
                  sent until you press send.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <div className="border border-white/10 p-5 sm:p-7">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C9A227]">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-5">
                  {auroraNextSteps.map((step) => (
                    <li key={step.id} className="flex gap-4">
                      <span
                        aria-hidden
                        className="font-aurora-display shrink-0 pt-0.5 text-sm tracking-[0.2em] text-[#C9A227]"
                      >
                        {step.step}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-[#F4EFE6]">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-[#F4EFE6]/70">
                          {step.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Faq
        eyebrow="Before you enquire"
        title="Questions families ask us first."
        lead="Batch sizes, fees, repeat years and how the diagnostic works — the short answers live here."
      />
    </>
  );
}
