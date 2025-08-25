// // // // import {
// // // //   Waves,
// // // //   Dumbbell,
// // // //   Car,
// // // //   Users,
// // // //   Shield,
// // // //   Zap,
// // // //   TreePine,
// // // //   Camera,
// // // //   MapPin,
// // // //   Lightbulb,
// // // //   Home,
// // // //   Gamepad2,
// // // //   Baby,
// // // // } from "lucide-react"

// // // // const amenities = [
// // // //   { icon: Waves, title: "Swimming Pool with Toddler's Pool", category: "Recreation" },
// // // //   { icon: Dumbbell, title: "Ultra Modern Gymnasium Indoor and Outdoor", category: "Fitness" },
// // // //   { icon: Car, title: "Covered Car and Bike Parking Area", category: "Parking" },
// // // //   { icon: Users, title: "Elder's and Children's Park Area Outdoor", category: "Community" },
// // // //   { icon: Shield, title: "Round the Clock Security", category: "Security" },
// // // //   { icon: Camera, title: "CCTV Surveillance 24/7 entire Premise", category: "Security" },
// // // //   { icon: MapPin, title: "Jogging and Cycling Track Area Throughout", category: "Fitness" },
// // // //   { icon: Gamepad2, title: "Volleyball and Cricket Court Area", category: "Sports" },
// // // //   { icon: Zap, title: "Fire Safety and Emergency Exits", category: "Safety" },
// // // //   { icon: Home, title: "Housekeeping and Maintenance Service", category: "Services" },
// // // //   { icon: TreePine, title: "Amphitheatre and Recreational Area", category: "Entertainment" },
// // // //   { icon: Lightbulb, title: "Yoga Hangout & Spiritual Centre Area", category: "Wellness" },
// // // //   { icon: MapPin, title: "24/7 Street and Premises Lights Throughout", category: "Safety" },
// // // //   { icon: Baby, title: "Pets Friendly Parks and Walking Area", category: "Community" },
// // // //   { icon: Zap, title: "24/7 Power Backup Support Throughout", category: "Utilities" },
// // // // ]

// // // // export function ProjectAmenities() {
// // // //   return (
// // // //     <section className="py-20 gradient-secondary">
// // // //       <div className="container mx-auto px-4">
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
// // // //             Discover Extraordinary Comfort: Our Exclusive Offerings
// // // //           </h2>
// // // //           <p className="text-xl text-slate-600">Premium amenities designed for modern living</p>
// // // //         </div>

// // // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// // // //           {amenities.map((amenity, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="bg-slate-900 text-white rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors duration-300"
// // // //             >
// // // //               <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center mx-auto mb-4">
// // // //                 <amenity.icon className="h-6 w-6 text-white" />
// // // //               </div>
// // // //               <h3 className="font-semibold text-sm leading-tight">{amenity.title}</h3>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // "use client"

// // // import { Waves, Dumbbell, Car, Users, Shield, Zap, TreePine, Camera, MapPin, Lightbulb, Home, Gamepad2, Baby } from 'lucide-react'
// // // import { motion, Variants, easeOut, easeIn } from "framer-motion";


// // // const amenities = [
// // // { icon: Waves, title: "Swimming Pool with Toddler's Pool", category: "Recreation" },
// // // { icon: Dumbbell, title: "Ultra Modern Gymnasium Indoor and Outdoor", category: "Fitness" },
// // // { icon: Car, title: "Covered Car and Bike Parking Area", category: "Parking" },
// // // { icon: Users, title: "Elder's and Children's Park Area Outdoor", category: "Community" },
// // // { icon: Shield, title: "Round the Clock Security", category: "Security" },
// // // { icon: Camera, title: "CCTV Surveillance 24/7 entire Premise", category: "Security" },
// // // { icon: MapPin, title: "Jogging and Cycling Track Area Throughout", category: "Fitness" },
// // // { icon: Gamepad2, title: "Volleyball and Cricket Court Area", category: "Sports" },
// // // { icon: Zap, title: "Fire Safety and Emergency Exits", category: "Safety" },
// // // { icon: Home, title: "Housekeeping and Maintenance Service", category: "Services" },
// // // { icon: TreePine, title: "Amphitheatre and Recreational Area", category: "Entertainment" },
// // // { icon: Lightbulb, title: "Yoga Hangout & Spiritual Centre Area", category: "Wellness" },
// // // { icon: MapPin, title: "24/7 Street and Premises Lights Throughout", category: "Safety" },
// // // { icon: Baby, title: "Pets Friendly Parks and Walking Area", category: "Community" },
// // // { icon: Zap, title: "24/7 Power Backup Support Throughout", category: "Utilities" },
// // // ]

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

// // // const cardVariants: Variants = {
// // //   hidden: { opacity: 0, y: 50 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       duration: 0.5,
// // //       ease: easeOut // ✅ instead of "easeOut"
// // //     }
// // //   }
// // // };


// // // export function ProjectAmenities() {
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
// // //         <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
// // //           Discover Extraordinary Comfort: Our Exclusive Offerings
// // //         </h2>
// // //         <p className="text-xl text-slate-600">Premium amenities designed for modern living</p>
// // //       </div>

// // //       <motion.div
// // //         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
// // //         variants={{
// // //           visible: {
// // //             transition: {
// // //               staggerChildren: 0.1,
// // //             },
// // //           },
// // //         }}
// // //       >
// // //         {amenities.map((amenity, index) => (
// // //           <motion.div
// // //             key={index}
// // //             className="bg-slate-900 text-white rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors duration-300"
// // //             variants={cardVariants}
// // //             whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
// // //             transition={{ type: "spring", stiffness: 300 }}
// // //           >
// // //             <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center mx-auto mb-4">
// // //               <amenity.icon className="h-6 w-6 text-white" />
// // //             </div>
// // //             <h3 className="font-semibold text-sm leading-tight">{amenity.title}</h3>
// // //           </motion.div>
// // //         ))}
// // //       </motion.div>
// // //     </div>
// // //   </motion.section>
// // // )
// // // }


// // "use client"

// // import { Waves, Dumbbell, Car, Users, Shield, Zap, TreePine, Camera, MapPin, Lightbulb, Home, Gamepad2, Baby } from 'lucide-react'
// // import { motion, Variants, easeOut } from "framer-motion";

// // const amenities = [
// //   { icon: Waves, title: "Swimming Pool with Toddler's Pool", category: "Recreation" },
// //   { icon: Dumbbell, title: "Ultra Modern Gymnasium Indoor and Outdoor", category: "Fitness" },
// //   { icon: Car, title: "Covered Car and Bike Parking Area", category: "Parking" },
// //   { icon: Users, title: "Elder's and Children's Park Area Outdoor", category: "Community" },
// //   { icon: Shield, title: "Round the Clock Security", category: "Security" },
// //   { icon: Camera, title: "CCTV Surveillance 24/7 entire Premise", category: "Security" },
// //   { icon: MapPin, title: "Jogging and Cycling Track Area Throughout", category: "Fitness" },
// //   { icon: Gamepad2, title: "Volleyball and Cricket Court Area", category: "Sports" },
// //   { icon: Zap, title: "Fire Safety and Emergency Exits", category: "Safety" },
// //   { icon: Home, title: "Housekeeping and Maintenance Service", category: "Services" },
// //   { icon: TreePine, title: "Amphitheatre and Recreational Area", category: "Entertainment" },
// //   { icon: Lightbulb, title: "Yoga Hangout & Spiritual Centre Area", category: "Wellness" },
// //   { icon: MapPin, title: "24/7 Street and Premises Lights Throughout", category: "Safety" },
// //   { icon: Baby, title: "Pets Friendly Parks and Walking Area", category: "Community" },
// //   { icon: Zap, title: "24/7 Power Backup Support Throughout", category: "Utilities" },
// // ]

// // const sectionVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } }
// // };

// // const cardVariants: Variants = {
// //   hidden: { opacity: 0, y: 50 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
// // };

// // export function ProjectAmenities() {
// //   return (
// //     <motion.section
// //       className="py-20 bg-black text-white"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.1 }}
// //       variants={sectionVariants}
// //     >
// //       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
// //       <div className="container mx-auto px-4 relative">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
// //             Exclusive <span className="text-gold-400">Offerings</span>
// //           </h2>
// //           <p className="text-xl text-gray-400">Premium amenities designed for modern living</p>
// //         </div>

// //         <motion.div
// //           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.1 }}
// //           variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
// //         >
// //           {amenities.map((amenity, index) => (
// //             <motion.div
// //               key={index}
// //               className="bg-gray-900 border border-gold-800 rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold-600 hover:shadow-2xl hover:shadow-gold-800/20"
// //               variants={cardVariants}
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-4">
// //                 <amenity.icon className="h-6 w-6 text-black" />
// //               </div>
// //               <h3 className="font-semibold text-sm leading-tight text-gray-200">{amenity.title}</h3>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// "use client"

// import { Waves, Dumbbell, Car, Users, Shield, Zap, TreePine, Camera, MapPin, Lightbulb, Home, Gamepad2, Baby } from 'lucide-react'
// import { motion, Variants, easeOut } from "framer-motion";

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

// const sectionVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } }
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
// };

// export function ProjectAmenities() {
//   return (
//     <motion.section
//       className="py-20 bg-black text-white"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       variants={sectionVariants}
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
//             Discover Extraordinary Comfort: Our <span className="text-gold-400">Exclusive Offerings</span>
//           </h2>
//           <p className="text-xl text-gray-400">Premium amenities designed for modern living</p>
//         </div>

//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
//         >
//           {amenities.map((amenity, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-900 border border-gold-800 rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold-600 hover:shadow-2xl hover:shadow-gold-800/20"
//               variants={cardVariants}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <amenity.icon className="h-6 w-6 text-black" />
//               </div>
//               <h3 className="font-semibold text-sm leading-tight text-gray-200">{amenity.title}</h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { Waves, Dumbbell, Car, Users, Shield, Zap, TreePine, Camera, MapPin, Lightbulb, Home, Gamepad2, Baby, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const amenities = [
  { icon: Waves, title: "Swimming Pool with Toddler's Pool" },
  { icon: Dumbbell, title: "Ultra Modern Gymnasium" },
  { icon: Car, title: "Covered Car Parking" },
  { icon: Users, title: "Children's Park Area" },
  { icon: Shield, title: "Round the Clock Security" },
  { icon: Camera, title: "CCTV Surveillance 24/7" },
  { icon: MapPin, title: "Jogging & Cycling Track" },
  { icon: Gamepad2, title: "Volleyball & Cricket Court" },
  { icon: Zap, title: "Fire Safety Systems" },
  { icon: Home, title: "Housekeeping Service" },
  { icon: TreePine, title: "Amphitheatre Area" },
  { icon: Lightbulb, title: "Yoga & Spiritual Centre" },
  { icon: Baby, title: "Pets Friendly Parks" },
  { icon: Zap, title: "24/7 Power Backup" },
];

// Carousel Navigation Button Component
const PrevButton = (props: React.ComponentProps<"button">) => {
  const { children, ...restProps } = props
  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      <ChevronLeft className="h-6 w-6" />
      {children}
    </button>
  )
}

const NextButton = (props: React.ComponentProps<"button">) => {
  const { children, ...restProps } = props
  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      <ChevronRight className="h-6 w-6" />
      {children}
    </button>
  )
}


export function ProjectAmenities() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])


  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            World-Class <span className="text-gold-400">Amenities</span>
          </h2>
          <p className="text-xl text-gray-400">Facilities designed to elevate your lifestyle.</p>
        </div>
        
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {amenities.map((amenity, index) => (
                    <div className="embla__slide" key={index}>
                        <div className="bg-gray-900 border border-gold-800 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <amenity.icon className="h-8 w-8 text-black" />
                            </div>
                            <h3 className="font-semibold leading-tight text-gray-200">{amenity.title}</h3>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>

      </div>
    </section>
  );
}