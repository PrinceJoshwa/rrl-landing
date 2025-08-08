// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"

// const bankingPartners = [
//   { name: "SBI", src: "/logos/SBI-Logo.png" },
//   { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
//   { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
//   { name: "Union Bank", src: "/logos/union-bank.png" },
//   { name: "ICICI Bank", src: "/logos/icici-bank.png" },
//   { name: "Axis Bank", src: "/logos/axis-bank.svg" },
//   { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
//   { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
//   { name: "TATA Capital", src: "/logos/tata-capital.png" },
// ]

// const trustedBrands = [
//   { name: "Kerovit", src: "/logos/kerovit.png" },
//   { name: "Schneider", src: "/logos/schneider.png" },
//   { name: "One Touch", src: "/logos/one-touch.png" },
//   { name: "Designhive", src: "/logos/Designhive.png" },
//   { name: "Polycab", src: "/logos/polycab.png" },
//   { name: "SVT", src: "/logos/svt.png" },
//   { name: "Shivam Enterprise", src: "/logos/shivam.png" },
//   { name: "Nippon", src: "/logos/nippon.png" },
//   { name: "Fenstect", src: "/logos/fenstect.png" },
//   { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
//   { name: "Philips", src: "/logos/philips.png" },
//   { name: "Wipro", src: "/logos/wipro.jpg" },
// ]

// const marketingPartners = [
//   { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
//   { name: "Housing.com", src: "/logos/housing-com.png" },
//   { name: "Marketly", src: "/logos/marketly.png" },
//   { name: "99acres", src: "/logos/99acres.png" },
// ]

// // Duplicate logos for seamless looping
// const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners, ...bankingPartners];
// const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands, ...trustedBrands];
// const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners, ...marketingPartners];

// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// }

// export function PartnersSection() {
//   return (
//     <motion.section
//       className="py-20 gradient-secondary overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Valued Partners</h1>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Collaborating with industry leaders to bring you the best in real estate.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Banking Partners</h2>
//           <div className="relative w-full overflow-hidden py-4">
//             <motion.div
//               className="flex flex-nowrap"
//               animate={{
//                 x: ['-100%', '0%'], // Left to Right
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 40, // Adjust duration for speed
//                   ease: "linear",
//                 },
//               }}
//             >
//               {duplicatedBankingPartners.map((partner, index) => (
//                 <div key={`banking-${index}`} className="flex-shrink-0 w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/8)] p-4">
//                   <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-32 p-4">
//                     <Image
//                       src={partner.src || "/placeholder.svg"}
//                       alt={partner.name}
//                       width={120}
//                       height={60}
//                       className="object-contain max-h-full max-w-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Trusted Brands</h2>
//           <div className="relative w-full overflow-hidden py-4">
//             <motion.div
//               className="flex flex-nowrap"
//               animate={{
//                 x: ['0%', '-100%'], // Right to Left
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 40, // Adjust duration for speed
//                   ease: "linear",
//                 },
//               }}
//             >
//               {duplicatedTrustedBrands.map((brand, index) => (
//                 <div key={`trusted-${index}`} className="flex-shrink-0 w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/8)] p-4">
//                   <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-32 p-4">
//                     <Image
//                       src={brand.src || "/placeholder.svg"}
//                       alt={brand.name}
//                       width={120}
//                       height={60}
//                       className="object-contain max-h-full max-w-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Marketing Partners</h2>
//           <div className="relative w-full overflow-hidden py-4">
//             <motion.div
//               className="flex flex-nowrap"
//               animate={{
//                 x: ['-100%', '0%'], // Left to Right
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 40, // Adjust duration for speed
//                   ease: "linear",
//                 },
//               }}
//             >
//               {duplicatedMarketingPartners.map((partner, index) => (
//                 <div key={`marketing-${index}`} className="flex-shrink-0 w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/8)] p-4">
//                   <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-32 p-4">
//                     <Image
//                       src={partner.src || "/placeholder.svg"}
//                       alt={partner.name}
//                       width={120}
//                       height={60}
//                       className="object-contain max-h-full max-w-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

"use client"

import Image from "next/image"
import { easeOut, Variants, motion } from "framer-motion";

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
  { name: "Marketly", src: "/logos/marketly.png" },
  { name: "99acres", src: "/logos/99acres.png" },
]

// Duplicate logos for seamless looping
const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners, ...bankingPartners];
const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands, ...trustedBrands];
const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners, ...marketingPartners];

// ✨ FIX: Explicitly type the variants with the 'Variants' type from Framer Motion
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  },
};
export function PartnersSection() {
  return (
    <motion.section
      className="py-20 gradient-secondary overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Valued Partners</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to bring you the best in real estate.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Banking Partners</h2>
          <div className="relative w-full overflow-hidden py-4">
            <motion.div
              className="flex flex-nowrap"
              animate={{
                x: ['-100%', '0%'], // Left to Right
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Adjust duration for speed
                  ease: "linear",
                },
              }}
            >
              {duplicatedBankingPartners.map((partner, index) => (
                <div key={`banking-${index}`} className="flex-shrink-0 w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/8)] p-4">
                  <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-32 p-4">
                    <Image
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Trusted Brands</h2>
          <div className="relative w-full overflow-hidden py-4">
            <motion.div
              className="flex flex-nowrap"
              animate={{
                x: ['0%', '-100%'], // Right to Left
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Adjust duration for speed
                  ease: "linear",
                },
              }}
            >
              {duplicatedTrustedBrands.map((brand, index) => (
                <div key={`trusted-${index}`} className="flex-shrink-0 w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/8)] p-4">
                  <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-32 p-4">
                    <Image
                      src={brand.src || "/placeholder.svg"}
                      alt={brand.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Marketing Partners</h2>
          <div className="relative w-full overflow-hidden py-4">
            <motion.div
              className="flex flex-nowrap"
              animate={{
                x: ['-100%', '0%'], // Left to Right
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Adjust duration for speed
                  ease: "linear",
                },
              }}
            >
              {duplicatedMarketingPartners.map((partner, index) => (
                <div key={`marketing-${index}`} className="flex-shrink-0 w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/8)] p-4">
                  <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-32 p-4">
                    <Image
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
