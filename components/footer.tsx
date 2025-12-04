"use client"

import Link from "next/link"
import { Wrench, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { label: "All Kits", href: "/kits" },
      { label: "Wall & Paint", href: "/kits?category=wall" },
      { label: "Lighting", href: "/kits?category=lighting" },
      { label: "Bathroom", href: "/kits?category=bathroom" },
    ],
    learn: [
      { label: "Tutorials", href: "/tutorials" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Affiliate Disclosure", href: "/affiliate" },
    ],
  }

  return (
    <footer className="relative bg-steel text-white overflow-hidden">
      {/* Wood texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/wood-texture-dark.jpg')] bg-repeat" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wrench className="h-6 w-6 text-sage" />
              <span className="font-heading text-xl font-medium">
                hommies<span className="text-sage">g</span>ad
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-4">Sustainable DIY kits for renters who care.</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© {currentYear} HommiesGad. All rights reserved.</p>
            <p className="text-white/40 text-xs text-center md:text-right">
              HommiesGad is a participant in the Amazon Services LLC Associates Program.
              <br />
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-50 hidden">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/80">
            🍪 This site uses cookies to enhance your experience and analyze usage. By continuing, you agree to our
            cookie policy.
          </p>
          <button className="px-4 py-2 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage/90 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </footer>
  )
}
