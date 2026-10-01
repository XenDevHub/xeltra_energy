import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import MarketAnalysis from "@/components/MarketAnalysis";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Market Analysis & Competitive Advantage | Xeltra Energy Ltd",
  description:
    "Explore Xeltra Energy's competitive edge: Li-Ion solar swapping vs traditional lead-acid rickshaws in Bangladesh.",
};

export default function MarketAnalysisPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Strategic Industry Analysis"
          title="Transforming Electric Transport"
          titleHighlight="Economics"
          subtitle="Discover how Xeltra Energy solves long charging down-time and heavy lead-acid battery replacement costs across Bangladesh's 4 million+ EV fleet."
        />
        <MarketAnalysis />
      </main>
      <Footer />
    </div>
  );
}
