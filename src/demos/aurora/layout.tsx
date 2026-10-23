import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

export function generateMetadata(): Metadata {
  return {
    title: "Aurora Academy — Elite JEE & NEET Coaching | Vizo Demo",
    description:
      "Aurora Academy is a cinematic design demo for elite JEE and NEET coaching brands: small batches, concept-first teaching, graded weekly papers and mentor-led preparation. A Vizo Technology concept site.",
  };
}

export default function AuroraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-aurora-body [color-scheme:dark] flex min-h-screen flex-col overflow-x-clip bg-[#0B1A33] text-[#F4EFE6] selection:bg-[#C9A227] selection:text-[#0B1A33]">
      <a
        href="#aurora-main"
        className="fixed left-4 top-3 z-[100] -translate-y-24 bg-[#C9A227] px-4 py-3 text-sm font-semibold text-[#0B1A33] transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EFE6]"
      >
        Skip to content
      </a>
      <DemoUtilityBar current="aurora" tone="dark" />
      <SiteNav />
      <main id="aurora-main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
