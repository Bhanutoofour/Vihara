import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import StaysPricing from "@/components/home/StaysPricing";
import Retreats from "@/components/home/Retreats";
import ContactCTA from "@/components/home/ContactCTA";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Vihara Courtyard Retreat Hyderabad",
  description:
    "Book Vihara - The Courtyard in Hyderabad for private stays, celebrations, wellness retreats, and slow-living escapes surrounded by nature.",
  path: "/",
});

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <StaysPricing />
      <Retreats />
      <ContactCTA />
    </main>
  );
}
