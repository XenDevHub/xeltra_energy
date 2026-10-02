import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xeltraenergy.com"),
  title: {
    default: "Xeltra Energy Ltd | EV Charging, Solar & Green Energy Bangladesh",
    template: "%s | Xeltra Energy Ltd",
  },
  description:
    "Xeltra Energy Ltd is Bangladesh's leading clean energy company   EV charging infrastructure, rooftop solar, battery energy storage & the Ecotrike EVX1 electric three-wheeler. Building a greener Bangladesh.",
  keywords: [
    "Xeltra Energy",
    "EV charging Bangladesh",
    "solar energy Bangladesh",
    "electric vehicle Bangladesh",
    "Ecotrike EVX1",
    "battery swap station",
    "rooftop solar Bangladesh",
    "renewable energy Bangladesh",
    "green energy",
    "electric rickshaw Bangladesh",
    "SREDA",
    "Chittagong solar",
    "battery energy storage",
    "Xeltra Power Bank",
  ],
  authors: [{ name: "Xeltra Energy Ltd", url: "https://www.xeltraenergy.com" }],
  creator: "Xeltra Energy Ltd",
  publisher: "Xeltra Energy Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/assets/images/product1.png",
    shortcut: "/assets/images/product1.png",
    apple: "/assets/images/product1.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://www.xeltraenergy.com",
    siteName: "Xeltra Energy Ltd",
    title: "Xeltra Energy Ltd | EV Charging, Solar & Green Energy Bangladesh",
    description:
      "Bangladesh's first integrated renewable energy ecosystem: EV charging, rooftop solar, battery energy storage, and the Ecotrike EVX1 electric three-wheeler.",
    images: [
      {
        url: "/assets/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Xeltra Energy Ltd   Battery Swap Station and Electric Rickshaw Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeltra Energy Ltd | Clean Energy for Bangladesh",
    description:
      "EV charging, rooftop solar, battery storage & Ecotrike EVX1   Xeltra Energy powers Bangladesh's green future.",
    images: ["/assets/images/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/assets/images/product1.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/images/product1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/product1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xeltra Energy Ltd",
              url: "https://www.xeltraenergy.com",
              logo: "https://www.xeltraenergy.com/assets/images/ecotrike-logo.png",
              description:
                "Bangladesh's leading clean energy company offering EV charging infrastructure, rooftop solar installation, battery energy storage, and electric vehicles.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Khulshi Colony, Khulshi",
                addressLocality: "Chittagong",
                addressCountry: "BD",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+880-1814001419",
                contactType: "customer service",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Ecotrike EVX1",
              description:
                "100% Electric three-wheeler inspired by Bangladesh's heritage rickshaw. 1200W BLDC motor, 48V 100Ah battery, 80-100 km range per charge.",
              brand: { "@type": "Brand", name: "Xeltra Energy" },
              offers: {
                "@type": "Offer",
                priceCurrency: "BDT",
                price: "220000",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
