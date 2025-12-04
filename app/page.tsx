import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ForRentersSection } from "@/components/for-renters-section"
import { ProductsSection } from "@/components/products-section"
import { TimelineSection } from "@/components/timeline-section"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { ReviewsSection } from "@/components/reviews-section"
import { MindfulSection } from "@/components/mindful-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ForRentersSection />
      <ProductsSection />
      <TimelineSection />
      <VideoSection />
      <FeaturesSection />
      <ReviewsSection />
      <MindfulSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
