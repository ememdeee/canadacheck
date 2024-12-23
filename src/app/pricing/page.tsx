import { MapleLeafBackground } from "../components/maple-leaf-background";
import { PricingCards } from "../components/pricing-card";

export default function PricingPage() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            Invest in Your Vehicle&apos;s Canadian Journey
          </h1>
          <p className="text-lg text-red-700 mb-8">
            Unlock the power of knowledge with our value-packed plans, eh! Dive deep into your vehicle&apos;s past and secure your automotive future from coast to coast to coast!
          </p>
        </div>

        <PricingCards cardStyle="canadawebsite" />

        <div className="mt-12 text-center">
          <p className="text-sm text-red-600">
            All plans include our 30-day money-back guarantee, backed by true Canadian hospitality. No questions asked!
          </p>
        </div>
      </div>
    </section>
  )
}

