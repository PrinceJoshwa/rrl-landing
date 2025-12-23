// // // import { AboutHero } from "@/components/about/about-hero"
// // // import { Leadership } from "@/components/about/leadership"
// // // import { Values } from "@/components/about/values"
// // // import { Timeline } from "@/components/about/timeline"

// // // export default function AboutPage() {
// // //   return (
// // //     <>
// // //       <AboutHero />
// // //       <Leadership />
// // //       <Values />
// // //       <Timeline />
// // //     </>
// // //   )
// // // }

// // import Image from "next/image"
// // import { Button } from "@/components/ui/button"
// // import {
// //   Building,
// //   Users,
// //   Award,
// //   Target,
// //   Lightbulb,
// //   Quote,
// //   Shield,
// //   Heart,
// //   Calendar,
// // } from "lucide-react"

// // // ========== 1. ABOUT HERO COMPONENT ==========
// // function AboutHero() {
// //   return (
// //     <section className="py-20 gradient-bg">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-8">
// //             <div className="space-y-4">
// //               <div className="inline-flex items-center space-x-2 bg-[#d9a406] text-white px-4 py-2 rounded-full text-sm font-medium">
// //                 <Building className="h-4 w-4" />
// //                 <span>About RRL</span>
// //               </div>

// //               <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
// //                 Pioneers of Affordable Luxury Residential and Commercial Spaces in Bangalore
// //               </h1>

// //               <p className="text-lg text-slate-600 leading-relaxed">
// //                 We are RRL Builders and Developers, serving in the field of real estate since 1996. The Global Real
// //                 Estate Brand, 2023 winner. Let us help you in finding your dream home and we believe in Affordability.
// //               </p>
// //             </div>

// //             {/* Company Highlights */}
// //             <div className="grid grid-cols-2 gap-6">
// //               <div className="space-y-2">
// //                 <div className="flex items-center space-x-2">
// //                   <Award className="h-5 w-5 text-[#d9a406]" />
// //                   <span className="font-semibold text-slate-900">Since 1996</span>
// //                 </div>
// //                 <p className="text-sm text-slate-600">We are serving Global Legacy from 1996</p>
// //               </div>

// //               <div className="space-y-2">
// //                 <div className="flex items-center space-x-2">
// //                   <Target className="h-5 w-5 text-[#d9a406]" />
// //                   <span className="font-semibold text-slate-900">Awarded</span>
// //                 </div>
// //                 <p className="text-sm text-slate-600">Property Award of the year - Affordable, 2023</p>
// //               </div>

// //               <div className="space-y-2">
// //                 <div className="flex items-center space-x-2">
// //                   <Users className="h-5 w-5 text-[#d9a406]" />
// //                   <span className="font-semibold text-slate-900">Core Values</span>
// //                 </div>
// //                 <p className="text-sm text-slate-600">Transparency, Innovation, and Quality</p>
// //               </div>

// //               <div className="space-y-2">
// //                 <div className="flex items-center space-x-2">
// //                   <Building className="h-5 w-5 text-[#d9a406]" />
// //                   <span className="font-semibold text-slate-900">Goal</span>
// //                 </div>
// //                 <p className="text-sm text-slate-600">Making Homeownership a Reality for Many</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Content - Company Logo */}
// //           <div className="relative">
// //             <div className="bg-slate-900 rounded-2xl p-12 text-center">
// //               <div className="text-[#d9a406] text-6xl font-bold mb-4">RRL</div>
// //               <div className="text-white text-xl font-semibold mb-2">RRL GROUP OF COMPANIES</div>
// //               <div className="text-[#d9a406] text-sm">GROUP LEGACY SINCE 1996</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 2. LEADERSHIP COMPONENT ==========
// // function Leadership() {
// //   return (
// //     <section className="py-24 bg-white relative overflow-hidden">
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 opacity-5">
// //         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
// //         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
// //       </div>

// //       <div className="container mx-auto px-4 relative">
// //         {/* Header Section */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
// //             <Users className="h-5 w-5" />
// //             <span className="font-semibold">Leadership Excellence</span>
// //           </div>

// //           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
// //             Young Entrepreneurs:
// //             <span className="text-gradient block">Transforming The Real Estate Landscape</span>
// //           </h2>

// //           <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
// //             When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of{" "}
// //             <strong>Mr. Ram Reddy</strong> and <strong>Mr. Lakshman Reddy</strong> from RRL Builders and Developers Pvt
// //             Ltd stand out in the industry as Pioneers of Affordable Luxury Residential and Commercial Spaces in
// //             Bangalore.
// //           </p>
// //         </div>

// //         {/* Leadership Images and Quotes */}
// //         <div className="grid lg:grid-cols-2 gap-12 mb-16">
// //           {/* Mr. Ram Reddy */}
// //           <div className="space-y-6">
// //             <div className="relative bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-6 shadow-xl">
// //               <Image
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-pas5bMH3OcTcVZSxpZxq5DulrmyjEN.jpeg"
// //                 alt="Mr. Ram Reddy - Director, RRL Builders & Developers"
// //                 width={500}
// //                 height={400}
// //                 className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
// //               />

// //               {/* Quote Overlay */}
// //               <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl border-l-4 border-amber-600">
// //                 <div className="flex items-start space-x-3">
// //                   <Quote className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <p className="text-slate-700 italic font-medium mb-2">
// //                       "Coming together is a beginning. Keeping together is progress"
// //                     </p>
// //                     <p className="text-sm text-slate-500 font-semibold">Mr. Ram Reddy - Director Message</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="text-center pt-8">
// //               <h3 className="font-bold text-xl text-slate-900">Mr. Ram Reddy</h3>
// //               <p className="text-slate-600">Director</p>
// //             </div>
// //           </div>

// //           {/* Mr. Lakshman Reddy */}
// //           <div className="space-y-6">
// //             <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-6 shadow-xl">
// //               <Image
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-wka36xEiCGuAbsGkhcr4O6n2ZrLOzL.jpeg"
// //                 alt="Mr. Lakshman Reddy - Chairman, RRL Builders & Developers"
// //                 width={500}
// //                 height={400}
// //                 className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
// //               />

// //               {/* Quote Overlay */}
// //               <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl border-l-4 border-emerald-600">
// //                 <div className="flex items-start space-x-3">
// //                   <Quote className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <p className="text-slate-700 italic font-medium mb-2">
// //                       "At RRL, quality is not just a goal; it's a commitment. We take pride in delivering homes that our
// //                       customers will cherish for generations to come."
// //                     </p>
// //                     <p className="text-sm text-slate-500 font-semibold">Mr. Lakshman Reddy - Chairman's Message</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="text-center pt-8">
// //               <h3 className="font-bold text-xl text-slate-900">Mr. Lakshman Reddy</h3>
// //               <p className="text-slate-600">Chairman</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Experience and Expertise Section */}
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-8">
// //             <div className="space-y-4">
// //               <h3 className="text-2xl font-bold text-slate-900">Visionary Leadership</h3>
// //               <p className="text-slate-600 leading-relaxed">
// //                 With <strong>over 10 years of experience in the field</strong>, they have showcased exceptional business
// //                 acumen and established themselves as leading developers specialising in commercial spaces. With years of
// //                 experience in the real estate industry, they have developed a deep understanding of market trends, local
// //                 neighbourhoods, and the ever-changing dynamics of the industry.
// //               </p>
// //             </div>

// //             <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6">
// //               <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
// //               <p className="text-slate-700 text-sm">
// //                 RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
// //                 a reality for many.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right Content - Leadership Highlights */}
// //           <div className="grid grid-cols-2 gap-6">
// //             <div className="space-y-3">
// //               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
// //                 <Award className="h-6 w-6 text-white" />
// //               </div>
// //               <h3 className="font-bold text-slate-900">10+ Years Experience</h3>
// //               <p className="text-sm text-slate-600">
// //                 Exceptional business acumen and established leadership in commercial spaces
// //               </p>
// //             </div>

// //             <div className="space-y-3">
// //               <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
// //                 <Target className="h-6 w-6 text-white" />
// //               </div>
// //               <h3 className="font-bold text-slate-900">Market Understanding</h3>
// //               <p className="text-sm text-slate-600">
// //                 Deep understanding of market trends, local preferences, and industry dynamics
// //               </p>
// //             </div>

// //             <div className="space-y-3">
// //               <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center">
// //                 <Lightbulb className="h-6 w-6 text-white" />
// //               </div>
// //               <h3 className="font-bold text-slate-900">Innovation Focus</h3>
// //               <p className="text-sm text-slate-600">
// //                 Innovative approach to real estate development and customer satisfaction
// //               </p>
// //             </div>

// //             <div className="space-y-3">
// //               <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
// //                 <Users className="h-6 w-6 text-white" />
// //               </div>
// //               <h3 className="font-bold text-slate-900">Customer Centric</h3>
// //               <p className="text-sm text-slate-600">
// //                 Dedicated to providing luxurious living spaces ensuring affordability
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* CTA Section */}
// //         <div className="text-center mt-16">
// //           <Button className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
// //             Read About RRL Leadership
// //           </Button>
// //         </div>

// //         {/* Floating Stats */}
// //         <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-lg hidden lg:block">
// //           <div className="text-center">
// //             <div className="text-2xl font-bold text-amber-600">29</div>
// //             <div className="text-xs text-slate-600 font-medium">Years Legacy</div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 3. VALUES COMPONENT ==========
// // function Values() {
// //   const values = [
// //     {
// //       icon: Shield,
// //       title: "Integrity",
// //       description:
// //         "Our culture is built on simple that you achieve your real estate objectives and rewarding experience.",
// //     },
// //     {
// //       icon: Target,
// //       title: "Local Market",
// //       description: "As a locally rooted firm, we possess an in-depth understanding of the communities we serve.",
// //     },
// //     {
// //       icon: Lightbulb,
// //       title: "Solutions",
// //       description: "Whether you're a first-time buyer, an experienced investor, or a homeowner looking to sell.",
// //     },
// //     {
// //       icon: Users,
// //       title: "Expertise",
// //       description: "Our team comprises seasoned professionals with extensive knowledge and estate professionals who.",
// //     },
// //     {
// //       icon: Heart,
// //       title: "Personalized",
// //       description:
// //         "We recognize that each client has unique needs and preferences. We tailor our services to match your.",
// //     },
// //     {
// //       icon: Award,
// //       title: "Satisfaction",
// //       description: "Your satisfaction is our top priority. We are committed to exceeding your expectations.",
// //     },
// //   ]

// //   return (
// //     <section className="py-20 gradient-bg">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">RRL Values</h2>
// //           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
// //             Our core values guide everything we do, ensuring exceptional service and lasting relationships.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {values.map((value, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
// //             >
// //               <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mb-6">
// //                 <value.icon className="h-8 w-8 text-white" />
// //               </div>
// //               <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
// //               <p className="text-slate-600 leading-relaxed">{value.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 4. TIMELINE COMPONENT ==========
// // function Timeline() {
// //   const milestones = [
// //     {
// //       year: "1996",
// //       title: "Company Founded",
// //       description: "RRL Builders and Developers established with a vision to provide affordable luxury homes.",
// //       icon: Building,
// //     },
// //     {
// //       year: "2020",
// //       title: "Major Expansion",
// //       description: "Expanded operations across Bangalore with multiple residential projects.",
// //       icon: Users,
// //     },
// //     {
// //       year: "2023",
// //       title: "Global Recognition",
// //       description: "Won the Global Real Estate Brand Awards 2023 in the Affordability category.",
// //       icon: Award,
// //     },
// //     {
// //       year: "2025",
// //       title: "Times Real Estate Icon",
// //       description: "Crowned as Builder of the Year in Mid-segment housing by Times Real Estate ICON Awards.",
// //       icon: Calendar,
// //     },
// //   ]

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Marking Our Imprints</h2>
// //           <p className="text-xl text-slate-600">A journey of excellence, innovation, and commitment to quality</p>
// //         </div>

// //         <div className="max-w-4xl mx-auto">
// //           <div className="relative">
// //             {/* Timeline line */}
// //             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#d9a406] hidden md:block"></div>

// //             <div className="space-y-12">
// //               {milestones.map((milestone, index) => (
// //                 <div key={index} className="relative flex items-start space-x-8">
// //                   {/* Timeline dot */}
// //                   <div className="hidden md:flex w-16 h-16 bg-[#d9a406] rounded-full items-center justify-center flex-shrink-0 relative z-10">
// //                     <milestone.icon className="h-8 w-8 text-white" />
// //                   </div>

// //                   {/* Content */}
// //                   <div className="flex-1 bg-slate-50 rounded-2xl p-8 ml-0">
// //                     <div className="flex items-center space-x-4 mb-4">
// //                       <div className="md:hidden w-12 h-12 bg-[#d9a406] rounded-full flex items-center justify-center">
// //                         <milestone.icon className="h-6 w-6 text-white" />
// //                       </div>
// //                       <div className="text-2xl font-bold text-[#d9a406]">{milestone.year}</div>
// //                     </div>
// //                     <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
// //                     <p className="text-slate-600">{milestone.description}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== FINAL PAGE EXPORT ==========
// // export default function AboutPage() {
// //   return (
// //     <>
// //       <AboutHero />
// //       <Leadership />
// //       <Values />
// //       <Timeline />
// //     </>
// //   )
// // }

// "use client" 

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Building,
//   Users,
//   Award,
//   Target,
//   Lightbulb,
//   Quote,
//   Shield,
//   Heart,
//   Calendar,
// } from "lucide-react"
// import { motion } from "framer-motion"

// // ========== 1. ABOUT HERO COMPONENT ==========
// function AboutHero() {
//   return (
//     <motion.section 
//       className="py-20 bg-black text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//       <div className="container mx-auto px-4 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="space-y-4">
//               <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
//                 <Building className="h-4 w-4" />
//                 <span>About RRL</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold font-playfair">
//                 Pioneers of Affordable Luxury in Bangalore
//               </h1>

//               <p className="text-lg text-gray-400 leading-relaxed">
//                 Since 1996, RRL Builders and Developers has been a trailblazer in real estate. As the winners of the Global Real Estate Brand, 2023, we are committed to helping you find your dream home with a focus on affordability.
//               </p>
//             </div>

//             {/* Company Highlights */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Award className="h-5 w-5 text-gold-400" />
//                   <span className="font-semibold">Since 1996</span>
//                 </div>
//                 <p className="text-sm text-gray-500">A global legacy of excellence.</p>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Target className="h-5 w-5 text-gold-400" />
//                   <span className="font-semibold">Awarded</span>
//                 </div>
//                 <p className="text-sm text-gray-500">Property Award of the Year - Affordable, 2023.</p>
//               </div>
//                           <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Users className="h-5 w-5 text-[#d9a406]" />
//                   <span className="font-semibold text-slate-900">Core Values</span>
//                 </div>
//                 <p className="text-sm text-slate-600">Transparency, Innovation, and Quality</p>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Building className="h-5 w-5 text-[#d9a406]" />
//                   <span className="font-semibold text-slate-900">Goal</span>
//                 </div>
//                 <p className="text-sm text-slate-600">Making Homeownership a Reality for Many</p>
//               </div>  
              
//             </div>
//           </motion.div>

//           {/* Right Content - Company Image */}
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Image
//               src="/about-hero.jpg"
//               alt="RRL Group"
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-2xl shadow-gold-900/50"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// // ========== 2. LEADERSHIP COMPONENT ==========
// function Leadership() {
//   return (
//     <motion.section 
//       className="py-24 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-800 border border-gold-400 bg-gold-100/50 mb-6">
//             <Users className="h-5 w-5" />
//             <span className="font-semibold">Leadership Excellence</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-black mb-6">
//             Visionary Entrepreneurs Transforming Real Estate
//           </h2>
//           <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
//             Mr. Ram Reddy and Mr. Lakshman Reddy, the dynamic duo from RRL Builders and Developers Pvt Ltd, are industry pioneers of affordable luxury residential and commercial spaces in Bangalore.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="text-center">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-pas5bMH3OcTcVZSxpZxq5DulrmyjEN.jpeg"
//               alt="Mr. Ram Reddy"
//               width={400}
//               height={400}
//               className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg mb-6"
//             />
//             <h3 className="font-bold text-xl text-black">Mr. Ram Reddy</h3>
//             <p className="text-gray-700">Director</p>
//             <p className="text-gray-600 italic mt-4">"Coming together is a beginning. Keeping together is progress."</p>
//           </div>
//           <div className="text-center">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-wka36xEiCGuAbsGkhcr4O6n2ZrLOzL.jpeg"
//               alt="Mr. Lakshman Reddy"
//               width={400}
//               height={400}
//               className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg mb-6"
//             />
//             <h3 className="font-bold text-xl text-black">Mr. Lakshman Reddy</h3>
//             <p className="text-gray-700">Chairman</p>
//             <p className="text-gray-600 italic mt-4">"At RRL, quality is not just a goal; it's a commitment."</p>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// // ========== 3. VALUES COMPONENT ==========
// function Values() {
//   const values = [
//     { icon: Shield, title: "Integrity" },
//     { icon: Target, title: "Local Market Focus" },
//     { icon: Lightbulb, title: "Innovative Solutions" },
//     { icon: Users, title: "Expertise" },
//     { icon: Heart, title: "Personalized Service" },
//     { icon: Award, title: "Customer Satisfaction" },
//   ]

//   return (
//     <motion.section 
//       className="py-20 bg-black"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Our Core Values</h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Our values are the foundation of our success, guiding us in every decision we make.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-900 rounded-2xl p-8 text-center border border-gold-800"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <value.icon className="h-8 w-8 text-black" />
//               </div>
//               <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// // ========== 4. TIMELINE COMPONENT ==========
// function Timeline() {
//   const milestones = [
//     { year: "1996", title: "Company Founded" },
//     { year: "2020", title: "Major Expansion" },
//     { year: "2023", title: "Global Recognition" },
//     { year: "2025", title: "Times Real Estate Icon" },
//   ]

//   return (
//     <section className="py-20 bg-light-gold">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-playfair">Our Journey of Excellence</h2>
//           <p className="text-xl text-gray-800">A legacy of innovation, quality, and commitment.</p>
//         </div>

//         <div className="relative">
//           <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gold-300"></div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
//             {milestones.map((milestone, index) => (
//               <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
//                 <div className="md:w-1/2">
//                   <motion.div 
//                     className={`p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-white`}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <div className="text-2xl font-bold text-gold-600 mb-2">{milestone.year}</div>
//                     <h3 className="text-xl font-bold text-black">{milestone.title}</h3>
//                   </motion.div>
//                 </div>
//                 <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-500 rounded-full border-4 border-light-gold"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// export default function AboutPage() {
//   return (
//     <>
//       <AboutHero />
//       <Leadership />
//       <Values />
//       <Timeline />
//     </>
//   )
// }

"use client" 

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Building,
  Users,
  Award,
  Target,
  Lightbulb,
  Quote,
  Shield,
  Heart,
  Calendar,
} from "lucide-react"
import { motion } from "framer-motion"

// ========== 1. ABOUT HERO COMPONENT ==========
function AboutHero() {
  return (
    <motion.section 
      className="py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                <Building className="h-4 w-4" />
                <span>About RRL</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-playfair">
                Pioneers of Affordable Luxury in Bangalore
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed">
                Since 1996, RRL Builders and Developers has been a trailblazer in real estate. As the winners of the Global Real Estate Brand, 2023, we are committed to helping you find your dream home with a focus on affordability.
              </p>
            </div>

            {/* Company Highlights - UPDATED WITH ALL 4 ITEMS */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-gold-400" />
                  <span className="font-semibold">Since 1996</span>
                </div>
                <p className="text-sm text-gray-300">We are serving Global Legacy from 1996</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-gold-400" />
                  <span className="font-semibold">Awarded</span>
                </div>
                <p className="text-sm text-gray-300">Property Award of the year - Affordable, 2023</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gold-400" />
                  <span className="font-semibold">Core Values</span>
                </div>
                <p className="text-sm text-gray-300">Transparency, Innovation, and Quality</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-gold-400" />
                  <span className="font-semibold">Goal</span>
                </div>
                <p className="text-sm text-gray-300">Making Homeownership a Reality for Many</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Company Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <div className="relative">
           <div className="bg-slate-900 rounded-2xl p-12 text-center">
             <div className="text-[#d9a406] text-6xl font-bold mb-4">RRL</div>
             <div className="text-white text-xl font-semibold mb-2">RRL GROUP OF COMPANIES</div>
             <div className="text-[#d9a406] text-sm">GROUP LEGACY SINCE 1996</div>
           </div>
         </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 2. LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <motion.section 
      className="py-24 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-800 border border-gold-400 bg-gold-100/50 mb-6">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Leadership Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-black mb-6">
            Visionary Entrepreneurs Transforming Real Estate
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
            Mr. Ram Reddy and Mr. Lakshman Reddy, the dynamic duo from RRL Builders and Developers Pvt Ltd, are industry pioneers of affordable luxury residential and commercial spaces in Bangalore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-pas5bMH3OcTcVZSxpZxq5DulrmyjEN.jpeg"
              alt="Mr. Ram Reddy"
              width={400}
              height={400}
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg mb-6"
            />
            <h3 className="font-bold text-xl text-black">Mr. Ram Reddy</h3>
            <p className="text-gray-700">Director</p>
            <p className="text-gray-600 italic mt-4">"Coming together is a beginning. Keeping together is progress."</p>
          </div>
          <div className="text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-wka36xEiCGuAbsGkhcr4O6n2ZrLOzL.jpeg"
              alt="Mr. Lakshman Reddy"
              width={400}
              height={400}
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg mb-6"
            />
            <h3 className="font-bold text-xl text-black">Mr. Lakshman Reddy</h3>
            <p className="text-gray-700">Chairman</p>
            <p className="text-gray-600 italic mt-4">"At RRL, quality is not just a goal; it's a commitment."</p>
          </div>
        </div>

        {/* Experience and Expertise Section - ADDED FROM OLD FILE */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Visionary Leadership</h3>
              <p className="text-gray-700 leading-relaxed">
                With <strong>over 10 years of experience in the field</strong>, they have showcased exceptional business
                acumen and established themselves as leading developers specialising in commercial spaces. With years of
                experience in the real estate industry, they have developed a deep understanding of market trends, local
                neighbourhoods, and the ever-changing dynamics of the industry.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="font-semibold text-black mb-2">Our Mission</h4>
              <p className="text-gray-700 text-sm">
                RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
                a reality for many.
              </p>
            </div>
          </div>

          {/* Right Content - Leadership Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-black">10+ Years Experience</h3>
              <p className="text-sm text-gray-600">
                Exceptional business acumen and established leadership in commercial spaces
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-black">Market Understanding</h3>
              <p className="text-sm text-gray-600">
                Deep understanding of market trends, local preferences, and industry dynamics
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-black">Innovation Focus</h3>
              <p className="text-sm text-gray-600">
                Innovative approach to real estate development and customer satisfaction
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-black">Customer Centric</h3>
              <p className="text-sm text-gray-600">
                Dedicated to providing luxurious living spaces ensuring affordability
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - ADDED FROM OLD FILE */}
        <div className="text-center mt-16">
          <Button className="bg-gold-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-gold-600 hover:shadow-xl transition-all duration-300">
            Read About RRL Leadership
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 3. VALUES COMPONENT ==========
function Values() {
  // UPDATED VALUES ARRAY WITH DESCRIPTIONS
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Our culture is built on simple that you achieve your real estate objectives and rewarding experience.",
    },
    {
      icon: Target,
      title: "Local Market Focus",
      description: "As a locally rooted firm, we possess an in-depth understanding of the communities we serve.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Whether you're a first-time buyer, an experienced investor, or a homeowner looking to sell.",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Our team comprises seasoned professionals with extensive knowledge and estate professionals who.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "We recognize that each client has unique needs and preferences. We tailor our services to match your.",
    },
    {
      icon: Award,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority. We are committed to exceeding your expectations.",
    },
  ]

  return (
    <motion.section 
      className="py-20 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Our Core Values</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our values are the foundation of our success, guiding us in every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 text-center border border-gold-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              {/* ADDED DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ========== 4. TIMELINE COMPONENT ==========
function Timeline() {
  // UPDATED MILESTONES ARRAY WITH DESCRIPTIONS
  const milestones = [
    {
      year: "1996",
      title: "Company Founded",
      description: "RRL Builders and Developers established with a vision to provide affordable luxury homes.",
    },
    {
      year: "2020",
      title: "Major Expansion",
      description: "Expanded operations across Bangalore with multiple residential projects.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Won the Global Real Estate Brand Awards 2023 in the Affordability category.",
    },
    {
      year: "2025",
      title: "Times Real Estate Icon",
      description: "Crowned as Builder of the Year in Mid-segment housing by Times Real Estate ICON Awards.",
    },
  ]

  return (
    <section className="py-20 bg-light-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-playfair">Our Journey of Excellence</h2>
          <p className="text-xl text-gray-800">A legacy of innovation, quality, and commitment.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gold-300 hidden md:block"></div>
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="md:w-1/2">
                  <motion.div 
                    className={`p-6 rounded-lg shadow-lg text-center md:text-left ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-white`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-2xl font-bold text-gold-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-black">{milestone.title}</h3>
                    {/* ADDED DESCRIPTION */}
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-500 rounded-full border-4 border-light-gold hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Leadership />
      <Values />
      <Timeline />
    </>
  )
}