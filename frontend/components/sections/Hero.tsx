"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-mint overflow-hidden">
      {/* Formes déco — fond riche */}
      <div className="absolute z-0 -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-sage/15 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute z-0 -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-sage/12 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute z-0 top-1/3 left-1/4 w-80 h-80 rounded-full bg-sage/10 blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute z-0 bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-sage-dark/10 blur-2xl pointer-events-none" aria-hidden="true" />

      {/* Contenu principal */}
      <div className="relative z-[1] flex-1 flex items-center pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 py-6 sm:py-12">

          {/* Colonne gauche — texte (3/5) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-sage-dark font-sans text-xs uppercase tracking-[0.28em] font-semibold mb-6"
            >
              <span className="w-8 h-px bg-sage-dark"></span>
              <span>Facturière indépendante · Micro-entreprise</span>
            </motion.span>

            <motion.h1 variants={fadeUp} className="font-display text-forest font-bold leading-tight">
              <span className="block text-[clamp(3rem,4.5vw,4.8rem)]">Vous soignez.</span>
              <span className="font-script text-sage-dark block mt-2 text-[clamp(2.4rem,3.8vw,4rem)]">
                Je m&apos;occupe du reste.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-forest/82 font-sans text-base leading-relaxed mt-6 max-w-lg"
            >
              Je gère l&apos;intégralité de votre facturation d&apos;actes infirmiers : télétransmission
              SESAM-Vitale, relations avec la Sécurité sociale et les mutuelles, suivi des
              remboursements.{" "}
              <strong className="text-forest font-semibold">
                En indépendante, je vous offre un suivi vraiment personnalisé.
              </strong>
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col sm:flex-row gap-3 mt-8">
              <motion.a
                variants={fadeUp}
                href="/contact"
                className="bg-terra text-mint font-sans font-semibold px-7 py-3.5 text-sm text-center hover:bg-terra-dark transition-all duration-200 w-full sm:w-auto rounded-lg"
              >
                Me contacter →
              </motion.a>
              <motion.a
                variants={fadeUp}
                href="/prestations"
                className="border-2 border-forest/35 text-forest font-sans font-medium px-7 py-3.5 text-sm text-center hover:border-sage hover:text-sage transition-all duration-200 w-full sm:w-auto rounded-lg"
              >
                Mes prestations
              </motion.a>
            </motion.div>

            {/* Badges */}
            <motion.div variants={stagger} className="flex flex-wrap gap-2.5 mt-10">
              {["Télétransmission SESAM-Vitale", "Sécurité sociale & mutuelles", "Suivi mensuel"].map((point) => (
                <motion.span
                  key={point}
                  variants={fadeUp}
                  className="flex items-center gap-2 bg-white border border-sage/30 px-4 py-2 text-xs font-sans text-forest/85 rounded-full shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  {point}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne droite — carte (2/5), desktop uniquement */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:col-span-2 flex-col justify-center"
          >
            <div
              className="rounded-2xl p-8 text-mint relative overflow-hidden bg-forest"
            >
              {/* Pattern dots */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />

              <p className="text-sage text-xs font-sans uppercase tracking-widest mb-6 font-semibold relative z-10">
                Ce que vous gagnez
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  { title: "Du temps libre", desc: "Concentrez-vous sur vos patients, pas sur la paperasse administrative." },
                  { title: "De la sérénité", desc: "Aucun oubli, aucun rejet non traité, zéro stress côté facturation." },
                  { title: "De la visibilité", desc: "Un rapport mensuel clair sur vos revenus et remboursements." },
                  { title: "Un vrai contact humain", desc: "Une personne dédiée, disponible, qui connaît votre activité." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 border-b border-mint/8 pb-5 last:border-0 last:pb-0">
                    <span className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    </span>
                    <div>
                      <p className="font-display text-mint font-semibold text-sm">{item.title}</p>
                      <p className="text-mint/55 font-sans text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-mint/10 relative z-10">
                <p className="font-script text-sage text-2xl">Yes Invoice</p>
                <p className="text-mint/35 text-[10px] font-sans uppercase tracking-widest mt-1">
                  La facturation pensée pour vous
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
