import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import About from "@/components/About";

import Sustainability from "@/components/Sustainability";
import Achievements from "@/components/Achievements";
import IndustryAchievements from "@/components/IndustryAchievements";
import AppComingSoon from "@/components/AppComingSoon";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Xeltra Energy Ltd",
  description:
    "Learn about Xeltra Energy Ltd, Bangladesh's pioneer in solar EV battery swapping, rooftop solar, and green energy infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Corporate Profile"
          title="Empowering a Sustainable"
          titleHighlight="Future"
          subtitle="Learn about Xeltra Energy Ltd's vision, mission, core values, and completed rooftop solar installations."
        />
        <About />

        <Sustainability />
        <IndustryAchievements />
        <Achievements />
        <AppComingSoon />
      </main>
      <Footer />
    </div>
  );
}
