import Hero from "./about/Hero";
import Sections from "./about/Sections";

export default function About({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="apropos" className={`relative overflow-hidden ${className ?? "bg-white pt-12 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-24"}`}>
      <div className="absolute z-0 -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-sage/10 blur-3xl pointer-events-none" />
      <div className="absolute z-0 -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-sage-light/80 blur-3xl pointer-events-none" />

      <div className="relative z-[1] max-w-6xl mx-auto px-4 sm:px-8">
        <Hero />
        <Sections />
      </div>
    </section>
  );
}
