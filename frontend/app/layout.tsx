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
  title: "Yes Invoice | Facturière pour infirmières libérales",
  description:
    "Gestion complète de votre facturation d'actes infirmiers. Télétransmission SESAM-Vitale, Sécurité sociale, mutuelles — je m'en occupe, vous soignez.",
  keywords: [
    "facturière infirmière libérale",
    "facturation actes infirmiers",
    "télétransmission SESAM-Vitale",
    "gestion administrative infirmière libérale",
    "facturation libérale",
    "Yes Invoice",
    "facturation infirmiers libéraux",
    "sécurité sociale infirmière",
  ],
  authors: [{ name: "Yaël — Yes Invoice" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Yes Invoice | Facturière pour infirmières libérales",
    description:
      "Gestion complète de votre facturation d'actes infirmiers. Télétransmission, Sécu, mutuelles — je m'en occupe.",
    type: "website",
    locale: "fr_FR",
    siteName: "Yes Invoice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes Invoice | Facturière pour infirmières libérales",
    description:
      "Gestion complète de votre facturation d'actes infirmiers.",
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
