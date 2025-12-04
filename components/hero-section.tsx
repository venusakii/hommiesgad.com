"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-linen via-linen to-clay/20" />

      {/* Floating dust particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brass/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Wood grain texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/wood-grain-texture.jpg')] bg-repeat" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium mb-6">
              <Wrench className="h-4 w-4" />
              Sustainable DIY for Renters
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-steel mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Repair, Reuse, <span className="text-sage">Relax.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-steel/70 mb-8 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sustainable DIY Kits for Renters.
            <br />
            No drills. No damage. No waste.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg rounded-full group">
              Shop Repair Kits
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-steel/20 text-steel hover:bg-steel/5 px-8 py-6 text-lg rounded-full bg-transparent"
            >
              <Wrench className="mr-2 h-5 w-5" />
              See Tutorials
            </Button>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/hands-repairing-furniture-in-sunny-workshop-cozy-m.jpg"
              alt="DIY repair in a sunny workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-steel/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
