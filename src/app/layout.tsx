import type { Metadata } from "next";
import {
  Archivo,
  EB_Garamond,
  Fraunces,
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Inter,
  Karla,
  Newsreader,
  Nunito_Sans,
  Outfit,
  Sora,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";

/* Showcase (Vizo Technology) shell fonts. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* One font per demo design system. All are self-hosted by next/font, so the
   browser makes zero third-party font requests and swaps never cause layout
   shift. Loading them from the root keeps each demo a single document. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vizo Technology — Coaching Website Demo Studio",
  description:
    "Six premium, production-quality website concepts for coaching institutes. Explore live demos and pick the design that fits your brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        geistSans.variable,
        geistMono.variable,
        fraunces.variable,
        inter.variable,
        ebGaramond.variable,
        sourceSans3.variable,
        archivo.variable,
        newsreader.variable,
        karla.variable,
        sora.variable,
        ibmPlexSans.variable,
        ibmPlexMono.variable,
        outfit.variable,
        nunitoSans.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
