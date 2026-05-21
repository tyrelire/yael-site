import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import ForWho from "@/components/sections/ForWho";

export const metadata: Metadata = {
  title: "À propos | Yes Invoice",
  description:
    "Qui suis-je ? Yaël, facturière indépendante dédiée aux infirmières et infirmiers libéraux. Suivi personnalisé, transparence et confiance.",
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <div className="bg-forest py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="text-sage uppercase tracking-widest text-xs font-sans font-semibold mb-3">À propos</p>
            <h1 className="font-display text-mint text-3xl sm:text-4xl font-bold">Qui suis-je ?</h1>
            <div className="w-10 h-px bg-sage mt-6" />
          </div>
        </div>
        <About className="bg-white pb-12 sm:pb-20 lg:pb-28" />
        <ForWho />
      </main>
      <Footer />
    </>
  );
}
