import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { Reveal } from "@/components/shared/reveal";
import { bloomContact, bloomCourses } from "../data";

export function Enquiry({
  heading = "Request a friendly call back",
  subheading = "Tell us about your child — our admissions mentor will call you back with batch details and visit times. No pressure, ever.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <Reveal className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-6 hidden h-28 w-28 rounded-[60%_40%_55%_45%/55%_50%_50%_45%] bg-[#F5C86B]/25 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-[#E8836F]/15 sm:block"
      />
      <div className="relative overflow-hidden rounded-[28px] border border-[#3B3358]/10 bg-white shadow-[0_4px_28px_rgba(59,51,88,0.07)]">
        <div className="border-b border-[#3B3358]/8 bg-gradient-to-r from-[#FBF7F2] to-white px-6 pt-7 pb-5 sm:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F5C86B]/25 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#3B3358] uppercase">
            Admissions Enquiry
          </p>
          <p className="mt-3 max-w-lg font-bloom-display text-lg leading-relaxed text-[#5F5878]">
            Every enquiry is answered by a real person. We keep batches small,
            so early conversations matter.
          </p>
        </div>

        <div className="grid gap-0 @container">
          <div className="px-6 py-7 sm:px-8">
            <EnquiryForm
              brandName="Bloom Learning"
              courses={bloomCourses.map((course) => course.name)}
              whatsappNumber={bloomContact.whatsappDigits}
              heading={heading}
              subheading={subheading}
              labelClassName="text-[#B34832]"
              inputClassName="rounded-2xl border-[#3B3358]/15 bg-[#FBF7F2] text-[#3B3358] placeholder:text-[#7A7295]/50 focus:border-[#E8836F] focus:ring-2 focus:ring-[#E8836F]/25"
              buttonClassName="rounded-full bg-[#C2503A] text-white shadow-[0_4px_16px_rgba(194,80,58,0.28)] hover:bg-[#A8402D]"
              noteClassName="text-[#7A7295]"
              successClassName="rounded-[20px] border-[#3B3358]/10 bg-[#FBF7F2] text-[#3B3358]"
            />
          </div>

          <aside
            aria-label="Contact details"
            className="border-t border-[#3B3358]/8 bg-[#FBF7F2] px-6 py-7 sm:px-8"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
              Or reach us directly
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#3B3358]">
              <li>
                <a
                  href={`tel:${bloomContact.phoneDigits}`}
                  className="flex min-h-11 items-start gap-3 rounded-2xl px-2 py-2 transition-colors hover:bg-white"
                >
                  <Phone
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#E8836F]"
                  />
                  <span>{bloomContact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${bloomContact.email}`}
                  className="flex min-h-11 items-start gap-3 rounded-2xl px-2 py-2 break-all transition-colors hover:bg-white"
                >
                  <Mail
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#E8836F]"
                  />
                  <span>{bloomContact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 px-2 py-2">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E8836F]"
                />
                <span>
                  {bloomContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3 px-2 py-2">
                <Clock
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E8836F]"
                />
                <span>{bloomContact.hours}</span>
              </li>
            </ul>
            <div
              aria-hidden
              className="mt-6 rounded-[20px] bg-white p-5 shadow-[0_2px_14px_rgba(59,51,88,0.05)]"
            >
              <p className="font-bloom-display text-lg leading-snug text-[#3B3358]">
                “A joyful place to grow.”
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Reveal>
  );
}
