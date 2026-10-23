import type { Metadata } from "next";
import { DemoUtilityBar } from "@/components/shared/demo-utility-bar";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

export function generateMetadata(): Metadata {
  return {
    title: "Quantum Learning — STEM & JEE Coaching | Vizo Demo",
    description:
      "Quantum Learning is a futuristic STEM design demo for JEE, NEET and coding coaching brands: concept diagnostics, problem labs, error analytics and an online mirror campus. A Vizo Technology concept site.",
  };
}

export default function QuantumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-quantum-body [color-scheme:dark] flex min-h-screen flex-col overflow-x-clip bg-[#050A18] text-[#EAF2FF] selection:bg-[#22D3EE] selection:text-[#050A18]">
      <a
        href="#quantum-main"
        className="fixed left-4 top-3 z-[100] -translate-y-24 bg-[#22D3EE] px-4 py-3 text-sm font-semibold text-[#050A18] transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
      >
        Skip to content
      </a>
      <DemoUtilityBar current="quantum" tone="dark" />
      <SiteNav />
      <main id="quantum-main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
