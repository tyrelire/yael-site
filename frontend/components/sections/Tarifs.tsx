"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";

const plans = [
  {
    name: "Essentiel",
    desc: "Pour démarrer sereinement",
    features: [
      "Télétransmission SESAM-Vitale",
      "Envoi des feuilles de soins",
      "Suivi des remboursements",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
  {
    name: "Confort",
    desc: "La formule la plus complète",
    features: [
      "Tout l'Essentiel",
      "Gestion des rejets et litiges",
      "Relation Sécurité sociale & mutuelles",
      "Rapport mensuel détaillé",
    ],
    cta: "Demander un devis",
    highlight: true,
  },
  {
    name: "Sérénité",
    desc: "Un accompagnement sur-mesure",
    features: [
      "Tout le Confort",
      "Suivi prioritaire et réactif",
      "Bilan trimestriel complet",
      "Accompagnement personnalisé",
    ],
    cta: "Me contacter",
    highlight: false,
  },
];

export default function Tarifs({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="tarifs" className={`relative overflow-hidden ${className ?? "bg-forest py-12 sm:py-20 lg:py-28"}`}>
      {/* Blobs forts pour que le glass soit visible */}
      <div className="absolute z-0 -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sage/25 blur-3xl pointer-events-none" />
      <div className="absolute z-0 -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-sage-dark/20 blur-3xl pointer-events-none" />
      <div className="absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-sage/12 blur-2xl pointer-events-none" />
      {/* Pattern points subtil */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-[1] max-w-5xl mx-auto px-5 sm:px-8">

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="flex items-baseline justify-between mb-7 sm:mb-8">
          <motion.span variants={fadeUp} className="text-sage font-sans text-xs uppercase tracking-[0.28em] font-semibold">
            Formules
          </motion.span>
          <motion.span variants={fadeUp} className="text-white/40 font-sans text-xs">
            Tarif sur devis · Premier échange offert
          </motion.span>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-white border border-white/80 shadow-2xl ring-1 ring-sage/20 sm:scale-[1.02]"
                  : "backdrop-blur-sm bg-white/8 border border-white/10 hover:bg-white/12 hover:border-white/18"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-sage-dark text-white text-[10px] font-sans uppercase tracking-widest px-3 py-1 rounded-full mb-3 self-start">
                  Populaire
                </span>
              )}

              <div className="mb-4">
                <p className={`font-display font-bold text-xl mb-0.5 ${plan.highlight ? "text-forest" : "text-white"}`}>
                  {plan.name}
                </p>
                <p className={`text-xs font-sans ${plan.highlight ? "text-forest/60" : "text-white/60"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2 flex-1 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-sans">
                    <span className={`mt-0.5 shrink-0 font-semibold ${plan.highlight ? "text-sage-dark" : "text-sage"}`}>✓</span>
                    <span className={plan.highlight ? "text-forest/85" : "text-white/90"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`block w-full text-center font-sans font-semibold py-3 text-sm rounded-xl transition-all duration-200 ${
                  plan.highlight
                    ? "bg-forest text-mint hover:bg-sage-dark"
                    : "bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
