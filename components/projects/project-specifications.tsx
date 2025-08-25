// // // // interface ProjectSpecificationsProps {
// // // //   specifications: {
// // // //     civil: string[]
// // // //     architecture: string[]
// // // //     services: string[]
// // // //   }
// // // // }

// // // // export function ProjectSpecifications({ specifications }: ProjectSpecificationsProps) {
// // // //   return (
// // // //     <section className="py-20 bg-white">
// // // //       <div className="container mx-auto px-4">
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Specifications</h2>
// // // //           <p className="text-xl text-slate-600">
// // // //             How we build the most affordable yet valuable homes in the heart of Bengaluru
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid md:grid-cols-3 gap-8">
// // // //           {/* Civil */}
// // // //           <div className="bg-slate-50 rounded-2xl p-8">
// // // //             <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">CIVIL</h3>
// // // //             <ul className="space-y-4">
// // // //               {specifications.civil.map((item, index) => (
// // // //                 <li key={index} className="text-sm text-slate-700">
// // // //                   <strong className="text-slate-900">{item.split(":")[0]}:</strong>
// // // //                   {item.split(":").slice(1).join(":")}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Architecture */}
// // // //           <div className="bg-slate-50 rounded-2xl p-8">
// // // //             <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
// // // //               ARCHITECTURE
// // // //             </h3>
// // // //             <ul className="space-y-4">
// // // //               {specifications.architecture.map((item, index) => (
// // // //                 <li key={index} className="text-sm text-slate-700">
// // // //                   <strong className="text-slate-900">{item.split(":")[0]}:</strong>
// // // //                   {item.split(":").slice(1).join(":")}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Services */}
// // // //           <div className="bg-slate-50 rounded-2xl p-8">
// // // //             <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
// // // //               SERVICES
// // // //             </h3>
// // // //             <ul className="space-y-4">
// // // //               {specifications.services.map((item, index) => (
// // // //                 <li key={index} className="text-sm text-slate-700">
// // // //                   <strong className="text-slate-900">{item.split(":")[0]}:</strong>
// // // //                   {item.split(":").slice(1).join(":")}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // "use client"

// // // import { motion, Variants, easeOut, easeIn } from "framer-motion";

// // // interface ProjectSpecificationsProps {
// // // specifications: {
// // //   civil: string[]
// // //   architecture: string[]
// // //   services: string[]
// // // }
// // // }

// // // const sectionVariants: Variants = {
// // //   hidden: { opacity: 0, y: 50 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       duration: 0.8,
// // //       ease: easeOut // ✅ instead of "easeOut"
// // //     }
// // //   }
// // // };

// // // const columnVariants: Variants = {
// // //   hidden: { opacity: 0, y: 50 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       duration: 0.8,
// // //       ease: easeOut // ✅ instead of "easeOut"
// // //     }
// // //   }
// // // };


// // // export function ProjectSpecifications({ specifications }: ProjectSpecificationsProps) {
// // // return (
// // //   <motion.section
// // //     className="py-20 gradient-secondary"
// // //     initial="hidden"
// // //     whileInView="visible"
// // //     viewport={{ once: true, amount: 0.2 }}
// // //     variants={sectionVariants}
// // //   >
// // //     <div className="container mx-auto px-4">
// // //       <div className="text-center mb-16">
// // //         <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Specifications</h2>
// // //         <p className="text-xl text-slate-600">
// // //           How we build the most affordable yet valuable homes in the heart of Bengaluru
// // //         </p>
// // //       </div>

// // //       <motion.div
// // //         className="grid md:grid-cols-3 gap-8"
// // //         variants={{
// // //           visible: {
// // //             transition: {
// // //               staggerChildren: 0.15,
// // //             },
// // //           },
// // //         }}
// // //       >
// // //         {/* Civil */}
// // //         <motion.div
// // //           className="bg-slate-50 rounded-2xl p-8"
// // //           variants={columnVariants}
// // //           whileHover={{ scale: 1.02, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
// // //           transition={{ type: "spring", stiffness: 300 }}
// // //         >
// // //           <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">CIVIL</h3>
// // //           <ul className="space-y-4">
// // //             {specifications.civil.map((item, index) => (
// // //               <li key={index} className="text-sm text-slate-700">
// // //                 <strong className="text-slate-900">{item.split(":")[0]}:</strong>
// // //                 {item.split(":").slice(1).join(":")}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </motion.div>

// // //         {/* Architecture */}
// // //         <motion.div
// // //           className="bg-slate-50 rounded-2xl p-8"
// // //           variants={columnVariants}
// // //           whileHover={{ scale: 1.02, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
// // //           transition={{ type: "spring", stiffness: 300 }}
// // //         >
// // //           <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
// // //             ARCHITECTURE
// // //           </h3>
// // //           <ul className="space-y-4">
// // //             {specifications.architecture.map((item, index) => (
// // //               <li key={index} className="text-sm text-slate-700">
// // //                 <strong className="text-slate-900">{item.split(":")[0]}:</strong>
// // //                 {item.split(":").slice(1).join(":")}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </motion.div>

// // //         {/* Services */}
// // //         <motion.div
// // //           className="bg-slate-50 rounded-2xl p-8"
// // //           variants={columnVariants}
// // //           whileHover={{ scale: 1.02, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
// // //           transition={{ type: "spring", stiffness: 300 }}
// // //         >
// // //           <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
// // //             SERVICES
// // //           </h3>
// // //           <ul className="space-y-4">
// // //             {specifications.services.map((item, index) => (
// // //               <li key={index} className="text-sm text-slate-700">
// // //                 <strong className="text-slate-900">{item.split(":")[0]}:</strong>
// // //                 {item.split(":").slice(1).join(":")}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </motion.div>
// // //       </motion.div>
// // //     </div>
// // //   </motion.section>
// // // )
// // // }

// // "use client"

// // import { motion, Variants, easeOut } from "framer-motion";
// // import { Wrench, Building, Plug } from "lucide-react";

// // interface ProjectSpecificationsProps {
// //   specifications: {
// //     civil: string[]
// //     architecture: string[]
// //     services: string[]
// //   }
// // }

// // const sectionVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.2 } }
// // };

// // const columnVariants: Variants = {
// //   hidden: { opacity: 0, y: 50 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
// // };

// // const specItems = [
// //     { title: "CIVIL", icon: Wrench, data: "civil" },
// //     { title: "ARCHITECTURE", icon: Building, data: "architecture" },
// //     { title: "SERVICES", icon: Plug, data: "services" },
// // ] as const;


// // export function ProjectSpecifications({ specifications }: ProjectSpecificationsProps) {
// //   return (
// //     <motion.section
// //       className="py-20 bg-light-gold"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.2 }}
// //       variants={sectionVariants}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
// //             Project Specifications
// //           </h2>
// //           <p className="text-xl text-gray-700">
// //             How we build affordable yet valuable homes in the heart of Bengaluru.
// //           </p>
// //         </div>

// //         <motion.div
// //           className="grid md:grid-cols-3 gap-8"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.1 }}
// //           variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
// //         >
// //           {specItems.map((spec) => (
// //             <motion.div
// //               key={spec.title}
// //               className="bg-white rounded-2xl p-8 shadow-lg border border-gold-200"
// //               variants={columnVariants}
// //               whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
// //             >
// //               <div className="flex flex-col items-center text-center mb-6">
// //                  <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mb-4">
// //                     <spec.icon className="h-8 w-8 text-black" />
// //                  </div>
// //                 <h3 className="text-xl font-bold text-black">{spec.title}</h3>
// //               </div>
// //               <ul className="space-y-4">
// //                 {specifications[spec.data].map((item, index) => (
// //                   <li key={index} className="text-sm text-gray-700 border-t border-gold-100 pt-3">
// //                     <strong className="text-black block mb-1">{item.split(":")[0]}:</strong>
// //                     {item.split(":").slice(1).join(":")}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// "use client"

// import { motion, Variants, easeOut } from "framer-motion";
// import { Wrench, Building, Plug } from "lucide-react";

// interface ProjectSpecificationsProps {
//   specifications: {
//     civil: string[]
//     architecture: string[]
//     services: string[]
//   }
// }

// const sectionVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.2 } }
// };

// const columnVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
// };

// const specItems = [
//     { title: "CIVIL", icon: Wrench, data: "civil" },
//     { title: "ARCHITECTURE", icon: Building, data: "architecture" },
//     { title: "SERVICES", icon: Plug, data: "services" },
// ] as const;


// export function ProjectSpecifications({ specifications }: ProjectSpecificationsProps) {
//   return (
//     <motion.section
//       className="py-20 bg-light-gold"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
//             Project Specifications
//           </h2>
//           <p className="text-xl text-gray-700">
//             How we build affordable yet valuable homes in the heart of Bengaluru.
//           </p>
//         </div>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//         >
//           {specItems.map((spec) => (
//             <motion.div
//               key={spec.title}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gold-200"
//               variants={columnVariants}
//               whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
//             >
//               <div className="flex flex-col items-center text-center mb-6">
//                  <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mb-4">
//                     <spec.icon className="h-8 w-8 text-black" />
//                  </div>
//                 <h3 className="text-xl font-bold text-black">{spec.title}</h3>
//               </div>
//               <ul className="space-y-4">
//                 {specifications[spec.data].map((item, index) => (
//                   <li key={index} className="text-sm text-gray-700 border-t border-gold-100 pt-3">
//                     <strong className="text-black block mb-1">{item.split(":")[0]}:</strong>
//                     {item.split(":").slice(1).join(":")}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

"use client"

import { motion } from "framer-motion";
import { Wrench, Building, Plug } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProjectSpecificationsProps {
  specifications: {
    civil: string[]
    architecture: string[]
    services: string[]
  }
}

const specItems = [
    { title: "Civil Engineering", icon: Wrench, dataKey: "civil" },
    { title: "Architectural Details", icon: Building, dataKey: "architecture" },
    { title: "Services & Utilities", icon: Plug, dataKey: "services" },
] as const;


export function ProjectSpecifications({ specifications }: ProjectSpecificationsProps) {
  return (
    <motion.section
      className="py-24 bg-light-gold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
            Quality in Every Detail
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our meticulous specifications, ensuring durability, safety, and a premium finish.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
           <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
            {specItems.map((spec, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-gold-200 border rounded-2xl shadow-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-black hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <spec.icon className="h-6 w-6 text-gold-600" />
                    <span>{spec.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-4">
                    {specifications[spec.dataKey].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 border-t border-gray-100 pt-3">
                        <strong className="text-black block mb-1">{item.split(":")[0]}:</strong>
                        {item.split(":").slice(1).join(":")}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  )
}