"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const photoReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <>
      {/* Grille : photo + intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

        {/* Photo */}
        <motion.div
          variants={photoReveal}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none">
            <div className="relative bg-forest rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] lg:max-h-[520px]">
              {photoError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest via-forest to-sage-dark/80">
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
                  />
                  <svg viewBox="0 0 120 160" fill="none" className="w-20 h-28 sm:w-24 sm:h-32 opacity-20">
                    <circle cx="60" cy="48" r="32" fill="white" />
                    <path d="M4 160C4 120 116 120 116 160" fill="white" />
                  </svg>
                  <p className="relative z-10 font-script text-mint/30 text-xl sm:text-2xl mt-2">photo à venir</p>
                </div>
              ) : (
                <Image
                  src="/assets/photo.jpg"
                  alt="Yaël, facturière indépendante"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 50vw"
                  className="object-cover object-top"
                  priority
                  onError={() => setPhotoError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <p className="font-display text-mint font-bold text-xl sm:text-2xl leading-none">Yaël</p>
                <p className="text-sage text-[10px] sm:text-[11px] font-sans uppercase tracking-widest mt-1 sm:mt-1.5">Facturière indépendante</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 14, y: -14 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -top-4 -right-4 bg-sage-dark rounded-2xl px-4 py-3 shadow-2xl"
            >
              <p className="font-script text-white text-xl leading-none">Yes Invoice</p>
              <p className="text-white/50 text-[9px] font-sans uppercase tracking-widest mt-1">Micro-entreprise</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.p variants={fadeUp} className="text-terra uppercase tracking-widest text-xs font-sans font-semibold mb-3">
            À propos
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-display text-forest font-bold leading-[1.08] text-3xl sm:text-4xl lg:text-5xl mb-2">
            Bonjour,<br />je suis Yaël
          </motion.h2>

          <motion.p variants={fadeUp} className="font-display text-sage-dark text-base sm:text-lg lg:text-xl font-medium mb-4 sm:mb-5 leading-snug">
            À vos côtés, pour vous simplifier la vie
          </motion.p>

          <motion.div variants={fadeUp} className="w-10 h-[2px] bg-terra mb-5 sm:mb-6" />

          <motion.p variants={fadeUp} className="text-forest font-sans text-sm sm:text-base leading-[1.85] mb-3">
            Je m&apos;appelle Yaël Darmon et j&apos;accompagne les infirmier(e)s libéraux dans la gestion de leur
            facturation, avec une approche simple :{" "}
            <strong className="font-semibold">vous soulager, vous sécuriser, et vous faire gagner du temps.</strong>
          </motion.p>

          <motion.p variants={fadeUp} className="text-forest font-sans text-sm sm:text-base leading-[1.85] mb-7 sm:mb-8">
            Parce que je sais à quel point votre métier est prenant, exigeant… et essentiel.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="/contact"
            className="self-start inline-flex items-center gap-2 bg-terra text-mint font-sans font-semibold px-6 py-3 sm:px-7 sm:py-3.5 text-sm rounded-xl hover:bg-terra-dark transition-all duration-200"
          >
            Parlons de votre activité →
          </motion.a>
        </motion.div>

      </div>

      {/* Scroll indicator — desktop uniquement */}
      <div className="relative z-10 hidden sm:flex justify-center h-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-10"
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
    </>
  );
}
