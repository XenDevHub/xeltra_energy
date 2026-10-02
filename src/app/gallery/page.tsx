import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";

export const metadata = {
  title: "News & Updates | Xeltra Energy Ltd",
  description:
    "Stay updated with Xeltra Energy's latest news, announcements, reports, and technological developments in Bangladesh's clean energy sector.",
};

export default function NewsPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Latest from Xeltra Energy"
          title="News &"
          titleHighlight="Updates"
          subtitle="Stay updated with Xeltra Energy's latest news, announcements, reports, and technological developments in Bangladesh's clean energy sector."
        />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
}
