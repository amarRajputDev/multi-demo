import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

export function generateMetadata(): Metadata {
  return {
    title: "Bloom Learning — Foundation, Olympiad & School Coaching | Vizo Demo",
    description:
      "Bloom Learning is a warm, friendly coaching-institute demo for Class 5–10 foundation tuition, olympiad preparation and school coaching. Illustrative demo content by Vizo Technology.",
  };
}

export default function BloomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-bloom-body min-h-screen bg-[#FBF7F2] text-[#3B3358]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#3B3358] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <DemoUtilityBar current="bloom" tone="light" />
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
