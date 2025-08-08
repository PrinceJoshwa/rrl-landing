// import {
//   Waves,
//   Dumbbell,
//   Car,
//   Users,
//   Shield,
//   Zap,
//   TreePine,
//   Camera,
//   MapPin,
//   Lightbulb,
//   Home,
//   Gamepad2,
//   Baby,
// } from "lucide-react"

// const amenities = [
//   { icon: Waves, title: "Swimming Pool with Toddler's Pool", category: "Recreation" },
//   { icon: Dumbbell, title: "Ultra Modern Gymnasium Indoor and Outdoor", category: "Fitness" },
//   { icon: Car, title: "Covered Car and Bike Parking Area", category: "Parking" },
//   { icon: Users, title: "Elder's and Children's Park Area Outdoor", category: "Community" },
//   { icon: Shield, title: "Round the Clock Security", category: "Security" },
//   { icon: Camera, title: "CCTV Surveillance 24/7 entire Premise", category: "Security" },
//   { icon: MapPin, title: "Jogging and Cycling Track Area Throughout", category: "Fitness" },
//   { icon: Gamepad2, title: "Volleyball and Cricket Court Area", category: "Sports" },
//   { icon: Zap, title: "Fire Safety and Emergency Exits", category: "Safety" },
//   { icon: Home, title: "Housekeeping and Maintenance Service", category: "Services" },
//   { icon: TreePine, title: "Amphitheatre and Recreational Area", category: "Entertainment" },
//   { icon: Lightbulb, title: "Yoga Hangout & Spiritual Centre Area", category: "Wellness" },
//   { icon: MapPin, title: "24/7 Street and Premises Lights Throughout", category: "Safety" },
//   { icon: Baby, title: "Pets Friendly Parks and Walking Area", category: "Community" },
//   { icon: Zap, title: "24/7 Power Backup Support Throughout", category: "Utilities" },
// ]

// export function ProjectAmenities() {
//   return (
//     <section className="py-20 gradient-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
//             Discover Extraordinary Comfort: Our Exclusive Offerings
//           </h2>
//           <p className="text-xl text-slate-600">Premium amenities designed for modern living</p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {amenities.map((amenity, index) => (
//             <div
//               key={index}
//               className="bg-slate-900 text-white rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors duration-300"
//             >
//               <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <amenity.icon className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-sm leading-tight">{amenity.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Waves, Dumbbell, Car, Users, Shield, Zap, TreePine, Camera, MapPin, Lightbulb, Home, Gamepad2, Baby } from 'lucide-react'
import { motion, Variants, easeOut, easeIn } from "framer-motion";


const amenities = [
{ icon: Waves, title: "Swimming Pool with Toddler's Pool", category: "Recreation" },
{ icon: Dumbbell, title: "Ultra Modern Gymnasium Indoor and Outdoor", category: "Fitness" },
{ icon: Car, title: "Covered Car and Bike Parking Area", category: "Parking" },
{ icon: Users, title: "Elder's and Children's Park Area Outdoor", category: "Community" },
{ icon: Shield, title: "Round the Clock Security", category: "Security" },
{ icon: Camera, title: "CCTV Surveillance 24/7 entire Premise", category: "Security" },
{ icon: MapPin, title: "Jogging and Cycling Track Area Throughout", category: "Fitness" },
{ icon: Gamepad2, title: "Volleyball and Cricket Court Area", category: "Sports" },
{ icon: Zap, title: "Fire Safety and Emergency Exits", category: "Safety" },
{ icon: Home, title: "Housekeeping and Maintenance Service", category: "Services" },
{ icon: TreePine, title: "Amphitheatre and Recreational Area", category: "Entertainment" },
{ icon: Lightbulb, title: "Yoga Hangout & Spiritual Centre Area", category: "Wellness" },
{ icon: MapPin, title: "24/7 Street and Premises Lights Throughout", category: "Safety" },
{ icon: Baby, title: "Pets Friendly Parks and Walking Area", category: "Community" },
{ icon: Zap, title: "24/7 Power Backup Support Throughout", category: "Utilities" },
]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut // ✅ instead of "easeOut"
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut // ✅ instead of "easeOut"
    }
  }
};


export function ProjectAmenities() {
return (
  <motion.section
    className="py-20 gradient-secondary"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
          Discover Extraordinary Comfort: Our Exclusive Offerings
        </h2>
        <p className="text-xl text-slate-600">Premium amenities designed for modern living</p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            className="bg-slate-900 text-white rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center mx-auto mb-4">
              <amenity.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-sm leading-tight">{amenity.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
)
}
