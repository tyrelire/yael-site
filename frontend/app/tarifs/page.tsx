import type { Metadata } from "next";
import Tarifs from "@/components/sections/Tarifs";

export const metadata: Metadata = {
  title: "Tarifs — Formules Essentiel, Confort & Sérénité | Devis gratuit",
  description:
    "Tarifs personnalisés selon votre volume d'activité. Trois formules : Essentiel (SESAM-Vitale + remboursements), Confort (+ rejets & mutuelles), Sérénité (accompagnement sur-mesure). Devis gratuit, premier échange offert.",
  keywords: [
    "tarif facturière infirmière libérale",
    "prix facturation infirmière libérale",
    "devis facturière IDEL",
    "coût externalisation facturation infirmière",
    "formule facturation infirmière",
    "tarif SESAM-Vitale infirmière",
  ],
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs | Formules de facturation pour infirmières libérales — Yes Invoice",
    description:
      "Formules Essentiel, Confort et Sérénité adaptées à votre activité. Tarif sur devis, premier échange toujours offert et sans engagement.",
    url: "https://yesinvoice.fr/tarifs",
  },
};

export default function TarifsPage() {
  return <Tarifs className="bg-forest flex-1 flex flex-col justify-center py-8 sm:py-10" />;
}
