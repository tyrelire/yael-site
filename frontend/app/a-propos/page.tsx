import type { Metadata } from "next";
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
      <About className="bg-white min-h-screen flex flex-col justify-center py-6 sm:py-10" />
      <ForWho className="bg-sage-light pt-8 sm:pt-12 pb-12 sm:pb-16" />
    </>
  );
}
