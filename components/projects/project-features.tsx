// import { Shield, Award, Users, Wrench, Car, Wifi } from "lucide-react"

// const features = [
//   {
//     icon: Shield,
//     title: "Premium Security",
//     description: "24/7 security with CCTV surveillance and access control systems",
//   },
//   {
//     icon: Award,
//     title: "Award-Winning Design",
//     description: "Architecturally acclaimed designs with modern aesthetics",
//   },
//   {
//     icon: Users,
//     title: "Community Living",
//     description: "Vibrant community spaces and recreational facilities",
//   },
//   {
//     icon: Wrench,
//     title: "Premium Amenities",
//     description: "Gymnasium, swimming pool, clubhouse, and landscaped gardens",
//   },
//   {
//     icon: Car,
//     title: "Ample Parking",
//     description: "Dedicated parking spaces with visitor parking facilities",
//   },
//   {
//     icon: Wifi,
//     title: "Smart Connectivity",
//     description: "High-speed internet and smart home automation features",
//   },
// ]

// export function ProjectFeatures() {
//   return (
//     <section className="py-20 gradient-bg">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose RRL Properties</h2>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Every RRL property comes with premium features and amenities designed for modern living
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
//                 <feature.icon className="h-8 w-8 text-white" />
//               </div>

//               <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>

//               <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion, Variants } from 'framer-motion'
import { Building2, Home, CalendarClock, Award } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: "RRL Palm Alteze",
    description: "High rise apartment located in a premium location",
  },
  {
    icon: Home,
    title: "RRL Palacio",
    description: "Furnished smart homes with modern comforts",
  },
  {
    icon: CalendarClock,
    title: "RRL Sequoia",
    description: "Exciting new project – Coming soon",
  },
  {
    icon: Award,
    title: "RRL Nature Wood",
    description: "High-end, award-winning amenities | Project completed",
  },
]

// Animation variants for the container to orchestrate staggered animations
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Time delay between each child animation
    },
  },
}

// Animation variants for each card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ProjectFeatures() {
  return (
    <motion.section 
      className="py-12 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the section is in view
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore Our Signature Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each RRL project offers unique living experiences, blending premium design, location, and modern amenities.
          </p>
        </div>

        {/* Animated Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }} // Adds a subtle zoom effect on hover
            >
              <div className="w-16 h-16 rounded-full bg-[#d9a406] flex items-center justify-center mb-6 shadow-md">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}