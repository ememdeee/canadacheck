'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { MapleLeafBackground } from '../components/maple-leaf-background'

const vehicleTypes = [
  {
    type: "Car",
    samples: [
      { title: "2023 Honda Civic", date: "09/2023", vin: "2HGFC2F59PH123456" },
      { title: "2022 Toyota Corolla", date: "08/2023", vin: "2T1BURHE0NC123456" },
      { title: "2021 Volkswagen Jetta", date: "07/2023", vin: "3VWC57BU6MM123456" },
      { title: "2020 Mazda3", date: "06/2023", vin: "3MZBPBCM7LM123456" }
    ]
  },
  {
    type: "Truck",
    samples: [
      { title: "2023 Ford F-150", date: "09/2023", vin: "1FTFW1E86NFA00001" },
      { title: "2022 Ram 1500", date: "08/2023", vin: "1C6SRFFT6NN123456" }
    ]
  },
  {
    type: "SUV",
    samples: [
      { title: "2023 Hyundai Tucson", date: "09/2023", vin: "5NMJDDAF7PH123456" },
      { title: "2022 Nissan Rogue", date: "08/2023", vin: "5N1AT3CA6NC123456" }
    ]
  }
]

const carBrands = [
  'Honda', 'Toyota', 'Ford', 'Chevrolet', 'Hyundai', 
  'Nissan', 'Mazda', 'Volkswagen', 'Kia', 'Subaru',
  'Jeep', 'Ram', 'GMC', 'Dodge', 'Lexus'
]

export default function SamplePage() {
  const [activeTab, setActiveTab] = useState("report")

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            Uncover Your Canadian Vehicle&apos;s Hidden Secrets
          </h1>
          <p className="text-lg text-red-700">
            Dive into our treasure trove of Canadian vehicle histories and window stickers. Experience the power of knowledge before your next automotive adventure!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
            <TabsTrigger value="report">Sample Report</TabsTrigger>
            <TabsTrigger value="sticker">Sample Sticker</TabsTrigger>
          </TabsList>
          <TabsContent value="report" className="space-y-12">
            {vehicleTypes.map((category) => (
              <div key={category.type} className="w-full">
                <h2 className="text-2xl font-semibold text-red-800 mb-6">
                  {category.type} History Reports
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.samples.map((sample) => (
                    <Card key={sample.title} className="group hover:shadow-lg transition-all duration-300 border border-red-200">
                      <CardContent className="p-4 space-y-4">
                        <div className="aspect-[3/1.91] relative bg-red-100 rounded-lg overflow-hidden">
                          <Image
                            src="/report-sample.jpg"
                            alt={`${sample.title} Report Preview`}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">
                            {sample.title}
                          </h3>
                          <div className="text-sm text-gray-500 pb-4">
                            <p>Report Date: {sample.date}</p>
                            <p className="truncate">VIN: {sample.vin}</p>
                          </div>
                          <Link href={"/report/vin/5TFDW5F14FX419868"}>
                            <Button 
                              variant="outline" 
                              className="w-full hover:bg-red-50 transition-colors duration-300 border-red-200 text-red-600"
                            >
                              View Sample
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="sticker" className="space-y-12">
            {vehicleTypes.map((category) => (
              <div key={category.type} className="w-full">
                <h2 className="text-2xl font-semibold text-red-800 mb-6">
                  {category.type} Window Stickers
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.samples.map((sample) => (
                    <Card key={sample.title} className="group hover:shadow-lg transition-all duration-300 border border-red-200">
                      <CardContent className="p-4 space-y-4">
                        <div className="aspect-[3/2.3] relative bg-red-100 rounded-lg overflow-hidden">
                          <Image
                            src="/sticker-sample.png"
                            alt={`${sample.title} Window Sticker Preview`}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">
                            {sample.title}
                          </h3>
                          <div className="text-sm text-gray-500 pb-4">
                            <p>Sticker Date: {sample.date}</p>
                            <p className="truncate">VIN: {sample.vin}</p>
                          </div>
                          <Link href={"/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC"}>
                            <Button 
                              variant="outline" 
                              className="w-full hover:bg-red-50 transition-colors duration-300 border-red-200 text-red-600"
                            >
                              View Sample
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-red-800">Looking for a Specific Canadian Make?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {carBrands.map((brand) => (
              <Link
                key={brand}
                href="#"
                className="px-4 py-2 bg-white rounded-lg hover:bg-red-50 transition-colors duration-300 text-sm text-red-600 hover:text-red-700 whitespace-nowrap overflow-hidden text-ellipsis border border-red-200"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Get Your Canadian {activeTab === "report" ? "Vehicle History Report" : "Window Sticker"}?
          </h2>
          <p className="mb-6 text-red-100">
            Access comprehensive Canadian vehicle information instantly
          </p>
          <Button size="lg" variant="secondary" className="hover:bg-white transition-all duration-300 text-red-600 hover:text-red-700">
            Get Started Now, Eh!
          </Button>
        </div>
      </div>
    </div>
  )
}

