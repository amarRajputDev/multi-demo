import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  northstarContact,
  northstarCourses,
  northstarNav,
  northstarHomeHref,
} from "../data";

function CompassMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      focusable="false"
    >
      <path
        d="M12 2.5 13.6 9.2 20.5 12l-6.9 2.8L12 21.5 10.4 14.8 3.5 12l6.9-2.8L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#26241F]/12 bg-[#F1ECE3]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href={northstarHomeHref}
              className="inline-flex items-center gap-3"
              aria-label="Northstar Institute — home"
            >
              <CompassMark className="h-5 w-5 text-[#9C4F36]" />
              <span className="text-[1.0625rem] tracking-[0.32em] text-[#26241F] uppercase">
                Northstar
              </span>
            </Link>
            <div aria-hidden className="mt-4 h-px w-14 bg-[#9C4F36]" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6E6A62]">
              A mentor-led coaching institute for UPSC, SSC, banking and
              government examination preparation — built on small cohorts,
              evaluated writing, and counsellors who can say no. (This is
              illustrative demo content.)
            </p>
            <p className="mt-5 text-xs tracking-[0.12em] text-[#6E6A62]/80 uppercase italic">
              Clarity of purpose · Confidence in preparation
            </p>
          </div>

          <nav aria-label="Index" className="lg:col-span-2">
            <h2 className="text-[10px] font-semibold tracking-[0.28em] text-[#9C4F36] uppercase">
              Index
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {northstarNav.map((item, index) => (
                <li key={item.href} className="flex gap-3">
                  <span
                    aria-hidden
                    className="w-5 text-[11px] text-[#6E6A62]/70 tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={item.href}
                    className="text-[#26241F] transition-colors hover:text-[#9C4F36]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programmes" className="lg:col-span-3">
            <h2 className="text-[10px] font-semibold tracking-[0.28em] text-[#9C4F36] uppercase">
              Programmes
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {northstarCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/demos/northstar/courses"
                    className="text-[#26241F] transition-colors hover:text-[#9C4F36]"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-semibold tracking-[0.28em] text-[#9C4F36] uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm text-[#26241F]">
              <li>
                <a
                  href={`tel:${northstarContact.phoneDigits}`}
                  className="flex min-h-6 items-start gap-2.5 transition-colors hover:text-[#9C4F36]"
                >
                  <Phone
                    aria-hidden
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9C4F36]"
                  />
                  {northstarContact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${northstarContact.email}`}
                  className="flex min-h-6 items-start gap-2.5 break-all transition-colors hover:text-[#9C4F36]"
                >
                  <Mail
                    aria-hidden
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9C4F36]"
                  />
                  {northstarContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9C4F36]"
                />
                <address className="not-italic">
                  {northstarContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  aria-hidden
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9C4F36]"
                />
                {northstarContact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#26241F]/12 pt-7 text-xs text-[#6E6A62] sm:flex-row sm:items-center">
          <p>
            © Northstar Institute. Illustrative demo content — not a real
            institute.
          </p>
          <p>
            A live design demo by{" "}
            <span className="font-medium text-[#26241F]">Vizo Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
