import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { quantumContact, quantumNextSteps } from "../data";
import { Enquiry } from "../components/enquiry";
import { Faq } from "../sections/faq";
import { PageHero } from "../sections/page-hero";

const whatsappUrl = `https://wa.me/${quantumContact.whatsappDigits}`;

export default function QuantumContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Admissions desk"
        title="One conversation is enough to know if we fit."
        lead="Tell us the student's class, target exam and timeline. A counsellor replies within a day with the batches currently open and the next diagnostic dates — no pressure, no drip campaign."
        meta={[
          quantumContact.phoneDisplay,
          quantumContact.email,
          quantumContact.hours,
        ]}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-[#22D3EE]/20 bg-[#0B1430]/80 p-5 shadow-[0_0_40px_rgba(34,211,238,0.05)] backdrop-blur-sm sm:p-8 lg:p-10">
                <Enquiry
                  heading="Request a callback"
                  subheading="Share a few details and we will prepare a WhatsApp message you can send yourself — this demo site never stores what you type."
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-[#0B1430] p-5 sm:p-7">
                <h2 className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.24em] text-[#22D3EE]">
                  Reach the desk directly
                </h2>

                <ul className="mt-5 border-t border-white/10">
                  <li className="border-b border-white/10">
                    <a
                      href={`tel:${quantumContact.phoneDigits}`}
                      className="flex min-h-14 items-center gap-3.5 py-4 transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                    >
                      <Phone
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-[#22D3EE]"
                      />
                      <span className="text-sm text-[#EAF2FF]">
                        {quantumContact.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li className="border-b border-white/10">
                    <a
                      href={`mailto:${quantumContact.email}`}
                      className="flex min-h-14 items-center gap-3.5 py-4 transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                    >
                      <Mail
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-[#22D3EE]"
                      />
                      <span className="min-w-0 break-all text-sm text-[#EAF2FF]">
                        {quantumContact.email}
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5 border-b border-white/10 py-5">
                    <MapPin
                      aria-hidden
                      className="mt-1 h-4 w-4 shrink-0 text-[#22D3EE]"
                    />
                    <span className="text-sm text-[#EAF2FF]">
                      {quantumContact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <span className="mt-2 block text-xs text-[#7C93B8]">
                        Demonstration address — this is a design demo.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5 py-5">
                    <Clock
                      aria-hidden
                      className="mt-1 h-4 w-4 shrink-0 text-[#22D3EE]"
                    />
                    <span className="text-sm text-[#EAF2FF]">
                      {quantumContact.hours}
                      <span className="mt-1 block text-xs text-[#7C93B8]">
                        Counselling visits by appointment.
                      </span>
                    </span>
                  </li>
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#22D3EE]/50 px-5 text-sm font-semibold tracking-wide text-[#EAF2FF] transition-colors hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                >
                  <MessageCircle aria-hidden className="h-4 w-4" />
                  Message the admissions desk
                </a>
                <p className="mt-3 text-[11px] leading-relaxed text-[#7C93B8]">
                  Opens WhatsApp with a placeholder demo number — nothing is
                  sent until you press send.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <div className="border border-white/10 p-5 sm:p-7">
                <h2 className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.24em] text-[#22D3EE]">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-5">
                  {quantumNextSteps.map((step) => (
                    <li key={step.id} className="flex gap-4">
                      <span
                        aria-hidden
                        className="font-quantum-mono shrink-0 pt-0.5 text-sm tracking-[0.2em] text-[#22D3EE]"
                      >
                        {step.step}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-[#EAF2FF]">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-[#7C93B8]">
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
        lead="Batch sizes, fees, the coding track and how the diagnostic works — the short answers live here."
      />
    </>
  );
}
