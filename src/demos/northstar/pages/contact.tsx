import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { Faq } from "../sections/faq";
import { northstarContact } from "../data";

export function generateMetadata(): Metadata {
  return {
    title: "Contact & Admissions | Northstar Institute (Demo)",
    description:
      "Enquire about Northstar Institute programmes by form, phone or WhatsApp. Counselling hours, campus address and admissions guidance. Illustrative demo contact details.",
  };
}

export default function NorthstarContactPage() {
  return (
    <>
      <section aria-labelledby="contact-hero" className="border-b border-[#26241F]/12">
        <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-14 sm:px-8 lg:pt-20">
          <Reveal y={12} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Contact &amp; Admissions
            </p>
            <h1
              id="contact-hero"
              className="mt-5 max-w-3xl text-[2.5rem] leading-[1.06] tracking-tight text-[#26241F] sm:text-6xl lg:text-[4rem]"
            >
              Begin with a
              <span className="text-[#9C4F36] italic"> conversation.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-[#6E6A62]">
              Enquire by form, phone or WhatsApp — whichever is easiest. A
              counsellor replies within one working day, and campus visits are
              welcome by appointment during counselling hours. (Demo contact
              details shown.)
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="contact-details"
        className="border-b border-[#26241F]/12 bg-[#F1ECE3]"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8">
          <h2 id="contact-details" className="sr-only">
            Contact details
          </h2>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            <li className="border-t border-[#26241F]/20 pt-4">
              <Phone aria-hidden className="h-4 w-4 text-[#9C4F36]" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                Phone
              </p>
              <a
                href={`tel:${northstarContact.phoneDigits}`}
                className="mt-1.5 block min-h-11 font-northstar-display text-lg text-[#26241F] transition-colors hover:text-[#9C4F36]"
              >
                {northstarContact.phoneDisplay}
              </a>
            </li>
            <li className="border-t border-[#26241F]/20 pt-4">
              <Mail aria-hidden className="h-4 w-4 text-[#9C4F36]" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                Email
              </p>
              <a
                href={`mailto:${northstarContact.email}`}
                className="mt-1.5 block min-h-11 font-northstar-display text-lg break-all text-[#26241F] transition-colors hover:text-[#9C4F36]"
              >
                {northstarContact.email}
              </a>
            </li>
            <li className="border-t border-[#26241F]/20 pt-4">
              <MapPin aria-hidden className="h-4 w-4 text-[#9C4F36]" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                Address
              </p>
              <address className="mt-1.5 font-northstar-display text-lg leading-snug text-[#26241F] not-italic">
                {northstarContact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="border-t border-[#26241F]/20 pt-4">
              <Clock aria-hidden className="h-4 w-4 text-[#9C4F36]" />
              <p className="mt-4 text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                Counselling hours
              </p>
              <p className="mt-1.5 font-northstar-display text-lg leading-snug text-[#26241F]">
                {northstarContact.hours}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="contact-form"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20"
      >
        <h2 id="contact-form" className="sr-only">
          Enquiry form
        </h2>
        <Enquiry
          heading="Send an enquiry"
          subheading="Fill in the form and a counsellor will call you back within one working day. Nothing is stored — this is a demonstration site."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <RevealImage delay={0.06} duration={0.9}>
              <figure>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/northstar/mentor.jpg"
                    alt="The Northstar counselling room where admissions conversations take place"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                  The counselling room — where conversations happen before any
                  enrolment.
                </figcaption>
              </figure>
            </RevealImage>
          </div>
          <div className="lg:col-span-5">
            <Reveal y={14} duration={0.8}>
              <div className="border border-[#26241F]/15 bg-[#F1ECE3] p-8">
                <p className="text-[10px] font-semibold tracking-[0.28em] text-[#9C4F36] uppercase">
                  Visiting the institute
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[#6E6A62]">
                  Visits are most useful on weekday afternoons, when the
                  reading room is full and you can see how the place actually
                  operates. Please call ahead so a mentor can spare half an
                  hour for your questions — that conversation is the honest
                  part of the process, and it costs nothing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
