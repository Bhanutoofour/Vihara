import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "My Booking",
  description:
    "Access your booking details, payment status, and reservation updates for your Vihara stay or event.",
  path: "/my-booking",
  noIndex: true,
});

export default function MyBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
