"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, vp } from "@/lib/animations";

export default function About() {
  return (
    <section id="apropos" className="bg-white py-12 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Gauche — carte logo + badge */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm">
              <div className="bg-sage-light rounded-2xl p-10 flex flex-col items-center">
                <div className="relative w-52 h-28 mb-6">
                  <Image
                    src="/assets/logo.png"
                    alt="Yes Invoice"
                    fill
                    sizes="208px"
                    className="object-contain"
                  />
                </div>
                <p className="font-script text-sage text-3xl text-center leading-relaxed">
                  La facturation<br />pensée pour vous
                </p>
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-forest rounded-xl px-5 py-3 shadow-lg">
                <p className="font-display text-mint font-bold text-sm">Micro-entreprise</p>
                <p className="text-mint/50 text-[10px] font-sans uppercase tracking-widest">Indépendante</p>
              </div>
            </div>
          </motion.div>

          {/* Droite — texte */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p className="text-sage uppercase tracking-widest text-xs font-sans font-semibold mb-4">
              Qui suis-je ?
            </p>
            <h2 className="font-display text-forest text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Bonjour, je suis Yaël
            </h2>
            <div className="w-10 h-px bg-sage mb-8" />
            <p className="text-forest/65 font-sans leading-relaxed mb-5 text-sm sm:text-base">
              Je me suis lancée en tant que{" "}
              <strong className="text-forest">facturière indépendante</strong> pour les
              infirmières et infirmiers libéraux, avec une conviction simple : vous méritez
              de vous concentrer sur vos patients, pas sur la paperasse administrative.
            </p>
            <p className="text-forest/65 font-sans leading-relaxed mb-5 text-sm sm:text-base">
              En choisissant une indépendante plutôt qu&apos;une grande société, vous bénéficiez
              d&apos;un suivi{" "}
              <strong className="text-forest">vraiment personnalisé</strong> — une seule personne
              qui connaît votre activité, vos spécificités, vos habitudes.
            </p>
            <p className="text-forest/65 font-sans leading-relaxed text-sm sm:text-base">
              Je crois profondément en une relation de confiance, transparente et humaine.
              Parce qu&apos;une bonne collaboration, ça se construit ensemble, dans la durée.
            </p>

            {/* Points forts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Indépendante", value: "Suivi 100% personnalisé" },
                { label: "Disponible", value: "Réponse rapide garantie" },
                { label: "Transparente", value: "Rapports clairs chaque mois" },
                { label: "De confiance", value: "Données confidentielles" },
              ].map((item) => (
                <div key={item.label} className="bg-mint-dark rounded-xl p-4">
                  <p className="font-display text-forest font-bold text-sm">{item.label}</p>
                  <p className="text-forest/55 text-xs font-sans mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
