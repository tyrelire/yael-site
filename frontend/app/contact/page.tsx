import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Premier échange gratuit pour votre facturation infirmière",
  description:
    "Contactez Yaël pour un premier échange gratuit et sans engagement sur votre facturation d'actes infirmiers. Réponse rapide par email, téléphone ou Instagram. Devis personnalisé selon votre activité.",
  keywords: [
    "contact facturière infirmière libérale",
    "devis facturation infirmière",
    "premier échange gratuit facturation IDEL",
    "contacter Yes Invoice",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Premier échange gratuit — Yes Invoice",
    description:
      "Parlons de votre activité. Premier échange offert, sans engagement. Réponse rapide — je m'engage à vous répondre sous 24h.",
    url: "https://yesinvoice.fr/contact",
  },
};

export default function ContactPage() {
  return <Contact className="bg-sage-light flex-1 min-h-[calc(100vh-68px)] flex flex-col justify-center py-8 sm:py-10" />;
}
