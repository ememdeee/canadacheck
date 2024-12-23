'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SiteForm from './SiteForm'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        {/* <Image
          src="/canada-landscape.jpg"
          alt="Canadian Landscape"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        /> */}
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Discover Your Vehicle&apos;s Canadian Journey 🍁
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-red-100"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From the Rockies to the Maritimes, uncover your car&apos;s true history with Canada&apos;s premier vehicle report service.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SiteForm formStyle='canadawebsite' />
            </motion.div>
            <motion.p 
              className="text-sm text-red-100 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Trusted by thousands of Canadians every month. Over 95% accuracy in vehicle data retrieval.
            </motion.p>
          </div>
          <div className="hidden md:block">
            <motion.div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/Hero_Section_Image.png"
                alt="Canadian Vehicle"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

