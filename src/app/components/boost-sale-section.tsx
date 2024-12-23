'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, DollarSign } from 'lucide-react'

export function BoostSaleSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-100 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: TrendingUp, title: "Top-Dollar Offers", description: "Watch those Loonies add up!" },
              { icon: Shield, title: "Trust Builder", description: "True North strong and verified" },
              { icon: Users, title: "Buyer Magnet", description: "Stand out in Canadian markets" },
              { icon: DollarSign, title: "Value Maximizer", description: "Get what you deserve in CAD" },
            ].map((feature, index) => (
              <Card key={index} className="group bg-white border border-red-100 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-red-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-red-800">{feature.title}</h3>
                  <p className="text-red-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-red-900">
              Power Up Your Sale with Canadian-Verified Reports
            </h2>
            <p className="text-xl text-red-700">
              Beauty, eh? Sellers with our verified reports are scoring up to 15% more on their vehicles from coast to coast! 
              From Victoria to St. John&apos;s, transparency isn&apos;t just nice – it&apos;s your secret weapon in today&apos;s Canadian car market. 
              Our reports build trust faster than a Zamboni on fresh ice!
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300">
              Grab Your Power Report
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

