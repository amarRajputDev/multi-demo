import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { auroraContact, auroraCourses, auroraNav } from "../data";

const footerLinkClass =
  "inline-flex min-h-11 items-center text-sm text-[#F4EFE6]/70 transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#081426]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
                <path
                  d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z"
                  fill="#C9A227"
                />
              </svg>
              <span className="font-aurora-display text-base font-medium tracking-[0.32em] text-[#F4EFE6]">
                AURORA
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#F4EFE6]/70">
              Aurora Academy is an elite-preparation coaching institute for JEE
              and NEET aspirants — small batches, mapped syllabi, graded weekly
              papers and mentors who stay with a batch for the full year.
            </p>
            <p className="mt-6 max-w-md border-t border-white/10 pt-5 text-xs leading-relaxed text-[#F4EFE6]/60">
              This site is a design demo by Vizo Technology. Every result,
              ranking, fee and mentor credential shown here is illustrative
              placeholder content, not a verified claim.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227]">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col">
              {auroraNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227]">
              Programmes
            </h2>
            <ul className="mt-4 flex flex-col">
              {auroraCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/demos/aurora/courses"
                    className={footerLinkClass}
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A227]">
              Contact
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-[#F4EFE6]/70">
              <li>
                <a
                  href={`tel:${auroraContact.phoneDigits}`}
                  className="inline-flex min-h-11 items-start gap-2.5 transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
                >
                  <Phone
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]"
                  />
                  <span>{auroraContact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${auroraContact.email}`}
                  className="inline-flex min-h-11 items-start gap-2.5 break-all transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
                >
                  <Mail
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]"
                  />
                  <span>{auroraContact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]"
                />
                <span>
                  {auroraContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]"
                />
                <span>{auroraContact.hours}</span>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-2 px-5 py-6 text-xs text-[#F4EFE6]/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Aurora Academy — illustrative demo brand.</p>
          <p>
            Design &amp; build:{" "}
            <span className="text-[#E8D9A0]">Vizo Technology</span> · Live
            design demo, no data is stored.
          </p>
        </div>
      </div>
    </footer>
  );
}
