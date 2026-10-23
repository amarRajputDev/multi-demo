import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { EnquiryProvider } from "@/demos/khaleezi-designs/components/enquiry-provider";
import { SiteFooter } from "@/demos/khaleezi-designs/components/site-footer";
import { SiteHeader } from "@/demos/khaleezi-designs/components/site-header";
import "@/demos/khaleezi-designs/styles.css";

export const metadata: Metadata = {
  title: "Khaleezi Designs — Unofficial Website Concept | Vizo Technology",
  description:
    "An unofficial website concept for the Instagram ethnicwear label Khaleezi Designs — pure cotton dupatta sets, straight pants and size-inclusive styling from small to 7XL. Concept by Vizo Technology; not the brand's official store. Product information, pricing, availability and business policies require confirmation.",
  robots: { index: false, follow: false },
};

export default function KhaleeziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-khaleezi-body min-h-screen bg-[#F7F2E9] text-[#2A2320] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:bg-[#2A2320] focus:px-4 focus:py-2 focus:text-sm focus:text-[#F7F2E9]"
      >
        Skip to main content
      </a>
      <EnquiryProvider>
        <DemoUtilityBar current="khaleezi-designs" tone="light" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </EnquiryProvider>
    </div>
  );
}
