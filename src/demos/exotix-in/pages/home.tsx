import { DropBands } from "../sections/drops";
import { FeaturedGrid } from "../sections/featured";
import { Hero } from "../sections/hero";
import { LinkHub } from "../sections/link-hub";

/** Exotix In homepage - campaign hero, drops, featured grid and link hub. */
export default function ExotixHomePage() {
  return (
    <>
      <Hero />
      <DropBands />
      <FeaturedGrid />
      <LinkHub />
    </>
  );
}
