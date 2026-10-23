import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { ShopProvider } from "./components/shop-provider";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles.css";

export function generateMetadata(): Metadata {
  return {
    title: "Anyaa Attire — Unofficial Website Concept | Vizo Technology",
    description:
      "An unofficial website concept for Anyaa Attire, a contemporary women's kurti and everyday-wear boutique - a soft teal and ivory storefront with botanical detail, enquiry-first pricing and demonstration-only shopping. Concept by Vizo Technology; not the brand's official store. Product information, pricing, availability and business policies require confirmation.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function AnyaaAttireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-anyaa-body min-h-screen bg-[#FAF8F3] text-[#22332F] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#22332F] focus:px-4 focus:py-2 focus:text-sm focus:text-[#FAF8F3]"
      >
        Skip to main content
      </a>
      <ShopProvider>
        <DemoUtilityBar current="anyaa-attire" tone="light" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </ShopProvider>
    </div>
  );
}
