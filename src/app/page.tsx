'use client'

import { motion } from 'framer-motion'
import { FeatureShowcase } from './components/feature-showcase'
import { TrustIndicators } from './components/trust-indicators'
import { VehicleTypeSelector } from './components/vehicle-type-selector'
import { MarketValueSection } from './components/market-value-section'
import { BoostSaleSection } from './components/boost-sale-section'
import { WindowStickerSection } from './components/window-sticker-section'
import { TestimonialCarousel } from './components/testimonial-carousel'
import { FAQAccordion } from './components/faq-accordion'
import { CTASection } from './components/cta-section'
import { ExpertSupportSection } from './components/expert-support-section'
import { SatisfactionGuaranteedSection } from './components/satisfaction-guaranteed-section'
import { MapleLeafBackground } from './components/maple-leaf-background'
import { HeroSection } from './components/hero-section'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      <MapleLeafBackground />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <TrustIndicators />
      </motion.div>

      <motion.div {...fadeInUp} className="relative z-10">
        <FeatureShowcase />
      </motion.div>

      <motion.div 
        className="relative py-20"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-red-600 opacity-5 transform -skew-y-6 pointer-events-none"></div>
        <VehicleTypeSelector />
      </motion.div>

      <motion.div {...fadeInUp}>
        <MarketValueSection />
      </motion.div>

      <motion.div 
        className="relative py-20"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-red-600 opacity-5 transform skew-y-6"></div>
        <BoostSaleSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <WindowStickerSection />
      </motion.div>

      <motion.div 
        className="relative py-20"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-10"></div>
        <TestimonialCarousel />
      </motion.div>

      <motion.div {...fadeInUp}>
        <ExpertSupportSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <SatisfactionGuaranteedSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <FAQAccordion />
      </motion.div>

      <motion.div 
        className="relative"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-red-600 opacity-5 transform -skew-y-6"></div>
        <CTASection />
      </motion.div>
    </div>
  )
}

