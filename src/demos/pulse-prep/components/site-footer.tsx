import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteYear } from "@/lib/site-year";
import { pulseContact, pulseCourses, pulseNav } from "../data";

function FooterMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      focusable="false"
      className="h-10 w-10 shrink-0"
    >
      <rect width="40" height="40" rx="7" fill="#2447F0" />
      <path
        d="M4 22h6.5l3.2-9.5L19 29l3.8-11 2.7 4H36"
        fill="none"
        stroke="#D8FF3E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contactLinks = [
  { icon: Phone, label: pulseContact.phoneDisplay, href: `tel:${pulseContact.phoneDigits}` },
  { icon: Mail, label: pulseContact.email, href: `mailto:${pulseContact.email}` },
  { icon: Clock, label: pulseContact.hours, href: "/demos/pulse-prep/contact" },
  { icon: MapPin, label: pulseContact.addressLines.join(", "), href: "/demos/pulse-prep/contact" },
];

export async function SiteFooter() {
  return (
    <footer className="bg-[#0A1B4D] text-white">
      <div className="mx-auto max-w-[1240px] px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <FooterMark />
              <span className="font-pulse-display text-2xl leading-none font-black tracking-[-0.05em] uppercase">
                Pulse<span className="text-[#D8FF3E]">Prep</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A competitive preparation centre built for students who want a
              measurable climb: diagnostic-led blueprints, ranked weekly mocks,
              and a faculty member on the doubt desk until 9 PM.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-[10px] font-bold tracking-[0.2em] text-[#D8FF3E] uppercase">
              Admissions open · 2026 cohorts
            </div>
          </div>

          <nav aria-label="Footer programmes" className="lg:col-span-3">
            <h2 className="text-[11px] font-bold tracking-[0.24em] text-white/65 uppercase">
              Programmes
            </h2>
            <ul className="mt-4 space-y-1">
              {pulseCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/demos/pulse-prep/courses"
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm text-white/80 transition-colors duration-200 hover:text-[#D8FF3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF3E]"
                  >
                    {course.name}
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer institute" className="lg:col-span-2">
            <h2 className="text-[11px] font-bold tracking-[0.24em] text-white/65 uppercase">
              Institute
            </h2>
            <ul className="mt-4 space-y-1">
              {pulseNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/80 transition-colors duration-200 hover:text-[#D8FF3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF3E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-bold tracking-[0.24em] text-white/65 uppercase">
              Visit the desk
            </h2>
            <ul className="mt-4 space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-start gap-3 text-sm text-white/80 transition-colors duration-200 hover:text-[#D8FF3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF3E]"
                  >
                    <item.icon aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#D8FF3E]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            © {await siteYear()} Pulse Prep. Demonstration website — a
            live design concept by Vizo Technology.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-white/60">
            All ranks, scores, names and credentials on this site are
            illustrative placeholders created for this design demo.
          </p>
        </div>
      </div>
    </footer>
  );
}
