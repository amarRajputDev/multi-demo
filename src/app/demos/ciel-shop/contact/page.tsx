import type { Metadata } from "next";
import { ArrowUpRight, AtSign, Mail } from "lucide-react";
import { CIEL_PRODUCTS } from "@/demos/ciel-shop/products";
import { CielEnquiryForm } from "@/demos/ciel-shop/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & custom orders | CIÈL concept store",
  description:
    "Contact the CIÈL store concept — demonstration enquiry form for custom orders. Nothing is sent or stored.",
  robots: { index: false, follow: false },
};

const INSTAGRAM = "https://www.instagram.com/ciel_shop.in/";

export default function CielContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="border-b border-white/10 pb-8">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#A9D6E5]">
          Studio
        </p>
        <h1 className="font-ciel-display mt-3 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] text-[#F4F1EC]">
          Contact & custom orders
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#8A8F96]">
          Custom runs, sizing questions and collaboration notes. This form is a
          design demonstration — it validates in your browser and shows a
          confirmation instead of sending anything.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="font-ciel-display text-2xl text-[#F4F1EC]">
            Reach the label
          </h2>

          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <AtSign aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A9D6E5]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A8F96]">
                  Instagram · preferred channel
                </p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 inline-flex items-center gap-1 text-[#F4F1EC] hover:text-[#A9D6E5]"
                >
                  @ciel_shop.in
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A9D6E5]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A8F96]">
                  Previously listed email
                </p>
                <a
                  href="mailto:info@cielshop.in"
                  className="mt-1 block text-[#F4F1EC] hover:text-[#A9D6E5]"
                >
                  info@cielshop.in
                </a>
                <p className="mt-1 text-[11px] leading-relaxed text-[#8A8F96]">
                  Published on the brand&rsquo;s former site; confirm it is still
                  monitored before relying on it.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 border border-white/10 p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
              What we do not publish
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#8A8F96]">
              This concept avoids inventing a founder name, street address, phone
              number, promotions or customer reviews. All such details would need
              to come from the brand directly.
            </p>
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-[#8A8F96]">
            Concept preview by Vizo Technology. Product details, prices,
            availability and store policies require confirmation.
          </p>
        </div>

        <div className="border border-white/10 bg-[#0B0B0D] p-5 sm:p-8">
          <p className="font-ciel-display text-xl text-[#F4F1EC]">
            Send a brief
          </p>
          <p className="mt-1.5 text-xs text-[#8A8F96]">
            Demo form · nothing leaves your browser.
          </p>
          <CielEnquiryForm
            className="mt-6"
            subject="Custom order enquiry"
            pieceOptions={[
              "Custom order",
              ...CIEL_PRODUCTS.map((product) => product.name),
            ]}
          />
        </div>
      </div>
    </div>
  );
}
