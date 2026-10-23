import { BrowseSection } from "../sections/browse";
import { BrandIntroduction } from "../sections/brand-introduction";
import { CollectionsFeature } from "../sections/collections-feature";
import { EnquireSection } from "../sections/enquire";
import { FeaturedProducts } from "../sections/featured";
import { Hero } from "../sections/hero";
import { InstagramGallery } from "../sections/instagram";

/** Anyaa Attire homepage - the full concept storefront. */
export default function AnyaaHomePage() {
  return (
    <>
      <Hero />
      <BrandIntroduction />
      <CollectionsFeature />
      <FeaturedProducts />
      <BrowseSection />
      <InstagramGallery />
      <EnquireSection />
    </>
  );
}
