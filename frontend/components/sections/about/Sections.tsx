"use client";

import { motion } from "framer-motion";

const workValues = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    label: "Transparence",
    desc: "Une relation de confiance basée sur la clarté totale : vous savez toujours où en est votre facturation.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    label: "Rigueur",
    desc: "Chaque détail compte. Je ne laisse rien au hasard dans le suivi de votre activité.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Réactivité",
    desc: "Je m'engage à vous répondre rapidement, sans attente, toujours en direct.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    label: "Disponibilité",
    desc: "Et une vraie disponibilité — je suis là quand vous en avez besoin.",
  },
];

const parcours = [
  "Gestion locative",
  "Responsable de projets événementiels",
  "Assistante de direction",
];

const ease = [0.22, 1, 0.36, 1] as const;
const fadeIn = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, ease }, viewport: { once: true, amount: 0.1 } } as const;

export default function Sections() {
  return (
    <div className="mt-16 sm:mt-28 lg:mt-40 space-y-4 sm:space-y-6">

      {/* Ma façon de travailler */}
      <motion.div
        {...fadeIn}
        className="bg-forest rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
      >
        <p className="text-sage uppercase tracking-widest text-[10px] font-sans font-semibold mb-3 sm:mb-4">
          Ma façon de travailler
        </p>
        <p className="text-mint font-sans text-sm sm:text-base leading-[1.85] mb-2">
          Je sais que déléguer sa facturation n&apos;est pas anodin.
        </p>
        <p className="text-mint/85 font-sans text-sm sm:text-base leading-[1.85] mb-5 sm:mb-7">
          C&apos;est pourquoi je mets un point d&apos;honneur à instaurer une relation de confiance, basée sur :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-7">
          {workValues.map((v) => (
            <div
              key={v.label}
              className="flex items-start gap-3 sm:gap-4 bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sage-dark flex items-center justify-center text-mint shrink-0 mt-0.5">
                {v.icon}
              </div>
              <div>
                <p className="font-display text-mint font-bold text-sm leading-none mb-1 sm:mb-1.5">{v.label}</p>
                <p className="text-mint/70 font-sans text-xs sm:text-[0.8125rem] leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sage font-sans text-sm sm:text-base leading-[1.85]">
          Mon rôle n&apos;est pas simplement de &laquo;&nbsp;faire votre facturation&nbsp;&raquo; — c&apos;est de vous
          simplifier la vie et de créer un lien, une vraie collaboration.
        </p>
      </motion.div>

      {/* Parcours + Reconversion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

        <motion.div
          {...fadeIn}
          className="bg-sage-light/50 border border-sage/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-display text-forest font-bold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-5 leading-snug">
            Un parcours construit sur<br />la rigueur et l&apos;humain
          </h3>
          <p className="text-forest font-sans text-sm sm:text-base leading-[1.8] mb-3 sm:mb-4">
            Avant de me spécialiser dans la facturation IDEL, j&apos;ai travaillé pendant de nombreuses
            années dans des postes où l&apos;organisation, la précision et la gestion étaient au cœur du quotidien.
          </p>
          <ul className="flex flex-col gap-2 sm:gap-2.5 mb-3 sm:mb-4">
            {parcours.map((item) => (
              <li key={item} className="flex items-center gap-3 text-forest font-sans text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-terra shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-forest font-sans text-sm sm:text-base leading-[1.8] mb-2 sm:mb-3">
            Autant d&apos;expériences qui m&apos;ont appris à gérer des situations complexes, à anticiper, et
            surtout à ne jamais laisser un détail au hasard.
          </p>
          <p className="text-forest font-sans text-sm sm:text-base leading-[1.8]">
            Mais au-delà des compétences techniques, j&apos;ai toujours accordé une grande importance à la
            relation humaine : écouter, comprendre, accompagner.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="bg-sage-light/50 border border-sage/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-display text-forest font-bold text-lg sm:text-xl lg:text-2xl mb-2 leading-snug">
            Une reconversion tournée<br />vers le secteur de la santé
          </h3>
          <p className="text-terra font-sans text-sm font-semibold mb-4 sm:mb-5">
            Pourquoi devenir facturière ?
          </p>
          <p className="text-forest font-sans text-sm sm:text-base leading-[1.8] mb-2 sm:mb-3">
            Après une vie de salariat, j&apos;ai ressenti le besoin de gagner en autonomie et de relever un
            nouveau défi en me lançant dans l&apos;entrepreneuriat.
          </p>
          <p className="text-forest font-sans text-sm sm:text-base leading-[1.8] mb-2 sm:mb-3">
            Une amie infirmière m&apos;a également sensibilisée à la charge administrative qui pèse sur les
            soignants, au détriment de la pratique de leur métier. J&apos;ai alors souhaité leur apporter une
            solution concrète en les aidant à se recentrer sur les soins auprès des patients.
          </p>
          <p className="text-forest font-sans text-sm sm:text-base leading-[1.8] mb-5 sm:mb-6">
            C&apos;est dans ce contexte que je me suis naturellement tournée vers le domaine de la santé, en
            me formant à la facturation des infirmiers libéraux, notamment via le cursus du Paon-théon.
            Je participe ainsi, à mon niveau, à aider les infirmier(e)s dans leur quotidien.
          </p>
          <div className="bg-white border border-sage/25 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4">
            <p className="text-terra font-sans text-[10px] uppercase tracking-widest font-semibold mb-1 sm:mb-1.5">Formation</p>
            <p className="text-forest font-display font-bold text-sm sm:text-base">Paon-théon</p>
            <p className="text-forest/70 font-sans text-xs sm:text-sm mt-0.5">Formation certifiée Qualiopi — Facturation IDEL</p>
          </div>
        </motion.div>

      </div>

      {/* Collaboration sur mesure */}
      <motion.div
        {...fadeIn}
        className="bg-sage-light/50 border border-sage/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 sm:gap-6 md:gap-12 items-start">
          <h3 className="font-display text-forest font-bold text-lg sm:text-xl lg:text-2xl leading-snug">
            Une collaboration<br />sur mesure
          </h3>
          <div>
            <p className="text-forest font-sans text-sm sm:text-base leading-[1.85] mb-2 sm:mb-3">
              Chaque cabinet est différent, chaque organisation aussi.
            </p>
            <p className="text-forest font-sans text-sm sm:text-base leading-[1.85]">
              Je prends le temps de m&apos;adapter à votre fonctionnement, à vos habitudes, à votre rythme.
              Que vous ayez besoin d&apos;un accompagnement complet ou d&apos;un soutien ponctuel, je suis là
              pour vous apporter une solution adaptée, sans complexifier votre quotidien.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Derrière la professionnelle + CTA */}
      <motion.div
        {...fadeIn}
        className="bg-sage-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 sm:gap-6 md:gap-12 items-start mb-6 sm:mb-10">
          <h3 className="font-display text-mint font-bold text-lg sm:text-xl lg:text-2xl leading-snug">
            Derrière<br />la professionnelle…
          </h3>
          <div>
            <p className="text-mint font-sans text-sm sm:text-base leading-[1.85] mb-2 sm:mb-3">
              Je suis aussi quelqu&apos;un de dynamique, organisée, et profondément engagée dans ce que je fais.
              Le sport fait partie de mon équilibre — course à pied, fitness, musculation — et m&apos;apporte
              rigueur, persévérance et énergie au quotidien.
            </p>
            <p className="text-mint/80 font-sans text-sm sm:text-base leading-[1.85]">
              Des valeurs que je retrouve pleinement dans mon travail : avancer avec constance, rester
              concentrée sur les objectifs, et aller jusqu&apos;au bout des choses.
            </p>
          </div>
        </div>
        <div className="border-t border-mint/15 pt-6 sm:pt-8 text-center">
          <p className="font-display text-mint font-bold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3">
            Et si vous respiriez un peu ?
          </p>
          <p className="text-mint/75 font-sans text-sm sm:text-base leading-relaxed mb-2 max-w-sm mx-auto">
            Si vous ressentez le besoin d&apos;être accompagnée, je serai ravie d&apos;échanger avec vous.
          </p>
          <p className="font-script text-sage text-xl sm:text-2xl mb-5 sm:mb-6">À très bientôt.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-terra text-mint font-sans font-semibold px-6 py-3.5 sm:px-8 sm:py-4 text-sm rounded-xl hover:bg-terra-dark transition-all duration-200"
          >
            Parlons de votre activité →
          </a>
        </div>
      </motion.div>

    </div>
  );
}
