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

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-forest py-12 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-12 sm:mb-16">
          <motion.p variants={fadeUp} className="text-sage uppercase tracking-widest text-xs font-sans font-semibold mb-4">
            Tarifs
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-mint text-3xl sm:text-4xl font-bold">
            Des tarifs adaptés à votre activité
          </motion.h2>
          <motion.div variants={fadeUp} className="w-10 h-px bg-sage mx-auto mt-6 mb-8" />
          <motion.p variants={fadeUp} className="text-mint/80 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Chaque infirmière libérale a une activité unique. C&apos;est pourquoi je propose des
            tarifs personnalisés, adaptés à votre volume d&apos;actes et à vos besoins réels.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-sage ring-2 ring-sage/60 shadow-xl"
                  : "bg-mint/6 border border-mint/10 hover:bg-mint/10"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-white/20 text-white text-[10px] font-sans uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start">
                  Populaire
                </span>
              )}

              <div className="mb-6">
                <p className={`font-display font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-mint"}`}>
                  {plan.name}
                </p>
                <p className={`text-sm font-sans ${plan.highlight ? "text-white/75" : "text-mint/80"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-sans">
                    <span className={`mt-0.5 shrink-0 font-bold ${plan.highlight ? "text-white" : "text-sage"}`}>✓</span>
                    <span className={plan.highlight ? "text-white/90" : "text-mint/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className={`text-xs font-sans mb-3 ${plan.highlight ? "text-white/55" : "text-mint/60"}`}>
                  Tarif sur devis personnalisé
                </p>
                <a
                  href="#contact"
                  className={`block w-full text-center font-sans font-semibold py-3 text-sm rounded-xl transition-all duration-200 ${
                    plan.highlight
                      ? "bg-white text-sage hover:bg-mint"
                      : "border border-mint/20 text-mint hover:bg-mint/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="text-center text-mint/60 text-xs font-sans mt-10"
        >
          Premier échange offert · Sans engagement · Tarifs adaptés à votre volume d&apos;activité
        </motion.p>

      </div>
    </section>
  );
}
