"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const checklist = ["Eco-safe adhesives", "Recycled steel tools", "Damage-free mounting", "Beautifully packed kits"]

export function ForRentersSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/cozy-urban-studio-apartment-minimal-scandinavian.jpg" alt="Cozy urban studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 text-balance">
              For People Who Rent. <span className="text-sage">And Care.</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {checklist.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-sage/10 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-sage" />
                  </div>
                  <span className="text-lg text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-xl text-muted-foreground font-medium">Practical. Portable. Planet-friendly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
