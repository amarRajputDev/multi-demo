import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { ShopProvider } from "./components/shop-provider";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles.css";

export function generateMetadata(): Metadata {
  return {
    title: "Rev Ladyboss — Unofficial Website Concept | Vizo Technology",
    description:
      "A contemporary blush-and-black storefront concept for the Instagram fashion seller @rev_ladyboss - bold collection headings, editorial product grids and an enquiry-led bag. Concept by Vizo Technology; not the brand's official store. Product information, pricing, availability and business policies require confirmation.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function RevLadybossLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-rev-body min-h-screen bg-[#FAF4F3] text-[#1A1618] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1A1618] focus:px-4 focus:py-2 focus:text-sm focus:text-[#FAF4F3]"
      >
        Skip to main content
      </a>
      <ShopProvider>
        <DemoUtilityBar current="rev-ladyboss" tone="light" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </ShopProvider>
    </div>
  );
}
