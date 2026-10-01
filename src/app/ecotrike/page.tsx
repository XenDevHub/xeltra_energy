import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import Ecotrike from "@/components/Ecotrike";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EcoTrike EVX1 Electric Rickshaw | Xeltra Energy Ltd",
  description:
    "Discover EcoTrike EVX1 — Bangladesh's flagship solar-compatible lithium electric rickshaw with Smart BMS and 100km range.",
};

export default function EcoTrikePage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Flagship Electric Three-Wheeler"
          title="Next-Generation Electric"
          titleHighlight="Mobility"
          subtitle="Discover EcoTrike EVX1 — Bangladesh's solar-swappable electric rickshaw engineered with smart thermal BMS and long-range lithium efficiency."
        />
        <Ecotrike />
      </main>
      <Footer />
    </div>
  );
}
