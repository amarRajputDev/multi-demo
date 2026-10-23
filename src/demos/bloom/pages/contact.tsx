import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { Faq } from "../sections/faq";
import { bloomContact } from "../data";
import { HeartMark } from "../components/illustrations";

export default function BloomContactPage() {
  return (
    <>
      <section aria-labelledby="contact-hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-14 -right-16 h-52 w-52 rounded-[58%_42%_50%_50%/48%_55%_45%_52%] bg-[#F5C86B]/25"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              <HeartMark className="h-4 w-4 text-[#E8836F]" />
              Contact &amp; Admissions
            </p>
            <h1
              id="contact-hero"
              className="mt-4 max-w-3xl font-bloom-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-[#3B3358]"
            >
              We would love to{" "}
              <span className="text-[#C2503A]">hear from you</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5F5878] sm:text-lg">
              Enquire by form, phone, or WhatsApp — whichever is easiest. The
              front desk is staffed through the week, and campus visits are
              welcome by appointment.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="contact-details"
        className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8"
      >
        <h2 id="contact-details" className="sr-only">
          Contact details
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-[24px] border border-[#3B3358]/8 bg-white p-6 shadow-[0_2px_14px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(59,51,88,0.09)]">
            <Phone aria-hidden className="h-5 w-5 text-[#E8836F]" />
            <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
              Phone
            </p>
            <a
              href={`tel:${bloomContact.phoneDigits}`}
              className="mt-1.5 block min-h-11 font-bloom-display text-lg font-semibold text-[#3B3358] transition-colors hover:text-[#B34832]"
            >
              {bloomContact.phoneDisplay}
            </a>
          </li>
          <li className="rounded-[24px] border border-[#3B3358]/8 bg-white p-6 shadow-[0_2px_14px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(59,51,88,0.09)]">
            <Mail aria-hidden className="h-5 w-5 text-[#E8836F]" />
            <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
              Email
            </p>
            <a
              href={`mailto:${bloomContact.email}`}
              className="mt-1.5 block min-h-11 font-bloom-display text-lg break-all text-[#3B3358] transition-colors hover:text-[#B34832]"
            >
              {bloomContact.email}
            </a>
          </li>
          <li className="rounded-[24px] border border-[#3B3358]/8 bg-white p-6 shadow-[0_2px_14px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(59,51,88,0.09)]">
            <MapPin aria-hidden className="h-5 w-5 text-[#E8836F]" />
            <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
              Address
            </p>
            <address className="mt-1.5 font-bloom-display text-lg leading-snug font-semibold text-[#3B3358] not-italic">
              {bloomContact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </li>
          <li className="rounded-[24px] border border-[#3B3358]/8 bg-white p-6 shadow-[0_2px_14px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(59,51,88,0.09)]">
            <Clock aria-hidden className="h-5 w-5 text-[#E8836F]" />
            <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
              Office hours
            </p>
            <p className="mt-1.5 font-bloom-display text-lg leading-snug font-semibold text-[#3B3358]">
              {bloomContact.hours}
            </p>
          </li>
        </ul>
      </section>

      <section
        aria-labelledby="contact-form"
        className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 id="contact-form" className="sr-only">
          Enquiry form
        </h2>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-14">
          <RevealImage delay={0.08} className="order-2 lg:order-none">
            <figure>
              <Image
                src="/images/bloom/art.jpg"
                alt="A colourful creative project displayed at Bloom Learning"
                width={1400}
                height={1400}
                sizes="(max-width: 1024px) 100vw, 460px"
                className="h-auto w-full rounded-[26px] object-cover shadow-[0_8px_28px_rgba(59,51,88,0.1)]"
              />
              <figcaption className="mt-3 text-xs text-[#7A7295] italic">
                Creativity celebrated on every corridor wall.
              </figcaption>
            </figure>
            <div className="mt-8 rounded-[24px] bg-[#F3EDF8] p-6">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
                Visiting us
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5F5878]">
                Visits are most lovely between 4 PM and 6 PM on weekdays, when
                live classes are running and you can see Bloom as it really
                operates. Please call ahead so a mentor can spare time for your
                questions — and so your child can say hello too.
              </p>
            </div>
          </RevealImage>
          <div className="order-1 lg:order-none">
            <Enquiry
              heading="Send an enquiry"
              subheading="Fill in the form and our admissions mentor will call you back within one working day."
            />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
