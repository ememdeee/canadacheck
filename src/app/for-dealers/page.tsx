'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { MapleLeafBackground } from '../components/maple-leaf-background'
import { LiveChatButton } from '../components/live-chat-button'

export default function ForDealersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just set the formSubmitted state to true
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            For Canadian Dealerships
          </h1>
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-600">
            Partner with VehicleInsights Canada
          </Badge>
          <p className="text-lg text-red-700 mb-8">
            Enhance your dealership&apos;s services with our comprehensive vehicle history reports and window sticker solutions, eh! From coast to coast to coast, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Email Submission Form */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-red-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-800">Give Us a Shout</h2>
              {formSubmitted ? (
                <div className="text-green-600 font-semibold">
                  Beauty! Thanks for reaching out. We will get back to you faster than a Zamboni on fresh ice!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Dealership Name" required className="border-red-200" />
                  <Input type="email" placeholder="Email Address" required className="border-red-200" />
                  <Input type="tel" placeholder="Phone Number" className="border-red-200" />
                  <Textarea placeholder="How can we help your dealership, buddy?" required className="border-red-200" />
                  <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">Submit Inquiry</Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-red-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-800">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span className="text-red-700">Call Toll Free: 1-866-EH-HELLO (1-866-344-3556)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-600" />
                    <span className="text-red-700">Email: dealers@vehicleinsights.ca</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-red-600" />
                    <span className="text-red-700">Business Hours: 24/7 (We never sleep, just like the Northern Lights!)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-red-700">HQ: 123 Maple Street, Toronto, ON M5V 2T6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-red-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-800">Live Chat</h2>
                <p className="mb-4 text-red-700">Need immediate assistance? Chat with our dealer support team now, faster than a hockey player on a breakaway!</p>
                <LiveChatButton />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Canadian Dealership Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
            Why Canadian Dealerships Choose VehicleInsights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-red-700">Coast-to-Coast Coverage</h3>
                <p className="text-red-600">From Victoria to St. John&apos;s, our reports cover vehicles across all provinces and territories.</p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-red-700">Bilingual Support</h3>
                <p className="text-red-600">Oui, we offer support in both English and French to serve all of Canada.</p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-red-700">Canadian Compliance</h3>
                <p className="text-red-600">Our reports adhere to all Canadian privacy laws and provincial regulations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

