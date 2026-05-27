"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";
import { services } from "@/lib/data";

export default function Services({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="prestations" className={`relative overflow-hidden ${className ?? "bg-mint py-16 sm:py-24"}`}>
      <div className="absolute z-0 -top-36 -right-36 w-[520px] h-[520px] rounded-full bg-sage/15 blur-3xl pointer-events-none" />
      <div className="absolute z-0 -bottom-28 -left-28 w-[380px] h-[380px] rounded-full bg-sage-dark/10 blur-3xl pointer-events-none" />
      <div className="relative z-[1] max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-20 items-start">

          {/* Colonne gauche — intro sticky */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="lg:sticky lg:top-[88px]"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-sage font-sans text-xs uppercase tracking-[0.28em] font-semibold mb-5"
            >
              Mes prestations
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-forest text-4xl sm:text-5xl font-bold leading-tight"
            >
              Ce que je<br />prends en charge
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-forest/75 font-sans text-base mt-5 leading-relaxed max-w-xs"
            >
              Six missions clés, gérées intégralement pour que vous puissiez vous concentrer sur vos patients.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-forest text-mint font-sans font-semibold px-6 py-3 text-sm rounded-xl hover:bg-sage-dark transition-all duration-200"
            >
              Me contacter →
            </motion.a>
          </motion.div>

          {/* Colonne droite — liste des services */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="divide-y divide-forest/10"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="w-9 h-9 rounded-xl backdrop-blur-sm bg-white/70 border border-sage/20 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white group-hover:border-sage transition-all duration-300 shrink-0 mt-0.5 shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-display text-forest font-bold text-base group-hover:text-sage-dark transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-forest/75 font-sans text-sm leading-relaxed mt-0.5">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
