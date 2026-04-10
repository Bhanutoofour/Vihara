import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Book Your Stay or Event at Vihara",
  description:
    "Check staycation and event pricing, choose your plan, and submit a direct booking request for Vihara - The Courtyard in Hyderabad.",
  path: "/booking",
});

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
