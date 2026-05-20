import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Yes Invoice",
  description:
    "Parlons de votre activité. Premier échange offert, sans engagement. Email, téléphone ou Instagram — je réponds rapidement.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <Contact className="bg-white pt-8 sm:pt-12 pb-12 sm:pb-20 lg:pb-28" />
      </main>
      <Footer />
    </>
  );
}
