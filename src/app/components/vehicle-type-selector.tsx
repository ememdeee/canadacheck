'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const vehicleTypes = [
  { name: 'Cars', image: '/cars-sample.png' },
  { name: 'SUVs', image: '/suvs-sample.png' },
  { name: 'Trucks', image: '/trucks-sample.png' },
  { name: 'Motorcycles', image: '/motorcycles-sample.png' },
  { name: 'RVs', image: '/rvs-sample.png' },
]

export function VehicleTypeSelector() {
  const [selectedType, setSelectedType] = useState('Cars')

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-red-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Explore Reports for All Vehicle Types
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {vehicleTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant={selectedType === type.name ? "default" : "outline"}
                className={`min-w-[120px] ${
                  selectedType === type.name
                    ? "bg-red-600 text-white"
                    : "bg-white text-red-600 border-red-200"
                } hover:bg-red-700 hover:text-white`}
                onClick={() => setSelectedType(type.name)}
              >
                <Image src={type.image} alt={type.name} width={24} height={24} className="mr-2" />
                {type.name}
              </Button>
            </motion.div>
          ))}
        </div>
        <Card className="max-w-4xl mx-auto overflow-hidden border border-red-100 shadow-md">
          <CardContent className="p-0">
            <motion.div
              key={selectedType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={`/${selectedType.toLowerCase()}-sample.png`}
                alt={`Sample report for ${selectedType}`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

