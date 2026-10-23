import { CatalogSection } from "../sections/catalog";
import { CollectionsSection } from "../sections/collections";
import { Hero } from "../sections/hero";
import { InstagramSection } from "../sections/instagram";

/** Homepage: hero, collections, all-products catalogue and Instagram block. */
export default function SakshiHome() {
  return (
    <>
      <Hero />
      <CollectionsSection />
      <CatalogSection titleId="kbs-home-catalog" />
      <InstagramSection />
    </>
  );
}
