"use client"

import { motion } from "framer-motion"
import { Recycle, Leaf, Settings } from "lucide-react"

const features = [
  {
    icon: Recycle,
    title: "Recycled Steel Tools",
    description: "Every tool crafted from recycled materials, reducing waste and carbon footprint.",
  },
  {
    icon: Leaf,
    title: "Compostable Packaging",
    description: "Packaging that returns to the earth, not landfills. 100% biodegradable.",
  },
  {
    icon: Settings,
    title: "Multi-function Design",
    description: "One tool, many uses. Minimalist design that maximizes functionality.",
  },
]

export function FeaturesSection() {
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
            Smart Inside. <span className="text-sage">Sustainable Outside.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-sage/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="h-8 w-8 text-sage" />
              </motion.div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
