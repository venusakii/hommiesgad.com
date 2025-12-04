"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Kits", icon: "🧰" },
  { id: "wall", label: "Wall & Paint", icon: "🧱" },
  { id: "lighting", label: "Lighting Fixes", icon: "💡" },
  { id: "bathroom", label: "Bathroom Solutions", icon: "🚿" },
  { id: "furniture", label: "Furniture Repairs", icon: "🪑" },
]

const products = [
  {
    id: 1,
    name: "Wall Repair Starter Kit",
    category: "wall",
    ecoRating: 5,
    price: 29.99,
    image: "/wall-repair-kit-tools-minimal.jpg",
    slug: "wall-repair-starter",
  },
  {
    id: 2,
    name: "Light Fixture Mount Kit",
    category: "lighting",
    ecoRating: 4,
    price: 24.99,
    image: "/light-fixture-mounting-kit-minimal.jpg",
    slug: "light-fixture-mount",
  },
  {
    id: 3,
    name: "Faucet Repair Essentials",
    category: "bathroom",
    ecoRating: 5,
    price: 34.99,
    image: "/faucet-repair-kit-bathroom-minimal.jpg",
    slug: "faucet-repair-essentials",
  },
  {
    id: 4,
    name: "Chair Leg Stabilizer Kit",
    category: "furniture",
    ecoRating: 5,
    price: 19.99,
    image: "/chair-repair-kit-wood-minimal.jpg",
    slug: "chair-leg-stabilizer",
  },
  {
    id: 5,
    name: "Patch & Paint Kit",
    category: "wall",
    ecoRating: 4,
    price: 39.99,
    image: "/paint-patch-kit-wall-minimal.jpg",
    slug: "patch-paint-kit",
  },
  {
    id: 6,
    name: "Smart Switch Installer",
    category: "lighting",
    ecoRating: 5,
    price: 44.99,
    image: "/smart-switch-installation-kit-minimal.jpg",
    slug: "smart-switch-installer",
  },
  {
    id: 7,
    name: "Drain Unclog Kit",
    category: "bathroom",
    ecoRating: 5,
    price: 22.99,
    image: "/drain-cleaning-kit-eco-minimal.jpg",
    slug: "drain-unclog-kit",
  },
  {
    id: 8,
    name: "Drawer Slide Repair Kit",
    category: "furniture",
    ecoRating: 4,
    price: 27.99,
    image: "/drawer-repair-kit-tools-minimal.jpg",
    slug: "drawer-slide-repair",
  },
  {
    id: 9,
    name: "Complete Renter Kit",
    category: "all",
    ecoRating: 5,
    price: 89.99,
    image: "/complete-home-repair-toolkit-minimal.jpg",
    slug: "complete-renter-kit",
  },
]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory || p.category === "all")

  return (
    <section className="py-24 bg-linen/30 dark:bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Most-Loved <span className="text-sage">Kits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated repair solutions for every corner of your rental
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className={cn(
                "rounded-full transition-all",
                activeCategory === cat.id ? "bg-sage hover:bg-sage/90 text-white" : "hover:border-sage hover:text-sage",
              )}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-clay/10 to-linen">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Eco Rating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 bg-white/90 dark:bg-steel/90 rounded-full">
                    {[...Array(product.ecoRating)].map((_, i) => (
                      <Leaf key={i} className="h-3 w-3 text-sage fill-sage" />
                    ))}
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-sage transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-sage text-sage hover:bg-sage hover:text-white bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
