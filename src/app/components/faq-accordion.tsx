'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What&apos;s included in your Canadian vehicle history reports?",
    answer: "Our comprehensive reports cover accident history, ownership records, service logs, title information, and much more. We compile data from various trusted Canadian sources to give you a complete picture of the vehicle&apos;s past."
  },
  {
    question: "How reliable is the information in your reports for Canadian vehicles?",
    answer: "We strive for the highest level of accuracy by sourcing information from official Canadian records and reputable databases. However, we recommend using our reports as one tool in your decision-making process, alongside a professional inspection and test drive."
  },
  {
    question: "How quickly can I access a report for a vehicle in Canada?",
    answer: "Our reports are generated instantly. As soon as you enter the VIN or license plate and complete the purchase, you'll have immediate access to the full report. No waiting required, eh!"
  },
  {
    question: "Do you cover vehicles from all Canadian provinces and territories?",
    answer: "Yes, our service covers vehicles from all Canadian provinces and territories, from British Columbia to Newfoundland and Labrador, and everywhere in between. We&apos;re working on expanding our coverage to include more detailed provincial-specific information."
  }
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-600 relative">
          Frequently Asked Questions
          <span className="absolute -top-6 -left-6 text-red-200 text-6xl opacity-50">🍁</span>
          <span className="absolute -bottom-6 -right-6 text-red-200 text-6xl opacity-50">🍁</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                className="flex justify-between items-center w-full text-left p-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white" />
                )}
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border-2 border-red-200 rounded-b-lg shadow-inner">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

