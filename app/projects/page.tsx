// "use client";

// import { Building, MapPin, Home, ArrowRight, Calendar, Award, CalendarClock } from "lucide-react";
// import Image from "next/image";
// import { motion } from 'framer-motion';

// const projects = [
//   { name: "RRL Palacio", location: "Medahalli", type: "Luxury Property", status: "Ready to Move", image: "/LookProject2.jpeg" },
//   { name: "RRL Palm Altezze", location: "Varthur, Bangalore", type: "Premium Property", status: "Under Construction", image: "/LookProject1.jpeg" },
//   { name: "RRL Sequoia", location: "Varthur, Bangalore", type: "Luxurious Villa", status: "Ready to Move", image: "/Sequoia.jpg" },
//   { name: "RRL Nature Woods", location: "Sarjapur", type: "Premium Property", status: "Launching Soon", image: "/LookProject5.jpeg" },
//   { name: "RRL Oasis", location: "Bangalore", type: "Residential Complex", status: "Planning Phase", image: "/Oasis.jpg" },
//   { name: "RRL Towers", location: "Sampige Jala, Sarjapur", type: "Commercial Tower", status: "Operational", image: "/Tower.jpeg" },
// ];

// const features = [
//   { icon: Building, title: "RRL Palm Alteze", description: "High-rise apartment in a premium location." },
//   { icon: Home, title: "RRL Palacio", description: "Furnished smart homes with modern comforts." },
//   { icon: Award, title: "RRL Nature Wood", description: "High-end, award-winning amenities." },
//   {
//     icon: CalendarClock,
//     title: "RRL Sequoia",
//     description: "Exciting new project – Coming soon",
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <>
//       <motion.section 
//         className="py-20 bg-black text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//         <div className="container mx-auto px-4 relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <Building className="h-4 w-4" />
//               <span>Our Projects</span>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">RRL Premium Properties</h1>
//             <p className="text-xl text-gray-400 leading-relaxed">
//               Explore our exceptional properties, from spacious bedrooms to breathtaking views, and find your next address with RRL.
//             </p>
//           </div>
//         </div>
//       </motion.section>

//       <section className="py-20 bg-light-gold">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div 
//                 key={index} 
//                 className="group cursor-pointer"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
//                   <div className="relative h-56">
//                     <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
//                     <div className="flex items-center space-x-2 text-gray-600 mb-3">
//                       <MapPin className="h-4 w-4" />
//                       <span className="text-sm">{project.location}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gold-600 font-semibold">View Details</span>
//                       <ArrowRight className="h-4 w-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <motion.section 
//         className="py-12 bg-black"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
//               Explore Our Signature Projects
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-900 rounded-2xl p-8 text-center border border-gold-800"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-6">
//                   <feature.icon className="h-10 w-10 text-black" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// }
"use client";

import { Building, MapPin, Home, ArrowRight, Calendar, Award, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // 1. Import Link
import { motion } from 'framer-motion';

// 2. Added 'href' property to each project to match your routing structure
const projects = [
  { 
    name: "RRL Palacio", 
    location: "Medahalli", 
    type: "Luxury Property", 
    status: "Ready to Move", 
    image: "/LookProject2.jpeg",
    href: "/projects/palacio" 
  },
  { 
    name: "RRL Palm Altezze", 
    location: "Varthur, Bangalore", 
    type: "Premium Property", 
    status: "Under Construction", 
    image: "/LookProject1.jpeg",
    href: "/projects/palm-altezze" 
  },
  { 
    name: "RRL Sequoia", 
    location: "Varthur, Bangalore", 
    type: "Luxurious Villa", 
    status: "Ready to Move", 
    image: "/Sequoia.jpg",
    href: "/projects/sequoia" 
  },
  { 
    name: "RRL Nature Woods", 
    location: "Sarjapur", 
    type: "Premium Property", 
    status: "Launching Soon", 
    image: "/LookProject5.jpeg",
    href: "/projects/nature-woods" 
  },
  { 
    name: "RRL Oasis", 
    location: "Bangalore", 
    type: "Residential Complex", 
    status: "Planning Phase", 
    image: "/Oasis.jpg",
    href: "/projects/oasis" 
  },
  { 
    name: "RRL Towers", 
    location: "Sampige Jala, Sarjapur", 
    type: "Commercial Tower", 
    status: "Operational", 
    image: "/Tower.jpeg",
    href: "/projects/towers" 
  },
];

const features = [
  { icon: Building, title: "RRL Palm Alteze", description: "High-rise apartment in a premium location." },
  { icon: Home, title: "RRL Palacio", description: "Furnished smart homes with modern comforts." },
  { icon: Award, title: "RRL Nature Wood", description: "High-end, award-winning amenities." },
  {
    icon: CalendarClock,
    title: "RRL Sequoia",
    description: "Exciting new project – Coming soon",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="h-4 w-4" />
              <span>Our Projects</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">RRL Premium Properties</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Explore our exceptional properties, from spacious bedrooms to breathtaking views, and find your next address with RRL.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-light-gold">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* 3. Wrapped the card content in Link */}
                <Link href={project.href} className="block h-full">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56">
                      <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-gold-600 font-semibold">View Details</span>
                        <ArrowRight className="h-4 w-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        className="py-12 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              Explore Our Signature Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 text-center border border-gold-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}