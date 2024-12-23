'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, BarChart3, Car } from 'lucide-react'

export function MarketValueSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-red-900">
              Discover Your Vehicle&apos;s True Canadian Market Value
            </h2>
            <p className="text-xl text-red-700">
              Eh, wondering what your ride&apos;s worth in the Great White North? Our advanced valuation tool crunches real-time data from coast to coast to give you the most accurate estimate. Whether you&apos;re selling in Toronto, trading in Vancouver, or just window shopping in Montreal, we&apos;ve got your back!
            </p>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 text-red-800">Check Your Car&apos;s Value, Canadian Style</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Enter VIN" className="bg-white border-red-200 text-red-900 placeholder-red-400" />
                <Input type="tel" placeholder="Phone" className="bg-white border-red-200 text-red-900 placeholder-red-400" />
                <Input type="email" placeholder="Email" className="bg-white border-red-200 text-red-900 placeholder-red-400" />
                <Button className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                  <DollarSign className="mr-2 h-4 w-4" /> Get Value
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: TrendingUp, title: "Coast-to-Coast Data", description: "Up-to-the-minute Canadian market trends" },
              { icon: BarChart3, title: "Provincial Analysis", description: "Region-specific market insights" },
              { icon: Car, title: "Vehicle-Specific", description: "Tailored to Canadian models" },
              { icon: DollarSign, title: "Value Boosters", description: "Tips to maximize value in CAD" },
            ].map((item, index) => (
              <Card key={index} className="bg-white border border-red-100 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <item.icon className="h-10 w-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-red-800">{item.title}</h3>
                  <p className="text-red-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

