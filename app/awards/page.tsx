// // // import { AwardsHero } from "@/components/awards/awards-hero"
// // // import { AwardsList } from "@/components/awards/awards-list"
// // // import { MediaCoverage } from "@/components/awards/media-coverage"
// // // import { Recognition } from "@/components/awards/recognition"

// // // export default function AwardsPage() {
// // //   return (
// // //     <>
// // //       <AwardsHero />
// // //       <AwardsList />
// // //       <MediaCoverage />
// // //       <Recognition />
// // //     </>
// // //   )
// // // }

// // import Image from "next/image"
// // import { Button } from "@/components/ui/button"
// // import { Trophy, Award, Star, Medal, Newspaper, Globe, Quote, Users, Building } from "lucide-react"

// // // ========== 1. AWARDS HERO COMPONENT ==========
// // function AwardsHero() {
// //   return (
// //     <section className="py-20 gradient-secondary">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-8">
// //             <div className="space-y-4">
// //               <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800">
// //                 <Trophy className="h-4 w-4" />
// //                 <span>RRL Awards</span>
// //               </div>

// //               <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900">
// //                 Times Real Estate Icon Awards, 2025
// //               </h1>

// //               <p className="text-lg text-slate-600 leading-relaxed">
// //                 RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
// //                 ICON Awards, 2025.
// //               </p>
// //             </div>

// //             {/* Award Highlights */}
// //             <div className="space-y-4">
// //               <div className="flex items-start space-x-3">
// //                 <div className="w-6 h-6 bg-[#D9A406] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
// //                   <Star className="h-3 w-3 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900">Builder of the Year 2025</h3>
// //                   <p className="text-slate-600 text-sm">Mid-segment housing category by Times Real Estate</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-3">
// //                 <div className="w-6 h-6 bg-[#d9a406] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
// //                   <Star className="h-3 w-3 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900">Global Real Estate Brand Awards 2023</h3>
// //                   <p className="text-slate-600 text-sm">Winner in Affordability category</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-3">
// //                 <div className="w-6 h-6 bg-[#d9a406] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
// //                   <Star className="h-3 w-3 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900">Excellence in Amenities Premium</h3>
// //                   <p className="text-slate-600 text-sm">Mid-Segment Homes 2024</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Content - Awards Image */}
// //           <div className="relative">
// //             <div className="bg-white rounded-2xl shadow-2xl p-6">
// //               <Image
// //                 src="/awardhome.jpeg"
// //                 alt="RRL Awards Ceremony 2025"
// //                 width={600}
// //                 height={400}
// //                 className="rounded-lg w-full h-auto"
// //               />
// //             </div>

// //             {/* Floating Award Badge */}
// //             <div className="absolute -top-6 -right-6 bg-[#d9a406] text-white p-4 rounded-full shadow-lg">
// //               <Award className="h-8 w-8" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 2. AWARDS LIST COMPONENT ==========
// // function AwardsList() {
// //   const awards = [
// //     {
// //       year: "2025",
// //       title: "Times Real Estate Icon Awards",
// //       category: "Builder of the Year - Mid Segment Housing",
// //       description: "Recognized for excellence in affordable luxury housing development",
// //       icon: Trophy,
// //     },
// //     {
// //       year: "2024",
// //       title: "Excellence in Amenities Premium",
// //       category: "Mid-Segment Homes",
// //       description: "Awarded for outstanding amenities in residential projects",
// //       icon: Medal,
// //     },
// //     {
// //       year: "2023",
// //       title: "Global Real Estate Brand Awards",
// //       category: "Affordability Category Winner",
// //       description: "Global recognition for making luxury housing affordable",
// //       icon: Award,
// //     },
// //     {
// //       year: "2023",
// //       title: "Property Award of the Year",
// //       category: "Affordable and High-end Property",
// //       description: "Dual recognition for both affordable and premium segments",
// //       icon: Star,
// //     },
// //   ]

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
// //             RRL Legacy of Achievements
// //           </h2>
// //           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
// //             Committed to Results: Highlights of Our Real Estate Success
// //           </p>
// //         </div>

// //         <div className="max-w-4xl mx-auto space-y-8">
// //           {awards.map((award, index) => (
// //             <div
// //               key={index}
// //               className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
// //             >
// //               <div className="flex items-start space-x-6">
// //                 <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center flex-shrink-0">
// //                   <award.icon className="h-8 w-8 text-white" />
// //                 </div>

// //                 <div className="flex-1">
// //                   <div className="flex items-center space-x-4 mb-2">
// //                     <span className="text-2xl font-bold text-amber-600">{award.year}</span>
// //                     <div className="h-6 w-px bg-slate-300"></div>
// //                     <span className="text-sm text-slate-500 uppercase tracking-wide">{award.category}</span>
// //                   </div>

// //                   <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>

// //                   <p className="text-slate-600">{award.description}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 3. MEDIA COVERAGE COMPONENT ==========
// // function MediaCoverage() {
// //   const mediaOutlets = [
// //     {
// //       name: "ZEE5 Business",
// //       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token4-rJgVrC4ZKpXxrJCNc4fUufEvGeSlRl.jpeg",
// //       description: "Featured coverage of RRL's award-winning achievements in real estate",
// //     },
// //     {
// //       name: "Multiple International Outlets",
// //       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token2-agM5EwaEeqJv2glMoBTPDLVxczDH3B.jpeg",
// //       description: "Coverage across US World Today, Daily Hunt, Indo-Asian News Service, and more",
// //     },
// //     {
// //       name: "The Print",
// //       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-lNU4TqNDvpQhVpKy6LYfNmWQ6KP4UZ.jpeg",
// //       description: "In-depth coverage of the 5th Global Real Estate Brand Awards 2023",
// //     },
// //     {
// //       name: "British Columbia Times",
// //       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token1-LtctPGKlJ54DeYjMfknXCMBTaxglJv.jpeg",
// //       description: "International recognition of RRL's remarkable achievements",
// //     },
// //     {
// //       name: "London Channel News",
// //       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token3-8TEGbwM0sMobG9OpTWtl0ODNH4VBij.jpeg",
// //       description: "Global media coverage highlighting RRL's industry leadership",
// //     },
// //     {
// //       name: "World News Network",
// //       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token6-0aTqnZLkY2wKtVR86VOJYszKP4InKp.jpeg",
// //       description: "Comprehensive coverage of distinguished honorees in real estate",
// //     },
// //   ]

// //   return (
// //     <section className="py-24 gradient-secondary">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
// //             <Newspaper className="h-5 w-5" />
// //             <span className="font-semibold">Media Recognition</span>
// //           </div>

// //           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
// //             Token of Success -<span className="text-gradient block">Media Coverage</span>
// //           </h2>

// //           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
// //             Success Stories: Noteworthy Achievements in Real Estate. Our accomplishments have been featured across
// //             leading publications and media outlets worldwide, showcasing our commitment to excellence in real estate
// //             development and customer satisfaction.
// //           </p>
// //         </div>

// //         {/* Featured Media Coverage */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
// //           {mediaOutlets.slice(0, 2).map((outlet, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
// //             >
// //               <div className="relative overflow-hidden">
// //                 <Image
// //                   src={outlet.image || "/placeholder.svg"}
// //                   alt={`${outlet.name} - RRL Media Coverage`}
// //                   width={600}
// //                   height={400}
// //                   className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //               </div>

// //               <div className="p-8">
// //                 <div className="flex items-center space-x-3 mb-4">
// //                   <div className="w-10 h-10 bg-[#d9a406] rounded-full flex items-center justify-center">
// //                     <Globe className="h-5 w-5 text-white" />
// //                   </div>
// //                   <h3 className="text-xl font-bold text-slate-900">{outlet.name}</h3>
// //                 </div>
// //                 <p className="text-slate-600 leading-relaxed">{outlet.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Additional Media Coverage Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {mediaOutlets.slice(2).map((outlet, index) => (
// //             <div
// //               key={index + 2}
// //               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
// //             >
// //               <div className="relative overflow-hidden">
// //                 <Image
// //                   src={outlet.image || "/placeholder.svg"}
// //                   alt={`${outlet.name} - RRL Media Coverage`}
// //                   width={400}
// //                   height={300}
// //                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// //                 />
// //               </div>

// //               <div className="p-6">
// //                 <h4 className="font-bold text-slate-900 mb-2 line-clamp-1">{outlet.name}</h4>
// //                 <p className="text-sm text-slate-600 line-clamp-2">{outlet.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Media Stats */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
// //           <div className="text-center glass-effect rounded-2xl p-8">
// //             <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
// //               <Globe className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
// //             <div className="text-slate-600">Media Outlets</div>
// //           </div>

// //           <div className="text-center glass-effect rounded-2xl p-8">
// //             <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
// //               <Newspaper className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
// //             <div className="text-slate-600">Press Features</div>
// //           </div>

// //           <div className="text-center glass-effect rounded-2xl p-8">
// //             <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
// //               <Award className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-slate-900 mb-2">Global</div>
// //             <div className="text-slate-600">Recognition</div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 4. RECOGNITION COMPONENT ==========
// // function Recognition() {
// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-8">
// //             <div className="space-y-4">
// //               <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900">
// //                 The Global Real Estate Brand Awards, 2023
// //               </h2>

// //               <p className="text-lg text-slate-600 leading-relaxed">
// //                 RRL Nature Woods, our latest premium property has been awarded the Global Real Estate Brand Awards, 2023
// //                 in the category 'Property Award of the Year - Affordable'.
// //               </p>
// //             </div>

// //             {/* Recognition Stats */}
// //             <div className="grid grid-cols-2 gap-6">
// //               <div className="text-center p-4 bg-slate-50 rounded-lg">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-lg flex items-center justify-center mx-auto mb-2">
// //                   <Users className="h-6 w-6 text-white" />
// //                 </div>
// //                 <div className="text-2xl font-bold text-slate-900">600+</div>
// //                 <div className="text-sm text-slate-600">Happy Families</div>
// //               </div>

// //               <div className="text-center p-4 bg-slate-50 rounded-lg">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-lg flex items-center justify-center mx-auto mb-2">
// //                   <Building className="h-6 w-6 text-white" />
// //                 </div>
// //                 <div className="text-2xl font-bold text-slate-900">7+</div>
// //                 <div className="text-sm text-slate-600">Award-Winning Projects</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Content - Quote */}
// //           <div className="relative">
// //             <div className="bg-slate-900 text-white rounded-2xl p-8 relative">
// //               <Quote className="h-12 w-12 text-amber-400 mb-6" />

// //               <blockquote className="text-lg leading-relaxed mb-6">
// //                 "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
// //                 you make well-informed decisions. Honesty and transparency form the core of our values. You can trust us
// //                 to provide straightforward advice and maintain open communication throughout the process. Let us build
// //                 an affordable society together."
// //               </blockquote>

// //               <div className="flex items-center space-x-4">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-full flex items-center justify-center">
// //                   <span className="text-white font-bold">RRL</span>
// //                 </div>
// //                 <div>
// //                   <div className="font-semibold">RRL Developers and Builders</div>
// //                   <div className="text-slate-400 text-sm">Leadership Team</div>
// //                 </div>
// //               </div>

// //               {/* Decorative elements */}
// //               <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d9a406] rounded-full opacity-20"></div>
// //               <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#d9a406] rounded-full opacity-10"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== FINAL PAGE EXPORT ==========
// // export default function AwardsPage() {
// //   return (
// //     <>
// //       <AwardsHero />
// //       <AwardsList />
// //       <MediaCoverage />
// //       <Recognition />
// //     </>
// //   )
// // }


// "use client" 

// import Image from "next/image"
// import { Trophy, Award, Star, Medal, Newspaper, Globe } from "lucide-react"
// import { motion } from "framer-motion"

// function AwardsHero() {
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
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
//               <Trophy className="h-4 w-4" />
//               <span>RRL Awards</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-playfair font-bold">
//               Times Real Estate Icon Awards, 2025
//             </h1>
//             <p className="text-lg text-gray-400 leading-relaxed">
//               RRL Groups has been honored with the prestigious award for Builder of the Year in the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
//             </p>
//           </motion.div>
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
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

// function AwardsList() {
//   const awards = [
//     { year: "2025", title: "Times Real Estate Icon Awards", category: "Builder of the Year - Mid Segment Housing", icon: Trophy },
//     { year: "2024", title: "Excellence in Amenities Premium", category: "Mid-Segment Homes", icon: Medal },
//     { year: "2023", title: "Global Real Estate Brand Awards", category: "Affordability Category Winner", icon: Award },
//     { year: "2023", title: "Property Award of the Year", category: "Affordable and High-end Property", icon: Star },
//   ]

//   return (
//     <section className="py-20 bg-light-gold">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
//             RRL's Legacy of Achievements
//           </h2>
//         </div>
//         <div className="max-w-4xl mx-auto space-y-8">
//           {awards.map((award, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="flex items-start space-x-6">
//                 <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
//                   <award.icon className="h-8 w-8 text-black" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center space-x-4 mb-2">
//                     <span className="text-2xl font-bold text-gold-600">{award.year}</span>
//                     <div className="h-6 w-px bg-gray-300"></div>
//                     <span className="text-sm text-gray-500 uppercase tracking-wide">{award.category}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-black mb-2">{award.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function MediaCoverage() {
//   const mediaOutlets = [
//     { name: "ZEE5 Business", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token4-rJgVrC4ZKpXxrJCNc4fUufEvGeSlRl.jpeg" },
//     { name: "The Print", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-lNU4TqNDvpQhVpKy6LYfNmWQ6KP4UZ.jpeg" },
//   ]

//   return (
//     <section className="py-24 bg-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 mb-6">
//             <Newspaper className="h-5 w-5" />
//             <span className="font-semibold">Media Recognition</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
//             Media Coverage
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {mediaOutlets.map((outlet, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="relative h-64">
//                 <Image src={outlet.image || "/placeholder.svg"} alt={outlet.name} layout="fill" objectFit="cover" />
//               </div>
//               <div className="p-8">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
//                     <Globe className="h-5 w-5 text-black" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{outlet.name}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function AwardsPage() {
//   return (
//     <>
//       <AwardsHero />
//       <AwardsList />
//       <MediaCoverage />
//     </>
//   )
// }

"use client" 

import Image from "next/image"
import { Trophy, Award, Star, Medal, Newspaper, Globe, Quote, Users, Building } from "lucide-react"
import { motion } from "framer-motion"

function AwardsHero() {
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
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              <Trophy className="h-4 w-4" />
              <span>RRL Awards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold">
              Times Real Estate Icon Awards, 2025
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              RRL Groups has been honored with the prestigious award for Builder of the Year in the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
            </p>

            {/* Award Highlights - ADDED FROM OLD FILE */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Builder of the Year 2025</h3>
                  <p className="text-gray-500 text-sm">Mid-segment housing category by Times Real Estate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Global Real Estate Brand Awards 2023</h3>
                  <p className="text-gray-500 text-sm">Winner in Affordability category</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Excellence in Amenities Premium</h3>
                  <p className="text-gray-500 text-sm">Mid-Segment Homes 2024</p>
                </div>
              </div>
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
  )
}

function AwardsList() {
  // AWARD DESCRIPTIONS ADDED
  const awards = [
    { 
      year: "2025", 
      title: "Times Real Estate Icon Awards", 
      category: "Builder of the Year - Mid Segment Housing", 
      description: "Recognized for excellence in affordable luxury housing development",
      icon: Trophy 
    },
    { 
      year: "2024", 
      title: "Excellence in Amenities Premium", 
      category: "Mid-Segment Homes", 
      description: "Awarded for outstanding amenities in residential projects",
      icon: Medal 
    },
    { 
      year: "2023", 
      title: "Global Real Estate Brand Awards", 
      category: "Affordability Category Winner", 
      description: "Global recognition for making luxury housing affordable",
      icon: Award 
    },
    { 
      year: "2023", 
      title: "Property Award of the Year", 
      category: "Affordable and High-end Property", 
      description: "Dual recognition for both affordable and premium segments",
      icon: Star 
    },
  ]

  return (
    <section className="py-20 bg-light-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
            RRL's Legacy of Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Committed to Results: Highlights of Our Real Estate Success
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <award.icon className="h-8 w-8 text-black" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold text-gold-600">{award.year}</span>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">{award.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{award.title}</h3>
                  {/* DESCRIPTION RENDERED */}
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MediaCoverage() {
  // FULL LIST OF MEDIA OUTLETS AND DESCRIPTIONS RESTORED
  const mediaOutlets = [
    {
      name: "ZEE5 Business",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token4-rJgVrC4ZKpXxrJCNc4fUufEvGeSlRl.jpeg",
      description: "Featured coverage of RRL's award-winning achievements in real estate",
    },
    {
      name: "Multiple International Outlets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token2-agM5EwaEeqJv2glMoBTPDLVxczDH3B.jpeg",
      description: "Coverage across US World Today, Daily Hunt, Indo-Asian News Service, and more",
    },
    {
      name: "The Print",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-lNU4TqNDvpQhVpKy6LYfNmWQ6KP4UZ.jpeg",
      description: "In-depth coverage of the 5th Global Real Estate Brand Awards 2023",
    },
    {
      name: "British Columbia Times",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token1-LtctPGKlJ54DeYjMfknXCMBTaxglJv.jpeg",
      description: "International recognition of RRL's remarkable achievements",
    },
    {
      name: "London Channel News",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token3-8TEGbwM0sMobG9OpTWtl0ODNH4VBij.jpeg",
      description: "Global media coverage highlighting RRL's industry leadership",
    },
    {
      name: "World News Network",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token6-0aTqnZLkY2wKtVR86VOJYszKP4InKp.jpeg",
      description: "Comprehensive coverage of distinguished honorees in real estate",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 mb-6">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold">Media Recognition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Media Coverage
          </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our accomplishments have been featured across leading publications and media outlets worldwide, showcasing our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mediaOutlets.slice(0, 6).map((outlet, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-64">
                <Image src={outlet.image || "/placeholder.svg"} alt={outlet.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{outlet.name}</h3>
                </div>
                 {/* DESCRIPTION RENDERED */}
                <p className="text-gray-400 leading-relaxed">{outlet.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== 4. RECOGNITION COMPONENT - ADDED FROM OLD FILE ==========
function Recognition() {
    return (
      <section className="py-20 bg-light-gold">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black">
                  The Global Real Estate Brand Awards, 2023
                </h2>
  
                <p className="text-lg text-gray-700 leading-relaxed">
                  RRL Nature Woods, our latest premium property has been awarded the Global Real Estate Brand Awards, 2023
                  in the category 'Property Award of the Year - Affordable'.
                </p>
              </div>
  
              {/* Recognition Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-black">600+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
  
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-black">7+</div>
                  <div className="text-sm text-gray-600">Award-Winning Projects</div>
                </div>
              </div>
            </div>
  
            {/* Right Content - Quote */}
            <div className="relative">
              <div className="bg-black text-white rounded-2xl p-8 relative shadow-2xl">
                <Quote className="h-12 w-12 text-gold-400 mb-6" />
  
                <blockquote className="text-lg leading-relaxed mb-6">
                  "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
                  you make well-informed decisions. Honesty and transparency form the core of our values."
                </blockquote>
  
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">RRL</span>
                  </div>
                  <div>
                    <div className="font-semibold">RRL Developers and Builders</div>
                    <div className="text-gray-400 text-sm">Leadership Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default function AwardsPage() {
  return (
    <>
      <AwardsHero />
      <AwardsList />
      <MediaCoverage />
      <Recognition /> {/* ADDED TO PAGE */}
    </>
  )
}