// "use client";

// import { Building, MapPin, Home, ArrowRight, CalendarClock, CheckCircle2, Maximize, Target, MessageCircle, Phone, Award } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from 'framer-motion';

// // Updated Project Data with strict instructions
//   const WhatsAppIcon = ({ className }: { className?: string }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//   </svg>
// )
// const projects = [
//       { 
//     name: "RRL Palm Altezze", 
//     location: "Varthur, Bangalore", 
//     type: "Premium Apartment", 
//     status: "JUST LAUNCHED", 
//     image: "/LookProject1.jpeg", // Assumed image based on previous context
//     href: "/projects/palm-altezze",
//     // Specific Data
//     acres: "2 Acres",
//     units: "115 Units",
//     config: "2, 3 BHK",
//     possession: "Possession: 2028"
//   },
//   { 
//     name: "RRL Code Name - NC 216", // Replaced Sequoia
//     location: "Sarjapur, Bangalore", 
//     type: "Premium Apartment", 
//     status: "BOOKING OPEN SOON", 
//     image: "/Sequoia.jpg", 
//     href: "/projects/sequoia", // Keeping href same to match file name
//     // Specific Data
//     acres: "2.01 Acres",
//     units: "216 Units",
//     config: "2, 3 BHK",
//     possession: "Booking Open Soon"
//   },
//   { 
//     name: "RRL Palacio", 
//     location: "Medahalli, Bangalore", 
//     type: "Luxury Apartment", 
//     status: "READY TO MOVE", 
//     image: "/LookProject2.jpeg",
//     href: "/projects/palacio",
//     // Specific Data
//     acres: "1.5 Acres",
//     units: "103 Units",
//     config: "2, 3 BHK",
//     possession: "Early possession granted"
//   },
//   { 
//     name: "RRL Nature Woods", 
//     location: "Sarjapur, Bangalore", 
//     type: "Premium Apartment", 
//     status: "Completed", 
//     image: "/LookProject5.jpeg",
//     href: "/projects/nature-woods",
//     // Specific Data
//     acres: "1.5 Acres",
//     units: "148 Units",
//     config: "2, 3 BHK",
//     possession: "Early possession granted"
//   },
//   { 
//     name: "RRL Towers", 
//     location: "Sarjapur", // Updated Location
//     type: "Commercial Complex", 
//     status: "OPERATIONAL", 
//     image: "/Tower.jpeg",
//     href: "/projects/towers",
//     // Data Removed as requested
//     acres: null,
//     units: null,
//     config: null,
//     possession: "Operational"
//   },
//   { 
//     name: "RRL Complex", 
//     location: "Attibele Sarjapur Road", // Updated Location
//     type: "Commercial Project", 
//     status: "COMPLETED", 
//     image: "/complex.jpg", // Assumed image
//     href: "/projects/oasis", // Using oasis href if complex page doesn't exist, or update as needed
//     // Data Removed as requested
//     acres: null,
//     units: null,
//     config: null,
//     possession: "Commercial Project"
//   },
// ];

// const features = [
//   { icon: Building, title: "RRL Palm Altezze", description: "High-rise apartment in a premium location." },
//   { icon: Home, title: "RRL Palacio", description: "Furnished smart homes with modern comforts." },
//   { icon: Award, title: "RRL Nature Woods", description: "High-end, award-winning amenities." },
//   {
//     icon: CalendarClock,
//     title: "RRL Code Name - NC 216",
//     description: "Exciting new project – Upcoming Feb 2026",
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
//                 className="group cursor-pointer h-full"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="block h-full relative">
//                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-gold-500/50">
                    
//                     {/* Link Wrap for Image */}
//                     <Link href={project.href} className="relative h-64 block overflow-hidden">
//                       <Image 
//                         src={project.image || "/placeholder.svg"} 
//                         alt={project.name} 
//                         layout="fill" 
//                         objectFit="cover" 
//                         className="group-hover:scale-105 transition-transform duration-500" 
//                       />
//                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
//                       <div className="absolute top-4 left-4">
//                          <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide border border-gold-500">
//                             {project.status}
//                          </span>
//                       </div>
//                     </Link>

//                     {/* Content Section */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="mb-4">
//                            <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">{project.type}</p>
//                            <Link href={project.href}>
//                              <h3 className="text-xl font-bold text-black group-hover:text-gold-600 transition-colors">{project.name}</h3>
//                            </Link>
//                       </div>
                      
//                       {/* --- POSSESSION TIMELINE --- */}
//                       <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
//                         <div className="flex items-start gap-2">
//                            <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
//                            <div>
//                               <p className="text-sm font-bold text-gray-900">{project.possession}</p>
//                            </div>
//                         </div>
//                       </div>

//                       {/* Details Grid */}
//                       <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-gray-100 py-4">
//                         <div className="flex flex-col">
//                             <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
//                                 <MapPin className="h-3 w-3 mr-1" /> Location
//                             </div>
//                             <span className="text-sm font-medium text-black truncate" title={project.location}>{project.location}</span>
//                         </div>

//                         {/* Hide Config for Commercial if null */}
//                         {project.config && (
//                             <div className="flex flex-col">
//                                 <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
//                                     <Home className="h-3 w-3 mr-1" /> Config
//                                 </div>
//                                 <span className="text-sm font-medium text-black">{project.config}</span>
//                             </div>
//                         )}

//                         {/* Hide Acres for Commercial if null */}
//                         {project.acres && (
//                             <div className="flex flex-col">
//                                 <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
//                                     <Maximize className="h-3 w-3 mr-1" /> Area
//                                 </div>
//                                 <span className="text-sm font-medium text-black">{project.acres}</span>
//                             </div>
//                         )}

//                         {/* Hide Units for Commercial if null */}
//                         {project.units && (
//                             <div className="flex flex-col">
//                                 <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
//                                     <Target className="h-3 w-3 mr-1" /> Total Units
//                                 </div>
//                                 <span className="text-sm font-medium text-black">{project.units}</span>
//                             </div>
//                         )}
//                       </div>

//                       <div className="mt-auto flex gap-2">
//                          {/* WhatsApp Button */}
//                          <a 
//                            href="https://wa.me/918494966966"
//                            target="_blank"
//                            rel="noreferrer"
//                            className="flex-none flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all bg-white shadow-sm"
//                            title="Chat on WhatsApp"
//                          >
//                             <WhatsAppIcon className="h-5 w-5" />
//                          </a>

//                          {/* Call Button */}
//                          <a 
//                            href="tel:+918494966966"
//                            className="flex-none flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-black hover:border-black hover:text-white transition-all bg-white shadow-sm"
//                            title="Call Us"
//                          >
//                             <Phone className="h-4 w-4" />
//                          </a>

//                         {/* View Details Button */}
//                         <Link href={project.href} className="flex-1">
//                             <button className="w-full h-10 bg-black text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
//                                 Details
//                                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                             </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
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

import { 
  Building, 
  MapPin, 
  Home, 
  ArrowRight, 
  CalendarClock, 
  CheckCircle2, 
  Maximize, 
  Target, 
  MessageCircle, 
  Phone, 
  Award,
  Sparkles,      // Added for the new banner
  UserCheck      // Added for the Channel Partner button
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

// Updated Project Data with strict instructions
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const projects = [
  { 
    name: "RRL Palm Altezze", 
    location: "Varthur, Bangalore", 
    type: "Premium Apartment", 
    status: "Open For Booking", 
    image: "/LookProject1.jpeg", 
    href: "/projects/palm-altezze",
    acres: "1 acre 38 Guntas",
    units: "115 Units",
    config: "2, 3 BHK",
    possession: "Possession: 2027"
  },
  { 
    name: "RRL Code Name - NC 216", 
    location: "Sarjapur, Bangalore", 
    type: "Premium Apartment", 
    status: "BOOKING OPEN SOON", 
    image: "/Sequoia.jpg", 
    href: "/projects/sequoia", 
    acres: "2.01 Acres",
    units: "216 Units",
    config: "2, 3 BHK",
    possession: "Booking Open Soon"
  },
  { 
    name: "RRL Palacio", 
    location: "Medahalli, Bangalore", 
    type: "Luxury Apartment", 
    status: "READY TO MOVE", 
    image: "/LookProject2.jpeg",
    href: "/projects/palacio",
    acres: "1.5 Acres",
    units: "103 Units",
    config: "2, 3 BHK",
    possession: "Early possession granted"
  },
  { 
    name: "RRL Nature Woods", 
    location: "Sarjapur, Bangalore", 
    type: "Premium Apartment", 
    status: "Completed", 
    image: "/LookProject5.jpeg",
    href: "/projects/nature-woods",
    acres: "1.5 Acres",
    units: "148 Units",
    config: "2, 3 BHK",
    possession: "Early possession granted"
  },
  { 
    name: "RRL Towers", 
    location: "Sarjapur", 
    type: "Commercial Complex", 
    status: "OPERATIONAL", 
    image: "/Tower.jpeg",
    href: "/projects/towers",
    acres: null,
    units: null,
    config: null,
    possession: "Operational"
  },
  { 
    name: "RRL Complex", 
    location: "Attibele Sarjapur Road", 
    type: "Commercial Project", 
    status: "COMPLETED", 
    image: "/complex.jpg", 
    href: "/projects/oasis", 
    acres: null,
    units: null,
    config: null,
    possession: "Commercial Project"
  },
];

const features = [
  { icon: Building, title: "RRL Palm Altezze", description: "High-rise apartment in a premium location." },
    {
    icon: CalendarClock,
    title: "RRL Code Name - NC 216",
    description: "Exciting new project – Booking Open Soon",
  },
  { icon: Home, title: "RRL Palacio", description: "Furnished smart homes with modern comforts." },
  { icon: Award, title: "RRL Nature Woods", description: "High-end, award-winning amenities." },
];

export default function ProjectsPage() {
  return (
    <>
      {/* --- HERO SECTION --- */}
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

      {/* --- NEW: PALM ALTEZZE FEATURE BANNER --- */}
      <section className="relative bg-zinc-900 overflow-hidden py-16 lg:py-24">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 transform translate-x-12" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
                <Image 
                  src="/LookProject1.jpeg" 
                  alt="Palm Altezze Premium View"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md border border-gold-500 px-6 py-3 rounded-lg">
                  <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-white font-bold text-lg">Just Launched</p>
                </div>
              </div>
              {/* Decorative gold box behind */}
              <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-gold-500/20 rounded-2xl" />
            </motion.div>

            {/* Right: Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-gold-500 h-5 w-5" />
                <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">Signature Collection</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-playfair mb-6 leading-tight">
                RRL Palm <span className="text-gold-500">Altezze</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Experience the pinnacle of luxury living in Varthur. 
                Featuring 2 & 3 BHK premium apartments spread across 2 acres 
                with world-class amenities and breathtaking skylines.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link href="/projects/palm-altezze">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gold-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/10">
                    Explore Project <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>

                {/* --- UNIQUE CHANNEL PARTNER BUTTON --- */}
                <div className="relative group">
                   {/* Gradient Border Effect */}
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-300 to-yellow-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                   <button className="relative px-6 py-3.5 bg-black rounded-full leading-none flex items-center gap-3">
                     <span className="flex items-center justify-center bg-gold-500 rounded-full p-1">
                       <UserCheck className="w-4 h-4 text-black" /> 
                     </span>
                     <div className="text-left">
                       <span className="block text-[14px] text-gray-400 uppercase tracking-wider font-bold">Business Associate</span>
                       {/* <span className="text-gold-100 font-semibold text-sm">DesignHive Exclusive</span> */}
                     </div>
                   </button>
                </div>
              </div>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-10 border-t border-gray-800 pt-6">
                <div>
                   <h4 className="text-gold-500 font-bold text-xl">2</h4>
                   <p className="text-gray-500 text-xs uppercase">Acres</p>
                </div>
                <div>
                   <h4 className="text-gold-500 font-bold text-xl">115</h4>
                   <p className="text-gray-500 text-xs uppercase">Units</p>
                </div>
                <div>
                   <h4 className="text-gold-500 font-bold text-xl">2028</h4>
                   <p className="text-gray-500 text-xs uppercase">Possession</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
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
                <div className="block h-full relative">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-gold-500/50">
                    
                    {/* Link Wrap for Image */}
                    <Link href={project.href} className="relative h-64 block overflow-hidden">
                      <Image 
                        src={project.image || "/placeholder.svg"} 
                        alt={project.name} 
                        layout="fill" 
                        objectFit="cover" 
                        className="group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 left-4">
                         <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide border border-gold-500">
                            {project.status}
                         </span>
                      </div>
                    </Link>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                           <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">{project.type}</p>
                           <Link href={project.href}>
                             <h3 className="text-xl font-bold text-black group-hover:text-gold-600 transition-colors">{project.name}</h3>
                           </Link>
                      </div>
                      
                      {/* --- POSSESSION TIMELINE --- */}
                      <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
                        <div className="flex items-start gap-2">
                           <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
                           <div>
                              <p className="text-sm font-bold text-gray-900">{project.possession}</p>
                           </div>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-gray-100 py-4">
                        <div className="flex flex-col">
                            <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
                                <MapPin className="h-3 w-3 mr-1" /> Location
                            </div>
                            <span className="text-sm font-medium text-black truncate" title={project.location}>{project.location}</span>
                        </div>

                        {/* Hide Config for Commercial if null */}
                        {project.config && (
                            <div className="flex flex-col">
                                <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
                                    <Home className="h-3 w-3 mr-1" /> Config
                                </div>
                                <span className="text-sm font-medium text-black">{project.config}</span>
                            </div>
                        )}

                        {/* Hide Acres for Commercial if null */}
                        {project.acres && (
                            <div className="flex flex-col">
                                <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
                                    <Maximize className="h-3 w-3 mr-1" /> Area
                                </div>
                                <span className="text-sm font-medium text-black">{project.acres}</span>
                            </div>
                        )}

                        {/* Hide Units for Commercial if null */}
                        {project.units && (
                            <div className="flex flex-col">
                                <div className="flex items-center text-gray-500 text-xs uppercase tracking-wide mb-1">
                                    <Target className="h-3 w-3 mr-1" /> Total Units
                                </div>
                                <span className="text-sm font-medium text-black">{project.units}</span>
                            </div>
                        )}
                      </div>

                      <div className="mt-auto flex gap-2">
                         {/* WhatsApp Button */}
                         <a 
                           href="https://wa.me/918494966966"
                           target="_blank"
                           rel="noreferrer"
                           className="flex-none flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all bg-white shadow-sm"
                           title="Chat on WhatsApp"
                         >
                            <WhatsAppIcon className="h-5 w-5" />
                         </a>

                         {/* Call Button */}
                         <a 
                           href="tel:+918494966966"
                           className="flex-none flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-black hover:border-black hover:text-white transition-all bg-white shadow-sm"
                           title="Call Us"
                         >
                            <Phone className="h-4 w-4" />
                         </a>

                        {/* View Details Button */}
                        <Link href={project.href} className="flex-1">
                            <button className="w-full h-10 bg-black text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                Details
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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