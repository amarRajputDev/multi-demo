import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { ShopProvider } from "./components/shop-provider";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles.css";

export function generateMetadata(): Metadata {
  return {
    title: "Exotix In — Unofficial Redesign Concept | Vizo Technology",
    description:
      "An unofficial redesign concept for the live Exotix streetwear label: motorsport structure, racing red on charcoal, oversized campaign imagery and a verified catalogue snapshot. Concept by Vizo Technology; not the brand's official store. Product information, pricing, availability and business policies require confirmation.",
    robots: { index: false, follow: false },
  };
}

export default function ExotixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-exotix-body min-h-screen bg-[#0C0C0E] text-[#F2EFEA] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:bg-[#F2EFEA] focus:px-4 focus:py-2 focus:text-sm focus:text-[#0C0C0E]"
      >
        Skip to main content
      </a>
      <ShopProvider>
        <DemoUtilityBar current="exotix-in" tone="dark" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </ShopProvider>
    </div>
  );
}
