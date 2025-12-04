"use client"

import { motion } from "framer-motion"

export function MindfulSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/calm-workshop-desk-bamboo-tools-organized-minimal.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-steel/60 dark:bg-steel/80" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DIY Made <span className="text-sage">Peaceful</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/80 font-light italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "Repairing can be an act of mindfulness."
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
