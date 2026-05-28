import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yesinvoice.fr"),
  title: {
    default: "Yes Invoice — Facturière pour infirmières libérales",
    template: "%s | Yes Invoice",
  },
  description:
    "Yaël, facturière indépendante spécialisée en facturation d'actes infirmiers. Télétransmission SESAM-Vitale, suivi des remboursements, gestion des rejets, relation mutuelles. Premier échange offert, sans engagement.",
  keywords: [
    "facturière infirmière libérale",
    "facturation actes infirmiers",
    "télétransmission SESAM-Vitale",
    "gestion administrative infirmière libérale",
    "facturière IDEL",
    "facturation infirmiers libéraux",
    "déléguer facturation infirmière",
    "suivi remboursements infirmière",
    "gestion rejets sécurité sociale infirmière",
    "facturation libérale infirmière externalisée",
    "Yes Invoice",
    "Yaël facturière",
  ],
  authors: [{ name: "Yaël — Yes Invoice", url: "https://yesinvoice.fr" }],
  creator: "Yes Invoice",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Yes Invoice — Facturière pour infirmières libérales",
    description:
      "Yaël gère l'intégralité de votre facturation : télétransmission SESAM-Vitale, remboursements, rejets, mutuelles. Vous soignez, je m'occupe du reste.",
    type: "website",
    locale: "fr_FR",
    url: "https://yesinvoice.fr",
    siteName: "Yes Invoice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes Invoice — Facturière pour infirmières libérales",
    description:
      "Télétransmission SESAM-Vitale, facturation actes infirmiers, suivi remboursements. Premier échange offert.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Yes Invoice",
              description:
                "Facturière indépendante pour infirmières et infirmiers libéraux. Télétransmission SESAM-Vitale, facturation des actes infirmiers, suivi des remboursements, gestion des rejets, relation mutuelles, reporting mensuel.",
              url: "https://yesinvoice.fr",
              email: "contact@yesinvoice.fr",
              telephone: "+33600000000",
              priceRange: "Sur devis",
              currenciesAccepted: "EUR",
              paymentAccepted: "Virement bancaire",
              areaServed: { "@type": "Country", name: "France" },
              serviceType: "Facturation d'actes médicaux pour infirmières libérales",
              knowsAbout: [
                "Télétransmission SESAM-Vitale",
                "Facturation actes infirmiers",
                "Gestion administrative infirmière libérale",
                "Sécurité sociale",
                "Mutuelles complémentaires",
                "Nomenclature des actes infirmiers",
                "IDEL",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Formules de facturation",
                itemListElement: [
                  { "@type": "Offer", name: "Essentiel", description: "Télétransmission SESAM-Vitale, envoi feuilles de soins, suivi remboursements" },
                  { "@type": "Offer", name: "Confort", description: "Tout l'Essentiel + gestion rejets, relation Sécu & mutuelles, rapport mensuel" },
                  { "@type": "Offer", name: "Sérénité", description: "Tout le Confort + suivi prioritaire, bilan trimestriel, accompagnement sur-mesure" },
                ],
              },
              sameAs: ["https://www.instagram.com/yesinvoice"],
            }),
          }}
        />
        <Navbar />
        <main className="pt-[68px] flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
