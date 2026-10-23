import Link from "next/link";
import { DEMOS, PLACEHOLDER_CONTACT } from "@/lib/registry";
import { siteYear } from "@/lib/site-year";
import { VizoWordmark } from "./vizo-wordmark";

export async function ShowcaseFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070E]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <VizoWordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              A design studio for coaching institutes and retail brands. This
              demo studio gathers every concept in one place, so you can find
              the direction that fits your brand.
            </p>
          </div>

          <nav aria-label="Concepts">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Concepts
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {DEMOS.map((demo) => (
                <li key={demo.slug}>
                  <Link
                    href={demo.path}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {demo.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Showcase sections">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              This page
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>
                <a href="#concepts" className="transition-colors hover:text-white">
                  All concepts
                </a>
              </li>
              <li>
                <a href="#included" className="transition-colors hover:text-white">
                  What&rsquo;s included
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact Vizo
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Agency contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>{PLACEHOLDER_CONTACT.email}</li>
              <li>{PLACEHOLDER_CONTACT.phoneDisplay}</li>
              <li>
                {PLACEHOLDER_CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li className="text-white/40">{PLACEHOLDER_CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {await siteYear()} Vizo Technology · Demo studio</p>
          <p>
            All institute names, results, faculty credentials and testimonials
            inside the coaching demos are illustrative demo content.
          </p>
        </div>
      </div>
    </footer>
  );
}
