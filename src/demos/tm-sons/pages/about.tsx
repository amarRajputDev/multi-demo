import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShieldAlert } from "lucide-react";
import { BrandMark } from "../components/brand-mark";
import { TmProductImage } from "../components/product-image";
import {
  tmContact,
  tmDemoNotice,
  tmImageManifest,
  tmProducts,
  tmSortedProducts,
} from "../data";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

export function generateMetadata(): Metadata {
  return {
    title: "About TM SONS — Ludhiana Women's Apparel | Concept",
    description:
      "TM SONS is a women's apparel business based in Ludhiana, with collections spanning winterwear, coordinated styles and ethnic fashion. Proposed demonstration copy for a website concept by Vizo Technology.",
  };
}

const confirmed = [
  {
    label: "Business name",
    value: "TM SONS",
    note: "From the public Instagram profile.",
  },
  {
    label: "Speciality",
    value: "Women's clothing, wholesale & retail",
    note: "Winterwear, co-ord sets, farshi sets, sweatshirts, ethnicwear.",
  },
  {
    label: "Location line",
    value: tmContact.locationShort,
    note: "Instagram bio wording — used as the default.",
  },
  {
    label: "Contact numbers",
    value: tmContact.phones.map((phone) => phone.display).join(" · "),
    note: "Publicly listed wholesale numbers — verify before publishing.",
  },
];

const pending = [
  "Full street address — a third-party directory lists B-IV-1291, Mohalla Thapran, Abadi Sudan Mohalla, but this is not published as the official address.",
  "Business email and opening hours — none supplied, so none are shown.",
  "Any founding year or heritage claim — a directory suggests 1961; it is deliberately not used anywhere on this site.",
  "Prices, minimum order quantities, trade terms, delivery promises and stock levels.",
  "Fabric composition, sizing charts, care instructions and product measurements.",
  "Photography rights — every image is a locally saved reference of a public post and needs owner approval.",
];

export default function TmSonsAboutPage() {
  const products = tmSortedProducts(tmProducts);

  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A Ludhiana clothing house,{" "}
            <span className="italic text-[#B23B2E]">open to enquiry</span>
          </>
        }
        intro="TM SONS is a women's apparel business based in Ludhiana, with clothing collections spanning winterwear, coordinated styles and ethnic fashion. Retail customers and wholesale buyers can enquire about available products and current collection details."
        aside={
          <div className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-5">
            <BrandMark size={64} withWordmark subWordmark="Ludhiana · Punjab" />
            <p className="mt-4 text-[11px] leading-relaxed text-[#6F6A61]">
              Proposed demonstration copy — confirmed with the owner before
              publication.
            </p>
          </div>
        }
      />

      <section className="bg-[#FAF7F2] py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <Reveal>
              <div aria-hidden className="mb-5 h-px w-12 bg-[#B23B2E]" />
              <p className="text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
                The brand
              </p>
              <h2 className="font-tmsons-display mt-4 text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight text-[#1C1A17]">
                Built around what the shop floor actually stocks
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#6F6A61] sm:text-base">
                <p>
                  This concept presents TM SONS the way a retailer discovers it:
                  collections first, then a direct line to the people who can
                  quote them. Winter layers, coordinated sets and ethnic
                  pieces are shown as separate collections so a buyer can scan
                  the shelf quickly instead of scrolling a mixed feed.
                </p>
                <p>
                  For stores, the important part is the wholesale enquiry: pick
                  pieces, set your own quantities, and send one request. For
                  individual customers, every product page offers a direct call
                  and an Instagram message.
                </p>
                <p className="border-l-2 border-[#B23B2E]/40 pl-4 text-[13px] text-[#6F6A61]">
                  Nothing on this page claims a manufacturing capability,
                  heritage, export history or awards — none of which have been
                  confirmed with the business.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/demos/tm-sons/shop"
                  className="group inline-flex min-h-13 items-center gap-2.5 bg-[#1C1A17] px-7 py-4 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  Browse the catalogue
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/demos/tm-sons/wholesale"
                  className="inline-flex min-h-13 items-center gap-2.5 border border-[#1C1A17]/30 px-7 py-4 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  Wholesale enquiry
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <figure className="border border-[#1C1A17]/12 bg-[#FFFDFA] p-3">
                <TmProductImage
                  imageId="farshi-sets"
                  alt="Garments stacked in store beneath a Farshi sets label"
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  aspectClassName="aspect-[16/11]"
                />
                <figcaption className="px-1 pt-3 text-[10px] leading-relaxed text-[#6F6A61]">
                  Reference photograph from the TM SONS shop floor — pending
                  owner approval for commercial use.
                </figcaption>
              </figure>

              <div className="mt-5 border border-[#1C1A17]/12 bg-[#FFFDFA] p-5">
                <p className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#B23B2E] uppercase">
                  <MapPin aria-hidden className="h-3.5 w-3.5" />
                  Showroom
                </p>
                <address className="mt-3 text-[15px] leading-relaxed text-[#1C1A17] not-italic">
                  {tmContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {tmContact.phones.map((phone) => (
                    <a
                      key={phone.telHref}
                      href={phone.telHref}
                      className="inline-flex min-h-11 items-center gap-2 border border-[#1C1A17]/20 px-4 text-[13px] text-[#1C1A17] transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                    >
                      <Phone aria-hidden className="h-3.5 w-3.5 text-[#B23B2E]" />
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1C1A17]/10 bg-[#F1EBE2] py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
                What this concept is built on
              </p>
              <h2 className="font-tmsons-display mt-4 text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight text-[#1C1A17]">
                Sourced from public listings
              </h2>
              <dl className="mt-7 space-y-5">
                {confirmed.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-[#1C1A17]/12 pb-5 last:border-0"
                  >
                    <dt className="text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      {item.label}
                    </dt>
                    <dd className="font-tmsons-display mt-1.5 text-[1.05rem] text-[#1C1A17]">
                      {item.value}
                    </dd>
                    <dd className="mt-1 text-[13px] leading-relaxed text-[#6F6A61]">
                      {item.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="flex items-center gap-2 text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
                <ShieldAlert aria-hidden className="h-4 w-4" />
                Awaiting confirmation
              </p>
              <h2 className="font-tmsons-display mt-4 text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight text-[#1C1A17]">
                Deliberately left out
              </h2>
              <ul className="mt-7 space-y-4">
                {pending.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-dashed border-[#1C1A17]/25 bg-[#FFFDFA] px-4 py-3.5 text-[13px] leading-relaxed text-[#6F6A61]"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B23B2E]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
              Catalogue reference
            </p>
            <h2 className="font-tmsons-display mt-3 text-[clamp(1.4rem,2.6vw,2rem)] text-[#1C1A17]">
              {products.length} pieces shown in this concept
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/demos/tm-sons/products/${product.slug}`}
                    className="inline-flex min-h-10 items-center border border-[#1C1A17]/20 px-4 text-[12px] text-[#1C1A17] transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-[#6F6A61]">
              {tmDemoNotice} Image manifest:{" "}
              {tmImageManifest.length} reference assets recovered locally, all
              marked <em>pending approval</em>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
