import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { StoreProvider } from "@/demos/ciel-shop/components/store-provider";
import { SiteHeader } from "@/demos/ciel-shop/components/site-header";
import { SiteFooter } from "@/demos/ciel-shop/components/site-footer";
import "@/demos/ciel-shop/styles.css";

export const metadata: Metadata = {
  title: "CIÈL — Premium Streetwear Store Concept | Vizo Demo",
  description:
    "An unofficial e-commerce design concept for CIÈL, featuring experimental streetwear, statement denim, coordinated sets and a premium shopping experience. Concept by Vizo Technology — not the brand's official store.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "CIÈL — Premium Streetwear Store Concept",
    description:
      "Editorial e-commerce concept: experimental streetwear, statement denim and modern product discovery.",
    type: "website",
  },
};

export default function CielShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-ciel-body min-h-screen bg-[#0E0E10] text-[#F4F1EC] antialiased selection:bg-[#A9D6E5] selection:text-[#0E0E10]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:bg-[#F4F1EC] focus:px-4 focus:py-2 focus:text-sm focus:text-[#0E0E10]"
      >
        Skip to main content
      </a>
      <StoreProvider>
        <DemoUtilityBar current="ciel-shop" tone="dark" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </StoreProvider>
    </div>
  );
}
