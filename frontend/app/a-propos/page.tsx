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
        <About />
        <ForWho />
      </main>
      <Footer />
    </>
  );
}
