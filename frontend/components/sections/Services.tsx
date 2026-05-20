"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";
import { services } from "@/lib/data";

export default function Services({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="prestations" className={className ?? "bg-white py-12 sm:py-20 lg:py-28"}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="mb-12 sm:mb-20">
          <motion.p variants={fadeUp} className="text-sage uppercase tracking-widest text-xs font-sans font-semibold mb-4">
            Ce que je fais pour vous
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2 variants={fadeUp} className="font-display text-forest text-3xl sm:text-4xl font-bold">
              Mes prestations
            </motion.h2>
            <motion.p variants={fadeUp} className="text-forest/60 font-sans text-sm max-w-xs leading-relaxed">
              Six missions que je prends entièrement en charge pour que vous n&apos;ayez plus à y penser.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} className="w-full h-px bg-forest/8 mt-8" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="divide-y divide-forest/8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group relative grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr_minmax(0,1.8fr)] gap-x-6 sm:gap-x-10 gap-y-3 py-8 sm:py-10 cursor-default"
            >
              {/* Accent line gauche au hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-sage origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />

              {/* Numéro */}
              <span className="font-display text-sage/25 font-bold text-3xl sm:text-4xl leading-none group-hover:text-sage/55 transition-colors duration-300 pt-1 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Titre + icône */}
              <div className="flex items-start gap-3 sm:pt-1">
                <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage group-hover:bg-sage group-hover:text-white transition-all duration-300 mt-0.5">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-forest font-bold text-lg sm:text-xl leading-snug group-hover:text-sage transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-5 h-[2px] bg-sage/30 mt-2.5 group-hover:w-10 group-hover:bg-sage transition-all duration-500" />
                  {/* Description visible sur mobile sous le titre */}
                  <p className="sm:hidden text-forest/80 font-sans text-sm leading-relaxed mt-3">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Description — colonne de droite sur desktop */}
              <p className="hidden sm:block text-forest/80 font-sans text-[15px] leading-relaxed sm:pt-1 col-start-3">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA bas de page */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mt-14 pt-10 border-t border-forest/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-forest font-bold text-lg">Vous avez des questions ?</p>
            <p className="text-forest/60 font-sans text-sm mt-1">Premier échange offert, sans engagement.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-forest text-mint font-sans font-semibold px-7 py-3.5 text-sm rounded-xl hover:bg-sage transition-all duration-200"
          >
            Me contacter →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
