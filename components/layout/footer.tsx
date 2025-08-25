// // import Link from "next/link"
// // import { Facebook, Linkedin, Mail, Phone, MapPin, Award } from "lucide-react"
// // import Image from "next/image"

// // const propertyLinks = [
// //   { name: "RRL Palacio", href: "/projects/palacio" },
// //   { name: "RRL Sequoia", href: "/projects/sequoia" },
// //   { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
// //   { name: "RRL Oasis", href: "/projects/oasis" },
// //   { name: "RRL Nature Woods", href: "/projects/nature-woods" },
// //   { name: "RRL Towers", href: "/projects/towers" },
// //   { name: "RRL Complex", href: "/projects/complex" },
// // ]

// // const quickLinks = [
// //   { name: "RRL Projects", href: "/projects" },
// //   { name: "About RRL", href: "/about" },
// //   { name: "RRL Awards", href: "/awards" },
// //   { name: "Contact RRL", href: "/contact" },
// //   { name: "Privacy Policy", href: "/privacy" },
// // ]

// // export function Footer() {
// //   return (
// //     <footer className="bg-slate-900 text-white relative overflow-hidden">
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 opacity-5">
// //         <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent"></div>
// //       </div>

// //       <div className="container mx-auto px-4 py-16 relative">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {/* Company Info */}
// //           <div className="lg:col-span-1 space-y-6">
// //             <div className="flex items-center space-x-3">
// //               <Image
// //                 // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-tXvIxVwZw5OQO7ujFIBV8ovBrR76Sz.png"
// //                 src="/logo.png"
// //                 alt="RRL Group Logo"
// //                 width={120}
// //                 height={40}
// //                 className="h-10 w-auto"
// //               />
// //             </div>

// //             <p className="text-slate-300 text-sm leading-relaxed">
// //               We are RRL Builders and Developers, serving in the field of real estate since 1996. The Global Real Estate
// //               Brand 2023 winner. Let us help you in finding your dream home and we believe in Affordability.
// //             </p>

// //             <div className="flex items-center space-x-2 text-amber-400">
// //               <Award className="h-4 w-4" />
// //               <span className="text-sm font-medium">Times Real Estate Icon Awards 2025</span>
// //             </div>

// //             <div className="flex space-x-3">
// //               <Link
// //                 href="#"
// //                 className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#d9a406] transition-colors duration-300"
// //               >
// //                 <Facebook className="h-5 w-5" />
// //               </Link>
// //               <Link
// //                 href="#"
// //                 className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#d9a406] transition-colors duration-300"
// //               >
// //                 <Linkedin className="h-5 w-5" />
// //               </Link>
// //               <Link
// //                 href="#"
// //                 className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#d9a406] transition-colors duration-300"
// //               >
// //                 <Mail className="h-5 w-5" />
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Properties Links */}
// //           <div>
// //             <h3 className="font-semibold text-lg mb-6 text-amber-400">Properties Links</h3>
// //             <ul className="space-y-3">
// //               {propertyLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <Link
// //                     href={link.href}
// //                     className="text-slate-300 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="font-semibold text-lg mb-6 text-amber-400">Quick Links</h3>
// //             <ul className="space-y-3">
// //               {quickLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <Link
// //                     href={link.href}
// //                     className="text-slate-300 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Get In Touch */}
// //           <div>
// //             <h3 className="font-semibold text-lg mb-6 text-amber-400">Get In Touch</h3>
// //             <div className="space-y-4">
// //               <div className="flex items-start space-x-3">
// //                 <Mail className="h-5 w-5 mt-1 text-amber-400 flex-shrink-0" />
// //                 <div>
// //                   <p className="text-slate-300 text-sm">enquiry@rrlbuildersanddevelopers.com</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-3">
// //                 <Phone className="h-5 w-5 mt-1 text-amber-400 flex-shrink-0" />
// //                 <div>
// //                   <p className="text-slate-300 text-sm">+91-8068352626</p>
// //                   <p className="text-slate-300 text-sm">+91-73378 16991</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-3">
// //                 <MapPin className="h-5 w-5 mt-1 text-amber-400 flex-shrink-0" />
// //                 <div>
// //                   <p className="text-slate-300 text-sm">
// //                     RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="border-t border-slate-800 mt-12 pt-8">
// //           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
// //             <p className="text-slate-400 text-sm">© All Rights Reserved to RRL Builders and Developers Pvt. Ltd.</p>
// //             <p className="text-slate-500 text-xs">Copyright 2025 - Designed and Developed by RRL Team</p>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// import Link from "next/link"
// import { Facebook, Linkedin, Mail } from "lucide-react"
// import Image from "next/image"

// const propertyLinks = [
//   { name: "RRL Palacio", href: "/projects/palacio" },
//   { name: "RRL Sequoia", href: "/projects/sequoia" },
//   { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
// ]

// const quickLinks = [
//   { name: "Projects", href: "/projects" },
//   { name: "About Us", href: "/about" },
//   { name: "Awards", href: "/awards" },
//   { name: "Contact", href: "/contact" },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-black text-white border-t border-gold-800">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="space-y-6">
//             <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
//             <p className="text-gray-400 text-sm">
//               Pioneers of affordable luxury since 1996. Winners of the Global Real Estate Brand 2023.
//             </p>
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
//             <p className="text-gray-400 text-sm">enquiry@rrlbuilders.com</p>
//             <p className="text-gray-400 text-sm">+91-8068352626</p>
//           </div>
//         </div>
//         <div className="border-t border-gold-800 mt-12 pt-8 text-center">
//           <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} RRL Builders and Developers Pvt. Ltd. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin, Award } from "lucide-react"
import Image from "next/image"

// ADDED: Full list of property links
const propertyLinks = [
  { name: "RRL Palacio", href: "/projects/palacio" },
  { name: "RRL Sequoia", href: "/projects/sequoia" },
  { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
  { name: "RRL Oasis", href: "/projects/oasis" },
  { name: "RRL Nature Woods", href: "/projects/nature-woods" },
  { name: "RRL Towers", href: "/projects/towers" },
  { name: "RRL Complex", href: "/projects/complex" },
]

// ADDED: "Privacy Policy" to quick links
const quickLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gold-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
            {/* UPDATED: More detailed company description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              We are RRL Builders and Developers, serving in the field of real estate since 1996. The Global Real Estate
              Brand 2023 winner. Let us help you in finding your dream home and we believe in Affordability.
            </p>
            {/* ADDED: Awards highlight */}
            <div className="flex items-center space-x-2 text-amber-400">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Times Real Estate Icon Awards 2025</span>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 text-white hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gold-400">Properties</h3>
            <ul className="space-y-3">
              {propertyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-400 text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gold-400">Get In Touch</h3>
            <div className="space-y-3 text-sm text-gray-400">
                {/* UPDATED: More detailed contact info */}
                <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
                    <p>enquiry@rrlbuildersanddevelopers.com</p>
                </div>
                <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
                    <div>
                        <p>+91-8068352626</p>
                        <p>+91-73378 16991</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 mt-1 text-gold-400 flex-shrink-0" />
                    <p>RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
                </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gold-800 mt-12 pt-8 text-center">
          {/* UPDATED: More detailed copyright notice */}
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved to RRL Builders and Developers Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}