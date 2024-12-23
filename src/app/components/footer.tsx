import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-red-600 text-white">
      <div className="container px-4 py-12 md:py-16 lg:py-20 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Vehicle History</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sample" className="text-red-100 hover:text-white">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link href="/license-plate-lookup" className="text-red-100 hover:text-white">
                  License Plate Lookup
                </Link>
              </li>
              <li>
                <Link href="/" className="text-red-100 hover:text-white">
                  VIN Decoder
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Window Stickers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/window-sticker" className="text-red-100 hover:text-white">
                  Get Window Sticker
                </Link>
              </li>
              <li>
                <Link href="/sample?tab=sticker" className="text-red-100 hover:text-white">
                  Sample Sticker
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pricing" className="text-red-100 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/for-dealers" className="text-red-100 hover:text-white">
                  For Dealers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-red-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-red-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-red-100 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-red-100 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-red-500 pt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-red-100 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-red-100 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-red-100 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-red-100 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-red-100">
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_WEBSITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

