import type { Metadata } from "next";
import About from "@/components/sections/About";
import ForWho from "@/components/sections/ForWho";

export const metadata: Metadata = {
  title: "À propos — Yaël, votre facturière indépendante pour infirmières libérales",
  description:
    "Yaël, facturière indépendante spécialisée pour les IDEL. Suivi 100 % personnalisé, une seule interlocutrice, réponse sous 24h, rapport mensuel transparent. Découvrez qui gère votre facturation.",
  keywords: [
    "Yaël facturière indépendante",
    "facturière infirmière libérale indépendante",
    "qui est Yes Invoice",
    "suivi personnalisé facturation infirmière",
    "interlocutrice dédiée IDEL",
    "micro-entreprise facturation infirmière",
  ],
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos | Yaël, facturière indépendante pour infirmières libérales — Yes Invoice",
    description:
      "Suivi 100 % personnalisé, une seule interlocutrice, réponse sous 24h. Yaël prend en charge votre facturation pour que vous vous concentriez sur vos patients.",
    url: "https://yesinvoice.fr/a-propos",
  },
};

export default function AProposPage() {
  return (
    <>
      <About className="bg-white min-h-[calc(100vh-68px)] flex flex-col justify-center py-8 sm:py-10" />
      <ForWho className="bg-sage-light min-h-[calc(100vh-68px)] flex flex-col justify-center py-8 sm:py-10" />
    </>
  );
}
