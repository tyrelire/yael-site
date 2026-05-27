import type { Metadata } from "next";
import Tarifs from "@/components/sections/Tarifs";

export const metadata: Metadata = {
  title: "Tarifs | Yes Invoice",
  description:
    "Des tarifs personnalisés selon votre volume d'activité. Formules Essentiel, Confort et Sérénité — premier échange offert, sans engagement.",
};

export default function TarifsPage() {
  return <Tarifs className="bg-forest flex-1 min-h-screen flex flex-col justify-center py-6 sm:py-10" />;
}
