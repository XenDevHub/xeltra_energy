import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Leadership & Executive Board | Xeltra Energy Ltd",
  description:
    "Meet the visionary leaders, engineers, and directors driving Xeltra Energy Ltd in Bangladesh.",
};

export default function TeamPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Executive Governance"
          title="Meet the Visionaries Behind"
          titleHighlight="Xeltra Energy"
          subtitle="Our board of directors, founders, and engineering leaders driving the clean energy transition across Bangladesh."
        />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
