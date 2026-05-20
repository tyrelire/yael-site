import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/ui/CookieBanner";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ForWho from "@/components/sections/ForWho";
import Services from "@/components/sections/Services";
import Tarifs from "@/components/sections/Tarifs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ForWho />
        <Services />
        <Tarifs />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
