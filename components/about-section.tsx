"use client"

import { motion } from "framer-motion"
import { Building2, Wrench, Sprout } from "lucide-react"

const timeline = [
  {
    icon: Building2,
    title: "Started in a rented apartment",
    description: "Born from the frustration of not having the right tools for small fixes.",
  },
  {
    icon: Wrench,
    title: "Grew from frustration",
    description: "Throwaway tools that broke after one use? We knew there had to be a better way.",
  },
  {
    icon: Sprout,
    title: "Became a mission",
    description: "Today, we're dedicated to mindful living and sustainable repair solutions.",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            About <span className="text-sage">HommiesGad</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sage/20 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center relative z-10">
                    <item.icon className="h-7 w-7 text-sage" />
                  </div>
                  <div className="pt-3">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Founders Quote */}
          <motion.div
            className="mt-16 p-8 bg-linen/50 dark:bg-muted/30 rounded-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/two-founders-portrait-friendly-minimal.jpg"
              alt="HommiesGad Founders"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-white shadow-lg"
            />
            <blockquote className="text-xl md:text-2xl text-foreground font-heading italic mb-4">
              "We believe fixing things should feel beautiful."
            </blockquote>
            <p className="text-muted-foreground">— The HommiesGad Team</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
