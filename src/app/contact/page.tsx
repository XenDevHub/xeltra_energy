import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Xeltra Energy Ltd",
  description:
    "Get in touch with Xeltra Energy Ltd for solar rooftop inquiries, EV battery swapping station partnerships, or EcoTrike dealership.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pt-20">
      <Navbar />
      <main>
        <SubpageHero
          badge="Direct Corporate Contact"
          title="Let's Build a Greener"
          titleHighlight="Future Together"
          subtitle="Reach out to our corporate office in Dhaka or chat directly with our energy representatives on WhatsApp."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
