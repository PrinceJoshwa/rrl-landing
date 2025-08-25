// // import { Check } from "lucide-react"

// // interface ProjectDetailsProps {
// //   project: {
// //     name: string
// //     features: string[]
// //     fundedBy?: string
// //     additionalInfo?: {
// //       description?: string
// //     }
// //   }
// // }

// // export function ProjectDetails({ project }: ProjectDetailsProps) {
// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-start">
// //           {/* Left Content */}
// //           <div className="space-y-6">
// //             <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6">{project.name}</h2>

// //             <div className="prose prose-slate max-w-none">
// //               {project.additionalInfo?.description ? (
// //                 <div className="space-y-4">
// //                   {project.additionalInfo.description.split("\n\n").map((paragraph, index) => (
// //                     <p key={index} className="text-lg text-slate-600 leading-relaxed">
// //                       {paragraph}
// //                     </p>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <p className="text-lg text-slate-600 leading-relaxed">
// //                   RRL Builders and Developers presents our Joint Venture Project - {project.name}, a state-of-the-art
// //                   development at the heart of Bangalore South.
// //                 </p>
// //               )}
// //             </div>

// //             {project.fundedBy && (
// //               <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6">
// //                 <h3 className="font-bold text-slate-900 mb-2">Project Funded By</h3>
// //                 <p className="text-slate-700">{project.fundedBy}</p>
// //               </div>
// //             )}
// //           </div>

// //           {/* Right Content - Features */}
// //           <div className="bg-slate-900 text-white rounded-2xl p-8">
// //             <h3 className="text-xl font-bold mb-6">Key Features & Highlights</h3>

// //             <div className="space-y-4">
// //               {project.features.map((feature, index) => (
// //                 <div key={index} className="flex items-start space-x-3">
// //                   <div className="w-5 h-5 bg-[#d9a406] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                     <Check className="h-3 w-3 text-white" />
// //                   </div>
// //                   <p className="text-slate-200 text-sm leading-relaxed">{feature}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { Check } from 'lucide-react'
// import { motion, Variants, easeOut, easeIn } from "framer-motion";



// interface ProjectDetailsProps {
// project: {
//   name: string
//   features: string[]
//   fundedBy?: string
//   additionalInfo?: {
//     description?: string
//   }
// }
// }

// const sectionVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: easeOut // ✅ instead of "easeOut"
//     }
//   }
// };


// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: easeOut // ✅ instead of "easeOut"
//     }
//   }
// };

// export function ProjectDetails({ project }: ProjectDetailsProps) {
// return (
//   <motion.section
//     className="py-20 gradient-secondary"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//     variants={sectionVariants}
//   >
//     <div className="container mx-auto px-4">
//       <div className="grid lg:grid-cols-2 gap-12 items-start">
//         {/* Left Content */}
//         <motion.div className="space-y-6" variants={itemVariants} transition={{ delay: 0.2 }}>
//           <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6">{project.name}</h2>

//           <div className="prose prose-slate max-w-none">
//             {project.additionalInfo?.description ? (
//               <div className="space-y-4">
//                 {project.additionalInfo.description.split("\n\n").map((paragraph, index) => (
//                   <p key={index} className="text-lg text-slate-600 leading-relaxed">
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-lg text-slate-600 leading-relaxed">
//                 RRL Builders and Developers presents our Joint Venture Project - {project.name}, a state-of-the-art
//                 development at the heart of Bangalore South.
//               </p>
//             )}
//           </div>

//           {project.fundedBy && (
//             <motion.div
//               className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               <h3 className="font-bold text-slate-900 mb-2">Project Funded By</h3>
//               <p className="text-slate-700">{project.fundedBy}</p>
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Right Content - Features */}
//         <motion.div className="bg-slate-900 text-white rounded-2xl p-8" variants={itemVariants} transition={{ delay: 0.4 }}>
//           <h3 className="text-xl font-bold mb-6">Key Features & Highlights</h3>

//           <motion.div
//             className="space-y-4"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               visible: {
//                 transition: {
//                   staggerChildren: 0.1,
//                 },
//               },
//             }}
//           >
//             {project.features.map((feature, index) => (
//               <motion.div key={index} className="flex items-start space-x-3" variants={itemVariants}>
//                 <div className="w-5 h-5 bg-[#d9a406] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <Check className="h-3 w-3 text-white" />
//                 </div>
//                 <p className="text-slate-200 text-sm leading-relaxed">{feature}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   </motion.section>
// )
// }

"use client"

import { Check } from 'lucide-react'
import { motion, Variants, easeOut } from "framer-motion";

interface ProjectDetailsProps {
  project: {
    name: string
    features: string[]
    fundedBy?: string
    businessAdvantages?: string[]
    additionalInfo?: {
      description?: string
    }
  }
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }
  }
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const contentSource = project.businessAdvantages || project.features;

  return (
    <motion.section
      className="py-20 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols gap-12 items-start">
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-3xl font-playfair font-bold text-black mb-6">{project.name}</h2>

            <div className="prose prose-slate max-w-none">
              {project.additionalInfo?.description ? (
                <div className="space-y-4">
                  {project.additionalInfo.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg text-gray-700 leading-relaxed">
                  RRL Builders and Developers presents our Joint Venture Project - {project.name}, a state-of-the-art
                  development at the heart of Bangalore.
                </p>
              )}
            </div>

            {project.fundedBy && (
              <div className="bg-white border border-gold-200 rounded-2xl p-6">
                <h3 className="font-bold text-black mb-2">Project Funded By</h3>
                <p className="text-gray-800">{project.fundedBy}</p>
              </div>
            )}
          </motion.div>

          {/* Right Content - Features */}
          <motion.div 
            className="bg-black text-white rounded-2xl p-8 border border-gold-800" 
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-6 text-gold-400">Key Features & Highlights</h3>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {contentSource.map((item, index) => (
                <motion.div key={index} className="flex items-start space-x-3" variants={itemVariants}>
                  <div className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}