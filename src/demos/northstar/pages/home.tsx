import type { Metadata } from "next";
import { Hero } from "../sections/hero";
import { Trust } from "../sections/trust";
import { Principles } from "../sections/principles";
import { Roadmap } from "../sections/roadmap";
import { Courses } from "../sections/courses";
import { Faculty } from "../sections/faculty";
import { Journeys } from "../sections/journeys";
import { Results } from "../sections/results";
import { Testimonials } from "../sections/testimonials";
import { Admissions } from "../sections/admissions";
import { Faq } from "../sections/faq";
import { ContactCta } from "../sections/contact-cta";

export function generateMetadata(): Metadata {
  return {
    title: "Northstar Institute — UPSC, SSC & Banking Coaching | Vizo Demo",
    description:
      "A minimal, mentor-led coaching institute demo for UPSC, SSC, banking and government examination preparation. Illustrative demo content by Vizo Technology.",
  };
}

export default function NorthstarHomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Principles />
      <Roadmap />
      <Courses />
      <Faculty />
      <Journeys />
      <Results />
      <Testimonials />
      <Admissions />
      <Faq />
      <ContactCta />
    </>
  );
}
