// // import { ProjectsHero } from "@/components/projects/projects-hero"
// // import { ProjectGrid } from "@/components/projects/project-grid"
// // import { ProjectFeatures } from "@/components/projects/project-features"

// // export default function ProjectsPage() {
// //   return (
// //     <>
// //       <ProjectsHero />
// //       <ProjectGrid />
// //       <ProjectFeatures />
// //     </>
// //   )
// // }


// "use client";

// import { Building, MapPin, Home, ArrowRight, Calendar, Building2, CalendarClock, Award } from "lucide-react";
// import Image from "next/image";
// import { motion, Variants } from 'framer-motion';

// // Data for ProjectGrid component
// const projects = [
//   {
//     name: "RRL Palacio",
//     location: "Medahalli",
//     type: "Luxury Property",
//     status: "Ready to Move",
//     description: "Our newly constructed luxury property, situated in Medahalli",
//     image: "/LookProject2.jpeg",
//     features: ["3 BHK", "2 BHK", "Premium Amenities"],
//   },
//   {
//     name: "RRL Palm Altezze",
//     location: "Varthur, Bangalore",
//     type: "Premium Property",
//     status: "Under Construction",
//     description: "Our latest premium property located at Varthur, Bangalore",
//     image: "/LookProject1.jpeg",
//     features: ["2 BHK", "3 BHK", "Garden View"],
//   },
//   {
//     name: "RRL Sequoia",
//     location: "Varthur, Bangalore",
//     type: "Luxurious Villa",
//     status: "Ready to Move",
//     description: "Our latest luxurious Villa located at Varthur, Bangalore",
//     image: "/Sequoia.jpg",
//     features: ["4 BHK Villa", "Private Garden", "Premium Location"],
//   },
//   {
//     name: "RRL Nature Woods",
//     location: "Sarjapur",
//     type: "Premium Property",
//     status: "Launching Soon",
//     description: "Our premium awarded property, situated in heart of Sarjapur",
//     image: "/LookProject5.jpeg",
//     features: ["2 BHK", "3 BHK", "Nature View"],
//   },
//   {
//     name: "RRL Oasis",
//     location: "Bangalore",
//     type: "Residential Complex",
//     status: "Planning Phase",
//     description: "Upcoming residential project with modern amenities",
//     image: "/Oasis.jpg",
//     features: ["1 BHK", "2 BHK", "Swimming Pool"],
//   },
//   {
//     name: "RRL Towers",
//     location: "Sampige Jala, Sarjapur",
//     type: "Commercial Tower",
//     status: "Operational",
//     description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
//     image: "/Tower.jpeg",
//     features: ["Office Spaces", "Retail", "Corporate Hub"],
//   },
// ];

// // Data for ProjectFeatures component
// const features = [
//   {
//     icon: Building2,
//     title: "RRL Palm Alteze",
//     description: "High rise apartment located in a premium location",
//   },
//   {
//     icon: Home,
//     title: "RRL Palacio",
//     description: "Furnished smart homes with modern comforts",
//   },
//   {
//     icon: CalendarClock,
//     title: "RRL Sequoia",
//     description: "Exciting new project – Coming soon",
//   },
//   {
//     icon: Award,
//     title: "RRL Nature Wood",
//     description: "High-end, award-winning amenities | Project completed",
//   },
// ];

// // Animation variants for the container to orchestrate staggered animations
// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2, // Time delay between each child animation
//     },
//   },
// };

// // Animation variants for each card
// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };


// export default function ProjectsPage() {
//   return (
//     <>
//       {/* ProjectsHero Component */}
//       <section className="py-20 gradient-bg">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <Building className="h-4 w-4" />
//               <span>Our Projects</span>
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">RRL Premium Properties</h1>

//             <p className="text-xl text-slate-600 leading-relaxed mb-12">
//               Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms and state-of-the-art kitchens to
//               breathtaking views and meticulously designed interiors, we provide you with a comprehensive overview of what
//               each property has to offer.
//             </p>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Home className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-slate-900">7+</div>
//                 <div className="text-slate-600">Active Projects</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <MapPin className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-slate-900">5+</div>
//                 <div className="text-slate-600">Prime Locations</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Building className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-slate-900">999+</div>
//                 <div className="text-slate-600">Sq Ft Delivered</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ProjectGrid Component */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.name}
//                       width={400}
//                       height={300}
//                       className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute top-4 left-4 bg-[#d9a406] text-white px-3 py-1 rounded-full text-xs font-medium">
//                       {project.type}
//                     </div>
//                     <div className="absolute top-4 right-4 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
//                       <Calendar className="h-3 w-3" />
//                       <span>{project.status}</span>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>

//                     <div className="flex items-center space-x-2 text-slate-600 mb-3">
//                       <MapPin className="h-4 w-4" />
//                       <span className="text-sm">{project.location}</span>
//                     </div>

//                     <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.features.map((feature, idx) => (
//                         <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <span className="text-yellow-600 font-semibold">View Details</span>
//                       <ArrowRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ProjectFeatures Component */}
//       <motion.section 
//         className="py-12 bg-gradient-to-b from-white to-gray-50"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the section is in view
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1 }
//         }}
//       >
//         <div className="container mx-auto px-4">
//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Explore Our Signature Projects
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Each RRL project offers unique living experiences, blending premium design, location, and modern amenities.
//             </p>
//           </div>

//           {/* Animated Cards Grid */}
//           <motion.div 
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//             variants={containerVariants}
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-black rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.05 }} // Adds a subtle zoom effect on hover
//               >
//                 <div className="w-16 h-16 rounded-full bg-[#d9a406] flex items-center justify-center mb-6 shadow-md">
//                   <feature.icon className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-300 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>
//     </>
//   );
// }

"use client";

import { Building, MapPin, Home, ArrowRight, Calendar, Award, CalendarClock } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const projects = [
  { name: "RRL Palacio", location: "Medahalli", type: "Luxury Property", status: "Ready to Move", image: "/LookProject2.jpeg" },
  { name: "RRL Palm Altezze", location: "Varthur, Bangalore", type: "Premium Property", status: "Under Construction", image: "/LookProject1.jpeg" },
  { name: "RRL Sequoia", location: "Varthur, Bangalore", type: "Luxurious Villa", status: "Ready to Move", image: "/Sequoia.jpg" },
  { name: "RRL Nature Woods", location: "Sarjapur", type: "Premium Property", status: "Launching Soon", image: "/LookProject5.jpeg" },
  { name: "RRL Oasis", location: "Bangalore", type: "Residential Complex", status: "Planning Phase", image: "/Oasis.jpg" },
  { name: "RRL Towers", location: "Sampige Jala, Sarjapur", type: "Commercial Tower", status: "Operational", image: "/Tower.jpeg" },
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
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-56">
                    <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-600 font-semibold">View Details</span>
                      <ArrowRight className="h-4 w-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
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