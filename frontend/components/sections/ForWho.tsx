"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "On se parle",
    desc: "Un premier échange gratuit pour comprendre votre situation, votre volume d'activité et vos besoins. Sans engagement.",
  },
  {
    num: "02",
    title: "On s'organise",
    desc: "Je mets en place les accès nécessaires et vous explique comment on va travailler ensemble, simplement et efficacement.",
  },
  {
    num: "03",
    title: "Je gère tout",
    desc: "Télétransmission, suivi des remboursements, rejets, mutuelles — vous n'avez plus à y penser. Je m'occupe de tout.",
  },
  {
    num: "04",
    title: "Vous avez un bilan",
    desc: "Chaque mois, je vous transmets un rapport clair sur votre activité, vos remboursements et vos encaissements.",
  },
];

export default function ForWho({ className }: Readonly<{ className?: string }>) {
  return (
    <section className={`relative overflow-hidden ${className ?? "bg-sage-light py-10 sm:py-14 lg:py-20"}`}>
      <div className="absolute z-0 -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-white/60 blur-3xl pointer-events-none" />
      <div className="absolute z-0 -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-sage/20 blur-3xl pointer-events-none" />
      <div className="absolute z-0 top-1/3 left-1/2 w-64 h-64 rounded-full bg-white/40 blur-2xl pointer-events-none" />
      <div className="relative z-[1] max-w-6xl mx-auto px-5 sm:px-8">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-forest/60 uppercase tracking-widest text-xs font-sans font-semibold mb-4">
            Simple &amp; efficace
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-forest text-4xl sm:text-5xl font-bold">
            Comment ça marche ?
          </motion.h2>
          <motion.div variants={fadeUp} className="w-10 h-px bg-sage mx-auto mt-6" />
        </motion.div>

        {/* Étapes */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative"
        >
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-sage/25" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mb-5 relative z-10 shadow-lg">
                <span className="font-display text-sage font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="font-display text-forest font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-forest/75 font-sans text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center mt-14"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-terra text-mint font-sans font-semibold px-8 py-4 text-sm rounded-xl hover:bg-terra-dark transition-all duration-200"
          >
            Commencer par un échange gratuit →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
