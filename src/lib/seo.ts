import type { Metadata, MetadataRoute } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://vihara.homes";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  priority?: number;
};

export const publicSeoPages: SeoPage[] = [
  {
    path: "/",
    title: "Vihara Courtyard Retreat Hyderabad",
    description:
      "Book Vihara - The Courtyard in Hyderabad for private stays, celebrations, wellness retreats, and slow-living escapes surrounded by nature.",
    priority: 1,
  },
  {
    path: "/about",
    title: "About Vihara - The Courtyard",
    description:
      "Learn the story behind Vihara - The Courtyard, a peaceful retreat venue near Hyderabad designed for intimate stays, events, and mindful gatherings.",
    priority: 0.9,
  },
  {
    path: "/activities",
    title: "Activities at Vihara - The Courtyard",
    description:
      "Explore yoga, meditation, swimming, outdoor games, bird watching, celebrations, and other curated experiences available at Vihara near Hyderabad.",
    priority: 0.9,
  },
  {
    path: "/amenities",
    title: "Amenities at Vihara - The Courtyard",
    description:
      "Discover the rooms, pool, courtyard, dining areas, power backup, parking, and stay essentials that make Vihara comfortable for events and getaways.",
    priority: 0.9,
  },
  {
    path: "/booking",
    title: "Book Your Stay or Event at Vihara",
    description:
      "Check staycation and event pricing, choose your plan, and submit a direct booking request for Vihara - The Courtyard in Hyderabad.",
    priority: 0.95,
  },
  {
    path: "/contact",
    title: "Contact Vihara - The Courtyard",
    description:
      "Get in touch with Vihara for bookings, event inquiries, directions, and guest support for stays and celebrations near Hyderabad.",
    priority: 0.8,
  },
  {
    path: "/gallery",
    title: "Gallery | Vihara - The Courtyard",
    description:
      "Browse photos of the courtyard, rooms, amenities, dining spaces, and nature-filled surroundings at Vihara - The Courtyard.",
    priority: 0.8,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Vihara - The Courtyard",
    description:
      "Read how Vihara collects, uses, stores, and protects personal information shared through bookings, inquiries, and website visits.",
    priority: 0.4,
  },
  {
    path: "/terms",
    title: "Terms & Conditions | Vihara - The Courtyard",
    description:
      "Review the booking, stay, event, guest, and property terms that apply to reservations at Vihara - The Courtyard.",
    priority: 0.4,
  },
];

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function getPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: MetadataOptions): Metadata {
  const url = new URL(path, `${siteUrl}/`).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Vihara - The Courtyard",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : undefined,
  };
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicSeoPages.map((page) => ({
    url: new URL(page.path, `${siteUrl}/`).toString(),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.priority ?? 0.7,
  }));
}
