"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const fillPercentage = Math.min((email.length / 30) * 100, 100)

  return (
    <section className="py-24 bg-sage/5 dark:bg-sage/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Join the <span className="text-sage">Hommies Circle</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get 10% off your first repair kit and exclusive DIY tips.
          </p>

          {/* Toolbox Icon Animation */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Toolbox outline */}
              <rect
                x="10"
                y="30"
                width="80"
                height="50"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-sage/30"
              />
              {/* Handle */}
              <path
                d="M 35 30 L 35 20 Q 35 15 40 15 L 60 15 Q 65 15 65 20 L 65 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-sage/30"
              />
              {/* Fill level */}
              <motion.rect
                x="12"
                y="78"
                width="76"
                height="0"
                rx="3"
                className="fill-sage/40"
                animate={{
                  height: fillPercentage * 0.46,
                  y: 78 - fillPercentage * 0.46,
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 h-12 rounded-full px-6 border-sage/30 focus:border-sage focus:ring-sage"
            />
            <Button type="submit" className="h-12 px-8 rounded-full bg-sage hover:bg-sage/90 text-white">
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
