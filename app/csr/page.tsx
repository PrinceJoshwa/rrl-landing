// // "use client"

// // import { useRef } from "react"
// // import { motion, useScroll, useTransform } from "framer-motion"
// // import { Heart, Users, Building2, CheckCircle2, Sprout, HandHeart, Sparkles } from "lucide-react"
// // import Image from "next/image"

// // export default function CSRPage() {
// //   const ref = useRef(null)
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start start", "end start"],
// //   })
// //   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
// //   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

// //   return (
// //     <div className="bg-black min-h-screen text-white overflow-hidden">
      
// //       {/* 1. HERO SECTION */}
// //       <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
// //         <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
// //           {/* Use a community/event related image here */}
// //           <Image 
// //             src="/LookProject5.jpeg" 
// //             alt="CSR Background"
// //             fill
// //             className="object-cover opacity-50"
// //             priority
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
// //         </motion.div>

// //         <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-4xl">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //             className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
// //           >
// //             <Heart className="w-4 h-4 text-gold-500" />
// //             <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Community First</span>
// //           </motion.div>

// //           <motion.h1 
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="text-5xl md:text-7xl font-playfair font-bold mb-6"
// //           >
// //             Building <span className="text-gold-500">Communities</span>, <br /> Not Just Homes.
// //           </motion.h1>
// //         </motion.div>
// //       </section>

// //       {/* 2. MISSION STATEMENT */}
// //       <section className="py-20 bg-white text-black relative">
// //         <div className="container mx-auto px-4">
// //             <div className="max-w-4xl mx-auto text-center mb-16">
// //                 <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
// //                     Our Social <span className="text-gold-600">Commitment</span>
// //                 </h2>
// //                 <p className="text-xl text-gray-600 leading-relaxed font-light">
// //                     RRL Builders and Developers, recognized as trusted builders in Bangalore and a leading name in Sarjapur, actively contributes to social harmony and community welfare. Our CSR initiatives reflect our deep commitment to building stronger communities rooted in trust, unity, and heritage.
// //                 </p>
// //             </div>

// //             {/* 3 PILLARS GRID */}
// //             <div className="grid md:grid-cols-3 gap-8">
// //                 {/* Pillar 1 */}
// //                 <motion.div 
// //                     initial={{ opacity: 0, y: 30 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
// //                 >
// //                     <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
// //                         <Users className="w-8 h-8" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold font-playfair mb-4">Community Harmony</h3>
// //                     <p className="text-gray-600 leading-relaxed">
// //                         We regularly host community events that foster inclusivity and cultural exchange. These gatherings bring together residents and local leaders to promote a sense of belonging.
// //                     </p>
// //                 </motion.div>

// //                 {/* Pillar 2 */}
// //                 <motion.div 
// //                     initial={{ opacity: 0, y: 30 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: 0.1 }}
// //                     className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
// //                 >
// //                     <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
// //                         <Building2 className="w-8 h-8" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold font-playfair mb-4">Heritage Preservation</h3>
// //                     <p className="text-gray-600 leading-relaxed">
// //                         We support temple renovations and donations, recognizing them as vital centers of life. These contributions help preserve heritage and uplift local economies.
// //                     </p>
// //                 </motion.div>

// //                 {/* Pillar 3 */}
// //                 <motion.div 
// //                     initial={{ opacity: 0, y: 30 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: 0.2 }}
// //                     className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
// //                 >
// //                     <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
// //                         <CheckCircle2 className="w-8 h-8" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold font-playfair mb-4">Trusted Development</h3>
// //                     <p className="text-gray-600 leading-relaxed">
// //                         Every project reflects not just architectural excellence, but social responsibility. We demonstrate to our investors that we are builders of a better society.
// //                     </p>
// //                 </motion.div>
// //             </div>
// //         </div>
// //       </section>

// //       {/* 3. IMPACT STATISTICS / HIGHLIGHTS */}
// //       <section className="py-20 bg-neutral-900 border-y border-gold-900/30">
// //         <div className="container mx-auto px-4">
// //             <div className="grid md:grid-cols-4 gap-8 text-center">
// //                 {[
// //                     { icon: Sprout, label: "Eco Initiatives", value: "100+" },
// //                     { icon: HandHeart, label: "Community Events", value: "50+" },
// //                     { icon: Building2, label: "Temples Supported", value: "12+" },
// //                     { icon: Users, label: "Lives Impacted", value: "5000+" },
// //                 ].map((stat, index) => (
// //                     <motion.div 
// //                         key={index}
// //                         initial={{ opacity: 0, scale: 0.8 }}
// //                         whileInView={{ opacity: 1, scale: 1 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: index * 0.1 }}
// //                         className="p-6"
// //                     >
// //                         <stat.icon className="w-10 h-10 text-gold-500 mx-auto mb-4" />
// //                         <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
// //                         <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
// //                     </motion.div>
// //                 ))}
// //             </div>
// //         </div>
// //       </section>

// //       {/* 4. GALLERY SECTION */}
// //       <section className="py-24 bg-black">
// //         <div className="container mx-auto px-4">
// //             <h2 className="text-4xl font-playfair font-bold text-center mb-12">
// //                 Moments of <span className="text-gold-500">Giving Back</span>
// //             </h2>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
// //                 {/* Large Main Image */}
// //                 <div className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-neutral-800">
// //                     <Image 
// //                         src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008" 
// //                         alt="Community Event"
// //                         fill
// //                         className="object-cover group-hover:scale-105 transition-transform duration-700"
// //                     />
// //                     <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
// //                         {/* <p className="text-white font-bold text-xl">Local Temple Renovation</p> */}
// //                     </div>
// //                 </div>
                
// //                 {/* Side Stack */}
// //                 <div className="flex flex-col gap-6">
// //                     <div className="relative flex-1 rounded-2xl overflow-hidden group border border-neutral-800">
// //                         <Image 
// //                             src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg?updatedAt=1767702779226" 
// //                             alt="CSR Activity"
// //                             fill
// //                             className="object-cover group-hover:scale-105 transition-transform duration-700"
// //                         />
// //                     </div>
// //                     {/* <div className="relative flex-1 rounded-2xl overflow-hidden group border border-neutral-800">
// //                          <Image 
// //                             src="/LookProject5.jpeg" 
// //                             alt="Community Gathering"
// //                             fill
// //                             className="object-cover group-hover:scale-105 transition-transform duration-700"
// //                         />
// //                     </div> */}
// //                 </div>
// //             </div>
// //         </div>
// //       </section>

// //       {/* 5. CTA */}
// //       <section className="py-20 bg-gold-500 text-black text-center">
// //         <div className="container mx-auto px-4">
// //             <Sparkles className="w-12 h-12 mx-auto mb-6 text-black/50" />
// //             <h2 className="text-4xl font-playfair font-bold mb-6">Partner in Our Journey</h2>
// //             <p className="text-xl max-w-2xl mx-auto mb-8 font-medium opacity-80">
// //                 Join us in creating spaces that not only shelter families but also nurture the communities around them.
// //             </p>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// "use client"

// import { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { Heart, Users, Building2, CheckCircle2, Sprout, HandHeart, Sparkles, Coffee, Smile } from "lucide-react"
// import Image from "next/image"

// export default function CSRPage() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   })
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

//   // REPLACE THESE WITH ACTUAL CLUB CABANA & INSTA PICTURES
//   const teamOutingImages = [
//     "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008",
//     "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg?updatedAt=1767702779226",
//     "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM%20(1).jpeg?updatedAt=1767702778813",
//     "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM.jpeg?updatedAt=1767702779051",
//     "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.22%20PM.jpeg?updatedAt=1767702798945",
//   ]

//   return (
//     <div className="bg-black min-h-screen text-white overflow-hidden">
      
//       {/* 1. HERO SECTION */}
//       <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-gold-900/30">
//         <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
//           <Image 
//             src="/LookProject5.jpeg" 
//             alt="CSR Background"
//             fill
//             className="object-cover opacity-40"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
//         </motion.div>

//         <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
//           >
//             <Heart className="w-4 h-4 text-gold-500" />
//             <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Community First</span>
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-7xl font-playfair font-bold mb-6"
//           >
//             Building <span className="text-gold-500">Communities</span>, <br /> Not Just Homes.
//           </motion.h1>
//           <motion.p
//              initial={{ opacity: 0, y: 20 }}
//              animate={{ opacity: 1, y: 0 }}
//              transition={{ duration: 0.8, delay: 0.4 }}
//              className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto"
//           >
//               At RRL Builders and Developers, our responsibility extends beyond construction. We are dedicated to nurturing the people, heritage, and environments that surround our projects.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* 2. MISSION STATEMENT & PILLARS */}
//       <section className="py-24 bg-neutral-900 text-white relative">
//         <div className="absolute inset-0 bg-grid-white/[0.02]" />
//         <div className="container mx-auto px-4 relative z-10">
//             <div className="max-w-4xl mx-auto text-center mb-16">
//                 <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
//                     Our Social <span className="text-gold-500">Commitment</span>
//                 </h2>
//                 <p className="text-xl text-gray-400 leading-relaxed font-light">
//                     Recognized as trusted builders in Bangalore and a leading name in Sarjapur, we actively contribute to social harmony and community welfare. Our initiatives reflect our deep commitment to building stronger communities rooted in trust, unity, and heritage.
//                 </p>
//             </div>

//             {/* 3 PILLARS GRID */}
//             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {/* Pillar 1 */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="bg-black p-8 rounded-3xl border border-gold-900/50 hover:shadow-[0_0_30px_rgba(217,164,6,0.1)] hover:border-gold-500/50 transition-all duration-300"
//                 >
//                     <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500 border border-gold-500/20">
//                         <Users className="w-8 h-8" />
//                     </div>
//                     <h3 className="text-2xl font-bold font-playfair mb-4">Community Harmony</h3>
//                     <p className="text-gray-400 leading-relaxed">
//                         We regularly host community events that foster inclusivity and cultural exchange. These gatherings bring together residents and local leaders to promote a strong sense of belonging.
//                     </p>
//                 </motion.div>

//                 {/* Pillar 2 */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.1 }}
//                     className="bg-black p-8 rounded-3xl border border-gold-900/50 hover:shadow-[0_0_30px_rgba(217,164,6,0.1)] hover:border-gold-500/50 transition-all duration-300"
//                 >
//                     <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500 border border-gold-500/20">
//                         <Building2 className="w-8 h-8" />
//                     </div>
//                     <h3 className="text-2xl font-bold font-playfair mb-4">Heritage Preservation</h3>
//                     <p className="text-gray-400 leading-relaxed">
//                         We support temple renovations and local donations, recognizing them as vital centers of life. These contributions help preserve our rich heritage and uplift local economies.
//                     </p>
//                 </motion.div>

//                 {/* Pillar 3 */}
//                 <motion.div 
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 }}
//                     className="bg-black p-8 rounded-3xl border border-gold-900/50 hover:shadow-[0_0_30px_rgba(217,164,6,0.1)] hover:border-gold-500/50 transition-all duration-300"
//                 >
//                     <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500 border border-gold-500/20">
//                         <CheckCircle2 className="w-8 h-8" />
//                     </div>
//                     <h3 className="text-2xl font-bold font-playfair mb-4">Trusted Development</h3>
//                     <p className="text-gray-400 leading-relaxed">
//                         Every project reflects not just architectural excellence, but social responsibility. We prove to our investors and residents that we are builders of a better, sustainable society.
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//       </section>

//       {/* 3. CSR INITIATIVES GALLERY WITH CONTENT */}
//       <section className="py-24 bg-black border-y border-gold-900/30">
//         <div className="container mx-auto px-4 max-w-6xl">
//             <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
//                     Moments of <span className="text-gold-500">Giving Back</span>
//                 </h2>
//                 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//                     A glimpse into our continuous efforts to support local infrastructure, sponsor cultural events, and give back to the communities that support us.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//                 {/* Content Side */}
//                 <motion.div 
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     className="space-y-6"
//                 >
//                     <h3 className="text-3xl font-playfair font-bold text-white">Empowering Local Heritage</h3>
//                     <p className="text-gray-400 leading-relaxed text-lg">
//                         At RRL, we believe that preserving our cultural roots is just as important as building the future. Our ongoing initiatives include funding local temple renovations and supporting cultural festivals that bring neighborhoods together. 
//                     </p>
//                     <ul className="space-y-4 text-gray-300">
//                         <li className="flex items-start gap-3">
//                             <HandHeart className="w-6 h-6 text-gold-500 shrink-0" />
//                             <span>Financial aid for community centers and religious institutions.</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <Users className="w-6 h-6 text-gold-500 shrink-0" />
//                             <span>Organizing health camps and educational drives in rural areas.</span>
//                         </li>
//                     </ul>
//                 </motion.div>

//                 {/* Image Side */}
//                 <motion.div 
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     className="relative h-[400px] rounded-2xl overflow-hidden border border-gold-900/50 group"
//                 >
//                     <Image 
//                         src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008" 
//                         alt="CSR Activity - Temple Support"
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                     <div className="absolute bottom-6 left-6">
//                         <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide mb-2 inline-block">Heritage</span>
//                         <p className="text-white font-playfair text-xl">Local Temple Renovation Drive</p>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Secondary Image Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
//                 <div className="relative rounded-2xl overflow-hidden group border border-neutral-800">
//                     <Image 
//                         src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg?updatedAt=1767702779226" 
//                         alt="Community Event"
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                          <p className="text-white font-playfair text-xl">Community Gathering Event</p>
//                     </div>
//                 </div>
//                 {/* ADD ANOTHER CSR IMAGE HERE IF NEEDED */}
//                 <div className="relative rounded-2xl overflow-hidden group border border-neutral-800 bg-neutral-900 flex items-center justify-center">
//                     <div className="text-center p-8">
//                         <Sprout className="w-12 h-12 text-gold-500 mx-auto mb-4 opacity-50" />
//                         <h4 className="text-xl font-bold text-white mb-2">Sustainable Future</h4>
//                         <p className="text-gray-500 text-sm">More initiatives being updated soon.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* 4. TEAM OUTING SECTION (CLUB CABANA) */}
//       <section className="py-24 bg-[#0a0a0a] overflow-hidden relative">
//          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
         
//          <div className="container mx-auto px-4 mb-12 text-center relative z-10 max-w-4xl">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//             >
//                 <div className="inline-flex items-center space-x-2 border border-gold-500/30 bg-gold-500/10 px-6 py-2 rounded-full mb-6">
//                     <Smile className="w-4 h-4 text-gold-500" />
//                     <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Team Culture</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
//                     Life at RRL: <span className="text-gold-500">Club Cabana Outing</span>
//                 </h2>
//                 <p className="text-lg text-gray-400 leading-relaxed">
//                     Great homes are built by great teams. We strongly believe that a happy, connected workforce drives excellence. Recently, the RRL family took a step back from the sites and blueprints to unwind, bond, and celebrate our milestones together at Club Cabana. These moments of togetherness reflect our internal culture of support, unity, and shared success.
//                 </p>
//             </motion.div>
//         </div>

//         {/* Marquee Gallery for Team Outing */}
//         <div className="relative flex w-full overflow-hidden group py-10">
//             {/* Gradient masks for smooth fade on edges */}
//             <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
//             <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

//             <motion.div
//                 className="flex gap-4 sm:gap-6 whitespace-nowrap"
//                 animate={{ x: ["0%", "-50%"] }}
//                 transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
//             >
//                 {/* Duplicated array for seamless looping */}
//                 {[...teamOutingImages, ...teamOutingImages].map((src, i) => (
//                     <div
//                         key={i}
//                         className="
//                             relative flex-shrink-0 overflow-hidden rounded-2xl
//                             w-[260px] h-[200px]
//                             sm:w-[320px] sm:h-[240px]
//                             md:w-[400px] md:h-[300px]
//                             transition-all duration-500
//                             border border-white/5 hover:border-gold-500/50
//                             hover:scale-[1.02]
//                             hover:shadow-[0_0_25px_rgba(217,164,6,0.2)]
//                         "
//                     >
//                         <Image
//                             src={src}
//                             alt={`RRL Team Outing ${i}`}
//                             fill
//                             className="object-cover"
//                             sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 400px"
//                             unoptimized
//                         />
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//       </section>

//       {/* 5. IMPACT STATISTICS */}
//       <section className="py-20 bg-neutral-900 border-y border-gold-900/30">
//         <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-4 gap-8 text-center">
//                 {[
//                     { icon: Sprout, label: "Eco Initiatives", value: "100+" },
//                     { icon: HandHeart, label: "Community Events", value: "50+" },
//                     { icon: Building2, label: "Temples Supported", value: "12+" },
//                     { icon: Coffee, label: "Team Outings", value: "Annually" }, // Changed to reflect team culture
//                 ].map((stat, index) => (
//                     <motion.div 
//                         key={index}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.1 }}
//                         className="p-6 bg-black/50 rounded-2xl border border-gold-900/20"
//                     >
//                         <stat.icon className="w-10 h-10 text-gold-500 mx-auto mb-4" />
//                         <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
//                         <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* 6. CTA */}
//       <section className="py-24 bg-gold-500 text-black text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
//         <div className="container mx-auto px-4 relative z-10">
//             <Sparkles className="w-12 h-12 mx-auto mb-6 text-black/50" />
//             <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Partner in Our Journey</h2>
//             <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-medium opacity-90">
//                 Join us in creating spaces that not only shelter families but also nurture the communities around them.
//             </p>
//             <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
//                 Contact Us Today
//             </button>
//         </div>
//       </section>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Sprout, HeartPulse, Sparkles, MapPin, Target, Coffee } from "lucide-react"
import Image from "next/image"

// Detailed content for images, emphasizing RRL as a family and prioritiing well-being.
// For each picture, 2-3 lines about the context, including when, who, and what.
const outingImagesData = [
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008",
    title: "Team RRL Unwinding at Club Cabana",
    dateLocation: "Club Cabana, Bengaluru | Jan 2024",
    content: "A day of pure joy and relaxation for the RRL family. We believe a team that plays together stays together, building stronger bonds away from the blueprint. Look at all those smiles!",
  },
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg?updatedAt=1767702779226",
    title: "Laughter and Games on the Green",
    dateLocation: "Club Cabana, Bengaluru | Jan 2024",
    content: "Our team members sharing a moment of friendly competition during a cricket match. It's about finding that perfect balance between focus on site and fun on the field. More memories made!",
  },
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM%20(1).jpeg?updatedAt=1767702778813",
    title: "Community Outreach - Local School",
    dateLocation: "Sarjapur Road, Bengaluru | Mar 2024",
    content: "A group of RRL volunteers helping repaint classrooms at a local school. For us, CSR is about the tangible impact we have on our shared community. Team work, paint, and happy faces.",
  },
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM.jpeg?updatedAt=1767702779051",
    title: "Tree Planting Initiative",
    dateLocation: "Sarjapur Road, Bengaluru | Jun 2024",
    content: "We take pride in building sustainably. This tree planting drive is our way of giving back to nature, ensuring a greener environment for generations to come. Growing together as a family and with nature.",
  },
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.22%20PM.jpeg?updatedAt=1767702798945",
    title: "Wellness Workshop - Yoga Session",
    dateLocation: "RRL Head Office | May 2024",
    content: "Our monthly wellness session, this time focus on mindfulness and relaxation through yoga. We prioritize employee mental and physical well-being. A relaxed mind is a creative mind, and it shows in our work!",
  },
  // Add 10-15 more detailed picture placeholders following this structure.
];

const healthWellnessData = [
  {
    icon: HeartPulse,
    title: "Comprehensive Health Support",
    content: "Our well-being package includes comprehensive health insurance and on-site annual medical check-ups, so our team and their families have peace of mind. We take care of you, so you can focus on building your dreams.",
  },
  {
    icon: Target,
    title: "On-Site Wellness Stations",
    content: "We provide dedicated wellness zones with standing desks, ergonomic chairs, and hydration stations to promote comfort and physical well-being throughout the workday. Your physical comfort is key to our combined success.",
  },
  {
    icon: Sprout,
    title: "Healthy Dining Options",
    content: "Our workplace cafe offers curated, nutritious meals and a 'healthy-snack-of-the-month' initiative, making it easy to make healthy choices. Good food, shared together, strengthens our bonds.",
  },
  {
    icon: Coffee,
    title: "Mindfulness & Growth Seminars",
    content: "Regularly scheduled sessions on stress management, financial literacy, and career growth, empowering our team beyond the desk. It's a journey of continuous personal and professional development.",
  },
];

const eventsData = [
  {
    icon: Users,
    title: "Monthly Family Potlucks",
    content: "A beautiful tradition where the entire RRL family comes together, sharing home-cooked food and great stories. These aren't just meals; they are moments of connection and shared laughter.",
  },
  {
    icon: Sparkles,
    title: "Annual Sports Day",
    content: "Our internal Olympics, where friendly competition, teamwork, and high energy define the day. From track events to carrom tournaments, there's a space for everyone's hidden talents to shine!",
  },
  {
    icon: Sprout,
    title: "Quarterly Learning Fairs",
    content: "A cross-functional knowledge exchange platform. Engineers share construction insights, marketing presents new campaigns, and everyone learns from each other's expertise, driving our collective growth.",
  },
  {
    icon: Coffee,
    title: "Friday 'Chai & Chat'",
    content: "An informal end-of-week gathering for open dialogue and fun. It's a space for ideas, relaxation, and celebrating the week's wins. We build bridges through open communication.",
  },
];

const detailedStats = [
  { label: "RRL Family Members", value: "250+" },
  { label: "Community Events Supported", value: "30+" },
  { label: "Eco-Conscious Projects", value: "15+" },
  { label: "Wellness Programs Launched", value: "12" },
];

export default function LifeAtRRLPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center border-b border-white/10">
        <Image
          src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008"
          alt="Life at RRL"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
          >
            <Users className="w-5 h-5 text-gold-500" />
            <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Our Culture & People</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-playfair leading-tight"
          >
            A Place to Call Home: <span className="text-gold-500">The RRL Family</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto"
          >
            RRL Builders is not just a workplace; it's a family that prioritizes your physical and mental well-being above all. Welcome to the heart of what makes us unique—our shared moments of joy, growth, and community.
          </motion.p>
        </div>
      </section>

      {/* 2. TEAM OUTING GALLERY */}
      <section className="py-20 bg-black overflow-hidden relative border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Recent Family Gatherings</h2>
          <p className="text-lg text-gray-400 font-light">
            We strongly believe that a team that plays together, stays together. Recently, the RRL family took a step back from our sites and blueprints to unwind, connect, and make lasting memories. Check out our latest team outings, including the unforgettable Club Cabana and other recent events. For us, every member is family.
          </p>
        </div>

        {/* Scrolling Marquee of Picture Cards */}
        <div className="relative flex w-full overflow-hidden group py-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            className="flex gap-4 sm:gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...outingImagesData, ...outingImagesData].map((imageData, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[420px] md:h-[500px] flex-shrink-0 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden group transition-all duration-300"
              >
                <div className="relative h-2/3 w-full">
                  <Image
                    src={imageData.src}
                    alt={imageData.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 h-1/3 flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-bold text-white font-playfair line-clamp-1">{imageData.title}</h4>
                    <div className="flex items-center gap-1.5 text-gold-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{imageData.dateLocation}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2 mt-2 leading-relaxed">
                    {imageData.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CSR SECTION - Caring for Our Community */}
      <section className="py-24 bg-neutral-950 border-y border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 px-6 py-2 rounded-full mb-6">
                <HeartPulse className="w-5 h-5 text-gold-500" />
                <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Giving Back</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-white leading-snug">
                Beyond the <span className="text-gold-500">Blueprint</span>: Corporate Social Responsibility
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light mb-8">
                As a prominent builder in Bangalore, particularly along Sarjapur Road, we deeply acknowledge our social responsibility. Our CSR initiatives are not just corporate policies; they are heartfelt actions rooted in community harmony, environmental sustainability, and heritage preservation. This is another way we act like a family, caring for the neighborhood that supports us. Look at some of our recent impactful activities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 h-[400px]">
              {outingImagesData.slice(2, 6).map((item, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 right-4">
                    <p className="text-white text-base font-bold font-playfair line-clamp-2">{item.title}</p>
                    <p className="text-gold-400 text-xs mt-1">{item.dateLocation}</p>
                    <p className="text-gray-300 text-xs line-clamp-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HEALTH & WELLNESS SECTION - Prioritizing Your Well-being */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
              A Healthy Heart, a Thriving Mind: <span className="text-gold-500">Employee Well-being</span>
            </h2>
            <p className="text-lg text-gray-400 font-light">
              We understand that to build incredible homes, we must nurture an incredible team. That's why your mental and physical health are not just benefits, but our highest priorities. We are committed to creating a supportive, caring, and growth-oriented environment where you can truly thrive. This isn't just a workplace, it's a family that stands by you.
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {healthWellnessData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 group hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300 border border-gold-500/20">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-playfair">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. EVENTS & GROWTH SECTION - Fun & Growth */}
      <section className="py-24 bg-neutral-950 border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
            Connecting, Sharing, <span className="text-gold-500">Learning:</span> The Heart of Our Culture
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
            Our unique culture is built on the pillars of continuous learning, open communication, and shared success. Beyond the work, we find every opportunity to connect and celebrate. These aren't just events; they are shared moments that strengthen our RRL family.
          </p>
        </div>
        <div className="relative w-full overflow-hidden group">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
          <motion.div
            className="flex gap-6 whitespace-nowrap py-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...eventsData, ...eventsData].map((item, i) => (
              <div key={i} className="w-[320px] h-[340px] flex-shrink-0 bg-black border border-white/5 rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:border-gold-500/50">
                <div>
                  <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-gold-500 border border-white/10 group-hover:border-gold-500/30">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair line-clamp-1 text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-base leading-relaxed line-clamp-5 mt-4 group-hover:text-gray-200 transition-colors duration-300">
                  {item.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. STATS & IMPACT - Detailed with family focus */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
              Measured by Miles, <span className="text-gold-500">Loved by Many</span>
            </h2>
            <p className="text-lg text-gray-400 font-light mb-8 max-w-3xl mx-auto">
              Our impact is not just in terms of square feet; it's in terms of smiles, health, and a stronger community. At RRL, we measure success by the well-being and growth of our team and the harmony we foster in the neighborhood. We truly believe we are not just a workplace, but a supportive and thriving family.
            </p>
          </div>
          <motion.div className="grid md:grid-cols-4 gap-8 text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {detailedStats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="p-10 bg-zinc-950 border border-white/10 rounded-2xl group hover:border-gold-500/50 transition-all duration-300">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">{stat.label}</p>
                <p className="text-5xl font-extrabold text-white group-hover:text-gold-500 transition-colors duration-300">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. CTA & FOOTER */}
      <section className="py-24 bg-gold-500 text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-black/50" />
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Build Your Dreams with Us</h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-medium opacity-90 leading-normal">
            Join the RRL family and experience a workplace that truly cares about your well-being, growth, and community. Discover a place to call home.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Contact Our Family Today
          </button>
        </div>
      </section>
      
      <footer className="py-12 bg-black border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} RRL Builders & Developers. All rights reserved. A family focused on your well-being.
        </p>
      </footer>
    </div>
  );
}