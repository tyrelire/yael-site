"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 sm:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-12 sm:mb-16">
          <motion.p variants={fadeUp} className="text-sage uppercase tracking-widest text-xs font-sans font-semibold mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-forest text-3xl sm:text-4xl font-bold mb-4">
            Parlons de votre activité
          </motion.h2>
          <motion.div variants={fadeUp} className="w-10 h-px bg-sage mx-auto mb-8" />
          <motion.p variants={fadeUp} className="text-forest/60 font-sans max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Un échange de quelques minutes suffit pour savoir si je peux vous simplifier
            la vie. La première consultation est offerte, sans aucun engagement.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto"
        >
          {/* Email */}
          <motion.a
            variants={fadeUp}
            href="mailto:contact@yesinvoice.fr"
            className="flex flex-col items-center text-center bg-mint border border-sage/10 rounded-2xl p-7 hover:border-sage/35 hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <p className="font-display text-forest font-bold text-sm mb-1">Email</p>
            <p className="text-sage text-xs font-sans break-all">contact@yesinvoice.fr</p>
          </motion.a>

          {/* Téléphone */}
          <motion.a
            variants={fadeUp}
            href="tel:0600000000"
            className="flex flex-col items-center text-center bg-mint border border-sage/10 rounded-2xl p-7 hover:border-sage/35 hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <p className="font-display text-forest font-bold text-sm mb-1">Téléphone</p>
            <p className="text-sage text-xs font-sans">06 00 00 00 00</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            variants={fadeUp}
            href="https://instagram.com/yesinvoice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-mint border border-sage/10 rounded-2xl p-7 hover:border-sage/35 hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <p className="font-display text-forest font-bold text-sm mb-1">Instagram</p>
            <p className="text-sage text-xs font-sans">@yesinvoice</p>
          </motion.a>
        </motion.div>

        {/* Note de bas */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center text-forest/35 text-xs font-sans mt-10 font-script text-base"
        >
          &ldquo;Un premier échange suffit souvent pour savoir si on est faits pour travailler ensemble.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
