// // // "use client"

// // // import { useState, useEffect, useRef } from "react"
// // // import type React from "react"
// // // import Image from "next/image"
// // // import Link from "next/link"
// // // import { useRouter } from "next/navigation"
// // // import { motion, Variants, useScroll, useTransform } from "framer-motion"

// // // // UI Components
// // // import { Button } from "@/components/ui/button"
// // // import { Input } from "@/components/ui/input"
// // // import { Textarea } from "@/components/ui/textarea"
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // // import { Checkbox } from "@/components/ui/checkbox"
// // // import { Card, CardContent } from "@/components/ui/card"
// // // import { cn } from "@/lib/utils"

// // // // Icons
// // // import {
// // //   Award,
// // //   ArrowRight,
// // //   Play,
// // //   Star,
// // //   Building,
// // //   Users,
// // //   Target,
// // //   Trophy,
// // //   Newspaper,
// // //   Calendar,
// // //   Medal,
// // //   MapPin,
// // //   Home,
// // //   Building2,
// // //   Quote,
// // //   Lightbulb,
// // //   HelpCircle,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   Phone,
// // //   Mail,
// // //   Send,
// // //   Maximize,
// // //   Download,
// // //   CheckCircle2,
// // //   ShieldCheck,
// // //   Zap,
// // // } from "lucide-react"

// // // // ========== 1. HERO COMPONENT ==========
// // // function Hero() {
// // //   const [currentSlide, setCurrentSlide] = useState(0)
// // //   const [isPlaying, setIsPlaying] = useState(false)

// // //   const slides = [
// // //     {
// // //       title: "Times Real Estate Icons Award",
// // //       subtitle: "2025 Winner",
// // //       description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
// // //       image: "/awardhome.jpeg",
// // //       badge: "Award Winner",
// // //     },
// // //     {
// // //       title: "Global Real Estate Brand",
// // //       subtitle: "2023 Champion",
// // //       description: "Recognized globally for excellence in affordable luxury real estate development",
// // //       image: "/awardhome1.jpeg",
// // //       badge: "Global Recognition",
// // //     },
// // //   ]

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //     }, 5000)
// // //     return () => clearInterval(timer)
// // //   }, [slides.length])

// // //   return (
// // //     <>
// // //       {/* ===== Hero Section ===== */}
// // //       <motion.section
// // //         className="relative flex min-h-[90vh] items-center overflow-hidden bg-black"
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 1 }}
// // //       >
// // //         <div className="absolute inset-0 bg-grid-white/[0.05]" />

// // //         {/* Background Gradient Accent */}
// // //         <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[100px]" />

// // //         <div className="container relative z-10 mx-auto px-4 py-20">
// // //           <div className="grid items-center gap-16 lg:grid-cols-2">
// // //             {/* Left Content */}
// // //             <motion.div
// // //               className="space-y-8"
// // //               initial={{ opacity: 0, x: -50 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, ease: "easeOut" }}
// // //             >
// // //               <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// // //                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500">
// // //                   <Award className="h-4 w-4 text-black" />
// // //                 </div>
// // //                 <span className="text-sm font-semibold">
// // //                   Times Real Estate Icon Awards 2025 Winner
// // //                 </span>
// // //               </div>

// // //               <div className="space-y-6">
// // //                 <h1 className="text-5xl font-bold leading-tight text-white font-playfair lg:text-7xl">
// // //                   RRL Builders & <span className="text-gold-400 block">Developers</span>
// // //                 </h1>

// // //                 <div className="space-y-4 text-lg leading-relaxed text-gray-300">
// // //                   <p>
// // //                     As award-winning developers, RRL is committed to delivering modern luxury apartments with
// // //                     uncompromising quality. Our proven track record of four successfully delivered projects ensures
// // //                     early possession.
// // //                   </p>
// // //                   <p>
// // //                     Our projects are strategically located in Bangalore's most promising growth zones:{" "}
// // //                     <span className="text-gold-400 font-semibold">Sarjapura, Varthur, and Chikkatirupati.</span>
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* CTA Buttons */}
// // //               <div className="flex flex-col gap-4 sm:flex-row pt-4">
// // //                 <Link href="/projects">
// // //                   <Button
// // //                     size="lg"
// // //                     className="group rounded-full px-8 py-6 text-lg font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
// // //                   >
// // //                     Explore RRL Properties
// // //                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// // //                   </Button>
// // //                 </Link>
// // //                 <Link href="/contact">
// // //                   <Button
// // //                     variant="outline"
// // //                     size="lg"
// // //                     className="group rounded-full px-8 py-6 text-lg font-semibold text-gold-400 border-gold-400 hover:bg-gold-950 transition-all duration-300"
// // //                   >
// // //                     Contact Us
// // //                   </Button>
// // //                 </Link>
// // //               </div>

// // //               {/* Trust Indicators */}
// // //               <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
// // //                 <div className="flex items-center space-x-2">
// // //                   <div className="flex -space-x-2">
// // //                     {[...Array(5)].map((_, i) => (
// // //                       <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
// // //                     ))}
// // //                   </div>
// // //                   <span className="text-sm font-medium text-gray-400">
// // //                     4.9/5 Customer Rating
// // //                   </span>
// // //                 </div>
// // //                 <div className="h-6 w-px bg-gold-800" />
// // //                 <div className="flex items-center space-x-2">
// // //                   <Building className="h-5 w-5 text-gold-400" />
// // //                   <span className="text-sm font-medium text-gray-400">
// // //                     150+ Proud Employees
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             {/* Right Content - Video */}
// // //             <motion.div
// // //               className="relative flex justify-center lg:justify-end"
// // //               initial={{ opacity: 0, scale: 0.95 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
// // //             >
// // //               <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gold-800 shadow-2xl shadow-gold-900/20 group">
// // //                 <div className="absolute inset-0 bg-gold-500/10 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
// // //                 <iframe
// // //                   src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1&loop=1&playlist=noXGLRYcyBU"
// // //                   title="Our Story Video"
// // //                   frameBorder="0"
// // //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //                   allowFullScreen
// // //                   className="absolute top-0 left-0 w-full h-full scale-105"
// // //                 ></iframe>
// // //               </div>

// // //               {/* Decorative elements around video */}
// // //               <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-gold-800/30 bg-gray-900/50" />
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </motion.section>

// // //       {/* ===== Palm Altezze Banner (NEW PARALLAX) ===== */}
// // //       <PalmAltezzeBanner />

// // //       {/* ===== Horizontal Brochure Form (UPDATED) ===== */}
// // //       <HorizontalBrochureForm />
// // //     </>
// // //   )
// // // }

// // // function PalmAltezzeBanner() {
// // //   const containerRef = useRef(null)
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start end", "end start"],
// // //   })

// // //   // Parallax effect for the image
// // //   const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

// // //   return (
// // //     <section ref={containerRef} className="relative w-full bg-black py-20 overflow-hidden">
// // //       <div className="absolute inset-0 z-0">
// // //         <Image
// // //           src="/justlaunch.png"
// // //           alt="Palm Altezze Background"
// // //           fill
// // //           className="object-cover opacity-30"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
// // //       </div>

// // //       <div className="container relative z-10 mx-auto px-4">
// // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
          
// // //           {/* Text Content - Sticky behavior on desktop */}
// // //           <div className="lg:w-1/2 lg:sticky lg:top-32 space-y-8 pt-8">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.8 }}
// // //             >
// // //               <div className="inline-block px-4 py-1 rounded-full border border-gold-500 text-gold-400 text-sm font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm mb-4">
// // //                 New Launch
// // //               </div>
// // //               <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
// // //                 RRL <br/><span className="text-gold-400">Palm Altezze</span>
// // //               </h2>
// // //               <p className="text-xl md:text-2xl text-gray-200 font-light mt-4">
// // //                 Where luxury meets tranquility. 2 & 3 BHK premium apartments designed for the modern lifestyle.
// // //               </p>
// // //             </motion.div>

// // //             <motion.div 
// // //                initial={{ opacity: 0 }}
// // //                whileInView={{ opacity: 1 }}
// // //                viewport={{ once: true }}
// // //                transition={{ duration: 0.8, delay: 0.2 }}
// // //                className="grid grid-cols-2 gap-8 pt-4"
// // //             >
// // //               <div className="border-l-2 border-gold-500 pl-4">
// // //                 <p className="text-gray-400 text-sm uppercase tracking-wide">Project Area</p>
// // //                 <p className="text-white text-xl font-bold">2.25 Acres</p>
// // //               </div>
// // //               <div className="border-l-2 border-gold-500 pl-4">
// // //                 <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
// // //                 <p className="text-white text-xl font-bold">Varthur</p>
// // //               </div>
// // //               <div className="border-l-2 border-gold-500 pl-4">
// // //                 <p className="text-gray-400 text-sm uppercase tracking-wide">Status</p>
// // //                 <p className="text-emerald-400 text-xl font-bold">Open for Booking</p>
// // //               </div>
// // //                <div className="border-l-2 border-gold-500 pl-4">
// // //                 <p className="text-gray-400 text-sm uppercase tracking-wide">Units</p>
// // //                 <p className="text-white text-xl font-bold">Premium 2 & 3 BHK</p>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div
// // //                initial={{ opacity: 0, y: 20 }}
// // //                whileInView={{ opacity: 1, y: 0 }}
// // //                viewport={{ once: true }}
// // //                transition={{ duration: 0.8, delay: 0.4 }}
// // //                className="pt-6"
// // //             >
// // //               <Link href="/projects/palm-altezze">
// // //                 <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105">
// // //                   View Full Details <ArrowRight className="ml-2" />
// // //                 </Button>
// // //               </Link>
// // //             </motion.div>
// // //           </div>

// // //           {/* Right Side Image - Taller and Scrolling */}
// // //           <div className="lg:w-1/2 w-full relative">
// // //             <motion.div
// // //               style={{ y: imageY }} // Apply Parallax
// // //               className="relative h-[600px] lg:h-[800px] w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl"
// // //             >
// // //               <Image
// // //                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764563668/RRL-palm-altezze-banner2_wcqmvh.webp"
// // //                 alt="Palm Altezze Interior"
// // //                 fill
// // //                 className="object-cover"
// // //                 sizes="(max-width: 768px) 100vw, 50vw"
// // //               />
// // //               {/* Graphic Overlay */}
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
// // //               <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
// // //                  <p className="text-gold-400 text-sm font-bold uppercase">Artist Impression</p>
// // //                  <p className="text-white font-playfair text-lg">Premium Interiors</p>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // function HorizontalBrochureForm() {
// // //   const router = useRouter()
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "", // Added email for brochure download logic
// // //     phone: "",
// // //     whatsappUpdates: false,
// // //   })
// // //   const [loading, setLoading] = useState(false)

// // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     const { name, value, type, checked } = e.target
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: type === "checkbox" ? checked : value,
// // //     }))
// // //   }

// // //   const handleDownloadSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     setLoading(true)

// // //     // Basic Validation
// // //     if (!formData.name || !formData.phone || !formData.email) {
// // //       alert("Please fill in all fields.")
// // //       setLoading(false)
// // //       return
// // //     }

// // //     try {
// // //       // Send data to Formspree
// // //       const res = await fetch("https://formspree.io/f/xgvnpbwo", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(formData),
// // //       })

// // //       if (res.ok) {
// // //         // ✅ Auto-download the brochure (Same logic as Header.tsx)
// // //         const link = document.createElement("a")
// // //         link.href = "/brochures/rrl-company-brochure.pdf"
// // //         link.download = "RRL-Company-Brochure.pdf"
// // //         document.body.appendChild(link)
// // //         link.click()
// // //         document.body.removeChild(link)

// // //         // Open thank you page
// // //         window.open("/c3/thankyou", "_blank")

// // //         setFormData({ name: "", email: "", phone: "", whatsappUpdates: false })
// // //       } else {
// // //         alert("Failed to send details. Please try again.")
// // //       }
// // //     } catch (error) {
// // //       console.error("Error:", error)
// // //       alert("Something went wrong.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   return (
// // //     <section className="bg-neutral-900 border-y border-gold-800 py-12">
// // //       <div className="container mx-auto px-4">
// // //         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
// // //           <div className="lg:w-1/3 text-center lg:text-left">
// // //             <h3 className="text-2xl font-bold text-white font-playfair flex items-center justify-center lg:justify-start gap-2">
// // //               <Download className="text-gold-500 h-6 w-6" />
// // //               Download Project Brochure
// // //             </h3>
// // //             <p className="text-gray-400 mt-2">
// // //               Get the complete floor plans, pricing, and amenities list instantly.
// // //             </p>
// // //           </div>

// // //           <form onSubmit={handleDownloadSubmit} className="lg:w-2/3 w-full">
// // //             <div className="flex flex-col md:flex-row gap-4 items-center">
// // //               <Input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Your Name"
// // //                 value={formData.name}
// // //                 onChange={handleInputChange}
// // //                 required
// // //                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
// // //               />
// // //                <Input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Your Email"
// // //                 value={formData.email}
// // //                 onChange={handleInputChange}
// // //                 required
// // //                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
// // //               />
// // //               <Input
// // //                 type="tel"
// // //                 name="phone"
// // //                 placeholder="Mobile Number"
// // //                 value={formData.phone}
// // //                 onChange={handleInputChange}
// // //                 required
// // //                 maxLength={10}
// // //                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
// // //               />
// // //               <Button
// // //                 type="submit"
// // //                 disabled={loading}
// // //                 className="h-12 w-full md:w-auto px-8 bg-gold-500 hover:bg-gold-600 text-black font-bold whitespace-nowrap"
// // //               >
// // //                 {loading ? "Processing..." : "Download Now"}
// // //               </Button>
// // //             </div>
// // //             <div className="flex items-center space-x-2 mt-3 justify-center lg:justify-start">
// // //               <Checkbox
// // //                 id="whatsapp-updates-hor"
// // //                 name="whatsappUpdates"
// // //                 checked={formData.whatsappUpdates}
// // //                 onCheckedChange={(checked) =>
// // //                   setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))
// // //                 }
// // //                 className="border-gold-700 data-[state=checked]:bg-gold-500"
// // //               />
// // //               <label htmlFor="whatsapp-updates-hor" className="text-sm text-gray-400 cursor-pointer">
// // //                 I agree to receive updates via WhatsApp
// // //               </label>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ========== 2. AWARDS SECTION (MOVED TO OWN COMPONENT) ==========
// // // function AwardsSection() {
// // //   return (
// // //     <motion.section
// // //       className="py-20 bg-black text-white relative"
// // //       initial={{ opacity: 0 }}
// // //       whileInView={{ opacity: 1 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 1 }}
// // //     >
// // //       <div className="absolute inset-0 bg-grid-white/[0.05]" />
// // //       <div className="container mx-auto px-4 relative">
// // //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //           <motion.div
// // //             className="space-y-8"
// // //             initial={{ opacity: 0, x: -50 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.8 }}
// // //           >
// // //             <h1 className="text-4xl md:text-5xl font-playfair font-bold">
// // //               Times Real Estate Icon Awards, 2025
// // //             </h1>
// // //             <p className="text-lg text-gray-400 leading-relaxed">
// // //               RRL Groups has been honored with the prestigious award for Builder of the Year in
// // //               the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
// // //             </p>

// // //             <div className="space-y-4">
// // //               {[
// // //                 ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
// // //                 ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
// // //                 ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
// // //               ].map(([title, desc], i) => (
// // //                 <div key={i} className="flex items-start space-x-3">
// // //                   <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
// // //                     <Star className="h-3 w-3 text-black" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-semibold text-white">{title}</h3>
// // //                     <p className="text-gray-500 text-sm">{desc}</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="pt-4">
// // //               <Link href="/awards">
// // //                 <Button className="rounded-full px-8 py-3 bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300">
// // //                   View All Awards
// // //                   <ArrowRight className="ml-2 h-4 w-4" />
// // //                 </Button>
// // //               </Link>
// // //             </div>
// // //           </motion.div>

// // //           <motion.div
// // //             className="relative"
// // //             initial={{ opacity: 0, scale: 0.9 }}
// // //             whileInView={{ opacity: 1, scale: 1 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.8 }}
// // //           >
// // //             <Image
// // //               src="/awardhome.jpeg"
// // //               alt="RRL Awards Ceremony 2025"
// // //               width={600}
// // //               height={400}
// // //               className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
// // //             />
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // // // ========== 3. LEADERSHIP COMPONENT ==========
// // // function Leadership() {
// // //   return (
// // //     <motion.section
// // //       className="relative overflow-hidden bg-light-black py-24"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.1 }}
// // //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// // //     >
// // //       <div className="flex justify-center mb-8">
// // //         <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// // //           <Users className="h-5 w-5" />
// // //           <span className="font-semibold">Leadership Excellence</span>
// // //         </div>
// // //       </div>

// // //       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

// // //       <div className="container relative mx-auto px-4">
// // //         {/* Pillars Content */}
// // //         <div className="mb-20 text-center max-w-4xl mx-auto bg-gray-900/40 p-8 rounded-3xl border border-gold-800/30 backdrop-blur-sm">
// // //           <div className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-6 uppercase tracking-wider">
// // //             Pillars of RRL Group
// // //           </div>
// // //           <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-playfair">
// // //             RRL Builders and Developers is led by the strong partnership of twin brothers <span className="text-white font-semibold">Mr. Ram</span> and <span className="text-white font-semibold">Mr. Lakshman</span>. Their shared commitment to quality and smart strategy is the main reason RRL is known for delivering modern, award-winning luxury homes.
// // //           </p>
// // //         </div>

// // //         <div className="grid items-center gap-16 lg:grid-cols-2">
// // //           <motion.div
// // //             className="space-y-8"
// // //             initial={{ opacity: 0, x: -50 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //           >
// // //             <div className="space-y-4">
// // //               <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
// // //                 Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
// // //               </h2>

// // //               <p className="text-lg leading-relaxed text-gray-400">
// // //                 When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
// // //                 Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
// // //               </p>
// // //             </div>
// // //           </motion.div>

// // //           <motion.div
// // //             className="relative"
// // //             initial={{ opacity: 0, scale: 0.9 }}
// // //             whileInView={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //           >
// // //             <div className="grid grid-cols-2 gap-6">
// // //               <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
// // //                 <Image
// // //                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
// // //                   alt="Mr. Ram Reddy"
// // //                   width={300}
// // //                   height={400}
// // //                   className="h-auto w-full rounded-2xl shadow-lg"
// // //                 />
// // //                 <div className="mt-4 text-center">
// // //                   <h3 className="font-bold text-white">Mr. Ram Reddy</h3>
// // //                   <p className="text-sm text-gray-400">Director</p>
// // //                 </div>
// // //               </div>
// // //               <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
// // //                 <Image
// // //                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
// // //                   alt="Mr. Lakshman Reddy"
// // //                   width={300}
// // //                   height={400}
// // //                   className="h-auto w-full rounded-2xl shadow-lg"
// // //                 />
// // //                 <div className="mt-4 text-center">
// // //                   <h3 className="font-bold text-white">Mr. Lakshman Reddy</h3>
// // //                   <p className="text-sm text-gray-400">Chairman</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // // // ========== 4. PROPERTIES COMPONENT (UPDATED - REMOVED SEQUOIA, PRICE, AREA) ==========
// // // function Properties() {
// // //   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

// // //   const residentialProperties = [
// // //     { 
// // //       id: "palacio", 
// // //       name: "RRL Palacio", 
// // //       location: "Medahalli, Bangalore", 
// // //       status: "READY TO MOVE", 
// // //       statusColor: "bg-blue-600",
// // //       image: "/LookProject2.jpeg", 
// // //       // config: "2 & 3 BHK", // Removed
// // //       // area: "1100 - 1450 Sq.Ft*", // Removed
// // //       features: ["Infinity Pool", "Co-working Lounge", "Kids Play Area"], 
// // //       // price: "₹ 45 Lakhs Onwards*" // Removed
// // //     },
// // //     { 
// // //       id: "palm-altezze", 
// // //       name: "RRL Palm Altezze", 
// // //       location: "Varthur, Bangalore", 
// // //       status: " JUST LAUNCHED", 
// // //       statusColor: "bg-yellow-600",
// // //       image: "/justlaunch.png", 
// // //       // config: "3 & 3.5 BHK", // Removed
// // //       // area: "1500 - 2200 Sq.Ft*", // Removed
// // //       features: ["Clubhouse", "Landscaped Greens", "Smart Security"], 
// // //       // price: "₹ 75 Lakhs Onwards*" // Removed
// // //     },
// // //     // REMOVED RRL SEQUOIA
// // //     { 
// // //       id: "nature-woods", 
// // //       name: "RRL Nature Woods", 
// // //       location: "Sarjapur, Bangalore", 
// // //       status: "READY TO MOVE", 
// // //       statusColor: "bg-blue-600",
// // //       image: "/LookProject5.jpeg", 
// // //       // config: "2 & 3 BHK", // Removed
// // //       // area: "1200 - 1600 Sq.Ft*", // Removed
// // //       features: ["Nature Park", "Jogging Track", "Amphitheater"], 
// // //       // price: "₹ 55 Lakhs Onwards*" // Removed
// // //     },
// // //   ]

// // //   const commercialProperties = [
// // //     { 
// // //       id: "towers", 
// // //       name: "RRL Towers", 
// // //       location: "Sampige Jala, Sarjapur", 
// // //       status: "READY TO MOVE", 
// // //       statusColor: "bg-blue-600",
// // //       image: "/Tower.jpeg", 
// // //       // config: "Office Spaces", // Removed
// // //       // area: "500 - 10000 Sq.Ft*", // Removed
// // //       features: ["24/7 Access", "Cafeteria", "Power Backup"], 
// // //       // price: "₹ 65 Lakhs Onwards*" // Removed
// // //     },
// // //     { 
// // //       id: "complex", 
// // //       name: "RRL Complex", 
// // //       location: "South Bangalore", 
// // //       status: "UNDER CONSTRUCTION", 
// // //       statusColor: "bg-yellow-600",
// // //       image: "/complex.jpg", 
// // //       // config: "Retail Shops", // Removed
// // //       // area: "200 - 1500 Sq.Ft*", // Removed
// // //       features: ["Main Road Facing", "Visitor Parking", "Loading Bay"], 
// // //       // price: "₹ 55 Lakhs Onwards*" // Removed
// // //     },
// // //   ]

// // //   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties

// // //   return (
// // //     <motion.section
// // //       className="bg-black py-24"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.1 }}
// // //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         {/* Header Section */}
// // //         <div className="mb-12 flex flex-col items-center text-center">
// // //           <motion.div
// // //             className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
// // //           >
// // //             <Home className="h-4 w-4" />
// // //             <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
// // //           </motion.div>
          
// // //           <h2 className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl">
// // //             Explore <span className="text-gold-400">RRL Projects</span>
// // //           </h2>

// // //           {/* Filter Tabs */}
// // //           <div className="relative inline-flex rounded-full bg-gray-900 p-1 border border-gold-900/50">
// // //             <button
// // //               onClick={() => setActiveTab("residential")}
// // //               className={`relative z-10 flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
// // //                 activeTab === "residential" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// // //               }`}
// // //             >
// // //               <span>Residential</span>
// // //             </button>
// // //             <button
// // //               onClick={() => setActiveTab("commercial")}
// // //               className={`relative z-10 flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
// // //                 activeTab === "commercial" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// // //               }`}
// // //             >
// // //               <span>Commercial</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* PROPERTIES LIST - HORIZONTAL CARDS */}
// // //         <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
// // //           {currentProperties.map((property, index) => (
// // //             <motion.div
// // //               key={property.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-neutral-900 border border-neutral-800 shadow-2xl transition-all hover:border-gold-500/30 sm:flex-row h-full sm:h-[400px]"
// // //             >
// // //               {/* LEFT: Image Section */}
// // //               <div className="relative h-64 w-full sm:h-full sm:w-[50%] shrink-0 overflow-hidden">
// // //                 <Image
// // //                   src={property.image || "/placeholder.svg"}
// // //                   alt={property.name}
// // //                   fill
// // //                   className="object-cover transition-transform duration-700 group-hover:scale-110"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
// // //                 {/* Status Badge */}
// // //                 <div className="absolute top-4 left-4 z-10">
// // //                    <div className={`rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm ${property.statusColor} border border-white/20 tracking-wider`}>
// // //                       {property.status}
// // //                    </div>
// // //                 </div>
// // //               </div>

// // //               {/* RIGHT: Content Section */}
// // //               <div className="flex flex-col justify-between p-6 sm:p-8 w-full">
// // //                  <div>
// // //                     {/* Title */}
// // //                     <Link href={`/projects/${property.id}`}>
// // //                         <h3 className="text-2xl font-bold text-white font-playfair mb-2 hover:text-gold-400 transition-colors cursor-pointer">
// // //                             {property.name}
// // //                         </h3>
// // //                     </Link>
                    
// // //                     {/* Location */}
// // //                     <div className="flex items-center text-gray-400 mb-8 text-sm">
// // //                         <MapPin className="mr-1.5 h-4 w-4 text-gold-500" />
// // //                         {property.location}
// // //                     </div>

// // //                     {/* GRAPHICS / ICONS instead of Price/Area */}
// // //                     <div className="flex justify-between gap-2 mb-6 border-t border-b border-gray-800 py-4">
// // //                         <div className="flex flex-col items-center text-center">
// // //                            <ShieldCheck className="h-6 w-6 text-gold-500 mb-2" />
// // //                            <span className="text-xs text-gray-400">RERA Approved</span>
// // //                         </div>
// // //                         <div className="flex flex-col items-center text-center">
// // //                            <Zap className="h-6 w-6 text-gold-500 mb-2" />
// // //                            <span className="text-xs text-gray-400">Premium Amenities</span>
// // //                         </div>
// // //                         <div className="flex flex-col items-center text-center">
// // //                            <CheckCircle2 className="h-6 w-6 text-gold-500 mb-2" />
// // //                            <span className="text-xs text-gray-400">Quality Build</span>
// // //                         </div>
// // //                     </div>

// // //                     {/* Amenities Tags */}
// // //                     <div className="flex flex-wrap gap-2 mb-6">
// // //                         {property.features.slice(0, 3).map((feature, i) => (
// // //                            <span key={i} className="text-xs text-gray-400 border border-neutral-700 rounded-full px-3 py-1">
// // //                                {feature}
// // //                            </span>
// // //                         ))}
// // //                     </div>
// // //                  </div>

// // //                  <div className="space-y-4">
// // //                     {/* Action Buttons Row */}
// // //                     <div className="grid grid-cols-2 gap-3">
// // //                         <a 
// // //                            href="https://wa.me/918494966966" 
// // //                            target="_blank" 
// // //                            rel="noreferrer"
// // //                            className="flex items-center justify-center rounded-lg bg-gold-500 py-3 text-sm font-bold text-black hover:bg-gold-400 transition-colors"
// // //                         >
// // //                            Whatsapp Us
// // //                         </a>
// // //                         <a 
// // //                            href="tel:+918494966966"
// // //                            className="flex items-center justify-center rounded-lg border border-gold-500 py-3 text-sm font-bold text-gold-500 hover:bg-gold-500 hover:text-black transition-colors"
// // //                         >
// // //                            Call Now
// // //                         </a>
// // //                     </div>
// // //                  </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         <div className="text-center">
// // //           <Link href="/projects">
// // //             <Button
// // //               size="lg"
// // //               className="rounded-full border border-gold-500 bg-transparent px-10 py-6 text-lg font-semibold text-gold-500 transition-all duration-300 hover:bg-gold-500 hover:text-black hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
// // //             >
// // //               View All Properties
// // //             </Button>
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // // function Stats() {
// // //   const statsData = [
// // //     {
// // //       icon: Users,
// // //       value: "1000+",
// // //       label: "Happy Families",
// // //       description: "Satisfied customers",
// // //     },
// // //     {
// // //       icon: Building,
// // //       value: "5+",
// // //       label: "Projects Completed",
// // //       description: "Premium residential developments",
// // //     },
// // //     {
// // //       icon: Target,
// // //       value: "500+",
// // //       label: "Trusted Partners",
// // //       description: "Total construction area delivered",
// // //     },
// // //     {
// // //       icon: Award,
// // //       value: "150+",
// // //       label: "Proud Employees",
// // //       description: "Professional team members",
// // //     },
// // //   ]

// // //   return (
// // //     <motion.section
// // //       className="py-24 bg-light-gold"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.2 }}
// // //       variants={{
// // //         hidden: { opacity: 0 },
// // //         visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
// // //       }}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         <div className="mb-16 text-center">
// // //           <motion.h2
// // //             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
// // //             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
// // //           >
// // //             The Outstanding <span className="text-gold-600">Growth</span>
// // //           </motion.h2>
// // //           <motion.p
// // //             className="mx-auto max-w-2xl text-xl text-gray-800"
// // //             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
// // //           >
// // //             Celebrating Growth: Highlights of Our Accomplishments
// // //           </motion.p>
// // //         </div>

// // //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
// // //           {statsData.map((stat, index) => (
// // //             <motion.div
// // //               key={index}
// // //               className="group"
// // //               variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
// // //             >
// // //               <div className="rounded-3xl border border-gold-300 bg-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
// // //                 <div className="text-center">
// // //                   <div className="mb-6">
// // //                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-lg">
// // //                       <stat.icon className="h-10 w-10 text-black" />
// // //                     </div>
// // //                   </div>
// // //                   <div className="mb-2 text-5xl font-bold text-black">{stat.value}</div>
// // //                   <div className="mb-3 text-lg font-semibold text-gray-800">{stat.label}</div>
// // //                   <div className="text-sm leading-relaxed text-gray-600">{stat.description}</div>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* QUOTE BOX ADDED FROM OLD FILE */}
// // //         <div className="mt-16 text-center">
// // //           <div className="mx-auto max-w-4xl rounded-3xl p-8 border border-gold-300 bg-white/50">
// // //             <p className="text-lg italic leading-relaxed text-gray-800">
// // //               "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
// // //               you make well-informed decisions. Let us build an affordable society together."
// // //             </p>
// // //             <div className="mt-4 font-semibold text-gold-600">- RRL Groups</div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // // // ========== 5. CLIENT GALLERY ==========
// // // function HappyClientsGallery() {
// // //   const clientImages = [
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560219/20250731_121250_nq8l6b.jpg",
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560213/20250808_115517_vitgx0.jpg",
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560198/20250728_164509_qpnvtc.jpg",
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560193/20250801_121200_sorava.jpg",
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
// // //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560033/20250805_115305_qoouj2.jpg"
// // //   ]

// // //   return (
// // //     <section className="py-24 bg-neutral-50 overflow-hidden relative">
// // //       {/* Background Pattern */}
// // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

// // //       <div className="container mx-auto px-4 mb-16 text-center relative z-10">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //         >
// // //           <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
// // //              Client Stories
// // //           </div>
// // //           <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
// // //             Smiles We've <span className="text-gold-500">Created</span>
// // //           </h2>
// // //           <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
// // //             Join our growing family of satisfied homeowners who found their dream home with RRL.
// // //           </p>
// // //         </motion.div>
// // //       </div>

// // //       {/* Infinite Scroll Container */}
// // //       <div className="relative w-full overflow-hidden py-10">
// // //         {/* Gradient Fade Masks */}
// // //         <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
// // //         <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-neutral-50 to-transparent" />

// // //         {/* CSS Animation Style for Pausing */}
// // //         <style jsx>{`
// // //           @keyframes scroll {
// // //             0% { transform: translateX(0); }
// // //             100% { transform: translateX(-50%); }
// // //           }
// // //           .animate-scroll {
// // //             animation: scroll 40s linear infinite;
// // //             width: fit-content;
// // //             display: flex;
// // //           }
// // //           .animate-scroll:hover {
// // //             animation-play-state: paused;
// // //           }
// // //         `}</style>

// // //         <div className="animate-scroll gap-8 pl-8">
// // //           {/* Duplicate list for seamless looping */}
// // //           {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
// // //             <div 
// // //                 key={i} 
// // //                 className="group relative h-[400px] w-[300px] flex-shrink-0 cursor-pointer"
// // //             >
// // //               {/* Card Container */}
// // //               <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
                
// // //                 {/* Image */}
// // //                 <div className="relative h-full w-full">
// // //                   <Image
// // //                     src={img}
// // //                     alt={`Happy Client ${i}`}
// // //                     fill
// // //                     className="object-cover transition-transform duration-700 group-hover:scale-110"
// // //                     unoptimized
// // //                   />
                  
// // //                   {/* Overlay */}
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
// // //                   {/* Content Overlay */}
// // //                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
// // //                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
// // //                         <div className="h-0.5 w-6 bg-gold-400"></div>
// // //                         <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Handover</span>
// // //                      </div>
// // //                      <h3 className="text-2xl font-bold text-white font-playfair">RRL Family</h3>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }


// // // // ========== 6. TESTIMONIALS COMPONENT (UPDATED ROLES) ==========
// // // function Testimonials() {
// // //   const testimonialData = [
// // //     {
// // //       type: "text",
// // //       name: "Rita Chauhan",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Sarjapur, Bengaluru",
// // //       rating: 5,
// // //       testimonial:
// // //         "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business.",
// // //     },
// // //     {
// // //       type: "text",
// // //       name: "Rajesh Kumar",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Varthur, Bengaluru",
// // //       rating: 5,
// // //       testimonial:
// // //         "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations.",
// // //     },
// // //     {
// // //       type: "video",
// // //       name: "VideoTestimonial1",
// // //       videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
// // //     },
// // //     {
// // //       type: "text",
// // //       name: "Priya Sharma",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Medahalli, Bengaluru",
// // //       rating: 5,
// // //       testimonial:
// // //         "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity.",
// // //     },
// // //     {
// // //       type: "text",
// // //       name: "Suman Narayan",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Bengaluru",
// // //       rating: 5,
// // //       testimonial:
// // //         "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat. Even budget friendly too. I highly recommend RRL for interior designing.",
// // //     },
// // //     {
// // //       type: "video",
// // //       name: "VideoTestimonial2",
// // //       videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
// // //     },
// // //     {
// // //       type: "text",
// // //       name: "Subhash S",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Bengaluru",
// // //       rating: 5,
// // //       testimonial:
// // //         "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
// // //     },
// // //     {
// // //       type: "text",
// // //       name: "Neelima Maryam",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Bengaluru",
// // //       rating: 5,
// // //       testimonial: "Very happy with the designs and budget.",
// // //     },
// // //     {
// // //       type: "text",
// // //       name: "Attili Nikhil",
// // //       role: "Happy Home Buyer", // CHANGED
// // //       location: "Bengaluru",
// // //       rating: 5,
// // //       testimonial:
// // //         "Had a great experience with RRL. They execute what we tell them. I highly recommend their 3D designs. They respond to us with great patience and even their price is very reasonable.",
// // //     },
// // //   ]

// // //   const containerVariants: Variants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.15 },
// // //     },
// // //   }

// // //   const itemVariants: Variants = {
// // //     hidden: { opacity: 0, y: 30 },
// // //     visible: { 
// // //       opacity: 1, 
// // //       y: 0, 
// // //       transition: { type: "spring", stiffness: 50, damping: 15 } 
// // //     },
// // //   }

// // //   return (
// // //     <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
// // //       <div className="container mx-auto px-4 relative z-10">
        
// // //         {/* Header */}
// // //         <div className="mb-16 text-center">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             <h2 className="mb-4 text-4xl font-bold font-playfair text-black lg:text-5xl">
// // //               Hear From Our <span className="text-gold-500">Clients</span>
// // //             </h2>
// // //             <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
// // //               Real stories from families who found their dream home with RRL.
// // //             </p>
// // //           </motion.div>
// // //         </div>

// // //         {/* Grid Layout */}
// // //         <motion.div
// // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, margin: "-50px" }}
// // //         >
// // //           {testimonialData.map((item, index) => {
// // //             if (item.type === "video") {
// // //               return (
// // //                 <motion.div
// // //                   key={index}
// // //                   variants={itemVariants}
// // //                   whileHover={{ y: -8, scale: 1.01 }}
// // //                   className="rounded-3xl overflow-hidden shadow-xl bg-black border-2 border-gray-100 h-full min-h-[320px] relative group"
// // //                 >
// // //                   <iframe
// // //                     src={item.videoUrl}
// // //                     title={item.name}
// // //                     className="absolute top-0 left-0 w-full h-full object-cover"
// // //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //                     allowFullScreen
// // //                   />
// // //                 </motion.div>
// // //               )
// // //             } else {
// // //               return (
// // //                 <motion.div
// // //                   key={index}
// // //                   variants={itemVariants}
// // //                   whileHover={{ y: -8 }}
// // //                   className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative transition-shadow hover:shadow-2xl hover:border-gold-200"
// // //                 >
// // //                   {/* Quote Icon Background */}
// // //                   <Quote className="absolute top-6 right-6 h-12 w-12 text-gold-500/10 rotate-12" />

// // //                   {/* Rating */}
// // //                   <div className="flex space-x-1 mb-6">
// // //                     {[...Array(item.rating || 5)].map((_, i) => (
// // //                       <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
// // //                     ))}
// // //                   </div>

// // //                   {/* Testimonial Text */}
// // //                   <div className="mb-8 flex-grow">
// // //                     <p className="text-gray-700 leading-relaxed italic relative z-10">
// // //                       "{item.testimonial}"
// // //                     </p>
// // //                   </div>

// // //                   {/* User Details */}
// // //                   <div className="mt-auto border-t border-gray-100 pt-6">
// // //                     <h4 className="font-bold text-xl text-black mb-1">{item.name}</h4>
// // //                     <div className="flex items-center justify-between text-sm">
// // //                       <span className="text-gold-600 font-semibold">Happy Home Buyer</span> {/* HARDCODED HERE AS WELL AS BACKUP */}
// // //                       {item.location && (
// // //                         <div className="flex items-center text-gray-400">
// // //                           <MapPin className="h-3 w-3 mr-1" />
// // //                           <span className="truncate max-w-[120px]">{item.location}</span>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               )
// // //             }
// // //           })}
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // function PartnersSection() {
// // //   const bankingPartners = [
// // //     { name: "SBI", src: "/logos/SBI-Logo.png" },
// // //     { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
// // //     { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
// // //     { name: "Union Bank", src: "/logos/union-bank.png" },
// // //     { name: "ICICI Bank", src: "/logos/icici-bank.png" },
// // //     { name: "Axis Bank", src: "/logos/axis-bank.svg" },
// // //     { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
// // //     { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
// // //     { name: "TATA Capital", src: "/logos/tata-capital.png" },
// // //   ]

// // //   const trustedBrands = [
// // //     { name: "Kerovit", src: "/logos/kerovit.png" },
// // //     { name: "Schneider", src: "/logos/schneider.png" },
// // //     { name: "One Touch", src: "/logos/one-touch.png" },
// // //     { name: "Designhive", src: "/logos/Designhive.png" },
// // //     { name: "Polycab", src: "/logos/polycab.png" },
// // //     { name: "SVT", src: "/logos/svt.png" },
// // //     { name: "Shivam Enterprise", src: "/logos/shivam.png" },
// // //     { name: "Nippon", src: "/logos/nippon.png" },
// // //     { name: "Fenstect", src: "/logos/fenstect.png" },
// // //     { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
// // //     { name: "Philips", src: "/logos/philips.png" },
// // //     { name: "Wipro", src: "/logos/wipro.jpg" },
// // //   ]

// // //   const marketingPartners = [
// // //     { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
// // //     { name: "Housing.com", src: "/logos/housing-com.png" },
// // //     { name: "Marketly", src: "/logos/marketly.jpg" },
// // //     { name: "99acres", src: "/logos/99acres.png" },
// // //   ]

// // //   const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
// // //   const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
// // //   const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]

// // //   return (
// // //     <motion.section
// // //       className="overflow-hidden py-20 bg-light-gold"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.2 }}
// // //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         <div className="mb-16 text-center">
// // //           <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">
// // //             Our Valued <span className="text-gold-600">Partners</span>
// // //           </h1>
// // //           <p className="mx-auto max-w-2xl text-xl text-gray-800">
// // //             Collaborating with industry leaders to bring you the best in real estate.
// // //           </p>
// // //         </div>

// // //         <div className="space-y-16">
// // //           <div>
// // //             <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
// // //             <div className="relative w-full overflow-hidden py-4">
// // //               <motion.div
// // //                 className="flex flex-nowrap"
// // //                 animate={{ x: ["0%", `-${(100 / 2) * (bankingPartners.length / 6)}%`] }}
// // //                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
// // //               >
// // //                 {duplicatedBankingPartners.map((partner, index) => (
// // //                   <div key={`banking-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// // //                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// // //                       <Image
// // //                         src={partner.src || "/placeholder.svg"}
// // //                         alt={partner.name}
// // //                         width={120}
// // //                         height={60}
// // //                         className="max-h-full max-w-full object-contain"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //           <div>
// // //             <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
// // //             <div className="relative w-full overflow-hidden py-4">
// // //               <motion.div
// // //                 className="flex flex-nowrap"
// // //                 animate={{ x: [`-${(100 / 2) * (trustedBrands.length / 6)}%`, "0%"] }}
// // //                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
// // //               >
// // //                 {duplicatedTrustedBrands.map((brand, index) => (
// // //                   <div key={`trusted-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// // //                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// // //                       <Image
// // //                         src={brand.src || "/placeholder.svg"}
// // //                         alt={brand.name}
// // //                         width={120}
// // //                         height={60}
// // //                         className="max-h-full max-w-full object-contain"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //           <div>
// // //             <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
// // //             <div className="relative w-full overflow-hidden py-4">
// // //               <motion.div
// // //                 className="flex flex-nowrap"
// // //                 animate={{ x: ["0%", `-${(100 / 2) * (marketingPartners.length / 6)}%`] }}
// // //                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
// // //               >
// // //                 {duplicatedMarketingPartners.map((partner, index) => (
// // //                   <div key={`marketing-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// // //                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// // //                       <Image
// // //                         src={partner.src || "/placeholder.svg"}
// // //                         alt={partner.name}
// // //                         width={120}
// // //                         height={60}
// // //                         className="max-h-full max-w-full object-contain"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // // function FAQSection({
// // //   title = "Frequently Asked Questions",
// // //   subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
// // //   defaultLocation = "sarjapur",
// // // }: FAQSectionProps) {
// // //   const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
// // //   const [openItems, setOpenItems] = useState<string[]>([])

// // //   const sarjapurFAQs = [
// // //     {
// // //       question: "What is the price of a 2 BHK flat in Sarjapur?",
// // //       answer:
// // //         "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
// // //     },
// // //     {
// // //       question: "Where can I buy a 2 BHK flat in Bangalore?",
// // //       answer:
// // //         "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
// // //     },
// // //     {
// // //       question: "Are there apartments in Sarjapur Road for sale?",
// // //       answer:
// // //         "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
// // //     },
// // //     {
// // //       question: "What makes Luxury Apartments in Sarjapur Road special?",
// // //       answer:
// // //         "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
// // //     },
// // //   ]

// // //   const varthurFAQs = [
// // //     {
// // //       question: "Is Varthur a good area to live in Bangalore?",
// // //       answer:
// // //         "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
// // //     },
// // //     {
// // //       question: "What is the price of a flat in Varthur?",
// // //       answer:
// // //         "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
// // //     },
// // //     {
// // //       question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
// // //       answer:
// // //         "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
// // //     },
// // //     {
// // //       question: "What are the options for apartments in Varthur?",
// // //       answer:
// // //         "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
// // //     },
// // //   ]

// // //   const toggleItem = (id: string) => {
// // //     setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
// // //   }

// // //   const handleLocationChange = (location: "sarjapur" | "varthur") => {
// // //     setActiveLocation(location)
// // //     setOpenItems([])
// // //   }

// // //   const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
// // //   const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"

// // //   return (
// // //     <section className="bg-black py-20 text-white ">
// // //       <div className="container mx-auto px-4 ">
// // //         <div className="mb-16 text-center ">
// // //           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
// // //             <HelpCircle className="h-5 w-5" />
// // //             <span className="font-semibold">FAQ</span>
// // //           </div>

// // //           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>

// // //           <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>

// // //           <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
// // //             <button
// // //               onClick={() => handleLocationChange("sarjapur")}
// // //               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// // //                 }`}
// // //             >
// // //               <MapPin className="h-4 w-4" />
// // //               <span>Sarjapur</span>
// // //             </button>
// // //             <button
// // //               onClick={() => handleLocationChange("varthur")}
// // //               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// // //                 }`}
// // //             >
// // //               <MapPin className="h-4 w-4" />
// // //               <span>Varthur</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="mx-auto max-w-4xl">
// // //           <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>

// // //           <div className="space-y-4">
// // //             {currentFAQs.map((faq, index) => {
// // //               const itemId = `${activeLocation}-${index}`
// // //               const isOpen = openItems.includes(itemId)

// // //               return (
// // //                 <div
// // //                   key={itemId}
// // //                   className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
// // //                 >
// // //                   <button
// // //                     onClick={() => toggleItem(itemId)}
// // //                     className="flex w-full items-center justify-between px-8 py-6 text-left"
// // //                   >
// // //                     <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
// // //                     <div className="flex-shrink-0">
// // //                       {isOpen ? (
// // //                         <ChevronUp className="h-5 w-5 text-gold-400" />
// // //                       ) : (
// // //                         <ChevronDown className="h-5 w-5 text-gray-500" />
// // //                       )}
// // //                     </div>
// // //                   </button>

// // //                   <div
// // //                     className={cn(
// // //                       "overflow-hidden transition-all duration-300 ease-in-out",
// // //                       isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
// // //                     )}
// // //                   >
// // //                     <div className="px-8 pb-6">
// // //                       <p className="leading-relaxed text-gray-400">{faq.answer}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               )
// // //             })}
// // //           </div>
// // //         </div>

// // //         <div className="mt-16 text-center">
// // //           <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
// // //             <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
// // //             <p className="mb-6 text-gray-400">
// // //               Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
// // //             </p>
// // //             <div className="flex flex-col justify-center gap-4 sm:flex-row">
// // //               <a
// // //                 href="/contact"
// // //                 className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600"
// // //               >
// // //                 Contact Our Experts
// // //               </a>
// // //               <a
// // //                 href="tel:+91-8494966966"
// // //                 className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20"
// // //               >
// // //                 Call: +91-8494966966
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // function ChannelPartnerCTA() {
// // //   return (
// // //     <motion.section
// // //       className="bg-black py-20"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.2 }}
// // //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         <div className="rounded-3xl bg-gray-900/50 border border-gold-800 p-12 text-center">
// // //           <motion.h2
// // //             className="mb-4 text-3xl font-bold text-white font-playfair lg:text-4xl"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //           >
// // //             Become a <span className="text-gold-400">Channel Partner</span>
// // //           </motion.h2>
// // //           <motion.p
// // //             className="mx-auto mb-8 max-w-2xl text-lg text-gray-400"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.2 }}
// // //           >
// // //             Are you a real estate agent or a firm? Partner with us to get access to exclusive inventory, attractive
// // //             commissions, and dedicated support.
// // //           </motion.p>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.4 }}
// // //           >
// // //             <Link href="/channel-partners">
// // //               <Button
// // //                 size="lg"
// // //                 className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// // //               >
// // //                 Join Our Network
// // //                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// // //               </Button>
// // //             </Link>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // // function CallToAction() {
// // //   const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
// // //   const router = useRouter()

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     try {
// // //       const res = await fetch("https://formspree.io/f/xwprwzdq", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Accept: "application/json",
// // //         },
// // //         body: JSON.stringify(formData),
// // //       })

// // //       if (res.ok) {
// // //         router.push("/c1/thankyou")
// // //       } else {
// // //         alert("Failed to send your request. Please try again.")
// // //       }
// // //     } catch (error) {
// // //       console.error("Error submitting form:", error)
// // //       alert("Something went wrong. Please try again.")
// // //     }
// // //   }

// // //   return (
// // //     <section className="relative overflow-hidden bg-light-gold py-24 text-black">
// // //       <div className="container relative mx-auto px-4">
// // //         <div className="mb-16 text-center">
// // //           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
// // //           <p className="mx-auto max-w-2xl text-xl text-gray-800">
// // //             Contact Us: Let's Start Your Real Estate Journey Together
// // //           </p>
// // //         </div>

// // //         <div className="mx-auto max-w-6xl">
// // //           <div className="grid items-start gap-16 lg:grid-cols-2">
// // //             <motion.div
// // //               className="rounded-3xl p-8 bg-white shadow-2xl"
// // //               initial={{ opacity: 0, scale: 0.9 }}
// // //               whileInView={{ opacity: 1, scale: 1 }}
// // //               transition={{ duration: 0.8, ease: "easeOut" }}
// // //             >
// // //               <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
// // //               <form onSubmit={handleSubmit} className="space-y-6">
// // //                 <div className="grid gap-4 md:grid-cols-2">
// // //                   <div>
// // //                     <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
// // //                     <Input
// // //                       placeholder="Your name"
// // //                       value={formData.name}
// // //                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // //                       className="bg-gray-100 focus:border-gold-500"
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
// // //                     <Input
// // //                       placeholder="Your phone number"
// // //                       value={formData.contact}
// // //                       onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
// // //                       className="bg-gray-100 focus:border-gold-500"
// // //                       required
// // //                     />
// // //                   </div>
// // //                 </div>
// // //                 <div>
// // //                   <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
// // //                   <Select
// // //                     value={formData.property}
// // //                     onValueChange={(value) => setFormData({ ...formData, property: value })}
// // //                   >
// // //                     <SelectTrigger className="bg-gray-100">
// // //                       <SelectValue placeholder="Select a property" />
// // //                     </SelectTrigger>
// // //                     <SelectContent>
// // //                       <SelectItem value="palacio">RRL Palacio</SelectItem>
// // //                       <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
// // //                       <SelectItem value="sequoia">RRL Sequoia</SelectItem>
// // //                     </SelectContent>
// // //                   </Select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
// // //                   <Textarea
// // //                     placeholder="Your query in brief"
// // //                     value={formData.message}
// // //                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// // //                     className="min-h-[120px] bg-gray-100 focus:border-gold-500"
// // //                   />
// // //                 </div>
// // //                 <Button
// // //                   type="submit"
// // //                   size="lg"
// // //                   className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// // //                 >
// // //                   Submit Request
// // //                   <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// // //                 </Button>
// // //               </form>
// // //             </motion.div>
// // //             <motion.div
// // //               className="space-y-8"
// // //               initial={{ opacity: 0, x: 50 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, ease: "easeOut" }}
// // //             >
// // //               <div>
// // //                 <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
// // //                 <p className="mb-8 leading-relaxed text-gray-700">
// // //                   Take the first step towards your real estate goals. Contact our expert team for personalised
// // //                   assistance.
// // //                 </p>
// // //               </div>
// // //               <div className="space-y-6">
// // //                 <div className="flex items-start space-x-4">
// // //                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// // //                     <Phone className="h-6 w-6 text-black" />
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
// // //                     <a
// // //                       href="tel:+918494966966"
// // //                       className="text-gray-700 hover:text-blue-600 transition-colors"
// // //                     >
// // //                       +91-8494966966
// // //                     </a>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start space-x-4">
// // //                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// // //                     <Mail className="h-6 w-6 text-black" />
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
// // //                     <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start space-x-4">
// // //                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// // //                     <MapPin className="h-6 w-6 text-black" />
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
// // //                     <p className="text-gray-700">
// // //                       RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ========== FINAL PAGE EXPORT ==========
// // // export default function HomePage() {
// // //   return (
// // //     <>
// // //       <Hero />
// // //       <Properties />
// // //       <HappyClientsGallery />
// // //       <Stats />
// // //       <Testimonials />
// // //       <AwardsSection />
// // //       <Leadership />
// // //       <PartnersSection />
// // //       <FAQSection />
// // //       <ChannelPartnerCTA />
// // //       <CallToAction />
// // //     </>
// // //   )
// // // }

// // "use client"

// // import { useState, useEffect, useRef } from "react"
// // import type React from "react"
// // import Image from "next/image"
// // import Link from "next/link"
// // import { useRouter } from "next/navigation"
// // import { motion, Variants, useScroll, useTransform } from "framer-motion"

// // // UI Components
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { cn } from "@/lib/utils"

// // // Icons
// // import {
// //   Award,
// //   ArrowRight,
// //   Play,
// //   Star,
// //   Building,
// //   Users,
// //   Target,
// //   Trophy,
// //   Newspaper,
// //   Calendar,
// //   Medal,
// //   MapPin,
// //   Home,
// //   Building2,
// //   Quote,
// //   Lightbulb,
// //   HelpCircle,
// //   ChevronDown,
// //   ChevronUp,
// //   Phone,
// //   Mail,
// //   Send,
// //   Maximize,
// //   Download,
// //   CheckCircle2,
// //   ShieldCheck,
// //   Zap,
// //   CalendarClock,
// //   Clock,
// // } from "lucide-react"

// // // ========== 1. HERO COMPONENT ==========
// // function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0)
// //   const [isPlaying, setIsPlaying] = useState(false)

// //   const slides = [
// //     {
// //       title: "Times Real Estate Icons Award",
// //       subtitle: "2025 Winner",
// //       description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
// //       image: "/awardhome.jpeg",
// //       badge: "Award Winner",
// //     },
// //     {
// //       title: "Global Real Estate Brand",
// //       subtitle: "2023 Champion",
// //       description: "Recognized globally for excellence in affordable luxury real estate development",
// //       image: "/awardhome1.jpeg",
// //       badge: "Global Recognition",
// //     },
// //   ]

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length)
// //     }, 5000)
// //     return () => clearInterval(timer)
// //   }, [slides.length])

// //   return (
// //     <>
// //       {/* ===== Hero Section ===== */}
// //       <motion.section
// //         className="relative flex min-h-[90vh] items-center overflow-hidden bg-black"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <div className="absolute inset-0 bg-grid-white/[0.05]" />

// //         {/* Background Gradient Accent */}
// //         <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[100px]" />

// //         <div className="container relative z-10 mx-auto px-4 py-20">
// //           <div className="grid items-center gap-16 lg:grid-cols-2">
// //             {/* Left Content */}
// //             <motion.div
// //               className="space-y-8"
// //               initial={{ opacity: 0, x: -50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //             >
// //               <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// //                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500">
// //                   <Award className="h-4 w-4 text-black" />
// //                 </div>
// //                 <span className="text-sm font-semibold">
// //                   Times Real Estate Icon Awards 2025 Winner
// //                 </span>
// //               </div>

// //               <div className="space-y-6">
// //                 <h1 className="text-5xl font-bold leading-tight text-white font-playfair lg:text-7xl">
// //                   RRL Builders & <span className="text-gold-400 block">Developers</span>
// //                 </h1>

// //                 <div className="space-y-4 text-lg leading-relaxed text-gray-300">
// //                   <p>
// //                     As award-winning developers, RRL is committed to delivering modern luxury apartments with
// //                     uncompromising quality. Our proven track record of four successfully delivered projects ensures
// //                     early possession.
// //                   </p>
// //                   <p>
// //                     Our projects are strategically located in Bangalore's most promising growth zones:{" "}
// //                     <span className="text-gold-400 font-semibold">Sarjapura, Varthur, and Chikkatirupati.</span>
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* CTA Buttons */}
// //               <div className="flex flex-col gap-4 sm:flex-row pt-4">
// //                 <Link href="/projects">
// //                   <Button
// //                     size="lg"
// //                     className="group rounded-full px-8 py-6 text-lg font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
// //                   >
// //                     Explore RRL Properties
// //                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// //                   </Button>
// //                 </Link>
// //                 <Link href="/contact">
// //                   <Button
// //                     variant="outline"
// //                     size="lg"
// //                     className="group rounded-full px-8 py-6 text-lg font-semibold text-gold-400 border-gold-400 hover:bg-gold-950 transition-all duration-300"
// //                   >
// //                     Contact Us
// //                   </Button>
// //                 </Link>
// //               </div>

// //               {/* Trust Indicators */}
// //               <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
// //                 <div className="flex items-center space-x-2">
// //                   <div className="flex -space-x-2">
// //                     {[...Array(5)].map((_, i) => (
// //                       <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
// //                     ))}
// //                   </div>
// //                   <span className="text-sm font-medium text-gray-400">
// //                     4.9/5 Customer Rating
// //                   </span>
// //                 </div>
// //                 <div className="h-6 w-px bg-gold-800" />
// //                 <div className="flex items-center space-x-2">
// //                   <Building className="h-5 w-5 text-gold-400" />
// //                   <span className="text-sm font-medium text-gray-400">
// //                     150+ Proud Employees
// //                   </span>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Right Content - Video */}
// //             <motion.div
// //               className="relative flex justify-center lg:justify-end"
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
// //             >
// //               <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gold-800 shadow-2xl shadow-gold-900/20 group">
// //                 <div className="absolute inset-0 bg-gold-500/10 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
// //                 <iframe
// //                   src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1&loop=1&playlist=noXGLRYcyBU"
// //                   title="Our Story Video"
// //                   frameBorder="0"
// //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                   allowFullScreen
// //                   className="absolute top-0 left-0 w-full h-full scale-105"
// //                 ></iframe>
// //               </div>

// //               {/* Decorative elements around video */}
// //               <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-gold-800/30 bg-gray-900/50" />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* ===== Palm Altezze Banner (FIXED SCROLL EFFECT) ===== */}
// //       <PalmAltezzeBanner />

// //       {/* ===== Horizontal Brochure Form (UPDATED) ===== */}
// //       <HorizontalBrochureForm />
// //     </>
// //   )
// // }

// // function PalmAltezzeBanner() {
// //   return (
// //     <section className="relative w-full bg-black py-20">
// //        {/* Background */}
// //       <div className="absolute inset-0 z-0">
// //         <Image
// //           src="/justlaunch.png"
// //           alt="Palm Altezze Background"
// //           fill
// //           className="object-cover opacity-30"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
// //       </div>

// //       <div className="container relative z-10 mx-auto px-4">
// //         <div className="flex flex-col lg:flex-row gap-12">
          
// //           {/* Left Side: Sticky Content */}
// //           <div className="lg:w-1/2 pt-10">
// //             {/* 'sticky top-32' makes this stay fixed while you scroll */}
// //             <div className="lg:sticky lg:top-32 space-y-8">
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.8 }}
// //                 >
// //                   <div className="inline-block px-4 py-1 rounded-full border border-gold-500 text-gold-400 text-sm font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm mb-4">
// //                     New Launch
// //                   </div>
// //                   <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
// //                     RRL <br/><span className="text-gold-400">Palm Altezze</span>
// //                   </h2>
// //                   <p className="text-xl md:text-2xl text-gray-200 font-light mt-4">
// //                     Where luxury meets tranquility. 2 & 3 BHK premium apartments designed for the modern lifestyle.
// //                   </p>
// //                 </motion.div>

// //                 <motion.div 
// //                   initial={{ opacity: 0 }}
// //                   whileInView={{ opacity: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.8, delay: 0.2 }}
// //                   className="grid grid-cols-2 gap-8 pt-4"
// //                 >
// //                   <div className="border-l-2 border-gold-500 pl-4">
// //                     <p className="text-gray-400 text-sm uppercase tracking-wide">Project Area</p>
// //                     <p className="text-white text-xl font-bold">2.25 Acres</p>
// //                   </div>
// //                   <div className="border-l-2 border-gold-500 pl-4">
// //                     <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
// //                     <p className="text-white text-xl font-bold">Varthur</p>
// //                   </div>
// //                   <div className="border-l-2 border-gold-500 pl-4">
// //                     <p className="text-gray-400 text-sm uppercase tracking-wide">Status</p>
// //                     <p className="text-emerald-400 text-xl font-bold">Open for Booking</p>
// //                   </div>
// //                   <div className="border-l-2 border-gold-500 pl-4">
// //                     <p className="text-gray-400 text-sm uppercase tracking-wide">Units</p>
// //                     <p className="text-white text-xl font-bold">Premium 2 & 3 BHK</p>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.8, delay: 0.4 }}
// //                   className="pt-6"
// //                 >
// //                   <Link href="/projects/palm-altezze">
// //                     <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105">
// //                       View Full Details <ArrowRight className="ml-2" />
// //                     </Button>
// //                   </Link>
// //                 </motion.div>
// //             </div>
// //           </div>

// //           {/* Right Side: Tall Image (This scrolls) */}
// //           <div className="lg:w-1/2 w-full">
// //             {/* h-[150vh] makes the image 1.5x taller than the screen, forcing a scroll */}
// //             <div className="relative w-full h-[150vh] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
// //               <Image
// //                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764569945/palm-altezze_20_mkplh3.jpg"
// //                 alt="Palm Altezze Interior"
// //                 fill
// //                 className="object-fill object-top" // Ensures it starts at the top and you scroll down to see the rest
// //                 sizes="(max-width: 768px) 100vw, 50vw"
// //               />
// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
// //               <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 z-10">
// //                  <p className="text-gold-400 text-sm font-bold uppercase">Artist Impression</p>
// //                  <p className="text-white font-playfair text-lg">Premium Interiors</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // function HorizontalBrochureForm() {
// //   const router = useRouter()
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "", 
// //     phone: "",
// //     whatsappUpdates: false,
// //   })
// //   const [loading, setLoading] = useState(false)

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value, type, checked } = e.target
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }))
// //   }

// //   const handleDownloadSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setLoading(true)

// //     // Basic Validation
// //     if (!formData.name || !formData.phone || !formData.email) {
// //       alert("Please fill in all fields.")
// //       setLoading(false)
// //       return
// //     }

// //     try {
// //       // Send data to Formspree
// //       const res = await fetch("https://formspree.io/f/xgvnpbwo", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       })

// //       if (res.ok) {
// //         // Auto-download the brochure
// //         const link = document.createElement("a")
// //         link.href = "/brochures/rrl-company-brochure.pdf"
// //         link.download = "RRL-Company-Brochure.pdf"
// //         document.body.appendChild(link)
// //         link.click()
// //         document.body.removeChild(link)

// //         // Open thank you page
// //         window.open("/c3/thankyou", "_blank")

// //         setFormData({ name: "", email: "", phone: "", whatsappUpdates: false })
// //       } else {
// //         alert("Failed to send details. Please try again.")
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //       alert("Something went wrong.")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <section className="bg-neutral-900 border-y border-gold-800 py-12">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
// //           <div className="lg:w-1/3 text-center lg:text-left">
// //             <h3 className="text-2xl font-bold text-white font-playfair flex items-center justify-center lg:justify-start gap-2">
// //               <Download className="text-gold-500 h-6 w-6" />
// //               Download Project Brochure
// //             </h3>
// //             <p className="text-gray-400 mt-2">
// //               Get the complete floor plans, pricing, and amenities list instantly.
// //             </p>
// //           </div>

// //           <form onSubmit={handleDownloadSubmit} className="lg:w-2/3 w-full">
// //             <div className="flex flex-col md:flex-row gap-4 items-center">
// //               <Input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={formData.name}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
// //               />
// //                <Input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Your Email"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 required
// //                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
// //               />
// //               <Input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Mobile Number"
// //                 value={formData.phone}
// //                 onChange={handleInputChange}
// //                 required
// //                 maxLength={10}
// //                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
// //               />
// //               <Button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="h-12 w-full md:w-auto px-8 bg-gold-500 hover:bg-gold-600 text-black font-bold whitespace-nowrap"
// //               >
// //                 {loading ? "Processing..." : "Download Now"}
// //               </Button>
// //             </div>
// //             <div className="flex items-center space-x-2 mt-3 justify-center lg:justify-start">
// //               <Checkbox
// //                 id="whatsapp-updates-hor"
// //                 name="whatsappUpdates"
// //                 checked={formData.whatsappUpdates}
// //                 onCheckedChange={(checked) =>
// //                   setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))
// //                 }
// //                 className="border-gold-700 data-[state=checked]:bg-gold-500"
// //               />
// //               <label htmlFor="whatsapp-updates-hor" className="text-sm text-gray-400 cursor-pointer">
// //                 I agree to receive updates via WhatsApp
// //               </label>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 2. AWARDS SECTION (MOVED DOWN) ==========
// // function AwardsSection() {
// //   return (
// //     <motion.section
// //       className="py-20 bg-black text-white relative"
// //       initial={{ opacity: 0 }}
// //       whileInView={{ opacity: 1 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 1 }}
// //     >
// //       <div className="absolute inset-0 bg-grid-white/[0.05]" />
// //       <div className="container mx-auto px-4 relative">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             className="space-y-8"
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h1 className="text-4xl md:text-5xl font-playfair font-bold">
// //               Times Real Estate Icon Awards, 2025
// //             </h1>
// //             <p className="text-lg text-gray-400 leading-relaxed">
// //               RRL Groups has been honored with the prestigious award for Builder of the Year in
// //               the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
// //             </p>

// //             <div className="space-y-4">
// //               {[
// //                 ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
// //                 ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
// //                 ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
// //               ].map(([title, desc], i) => (
// //                 <div key={i} className="flex items-start space-x-3">
// //                   <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
// //                     <Star className="h-3 w-3 text-black" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-white">{title}</h3>
// //                     <p className="text-gray-500 text-sm">{desc}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="pt-4">
// //               <Link href="/awards">
// //                 <Button className="rounded-full px-8 py-3 bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300">
// //                   View All Awards
// //                   <ArrowRight className="ml-2 h-4 w-4" />
// //                 </Button>
// //               </Link>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             className="relative"
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <Image
// //               src="/awardhome.jpeg"
// //               alt="RRL Awards Ceremony 2025"
// //               width={600}
// //               height={400}
// //               className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// // // ========== 3. LEADERSHIP COMPONENT (MOVED DOWN) ==========
// // function Leadership() {
// //   return (
// //     <motion.section
// //       className="relative overflow-hidden bg-light-black py-24"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.1 }}
// //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //     >
// //       <div className="flex justify-center mb-8">
// //         <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// //           <Users className="h-5 w-5" />
// //           <span className="font-semibold">Leadership Excellence</span>
// //         </div>
// //       </div>

// //       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

// //       <div className="container relative mx-auto px-4">
// //         {/* Pillars Content */}
// //         <div className="mb-20 text-center max-w-4xl mx-auto bg-gray-900/40 p-8 rounded-3xl border border-gold-800/30 backdrop-blur-sm">
// //           <div className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-6 uppercase tracking-wider">
// //             Pillars of RRL Group
// //           </div>
// //           <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-playfair">
// //             RRL Builders and Developers is led by the strong partnership of twin brothers <span className="text-white font-semibold">Mr. Ram</span> and <span className="text-white font-semibold">Mr. Lakshman</span>. Their shared commitment to quality and smart strategy is the main reason RRL is known for delivering modern, award-winning luxury homes.
// //           </p>
// //         </div>

// //         <div className="grid items-center gap-16 lg:grid-cols-2">
// //           <motion.div
// //             className="space-y-8"
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //           >
// //             <div className="space-y-4">
// //               <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
// //                 Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
// //               </h2>

// //               <p className="text-lg leading-relaxed text-gray-400">
// //                 When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
// //                 Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
// //               </p>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             className="relative"
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //           >
// //             <div className="grid grid-cols-2 gap-6">
// //               <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
// //                 <Image
// //                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
// //                   alt="Mr. Ram Reddy"
// //                   width={300}
// //                   height={400}
// //                   className="h-auto w-full rounded-2xl shadow-lg"
// //                 />
// //                 <div className="mt-4 text-center">
// //                   <h3 className="font-bold text-white">Mr. Ram Reddy</h3>
// //                   <p className="text-sm text-gray-400">Director</p>
// //                 </div>
// //               </div>
// //               <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
// //                 <Image
// //                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
// //                   alt="Mr. Lakshman Reddy"
// //                   width={300}
// //                   height={400}
// //                   className="h-auto w-full rounded-2xl shadow-lg"
// //                 />
// //                 <div className="mt-4 text-center">
// //                   <h3 className="font-bold text-white">Mr. Lakshman Reddy</h3>
// //                   <p className="text-sm text-gray-400">Chairman</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// // // ========== 4. PROPERTIES COMPONENT (NO SEQUOIA, NO PRICE, NO AREA) ==========
// // // function Properties() {
// // //   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

// // //   const residentialProperties = [
// // //     { 
// // //       id: "palacio", 
// // //       name: "RRL Palacio", 
// // //       location: "Medahalli, Bangalore", 
// // //       status: "READY TO MOVE", 
// // //       statusColor: "bg-blue-600",
// // //       image: "/LookProject2.jpeg", 
// // //       features: ["Infinity Pool", "Co-working Lounge", "Kids Play Area"], 
// // //     },
// // //     { 
// // //       id: "palm-altezze", 
// // //       name: "RRL Palm Altezze", 
// // //       location: "Varthur, Bangalore", 
// // //       status: " JUST LAUNCHED", 
// // //       statusColor: "bg-yellow-600",
// // //       image: "/justlaunch.png", 
// // //       features: ["Clubhouse", "Landscaped Greens", "Smart Security"], 
// // //     },
// // //     { 
// // //       id: "nature-woods", 
// // //       name: "RRL Nature Woods", 
// // //       location: "Sarjapur, Bangalore", 
// // //       status: "READY TO MOVE", 
// // //       statusColor: "bg-blue-600",
// // //       image: "/LookProject5.jpeg", 
// // //       features: ["Nature Park", "Jogging Track", "Amphitheater"], 
// // //     },
// // //   ]

// // //   const commercialProperties = [
// // //     { 
// // //       id: "towers", 
// // //       name: "RRL Towers", 
// // //       location: "Sampige Jala, Sarjapur", 
// // //       status: "READY TO MOVE", 
// // //       statusColor: "bg-blue-600",
// // //       image: "/Tower.jpeg", 
// // //       features: ["24/7 Access", "Cafeteria", "Power Backup"], 
// // //     },
// // //     { 
// // //       id: "complex", 
// // //       name: "RRL Complex", 
// // //       location: "South Bangalore", 
// // //       status: "UNDER CONSTRUCTION", 
// // //       statusColor: "bg-yellow-600",
// // //       image: "/complex.jpg", 
// // //       features: ["Main Road Facing", "Visitor Parking", "Loading Bay"], 
// // //     },
// // //   ]

// // //   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties

// // //   return (
// // //     <motion.section
// // //       className="bg-black py-24"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.1 }}
// // //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         {/* Header Section */}
// // //         <div className="mb-12 flex flex-col items-center text-center">
// // //           <motion.div
// // //             className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
// // //           >
// // //             <Home className="h-4 w-4" />
// // //             <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
// // //           </motion.div>
          
// // //           <h2 className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl">
// // //             Explore <span className="text-gold-400">RRL Projects</span>
// // //           </h2>

// // //           {/* Filter Tabs */}
// // //           <div className="relative inline-flex rounded-full bg-gray-900 p-1 border border-gold-900/50">
// // //             <button
// // //               onClick={() => setActiveTab("residential")}
// // //               className={`relative z-10 flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
// // //                 activeTab === "residential" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// // //               }`}
// // //             >
// // //               <span>Residential</span>
// // //             </button>
// // //             <button
// // //               onClick={() => setActiveTab("commercial")}
// // //               className={`relative z-10 flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
// // //                 activeTab === "commercial" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// // //               }`}
// // //             >
// // //               <span>Commercial</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* PROPERTIES LIST */}
// // //         <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
// // //           {currentProperties.map((property, index) => (
// // //             <motion.div
// // //               key={property.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-neutral-900 border border-neutral-800 shadow-2xl transition-all hover:border-gold-500/30 sm:flex-row h-full sm:h-[400px]"
// // //             >
// // //               {/* LEFT: Image Section */}
// // //               <div className="relative h-64 w-full sm:h-full sm:w-[50%] shrink-0 overflow-hidden">
// // //                 <Image
// // //                   src={property.image || "/placeholder.svg"}
// // //                   alt={property.name}
// // //                   fill
// // //                   className="object-cover transition-transform duration-700 group-hover:scale-110"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
// // //                 {/* Status Badge */}
// // //                 <div className="absolute top-4 left-4 z-10">
// // //                    <div className={`rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm ${property.statusColor} border border-white/20 tracking-wider`}>
// // //                       {property.status}
// // //                    </div>
// // //                 </div>
// // //               </div>

// // //               {/* RIGHT: Content Section */}
// // //               <div className="flex flex-col justify-between p-6 sm:p-8 w-full">
// // //                  <div>
// // //                     {/* Title */}
// // //                     <Link href={`/projects/${property.id}`}>
// // //                         <h3 className="text-2xl font-bold text-white font-playfair mb-2 hover:text-gold-400 transition-colors cursor-pointer">
// // //                             {property.name}
// // //                         </h3>
// // //                     </Link>
                    
// // //                     {/* Location */}
// // //                     <div className="flex items-center text-gray-400 mb-8 text-sm">
// // //                         <MapPin className="mr-1.5 h-4 w-4 text-gold-500" />
// // //                         {property.location}
// // //                     </div>

// // //                     {/* GRAPHICS / ICONS instead of Price/Area */}
// // //                     <div className="flex justify-between gap-2 mb-6 border-t border-b border-gray-800 py-4">
// // //                         <div className="flex flex-col items-center text-center">
// // //                            <ShieldCheck className="h-6 w-6 text-gold-500 mb-2" />
// // //                            <span className="text-xs text-gray-400">RERA Approved</span>
// // //                         </div>
// // //                         <div className="flex flex-col items-center text-center">
// // //                            <Zap className="h-6 w-6 text-gold-500 mb-2" />
// // //                            <span className="text-xs text-gray-400">Premium Amenities</span>
// // //                         </div>
// // //                         <div className="flex flex-col items-center text-center">
// // //                            <CheckCircle2 className="h-6 w-6 text-gold-500 mb-2" />
// // //                            <span className="text-xs text-gray-400">Quality Build</span>
// // //                         </div>
// // //                     </div>

// // //                     {/* Amenities Tags */}
// // //                     <div className="flex flex-wrap gap-2 mb-6">
// // //                         {property.features.slice(0, 3).map((feature, i) => (
// // //                            <span key={i} className="text-xs text-gray-400 border border-neutral-700 rounded-full px-3 py-1">
// // //                                {feature}
// // //                            </span>
// // //                         ))}
// // //                     </div>
// // //                  </div>

// // //                  <div className="space-y-4">
// // //                     {/* Action Buttons Row */}
// // //                     <div className="grid grid-cols-2 gap-3">
// // //                         <a 
// // //                            href="https://wa.me/918494966966" 
// // //                            target="_blank" 
// // //                            rel="noreferrer"
// // //                            className="flex items-center justify-center rounded-lg bg-gold-500 py-3 text-sm font-bold text-black hover:bg-gold-400 transition-colors"
// // //                         >
// // //                            Whatsapp Us
// // //                         </a>
// // //                         <a 
// // //                            href="tel:+918494966966"
// // //                            className="flex items-center justify-center rounded-lg border border-gold-500 py-3 text-sm font-bold text-gold-500 hover:bg-gold-500 hover:text-black transition-colors"
// // //                         >
// // //                            Call Now
// // //                         </a>
// // //                     </div>
// // //                  </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         <div className="text-center">
// // //           <Link href="/projects">
// // //             <Button
// // //               size="lg"
// // //               className="rounded-full border border-gold-500 bg-transparent px-10 py-6 text-lg font-semibold text-gold-500 transition-all duration-300 hover:bg-gold-500 hover:text-black hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
// // //             >
// // //               View All Properties
// // //             </Button>
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }

// // function Stats() {
// //   const statsData = [
// //     {
// //       icon: Users,
// //       value: "1000+",
// //       label: "Happy Families",
// //       description: "Satisfied customers",
// //     },
// //     {
// //       icon: Building,
// //       value: "5+",
// //       label: "Projects Completed",
// //       description: "Premium residential developments",
// //     },
// //     {
// //       icon: Target,
// //       value: "500+",
// //       label: "Trusted Partners",
// //       description: "Total construction area delivered",
// //     },
// //     {
// //       icon: Award,
// //       value: "150+",
// //       label: "Proud Employees",
// //       description: "Professional team members",
// //     },
// //   ]

// //   return (
// //     <motion.section
// //       className="py-24 bg-light-gold"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.2 }}
// //       variants={{
// //         hidden: { opacity: 0 },
// //         visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
// //       }}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="mb-16 text-center">
// //           <motion.h2
// //             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
// //             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
// //           >
// //             The Outstanding <span className="text-gold-600">Growth</span>
// //           </motion.h2>
// //           <motion.p
// //             className="mx-auto max-w-2xl text-xl text-gray-800"
// //             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
// //           >
// //             Celebrating Growth: Highlights of Our Accomplishments
// //           </motion.p>
// //         </div>

// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
// //           {statsData.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               className="group"
// //               variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
// //             >
// //               <div className="rounded-3xl border border-gold-300 bg-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
// //                 <div className="text-center">
// //                   <div className="mb-6">
// //                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-lg">
// //                       <stat.icon className="h-10 w-10 text-black" />
// //                     </div>
// //                   </div>
// //                   <div className="mb-2 text-5xl font-bold text-black">{stat.value}</div>
// //                   <div className="mb-3 text-lg font-semibold text-gray-800">{stat.label}</div>
// //                   <div className="text-sm leading-relaxed text-gray-600">{stat.description}</div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* QUOTE BOX ADDED FROM OLD FILE */}
// //         <div className="mt-16 text-center">
// //           <div className="mx-auto max-w-4xl rounded-3xl p-8 border border-gold-300 bg-white/50">
// //             <p className="text-lg italic leading-relaxed text-gray-800">
// //               "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
// //               you make well-informed decisions. Let us build an affordable society together."
// //             </p>
// //             <div className="mt-4 font-semibold text-gold-600">- RRL Groups</div>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// // // Inside page.tsx

// // // ========== 4. PROPERTIES COMPONENT (REDESIGNED) ==========
// // // function Properties() {
// // //   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

// // //   // Updated data structure to match the reference image layout
// // //   const residentialProperties = [
// // //     { 
// // //       id: "palacio", 
// // //       name: "RRL Palacio", 
// // //       location: "Medahalli, Bangalore", 
// // //       type: "Apartment",
// // //       status: "READY TO MOVE", 
// // //       image: "/LookProject2.jpeg", 
// // //       bedrooms: "2, 3 BHK",
// // //       devSize: "1.5 Acres",
// // //       totalUnits: "120 Units",
// // //       price: "₹ 45 Lakhs*" 
// // //     },
// // //     { 
// // //       id: "palm-altezze", 
// // //       name: "RRL Palm Altezze", 
// // //       location: "Varthur, Bangalore", 
// // //       type: "Luxury Apartment",
// // //       status: "JUST LAUNCHED", 
// // //       image: "/justlaunch.png", 
// // //       bedrooms: "2, 3 BHK",
// // //       devSize: "2.25 Acres",
// // //       totalUnits: "195 Units",
// // //       price: "₹ 75 Lakhs*" 
// // //     },
// // //     { 
// // //       id: "nature-woods", 
// // //       name: "RRL Nature Woods", 
// // //       location: "Sarjapur, Bangalore", 
// // //       type: "Premium Apartment",
// // //       status: "READY TO MOVE", 
// // //       image: "/LookProject5.jpeg", 
// // //       bedrooms: "2, 3 BHK",
// // //       devSize: "2 Acres",
// // //       totalUnits: "150 Units",
// // //       price: "₹ 55 Lakhs*" 
// // //     },
// // //   ]

// // //   const commercialProperties = [
// // //     { 
// // //       id: "towers", 
// // //       name: "RRL Towers", 
// // //       location: "Sampige Jala, Sarjapur", 
// // //       type: "Commercial Space",
// // //       status: "READY TO MOVE", 
// // //       image: "/Tower.jpeg", 
// // //       bedrooms: "Office Spaces",
// // //       devSize: "0.5 Acres",
// // //       totalUnits: "4 Floors",
// // //       price: "₹ 65 Lakhs*" 
// // //     },
// // //     { 
// // //       id: "complex", 
// // //       name: "RRL Complex", 
// // //       location: "South Bangalore", 
// // //       type: "Retail & Office",
// // //       status: "UNDER CONSTRUCTION", 
// // //       image: "/complex.jpg", 
// // //       bedrooms: "Shops / Offices",
// // //       devSize: "1 Acre",
// // //       totalUnits: "20 Units",
// // //       price: "₹ 55 Lakhs*" 
// // //     },
// // //   ]

// // //   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties

// // //   return (
// // //     <section className="bg-black py-24 relative">
// // //        <div className="absolute inset-0 bg-grid-white/[0.05]" />
// // //       <div className="container mx-auto px-4 relative z-10">
// // //         {/* Header Section */}
// // //         <div className="mb-16 flex flex-col items-center text-center">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
// // //           >
// // //             <Home className="h-4 w-4" />
// // //             <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
// // //           </motion.div>
          
// // //           <motion.h2 
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: 0.1 }}
// // //             className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl"
// // //           >
// // //             Explore <span className="text-gold-400">RRL Projects</span>
// // //           </motion.h2>

// // //           {/* Filter Tabs */}
// // //           <div className="relative inline-flex rounded-full bg-gray-900 p-1 border border-gold-900/50">
// // //             <button
// // //               onClick={() => setActiveTab("residential")}
// // //               className={`relative z-10 flex items-center space-x-2 rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${
// // //                 activeTab === "residential" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// // //               }`}
// // //             >
// // //               <span>Residential</span>
// // //             </button>
// // //             <button
// // //               onClick={() => setActiveTab("commercial")}
// // //               className={`relative z-10 flex items-center space-x-2 rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${
// // //                 activeTab === "commercial" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// // //               }`}
// // //             >
// // //               <span>Commercial</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* PROPERTIES LIST - HORIZONTAL CARDS */}
// // //         <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
// // //           {currentProperties.map((property, index) => (
// // //             <motion.div
// // //               key={property.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               viewport={{ once: true }}
// // //               className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-neutral-900 border border-gold-900/50 shadow-xl transition-all hover:border-gold-500/50 hover:shadow-gold-900/20"
// // //             >
// // //               {/* LEFT: Image Section (60% width on desktop) */}
// // //               <div className="relative h-64 lg:h-auto lg:w-[55%] shrink-0 overflow-hidden">
// // //                 <Image
// // //                   src={property.image || "/placeholder.svg"}
// // //                   alt={property.name}
// // //                   fill
// // //                   className="object-cover transition-transform duration-700 group-hover:scale-110"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
// // //                 {/* Status Tag */}
// // //                 <div className="absolute top-4 left-4">
// // //                    <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
// // //                       {property.status}
// // //                    </span>
// // //                 </div>
// // //               </div>

// // //               {/* RIGHT: Content Section */}
// // //               <div className="flex flex-col p-6 lg:p-8 w-full bg-neutral-900">
// // //                  {/* Header: Title & Logo Area */}
// // //                  <div className="flex justify-between items-start mb-6">
// // //                     <div>
// // //                         <h3 className="text-2xl font-bold text-white font-playfair mb-1 group-hover:text-gold-400 transition-colors">
// // //                             {property.name}
// // //                         </h3>
// // //                         <div className="flex items-center text-gray-400 text-sm">
// // //                             <MapPin className="mr-1.5 h-3.5 w-3.5 text-gold-500" />
// // //                             {property.location}
// // //                         </div>
// // //                     </div>
// // //                     {/* Placeholder for Project Logo if needed, currently using Icon */}
// // //                     <div className="h-10 w-10 rounded-full bg-gold-900/30 flex items-center justify-center border border-gold-500/30">
// // //                         <Building2 className="text-gold-400 h-5 w-5"/>
// // //                     </div>
// // //                  </div>

// // //                  {/* Grid Details (Reference Layout) */}
// // //                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 border-t border-b border-gray-800 py-6">
// // //                     {/* Item 1 */}
// // //                     <div className="flex items-start space-x-3">
// // //                         <Building className="h-5 w-5 text-gold-500 mt-0.5" />
// // //                         <div>
// // //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Project Type</p>
// // //                             <p className="text-sm font-semibold text-gray-200">{property.type}</p>
// // //                         </div>
// // //                     </div>
// // //                      {/* Item 2 */}
// // //                      <div className="flex items-start space-x-3">
// // //                         <Home className="h-5 w-5 text-gold-500 mt-0.5" />
// // //                         <div>
// // //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Configuration</p>
// // //                             <p className="text-sm font-semibold text-gray-200">{property.bedrooms}</p>
// // //                         </div>
// // //                     </div>
// // //                      {/* Item 3 */}
// // //                      <div className="flex items-start space-x-3">
// // //                         <Maximize className="h-5 w-5 text-gold-500 mt-0.5" />
// // //                         <div>
// // //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Dev Size</p>
// // //                             <p className="text-sm font-semibold text-gray-200">{property.devSize}</p>
// // //                         </div>
// // //                     </div>
// // //                      {/* Item 4 */}
// // //                      <div className="flex items-start space-x-3">
// // //                         <Target className="h-5 w-5 text-gold-500 mt-0.5" />
// // //                         <div>
// // //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Total Units</p>
// // //                             <p className="text-sm font-semibold text-gray-200">{property.totalUnits}</p>
// // //                         </div>
// // //                     </div>
// // //                  </div>

// // //                  {/* Footer: Price & Actions */}
// // //                  <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
// // //                     {/* <div className="w-full sm:w-auto bg-gray-800 rounded-lg px-4 py-3 text-center sm:text-left">
// // //                         <p className="text-xs text-gray-400">Starting From</p>
// // //                         <p className="text-xl font-bold text-white">{property.price}</p>
// // //                     </div> */}
// // //                     <div className="flex gap-3 w-full sm:w-auto">
// // //                         <a 
// // //                            href="tel:+918494966966"
// // //                            className="flex-1 sm:flex-none flex items-center justify-center h-12 w-12 rounded-lg border border-gray-600 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
// // //                         >
// // //                             <Phone className="h-5 w-5" />
// // //                         </a>
// // //                         <Link href={`/projects/${property.id}`} className="flex-1">
// // //                             <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-12 px-6 rounded-lg flex items-center justify-center">
// // //                                 View Details <ArrowRight className="ml-2 h-4 w-4" />
// // //                             </Button>
// // //                         </Link>
// // //                     </div>
// // //                  </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         <div className="text-center mt-12">
// // //             <Link href="/projects">
// // //                 <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full px-8 py-6">
// // //                     View All Projects
// // //                 </Button>
// // //             </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }
// // function Properties() {
// //   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

// //   // Updated data with Possession/Handover timelines
// //   const residentialProperties = [
// //     { 
// //       id: "palacio", 
// //       name: "RRL Palacio", 
// //       location: "Medahalli, Bangalore", 
// //       type: "Apartment",
// //       status: "READY TO MOVE", 
// //       image: "/LookProject2.jpeg", 
// //       bedrooms: "2, 3 BHK",
// //       devSize: "1.5 Acres",
// //       totalUnits: "120 Units",
// //       // New Data
// //       timeline: "Possession: Dec 2026",
// //       timelineSub: "Handover by June 2025"
// //     },
// //     { 
// //       id: "palm-altezze", 
// //       name: "RRL Palm Altezze", 
// //       location: "Varthur, Bangalore", 
// //       type: "Luxury Apartment",
// //       status: "JUST LAUNCHED", 
// //       image: "/justlaunch.png", 
// //       bedrooms: "2, 3 BHK",
// //       devSize: "2.25 Acres",
// //       totalUnits: "195 Units",
// //       // New Data
// //       timeline: "Possession: 2028",
// //       timelineSub: "Next Handover Phase"
// //     },
// //     { 
// //       id: "nature-woods", 
// //       name: "RRL Nature Woods", 
// //       location: "Sarjapur, Bangalore", 
// //       type: "Premium Apartment",
// //       status: "READY TO MOVE", 
// //       image: "/LookProject5.jpeg", 
// //       bedrooms: "2, 3 BHK",
// //       devSize: "2 Acres",
// //       totalUnits: "150 Units",
// //       // New Data
// //       timeline: "Possession: Dec 2023",
// //       timelineSub: "Handover done within 2022"
// //     },
// //   ]

// //   const commercialProperties = [
// //     { 
// //       id: "towers", 
// //       name: "RRL Towers", 
// //       location: "Sampige Jala, Sarjapur", 
// //       type: "Commercial Space",
// //       status: "READY TO MOVE", 
// //       image: "/Tower.jpeg", 
// //       bedrooms: "Office Spaces",
// //       devSize: "0.5 Acres",
// //       totalUnits: "4 Floors",
// //       // New Data
// //       timeline: "Operational",
// //       timelineSub: "Ready for Fitouts"
// //     },
// //     { 
// //       id: "complex", 
// //       name: "RRL Complex", 
// //       location: "South Bangalore", 
// //       type: "Retail & Office",
// //       status: "UNDER CONSTRUCTION", 
// //       image: "/complex.jpg", 
// //       bedrooms: "Shops / Offices",
// //       devSize: "1 Acre",
// //       totalUnits: "20 Units",
// //       // New Data
// //       timeline: "Under Construction",
// //       timelineSub: "Booking Open"
// //     },
// //   ]

// //   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties

// //   return (
// //     <section className="bg-black py-24 relative">
// //        <div className="absolute inset-0 bg-grid-white/[0.05]" />
// //       <div className="container mx-auto px-4 relative z-10">
// //         {/* Header Section */}
// //         <div className="mb-16 flex flex-col items-center text-center">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
// //           >
// //             <Home className="h-4 w-4" />
// //             <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
// //           </motion.div>
          
// //           <motion.h2 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.1 }}
// //             className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl"
// //           >
// //             Explore <span className="text-gold-400">RRL Projects</span>
// //           </motion.h2>

// //           {/* Filter Tabs */}
// //           <div className="relative inline-flex rounded-full bg-gray-900 p-1 border border-gold-900/50">
// //             <button
// //               onClick={() => setActiveTab("residential")}
// //               className={`relative z-10 flex items-center space-x-2 rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${
// //                 activeTab === "residential" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// //               }`}
// //             >
// //               <span>Residential</span>
// //             </button>
// //             <button
// //               onClick={() => setActiveTab("commercial")}
// //               className={`relative z-10 flex items-center space-x-2 rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${
// //                 activeTab === "commercial" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
// //               }`}
// //             >
// //               <span>Commercial</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* PROPERTIES LIST - HORIZONTAL CARDS */}
// //         <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
// //           {currentProperties.map((property, index) => (
// //             <motion.div
// //               key={property.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //               className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-neutral-900 border border-gold-900/50 shadow-xl transition-all hover:border-gold-500/50 hover:shadow-gold-900/20"
// //             >
// //               {/* LEFT: Image Section (55% width on desktop) */}
// //               <div className="relative h-64 lg:h-auto lg:w-[55%] shrink-0 overflow-hidden">
// //                 <Image
// //                   src={property.image || "/placeholder.svg"}
// //                   alt={property.name}
// //                   fill
// //                   className="object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
// //                 {/* Status Tag */}
// //                 <div className="absolute top-4 left-4">
// //                    <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
// //                       {property.status}
// //                    </span>
// //                 </div>
// //               </div>

// //               {/* RIGHT: Content Section */}
// //               <div className="flex flex-col p-6 lg:p-8 w-full bg-neutral-900">
// //                  {/* Header: Title & Logo Area */}
// //                  <div className="flex justify-between items-start mb-4">
// //                     <div>
// //                         <h3 className="text-2xl font-bold text-white font-playfair mb-1 group-hover:text-gold-400 transition-colors">
// //                             {property.name}
// //                         </h3>
// //                         <div className="flex items-center text-gray-400 text-sm">
// //                             <MapPin className="mr-1.5 h-3.5 w-3.5 text-gold-500" />
// //                             {property.location}
// //                         </div>
// //                     </div>
// //                     {/* Placeholder for Project Logo if needed, currently using Icon */}
// //                     <div className="h-10 w-10 rounded-full bg-gold-900/30 flex items-center justify-center border border-gold-500/30">
// //                         <Building2 className="text-gold-400 h-5 w-5"/>
// //                     </div>
// //                  </div>

// //                  {/* --- NEW HIGHLIGHTED TIMELINE SECTION --- */}
// //                  <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
// //                     <div className="flex items-start gap-2">
// //                        <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
// //                        <div>
// //                           <p className="text-sm font-bold text-gray-200">{property.timeline}</p>
// //                           {property.timelineSub && (
// //                             <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
// //                               {property.timelineSub.includes("done") || property.timelineSub.includes("Handover") ? (
// //                                 <CheckCircle2 className="h-3 w-3 text-green-500" />
// //                               ) : (
// //                                 <Clock className="h-3 w-3 text-blue-500" />
// //                               )}
// //                               {property.timelineSub}
// //                             </p>
// //                           )}
// //                        </div>
// //                     </div>
// //                  </div>

// //                  {/* Grid Details (Reference Layout) */}
// //                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 border-t border-b border-gray-800 py-6">
// //                     {/* Item 1 */}
// //                     <div className="flex items-start space-x-3">
// //                         <Building className="h-5 w-5 text-gold-500 mt-0.5" />
// //                         <div>
// //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Project Type</p>
// //                             <p className="text-sm font-semibold text-gray-200">{property.type}</p>
// //                         </div>
// //                     </div>
// //                      {/* Item 2 */}
// //                      <div className="flex items-start space-x-3">
// //                         <Home className="h-5 w-5 text-gold-500 mt-0.5" />
// //                         <div>
// //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Configuration</p>
// //                             <p className="text-sm font-semibold text-gray-200">{property.bedrooms}</p>
// //                         </div>
// //                     </div>
// //                      {/* Item 3 */}
// //                      <div className="flex items-start space-x-3">
// //                         <Maximize className="h-5 w-5 text-gold-500 mt-0.5" />
// //                         <div>
// //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Dev Size</p>
// //                             <p className="text-sm font-semibold text-gray-200">{property.devSize}</p>
// //                         </div>
// //                     </div>
// //                      {/* Item 4 */}
// //                      <div className="flex items-start space-x-3">
// //                         <Target className="h-5 w-5 text-gold-500 mt-0.5" />
// //                         <div>
// //                             <p className="text-xs text-gray-500 uppercase tracking-wide">Total Units</p>
// //                             <p className="text-sm font-semibold text-gray-200">{property.totalUnits}</p>
// //                         </div>
// //                     </div>
// //                  </div>

// //                  {/* Footer: Actions (Price Removed) */}
// //                  <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
// //                     <div className="flex gap-3 w-full">
// //                         <a 
// //                            href="tel:+918494966966"
// //                            className="flex-none flex items-center justify-center h-12 w-12 rounded-lg border border-gray-600 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
// //                         >
// //                             <Phone className="h-5 w-5" />
// //                         </a>
// //                         <Link href={`/projects/${property.id}`} className="flex-1">
// //                             <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-12 px-6 rounded-lg flex items-center justify-center">
// //                                 View Details <ArrowRight className="ml-2 h-4 w-4" />
// //                             </Button>
// //                         </Link>
// //                     </div>
// //                  </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <div className="text-center mt-12">
// //             <Link href="/projects">
// //                 <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full px-8 py-6">
// //                     View All Projects
// //                 </Button>
// //             </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 5. CLIENT GALLERY ==========
// // function HappyClientsGallery() {
// //   const clientImages = [
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560219/20250731_121250_nq8l6b.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560213/20250808_115517_vitgx0.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560198/20250728_164509_qpnvtc.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560193/20250801_121200_sorava.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560033/20250805_115305_qoouj2.jpg"
// //   ]

// //   return (
// //     <section className="py-24 bg-neutral-50 overflow-hidden relative">
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

// //       <div className="container mx-auto px-4 mb-16 text-center relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
// //              Client Stories
// //           </div>
// //           <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
// //             Smiles We've <span className="text-gold-500">Created</span>
// //           </h2>
// //           <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
// //             Join our growing family of satisfied homeowners who found their dream home with RRL.
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* Infinite Scroll Container */}
// //       <div className="relative w-full overflow-hidden py-10">
// //         {/* Gradient Fade Masks */}
// //         <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
// //         <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-neutral-50 to-transparent" />

// //         {/* CSS Animation Style for Pausing */}
// //         <style jsx>{`
// //           @keyframes scroll {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }
// //           .animate-scroll {
// //             animation: scroll 40s linear infinite;
// //             width: fit-content;
// //             display: flex;
// //           }
// //           .animate-scroll:hover {
// //             animation-play-state: paused;
// //           }
// //         `}</style>

// //         <div className="animate-scroll gap-8 pl-8">
// //           {/* Duplicate list for seamless looping */}
// //           {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
// //             <div 
// //                 key={i} 
// //                 className="group relative h-[400px] w-[300px] flex-shrink-0 cursor-pointer"
// //             >
// //               {/* Card Container */}
// //               <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
                
// //                 {/* Image */}
// //                 <div className="relative h-full w-full">
// //                   <Image
// //                     src={img}
// //                     alt={`Happy Client ${i}`}
// //                     fill
// //                     className="object-cover transition-transform duration-700 group-hover:scale-110"
// //                     unoptimized
// //                   />
                  
// //                   {/* Overlay */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
// //                   {/* Content Overlay */}
// //                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
// //                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
// //                         <div className="h-0.5 w-6 bg-gold-400"></div>
// //                         <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Handover</span>
// //                      </div>
// //                      <h3 className="text-2xl font-bold text-white font-playfair">RRL Family</h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// // // ========== 6. TESTIMONIALS COMPONENT (UPDATED ROLES) ==========
// // function Testimonials() {
// //   const testimonialData = [
// //     {
// //       type: "text",
// //       name: "Rita Chauhan",
// //       role: "Happy Home Buyer",
// //       location: "Sarjapur, Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business.",
// //     },
// //     {
// //       type: "text",
// //       name: "Rajesh Kumar",
// //       role: "Happy Home Buyer",
// //       location: "Varthur, Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations.",
// //     },
// //     {
// //       type: "video",
// //       name: "VideoTestimonial1",
// //       videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
// //     },
// //     {
// //       type: "text",
// //       name: "Priya Sharma",
// //       role: "Happy Home Buyer",
// //       location: "Medahalli, Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity.",
// //     },
// //     {
// //       type: "text",
// //       name: "Suman Narayan",
// //       role: "Happy Home Buyer",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat. Even budget friendly too. I highly recommend RRL for interior designing.",
// //     },
// //     {
// //       type: "video",
// //       name: "VideoTestimonial2",
// //       videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
// //     },
// //     {
// //       type: "text",
// //       name: "Subhash S",
// //       role: "Happy Home Buyer",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
// //     },
// //     {
// //       type: "text",
// //       name: "Neelima Maryam",
// //       role: "Happy Home Buyer",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial: "Very happy with the designs and budget.",
// //     },
// //     {
// //       type: "text",
// //       name: "Attili Nikhil",
// //       role: "Happy Home Buyer",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Had a great experience with RRL. They execute what we tell them. I highly recommend their 3D designs. They respond to us with great patience and even their price is very reasonable.",
// //     },
// //   ]

// //   const containerVariants: Variants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.15 },
// //     },
// //   }

// //   const itemVariants: Variants = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: { 
// //       opacity: 1, 
// //       y: 0, 
// //       transition: { type: "spring", stiffness: 50, damping: 15 } 
// //     },
// //   }

// //   return (
// //     <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
// //       <div className="container mx-auto px-4 relative z-10">
        
// //         {/* Header */}
// //         <div className="mb-16 text-center">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <h2 className="mb-4 text-4xl font-bold font-playfair text-black lg:text-5xl">
// //               Hear From Our <span className="text-gold-500">Clients</span>
// //             </h2>
// //             <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
// //               Real stories from families who found their dream home with RRL.
// //             </p>
// //           </motion.div>
// //         </div>

// //         {/* Grid Layout */}
// //         <motion.div
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-50px" }}
// //         >
// //           {testimonialData.map((item, index) => {
// //             if (item.type === "video") {
// //               return (
// //                 <motion.div
// //                   key={index}
// //                   variants={itemVariants}
// //                   whileHover={{ y: -8, scale: 1.01 }}
// //                   className="rounded-3xl overflow-hidden shadow-xl bg-black border-2 border-gray-100 h-full min-h-[320px] relative group"
// //                 >
// //                   <iframe
// //                     src={item.videoUrl}
// //                     title={item.name}
// //                     className="absolute top-0 left-0 w-full h-full object-cover"
// //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                     allowFullScreen
// //                   />
// //                 </motion.div>
// //               )
// //             } else {
// //               return (
// //                 <motion.div
// //                   key={index}
// //                   variants={itemVariants}
// //                   whileHover={{ y: -8 }}
// //                   className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative transition-shadow hover:shadow-2xl hover:border-gold-200"
// //                 >
// //                   {/* Quote Icon Background */}
// //                   <Quote className="absolute top-6 right-6 h-12 w-12 text-gold-500/10 rotate-12" />

// //                   {/* Rating */}
// //                   <div className="flex space-x-1 mb-6">
// //                     {[...Array(item.rating || 5)].map((_, i) => (
// //                       <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
// //                     ))}
// //                   </div>

// //                   {/* Testimonial Text */}
// //                   <div className="mb-8 flex-grow">
// //                     <p className="text-gray-700 leading-relaxed italic relative z-10">
// //                       "{item.testimonial}"
// //                     </p>
// //                   </div>

// //                   {/* User Details */}
// //                   <div className="mt-auto border-t border-gray-100 pt-6">
// //                     <h4 className="font-bold text-xl text-black mb-1">{item.name}</h4>
// //                     <div className="flex items-center justify-between text-sm">
// //                       <span className="text-gold-600 font-semibold">{item.role}</span>
// //                       {item.location && (
// //                         <div className="flex items-center text-gray-400">
// //                           <MapPin className="h-3 w-3 mr-1" />
// //                           <span className="truncate max-w-[120px]">{item.location}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               )
// //             }
// //           })}
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 7. PARTNERS SECTION (RESTORED) ==========
// // function PartnersSection() {
// //   const bankingPartners = [
// //     { name: "SBI", src: "/logos/SBI-Logo.png" },
// //     { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
// //     { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
// //     { name: "Union Bank", src: "/logos/union-bank.png" },
// //     { name: "ICICI Bank", src: "/logos/icici-bank.png" },
// //     { name: "Axis Bank", src: "/logos/axis-bank.svg" },
// //     { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
// //     { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
// //     { name: "TATA Capital", src: "/logos/tata-capital.png" },
// //   ]

// //   const trustedBrands = [
// //     { name: "Kerovit", src: "/logos/kerovit.png" },
// //     { name: "Schneider", src: "/logos/schneider.png" },
// //     { name: "One Touch", src: "/logos/one-touch.png" },
// //     { name: "Designhive", src: "/logos/Designhive.png" },
// //     { name: "Polycab", src: "/logos/polycab.png" },
// //     { name: "SVT", src: "/logos/svt.png" },
// //     { name: "Shivam Enterprise", src: "/logos/shivam.png" },
// //     { name: "Nippon", src: "/logos/nippon.png" },
// //     { name: "Fenstect", src: "/logos/fenstect.png" },
// //     { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
// //     { name: "Philips", src: "/logos/philips.png" },
// //     { name: "Wipro", src: "/logos/wipro.jpg" },
// //   ]

// //   const marketingPartners = [
// //     { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
// //     { name: "Housing.com", src: "/logos/housing-com.png" },
// //     { name: "Marketly", src: "/logos/marketly.jpg" },
// //     { name: "99acres", src: "/logos/99acres.png" },
// //   ]

// //   const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
// //   const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
// //   const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]

// //   return (
// //     <motion.section
// //       className="overflow-hidden py-20 bg-light-gold"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.2 }}
// //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="mb-16 text-center">
// //           <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">
// //             Our Valued <span className="text-gold-600">Partners</span>
// //           </h1>
// //           <p className="mx-auto max-w-2xl text-xl text-gray-800">
// //             Collaborating with industry leaders to bring you the best in real estate.
// //           </p>
// //         </div>

// //         <div className="space-y-16">
// //           <div>
// //             <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
// //             <div className="relative w-full overflow-hidden py-4">
// //               <motion.div
// //                 className="flex flex-nowrap"
// //                 animate={{ x: ["0%", `-${(100 / 2) * (bankingPartners.length / 6)}%`] }}
// //                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
// //               >
// //                 {duplicatedBankingPartners.map((partner, index) => (
// //                   <div key={`banking-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// //                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// //                       <Image
// //                         src={partner.src || "/placeholder.svg"}
// //                         alt={partner.name}
// //                         width={120}
// //                         height={60}
// //                         className="max-h-full max-w-full object-contain"
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </div>
// //           </div>
// //           <div>
// //             <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
// //             <div className="relative w-full overflow-hidden py-4">
// //               <motion.div
// //                 className="flex flex-nowrap"
// //                 animate={{ x: [`-${(100 / 2) * (trustedBrands.length / 6)}%`, "0%"] }}
// //                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
// //               >
// //                 {duplicatedTrustedBrands.map((brand, index) => (
// //                   <div key={`trusted-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// //                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// //                       <Image
// //                         src={brand.src || "/placeholder.svg"}
// //                         alt={brand.name}
// //                         width={120}
// //                         height={60}
// //                         className="max-h-full max-w-full object-contain"
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </div>
// //           </div>
// //           <div>
// //             <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
// //             <div className="relative w-full overflow-hidden py-4">
// //               <motion.div
// //                 className="flex flex-nowrap"
// //                 animate={{ x: ["0%", `-${(100 / 2) * (marketingPartners.length / 6)}%`] }}
// //                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
// //               >
// //                 {duplicatedMarketingPartners.map((partner, index) => (
// //                   <div key={`marketing-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// //                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// //                       <Image
// //                         src={partner.src || "/placeholder.svg"}
// //                         alt={partner.name}
// //                         width={120}
// //                         height={60}
// //                         className="max-h-full max-w-full object-contain"
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }
// // interface FAQSectionProps {
// //   title?: string
// //   subtitle?: string
// //   defaultLocation?: "sarjapur" | "varthur"
// // }
// // function FAQSection({
// //   title = "Frequently Asked Questions",
// //   subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
// //   defaultLocation = "sarjapur",
// // }: FAQSectionProps) {
// //   const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
// //   const [openItems, setOpenItems] = useState<string[]>([])

// //   const sarjapurFAQs = [
// //     {
// //       question: "What is the price of a 2 BHK flat in Sarjapur?",
// //       answer:
// //         "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
// //     },
// //     {
// //       question: "Where can I buy a 2 BHK flat in Bangalore?",
// //       answer:
// //         "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
// //     },
// //     {
// //       question: "Are there apartments in Sarjapur Road for sale?",
// //       answer:
// //         "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
// //     },
// //     {
// //       question: "What makes Luxury Apartments in Sarjapur Road special?",
// //       answer:
// //         "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
// //     },
// //   ]

// //   const varthurFAQs = [
// //     {
// //       question: "Is Varthur a good area to live in Bangalore?",
// //       answer:
// //         "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
// //     },
// //     {
// //       question: "What is the price of a flat in Varthur?",
// //       answer:
// //         "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
// //     },
// //     {
// //       question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
// //       answer:
// //         "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
// //     },
// //     {
// //       question: "What are the options for apartments in Varthur?",
// //       answer:
// //         "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
// //     },
// //   ]

// //   const toggleItem = (id: string) => {
// //     setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
// //   }

// //   const handleLocationChange = (location: "sarjapur" | "varthur") => {
// //     setActiveLocation(location)
// //     setOpenItems([])
// //   }

// //   const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
// //   const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"

// //   return (
// //     <section className="bg-black py-20 text-white ">
// //       <div className="container mx-auto px-4 ">
// //         <div className="mb-16 text-center ">
// //           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
// //             <HelpCircle className="h-5 w-5" />
// //             <span className="font-semibold">FAQ</span>
// //           </div>

// //           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>

// //           <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>

// //           <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
// //             <button
// //               onClick={() => handleLocationChange("sarjapur")}
// //               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// //                 }`}
// //             >
// //               <MapPin className="h-4 w-4" />
// //               <span>Sarjapur</span>
// //             </button>
// //             <button
// //               onClick={() => handleLocationChange("varthur")}
// //               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// //                 }`}
// //             >
// //               <MapPin className="h-4 w-4" />
// //               <span>Varthur</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="mx-auto max-w-4xl">
// //           <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>

// //           <div className="space-y-4">
// //             {currentFAQs.map((faq, index) => {
// //               const itemId = `${activeLocation}-${index}`
// //               const isOpen = openItems.includes(itemId)

// //               return (
// //                 <div
// //                   key={itemId}
// //                   className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
// //                 >
// //                   <button
// //                     onClick={() => toggleItem(itemId)}
// //                     className="flex w-full items-center justify-between px-8 py-6 text-left"
// //                   >
// //                     <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
// //                     <div className="flex-shrink-0">
// //                       {isOpen ? (
// //                         <ChevronUp className="h-5 w-5 text-gold-400" />
// //                       ) : (
// //                         <ChevronDown className="h-5 w-5 text-gray-500" />
// //                       )}
// //                     </div>
// //                   </button>

// //                   <div
// //                     className={cn(
// //                       "overflow-hidden transition-all duration-300 ease-in-out",
// //                       isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
// //                     )}
// //                   >
// //                     <div className="px-8 pb-6">
// //                       <p className="leading-relaxed text-gray-400">{faq.answer}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         </div>

// //         <div className="mt-16 text-center">
// //           <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
// //             <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
// //             <p className="mb-6 text-gray-400">
// //               Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
// //             </p>
// //             <div className="flex flex-col justify-center gap-4 sm:flex-row">
// //               <a
// //                 href="/contact"
// //                 className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600"
// //               >
// //                 Contact Our Experts
// //               </a>
// //               <a
// //                 href="tel:+91-8494966966"
// //                 className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20"
// //               >
// //                 Call: +91-8494966966
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // function ChannelPartnerCTA() {
// //   return (
// //     <motion.section
// //       className="bg-black py-20"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.2 }}
// //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="rounded-3xl bg-gray-900/50 border border-gold-800 p-12 text-center">
// //           <motion.h2
// //             className="mb-4 text-3xl font-bold text-white font-playfair lg:text-4xl"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             Become a <span className="text-gold-400">Channel Partner</span>
// //           </motion.h2>
// //           <motion.p
// //             className="mx-auto mb-8 max-w-2xl text-lg text-gray-400"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             Are you a real estate agent or a firm? Partner with us to get access to exclusive inventory, attractive
// //             commissions, and dedicated support.
// //           </motion.p>
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //           >
// //             <Link href="/channel-partners">
// //               <Button
// //                 size="lg"
// //                 className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //               >
// //                 Join Our Network
// //                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// //               </Button>
// //             </Link>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// // function CallToAction() {
// //   const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
// //   const router = useRouter()

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     try {
// //       const res = await fetch("https://formspree.io/f/xwprwzdq", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Accept: "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       })

// //       if (res.ok) {
// //         router.push("/c1/thankyou")
// //       } else {
// //         alert("Failed to send your request. Please try again.")
// //       }
// //     } catch (error) {
// //       console.error("Error submitting form:", error)
// //       alert("Something went wrong. Please try again.")
// //     }
// //   }

// //   return (
// //     <section className="relative overflow-hidden bg-light-gold py-24 text-black">
// //       <div className="container relative mx-auto px-4">
// //         <div className="mb-16 text-center">
// //           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
// //           <p className="mx-auto max-w-2xl text-xl text-gray-800">
// //             Contact Us: Let's Start Your Real Estate Journey Together
// //           </p>
// //         </div>

// //         <div className="mx-auto max-w-6xl">
// //           <div className="grid items-start gap-16 lg:grid-cols-2">
// //             <motion.div
// //               className="rounded-3xl p-8 bg-white shadow-2xl"
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //             >
// //               <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid gap-4 md:grid-cols-2">
// //                   <div>
// //                     <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
// //                     <Input
// //                       placeholder="Your name"
// //                       value={formData.name}
// //                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                       className="bg-gray-100 focus:border-gold-500"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
// //                     <Input
// //                       placeholder="Your phone number"
// //                       value={formData.contact}
// //                       onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
// //                       className="bg-gray-100 focus:border-gold-500"
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
// //                   <Select
// //                     value={formData.property}
// //                     onValueChange={(value) => setFormData({ ...formData, property: value })}
// //                   >
// //                     <SelectTrigger className="bg-gray-100">
// //                       <SelectValue placeholder="Select a property" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectItem value="palacio">RRL Palacio</SelectItem>
// //                       <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
// //                       <SelectItem value="sequoia">RRL Sequoia</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                 </div>
// //                 <div>
// //                   <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
// //                   <Textarea
// //                     placeholder="Your query in brief"
// //                     value={formData.message}
// //                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //                     className="min-h-[120px] bg-gray-100 focus:border-gold-500"
// //                   />
// //                 </div>
// //                 <Button
// //                   type="submit"
// //                   size="lg"
// //                   className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //                 >
// //                   Submit Request
// //                   <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// //                 </Button>
// //               </form>
// //             </motion.div>
// //             <motion.div
// //               className="space-y-8"
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //             >
// //               <div>
// //                 <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
// //                 <p className="mb-8 leading-relaxed text-gray-700">
// //                   Take the first step towards your real estate goals. Contact our expert team for personalised
// //                   assistance.
// //                 </p>
// //               </div>
// //               <div className="space-y-6">
// //                 <div className="flex items-start space-x-4">
// //                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// //                     <Phone className="h-6 w-6 text-black" />
// //                   </div>
// //                   <div>
// //                     <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
// //                     <a
// //                       href="tel:+918494966966"
// //                       className="text-gray-700 hover:text-blue-600 transition-colors"
// //                     >
// //                       +91-8494966966
// //                     </a>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// //                     <Mail className="h-6 w-6 text-black" />
// //                   </div>
// //                   <div>
// //                     <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
// //                     <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// //                     <MapPin className="h-6 w-6 text-black" />
// //                   </div>
// //                   <div>
// //                     <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
// //                     <p className="text-gray-700">
// //                       RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== FINAL PAGE EXPORT ==========
// // export default function HomePage() {
// //   return (
// //     <>
// //       <Hero />
// //       <Properties />
// //       <HappyClientsGallery />
// //       <Stats />
// //       <Testimonials />
// //       <AwardsSection />
// //       <Leadership />
// //       {/* <PartnersSection /> */}
// //       <FAQSection />
// //       <ChannelPartnerCTA />
// //       <CallToAction />
// //     </>
// //   )
// // }

// "use client"

// import { useState, useEffect, useRef } from "react"
// import type React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { motion, Variants, useScroll, useTransform } from "framer-motion"

// // UI Components
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Card, CardContent } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

// // Icons
// import {
//   Award,
//   ArrowRight,
//   Play,
//   Star,
//   Building,
//   Users,
//   Target,
//   Trophy,
//   Newspaper,
//   Calendar,
//   Medal,
//   MapPin,
//   Home,
//   Building2,
//   Quote,
//   Lightbulb,
//   HelpCircle,
//   ChevronDown,
//   ChevronUp,
//   Phone,
//   Mail,
//   Send,
//   Maximize,
//   Download,
//   CheckCircle2,
//   ShieldCheck,
//   Zap,
//   CalendarClock,
//   Clock,
// } from "lucide-react"
// import { Stats } from "@/components/home/stats"

// // ========== 1. HERO COMPONENT ==========
// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)

//   const slides = [
//     {
//       title: "Times Real Estate Icons Award",
//       subtitle: "2025 Winner",
//       description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
//       image: "/awardhome.jpeg",
//       badge: "Award Winner",
//     },
//     {
//       title: "Global Real Estate Brand",
//       subtitle: "2023 Champion",
//       description: "Recognized globally for excellence in affordable luxury real estate development",
//       image: "/awardhome1.jpeg",
//       badge: "Global Recognition",
//     },
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [slides.length])

//   return (
//     <>
//       {/* ===== Hero Section ===== */}
//       <motion.section
//         className="relative flex min-h-[90vh] items-center overflow-hidden bg-black"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.05]" />

//         {/* Background Gradient Accent */}
//         <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[100px]" />

//         <div className="container relative z-10 mx-auto px-4 py-20">
//           <div className="grid items-center gap-16 lg:grid-cols-2">
//             {/* Left Content */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500">
//                   <Award className="h-4 w-4 text-black" />
//                 </div>
//                 <span className="text-sm font-semibold">
//                   Times Real Estate Icon Awards 2025 Winner
//                 </span>
//               </div>

//               <div className="space-y-6">
//                 {/* FIXED: Adjusted text size for mobile to prevent overflow */}
//                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-playfair">
//                   RRL Builders & <span className="text-gold-400 block">Developers</span>
//                 </h1>

//                 <div className="space-y-4 text-lg leading-relaxed text-gray-300">
//                   <p>
//                     As award-winning developers, RRL is committed to delivering modern luxury apartments with
//                     uncompromising quality. Our proven track record of four successfully delivered projects ensures
//                     early possession.
//                   </p>
//                   <p>
//                     Our projects are strategically located in Bangalore's most promising growth zones:{" "}
//                     <span className="text-gold-400 font-semibold">Sarjapura, Varthur, and Chikkatirupati.</span>
//                   </p>
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col gap-4 sm:flex-row pt-4">
//                 <Link href="/projects">
//                   <Button
//                     size="lg"
//                     className="group w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
//                   >
//                     Explore RRL Properties
//                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="group w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold text-gold-400 border-gold-400 hover:bg-gold-950 transition-all duration-300"
//                   >
//                     Contact Us
//                   </Button>
//                 </Link>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-800">
//                 <div className="flex items-center space-x-2">
//                   <div className="flex -space-x-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
//                     ))}
//                   </div>
//                   <span className="text-sm font-medium text-gray-400">
//                     4.9/5 Customer Rating
//                   </span>
//                 </div>
//                 <div className="hidden sm:block h-6 w-px bg-gold-800" />
//                 <div className="flex items-center space-x-2">
//                   <Building className="h-5 w-5 text-gold-400" />
//                   <span className="text-sm font-medium text-gray-400">
//                     150+ Proud Employees
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content - Video */}
//             <motion.div
//               className="relative flex justify-center lg:justify-end"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//             >
//               <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gold-800 shadow-2xl shadow-gold-900/20 group">
//                 <div className="absolute inset-0 bg-gold-500/10 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
//                 <iframe
//                   src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1&loop=1&playlist=noXGLRYcyBU"
//                   title="Our Story Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="absolute top-0 left-0 w-full h-full scale-105"
//                 ></iframe>
//               </div>

//               {/* Decorative elements around video */}
//               <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-gold-800/30 bg-gray-900/50" />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* ===== Palm Altezze Banner (FIXED SCROLL EFFECT) ===== */}
//       <PalmAltezzeBanner />

//       {/* ===== Horizontal Brochure Form (UPDATED) ===== */}
//       <HorizontalBrochureForm />
//     </>
//   )
// }

// function PalmAltezzeBanner() {
//   return (
//     <section className="relative w-full bg-black py-20">
//        {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/justlaunch.png"
//           alt="Palm Altezze Background"
//           fill
//           className="object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-12">
          
//           {/* Left Side: Sticky Content */}
//           <div className="lg:w-1/2 pt-10">
//             {/* 'sticky top-32' makes this stay fixed while you scroll */}
//             <div className="lg:sticky lg:top-32 space-y-8">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div className="inline-block px-4 py-1 rounded-full border border-gold-500 text-gold-400 text-sm font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm mb-4">
//                     New Launch
//                   </div>
//                   {/* FIXED: Font size for mobile */}
//                   <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight">
//                     RRL <br/><span className="text-gold-400">Palm Altezze</span>
//                   </h2>
//                   <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light mt-4">
//                     Where luxury meets tranquility. 2 & 3 BHK premium apartments designed for the modern lifestyle.
//                   </p>
//                 </motion.div>

//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="grid grid-cols-2 gap-8 pt-4"
//                 >
//                   <div className="border-l-2 border-gold-500 pl-4">
//                     <p className="text-gray-400 text-sm uppercase tracking-wide">Project Area</p>
//                     <p className="text-white text-xl font-bold">2.25 Acres</p>
//                   </div>
//                   <div className="border-l-2 border-gold-500 pl-4">
//                     <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
//                     <p className="text-white text-xl font-bold">Varthur</p>
//                   </div>
//                   <div className="border-l-2 border-gold-500 pl-4">
//                     <p className="text-gray-400 text-sm uppercase tracking-wide">Status</p>
//                     <p className="text-emerald-400 text-xl font-bold">Open for Booking</p>
//                   </div>
//                   <div className="border-l-2 border-gold-500 pl-4">
//                     <p className="text-gray-400 text-sm uppercase tracking-wide">Units</p>
//                     <p className="text-white text-xl font-bold">Premium 2 & 3 BHK</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="pt-6"
//                 >
//                   <Link href="/projects/palm-altezze">
//                     <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-black font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105">
//                       View Full Details <ArrowRight className="ml-2" />
//                     </Button>
//                   </Link>
//                 </motion.div>
//             </div>
//           </div>

//           {/* Right Side: Tall Image (This scrolls) */}
//           <div className="lg:w-1/2 w-full">
//             {/* FIXED: Changed mobile height from 150vh to 500px to prevent endless scrolling on mobile */}
//             <div className="relative w-full h-[500px] lg:h-[150vh] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
//               <Image
//                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764569945/palm-altezze_20_mkplh3.jpg"
//                 alt="Palm Altezze Interior"
//                 fill
//                 className="object-cover lg:object-fill lg:object-top" // Adjusted object-fit for mobile vs desktop
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//               <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 z-10">
//                  <p className="text-gold-400 text-sm font-bold uppercase">Artist Impression</p>
//                  <p className="text-white font-playfair text-lg">Premium Interiors</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function HorizontalBrochureForm() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "", 
//     phone: "",
//     whatsappUpdates: false,
//   })
//   const [loading, setLoading] = useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))
//   }

//   const handleDownloadSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     // Basic Validation
//     if (!formData.name || !formData.phone || !formData.email) {
//       alert("Please fill in all fields.")
//       setLoading(false)
//       return
//     }

//     try {
//       // Send data to Formspree
//       const res = await fetch("https://formspree.io/f/xgvnpbwo", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         // Auto-download the brochure
//         const link = document.createElement("a")
//         link.href = "/brochures/rrl-company-brochure.pdf"
//         link.download = "RRL-Company-Brochure.pdf"
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)

//         // Open thank you page
//         window.open("/c3/thankyou", "_blank")

//         setFormData({ name: "", email: "", phone: "", whatsappUpdates: false })
//       } else {
//         alert("Failed to send details. Please try again.")
//       }
//     } catch (error) {
//       console.error("Error:", error)
//       alert("Something went wrong.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="bg-neutral-900 border-y border-gold-800 py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           <div className="lg:w-1/3 text-center lg:text-left">
//             <h3 className="text-2xl font-bold text-white font-playfair flex items-center justify-center lg:justify-start gap-2">
//               <Download className="text-gold-500 h-6 w-6" />
//               Download Project Brochure
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Get the complete floor plans, pricing, and amenities list instantly.
//             </p>
//           </div>

//           <form onSubmit={handleDownloadSubmit} className="lg:w-2/3 w-full">
//             <div className="flex flex-col md:flex-row gap-4 items-center">
//               <Input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
//               />
//                <Input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
//               />
//               <Input
//                 type="tel"
//                 name="phone"
//                 placeholder="Mobile Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//                 maxLength={10}
//                 className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
//               />
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="h-12 w-full md:w-auto px-8 bg-gold-500 hover:bg-gold-600 text-black font-bold whitespace-nowrap"
//               >
//                 {loading ? "Processing..." : "Download Now"}
//               </Button>
//             </div>
//             <div className="flex items-center space-x-2 mt-3 justify-center lg:justify-start">
//               <Checkbox
//                 id="whatsapp-updates-hor"
//                 name="whatsappUpdates"
//                 checked={formData.whatsappUpdates}
//                 onCheckedChange={(checked) =>
//                   setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))
//                 }
//                 className="border-gold-700 data-[state=checked]:bg-gold-500"
//               />
//               <label htmlFor="whatsapp-updates-hor" className="text-sm text-gray-400 cursor-pointer">
//                 I agree to receive updates via WhatsApp
//               </label>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== 2. AWARDS SECTION (MOVED DOWN) ==========
// function AwardsSection() {
//   return (
//     <motion.section
//       className="py-20 bg-black text-white relative"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.05]" />
//       <div className="container mx-auto px-4 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* FIXED: Adjusted text size */}
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold">
//               Times Real Estate Icon Awards, 2025
//             </h1>
//             <p className="text-lg text-gray-400 leading-relaxed">
//               RRL Groups has been honored with the prestigious award for Builder of the Year in
//               the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
//             </p>

//             <div className="space-y-4">
//               {[
//                 ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
//                 ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
//                 ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
//               ].map(([title, desc], i) => (
//                 <div key={i} className="flex items-start space-x-3">
//                   <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <Star className="h-3 w-3 text-black" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-white">{title}</h3>
//                     <p className="text-gray-500 text-sm">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pt-4">
//               <Link href="/awards">
//                 <Button className="rounded-full px-8 py-3 bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300">
//                   View All Awards
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/awardhome.jpeg"
//               alt="RRL Awards Ceremony 2025"
//               width={600}
//               height={400}
//               className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// // ========== 3. LEADERSHIP COMPONENT (MOVED DOWN) ==========
// function Leadership() {
//   return (
//     <motion.section
//       className="relative overflow-hidden bg-light-black py-24"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="flex justify-center mb-8">
//         <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//           <Users className="h-5 w-5" />
//           <span className="font-semibold">Leadership Excellence</span>
//         </div>
//       </div>

//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

//       <div className="container relative mx-auto px-4">
//         {/* Pillars Content */}
//         <div className="mb-20 text-center max-w-4xl mx-auto bg-gray-900/40 p-8 rounded-3xl border border-gold-800/30 backdrop-blur-sm">
//           <div className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-6 uppercase tracking-wider">
//             Pillars of RRL Group
//           </div>
//           <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-playfair">
//             RRL Builders and Developers is led by the strong partnership of twin brothers <span className="text-white font-semibold">Mr. Ram</span> and <span className="text-white font-semibold">Mr. Lakshman</span>. Their shared commitment to quality and smart strategy is the main reason RRL is known for delivering modern, award-winning luxury homes.
//           </p>
//         </div>

//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="space-y-4">
//               <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
//                 Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
//               </h2>

//               <p className="text-lg leading-relaxed text-gray-400">
//                 When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
//                 Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="grid grid-cols-2 gap-6">
//               <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
//                   alt="Mr. Ram Reddy"
//                   width={300}
//                   height={400}
//                   className="h-auto w-full rounded-2xl shadow-lg"
//                 />
//                 <div className="mt-4 text-center">
//                   <h3 className="font-bold text-white">Mr. Ram Reddy</h3>
//                   <p className="text-sm text-gray-400">Director</p>
//                 </div>
//               </div>
//               <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
//                   alt="Mr. Lakshman Reddy"
//                   width={300}
//                   height={400}
//                   className="h-auto w-full rounded-2xl shadow-lg"
//                 />
//                 <div className="mt-4 text-center">
//                   <h3 className="font-bold text-white">Mr. Lakshman Reddy</h3>
//                   <p className="text-sm text-gray-400">Chairman</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// function Properties() {
//   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

//   // Updated data with Possession/Handover timelines
//   const residentialProperties = [
//     { 
//       id: "palacio", 
//       name: "RRL Palacio", 
//       location: "Medahalli, Bangalore", 
//       type: "Apartment",
//       status: "READY TO MOVE", 
//       image: "/LookProject2.jpeg", 
//       bedrooms: "2, 3 BHK",
//       devSize: "1.5 Acres",
//       totalUnits: "120 Units",
//       // New Data
//       timeline: "Possession: Dec 2026",
//       timelineSub: "Handover by June 2025"
//     },
//     { 
//       id: "palm-altezze", 
//       name: "RRL Palm Altezze", 
//       location: "Varthur, Bangalore", 
//       type: "Luxury Apartment",
//       status: "JUST LAUNCHED", 
//       image: "/justlaunch.png", 
//       bedrooms: "2, 3 BHK",
//       devSize: "2.25 Acres",
//       totalUnits: "195 Units",
//       // New Data
//       timeline: "Possession: 2028",
//       timelineSub: "Next Handover Phase"
//     },
//     { 
//       id: "nature-woods", 
//       name: "RRL Nature Woods", 
//       location: "Sarjapur, Bangalore", 
//       type: "Premium Apartment", 
//       status: "READY TO MOVE", 
//       image: "/LookProject5.jpeg", 
//       bedrooms: "2, 3 BHK",
//       devSize: "2 Acres",
//       totalUnits: "150 Units",
//       // New Data
//       timeline: "Possession: Dec 2023",
//       timelineSub: "Handover done within 2022"
//     },
//   ]

//   const commercialProperties = [
//     { 
//       id: "towers", 
//       name: "RRL Towers", 
//       location: "Sampige Jala, Sarjapur", 
//       type: "Commercial Space",
//       status: "READY TO MOVE", 
//       image: "/Tower.jpeg", 
//       bedrooms: "Office Spaces",
//       devSize: "0.5 Acres",
//       totalUnits: "4 Floors",
//       // New Data
//       timeline: "Operational",
//       timelineSub: "Ready for Fitouts"
//     },
//     { 
//       id: "complex", 
//       name: "RRL Complex", 
//       location: "South Bangalore", 
//       type: "Retail & Office",
//       status: "UNDER CONSTRUCTION", 
//       image: "/complex.jpg", 
//       bedrooms: "Shops / Offices",
//       devSize: "1 Acre",
//       totalUnits: "20 Units",
//       // New Data
//       timeline: "Under Construction",
//       timelineSub: "Booking Open"
//     },
//   ]

//   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties

//   return (
//     <section className="bg-black py-24 relative">
//        <div className="absolute inset-0 bg-grid-white/[0.05]" />
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header Section */}
//         <div className="mb-16 flex flex-col items-center text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
//           >
//             <Home className="h-4 w-4" />
//             <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
//           </motion.div>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl"
//           >
//             Explore <span className="text-gold-400">RRL Projects</span>
//           </motion.h2>

//           {/* Filter Tabs */}
//           <div className="relative inline-flex rounded-full bg-gray-900 p-1 border border-gold-900/50">
//             <button
//               onClick={() => setActiveTab("residential")}
//               className={`relative z-10 flex items-center space-x-2 rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${
//                 activeTab === "residential" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <span>Residential</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("commercial")}
//               className={`relative z-10 flex items-center space-x-2 rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${
//                 activeTab === "commercial" ? "text-black bg-gold-500" : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <span>Commercial</span>
//             </button>
//           </div>
//         </div>

//         {/* PROPERTIES LIST - HORIZONTAL CARDS */}
//         <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
//           {currentProperties.map((property, index) => (
//             <motion.div
//               key={property.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-neutral-900 border border-gold-900/50 shadow-xl transition-all hover:border-gold-500/50 hover:shadow-gold-900/20"
//             >
//               {/* LEFT: Image Section (55% width on desktop) */}
//               <div className="relative h-64 lg:h-auto lg:w-[55%] shrink-0 overflow-hidden">
//                 <Image
//                   src={property.image || "/placeholder.svg"}
//                   alt={property.name}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
//                 {/* Status Tag */}
//                 <div className="absolute top-4 left-4">
//                    <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
//                       {property.status}
//                    </span>
//                 </div>
//               </div>

//               {/* RIGHT: Content Section */}
//               {/* FIXED: Added flex-grow so it takes available space */}
//               <div className="flex flex-col p-6 lg:p-8 w-full bg-neutral-900 h-auto lg:h-full">
//                  {/* Header: Title & Logo Area */}
//                  <div className="flex justify-between items-start mb-4">
//                     <div>
//                         <h3 className="text-2xl font-bold text-white font-playfair mb-1 group-hover:text-gold-400 transition-colors">
//                             {property.name}
//                         </h3>
//                         <div className="flex items-center text-gray-400 text-sm">
//                             <MapPin className="mr-1.5 h-3.5 w-3.5 text-gold-500" />
//                             {property.location}
//                         </div>
//                     </div>
//                     {/* Placeholder for Project Logo if needed, currently using Icon */}
//                     <div className="h-10 w-10 rounded-full bg-gold-900/30 flex items-center justify-center border border-gold-500/30">
//                         <Building2 className="text-gold-400 h-5 w-5"/>
//                     </div>
//                  </div>

//                  {/* --- NEW HIGHLIGHTED TIMELINE SECTION --- */}
//                  <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
//                     <div className="flex items-start gap-2">
//                        <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
//                        <div>
//                           <p className="text-sm font-bold text-gray-200">{property.timeline}</p>
//                           {property.timelineSub && (
//                             <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
//                               {property.timelineSub.includes("done") || property.timelineSub.includes("Handover") ? (
//                                 <CheckCircle2 className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <Clock className="h-3 w-3 text-blue-500" />
//                               )}
//                               {property.timelineSub}
//                             </p>
//                           )}
//                        </div>
//                     </div>
//                  </div>

//                  {/* Grid Details (Reference Layout) */}
//                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 border-t border-b border-gray-800 py-6">
//                     {/* Item 1 */}
//                     <div className="flex items-start space-x-3">
//                         <Building className="h-5 w-5 text-gold-500 mt-0.5" />
//                         <div>
//                             <p className="text-xs text-gray-500 uppercase tracking-wide">Project Type</p>
//                             <p className="text-sm font-semibold text-gray-200">{property.type}</p>
//                         </div>
//                     </div>
//                      {/* Item 2 */}
//                      <div className="flex items-start space-x-3">
//                         <Home className="h-5 w-5 text-gold-500 mt-0.5" />
//                         <div>
//                             <p className="text-xs text-gray-500 uppercase tracking-wide">Configuration</p>
//                             <p className="text-sm font-semibold text-gray-200">{property.bedrooms}</p>
//                         </div>
//                     </div>
//                      {/* Item 3 */}
//                      <div className="flex items-start space-x-3">
//                         <Maximize className="h-5 w-5 text-gold-500 mt-0.5" />
//                         <div>
//                             <p className="text-xs text-gray-500 uppercase tracking-wide">Dev Size</p>
//                             <p className="text-sm font-semibold text-gray-200">{property.devSize}</p>
//                         </div>
//                     </div>
//                      {/* Item 4 */}
//                      <div className="flex items-start space-x-3">
//                         <Target className="h-5 w-5 text-gold-500 mt-0.5" />
//                         <div>
//                             <p className="text-xs text-gray-500 uppercase tracking-wide">Total Units</p>
//                             <p className="text-sm font-semibold text-gray-200">{property.totalUnits}</p>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Footer: Actions (Price Removed) */}
//                  <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
//                     <div className="flex gap-3 w-full">
//                         <a 
//                            href="tel:+918494966966"
//                            className="flex-none flex items-center justify-center h-12 w-12 rounded-lg border border-gray-600 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
//                         >
//                             <Phone className="h-5 w-5" />
//                         </a>
//                         <Link href={`/projects/${property.id}`} className="flex-1">
//                             <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-12 px-6 rounded-lg flex items-center justify-center">
//                                 View Details <ArrowRight className="ml-2 h-4 w-4" />
//                             </Button>
//                         </Link>
//                     </div>
//                  </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//             <Link href="/projects">
//                 <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full px-8 py-6">
//                     View All Projects
//                 </Button>
//             </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== 5. CLIENT GALLERY ==========
// function HappyClientsGallery() {
//   const clientImages = [
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560219/20250731_121250_nq8l6b.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560213/20250808_115517_vitgx0.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560198/20250728_164509_qpnvtc.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560193/20250801_121200_sorava.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560033/20250805_115305_qoouj2.jpg"
//   ]

//   return (
//     <section className="py-24 bg-neutral-50 overflow-hidden relative">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

//       <div className="container mx-auto px-4 mb-16 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
//              Client Stories
//           </div>
//           <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
//             Smiles We've <span className="text-gold-500">Created</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
//             Join our growing family of satisfied homeowners who found their dream home with RRL.
//           </p>
//         </motion.div>
//       </div>

//       {/* Infinite Scroll Container */}
//       <div className="relative w-full overflow-hidden py-10">
//         {/* Gradient Fade Masks */}
//         <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
//         <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-neutral-50 to-transparent" />

//         {/* CSS Animation Style for Pausing */}
//         <style jsx>{`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             animation: scroll 40s linear infinite;
//             width: fit-content;
//             display: flex;
//           }
//           .animate-scroll:hover {
//             animation-play-state: paused;
//           }
//         `}</style>

//         <div className="animate-scroll gap-8 pl-8">
//           {/* Duplicate list for seamless looping */}
//           {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
//             <div 
//                 key={i} 
//                 className="group relative h-[400px] w-[300px] flex-shrink-0 cursor-pointer"
//             >
//               {/* Card Container */}
//               <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
                
//                 {/* Image */}
//                 <div className="relative h-full w-full">
//                   <Image
//                     src={img}
//                     alt={`Happy Client ${i}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     unoptimized
//                   />
                  
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
//                   {/* Content Overlay */}
//                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
//                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                         <div className="h-0.5 w-6 bg-gold-400"></div>
//                         <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Handover</span>
//                      </div>
//                      <h3 className="text-2xl font-bold text-white font-playfair">RRL Family</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// // ========== 6. TESTIMONIALS COMPONENT (UPDATED ROLES) ==========
// function Testimonials() {
//   const testimonialData = [
//     {
//       type: "text",
//       name: "Rita Chauhan",
//       role: "Happy Home Buyer",
//       location: "Sarjapur, Bengaluru",
//       rating: 5,
//       testimonial:
//         "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business.",
//     },
//     {
//       type: "text",
//       name: "Rajesh Kumar",
//       role: "Happy Home Buyer",
//       location: "Varthur, Bengaluru",
//       rating: 5,
//       testimonial:
//         "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations.",
//     },
//     {
//       type: "video",
//       name: "VideoTestimonial1",
//       videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
//     },
//     {
//       type: "text",
//       name: "Priya Sharma",
//       role: "Happy Home Buyer",
//       location: "Medahalli, Bengaluru",
//       rating: 5,
//       testimonial:
//         "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity.",
//     },
//     {
//       type: "text",
//       name: "Suman Narayan",
//       role: "Happy Home Buyer",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat. Even budget friendly too. I highly recommend RRL for interior designing.",
//     },
//     {
//       type: "video",
//       name: "VideoTestimonial2",
//       videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
//     },
//     {
//       type: "text",
//       name: "Subhash S",
//       role: "Happy Home Buyer",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
//     },
//     {
//       type: "text",
//       name: "Neelima Maryam",
//       role: "Happy Home Buyer",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial: "Very happy with the designs and budget.",
//     },
//     {
//       type: "text",
//       name: "Attili Nikhil",
//       role: "Happy Home Buyer",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Had a great experience with RRL. They execute what we tell them. I highly recommend their 3D designs. They respond to us with great patience and even their price is very reasonable.",
//     },
//   ]

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { type: "spring", stiffness: 50, damping: 15 } 
//     },
//   }

//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">
        
//         {/* Header */}
//         <div className="mb-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="mb-4 text-4xl font-bold font-playfair text-black lg:text-5xl">
//               Hear From Our <span className="text-gold-500">Clients</span>
//             </h2>
//             <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
//               Real stories from families who found their dream home with RRL.
//             </p>
//           </motion.div>
//         </div>

//         {/* Grid Layout */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {testimonialData.map((item, index) => {
//             if (item.type === "video") {
//               return (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ y: -8, scale: 1.01 }}
//                   className="rounded-3xl overflow-hidden shadow-xl bg-black border-2 border-gray-100 h-full min-h-[320px] relative group"
//                 >
//                   <iframe
//                     src={item.videoUrl}
//                     title={item.name}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </motion.div>
//               )
//             } else {
//               return (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ y: -8 }}
//                   className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative transition-shadow hover:shadow-2xl hover:border-gold-200"
//                 >
//                   {/* Quote Icon Background */}
//                   <Quote className="absolute top-6 right-6 h-12 w-12 text-gold-500/10 rotate-12" />

//                   {/* Rating */}
//                   <div className="flex space-x-1 mb-6">
//                     {[...Array(item.rating || 5)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <div className="mb-8 flex-grow">
//                     <p className="text-gray-700 leading-relaxed italic relative z-10">
//                       "{item.testimonial}"
//                     </p>
//                   </div>

//                   {/* User Details */}
//                   <div className="mt-auto border-t border-gray-100 pt-6">
//                     <h4 className="font-bold text-xl text-black mb-1">{item.name}</h4>
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gold-600 font-semibold">{item.role}</span>
//                       {item.location && (
//                         <div className="flex items-center text-gray-400">
//                           <MapPin className="h-3 w-3 mr-1" />
//                           <span className="truncate max-w-[120px]">{item.location}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             }
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ========== 7. PARTNERS SECTION (RESTORED) ==========
// function PartnersSection() {
//   const bankingPartners = [
//     { name: "SBI", src: "/logos/SBI-Logo.png" },
//     { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
//     { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
//     { name: "Union Bank", src: "/logos/union-bank.png" },
//     { name: "ICICI Bank", src: "/logos/icici-bank.png" },
//     { name: "Axis Bank", src: "/logos/axis-bank.svg" },
//     { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
//     { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
//     { name: "TATA Capital", src: "/logos/tata-capital.png" },
//   ]

//   const trustedBrands = [
//     { name: "Kerovit", src: "/logos/kerovit.png" },
//     { name: "Schneider", src: "/logos/schneider.png" },
//     { name: "One Touch", src: "/logos/one-touch.png" },
//     { name: "Designhive", src: "/logos/Designhive.png" },
//     { name: "Polycab", src: "/logos/polycab.png" },
//     { name: "SVT", src: "/logos/svt.png" },
//     { name: "Shivam Enterprise", src: "/logos/shivam.png" },
//     { name: "Nippon", src: "/logos/nippon.png" },
//     { name: "Fenstect", src: "/logos/fenstect.png" },
//     { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
//     { name: "Philips", src: "/logos/philips.png" },
//     { name: "Wipro", src: "/logos/wipro.jpg" },
//   ]

//   const marketingPartners = [
//     { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
//     { name: "Housing.com", src: "/logos/housing-com.png" },
//     { name: "Marketly", src: "/logos/marketly.jpg" },
//     { name: "99acres", src: "/logos/99acres.png" },
//   ]

//   const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
//   const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
//   const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]

//   return (
//     <motion.section
//       className="overflow-hidden py-20 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">
//             Our Valued <span className="text-gold-600">Partners</span>
//           </h1>
//           <p className="mx-auto max-w-2xl text-xl text-gray-800">
//             Collaborating with industry leaders to bring you the best in real estate.
//           </p>
//         </div>

//         <div className="space-y-16">
//           <div>
//             <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
//             <div className="relative w-full overflow-hidden py-4">
//               <motion.div
//                 className="flex flex-nowrap"
//                 animate={{ x: ["0%", `-${(100 / 2) * (bankingPartners.length / 6)}%`] }}
//                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
//               >
//                 {duplicatedBankingPartners.map((partner, index) => (
//                   // FIXED: Changed width for mobile from 1/3 to 1/2 for better visibility
//                   <div key={`banking-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
//                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                       <Image
//                         src={partner.src || "/placeholder.svg"}
//                         alt={partner.name}
//                         width={120}
//                         height={60}
//                         className="max-h-full max-w-full object-contain"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//           <div>
//             <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
//             <div className="relative w-full overflow-hidden py-4">
//               <motion.div
//                 className="flex flex-nowrap"
//                 animate={{ x: [`-${(100 / 2) * (trustedBrands.length / 6)}%`, "0%"] }}
//                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
//               >
//                 {duplicatedTrustedBrands.map((brand, index) => (
//                   // FIXED: Changed width for mobile
//                   <div key={`trusted-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
//                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                       <Image
//                         src={brand.src || "/placeholder.svg"}
//                         alt={brand.name}
//                         width={120}
//                         height={60}
//                         className="max-h-full max-w-full object-contain"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//           <div>
//             <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
//             <div className="relative w-full overflow-hidden py-4">
//               <motion.div
//                 className="flex flex-nowrap"
//                 animate={{ x: ["0%", `-${(100 / 2) * (marketingPartners.length / 6)}%`] }}
//                 transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
//               >
//                 {duplicatedMarketingPartners.map((partner, index) => (
//                   // FIXED: Changed width for mobile
//                   <div key={`marketing-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
//                     <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                       <Image
//                         src={partner.src || "/placeholder.svg"}
//                         alt={partner.name}
//                         width={120}
//                         height={60}
//                         className="max-h-full max-w-full object-contain"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// interface FAQSectionProps {
//   title?: string
//   subtitle?: string
//   defaultLocation?: "sarjapur" | "varthur"
// }
// function FAQSection({
//   title = "Frequently Asked Questions",
//   subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
//   defaultLocation = "sarjapur",
// }: FAQSectionProps) {
//   const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
//   const [openItems, setOpenItems] = useState<string[]>([])

//   const sarjapurFAQs = [
//     {
//       question: "What is the price of a 2 BHK flat in Sarjapur?",
//       answer:
//         "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
//     },
//     {
//       question: "Where can I buy a 2 BHK flat in Bangalore?",
//       answer:
//         "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
//     },
//     {
//       question: "Are there apartments in Sarjapur Road for sale?",
//       answer:
//         "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
//     },
//     {
//       question: "What makes Luxury Apartments in Sarjapur Road special?",
//       answer:
//         "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
//     },
//   ]

//   const varthurFAQs = [
//     {
//       question: "Is Varthur a good area to live in Bangalore?",
//       answer:
//         "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
//     },
//     {
//       question: "What is the price of a flat in Varthur?",
//       answer:
//         "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
//     },
//     {
//       question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
//       answer:
//         "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
//     },
//     {
//       question: "What are the options for apartments in Varthur?",
//       answer:
//         "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
//     },
//   ]

//   const toggleItem = (id: string) => {
//     setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
//   }

//   const handleLocationChange = (location: "sarjapur" | "varthur") => {
//     setActiveLocation(location)
//     setOpenItems([])
//   }

//   const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
//   const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"

//   return (
//     <section className="bg-black py-20 text-white ">
//       <div className="container mx-auto px-4 ">
//         <div className="mb-16 text-center ">
//           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
//             <HelpCircle className="h-5 w-5" />
//             <span className="font-semibold">FAQ</span>
//           </div>

//           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>

//           <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>

//           {/* FIXED: Added flex-wrap for mobile */}
//           <div className="mb-4 inline-flex flex-wrap justify-center items-center rounded-full bg-gray-900 p-1 ">
//             <button
//               onClick={() => handleLocationChange("sarjapur")}
//               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               <MapPin className="h-4 w-4" />
//               <span>Sarjapur</span>
//             </button>
//             <button
//               onClick={() => handleLocationChange("varthur")}
//               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               <MapPin className="h-4 w-4" />
//               <span>Varthur</span>
//             </button>
//           </div>
//         </div>

//         <div className="mx-auto max-w-4xl">
//           <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>

//           <div className="space-y-4">
//             {currentFAQs.map((faq, index) => {
//               const itemId = `${activeLocation}-${index}`
//               const isOpen = openItems.includes(itemId)

//               return (
//                 <div
//                   key={itemId}
//                   className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
//                 >
//                   <button
//                     onClick={() => toggleItem(itemId)}
//                     className="flex w-full items-center justify-between px-8 py-6 text-left"
//                   >
//                     <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
//                     <div className="flex-shrink-0">
//                       {isOpen ? (
//                         <ChevronUp className="h-5 w-5 text-gold-400" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5 text-gray-500" />
//                       )}
//                     </div>
//                   </button>

//                   <div
//                     className={cn(
//                       "overflow-hidden transition-all duration-300 ease-in-out",
//                       isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                     )}
//                   >
//                     <div className="px-8 pb-6">
//                       <p className="leading-relaxed text-gray-400">{faq.answer}</p>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
//             <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
//             <p className="mb-6 text-gray-400">
//               Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
//             </p>
//             <div className="flex flex-col justify-center gap-4 sm:flex-row">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600"
//               >
//                 Contact Our Experts
//               </a>
//               <a
//                 href="tel:+91-8494966966"
//                 className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20"
//               >
//                 Call: +91-8494966966
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function ChannelPartnerCTA() {
//   return (
//     <motion.section
//       className="bg-black py-20"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="rounded-3xl bg-gray-900/50 border border-gold-800 p-12 text-center">
//           <motion.h2
//             className="mb-4 text-3xl font-bold text-white font-playfair lg:text-4xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Become a <span className="text-gold-400">Channel Partner</span>
//           </motion.h2>
//           <motion.p
//             className="mx-auto mb-8 max-w-2xl text-lg text-gray-400"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Are you a real estate agent or a firm? Partner with us to get access to exclusive inventory, attractive
//             commissions, and dedicated support.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Link href="/channel-partners">
//               <Button
//                 size="lg"
//                 className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//               >
//                 Join Our Network
//                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// function CallToAction() {
//   const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       const res = await fetch("https://formspree.io/f/xwprwzdq", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         router.push("/c1/thankyou")
//       } else {
//         alert("Failed to send your request. Please try again.")
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       alert("Something went wrong. Please try again.")
//     }
//   }

//   return (
//     <section className="relative overflow-hidden bg-light-gold py-24 text-black">
//       <div className="container relative mx-auto px-4">
//         <div className="mb-16 text-center">
//           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
//           <p className="mx-auto max-w-2xl text-xl text-gray-800">
//             Contact Us: Let's Start Your Real Estate Journey Together
//           </p>
//         </div>

//         <div className="mx-auto max-w-6xl">
//           <div className="grid items-start gap-16 lg:grid-cols-2">
//             <motion.div
//               className="rounded-3xl p-8 bg-white shadow-2xl"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
//                     <Input
//                       placeholder="Your name"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="bg-gray-100 focus:border-gold-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
//                     <Input
//                       placeholder="Your phone number"
//                       value={formData.contact}
//                       onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
//                       className="bg-gray-100 focus:border-gold-500"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
//                   <Select
//                     value={formData.property}
//                     onValueChange={(value) => setFormData({ ...formData, property: value })}
//                   >
//                     <SelectTrigger className="bg-gray-100">
//                       <SelectValue placeholder="Select a property" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="palacio">RRL Palacio</SelectItem>
//                       <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
//                       <SelectItem value="sequoia">RRL Sequoia</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
//                   <Textarea
//                     placeholder="Your query in brief"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="min-h-[120px] bg-gray-100 focus:border-gold-500"
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   size="lg"
//                   className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//                 >
//                   Submit Request
//                   <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </form>
//             </motion.div>
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <div>
//                 <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
//                 <p className="mb-8 leading-relaxed text-gray-700">
//                   Take the first step towards your real estate goals. Contact our expert team for personalised
//                   assistance.
//                 </p>
//               </div>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                     <Phone className="h-6 w-6 text-black" />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
//                     <a
//                       href="tel:+918494966966"
//                       className="text-gray-700 hover:text-blue-600 transition-colors"
//                     >
//                       +91-8494966966
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                     <Mail className="h-6 w-6 text-black" />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
//                     <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                     <MapPin className="h-6 w-6 text-black" />
//                   </div>
//                   <div>
//                     <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
//                     <p className="text-gray-700">
//                       RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== FINAL PAGE EXPORT ==========
// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <Properties />
//       <HappyClientsGallery />
//       <Stats />
//       <Testimonials />
//       <AwardsSection />
//       <Leadership />
//       {/* <PartnersSection /> */}
//       <FAQSection />
//       <ChannelPartnerCTA />
//       <CallToAction />
//     </>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, Variants, useScroll, useTransform } from "framer-motion"

// UI Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Icons
import {
  Award,
  ArrowRight,
  Play,
  Star,
  Building,
  Users,
  Target,
  Trophy,
  Newspaper,
  Calendar,
  Medal,
  MapPin,
  Home,
  Building2,
  Quote,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Send,
  Maximize,
  Download,
  CheckCircle2,
  ShieldCheck,
  Zap,
  CalendarClock,
  Clock,
} from "lucide-react"

// ========== 1. HERO COMPONENT ==========
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const slides = [
    {
      title: "Times Real Estate Icons Award",
      subtitle: "2025 Winner",
      description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
      image: "/awardhome.jpeg",
      badge: "Award Winner",
    },
    {
      title: "Global Real Estate Brand",
      subtitle: "2023 Champion",
      description: "Recognized globally for excellence in affordable luxury real estate development",
      image: "/awardhome1.jpeg",
      badge: "Global Recognition",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      {/* ===== Hero Section ===== */}
      <motion.section
        className="relative flex min-h-[90vh] items-center overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />

        {/* Background Gradient Accent */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500">
                  <Award className="h-4 w-4 text-black" />
                </div>
                <span className="text-sm font-semibold">
                  Times Real Estate Icon Awards 2025 Winner
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-playfair">
                  RRL Builders & <span className="text-gold-400 block">Developers</span>
                </h1>

                <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                  <p>
                    As award-winning developers, RRL is committed to delivering modern luxury apartments with
                    uncompromising quality. Our proven track record of four successfully delivered projects ensures
                    early possession.
                  </p>
                  <p>
                    Our projects are strategically located in Bangalore's most promising growth zones:{" "}
                    <span className="text-gold-400 font-semibold">Sarjapura, Varthur, and Chikkatirupati.</span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="group w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                  >
                    Explore RRL Properties
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold text-gold-400 border-gold-400 hover:bg-gold-950 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-400">
                    4.9/5 Customer Rating
                  </span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-gold-800" />
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-medium text-gray-400">
                    150+ Proud Employees
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Video */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gold-800 shadow-2xl shadow-gold-900/20 group">
                <div className="absolute inset-0 bg-gold-500/10 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
                <iframe
                  src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1&loop=1&playlist=noXGLRYcyBU"
                  title="Our Story Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full scale-105"
                ></iframe>
              </div>

              {/* Decorative elements around video */}
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-gold-800/30 bg-gray-900/50" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== Palm Altezze Banner ===== */}
      <PalmAltezzeBanner />

      {/* ===== Horizontal Brochure Form ===== */}
      <HorizontalBrochureForm />
    </>
  )
}

function PalmAltezzeBanner() {
  return (
    <section className="relative w-full bg-black py-20">
       {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/justlaunch.png"
          alt="Palm Altezze Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/2 pt-10">
            <div className="lg:sticky lg:top-32 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-block px-4 py-1 rounded-full border border-gold-500 text-gold-400 text-sm font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm mb-4">
                    New Launch
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight">
                    RRL <br/><span className="text-gold-400">Palm Altezze</span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light mt-4">
                    Where luxury meets tranquility. 2 & 3 BHK premium apartments designed for the modern lifestyle.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-2 gap-8 pt-4"
                >
                  <div className="border-l-2 border-gold-500 pl-4">
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Project Area</p>
                    <p className="text-white text-xl font-bold">2.25 Acres</p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
                    <p className="text-white text-xl font-bold">Varthur</p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Status</p>
                    <p className="text-emerald-400 text-xl font-bold">Open for Booking</p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Units</p>
                    <p className="text-white text-xl font-bold">Premium 2 & 3 BHK</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-6"
                >
                  <Link href="/projects/palm-altezze">
                    <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-black font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105">
                      View Full Details <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
            </div>
          </div>

          {/* Right Side: Tall Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-[500px] lg:h-[150vh] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
              <Image
                // src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764569945/palm-altezze_20_mkplh3.jpg"
                src=""
                alt="Palm Altezze Interior"
                fill
                className="object-cover lg:object-fill lg:object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 z-10">
                 <p className="text-gold-400 text-sm font-bold uppercase">Artist Impression</p>
                 <p className="text-white font-playfair text-lg">Premium Interiors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HorizontalBrochureForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    whatsappUpdates: false,
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Basic Validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all fields.")
      setLoading(false)
      return
    }

    try {
      // Send data to Formspree
      const res = await fetch("https://formspree.io/f/xgvnpbwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        // Auto-download the brochure
        const link = document.createElement("a")
        link.href = "/brochures/rrl-company-brochure.pdf"
        link.download = "RRL-Company-Brochure.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Open thank you page
        window.open("/c3/thankyou", "_blank")

        setFormData({ name: "", email: "", phone: "", whatsappUpdates: false })
      } else {
        alert("Failed to send details. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-neutral-900 border-y border-gold-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white font-playfair flex items-center justify-center lg:justify-start gap-2">
              <Download className="text-gold-500 h-6 w-6" />
              Download Project Brochure
            </h3>
            <p className="text-gray-400 mt-2">
              Get the complete floor plans, pricing, and amenities list instantly.
            </p>
          </div>

          <form onSubmit={handleDownloadSubmit} className="lg:w-2/3 w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
              />
               <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full md:w-auto px-8 bg-gold-500 hover:bg-gold-600 text-black font-bold whitespace-nowrap"
              >
                {loading ? "Processing..." : "Download Now"}
              </Button>
            </div>
            <div className="flex items-center space-x-2 mt-3 justify-center lg:justify-start">
              <Checkbox
                id="whatsapp-updates-hor"
                name="whatsappUpdates"
                checked={formData.whatsappUpdates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))
                }
                className="border-gold-700 data-[state=checked]:bg-gold-500"
              />
              <label htmlFor="whatsapp-updates-hor" className="text-sm text-gray-400 cursor-pointer">
                I agree to receive updates via WhatsApp
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// ========== 2. AWARDS SECTION ==========
function AwardsSection() {
  return (
    <motion.section
      className="py-20 bg-black text-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold">
              Times Real Estate Icon Awards, 2025
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              RRL Groups has been honored with the prestigious award for Builder of the Year in
              the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
            </p>

            <div className="space-y-4">
              {[
                ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
                ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
                ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
              ].map(([title, desc], i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-3 w-3 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/awards">
                <Button className="rounded-full px-8 py-3 bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300">
                  View All Awards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/awardhome.jpeg"
              alt="RRL Awards Ceremony 2025"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 3. LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <motion.section
      className="relative overflow-hidden bg-light-black py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
          <Users className="h-5 w-5" />
          <span className="font-semibold">Leadership Excellence</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <div className="container relative mx-auto px-4">
        {/* Pillars Content */}
        <div className="mb-20 text-center max-w-4xl mx-auto bg-gray-900/40 p-8 rounded-3xl border border-gold-800/30 backdrop-blur-sm">
          <div className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-6 uppercase tracking-wider">
            Pillars of RRL Group
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-playfair">
            RRL Builders and Developers is led by the strong partnership of twin brothers <span className="text-white font-semibold">Mr. Ram</span> and <span className="text-white font-semibold">Mr. Lakshman</span>. Their shared commitment to quality and smart strategy is the main reason RRL is known for delivering modern, award-winning luxury homes.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
                Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-400">
                When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
                Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
                  alt="Mr. Ram Reddy"
                  width={300}
                  height={400}
                  className="h-auto w-full rounded-2xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-white">Mr. Ram Reddy</h3>
                  <p className="text-sm text-gray-400">Director</p>
                </div>
              </div>
              <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
                  alt="Mr. Lakshman Reddy"
                  width={300}
                  height={400}
                  className="h-auto w-full rounded-2xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-white">Mr. Lakshman Reddy</h3>
                  <p className="text-sm text-gray-400">Chairman</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 4. PROPERTIES COMPONENT (NO TOGGLE, MERGED LIST) ==========
function Properties() {
  // Updated data with Possession/Handover timelines
  const residentialProperties = [
    { 
      id: "palacio", 
      name: "RRL Palacio", 
      location: "Medahalli, Bangalore", 
      type: "Apartment",
      status: "READY TO MOVE", 
      image: "/LookProject2.jpeg", 
      bedrooms: "2, 3 BHK",
      devSize: "1.5 Acres",
      totalUnits: "120 Units",
      timeline: "Possession: Dec 2026",
      timelineSub: "Handover by June 2025"
    },
    { 
      id: "palm-altezze", 
      name: "RRL Palm Altezze", 
      location: "Varthur, Bangalore", 
      type: "Luxury Apartment",
      status: "JUST LAUNCHED", 
      image: "/justlaunch.png", 
      bedrooms: "2, 3 BHK",
      devSize: "2.25 Acres",
      totalUnits: "195 Units",
      timeline: "Possession: 2028",
      timelineSub: "Next Handover Phase"
    },
    { 
      id: "nature-woods", 
      name: "RRL Nature Woods", 
      location: "Sarjapur, Bangalore", 
      type: "Premium Apartment", 
      status: "READY TO MOVE", 
      image: "/LookProject5.jpeg", 
      bedrooms: "2, 3 BHK",
      devSize: "2 Acres",
      totalUnits: "150 Units",
      timeline: "Possession: Dec 2023",
      timelineSub: "Handover done within 2022"
    },
  ]

  const commercialProperties = [
    { 
      id: "towers", 
      name: "RRL Towers", 
      location: "Sampige Jala, Sarjapur", 
      type: "Commercial Space",
      status: "READY TO MOVE", 
      image: "/Tower.jpeg", 
      bedrooms: "Office Spaces",
      devSize: "0.5 Acres",
      totalUnits: "4 Floors",
      timeline: "Operational",
      timelineSub: "Ready for Fitouts"
    },
    { 
      id: "complex", 
      name: "RRL Complex", 
      location: "South Bangalore", 
      type: "Retail & Office",
      status: "UNDER CONSTRUCTION", 
      image: "/complex.jpg", 
      bedrooms: "Shops / Offices",
      devSize: "1 Acre",
      totalUnits: "20 Units",
      timeline: "Under Construction",
      timelineSub: "Booking Open"
    },
  ]

  // Combine both lists into one
  const allProperties = [...residentialProperties, ...commercialProperties];

  return (
    <section className="bg-black py-24 relative">
       <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl"
          >
            Explore <span className="text-gold-400">RRL Projects</span>
          </motion.h2>
        </div>

        {/* PROPERTIES LIST - HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {allProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-neutral-900 border border-gold-900/50 shadow-xl transition-all hover:border-gold-500/50 hover:shadow-gold-900/20"
            >
              {/* LEFT: Image Section (55% width on desktop) */}
              <div className="relative h-64 lg:h-auto lg:w-[55%] shrink-0 overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Tag */}
                <div className="absolute top-4 left-4">
                   <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                      {property.status}
                   </span>
                </div>
              </div>

              {/* RIGHT: Content Section */}
              {/* FIXED: Added flex-grow so it takes available space */}
              <div className="flex flex-col p-6 lg:p-8 w-full bg-neutral-900 h-auto lg:h-full">
                 {/* Header: Title & Logo Area */}
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white font-playfair mb-1 group-hover:text-gold-400 transition-colors">
                            {property.name}
                        </h3>
                        <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="mr-1.5 h-3.5 w-3.5 text-gold-500" />
                            {property.location}
                        </div>
                    </div>
                    {/* Placeholder for Project Logo if needed, currently using Icon */}
                    <div className="h-10 w-10 rounded-full bg-gold-900/30 flex items-center justify-center border border-gold-500/30">
                        <Building2 className="text-gold-400 h-5 w-5"/>
                    </div>
                 </div>

                 {/* --- NEW HIGHLIGHTED TIMELINE SECTION --- */}
                 <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
                    <div className="flex items-start gap-2">
                       <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
                       <div>
                          <p className="text-sm font-bold text-gray-200">{property.timeline}</p>
                          {property.timelineSub && (
                            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                              {property.timelineSub.includes("done") || property.timelineSub.includes("Handover") ? (
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                              ) : (
                                <Clock className="h-3 w-3 text-blue-500" />
                              )}
                              {property.timelineSub}
                            </p>
                          )}
                       </div>
                    </div>
                 </div>

                 {/* Grid Details (Reference Layout) */}
                 <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 border-t border-b border-gray-800 py-6">
                    {/* Item 1 */}
                    <div className="flex items-start space-x-3">
                        <Building className="h-5 w-5 text-gold-500 mt-0.5" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Project Type</p>
                            <p className="text-sm font-semibold text-gray-200">{property.type}</p>
                        </div>
                    </div>
                     {/* Item 2 */}
                     <div className="flex items-start space-x-3">
                        <Home className="h-5 w-5 text-gold-500 mt-0.5" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Configuration</p>
                            <p className="text-sm font-semibold text-gray-200">{property.bedrooms}</p>
                        </div>
                    </div>
                     {/* Item 3 */}
                     <div className="flex items-start space-x-3">
                        <Maximize className="h-5 w-5 text-gold-500 mt-0.5" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Dev Size</p>
                            <p className="text-sm font-semibold text-gray-200">{property.devSize}</p>
                        </div>
                    </div>
                     {/* Item 4 */}
                     <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-gold-500 mt-0.5" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Units</p>
                            <p className="text-sm font-semibold text-gray-200">{property.totalUnits}</p>
                        </div>
                    </div>
                 </div>

                 {/* Footer: Actions (Price Removed) */}
                 <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex gap-3 w-full">
                        <a 
                           href="tel:+918494966966"
                           className="flex-none flex items-center justify-center h-12 w-12 rounded-lg border border-gray-600 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
                        >
                            <Phone className="h-5 w-5" />
                        </a>
                        <Link href={`/projects/${property.id}`} className="flex-1">
                            <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-12 px-6 rounded-lg flex items-center justify-center">
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <Link href="/projects">
                <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full px-8 py-6">
                    View All Projects
                </Button>
            </Link>
        </div>
      </div>
    </section>
  )
}

// ========== 5. CLIENT GALLERY ==========
function HappyClientsGallery() {
  const clientImages = [
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560219/20250731_121250_nq8l6b.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560213/20250808_115517_vitgx0.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560198/20250728_164509_qpnvtc.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560193/20250801_121200_sorava.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560033/20250805_115305_qoouj2.jpg"
  ]

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
             Client Stories
          </div>
          <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
            Smiles We've <span className="text-gold-500">Created</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
            Join our growing family of satisfied homeowners who found their dream home with RRL.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Gradient Fade Masks */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-neutral-50 to-transparent" />

        {/* CSS Animation Style for Pausing */}
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            width: fit-content;
            display: flex;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="animate-scroll gap-4 md:gap-8 pl-4 md:pl-8">
          {/* Duplicate list for seamless looping */}
          {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
            <div 
                key={i} 
                className="group relative h-[320px] w-[240px] md:h-[400px] md:w-[300px] flex-shrink-0 cursor-pointer"
            >
              {/* Card Container */}
              <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
                
                {/* Image */}
                <div className="relative h-full w-full">
                  <Image
                    src={img}
                    alt={`Happy Client ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                     <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="h-0.5 w-6 bg-gold-400"></div>
                        <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Handover</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white font-playfair">RRL Family</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== STATS COMPONENT (RESTORED) ==========
function Stats() {
  const statsData = [
    {
      icon: Users,
      value: "1000+",
      label: "Happy Families",
      description: "Satisfied customers",
    },
    {
      icon: Building,
      value: "5+",
      label: "Projects Completed",
      description: "Premium residential developments",
    },
    {
      icon: Target,
      value: "500+",
      label: "Trusted Partners",
      description: "Total construction area delivered",
    },
    {
      icon: Award,
      value: "150+",
      label: "Proud Employees",
      description: "Professional team members",
    },
  ]

  return (
    <motion.section
      className="py-24 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            The Outstanding <span className="text-gold-600">Growth</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-xl text-gray-800"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
          >
            Celebrating Growth: Highlights of Our Accomplishments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="rounded-3xl border border-gold-300 bg-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-lg">
                      <stat.icon className="h-10 w-10 text-black" />
                    </div>
                  </div>
                  <div className="mb-2 text-5xl font-bold text-black">{stat.value}</div>
                  <div className="mb-3 text-lg font-semibold text-gray-800">{stat.label}</div>
                  <div className="text-sm leading-relaxed text-gray-600">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QUOTE BOX ADDED FROM OLD FILE */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl p-8 border border-gold-300 bg-white/50">
            <p className="text-lg italic leading-relaxed text-gray-800">
              "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
              you make well-informed decisions. Let us build an affordable society together."
            </p>
            <div className="mt-4 font-semibold text-gold-600">- RRL Groups</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 6. TESTIMONIALS COMPONENT (UPDATED ROLES) ==========
function Testimonials() {
  const testimonialData = [
    {
      type: "text",
      name: "Rita Chauhan",
      role: "Happy Home Buyer",
      location: "Sarjapur, Bengaluru",
      rating: 5,
      testimonial:
        "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business.",
    },
    {
      type: "text",
      name: "Rajesh Kumar",
      role: "Happy Home Buyer",
      location: "Varthur, Bengaluru",
      rating: 5,
      testimonial:
        "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations.",
    },
    {
      type: "video",
      name: "VideoTestimonial1",
      videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
    },
    {
      type: "text",
      name: "Priya Sharma",
      role: "Happy Home Buyer",
      location: "Medahalli, Bengaluru",
      rating: 5,
      testimonial:
        "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity.",
    },
    {
      type: "text",
      name: "Suman Narayan",
      role: "Happy Home Buyer",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat. Even budget friendly too. I highly recommend RRL for interior designing.",
    },
    {
      type: "video",
      name: "VideoTestimonial2",
      videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
    },
    {
      type: "text",
      name: "Subhash S",
      role: "Happy Home Buyer",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
    },
    {
      type: "text",
      name: "Neelima Maryam",
      role: "Happy Home Buyer",
      location: "Bengaluru",
      rating: 5,
      testimonial: "Very happy with the designs and budget.",
    },
    {
      type: "text",
      name: "Attili Nikhil",
      role: "Happy Home Buyer",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "Had a great experience with RRL. They execute what we tell them. I highly recommend their 3D designs. They respond to us with great patience and even their price is very reasonable.",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold font-playfair text-black lg:text-5xl">
              Hear From Our <span className="text-gold-500">Clients</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
              Real stories from families who found their dream home with RRL.
            </p>
          </motion.div>
        </div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonialData.map((item, index) => {
            if (item.type === "video") {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="rounded-3xl overflow-hidden shadow-xl bg-black border-2 border-gray-100 h-full min-h-[320px] relative group"
                >
                  <iframe
                    src={item.videoUrl}
                    title={item.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              )
            } else {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative transition-shadow hover:shadow-2xl hover:border-gold-200"
                >
                  {/* Quote Icon Background */}
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-gold-500/10 rotate-12" />

                  {/* Rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="mb-8 flex-grow">
                    <p className="text-gray-700 leading-relaxed italic relative z-10">
                      "{item.testimonial}"
                    </p>
                  </div>

                  {/* User Details */}
                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-xl text-black mb-1">{item.name}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gold-600 font-semibold">{item.role}</span>
                      {item.location && (
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span className="truncate max-w-[120px]">{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            }
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ========== 7. PARTNERS SECTION (RESTORED) ==========
function PartnersSection() {
  const bankingPartners = [
    { name: "SBI", src: "/logos/SBI-Logo.png" },
    { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
    { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
    { name: "Union Bank", src: "/logos/union-bank.png" },
    { name: "ICICI Bank", src: "/logos/icici-bank.png" },
    { name: "Axis Bank", src: "/logos/axis-bank.svg" },
    { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
    { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
    { name: "TATA Capital", src: "/logos/tata-capital.png" },
  ]

  const trustedBrands = [
    { name: "Kerovit", src: "/logos/kerovit.png" },
    { name: "Schneider", src: "/logos/schneider.png" },
    { name: "One Touch", src: "/logos/one-touch.png" },
    { name: "Designhive", src: "/logos/Designhive.png" },
    { name: "Polycab", src: "/logos/polycab.png" },
    { name: "SVT", src: "/logos/svt.png" },
    { name: "Shivam Enterprise", src: "/logos/shivam.png" },
    { name: "Nippon", src: "/logos/nippon.png" },
    { name: "Fenstect", src: "/logos/fenstect.png" },
    { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
    { name: "Philips", src: "/logos/philips.png" },
    { name: "Wipro", src: "/logos/wipro.jpg" },
  ]

  const marketingPartners = [
    { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
    { name: "Housing.com", src: "/logos/housing-com.png" },
    { name: "Marketly", src: "/logos/marketly.jpg" },
    { name: "99acres", src: "/logos/99acres.png" },
  ]

  const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
  const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
  const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]

  return (
    <motion.section
      className="overflow-hidden py-20 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">
            Our Valued <span className="text-gold-600">Partners</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-800">
            Collaborating with industry leaders to bring you the best in real estate.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex flex-nowrap"
                animate={{ x: ["0%", `-${(100 / 2) * (bankingPartners.length / 6)}%`] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
              >
                {duplicatedBankingPartners.map((partner, index) => (
                  // FIXED: Changed width for mobile from 1/3 to 1/2 for better visibility
                  <div key={`banking-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                      <Image
                        src={partner.src || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex flex-nowrap"
                animate={{ x: [`-${(100 / 2) * (trustedBrands.length / 6)}%`, "0%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
              >
                {duplicatedTrustedBrands.map((brand, index) => (
                  // FIXED: Changed width for mobile
                  <div key={`trusted-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                      <Image
                        src={brand.src || "/placeholder.svg"}
                        alt={brand.name}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex flex-nowrap"
                animate={{ x: ["0%", `-${(100 / 2) * (marketingPartners.length / 6)}%`] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
              >
                {duplicatedMarketingPartners.map((partner, index) => (
                  // FIXED: Changed width for mobile
                  <div key={`marketing-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                      <Image
                        src={partner.src || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
interface FAQSectionProps {
  title?: string
  subtitle?: string
  defaultLocation?: "sarjapur" | "varthur"
}
function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
  defaultLocation = "sarjapur",
}: FAQSectionProps) {
  const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
  const [openItems, setOpenItems] = useState<string[]>([])

  const sarjapurFAQs = [
    {
      question: "What is the price of a 2 BHK flat in Sarjapur?",
      answer:
        "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
    },
    {
      question: "Where can I buy a 2 BHK flat in Bangalore?",
      answer:
        "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
    },
    {
      question: "Are there apartments in Sarjapur Road for sale?",
      answer:
        "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
    },
    {
      question: "What makes Luxury Apartments in Sarjapur Road special?",
      answer:
        "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
    },
  ]

  const varthurFAQs = [
    {
      question: "Is Varthur a good area to live in Bangalore?",
      answer:
        "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
    },
    {
      question: "What is the price of a flat in Varthur?",
      answer:
        "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
    },
    {
      question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
      answer:
        "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
    },
    {
      question: "What are the options for apartments in Varthur?",
      answer:
        "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
    },
  ]

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleLocationChange = (location: "sarjapur" | "varthur") => {
    setActiveLocation(location)
    setOpenItems([])
  }

  const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
  const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"

  return (
    <section className="bg-black py-20 text-white ">
      <div className="container mx-auto px-4 ">
        <div className="mb-16 text-center ">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
            <HelpCircle className="h-5 w-5" />
            <span className="font-semibold">FAQ</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>

          {/* FIXED: Added flex-wrap for mobile */}
          <div className="mb-4 inline-flex flex-wrap justify-center items-center rounded-full bg-gray-900 p-1 ">
            <button
              onClick={() => handleLocationChange("sarjapur")}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
                }`}
            >
              <MapPin className="h-4 w-4" />
              <span>Sarjapur</span>
            </button>
            <button
              onClick={() => handleLocationChange("varthur")}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
                }`}
            >
              <MapPin className="h-4 w-4" />
              <span>Varthur</span>
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>

          <div className="space-y-4">
            {currentFAQs.map((faq, index) => {
              const itemId = `${activeLocation}-${index}`
              const isOpen = openItems.includes(itemId)

              return (
                <div
                  key={itemId}
                  className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
                >
                  <button
                    onClick={() => toggleItem(itemId)}
                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                  >
                    <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gold-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-8 pb-6">
                      <p className="leading-relaxed text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
            <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
            <p className="mb-6 text-gray-400">
              Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600"
              >
                Contact Our Experts
              </a>
              <a
                href="tel:+91-8494966966"
                className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20"
              >
                Call: +91-8494966966
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChannelPartnerCTA() {
  return (
    <motion.section
      className="bg-black py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gray-900/50 border border-gold-800 p-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold text-white font-playfair lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Become a <span className="text-gold-400">Channel Partner</span>
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Are you a real estate agent or a firm? Partner with us to get access to exclusive inventory, attractive
            commissions, and dedicated support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/channel-partners">
              <Button
                size="lg"
                className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
              >
                Join Our Network
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function CallToAction() {
  const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("https://formspree.io/f/xwprwzdq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        router.push("/c1/thankyou")
      } else {
        alert("Failed to send your request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="relative overflow-hidden bg-light-gold py-24 text-black">
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-800">
            Contact Us: Let's Start Your Real Estate Journey Together
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <motion.div
              className="rounded-3xl p-8 bg-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-100 focus:border-gold-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
                    <Input
                      placeholder="Your phone number"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="bg-gray-100 focus:border-gold-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
                  <Select
                    value={formData.property}
                    onValueChange={(value) => setFormData({ ...formData, property: value })}
                  >
                    <SelectTrigger className="bg-gray-100">
                      <SelectValue placeholder="Select a property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="palacio">RRL Palacio</SelectItem>
                      <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
                      <SelectItem value="sequoia">RRL Sequoia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
                  <Textarea
                    placeholder="Your query in brief"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] bg-gray-100 focus:border-gold-500"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
                >
                  Submit Request
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
                <p className="mb-8 leading-relaxed text-gray-700">
                  Take the first step towards your real estate goals. Contact our expert team for personalised
                  assistance.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
                    <a
                      href="tel:+918494966966"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      +91-8494966966
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
                    <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
                    <p className="text-gray-700">
                      RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== FINAL PAGE EXPORT ==========
export default function HomePage() {
  return (
    <>
      <Hero />
      <Properties />
      <HappyClientsGallery />
      <Stats />
      <Testimonials />
      <AwardsSection />
      <Leadership />
      {/* <PartnersSection /> */}
      <FAQSection />
      <ChannelPartnerCTA />
      <CallToAction />
    </>
  )
}