import Link from "next/link";
import { VizoWordmark } from "./vizo-wordmark";

const links = [
  { href: "#concepts", label: "Concepts" },
  { href: "#included", label: "What's included" },
  { href: "#contact", label: "Contact" },
];

export function ShowcaseNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Vizo Technology — home">
          <VizoWordmark />
        </Link>
        <nav aria-label="Showcase" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#070B14] transition hover:bg-white/90 active:scale-[0.98]"
        >
          Contact Vizo
        </a>
      </div>
      {/* Mobile-only anchor row so section links stay reachable on small screens. */}
      <nav aria-label="Showcase sections (mobile)" className="md:hidden">
        <ul className="flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-2 text-[13px] text-white/70 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1.5 transition-colors hover:border-white/40 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
