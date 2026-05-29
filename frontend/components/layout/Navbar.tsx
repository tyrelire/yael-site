"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-sage/20 shadow-[0_4px_24px_rgba(26,43,26,0.08)]"
            : "bg-white/82 backdrop-blur-lg border-b border-sage/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" aria-label="Yes Invoice — accueil" className="flex items-center shrink-0 z-10 select-none">
            <span className="font-script text-sage text-[2rem] leading-none" aria-hidden="true">Y</span>
            <span className="font-display text-forest text-[1.25rem] font-bold leading-none -ml-[1px]" aria-hidden="true">es</span>
            <span className="ml-2 font-sans text-[11px] text-forest/70 uppercase tracking-[0.2em] font-semibold self-end mb-[3px]" aria-hidden="true">Invoice</span>
          </a>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative text-[0.9375rem] font-sans font-medium text-forest/80 hover:text-forest transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-sage origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Droite : CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex shrink-0 text-sm font-sans font-semibold bg-terra text-mint px-5 py-2 rounded-xl hover:bg-terra-dark transition-all duration-200"
            >
              Me contacter →
            </a>

            {/* Burger — mobile uniquement */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="md:hidden relative w-11 h-11 flex flex-col justify-center items-center gap-[5px] shrink-0"
            >
              <span className={`block h-[1.5px] bg-forest transition-all duration-300 origin-center ${open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
              <span className={`block h-[1.5px] bg-forest transition-all duration-300 ${open ? "w-0 opacity-0" : "w-5 opacity-100"}`} />
              <span className={`block h-[1.5px] bg-forest transition-all duration-300 origin-center ${open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Fermer le menu"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 w-full bg-forest/20 backdrop-blur-sm transition-opacity duration-300 md:hidden cursor-default ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer mobile */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[min(320px,85vw)] flex flex-col bg-white/95 backdrop-blur-2xl border-l border-sage/10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* En-tête du drawer */}
        <div className="h-[68px] flex items-center justify-between px-6 border-b border-sage/10">
          <a href="/" aria-label="Yes Invoice — accueil" className="flex items-center select-none">
            <span className="font-script text-sage text-[1.75rem] leading-none" aria-hidden="true">Y</span>
            <span className="font-display text-forest text-[1.1rem] font-bold leading-none -ml-[1px]" aria-hidden="true">es</span>
            <span className="ml-1.5 font-sans text-[11px] text-forest/70 uppercase tracking-[0.18em] font-semibold self-end mb-[2px]" aria-hidden="true">Invoice</span>
          </a>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="w-8 h-8 flex items-center justify-center text-forest/40 hover:text-forest transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>

        {/* Liens */}
        <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 border-b border-forest/8 text-forest font-display font-semibold text-lg tracking-wide hover:text-sage transition-colors duration-200 group"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {label}
              <span className="text-sage/40 group-hover:text-sage transition-colors text-base" aria-hidden="true">→</span>
            </a>
          ))}
        </nav>

        {/* CTA bas du drawer */}
        <div className="px-6 pb-10 pt-6">
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-terra text-mint font-sans font-semibold py-3.5 text-sm rounded-xl hover:bg-terra-dark transition-all duration-200"
          >
            Me contacter →
          </a>
        </div>
      </div>
    </>
  );
}
