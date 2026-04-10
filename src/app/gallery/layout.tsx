import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Gallery",
  description:
    "Browse photos of the courtyard, rooms, amenities, dining spaces, and nature-filled surroundings at Vihara - The Courtyard.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
