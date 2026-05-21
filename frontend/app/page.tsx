import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/ui/CookieBanner";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
