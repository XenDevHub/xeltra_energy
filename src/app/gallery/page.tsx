import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Xeltra Energy Ltd",
  description:
    "Stay updated with Xeltra Energy's latest news, announcements, reports, and technological developments in Bangladesh's clean energy sector.",
  openGraph: {
    title: "News & Updates | Xeltra Energy Ltd",
    description:
      "Stay updated with Xeltra Energy's latest news, announcements, reports, and technological developments in Bangladesh's clean energy sector.",
    url: "https://www.xeltraenergy.com/gallery",
    siteName: "Xeltra Energy Ltd",
    images: [
      {
        url: "https://www.xeltraenergy.com/assets/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Xeltra Energy News & Updates",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Xeltra Energy Ltd",
    description: "Stay updated with Xeltra Energy's latest news and developments.",
    images: ["https://www.xeltraenergy.com/assets/images/banner.png"],
  },
};

export default function NewsPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Latest from Xeltra Energy"
          title="Discover Our"
          titleHighlight="Latest Journey"
          subtitle="Stay updated with Xeltra Energy's latest news, announcements, reports, and technological developments in Bangladesh's clean energy sector."
        />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
}
