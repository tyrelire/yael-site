"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";

const values = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Suivi 100 % personnalisé",
    desc: "Une seule interlocutrice qui connaît votre activité en profondeur. Pas de standardiste.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Réponse sous 24 heures",
    desc: "Je m'engage à répondre rapidement, sans attente, toujours en direct.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    label: "Transparence totale",
    desc: "Un rapport mensuel clair sur vos encaissements et remboursements. Zéro surprise.",
  },
];

const photoReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function About({ className }: Readonly<{ className?: string }>) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="apropos" className={`relative overflow-hidden ${className ?? "bg-white py-16 sm:py-24"}`}>
      {/* Background shapes */}
      <div className="absolute z-0 -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-sage/10 blur-3xl pointer-events-none" />
      <div className="absolute z-0 -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-sage-light/80 blur-3xl pointer-events-none" />
      <div className="absolute z-0 top-1/2 left-1/3 w-64 h-64 rounded-full bg-sage/6 blur-2xl pointer-events-none" />

      <div className="relative z-[1] max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Photo ── */}
          <motion.div
            variants={photoReveal}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[360px] lg:max-w-none">

              {/* Main card */}
              <div className="relative bg-forest rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] lg:max-h-[500px]">
                {photoError ? (
                  /* Placeholder when photo is missing */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest via-forest to-sage-dark/80">
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
                    />
                    <svg viewBox="0 0 120 160" fill="none" className="w-24 h-32 opacity-20">
                      <circle cx="60" cy="48" r="32" fill="white" />
                      <path d="M4 160C4 120 116 120 116 160" fill="white" />
                    </svg>
                    <p className="relative z-10 font-script text-mint/30 text-2xl mt-2">photo à venir</p>
                  </div>
                ) : (
                  <Image
                    src="/assets/photo.jpg"
                    alt="Yaël, facturière indépendante"
                    fill
                    sizes="(max-width: 1024px) 360px, 50vw"
                    className="object-cover object-top"
                    priority
                    onError={() => setPhotoError(true)}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/15 to-transparent pointer-events-none" />

                {/* Name tag at bottom */}
                <div className="absolute bottom-6 left-6">
                  <p className="font-display text-mint font-bold text-2xl leading-none">Yaël</p>
                  <p className="text-sage text-[11px] font-sans uppercase tracking-widest mt-1.5">Facturière indépendante</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 14, y: -14 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                viewport={vp}
                className="absolute -top-4 -right-4 bg-sage-dark rounded-2xl px-4 py-3 shadow-2xl"
              >
                <p className="font-script text-white text-xl leading-none">Yes Invoice</p>
                <p className="text-white/50 text-[9px] font-sans uppercase tracking-widest mt-1">Micro-entreprise</p>
              </motion.div>

              {/* Floating stat card — bottom left */}
              {/* <motion.div
                initial={{ opacity: 0, x: -14, y: 14 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.62, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                viewport={vp}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-4 shadow-2xl border border-sage/15"
              >
                <p className="font-display text-forest font-bold text-2xl leading-none">0 €</p>
                <p className="text-forest/45 text-xs font-sans mt-0.5">Premier échange</p>
              </motion.div> */}

            </div>
          </motion.div>

          {/* ── Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="flex flex-col pt-6 lg:pt-0"
          >
            <motion.p variants={fadeUp} className="text-sage-dark uppercase tracking-widest text-xs font-sans font-semibold mb-3">
              À propos
            </motion.p>

            <motion.h2 variants={fadeUp} className="font-display text-forest font-bold leading-[1.08] text-4xl sm:text-5xl mb-4">
              Bonjour,<br />je suis Yaël
            </motion.h2>

            <motion.div variants={fadeUp} className="w-10 h-[2px] bg-sage mb-5" />

            <motion.p variants={fadeUp} className="text-forest/75 font-sans leading-relaxed mb-5 text-sm sm:text-base">
              Facturière indépendante pour les infirmières et infirmiers libéraux — je gère
              l&apos;intégralité de votre facturation pour que vous puissiez vous concentrer sur
              vos patients.{" "}
              <strong className="text-forest font-semibold">Un suivi vraiment personnalisé,
              une seule interlocutrice, zéro paperasse pour vous.</strong>
            </motion.p>

            {/* Value strips */}
            <motion.div variants={stagger} className="flex flex-col gap-2 mb-6">
              {values.map((v) => (
                <motion.div
                  key={v.label}
                  variants={fadeUp}
                  className="group flex items-start gap-4 bg-sage-light/50 border border-sage/15 rounded-2xl px-5 py-3 hover:bg-sage-light hover:border-sage/30 transition-all duration-300 cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-mint shrink-0 mt-0.5 group-hover:bg-sage-dark transition-colors duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-display text-forest font-bold text-sm leading-none mb-1">{v.label}</p>
                    <p className="text-forest/55 font-sans text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="/contact"
              className="self-start inline-flex items-center gap-2 bg-forest text-mint font-sans font-semibold px-7 py-3.5 text-sm rounded-xl hover:bg-sage-dark transition-all duration-200"
            >
              Parlons de votre activité →
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
