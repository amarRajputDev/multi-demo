import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { ShopProvider } from "./components/shop-provider";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles.css";

export function generateMetadata(): Metadata {
  return {
    title: "Kurtis By Sakshi — Unofficial Website Concept | Vizo Technology",
    description:
      "An unofficial website concept for Kurtis By Sakshi (@kurtis_by_sakshi), an Instagram-based kurti and women's fashion seller. Browse concept collections, build an enquiry list and order by DM. Concept by Vizo Technology; not the brand's official store. Product information, pricing, availability and business policies require confirmation.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function KurtisBySakshiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sakshi-body min-h-screen overflow-x-hidden bg-[#FBF6EF] text-[#3B1F24] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#3B1F24] focus:px-4 focus:py-2 focus:text-sm focus:text-[#FBF6EF]"
      >
        Skip to main content
      </a>
      <ShopProvider>
        <DemoUtilityBar current="kurtis-by-sakshi" tone="light" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </ShopProvider>
    </div>
  );
}
