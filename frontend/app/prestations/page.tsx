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
        <Services />
      </main>
      <Footer />
    </>
  );
}
