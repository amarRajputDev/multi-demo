import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { scholarContact, scholarCourses, scholarNav } from "../data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1F3A2E]/12 bg-[#F5EFE1]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-scholar-display text-2xl font-medium tracking-tight text-[#1F3A2E]">
              Scholar House
            </p>
            <div aria-hidden className="mt-2 h-px w-12 bg-[#A8842C]" />
            <p className="mt-4 text-sm leading-relaxed text-[#5C6B60]">
              A tuition and coaching institute for Classes 9–12 and foundation
              learners, built on patient teaching, small batches, and genuine
              partnership with families. (Demo content.)
            </p>
            <p className="mt-4 text-xs tracking-wide text-[#5C6B60]/80 italic">
              Serving our community since 2012.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[10px] font-semibold tracking-[0.24em] text-[#A8842C] uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {scholarNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#1F3A2E] transition-colors hover:text-[#A8842C]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Courses">
            <h2 className="text-[10px] font-semibold tracking-[0.24em] text-[#A8842C] uppercase">
              Courses
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {scholarCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/demos/scholar-house/courses"
                    className="text-[#1F3A2E] transition-colors hover:text-[#A8842C]"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] font-semibold tracking-[0.24em] text-[#A8842C] uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#1F3A2E]">
              <li>
                <a
                  href={`tel:${scholarContact.phoneDigits}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-[#A8842C]"
                >
                  <Phone aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A8842C]" />
                  {scholarContact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${scholarContact.email}`}
                  className="flex items-start gap-2.5 break-all transition-colors hover:text-[#A8842C]"
                >
                  <Mail aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A8842C]" />
                  {scholarContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A8842C]" />
                <span>
                  {scholarContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A8842C]" />
                {scholarContact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#1F3A2E]/12 pt-6 text-xs text-[#5C6B60] sm:flex-row sm:items-center">
          <p>
            © Scholar House. Illustrative demo content — not a real
            institute.
          </p>
          <p>
            A live design demo by{" "}
            <span className="font-medium text-[#1F3A2E]">Vizo Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
