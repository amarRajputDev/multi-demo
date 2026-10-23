import { Collections } from "../sections/collections";
import { ContactBand } from "../sections/contact";
import { Featured } from "../sections/featured";
import { Hero } from "../sections/hero";
import { InstagramStrip } from "../sections/instagram";
import { Manifesto } from "../sections/manifesto";

/** Rev Ladyboss homepage - asymmetric hero, lookbook index, shop grid, contact. */
export default function RevHomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <Featured />
      <Manifesto />
      <InstagramStrip />
      <ContactBand />
    </>
  );
}
