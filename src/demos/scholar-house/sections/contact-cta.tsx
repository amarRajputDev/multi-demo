import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { scholarContact } from "../data";

export function ContactCta() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden">
      <Image
        src="/images/scholar-house/classroom.jpg"
        alt=""
        aria-hidden
        width={1400}
        height={788}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[#1F3A2E]/88"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#E7D8B4] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#E7D8B4]" />
              Visit Scholar House
            </p>
            <h2
              id="cta-heading"
              className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#FBF8F1] sm:text-5xl"
            >
              Come see the classrooms,
              <br className="hidden sm:block" /> meet the faculty
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#FBF8F1]/75">
              The best way to understand Scholar House is to spend an hour
              here. Walk through the campus, observe a live class, and talk
              through your child&apos;s goals with our admissions counsellor.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/demos/scholar-house/contact"
                className="group inline-flex items-center gap-2 bg-[#E7D8B4] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1F3A2E] transition-colors duration-200 hover:bg-[#FBF8F1] focus-visible:ring-2 focus-visible:ring-[#E7D8B4] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Book a campus visit
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={`tel:${scholarContact.phoneDigits}`}
                className="inline-flex items-center gap-2 border-b border-[#E7D8B4]/60 px-1 py-1.5 text-sm font-medium text-[#FBF8F1] transition-colors hover:text-[#E7D8B4] focus-visible:ring-2 focus-visible:ring-[#E7D8B4] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Phone aria-hidden className="h-4 w-4" />
                {scholarContact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${scholarContact.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-[#E7D8B4]/60 px-1 py-1.5 text-sm font-medium text-[#FBF8F1] transition-colors hover:text-[#E7D8B4] focus-visible:ring-2 focus-visible:ring-[#E7D8B4] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
