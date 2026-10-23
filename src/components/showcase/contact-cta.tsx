import { Mail, Phone, MapPin } from "lucide-react";
import { DEMOS, PLACEHOLDER_CONTACT } from "@/lib/registry";

export function ContactCta() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-600/20 via-sky-600/10 to-transparent p-8 sm:p-12">
          <div
            aria-hidden
            className="vizo-glow pointer-events-none absolute inset-0 opacity-60"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-200/80">
                03 — Start a project
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Want a website like these,
                <br className="hidden sm:block" /> built for your institute?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Vizo Technology designs and develops custom websites for
                coaching institutes. Tell us about your students, your courses
                and your brand — we&rsquo;ll shape a design around them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${PLACEHOLDER_CONTACT.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#070B14] transition hover:bg-white/90 active:scale-[0.98]"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${PLACEHOLDER_CONTACT.email}`}
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
                >
                  Email Vizo Technology
                </a>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/40">
                    Email
                  </span>
                  {PLACEHOLDER_CONTACT.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </span>
                  {PLACEHOLDER_CONTACT.phoneDisplay}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/40">
                    Studio
                  </span>
                  {PLACEHOLDER_CONTACT.addressLines.join(", ")}
                </span>
              </li>
              <li className="border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">
                Contact details above are placeholders for this demonstration
                project. Replace them with your real agency details before
                publishing.
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Prefer to browse first?{" "}
          {DEMOS.map((demo, index) => (
            <span key={demo.slug}>
              {index > 0 && <span className="px-1.5">·</span>}
              <a
                href={demo.path}
                className="underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {demo.shortName}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
