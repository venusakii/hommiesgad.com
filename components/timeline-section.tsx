"use client"

import { motion } from "framer-motion"
import { Eye, Package, Wrench, Smile } from "lucide-react"

const steps = [
  { icon: Eye, label: "See problem", description: "Identify what needs fixing" },
  { icon: Package, label: "Choose kit", description: "Find the right solution" },
  { icon: Wrench, label: "Fix", description: "Follow simple instructions" },
  { icon: Smile, label: "Smile", description: "Enjoy your handiwork" },
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            DIY Confidence, <span className="text-sage">Step by Step</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vine/Connection Line */}
          <svg
            className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 hidden md:block"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 8 Q 200 2 400 8 T 800 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-sage/30"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mb-4 relative z-10"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(164, 181, 156, 0.2)" }}
                >
                  <step.icon className="h-8 w-8 text-sage" />
                </motion.div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{step.label}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
