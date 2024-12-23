'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Brian S.",
    role: "Vehicle Buyer",
    content: "WOW these guys have tons of information on any car, SUV or truck you might need information on. The window sticker I downloaded was factory original and it was on a German car. Great website that is simple to navigate. If you are buying or gathering information, this is the best money you could possibly spend.",
    rating: 5
  },
  {
    name: "Jose C.",
    role: "International Customer",
    content: "I am impressed by the great customer service. They not only provided me with the information I was looking for, but also added much more valuable data. On top of that, I was contacted right away in my native language -Spanish- just to verify if I was satisfied with the experience. I wish every site had such a sense of quality for the customers.",
    rating: 5
  },
  {
    name: "Rachel A.",
    role: "Repeat Customer",
    content: "Got a great response from them. They quickly responded to any questions I had and was able to get my reports in no time. They also gave me a courtesy discount for another vehicle. They were quick to help and got my report and texted to make sure I got everything okay with my questions.",
    rating: 5
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Voices of Satisfaction</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-red-200">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic text-white">&apos;{testimonials[currentIndex].content}&apos;</p>
                  <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-red-200">{testimonials[currentIndex].role}</div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white/20 hover:bg-white/30 rounded-full p-2"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white/20 hover:bg-white/30 rounded-full p-2"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

