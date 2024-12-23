'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Download, Search, Calendar, FileText, Palette, List, DollarSign, ChevronLeft, ChevronRight, Eye, TrendingUp, ShieldCheck, Zap } from 'lucide-react'
import Image from 'next/image'
import { MapleLeafBackground } from '../components/maple-leaf-background'
import SiteForm from '../components/SiteForm'

export default function WindowSticker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-600">
            Trusted by over 1,000,000 Canadians
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            Unlock Your Canadian Vehicle&apos;s Birth Certificate
          </h1>
          <p className="text-lg text-red-700">
            Uncover the original glory of your ride with our cutting-edge Window Sticker Lookup. It&apos;s like time travel for your car, eh!
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12 border-red-200">
          <SiteForm formStyle='canadawebsite' />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.8/5</span>
            <span className="text-red-600">(600+ Reviews)</span>
          </div>
          <div className="flex gap-4">
            {['The Globe and Mail', 'CBC', 'AutoTrader.ca'].map((brand) => (
              <div key={brand} className="text-red-600 font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Categories Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-red-800">
            Find Window Stickers for all types of Canadian vehicles
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Cars",
              "SUVs and Pickups",
              "Electric vehicles",
              "Classic cars",
              "Trucks",
              "Motorcycles"
            ].map((category, index) => (
              <Button
                key={index}
                variant={category === "SUVs and Pickups" ? "default" : "outline"}
                className={`min-w-[140px] ${category === "SUVs and Pickups" ? "bg-red-600 hover:bg-red-700 text-white" : "border-red-200 text-red-600 hover:bg-red-50"}`}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <Image
              src="/sticker-sample.png"
              alt="Sample Canadian Window Sticker"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                View window sticker
              </Button>
            </div>
          </div>
        </div>

        {/* What is a Window Sticker Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              What is a Window Sticker?
            </h2>
            <p className="text-lg text-red-700">
              A window sticker (also known as a Monroney label in the USA) is mandated for display on all new cars in Canada. It provides essential information about the car, including:
            </p>
            <ul className="space-y-4">
              {[
                { icon: FileText, text: "Vehicle specifications and features" },
                { icon: Download, text: "Original MSRP and pricing details" },
                { icon: Search, text: "Safety ratings and fuel economy" },
                { icon: Calendar, text: "Manufacturing information" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-red-600" />
                  <span className="text-red-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/Third_Section_Image.png"
              alt="Sample Canadian Window Sticker"
              width={600}
              height={800}
            />
          </div>
        </div>

        {/* How to Read a Window Sticker Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Unlock the Secrets of Your Canadian Window Sticker
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-red-700">
                  Your window sticker is a treasure trove of information. Learn how to decode it and gain valuable insights about your Canadian vehicle!
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: Eye, title: "Vehicle Details", description: "Uncover make, model, year, and VIN" },
                    { icon: Palette, title: "Colour & Style", description: "Explore exterior and interior options" },
                    { icon: List, title: "Features & Equipment", description: "Discover standard and optional features" },
                    { icon: DollarSign, title: "Pricing Breakdown", description: "Understand MSRP and additional costs in CAD" },
                    { icon: Zap, title: "Performance Specs", description: "Learn about engine, transmission, and fuel economy" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-red-800">{item.title}</h3>
                        <p className="text-red-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                  Get Your Canadian Window Sticker Now
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/Fourth_Section_Image.png"
                  alt="Canadian Window Sticker Diagram"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Interactive Canadian Window Sticker Guide</p>
                  <p className="text-xs">Hover over sections to learn more</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Window Stickers Matter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Why Window Stickers Are Your Secret Weapon in the Canadian Market
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Boost Your Selling Power",
                  description: "Showcase your vehicle&apos;s true value and stand out in the Canadian market. Window stickers help you command top dollar for your ride."
                },
                {
                  icon: ShieldCheck,
                  title: "Build Instant Trust",
                  description: "Transparency is key in any transaction. Window stickers provide verified information, creating confidence in potential Canadian buyers."
                },
                {
                  icon: Zap,
                  title: "Streamline Your Sale",
                  description: "Armed with all the details, Canadian buyers can make faster decisions. Reduce back-and-forth and close deals more efficiently."
                }
              ].map((card, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg border-red-200">
                  <CardHeader>
                    <card.icon className="w-12 h-12 text-red-600 mb-4" />
                    <CardTitle className="text-red-800">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                Unlock Your Vehicle&apos;s Potential in the Canadian Market
              </Button>
            </div>
          </div>
        </section>

        {/* Fun Facts Carousel */}
        <div className="mt-16 bg-gradient-to-r from-red-100 to-red-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-red-800">Canadian Window Sticker Fun Facts</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out transform -translate-x-full">
                {[
                  "Window stickers became mandatory in Canada in the 1970s, following the U.S. lead.",
                  "Canadian window stickers include bilingual information in both English and French.",
                  "The fuel economy section uses metric units (L/100km) instead of MPG.",
                  "QR codes on modern Canadian window stickers can provide even more detailed vehicle information."
                ].map((fact, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-4">
                    <p className="text-center text-red-700">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="ghost" className="absolute top-1/2 left-0 transform -translate-y-1/2 text-red-600" onClick={() => {/* Implement previous slide */}}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="absolute top-1/2 right-0 transform -translate-y-1/2 text-red-600" onClick={() => {/* Implement next slide */}}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Benefits Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Window Stickers: Your Key to Smarter Car Buying in Canada
            </h2>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {[
                {
                  percentage: "47%",
                  source: "Canadian Auto Consumer Study",
                  text: "of Canadian online car shoppers rely on window stickers"
                },
                {
                  percentage: "65%",
                  source: "AutoTrader.ca",
                  text: "more likely to contact dealers with sticker info in Canada"
                },
                {
                  percentage: "30%",
                  source: "Canadian Vehicle Manufacturers' Association",
                  text: "boost in lead conversion with window stickers for Canadian dealerships"
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-600 transform -skew-x-12"></div>
                  <div className="relative">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.percentage}
                    </div>
                    <div className="text-sm text-red-700 mb-2">Source: {stat.source}</div>
                    <p className="text-red-800 font-medium">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-center mb-8 text-red-800">
              Empowering Every Step of the Canadian Car Journey
            </h3>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Buyers: Drive Informed in the Great White North",
                  icon: "🍁",
                  benefits: [
                    "Spot the best deals with easy comparisons across Canadian models",
                    "Avoid scams with verified vehicle info tailored to Canadian standards",
                    "Make confident decisions with complete feature lists for Canadian market vehicles",
                    "Compare efficiency and safety at a glance using Canadian metrics",
                    "Negotiate like a pro with pricing insights in Canadian dollars"
                  ]
                },
                {
                  title: "Sellers: Showcase with Canadian Pride",
                  icon: "🇨🇦",
                  benefits: [
                    "Highlight your car&quot;s best features, emphasizing Canadian-specific attributes",
                    "Justify your price with transparent specs relevant to Canadian buyers",
                    "Build trust through comprehensive information tailored to the Canadian market"
                  ]
                },
                {
                  title: "Canadian Dealerships: Elevate Your Business",
                  icon: "🏢",
                  benefits: [
                    "Stay compliant with Canadian regulations effortlessly",
                    "Stand out in the competitive Canadian auto market",
                    "Boost customer loyalty with transparency tailored to Canadian consumers",
                    "Streamline operations with accurate info specific to Canadian vehicles"
                  ]
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-200"
                >
                  <div className="p-6 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{category.icon}</span>
                      <h4 className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                        {category.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {category.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-red-600 shrink-0"></div>
                          <span className="text-red-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Classic Car Build Sheet Section */}
        <section className="py-12 bg-gradient-to-br from-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-red-800">
                  Classic Canadian Car Build Sheets
                </h2>
                <p className="text-lg text-red-700 mb-6">
                  Unlock your classic Canadian car&quot;s heritage with authentic build sheets. Verify specs and features for restoration or collection of iconic Canadian models.
                </p>
                <Button 
                  className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
                  size="lg"
                >
                  View Sample Canadian Build Sheet
                </Button>
              </div>
              <div className="md:w-1/2 relative group">
                <Image
                  src="/Fifth_Section_Image.png"
                  alt="Classic Canadian Car Build Sheet"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Authentic Canadian Details", description: "Access original specs and options for Canadian-market vehicles" },
                { title: "Verify Canadian History", description: "Confirm authenticity with factory docs specific to Canadian models" },
                { title: "Canadian Restoration Guide", description: "Get precise details for accurate restoration of Canadian classics" }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-red-200">
                  <h3 className="text-lg font-semibold mb-2 text-red-800">{feature.title}</h3>
                  <p className="text-sm text-red-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturer Directory Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-red-800">
              Window Stickers Lookup By VIN for All Canadian Manufacturers
            </h2>

            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {['A-C', 'D-F', 'G-I', 'J-L', 'M-O', 'P-R', 'S-U', 'V-Z'].map((group) => (
                  <Button
                    key={group}
                    variant="outline"
                    className="px-3 py-1 font-semibold hover:bg-red-50 hover:text-red-600 data-[state=active]:bg-red-100 data-[state=active]:text-red-600 border-red-200"
                    data-state={['A-C', 'G-I', 'M-O', 'S-U'].includes(group) ? 'active' : 'inactive'}
                  >
                    {group}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { group: 'A-C', brands: ['Acura', 'BMW', 'Chevrolet', 'Chrysler'] },
                { group: 'D-F', brands: ['Dodge', 'Ford', 'Fiat'] },
                { group: 'G-I', brands: ['GMC', 'Honda', 'Infiniti'] },
                { group: 'J-L', brands: ['Jeep', 'Kia', 'Lexus'] },
                { group: 'M-O', brands: ['Mazda', 'Mercedes-Benz', 'Nissan'] },
                { group: 'P-R', brands: ['Porsche', 'Ram', 'Renault'] },
                { group: 'S-U', brands: ['Subaru', 'Tesla', 'Toyota'] },
                { group: 'V-Z', brands: ['Volkswagen', 'Volvo'] }
              ].map((group) => (
                <div key={group.group} className="space-y-2">
                  <h3 className="text-lg font-bold text-red-600">{group.group}</h3>
                  {group.brands.map((brand) => (
                    <Button
                      key={brand}
                      variant="ghost"
                      className="w-full justify-start px-2 py-1 h-auto text-sm font-normal hover:bg-red-50 hover:text-red-600 text-red-700"
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dealer Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-800">
              Professional Window Sticker Solutions for Canadian Dealerships
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-red-700 mb-6">
                Enhance your dealership&quot;s professional image while ensuring compliance with Canadian regulations using our comprehensive window sticker solutions. Our customizable options help boost sales and streamline trade-in evaluations in the Canadian market.
              </p>
              <p className="text-lg text-red-700">
                We&apos;ve developed flexible window sticker solutions that cater to the unique needs of Canadian automotive dealerships, offering both standardized and custom options to match your specific business requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Standard Canadian Edition</h3>
                <p className="text-red-700 mb-6">
                  Elevate your Canadian dealership with our professionally branded window stickers. Featuring your dealership&quot;s identity alongside comprehensive vehicle details tailored for the Canadian market, our solution helps increase ROI and streamline sales processes with our intuitive window sticker platform.
                </p>
                <Button className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                  Explore Canadian Standard Options
                </Button>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Custom Canadian Edition</h3>
                <p className="text-red-700 mb-6">
                  Create fully personalized window stickers that perfectly match your Canadian brand. Incorporate your logo, business information, operating hours, location details, and more to transform every window sticker into a powerful marketing asset for the Canadian market.
                </p>
                <Button className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300">
                  Request Custom Canadian Solution
                </Button>
              </div>
            </div>
            

          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Readyto Unlock Your Canadian Vehicle&apos;s Full Story?
          </h2>
          <p className="mb-6 text-red-100">
            Get your original Canadian window sticker now and take control of your car&quot;s narrative, eh!
          </p>
          <Button size="lg" variant="secondary" className="hover:bg-white hover:text-red-600 transition-all duration-300">
            Get Your Canadian Window Sticker
          </Button>
        </div>
      </div>
    </div>
  )
}

