'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Zap, ShieldCheck, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const stickerFeatures = [
  { icon: FileText, title: "Complete Specs", description: "Every detail at your fingertips" },
  { icon: Zap, title: "Performance Insights", description: "From horsepower to MPG" },
  { icon: ShieldCheck, title: "Trust Builder", description: "Transparency that sells" },
  { icon: BarChart2, title: "Value Justification", description: "Data to back your price" }
]

export function WindowStickerSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-red-100 to-white text-red-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-red-900"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Window Stickers: Your Vehicle&apos;s Canadian Passport
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-red-700">
              Think of a window sticker as your ride&apos;s all-access pass to its True North identity. It&apos;s not just a label, it&apos;s a treasure map to everything that makes your vehicle uniquely Canadian - from its hockey-bag capacity to its ability to handle Timmies runs in -40°C weather!
            </p>
            <div className="relative h-[400px] bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/cars-sample.png"
                alt="Interactive Window Sticker"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-400/80 flex items-center p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Sticker Spotlight</h3>
                  <p className="text-lg mb-4 text-red-100">{stickerFeatures[activeFeature].description}</p>
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="bg-white text-red-600 hover:bg-red-50"
                      onClick={() => setActiveFeature((prev) => (prev - 1 + stickerFeatures.length) % stickerFeatures.length)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="bg-white text-red-600 hover:bg-red-50"
                      onClick={() => setActiveFeature((prev) => (prev + 1) % stickerFeatures.length)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-800">Window Sticker Superpowers, Eh?</h3>
            <div className="grid gap-6">
              {stickerFeatures.map((feature, index) => (
                <Card key={index} className={`transition-all duration-300 bg-white border border-red-100 ${index === activeFeature ? 'scale-105 shadow-lg' : ''}`}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <feature.icon className="h-8 w-8 text-red-600" />
                    <div>
                      <h4 className="font-semibold mb-2 text-red-800">{feature.title}</h4>
                      <p className="text-sm text-red-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                Get Your Canadian Window Sticker
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

