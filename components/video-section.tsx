"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-clay/10 dark:bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            See How It <span className="text-sage">Works</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="/person-using-repair-kit-in-apartment-natural-light.jpg"
              alt="HommiesGad kit demonstration"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-steel/30 flex items-center justify-center">
              
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-steel/80 to-transparent">
              <p className="text-white text-lg md:text-xl font-medium text-center">
                Designed for zero damage. Built to last through moves.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
