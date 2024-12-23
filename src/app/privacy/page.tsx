import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, FileText, Mail } from 'lucide-react'
import { MapleLeafBackground } from "../components/maple-leaf-background"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Privacy Policy
            </h1>
            <Badge variant="secondary" className="mb-8 bg-red-100 text-red-600">
              EFFECTIVE DATE: 01-JAN-2024
            </Badge>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none text-red-800">
            <p className="text-red-700 mb-8">
              Thank you for visiting https://vehicleinsightscanada.com (&apos;the Site&apos;). The Site is an Internet property of VehicleInsights Canada and its affiliated companies (&quot;We&quot;, &quot;We&quot; or &quot;us&quot;). This online privacy policy provides details about how We handle information that we collect about you. By visiting this Site, you are accepting the practices described in this privacy policy (&apos;Privacy Policy&apos;).
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">1. Compliance with Canadian Privacy Laws</h2>
            <p className="text-red-600 mb-8">
              VehicleInsights Canada is committed to protecting your privacy and complying with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial privacy legislation. We collect, use, and disclose your personal information only in accordance with these laws and this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">2. Information We Collect</h2>
            <p className="text-red-600 mb-8">
              We collect various types of information from our users to provide and improve our services:
            </p>
            <ul className="list-disc pl-6 mb-8 text-red-600">
              <li>Personal Information: This may include your name, email address, phone number, and billing information.</li>
              <li>Vehicle Information: When you use our services, we collect information about the vehicles you search for, including VIN numbers and license plate numbers.</li>
              <li>Usage Data: We collect data about how you interact with our website, including pages visited and features used.</li>
              <li>Technical Data: This includes your IP address, browser type, and device information.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">3. How We Use Your Information</h2>
            <p className="text-red-600 mb-8">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-red-600">
              <li>Providing and maintaining our services</li>
              <li>Improving and personalizing user experience</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative information and important notices</li>
              <li>Providing customer support</li>
              <li>Conducting research and analysis to improve our services</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">4. Disclosure of Your Information</h2>
            <p className="text-red-600 mb-8">
              We may disclose your personal information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-8 text-red-600">
              <li>To our subsidiaries and affiliates</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>To fulfill the purpose for which you provide it</li>
              <li>With your consent</li>
              <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">5. Data Security</h2>
            <p className="text-red-600 mb-8">
              We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption of sensitive data and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">6. Your Rights</h2>
            <p className="text-red-600 mb-8">
              Under Canadian privacy laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-red-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Withdraw consent for certain types of processing</li>
              <li>Request the deletion of your personal information in certain circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">7. Changes to Our Privacy Policy</h2>
            <p className="text-red-600 mb-8">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;EFFECTIVE DATE&quot; at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">8. Contact Us</h2>
            <p className="text-red-600 mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <Card className="mb-8 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-6 w-6 text-red-600" />
                  <span className="text-red-700">privacy@vehicleinsightscanada.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FileText className="h-6 w-6 text-red-600" />
                  <address className="text-red-700 not-italic">
                    VehicleInsights Canada<br />
                    123 Maple Street<br />
                    Toronto, ON M5V 2T6<br />
                    Canada
                  </address>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col md:flex-row justify-between items-center bg-red-100 p-6 rounded-lg">
              <div className="flex items-center mb-4 md:mb-0">
                <Shield className="h-8 w-8 text-red-600 mr-4" />
                <span className="text-red-700 font-semibold">Your privacy is our priority, eh!</span>
              </div>
              <div className="flex items-center">
                <Lock className="h-8 w-8 text-red-600 mr-4" />
                <span className="text-red-700 font-semibold">Data secured with Canadian standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

