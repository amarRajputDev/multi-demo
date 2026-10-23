import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

export function generateMetadata(): Metadata {
  return {
    title: "Northstar Institute — UPSC, SSC & Banking Coaching | Vizo Demo",
    description:
      "Northstar Institute is a minimal, mentor-led coaching demo for UPSC, SSC, banking and government examination preparation. Illustrative demo content by Vizo Technology.",
  };
}

export default function NorthstarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-northstar-body min-h-screen bg-[#F7F4EF] text-[#26241F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#26241F] focus:px-4 focus:py-2 focus:text-sm focus:text-[#F7F4EF]"
      >
        Skip to main content
      </a>
      <DemoUtilityBar current="northstar" tone="light" />
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
