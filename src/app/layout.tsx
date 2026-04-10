import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vihara Courtyard Retreat Hyderabad | Private Events & Stays",
  description:
    "Vihara - The Courtyard is a peaceful retreat near Hyderabad for private stays, intimate celebrations, wellness retreats, and memorable gatherings.",
  keywords: [
    "Vihara",
    "Vihara The Courtyard",
    "Hyderabad retreat",
    "private stay Hyderabad",
    "event venue Hyderabad",
    "staycation Hyderabad",
    "courtyard venue",
    "Kothur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vihara Courtyard Retreat Hyderabad | Private Events & Stays",
    description:
      "Vihara - The Courtyard is a peaceful retreat near Hyderabad for private stays, intimate celebrations, wellness retreats, and memorable gatherings.",
    url: siteUrl,
    siteName: "Vihara - The Courtyard",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vihara Courtyard Retreat Hyderabad | Private Events & Stays",
    description:
      "Vihara - The Courtyard is a peaceful retreat near Hyderabad for private stays, intimate celebrations, wellness retreats, and memorable gatherings.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17996520116"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17996520116');
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
