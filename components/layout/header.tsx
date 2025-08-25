// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import Link from "next/link"
// // // // import { usePathname } from "next/navigation"
// // // // import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
// // // // import { Button } from "@/components/ui/button"
// // // // import { cn } from "@/lib/utils"

// // // // const navigation = [
// // // //   { name: "Home", href: "/" },
// // // //   { name: "About", href: "/about" },
// // // //   {
// // // //     name: "Projects",
// // // //     href: "/projects",
// // // //     submenu: [
// // // //       { name: "RRL Palacio", href: "/projects/palacio" },
// // // //       { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
// // // //       { name: "RRL Sequoia", href: "/projects/sequoia" },
// // // //       { name: "RRL Nature Woods", href: "/projects/nature-woods" },
// // // //     ],
// // // //   },
// // // //   { name: "Awards", href: "/awards" },
// // // //   { name: "Contact", href: "/contact" },
// // // // ]

// // // // export function Header() {
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// // // //   const [scrolled, setScrolled] = useState(false)
// // // //   const pathname = usePathname()

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setScrolled(window.scrollY > 20)
// // // //     }
// // // //     window.addEventListener("scroll", handleScroll)
// // // //     return () => window.removeEventListener("scroll", handleScroll)
// // // //   }, [])

// // // //   return (
// // // //     <>
// // // //       {/* Top Bar */}
// // // //       <div className="bg-slate-900 text-white py-2 text-sm">
// // // //         <div className="container mx-auto px-4 flex justify-between items-center">
// // // //           <div className="flex items-center space-x-6">
// // // //             <div className="flex items-center space-x-2">
// // // //               <Phone className="h-3 w-3" />
// // // //               <span>+91-8068352626</span>
// // // //             </div>
// // // //             <div className="flex items-center space-x-2">
// // // //               <Mail className="h-3 w-3" />
// // // //               <span>enquiry@rrlbuildersanddevelopers.com</span>
// // // //             </div>
// // // //           </div>
// // // //           <div className="hidden lg:block">
// // // //             <span>🏆 Times Real Estate Icon Awards 2025 Winner</span>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Header */}
// // // //       <header
// // // //         className={cn(
// // // //           "sticky top-0 z-50 transition-all duration-300",
// // // //           scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white",
// // // //         )}
// // // //       >
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="flex justify-between items-center py-4">
// // // //             {/* Logo */}
// // // //             <Link href="/" className="flex items-center space-x-3">
// // // //               <div className="relative">
// // // //                 <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
// // // //                   <span className="text-white font-bold text-xl">RRL</span>
// // // //                 </div>
// // // //                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // // //                   <span className="text-white text-xs">★</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div>
// // // //                 <div className="font-playfair font-bold text-2xl text-slate-900">RRL GROUP</div>
// // // //                 <div className="text-xs text-slate-600 font-medium">BUILDERS & DEVELOPERS</div>
// // // //                 <div className="text-xs text-gradient font-semibold">SINCE 1996</div>
// // // //               </div>
// // // //             </Link>

// // // //             {/* Desktop Navigation */}
// // // //             <nav className="hidden lg:flex items-center space-x-8">
// // // //               {navigation.map((item) => (
// // // //                 <div key={item.name} className="relative group">
// // // //                   <Link
// // // //                     href={item.href}
// // // //                     className={cn(
// // // //                       "flex items-center space-x-1 text-slate-700 hover:text-amber-600 font-medium transition-colors py-2",
// // // //                       pathname === item.href && "text-amber-600",
// // // //                     )}
// // // //                   >
// // // //                     <span>{item.name}</span>
// // // //                     {item.submenu && <ChevronDown className="h-4 w-4" />}
// // // //                   </Link>

// // // //                   {item.submenu && (
// // // //                     <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
// // // //                       <div className="py-2">
// // // //                         {item.submenu.map((subItem) => (
// // // //                           <Link
// // // //                             key={subItem.name}
// // // //                             href={subItem.href}
// // // //                             className="block px-4 py-2 text-sm text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
// // // //                           >
// // // //                             {subItem.name}
// // // //                           </Link>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </nav>

// // // //             {/* CTA Button */}
// // // //             <div className="hidden lg:block">
// // // //               <Button className="gradient-primary text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
// // // //                 Get Free Consultation
// // // //               </Button>
// // // //             </div>

// // // //             {/* Mobile menu button */}
// // // //             <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// // // //               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // //             </button>
// // // //           </div>

// // // //           {/* Mobile Navigation */}
// // // //           {mobileMenuOpen && (
// // // //             <div className="lg:hidden py-4 border-t bg-white">
// // // //               <nav className="flex flex-col space-y-4">
// // // //                 {navigation.map((item) => (
// // // //                   <Link
// // // //                     key={item.name}
// // // //                     href={item.href}
// // // //                     className={cn(
// // // //                       "text-slate-700 hover:text-amber-600 font-medium transition-colors",
// // // //                       pathname === item.href && "text-amber-600",
// // // //                     )}
// // // //                     onClick={() => setMobileMenuOpen(false)}
// // // //                   >
// // // //                     {item.name}
// // // //                   </Link>
// // // //                 ))}
// // // //                 <Button className="gradient-primary text-white font-semibold w-fit rounded-full">
// // // //                   Get Free Consultation
// // // //                 </Button>
// // // //               </nav>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </header>
// // // //     </>
// // // //   )
// // // // }

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import Link from "next/link"
// // // import { usePathname } from "next/navigation"
// // // import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { cn } from "@/lib/utils"
// // // import Image from "next/image"

// // // const navigation = [
// // //   { name: "Home", href: "/" },
// // //   { name: "About", href: "/about" },
// // //   {
// // //     name: "Projects",
// // //     href: "/projects",
// // //     submenu: {
// // //       "Residential Projects": [
// // //         { name: "RRL Palacio - Ready to Move", href: "/projects/palacio" },
// // //         { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
// // //         { name: "RRL Nature Woods", href: "/projects/nature-woods" },
// // //       ],
// // //       "Villa Projects": [{ name: "RRL Sequoia", href: "/projects/sequoia" }],
// // //       "Commercial Projects": [
// // //         { name: "RRL Oasis", href: "/projects/oasis" },
// // //         { name: "RRL Towers", href: "/projects/towers" },
// // //         { name: "RRL Complex", href: "/projects/complex" },
// // //       ],
// // //     },
// // //   },
// // //   { name: "Awards", href: "/awards" },
// // //   // { name: "Partners", href: "/partners" },
// // //   { name: "Contact", href: "/contact" },
// // // ]

// // // export function Header() {
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// // //   const [scrolled, setScrolled] = useState(false)
// // //   const pathname = usePathname()

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 20)
// // //     }
// // //     window.addEventListener("scroll", handleScroll)
// // //     return () => window.removeEventListener("scroll", handleScroll)
// // //   }, [])

// // //   return (
// // //     <>
// // //       {/* Top Bar */}
// // //       <div className="bg-slate-900 text-white py-2 text-sm">
// // //         <div className="container mx-auto px-4 flex justify-between items-center">
// // //           <div className="flex items-center space-x-6">
// // //             <div className="flex items-center space-x-2">
// // //               <Phone className="h-3 w-3" />
// // //               <span>+91-8068352626</span>
// // //             </div>
// // //             <div className="flex items-center space-x-2">
// // //               <Mail className="h-3 w-3" />
// // //               <span>enquiry@rrlbuildersanddevelopers.com</span>
// // //             </div>
// // //           </div>
// // //           <div className="hidden lg:block">
// // //             <span>🏆 Times Real Estate Icon Awards 2025 Winner</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Header */}
// // //       <header
// // //         className={cn(
// // //           "sticky top-0 z-50 transition-all duration-300",
// // //           scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white",
// // //         )}
// // //       >
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex justify-between items-center py-4">
// // //             {/* Logo */}
// // //             <Link href="/" className="flex items-center space-x-3">
// // //               <div className="relative">
// // //                 <Image
// // //                   src="/logo.png"
// // //                   alt="RRL Group Logo"
// // //                   width={180}
// // //                   height={60}
// // //                   className="h-14 w-auto"
// // //                 />
// // //               </div>
// // //             </Link>

// // //             {/* Desktop Navigation */}
// // //             <nav className="hidden lg:flex items-center space-x-8">
// // //               {navigation.map((item) => (
// // //                 <div key={item.name} className="relative group">
// // //                   <Link
// // //                     href={item.href}
// // //                     className={cn(
// // //                       "flex items-center space-x-1 text-slate-700 hover:text-amber-600 font-medium transition-colors py-2",
// // //                       pathname === item.href && "text-amber-600",
// // //                     )}
// // //                   >
// // //                     <span>{item.name}</span>
// // //                     {item.submenu && <ChevronDown className="h-4 w-4" />}
// // //                   </Link>

// // //                   {item.submenu && (
// // //                     <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
// // //                       <div className="p-8">
// // //                         <div className="grid grid-cols-3 gap-8">
// // //                           {Object.entries(item.submenu).map(([category, projects]) => (
// // //                             <div key={category}>
// // //                               <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide border-b border-amber-200 pb-2">
// // //                                 {category}
// // //                               </h3>
// // //                               <div className="space-y-3">
// // //                                 {projects.map((project) => (
// // //                                   <Link
// // //                                     key={project.name}
// // //                                     href={project.href}
// // //                                     className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-3 py-2 rounded-lg transition-all duration-200"
// // //                                   >
// // //                                     {project.name}
// // //                                   </Link>
// // //                                 ))}
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </nav>

// // //             {/* CTA Button */}
// // //             <div className="hidden lg:block">
// // //               <Button className="gradient-primary text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
// // //                 Get Free Consultation
// // //               </Button>
// // //             </div>

// // //             {/* Mobile menu button */}
// // //             <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// // //               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //             </button>
// // //           </div>

// // //           {/* Mobile Navigation */}
// // //           {mobileMenuOpen && (
// // //             <div className="lg:hidden py-4 border-t bg-white">
// // //               <nav className="flex flex-col space-y-4">
// // //                 {navigation.map((item) => (
// // //                   <Link
// // //                     key={item.name}
// // //                     href={item.href}
// // //                     className={cn(
// // //                       "text-slate-700 hover:text-amber-600 font-medium transition-colors",
// // //                       pathname === item.href && "text-amber-600",
// // //                     )}
// // //                     onClick={() => setMobileMenuOpen(false)}
// // //                   >
// // //                     {item.name}
// // //                   </Link>
// // //                 ))}
// // //                 <Button className="gradient-primary text-white font-semibold w-fit rounded-full">
// // //                   Get Free Consultation
// // //                 </Button>
// // //               </nav>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </header>
// // //     </>
// // //   )
// // // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import { Menu, X, ChevronDown } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { cn } from "@/lib/utils"
// // import Image from "next/image"

// // const navigation = [
// //   { name: "Home", href: "/" },
// //   { name: "About", href: "/about" },
// //   {
// //     name: "Projects",
// //     href: "/projects",
// //     submenu: [
// //       { name: "RRL Palacio", href: "/projects/palacio" },
// //       { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
// //       { name: "RRL Sequoia", href: "/projects/sequoia" },
// //     ],
// //   },
// //   { name: "Awards", href: "/awards" },
// //   { name: "Contact", href: "/contact" },
// // ]

// // export function Header() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// //   const [scrolled, setScrolled] = useState(false)
// //   const pathname = usePathname()

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20)
// //     }
// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   return (
// //     <header
// //       className={cn(
// //         "sticky top-0 z-50 transition-all duration-300",
// //         scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-gold-900/50" : "bg-black",
// //       )}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="flex justify-between items-center py-4">
// //           <Link href="/" className="flex items-center space-x-3">
// //             <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
// //           </Link>

// //           <nav className="hidden lg:flex items-center space-x-8">
// //             {navigation.map((item) => (
// //               <div key={item.name} className="relative group">
// //                 <Link
// //                   href={item.href}
// //                   className={cn(
// //                     "flex items-center space-x-1 text-gray-300 hover:text-gold-400 font-medium transition-colors",
// //                     pathname === item.href && "text-gold-400",
// //                   )}
// //                 >
// //                   <span>{item.name}</span>
// //                   {item.submenu && <ChevronDown className="h-4 w-4" />}
// //                 </Link>
// //                 {item.submenu && (
// //                   <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gold-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
// //                     <div className="py-2">
// //                       {item.submenu.map((subItem) => (
// //                         <Link
// //                           key={subItem.name}
// //                           href={subItem.href}
// //                           className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-gold-900/20"
// //                         >
// //                           {subItem.name}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </nav>

// //           <div className="hidden lg:block">
// //             <Button className="bg-gold-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-gold-600 transition-all">
// //               Get Free Consultation
// //             </Button>
// //           </div>

// //           <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //             {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
// //           </button>
// //         </div>

// //         {mobileMenuOpen && (
// //           <div className="lg:hidden py-4 border-t border-gold-800">
// //             <nav className="flex flex-col space-y-4">
// //               {navigation.map((item) => (
// //                 <Link
// //                   key={item.name}
// //                   href={item.href}
// //                   className={cn(
// //                     "text-gray-300 hover:text-gold-400 font-medium",
// //                     pathname === item.href && "text-gold-400",
// //                   )}
// //                   onClick={() => setMobileMenuOpen(false)}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}
// //               <Button className="bg-gold-500 text-black font-semibold w-full rounded-full">
// //                 Get Free Consultation
// //               </Button>
// //             </nav>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import Image from "next/image"

// // ADDED: Full list of projects for the dropdown menu
// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   {
//     name: "Projects",
//     href: "/projects",
//     submenu: [
//       { name: "RRL Palacio", href: "/projects/palacio" },
//       { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
//       { name: "RRL Nature Woods", href: "/projects/nature-woods" },
//       { name: "RRL Sequoia", href: "/projects/sequoia" },
//       { name: "RRL Oasis", href: "/projects/oasis" },
//       { name: "RRL Towers", href: "/projects/towers" },
//       { name: "RRL Complex", href: "/projects/complex" },
//     ],
//   },
//   { name: "Awards", href: "/awards" },
//   { name: "Contact", href: "/contact" },
// ]

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 transition-all duration-300",
//         scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-gold-900/50" : "bg-black",
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <Link href="/" className="flex items-center space-x-3">
//             <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
//           </Link>

//           <nav className="hidden lg:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <div key={item.name} className="relative group">
//                 <Link
//                   href={item.href}
//                   className={cn(
//                     "flex items-center space-x-1 text-gray-300 hover:text-gold-400 font-medium transition-colors",
//                     pathname === item.href && "text-gold-400",
//                   )}
//                 >
//                   <span>{item.name}</span>
//                   {item.submenu && <ChevronDown className="h-4 w-4" />}
//                 </Link>
//                 {item.submenu && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                     <div className="py-2">
//                       {item.submenu.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           href={subItem.href}
//                           className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-gold-900/20"
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           <div className="hidden lg:block">
//             <Button className="bg-gold-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-gold-600 transition-all">
//               Get Free Consultation
//             </Button>
//           </div>

//           <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-gold-800">
//             <nav className="flex flex-col space-y-4">
//               {navigation.map((item) => (
//                  // Simple link for mobile, no dropdown needed
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={cn(
//                     "text-gray-300 hover:text-gold-400 font-medium",
//                     pathname === item.href && "text-gold-400",
//                   )}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Button className="bg-gold-500 text-black font-semibold w-full rounded-full">
//                 Get Free Consultation
//               </Button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Projects",
    href: "/projects",
    submenu: [
      { name: "RRL Palacio", href: "/projects/palacio" },
      { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
      { name: "RRL Nature Woods", href: "/projects/nature-woods" },
      { name: "RRL Sequoia", href: "/projects/sequoia" },
      { name: "RRL Oasis", href: "/projects/oasis" },
      { name: "RRL Towers", href: "/projects/towers" },
      { name: "RRL Complex", href: "/projects/complex" },
    ],
  },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
]

// New component for the Brochure Download Modal
function BrochureDownloadForm({ isMobile = false }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted for brochure download:", formData)

    // Trigger the brochure download
    const link = document.createElement("a")
    link.href = "/brochures/rrl-company-brochure.pdf" // Using a general company brochure
    link.download = "RRL-Company-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Close the dialog and reset the form
    setOpen(false)
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "bg-gold-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-gold-600 transition-all",
            isMobile && "w-full"
          )}
        >
          Download Project Details
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black border-gold-800 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-gold-400">Download Brochures</DialogTitle>
          <DialogDescription className="text-gray-400">
            Please fill in your details below to receive our project brochures.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-gold-500 text-black hover:bg-gold-600">
              <Download className="mr-2 h-4 w-4" />
              Submit & Download
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-gold-900/50" : "bg-black",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-gray-300 hover:text-gold-400 font-medium transition-colors",
                    pathname === item.href && "text-gold-400",
                  )}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-gold-900/20"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            {/* Replaced Button with the new Dialog Form Component */}
            <BrochureDownloadForm />
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold-800">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-300 hover:text-gold-400 font-medium",
                    pathname === item.href && "text-gold-400",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Replaced Button with the new Dialog Form Component for mobile */}
              <BrochureDownloadForm isMobile={true} />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}