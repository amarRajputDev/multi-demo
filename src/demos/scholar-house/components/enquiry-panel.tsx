import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { Reveal } from "@/components/shared/reveal";
import { scholarContact, scholarCourses } from "../data";

export function EnquiryPanel({
  heading = "Request a prospectus call",
  subheading = "Share a few details and our admissions counsellor will call you back to arrange a campus visit.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <Reveal className="relative">
      <div
        aria-hidden
        className="absolute -top-3 -left-3 hidden h-24 w-24 border-t border-l border-[#A8842C]/40 sm:block"
      />
      <div
        aria-hidden
        className="absolute -right-3 -bottom-3 hidden h-24 w-24 border-r border-b border-[#A8842C]/40 sm:block"
      />
      <div className="@container relative border border-[#1F3A2E]/15 bg-[#F5EFE1] shadow-[0_2px_24px_rgba(31,58,46,0.07)]">
        <div className="border-b border-[#1F3A2E]/12 px-6 pt-7 pb-5 sm:px-8">
          <h2 className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-[#A8842C] uppercase">
            <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
            Admissions Enquiry
          </h2>
          <p className="mt-3 font-scholar-display text-[1.0625rem] leading-relaxed text-[#5C6B60]">
            Every enquiry is answered by a person, not a bot. We keep our
            batches small, so early conversations matter.
          </p>
        </div>

        <div className="grid gap-0 @min-[540px]:grid-cols-[1fr_240px]">
          <div className="px-6 py-7 sm:px-8">
            <EnquiryForm
              brandName="Scholar House"
              courses={scholarCourses.map((course) => course.name)}
              whatsappNumber={scholarContact.whatsappDigits}
              heading={heading}
              subheading={subheading}
              labelClassName="text-[#A8842C]"
              inputClassName="border-[#1F3A2E]/20 bg-[#FBF8F1] text-[#1F3A2E] placeholder:text-[#5C6B60]/50 focus:border-[#1F3A2E]/60"
              buttonClassName="rounded-none bg-[#1F3A2E] text-[#FBF8F1] hover:bg-[#2a4d3c]"
              noteClassName="text-[#5C6B60]"
              successClassName="rounded-none border-[#1F3A2E]/20 bg-[#FBF8F1] text-[#1F3A2E]"
            />
          </div>

          <aside
            aria-label="Contact details"
            className="border-t border-[#1F3A2E]/12 px-6 py-7 sm:px-8 @min-[540px]:border-t-0 @min-[540px]:border-l @min-[540px]:px-6"
          >
            <p className="text-[10px] font-semibold tracking-[0.24em] text-[#5C6B60] uppercase">
              Or reach us directly
            </p>
            <ul className="mt-5 space-y-5 text-sm text-[#1F3A2E]">
              <li>
                <a
                  href={`tel:${scholarContact.phoneDigits}`}
                  className="flex items-start gap-3 transition-colors hover:text-[#A8842C]"
                >
                  <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A8842C]" />
                  <span>{scholarContact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${scholarContact.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-[#A8842C]"
                >
                  <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A8842C]" />
                  <span>{scholarContact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A8842C]" />
                <span>
                  {scholarContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A8842C]" />
                <span>{scholarContact.hours}</span>
              </li>
            </ul>
            <div aria-hidden className="mt-6 border-t border-[#1F3A2E]/12 pt-5">
              <p className="font-scholar-display text-lg leading-snug text-[#1F3A2E] italic">
                “A quiet place for serious learning.”
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Reveal>
  );
}
