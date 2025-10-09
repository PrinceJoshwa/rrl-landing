
// // "use client"

// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import { Menu, X, ChevronDown, Download } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// //   DialogFooter,
// // } from "@/components/ui/dialog"
// // import { Input } from "@/components/ui/input"
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
// //       { name: "RRL Nature Woods", href: "/projects/nature-woods" },
// //       { name: "RRL Sequoia", href: "/projects/sequoia" },
// //       { name: "RRL Oasis", href: "/projects/oasis" },
// //       { name: "RRL Towers", href: "/projects/towers" },
// //       { name: "RRL Complex", href: "/projects/complex" },
// //     ],
// //   },
// //   { name: "Awards", href: "/awards" },
// //   { name: "Contact", href: "/contact" },
// // ]

// // // New component for the Brochure Download Modal
// // function BrochureDownloadForm({ isMobile = false }) {
// //   const [open, setOpen] = useState(false)
// //   const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({ ...prev, [name]: value }))
// //   }

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     // In a real application, you would send this data to your backend
// //     console.log("Form submitted for brochure download:", formData)

// //     // Trigger the brochure download
// //     const link = document.createElement("a")
// //     link.href = "/brochures/rrl-company-brochure.pdf" // Using a general company brochure
// //     link.download = "RRL-Company-Brochure.pdf"
// //     document.body.appendChild(link)
// //     link.click()
// //     document.body.removeChild(link)

// //     // Close the dialog and reset the form
// //     setOpen(false)
// //     setFormData({ name: "", email: "", phone: "" })
// //   }

// //   return (
// //     <Dialog open={open} onOpenChange={setOpen}>
// //       <DialogTrigger asChild>
// //         <Button
// //           className={cn(
// //             "bg-gold-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-gold-600 transition-all",
// //             isMobile && "w-full"
// //           )}
// //         >
// //           Download Project Details
// //         </Button>
// //       </DialogTrigger>
// //       <DialogContent className="bg-black border-gold-800 text-white sm:max-w-[425px]">
// //         <DialogHeader>
// //           <DialogTitle className="text-gold-400">Download Brochures</DialogTitle>
// //           <DialogDescription className="text-gray-400">
// //             Please fill in your details below to receive our project brochures.
// //           </DialogDescription>
// //         </DialogHeader>
// //         <form onSubmit={handleSubmit} className="grid gap-4 py-4">
// //           <div className="grid grid-cols-4 items-center gap-4">
// //             <Input
// //               id="name"
// //               name="name"
// //               placeholder="Your Name"
// //               value={formData.name}
// //               onChange={handleInputChange}
// //               required
// //               className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
// //             />
// //           </div>
// //           <div className="grid grid-cols-4 items-center gap-4">
// //             <Input
// //               id="email"
// //               name="email"
// //               type="email"
// //               placeholder="Your Email"
// //               value={formData.email}
// //               onChange={handleInputChange}
// //               required
// //               className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
// //             />
// //           </div>
// //           <div className="grid grid-cols-4 items-center gap-4">
// //             <Input
// //               id="phone"
// //               name="phone"
// //               type="tel"
// //               placeholder="Your Phone Number"
// //               value={formData.phone}
// //               onChange={handleInputChange}
// //               required
// //               className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
// //             />
// //           </div>
// //           <DialogFooter>
// //             <Button type="submit" className="w-full bg-gold-500 text-black hover:bg-gold-600">
// //               <Download className="mr-2 h-4 w-4" />
// //               Submit & Download
// //             </Button>
// //           </DialogFooter>
// //         </form>
// //       </DialogContent>
// //     </Dialog>
// //   )
// // }

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
// //                   <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
// //             {/* Replaced Button with the new Dialog Form Component */}
// //             <BrochureDownloadForm />
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
// //               {/* Replaced Button with the new Dialog Form Component for mobile */}
// //               <BrochureDownloadForm isMobile={true} />
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
// import { Menu, X, ChevronDown, Download } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"
// import Image from "next/image"

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

// // Brochure Download Modal Component
// function BrochureDownloadForm({ isMobile = false }) {
//   const [open, setOpen] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted for brochure download:", formData)

//     const link = document.createElement("a")
//     link.href = "/brochures/rrl-company-brochure.pdf"
//     link.download = "RRL-Company-Brochure.pdf"
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)

//     setOpen(false)
//     setFormData({ name: "", email: "", phone: "" })
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button
//           className={cn(
//             "bg-gold-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-gold-600 transition-all",
//             isMobile && "w-full"
//           )}
//         >
//           Download Project Details
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-black border-gold-800 text-white sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle className="text-gold-400">Download Brochures</DialogTitle>
//           <DialogDescription className="text-gray-400">
//             Please fill in your details below to receive our project brochures.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="grid gap-4 py-4">
//           <Input
//             id="name" name="name" placeholder="Your Name" value={formData.name}
//             onChange={handleInputChange} required
//             className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
//           />
//           <Input
//             id="email" name="email" type="email" placeholder="Your Email" value={formData.email}
//             onChange={handleInputChange} required
//             className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
//           />
//           <Input
//             id="phone" name="phone" type="tel" placeholder="Your Phone Number" value={formData.phone}
//             onChange={handleInputChange} required
//             className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
//           />
//           <DialogFooter>
//             <Button type="submit" className="w-full bg-gold-500 text-black hover:bg-gold-600">
//               <Download className="mr-2 h-4 w-4" />
//               Submit & Download
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   // ADDED: State to manage the open submenu on mobile
//   const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
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
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
//             <BrochureDownloadForm />
//           </div>

//           <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-gold-800">
//             <nav className="flex flex-col space-y-2">
//               {/* MODIFIED: Logic to handle mobile submenus */}
//               {navigation.map((item) =>
//                 item.submenu ? (
//                   <div key={item.name}>
//                     <button
//                       onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.name ? null : item.name)}
//                       className="w-full flex justify-between items-center py-2 text-gray-300 hover:text-gold-400 font-medium"
//                     >
//                       <span>{item.name}</span>
//                       <ChevronDown
//                         className={cn("h-5 w-5 transition-transform", openMobileSubmenu === item.name && "rotate-180")}
//                       />
//                     </button>
//                     {openMobileSubmenu === item.name && (
//                       <div className="pl-4 pt-2 flex flex-col space-y-2">
//                         {item.submenu.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.href}
//                             className="block py-2 text-gray-400 hover:text-gold-400"
//                             onClick={() => setMobileMenuOpen(false)}
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={cn(
//                       "py-2 text-gray-300 hover:text-gold-400 font-medium",
//                       pathname === item.href && "text-gold-400",
//                     )}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ),
//               )}
//               <div className="pt-4">
//                 <BrochureDownloadForm isMobile={true} />
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }


"use client"

import { useState, useEffect, useRef } from "react" // Added useRef
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
      // { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
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

// Brochure Download Modal Component (No changes here)
function BrochureDownloadForm({ isMobile = false }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted for brochure download:", formData)

    const link = document.createElement("a")
    link.href = "/brochures/rrl-company-brochure.pdf"
    link.download = "RRL-Company-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

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
          <Input id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"/>
          <Input id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"/>
          <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" value={formData.phone} onChange={handleInputChange} required className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"/>
          <DialogFooter>
            <Button type="submit" className="w-full bg-gold-500 text-black hover:bg-gold-600"><Download className="mr-2 h-4 w-4" />Submit & Download</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  
  // --- CHANGES START HERE ---

  // 1. State to manage which desktop dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // 2. Effect to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [navRef])

  // --- CHANGES END HERE ---


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-gold-900/50" : "bg-black")}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3"><Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} /></Link>

          {/* --- DESKTOP NAVIGATION MODIFIED --- */}
          <nav className="hidden lg:flex items-center space-x-8" ref={navRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <div className="flex items-center">
                  {/* Link for the text */}
                  <Link
                    href={item.href}
                    className={cn("text-gray-300 hover:text-gold-400 font-medium transition-colors py-2", pathname === item.href && "text-gold-400")}
                  >
                    {item.name}
                  </Link>

                  {/* Button for the icon to toggle dropdown */}
                  {item.submenu && (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="ml-2 p-1 text-gray-300 hover:text-gold-400"
                    >
                      <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.name ? "rotate-180" : "")} />
                    </button>
                  )}
                </div>

                {/* The Dropdown Menu (now controlled by state) */}
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)} // Close dropdown on click
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
          
          <div className="hidden lg:block"><BrochureDownloadForm /></div>
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}</button>
        </div>

        {/* Mobile Navigation (No changes here, it's already functional) */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold-800">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.name ? null : item.name)} className="w-full flex justify-between items-center py-2 text-gray-300 hover:text-gold-400 font-medium">
                      <span>{item.name}</span><ChevronDown className={cn("h-5 w-5 transition-transform", openMobileSubmenu === item.name && "rotate-180")}/>
                    </button>
                    {openMobileSubmenu === item.name && (
                      <div className="pl-4 pt-2 flex flex-col space-y-2">
                        <Link href={item.href} className="block py-2 text-gray-300 font-semibold hover:text-gold-400" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name} href={subItem.href} className="block py-2 text-gray-400 hover:text-gold-400" onClick={() => setMobileMenuOpen(false)}>{subItem.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.name} href={item.href} className={cn("py-2 text-gray-300 hover:text-gold-400 font-medium", pathname === item.href && "text-gold-400")} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                ),
              )}
              <div className="pt-4"><BrochureDownloadForm isMobile={true} /></div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}