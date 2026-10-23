import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteYear } from "@/lib/site-year";

const INSTAGRAM = "https://www.instagram.com/ciel_shop.in/";

const LINKS = [
  {
    title: "Shop",
    items: [
      { label: "All pieces", href: "/demos/ciel-shop/shop" },
      { label: "Upper wear", href: "/demos/ciel-shop/shop" },
      { label: "Bottom wear", href: "/demos/ciel-shop/shop" },
      { label: "Co-ord sets", href: "/demos/ciel-shop/shop" },
    ],
  },
  {
    title: "Studio",
    items: [
      { label: "Brand story", href: "/demos/ciel-shop#story" },
      { label: "Made to order", href: "/demos/ciel-shop#made-to-order" },
      { label: "Contact", href: "/demos/ciel-shop/contact" },
      { label: "Bag preview", href: "/demos/ciel-shop/checkout" },
    ],
  },
];

export async function SiteFooter() {
  const year = await siteYear();

  return (
    <footer className="border-t border-white/10 bg-[#0B0B0D]">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="ciel-wordmark text-3xl text-[#F4F1EC]">CIÈL</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#8A8F96]">
              Where the sky knows no limits. Experimental streetwear, statement
              denim and coordinated looks.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#A9D6E5] hover:underline"
            >
              @ciel_shop.in
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          </div>

          {LINKS.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8A8F96]">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#F4F1EC]/75 transition-colors hover:text-[#F4F1EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#8A8F96]">
              Enquiries
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#F4F1EC]/75">
              <li>
                <a
                  href="mailto:info@cielshop.in"
                  className="transition-colors hover:text-[#F4F1EC]"
                >
                  info@cielshop.in
                </a>
              </li>
              <li className="text-[#8A8F96]">
                Previously listed contact address — confirmation recommended.
              </li>
              <li>
                <Link
                  href="/demos/ciel-shop/contact"
                  className="text-[#A9D6E5] hover:underline"
                >
                  Send a demo enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-3xl text-[11px] leading-relaxed text-[#8A8F96]">
            Concept preview by Vizo Technology. Product details, prices,
            availability and store policies require confirmation. CIÈL is an
            independent streetwear label; this page is an unofficial design
            demo, not the brand&rsquo;s official store, and no orders or
            payments are processed here.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-[10px] uppercase tracking-[0.18em] text-[#8A8F96]/80 sm:flex-row sm:items-center sm:justify-between">
            <span>© {year} CIÈL concept demo</span>
            <span>No-index preview · Vizo Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
