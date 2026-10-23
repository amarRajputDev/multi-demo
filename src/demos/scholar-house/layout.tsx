import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

export function generateMetadata(): Metadata {
  return {
    title: "Scholar House — Timeless Academic Coaching (Demo)",
    description:
      "Scholar House is a refined, trustworthy coaching-institute demo for Class 9–12 tuition, foundation and olympiad programmes. Illustrative demo content by Vizo Technology.",
  };
}

export default function ScholarHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-scholar-body min-h-screen bg-[#FBF8F1] text-[#1F3A2E]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1F3A2E] focus:px-4 focus:py-2 focus:text-sm focus:text-[#FBF8F1]"
      >
        Skip to main content
      </a>
      <DemoUtilityBar current="scholar-house" tone="light" />
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
