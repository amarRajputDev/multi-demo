import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

export function generateMetadata(): Metadata {
  return {
    title:
      "Pulse Prep — Smarter Preparation for Competitive Exams | Vizo Demo",
    description:
      "Pulse Prep is an energetic design demo for competitive entrance coaching: JEE, NEET and CET programmes driven by diagnostics, ranked weekly mocks and a doubt desk till 9 PM. A Vizo Technology concept site.",
  };
}

export default function PulsePrepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-pulse-body min-h-screen bg-white text-[#0A1B4D]">
      <a
        href="#pulse-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#0A1B4D] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <DemoUtilityBar current="pulse-prep" tone="light" />
      <SiteNav />
      <main id="pulse-main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
