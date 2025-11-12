// "use client"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
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

// // 📨 Brochure Download Form — Integrated with Formspree
// function BrochureDownloadForm({ isMobile = false }) {
//   const [open, setOpen] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setLoading(true)
//   //   try {
//   //     // ✅ Send data to Formspree
//   //     const res = await fetch("https://formspree.io/f/xgvnpbwo", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     })

//   //     if (res.ok) {
//   //       // ✅ Auto-download the brochure
//   //       const link = document.createElement("a")
//   //       link.href = "/brochures/rrl-company-brochure.pdf"
//   //       link.download = "RRL-Company-Brochure.pdf"
//   //       document.body.appendChild(link)
//   //       link.click()
//   //       document.body.removeChild(link)

//   //       // ✅ Reset form and close dialog
//   //       setFormData({ name: "", email: "", phone: "" })
//   //       setOpen(false)
//   //     } else {
//   //       alert("Failed to send your details. Please try again.")
//   //     }
//   //   } catch (error) {
//   //     console.error("Error submitting form:", error)
//   //     alert("Something went wrong. Please try again.")
//   //   } finally {
//   //     setLoading(false)
//   //   }
//   // }

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault()
//   setLoading(true)
//   try {
//     // ✅ Send data to Formspree
//     const res = await fetch("https://formspree.io/f/xgvnpbwo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })

//     if (res.ok) {
//       // ✅ Auto-download the brochure
//       const link = document.createElement("a")
//       link.href = "/brochures/rrl-company-brochure.pdf"
//       link.download = "RRL-Company-Brochure.pdf"
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)

//       // ✅ ADDED: Open thank-you page in a new tab to fire GTM event
//       window.open("/c3/thankyou", "_blank")

//       // ✅ Reset form and close dialog
//       setFormData({ name: "", email: "", phone: "" })
//       setOpen(false)
//     } else {
//       alert("Failed to send your details. Please try again.")
//     }
//   } catch (error) {
//     console.error("Error submitting form:", error)
//     alert("Something went wrong. Please try again.")
//   } finally {
//     setLoading(false)
//   }
// }

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
//             id="name"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
//           />
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
//           />
//           <Input
//             id="phone"
//             name="phone"
//             type="tel"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//             className="col-span-4 bg-gray-900 border-gold-700 focus:border-gold-500"
//           />
//           <DialogFooter>
//             <Button
//               type="submit"
//               className="w-full bg-gold-500 text-black hover:bg-gold-600 flex items-center justify-center"
//               disabled={loading}
//             >
//               <Download className="mr-2 h-4 w-4" />
//               {loading ? "Sending..." : "Submit & Download"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
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
//             <BrochureDownloadForm />
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

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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

// 📨 Brochure Download Form — Integrated with Formspree
function BrochureDownloadForm({ isMobile = false }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // UPDATED: Add input restriction for the phone field
    if (name === "phone") {
      // Only allow numeric input and cap at 10 digits
      const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
    } else {
      // Handle other fields normally
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear the error for the field being edited
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  // Validation function
  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    // Name validation (check for empty or just whitespace)
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation (simple regex for format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Phone validation (check for *exactly* 10 digits)
    const phoneRegex = /^\d{10}$/; // This regex remains correct
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setLoading(true)
    try {
      // ✅ Send data to Formspree
      const res = await fetch("https://formspree.io/f/xgvnpbwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        // ✅ Auto-download the brochure
        const link = document.createElement("a")
        link.href = "/brochures/rrl-company-brochure.pdf"
        link.download = "RRL-Company-Brochure.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // ✅ ADDED: Open thank-you page in a new tab to fire GTM event
        window.open("/c3/thankyou", "_blank")

        // ✅ Reset form and close dialog
        setFormData({ name: "", email: "", phone: "" })
        setErrors({ name: "", email: "", phone: "" }); // Clear errors
        setOpen(false)
      } else {
        alert("Failed to send your details. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
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
        <form onSubmit={handleSubmit} className="grid gap-4 py-4" noValidate>
          <div className="col-span-4">
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-gray-900 border-gold-700 focus:border-gold-500"
              aria-invalid={!!errors.name}
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
              required
              className="bg-gray-900 border-gold-700 focus:border-gold-500"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="col-span-4">
            <Input
              id="phone"
              name="phone"
              type="tel" // Use type "tel" for better mobile support
              placeholder="Your Phone Number (10 digits)"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-gray-900 border-gold-700 focus:border-gold-500"
              aria-invalid={!!errors.phone}
              maxLength={10} // This HTML attribute also helps, but the JS logic is safer
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-gold-500 text-black hover:bg-gold-600 flex items-center justify-center"
              disabled={loading}
            >
              <Download className="mr-2 h-4 w-4" />
              {loading ? "Sending..." : "Submit & Download"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
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
            <BrochureDownloadForm />
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
                <BrochureDownloadForm isMobile={true} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}