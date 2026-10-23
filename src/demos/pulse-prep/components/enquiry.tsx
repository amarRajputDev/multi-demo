import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { pulseContact, pulseCourses } from "../data";

const details = [
  {
    icon: Phone,
    label: "Admissions desk",
    value: pulseContact.phoneDisplay,
    href: `tel:${pulseContact.phoneDigits}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `+${pulseContact.whatsappDigits.slice(0, 2)} ${pulseContact.whatsappDigits.slice(2)}`,
    href: `https://wa.me/${pulseContact.whatsappDigits}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: pulseContact.email,
    href: `mailto:${pulseContact.email}`,
  },
  {
    icon: Clock,
    label: "Front desk hours",
    value: pulseContact.hours,
    href: "/demos/pulse-prep/contact",
  },
];

interface EnquiryProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

export function Enquiry({
  className,
  heading = "Request a callback",
  subheading = "Tell us the student's class and target exam. A counsellor calls back with batch timings, fees and a free diagnostic slot.",
}: EnquiryProps) {
  return (
    <div className={className}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
            Talk to a counsellor
          </p>
          <h2 className="font-pulse-display mt-3 text-[clamp(1.9rem,4vw,2.75rem)] leading-[0.95] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase">
            Ninety seconds
            <br />
            of your time.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5A6A99]">
            No form lost in an inbox. Your enquiry becomes a prefilled WhatsApp
            message you send yourself — this is a demonstration site, so
            nothing is stored anywhere.
          </p>

          <ul className="mt-7 space-y-2.5">
            {details.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-12 items-center gap-3.5 rounded-2xl border border-[#0A1B4D]/10 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2447F0] hover:shadow-[0_16px_30px_-24px_rgba(36,71,240,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#2447F0] text-white transition-colors duration-200 group-hover:bg-[#0A1B4D]">
                    <item.icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold tracking-[0.18em] text-[#5A6A99] uppercase">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-[#0A1B4D]">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-start gap-2.5 rounded-2xl bg-[#0A1B4D] px-4 py-3.5 text-xs leading-relaxed text-white/75">
            <span aria-hidden className="mt-0.5 h-4 w-1.5 shrink-0 bg-[#D8FF3E]" />
            Campus: {pulseContact.addressLines.join(", ")}. Walk-in diagnostics
            every Saturday — no appointment needed.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-3 -right-3 hidden h-24 w-24 border-[3px] border-[#2447F0]/25 sm:block"
          />
          <div className="relative overflow-hidden rounded-3xl border border-[#0A1B4D]/10 bg-white p-5 shadow-[0_30px_70px_-55px_rgba(10,27,77,1)] sm:p-7">
            <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-[#2447F0]" />
            <EnquiryForm
              brandName="Pulse Prep"
              courses={pulseCourses.map((course) => course.name)}
              whatsappNumber={pulseContact.whatsappDigits}
              heading={heading}
              subheading={subheading}
              className="[&>h3]:[font-family:var(--font-archivo)] [&>h3]:mt-1 [&>h3]:text-[1.7rem] [&>h3]:leading-[1.05] [&>h3]:font-black [&>h3]:tracking-[-0.03em] [&>h3]:text-[#0A1B4D] [&>h3]:uppercase [&_p]:opacity-100"
              fieldClassName="space-y-1.5"
              labelClassName="font-bold tracking-[0.16em] text-[#5A6A99]"
              inputClassName="rounded-xl border-[#0A1B4D]/20 bg-white py-3.5 text-[#0A1B4D] placeholder:text-[#5A6A99]/70 focus:border-[#2447F0]"
              buttonClassName="bg-[#D8FF3E] text-[#0A1B4D] text-xs font-black tracking-[0.16em] uppercase hover:bg-[#2447F0] hover:text-white"
              noteClassName="text-[#5A6A99]"
              successClassName="rounded-2xl border-[#2447F0]/30 bg-[#F2F5FF] text-[#0A1B4D]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
