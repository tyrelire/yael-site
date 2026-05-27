import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Yes Invoice",
  description:
    "Parlons de votre activité. Premier échange offert, sans engagement. Email, téléphone ou Instagram — je réponds rapidement.",
};

export default function ContactPage() {
  return <Contact className="bg-sage-light flex-1 min-h-screen flex flex-col justify-center py-6 sm:py-10" />;
}
