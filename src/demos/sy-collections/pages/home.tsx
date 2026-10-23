import { Editorial } from "../sections/editorial";
import { FeaturedProducts } from "../sections/featured";
import { Hero } from "../sections/hero";
import { InstagramGallery } from "../sections/instagram";
import { Categories } from "../sections/categories";
import { Positioning } from "../sections/positioning";
import { SetsFeature } from "../sections/sets-feature";

/** S_Y COLLECTIONS homepage - editorial bento of the whole concept. */
export default function SyHomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Editorial />
      <SetsFeature />
      <Positioning />
      <InstagramGallery />
    </>
  );
}
