

// // "use client"

// // import { useState, useEffect } from "react"
// // import type React from "react"
// // import Image from "next/image"
// // import Link from "next/link"
// // import { motion, Variants, easeOut } from "framer-motion"

// // // UI Components (assuming these are in the specified paths)
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { cn } from "@/lib/utils"

// // // Icons from lucide-react
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
// // } from "lucide-react"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { Checkbox } from "@/components/ui/checkbox"

// // // ========== 1. HERO COMPONENT ==========
// // function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0)
// //     const [isPlaying, setIsPlaying] = useState(false);

// //       const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     whatsappUpdates: false,
// //   })

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value, type, checked } = e.target
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }))
// //   }

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     console.log("Form submitted:", formData)
// //     alert("Thank you for your inquiry! We will get back to you shortly.")
// //     setFormData({ name: "", phone: "", whatsappUpdates: false })
// //   }


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
// //       {/* ===== Hero / Contact Section ===== */}
// //       <motion.section
// //         className="relative flex min-h-screen items-center overflow-hidden bg-black"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <div className="absolute inset-0 bg-grid-white/[0.05]" />
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

// //               <div className="space-y-4">
// //                 <h1 className="text-5xl font-bold leading-tight text-white font-playfair lg:text-7xl">
// //                   RRL Builders & <span className="text-gold-400 block">Developers</span>
// //                 </h1>
// //                 <p className="max-w-xl text-xl leading-relaxed text-gray-400">
// //                   Pioneers of affordable luxury residential and commercial spaces in Bangalore.
// //                   With our in-depth knowledge of the local market and industry trends, we offer
// //                   valuable insights to help you make well-informed decisions.
// //                 </p>
// //               </div>

// //               {/* Stats */}
// //               <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
// //                 {[
// //                   ["1000+", "Happy Families"],
// //                   ["10", "Years Experience"],
// //                   ["5+", "Projects Completed"],
// //                   ["500+", "Trusted Partners"],
// //                 ].map(([value, label], i) => (
// //                   <div key={i} className="text-center">
// //                     <div className="text-4xl font-bold text-gold-400">{value}</div>
// //                     <div className="text-sm text-gray-400">{label}</div>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* CTA Buttons */}
// //               <div className="flex flex-col gap-4 sm:flex-row">
// //                 <Button
// //                   size="lg"
// //                   className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //                 >
// //                   Explore RRL Properties
// //                   <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// //                 </Button>
// //                 <div className="w-full max-w-xl">
// //       {!isPlaying ? (
// //         <Button
// //           size="lg"
// //           variant="outline"
// //           className="group rounded-full border-2 border-gold-700 bg-transparent px-8 py-4 font-semibold text-gold-300 hover:bg-gold-900/20"
// //           onClick={() => setIsPlaying(true)}
// //         >
// //           <Play className="mr-2 h-5 w-5" />
// //           Watch Awrds
// //         </Button>
// //       ) : (
// //         <div className="relative aspect-video w-full">
// //           <iframe
// //             src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1"
// //             title="Our Story Video"
// //             frameBorder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //             allowFullScreen
// //             className="absolute top-0 left-0 w-full h-full rounded-md"
// //           ></iframe>
// //         </div>
// //       )}
// //     </div>
// //               </div>

// //               {/* Trust Indicators */}
// //               <div className="flex items-center space-x-6 pt-4">
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

// //             {/* Right Content - Contact Form */}
// //             <motion.div
// //               className="flex justify-center lg:justify-end"
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //             >
// //               <Card className="w-full max-w-md rounded-2xl shadow-2xl p-8 bg-white/10 backdrop-blur-md border border-gold-800">
// //                 <CardContent className="p-0">
// //                   <h2 className="text-2xl font-bold text-white mb-6 text-center">
// //                     Get a Free Quote for Your Dream Property
// //                   </h2>
// //                   <form onSubmit={handleSubmit} className="space-y-5">
// //                     <Input
// //                       type="text"
// //                       name="name"
// //                       placeholder="Name"
// //                       value={formData.name}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
// //                     />
// //                     <Input
// //                       type="tel"
// //                       name="phone"
// //                       placeholder="Phone number"
// //                       value={formData.phone}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
// //                     />
// //                     <div className="flex items-center space-x-2">
// //                       <Checkbox
// //                         id="whatsapp-updates"
// //                         name="whatsappUpdates"
// //                         checked={formData.whatsappUpdates}
// //                         onCheckedChange={(checked) =>
// //                           setFormData((prev) => ({
// //                             ...prev,
// //                             whatsappUpdates: !!checked,
// //                           }))
// //                         }
// //                         className="border-gold-700 data-[state=checked]:bg-gold-500 data-[state=checked]:text-black"
// //                       />
// //                       <label
// //                         htmlFor="whatsapp-updates"
// //                         className="text-sm font-medium text-gray-300"
// //                       >
// //                         Send me updates on Whatsapp
// //                       </label>
// //                     </div>
// //                     <Button
// //                       type="submit"
// //                       size="lg"
// //                       className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg"
// //                     >
// //                       Request Call Back
// //                     </Button>
// //                     <p className="text-xs text-gray-400 text-center mt-4">
// //                       By submitting, you agree to the{" "}
// //                       <Link href="/privacy" className="text-gold-400 hover:underline">
// //                         privacy policy
// //                       </Link>{" "}
// //                       &{" "}
// //                       <Link href="/terms" className="text-gold-400 hover:underline">
// //                         terms
// //                       </Link>
// //                       .
// //                     </p>
// //                   </form>
// //                 </CardContent>
// //               </Card>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* ===== Awards Section ===== */}
// //       <motion.section
// //         className="py-20 bg-black text-white relative"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <div className="absolute inset-0 bg-grid-white/[0.05]" />
// //         <div className="container mx-auto px-4 relative">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <motion.div
// //               className="space-y-8"
// //               initial={{ opacity: 0, x: -50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //             >
// //               {/* <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
// //                 <Trophy className="h-4 w-4" />
// //                 <span>RRL Awards</span>
// //               </div> */}
// //               <h1 className="text-4xl md:text-5xl font-playfair font-bold">
// //                 Times Real Estate Icon Awards, 2025
// //               </h1>
// //               <p className="text-lg text-gray-400 leading-relaxed">
// //                 RRL Groups has been honored with the prestigious award for Builder of the Year in
// //                 the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
// //               </p>

// //               <div className="space-y-4">
// //                 {[
// //                   ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
// //                   ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
// //                   ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
// //                 ].map(([title, desc], i) => (
// //                   <div key={i} className="flex items-start space-x-3">
// //                     <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
// //                       <Star className="h-3 w-3 text-black" />
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-white">{title}</h3>
// //                       <p className="text-gray-500 text-sm">{desc}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               className="relative"
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //             >
// //               <Image
// //                 src="/awardhome.jpeg"
// //                 alt="RRL Awards Ceremony 2025"
// //                 width={600}
// //                 height={400}
// //                 className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
// //               />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.section>
// //     </>
// //   );
// // };

// // // ========== 2. AWARDS COMPONENT ==========
// // // THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED VERSION FROM oldhome.tsx
// // function Awards() {
// //   const awardsData = [
// //     {
// //       year: "2025",
// //       title: "Times Real Estate Icon Awards",
// //       category: "Builder of the Year - Mid Segment Housing",
// //       icon: Trophy,
// //       color: "bg-gold-500",
// //     },
// //     {
// //       year: "2024",
// //       title: "Excellence in Amenities Premium",
// //       category: "Mid-Segment Homes",
// //       icon: Medal,
// //       color: "bg-gray-700",
// //     },
// //     {
// //       year: "2023",
// //       title: "Global Real Estate Brand Awards",
// //       category: "Affordability Category Winner",
// //       icon: Award,
// //       color: "bg-gold-500",
// //     },
// //     {
// //       year: "2023",
// //       title: "Property Award of the Year",
// //       category: "Affordable and High-end Property",
// //       icon: Star,
// //       color: "bg-gray-700",
// //     },
// //   ]
// //   return (
// //     <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-24">
// //       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

// //       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="mb-12 md:mb-16 text-center">
// //           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// //             <Trophy className="h-5 w-5" />
// //             <span className="font-semibold">RRL Legacy of Achievements</span>
// //           </div>

// //           <h2 className="mb-6 text-3xl font-bold font-playfair sm:text-4xl lg:text-5xl">
// //             Committed to Results: Highlights of Our
// //             <span className="text-gold-400 block">Real Estate Success</span>
// //           </h2>

// //           <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
// //             At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
// //             commitment to delivering exceptional real estate services to our valued clients.
// //           </p>
// //         </div>

// //         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
// //           <div className="space-y-6">
// //             {awardsData.map((award, index) => (
// //               <div
// //                 key={index}
// //                 className="group flex min-h-32 rounded-2xl border border-gold-800 bg-gray-900/50 p-4 sm:p-6 shadow-lg transition-all duration-300 hover:border-gold-600 hover:shadow-2xl"
// //               >
// //                 <div className="flex w-full items-center space-x-4">
// //                   <div
// //                     className={`flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg ${award.color}`}
// //                   >
// //                     <award.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
// //                   </div>

// //                   <div className="min-w-0 flex-1">
// //                     {/* THIS IS THE KEY FIX: Stacks vertically on mobile, row on sm screens up */}
// //                     <div className="mb-2 flex flex-col items-start sm:flex-row sm:items-center sm:space-x-3">
// //                       <span className="text-xl font-bold text-gold-400">{award.year}</span>
// //                       <div className="h-6 w-px bg-gold-800 hidden sm:block"></div>
// //                       <span className="text-sm font-medium uppercase tracking-wide text-gray-500 line-clamp-2 sm:truncate">
// //                         {award.category}
// //                       </span>
// //                     </div>

// //                     <h3 className="line-clamp-2 mb-2 text-lg font-bold text-white transition-colors group-hover:text-gold-400 sm:text-xl">
// //                       {award.title}
// //                     </h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
// //             <Image
// //               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
// //               alt="RRL Awards Ceremony"
// //               width={600}
// //               height={400}
// //               className="h-auto w-full rounded-2xl shadow-lg"
// //             />
// //           </div>
// //         </div>

// //         {/* Other sections with similar responsive adjustments */}
// //         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
// //           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
// //             <Image
// //               src="/zee.jpeg"
// //               alt="5th Global Real Estate Brand Awards 2023"
// //               width={600}
// //               height={400}
// //               className="h-auto w-full rounded-2xl shadow-lg"
// //             />
// //           </div>
// //           <div className="space-y-6 ">
// //             <h3 className="text-2xl font-bold font-playfair md:text-3xl">
// //               The Global Real Estate Brand Awards, 2023
// //             </h3>
// //             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
// //               Bengaluru (Karnataka) [India], June 1: The Indian real estate industry's stars gathered at the
// //               illustrious 5th edition of the Global Real Estate Brand Awards 2023. Held at Hotel Ritz Carlton,
// //               Bengaluru...
// //             </p>
// // <Link href="/awards">
// //   <Button
// //     size="lg"
// //     className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //   >
// //     RRL RECOGNITION
// //   </Button>
// // </Link>
// //           </div>
// //         </div>

// //         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
// //           <div className="space-y-6 md:order-1 order-2">
// //             <h3 className="text-2xl font-bold font-playfair md:text-3xl">Times Real Estate Icons Award, 2025</h3>
// //             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
// //               RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
// //               ICON Awards, 2025.
// //             </p>
// //              <p className="text-base leading-relaxed text-gray-400 md:text-lg">
// //               Thrilled to present award-winning projects after RRL Nature Wood, now its turn for RRL Palacio, powered by
// //               RRL Builders and developers...
// //             </p>
// // <Link href="/awards">
// //   <Button
// //     size="lg"
// //     className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //   >
// //     RRL RECOGNITION
// //   </Button>
// // </Link>
// //           </div>
// //           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl md:order-2 order-1">
// //             <Image
// //               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
// //               alt="Times Real Estate Icons Award 2025"
// //               width={600}
// //               height={400}
// //               className="h-auto w-full rounded-2xl shadow-lg"
// //             />
// //           </div>
// //         </div>

// //         <div className="mb-16 text-center">
// //           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// //             <Newspaper className="h-5 w-5" />
// //             <span className="font-semibold">Featured In</span>
// //           </div>
// //           <h3 className="mb-8 text-2xl font-bold font-playfair md:text-3xl">
// //             Our Achievements in the <span className="text-gold-400 block">News</span>
// //           </h3>
// //           <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
// //             <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
// //               <Image
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-qDHHyNYjDinRiMkHs0aLMdWqIsg1A3.jpeg"
// //                 alt="ThePrint Media Coverage"
// //                 width={500}
// //                 height={300}
// //                 className="h-auto w-full rounded-t-2xl object-cover"
// //               />
// //               <div className="p-4">
// //                 <h4 className="text-lg font-bold">ThePrint: Global Real Estate Brand Awards</h4>
// //                 <p className="mt-2 text-sm text-gray-400">
// //                   Coverage of the 5th edition of the Global Real Estate Brand Awards 2023.
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
// //               <Image
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-a2nth21OR71xLxlXXXOwOeVuSveGXL.png"
// //                 alt="Times of India Media Coverage"
// //                 width={500}
// //                 height={300}
// //                 className="h-auto w-full rounded-t-2xl object-cover"
// //               />
// //               <div className="p-4">
// //                 <h4 className="text-lg font-bold">Times of India: Builder of the Year</h4>
// //                 <p className="mt-2 text-sm text-gray-400">
// //                   RRL Builders named Builder of the Year in Mid-Segment Housing.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="text-center">
// //           <Link href="/awards">
// //             <Button size="lg" className="rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
// //               Explore All RRL Awards
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
  
// // // ========== 3. STATS COMPONENT ==========
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
// //         visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
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
// // // ========== 4. PROPERTIES COMPONENT ==========
// // function Properties() {
// //   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

// //   const residentialProperties = [
// //     {
// //       id: "palacio",
// //       name: "RRL Palacio",
// //       location: "Medahalli",
// //       type: "Luxury Property",
// //       status: "Ready to Move",
// //       description: "Our newly constructed luxury property, situated in Medahalli",
// //       image: "/LookProject2.jpeg",
// //       features: ["Premium Amenities", "Furnished smart homes"],
// //       rating: 4.8,
// //       price: "₹45 Lakhs onwards",
// //     },
// //     {
// //       id: "palm-altezze",
// //       name: "RRL Palm Altezze",
// //       location: "Varthur, Bangalore",
// //       type: "Premium Property",
// //       status: "Just Launched",
// //       description: "Our latest premium property located at Varthur, Bangalore",
// //       image: "/justlaunch.png",
// //       features: ["High Rise Apartment", "Premium Apartment"],
// //       rating: 4.9,
// //       price: "₹38 Lakhs onwards",
// //     },
// //     {
// //       id: "sequoia",
// //       name: "RRL Sequoia",
// //       location: "Varthur, Bangalore",
// //       type: "Luxurious Villa",
// //       status: "Coming Soon",
// //       description: "Our latest luxurious Villa located at Varthur, Bangalore",
// //       image: "/Sequoia.jpg",
// //       features: ["4 BHK Villa", "Garden", "Premium Location"],
// //       rating: 4.7,
// //       price: "₹85 Lakhs onwards",
// //     },
// //     {
// //       id: "nature-woods",
// //       name: "RRL Nature Woods",
// //       location: "Sarjapur",
// //       type: "Premium Property",
// //       status: "Completed",
// //       description: "Our premium awarded property, situated in heart of Sarjapur",
// //       image: "/LookProject5.jpeg",
// //       features: ["Nature View", "High end award winning amenities"],
// //       rating: 4.9,
// //       price: "₹42 Lakhs onwards",
// //     },
// //   ]

// //   const commercialProperties = [
// //     {
// //       id: "towers",
// //       name: "RRL Towers",
// //       location: "Sampige Jala, Sarjapur",
// //       type: "Commercial Tower",
// //       status: "Operational",
// //       description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
// //       image: "/Tower.jpeg",
// //       features: ["Office Spaces", "Retail", "Corporate Hub"],
// //       rating: 4.8,
// //       price: "₹65 Lakhs onwards",
// //     },
// //     {
// //       id: "complex",
// //       name: "RRL Complex",
// //       location: "South Bangalore",
// //       type: "Commercial Building",
// //       status: "Operational",
// //       description: "Our 12th Commercial Building situated in South of Bangalore",
// //       image: "/complex.jpg",
// //       features: ["Multi-tenant", "Parking", "Modern Facilities"],
// //       rating: 4.7,
// //       price: "₹55 Lakhs onwards",
// //     },
// //     {
// //       id: "oasis",
// //       name: "RRL Oasis",
// //       location: "Bangalore",
// //       type: "Commercial Building",
// //       status: "Upcoming Commercial Project",
// //       description: "Upcoming residential project with modern amenities",
// //       image: "/Oasis.jpg",
// //       features: ["1 BHK", "2 BHK", "Swimming Pool"],
// //       rating: 4.6,
// //       price: "₹28 Lakhs onwards",
// //     },
// //   ]
// //   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties
// //   const displayProperties = currentProperties.slice(0, 4)

// //   return (
// //     <motion.section 
// //       className="bg-black py-24"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.1 }}
// //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="mb-16 text-center">
// //           <motion.div 
// //             className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <Home className="h-5 w-5" />
// //             <span className="font-semibold">Find Your Dream Property</span>
// //           </motion.div>

// //           <motion.h2 
// //             className="mb-6 text-4xl font-bold text-white font-playfair lg:text-5xl"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             RRL Premium <span className="text-gold-400">Properties</span>
// //           </motion.h2>

// //           <motion.p 
// //             className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //           >
// //             Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms to breathtaking views, we provide a
// //             comprehensive overview of what each property has to offer.
// //           </motion.p>

// //           <div className="mb-8 inline-flex items-center rounded-full bg-gray-900 p-1">
// //             <button
// //               onClick={() => setActiveTab("residential")}
// //               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
// //                 activeTab === "residential" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// //               }`}
// //             >
// //               <Home className="h-4 w-4" />
// //               <span>Residential</span>
// //             </button>
// //             <button
// //               onClick={() => setActiveTab("commercial")}
// //               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
// //                 activeTab === "commercial" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// //               }`}
// //             >
// //               <Building2 className="h-4 w-4" />
// //               <span>Commercial</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
// //           {displayProperties.map((property, index) => (
// //             <motion.div
// //               key={property.id}
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //             >
// //               <Link href={`/projects/${property.id}`} className="group cursor-pointer">
// //                 <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-900 border border-gold-800 transition-all duration-300 hover:border-gold-600 hover:shadow-2xl hover:shadow-gold-800/40">
// //                 <div className="relative overflow-hidden h-56">
// //                   <Image
// //                     src={property.image || "/placeholder.svg"}
// //                     alt={property.name}
// //                     width={400}
// //                     height={300}
// //                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
// //                   />
// //                   <div className="absolute left-4 top-4">
// //                     <div
// //                       className={`rounded-full px-3 py-1 text-xs font-semibold ${
// //                         property.status === "Award Winner" ? "bg-gold-500 text-black" :
// //                         property.status === "Ready to Move" || property.status === "Operational" ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"
// //                       }`}
// //                     >
// //                       {property.status}
// //                     </div>
// //                   </div>
// //                   <div className="absolute right-4 top-4 rounded-full px-2 py-1 bg-black/50 backdrop-blur-sm">
// //                     <div className="flex items-center space-x-1">
// //                       <Star className="h-3 w-3 fill-gold-400 text-gold-400"/>
// //                       <span className="text-xs font-semibold text-white">{property.rating}</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-col h-[calc(100%-14rem)] p-6">
// //                   <h3 className="text-xl font-bold text-white group-hover:text-gold-400">{property.name}</h3>
// //                   <div className="mt-1 flex items-center space-x-2 text-gray-500">
// //                     <MapPin className="h-4 w-4 flex-shrink-0" />
// //                     <span className="line-clamp-1 text-sm">{property.location}</span>
// //                   </div>
// //                   <p className="line-clamp-2 my-4 text-sm leading-relaxed text-gray-400">
// //                     {property.description}
// //                   </p>
// //                   <div className="mt-auto flex items-center justify-between border-t border-gold-800 pt-4">
// //                     {/* <span className="text-lg font-bold text-gold-400">{property.price}</span> */}
// //                     {/* <ArrowRight className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-1" /> */}
// //                   </div>
// //                 </div>
// //                 </div>
// //               </Link>
// //             </motion.div>
// //           ))}
// //         </div>
        
// //         {/* SUMMARY STATS & BUTTON ADDED FROM OLD FILE */}
// //         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
// //           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
// //             <div className="mb-2 text-3xl font-bold text-gold-400">{activeTab === "residential" ? "5+" : "3+"}</div>
// //             <div className="text-gray-400">
// //               {activeTab === "residential" ? "Residential Projects" : "Commercial Projects"}
// //             </div>
// //           </div>
// //           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
// //             <div className="mb-2 text-3xl font-bold text-gold-400">1000+</div>
// //             <div className="text-gray-400">Happy Customers</div>
// //           </div>
// //           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
// //             <div className="mb-2 text-3xl font-bold text-gold-400">999+</div>
// //             <div className="text-gray-400">Sq Ft Delivered</div>
// //           </div>
// //         </div>

// //         <div className="text-center">
// //           <Link href="/projects">
// //             <Button
// //               size="lg"
// //               className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //             >
// //               Explore More {activeTab === "residential" ? "Residential" : "Commercial"} Properties
// //               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }
// // // ========== 5. TESTIMONIALS COMPONENT ==========
// // function Testimonials() {
// //   // FULL LIST OF 12 TESTIMONIALS RESTORED
// //   const testimonials = [
// //     {
// //       name: "Rita Chauhan",
// //       role: "Happy Customer",
// //       location: "Sarjapur, Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
// //     },
// //     {
// //       name: "Rajesh Kumar",
// //       role: "Property Investor",
// //       location: "Varthur, Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
// //     },
// //     {
// //       name: "Priya Sharma",
// //       role: "Homeowner",
// //       location: "Medahalli, Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
// //     },
// //     {
// //       name: "Suman Narayan",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat.Even budget friendly too.I highly recommend RRL for interior designing.",
// //     },
// //     {
// //       name: "Subhash S",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
// //     },
// //     {
// //       name: "Neelima Maryam",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial: "Very happy with the designs and budget.",
// //     },
// //     {
// //       name: "Attili Nikhil",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "Had a great experience with RRL. They execute what we tell them.I highly recommend to their 3D designs. They respond to us with great patience and even their price is very reasonable when compared with other interior designers quotations. And when it comes to green he is very nice guy who responds very well and gives us great designs and ideas. So I strongly recommend to go with RRL.",
// //     },
// //     {
// //       name: "Bipul Kumar Singh",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "We are very happy with the service provided by RRL. They handles all the requirements very carefully starting from the inception the model to delivering the good ideas for my flat with lots of transparency in the material.I would highly recommend RRL.",
// //     },
// //     {
// //       name: "Devam Rajaguru",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial: "We are very happy about the work, outcome is very nice.Thank you so much RRL team for turning this so well.",
// //     },
// //     {
// //       name: "Raaj Kumar",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "I had an exceptional experience with RRL. From layout analysis to execution, every aspect of their work was impeccable. Mr. Ram and Mr. Lakshman ensured the project was delivered on time and within the budget, paying close attention to detail. Despite being abroad, I felt reassured by Mr. Ram's regular visits and dedication to smooth project progress. For those seeking top-notch interior designs, I highly recommend RRL. Thank you for the fantastic work!",
// //     },
// //     {
// //       name: "Rubina A",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial:
// //         "We are so grateful to RRL who converted our flat into a beautiful home. From planning the perfect layout to the timely execution, we absolutely love their work. Mr. Ram and his team really took my space to next level that too in given time frame. Great value for the price. Will highly recommend RRL for his amazing communication skill and customer service. Thank you so much team.",
// //     },
// //     {
// //       name: "Karishma Jattan",
// //       role: "Client",
// //       location: "Bengaluru",
// //       rating: 5,
// //       testimonial: "Happie wid the service provided.Good team.Reasonable price and wonders at designs.",
// //     },
// //   ]
// //   return (
// //     <motion.section 
// //       className="py-24 bg-light-gold"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.1 }}
// //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="mb-16 text-center">
// //           <motion.h2 
// //             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             Hear From Our <span className="text-gold-600">Clients</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="mx-auto max-w-2xl text-xl text-gray-800"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             Beyond Real Estate: Personal Stories of Satisfaction
// //           </motion.p>
// //         </div>

// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
// //           {testimonials.map((testimonial, index) => (
// //             <motion.div
// //               key={index}
// //               className="rounded-2xl bg-white p-8 shadow-lg"
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //             >
// //               <div className="mb-4 flex items-center space-x-1">
// //                 {[...Array(testimonial.rating)].map((_, i) => (
// //                   <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
// //                 ))}
// //               </div>
// //               <blockquote className="line-clamp-5 mb-6 italic leading-relaxed text-gray-700">
// //                 "{testimonial.testimonial}"
// //               </blockquote>
// //               <div className="flex items-center space-x-4">
// //                 <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500">
// //                   <span className="text-base font-bold text-black">
// //                     {testimonial.name
// //                       .split(" ")
// //                       .map((n) => n[0])
// //                       .join("")}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <div className="font-bold text-black">{testimonial.name}</div>
// //                   <div className="text-sm text-gray-600">{testimonial.role}</div>
// //                   <div className="text-xs text-gray-500">{testimonial.location}</div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// // // ========== 6. LEADERSHIP COMPONENT ==========
// // function Leadership() {
// //   return (
// //     <motion.section 
// //       className="relative overflow-hidden bg-light-black py-24"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.1 }}
// //       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //     >
// //       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
// //       <div className="container relative mx-auto px-4">
// //         <div className="grid items-center gap-16 lg:grid-cols-2">
// //           <motion.div 
// //             className="space-y-8"
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //           >
// //             <div className="space-y-4">
// //                 <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
// //                     <Users className="h-5 w-5" />
// //                     <span className="font-semibold">Leadership Excellence</span>
// //                 </div>

// //                 <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
// //                     Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
// //                 </h2>

// //                 <p className="text-lg leading-relaxed text-gray-400">
// //                   When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
// //                   Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
// //                 </p>
// //             </div>
            
// //             {/* LEADERSHIP HIGHLIGHTS ADDED FROM OLD FILE */}
// //             <div className="grid grid-cols-2 gap-6">
// //               <div className="space-y-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
// //                   <Award className="h-6 w-6 text-black" />
// //                 </div>
// //                 <h3 className="font-bold text-white">10+ Years Experience</h3>
// //                 <p className="text-sm text-gray-400">
// //                   Exceptional business acumen and established leadership
// //                 </p>
// //               </div>

// //               <div className="space-y-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
// //                   <Target className="h-6 w-6 text-black" />
// //                 </div>
// //                 <h3 className="font-bold text-white">Market Understanding</h3>
// //                 <p className="text-sm text-gray-400">
// //                   Deep understanding of market trends and industry dynamics
// //                 </p>
// //               </div>

// //               <div className="space-y-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
// //                   <Lightbulb className="h-6 w-6 text-black" />
// //                 </div>
// //                 <h3 className="font-bold text-white">Innovation Focus</h3>
// //                 <p className="text-sm text-gray-400">
// //                   Innovative approach to real estate development
// //                 </p>
// //               </div>

// //               <div className="space-y-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
// //                   <Users className="h-6 w-6 text-black" />
// //                 </div>
// //                 <h3 className="font-bold text-white">Customer Centric</h3>
// //                 <p className="text-sm text-gray-400">
// //                   Dedicated to providing luxurious living spaces
// //                 </p>
// //               </div>
// //             </div>

// //             {/* <Button className="rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
// //               Read About RRL
// //             </Button> */}
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
// //                   <p className="text-sm text-gray-400">Co-Founder & Director</p>
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
// //                   <p className="text-sm text-gray-400">Co-Founder & Director</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }
// // // ========== 7. PARTNERS COMPONENT ==========
// // // FULL PARTNER LISTS RESTORED
// // function PartnersSection() {
// //     const bankingPartners = [
// //       { name: "SBI", src: "/logos/SBI-Logo.png" },
// //       { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
// //       { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
// //       { name: "Union Bank", src: "/logos/union-bank.png" },
// //       { name: "ICICI Bank", src: "/logos/icici-bank.png" },
// //       { name: "Axis Bank", src: "/logos/axis-bank.svg" },
// //       { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
// //       { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
// //       { name: "TATA Capital", src: "/logos/tata-capital.png" },
// //     ]
  
// //     const trustedBrands = [
// //       { name: "Kerovit", src: "/logos/kerovit.png" },
// //       { name: "Schneider", src: "/logos/schneider.png" },
// //       { name: "One Touch", src: "/logos/one-touch.png" },
// //       { name: "Designhive", src: "/logos/Designhive.png" },
// //       { name: "Polycab", src: "/logos/polycab.png" },
// //       { name: "SVT", src: "/logos/svt.png" },
// //       { name: "Shivam Enterprise", src: "/logos/shivam.png" },
// //       { name: "Nippon", src: "/logos/nippon.png" },
// //       { name: "Fenstect", src: "/logos/fenstect.png" },
// //       { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
// //       { name: "Philips", src: "/logos/philips.png" },
// //       { name: "Wipro", src: "/logos/wipro.jpg" },
// //     ]
  
// //     const marketingPartners = [
// //       { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
// //       { name: "Housing.com", src: "/logos/housing-com.png" },
// //       { name: "Marketly", src: "/logos/marketly.jpg" },
// //       { name: "99acres", src: "/logos/99acres.png" },
// //     ]
  
// //     const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
// //     const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
// //     const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]
  
// //     return (
// //       <motion.section
// //         className="overflow-hidden py-20 bg-light-gold"
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, amount: 0.2 }}
// //         variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
// //       >
// //         <div className="container mx-auto px-4">
// //           <div className="mb-16 text-center">
// //             <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">Our Valued <span className="text-gold-600">Partners</span></h1>
// //             <p className="mx-auto max-w-2xl text-xl text-gray-800">
// //               Collaborating with industry leaders to bring you the best in real estate.
// //             </p>
// //           </div>
  
// //           <div className="space-y-16">
// //             <div>
// //               <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
// //               <div className="relative w-full overflow-hidden py-4">
// //                 <motion.div
// //                   className="flex flex-nowrap"
// //                   animate={{ x: ["0%", `-${100 / 2 * bankingPartners.length / 6}%`] }}
// //                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
// //                 >
// //                   {duplicatedBankingPartners.map((partner, index) => (
// //                     <div key={`banking-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// //                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// //                         <Image
// //                           src={partner.src || "/placeholder.svg"}
// //                           alt={partner.name}
// //                           width={120}
// //                           height={60}
// //                           className="max-h-full max-w-full object-contain"
// //                         />
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </motion.div>
// //               </div>
// //             </div>
// //             <div>
// //               <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
// //               <div className="relative w-full overflow-hidden py-4">
// //                 <motion.div
// //                   className="flex flex-nowrap"
// //                   animate={{ x: [`-${100 / 2 * trustedBrands.length / 6}%`, "0%"] }}
// //                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
// //                 >
// //                   {duplicatedTrustedBrands.map((brand, index) => (
// //                     <div key={`trusted-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// //                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// //                         <Image
// //                           src={brand.src || "/placeholder.svg"}
// //                           alt={brand.name}
// //                           width={120}
// //                           height={60}
// //                           className="max-h-full max-w-full object-contain"
// //                         />
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </motion.div>
// //               </div>
// //             </div>
// //             {/* MARKETING PARTNERS SECTION ADDED */}
// //             <div>
// //               <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
// //               <div className="relative w-full overflow-hidden py-4">
// //                 <motion.div
// //                   className="flex flex-nowrap"
// //                   animate={{ x: ["0%", `-${100 / 2 * marketingPartners.length / 6}%`] }}
// //                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
// //                 >
// //                   {duplicatedMarketingPartners.map((partner, index) => (
// //                     <div key={`marketing-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
// //                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
// //                         <Image
// //                           src={partner.src || "/placeholder.svg"}
// //                           alt={partner.name}
// //                           width={120}
// //                           height={60}
// //                           className="max-h-full max-w-full object-contain"
// //                         />
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.section>
// //     )
// //   }
// // // ========== 8. FAQ COMPONENT ==========
// // // THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED, TABBED VERSION
// // interface FAQSectionProps {
// //     title?: string
// //     subtitle?: string
// //     defaultLocation?: "sarjapur" | "varthur"
// // }
// // function FAQSection({
// //     title = "Frequently Asked Questions",
// //     subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
// //     defaultLocation = "sarjapur",
// //   }: FAQSectionProps) {
// //     const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
// //     const [openItems, setOpenItems] = useState<string[]>([])
  
// //     const sarjapurFAQs = [
// //       {
// //         question: "What is the price of a 2 BHK flat in Sarjapur?",
// //         answer: "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
// //       },
// //       {
// //         question: "Where can I buy a 2 BHK flat in Bangalore?",
// //         answer: "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
// //       },
// //       {
// //         question: "Are there apartments in Sarjapur Road for sale?",
// //         answer: "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
// //       },
// //       {
// //         question: "What makes Luxury Apartments in Sarjapur Road special?",
// //         answer: "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
// //       },
// //     ]
  
// //     const varthurFAQs = [
// //       {
// //         question: "Is Varthur a good area to live in Bangalore?",
// //         answer: "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
// //       },
// //       {
// //         question: "What is the price of a flat in Varthur?",
// //         answer: "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
// //       },
// //       {
// //         question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
// //         answer: "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
// //       },
// //       {
// //         question: "What are the options for apartments in Varthur?",
// //         answer: "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
// //       },
// //     ]
  
// //     const toggleItem = (id: string) => {
// //       setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
// //     }
  
// //     const handleLocationChange = (location: "sarjapur" | "varthur") => {
// //       setActiveLocation(location)
// //       setOpenItems([])
// //     }
  
// //     const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
// //     const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"
  
// //     return (
// //       <section className="bg-black py-20 text-white ">
// //         <div className="container mx-auto px-4 ">
// //           <div className="mb-16 text-center ">
// //             <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
// //               <HelpCircle className="h-5 w-5" />
// //               <span className="font-semibold">FAQ</span>
// //             </div>
  
// //             <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>
  
// //             <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>
  
// //             <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
// //               <button
// //                 onClick={() => handleLocationChange("sarjapur")}
// //                 className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
// //                   activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// //                 }`}
// //               >
// //                 <MapPin className="h-4 w-4" />
// //                 <span>Sarjapur</span>
// //               </button>
// //               <button
// //                 onClick={() => handleLocationChange("varthur")}
// //                 className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
// //                   activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
// //                 }`}
// //               >
// //                 <MapPin className="h-4 w-4" />
// //                 <span>Varthur</span>
// //               </button>
// //             </div>
// //           </div>
  
// //           <div className="mx-auto max-w-4xl">
// //             <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>
  
// //             <div className="space-y-4">
// //               {currentFAQs.map((faq, index) => {
// //                 const itemId = `${activeLocation}-${index}`
// //                 const isOpen = openItems.includes(itemId)
  
// //                 return (
// //                   <div
// //                     key={itemId}
// //                     className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
// //                   >
// //                     <button
// //                       onClick={() => toggleItem(itemId)}
// //                       className="flex w-full items-center justify-between px-8 py-6 text-left"
// //                     >
// //                       <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
// //                       <div className="flex-shrink-0">
// //                         {isOpen ? (
// //                           <ChevronUp className="h-5 w-5 text-gold-400" />
// //                         ) : (
// //                           <ChevronDown className="h-5 w-5 text-gray-500" />
// //                         )}
// //                       </div>
// //                     </button>
  
// //                     <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
// //                       <div className="px-8 pb-6">
// //                         <p className="leading-relaxed text-gray-400">{faq.answer}</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )
// //               })}
// //             </div>
// //           </div>
  
// //           <div className="mt-16 text-center">
// //             <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
// //               <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
// //               <p className="mb-6 text-gray-400">
// //                 Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
// //               </p>
// //               <div className="flex flex-col justify-center gap-4 sm:flex-row">
// //                 <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600">
// //                   Contact Our Experts
// //                 </a>
// //                 <a href="tel:+91-8494966966" className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20">
// //                   Call: +91-8494966966
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }

// // // ========== 9. CALL TO ACTION COMPONENT ==========
// // // REPLACED WITH THE FULL VERSION FROM oldhome.tsx
// // function CallToAction() {
// //     const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
  
// //     const handleSubmit = (e: React.FormEvent) => {
// //       e.preventDefault()
// //       console.log("Form submitted:", formData)
// //     }
  
// //     return (
// //       <section className="relative overflow-hidden bg-light-gold py-24 text-black">
// //         <div className="container relative mx-auto px-4">
// //           <div className="mb-16 text-center">
// //             <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
// //             <p className="mx-auto max-w-2xl text-xl text-gray-800">
// //               Contact Us: Let's Start Your Real Estate Journey Together
// //             </p>
// //           </div>
  
// //           <div className="mx-auto max-w-6xl">
// //             <div className="grid items-start gap-16 lg:grid-cols-2">
// //               <motion.div 
// //                 className="rounded-3xl p-8 bg-white shadow-2xl"
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.8, ease: "easeOut" }}
// //               >
// //                 <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="grid gap-4 md:grid-cols-2">
// //                     <div>
// //                       <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
// //                       <Input
// //                         placeholder="Your name"
// //                         value={formData.name}
// //                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                         className="bg-gray-100 focus:border-gold-500"
// //                         required
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
// //                       <Input
// //                         placeholder="Your phone number"
// //                         value={formData.contact}
// //                         onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
// //                         className="bg-gray-100 focus:border-gold-500"
// //                         required
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
// //                     <Select
// //                       value={formData.property}
// //                       onValueChange={(value) => setFormData({ ...formData, property: value })}
// //                     >
// //                       <SelectTrigger className="bg-gray-100">
// //                         <SelectValue placeholder="Select a property" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="palacio">RRL Palacio</SelectItem>
// //                         <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
// //                         <SelectItem value="sequoia">RRL Sequoia</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                   <div>
// //                     <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
// //                     <Textarea
// //                       placeholder="Your query in brief"
// //                       value={formData.message}
// //                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //                       className="min-h-[120px] bg-gray-100 focus:border-gold-500"
// //                     />
// //                   </div>
// //                   <Button
// //                     type="submit"
// //                     size="lg"
// //                     className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
// //                   >
// //                     Submit Request
// //                     <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// //                   </Button>
// //                 </form>
// //               </motion.div>
// //               <motion.div 
// //                 className="space-y-8"
// //                 initial={{ opacity: 0, x: 50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.8, ease: "easeOut" }}
// //               >
// //                 <div>
// //                   <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
// //                   <p className="mb-8 leading-relaxed text-gray-700">
// //                     Take the first step towards your real estate goals. Contact our expert team for personalised
// //                     assistance.
// //                   </p>
// //                 </div>
// //                 <div className="space-y-6">
// //                   <div className="flex items-start space-x-4">
// //                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// //                       <Phone className="h-6 w-6 text-black" />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
// //                       <p className="text-gray-700">+91-8494966966</p>
// //                       {/* <p className="text-gray-700">+91-73378 16991</p> */}
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start space-x-4">
// //                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// //                       <Mail className="h-6 w-6 text-black" />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
// //                       <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start space-x-4">
// //                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
// //                       <MapPin className="h-6 w-6 text-black" />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
// //                       <p className="text-gray-700">
// //                         RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     )
// // }

// // // ========== FINAL PAGE EXPORT ==========
// // export default function HomePage() {
// //   return (
// //     <>
// //       <Hero />
// //       <PartnersSection />
// //       <Awards />
// //       <Leadership />
// //       <Stats />
// //       <Properties />
// //       <Testimonials />
// //       <FAQSection />
// //       <CallToAction />
// //     </>
// //   )
// // }


// "use client"

// import { useState, useEffect } from "react"
// import type React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion, Variants, easeOut } from "framer-motion"

// // UI Components (assuming these are in the specified paths)
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { cn } from "@/lib/utils"

// // Icons from lucide-react
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
// } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"

// // ========== 1. HERO COMPONENT ==========
// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(false);

//       const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     whatsappUpdates: false,
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     alert("Thank you for your inquiry! We will get back to you shortly.")
//     setFormData({ name: "", phone: "", whatsappUpdates: false })
//   }


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
//       {/* ===== Hero / Contact Section ===== */}
//       <motion.section
//         className="relative flex min-h-screen items-center overflow-hidden bg-black"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.05]" />
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

//               <div className="space-y-4">
//                 <h1 className="text-5xl font-bold leading-tight text-white font-playfair lg:text-7xl">
//                   RRL Builders & <span className="text-gold-400 block">Developers</span>
//                 </h1>
//                 <p className="max-w-xl text-xl leading-relaxed text-gray-400">
//                   Pioneers of affordable luxury residential and commercial spaces in Bangalore.
//                   With our in-depth knowledge of the local market and industry trends, we offer
//                   valuable insights to help you make well-informed decisions.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//                 {[
//                   ["1000+", "Happy Families"],
//                   ["10", "Years Experience"],
//                   ["5+", "Projects Completed"],
//                   ["500+", "Trusted Partners"],
//                 ].map(([value, label], i) => (
//                   <div key={i} className="text-center">
//                     <div className="text-4xl font-bold text-gold-400">{value}</div>
//                     <div className="text-sm text-gray-400">{label}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col gap-4 sm:flex-row">
//                 <Button
//                   size="lg"
//                   className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//                 >
//                   Explore RRL Properties
//                   <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </Button>
//                 <div className="w-full max-w-xl">
//                   <div className="relative aspect-video w-full">
//                     <iframe
//                       src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1"
//                       title="Our Story Video"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       className="absolute top-0 left-0 w-full h-full rounded-md"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex items-center space-x-6 pt-4">
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
//                 <div className="h-6 w-px bg-gold-800" />
//                 <div className="flex items-center space-x-2">
//                   <Building className="h-5 w-5 text-gold-400" />
//                   <span className="text-sm font-medium text-gray-400">
//                     150+ Proud Employees
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content - Contact Form */}
//             <motion.div
//               className="flex justify-center lg:justify-end"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <Card className="w-full max-w-md rounded-2xl shadow-2xl p-8 bg-white/10 backdrop-blur-md border border-gold-800">
//                 <CardContent className="p-0">
//                   <h2 className="text-2xl font-bold text-white mb-6 text-center">
//                     Calculate Your EMI for Your Dream Property
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <Input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
//                     />
//                     <Input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone number"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
//                     />
//                     <div className="flex items-center space-x-2">
//                       <Checkbox
//                         id="whatsapp-updates"
//                         name="whatsappUpdates"
//                         checked={formData.whatsappUpdates}
//                         onCheckedChange={(checked) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             whatsappUpdates: !!checked,
//                           }))
//                         }
//                         className="border-gold-700 data-[state=checked]:bg-gold-500 data-[state=checked]:text-black"
//                       />
//                       <label
//                         htmlFor="whatsapp-updates"
//                         className="text-sm font-medium text-gray-300"
//                       >
//                         Send me updates on Whatsapp
//                       </label>
//                     </div>
//                     <Button
//                       type="submit"
//                       size="lg"
//                       className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg"
//                     >
//                       Calculate EMI Now
//                     </Button>
//                     <p className="text-xs text-gray-400 text-center mt-4">
//                       By submitting, you agree to the{" "}
//                       <Link href="/privacy" className="text-gold-400 hover:underline">
//                         privacy policy
//                       </Link>{" "}
//                       &{" "}
//                       <Link href="/terms" className="text-gold-400 hover:underline">
//                         terms
//                       </Link>
//                       .
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* ===== Awards Section ===== */}
//       <motion.section
//         className="py-20 bg-black text-white relative"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.05]" />
//         <div className="container mx-auto px-4 relative">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               {/* <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
//                 <Trophy className="h-4 w-4" />
//                 <span>RRL Awards</span>
//               </div> */}
//               <h1 className="text-4xl md:text-5xl font-playfair font-bold">
//                 Times Real Estate Icon Awards, 2025
//               </h1>
//               <p className="text-lg text-gray-400 leading-relaxed">
//                 RRL Groups has been honored with the prestigious award for Builder of the Year in
//                 the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
//                   ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
//                   ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
//                 ].map(([title, desc], i) => (
//                   <div key={i} className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <Star className="h-3 w-3 text-black" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-white">{title}</h3>
//                       <p className="text-gray-500 text-sm">{desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <Image
//                 src="/awardhome.jpeg"
//                 alt="RRL Awards Ceremony 2025"
//                 width={600}
//                 height={400}
//                 className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// };

// // ========== 2. AWARDS COMPONENT ==========
// // THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED VERSION FROM oldhome.tsx
// function Awards() {
//   const awardsData = [
//     {
//       year: "2025",
//       title: "Times Real Estate Icon Awards",
//       category: "Builder of the Year - Mid Segment Housing",
//       icon: Trophy,
//       color: "bg-gold-500",
//     },
//     {
//       year: "2024",
//       title: "Excellence in Amenities Premium",
//       category: "Mid-Segment Homes",
//       icon: Medal,
//       color: "bg-gray-700",
//     },
//     {
//       year: "2023",
//       title: "Global Real Estate Brand Awards",
//       category: "Affordability Category Winner",
//       icon: Award,
//       color: "bg-gold-500",
//     },
//     {
//       year: "2023",
//       title: "Property Award of the Year",
//       category: "Affordable and High-end Property",
//       icon: Star,
//       color: "bg-gray-700",
//     },
//   ]
//   return (
//     <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-24">
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-12 md:mb-16 text-center">
//           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//             <Trophy className="h-5 w-5" />
//             <span className="font-semibold">RRL Legacy of Achievements</span>
//           </div>

//           <h2 className="mb-6 text-3xl font-bold font-playfair sm:text-4xl lg:text-5xl">
//             Committed to Results: Highlights of Our
//             <span className="text-gold-400 block">Real Estate Success</span>
//           </h2>

//           <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
//             At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
//             commitment to delivering exceptional real estate services to our valued clients.
//           </p>
//         </div>

//         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
//           <div className="space-y-6">
//             {awardsData.map((award, index) => (
//               <div
//                 key={index}
//                 className="group flex min-h-32 rounded-2xl border border-gold-800 bg-gray-900/50 p-4 sm:p-6 shadow-lg transition-all duration-300 hover:border-gold-600 hover:shadow-2xl"
//               >
//                 <div className="flex w-full items-center space-x-4">
//                   <div
//                     className={`flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg ${award.color}`}
//                   >
//                     <award.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     {/* THIS IS THE KEY FIX: Stacks vertically on mobile, row on sm screens up */}
//                     <div className="mb-2 flex flex-col items-start sm:flex-row sm:items-center sm:space-x-3">
//                       <span className="text-xl font-bold text-gold-400">{award.year}</span>
//                       <div className="h-6 w-px bg-gold-800 hidden sm:block"></div>
//                       <span className="text-sm font-medium uppercase tracking-wide text-gray-500 line-clamp-2 sm:truncate">
//                         {award.category}
//                       </span>
//                     </div>

//                     <h3 className="line-clamp-2 mb-2 text-lg font-bold text-white transition-colors group-hover:text-gold-400 sm:text-xl">
//                       {award.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
//               alt="RRL Awards Ceremony"
//               width={600}
//               height={400}
//               className="h-auto w-full rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Other sections with similar responsive adjustments */}
//         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
//           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
//             <Image
//               src="/zee.jpeg"
//               alt="5th Global Real Estate Brand Awards 2023"
//               width={600}
//               height={400}
//               className="h-auto w-full rounded-2xl shadow-lg"
//             />
//           </div>
//           <div className="space-y-6 ">
//             <h3 className="text-2xl font-bold font-playfair md:text-3xl">
//               The Global Real Estate Brand Awards, 2023
//             </h3>
//             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
//               Bengaluru (Karnataka) [India], June 1: The Indian real estate industry's stars gathered at the
//               illustrious 5th edition of the Global Real Estate Brand Awards 2023. Held at Hotel Ritz Carlton,
//               Bengaluru...
//             </p>
// <Link href="/awards">
//   <Button
//     size="lg"
//     className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//   >
//     RRL RECOGNITION
//   </Button>
// </Link>
//           </div>
//         </div>

//         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
//           <div className="space-y-6 md:order-1 order-2">
//             <h3 className="text-2xl font-bold font-playfair md:text-3xl">Times Real Estate Icons Award, 2025</h3>
//             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
//               RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
//               ICON Awards, 2025.
//             </p>
//              <p className="text-base leading-relaxed text-gray-400 md:text-lg">
//               Thrilled to present award-winning projects after RRL Nature Wood, now its turn for RRL Palacio, powered by
//               RRL Builders and developers...
//             </p>
// <Link href="/awards">
//   <Button
//     size="lg"
//     className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//   >
//     RRL RECOGNITION
//   </Button>
// </Link>
//           </div>
//           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl md:order-2 order-1">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
//               alt="Times Real Estate Icons Award 2025"
//               width={600}
//               height={400}
//               className="h-auto w-full rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="mb-16 text-center">
//           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//             <Newspaper className="h-5 w-5" />
//             <span className="font-semibold">Featured In</span>
//           </div>
//           <h3 className="mb-8 text-2xl font-bold font-playfair md:text-3xl">
//             Our Achievements in the <span className="text-gold-400 block">News</span>
//           </h3>
//           <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
//             <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-qDHHyNYjDinRiMkHs0aLMdWqIsg1A3.jpeg"
//                 alt="ThePrint Media Coverage"
//                 width={500}
//                 height={300}
//                 className="h-auto w-full rounded-t-2xl object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="text-lg font-bold">ThePrint: Global Real Estate Brand Awards</h4>
//                 <p className="mt-2 text-sm text-gray-400">
//                   Coverage of the 5th edition of the Global Real Estate Brand Awards 2023.
//                 </p>
//               </div>
//             </div>
//             <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-a2nth21OR71xLxlXXXOwOeVuSveGXL.png"
//                 alt="Times of India Media Coverage"
//                 width={500}
//                 height={300}
//                 className="h-auto w-full rounded-t-2xl object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="text-lg font-bold">Times of India: Builder of the Year</h4>
//                 <p className="mt-2 text-sm text-gray-400">
//                   RRL Builders named Builder of the Year in Mid-Segment Housing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <Link href="/awards">
//             <Button size="lg" className="rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
//               Explore All RRL Awards
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
  
// // ========== 3. STATS COMPONENT ==========
// function Stats() {
//   const statsData = [
//     {
//       icon: Users,
//       value: "1000+",
//       label: "Happy Families",
//       description: "Satisfied customers",
//     },
//     {
//       icon: Building,
//       value: "5+",
//       label: "Projects Completed",
//       description: "Premium residential developments",
//     },
//     {
//       icon: Target,
//       value: "500+",
//       label: "Trusted Partners",
//       description: "Total construction area delivered",
//     },
//     {
//       icon: Award,
//       value: "150+",
//       label: "Proud Employees",
//       description: "Professional team members",
//     },
//   ]

//   return (
//     <motion.section 
//       className="py-24 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <motion.h2 
//             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           >
//             The Outstanding <span className="text-gold-600">Growth</span>
//           </motion.h2>
//           <motion.p 
//             className="mx-auto max-w-2xl text-xl text-gray-800"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
//           >
//             Celebrating Growth: Highlights of Our Accomplishments
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {statsData.map((stat, index) => (
//             <motion.div 
//               key={index} 
//               className="group"
//               variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
//             >
//               <div className="rounded-3xl border border-gold-300 bg-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
//                 <div className="text-center">
//                   <div className="mb-6">
//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-lg">
//                       <stat.icon className="h-10 w-10 text-black" />
//                     </div>
//                   </div>
//                   <div className="mb-2 text-5xl font-bold text-black">{stat.value}</div>
//                   <div className="mb-3 text-lg font-semibold text-gray-800">{stat.label}</div>
//                   <div className="text-sm leading-relaxed text-gray-600">{stat.description}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* QUOTE BOX ADDED FROM OLD FILE */}
//         <div className="mt-16 text-center">
//           <div className="mx-auto max-w-4xl rounded-3xl p-8 border border-gold-300 bg-white/50">
//             <p className="text-lg italic leading-relaxed text-gray-800">
//               "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
//               you make well-informed decisions. Let us build an affordable society together."
//             </p>
//             <div className="mt-4 font-semibold text-gold-600">- RRL Groups</div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// // ========== 4. PROPERTIES COMPONENT ==========
// function Properties() {
//   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

//   const residentialProperties = [
//     {
//       id: "palacio",
//       name: "RRL Palacio",
//       location: "Medahalli",
//       type: "Luxury Property",
//       status: "Ready to Move",
//       description: "Our newly constructed luxury property, situated in Medahalli",
//       image: "/LookProject2.jpeg",
//       features: ["Premium Amenities", "Furnished smart homes"],
//       rating: 4.8,
//       price: "₹45 Lakhs onwards",
//     },
//     {
//       id: "palm-altezze",
//       name: "RRL Palm Altezze",
//       location: "Varthur, Bangalore",
//       type: "Premium Property",
//       status: "Just Launched",
//       description: "Our latest premium property located at Varthur, Bangalore",
//       image: "/justlaunch.png",
//       features: ["High Rise Apartment", "Premium Apartment"],
//       rating: 4.9,
//       price: "₹38 Lakhs onwards",
//     },
//     {
//       id: "sequoia",
//       name: "RRL Sequoia",
//       location: "Varthur, Bangalore",
//       type: "Luxurious Villa",
//       status: "Coming Soon",
//       description: "Our latest luxurious Villa located at Varthur, Bangalore",
//       image: "/Sequoia.jpg",
//       features: ["4 BHK Villa", "Garden", "Premium Location"],
//       rating: 4.7,
//       price: "₹85 Lakhs onwards",
//     },
//     {
//       id: "nature-woods",
//       name: "RRL Nature Woods",
//       location: "Sarjapur",
//       type: "Premium Property",
//       status: "Completed",
//       description: "Our premium awarded property, situated in heart of Sarjapur",
//       image: "/LookProject5.jpeg",
//       features: ["Nature View", "High end award winning amenities"],
//       rating: 4.9,
//       price: "₹42 Lakhs onwards",
//     },
//   ]

//   const commercialProperties = [
//     {
//       id: "towers",
//       name: "RRL Towers",
//       location: "Sampige Jala, Sarjapur",
//       type: "Commercial Tower",
//       status: "Operational",
//       description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
//       image: "/Tower.jpeg",
//       features: ["Office Spaces", "Retail", "Corporate Hub"],
//       rating: 4.8,
//       price: "₹65 Lakhs onwards",
//     },
//     {
//       id: "complex",
//       name: "RRL Complex",
//       location: "South Bangalore",
//       type: "Commercial Building",
//       status: "Operational",
//       description: "Our 12th Commercial Building situated in South of Bangalore",
//       image: "/complex.jpg",
//       features: ["Multi-tenant", "Parking", "Modern Facilities"],
//       rating: 4.7,
//       price: "₹55 Lakhs onwards",
//     },
//     {
//       id: "oasis",
//       name: "RRL Oasis",
//       location: "Bangalore",
//       type: "Commercial Building",
//       status: "Upcoming Commercial Project",
//       description: "Upcoming residential project with modern amenities",
//       image: "/Oasis.jpg",
//       features: ["1 BHK", "2 BHK", "Swimming Pool"],
//       rating: 4.6,
//       price: "₹28 Lakhs onwards",
//     },
//   ]
//   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties
//   const displayProperties = currentProperties.slice(0, 4)

//   return (
//     <motion.section 
//       className="bg-black py-24"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <motion.div 
//             className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Home className="h-5 w-5" />
//             <span className="font-semibold">Find Your Dream Property</span>
//           </motion.div>

//           <motion.h2 
//             className="mb-6 text-4xl font-bold text-white font-playfair lg:text-5xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             RRL Premium <span className="text-gold-400">Properties</span>
//           </motion.h2>

//           <motion.p 
//             className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms to breathtaking views, we provide a
//             comprehensive overview of what each property has to offer.
//           </motion.p>

//           <div className="mb-8 inline-flex items-center rounded-full bg-gray-900 p-1">
//             <button
//               onClick={() => setActiveTab("residential")}
//               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                 activeTab === "residential" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <Home className="h-4 w-4" />
//               <span>Residential</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("commercial")}
//               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                 activeTab === "commercial" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <Building2 className="h-4 w-4" />
//               <span>Commercial</span>
//             </button>
//           </div>
//         </div>

//         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {displayProperties.map((property, index) => (
//             <motion.div
//               key={property.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Link href={`/projects/${property.id}`} className="group cursor-pointer">
//                 <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-900 border border-gold-800 transition-all duration-300 hover:border-gold-600 hover:shadow-2xl hover:shadow-gold-800/40">
//                 <div className="relative overflow-hidden h-56">
//                   <Image
//                     src={property.image || "/placeholder.svg"}
//                     alt={property.name}
//                     width={400}
//                     height={300}
//                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute left-4 top-4">
//                     <div
//                       className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                         property.status === "Award Winner" ? "bg-gold-500 text-black" :
//                         property.status === "Ready to Move" || property.status === "Operational" ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"
//                       }`}
//                     >
//                       {property.status}
//                     </div>
//                   </div>
//                   <div className="absolute right-4 top-4 rounded-full px-2 py-1 bg-black/50 backdrop-blur-sm">
//                     <div className="flex items-center space-x-1">
//                       <Star className="h-3 w-3 fill-gold-400 text-gold-400"/>
//                       <span className="text-xs font-semibold text-white">{property.rating}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col h-[calc(100%-14rem)] p-6">
//                   <h3 className="text-xl font-bold text-white group-hover:text-gold-400">{property.name}</h3>
//                   <div className="mt-1 flex items-center space-x-2 text-gray-500">
//                     <MapPin className="h-4 w-4 flex-shrink-0" />
//                     <span className="line-clamp-1 text-sm">{property.location}</span>
//                   </div>
//                   <p className="line-clamp-2 my-4 text-sm leading-relaxed text-gray-400">
//                     {property.description}
//                   </p>
//                   <div className="mt-auto flex items-center justify-between border-t border-gold-800 pt-4">
//                     {/* <span className="text-lg font-bold text-gold-400">{property.price}</span> */}
//                     {/* <ArrowRight className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-1" /> */}
//                   </div>
//                 </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* SUMMARY STATS & BUTTON ADDED FROM OLD FILE */}
//         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
//           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
//             <div className="mb-2 text-3xl font-bold text-gold-400">{activeTab === "residential" ? "5+" : "3+"}</div>
//             <div className="text-gray-400">
//               {activeTab === "residential" ? "Residential Projects" : "Commercial Projects"}
//             </div>
//           </div>
//           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
//             <div className="mb-2 text-3xl font-bold text-gold-400">1000+</div>
//             <div className="text-gray-400">Happy Customers</div>
//           </div>
//           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
//             <div className="mb-2 text-3xl font-bold text-gold-400">999+</div>
//             <div className="text-gray-400">Sq Ft Delivered</div>
//           </div>
//         </div>

//         <div className="text-center">
//           <Link href="/projects">
//             <Button
//               size="lg"
//               className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//             >
//               Explore More {activeTab === "residential" ? "Residential" : "Commercial"} Properties
//               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// // ========== 5. TESTIMONIALS COMPONENT (MODIFIED) ==========
// function Testimonials() {
//     const testimonialData = [
//     {
//       type: "text",
//       name: "Rita Chauhan",
//       role: "Happy Customer",
//       location: "Sarjapur, Bengaluru",
//       rating: 5,
//       testimonial:
//         "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
//     },
//     {
//       type: "text",
//       name: "Rajesh Kumar",
//       role: "Property Investor",
//       location: "Varthur, Bengaluru",
//       rating: 5,
//       testimonial:
//         "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
//     },
//     {
//       type: "video",
//       name: "VideoTestimonial1",
//       videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=1&mute=1&loop=1&playlist=VPPeIBhPXSc&controls=0",
//     },
//     {
//       type: "text",
//       name: "Priya Sharma",
//       role: "Homeowner",
//       location: "Medahalli, Bengaluru",
//       rating: 5,
//       testimonial:
//         "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
//     },
//     {
//       type: "text",
//       name: "Suman Narayan",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat.Even budget friendly too.I highly recommend RRL for interior designing.",
//     },
//     {
//       type: "video",
//       name: "VideoTestimonial2",
//       videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=1&mute=1&loop=1&playlist=-IcK_Ac0dVQ&controls=0",
//     },
//     {
//       type: "text",
//       name: "Subhash S",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
//     },
//     {
//       type: "text",
//       name: "Neelima Maryam",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial: "Very happy with the designs and budget.",
//     },
//     {
//       type: "text",
//       name: "Attili Nikhil",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Had a great experience with RRL. They execute what we tell them.I highly recommend to their 3D designs. They respond to us with great patience and even their price is very reasonable when compared with other interior designers quotations. And when it comes to green he is very nice guy who responds very well and gives us great designs and ideas. So I strongly recommend to go with RRL.",
//     },
//     {
//       type: "text",
//       name: "Bipul Kumar Singh",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "We are very happy with the service provided by RRL. They handles all the requirements very carefully starting from the inception the model to delivering the good ideas for my flat with lots of transparency in the material.I would highly recommend RRL.",
//     },
//     {
//       type: "text",
//       name: "Devam Rajaguru",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial: "We are very happy about the work, outcome is very nice.Thank you so much RRL team for turning this so well.",
//     },
//     {
//       type: "text",
//       name: "Raaj Kumar",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "I had an exceptional experience with RRL. From layout analysis to execution, every aspect of their work was impeccable. Mr. Ram and Mr. Lakshman ensured the project was delivered on time and within the budget, paying close attention to detail. Despite being abroad, I felt reassured by Mr. Ram's regular visits and dedication to smooth project progress. For those seeking top-notch interior designs, I highly recommend RRL. Thank you for the fantastic work!",
//     },
//   ]

//   return (
//     <motion.section 
//       className="py-24 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <motion.h2 
//             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Hear From Our <span className="text-gold-600">Clients</span>
//           </motion.h2>
//           <motion.p 
//             className="mx-auto max-w-2xl text-xl text-gray-800"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Beyond Real Estate: Personal Stories of Satisfaction
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {testimonialData.map((testimonial, index) => {
//             if (testimonial.type === 'video') {
//               return (
//                 <motion.div
//                   key={testimonial.name}
//                   className="rounded-2xl bg-black overflow-hidden shadow-lg"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <div className="relative w-full aspect-video">
//                     <iframe
//                       src={testimonial.videoUrl}
//                       title={testimonial.name}
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       allowFullScreen
//                       className="absolute top-0 left-0 w-full h-full"
//                     ></iframe>
//                   </div>
//                 </motion.div>
//               )
//             }
            
//             // Text testimonial card
//             return (
//               <motion.div
//                 key={testimonial.name}
//                 className="rounded-2xl bg-white p-8 shadow-lg"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="mb-4 flex items-center space-x-1">
//                   {testimonial.rating && [...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
//                   ))}
//                 </div>
//                 <blockquote className="line-clamp-5 mb-6 italic leading-relaxed text-gray-700">
//                   "{testimonial.testimonial}"
//                 </blockquote>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500">
//                     <span className="text-base font-bold text-black">
//                       {testimonial.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-black">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600">{testimonial.role}</div>
//                     <div className="text-xs text-gray-500">{testimonial.location}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </motion.section>
//   )
// }


// // ========== 6. LEADERSHIP COMPONENT ==========
// function Leadership() {
//   return (
//     <motion.section 
//       className="relative overflow-hidden bg-light-black py-24"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//       <div className="container relative mx-auto px-4">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="space-y-4">
//                 <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//                     <Users className="h-5 w-5" />
//                     <span className="font-semibold">Leadership Excellence</span>
//                 </div>

//                 <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
//                     Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
//                 </h2>

//                 <p className="text-lg leading-relaxed text-gray-400">
//                   When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
//                   Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
//                 </p>
//             </div>
            
//             {/* LEADERSHIP HIGHLIGHTS ADDED FROM OLD FILE */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Award className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">10+ Years Experience</h3>
//                 <p className="text-sm text-gray-400">
//                   Exceptional business acumen and established leadership
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Target className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">Market Understanding</h3>
//                 <p className="text-sm text-gray-400">
//                   Deep understanding of market trends and industry dynamics
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Lightbulb className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">Innovation Focus</h3>
//                 <p className="text-sm text-gray-400">
//                   Innovative approach to real estate development
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Users className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">Customer Centric</h3>
//                 <p className="text-sm text-gray-400">
//                   Dedicated to providing luxurious living spaces
//                 </p>
//               </div>
//             </div>

//             {/* <Button className="rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
//               Read About RRL
//             </Button> */}
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
//                   <p className="text-sm text-gray-400">Co-Founder & Director</p>
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
//                   <p className="text-sm text-gray-400">Co-Founder & Director</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// // ========== 7. PARTNERS COMPONENT ==========
// // FULL PARTNER LISTS RESTORED
// function PartnersSection() {
//     const bankingPartners = [
//       { name: "SBI", src: "/logos/SBI-Logo.png" },
//       { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
//       { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
//       { name: "Union Bank", src: "/logos/union-bank.png" },
//       { name: "ICICI Bank", src: "/logos/icici-bank.png" },
//       { name: "Axis Bank", src: "/logos/axis-bank.svg" },
//       { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
//       { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
//       { name: "TATA Capital", src: "/logos/tata-capital.png" },
//     ]
  
//     const trustedBrands = [
//       { name: "Kerovit", src: "/logos/kerovit.png" },
//       { name: "Schneider", src: "/logos/schneider.png" },
//       { name: "One Touch", src: "/logos/one-touch.png" },
//       { name: "Designhive", src: "/logos/Designhive.png" },
//       { name: "Polycab", src: "/logos/polycab.png" },
//       { name: "SVT", src: "/logos/svt.png" },
//       { name: "Shivam Enterprise", src: "/logos/shivam.png" },
//       { name: "Nippon", src: "/logos/nippon.png" },
//       { name: "Fenstect", src: "/logos/fenstect.png" },
//       { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
//       { name: "Philips", src: "/logos/philips.png" },
//       { name: "Wipro", src: "/logos/wipro.jpg" },
//     ]
  
//     const marketingPartners = [
//       { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
//       { name: "Housing.com", src: "/logos/housing-com.png" },
//       { name: "Marketly", src: "/logos/marketly.jpg" },
//       { name: "99acres", src: "/logos/99acres.png" },
//     ]
  
//     const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
//     const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
//     const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]
  
//     return (
//       <motion.section
//         className="overflow-hidden py-20 bg-light-gold"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="mb-16 text-center">
//             <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">Our Valued <span className="text-gold-600">Partners</span></h1>
//             <p className="mx-auto max-w-2xl text-xl text-gray-800">
//               Collaborating with industry leaders to bring you the best in real estate.
//             </p>
//           </div>
  
//           <div className="space-y-16">
//             <div>
//               <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
//               <div className="relative w-full overflow-hidden py-4">
//                 <motion.div
//                   className="flex flex-nowrap"
//                   animate={{ x: ["0%", `-${100 / 2 * bankingPartners.length / 6}%`] }}
//                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
//                 >
//                   {duplicatedBankingPartners.map((partner, index) => (
//                     <div key={`banking-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
//                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                         <Image
//                           src={partner.src || "/placeholder.svg"}
//                           alt={partner.name}
//                           width={120}
//                           height={60}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//             <div>
//               <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
//               <div className="relative w-full overflow-hidden py-4">
//                 <motion.div
//                   className="flex flex-nowrap"
//                   animate={{ x: [`-${100 / 2 * trustedBrands.length / 6}%`, "0%"] }}
//                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
//                 >
//                   {duplicatedTrustedBrands.map((brand, index) => (
//                     <div key={`trusted-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
//                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                         <Image
//                           src={brand.src || "/placeholder.svg"}
//                           alt={brand.name}
//                           width={120}
//                           height={60}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//             {/* MARKETING PARTNERS SECTION ADDED */}
//             <div>
//               <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
//               <div className="relative w-full overflow-hidden py-4">
//                 <motion.div
//                   className="flex flex-nowrap"
//                   animate={{ x: ["0%", `-${100 / 2 * marketingPartners.length / 6}%`] }}
//                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
//                 >
//                   {duplicatedMarketingPartners.map((partner, index) => (
//                     <div key={`marketing-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
//                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                         <Image
//                           src={partner.src || "/placeholder.svg"}
//                           alt={partner.name}
//                           width={120}
//                           height={60}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     )
//   }
// // ========== 8. FAQ COMPONENT ==========
// // THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED, TABBED VERSION
// interface FAQSectionProps {
//     title?: string
//     subtitle?: string
//     defaultLocation?: "sarjapur" | "varthur"
// }
// function FAQSection({
//     title = "Frequently Asked Questions",
//     subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
//     defaultLocation = "sarjapur",
//   }: FAQSectionProps) {
//     const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
//     const [openItems, setOpenItems] = useState<string[]>([])
  
//     const sarjapurFAQs = [
//       {
//         question: "What is the price of a 2 BHK flat in Sarjapur?",
//         answer: "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
//       },
//       {
//         question: "Where can I buy a 2 BHK flat in Bangalore?",
//         answer: "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
//       },
//       {
//         question: "Are there apartments in Sarjapur Road for sale?",
//         answer: "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
//       },
//       {
//         question: "What makes Luxury Apartments in Sarjapur Road special?",
//         answer: "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
//       },
//     ]
  
//     const varthurFAQs = [
//       {
//         question: "Is Varthur a good area to live in Bangalore?",
//         answer: "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
//       },
//       {
//         question: "What is the price of a flat in Varthur?",
//         answer: "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
//       },
//       {
//         question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
//         answer: "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
//       },
//       {
//         question: "What are the options for apartments in Varthur?",
//         answer: "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
//       },
//     ]
  
//     const toggleItem = (id: string) => {
//       setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
//     }
  
//     const handleLocationChange = (location: "sarjapur" | "varthur") => {
//       setActiveLocation(location)
//       setOpenItems([])
//     }
  
//     const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
//     const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"
  
//     return (
//       <section className="bg-black py-20 text-white ">
//         <div className="container mx-auto px-4 ">
//           <div className="mb-16 text-center ">
//             <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
//               <HelpCircle className="h-5 w-5" />
//               <span className="font-semibold">FAQ</span>
//             </div>
  
//             <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>
  
//             <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>
  
//             <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
//               <button
//                 onClick={() => handleLocationChange("sarjapur")}
//                 className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                   activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 <MapPin className="h-4 w-4" />
//                 <span>Sarjapur</span>
//               </button>
//               <button
//                 onClick={() => handleLocationChange("varthur")}
//                 className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                   activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 <MapPin className="h-4 w-4" />
//                 <span>Varthur</span>
//               </button>
//             </div>
//           </div>
  
//           <div className="mx-auto max-w-4xl">
//             <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>
  
//             <div className="space-y-4">
//               {currentFAQs.map((faq, index) => {
//                 const itemId = `${activeLocation}-${index}`
//                 const isOpen = openItems.includes(itemId)
  
//                 return (
//                   <div
//                     key={itemId}
//                     className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
//                   >
//                     <button
//                       onClick={() => toggleItem(itemId)}
//                       className="flex w-full items-center justify-between px-8 py-6 text-left"
//                     >
//                       <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
//                       <div className="flex-shrink-0">
//                         {isOpen ? (
//                           <ChevronUp className="h-5 w-5 text-gold-400" />
//                         ) : (
//                           <ChevronDown className="h-5 w-5 text-gray-500" />
//                         )}
//                       </div>
//                     </button>
  
//                     <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
//                       <div className="px-8 pb-6">
//                         <p className="leading-relaxed text-gray-400">{faq.answer}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
  
//           <div className="mt-16 text-center">
//             <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
//               <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
//               <p className="mb-6 text-gray-400">
//                 Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
//               </p>
//               <div className="flex flex-col justify-center gap-4 sm:flex-row">
//                 <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600">
//                   Contact Our Experts
//                 </a>
//                 <a href="tel:+91-8494966966" className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20">
//                   Call: +91-8494966966
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

// // ========== 9. CALL TO ACTION COMPONENT ==========
// // REPLACED WITH THE FULL VERSION FROM oldhome.tsx
// function CallToAction() {
//     const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
  
//     const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault()
//       console.log("Form submitted:", formData)
//     }
  
//     return (
//       <section className="relative overflow-hidden bg-light-gold py-24 text-black">
//         <div className="container relative mx-auto px-4">
//           <div className="mb-16 text-center">
//             <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
//             <p className="mx-auto max-w-2xl text-xl text-gray-800">
//               Contact Us: Let's Start Your Real Estate Journey Together
//             </p>
//           </div>
  
//           <div className="mx-auto max-w-6xl">
//             <div className="grid items-start gap-16 lg:grid-cols-2">
//               <motion.div 
//                 className="rounded-3xl p-8 bg-white shadow-2xl"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid gap-4 md:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
//                       <Input
//                         placeholder="Your name"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         className="bg-gray-100 focus:border-gold-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
//                       <Input
//                         placeholder="Your phone number"
//                         value={formData.contact}
//                         onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
//                         className="bg-gray-100 focus:border-gold-500"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
//                     <Select
//                       value={formData.property}
//                       onValueChange={(value) => setFormData({ ...formData, property: value })}
//                     >
//                       <SelectTrigger className="bg-gray-100">
//                         <SelectValue placeholder="Select a property" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="palacio">RRL Palacio</SelectItem>
//                         <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
//                         <SelectItem value="sequoia">RRL Sequoia</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
//                     <Textarea
//                       placeholder="Your query in brief"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       className="min-h-[120px] bg-gray-100 focus:border-gold-500"
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//                   >
//                     Submit Request
//                     <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </form>
//               </motion.div>
//               <motion.div 
//                 className="space-y-8"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <div>
//                   <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
//                   <p className="mb-8 leading-relaxed text-gray-700">
//                     Take the first step towards your real estate goals. Contact our expert team for personalised
//                     assistance.
//                   </p>
//                 </div>
//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                       <Phone className="h-6 w-6 text-black" />
//                     </div>
//                     <div>
//                       <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
//                       <p className="text-gray-700">+91-8494966966</p>
//                       {/* <p className="text-gray-700">+91-73378 16991</p> */}
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                       <Mail className="h-6 w-6 text-black" />
//                     </div>
//                     <div>
//                       <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
//                       <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                       <MapPin className="h-6 w-6 text-black" />
//                     </div>
//                     <div>
//                       <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
//                       <p className="text-gray-700">
//                         RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

// // ========== FINAL PAGE EXPORT ==========
// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <PartnersSection />
//       <Awards />
//       <Leadership />
//       <Stats />
//       <Properties />
//       <Testimonials />
//       <FAQSection />
//       <CallToAction />
//     </>
//   )
// }

// "use client"

// import { useState, useEffect } from "react"
// import type React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion, Variants, easeOut } from "framer-motion"

// // UI Components (assuming these are in the specified paths)
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { cn } from "@/lib/utils"

// // Icons from lucide-react
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
// } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"

// // ========== 1. HERO COMPONENT ==========
// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(false);

//       const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     whatsappUpdates: false,
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     alert("Thank you for your inquiry! We will get back to you shortly.")
//     setFormData({ name: "", phone: "", whatsappUpdates: false })
//   }


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
//       {/* ===== Hero / Contact Section ===== */}
//       <motion.section
//         className="relative flex min-h-screen items-center overflow-hidden bg-black"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.05]" />
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

//               <div className="space-y-4">
//                 <h1 className="text-5xl font-bold leading-tight text-white font-playfair lg:text-7xl">
//                   RRL Builders & <span className="text-gold-400 block">Developers</span>
//                 </h1>
//                 <p className="max-w-xl text-xl leading-relaxed text-gray-400">
//                   Pioneers of affordable luxury residential and commercial spaces in Bangalore.
//                   With our in-depth knowledge of the local market and industry trends, we offer
//                   valuable insights to help you make well-informed decisions.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//                 {[
//                   ["1000+", "Happy Families"],
//                   ["10", "Years Experience"],
//                   ["5+", "Projects Completed"],
//                   ["500+", "Trusted Partners"],
//                 ].map(([value, label], i) => (
//                   <div key={i} className="text-center">
//                     <div className="text-4xl font-bold text-gold-400">{value}</div>
//                     <div className="text-sm text-gray-400">{label}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col gap-4 sm:flex-row">
//                 <Button
//                   size="lg"
//                   className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//                 >
//                   Explore RRL Properties
//                   <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </Button>
//                 <div className="w-full max-w-xl">
//       {!isPlaying ? (
//         <Button
//           size="lg"
//           variant="outline"
//           className="group rounded-full border-2 border-gold-700 bg-transparent px-8 py-4 font-semibold text-gold-300 hover:bg-gold-900/20"
//           onClick={() => setIsPlaying(true)}
//         >
//           <Play className="mr-2 h-5 w-5" />
//           Watch Awrds
//         </Button>
//       ) : (
//         <div className="relative aspect-video w-full">
//           <iframe
//             src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1"
//             title="Our Story Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="absolute top-0 left-0 w-full h-full rounded-md"
//           ></iframe>
//         </div>
//       )}
//     </div>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex items-center space-x-6 pt-4">
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
//                 <div className="h-6 w-px bg-gold-800" />
//                 <div className="flex items-center space-x-2">
//                   <Building className="h-5 w-5 text-gold-400" />
//                   <span className="text-sm font-medium text-gray-400">
//                     150+ Proud Employees
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content - Contact Form */}
//             <motion.div
//               className="flex justify-center lg:justify-end"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <Card className="w-full max-w-md rounded-2xl shadow-2xl p-8 bg-white/10 backdrop-blur-md border border-gold-800">
//                 <CardContent className="p-0">
//                   <h2 className="text-2xl font-bold text-white mb-6 text-center">
//                     Get a Free Quote for Your Dream Property
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <Input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
//                     />
//                     <Input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone number"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
//                     />
//                     <div className="flex items-center space-x-2">
//                       <Checkbox
//                         id="whatsapp-updates"
//                         name="whatsappUpdates"
//                         checked={formData.whatsappUpdates}
//                         onCheckedChange={(checked) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             whatsappUpdates: !!checked,
//                           }))
//                         }
//                         className="border-gold-700 data-[state=checked]:bg-gold-500 data-[state=checked]:text-black"
//                       />
//                       <label
//                         htmlFor="whatsapp-updates"
//                         className="text-sm font-medium text-gray-300"
//                       >
//                         Send me updates on Whatsapp
//                       </label>
//                     </div>
//                     <Button
//                       type="submit"
//                       size="lg"
//                       className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg"
//                     >
//                       Request Call Back
//                     </Button>
//                     <p className="text-xs text-gray-400 text-center mt-4">
//                       By submitting, you agree to the{" "}
//                       <Link href="/privacy" className="text-gold-400 hover:underline">
//                         privacy policy
//                       </Link>{" "}
//                       &{" "}
//                       <Link href="/terms" className="text-gold-400 hover:underline">
//                         terms
//                       </Link>
//                       .
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* ===== Awards Section ===== */}
//       <motion.section
//         className="py-20 bg-black text-white relative"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.05]" />
//         <div className="container mx-auto px-4 relative">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               {/* <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
//                 <Trophy className="h-4 w-4" />
//                 <span>RRL Awards</span>
//               </div> */}
//               <h1 className="text-4xl md:text-5xl font-playfair font-bold">
//                 Times Real Estate Icon Awards, 2025
//               </h1>
//               <p className="text-lg text-gray-400 leading-relaxed">
//                 RRL Groups has been honored with the prestigious award for Builder of the Year in
//                 the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
//                   ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
//                   ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
//                 ].map(([title, desc], i) => (
//                   <div key={i} className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <Star className="h-3 w-3 text-black" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-white">{title}</h3>
//                       <p className="text-gray-500 text-sm">{desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <Image
//                 src="/awardhome.jpeg"
//                 alt="RRL Awards Ceremony 2025"
//                 width={600}
//                 height={400}
//                 className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// };

// // ========== 2. AWARDS COMPONENT ==========
// // THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED VERSION FROM oldhome.tsx
// function Awards() {
//   const awardsData = [
//     {
//       year: "2025",
//       title: "Times Real Estate Icon Awards",
//       category: "Builder of the Year - Mid Segment Housing",
//       icon: Trophy,
//       color: "bg-gold-500",
//     },
//     {
//       year: "2024",
//       title: "Excellence in Amenities Premium",
//       category: "Mid-Segment Homes",
//       icon: Medal,
//       color: "bg-gray-700",
//     },
//     {
//       year: "2023",
//       title: "Global Real Estate Brand Awards",
//       category: "Affordability Category Winner",
//       icon: Award,
//       color: "bg-gold-500",
//     },
//     {
//       year: "2023",
//       title: "Property Award of the Year",
//       category: "Affordable and High-end Property",
//       icon: Star,
//       color: "bg-gray-700",
//     },
//   ]
//   return (
//     <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-24">
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-12 md:mb-16 text-center">
//           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//             <Trophy className="h-5 w-5" />
//             <span className="font-semibold">RRL Legacy of Achievements</span>
//           </div>

//           <h2 className="mb-6 text-3xl font-bold font-playfair sm:text-4xl lg:text-5xl">
//             Committed to Results: Highlights of Our
//             <span className="text-gold-400 block">Real Estate Success</span>
//           </h2>

//           <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
//             At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
//             commitment to delivering exceptional real estate services to our valued clients.
//           </p>
//         </div>

//         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
//           <div className="space-y-6">
//             {awardsData.map((award, index) => (
//               <div
//                 key={index}
//                 className="group flex min-h-32 rounded-2xl border border-gold-800 bg-gray-900/50 p-4 sm:p-6 shadow-lg transition-all duration-300 hover:border-gold-600 hover:shadow-2xl"
//               >
//                 <div className="flex w-full items-center space-x-4">
//                   <div
//                     className={`flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg ${award.color}`}
//                   >
//                     <award.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     {/* THIS IS THE KEY FIX: Stacks vertically on mobile, row on sm screens up */}
//                     <div className="mb-2 flex flex-col items-start sm:flex-row sm:items-center sm:space-x-3">
//                       <span className="text-xl font-bold text-gold-400">{award.year}</span>
//                       <div className="h-6 w-px bg-gold-800 hidden sm:block"></div>
//                       <span className="text-sm font-medium uppercase tracking-wide text-gray-500 line-clamp-2 sm:truncate">
//                         {award.category}
//                       </span>
//                     </div>

//                     <h3 className="line-clamp-2 mb-2 text-lg font-bold text-white transition-colors group-hover:text-gold-400 sm:text-xl">
//                       {award.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
//               alt="RRL Awards Ceremony"
//               width={600}
//               height={400}
//               className="h-auto w-full rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Other sections with similar responsive adjustments */}
//         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
//           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
//             <Image
//               src="/zee.jpeg"
//               alt="5th Global Real Estate Brand Awards 2023"
//               width={600}
//               height={400}
//               className="h-auto w-full rounded-2xl shadow-lg"
//             />
//           </div>
//           <div className="space-y-6 ">
//             <h3 className="text-2xl font-bold font-playfair md:text-3xl">
//               The Global Real Estate Brand Awards, 2023
//             </h3>
//             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
//               Bengaluru (Karnataka) [India], June 1: The Indian real estate industry's stars gathered at the
//               illustrious 5th edition of the Global Real Estate Brand Awards 2023. Held at Hotel Ritz Carlton,
//               Bengaluru...
//             </p>
// <Link href="/awards">
//   <Button
//     size="lg"
//     className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//   >
//     RRL RECOGNITION
//   </Button>
// </Link>
//           </div>
//         </div>

//         <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
//           <div className="space-y-6 md:order-1 order-2">
//             <h3 className="text-2xl font-bold font-playfair md:text-3xl">Times Real Estate Icons Award, 2025</h3>
//             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
//               RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
//               ICON Awards, 2025.
//             </p>
//              <p className="text-base leading-relaxed text-gray-400 md:text-lg">
//               Thrilled to present award-winning projects after RRL Nature Wood, now its turn for RRL Palacio, powered by
//               RRL Builders and developers...
//             </p>
// <Link href="/awards">
//   <Button
//     size="lg"
//     className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//   >
//     RRL RECOGNITION
//   </Button>
// </Link>
//           </div>
//           <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl md:order-2 order-1">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
//               alt="Times Real Estate Icons Award 2025"
//               width={600}
//               height={400}
//               className="h-auto w-full rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="mb-16 text-center">
//           <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//             <Newspaper className="h-5 w-5" />
//             <span className="font-semibold">Featured In</span>
//           </div>
//           <h3 className="mb-8 text-2xl font-bold font-playfair md:text-3xl">
//             Our Achievements in the <span className="text-gold-400 block">News</span>
//           </h3>
//           <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
//             <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-qDHHyNYjDinRiMkHs0aLMdWqIsg1A3.jpeg"
//                 alt="ThePrint Media Coverage"
//                 width={500}
//                 height={300}
//                 className="h-auto w-full rounded-t-2xl object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="text-lg font-bold">ThePrint: Global Real Estate Brand Awards</h4>
//                 <p className="mt-2 text-sm text-gray-400">
//                   Coverage of the 5th edition of the Global Real Estate Brand Awards 2023.
//                 </p>
//               </div>
//             </div>
//             <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-a2nth21OR71xLxlXXXOwOeVuSveGXL.png"
//                 alt="Times of India Media Coverage"
//                 width={500}
//                 height={300}
//                 className="h-auto w-full rounded-t-2xl object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="text-lg font-bold">Times of India: Builder of the Year</h4>
//                 <p className="mt-2 text-sm text-gray-400">
//                   RRL Builders named Builder of the Year in Mid-Segment Housing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <Link href="/awards">
//             <Button size="lg" className="rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
//               Explore All RRL Awards
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
  
// // ========== 3. STATS COMPONENT ==========
// function Stats() {
//   const statsData = [
//     {
//       icon: Users,
//       value: "1000+",
//       label: "Happy Families",
//       description: "Satisfied customers",
//     },
//     {
//       icon: Building,
//       value: "5+",
//       label: "Projects Completed",
//       description: "Premium residential developments",
//     },
//     {
//       icon: Target,
//       value: "500+",
//       label: "Trusted Partners",
//       description: "Total construction area delivered",
//     },
//     {
//       icon: Award,
//       value: "150+",
//       label: "Proud Employees",
//       description: "Professional team members",
//     },
//   ]

//   return (
//     <motion.section 
//       className="py-24 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <motion.h2 
//             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           >
//             The Outstanding <span className="text-gold-600">Growth</span>
//           </motion.h2>
//           <motion.p 
//             className="mx-auto max-w-2xl text-xl text-gray-800"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
//           >
//             Celebrating Growth: Highlights of Our Accomplishments
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {statsData.map((stat, index) => (
//             <motion.div 
//               key={index} 
//               className="group"
//               variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
//             >
//               <div className="rounded-3xl border border-gold-300 bg-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
//                 <div className="text-center">
//                   <div className="mb-6">
//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-lg">
//                       <stat.icon className="h-10 w-10 text-black" />
//                     </div>
//                   </div>
//                   <div className="mb-2 text-5xl font-bold text-black">{stat.value}</div>
//                   <div className="mb-3 text-lg font-semibold text-gray-800">{stat.label}</div>
//                   <div className="text-sm leading-relaxed text-gray-600">{stat.description}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* QUOTE BOX ADDED FROM OLD FILE */}
//         <div className="mt-16 text-center">
//           <div className="mx-auto max-w-4xl rounded-3xl p-8 border border-gold-300 bg-white/50">
//             <p className="text-lg italic leading-relaxed text-gray-800">
//               "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
//               you make well-informed decisions. Let us build an affordable society together."
//             </p>
//             <div className="mt-4 font-semibold text-gold-600">- RRL Groups</div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// // ========== 4. PROPERTIES COMPONENT ==========
// function Properties() {
//   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

//   const residentialProperties = [
//     {
//       id: "palacio",
//       name: "RRL Palacio",
//       location: "Medahalli",
//       type: "Luxury Property",
//       status: "Ready to Move",
//       description: "Our newly constructed luxury property, situated in Medahalli",
//       image: "/LookProject2.jpeg",
//       features: ["Premium Amenities", "Furnished smart homes"],
//       rating: 4.8,
//       price: "₹45 Lakhs onwards",
//     },
//     {
//       id: "palm-altezze",
//       name: "RRL Palm Altezze",
//       location: "Varthur, Bangalore",
//       type: "Premium Property",
//       status: "Just Launched",
//       description: "Our latest premium property located at Varthur, Bangalore",
//       image: "/justlaunch.png",
//       features: ["High Rise Apartment", "Premium Apartment"],
//       rating: 4.9,
//       price: "₹38 Lakhs onwards",
//     },
//     {
//       id: "sequoia",
//       name: "RRL Sequoia",
//       location: "Varthur, Bangalore",
//       type: "Luxurious Villa",
//       status: "Coming Soon",
//       description: "Our latest luxurious Villa located at Varthur, Bangalore",
//       image: "/Sequoia.jpg",
//       features: ["4 BHK Villa", "Garden", "Premium Location"],
//       rating: 4.7,
//       price: "₹85 Lakhs onwards",
//     },
//     {
//       id: "nature-woods",
//       name: "RRL Nature Woods",
//       location: "Sarjapur",
//       type: "Premium Property",
//       status: "Completed",
//       description: "Our premium awarded property, situated in heart of Sarjapur",
//       image: "/LookProject5.jpeg",
//       features: ["Nature View", "High end award winning amenities"],
//       rating: 4.9,
//       price: "₹42 Lakhs onwards",
//     },
//   ]

//   const commercialProperties = [
//     {
//       id: "towers",
//       name: "RRL Towers",
//       location: "Sampige Jala, Sarjapur",
//       type: "Commercial Tower",
//       status: "Operational",
//       description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
//       image: "/Tower.jpeg",
//       features: ["Office Spaces", "Retail", "Corporate Hub"],
//       rating: 4.8,
//       price: "₹65 Lakhs onwards",
//     },
//     {
//       id: "complex",
//       name: "RRL Complex",
//       location: "South Bangalore",
//       type: "Commercial Building",
//       status: "Operational",
//       description: "Our 12th Commercial Building situated in South of Bangalore",
//       image: "/complex.jpg",
//       features: ["Multi-tenant", "Parking", "Modern Facilities"],
//       rating: 4.7,
//       price: "₹55 Lakhs onwards",
//     },
//     {
//       id: "oasis",
//       name: "RRL Oasis",
//       location: "Bangalore",
//       type: "Commercial Building",
//       status: "Upcoming Commercial Project",
//       description: "Upcoming residential project with modern amenities",
//       image: "/Oasis.jpg",
//       features: ["1 BHK", "2 BHK", "Swimming Pool"],
//       rating: 4.6,
//       price: "₹28 Lakhs onwards",
//     },
//   ]
//   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties
//   const displayProperties = currentProperties.slice(0, 4)

//   return (
//     <motion.section 
//       className="bg-black py-24"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <motion.div 
//             className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Home className="h-5 w-5" />
//             <span className="font-semibold">Find Your Dream Property</span>
//           </motion.div>

//           <motion.h2 
//             className="mb-6 text-4xl font-bold text-white font-playfair lg:text-5xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             RRL Premium <span className="text-gold-400">Properties</span>
//           </motion.h2>

//           <motion.p 
//             className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms to breathtaking views, we provide a
//             comprehensive overview of what each property has to offer.
//           </motion.p>

//           <div className="mb-8 inline-flex items-center rounded-full bg-gray-900 p-1">
//             <button
//               onClick={() => setActiveTab("residential")}
//               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                 activeTab === "residential" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <Home className="h-4 w-4" />
//               <span>Residential</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("commercial")}
//               className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                 activeTab === "commercial" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//               }`}
//             >
//               <Building2 className="h-4 w-4" />
//               <span>Commercial</span>
//             </button>
//           </div>
//         </div>

//         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {displayProperties.map((property, index) => (
//             <motion.div
//               key={property.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Link href={`/projects/${property.id}`} className="group cursor-pointer">
//                 <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-900 border border-gold-800 transition-all duration-300 hover:border-gold-600 hover:shadow-2xl hover:shadow-gold-800/40">
//                 <div className="relative overflow-hidden h-56">
//                   <Image
//                     src={property.image || "/placeholder.svg"}
//                     alt={property.name}
//                     width={400}
//                     height={300}
//                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute left-4 top-4">
//                     <div
//                       className={`rounded-full px-3 py-1 text-xs font-semibold ${
//                         property.status === "Award Winner" ? "bg-gold-500 text-black" :
//                         property.status === "Ready to Move" || property.status === "Operational" ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"
//                       }`}
//                     >
//                       {property.status}
//                     </div>
//                   </div>
//                   <div className="absolute right-4 top-4 rounded-full px-2 py-1 bg-black/50 backdrop-blur-sm">
//                     <div className="flex items-center space-x-1">
//                       <Star className="h-3 w-3 fill-gold-400 text-gold-400"/>
//                       <span className="text-xs font-semibold text-white">{property.rating}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col h-[calc(100%-14rem)] p-6">
//                   <h3 className="text-xl font-bold text-white group-hover:text-gold-400">{property.name}</h3>
//                   <div className="mt-1 flex items-center space-x-2 text-gray-500">
//                     <MapPin className="h-4 w-4 flex-shrink-0" />
//                     <span className="line-clamp-1 text-sm">{property.location}</span>
//                   </div>
//                   <p className="line-clamp-2 my-4 text-sm leading-relaxed text-gray-400">
//                     {property.description}
//                   </p>
//                   <div className="mt-auto flex items-center justify-between border-t border-gold-800 pt-4">
//                     {/* <span className="text-lg font-bold text-gold-400">{property.price}</span> */}
//                     {/* <ArrowRight className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-1" /> */}
//                   </div>
//                 </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* SUMMARY STATS & BUTTON ADDED FROM OLD FILE */}
//         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
//           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
//             <div className="mb-2 text-3xl font-bold text-gold-400">{activeTab === "residential" ? "5+" : "3+"}</div>
//             <div className="text-gray-400">
//               {activeTab === "residential" ? "Residential Projects" : "Commercial Projects"}
//             </div>
//           </div>
//           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
//             <div className="mb-2 text-3xl font-bold text-gold-400">1000+</div>
//             <div className="text-gray-400">Happy Customers</div>
//           </div>
//           <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
//             <div className="mb-2 text-3xl font-bold text-gold-400">999+</div>
//             <div className="text-gray-400">Sq Ft Delivered</div>
//           </div>
//         </div>

//         <div className="text-center">
//           <Link href="/projects">
//             <Button
//               size="lg"
//               className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//             >
//               Explore More {activeTab === "residential" ? "Residential" : "Commercial"} Properties
//               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// // ========== 5. TESTIMONIALS COMPONENT ==========
// function Testimonials() {
//   // FULL LIST OF 12 TESTIMONIALS RESTORED
//   const testimonials = [
//     {
//       name: "Rita Chauhan",
//       role: "Happy Customer",
//       location: "Sarjapur, Bengaluru",
//       rating: 5,
//       testimonial:
//         "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
//     },
//     {
//       name: "Rajesh Kumar",
//       role: "Property Investor",
//       location: "Varthur, Bengaluru",
//       rating: 5,
//       testimonial:
//         "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
//     },
//     {
//       name: "Priya Sharma",
//       role: "Homeowner",
//       location: "Medahalli, Bengaluru",
//       rating: 5,
//       testimonial:
//         "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
//     },
//     {
//       name: "Suman Narayan",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat.Even budget friendly too.I highly recommend RRL for interior designing.",
//     },
//     {
//       name: "Subhash S",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
//     },
//     {
//       name: "Neelima Maryam",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial: "Very happy with the designs and budget.",
//     },
//     {
//       name: "Attili Nikhil",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "Had a great experience with RRL. They execute what we tell them.I highly recommend to their 3D designs. They respond to us with great patience and even their price is very reasonable when compared with other interior designers quotations. And when it comes to green he is very nice guy who responds very well and gives us great designs and ideas. So I strongly recommend to go with RRL.",
//     },
//     {
//       name: "Bipul Kumar Singh",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "We are very happy with the service provided by RRL. They handles all the requirements very carefully starting from the inception the model to delivering the good ideas for my flat with lots of transparency in the material.I would highly recommend RRL.",
//     },
//     {
//       name: "Devam Rajaguru",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial: "We are very happy about the work, outcome is very nice.Thank you so much RRL team for turning this so well.",
//     },
//     {
//       name: "Raaj Kumar",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "I had an exceptional experience with RRL. From layout analysis to execution, every aspect of their work was impeccable. Mr. Ram and Mr. Lakshman ensured the project was delivered on time and within the budget, paying close attention to detail. Despite being abroad, I felt reassured by Mr. Ram's regular visits and dedication to smooth project progress. For those seeking top-notch interior designs, I highly recommend RRL. Thank you for the fantastic work!",
//     },
//     {
//       name: "Rubina A",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial:
//         "We are so grateful to RRL who converted our flat into a beautiful home. From planning the perfect layout to the timely execution, we absolutely love their work. Mr. Ram and his team really took my space to next level that too in given time frame. Great value for the price. Will highly recommend RRL for his amazing communication skill and customer service. Thank you so much team.",
//     },
//     {
//       name: "Karishma Jattan",
//       role: "Client",
//       location: "Bengaluru",
//       rating: 5,
//       testimonial: "Happie wid the service provided.Good team.Reasonable price and wonders at designs.",
//     },
//   ]
//   return (
//     <motion.section 
//       className="py-24 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <motion.h2 
//             className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Hear From Our <span className="text-gold-600">Clients</span>
//           </motion.h2>
//           <motion.p 
//             className="mx-auto max-w-2xl text-xl text-gray-800"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Beyond Real Estate: Personal Stories of Satisfaction
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="rounded-2xl bg-white p-8 shadow-lg"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="mb-4 flex items-center space-x-1">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
//                 ))}
//               </div>
//               <blockquote className="line-clamp-5 mb-6 italic leading-relaxed text-gray-700">
//                 "{testimonial.testimonial}"
//               </blockquote>
//               <div className="flex items-center space-x-4">
//                 <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500">
//                   <span className="text-base font-bold text-black">
//                     {testimonial.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </span>
//                 </div>
//                 <div>
//                   <div className="font-bold text-black">{testimonial.name}</div>
//                   <div className="text-sm text-gray-600">{testimonial.role}</div>
//                   <div className="text-xs text-gray-500">{testimonial.location}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// // ========== 6. LEADERSHIP COMPONENT ==========
// function Leadership() {
//   return (
//     <motion.section 
//       className="relative overflow-hidden bg-light-black py-24"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//       <div className="container relative mx-auto px-4">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="space-y-4">
//                 <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
//                     <Users className="h-5 w-5" />
//                     <span className="font-semibold">Leadership Excellence</span>
//                 </div>

//                 <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
//                     Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
//                 </h2>

//                 <p className="text-lg leading-relaxed text-gray-400">
//                   When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
//                   Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
//                 </p>
//             </div>
            
//             {/* LEADERSHIP HIGHLIGHTS ADDED FROM OLD FILE */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Award className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">10+ Years Experience</h3>
//                 <p className="text-sm text-gray-400">
//                   Exceptional business acumen and established leadership
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Target className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">Market Understanding</h3>
//                 <p className="text-sm text-gray-400">
//                   Deep understanding of market trends and industry dynamics
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Lightbulb className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">Innovation Focus</h3>
//                 <p className="text-sm text-gray-400">
//                   Innovative approach to real estate development
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
//                   <Users className="h-6 w-6 text-black" />
//                 </div>
//                 <h3 className="font-bold text-white">Customer Centric</h3>
//                 <p className="text-sm text-gray-400">
//                   Dedicated to providing luxurious living spaces
//                 </p>
//               </div>
//             </div>

//             {/* <Button className="rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
//               Read About RRL
//             </Button> */}
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
//                   <p className="text-sm text-gray-400">Co-Founder & Director</p>
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
//                   <p className="text-sm text-gray-400">Co-Founder & Director</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// // ========== 7. PARTNERS COMPONENT ==========
// // FULL PARTNER LISTS RESTORED
// function PartnersSection() {
//     const bankingPartners = [
//       { name: "SBI", src: "/logos/SBI-Logo.png" },
//       { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
//       { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
//       { name: "Union Bank", src: "/logos/union-bank.png" },
//       { name: "ICICI Bank", src: "/logos/icici-bank.png" },
//       { name: "Axis Bank", src: "/logos/axis-bank.svg" },
//       { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
//       { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
//       { name: "TATA Capital", src: "/logos/tata-capital.png" },
//     ]
  
//     const trustedBrands = [
//       { name: "Kerovit", src: "/logos/kerovit.png" },
//       { name: "Schneider", src: "/logos/schneider.png" },
//       { name: "One Touch", src: "/logos/one-touch.png" },
//       { name: "Designhive", src: "/logos/Designhive.png" },
//       { name: "Polycab", src: "/logos/polycab.png" },
//       { name: "SVT", src: "/logos/svt.png" },
//       { name: "Shivam Enterprise", src: "/logos/shivam.png" },
//       { name: "Nippon", src: "/logos/nippon.png" },
//       { name: "Fenstect", src: "/logos/fenstect.png" },
//       { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
//       { name: "Philips", src: "/logos/philips.png" },
//       { name: "Wipro", src: "/logos/wipro.jpg" },
//     ]
  
//     const marketingPartners = [
//       { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
//       { name: "Housing.com", src: "/logos/housing-com.png" },
//       { name: "Marketly", src: "/logos/marketly.jpg" },
//       { name: "99acres", src: "/logos/99acres.png" },
//     ]
  
//     const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
//     const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
//     const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]
  
//     return (
//       <motion.section
//         className="overflow-hidden py-20 bg-light-gold"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="mb-16 text-center">
//             <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">Our Valued <span className="text-gold-600">Partners</span></h1>
//             <p className="mx-auto max-w-2xl text-xl text-gray-800">
//               Collaborating with industry leaders to bring you the best in real estate.
//             </p>
//           </div>
  
//           <div className="space-y-16">
//             <div>
//               <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
//               <div className="relative w-full overflow-hidden py-4">
//                 <motion.div
//                   className="flex flex-nowrap"
//                   animate={{ x: ["0%", `-${100 / 2 * bankingPartners.length / 6}%`] }}
//                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
//                 >
//                   {duplicatedBankingPartners.map((partner, index) => (
//                     <div key={`banking-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
//                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                         <Image
//                           src={partner.src || "/placeholder.svg"}
//                           alt={partner.name}
//                           width={120}
//                           height={60}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//             <div>
//               <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
//               <div className="relative w-full overflow-hidden py-4">
//                 <motion.div
//                   className="flex flex-nowrap"
//                   animate={{ x: [`-${100 / 2 * trustedBrands.length / 6}%`, "0%"] }}
//                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
//                 >
//                   {duplicatedTrustedBrands.map((brand, index) => (
//                     <div key={`trusted-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
//                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                         <Image
//                           src={brand.src || "/placeholder.svg"}
//                           alt={brand.name}
//                           width={120}
//                           height={60}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//             {/* MARKETING PARTNERS SECTION ADDED */}
//             <div>
//               <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
//               <div className="relative w-full overflow-hidden py-4">
//                 <motion.div
//                   className="flex flex-nowrap"
//                   animate={{ x: ["0%", `-${100 / 2 * marketingPartners.length / 6}%`] }}
//                   transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
//                 >
//                   {duplicatedMarketingPartners.map((partner, index) => (
//                     <div key={`marketing-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
//                       <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
//                         <Image
//                           src={partner.src || "/placeholder.svg"}
//                           alt={partner.name}
//                           width={120}
//                           height={60}
//                           className="max-h-full max-w-full object-contain"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     )
//   }
// // ========== 8. FAQ COMPONENT ==========
// // THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED, TABBED VERSION
// interface FAQSectionProps {
//     title?: string
//     subtitle?: string
//     defaultLocation?: "sarjapur" | "varthur"
// }
// function FAQSection({
//     title = "Frequently Asked Questions",
//     subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
//     defaultLocation = "sarjapur",
//   }: FAQSectionProps) {
//     const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
//     const [openItems, setOpenItems] = useState<string[]>([])
  
//     const sarjapurFAQs = [
//       {
//         question: "What is the price of a 2 BHK flat in Sarjapur?",
//         answer: "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
//       },
//       {
//         question: "Where can I buy a 2 BHK flat in Bangalore?",
//         answer: "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
//       },
//       {
//         question: "Are there apartments in Sarjapur Road for sale?",
//         answer: "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
//       },
//       {
//         question: "What makes Luxury Apartments in Sarjapur Road special?",
//         answer: "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
//       },
//     ]
  
//     const varthurFAQs = [
//       {
//         question: "Is Varthur a good area to live in Bangalore?",
//         answer: "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
//       },
//       {
//         question: "What is the price of a flat in Varthur?",
//         answer: "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
//       },
//       {
//         question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
//         answer: "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
//       },
//       {
//         question: "What are the options for apartments in Varthur?",
//         answer: "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
//       },
//     ]
  
//     const toggleItem = (id: string) => {
//       setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
//     }
  
//     const handleLocationChange = (location: "sarjapur" | "varthur") => {
//       setActiveLocation(location)
//       setOpenItems([])
//     }
  
//     const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
//     const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"
  
//     return (
//       <section className="bg-black py-20 text-white ">
//         <div className="container mx-auto px-4 ">
//           <div className="mb-16 text-center ">
//             <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
//               <HelpCircle className="h-5 w-5" />
//               <span className="font-semibold">FAQ</span>
//             </div>
  
//             <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>
  
//             <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>
  
//             <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
//               <button
//                 onClick={() => handleLocationChange("sarjapur")}
//                 className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                   activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 <MapPin className="h-4 w-4" />
//                 <span>Sarjapur</span>
//               </button>
//               <button
//                 onClick={() => handleLocationChange("varthur")}
//                 className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
//                   activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 <MapPin className="h-4 w-4" />
//                 <span>Varthur</span>
//               </button>
//             </div>
//           </div>
  
//           <div className="mx-auto max-w-4xl">
//             <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>
  
//             <div className="space-y-4">
//               {currentFAQs.map((faq, index) => {
//                 const itemId = `${activeLocation}-${index}`
//                 const isOpen = openItems.includes(itemId)
  
//                 return (
//                   <div
//                     key={itemId}
//                     className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
//                   >
//                     <button
//                       onClick={() => toggleItem(itemId)}
//                       className="flex w-full items-center justify-between px-8 py-6 text-left"
//                     >
//                       <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
//                       <div className="flex-shrink-0">
//                         {isOpen ? (
//                           <ChevronUp className="h-5 w-5 text-gold-400" />
//                         ) : (
//                           <ChevronDown className="h-5 w-5 text-gray-500" />
//                         )}
//                       </div>
//                     </button>
  
//                     <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
//                       <div className="px-8 pb-6">
//                         <p className="leading-relaxed text-gray-400">{faq.answer}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
  
//           <div className="mt-16 text-center">
//             <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
//               <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
//               <p className="mb-6 text-gray-400">
//                 Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
//               </p>
//               <div className="flex flex-col justify-center gap-4 sm:flex-row">
//                 <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600">
//                   Contact Our Experts
//                 </a>
//                 <a href="tel:+91-8494966966" className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20">
//                   Call: +91-8494966966
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

// // ========== 9. CALL TO ACTION COMPONENT ==========
// // REPLACED WITH THE FULL VERSION FROM oldhome.tsx
// function CallToAction() {
//     const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
  
//     const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault()
//       console.log("Form submitted:", formData)
//     }
  
//     return (
//       <section className="relative overflow-hidden bg-light-gold py-24 text-black">
//         <div className="container relative mx-auto px-4">
//           <div className="mb-16 text-center">
//             <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
//             <p className="mx-auto max-w-2xl text-xl text-gray-800">
//               Contact Us: Let's Start Your Real Estate Journey Together
//             </p>
//           </div>
  
//           <div className="mx-auto max-w-6xl">
//             <div className="grid items-start gap-16 lg:grid-cols-2">
//               <motion.div 
//                 className="rounded-3xl p-8 bg-white shadow-2xl"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid gap-4 md:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
//                       <Input
//                         placeholder="Your name"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         className="bg-gray-100 focus:border-gold-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
//                       <Input
//                         placeholder="Your phone number"
//                         value={formData.contact}
//                         onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
//                         className="bg-gray-100 focus:border-gold-500"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
//                     <Select
//                       value={formData.property}
//                       onValueChange={(value) => setFormData({ ...formData, property: value })}
//                     >
//                       <SelectTrigger className="bg-gray-100">
//                         <SelectValue placeholder="Select a property" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="palacio">RRL Palacio</SelectItem>
//                         <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
//                         <SelectItem value="sequoia">RRL Sequoia</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
//                     <Textarea
//                       placeholder="Your query in brief"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       className="min-h-[120px] bg-gray-100 focus:border-gold-500"
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
//                   >
//                     Submit Request
//                     <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </form>
//               </motion.div>
//               <motion.div 
//                 className="space-y-8"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <div>
//                   <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
//                   <p className="mb-8 leading-relaxed text-gray-700">
//                     Take the first step towards your real estate goals. Contact our expert team for personalised
//                     assistance.
//                   </p>
//                 </div>
//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                       <Phone className="h-6 w-6 text-black" />
//                     </div>
//                     <div>
//                       <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
//                       <p className="text-gray-700">+91-8494966966</p>
//                       {/* <p className="text-gray-700">+91-73378 16991</p> */}
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                       <Mail className="h-6 w-6 text-black" />
//                     </div>
//                     <div>
//                       <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
//                       <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
//                       <MapPin className="h-6 w-6 text-black" />
//                     </div>
//                     <div>
//                       <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
//                       <p className="text-gray-700">
//                         RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

// // ========== FINAL PAGE EXPORT ==========
// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <PartnersSection />
//       <Awards />
//       <Leadership />
//       <Stats />
//       <Properties />
//       <Testimonials />
//       <FAQSection />
//       <CallToAction />
//     </>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants, easeOut } from "framer-motion"

// UI Components (assuming these are in the specified paths)
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

// Icons from lucide-react
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
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

// ========== 1. HERO COMPONENT ==========
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);

      const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsappUpdates: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you shortly.")
    setFormData({ name: "", phone: "", whatsappUpdates: false })
  }


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
      {/* ===== Hero / Contact Section ===== */}
      <motion.section
        className="relative flex min-h-screen items-center overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
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

              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-white font-playfair lg:text-7xl">
                  RRL Builders & <span className="text-gold-400 block">Developers</span>
                </h1>
                <p className="max-w-xl text-xl leading-relaxed text-gray-400">
                  Pioneers of affordable luxury residential and commercial spaces in Bangalore.
                  With our in-depth knowledge of the local market and industry trends, we offer
                  valuable insights to help you make well-informed decisions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  ["1000+", "Happy Families"],
                  ["10", "Years Experience"],
                  ["5+", "Projects Completed"],
                  ["500+", "Trusted Partners"],
                ].map(([value, label], i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold text-gold-400">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
                >
                  Explore RRL Properties
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="w-full max-w-xl">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1"
                      title="Our Story Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-md"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
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
                <div className="h-6 w-px bg-gold-800" />
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-medium text-gray-400">
                    150+ Proud Employees
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Contact Form */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="w-full max-w-md rounded-2xl shadow-2xl p-8 bg-white/10 backdrop-blur-md border border-gold-800">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Calculate Your EMI for Your Dream Property
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500"
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="whatsapp-updates"
                        name="whatsappUpdates"
                        checked={formData.whatsappUpdates}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            whatsappUpdates: !!checked,
                          }))
                        }
                        className="border-gold-700 data-[state=checked]:bg-gold-500 data-[state=checked]:text-black"
                      />
                      <label
                        htmlFor="whatsapp-updates"
                        className="text-sm font-medium text-gray-300"
                      >
                        Send me updates on Whatsapp
                      </label>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg"
                    >
                      Calculate EMI Now
                    </Button>
                    <p className="text-xs text-gray-400 text-center mt-4">
                      By submitting, you agree to the{" "}
                      <Link href="/privacy" className="text-gold-400 hover:underline">
                        privacy policy
                      </Link>{" "}
                      &{" "}
                      <Link href="/terms" className="text-gold-400 hover:underline">
                        terms
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== Awards Section ===== */}
      <motion.section
        className="py-20 bg-black text-white relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                <Trophy className="h-4 w-4" />
                <span>RRL Awards</span>
              </div> */}
              <h1 className="text-4xl md:text-5xl font-playfair font-bold">
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
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
    </>
  );
};

// ========== 2. AWARDS COMPONENT ==========
// THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED VERSION FROM oldhome.tsx
function Awards() {
  const awardsData = [
    {
      year: "2025",
      title: "Times Real Estate Icon Awards",
      category: "Builder of the Year - Mid Segment Housing",
      icon: Trophy,
      color: "bg-gold-500",
    },
    {
      year: "2024",
      title: "Excellence in Amenities Premium",
      category: "Mid-Segment Homes",
      icon: Medal,
      color: "bg-gray-700",
    },
    {
      year: "2023",
      title: "Global Real Estate Brand Awards",
      category: "Affordability Category Winner",
      icon: Award,
      color: "bg-gold-500",
    },
    {
      year: "2023",
      title: "Property Award of the Year",
      category: "Affordable and High-end Property",
      icon: Star,
      color: "bg-gray-700",
    },
  ]
  return (
    <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
            <Trophy className="h-5 w-5" />
            <span className="font-semibold">RRL Legacy of Achievements</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold font-playfair sm:text-4xl lg:text-5xl">
            Committed to Results: Highlights of Our
            <span className="text-gold-400 block">Real Estate Success</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
            commitment to delivering exceptional real estate services to our valued clients.
          </p>
        </div>

        <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="group flex min-h-32 rounded-2xl border border-gold-800 bg-gray-900/50 p-4 sm:p-6 shadow-lg transition-all duration-300 hover:border-gold-600 hover:shadow-2xl"
              >
                <div className="flex w-full items-center space-x-4">
                  <div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg ${award.color}`}
                  >
                    <award.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* THIS IS THE KEY FIX: Stacks vertically on mobile, row on sm screens up */}
                    <div className="mb-2 flex flex-col items-start sm:flex-row sm:items-center sm:space-x-3">
                      <span className="text-xl font-bold text-gold-400">{award.year}</span>
                      <div className="h-6 w-px bg-gold-800 hidden sm:block"></div>
                      <span className="text-sm font-medium uppercase tracking-wide text-gray-500 line-clamp-2 sm:truncate">
                        {award.category}
                      </span>
                    </div>

                    <h3 className="line-clamp-2 mb-2 text-lg font-bold text-white transition-colors group-hover:text-gold-400 sm:text-xl">
                      {award.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
              alt="RRL Awards Ceremony"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Other sections with similar responsive adjustments */}
        <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
            <Image
              src="/zee.jpeg"
              alt="5th Global Real Estate Brand Awards 2023"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6 ">
            <h3 className="text-2xl font-bold font-playfair md:text-3xl">
              The Global Real Estate Brand Awards, 2023
            </h3>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              Bengaluru (Karnataka) [India], June 1: The Indian real estate industry's stars gathered at the
              illustrious 5th edition of the Global Real Estate Brand Awards 2023. Held at Hotel Ritz Carlton,
              Bengaluru...
            </p>
<Link href="/awards">
  <Button
    size="lg"
    className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
  >
    RRL RECOGNITION
  </Button>
</Link>
          </div>
        </div>

        <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 md:order-1 order-2">
            <h3 className="text-2xl font-bold font-playfair md:text-3xl">Times Real Estate Icons Award, 2025</h3>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
              ICON Awards, 2025.
            </p>
             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              Thrilled to present award-winning projects after RRL Nature Wood, now its turn for RRL Palacio, powered by
              RRL Builders and developers...
            </p>
<Link href="/awards">
  <Button
    size="lg"
    className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
  >
    RRL RECOGNITION
  </Button>
</Link>
          </div>
          <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl md:order-2 order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
              alt="Times Real Estate Icons Award 2025"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold">Featured In</span>
          </div>
          <h3 className="mb-8 text-2xl font-bold font-playfair md:text-3xl">
            Our Achievements in the <span className="text-gold-400 block">News</span>
          </h3>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-qDHHyNYjDinRiMkHs0aLMdWqIsg1A3.jpeg"
                alt="ThePrint Media Coverage"
                width={500}
                height={300}
                className="h-auto w-full rounded-t-2xl object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">ThePrint: Global Real Estate Brand Awards</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Coverage of the 5th edition of the Global Real Estate Brand Awards 2023.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-a2nth21OR71xLxlXXXOwOeVuSveGXL.png"
                alt="Times of India Media Coverage"
                width={500}
                height={300}
                className="h-auto w-full rounded-t-2xl object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">Times of India: Builder of the Year</h4>
                <p className="mt-2 text-sm text-gray-400">
                  RRL Builders named Builder of the Year in Mid-Segment Housing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/awards">
            <Button size="lg" className="rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
              Explore All RRL Awards
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
  
// ========== 3. STATS COMPONENT ==========
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
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
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
// ========== 4. PROPERTIES COMPONENT ==========
function Properties() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

  const residentialProperties = [
    {
      id: "palacio",
      name: "RRL Palacio",
      location: "Medahalli",
      type: "Luxury Property",
      status: "Ready to Move",
      description: "Our newly constructed luxury property, situated in Medahalli",
      image: "/LookProject2.jpeg",
      features: ["Premium Amenities", "Furnished smart homes"],
      rating: 4.8,
      price: "₹45 Lakhs onwards",
    },
    {
      id: "palm-altezze",
      name: "RRL Palm Altezze",
      location: "Varthur, Bangalore",
      type: "Premium Property",
      status: "Just Launched",
      description: "Our latest premium property located at Varthur, Bangalore",
      image: "/justlaunch.png",
      features: ["High Rise Apartment", "Premium Apartment"],
      rating: 4.9,
      price: "₹38 Lakhs onwards",
    },
    {
      id: "sequoia",
      name: "RRL Sequoia",
      location: "Varthur, Bangalore",
      type: "Luxurious Villa",
      status: "Coming Soon",
      description: "Our latest luxurious Villa located at Varthur, Bangalore",
      image: "/Sequoia.jpg",
      features: ["4 BHK Villa", "Garden", "Premium Location"],
      rating: 4.7,
      price: "₹85 Lakhs onwards",
    },
    {
      id: "nature-woods",
      name: "RRL Nature Woods",
      location: "Sarjapur",
      type: "Premium Property",
      status: "Completed",
      description: "Our premium awarded property, situated in heart of Sarjapur",
      image: "/LookProject5.jpeg",
      features: ["Nature View", "High end award winning amenities"],
      rating: 4.9,
      price: "₹42 Lakhs onwards",
    },
  ]

  const commercialProperties = [
    {
      id: "towers",
      name: "RRL Towers",
      location: "Sampige Jala, Sarjapur",
      type: "Commercial Tower",
      status: "Operational",
      description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
      image: "/Tower.jpeg",
      features: ["Office Spaces", "Retail", "Corporate Hub"],
      rating: 4.8,
      price: "₹65 Lakhs onwards",
    },
    {
      id: "complex",
      name: "RRL Complex",
      location: "South Bangalore",
      type: "Commercial Building",
      status: "Operational",
      description: "Our 12th Commercial Building situated in South of Bangalore",
      image: "/complex.jpg",
      features: ["Multi-tenant", "Parking", "Modern Facilities"],
      rating: 4.7,
      price: "₹55 Lakhs onwards",
    },
    {
      id: "oasis",
      name: "RRL Oasis",
      location: "Bangalore",
      type: "Commercial Building",
      status: "Upcoming Commercial Project",
      description: "Upcoming residential project with modern amenities",
      image: "/Oasis.jpg",
      features: ["1 BHK", "2 BHK", "Swimming Pool"],
      rating: 4.6,
      price: "₹28 Lakhs onwards",
    },
  ]
  const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties
  const displayProperties = currentProperties.slice(0, 4)

  return (
    <motion.section 
      className="bg-black py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div 
            className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home className="h-5 w-5" />
            <span className="font-semibold">Find Your Dream Property</span>
          </motion.div>

          <motion.h2 
            className="mb-6 text-4xl font-bold text-white font-playfair lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            RRL Premium <span className="text-gold-400">Properties</span>
          </motion.h2>

          <motion.p 
            className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms to breathtaking views, we provide a
            comprehensive overview of what each property has to offer.
          </motion.p>

          <div className="mb-8 inline-flex items-center rounded-full bg-gray-900 p-1">
            <button
              onClick={() => setActiveTab("residential")}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeTab === "residential" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Residential</span>
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeTab === "commercial" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Commercial</span>
            </button>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {displayProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${property.id}`} className="group cursor-pointer">
                <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-900 border border-gold-800 transition-all duration-300 hover:border-gold-600 hover:shadow-2xl hover:shadow-gold-800/40">
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        property.status === "Award Winner" ? "bg-gold-500 text-black" :
                        property.status === "Ready to Move" || property.status === "Operational" ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"
                      }`}
                    >
                      {property.status}
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full px-2 py-1 bg-black/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-gold-400 text-gold-400"/>
                      <span className="text-xs font-semibold text-white">{property.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-[calc(100%-14rem)] p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400">{property.name}</h3>
                  <div className="mt-1 flex items-center space-x-2 text-gray-500">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="line-clamp-1 text-sm">{property.location}</span>
                  </div>
                  <p className="line-clamp-2 my-4 text-sm leading-relaxed text-gray-400">
                    {property.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gold-800 pt-4">
                    {/* <span className="text-lg font-bold text-gold-400">{property.price}</span> */}
                    {/* <ArrowRight className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-1" /> */}
                  </div>
                </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* SUMMARY STATS & BUTTON ADDED FROM OLD FILE */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
            <div className="mb-2 text-3xl font-bold text-gold-400">{activeTab === "residential" ? "5+" : "3+"}</div>
            <div className="text-gray-400">
              {activeTab === "residential" ? "Residential Projects" : "Commercial Projects"}
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
            <div className="mb-2 text-3xl font-bold text-gold-400">1000+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div className="rounded-2xl p-6 text-center bg-gray-900 border border-gold-800">
            <div className="mb-2 text-3xl font-bold text-gold-400">999+</div>
            <div className="text-gray-400">Sq Ft Delivered</div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button
              size="lg"
              className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
            >
              Explore More {activeTab === "residential" ? "Residential" : "Commercial"} Properties
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
// ========== 5. TESTIMONIALS COMPONENT (MODIFIED) ==========
function Testimonials() {
    const testimonialData = [
    {
      type: "text",
      name: "Rita Chauhan",
      role: "Happy Customer",
      location: "Sarjapur, Bengaluru",
      rating: 5,
      testimonial:
        "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
    },
    {
      type: "text",
      name: "Rajesh Kumar",
      role: "Property Investor",
      location: "Varthur, Bengaluru",
      rating: 5,
      testimonial:
        "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
    },
    {
      type: "video",
      name: "VideoTestimonial1",
      videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=1&mute=1&loop=1&playlist=VPPeIBhPXSc&controls=0",
    },
    {
      type: "text",
      name: "Priya Sharma",
      role: "Homeowner",
      location: "Medahalli, Bengaluru",
      rating: 5,
      testimonial:
        "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
    },
    {
      type: "text",
      name: "Suman Narayan",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat.Even budget friendly too.I highly recommend RRL for interior designing.",
    },
    {
      type: "video",
      name: "VideoTestimonial2",
      videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=1&mute=1&loop=1&playlist=-IcK_Ac0dVQ&controls=0",
    },
    {
      type: "text",
      name: "Subhash S",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
    },
    {
      type: "text",
      name: "Neelima Maryam",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial: "Very happy with the designs and budget.",
    },
    {
      type: "text",
      name: "Attili Nikhil",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "Had a great experience with RRL. They execute what we tell them.I highly recommend to their 3D designs. They respond to us with great patience and even their price is very reasonable when compared with other interior designers quotations. And when it comes to green he is very nice guy who responds very well and gives us great designs and ideas. So I strongly recommend to go with RRL.",
    },
    {
      type: "text",
      name: "Bipul Kumar Singh",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "We are very happy with the service provided by RRL. They handles all the requirements very carefully starting from the inception the model to delivering the good ideas for my flat with lots of transparency in the material.I would highly recommend RRL.",
    },
    {
      type: "text",
      name: "Devam Rajaguru",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial: "We are very happy about the work, outcome is very nice.Thank you so much RRL team for turning this so well.",
    },
    {
      type: "text",
      name: "Raaj Kumar",
      role: "Client",
      location: "Bengaluru",
      rating: 5,
      testimonial:
        "I had an exceptional experience with RRL. From layout analysis to execution, every aspect of their work was impeccable. Mr. Ram and Mr. Lakshman ensured the project was delivered on time and within the budget, paying close attention to detail. Despite being abroad, I felt reassured by Mr. Ram's regular visits and dedication to smooth project progress. For those seeking top-notch interior designs, I highly recommend RRL. Thank you for the fantastic work!",
    },
  ]

  return (
    <motion.section 
      className="py-24 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hear From Our <span className="text-gold-600">Clients</span>
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-2xl text-xl text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beyond Real Estate: Personal Stories of Satisfaction
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => {
            if (testimonial.type === 'video') {
              return (
                <motion.div
                  key={testimonial.name}
                  className="rounded-2xl bg-black overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={testimonial.videoUrl}
                      title={testimonial.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              )
            }
            
            // Text testimonial card
            return (
              <motion.div
                key={testimonial.name}
                className="rounded-2xl bg-white p-8 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex items-center space-x-1">
                  {testimonial.rating && [...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="line-clamp-5 mb-6 italic leading-relaxed text-gray-700">
                  "{testimonial.testimonial}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500">
                    <span className="text-base font-bold text-black">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}


// ========== 6. LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <motion.section 
      className="relative overflow-hidden bg-light-black py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Leadership Excellence</span>
                </div>

                <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
                    Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
                </h2>

                <p className="text-lg leading-relaxed text-gray-400">
                  When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
                  Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
                </p>
            </div>
            
            {/* LEADERSHIP HIGHLIGHTS ADDED FROM OLD FILE */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold text-white">10+ Years Experience</h3>
                <p className="text-sm text-gray-400">
                  Exceptional business acumen and established leadership
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold text-white">Market Understanding</h3>
                <p className="text-sm text-gray-400">
                  Deep understanding of market trends and industry dynamics
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold text-white">Innovation Focus</h3>
                <p className="text-sm text-gray-400">
                  Innovative approach to real estate development
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="font-bold text-white">Customer Centric</h3>
                <p className="text-sm text-gray-400">
                  Dedicated to providing luxurious living spaces
                </p>
              </div>
            </div>

            {/* <Button className="rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
              Read About RRL
            </Button> */}
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
                  <p className="text-sm text-gray-400">Co-Founder & Director</p>
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
                  <p className="text-sm text-gray-400">Co-Founder & Director</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
// ========== 7. PARTNERS COMPONENT ==========
// FULL PARTNER LISTS RESTORED
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
            <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">Our Valued <span className="text-gold-600">Partners</span></h1>
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
                  animate={{ x: ["0%", `-${100 / 2 * bankingPartners.length / 6}%`] }}
                  transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
                >
                  {duplicatedBankingPartners.map((partner, index) => (
                    <div key={`banking-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
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
                  animate={{ x: [`-${100 / 2 * trustedBrands.length / 6}%`, "0%"] }}
                  transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
                >
                  {duplicatedTrustedBrands.map((brand, index) => (
                    <div key={`trusted-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
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
            {/* MARKETING PARTNERS SECTION ADDED */}
            <div>
              <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
              <div className="relative w-full overflow-hidden py-4">
                <motion.div
                  className="flex flex-nowrap"
                  animate={{ x: ["0%", `-${100 / 2 * marketingPartners.length / 6}%`] }}
                  transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
                >
                  {duplicatedMarketingPartners.map((partner, index) => (
                    <div key={`marketing-${index}`} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
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
// ========== 8. FAQ COMPONENT ==========
// THIS ENTIRE COMPONENT HAS BEEN REPLACED WITH THE MORE DETAILED, TABBED VERSION
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
        answer: "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
      },
      {
        question: "Where can I buy a 2 BHK flat in Bangalore?",
        answer: "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
      },
      {
        question: "Are there apartments in Sarjapur Road for sale?",
        answer: "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
      },
      {
        question: "What makes Luxury Apartments in Sarjapur Road special?",
        answer: "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
      },
    ]
  
    const varthurFAQs = [
      {
        question: "Is Varthur a good area to live in Bangalore?",
        answer: "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
      },
      {
        question: "What is the price of a flat in Varthur?",
        answer: "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
      },
      {
        question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
        answer: "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
      },
      {
        question: "What are the options for apartments in Varthur?",
        answer: "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
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
  
            <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
              <button
                onClick={() => handleLocationChange("sarjapur")}
                className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>Sarjapur</span>
              </button>
              <button
                onClick={() => handleLocationChange("varthur")}
                className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
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
  
                    <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
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
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600">
                  Contact Our Experts
                </a>
                <a href="tel:+91-8494966966" className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20">
                  Call: +91-8494966966
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

// ========== 9. NEW: CHANNEL PARTNER CTA COMPONENT ==========
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
            Are you a real estate agent or a firm? Partner with us to get access to exclusive inventory, attractive commissions, and dedicated support.
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

// ========== 10. CALL TO ACTION COMPONENT ==========
// REPLACED WITH THE FULL VERSION FROM oldhome.tsx
function CallToAction() {
    const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
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
                      <p className="text-gray-700">+91-8494966966</p>
                      {/* <p className="text-gray-700">+91-73378 16991</p> */}
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
      <PartnersSection />
      <Awards />
      <Leadership />
      <Stats />
      <Properties />
      <Testimonials />
      <FAQSection />
      <ChannelPartnerCTA />
      <CallToAction />
    </>
  )
}
