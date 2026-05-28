import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Yes Invoice — Facturière pour infirmières libérales | SESAM-Vitale & facturation",
  description:
    "Yaël, facturière indépendante pour infirmières libérales. Télétransmission SESAM-Vitale, facturation des actes infirmiers, suivi des remboursements Sécurité sociale et mutuelles. Premier échange gratuit, sans engagement.",
  keywords: [
    "facturière infirmière libérale",
    "facturation infirmière libérale",
    "télétransmission SESAM-Vitale infirmière",
    "déléguer facturation infirmière libérale",
    "facturière IDEL",
    "Yes Invoice",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Yes Invoice — Facturière pour infirmières libérales",
    description:
      "Yaël gère toute votre facturation : SESAM-Vitale, remboursements, rejets, mutuelles. Vous soignez, je m'occupe du reste. Premier échange offert.",
    url: "https://yesinvoice.fr",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'une facturière pour infirmière libérale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une facturière pour infirmière libérale gère l'intégralité de la facturation des actes infirmiers à la place de l'infirmière : télétransmission SESAM-Vitale, envoi des feuilles de soins, suivi des remboursements Sécurité sociale et mutuelles, et traitement des rejets.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte une facturière pour infirmière libérale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chez Yes Invoice, le tarif est personnalisé en fonction de votre volume d'activité. Trois formules sont disponibles : Essentiel, Confort et Sérénité. Le premier échange est toujours offert et sans engagement pour établir un devis adapté.",
      },
    },
    {
      "@type": "Question",
      name: "Comment déléguer sa facturation en tant qu'infirmière libérale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il suffit de contacter Yes Invoice pour un premier échange gratuit. Yaël met ensuite en place les accès nécessaires et prend en charge toute la facturation : télétransmission, suivi des remboursements, gestion des rejets et un reporting mensuel clair.",
      },
    },
    {
      "@type": "Question",
      name: "Yes Invoice intervient-elle sur toute la France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Yes Invoice intervient à distance pour toutes les infirmières et infirmiers libéraux en France. Tout se fait en ligne, sans déplacement nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que la télétransmission SESAM-Vitale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SESAM-Vitale est le système de télétransmission électronique des feuilles de soins aux caisses d'Assurance Maladie. Yes Invoice gère cette télétransmission pour les infirmières libérales, assurant que chaque acte est correctement transmis et remboursé.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
    </>
  );
}
