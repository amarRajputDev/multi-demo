import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { AnnouncementStrip } from "./components/announcement";
import { EnquiryDrawer } from "./components/enquiry-drawer";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { TmEnquiryProvider } from "./components/enquiry-provider";
import { tmDemoNotice } from "./data";

export function generateMetadata(): Metadata {
  return {
    title: "TM SONS — Women's Fashion & Wholesale | Ludhiana | Vizo Concept",
    description:
      "A website concept for TM SONS, Ludhiana: women's winterwear, co-ord sets, ethnic collections and a wholesale quote-request experience for boutiques and retailers. Concept by Vizo Technology — details require confirmation.",
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    icons: { icon: "/images/tm-sons/brand-logo.jpg" },
    openGraph: {
      title: "TM SONS — Women's Fashion & Wholesale | Vizo Concept",
      description:
        "Unofficial website concept for TM SONS, Ludhiana. Product details, prices, availability, terms and contact information require confirmation.",
      type: "website",
      images: ["/images/tm-sons/products/premium-cardigan.jpg"],
    },
  };
}

export default function TmSonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-tmsons-body min-h-screen bg-[#FAF7F2] text-[#1C1A17] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1C1A17] focus:px-4 focus:py-2 focus:text-sm focus:text-[#FAF7F2]"
      >
        Skip to main content
      </a>
      <DemoUtilityBar current="tm-sons" tone="light" />
      <TmEnquiryProvider>
        <AnnouncementStrip />
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <EnquiryDrawer />
      </TmEnquiryProvider>
      <p className="sr-only">{tmDemoNotice}</p>
    </div>
  );
}
