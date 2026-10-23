import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { quantumContact, quantumCourses, quantumNav } from "../data";

const footerLinkClass =
  "inline-flex min-h-11 items-center text-sm text-[#EAF2FF]/70 transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]";

function FooterMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0">
      <circle cx="12" cy="12" r="2.1" fill="#22D3EE" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.2"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="rgba(34,211,238,0.45)"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1430]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <FooterMark />
              <span className="font-quantum-display text-[15px] font-semibold tracking-[0.34em] text-[#EAF2FF]">
                QUANTUM
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#7C93B8]">
              Quantum Learning is a STEM coaching institute for JEE, NEET and
              coding aspirants — concept diagnostics before teaching, problem
              labs instead of lecture halls, and error analytics after every
              graded paper.
            </p>
            <p className="mt-6 max-w-md border-t border-white/10 pt-5 text-xs leading-relaxed text-[#7C93B8]/80">
              This site is a design demo by Vizo Technology. Every result,
              ranking, fee and mentor credential shown here is illustrative
              placeholder content, not a verified claim.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="font-quantum-mono text-xs font-medium uppercase tracking-[0.24em] text-[#22D3EE]">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col">
              {quantumNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-quantum-mono text-xs font-medium uppercase tracking-[0.24em] text-[#22D3EE]">
              Programmes
            </h2>
            <ul className="mt-4 flex flex-col">
              {quantumCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/demos/quantum/courses"
                    className={footerLinkClass}
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-2">
            <h2 className="font-quantum-mono text-xs font-medium uppercase tracking-[0.24em] text-[#22D3EE]">
              Contact
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-[#7C93B8]">
              <li>
                <a
                  href={`tel:${quantumContact.phoneDigits}`}
                  className="inline-flex min-h-11 items-start gap-2.5 transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
                >
                  <Phone
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                  />
                  <span>{quantumContact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${quantumContact.email}`}
                  className="inline-flex min-h-11 items-start gap-2.5 break-all transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
                >
                  <Mail
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                  />
                  <span>{quantumContact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                />
                <span>
                  {quantumContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                />
                <span>{quantumContact.hours}</span>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-2 px-5 py-6 text-xs text-[#7C93B8] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Quantum Learning — illustrative demo brand.</p>
          <p>
            Design &amp; build:{" "}
            <span className="text-[#22D3EE]">Vizo Technology</span> · Live
            design demo, no data is stored.
          </p>
        </div>
      </div>
    </footer>
  );
}
