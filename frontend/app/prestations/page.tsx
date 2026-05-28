import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Prestations — Facturation, SESAM-Vitale & remboursements infirmiers",
  description:
    "Six missions gérées intégralement : télétransmission SESAM-Vitale, facturation des actes infirmiers, suivi des remboursements, gestion des rejets Sécurité sociale, relation mutuelles, reporting mensuel. Aucune démarche de votre côté.",
  keywords: [
    "prestations facturière infirmière libérale",
    "télétransmission SESAM-Vitale",
    "facturation actes infirmiers",
    "suivi remboursements infirmière",
    "gestion rejets sécurité sociale",
    "relation mutuelles infirmière",
    "reporting mensuel infirmière libérale",
    "nomenclature actes infirmiers",
  ],
  alternates: { canonical: "/prestations" },
  openGraph: {
    title: "Prestations | Facturation complète pour infirmières libérales — Yes Invoice",
    description:
      "SESAM-Vitale, facturation, remboursements, rejets, mutuelles, reporting : six missions prises en charge intégralement pour que vous vous concentriez sur vos patients.",
    url: "https://yesinvoice.fr/prestations",
  },
};

export default function PrestationsPage() {
  return <Services />;
}
