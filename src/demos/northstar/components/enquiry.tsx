import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { Reveal } from "@/components/shared/reveal";
import { northstarContact, northstarCourses } from "../data";

export function Enquiry({
  heading = "Request a mentor conversation",
  subheading = "Share a few details and a counsellor will call you back within one working day — with honest guidance on which programme actually fits.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <Reveal className="relative">
      <div className="grid border border-[#26241F]/15 bg-[#FBF9F5] lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
        <div className="px-6 py-9 sm:px-10 sm:py-11">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
            <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
            Admissions enquiry
          </p>
          <EnquiryForm
            brandName="Northstar Institute"
            courses={northstarCourses.map((course) => course.name)}
            whatsappNumber={northstarContact.whatsappDigits}
            heading={heading}
            subheading={subheading}
            labelClassName="text-[#6E6A62]"
            inputClassName="border-[#26241F]/20 bg-[#F7F4EF] text-[#26241F] placeholder:text-[#6E6A62]/50 focus:border-[#9C4F36]"
            buttonClassName="rounded-none bg-[#9C4F36] text-[#F7F4EF] hover:bg-[#86422d]"
            noteClassName="text-[#6E6A62]"
            successClassName="rounded-none border-[#26241F]/20 bg-[#F1ECE3] text-[#26241F]"
          />
        </div>

        <aside
          aria-label="Contact details"
          className="border-t border-[#26241F]/12 bg-[#F1ECE3] px-6 py-9 sm:px-10 lg:border-t-0 lg:border-l lg:px-8"
        >
          <p className="text-[10px] font-semibold tracking-[0.28em] text-[#6E6A62] uppercase">
            Or reach us directly
          </p>
          <ul className="mt-6 space-y-5 text-sm text-[#26241F]">
            <li>
              <a
                href={`tel:${northstarContact.phoneDigits}`}
                className="flex min-h-6 items-start gap-3 transition-colors hover:text-[#9C4F36]"
              >
                <Phone
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#9C4F36]"
                />
                <span>{northstarContact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${northstarContact.email}`}
                className="flex min-h-6 items-start gap-3 break-all transition-colors hover:text-[#9C4F36]"
              >
                <Mail
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#9C4F36]"
                />
                <span>{northstarContact.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-[#9C4F36]"
              />
              <address className="not-italic">
                {northstarContact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Clock
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-[#9C4F36]"
              />
              <span>{northstarContact.hours}</span>
            </li>
          </ul>

          <div aria-hidden className="mt-8 border-t border-[#26241F]/12 pt-6" />
          <a
            href={`https://wa.me/${northstarContact.whatsappDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-[#9C4F36] pb-1 text-sm text-[#26241F] transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
          >
            <MessageCircle aria-hidden className="h-4 w-4 text-[#9C4F36]" />
            Message us on WhatsApp
          </a>
          <p className="mt-8 font-northstar-display text-lg leading-snug text-[#26241F] italic">
            “Preparation is a conversation, not a transaction.”
          </p>
        </aside>
      </div>
    </Reveal>
  );
}
