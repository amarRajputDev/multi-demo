import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { auroraContact } from "../data";
import { Enquiry } from "../components/enquiry";
import { SectionHeading } from "./section-heading";

const contactRows = [
  {
    id: "phone",
    icon: Phone,
    label: "Admissions desk",
    value: auroraContact.phoneDisplay,
    href: `tel:${auroraContact.phoneDigits}`,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: auroraContact.email,
    href: `mailto:${auroraContact.email}`,
  },
];

export function ContactCta() {
  return (
    <section
      id="enquire"
      className="border-b border-white/10 bg-[radial-gradient(90%_60%_at_15%_0%,rgba(201,162,39,0.1),transparent_55%)]"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Admissions desk"
            title="Talk to a mentor before you decide."
            lead="Bring the student's class, target exam and timeline. We will recommend a programme and batch honestly — including when we are not the right fit."
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 border-t border-white/10">
              {contactRows.map((row) => (
                <li key={row.id} className="border-b border-white/10">
                  <a
                    href={row.href}
                    className="flex min-h-14 items-center gap-4 py-4 transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8D9A0]"
                  >
                    <row.icon
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-[#C9A227]"
                    />
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-[#F4EFE6]/60">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block break-all text-sm text-[#F4EFE6]">
                        {row.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-4 border-b border-white/10 py-5">
                <MapPin
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-[#C9A227]"
                />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-[#F4EFE6]/60">
                    Campus
                  </span>
                  <span className="mt-1 block text-sm text-[#F4EFE6]">
                    {auroraContact.addressLines.map((line) => (
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
                  className="mt-1 h-4 w-4 shrink-0 text-[#C9A227]"
                />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-[#F4EFE6]/60">
                    Counselling hours
                  </span>
                  <span className="mt-1 block text-sm text-[#F4EFE6]">
                    {auroraContact.hours}
                  </span>
                </span>
              </li>
            </ul>

            <p className="mt-6 border border-[#C9A227]/30 bg-[#C9A227]/10 p-4 text-xs leading-relaxed text-[#F4EFE6]/75">
              Demo site: submitting the form stores nothing. It prepares a
              WhatsApp message you can choose to send yourself.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="border border-white/10 bg-[#0D1F3B] p-5 sm:p-8 lg:p-10">
              <Enquiry />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
