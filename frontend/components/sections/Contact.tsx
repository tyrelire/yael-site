"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, vp } from "@/lib/animations";

export default function Contact({ className }: Readonly<{ className?: string }>) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <section id="contact" className={`relative overflow-hidden ${className ?? "bg-sage-light py-16 sm:py-24"}`}>
      <div className="absolute z-0 -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/50 blur-3xl pointer-events-none" />
      <div className="absolute z-0 -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-sage/15 blur-3xl pointer-events-none" />

      <div className="relative z-[1] w-full max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

        {/* Colonne gauche — info */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="flex flex-col"
        >
          <p className="text-sage-dark uppercase tracking-widest text-xs font-sans font-semibold mb-5">
            Contact
          </p>
          <h1 className="font-display text-forest text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Parlons de<br />votre activité
          </h1>
          <p className="text-forest/70 font-sans text-base leading-relaxed mb-6 sm:mb-10 max-w-sm">
            Premier échange offert, sans engagement. Je réponds rapidement.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:contact@yesinvoice.fr"
              className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-200"
            >
              <div className="w-11 h-11 bg-forest rounded-xl flex items-center justify-center shrink-0 text-mint group-hover:bg-sage-dark transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="font-display text-forest font-bold text-base leading-none mb-1">Email</p>
                <p className="text-forest/60 font-sans text-sm">contact@yesinvoice.fr</p>
              </div>
            </a>

            <div className="w-full h-px bg-forest/8" />

            <a
              href="tel:0600000000"
              className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-200"
            >
              <div className="w-11 h-11 bg-forest rounded-xl flex items-center justify-center shrink-0 text-mint group-hover:bg-sage-dark transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-forest font-bold text-base leading-none mb-1">Téléphone</p>
                <p className="text-forest/60 font-sans text-sm">06 00 00 00 00</p>
              </div>
            </a>

            <div className="w-full h-px bg-forest/8" />

            <a
              href="https://instagram.com/yesinvoice"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-200"
            >
              <div className="w-11 h-11 bg-forest rounded-xl flex items-center justify-center shrink-0 text-mint group-hover:bg-sage-dark transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <p className="font-display text-forest font-bold text-base leading-none mb-1">Instagram</p>
                <p className="text-forest/60 font-sans text-sm">@yesinvoice</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Colonne droite — formulaire */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {status === "success" ? (
            <div className="bg-white rounded-2xl px-8 py-16 text-center shadow-lg">
              <p className="font-script text-sage-dark text-5xl mb-3">Merci !</p>
              <p className="text-forest/70 font-sans text-base">Message envoyé. Je vous réponds très vite.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-forest/70 font-sans text-xs uppercase tracking-wider font-semibold">Nom</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Votre nom"
                    className="bg-sage-light/50 border border-sage/20 rounded-xl px-4 py-3.5 text-base font-sans text-forest placeholder:text-forest/30 focus:outline-none focus:border-sage focus:bg-white transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-forest/70 font-sans text-xs uppercase tracking-wider font-semibold">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.fr"
                    className="bg-sage-light/50 border border-sage/20 rounded-xl px-4 py-3.5 text-base font-sans text-forest placeholder:text-forest/30 focus:outline-none focus:border-sage focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-forest/70 font-sans text-xs uppercase tracking-wider font-semibold">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre situation en quelques mots..."
                  className="bg-sage-light/50 border border-sage/20 rounded-xl px-4 py-3.5 text-base font-sans text-forest placeholder:text-forest/30 focus:outline-none focus:border-sage focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm font-sans">Une erreur est survenue. Réessayez ou écrivez-moi directement.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-forest text-mint font-sans font-bold px-8 py-4 text-base rounded-xl hover:bg-sage-dark transition-all duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "Envoi…" : "Envoyer →"}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
