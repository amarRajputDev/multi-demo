import { Hero } from "../sections/hero";
import { Trust } from "../sections/trust";
import { Subjects } from "../sections/subjects";
import { Courses } from "../sections/courses";
import { Journey } from "../sections/journey";
import { Faculty } from "../sections/faculty";
import { Results } from "../sections/results";
import { Testimonials } from "../sections/testimonials";
import { Admissions } from "../sections/admissions";
import { Faq } from "../sections/faq";
import { ContactCta } from "../sections/contact-cta";

export default function BloomHomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Subjects />
      <Courses />
      <Journey />
      <Faculty />
      <Results />
      <Testimonials />
      <Admissions />
      <Faq />
      <ContactCta />
    </>
  );
}
