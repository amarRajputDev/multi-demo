import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { bloomContact, bloomCourses, bloomNav } from "../data";
import { FlowerMark } from "./illustrations";

export function SiteFooter() {
  return (
    <footer className="rounded-t-[40px] border-t border-[#3B3358]/10 bg-white/70">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <FlowerMark className="h-8 w-8 text-[#E8836F]" />
              <p className="font-bloom-display text-2xl font-semibold tracking-tight text-[#3B3358]">
                Bloom Learning
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#5F5878]">
              A warm home for foundation learners, school students and curious
              young Olympiad minds. Small batches, kind mentors, and steady
              progress — for children and the families cheering them on. (Demo
              content.)
            </p>
            <p className="mt-4 inline-flex rounded-full bg-[#F5C86B]/30 px-3 py-1 text-xs font-semibold text-[#3B3358]">
              Every student has the potential to shine.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[#B34832] uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-1">
              {bloomNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-[#3B3358] transition-colors hover:text-[#B34832]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Courses">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[#B34832] uppercase">
              Programmes
            </h2>
            <ul className="mt-4 space-y-1">
              {bloomCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/demos/bloom/courses"
                    className="inline-flex min-h-11 items-center text-sm text-[#3B3358] transition-colors hover:text-[#B34832]"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[#B34832] uppercase">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#3B3358]">
              <li>
                <a
                  href={`tel:${bloomContact.phoneDigits}`}
                  className="flex min-h-11 items-start gap-2.5 transition-colors hover:text-[#B34832]"
                >
                  <Phone
                    aria-hidden
                    className="mt-1 h-4 w-4 shrink-0 text-[#E8836F]"
                  />
                  {bloomContact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${bloomContact.email}`}
                  className="flex min-h-11 items-start gap-2.5 break-all transition-colors hover:text-[#B34832]"
                >
                  <Mail
                    aria-hidden
                    className="mt-1 h-4 w-4 shrink-0 text-[#E8836F]"
                  />
                  {bloomContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-2">
                <MapPin
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-[#E8836F]"
                />
                <span>
                  {bloomContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  aria-hidden
                  className="mt-1 h-4 w-4 shrink-0 text-[#E8836F]"
                />
                {bloomContact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-[24px] bg-[#FBF7F2] px-6 py-5 text-xs text-[#5F5878] sm:flex-row sm:items-center">
          <p>© Bloom Learning. Illustrative demo content — not a real institute.</p>
          <p>
            A live design demo by{" "}
            <span className="font-semibold text-[#3B3358]">Vizo Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
