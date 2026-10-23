import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { ShopProvider } from "./components/shop-provider";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./styles.css";

export function generateMetadata(): Metadata {
  return {
    title:
      "S_Y COLLECTIONS - Premium Women's Fashion Redesign Concept | Vizo Demo",
    description:
      "An unofficial redesign concept for S_Y COLLECTIONS featuring everyday kurtis, coordinated kurti-pant sets, premium cotton edits, elegant product discovery and a refined mobile shopping experience. Concept by Vizo Technology - not the brand's official store.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function SyCollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sy-body min-h-screen bg-[#FBF6F2] text-[#2C1F26] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#2C1F26] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <ShopProvider>
        <DemoUtilityBar current="sy-collections" tone="light" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </ShopProvider>
    </div>
  );
}
