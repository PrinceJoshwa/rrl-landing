

// // // "use client"

// // // import { useState } from "react"
// // // import { useRouter } from "next/navigation"
// // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // import { Button } from "@/components/ui/button"
// // // import { Card } from "@/components/ui/card"
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // import {
// // //   Phone,
// // //   Download,
// // //   Building2,
// // //   Leaf,
// // //   Users,
// // //   Zap,
// // //   Train,
// // //   Hospital,
// // //   BookOpen,
// // //   ShoppingCart,
// // //   Award,
// // //   Mail,
// // //   MapPin,
// // //   ChevronDown,
// // //   X,
// // //   // New icons for the added sections:
// // //   Wind,
// // //   Footprints,
// // //   Waves,
// // //   Music,
// // //   Dumbbell,
// // //   MonitorPlay,
// // //   Landmark, 
// // // } from "lucide-react"
// // // import type React from "react"

// // // // --- Shared Form Data Type ---
// // // type FormData = {
// // //   name: string
// // //   email: string
// // //   phone: string
// // //   message?: string
// // // }

// // // export default function Home() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // //   const router = useRouter()

// // //   const handleFormSubmit = async (data: FormData): Promise<boolean> => {
// // //     try {
// // //       // ⚠️ REPLACE WITH YOUR FORMSPREE ID
// // //       const response = await fetch("https://formspree.io/f/xldarjon", {
// // //         method: "POST",
// // //         body: JSON.stringify(data),
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Accept: "application/json",
// // //         },
// // //       })

// // //       if (response.ok) {
// // //         router.push("/c4/thankyou")
// // //         return true
// // //       } else {
// // //         alert("Oops! There was a problem submitting your form. Please try again.")
// // //         return false
// // //       }
// // //     } catch (error) {
// // //       alert("An error occurred. Please check your connection and try again.")
// // //       return false
// // //     }
// // //   }

// // //   // Animation variants
// // //   const containerVariants: Variants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.1,
// // //         delayChildren: 0.2,
// // //       },
// // //     },
// // //   }

// // //   const itemVariants: Variants = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.6, ease: "easeOut" },
// // //     },
// // //   }

// // //   const slideInVariants: Variants = {
// // //     hidden: { opacity: 0, x: -50 },
// // //     visible: {
// // //       opacity: 1,
// // //       x: 0,
// // //       transition: { duration: 0.7, ease: "easeOut" },
// // //     },
// // //   }

// // //   const scaleVariants: Variants = {
// // //     hidden: { opacity: 0, scale: 0.8 },
// // //     visible: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       transition: { duration: 0.6, ease: "easeOut" },
// // //     },
// // //   }

// // //   // ========== ORIGINAL HERO SECTION ==========
// // //   const HeroSection = () => (
// // //     <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] overflow-hidden pt-20">
// // //       <motion.div
// // //         className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
// // //         animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
// // //         transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
// // //       />
// // //       <motion.div
// // //         className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
// // //         animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
// // //         transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
// // //       />

// // //       <div className="relative h-full flex items-center">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
// // //             <motion.div className="space-y-6 z-10" initial="hidden" animate="visible" variants={containerVariants}>
// // //               <motion.div
// // //                 className="inline-flex items-center gap-2 bg-[#D4A574]/20 text-[#D4A574] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4A574]/30"
// // //                 variants={itemVariants}
// // //               >
// // //                 <motion.span
// // //                   className="w-2 h-2 bg-[#D4A574] rounded-full"
// // //                   animate={{ scale: [1, 1.2, 1] }}
// // //                   transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
// // //                 />
// // //                 Just Launched
// // //               </motion.div>

// // //               <motion.div className="space-y-4" variants={itemVariants}>
// // //                 <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
// // //                   Own Your <span className="text-[#D4A574]">Dream Home</span>
// // //                 </h1>
// // //                 <p className="text-xl md:text-2xl text-white/90">Premium 2 & 3 BHK Apartments in Varthur, Bangalore</p>
// // //               </motion.div>

// // //               <motion.div className="grid grid-cols-3 gap-4 py-6" variants={containerVariants}>
// // //                 {[
// // //                   { value: "₹1CR", label: "Onwards" },
// // //                   { value: "23", label: "Floors" },
// // //                   { value: "30+", label: "Amenities" },
// // //                 ].map((stat, index) => (
// // //                   <motion.div key={index} className="space-y-1" variants={itemVariants}>
// // //                     <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">{stat.value}</p>
// // //                     <p className="text-sm text-white/80">{stat.label}</p>
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>

// // //               <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={containerVariants}>
// // //                 <motion.div variants={itemVariants}>
// // //                   <Button
// // //                     size="lg"
// // //                     className="bg-[#D4A574] hover:bg-[#C49564] text-[#1E5BA8] gap-2 font-bold text-base"
// // //                     asChild
// // //                   >
// // //                     <a href="tel:8494966966">
// // //                       <Phone className="w-4 h-4" />
// // //                       Call Now: 84 94 966 966
// // //                     </a>
// // //                   </Button>
// // //                 </motion.div>

// // //                 <motion.div variants={itemVariants}>
// // //                   <Button
// // //                     size="lg"
// // //                     variant="outline"
// // //                     className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
// // //                     onClick={() => setIsModalOpen(true)}
// // //                   >
// // //                     <Mail className="w-4 h-4" />
// // //                     Enquire Now
// // //                   </Button>
// // //                 </motion.div>
// // //               </motion.div>

// // //               <motion.div className="flex items-center gap-2 text-white pt-4" variants={itemVariants}>
// // //                 <MapPin className="w-5 h-5 text-[#D4A574]" />
// // //                 <span className="font-semibold">Varthur, Bangalore</span>
// // //               </motion.div>
// // //             </motion.div>

// // //             <motion.div
// // //               className="hidden lg:block relative h-full"
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={scaleVariants}
// // //             >
// // //               <img
// // //                 // src="/palm-altezze/palm-altezze (18).jpeg"
// // //                 // src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764572041/WhatsApp_Image_2025-12-01_at_10.21.07_AM_1_yag3h7.jpg"
// // //                 src=""
// // //                 alt="RRL Palm Altezze Building"
// // //                 className="w-full h-full object-cover rounded-2xl shadow-2xl"
// // //               />
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <motion.div
// // //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// // //         animate={{ y: [0, 10, 0] }}
// // //         transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
// // //       >
// // //         <ChevronDown className="w-6 h-6 text-[#D4A574]" />
// // //       </motion.div>
// // //     </section>
// // //   )

// // //   // ========== ORIGINAL OVERVIEW SECTION ==========
// // //   const OverviewSection = () => {
// // //     const highlights = [
// // //       {
// // //         icon: Building2,
// // //         title: "Premium Construction",
// // //         description: "RCC framed structure with Mivan construction technology",
// // //       },
// // //       {
// // //         icon: Leaf,
// // //         title: "92% Open Space",
// // //         description: "Abundant greenery and landscaped gardens throughout",
// // //       },
// // //       {
// // //         icon: Users,
// // //         title: "Family Focused",
// // //         description: "30+ world-class amenities for all age groups",
// // //       },
// // //       {
// // //         icon: Zap,
// // //         title: "100% Power Backup",
// // //         description: "Generator backup for flats, lifts, and common areas",
// // //       },
// // //     ]

// // //     return (
// // //       <section className="py-20 bg-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div
// // //             className="text-center mb-16"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.h2
// // //               className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //               variants={itemVariants}
// // //             >
// // //               A Lifestyle That Stands Tall
// // //             </motion.h2>
// // //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //               Solar-powered common spaces, lower bills, and brighter living. Experience premium residential living
// // //               redefined.
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             {highlights.map((item, index) => {
// // //               const Icon = item.icon
// // //               return (
// // //                 <motion.div key={index} variants={itemVariants}>
// // //                   <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:border-[#D4A574]/20">
// // //                     <div className="flex flex-col items-start gap-4">
// // //                       <div className="p-3 bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg">
// // //                         <Icon className="w-6 h-6 text-[#1E5BA8]" />
// // //                       </div>
// // //                       <div>
// // //                         <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">{item.title}</h3>
// // //                         <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
// // //                       </div>
// // //                     </div>
// // //                   </Card>
// // //                 </motion.div>
// // //               )
// // //             })}
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== NEW: HEALTHY LIVING SECTION (Matches "Step Into Healthy Living" Image) ==========
// // //   // const HealthyLivingSection = () => {
// // //   //   return (
// // //   //     <section className="relative py-24 overflow-hidden">
// // //   //       {/* Background Image with Overlay */}
// // //   //       <div className="absolute inset-0">
// // //   //          <img 
// // //   //            src="/palm-altezze/palm-altezze (24).jpeg" 
// // //   //            alt="Jogging Track" 
// // //   //            className="w-full h-full object-cover"
// // //   //          />
// // //   //          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
// // //   //       </div>

// // //   //       <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
// // //   //          <motion.div 
// // //   //            className="max-w-2xl"
// // //   //            initial={{ opacity: 0, y: 30 }}
// // //   //            whileInView={{ opacity: 1, y: 0 }}
// // //   //            viewport={{ once: true }}
// // //   //            transition={{ duration: 0.8 }}
// // //   //          >
// // //   //             <h2 className="text-6xl font-serif text-[#1E5BA8] mb-4">
// // //   //                Step Into <br/>
// // //   //                <span className="text-[#1E5BA8]">Healthy Living</span>
// // //   //             </h2>
              
// // //   //             <p className="text-black font-bold uppercase tracking-wide text-sm mb-12 border-l-4 border-[#1E5BA8] pl-4">
// // //   //                AT RRL PALM ALTEZZE, YOU DON'T JUST GET A <br/>
// // //   //                HOME — YOU GET A LIFESTYLE.
// // //   //             </p>

// // //   //             <div className="flex flex-col sm:flex-row gap-12">
// // //   //                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
// // //   //                   <div className="w-16 h-16 rounded-full border-2 border-[#1E5BA8] flex items-center justify-center">
// // //   //                      <Wind className="w-8 h-8 text-[#1E5BA8]" />
// // //   //                   </div>
// // //   //                   <p className="font-bold text-[#1E5BA8] max-w-[150px] leading-tight">
// // //   //                      FRESH AIR & GREEN SURROUNDINGS
// // //   //                   </p>
// // //   //                </div>

// // //   //                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
// // //   //                   <div className="w-16 h-16 rounded-full border-2 border-[#1E5BA8] flex items-center justify-center">
// // //   //                      <Footprints className="w-8 h-8 text-[#1E5BA8]" />
// // //   //                   </div>
// // //   //                   <p className="font-bold text-[#1E5BA8] max-w-[150px] leading-tight">
// // //   //                      SAFE, WELL-LIT TRACK FOR ALL AGES
// // //   //                   </p>
// // //   //                </div>
// // //   //             </div>
// // //   //          </motion.div>
// // //   //       </div>
// // //   //     </section>
// // //   //   )
// // //   // }/

// // //   // --- UPDATED: HEALTHY LIVING SECTION (Text Left, Image Right) ---
// // //   const HealthyLivingSection = () => {
// // //     return (
// // //       <section className="py-24 bg-white overflow-hidden">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             
// // //              {/* LEFT: Content */}
// // //              <motion.div 
// // //                className="max-w-xl"
// // //                initial={{ opacity: 0, x: -50 }}
// // //                whileInView={{ opacity: 1, x: 0 }}
// // //                viewport={{ once: true }}
// // //                transition={{ duration: 0.8 }}
// // //              >
// // //                 <h2 className="text-5xl md:text-6xl font-serif text-[#1E5BA8] mb-6 leading-tight">
// // //                    Step Into <br/>
// // //                    <span className="text-[#2B6CB8]">Healthy Living</span>
// // //                 </h2>
                
// // //                 <div className="border-l-4 border-[#D4A574] pl-6 mb-12">
// // //                   <p className="text-gray-800 font-bold uppercase tracking-wide text-sm leading-relaxed">
// // //                      AT RRL PALM ALTEZZE, YOU DON'T JUST GET A <br/>
// // //                      HOME — YOU GET A LIFESTYLE.
// // //                   </p>
// // //                 </div>
  
// // //                 <div className="flex flex-col sm:flex-row gap-10">
// // //                    {/* Icon Block 1 */}
// // //                    <div className="flex flex-col items-start gap-4 group">
// // //                       <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
// // //                          <Wind className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
// // //                       </div>
// // //                       <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">
// // //                          FRESH AIR & <br/>GREEN SURROUNDINGS
// // //                       </p>
// // //                    </div>
  
// // //                    {/* Icon Block 2 */}
// // //                    <div className="flex flex-col items-start gap-4 group">
// // //                       <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
// // //                          <Footprints className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
// // //                       </div>
// // //                       <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">
// // //                          SAFE, WELL-LIT <br/>TRACK FOR ALL AGES
// // //                       </p>
// // //                    </div>
// // //                 </div>
// // //              </motion.div>

// // //              {/* RIGHT: Image */}
// // //             <motion.div
// // //               className="hidden lg:block relative h-full"
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={scaleVariants}
// // //             >
// // //                <img 
// // //                 //  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764572047/WhatsApp_Image_2025-12-01_at_10.21.07_AM_tzwvjj.jpg"
// // //                  src=""
// // //                  alt="RRL Palm Altezze Healthy Living" 
// // //                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
// // //                />
// // //                {/* Decorative Gradient Overlay */}
// // //                <div className="absolute inset-0 bg-gradient-to-t from-[#1E5BA8]/40 to-transparent"></div>
// // //              </motion.div>

// // //            </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== NEW: LUXURY HIGHLIGHT SECTION (Matches "3 BHK Luxurious Flat" Image) ==========
// // //   const LuxuryHighlightSection = () => {
// // //     return (
// // //       <section className="py-20 bg-[#F9F6F3]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //             {/* Left: Building Image */}
// // //             <motion.div
// // //                initial={{ opacity: 0, x: -50 }}
// // //                whileInView={{ opacity: 1, x: 0 }}
// // //                viewport={{ once: true }}
// // //                transition={{ duration: 0.8 }}
// // //             >
// // //               <img 
// // //                 // src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764572041/WhatsApp_Image_2025-12-01_at_10.21.07_AM_1_yag3h7.jpg" 
// // //                 src="" 
// // //                 alt="Luxurious 3 BHK Flat" 
// // //                 className="rounded-3xl shadow-2xl w-full object-contain h-[600px]"
// // //               />
// // //             </motion.div>

// // //             {/* Right: Content */}
// // //             <motion.div 
// // //                className="space-y-8"
// // //                initial={{ opacity: 0, x: 50 }}
// // //                whileInView={{ opacity: 1, x: 0 }}
// // //                viewport={{ once: true }}
// // //                transition={{ duration: 0.8 }}
// // //             >
// // //                <div>
// // //                   <h2 className="text-5xl font-bold text-[#1E5BA8] mb-2">3 BHK <span className="text-gray-900 font-light">LUXURIOUS FLAT</span></h2>
// // //                   <div className="flex items-center gap-4">
// // //                      <div className="h-1 w-20 bg-[#D4A574]"></div>
// // //                      <p className="text-xl font-bold text-[#9A2C2C] tracking-wide">WITH WORLD CLASS AMENITIES</p>
// // //                   </div>
// // //                </div>

// // //                <div className="text-center lg:text-left">
// // //                   <span className="text-6xl font-serif text-[#9A2C2C] font-bold">30+</span>
// // //                   <span className="text-2xl font-serif text-black ml-2">AMENITIES</span>
// // //                </div>

// // //                {/* Amenities Grid */}
// // //                <div className="bg-[#1E5BA8] rounded-3xl p-8 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// // //                   <div className="flex flex-col items-center gap-2">
// // //                      <Waves className="w-10 h-10" />
// // //                      <span className="text-xs font-semibold uppercase">Jacuzzi</span>
// // //                   </div>
// // //                   <div className="flex flex-col items-center gap-2">
// // //                      <Music className="w-10 h-10" />
// // //                      <span className="text-xs font-semibold uppercase">Party Hall</span>
// // //                   </div>
// // //                   <div className="flex flex-col items-center gap-2">
// // //                      <Dumbbell className="w-10 h-10" />
// // //                      <span className="text-xs font-semibold uppercase">Gymnasium</span>
// // //                   </div>
// // //                   <div className="flex flex-col items-center gap-2">
// // //                      <MonitorPlay className="w-10 h-10" />
// // //                      <span className="text-xs font-semibold uppercase">Mini Theatre</span>
// // //                   </div>
// // //                </div>

// // //                {/* SBI Approval */}
// // //                <div className="pt-4">
// // //                   <p className="text-lg font-bold text-black mb-3">PROJECT APPROVED BY</p>
// // //                   <div className="bg-white inline-flex items-center gap-3 px-6 py-3 rounded-xl shadow-md border border-gray-100">
// // //                      <div className="bg-[#00A5E5] rounded-full p-2">
// // //                        <Landmark className="w-6 h-6 text-white" />
// // //                      </div>
// // //                      <div>
// // //                         <span className="text-[#280071] font-bold text-2xl">SBI</span>
// // //                         <span className="text-[#280071] block text-xs font-semibold tracking-wider">HOME LOANS</span>
// // //                      </div>
// // //                   </div>
// // //                </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL AMENITIES SECTION ==========
// // //   const AmenitiesSection = () => {
// // //     // const amenities = [
// // //     //   { name: "Reception Hall", image: "/palm-altezze/palm-altezze (1).jpeg" },
// // //     //   { name: "Lounge Area", image: "/palm-altezze/palm-altezze (2).jpeg" },
// // //     //   { name: "Lounge / Seating Area", image: "/palm-altezze/palm-altezze (3).jpeg" },
// // //     //   { name: "Kids Play Area Indoor", image: "/palm-altezze/palm-altezze (4).jpeg" },
// // //     //   { name: "Library / Reading Lounge", image: "/palm-altezze/palm-altezze (5).jpeg" },
// // //     //   { name: "Kids Creche / Play School", image: "/palm-altezze/palm-altezze (6).jpeg" },
// // //     //   { name: "Well-equipped Gymnasium", image: "/palm-altezze/palm-altezze (7).jpeg" },
// // //     //   { name: "Reception Desk", image: "/palm-altezze/palm-altezze (8).jpeg" },
// // //     //   { name: "Billiards / Pool Table", image: "/palm-altezze/palm-altezze (9).jpeg" },
// // //     //   { name: "Mini Theatre", image: "/palm-altezze/palm-altezze (10).jpeg" },
// // //     //   { name: "Gymnasium", image: "/palm-altezze/palm-altezze (11).jpeg" },
// // //     //   { name: "Party Hall", image: "/palm-altezze/palm-altezze (12).jpeg" },
// // //     //   { name: "Clubhouse Exterior", image: "/palm-altezze/palm-altezze (13).jpeg" },
// // //     //   { name: "Clubhouse Rooftop", image: "/palm-altezze/palm-altezze (14).jpeg" },
// // //     //   { name: "Vertical Garden / Green Wall", image: "/palm-altezze/palm-altezze (15).jpeg" },
// // //     //   { name: "Squash Court", image: "/palm-altezze/palm-altezze (16).jpeg" },
// // //     //   { name: "Swimming Pool", image: "/palm-altezze/palm-altezze (17).jpeg" },
// // //     //   { name: "High-rise Apartment Building", image: "/palm-altezze/palm-altezze (18).jpeg" },
// // //     //   { name: "Jacuzzi", image: "/palm-altezze/palm-altezze (19).jpeg" },
// // //     //   { name: "Building Exterior View", image: "/palm-altezze/palm-altezze (20).jpeg" },
// // //     //   { name: "Building Facade / Balconies", image: "/palm-altezze/palm-altezze (21).jpeg" },
// // //     //   { name: "Landscaped Walkway", image: "/palm-altezze/palm-altezze (22).jpeg" },
// // //     //   { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
// // //     //   { name: "Jogging Track", image: "/palm-altezze/palm-altezze (24).jpeg" },
// // //     //   { name: "Landscaped Garden", image: "/palm-altezze/palm-altezze (25).jpeg" },
// // //     //   { name: "Landscaped Garden with Seating", image: "/palm-altezze/palm-altezze (26).jpeg" },
// // //     //   { name: "Amphitheatre", image: "/palm-altezze/palm-altezze (27).jpeg" },
// // //     //   { name: "Central Garden / Seating Area", image: "/palm-altezze/palm-altezze (28).jpeg" },
// // //     //   { name: "Children Play Area", image: "/palm-altezze/palm-altezze (29).jpeg" },
// // //     //   { name: "Children Play Area", image: "/palm-altezze/palm-altezze (30).jpeg" },
// // //     //   { name: "Park and Play Area", image: "/palm-altezze/palm-altezze (31).jpeg" },
// // //     //   { name: "Landscaped Lawn", image: "/palm-altezze/palm-altezze (32).jpeg" },
// // //     //   { name: "Swimming Pool View", image: "/palm-altezze/palm-altezze (33).jpeg" },
// // //     //   { name: "Multipurpose Court", image: "/palm-altezze/palm-altezze (34).jpeg" },
// // //     //   { name: "Rooftop Soccer Pitch", image: "/palm-altezze/palm-altezze (35).jpeg" },
// // //     //   { name: "Aerial View of Complex", image: "/palm-altezze/palm-altezze (36).jpeg" },
// // //     //   { name: "Aerial View of Tower", image: "/palm-altezze/palm-altezze (37).jpeg" },
// // //     //   { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
// // //     //   { name: "Park and Play Area", image: "/palm-altezze/palm-altezze (31).jpeg" },
// // //     //   { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
// // //     // ]
// // //     const amenities = [
// // //       { name: "Reception Hall", image: "/placeholder.svg" },
// // //       { name: "Lounge Area", image: "/placeholder.svg" },
// // //       { name: "Lounge / Seating Area", image: "/placeholder.svg" },
// // //       { name: "Kids Play Area Indoor", image: "/placeholder.svg" },
// // //       { name: "Library / Reading Lounge", image: "/placeholder.svg" },
// // //       { name: "Kids Creche / Play School", image: "/placeholder.svg" },
// // //       { name: "Well-equipped Gymnasium", image: "/placeholder.svg" },
// // //       { name: "Reception Desk", image: "/placeholder.svg" },
// // //       { name: "Billiards / Pool Table", image: "/placeholder.svg" },
// // //       { name: "Mini Theatre", image: "/placeholder.svg" },
// // //       { name: "Gymnasium", image: "/placeholder.svg" },
// // //       { name: "Party Hall", image: "/placeholder.svg" },
// // //       { name: "Clubhouse Exterior", image: "/placeholder.svg" },
// // //       { name: "Clubhouse Rooftop", image: "/placeholder.svg" },
// // //       { name: "Vertical Garden / Green Wall", image: "/placeholder.svg" },
// // //       { name: "Squash Court", image: "/placeholder.svg" },
// // //       { name: "Swimming Pool", image: "/placeholder.svg" },
// // //       { name: "High-rise Apartment Building", image: "/placeholder.svg" },
// // //       { name: "Jacuzzi", image: "/placeholder.svg" },
// // //       { name: "Building Exterior View", image: "/placeholder.svg" },
// // //       { name: "Building Facade / Balconies", image: "/placeholder.svg" },
// // //       { name: "Landscaped Walkway", image: "/placeholder.svg" },
// // //       { name: "Paved Pathway", image: "/placeholder.svg" },
// // //       { name: "Jogging Track", image: "/placeholder.svg" },
// // //       { name: "Landscaped Garden", image: "/placeholder.svg" },
// // //       { name: "Landscaped Garden with Seating", image: "/placeholder.svg" },
// // //       { name: "Amphitheatre", image: "/placeholder.svg" },
// // //       { name: "Central Garden / Seating Area", image: "/placeholder.svg" },
// // //       { name: "Children Play Area", image: "/placeholder.svg" },
// // //       { name: "Children Play Area", image: "/placeholder.svg" },
// // //       { name: "Park and Play Area", image: "/placeholder.svg" },
// // //       { name: "Landscaped Lawn", image: "/placeholder.svg" },
// // //       { name: "Swimming Pool View", image: "/placeholder.svg" },
// // //       { name: "Multipurpose Court", image: "/placeholder.svg" },
// // //       { name: "Rooftop Soccer Pitch", image: "/placeholder.svg" },
// // //       { name: "Aerial View of Complex", image: "/placeholder.svg" },
// // //       { name: "Aerial View of Tower", image: "/placeholder.svg" },
// // //       { name: "Paved Pathway", image: "/placeholder.svg" },
// // //       { name: "Park and Play Area", image: "/placeholder.svg" },
// // //       { name: "Paved Pathway", image: "/placeholder.svg" },
// // //     ]

// // //     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

// // //     return (
// // //       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div
// // //             className="text-center mb-16"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.h2
// // //               className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //               variants={itemVariants}
// // //             >
// // //               World-Class Amenities
// // //             </motion.h2>
// // //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //               RRL Palm Altezze features 40+ premium amenities that cater to every age group. From infinity-edge pools to
// // //               yoga decks, your lifestyle extends far beyond your home.
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             {amenities.map((amenity, index) => (
// // //               <motion.div key={index} variants={itemVariants}>
// // //                 <Card
// // //                   className="overflow-hidden cursor-pointer group border-0 shadow-md hover:shadow-xl transition-all duration-300"
// // //                   onMouseEnter={() => setHoveredIndex(index)}
// // //                   onMouseLeave={() => setHoveredIndex(null)}
// // //                 >
// // //                   <div className="relative h-40 overflow-hidden bg-gray-200">
// // //                     <motion.img
// // //                       src={amenity.image || "/placeholder.svg"}
// // //                       alt={amenity.name}
// // //                       className="w-full h-full object-cover"
// // //                       whileHover={{ scale: 1.1 }}
// // //                       transition={{ duration: 0.3 }}
// // //                     />
// // //                     <motion.div
// // //                       className="absolute inset-0 bg-gradient-to-t from-[#1E5BA8]/80 to-transparent flex items-end p-3"
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
// // //                       transition={{ duration: 0.2 }}
// // //                     >
// // //                       <p className="text-white font-semibold text-sm">{amenity.name}</p>
// // //                     </motion.div>
// // //                   </div>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>

// // //           <motion.div
// // //             className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-[#1E5BA8]/10 shadow-lg"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={slideInVariants}
// // //           >
// // //             <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Amenities Overview</h3>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //               <div>
// // //                 <h4 className="font-bold text-lg text-[#D4A574] mb-4">Ground Floor</h4>
// // //                 <ul className="space-y-2 text-gray-700">
// // //                   {["Reception Hall", "Library", "Indoor Kids Play Area", "Indoor Games", "Meditation Hall"].map(
// // //                     (item, i) => (
// // //                       <li key={i} className="flex items-start gap-2">
// // //                         <span className="text-[#D4A574] font-bold">•</span>
// // //                         <span>{item}</span>
// // //                       </li>
// // //                     ),
// // //                   )}
// // //                 </ul>
// // //               </div>
// // //               <div>
// // //                 <h4 className="font-bold text-lg text-[#D4A574] mb-4">1st & 2nd Floor</h4>
// // //                 <ul className="space-y-2 text-gray-700">
// // //                   {[
// // //                     "Lounge Area with Party Hall",
// // //                     "Ultra Gym with Steam & Sauna Bath",
// // //                     "Cardio Exercise Room",
// // //                     "Mini Theatre",
// // //                   ].map((item, i) => (
// // //                     <li key={i} className="flex items-start gap-2">
// // //                       <span className="text-[#D4A574] font-bold">•</span>
// // //                       <span>{item}</span>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL SPECIFICATIONS SECTION ==========
// // //   const SpecificationsSection = () => (
// // //     <section className="py-20 bg-white">
// // //       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //         <motion.div
// // //           className="text-center mb-16"
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           variants={containerVariants}
// // //         >
// // //           <motion.h2
// // //             className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //             variants={itemVariants}
// // //           >
// // //             Premium Specifications
// // //           </motion.h2>
// // //           <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //             Built with world-class materials and cutting-edge construction technology
// // //           </motion.p>
// // //         </motion.div>

// // //         <Tabs defaultValue="structure" className="w-full">
// // //           <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100">
// // //             <TabsTrigger value="structure" className="data-[state=active]:bg-[#1E5BA8] data-[state=active]:text-white">
// // //               Structure
// // //             </TabsTrigger>
// // //             <TabsTrigger
// // //               value="architecture"
// // //               className="data-[state=active]:bg-[#1E5BA8] data-[state=active]:text-white"
// // //             >
// // //               Architecture
// // //             </TabsTrigger>
// // //             <TabsTrigger value="services" className="data-[state=active]:bg-[#1E5BA8] data-[state=active]:text-white">
// // //               Services
// // //             </TabsTrigger>
// // //           </TabsList>

// // //           {["structure", "architecture", "services"].map((tab) => (
// // //             <TabsContent key={tab} value={tab} className="space-y-4">
// // //               <motion.div
// // //                 className="grid grid-cols-1 md:grid-cols-2 gap-6"
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={containerVariants}
// // //               >
// // //                 {(tab === "structure"
// // //                   ? [
// // //                     { title: "Framed Structure", desc: "Mivan Constructions - Advanced formwork system" },
// // //                     { title: "External Walls", desc: '8" RCC walls with texture finish plastering' },
// // //                     { title: "Internal Walls", desc: '6" solid blocks with smooth cement finish' },
// // //                     { title: "Earthquake Resistant", desc: "Designed as per relevant IS codes" },
// // //                     { title: "Automation", desc: "Pump and light provision automated" },
// // //                     { title: "Structural Efficiency", desc: "Optimized design for maximum space" },
// // //                   ]
// // //                   : tab === "architecture"
// // //                     ? [
// // //                       { title: "Main Doors", desc: "Teak wood frame with Veneer polish" },
// // //                       { title: "Internal Doors", desc: "Salwood frames with designer skin molded shutters" },
// // //                       { title: "Windows", desc: "UPVC windows with mosquito mesh" },
// // //                       { title: "Flooring", desc: "2'x4' vitrified tiles for living, dining, kitchen & bedrooms" },
// // //                       { title: "Balcony Flooring", desc: '15"x15" Anti-skid tiles' },
// // //                       { title: "Bathroom Tiles", desc: "2'x1' anti-skid ceramic tiles with 7' height dado" },
// // //                       { title: "Painting", desc: "2 coats Nippon Putty, primer & 2 coats emulsion" },
// // //                       { title: "Exterior Paint", desc: "Nippon Exterior for weather resistance" },
// // //                     ]
// // //                     : [
// // //                       { title: "Plumbing", desc: "Supreme/Ashirvad CPVC fittings with Jaguar/Parryware sanitary" },
// // //                       {
// // //                         title: "Electrical",
// // //                         desc: "Concealed Finolex/Anchor copper wiring with Anchor Roma switches",
// // //                       },
// // //                       { title: "AC Points", desc: "AC point in bedrooms with separate circuits" },
// // //                       { title: "Geyser", desc: "Geyser provision with separate circuit" },
// // //                       { title: "Communication", desc: "Telephone & TV points in living and master bedroom" },
// // //                       { title: "Water Supply", desc: "Bore well with overhead tank supply" },
// // //                       {
// // //                         title: "Lifts",
// // //                         desc: "3 fully automatic lifts - 2x8 passenger, 1x service lift (KONE/OTIS)",
// // //                       },
// // //                       { title: "Generator Backup", desc: "100% power backup for flats, lifts, motor & common areas" },
// // //                     ]
// // //                 ).map((item, index) => (
// // //                   <motion.div key={index} variants={itemVariants}>
// // //                     <Card className="p-6 border-l-4 border-l-[#D4A574] bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
// // //                       <h4 className="font-bold text-lg text-[#1E5BA8] mb-2">{item.title}</h4>
// // //                       <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
// // //                     </Card>
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>
// // //             </TabsContent>
// // //           ))}
// // //         </Tabs>
// // //       </div>
// // //     </section>
// // //   )

// // //   // ========== ORIGINAL FLOOR PLANS SECTION ==========
// // //   const FloorPlansSection = () => {
// // //     const floorPlans = [
// // //       {
// // //         type: "2 BHK",
// // //         facing: "North",
// // //         area: "1265 sq.ft",
// // //         description: "Compact and efficient layout perfect for small families",
// // //       },
// // //       {
// // //         type: "2 BHK",
// // //         facing: "North",
// // //         area: "1495 sq.ft",
// // //         description: "Spacious 2-bedroom with premium finishes",
// // //       },
// // //       {
// // //         type: "3 BHK",
// // //         facing: "North",
// // //         area: "1630 sq.ft",
// // //         description: "Luxurious 3-bedroom with ample living space",
// // //       },
// // //       {
// // //         type: "3 BHK",
// // //         facing: "East",
// // //         area: "1560 sq.ft",
// // //         description: "East-facing with natural light throughout",
// // //       },
// // //       {
// // //         type: "3 BHK",
// // //         facing: "East",
// // //         area: "1510 sq.ft",
// // //         description: "Premium 3-bedroom with optimized layout",
// // //       },
// // //     ]

// // //     return (
// // //       <section className="py-20 bg-gradient-to-b from-white to-gray-50">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div
// // //             className="text-center mb-16"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.h2
// // //               className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //               variants={itemVariants}
// // //             >
// // //               Floor Plans
// // //             </motion.h2>
// // //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //               Thoughtfully designed layouts with optimal space utilization
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             {floorPlans.map((plan, index) => (
// // //               <motion.div key={index} variants={itemVariants}>
// // //                 <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
// // //                   <div className="space-y-4">
// // //                     <div className="bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg p-4">
// // //                       <p className="text-2xl font-bold text-[#1E5BA8]">{plan.type}</p>
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-sm text-gray-600">Facing</p>
// // //                       <p className="font-semibold text-gray-900">{plan.facing}</p>
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-sm text-gray-600">Saleable Area</p>
// // //                       <p className="font-semibold text-gray-900">{plan.area}</p>
// // //                     </div>
// // //                     <p className="text-sm text-gray-600 italic">{plan.description}</p>
// // //                   </div>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-1 lg:grid-cols-2 gap-8"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             {[
// // //               {
// // //                 title: "Master Plan",
// // //                 desc: "Comprehensive site layout showing all amenities, open spaces, and building placement",
// // //                 image: "/palm-altezze/masterplan.png",
// // //               },
// // //               {
// // //                 title: "Typical Floor Plan",
// // //                 desc: "Detailed layout of a typical residential floor with all apartment configurations",
// // //                 image: "/palm-altezze/floorplan.png",
// // //               },
// // //             ].map((plan, index) => (
// // //               <motion.div key={index} variants={itemVariants}>
// // //                 <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
// // //                   <div className="bg-gray-200 h-[800px] flex items-center justify-center">
// // //                     <img
// // //                       src={plan.image}
// // //                       alt={plan.title}
// // //                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
// // //                     />
// // //                   </div>
// // //                   <div className="p-6">
// // //                     <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">{plan.title}</h3>
// // //                     <p className="text-gray-600 text-sm leading-relaxed">{plan.desc}</p>
// // //                   </div>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL MID PAGE CTA SECTION ==========
// // //   const MidPageCtaSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// // //     const initialData = { name: "", email: "", phone: "" }
// // //     const [data, setData] = useState(initialData)

// // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //       const { name, value } = e.target
// // //       setData((prev) => ({ ...prev, [name]: value }))
// // //     }

// // //     const localSubmit = async (e: React.FormEvent) => {
// // //       e.preventDefault()
// // //       const success = await onSubmit(data)
// // //       if (success) {
// // //         setData(initialData) // Reset form on success
// // //       }
// // //     }

// // //     return (
// // //       <section className="py-20 bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-3xl">
// // //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleVariants}>
// // //             <Card className="p-8 border-0 shadow-lg bg-white">
// // //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 text-center">Interested? Get a Call Back</h3>
// // //               <form onSubmit={localSubmit} className="space-y-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Full Name</label>
// // //                   <input
// // //                     type="text"
// // //                     name="name"
// // //                     value={data.name}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                     placeholder="Your name"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Email Address</label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={data.email}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                     placeholder="your@email.com"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Phone Number</label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={data.phone}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                     placeholder="+91 XXXXX XXXXX"
// // //                   />
// // //                 </div>
// // //                 <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">
// // //                   Request a Call Back
// // //                 </Button>
// // //               </form>
// // //             </Card>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL CONNECTIVITY SECTION ==========
// // //   const ConnectivitySection = () => {
// // //     const connectivity = [
// // //       {
// // //         icon: Train,
// // //         title: "Public Transport",
// // //         items: [
// // //           "Purple Line Metro - Near Whitefield",
// // //           "BMTC Buses",
// // //           "Ola, Uber, Rapido",
// // //           "State Highway 35 connectivity",
// // //         ],
// // //       },
// // //       {
// // //         icon: Hospital,
// // //         title: "Hospitals Nearby",
// // //         items: [
// // //           "Manipal Hospital, Varthur",
// // //           "City Hospital",
// // //           "Suraksha Multispeciality Hospital",
// // //           "Silicon City Hospital Pvt. Ltd.",
// // //         ],
// // //       },
// // //       {
// // //         icon: BookOpen,
// // //         title: "Schools Nearby",
// // //         items: ["Vasishta", "Samruddhi", "Vagdevi", "Chrysalis High"],
// // //       },
// // //       {
// // //         icon: ShoppingCart,
// // //         title: "Malls Nearby",
// // //         items: ["Phoenix Marketcity - Whitefield", "Virginia Mall", "Park Square Mall", "Inorbit Mall"],
// // //       },
// // //     ]

// // //     return (
// // //       <section className="py-20 bg-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div
// // //             className="text-center mb-16"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.h2
// // //               className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //               variants={itemVariants}
// // //             >
// // //               Prime Location
// // //             </motion.h2>
// // //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //               Strategically located in the heart of IT Hub with excellent connectivity to all major areas
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             {connectivity.map((item, index) => {
// // //               const Icon = item.icon
// // //               return (
// // //                 <motion.div key={index} variants={itemVariants}>
// // //                   <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
// // //                     <div className="flex items-center gap-3 mb-4">
// // //                       <div className="p-3 bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg">
// // //                         <Icon className="w-6 h-6 text-[#1E5BA8]" />
// // //                       </div>
// // //                       <h3 className="font-bold text-lg text-[#1E5BA8]">{item.title}</h3>
// // //                     </div>
// // //                     <ul className="space-y-2">
// // //                       {item.items.map((subitem, subindex) => (
// // //                         <li key={subindex} className="flex items-start gap-2 text-sm text-gray-600">
// // //                           <span className="text-[#D4A574] font-bold mt-1">→</span>
// // //                           <span>{subitem}</span>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </Card>
// // //                 </motion.div>
// // //               )
// // //             })}
// // //           </motion.div>

// // //           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInVariants}>
// // //             <Card className="overflow-hidden border-0 shadow-lg">
// // //               <div className="h-96 w-full">
// // //                 <iframe
// // //                   title="Varthur Map"
// // //                   width="100%"
// // //                   height="100%"
// // //                   className="border-0"
// // //                   loading="lazy"
// // //                   allowFullScreen
// // //                   src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed"
// // //                 ></iframe>
// // //               </div>
// // //               <div className="p-6">
// // //                 <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">Varthur, Bangalore</h3>
// // //                 <p className="text-gray-600 leading-relaxed">
// // //                   RRL Palm Altezze is strategically positioned in Varthur, one of Bangalore's fastest-growing residential
// // //                   areas, offering seamless connectivity to Whitefield, Sarjapur, and other major business hubs.
// // //                 </p>
// // //               </div>
// // //             </Card>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL FAQS SECTION ==========
// // //   const FAQsSection = () => {
// // //     const faqs = [
// // //       {
// // //         category: "General",
// // //         questions: [
// // //           {
// // //             q: "What is the total area of RRL Palm Altezze?",
// // //             a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors.",
// // //           },
// // //           {
// // //             q: "How many units are there per floor?",
// // //             a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments with varying configurations.",
// // //           },
// // //           {
// // //             q: "What is the price range?",
// // //             a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments.",
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         category: "Amenities",
// // //         questions: [
// // //           {
// // //             q: "How many amenities are available?",
// // //             a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts, and much more.",
// // //           },
// // //           {
// // //             q: "Is there a clubhouse?",
// // //             a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities spread across ground, 1st, and 2nd floors.",
// // //           },
// // //           {
// // //             q: "Are there facilities for children?",
// // //             a: "Yes, we have indoor and outdoor children's play areas, kids' pool, and various recreational facilities.",
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         category: "Construction & Specifications",
// // //         questions: [
// // //           {
// // //             q: "What construction technology is used?",
// // //             a: "We use Mivan construction technology with RCC framed structure designed as per IS codes for earthquake resistance.",
// // //           },
// // //           {
// // //             q: "What is the power backup arrangement?",
// // //             a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting.",
// // //           },
// // //           {
// // //             q: "What are the flooring specifications?",
// // //             a: "Vitrified tiles (2'x4') for living, dining, kitchen & bedrooms, and anti-skid tiles for balconies.",
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         category: "Location & Connectivity",
// // //         questions: [
// // //           {
// // //             q: "How is the connectivity to Whitefield?",
// // //             a: "Located along State Highway 35, which directly connects to Whitefield, Brookfield, and other major areas.",
// // //           },
// // //           {
// // //             q: "Is there metro connectivity?",
// // //             a: "Yes, Nallurahalli Metro Station is nearby, providing easy access to the Purple Line.",
// // //           },
// // //           {
// // //             q: "What schools and hospitals are nearby?",
// // //             a: "Multiple schools including Chrysalis High, Delhi Public School, and hospitals like Manipal Hospital are within proximity.",
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         category: "Payment & Possession",
// // //         questions: [
// // //           {
// // //             q: "What is the payment plan?",
// // //             a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available.",
// // //           },
// // //           {
// // //             q: "When is the expected possession?",
// // //             a: "Possession is expected as per the project timeline. Contact our sales team for specific details.",
// // //           },
// // //           {
// // //             q: "Are there any hidden charges?",
// // //             a: "No hidden charges. All costs are transparent and clearly mentioned in the agreement.",
// // //           },
// // //         ],
// // //       },
// // //     ]

// // //     const [openQuestions, setOpenQuestions] = useState<Record<number, number | null>>({})

// // //     const toggleQuestion = (sectionIndex: number, qIndex: number) => {
// // //       setOpenQuestions((prev) => ({
// // //         ...prev,
// // //         [sectionIndex]: prev[sectionIndex] === qIndex ? null : qIndex,
// // //       }))
// // //     }

// // //     return (
// // //       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           {/* Header */}
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance">
// // //               Frequently Asked Questions
// // //             </h2>
// // //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // //               Find answers to common questions about RRL Palm Altezze
// // //             </p>
// // //           </div>

// // //           {/* Accordion */}
// // //           <div className="space-y-12">
// // //             {faqs.map((section, sectionIndex) => (
// // //               <div key={sectionIndex}>
// // //                 <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 pb-4 border-b-2 border-[#D4A574] text-center">
// // //                   {section.category}
// // //                 </h3>

// // //                 <div className="space-y-4">
// // //                   {section.questions.map((item, qIndex) => {
// // //                     const isOpen = openQuestions[sectionIndex] === qIndex

// // //                     return (
// // //                       <Card
// // //                         key={qIndex}
// // //                         className={`p-4 border-0 bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden ${isOpen ? "bg-gradient-to-r from-[#E8F1FF] to-white" : ""
// // //                           }`}
// // //                         onClick={() => toggleQuestion(sectionIndex, qIndex)}
// // //                       >
// // //                         <div className="flex justify-between items-center">
// // //                           <h4 className="font-bold text-lg text-[#D4A574]">{item.q}</h4>
// // //                           <motion.div
// // //                             animate={{ rotate: isOpen ? 45 : 0 }}
// // //                             className="text-2xl font-bold text-[#1E5BA8]"
// // //                           >
// // //                             +
// // //                           </motion.div>
// // //                         </div>

// // //                         {/* Animated answer */}
// // //                         <AnimatePresence>
// // //                           {isOpen && (
// // //                             <motion.div
// // //                               initial={{ opacity: 0, height: 0 }}
// // //                               animate={{ opacity: 1, height: "auto" }}
// // //                               exit={{ opacity: 0, height: 0 }}
// // //                               transition={{ duration: 0.3 }}
// // //                               className="mt-2 pl-4"
// // //                             >
// // //                               <p className="text-gray-700 leading-relaxed">{item.a}</p>
// // //                             </motion.div>
// // //                           )}
// // //                         </AnimatePresence>
// // //                       </Card>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Call-to-action */}
// // //           <div className="mt-16 bg-gradient-to-r from-[#1E5BA8] to-[#2B6CB8] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
// // //             <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
// // //             <p className="text-lg mb-6 opacity-90">Our sales team is ready to help you with any queries</p>
// // //             <a
// // //               href="tel:+918494966966"
// // //               className="inline-block bg-[#D4A574] text-[#1E5BA8] font-bold px-8 py-3 rounded-lg hover:bg-[#C49564] transition-colors"
// // //             >
// // //               Call: 84 94 966 966
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL AWARDS SECTION ==========
// // //   const AwardsSection = () => {
// // //     const awards = [
// // //       {
// // //         title: "Best Residential Project",
// // //         year: "2024",
// // //         organization: "Bangalore Real Estate Awards",
// // //       },
// // //       {
// // //         title: "Sustainable Development Award",
// // //         year: "2024",
// // //         organization: "Green Building Council",
// // //       },
// // //       {
// // //         title: "Premium Architecture Design",
// // //         year: "2023",
// // //         organization: "Indian Architecture Forum",
// // //       },
// // //       {
// // //         title: "Customer Choice Award",
// // //         year: "2023",
// // //         organization: "Real Estate Excellence",
// // //       },
// // //     ]

// // //     return (
// // //       <section className="py-20 bg-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div
// // //             className="text-center mb-16"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.h2
// // //               className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //               variants={itemVariants}
// // //             >
// // //               Awards & Recognition
// // //             </motion.h2>
// // //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //               Recognized for excellence in design, construction, and customer satisfaction
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             {awards.map((award, index) => (
// // //               <motion.div key={index} variants={itemVariants}>
// // //                 <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
// // //                   <div className="flex justify-center mb-4">
// // //                     <div className="p-4 bg-gradient-to-br from-[#D4A574]/20 to-[#D4A574]/10 rounded-full">
// // //                       <Award className="w-8 h-8 text-[#D4A574]" />
// // //                     </div>
// // //                   </div>
// // //                   <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">{award.title}</h3>
// // //                   <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
// // //                   <p className="text-sm font-semibold text-[#D4A574]">{award.year}</p>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL CONTACT SECTION ==========
// // //   const ContactSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// // //     const initialData = { name: "", email: "", phone: "", message: "" }
// // //     const [data, setData] = useState(initialData)

// // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //       const { name, value } = e.target
// // //       setData((prev) => ({ ...prev, [name]: value }))
// // //     }

// // //     const localSubmit = async (e: React.FormEvent) => {
// // //       e.preventDefault()
// // //       const success = await onSubmit(data)
// // //       if (success) {
// // //         setData(initialData)
// // //       }
// // //     }

// // //     return (
// // //       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div
// // //             className="text-center mb-16"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.h2
// // //               className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
// // //               variants={itemVariants}
// // //             >
// // //               Get in Touch
// // //             </motion.h2>
// // //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// // //               Download our brochure or connect with our sales team
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid grid-cols-1 lg:grid-cols-2 gap-12"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={containerVariants}
// // //           >
// // //             <motion.div className="space-y-8" variants={containerVariants}>
// // //               <div>
// // //                 <h3 className="text-2xl font-bold text-[#1E5BA8] mb-8">Contact Information</h3>
// // //                 <div className="space-y-6">
// // //                   {[
// // //                     {
// // //                       icon: Phone,
// // //                       title: "Phone",
// // //                       content: "+91 84 94 966 966",
// // //                       href: "tel:+918494966966",
// // //                     },
// // //                     {
// // //                       icon: Mail,
// // //                       title: "Email",
// // //                       content: "enquiry@rrlbuildersanddevelopers.com",
// // //                       href: "mailto:enquiry@rrlbuildersanddevelopers.com",
// // //                     },
// // //                     {
// // //                       icon: MapPin,
// // //                       title: "Address",
// // //                       content: "73/5, RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 562 125",
// // //                     },
// // //                   ].map((item, index) => {
// // //                     const Icon = item.icon
// // //                     return (
// // //                       <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
// // //                         <div className="p-3 bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg flex-shrink-0">
// // //                           <Icon className="w-6 h-6 text-[#1E5BA8]" />
// // //                         </div>
// // //                         <div>
// // //                           <p className="font-semibold text-[#1E5BA8]">{item.title}</p>
// // //                           {item.href ? (
// // //                             <a href={item.href} className="text-[#D4A574] hover:underline">
// // //                               {item.content}
// // //                             </a>
// // //                           ) : (
// // //                             <p className="text-gray-600">{item.content}</p>
// // //                           )}
// // //                           {item.title === "Download Brochure" && (
// // //                             <Button
// // //                               variant="outline"
// // //                               size="sm"
// // //                               className="mt-2 bg-transparent border-[#1E5BA8] text-[#1E5BA8] hover:bg-[#1E5BA8]/10"
// // //                             >
// // //                               Download PDF
// // //                             </Button>
// // //                           )}
// // //                         </div>
// // //                       </motion.div>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div variants={itemVariants}>
// // //               <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
// // //                 <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Send us a Message</h3>
// // //                 <form onSubmit={localSubmit} className="space-y-4">
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Full Name</label>
// // //                     <input
// // //                       type="text"
// // //                       name="name"
// // //                       value={data.name}
// // //                       onChange={handleChange}
// // //                       required
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                       placeholder="Your name"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Email Address</label>
// // //                     <input
// // //                       type="email"
// // //                       name="email"
// // //                       value={data.email}
// // //                       onChange={handleChange}
// // //                       required
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                       placeholder="your@email.com"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Phone Number</label>
// // //                     <input
// // //                       type="tel"
// // //                       name="phone"
// // //                       value={data.phone}
// // //                       onChange={handleChange}
// // //                       required
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                       placeholder="+91 XXXXX XXXXX"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Message</label>
// // //                     <textarea
// // //                       name="message"
// // //                       value={data.message}
// // //                       onChange={handleChange}
// // //                       rows={4}
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition resize-none"
// // //                       placeholder="Your message..."
// // //                     />
// // //                   </div>
// // //                   <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">
// // //                     Send Message
// // //                   </Button>
// // //                 </form>
// // //               </Card>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ORIGINAL ENQUIRY MODAL ==========
// // //   const EnquiryModal = ({
// // //     onSubmit,
// // //   }: {
// // //     onSubmit: (data: FormData) => Promise<boolean>
// // //   }) => {
// // //     const initialData = { name: "", email: "", phone: "" }
// // //     const [data, setData] = useState(initialData)

// // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //       const { name, value } = e.target
// // //       setData((prev) => ({ ...prev, [name]: value }))
// // //     }

// // //     const localSubmit = async (e: React.FormEvent) => {
// // //       e.preventDefault()
// // //       const success = await onSubmit(data)
// // //       if (success) {
// // //         setData(initialData) 
// // //         setIsModalOpen(false) 
// // //       }
// // //     }

// // //     return (
// // //       <AnimatePresence>
// // //         {isModalOpen && (
// // //           <motion.div
// // //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsModalOpen(false)}
// // //           >
// // //             <motion.div
// // //               className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-xl"
// // //               initial={{ scale: 0.9, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               exit={{ scale: 0.9, opacity: 0 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <Button
// // //                 variant="ghost"
// // //                 size="icon"
// // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
// // //                 onClick={() => setIsModalOpen(false)}
// // //               >
// // //                 <X className="w-6 h-6" />
// // //               </Button>

// // //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 text-center">Quick Enquiry</h3>
// // //               <form onSubmit={localSubmit} className="space-y-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Full Name</label>
// // //                   <input
// // //                     type="text"
// // //                     name="name"
// // //                     value={data.name}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                     placeholder="Your name"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Email Address</label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={data.email}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                     placeholder="your@email.com"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Phone Number</label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={data.phone}
// // //                     onChange={handleChange}
// // //                     required
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
// // //                     placeholder="+91 XXXXX XXXXX"
// // //                   />
// // //                 </div>
// // //                 <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">
// // //                   Submit Enquiry
// // //                 </Button>
// // //               </form>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     )
// // //   }

// // //   return (
// // //     <main className="w-full">
// // //       <HeroSection />
// // //       <OverviewSection />
// // //       <HealthyLivingSection /> {/* NEW */}
// // //       {/* <LuxuryHighlightSection /> NEW */}
// // //       <AmenitiesSection />
// // //       <SpecificationsSection />
// // //       <FloorPlansSection />
// // //       <MidPageCtaSection onSubmit={handleFormSubmit} />
// // //       <ConnectivitySection />
// // //       <FAQsSection />
// // //       <AwardsSection />
// // //       <ContactSection onSubmit={handleFormSubmit} />
// // //       <EnquiryModal onSubmit={handleFormSubmit} />
// // //     </main>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { useRouter } from "next/navigation"
// // import { motion, AnimatePresence, Variants } from "framer-motion"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import {
// //   Phone,
// //   Building2,
// //   Leaf,
// //   Users,
// //   Zap,
// //   Train,
// //   Hospital,
// //   BookOpen,
// //   ShoppingCart,
// //   Award,
// //   Mail,
// //   MapPin,
// //   ChevronDown,
// //   X,
// //   Wind,
// //   Footprints,
// //   Waves,
// //   Music,
// //   Dumbbell,
// //   MonitorPlay,
// //   Landmark,
// //   Sun,
// //   ShieldCheck,
// //   LayoutDashboard,
// //   Trees,
// //   Coffee,
// //   Table2,
// //   Construction,
// //   Download
// // } from "lucide-react"
// // import type React from "react"

// // // --- Shared Form Data Type ---
// // type FormData = {
// //   name: string
// //   email: string
// //   phone: string
// //   message?: string
// // }

// // export default function Home() {
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const router = useRouter()

// //   const handleFormSubmit = async (data: FormData): Promise<boolean> => {
// //     try {
// //       // ⚠️ REPLACE WITH YOUR FORMSPREE ID
// //       const response = await fetch("https://formspree.io/f/xldarjon", {
// //         method: "POST",
// //         body: JSON.stringify(data),
// //         headers: {
// //           "Content-Type": "application/json",
// //           Accept: "application/json",
// //         },
// //       })

// //       if (response.ok) {
// //         router.push("/c4/thankyou")
// //         return true
// //       } else {
// //         alert("Oops! There was a problem submitting your form. Please try again.")
// //         return false
// //       }
// //     } catch (error) {
// //       alert("An error occurred. Please check your connection and try again.")
// //       return false
// //     }
// //   }

// //   // Animation variants
// //   const containerVariants: Variants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   }

// //   const itemVariants: Variants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, ease: "easeOut" },
// //     },
// //   }

// //   const slideInVariants: Variants = {
// //     hidden: { opacity: 0, x: -50 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: { duration: 0.7, ease: "easeOut" },
// //     },
// //   }

// //   const scaleVariants: Variants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { duration: 0.6, ease: "easeOut" },
// //     },
// //   }

// //   // ========== HERO SECTION ==========
// //   const HeroSection = () => (
// //     <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] overflow-hidden pt-20">
// //       <motion.div
// //         className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
// //         animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
// //         transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
// //       />
// //       <div className="relative h-full flex items-center">
// //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
// //             <motion.div className="space-y-6 z-10" initial="hidden" animate="visible" variants={containerVariants}>
// //               <motion.div
// //                 className="inline-flex items-center gap-2 bg-[#D4A574]/20 text-[#D4A574] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4A574]/30"
// //                 variants={itemVariants}
// //               >
// //                 <motion.span
// //                   className="w-2 h-2 bg-[#D4A574] rounded-full"
// //                   animate={{ scale: [1, 1.2, 1] }}
// //                   transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
// //                 />
// //                 Possession: Mid 2027
// //               </motion.div>

// //               <motion.div className="space-y-4" variants={itemVariants}>
// //                 <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
// //                   A Lifestyle That <br /><span className="text-[#D4A574]">Stands Tall</span>
// //                 </h1>
// //                 <p className="text-xl md:text-2xl text-white/90">
// //                   Premium 2 & 3 BHK Apartments in Varthur. <br />
// //                   <span className="text-sm opacity-80 font-normal">RERA Approved: PRM/KA/RERA/1251/308/PR/141025/008167</span>
// //                 </p>
// //               </motion.div>

// //               <motion.div className="grid grid-cols-3 gap-4 py-6" variants={containerVariants}>
// //                 {[
// //                   { value: "50%", label: "UDS Share" },
// //                   { value: "92%", label: "Open Space" },
// //                   { value: "115", label: "Exclusive Units" },
// //                 ].map((stat, index) => (
// //                   <motion.div key={index} className="space-y-1" variants={itemVariants}>
// //                     <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">{stat.value}</p>
// //                     <p className="text-sm text-white/80 uppercase tracking-wide">{stat.label}</p>
// //                   </motion.div>
// //                 ))}
// //               </motion.div>

// //               <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={containerVariants}>
// //                 <motion.div variants={itemVariants}>
// //                   <Button size="lg" className="bg-[#D4A574] hover:bg-[#C49564] text-[#1E5BA8] gap-2 font-bold text-base" asChild>
// //                     <a href="tel:8494966966"><Phone className="w-4 h-4" /> Call Now: 84 94 966 966</a>
// //                   </Button>
// //                 </motion.div>
// //                 <motion.div variants={itemVariants}>
// //                   <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => setIsModalOpen(true)}>
// //                     <Mail className="w-4 h-4" /> Enquire Now
// //                   </Button>
// //                 </motion.div>
// //               </motion.div>
// //             </motion.div>

// //             <motion.div className="hidden lg:block relative h-full" initial="hidden" animate="visible" variants={scaleVariants}>
// //               <img src="/palm-altezze/palm-altezze (18).jpeg" alt="RRL Palm Altezze Tower" className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10" />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //       <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
// //         <ChevronDown className="w-6 h-6 text-[#D4A574]" />
// //       </motion.div>
// //     </section>
// //   )

// //   // ========== PROJECT AT A GLANCE (Updated Overview) ==========
// //   const ProjectGlanceSection = () => {
// //     const specs = [
// //       { label: "Land Extent", value: "1.38 Acres" },
// //       { label: "Structure", value: "B + G + 23 Floors" },
// //       { label: "Configuration", value: "2 & 3 BHK" },
// //       { label: "Size Range", value: "1265 - 1630 Sq.ft" },
// //       { label: "Construction", value: "Mivan Technology" },
// //       { label: "Possession", value: "Mid 2027" },
// //     ]

// //     return (
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
// //             <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4" variants={itemVariants}>Project At A Glance</motion.h2>
// //             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
// //               A low-density community designed for exclusivity and privacy.
// //             </motion.p>
// //           </motion.div>

// //           <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
// //             {specs.map((item, index) => (
// //               <motion.div key={index} variants={itemVariants}>
// //                 <Card className="p-6 text-center hover:shadow-lg transition-all border border-gray-100 bg-gray-50 h-full flex flex-col justify-center">
// //                   <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
// //                   <p className="text-lg font-bold text-[#1E5BA8]">{item.value}</p>
// //                 </Card>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== UNIQUE SELLING POINTS (Solar, Mivan, UDS) ==========
// //   const USPSection = () => {
// //     return (
// //       <section className="py-20 bg-[#F5F8FC]">
// //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Why Choose Palm Altezze?</h2>
// //             <p className="text-gray-600">Unmatched features that set us apart from the competition.</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {/* 1. Mivan Technology */}
// //             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E5BA8]">
// //               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
// //                 <Construction className="w-8 h-8 text-[#1E5BA8]" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">Mivan Technology</h3>
// //               <p className="text-gray-600 mb-4">Aluminium formwork technology ensures:</p>
// //               <ul className="space-y-2 text-sm text-gray-700">
// //                 <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Faster Construction (30-40% quicker)</li>
// //                 <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Leak-proof & Crack-resistant walls</li>
// //                 <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Earthquake Resistant Structure</li>
// //               </ul>
// //             </motion.div>

// //             {/* 2. Solar Power */}
// //             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#D4A574]">
// //               <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
// //                 <Sun className="w-8 h-8 text-[#D4A574]" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">Solar Powered</h3>
// //               <p className="text-gray-600 mb-4">Sustainable living with lower bills:</p>
// //               <ul className="space-y-2 text-sm text-gray-700">
// //                 <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4A574]" /> Solar lighting for all common areas</li>
// //                 <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4A574]" /> Reduced monthly maintenance costs</li>
// //                 <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4A574]" /> Eco-friendly & Renewable energy</li>
// //               </ul>
// //             </motion.div>

// //             {/* 3. 50% UDS */}
// //             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E5BA8]">
// //               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
// //                 <Landmark className="w-8 h-8 text-[#1E5BA8]" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">50% UDS</h3>
// //               <p className="text-gray-600 mb-4">Live like a King with high land ownership:</p>
// //               <ul className="space-y-2 text-sm text-gray-700">
// //                 <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#1E5BA8]" /> True 50% Undivided Share of Land</li>
// //                 <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#1E5BA8]" /> Higher appreciation value</li>
// //                 <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#1E5BA8]" /> A rarity in the Bangalore market</li>
// //               </ul>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== HEALTHY LIVING SECTION ==========
// //   const HealthyLivingSection = () => (
// //     <section className="py-24 bg-white overflow-hidden">
// //       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           <motion.div className="max-w-xl" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
// //             <h2 className="text-5xl md:text-6xl font-serif text-[#1E5BA8] mb-6 leading-tight">Step Into <br /><span className="text-[#2B6CB8]">Healthy Living</span></h2>
// //             <div className="border-l-4 border-[#D4A574] pl-6 mb-12">
// //               <p className="text-gray-800 font-bold uppercase tracking-wide text-sm leading-relaxed">AT RRL PALM ALTEZZE, YOU DON'T JUST GET A <br />HOME — YOU GET A LIFESTYLE.</p>
// //             </div>
// //             <div className="flex flex-col sm:flex-row gap-10">
// //               <div className="flex flex-col items-start gap-4 group">
// //                 <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
// //                   <Wind className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
// //                 </div>
// //                 <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">FRESH AIR & <br />GREEN SURROUNDINGS</p>
// //               </div>
// //               <div className="flex flex-col items-start gap-4 group">
// //                 <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
// //                   <Footprints className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
// //                 </div>
// //                 <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">SAFE, WELL-LIT <br />TRACK FOR ALL AGES</p>
// //               </div>
// //             </div>
// //           </motion.div>
// //           <motion.div className="hidden lg:block relative h-full" initial="hidden" animate="visible" variants={scaleVariants}>
// //             <img src="/palm-altezze/palm-altezze (24).jpeg" alt="RRL Palm Altezze Healthy Living" className="w-full h-full object-contain rounded-2xl shadow-2xl" />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )

// //   // ========== DETAILED AMENITIES (Clubhouse + Outdoor) ==========
// //   const AmenitiesSection = () => {
// //     return (
// //       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
// //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">30+ World-Class Amenities</h2>
// //             <p className="text-xl text-gray-600">A 16,000 Sq.ft Clubhouse and expansive outdoor activities.</p>
// //           </motion.div>

// //           <Tabs defaultValue="clubhouse" className="w-full">
// //             <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
// //               <TabsTrigger value="clubhouse">Clubhouse Indulgences</TabsTrigger>
// //               <TabsTrigger value="outdoor">Outdoor & Recreational</TabsTrigger>
// //             </TabsList>

// //             <TabsContent value="clubhouse">
// //               <div className="grid md:grid-cols-3 gap-8">
// //                 <Card className="p-6 border-0 shadow-lg bg-[#1E5BA8] text-white">
// //                   <h3 className="text-xl font-bold mb-4 text-[#D4A574]">Ground Floor</h3>
// //                   <ul className="space-y-3">
// //                     <li className="flex gap-2"><LayoutDashboard className="w-5 h-5" /> Reception Hall</li>
// //                     <li className="flex gap-2"><BookOpen className="w-5 h-5" /> Library / Reading Lounge</li>
// //                     <li className="flex gap-2"><Users className="w-5 h-5" /> Indoor Kids Play Area</li>
// //                     <li className="flex gap-2"><LayoutDashboard className="w-5 h-5" /> Indoor Games</li>
// //                     <li className="flex gap-2"><Leaf className="w-5 h-5" /> Meditation Hall</li>
// //                   </ul>
// //                 </Card>
// //                 <Card className="p-6 border-0 shadow-lg bg-white border-t-4 border-[#1E5BA8]">
// //                   <h3 className="text-xl font-bold mb-4 text-[#1E5BA8]">First Floor</h3>
// //                   <ul className="space-y-3 text-gray-700">
// //                     <li className="flex gap-2"><Coffee className="w-5 h-5 text-[#D4A574]" /> Lounge Area</li>
// //                     <li className="flex gap-2"><Music className="w-5 h-5 text-[#D4A574]" /> Party Hall</li>
// //                     <li className="flex gap-2"><Users className="w-5 h-5 text-[#D4A574]" /> Separate Toilets</li>
// //                     <li className="flex gap-2"><Table2 className="w-5 h-5 text-[#D4A574]" /> Billiards / Pool Table</li>
// //                   </ul>
// //                 </Card>
// //                 <Card className="p-6 border-0 shadow-lg bg-white border-t-4 border-[#1E5BA8]">
// //                   <h3 className="text-xl font-bold mb-4 text-[#1E5BA8]">Second Floor</h3>
// //                   <ul className="space-y-3 text-gray-700">
// //                     <li className="flex gap-2"><Dumbbell className="w-5 h-5 text-[#D4A574]" /> Ultra Gym</li>
// //                     <li className="flex gap-2"><Wind className="w-5 h-5 text-[#D4A574]" /> Steam & Sauna Bath</li>
// //                     <li className="flex gap-2"><Footprints className="w-5 h-5 text-[#D4A574]" /> Cardio Exercise Room</li>
// //                     <li className="flex gap-2"><MonitorPlay className="w-5 h-5 text-[#D4A574]" /> Mini Theatre</li>
// //                   </ul>
// //                 </Card>
// //               </div>
// //             </TabsContent>

// //             <TabsContent value="outdoor">
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                 {[
// //                   "Swimming Pool", "Kids Pool", "Jacuzzi", "Multipurpose Court",
// //                   "Cricket Pitch", "Basketball Court", "Throwball Court", "Skating Rink",
// //                   "Jogging Track", "Amphitheatre", "Butterfly Garden", "Senior Seating",
// //                   "Fountain", "Planting Deck", "Chess Pawn", "Hopscotch"
// //                 ].map((item, idx) => (
// //                   <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow">
// //                     <div className="w-2 h-2 bg-[#D4A574] rounded-full"></div>
// //                     <span className="font-medium text-gray-700">{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </TabsContent>
// //           </Tabs>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== SPECIFICATIONS (Updated from Brochure) ==========
// //   const SpecificationsSection = () => (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //         <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //           <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Premium Specifications</h2>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {[
// //             { title: "Structure", desc: "Mivan Construction (Aluminium formwork), 8\" RCC walls (External), 6\" Solid blocks (Internal)." },
// //             { title: "Doors", desc: "WPC Doors for Main & Internal doors. Durable and aesthetic." },
// //             { title: "Windows", desc: "UPVC windows with mosquito mesh." },
// //             { title: "Flooring", desc: "2'x4' Vitrified tiles in Living/Dining/Bedrooms. 15\"x15\" Anti-skid tiles in Balconies." },
// //             { title: "Electrical", desc: "Concealed Finolex/Anchor copper wiring. Anchor Roma Modular switches." },
// //             { title: "Plumbing", desc: "Supreme/Ashirvad CPVC fittings. Jaguar/Parryware sanitary fittings." },
// //             { title: "Bathrooms", desc: "Kerovit by Kajaria fittings. 2'x1' Anti-skid ceramic tiles. Wall dado up to 7ft." },
// //             { title: "Painting", desc: "Nippon Putty + Emulsion (Internal). Nippon Exterior Paint (External)." },
// //             { title: "Lifts & Power", desc: "3 Automatic Lifts (Kone/Otis). 100% Generator Backup." },
// //           ].map((item, i) => (
// //             <Card key={i} className="p-6 border-l-4 border-[#1E5BA8] bg-gray-50 hover:shadow-lg transition-all">
// //               <h3 className="text-lg font-bold text-[#1E5BA8] mb-2">{item.title}</h3>
// //               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )

// //   // ========== FLOOR PLANS & MASTER PLAN ==========
// //   const FloorPlansSection = () => {
// //     // Exact data from Page 8 of Brochure
// //     const units = [
// //       { id: "01", type: "2 BHK", facing: "North", area: "1265 sft" },
// //       { id: "02", type: "3 BHK", facing: "North", area: "1495 sft" },
// //       { id: "03", type: "3 BHK", facing: "North", area: "1630 sft" },
// //       { id: "04", type: "3 BHK", facing: "East", area: "1560 sft" },
// //       { id: "05", type: "3 BHK", facing: "East", area: "1510 sft" },
// //     ]

// //     const legends = [
// //       "01. Main Entrance", "02. Seating Area", "03. Cricket Net", "04. Garden",
// //       "05. Senior Seating", "06. Tree Seating", "07. Throw Ball Court", "08. Volley Ball Court",
// //       "09. Skating Rink", "10. Fitness Station", "11. Kids Play Area", "12. Badminton Court",
// //       "13. Amphitheatre", "14. Swimming Pool", "15. Butterfly Garden"
// //     ]

// //     return (
// //       <section className="py-20 bg-[#F9F9F9]">
// //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Floor Plans & Master Plan</h2>
// //             <p className="text-xl text-gray-600">5 Units per floor. No common walls. Maximum privacy.</p>
// //           </div>

// //           {/* Master Plan */}
// //           <div className="mb-20">
// //             <Card className="p-8 border-0 shadow-xl bg-white">
// //               <div className="grid md:grid-cols-3 gap-8">
// //                 <div className="md:col-span-2 bg-gray-200 min-h-[400px] rounded-xl flex items-center justify-center relative overflow-hidden">
// //                   <img src="/palm-altezze/masterplan.png" alt="Master Plan" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
// //                   <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-[#1E5BA8]">92% Open Space</div>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Master Plan Legends</h3>
// //                   <div className="grid grid-cols-1 gap-2 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
// //                     {legends.map((l, i) => (
// //                       <div key={i} className="flex items-center gap-2 text-sm text-gray-700 p-2 bg-gray-50 rounded hover:bg-blue-50">
// //                         <div className="w-2 h-2 rounded-full bg-[#1E5BA8]"></div> {l}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </Card>
// //           </div>

// //           {/* Unit Configurations */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
// //             {units.map((unit, index) => (
// //               <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" transition={{ delay: index * 0.1 }}>
// //                 <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#D4A574]">
// //                   <div className="w-10 h-10 rounded-full bg-[#1E5BA8] text-white flex items-center justify-center mx-auto mb-4 font-bold">{unit.id}</div>
// //                   <h3 className="text-2xl font-bold text-[#1E5BA8] mb-1">{unit.type}</h3>
// //                   <p className="text-gray-500 text-sm mb-4">{unit.facing} Facing</p>
// //                   <div className="bg-gray-100 py-2 rounded-lg">
// //                     <span className="text-lg font-bold text-gray-800">{unit.area}</span>
// //                   </div>
// //                 </Card>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== MID PAGE CTA ==========
// //   const MidPageCtaSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// //     const initialData = { name: "", email: "", phone: "" }
// //     const [data, setData] = useState(initialData)

// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //       const { name, value } = e.target
// //       setData((prev) => ({ ...prev, [name]: value }))
// //     }

// //     const localSubmit = async (e: React.FormEvent) => {
// //       e.preventDefault()
// //       const success = await onSubmit(data)
// //       if (success) setData(initialData)
// //     }

// //     return (
// //       <section className="py-20 bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] text-white">
// //         <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
// //           <div className="flex-1">
// //             <h2 className="text-3xl font-bold mb-4">Download the Official Brochure</h2>
// //             <p className="mb-6 opacity-90">Get the detailed floor plans, cost sheet, and complete amenities list delivered to your inbox.</p>
// //             <div className="flex gap-4">
// //               <Button variant="secondary" size="lg" className="gap-2 font-bold"><Download className="w-4 h-4" /> Download PDF</Button>
// //             </div>
// //           </div>
// //           <Card className="flex-1 p-8 bg-white text-black shadow-2xl">
// //             <h3 className="text-xl font-bold text-[#1E5BA8] mb-6 text-center">Request a Call Back</h3>
// //             <form onSubmit={localSubmit} className="space-y-4">
// //               <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Name" />
// //               <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Phone" />
// //               <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Email" />
// //               <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">Submit</Button>
// //             </form>
// //           </Card>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== CONNECTIVITY (Updated with specific landmarks) ==========
// //   const ConnectivitySection = () => (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4 max-w-7xl">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-[#1E5BA8] mb-4">Prime Location</h2>
// //           <p className="text-gray-600">Off Varthur Road. Connected to everything that matters.</p>
// //         </div>
// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {[
// //             { icon: Building2, title: "Tech Hubs", items: ["ITPL Main Road", "Wipro SEZ", "RGA Tech Park", "Sigma Tech Park"] },
// //             { icon: ShoppingCart, title: "Malls", items: ["Nexus Whitefield", "Nexus Shantiniketan", "Phoenix Marketcity", "Inorbit Mall"] },
// //             { icon: BookOpen, title: "Education", items: ["Chrysalis High", "Vagdevi Vilas", "Ryan International", "Delhi Public School"] },
// //             { icon: Hospital, title: "Hospitals", items: ["Manipal Varthur", "Sahasra Hospital", "Cloudnine Hospital", "Sankara Eye Hospital"] },
// //           ].map((cat, i) => (
// //             <Card key={i} className="p-6 border-0 shadow-lg hover:border-b-4 hover:border-[#D4A574] transition-all">
// //               <cat.icon className="w-8 h-8 text-[#1E5BA8] mb-4" />
// //               <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
// //               <ul className="space-y-2 text-sm text-gray-600">
// //                 {cat.items.map((item, idx) => <li key={idx}>• {item}</li>)}
// //               </ul>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )

// //   // ========== CONTACT ==========
// //   const ContactSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// //     const initialData = { name: "", email: "", phone: "", message: "" }
// //     const [data, setData] = useState(initialData)
// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [e.target.name]: e.target.value })
// //     const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) setData(initialData); }

// //     return (
// //       <section className="py-20 bg-gray-50">
// //         <div className="container mx-auto px-4 max-w-7xl">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             <div>
// //               <h2 className="text-4xl font-bold text-[#1E5BA8] mb-6">Get In Touch</h2>
// //               <div className="space-y-6">
// //                 <div className="flex items-start gap-4">
// //                   <MapPin className="w-6 h-6 text-[#D4A574]" />
// //                   <p className="text-gray-700">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p>
// //                 </div>
// //                 <div className="flex items-center gap-4">
// //                   <Phone className="w-6 h-6 text-[#D4A574]" />
// //                   <a href="tel:+918494966966" className="text-gray-700 font-bold hover:text-[#1E5BA8]">+91 84 94 966 966</a>
// //                 </div>
// //                 <div className="flex items-center gap-4">
// //                   <Mail className="w-6 h-6 text-[#D4A574]" />
// //                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-gray-700 hover:text-[#1E5BA8]">enquiry@rrlbuildersanddevelopers.com</a>
// //                 </div>
// //               </div>
// //             </div>
// //             <Card className="p-8 shadow-xl">
// //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Send Message</h3>
// //               <form onSubmit={localSubmit} className="space-y-4">
// //                 <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Name" />
// //                 <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Email" />
// //                 <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Phone" />
// //                 <textarea name="message" value={data.message} onChange={handleChange} rows={4} className="w-full p-3 border rounded" placeholder="Message"></textarea>
// //                 <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold h-12">Send Message</Button>
// //               </form>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== MODAL ==========
// //   const EnquiryModal = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// //     const initialData = { name: "", email: "", phone: "" }
// //     const [data, setData] = useState(initialData)
// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })
// //     const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) { setData(initialData); setIsModalOpen(false); } }

// //     return (
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
// //             <motion.div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
// //               <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsModalOpen(false)}><X className="w-5 h-5" /></Button>
// //               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 text-center">Quick Enquiry</h3>
// //               <form onSubmit={localSubmit} className="space-y-4">
// //                 <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Name" />
// //                 <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Email" />
// //                 <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Phone" />
// //                 <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">Submit</Button>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     )
// //   }

// //   return (
// //     <main className="w-full">
// //       <HeroSection />
// //       <ProjectGlanceSection />
// //       <USPSection />
// //       <HealthyLivingSection />
// //       <AmenitiesSection />
// //       <SpecificationsSection />
// //       <FloorPlansSection />
// //       <MidPageCtaSection onSubmit={handleFormSubmit} />
// //       <ConnectivitySection />
// //       <ContactSection onSubmit={handleFormSubmit} />
// //       <EnquiryModal onSubmit={handleFormSubmit} />
// //     </main>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { motion, AnimatePresence, Variants } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   Phone,
//   Building2,
//   Leaf,
//   Users,
//   Zap,
//   Train,
//   Hospital,
//   BookOpen,
//   ShoppingCart,
//   Award,
//   Mail,
//   MapPin,
//   ChevronDown,
//   X,
//   Wind,
//   Footprints,
//   Waves,
//   Music,
//   Dumbbell,
//   MonitorPlay,
//   Landmark,
//   Sun,
//   ShieldCheck,
//   LayoutDashboard,
//   Trees,
//   Coffee,
//   Table2,
//   Construction,
//   Download
// } from "lucide-react"
// import type React from "react"

// // --- Shared Form Data Type ---
// type FormData = {
//   name: string
//   email: string
//   phone: string
//   message?: string
// }

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const router = useRouter()

//   const handleFormSubmit = async (data: FormData): Promise<boolean> => {
//     try {
//       // ⚠️ REPLACE WITH YOUR FORMSPREE ID
//       const response = await fetch("https://formspree.io/f/xldarjon", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       })

//       if (response.ok) {
//         router.push("/c4/thankyou")
//         return true
//       } else {
//         alert("Oops! There was a problem submitting your form. Please try again.")
//         return false
//       }
//     } catch (error) {
//       alert("An error occurred. Please check your connection and try again.")
//       return false
//     }
//   }

//   // Animation variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const slideInVariants: Variants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   }

//   const scaleVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   // ========== HERO SECTION ==========
//   const HeroSection = () => (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] overflow-hidden pt-20">
//       <motion.div
//         className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
//         animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
//       />
//       <div className="relative h-full flex items-center">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <motion.div className="space-y-6 z-10" initial="hidden" animate="visible" variants={containerVariants}>
//               <motion.div
//                 className="inline-flex items-center gap-2 bg-[#D4A574]/20 text-[#D4A574] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4A574]/30"
//                 variants={itemVariants}
//               >
//                 <motion.span
//                   className="w-2 h-2 bg-[#D4A574] rounded-full"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//                 />
//                 Possession: Mid 2027
//               </motion.div>

//               <motion.div className="space-y-4" variants={itemVariants}>
//                 <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
//                   A Lifestyle That <br /><span className="text-[#D4A574]">Stands Tall</span>
//                 </h1>
//                 <p className="text-xl md:text-2xl text-white/90">
//                   Premium 2 & 3 BHK Apartments in Varthur. <br />
//                   <span className="text-sm opacity-80 font-normal">RERA Approved: PRM/KA/RERA/1251/308/PR/141025/008167</span>
//                 </p>
//               </motion.div>

//               <motion.div className="grid grid-cols-3 gap-4 py-6" variants={containerVariants}>
//                 {[
//                   { value: "50%", label: "UDS Share" },
//                   { value: "92%", label: "Open Space" },
//                   { value: "115", label: "Exclusive Units" },
//                 ].map((stat, index) => (
//                   <motion.div key={index} className="space-y-1" variants={itemVariants}>
//                     <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">{stat.value}</p>
//                     <p className="text-sm text-white/80 uppercase tracking-wide">{stat.label}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={containerVariants}>
//                 <motion.div variants={itemVariants}>
//                   <Button size="lg" className="bg-[#D4A574] hover:bg-[#C49564] text-[#1E5BA8] gap-2 font-bold text-base" asChild>
//                     <a href="tel:8494966966"><Phone className="w-4 h-4" /> Call Now: 84 94 966 966</a>
//                   </Button>
//                 </motion.div>
//                 <motion.div variants={itemVariants}>
//                   <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => setIsModalOpen(true)}>
//                     <Mail className="w-4 h-4" /> Enquire Now
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             <motion.div className="hidden lg:block relative h-full" initial="hidden" animate="visible" variants={scaleVariants}>
//               <img src="/palm-altezze/palm-altezze (18).jpeg" alt="RRL Palm Altezze Tower" className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10" />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
//         <ChevronDown className="w-6 h-6 text-[#D4A574]" />
//       </motion.div>
//     </section>
//   )

//   // ========== PROJECT AT A GLANCE (Updated Overview) ==========
//   const ProjectGlanceSection = () => {
//     const specs = [
//       { label: "Land Extent", value: "1.38 Acres" },
//       { label: "Structure", value: "B + G + 23 Floors" },
//       { label: "Configuration", value: "2 & 3 BHK" },
//       { label: "Size Range", value: "1265 - 1630 Sq.ft" },
//       { label: "Construction", value: "Mivan Technology" },
//       { label: "Possession", value: "Mid 2027" },
//     ]

//     return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
//             <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4" variants={itemVariants}>Project At A Glance</motion.h2>
//             <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
//               A low-density community designed for exclusivity and privacy.
//             </motion.p>
//           </motion.div>

//           <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
//             {specs.map((item, index) => (
//               <motion.div key={index} variants={itemVariants}>
//                 <Card className="p-6 text-center hover:shadow-lg transition-all border border-gray-100 bg-gray-50 h-full flex flex-col justify-center">
//                   <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
//                   <p className="text-lg font-bold text-[#1E5BA8]">{item.value}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     )
//   }

//   // ========== UNIQUE SELLING POINTS (Solar, Mivan, UDS) ==========
//   const USPSection = () => {
//     return (
//       <section className="py-20 bg-[#F5F8FC]">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Why Choose Palm Altezze?</h2>
//             <p className="text-gray-600">Unmatched features that set us apart from the competition.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* 1. Mivan Technology */}
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E5BA8]">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
//                 <Construction className="w-8 h-8 text-[#1E5BA8]" />
//               </div>
//               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">Mivan Technology</h3>
//               <p className="text-gray-600 mb-4">Aluminium formwork technology ensures:</p>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Faster Construction (30-40% quicker)</li>
//                 <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Leak-proof & Crack-resistant walls</li>
//                 <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Earthquake Resistant Structure</li>
//               </ul>
//             </motion.div>

//             {/* 2. Solar Power */}
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#D4A574]">
//               <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
//                 <Sun className="w-8 h-8 text-[#D4A574]" />
//               </div>
//               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">Solar Powered</h3>
//               <p className="text-gray-600 mb-4">Sustainable living with lower bills:</p>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4A574]" /> Solar lighting for all common areas</li>
//                 <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4A574]" /> Reduced monthly maintenance costs</li>
//                 <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4A574]" /> Eco-friendly & Renewable energy</li>
//               </ul>
//             </motion.div>

//             {/* 3. 50% UDS */}
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E5BA8]">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
//                 <Landmark className="w-8 h-8 text-[#1E5BA8]" />
//               </div>
//               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">50% UDS</h3>
//               <p className="text-gray-600 mb-4">Live like a King with high land ownership:</p>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#1E5BA8]" /> True 50% Undivided Share of Land</li>
//                 <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#1E5BA8]" /> Higher appreciation value</li>
//                 <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#1E5BA8]" /> A rarity in the Bangalore market</li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // ========== HEALTHY LIVING SECTION ==========
//   const HealthyLivingSection = () => (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div className="max-w-xl" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
//             <h2 className="text-5xl md:text-6xl font-serif text-[#1E5BA8] mb-6 leading-tight">Step Into <br /><span className="text-[#2B6CB8]">Healthy Living</span></h2>
//             <div className="border-l-4 border-[#D4A574] pl-6 mb-12">
//               <p className="text-gray-800 font-bold uppercase tracking-wide text-sm leading-relaxed">AT RRL PALM ALTEZZE, YOU DON'T JUST GET A <br />HOME — YOU GET A LIFESTYLE.</p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-10">
//               <div className="flex flex-col items-start gap-4 group">
//                 <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
//                   <Wind className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">FRESH AIR & <br />GREEN SURROUNDINGS</p>
//               </div>
//               <div className="flex flex-col items-start gap-4 group">
//                 <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
//                   <Footprints className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">SAFE, WELL-LIT <br />TRACK FOR ALL AGES</p>
//               </div>
//             </div>
//           </motion.div>
//           <motion.div className="hidden lg:block relative h-full" initial="hidden" animate="visible" variants={scaleVariants}>
//             <img src="/palm-altezze/palm-altezze (24).jpeg" alt="RRL Palm Altezze Healthy Living" className="w-full h-full object-contain rounded-2xl shadow-2xl" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )

//   // ========== DETAILED AMENITIES (Clubhouse + Outdoor) ==========
//   const AmenitiesSection = () => {
//     return (
//       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">30+ World-Class Amenities</h2>
//             <p className="text-xl text-gray-600">A 16,000 Sq.ft Clubhouse and expansive outdoor activities.</p>
//           </motion.div>

//           <Tabs defaultValue="clubhouse" className="w-full">
//             <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
//               <TabsTrigger value="clubhouse">Clubhouse Indulgences</TabsTrigger>
//               <TabsTrigger value="outdoor">Outdoor & Recreational</TabsTrigger>
//             </TabsList>

//             <TabsContent value="clubhouse">
//               <div className="grid md:grid-cols-3 gap-8">
//                 <Card className="p-6 border-0 shadow-lg bg-[#1E5BA8] text-white">
//                   <h3 className="text-xl font-bold mb-4 text-[#D4A574]">Ground Floor</h3>
//                   <ul className="space-y-3">
//                     <li className="flex gap-2"><LayoutDashboard className="w-5 h-5" /> Reception Hall</li>
//                     <li className="flex gap-2"><BookOpen className="w-5 h-5" /> Library / Reading Lounge</li>
//                     <li className="flex gap-2"><Users className="w-5 h-5" /> Indoor Kids Play Area</li>
//                     <li className="flex gap-2"><LayoutDashboard className="w-5 h-5" /> Indoor Games</li>
//                     <li className="flex gap-2"><Leaf className="w-5 h-5" /> Meditation Hall</li>
//                   </ul>
//                 </Card>
//                 <Card className="p-6 border-0 shadow-lg bg-white border-t-4 border-[#1E5BA8]">
//                   <h3 className="text-xl font-bold mb-4 text-[#1E5BA8]">First Floor</h3>
//                   <ul className="space-y-3 text-gray-700">
//                     <li className="flex gap-2"><Coffee className="w-5 h-5 text-[#D4A574]" /> Lounge Area</li>
//                     <li className="flex gap-2"><Music className="w-5 h-5 text-[#D4A574]" /> Party Hall</li>
//                     <li className="flex gap-2"><Users className="w-5 h-5 text-[#D4A574]" /> Separate Toilets</li>
//                     <li className="flex gap-2"><Table2 className="w-5 h-5 text-[#D4A574]" /> Billiards / Pool Table</li>
//                   </ul>
//                 </Card>
//                 <Card className="p-6 border-0 shadow-lg bg-white border-t-4 border-[#1E5BA8]">
//                   <h3 className="text-xl font-bold mb-4 text-[#1E5BA8]">Second Floor</h3>
//                   <ul className="space-y-3 text-gray-700">
//                     <li className="flex gap-2"><Dumbbell className="w-5 h-5 text-[#D4A574]" /> Ultra Gym</li>
//                     <li className="flex gap-2"><Wind className="w-5 h-5 text-[#D4A574]" /> Steam & Sauna Bath</li>
//                     <li className="flex gap-2"><Footprints className="w-5 h-5 text-[#D4A574]" /> Cardio Exercise Room</li>
//                     <li className="flex gap-2"><MonitorPlay className="w-5 h-5 text-[#D4A574]" /> Mini Theatre</li>
//                   </ul>
//                 </Card>
//               </div>
//             </TabsContent>

//             <TabsContent value="outdoor">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {[
//                   "Swimming Pool", "Kids Pool", "Jacuzzi", "Multipurpose Court",
//                   "Cricket Pitch", "Basketball Court", "Throwball Court", "Skating Rink",
//                   "Jogging Track", "Amphitheatre", "Butterfly Garden", "Senior Seating",
//                   "Fountain", "Planting Deck", "Chess Pawn", "Hopscotch"
//                 ].map((item, idx) => (
//                   <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow">
//                     <div className="w-2 h-2 bg-[#D4A574] rounded-full"></div>
//                     <span className="font-medium text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//     )
//   }

//   // ========== SPECIFICATIONS (Updated from Brochure) ==========
//   const SpecificationsSection = () => (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//         <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Premium Specifications</h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { title: "Structure", desc: "Mivan Construction (Aluminium formwork), 8\" RCC walls (External), 6\" Solid blocks (Internal)." },
//             { title: "Doors", desc: "WPC Doors for Main & Internal doors. Durable and aesthetic." },
//             { title: "Windows", desc: "UPVC windows with mosquito mesh." },
//             { title: "Flooring", desc: "2'x4' Vitrified tiles in Living/Dining/Bedrooms. 15\"x15\" Anti-skid tiles in Balconies." },
//             { title: "Electrical", desc: "Concealed Finolex/Anchor copper wiring. Anchor Roma Modular switches." },
//             { title: "Plumbing", desc: "Supreme/Ashirvad CPVC fittings. Jaguar/Parryware sanitary fittings." },
//             { title: "Bathrooms", desc: "Kerovit by Kajaria fittings. 2'x1' Anti-skid ceramic tiles. Wall dado up to 7ft." },
//             { title: "Painting", desc: "Nippon Putty + Emulsion (Internal). Nippon Exterior Paint (External)." },
//             { title: "Lifts & Power", desc: "3 Automatic Lifts (Kone/Otis). 100% Generator Backup." },
//           ].map((item, i) => (
//             <Card key={i} className="p-6 border-l-4 border-[#1E5BA8] bg-gray-50 hover:shadow-lg transition-all">
//               <h3 className="text-lg font-bold text-[#1E5BA8] mb-2">{item.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   // ========== FLOOR PLANS & MASTER PLAN ==========
//   const FloorPlansSection = () => {
//     // Exact data from Page 8 of Brochure
//     const units = [
//       { id: "01", type: "2 BHK", facing: "North", area: "1265 sft" },
//       { id: "02", type: "3 BHK", facing: "North", area: "1495 sft" },
//       { id: "03", type: "3 BHK", facing: "North", area: "1630 sft" },
//       { id: "04", type: "3 BHK", facing: "East", area: "1560 sft" },
//       { id: "05", type: "3 BHK", facing: "East", area: "1510 sft" },
//     ]

//     const legends = [
//       "01. Main Entrance", "02. Seating Area", "03. Cricket Net", "04. Garden",
//       "05. Senior Seating", "06. Tree Seating", "07. Throw Ball Court", "08. Volley Ball Court",
//       "09. Skating Rink", "10. Fitness Station", "11. Kids Play Area", "12. Badminton Court",
//       "13. Amphitheatre", "14. Swimming Pool", "15. Butterfly Garden"
//     ]

//     return (
//       <section className="py-20 bg-[#F9F9F9]">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Floor Plans & Master Plan</h2>
//             <p className="text-xl text-gray-600">5 Units per floor. No common walls. Maximum privacy.</p>
//           </div>

//           {/* Master Plan */}
//           <div className="mb-20">
//             <Card className="p-8 border-0 shadow-xl bg-white">
//               <div className="grid md:grid-cols-3 gap-8">
//                 <div className="md:col-span-2 bg-gray-200 min-h-[400px] rounded-xl flex items-center justify-center relative overflow-hidden">
//                   <img src="/palm-altezze/masterplan.png" alt="Master Plan" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
//                   <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-[#1E5BA8]">92% Open Space</div>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Master Plan Legends</h3>
//                   <div className="grid grid-cols-1 gap-2 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
//                     {legends.map((l, i) => (
//                       <div key={i} className="flex items-center gap-2 text-sm text-gray-700 p-2 bg-gray-50 rounded hover:bg-blue-50">
//                         <div className="w-2 h-2 rounded-full bg-[#1E5BA8]"></div> {l}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Unit Configurations */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//             {units.map((unit, index) => (
//               <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" transition={{ delay: index * 0.1 }}>
//                 <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#D4A574]">
//                   <div className="w-10 h-10 rounded-full bg-[#1E5BA8] text-white flex items-center justify-center mx-auto mb-4 font-bold">{unit.id}</div>
//                   <h3 className="text-2xl font-bold text-[#1E5BA8] mb-1">{unit.type}</h3>
//                   <p className="text-gray-500 text-sm mb-4">{unit.facing} Facing</p>
//                   <div className="bg-gray-100 py-2 rounded-lg">
//                     <span className="text-lg font-bold text-gray-800">{unit.area}</span>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // ========== MID PAGE CTA ==========
//   const MidPageCtaSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
//     const initialData = { name: "", email: "", phone: "" }
//     const [data, setData] = useState(initialData)

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       const { name, value } = e.target
//       setData((prev) => ({ ...prev, [name]: value }))
//     }

//     const localSubmit = async (e: React.FormEvent) => {
//       e.preventDefault()
//       const success = await onSubmit(data)
//       if (success) setData(initialData)
//     }

//     return (
//       <section className="py-20 bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] text-white">
//         <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
//           <div className="flex-1">
//             <h2 className="text-3xl font-bold mb-4">Download the Official Brochure</h2>
//             <p className="mb-6 opacity-90">Get the detailed floor plans, cost sheet, and complete amenities list delivered to your inbox.</p>
//             <div className="flex gap-4">
//               <Button variant="secondary" size="lg" className="gap-2 font-bold"><Download className="w-4 h-4" /> Download PDF</Button>
//             </div>
//           </div>
//           <Card className="flex-1 p-8 bg-white text-black shadow-2xl">
//             <h3 className="text-xl font-bold text-[#1E5BA8] mb-6 text-center">Request a Call Back</h3>
//             <form onSubmit={localSubmit} className="space-y-4">
//               <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Name" />
//               <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Phone" />
//               <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Email" />
//               <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">Submit</Button>
//             </form>
//           </Card>
//         </div>
//       </section>
//     )
//   }

//   // ========== CONNECTIVITY (Updated with specific landmarks) ==========
//   const ConnectivitySection = () => (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-[#1E5BA8] mb-4">Prime Location</h2>
//           <p className="text-gray-600">Off Varthur Road. Connected to everything that matters.</p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: Building2, title: "Tech Hubs", items: ["ITPL Main Road", "Wipro SEZ", "RGA Tech Park", "Sigma Tech Park"] },
//             { icon: ShoppingCart, title: "Malls", items: ["Nexus Whitefield", "Nexus Shantiniketan", "Phoenix Marketcity", "Inorbit Mall"] },
//             { icon: BookOpen, title: "Education", items: ["Chrysalis High", "Vagdevi Vilas", "Ryan International", "Delhi Public School"] },
//             { icon: Hospital, title: "Hospitals", items: ["Manipal Varthur", "Sahasra Hospital", "Cloudnine Hospital", "Sankara Eye Hospital"] },
//           ].map((cat, i) => (
//             <Card key={i} className="p-6 border-0 shadow-lg hover:border-b-4 hover:border-[#D4A574] transition-all">
//               <cat.icon className="w-8 h-8 text-[#1E5BA8] mb-4" />
//               <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 {cat.items.map((item, idx) => <li key={idx}>• {item}</li>)}
//               </ul>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   // ========== CONTACT ==========
//   const ContactSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
//     const initialData = { name: "", email: "", phone: "", message: "" }
//     const [data, setData] = useState(initialData)
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [e.target.name]: e.target.value })
//     const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) setData(initialData); }

//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-4xl font-bold text-[#1E5BA8] mb-6">Get In Touch</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <MapPin className="w-6 h-6 text-[#D4A574]" />
//                   <p className="text-gray-700">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <Phone className="w-6 h-6 text-[#D4A574]" />
//                   <a href="tel:+918494966966" className="text-gray-700 font-bold hover:text-[#1E5BA8]">+91 84 94 966 966</a>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <Mail className="w-6 h-6 text-[#D4A574]" />
//                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-gray-700 hover:text-[#1E5BA8]">enquiry@rrlbuildersanddevelopers.com</a>
//                 </div>
//               </div>
//             </div>
//             <Card className="p-8 shadow-xl">
//               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Send Message</h3>
//               <form onSubmit={localSubmit} className="space-y-4">
//                 <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Name" />
//                 <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Email" />
//                 <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Phone" />
//                 <textarea name="message" value={data.message} onChange={handleChange} rows={4} className="w-full p-3 border rounded" placeholder="Message"></textarea>
//                 <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold h-12">Send Message</Button>
//               </form>
//             </Card>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // ========== MODAL ==========
//   const EnquiryModal = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
//     const initialData = { name: "", email: "", phone: "" }
//     const [data, setData] = useState(initialData)
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })
//     const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) { setData(initialData); setIsModalOpen(false); } }

//     return (
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <motion.div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
//               <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsModalOpen(false)}><X className="w-5 h-5" /></Button>
//               <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 text-center">Quick Enquiry</h3>
//               <form onSubmit={localSubmit} className="space-y-4">
//                 <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Name" />
//                 <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Email" />
//                 <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Phone" />
//                 <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">Submit</Button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     )
//   }

//   return (
//     <main className="w-full">
//       <HeroSection />
//       <ProjectGlanceSection />
//       <USPSection />
//       <HealthyLivingSection />
//       <AmenitiesSection />
//       <SpecificationsSection />
//       <FloorPlansSection />
//       <MidPageCtaSection onSubmit={handleFormSubmit} />
//       <ConnectivitySection />
//       <ContactSection onSubmit={handleFormSubmit} />
//       <EnquiryModal onSubmit={handleFormSubmit} />
//     </main>
//   )
// }
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Building2,
  Leaf,
  Users,
  Zap,
  Train,
  Hospital,
  BookOpen,
  ShoppingCart,
  Award,
  Mail,
  MapPin,
  ChevronDown,
  X,
  Wind,
  Footprints,
  Waves,
  Music,
  Dumbbell,
  MonitorPlay,
  Landmark,
  Sun,
  ShieldCheck,
  LayoutDashboard,
  Trees,
  Coffee,
  Table2,
  Construction,
  Download,
  Paintbrush,
  Maximize,
  Lightbulb
} from "lucide-react"
import type React from "react"

// --- Shared Form Data Type ---
type FormData = {
  name: string
  email: string
  phone: string
  message?: string
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleFormSubmit = async (data: FormData): Promise<boolean> => {
    try {
      // ⚠️ REPLACE WITH YOUR FORMSPREE ID
      const response = await fetch("https://formspree.io/f/xldarjon", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (response.ok) {
        router.push("/c4/thankyou")
        return true
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.")
        return false
      }
    } catch (error) {
      alert("An error occurred. Please check your connection and try again.")
      return false
    }
  }

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // ========== HERO SECTION (Updated with Contact Form) ==========
  const HeroSection = () => {
    const [heroFormData, setHeroFormData] = useState({ name: "", email: "", phone: "" })

    const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHeroFormData({ ...heroFormData, [e.target.name]: e.target.value })
    }

    const onHeroSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const success = await handleFormSubmit(heroFormData)
      if (success) setHeroFormData({ name: "", email: "", phone: "" })
    }

    return (
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] overflow-hidden pt-24 pb-12 flex items-center">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT: Text & Stats */}
            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#D4A574]/20 text-[#D4A574] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4A574]/30"
                variants={itemVariants}
              >
                <motion.span
                  className="w-2 h-2 bg-[#D4A574] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Possession: Mid 2027
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                  A Lifestyle That <br /><span className="text-[#D4A574]">Stands Tall</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Premium 2 & 3 BHK Apartments in Varthur. <br />
                  <span className="text-sm opacity-80 font-normal">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
                </p>
              </motion.div>

              <motion.div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8" variants={containerVariants}>
                {[
                  { value: "50%", label: "UDS Share" },
                  { value: "92%", label: "Open Space" },
                  { value: "115", label: "Exclusive Units" },
                ].map((stat, index) => (
                  <motion.div key={index} className="space-y-1" variants={itemVariants}>
                    <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">{stat.value}</p>
                    <p className="text-sm text-white/80 uppercase tracking-wide">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT: Contact Form (Replaces Image) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <Card className="p-8 bg-white shadow-2xl rounded-2xl border-t-4 border-[#D4A574]">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1E5BA8] mb-2">Enquire Now</h3>
                  <p className="text-gray-500 text-sm">Register to avail pre-launch benefits & priority site visit.</p>
                </div>
                <form onSubmit={onHeroSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      value={heroFormData.name} 
                      onChange={handleHeroChange} 
                      placeholder="Your Name" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5BA8] transition-all text-gray-800"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={heroFormData.phone} 
                      onChange={handleHeroChange} 
                      placeholder="Mobile Number" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5BA8] transition-all text-gray-800"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      value={heroFormData.email} 
                      onChange={handleHeroChange} 
                      placeholder="Email Address" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5BA8] transition-all text-gray-800"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                    Get Instant Call Back
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </Card>
            </motion.div>

          </div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronDown className="w-6 h-6 text-[#D4A574]" />
        </motion.div>
      </section>
    )
  }

  // ========== TOWER SHOWCASE SECTION (New Section with Moved Image) ==========
  const TowerShowcaseSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side (Previously in Hero) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full"
          >
             <div className="absolute inset-0 bg-[#D4A574] rounded-2xl transform -rotate-2 opacity-20"></div>
             <img 
               src="/palm-altezze/palm-altezze (18).jpeg" 
               alt="RRL Palm Altezze Tower Elevation" 
               className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white" 
             />
             <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#1E5BA8]">
               <p className="text-sm text-gray-500 font-bold uppercase">Structure</p>
               <p className="text-xl font-bold text-[#1E5BA8]">B + G + 23 Floors</p>
             </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E5BA8] leading-tight">
              An Iconic <br/><span className="text-[#D4A574]">Landmark</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4A574] rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rising majesitcally above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige. The architectural marvel stands as a beacon of luxury, offering panoramic views of the city skyline and the lush green surroundings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Designed with Mivan technology for superior durability and finish, the tower integrates modern aesthetics with functional brilliance, ensuring that every home is a sanctuary of comfort and style.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Exquisite Facade Design",
                "Panaromic City Views",
                "Vastu Compliant Units",
                "Optimal Ventilation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#1E5BA8]" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
                <Button size="lg" className="bg-[#1E5BA8] hover:bg-[#154A8A] text-white gap-2" onClick={() => setIsModalOpen(true)}>
                    <Download className="w-4 h-4" /> Download Brochure
                </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )

  // ========== PROJECT AT A GLANCE (Updated Overview) ==========
  const ProjectGlanceSection = () => {
    const specs = [
      { label: "Land Extent", value: "1.38 Acres" },
      { label: "Structure", value: "B + G + 23 Floors" },
      { label: "Units", value: "115 Units" },
      { label: "Configuration", value: "2 & 3 BHK" },
      { label: "Size Range", value: "1265 - 1630 Sq.ft" },
      { label: "Construction", value: "Mivan Technology" },
    ]

    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4" variants={itemVariants}>Project At A Glance</motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              RERA & BMRDA Approved | Off Varthur Road
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            {specs.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 text-center hover:shadow-lg transition-all border border-gray-100 bg-white h-full flex flex-col justify-center">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-lg font-bold text-[#1E5BA8]">{item.value}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  // ========== ARCHITECTURE REIMAGINED ==========
  const ArchitectureSection = () => {
    return (
       <section className="py-20 bg-[#1E5BA8] text-white overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/palm-altezze/pattern.png')] bg-cover"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}}>
                   <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#D4A574]">Architecture <br/> Reimagined</h2>
                   <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                      <p>
                        The architecture of RRL Palm Altezze unfolds like a living symphony — a seamless blend of flowing contours, open volumes, and organic materials.
                      </p>
                      <p>
                        Each element harmonizes aesthetics with purpose, embodying a vision of design that celebrates balance, sustainability, and soulful living.
                      </p>
                      <div className="pt-4 border-l-4 border-[#D4A574] pl-6">
                         <p className="text-xl font-bold text-white uppercase tracking-wider">A WORLD CRAFTED FOR THE ART OF LIVING WELL</p>
                      </div>
                   </div>
                </motion.div>
                
                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} className="relative">
                   <div className="absolute inset-0 bg-[#D4A574] rounded-2xl transform rotate-3 opacity-30"></div>
                   <img src="/palm-altezze/palm-altezze (20).jpeg" alt="RRL Palm Altezze Architecture" className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full object-cover" />
                </motion.div>
             </div>
          </div>
       </section>
    )
  }

  // ========== UNIQUE SELLING POINTS ==========
  const USPSection = () => {
    return (
      <section className="py-20 bg-[#F5F8FC]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Why Choose Palm Altezze?</h2>
            <p className="text-gray-600">Break the pattern. Make your mark.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Mivan Technology */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E5BA8]">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Construction className="w-8 h-8 text-[#1E5BA8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">Mivan Technology</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-green-500 shrink-0" /> <span><strong>Faster Construction:</strong> 30-40% quicker completion</span></li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-green-500 shrink-0" /> <span><strong>Superior Finish:</strong> Monolithic RCC walls, leak-proof & crack-resistant</span></li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-green-500 shrink-0" /> <span><strong>Quake Resistance:</strong> Higher strength & durability</span></li>
              </ul>
            </motion.div>

            {/* 2. Solar Power */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#D4A574]">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">Power Up With Solar</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-[#D4A574] shrink-0" /> <span><strong>Lower Bills:</strong> Solar lights for all common areas</span></li>
                <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-[#D4A574] shrink-0" /> <span><strong>Sustainable:</strong> Clean, renewable energy</span></li>
                <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-[#D4A574] shrink-0" /> <span><strong>Reliable:</strong> Long-lasting atmospheric lighting</span></li>
              </ul>
            </motion.div>

            {/* 3. 50% UDS & Open Space */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E5BA8]">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8 text-[#1E5BA8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-4">50% UDS & 92% Open</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Award className="w-5 h-5 text-[#1E5BA8] shrink-0" /> <span><strong>True 50% UDS:</strong> Live like a King with high land ownership</span></li>
                <li className="flex items-start gap-2"><Trees className="w-5 h-5 text-[#1E5BA8] shrink-0" /> <span><strong>92% Open Space:</strong> A rarity unmatched by competitors</span></li>
                <li className="flex items-start gap-2"><Maximize className="w-5 h-5 text-[#1E5BA8] shrink-0" /> <span><strong>Spacious Living:</strong> Only 5 units per floor</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  // ========== HEALTHY LIVING SECTION ==========
  const HealthyLivingSection = () => (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="max-w-xl" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-6xl font-serif text-[#1E5BA8] mb-6 leading-tight">Step Into <br /><span className="text-[#2B6CB8]">Healthy Living</span></h2>
            <div className="border-l-4 border-[#D4A574] pl-6 mb-12">
              <p className="text-gray-800 font-bold uppercase tracking-wide text-sm leading-relaxed">AT RRL PALM ALTEZZE, YOU DON'T JUST GET A <br />HOME — YOU GET A LIFESTYLE.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex flex-col items-start gap-4 group">
                <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
                  <Wind className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">FRESH AIR & <br />GREEN SURROUNDINGS</p>
              </div>
              <div className="flex flex-col items-start gap-4 group">
                <div className="w-16 h-16 rounded-full bg-[#1E5BA8]/10 flex items-center justify-center group-hover:bg-[#1E5BA8] transition-colors duration-300">
                  <Footprints className="w-8 h-8 text-[#1E5BA8] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-bold text-[#1E5BA8] text-sm max-w-[150px] leading-tight uppercase">SAFE, WELL-LIT <br />TRACK FOR ALL AGES</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="hidden lg:block relative h-full" initial="hidden" animate="visible" variants={scaleVariants}>
            <img src="/palm-altezze/palm-altezze (24).jpeg" alt="RRL Palm Altezze Healthy Living" className="w-full h-full object-contain rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )

  // ========== DETAILED AMENITIES ==========
  const AmenitiesSection = () => {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">30+ World-Class Amenities</h2>
            <p className="text-xl text-gray-600">A 16,000 Sq.ft Clubhouse where leisure meets lifestyle.</p>
          </motion.div>

          <Tabs defaultValue="clubhouse" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="clubhouse">Clubhouse (16,000 Sft)</TabsTrigger>
              <TabsTrigger value="outdoor">Outdoor & Recreational</TabsTrigger>
            </TabsList>

            <TabsContent value="clubhouse">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Ground Floor */}
                <Card className="p-6 border-0 shadow-lg bg-[#1E5BA8] text-white">
                  <h3 className="text-xl font-bold mb-4 text-[#D4A574] border-b border-white/20 pb-2">Ground Floor</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center"><LayoutDashboard className="w-5 h-5" /> Reception Hall</li>
                    <li className="flex gap-2 items-center"><BookOpen className="w-5 h-5" /> Library / Reading Lounge</li>
                    <li className="flex gap-2 items-center"><Users className="w-5 h-5" /> Indoor Kids Play Area</li>
                    <li className="flex gap-2 items-center"><LayoutDashboard className="w-5 h-5" /> Indoor Games</li>
                    <li className="flex gap-2 items-center"><Leaf className="w-5 h-5" /> Meditation Hall</li>
                  </ul>
                </Card>
                
                {/* First Floor */}
                <Card className="p-6 border-0 shadow-lg bg-white border-t-4 border-[#1E5BA8]">
                  <h3 className="text-xl font-bold mb-4 text-[#1E5BA8] border-b border-gray-100 pb-2">First Floor</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2 items-center"><Coffee className="w-5 h-5 text-[#D4A574]" /> Lounge Area</li>
                    <li className="flex gap-2 items-center"><Music className="w-5 h-5 text-[#D4A574]" /> Party Hall</li>
                    <li className="flex gap-2 items-center"><Users className="w-5 h-5 text-[#D4A574]" /> Separate Toilets</li>
                    <li className="flex gap-2 items-center"><Table2 className="w-5 h-5 text-[#D4A574]" /> Billiards / Pool Table</li>
                  </ul>
                </Card>
                
                {/* Second Floor */}
                <Card className="p-6 border-0 shadow-lg bg-white border-t-4 border-[#1E5BA8]">
                  <h3 className="text-xl font-bold mb-4 text-[#1E5BA8] border-b border-gray-100 pb-2">Second Floor</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2 items-center"><Dumbbell className="w-5 h-5 text-[#D4A574]" /> Ultra Gym</li>
                    <li className="flex gap-2 items-center"><Wind className="w-5 h-5 text-[#D4A574]" /> Steam & Sauna Bath</li>
                    <li className="flex gap-2 items-center"><Footprints className="w-5 h-5 text-[#D4A574]" /> Cardio Exercise Room</li>
                    <li className="flex gap-2 items-center"><MonitorPlay className="w-5 h-5 text-[#D4A574]" /> Mini Theatre</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="outdoor">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Swimming Pool", "Kids Pool", "Jacuzzi", "Multipurpose Court",
                  "Cricket Pitch", "Basketball Court", "Throwball Court", "Skating Rink",
                  "Jogging Track", "Amphitheatre", "Butterfly Garden", "Senior Seating",
                  "Fountain", "Planting Deck", "Chess Pawn", "Hopscotch"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-[#D4A574] rounded-full shrink-0"></div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    )
  }

  // ========== SPECIFICATIONS ==========
  const SpecificationsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Premium Specifications</h2>
          <p className="text-gray-600">Designed with the finest brands and materials.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Structure & Walls", 
              desc: "Mivan Construction (Aluminium formwork). 8\" RCC walls (External) & 6\" Solid blocks (Internal)." 
            },
            { 
              title: "Painting (Nippon)", 
              desc: "2 Coats Nippon Putty + Primer + 2 Coats Nippon Emulsion (Internal). Nippon Exterior Paint (External)." 
            },
            { 
              title: "Doors (WPC)", 
              desc: "WPC Doors for Main & Internal doors. Durable, water-resistant, and aesthetic." 
            },
            { 
              title: "Electrical (Anchor/Finolex)", 
              desc: "Concealed Finolex/Anchor copper wiring. Anchor Roma Modular switches. AC points in Bedrooms." 
            },
            { 
              title: "Flooring", 
              desc: "2'x4' Vitrified tiles in Living, Dining, Kitchen & Bedrooms. 15\"x15\" Anti-skid tiles in Balconies." 
            },
            { 
              title: "Bathrooms (Kerovit)", 
              desc: "Kerovit by Kajaria fittings. 2'x1' Anti-skid ceramic tiles. Wall dado up to 7ft." 
            },
            { 
              title: "Plumbing", 
              desc: "Supreme/Ashirvad CPVC fittings. Jaguar/Parryware sanitary fittings." 
            },
            { 
              title: "Windows", 
              desc: "UPVC windows with mosquito mesh for ventilation and protection." 
            },
            { 
              title: "Lifts & Power", 
              desc: "3 Automatic Lifts (8-passenger) + 1 Service Lift (Kone/Otis). 100% Generator Backup." 
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-l-4 border-[#1E5BA8] bg-gray-50 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#1E5BA8] transition-colors">
                    <ShieldCheck className="w-5 h-5 text-[#1E5BA8] group-hover:text-white" />
                 </div>
                 <h3 className="text-lg font-bold text-[#1E5BA8]">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  // ========== FLOOR PLANS ==========
  const FloorPlansSection = () => {
    // Data from Page 8 table
    const allUnits = [
      { id: "01", type: "2 BHK", facing: "North", area: "1265 sft", desc: "Compact luxury with 70% carpet area efficiency." },
      { id: "02", type: "3 BHK", facing: "North", area: "1495 sft", desc: "Spacious North-facing 3 BHK with optimal ventilation." },
      { id: "03", type: "3 BHK", facing: "North", area: "1630 sft", desc: "Largest 3 BHK unit with expansive living spaces." },
      { id: "04", type: "3 BHK", facing: "East", area: "1560 sft", desc: "Premium East-facing unit with morning sunlight." },
      { id: "05", type: "3 BHK", facing: "East", area: "1510 sft", desc: "Perfectly balanced East-facing layout." },
    ]

    const legends = [
      "01. Main Entrance", "02. Seating Area", "03. Cricket Net", "04. Garden",
      "05. Senior Seating", "06. Tree Seating", "07. Throw Ball Court", "08. Volley Ball Court",
      "09. Skating Rink", "10. Fitness Station", "11. Kids Play Area", "12. Badminton Court",
      "13. Amphitheatre", "14. Swimming Pool", "15. Butterfly Garden"
    ]

    return (
      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4">Floor Plans & Master Plan</h2>
            <p className="text-xl text-gray-600">5 Units per floor. No common walls. Maximum privacy.</p>
          </div>

          <Tabs defaultValue="master" className="w-full">
             <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-6 mb-12 h-auto">
                <TabsTrigger value="master" className="py-3">Master Plan</TabsTrigger>
                {allUnits.map(u => (
                  <TabsTrigger key={u.id} value={`unit${u.id}`} className="py-3">Unit {u.id}</TabsTrigger>
                ))}
             </TabsList>

             {/* Master Plan Tab */}
             <TabsContent value="master">
                <Card className="p-8 border-0 shadow-xl bg-white">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-gray-200 min-h-[500px] rounded-xl flex items-center justify-center relative overflow-hidden group">
                      <img src="/palm-altezze/masterplan.png" alt="Master Plan" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-sm text-sm font-bold text-[#1E5BA8]">92% Open Space</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 border-b pb-4">Master Plan Legends</h3>
                      <div className="grid grid-cols-1 gap-3 h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                        {legends.map((l, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-700 p-3 bg-white rounded shadow-sm hover:bg-blue-50 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-[#1E5BA8] text-white flex items-center justify-center text-xs font-bold">{i+1}</div> 
                            {l.split('. ')[1]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
             </TabsContent>

             {/* Individual Unit Tabs */}
             {allUnits.map((unit) => (
                <TabsContent key={unit.id} value={`unit${unit.id}`}>
                   <Card className="p-8 border-0 shadow-xl bg-white">
                      <div className="grid md:grid-cols-3 gap-12 items-center">
                         <div className="md:col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-[400px] flex items-center justify-center">
                            {/* Placeholder for Unit Plan Image - In production these would be distinct images */}
                            <div className="text-center">
                               <p className="text-gray-400 mb-4">Unit Plan Image</p>
                               <img src={`/palm-altezze/unit${unit.id}.png`} alt={`${unit.type} Unit ${unit.id}`} className="max-h-[400px] w-auto object-contain mx-auto mix-blend-multiply" 
                                    onError={(e) => {e.currentTarget.src = "/palm-altezze/floorplan.png"}} />
                            </div>
                         </div>
                         <div className="space-y-8">
                            <div>
                               <div className="inline-block px-4 py-1 bg-[#D4A574]/20 text-[#D4A574] rounded-full text-sm font-bold mb-2">Flat {unit.id}</div>
                               <h3 className="text-4xl font-bold text-[#1E5BA8]">{unit.type}</h3>
                               <p className="text-gray-500 mt-2">{unit.desc}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                               <div className="p-4 bg-blue-50 rounded-lg">
                                  <p className="text-sm text-gray-500 uppercase">Facing</p>
                                  <p className="text-xl font-bold text-[#1E5BA8]">{unit.facing}</p>
                               </div>
                               <div className="p-4 bg-blue-50 rounded-lg">
                                  <p className="text-sm text-gray-500 uppercase">Area</p>
                                  <p className="text-xl font-bold text-[#1E5BA8]">{unit.area}</p>
                               </div>
                            </div>

                            <div className="space-y-2">
                               <h4 className="font-bold text-gray-800">Key Features:</h4>
                               <ul className="text-sm text-gray-600 space-y-1">
                                  <li className="flex gap-2">✓ No Common Walls</li>
                                  <li className="flex gap-2">✓ 70% Carpet Area Efficiency</li>
                                  <li className="flex gap-2">✓ Vaastu Compliant</li>
                               </ul>
                            </div>
                            
                            <Button className="w-full bg-[#1E5BA8] hover:bg-[#154A8A]" onClick={() => setIsModalOpen(true)}>
                               Get Price Sheet for Unit {unit.id}
                            </Button>
                         </div>
                      </div>
                   </Card>
                </TabsContent>
             ))}
          </Tabs>
        </div>
      </section>
    )
  }

  // ========== MID PAGE CTA ==========
  const MidPageCtaSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
    const initialData = { name: "", email: "", phone: "" }
    const [data, setData] = useState(initialData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setData((prev) => ({ ...prev, [name]: value }))
    }

    const localSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const success = await onSubmit(data)
      if (success) setData(initialData)
    }

    return (
      <section className="py-20 bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] text-white">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Download the Official Brochure</h2>
            <p className="mb-6 opacity-90">Get the detailed floor plans, cost sheet, and complete amenities list delivered to your inbox.</p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="gap-2 font-bold bg-white text-[#1E5BA8] hover:bg-gray-100"><Download className="w-4 h-4" /> Download PDF</Button>
            </div>
          </div>
          <Card className="flex-1 p-8 bg-white text-black shadow-2xl">
            <h3 className="text-xl font-bold text-[#1E5BA8] mb-6 text-center">Request a Call Back</h3>
            <form onSubmit={localSubmit} className="space-y-4">
              <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Name" />
              <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Phone" />
              <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" placeholder="Email" />
              <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">Submit</Button>
            </form>
          </Card>
        </div>
      </section>
    )
  }

  // ========== CONNECTIVITY ==========
  const ConnectivitySection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E5BA8] mb-4">Prime Location</h2>
          <p className="text-gray-600">Off Varthur Road. Connected to everything that matters.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Building2, 
              title: "Tech Hubs", 
              items: ["ITPL Main Road", "Wipro SEZ", "RGA Tech Park", "Sigma Tech Park"] 
            },
            { 
              icon: ShoppingCart, 
              title: "Malls", 
              items: ["Nexus Whitefield", "Nexus Shantiniketan", "Phoenix Marketcity", "Inorbit Mall"] 
            },
            { 
              icon: BookOpen, 
              title: "Schools", 
              items: ["Chrysalis High", "Vagdevi Vilas", "Ryan International", "Delhi Public School"] 
            },
            { 
              icon: Hospital, 
              title: "Hospitals", 
              items: ["Manipal Varthur", "Sahasra Hospital", "Cloudnine Hospital", "Sankara Eye Hospital"] 
            },
          ].map((cat, i) => (
            <Card key={i} className="p-6 border-0 shadow-lg hover:border-b-4 hover:border-[#D4A574] transition-all">
              <cat.icon className="w-8 h-8 text-[#1E5BA8] mb-4" />
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {cat.items.map((item, idx) => <li key={idx}>• {item}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  // ========== CONTACT ==========
  const ContactSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
    const initialData = { name: "", email: "", phone: "", message: "" }
    const [data, setData] = useState(initialData)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [e.target.name]: e.target.value })
    const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) setData(initialData); }

    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#1E5BA8] mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D4A574]" />
                  <p className="text-gray-700">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#D4A574]" />
                  <a href="tel:+918494966966" className="text-gray-700 font-bold hover:text-[#1E5BA8]">+91 84 94 966 966</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#D4A574]" />
                  <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-gray-700 hover:text-[#1E5BA8]">enquiry@rrlbuildersanddevelopers.com</a>
                </div>
              </div>
            </div>
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Send Message</h3>
              <form onSubmit={localSubmit} className="space-y-4">
                <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Name" />
                <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Email" />
                <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Phone" />
                <textarea name="message" value={data.message} onChange={handleChange} rows={4} className="w-full p-3 border rounded" placeholder="Message"></textarea>
                <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold h-12">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // ========== MODAL ==========
  const EnquiryModal = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
    const initialData = { name: "", email: "", phone: "" }
    const [data, setData] = useState(initialData)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })
    const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) { setData(initialData); setIsModalOpen(false); } }

    return (
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsModalOpen(false)}><X className="w-5 h-5" /></Button>
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 text-center">Quick Enquiry</h3>
              <form onSubmit={localSubmit} className="space-y-4">
                <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Name" />
                <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Email" />
                <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Phone" />
                <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">Submit</Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <main className="w-full">
      <HeroSection />
      <TowerShowcaseSection /> {/* New Section added here */}
      <ProjectGlanceSection />
      <ArchitectureSection />
      <USPSection />
      <HealthyLivingSection />
      <AmenitiesSection />
      <SpecificationsSection />
      <FloorPlansSection />
      {/* <MidPageCtaSection onSubmit={handleFormSubmit} /> */}
      <ConnectivitySection />
      <ContactSection onSubmit={handleFormSubmit} />
      <EnquiryModal onSubmit={handleFormSubmit} />
    </main>
  )
}