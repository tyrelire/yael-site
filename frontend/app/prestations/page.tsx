import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Prestations | Yes Invoice",
  description:
    "Télétransmission SESAM-Vitale, facturation des actes infirmiers, suivi des remboursements, gestion des rejets et reporting mensuel.",
};

export default function PrestationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <Services className="bg-white pt-8 sm:pt-12 pb-12 sm:pb-20 lg:pb-28" />
      </main>
      <Footer />
    </>
  );
}
