"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="prestations" className="bg-white py-12 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-10 sm:mb-14">
          <motion.p variants={fadeUp} className="text-sage uppercase tracking-widest text-xs font-sans font-semibold mb-4">
            Ce que je fais pour vous
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-forest text-3xl sm:text-4xl font-bold">
            Mes prestations
          </motion.h2>
          <motion.div variants={fadeUp} className="w-10 h-px bg-sage mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-mint border border-sage/10 p-6 sm:p-7 hover:border-sage/35 hover:shadow-lg transition-all duration-300 flex flex-col group cursor-default relative overflow-hidden rounded-xl"
            >
              {/* Ligne sage animée en bas */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-sage w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl" />

              {/* Icône + numéro */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-sage-light rounded-lg flex items-center justify-center shrink-0 text-sage group-hover:bg-sage group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <span className="font-display text-sage/40 font-bold text-xs tracking-[0.2em] group-hover:text-sage transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Titre */}
              <h3 className="font-display text-forest font-bold text-lg leading-snug mb-3">
                {service.title}
              </h3>

              {/* Trait sage */}
              <div className="w-8 h-[2px] bg-sage/30 group-hover:bg-sage mb-4 transition-colors duration-300" />

              {/* Description */}
              <p className="text-forest/60 font-sans text-[15px] leading-[1.75] flex-1">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
