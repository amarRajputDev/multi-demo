import type { Metadata } from "next";
import { Hero } from "../sections/hero";
import { CategoryGrid } from "../sections/category-grid";
import { FeaturedProducts } from "../sections/featured";
import { WholesaleCta } from "../sections/wholesale-cta";
import { Seasonal } from "../sections/seasonal";
import { AboutBand } from "../sections/about-band";
import { InstagramGallery } from "../sections/instagram-gallery";
import { ContactCta } from "../sections/contact-cta";

export function generateMetadata(): Metadata {
  return {
    title: "TM SONS — Women's Fashion & Wholesale Enquiries | Ludhiana",
    description:
      "Women's fashion, curated for every collection. Explore winterwear, cardigans, co-ord sets and ethnic collections from TM SONS, Ludhiana — with a wholesale quote-request experience. Website concept by Vizo Technology.",
  };
}

export default function TmSonsHomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <WholesaleCta />
      <Seasonal />
      <AboutBand />
      <InstagramGallery />
      <ContactCta />
    </>
  );
}
