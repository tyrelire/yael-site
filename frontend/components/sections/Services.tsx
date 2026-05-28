"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, vp } from "@/lib/animations";

const services = [
  {
    num: "01",
    title: "Télétransmission SESAM-Vitale",
    tagline: "Aucune démarche de votre côté",
    desc: "J'envoie électroniquement l'intégralité de vos feuilles de soins à l'Assurance Maladie dès le jour de la visite. Chaque acte est transmis correctement codé — vous n'avez rien à faire.",
    examples: [
      "FSE envoyées le jour même de chaque visite",
      "Vérification des cartes Vitale et des droits avant envoi",
      "Accusés de réception contrôlés chaque jour",
      "Retransmission immédiate si refus technique ou anomalie",
    ],
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Facturation des actes infirmiers",
    tagline: "Zéro erreur de nomenclature",
    desc: "Je crée et envoie toute votre facturation en conformité avec la nomenclature des actes infirmiers (NGAP). AMI, AIS, DI, IFI, MAD — chaque acte est tarifé et codé correctement.",
    examples: [
      "AMI, AIS, DI, IFI et MAD tarifés sans erreur",
      "Vérification des associations d'actes autorisées",
      "Contrôle des prescriptions médicales reçues",
      "Mise à jour selon les évolutions de la nomenclature",
    ],
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Suivi des remboursements",
    tagline: "Chaque euro réclamé, chaque euro suivi",
    desc: "Je vérifie chaque virement de l'Assurance Maladie et relance immédiatement en cas de manque ou d'anomalie. Vous êtes informée dès qu'un problème est détecté.",
    examples: [
      "Rapprochement de chaque virement Sécurité sociale",
      "Détection immédiate de toute anomalie de paiement",
      "Relance systématique si non-remboursement sous 15 j",
      "Historique complet et consultable de vos paiements",
    ],
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Gestion des rejets",
    tagline: "Aucun rejet laissé sans réponse",
    desc: "Chaque rejet de l'Assurance Maladie est analysé, corrigé et renvoyé. Je traite la cause précise pour que l'acte finisse toujours par être remboursé — sans exception.",
    examples: [
      "Analyse de la cause exacte de chaque rejet reçu",
      "Correction et renvoi de la facture sous 48 heures",
      "Suivi jusqu'au remboursement définitif obtenu",
      "Zéro rejet abandonné ou perdu en cours de traitement",
    ],
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Relation avec les mutuelles",
    tagline: "Votre tiers payant sans friction",
    desc: "Je gère toutes les démarches auprès des organismes complémentaires : déclarations, prises en charge, relances. Vous n'avez plus à remplir le moindre formulaire mutuelle.",
    examples: [
      "Déclarations de prise en charge AMC auprès des mutuelles",
      "Suivi des remboursements complémentaires attendus",
      "Gestion directe du tiers payant mutuelles",
      "Relance si absence ou retard de règlement",
    ],
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Reporting mensuel",
    tagline: "Votre activité, en un coup d'œil",
    desc: "Chaque mois, je vous transmets un bilan clair : actes facturés, remboursements perçus, impayés en cours. Vous savez exactement où vous en êtes, sans effort de votre part.",
    examples: [
      "Récapitulatif complet des actes facturés dans le mois",
      "Montant total des remboursements perçus",
      "Tableau des rejets et impayés en cours de traitement",
      "Comparatif mensuel pour suivre l'évolution de l'activité",
    ],
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

const sectionBgs = ["bg-mint", "bg-white", "bg-sage-light/40", "bg-white", "bg-mint", "bg-sage-light/40"];

export default function Services({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={className}>

      {/* ── En-tête ─────────────────────────────────────── */}
      <section className="bg-forest py-16 pb-28 sm:py-24 relative overflow-hidden">
        <div className="absolute z-0 -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-sage/20 blur-3xl pointer-events-none" />
        <div className="absolute z-0 -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-sage-dark/25 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="relative z-[1] max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.p variants={fadeUp} className="text-sage font-sans text-xs uppercase tracking-[0.28em] font-semibold mb-5">
            Mes prestations
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-mint text-4xl sm:text-6xl font-bold leading-tight mb-6">
            Ce que je prends<br />en charge pour vous
          </motion.h1>
          <motion.p variants={fadeUp} className="text-mint/65 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Six missions clés de votre facturation, gérées intégralement.
            Vous vous concentrez sur vos patients — je m&apos;occupe de tout le reste.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-6 mt-20 sm:mt-12 max-w-lg mx-auto">
            {[
              { value: "J+0",   label: "FSE envoyées le jour même de la visite" },
              { value: "< 48h", label: "Rejets corrigés et renvoyés sous 48 heures" },
              { value: "100%",  label: "Remboursements suivis jusqu'au bout" },
            ].map((stat) => (
              <motion.div key={stat.value} variants={fadeUp} className="text-center">
                <p className="font-display text-sage text-3xl sm:text-4xl font-bold leading-none">{stat.value}</p>
                <div className="w-6 h-px bg-sage/30 mx-auto my-2" />
                <p className="text-mint/45 font-sans text-xs leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </section>

      {/* Flèche scroll — desktop uniquement, dans la zone claire en dessous */}
      <div className="relative z-10 hidden sm:flex justify-center h-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-5"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
              <polyline points="3 6 8 11 13 6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Services alternés ────────────────────────────── */}
      {services.map((service, i) => {
        const isEven  = i % 2 === 1;
        const sectionBg = sectionBgs[i];
        const textAnim  = isEven ? fadeRight : fadeLeft;
        const cardAnim  = isEven ? fadeLeft  : fadeRight;

        return (
          <section key={service.num} className={`${sectionBg} py-14 sm:py-20 relative overflow-hidden`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Carte visuelle */}
                <motion.div variants={cardAnim} initial="hidden" whileInView="visible" viewport={vp}>
                  <div className="bg-forest rounded-3xl p-10 sm:p-12 flex flex-col gap-6 relative overflow-hidden min-h-[320px] sm:min-h-[380px] justify-between">
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isEven ? "bg-sage/25 text-sage" : "bg-white/10 text-sage"}`}>
                        {service.icon}
                      </div>
                      <p className="font-display text-mint/30 text-7xl font-bold leading-none select-none">
                        {service.num}
                      </p>
                    </div>
                    <div className="relative z-10">
                      <p className="font-script text-sage text-2xl sm:text-3xl leading-tight mb-2">
                        {service.tagline}
                      </p>
                      <div className="w-8 h-px bg-sage/40" />
                    </div>
                  </div>
                </motion.div>

                {/* Texte + exemples */}
                <motion.div variants={textAnim} initial="hidden" whileInView="visible" viewport={vp} className="flex flex-col">
                  <p className="text-sage-dark font-sans text-xs uppercase tracking-[0.22em] font-semibold mb-4">
                    Prestation {service.num}
                  </p>
                  <h2 className="font-display text-forest text-3xl sm:text-4xl font-bold leading-tight mb-5">
                    {service.title}
                  </h2>
                  <p className="text-forest/70 font-sans text-base leading-relaxed mb-7">
                    {service.desc}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        </span>
                        <span className="text-forest/80 font-sans text-sm leading-relaxed">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA final ───────────────────────────────────── */}
      <section className="bg-forest py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute z-0 inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="relative z-[1] max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.p variants={fadeUp} className="font-script text-sage text-4xl sm:text-5xl mb-4">
            Prêt·e à déléguer ?
          </motion.p>
          <motion.p variants={fadeUp} className="text-mint/60 font-sans text-base leading-relaxed mb-8 max-w-md mx-auto">
            Premier échange offert, sans engagement. Je vous explique comment on peut travailler ensemble simplement.
          </motion.p>
          <motion.a variants={fadeUp} href="/contact"
            className="inline-flex items-center gap-2 bg-sage text-forest font-sans font-bold px-8 py-4 text-base rounded-xl hover:bg-sage-light transition-all duration-200">
            Me contacter →
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}
