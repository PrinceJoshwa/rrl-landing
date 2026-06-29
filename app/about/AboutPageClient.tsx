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
//       className="relative overflow-hidden py-20 bg-black text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* <div className="absolute inset-0 bg-grid-white/[0.05]"></div> */}
//       <div className="container mx-auto px-4 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: 0 }}
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

//               <p className="text-lg text-gray-200 leading-relaxed">
//                 Since 1996, RRL Builders and Developers has been a trailblazer in real estate. As the winners of the Global Real Estate Brand, 2023, we are committed to helping you find your dream home with a focus on affordability.
//               </p>
//             </div>

//             {/* Company Highlights - UPDATED WITH ALL 4 ITEMS */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Award className="h-5 w-5 text-gold-400" />
//                   <span className="font-semibold">Since 1996</span>
//                 </div>
//                 <p className="text-sm text-gray-300">We are serving Global Legacy from 1996</p>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Target className="h-5 w-5 text-gold-400" />
//                   <span className="font-semibold">Awarded</span>
//                 </div>
//                 <p className="text-sm text-gray-300">Property Award of the year - Affordable, 2023</p>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Users className="h-5 w-5 text-gold-400" />
//                   <span className="font-semibold">Core Values</span>
//                 </div>
//                 <p className="text-sm text-gray-300">Transparency, Innovation, and Quality</p>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Building className="h-5 w-5 text-gold-400" />
//                   <span className="font-semibold">Goal</span>
//                 </div>
//                 <p className="text-sm text-gray-300">Making Homeownership a Reality for Many</p>
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
//           <div className="relative">
//            <div className="bg-slate-900 rounded-2xl p-12 text-center">
//              <div className="text-[#d9a406] text-6xl font-bold mb-4">RRL</div>
//              <div className="text-white text-xl font-semibold mb-2">RRL GROUP OF COMPANIES</div>
//              <div className="text-[#d9a406] text-sm">GROUP LEGACY SINCE 1996</div>
//            </div>
//          </div>
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

//         <div className="grid lg:grid-cols-2 gap-12 mb-24">
//           <div className="text-center">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-pas5bMH3OcTcVZSxpZxq5DulrmyjEN.jpeg"
//               alt="Mr. Ram Reddy"
//               width={400}
//               height={400}
//               className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg mb-6"
//             />
//             <h3 className="font-bold text-xl text-black">Mr. Ram Reddy</h3>
//             <p className="text-gray-700">Managing Director</p>
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

//         {/* Experience and Expertise Section - ADDED FROM OLD FILE */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-black">Visionary Leadership</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 With <strong>over 10 years of experience in the field</strong>, they have showcased exceptional business
//                 acumen and established themselves as leading developers specialising in commercial spaces. With years of
//                 experience in the real estate industry, they have developed a deep understanding of market trends, local
//                 neighbourhoods, and the ever-changing dynamics of the industry.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-md">
//               <h4 className="font-semibold text-black mb-2">Our Mission</h4>
//               <p className="text-gray-700 text-sm">
//                 RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
//                 a reality for many.
//               </p>
//             </div>
//           </div>

//           {/* Right Content - Leadership Highlights */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="space-y-3">
//               <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
//                 <Award className="h-6 w-6 text-black" />
//               </div>
//               <h3 className="font-bold text-black">10+ Years Experience</h3>
//               <p className="text-sm text-gray-600">
//                 Exceptional business acumen and established leadership in commercial spaces
//               </p>
//             </div>

//             <div className="space-y-3">
//               <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
//                 <Target className="h-6 w-6 text-black" />
//               </div>
//               <h3 className="font-bold text-black">Market Understanding</h3>
//               <p className="text-sm text-gray-600">
//                 Deep understanding of market trends, local preferences, and industry dynamics
//               </p>
//             </div>

//             <div className="space-y-3">
//               <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
//                 <Lightbulb className="h-6 w-6 text-black" />
//               </div>
//               <h3 className="font-bold text-black">Innovation Focus</h3>
//               <p className="text-sm text-gray-600">
//                 Innovative approach to real estate development and customer satisfaction
//               </p>
//             </div>

//             <div className="space-y-3">
//               <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
//                 <Users className="h-6 w-6 text-black" />
//               </div>
//               <h3 className="font-bold text-black">Customer Centric</h3>
//               <p className="text-sm text-gray-600">
//                 Dedicated to providing luxurious living spaces ensuring affordability
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section - ADDED FROM OLD FILE */}
//         {/* <div className="text-center mt-16">
//           <Button className="bg-gold-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-gold-600 hover:shadow-xl transition-all duration-300">
//             Read About RRL Leadership
//           </Button>
//         </div> */}
//       </div>
//     </motion.section>
//   )
// }

// // ========== 3. VALUES COMPONENT ==========
// function Values() {
//   // UPDATED VALUES ARRAY WITH DESCRIPTIONS
//   const values = [
//     {
//       icon: Shield,
//       title: "Integrity",
//       description: "Our culture is built on simple that you achieve your real estate objectives and rewarding experience.",
//     },
//     {
//       icon: Target,
//       title: "Local Market Focus",
//       description: "As a locally rooted firm, we possess an in-depth understanding of the communities we serve.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovative Solutions",
//       description: "Whether you're a first-time buyer, an experienced investor, or a homeowner looking to sell.",
//     },
//     {
//       icon: Users,
//       title: "Expertise",
//       description: "Our team comprises seasoned professionals with extensive knowledge and estate professionals who.",
//     },
//     {
//       icon: Heart,
//       title: "Personalized Service",
//       description: "We recognize that each client has unique needs and preferences. We tailor our services to match your.",
//     },
//     {
//       icon: Award,
//       title: "Customer Satisfaction",
//       description: "Your satisfaction is our top priority. We are committed to exceeding your expectations.",
//     },
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
//               {/* ADDED DESCRIPTION */}
//               <p className="text-gray-400 leading-relaxed">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// // ========== 4. TIMELINE COMPONENT ==========
// function Timeline() {
//   // UPDATED MILESTONES ARRAY WITH DESCRIPTIONS
//   const milestones = [
//     {
//       year: "1996",
//       title: "Company Founded",
//       description: "RRL Builders and Developers established with a vision to provide affordable luxury homes.",
//     },
//     {
//       year: "2020",
//       title: "Major Expansion",
//       description: "Expanded operations across Bangalore with multiple residential projects.",
//     },
//     {
//       year: "2023",
//       title: "Global Recognition",
//       description: "Won the Global Real Estate Brand Awards 2023 in the Affordability category.",
//     },
//     {
//       year: "2025",
//       title: "Times Real Estate Icon",
//       description: "Crowned as Builder of the Year in Mid-segment housing by Times Real Estate ICON Awards.",
//     },
//   ]

//   return (
//     <section className="py-20 bg-light-gold">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-playfair">Our Journey of Excellence</h2>
//           <p className="text-xl text-gray-800">A legacy of innovation, quality, and commitment.</p>
//         </div>

//         <div className="relative">
//           <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gold-300 hidden md:block"></div>
//           <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-16">
//             {milestones.map((milestone, index) => (
//               <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
//                 <div className="md:w-1/2">
//                   <motion.div 
//                     className={`p-6 rounded-lg shadow-lg text-center md:text-left ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-white`}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     // initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <div className="text-2xl font-bold text-gold-600 mb-2">{milestone.year}</div>
//                     <h3 className="text-xl font-bold text-black">{milestone.title}</h3>
//                     {/* ADDED DESCRIPTION */}
//                     <p className="text-gray-600 mt-2">{milestone.description}</p>
//                   </motion.div>
//                 </div>
//                 <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-500 rounded-full border-4 border-light-gold hidden md:block"></div>
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
//     <div className="overflow-x-hidden">
//       <AboutHero />
//       <Leadership />
//       <Values />
//       <Timeline />
//     </div>
//   )
// }

"use client" 

import Image from "next/image"
import Link from "next/link"
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
  Star,
  ArrowRight,
  Handshake,
  Trophy,
  Newspaper
} from "lucide-react"
import { motion } from "framer-motion"

// ========== 1. ABOUT HERO COMPONENT ==========
function AboutHero() {
  return (
    <motion.section 
      className="relative overflow-hidden py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 0 }}
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

            {/* Company Highlights */}
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
           <div className="bg-slate-900 rounded-2xl p-12 text-center shadow-[0_0_50px_rgba(217,164,6,0.1)] border border-[#d9a406]/20">
             <div className="text-[#d9a406] text-6xl font-bold mb-4">RRL</div>
             <div className="text-white text-xl font-semibold mb-2">RRL GROUP OF COMPANIES</div>
             <div className="text-[#d9a406] text-sm tracking-widest">GROUP LEGACY SINCE 1996</div>
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
            <p className="text-gray-700">Managing Director</p>
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="font-semibold text-black mb-2">Our Mission</h4>
              <p className="text-gray-700 text-sm">
                RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
                a reality for many.
              </p>
            </div>
          </div>

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
      </div>
    </motion.section>
  )
}

// ========== 3. VALUES COMPONENT ==========
function Values() {
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
              className="bg-[#0a0a0a] rounded-2xl p-8 text-center border border-white/5 hover:border-[#d9a406]/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#d9a406]/10 border border-[#d9a406]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-[#d9a406]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ========== 4. ABOUT PAGE AWARDS GALLERY (BESPOKE BENTO DESIGN) ==========
const AboutAwardsGallery = () => {
  const accolades = [
    { title: "Emerging Developer of the Year - Residential 2026", desc: "Times Business Awards by The Times of India" },
    { title: "Builder of the Year 2025", desc: "Mid-segment housing category by Times Real Estate" },
    { title: "Global Real Estate Brand Awards 2023", desc: "Winner in Affordability category" },
    { title: "Excellence in Amenities Premium", desc: "Mid-Segment Homes 2024" },
  ]

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d9a406]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 px-6 py-2 text-[#d9a406] mb-6"
          >
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Our Legacy of Recognition</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight font-playfair mb-6"
          >
            A Standard of <span className="text-[#d9a406]">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400"
          >
            RRL Groups has been honored globally and domestically. From being crowned <span className="text-white font-medium">Builder of the Year</span> to being recognized as the <span className="text-white font-medium">Emerging Developer of the Year</span>, our dedication to uncompromising quality stands undisputed.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Main Hero Image - Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-[0_0_30px_rgba(217,164,6,0.05)] border border-white/10"
          >
            <Image
              src="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/awardhome(1).jpg.jpeg"
              alt="Times Real Estate Icon Awards, 2025"
              fill
              unoptimized
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">Times Real Estate Icon Awards, 2025</h3>
              <p className="text-gray-300">Winner in the Mid-Segment Housing category.</p>
            </div>
          </motion.div>

          {/* Accolades List Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 md:row-span-2 flex flex-col justify-center"
          >
            <h4 className="text-xl font-bold text-white mb-8 pb-4 border-b border-white/10">Recent Accolades</h4>
            <div className="space-y-6">
              {accolades.map((award, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#d9a406]/20 group-hover:border-[#d9a406]/50 transition-colors mt-1">
                    <Star className="w-4 h-4 text-[#d9a406]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base leading-tight mb-1">{award.title}</h5>
                    <p className="text-sm text-gray-500">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Award Image 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden group shadow-lg border border-white/10 h-[280px]"
          >
            <Image
              src="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.50%20PM.jpeg"
              alt="Emerging Developer Ceremony"
              fill
              unoptimized
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          {/* Secondary Award Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden group shadow-lg border border-white/10 h-[280px]"
          >
            <Image
              src="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.51%20PM.jpeg"
              alt="Trophy Celebration"
              fill
              unoptimized
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

          {/* Action Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 border border-[#d9a406]/30 flex flex-col justify-center items-center text-center h-[280px]"
          >
            <h4 className="text-xl font-bold text-white mb-2">Be Part of the Legacy</h4>
            <p className="text-sm text-gray-400 mb-6">Explore all our achievements or collaborate with a winning team.</p>
            <div className="flex flex-col w-full gap-3">
              <Link href="/awards" className="w-full">
                <Button className="w-full rounded-xl py-6 bg-transparent border border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black transition-all">
                  View All Awards
                </Button>
              </Link>
              <Link href="/channel-partners" className="w-full">
                <Button className="w-full rounded-xl py-6 bg-[#d9a406] text-black hover:bg-white transition-all font-bold">
                  <Handshake className="mr-2 h-4 w-4" /> Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ========== 5. ABOUT PAGE PRESS BANNER (EDITORIAL STYLE) ==========
const AboutPressRecognition = () => {
  return (
    <section className="py-20 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-[#d9a406]/20 flex flex-col-reverse lg:flex-row group"
        >
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

          {/* Left Text Block */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-20">
            <div className="inline-flex items-center gap-2 text-[#d9a406] mb-6">
              <Newspaper className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-[0.25em]">Press Recognition</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-6">
              Making Headlines in <br />
              <span className="text-[#d9a406] italic">The Times of India</span>
            </h3>
            
            <div className="pl-6 border-l-2 border-[#d9a406]/50 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed italic">
                "RRL Builders & Developers Sets New Benchmarks in Intelligent Living with Emerging Developer Recognition."
              </p>
            </div>

            <a 
              href="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-23%20at%209.28.08%20AM.jpeg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-semibold hover:text-[#d9a406] transition-colors w-max"
            >
              Read the Full Feature <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Right Image Block */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
            <Image 
              src="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-23%20at%209.28.08%20AM.jpeg"
              alt="Times of India Press Coverage"
              fill
              className="object-cover object-top opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              unoptimized
            />
            {/* Elegant fade on the left edge of the image to blend into the dark bg */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ========== 6. TIMELINE COMPONENT ==========
function Timeline() {
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
    <div className="overflow-x-hidden">
      <AboutHero />
      <Leadership />
      <AboutAwardsGallery />
      <AboutPressRecognition />
      <Values />
      <Timeline />
    </div>
  )
}