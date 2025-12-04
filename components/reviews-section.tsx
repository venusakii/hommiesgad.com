"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Ella M.",
    location: "New York",
    text: "I patched a wall hole in 5 minutes — no drilling, no mess. Perfect for renters!",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Austin",
    text: "The eco-packaging alone sold me. But the tools? Chef's kiss. Built to last.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    location: "Portland",
    text: "Finally, a brand that understands apartment living. The drawer fix kit saved my security deposit!",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Chicago",
    text: "Quality tools that don't cost the earth — literally. Love the sustainability focus.",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 bg-linen/30 dark:bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our <span className="text-sage">Renters Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="relative p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              {/* Pin decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brass rounded-full shadow-md" />

              <Quote className="h-6 w-6 text-sage/30 mb-4" />

              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-brass fill-brass" />
                ))}
              </div>

              <p className="font-medium text-foreground">{review.name}</p>
              <p className="text-sm text-muted-foreground">{review.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
