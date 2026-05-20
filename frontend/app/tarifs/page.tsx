import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Tarifs from "@/components/sections/Tarifs";

export const metadata: Metadata = {
  title: "Tarifs | Yes Invoice",
  description:
    "Des tarifs personnalisés selon votre volume d'activité. Formules Essentiel, Confort et Sérénité — premier échange offert, sans engagement.",
};

export default function TarifsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <Tarifs />
      </main>
      <Footer />
    </>
  );
}
