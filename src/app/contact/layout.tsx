import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Contact Vihara - The Courtyard",
  description:
    "Get in touch with Vihara for bookings, event inquiries, directions, and guest support for stays and celebrations near Hyderabad.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
