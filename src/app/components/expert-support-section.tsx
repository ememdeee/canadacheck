'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Clock, Star, Users } from 'lucide-react'

const supportFeatures = [
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "Our experts are always on standby to assist you, day or night."
  },
  {
    icon: Clock,
    title: "Swift Responses",
    description: "Get answers to your queries in minutes, not hours."
  },
  {
    icon: Star,
    title: "Unmatched Expertise",
    description: "Our team boasts years of experience in vehicle history analysis."
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "Enjoy tailored assistance for your specific needs."
  }
]


export function ExpertSupportSection() {
  //const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-red-100 via-white to-red-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-red-600 border-red-600">
            Canadian Expertise at Your Service
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-red-900">
            Backed by True North Vehicle History Gurus
          </h2>
          <p className="text-lg text-red-700">
            Our dedicated team of Canadian automotive experts is committed to unravelling the mysteries of any vehicle&apos;s past, from the Rockies to the Maritimes. With coast-to-coast support, we ensure you&apos;re never left out in the cold.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-red-200">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-red-900">{feature.title}</h3>
                <p className="text-red-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
          >
            Get Expert Help Now
          </Button>
        </div>
      </div>
    </section>
  )
}

