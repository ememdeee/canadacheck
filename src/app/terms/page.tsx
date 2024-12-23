import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { MapleLeafBackground } from "../components/maple-leaf-background"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      <MapleLeafBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            Terms & Conditions
          </h1>
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-600">
            VehicleInsights Canada Website Terms of Use
          </Badge>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-red-800">Speak to a Canadian customer service representative:</h3>
                  <p className="text-red-700 mb-1">Call Toll Free: 1-866-EH-HELLO (1-866-344-3556)</p>
                  <div className="flex items-center text-red-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Open 7 days a week, eh!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-red-800">Our Canadian Headquarters</h3>
                  <p className="text-red-700">
                    123 Maple Street<br />
                    Toronto, ON M5V 2T6<br />
                    Canada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-4xl mx-auto text-red-800">
          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">1. AGREEMENT</h2>
            <p className="text-red-600 mb-8">
              Welcome to VehicleInsightsCanada.com! By using our website, you agree to be bound by these Terms of Use (the &quot;Agreement&quot;), constituting a legally binding agreement between VehicleInsights Canada (hereinafter, &quot;VehicleInsights Canada&quot; or &quot;We&quot; or &quot;Our&quot;) and you (in either case, &quot;You&quot; or &quot;Your&quot;) concerning Your use of VehicleInsights Canada&quot;s website (the &quot;Website&quot;) and the services available through the Website (the &quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">2. PRIVACY POLICY</h2>
            <p className="text-red-600 mb-8">
              VehicleInsights Canada collects identifying and billing information in accordance with Canadian privacy laws. Any personally identifiable information you provide may be used to notify you of new products, product changes, or offer discounts up to 50% off, eh!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">3. CHANGES TO AGREEMENT AND PRIVACY POLICY</h2>
            <p className="text-red-600 mb-8">
              Internet technology and applicable Canadian laws, rules, and regulations change frequently. Accordingly, VehicleInsights Canada reserves the right to change this agreement and its privacy policy at any time upon notice to you, to be given by the posting of a new version or a change notice on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">4. ELIGIBILITY</h2>
            <p className="text-red-600 mb-8">
              By using the website or services, you represent and warrant that you are at least 18 years old (or the age of majority in your province or territory) and are otherwise legally qualified to enter into and form contracts under applicable Canadian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">5. ROLE</h2>
            <p className="text-red-600 mb-8">
              VehicleInsights Canada is a technology solution that serves as a third-party platform. You use the Website and Services at Your own risk, pursuant to Section: ASSUMPTION OF RISK; RELEASE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">6. LICENSE</h2>
            <p className="text-red-600 mb-8">
              Unless otherwise stated, VehicleInsights Canada owns the intellectual property rights for all material on https://www.vehicleinsightscanada.com/. All intellectual property rights are reserved. You may view and/or print pages from https://www.vehicleinsightscanada.com/ for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">7. NO RELIANCE ON THIRD PARTY CONTENT</h2>
            <p className="text-red-600 mb-8">
              The information on the Website is provided for information purposes only. The Website and Services are provided as a technology solution and VehicleInsights Canada shall not be liable for any delay or failure to make available the Report.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">8. ASSUMPTION OF RISK; RELEASE</h2>
            <p className="text-red-600 mb-8">
              You knowingly and freely assume all risk when using the website and services. You, on behalf of yourself, your personal representatives, and your heirs, hereby voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify VehicleInsights Canada and its shareholders, officers, directors, employees, agents, affiliates, consultants, representatives, sublicenses, successors, and assigns from any and all claims, actions, or losses for bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or other damages or harm, whether to you or to third parties, that may result from your use of the website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">9. USER INFORMATION; PASSWORD PROTECTION</h2>
            <p className="text-red-600 mb-8">
              To access and/or use the Website and Services, You may be asked to provide certain registration details or other information. You represent and warrant that all user information you provide in connection with your use of the Website and Services will be current, complete, and accurate, and that you will update that information as necessary to maintain its completeness and accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">10. RESERVED RIGHTS FOR FEES</h2>
            <p className="text-red-600 mb-8">
              You acknowledge and agree that VehicleInsights Canada reserves the right to charge for access to the Website and use of the Services, in accordance with the Fees that are clearly disclosed throughout the Website. All fees are in Canadian dollars unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">11. THIRD-PARTY WEBSITES</h2>
            <p className="text-red-600 mb-8">
              The Website is linked with the websites of third parties (&quot;Third-Party Websites&quot;), some of whom may have established relationships with VehicleInsights Canada and some of whom may not. VehicleInsights Canada does not have control over the content and performance of Third-Party Websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">12. GOVERNING LAW; JURISDICTION AND VENUE</h2>
            <p className="text-red-600 mb-8">
              This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of or related to this Agreement or the Website shall be instituted exclusively in the federal courts of Canada or the courts of the Province of Ontario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-red-700">13. CONTACT INFORMATION</h2>
            <p className="text-red-600 mb-8">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="flex items-center space-x-2 text-red-600">
              <Mail className="h-5 w-5" />
              <span>support@vehicleinsightscanada.com</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

