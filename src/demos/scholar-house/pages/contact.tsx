import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { EnquiryPanel } from "../components/enquiry-panel";
import { Faq } from "../sections/faq";
import { scholarContact } from "../data";

export default function ScholarContactPage() {
  return (
    <>
      <section aria-labelledby="contact-hero" className="border-b border-[#1F3A2E]/12">
        <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Contact &amp; Admissions
            </p>
            <h1
              id="contact-hero"
              className="mt-4 max-w-3xl font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-6xl"
            >
              We would love to
              <span className="italic"> hear from you</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C6B60] sm:text-lg">
              Enquire by form, phone, or WhatsApp — whichever is easiest. The
              front desk is staffed through the week, and campus visits are
              welcome by appointment.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="contact-details" className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="contact-details" className="sr-only">
          Contact details
        </h2>
        <ul className="grid gap-px border border-[#1F3A2E]/15 bg-[#1F3A2E]/15 sm:grid-cols-2 lg:grid-cols-4">
          <li className="bg-[#F5EFE1] p-7">
            <Phone aria-hidden className="h-5 w-5 text-[#A8842C]" />
            <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#5C6B60] uppercase">
              Phone
            </p>
            <a
              href={`tel:${scholarContact.phoneDigits}`}
              className="mt-1.5 block min-h-11 font-scholar-display text-lg text-[#1F3A2E] transition-colors hover:text-[#A8842C]"
            >
              {scholarContact.phoneDisplay}
            </a>
          </li>
          <li className="bg-[#F5EFE1] p-7">
            <Mail aria-hidden className="h-5 w-5 text-[#A8842C]" />
            <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#5C6B60] uppercase">
              Email
            </p>
            <a
              href={`mailto:${scholarContact.email}`}
              className="mt-1.5 block min-h-11 font-scholar-display text-lg break-all text-[#1F3A2E] transition-colors hover:text-[#A8842C]"
            >
              {scholarContact.email}
            </a>
          </li>
          <li className="bg-[#F5EFE1] p-7">
            <MapPin aria-hidden className="h-5 w-5 text-[#A8842C]" />
            <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#5C6B60] uppercase">
              Address
            </p>
            <address className="mt-1.5 font-scholar-display text-lg leading-snug text-[#1F3A2E] not-italic">
              {scholarContact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </li>
          <li className="bg-[#F5EFE1] p-7">
            <Clock aria-hidden className="h-5 w-5 text-[#A8842C]" />
            <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#5C6B60] uppercase">
              Office hours
            </p>
            <p className="mt-1.5 font-scholar-display text-lg leading-snug text-[#1F3A2E]">
              {scholarContact.hours}
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="contact-form" className="mx-auto max-w-[1200px] px-4 pb-4 sm:px-6 lg:px-8">
        <h2 id="contact-form" className="sr-only">
          Enquiry form
        </h2>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-14">
          <RevealImage delay={0.08} className="order-2 lg:order-none">
            <figure>
              <Image
                src="/images/scholar-house/library.jpg"
                alt="The Scholar House reading room, available to all enrolled students"
                width={1400}
                height={933}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-[#5C6B60] italic">
                Visiting scholars work in the reading room after class hours.
              </figcaption>
            </figure>
            <div className="mt-8 border border-[#1F3A2E]/12 bg-[#F5EFE1] p-7">
              <p className="text-[10px] font-semibold tracking-[0.24em] text-[#A8842C] uppercase">
                Campus visits
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C6B60]">
                Visits are most useful between 4 PM and 6 PM on weekdays, when
                live classes are running and you can see the campus as it
                really operates. Please call ahead so a faculty member can
                spare time for your questions.
              </p>
            </div>
          </RevealImage>
          <div className="order-1 lg:order-none">
            <EnquiryPanel
              heading="Send an enquiry"
              subheading="Fill in the form and our admissions counsellor will call you back within one working day."
            />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
