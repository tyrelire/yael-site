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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
