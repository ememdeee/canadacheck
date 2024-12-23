'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Shield, Clock, CheckCircle, AlertTriangle, Star } from 'lucide-react'
import Image from 'next/image'
import { MapleLeafBackground } from '../components/maple-leaf-background'
import SiteForm from '../components/SiteForm'

const popularProvinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
  'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
  'Northwest Territories', 'Nunavut', 'Yukon'
]

const benefits = [
  {
    icon: Shield,
    title: "Ownership Verification",
    description: "Instantly verify the current and previous owners of any vehicle, from Vancouver to St. John&apos;s"
  },
  {
    icon: AlertTriangle,
    title: "Safety First, Eh",
    description: "Uncover accident history, damage reports, and safety recalls across all provinces and territories"
  },
  {
    icon: Clock,
    title: "Real-Time Data",
    description: "Access up-to-the-minute information from coast to coast to coast"
  },
  {
    icon: CheckCircle,
    title: "Legal Compliance",
    description: "All searches comply with Canadian privacy laws and provincial regulations"
  }
]

const faqs = [
  {
    question: "Is license plate lookup legal in Canada?",
    answer: "You betcha! Our service is 100% legal and compliant with all federal and provincial regulations. We ensure your search is conducted within legal boundaries while protecting privacy, just like a proper Canadian would."
  },
  {
    question: "What information will I receive, eh?",
    answer: "Our comprehensive reports include vehicle specifications, ownership history, accident records, safety recalls, and more - all the essential details you need to make informed decisions about vehicles from the Rockies to the Maritimes."
  },
  {
    question: "How accurate is the information for Canadian vehicles?",
    answer: "We pull data from official provincial and territorial DMV records, insurance databases, and other reliable Canadian sources, ensuring high accuracy and up-to-date information. It&apos;s as reliable as a Mountie!"
  },
  {
    question: "How long does it take to get results?",
    answer: "Results are typically instant! Our advanced system processes your request immediately, delivering comprehensive reports within seconds. It&apos;s faster than a hockey player on a breakaway!"
  }
]

export default function LicensePlateLookup() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-600">
            Trusted by over 1M+ Canadians
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            Instant Canadian License Plate Lookup
          </h1>
          <p className="text-lg text-red-700">
            Unlock any vehicle&apos;s complete history in seconds with just a license plate. Make informed decisions with comprehensive, accurate data from the Great White North!
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-12 border-red-200">
          <SiteForm formStyle='canadawebsite' />
        </div>

        {/* What is Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              What&apos;s a License Plate Lookup, Eh?
            </h2>
            <p className="text-lg text-red-700">
              Think of it as your vehicle&apos;s digital detective, Canadian style! Our license plate lookup service instantly reveals crucial information about any vehicle, helping you make informed decisions and avoid potential risks, whether you&apos;re in Toronto or Tuktoyaktuk.
            </p>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-red-200">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <benefit.icon className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-red-700">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/license-plate-image.png"
              alt="Canadian License Plate Lookup Process"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Popular Provinces */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-800">
            Popular Provincial Searches
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {popularProvinces.map((province, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full hover:bg-red-50 transition-all duration-300 border-red-200 text-red-700"
              >
                {province}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-800">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-200">
                <AccordionTrigger className="text-left text-red-800 hover:text-red-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-red-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg font-semibold mb-2 text-red-800">
            Trusted by Over 1 Million Canadians
          </p>
          <p className="text-red-700">
            Join thousands of satisfied customers who use our service daily, from sea to sea to sea!
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Search a Canadian License Plate?
          </h2>
          <p className="mb-6 text-red-100">
            Get instant access to comprehensive vehicle history reports, eh!
          </p>
          <Button size="lg" variant="secondary" className="hover:bg-white transition-all duration-300 text-red-600 hover:text-red-700">
            Start Your Search
          </Button>
        </div>
      </div>
    </div>
  )
}

