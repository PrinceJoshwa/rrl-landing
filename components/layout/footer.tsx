import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin, Award } from "lucide-react"

const propertyLinks = [
  { name: "RRL Palacio", href: "/projects/palacio" },
  { name: "RRL Sequoia", href: "/projects/sequoia" },
  { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
  { name: "RRL Oasis", href: "/projects/oasis" },
  { name: "RRL Nature Woods", href: "/projects/nature-woods" },
  { name: "RRL Towers", href: "/projects/towers" },
  { name: "RRL Complex", href: "/projects/complex" },
]

const quickLinks = [
  { name: "RRL Projects", href: "/projects" },
  { name: "About RRL", href: "/about" },
  { name: "RRL Awards", href: "/awards" },
  { name: "Contact RRL", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">RRL</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-xl">RRL GROUP</div>
                <div className="text-xs text-slate-400">Since 1996</div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              We are RRL Builders and Developers, serving in the field of real estate since 1996. The Global Real Estate
              Brand 2023 winner. Let us help you in finding your dream home and we believe in Affordability.
            </p>

            <div className="flex items-center space-x-2 text-amber-400">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Times Real Estate Icon Awards 2025</span>
            </div>

            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-amber-400">Properties Links</h3>
            <ul className="space-y-3">
              {propertyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-amber-400">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">enquiry@rrlbuildersanddevelopers.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">+91-8068352626</p>
                  <p className="text-slate-300 text-sm">+91-73378 16991</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">
                    RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© All Rights Reserved to RRL Builders and Developers Pvt. Ltd.</p>
            <p className="text-slate-500 text-xs">Copyright 2025 - Designed and Developed by RRL Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
