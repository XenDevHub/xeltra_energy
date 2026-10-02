import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Clean Energy Solutions & ROI | Xeltra Energy Ltd",
  description:
    "Explore Xeltra Energy's solar-powered EV battery swap stations, rooftop solar + ESS, and interactive ROI financial savings calculator.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Clean Technology Ecosystem"
          title="Xeltra Power bank &"
          titleHighlight="Swapping infrastructure"
          subtitle="Explore our solar-powered battery swapping hubs, commercial rooftop solar, mobile power banks, and interactive ROI financial savings calculator."
        />
        <HowItWorks />
        <Solutions />
        <Calculator />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
