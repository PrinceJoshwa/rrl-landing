
// import Link from "next/link"
// import { Facebook, Linkedin, Mail, Phone, MapPin, Award } from "lucide-react"
// import Image from "next/image"

// // ADDED: Full list of property links
// const propertyLinks = [
//   { name: "RRL Palacio", href: "/projects/palacio" },
//   { name: "RRL Sequoia", href: "/projects/sequoia" },
//   { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
//   { name: "RRL Oasis", href: "/projects/oasis" },
//   { name: "RRL Nature Woods", href: "/projects/nature-woods" },
//   { name: "RRL Towers", href: "/projects/towers" },
//   { name: "RRL Complex", href: "/projects/complex" },
// ]

// // ADDED: "Privacy Policy" to quick links
// const quickLinks = [
//   { name: "Projects", href: "/projects" },
//   { name: "About Us", href: "/about" },
//   { name: "Awards", href: "/awards" },
//   { name: "Contact", href: "/contact" },
//   { name: "Privacy Policy", href: "/privacy" },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-black text-white border-t border-gold-800">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="space-y-6">
//             <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
//             {/* UPDATED: More detailed company description */}
//             <p className="text-gray-400 text-sm leading-relaxed">
//               We are RRL Builders and Developers, serving in the field of real estate since 1996. The Global Real Estate
//               Brand 2023 winner. Let us help you in finding your dream home and we believe in Affordability.
//             </p>
//             {/* ADDED: Awards highlight */}
//             <div className="flex items-center space-x-2 text-amber-400">
//               <Award className="h-4 w-4" />
//               <span className="text-sm font-medium">Times Real Estate Icon Awards 2025</span>
//             </div>
//             <div className="flex space-x-3">
//               <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
//                 <Mail className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-6 text-gold-400">Properties</h3>
//             <ul className="space-y-3">
//               {propertyLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-6 text-gold-400">Quick Links</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-6 text-gold-400">Get In Touch</h3>
//             <div className="space-y-3 text-sm text-gray-400">
//                 {/* UPDATED: More detailed contact info */}
//                 <div className="flex items-start space-x-3">
//                     <Mail className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
//                     <p>info@rrl.com</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                     <Phone className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
//                     <div>
//                         <p>+91-8068352626</p>
//                         <p>+91-73378 16991</p>
//                     </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                     <MapPin className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
//                     <p>RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gold-800 mt-12 pt-8 text-center">
//           {/* UPDATED: More detailed copyright notice */}
//           <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved to RRL Builders and Developers Pvt. Ltd.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

// Links for the footer columns
const projectLinks = [
  { name: "RRL Palacio", href: "/projects/palacio" },
  { name: "RRL Sequoia", href: "/projects/sequoia" },
  { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
  { name: "RRL Nature Woods", href: "/projects/nature-woods" },
  { name: "RRL Towers", href: "/projects/towers" },
]

const companyLinks = [

  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
]

const exploreLinks = [
  { name: "Our Partners", href: "/our-partners" },
  { name: "Events, Media & News", href: "/events-media-news" },
  { name: "FAQs", href: "/faq" },
  { name: "Careers", href: "/careers" },
  { name: "Channel Partners", href: "/channel-partners" },
  { name: "EMI Calculator", href: "/emi-calculator" },
]

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gold-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: Company Info & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneers of affordable luxury since 1996. We help you find your dream home.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
                <div>
                  <p>+91-8068352626</p>
                  <p>+91-73378 16991</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
                <p>info@rrl.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
                <p>RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
              </div>
            </div>
            <div className="flex space-x-3 pt-2">
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Projects */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gold-400">Projects</h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                   <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
                 </li>
              ))}
            </ul>
          </div>
          

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gold-400">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                   <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gold-400">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                   <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
                 </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gold-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} RRL Builders and Developers Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}