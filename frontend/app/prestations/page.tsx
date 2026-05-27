import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Prestations | Yes Invoice",
  description:
    "Télétransmission SESAM-Vitale, facturation des actes infirmiers, suivi des remboursements, gestion des rejets et reporting mensuel.",
};

export default function PrestationsPage() {
  return <Services className="bg-mint flex-1 min-h-screen flex flex-col justify-center pt-4 sm:pt-6 pb-10 sm:pb-14" />;
}
