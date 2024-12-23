'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Clock, Mail, Phone } from 'lucide-react'
import { MapleLeafBackground } from '../components/maple-leaf-background'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 relative overflow-hidden">
      <MapleLeafBackground />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mb-4 bg-white text-red-600">
            We&apos;re Here to Help, Eh!
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Let&apos;s Have a Chinwag!
          </h1>
          <p className="text-xl text-red-100">
            Your automotive queries are our cup of tea. Reach out and let&apos;s embark on this journey together, from coast to coast to coast!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-red-200">
            <div className="mb-6">
              <p className="text-lg text-red-700">
                Don&apos;t be shy, give us a shout! Fill out the form below or give us a ring directly. Let us know what&apos;s on your mind and how we can lend a hand. We&apos;re as eager as a beaver to hear from you!
              </p>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-red-700">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full border-red-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-red-700">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full border-red-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-red-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border-red-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-red-700">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full border-red-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-red-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you, buddy?"
                    className="min-h-[150px] border-red-200"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
                >
                  Send &apos;er Off!
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {[
              { icon: Clock, title: 'Support hours', content: '24/7 Live Chat Support\nWe\'re always here, come rain or shine!' },
              { icon: Mail, title: 'Email us', content: process.env.NEXT_PUBLIC_WEBSITE_EMAIL },
              { icon: Phone, title: 'Give us a ring', content: process.env.NEXT_PUBLIC_WEBSITE_PHONE },
            ].map((item, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-all duration-300 border border-red-200">
                <item.icon className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-red-700 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

