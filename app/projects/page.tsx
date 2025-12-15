// "use client";

// import { Building, MapPin, Home, ArrowRight, Calendar, Award, CalendarClock } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link"; // 1. Import Link
// import { motion } from 'framer-motion';

// // 2. Added 'href' property to each project to match your routing structure
// const projects = [
//   { 
//     name: "RRL Palacio", 
//     location: "Medahalli", 
//     type: "Luxury Property", 
//     status: "Ready to Move", 
//     image: "/LookProject2.jpeg",
//     href: "/projects/palacio" 
//   },
//   { 
//     name: "RRL Palm Altezze", 
//     location: "Varthur, Bangalore", 
//     type: "Premium Property", 
//     status: "Under Construction", 
//     image: "/LookProject1.jpeg",
//     href: "/projects/palm-altezze" 
//   },
//   { 
//     name: "RRL Sequoia", 
//     location: "Varthur, Bangalore", 
//     type: "Luxurious Villa", 
//     status: "Ready to Move", 
//     image: "/Sequoia.jpg",
//     href: "/projects/sequoia" 
//   },
//   { 
//     name: "RRL Nature Woods", 
//     location: "Sarjapur", 
//     type: "Premium Property", 
//     status: "Launching Soon", 
//     image: "/LookProject5.jpeg",
//     href: "/projects/nature-woods" 
//   },
//   { 
//     name: "RRL Oasis", 
//     location: "Bangalore", 
//     type: "Residential Complex", 
//     status: "Planning Phase", 
//     image: "/Oasis.jpg",
//     href: "/projects/oasis" 
//   },
//   { 
//     name: "RRL Towers", 
//     location: "Sampige Jala, Sarjapur", 
//     type: "Commercial Tower", 
//     status: "Operational", 
//     image: "/Tower.jpeg",
//     href: "/projects/towers" 
//   },
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
//                 {/* 3. Wrapped the card content in Link */}
//                 <Link href={project.href} className="block h-full">
//                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
//                     <div className="relative h-56">
//                       <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
//                     </div>
//                     <div className="p-6 flex flex-col flex-grow">
//                       <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
//                       <div className="flex items-center space-x-2 text-gray-600 mb-3">
//                         <MapPin className="h-4 w-4" />
//                         <span className="text-sm">{project.location}</span>
//                       </div>
//                       <div className="mt-auto flex items-center justify-between">
//                         <span className="text-gold-600 font-semibold">View Details</span>
//                         <ArrowRight className="h-4 w-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
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

import { Building, MapPin, Home, ArrowRight, Calendar, Award, CalendarClock, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

// Combined data with NEW Possession/Handover timelines
const projects = [
  { 
    name: "RRL Palacio", 
    location: "Medahalli, Bangalore", 
    type: "Luxury Apartment", 
    status: "READY TO MOVE", 
    image: "/LookProject2.jpeg",
    href: "/projects/palacio",
    config: "2, 3 BHK",
    // New Highlighted Data
    timeline: "Possession: Dec 2026",
    timelineSub: "Handover by June 2025"
  },
  { 
    name: "RRL Palm Altezze", 
    location: "Varthur, Bangalore", 
    type: "Premium Apartment", 
    status: "JUST LAUNCHED", 
    image: "/justlaunch.png", 
    href: "/projects/palm-altezze",
    config: "2, 3 BHK",
    // New Highlighted Data
    timeline: "Possession: 2028",
    timelineSub: "Next Handover Phase"
  },
  { 
    name: "RRL Nature Woods", 
    location: "Sarjapur, Bangalore", 
    type: "Premium Apartment", 
    status: "READY TO MOVE", 
    image: "/LookProject5.jpeg",
    href: "/projects/nature-woods",
    config: "2, 3 BHK",
    // New Highlighted Data
    timeline: "Possession: Dec 2023",
    timelineSub: "Handover done within 2022"
  },
  { 
    name: "RRL Towers", 
    location: "Sampige Jala, Sarjapur", 
    type: "Commercial Space", 
    status: "READY TO MOVE", 
    image: "/Tower.jpeg",
    href: "/projects/towers",
    config: "Office Spaces",
    timeline: "Operational",
    timelineSub: "Ready for Fitouts"
  },
  { 
    name: "RRL Complex", 
    location: "South Bangalore", 
    type: "Retail & Office", 
    status: "UNDER CONSTRUCTION", 
    image: "/complex.jpg",
    href: "/projects/complex",
    config: "Shops / Offices",
    timeline: "Under Construction",
    timelineSub: "Booking Open"
  },
  
  // --- EXISTING PROJECTS ---
  { 
    name: "RRL Sequoia", 
    location: "Varthur, Bangalore", 
    type: "Luxurious Villa", 
    status: "Ready to Move", 
    image: "/Sequoia.jpg",
    href: "/projects/sequoia",
    config: "Villas",
    timeline: "Ready to Move",
    timelineSub: "Limited Units Left"
  },
  // { 
  //   name: "RRL Oasis", 
  //   location: "Bangalore", 
  //   type: "Residential Complex", 
  //   status: "Planning Phase", 
  //   image: "/Oasis.jpg",
  //   href: "/projects/oasis",
  //   config: "Apartments",
  //   timeline: "Coming Soon",
  //   timelineSub: "Pre-Launch Interest"
  // },
];

const features = [
  { icon: Building, title: "RRL Palm Altezze", description: "High-rise apartment in a premium location." },
  { icon: Home, title: "RRL Palacio", description: "Furnished smart homes with modern comforts." },
  { icon: Award, title: "RRL Nature Woods", description: "High-end, award-winning amenities." },
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
                className="group cursor-pointer h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.href} className="block h-full">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-gold-500/50">
                    
                    {/* Image Section */}
                    <div className="relative h-64">
                      <Image 
                        src={project.image || "/placeholder.svg"} 
                        alt={project.name} 
                        layout="fill" 
                        objectFit="cover" 
                        className="group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-4 left-4">
                         <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide border border-gold-500">
                            {project.status}
                         </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                           <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">{project.type}</p>
                           <h3 className="text-xl font-bold text-black group-hover:text-gold-600 transition-colors">{project.name}</h3>
                      </div>
                      
                      {/* --- HIGHLIGHTED TIMELINE SECTION --- */}
                      <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
                        <div className="flex items-start gap-2">
                           <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
                           <div>
                              <p className="text-sm font-bold text-gray-900">{project.timeline}</p>
                              {project.timelineSub && (
                                <p className="text-xs text-gray-600 mt-0.5 flex items-center gap-1">
                                  {project.timelineSub.includes("done") || project.timelineSub.includes("Handover") ? (
                                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                                  ) : (
                                    <Clock className="h-3 w-3 text-blue-600" />
                                  )}
                                  {project.timelineSub}
                                </p>
                              )}
                           </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="h-4 w-4 text-gold-500" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Home className="h-4 w-4 text-gold-500" />
                          <span className="text-sm">{project.config}</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        {/* VIEW DETAILS BUTTON */}
                        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 shadow-md">
                            View Project Details
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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