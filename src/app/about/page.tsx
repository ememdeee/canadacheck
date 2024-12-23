import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, TrendingUp, Car, MapPin, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MapleLeafBackground } from "../components/maple-leaf-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            The Great Canadian VehicleInsights Story
          </h1>
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-600">
            Driving Trust from Coast to Coast to Coast
          </Badge>
          <p className="text-lg text-red-700 mb-8">
            Buckle up, eh! Join us on a journey through our mission to revolutionize vehicle history reporting in the True North, Strong and Free!
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-red-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-800">Our Canadian Mission</h2>
            <p className="text-lg text-red-700">
              At VehicleInsights Canada, we&apos;re as committed to transparency as we are to hockey! Our goal is to empower Canadians from Newfoundland to British Columbia with accurate, comprehensive vehicle history information, enabling informed decisions and safer transactions, all with a distinctly Canadian flavour.
            </p>
          </CardContent>
        </Card>

        {/* Company History */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-800">Our Canadian Journey</h2>
            <p className="text-red-700 mb-4">
              Founded in 2010 in a tiny Toronto office (right next to a Tim Hortons, of course), VehicleInsights started with a simple idea: to make vehicle history as clear as a prairie sky. What began as a small startup has grown into a trusted industry leader, serving millions of customers from Yellowknife to Halifax.
            </p>
            <p className="text-red-700 mb-4">
              Over the years, we&apos;ve expanded our services faster than a Zamboni on fresh ice! We now offer not just vehicle history reports, but also window stickers, market value assessments, and dealer solutions tailored to the Canadian market. Our commitment to innovation and customer satisfaction has driven our growth and success, much like a well-oiled dogsled team.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/canadian-road-trip.jpg"
              alt="VehicleInsights Canadian Journey"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-800">What Makes Us Uniquely Canadian</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Coast-to-Coast Data", description: "Access to databases from all 13 provinces and territories" },
              { icon: Users, title: "Bilingual Support", description: "Service in both official languages, naturellement!" },
              { icon: TrendingUp, title: "Canadian Market Insights", description: "Real-time value assessments for the Canadian market" },
              { icon: Car, title: "All-Terrain Solutions", description: "From city cars to Arctic-ready trucks, we&apos;ve got you covered" },
              { icon: MapPin, title: "Local Expertise", description: "Our team knows Canadian roads like the back of their mittens" },
              { icon: Leaf, title: "Eco-Conscious", description: "Supporting Canada's green initiatives in the automotive sector" },
            ].map((feature, index) => (
              <Card key={index} className="border-red-200">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="font-bold mb-2 text-red-800">{feature.title}</h3>
                  <p className="text-red-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-800">Ready to Join the VehicleInsights Family?</h2>
          <p className="text-lg text-red-700 mb-8">
            Experience the VehicleInsights difference today, eh! Whether you&apos;re buying a car in Vancouver, selling in Montreal, or managing a fleet in Winning, we&apos;ve got your back!
          </p>
          <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
            <Link href="/sample-report">Discover Your Vehicle&apos;s Story</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

