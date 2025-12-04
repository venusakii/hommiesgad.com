import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "HommiesGad - Sustainable DIY Kits for Renters",
  description:
    "Eco-friendly repair kits designed for renters. No drills, no damage, no waste. Fix it beautifully with HommiesGad.",
  keywords: ["DIY kits", "sustainable tools", "renter friendly", "eco-friendly repair", "apartment fixes"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F3" },
    { media: "(prefers-color-scheme: dark)", color: "#404040" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
