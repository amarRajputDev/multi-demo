import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DEMOS, numberWord } from "@/lib/registry";
import { MiniPreview } from "./mini-preview";

/**
 * The concept cards. Each embeds a live CSS miniature of the actual demo
 * (palette, type, composition) plus the design-style label and an explicit
 * "Explore Live Demo" action.
 */
export function DemoCards() {
  return (
    <section id="concepts" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-300/80">
              01 — The Collection
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {numberWord(DEMOS.length)} complete website concepts
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            {numberWord(DEMOS.length)} independent brands — not one template in{" "}
            {numberWord(DEMOS.length)} colours. Each demo is a fully built site
            with its own pages, content and personality.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((demo) => (
            <li key={demo.slug}>
              <Link
                href={demo.path}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <MiniPreview slug={demo.slug} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                      style={{
                        backgroundColor: `${demo.palette.accent}1F`,
                        color: demo.palette.accentSoft,
                      }}
                    >
                      {demo.styleLabel}
                    </span>
                    <span className="font-mono text-[11px] text-white/35">
                      {String(DEMOS.indexOf(demo) + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                    {demo.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                    {demo.tagline}
                  </p>
                  <p className="mt-3 text-xs text-white/40">{demo.audience}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-indigo-300">
                    Explore Live Demo
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
