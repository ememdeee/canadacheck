'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, ThumbsUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const guarantees = [
  {
    icon: Shield,
    title: "100% Satisfaction Promise",
    description: "Not happy? We'll make it right or your money back. No questions asked."
  },
  {
    icon: Lock,
    title: "Fort Knox-Level Security",
    description: "Your data is locked down tighter than a bank vault. Shop with total peace of mind."
  },
  {
    icon: ThumbsUp,
    title: "Accuracy You Can Trust",
    description: "Our reports are so precise, you could set your watch to them. Reliable info, always."
  }
]

export function SatisfactionGuaranteedSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-red-700 via-red-500 to-red-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-12 bg-red-600 shadow-md"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white transform rotate-45 translate-x-8 -translate-y-8"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200 transform rotate-45 -translate-x-8 translate-y-8"></div>
      <div className="container mx-auto px-4 pt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start justify-between"
        >
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <Badge variant="outline" className="mb-4 text-white border-white">
              Our Ironclad Guarantees
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-red-50 drop-shadow-md">
              Satisfaction So Guaranteed, It&apos;s Almost Unfair
            </h2>
            <p className="text-lg text-red-100 mb-8">
              We&apos;re not just confident in our service - we&apos;re downright cocky. 
              That&apos;s why we offer guarantees that&apos;ll make other companies green with envy.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 border border-red-100">
              <h3 className="text-xl font-semibold mb-2 text-red-900">What Our Customers Say</h3>
              <p className="text-red-700 italic mb-4">
              &apos;Great site, legible reports. Excellent prices! Good for those of us in the market for a used car that want to do due diligence without overpaying or subscribing to predatory monthly subscription.&apos;
              </p>
              <p className="text-red-900 font-semibold">- Alexandre H., Verified Customer</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-6 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <guarantee.icon className="h-8 w-8 text-red-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-red-900">{guarantee.title}</h3>
                      <p className="text-red-700">{guarantee.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

