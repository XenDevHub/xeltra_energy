import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project & Media Gallery | Xeltra Energy Ltd",
  description:
    "Explore high-resolution visual gallery of Xeltra Energy battery swap depots, rooftop solar, and EcoTrike prototypes.",
};

export default function GalleryPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Visual Media Showcase"
          title="Xeltra Energy Deployments in"
          titleHighlight="Action"
          subtitle="A visual showcase of our battery swap depots, rooftop solar installations, and EcoTrike prototypes across Bangladesh."
        />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
