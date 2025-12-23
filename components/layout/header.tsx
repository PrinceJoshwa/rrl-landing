// "use client"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
// import { Menu, X, ChevronDown, Calendar, Phone } from "lucide-react"
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
//   { name: "Careers", href: "/careers" }, // <--- ADDED CAREERS LINK
//   { name: "Contact", href: "/contact" },
// ]

// // Custom WhatsApp Icon SVG
// const WhatsAppIcon = ({ className }: { className?: string }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//   </svg>
// )

// // 🏠 Site Visit Action Bar (Book Visit / Call / WhatsApp)
// function SiteVisitAction({ isMobile = false }) {
//   const [open, setOpen] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" })
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", date: "" })
//   const router = useRouter()

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target

//     if (name === "phone") {
//       const numericValue = value.replace(/[^0-9]/g, "")
//       if (numericValue.length <= 10) {
//         setFormData((prev) => ({ ...prev, [name]: numericValue }))
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }))
//     }

//     if (errors[name as keyof typeof errors]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", date: "" }
//     let isValid = true

//     if (formData.name.trim() === "") {
//       newErrors.name = "Name is required."
//       isValid = false
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (formData.email.trim() === "") {
//       newErrors.email = "Email is required."
//       isValid = false
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email address."
//       isValid = false
//     }

//     const phoneRegex = /^\d{10}$/
//     if (formData.phone.trim() === "") {
//       newErrors.phone = "Phone number is required."
//       isValid = false
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "10-digit number required."
//       isValid = false
//     }

//     if (!formData.date) {
//       newErrors.date = "Please select a date."
//       isValid = false
//     }

//     setErrors(newErrors)
//     return isValid
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setLoading(true)
//     try {
//       // ✅ Send data to Formspree
//       const res = await fetch("https://formspree.io/f/xgvnpbwo", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         window.open("/c3/thankyou", "_blank")
//         setFormData({ name: "", email: "", phone: "", date: "" })
//         setErrors({ name: "", email: "", phone: "", date: "" })
//         setOpen(false)
//       } else {
//         alert("Failed to schedule visit. Please try again.")
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       alert("Something went wrong. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const CONTACT_NUMBER = "+918494966966" 

//   return (
//     <div 
//       className={cn(
//         "flex items-center gap-3 p-1.5 rounded-full transition-all",
//         isMobile ? "w-full justify-between bg-transparent p-0" : "w-fit bg-gray-900/50 border border-gold-900"
//       )}
//     >
      
//       {/* 1. BOOK A VISIT BUTTON (Gold Theme) */}
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button
//             className={cn(
//               "bg-gold-500 text-black hover:bg-gold-600 rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]",
//               isMobile ? "px-4 py-6 text-sm flex-1" : "px-6 py-6"
//             )}
//           >
//             <Calendar className="h-4 w-4" />
//             Book a visit
//           </Button>
//         </DialogTrigger>
        
//         <DialogContent className="bg-black border-gold-800 text-white sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle className="text-gold-400 text-xl">Schedule Site Visit</DialogTitle>
//             <DialogDescription className="text-gray-400">
//               Pick a convenient date to experience our premium properties in person.
//             </DialogDescription>
//           </DialogHeader>

//           <form onSubmit={handleSubmit} className="grid gap-4 py-4" noValidate>
//             <div className="col-span-4">
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11"
//               />
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>

//             <div className="col-span-4">
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             <div className="col-span-4">
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 maxLength={10}
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11"
//               />
//               {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//             </div>

//             <div className="col-span-4">
//               <label className="text-xs text-gold-400 mb-1.5 block ml-1">Preferred Date</label>
//               <Input
//                 id="date"
//                 name="date"
//                 type="date"
//                 value={formData.date}
//                 onChange={handleInputChange}
//                 className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11 [color-scheme:dark]" 
//               />
//               {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
//             </div>
            
//             <DialogFooter className="mt-2">
//               <Button
//                 type="submit"
//                 className="w-full bg-gold-500 text-black hover:bg-gold-600 font-bold h-11"
//                 disabled={loading}
//               >
//                 {loading ? "Scheduling..." : "Confirm Visit"}
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>

//       {/* 2. CALL BUTTON (Black & Gold Theme) */}
//       <Button
//         variant="outline"
//         className="rounded-full w-12 h-12 p-0 bg-black border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all shadow-md shrink-0"
//         onClick={() => window.location.href = `tel:${CONTACT_NUMBER}`}
//       >
//         <Phone className="h-5 w-5" />
//       </Button>

//       {/* 3. WHATSAPP BUTTON (Black & Gold Theme) */}
//       <Button
//         variant="outline"
//         className="rounded-full w-12 h-12 p-0 bg-black border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all shadow-md shrink-0"
//         onClick={() => window.open(`https://wa.me/${CONTACT_NUMBER.replace('+', '')}`, "_blank")}
//       >
//         <WhatsAppIcon className="h-6 w-6" />
//       </Button>

//     </div>
//   )
// }

// // 🧭 Header Component
// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null)
//   const navRef = useRef<HTMLDivElement>(null)
//   const pathname = usePathname()

//   // Close dropdown on outside click
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (navRef.current && !navRef.current.contains(event.target as Node)) {
//         setOpenDropdown(null)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

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
//         scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-gold-900/50" : "bg-black"
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <Link href="/" className="flex items-center space-x-3">
//             <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8" ref={navRef}>
//             {navigation.map((item) => (
//               <div key={item.name} className="relative">
//                 <div className="flex items-center">
//                   <Link
//                     href={item.href}
//                     className={cn(
//                       "text-gray-300 hover:text-gold-400 font-medium transition-colors py-2",
//                       pathname === item.href && "text-gold-400"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                   {item.submenu && (
//                     <button
//                       onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
//                       className="ml-2 p-1 text-gray-300 hover:text-gold-400"
//                     >
//                       <ChevronDown
//                         className={cn(
//                           "h-4 w-4 transition-transform",
//                           openDropdown === item.name ? "rotate-180" : ""
//                         )}
//                       />
//                     </button>
//                   )}
//                 </div>

//                 {/* Dropdown Menu */}
//                 {item.submenu && openDropdown === item.name && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl z-50">
//                     <div className="py-2">
//                       {item.submenu.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           href={subItem.href}
//                           onClick={() => setOpenDropdown(null)}
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
//             {/* Action Bar (Book Visit / Call / WhatsApp) */}
//             <SiteVisitAction />
//           </div>

//           <button
//             className="lg:hidden p-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6 text-white" />
//             ) : (
//               <Menu className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-gold-800">
//             <nav className="flex flex-col space-y-2">
//               {navigation.map((item) =>
//                 item.submenu ? (
//                   <div key={item.name}>
//                     <button
//                       onClick={() =>
//                         setOpenMobileSubmenu(
//                           openMobileSubmenu === item.name ? null : item.name
//                         )
//                       }
//                       className="w-full flex justify-between items-center py-2 text-gray-300 hover:text-gold-400 font-medium"
//                     >
//                       <span>{item.name}</span>
//                       <ChevronDown
//                         className={cn(
//                           "h-5 w-5 transition-transform",
//                           openMobileSubmenu === item.name && "rotate-180"
//                         )}
//                       />
//                     </button>
//                     {openMobileSubmenu === item.name && (
//                       <div className="pl-4 pt-2 flex flex-col space-y-2">
//                         <Link
//                           href={item.href}
//                           className="block py-2 text-gray-300 font-semibold hover:text-gold-400"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Projects
//                         </Link>
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
//                       pathname === item.href && "text-gold-400"
//                     )}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               )}
//               <div className="pt-4">
//                  {/* Action Bar Mobile Version */}
//                 <SiteVisitAction isMobile={true} />
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ChevronDown, Calendar, Phone } from "lucide-react"
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
      // { name: "RRL Sequoia", href: "/projects/sequoia" },
      // { name: "RRL Oasis", href: "/projects/oasis" },
      { name: "RRL Towers", href: "/projects/towers" },
      { name: "RRL Complex", href: "/projects/complex" },
    ],
  },
  { name: "Awards", href: "/awards" },
  { name: "Careers", href: "/careers" },
  { name: "NRI Corner", href: "/nri-corner" },
  { name: "Contact", href: "/contact" },
]

// Custom WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

// 🏠 Site Visit Action Bar (Book Visit / Call / WhatsApp)
function SiteVisitAction({ isMobile = false }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" })
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", date: "" })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "")
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", date: "" }
    let isValid = true

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required."
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required."
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address."
      isValid = false
    }

    const phoneRegex = /^\d{10}$/
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required."
      isValid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "10-digit number required."
      isValid = false
    }

    if (!formData.date) {
      newErrors.date = "Please select a date."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      // ✅ Send data to Formspree
      const res = await fetch("https://formspree.io/f/xgvnpbwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        window.open("/c3/thankyou", "_blank")
        setFormData({ name: "", email: "", phone: "", date: "" })
        setErrors({ name: "", email: "", phone: "", date: "" })
        setOpen(false)
      } else {
        alert("Failed to schedule visit. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const CONTACT_NUMBER = "+918494966966" 

  return (
    <div 
      className={cn(
        "flex items-center gap-3 p-1.5 rounded-full transition-all",
        isMobile ? "w-full justify-between bg-transparent p-0" : "w-fit bg-gray-900/50 border border-gold-900"
      )}
    >
      
      {/* 1. BOOK A VISIT BUTTON (Gold Theme) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "bg-gold-500 text-black hover:bg-gold-600 rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]",
              isMobile ? "px-4 py-6 text-sm flex-1" : "px-6 py-6"
            )}
          >
            <Calendar className="h-4 w-4" />
            Book a visit
          </Button>
        </DialogTrigger>
        
        <DialogContent className="bg-black border-gold-800 text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-gold-400 text-xl">Schedule Site Visit</DialogTitle>
            <DialogDescription className="text-gray-400">
              Pick a convenient date to experience our premium properties in person.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid gap-4 py-4" noValidate>
            <div className="col-span-4">
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="col-span-4">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="col-span-4">
              <Input
                id="phone"
                name="phone"
                type="tel"
                maxLength={10}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="col-span-4">
              <label className="text-xs text-gold-400 mb-1.5 block ml-1">Preferred Date</label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                className="bg-gray-900 border-gold-700 focus:border-gold-500 text-white h-11 [color-scheme:dark]" 
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
            
            <DialogFooter className="mt-2">
              <Button
                type="submit"
                className="w-full bg-gold-500 text-black hover:bg-gold-600 font-bold h-11"
                disabled={loading}
              >
                {loading ? "Scheduling..." : "Confirm Visit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 2. CALL BUTTON (Black & Gold Theme) */}
      <Button
        variant="outline"
        className="rounded-full w-12 h-12 p-0 bg-black border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all shadow-md shrink-0"
        onClick={() => window.location.href = `tel:${CONTACT_NUMBER}`}
      >
        <Phone className="h-5 w-5" />
      </Button>

      {/* 3. WHATSAPP BUTTON (Black & Gold Theme) */}
      <Button
        variant="outline"
        className="rounded-full w-12 h-12 p-0 bg-black border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all shadow-md shrink-0"
        onClick={() => window.open(`https://wa.me/${CONTACT_NUMBER.replace('+', '')}`, "_blank")}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </Button>

    </div>
  )
}

// 🧭 Header Component
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-gold-900/50" : "bg-black"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="RRL Group Logo" width={150} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={navRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-300 hover:text-gold-400 font-medium transition-colors py-2",
                      pathname === item.href && "text-gold-400"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="ml-2 p-1 text-gray-300 hover:text-gold-400"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.name ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold-800 rounded-xl shadow-xl z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
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
            {/* Action Bar (Book Visit / Call / WhatsApp) */}
            <SiteVisitAction />
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold-800">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenMobileSubmenu(
                          openMobileSubmenu === item.name ? null : item.name
                        )
                      }
                      className="w-full flex justify-between items-center py-2 text-gray-300 hover:text-gold-400 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          openMobileSubmenu === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    {openMobileSubmenu === item.name && (
                      <div className="pl-4 pt-2 flex flex-col space-y-2">
                        <Link
                          href={item.href}
                          className="block py-2 text-gray-300 font-semibold hover:text-gold-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Projects
                        </Link>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-gray-400 hover:text-gold-400"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "py-2 text-gray-300 hover:text-gold-400 font-medium",
                      pathname === item.href && "text-gold-400"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4">
                 {/* Action Bar Mobile Version */}
                <SiteVisitAction isMobile={true} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}