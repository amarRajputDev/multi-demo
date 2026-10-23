import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { quantumContact, quantumContactLead } from "../data";
import { Enquiry } from "../components/enquiry";
import { GridBackdrop } from "./grid-backdrop";
import { SectionHeading } from "./section-heading";

const contactRows = [
  {
    id: "phone",
    icon: Phone,
    label: "Admissions desk",
    value: quantumContact.phoneDisplay,
    href: `tel:${quantumContact.phoneDigits}`,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: quantumContact.email,
    href: `mailto:${quantumContact.email}`,
  },
];

export function ContactCta() {
  return (
    <section
      id="enquire"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(90%_60%_at_15%_0%,rgba(34,211,238,0.08),transparent_55%),radial-gradient(70%_50%_at_95%_100%,rgba(139,92,246,0.07),transparent_55%)]"
    >
      <GridBackdrop fadeFrom="bottom" />
      <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Admissions desk"
            title="Talk to a mentor before you decide."
            lead={quantumContactLead}
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 border-t border-white/10">
              {contactRows.map((row) => (
                <li key={row.id} className="border-b border-white/10">
                  <a
                    href={row.href}
                    className="flex min-h-14 items-center gap-4 py-4 transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                  >
                    <row.icon
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-[#22D3EE]"
                    />
                    <span className="min-w-0">
                      <span className="font-quantum-mono block text-[10px] uppercase tracking-[0.18em] text-[#7C93B8]">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block break-all text-sm text-[#EAF2FF]">
                        {row.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-4 border-b border-white/10 py-5">
                <MapPin
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-[#22D3EE]"
                />
                <span>
                  <span className="font-quantum-mono block text-[10px] uppercase tracking-[0.18em] text-[#7C93B8]">
                    Campus
                  </span>
                  <span className="mt-1 block text-sm text-[#EAF2FF]">
                    {quantumContact.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4 py-5">
                <Clock
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-[#22D3EE]"
                />
                <span>
                  <span className="font-quantum-mono block text-[10px] uppercase tracking-[0.18em] text-[#7C93B8]">
                    Counselling hours
                  </span>
                  <span className="mt-1 block text-sm text-[#EAF2FF]">
                    {quantumContact.hours}
                  </span>
                </span>
              </li>
            </ul>

            <p className="mt-6 border border-[#22D3EE]/25 bg-[#22D3EE]/[0.06] p-4 text-xs leading-relaxed text-[#7C93B8]">
              Demo site: submitting the form stores nothing. It prepares a
              WhatsApp message you can choose to send yourself.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="border border-[#22D3EE]/20 bg-[#0B1430]/80 p-5 shadow-[0_0_40px_rgba(34,211,238,0.05)] backdrop-blur-sm sm:p-8 lg:p-10">
              <Enquiry />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
