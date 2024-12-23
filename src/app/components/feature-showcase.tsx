'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Car, FileText, Database, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Database,
    title: "Real-Time Data Updates",
    description: "Instantly access the latest vehicle information from trusted Canadian databases."
  },
  {
    icon: Car,
    title: "Accident History Insights",
    description: "Learn about reported collisions, damage severity, and repair records."
  },
  {
    icon: Shield,
    title: "Ownership Transparency",
    description: "View detailed records of all prior owners and registration dates."
  },
  {
    icon: FileText,
    title: "Market Comparison Tools",
    description: "See how your vehicle&apos;s features and value stack up against others."
  },
  {
    icon: Clock,
    title: "Mileage Verification",
    description: "Verify odometer readings for accuracy and peace of mind."
  },
  {
    icon: Zap,
    title: "Exclusive Add-Ons",
    description: "Unlock special perks like maintenance records and recall history."
  }
]

export function FeatureShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-red-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mind-Blowing Features
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-red-800">{feature.title}</h3>
                  <p className="text-red-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

