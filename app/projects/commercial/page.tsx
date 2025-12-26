// // "use client"

// // import React, { useState } from "react"
// // import { motion, AnimatePresence, Variants } from "framer-motion"
// // import { 
// //   Building2, MapPin, Phone, CheckCircle2, ArrowRight, 
// //   Menu, X, Smartphone, User, Mail, Star, ShieldCheck, Zap
// // } from "lucide-react"

// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import { Card } from "@/components/ui/card"
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog"

// // // --- Data ---
// // const projects = [
// //   {
// //     id: "rrl-towers",
// //     name: "RRL Towers",
// //     subtitle: "Premium Commercial Space in Sarjapur Attibele",
// //     description: "The flagship commercial tower of RRL Groups, established in 1996 and renovated to modern standards. A hub for government offices and corporate entities.",
// //     status: "Completed",
// //     image: "/Tower.jpeg", // Ensure this path exists in public folder
// //     tags: ["Corporate Office", "Sub Registrar Office", "SMEs"],
// //     features: [
// //       "Located on the premium Sarjapur-Marathahalli belt",
// //       "High rental demand & 27% YoY growth",
// //       "Proximity to Columbia Asia & Dr. Levine Hospital",
// //       "Houses RRL Corporate Office & Government bodies"
// //     ],
// //     location: {
// //       address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru",
// //       contact: "+91-7337816996"
// //     }
// //   },
// //   {
// //     id: "rrl-complex",
// //     name: "RRL Complex",
// //     subtitle: "Commercial Hub in Bidaraguppa",
// //     description: "Our 18th commercial milestone. A commodious complex designed to host diverse businesses ranging from retail outlets like Mayura Bakery to fitness centers.",
// //     status: "Completed",
// //     image: "/complex.jpg", // Ensure this path exists in public folder
// //     tags: ["Retail Hub", "Fitness Centers", "Ample Parking"],
// //     features: [
// //       "Strategic location on Sarjapur Attibele Road",
// //       "Rated 5/5 for connectivity by residents",
// //       "Direct access to Electronic City via NH-44",
// //       "Pet-friendly spaces & ample visitor parking"
// //     ],
// //     location: {
// //       address: "SY NO - 269, BIDURGUPPA VILLAGE, RRL COMPLEX, Sarjapur Attibele Rd, Bengaluru",
// //       contact: "+91-7337816996"
// //     }
// //   }
// // ]

// // // --- Animations ---
// // // Fixed: Added 'Variants' type annotation to solve the build error
// // const fadeIn: Variants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// // }

// // const staggerContainer: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
// // }

// // export default function CommercialPage() {
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [selectedProject, setSelectedProject] = useState<string | null>(null)

// //   const handleEnquiry = (projectName: string) => {
// //     setSelectedProject(projectName)
// //     setIsModalOpen(true)
// //   }

// //   const handleFormSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     alert("Thank you! We will connect with you shortly.")
// //     setIsModalOpen(false)
// //   }

// //   return (
// //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
      
// //       {/* --- Navigation --- */}
// //       <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
// //          <div className="container mx-auto px-4 flex justify-between items-center">
// //             <div className="text-2xl font-bold tracking-tighter">
// //                RRL <span className="text-[#d9a406]">Commercial</span>
// //             </div>
// //             <Button 
// //                variant="outline" 
// //                className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
// //                onClick={() => handleEnquiry("General Enquiry")}
// //             >
// //                List Your Business
// //             </Button>
// //             <button className="md:hidden text-white" onClick={() => handleEnquiry("General Enquiry")}>
// //                <Menu />
// //             </button>
// //          </div>
// //       </nav>

// //       {/* --- Hero Section --- */}
// //       <section className="relative pt-32 pb-20 overflow-hidden">
// //         {/* Abstract Background */}
// //         <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-black to-black opacity-70"></div>
        
// //         <div className="container mx-auto px-4 relative z-10 text-center">
// //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //             <motion.div variants={fadeIn}>
// //               <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] mb-6 px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">
// //                 Business & Retail Spaces
// //               </Badge>
// //             </motion.div>
            
// //             <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
// //               Prime Spaces for <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">
// //                 Limitless Growth
// //               </span>
// //             </motion.h1>
            
// //             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
// //               Strategically located commercial properties in Bangalore's thriving corridors. 
// //               Designed for visibility, connectivity, and success.
// //             </motion.p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* --- Projects List --- */}
// //       <section className="py-10 pb-32">
// //         <div className="container mx-auto px-4 space-y-32">
// //           {projects.map((project, index) => (
// //             <motion.div 
// //               key={project.id}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true, amount: 0.2 }}
// //               variants={staggerContainer}
// //               className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
// //             >
              
// //               {/* Image Side */}
// //               <motion.div 
// //                 variants={fadeIn}
// //                 className={`relative h-[500px] rounded-2xl overflow-hidden group border border-white/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
// //               >
// //                 <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder while loading */}
// //                 <img 
// //                   src={project.image} 
// //                   alt={project.name}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
// //                 {/* Floating Status Badge */}
// //                 <div className="absolute top-6 left-6">
// //                    <div className="bg-black/60 backdrop-blur-md border border-[#d9a406]/50 text-[#d9a406] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
// //                       <Star className="w-4 h-4 fill-[#d9a406]" /> {project.status}
// //                    </div>
// //                 </div>
// //               </motion.div>

// //               {/* Content Side */}
// //               <motion.div variants={fadeIn} className="space-y-8">
// //                 <div>
// //                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{project.name}</h2>
// //                   <p className="text-[#d9a406] text-xl font-medium mb-6">{project.subtitle}</p>
// //                   <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
// //                     {project.description}
// //                   </p>
// //                 </div>

// //                 {/* Features Grid */}
// //                 <div className="grid sm:grid-cols-2 gap-4">
// //                   {project.features.map((feature, idx) => (
// //                     <div key={idx} className="flex items-start gap-3 group">
// //                       <div className="mt-1 w-5 h-5 rounded-full bg-[#d9a406]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d9a406] transition-colors">
// //                         <CheckCircle2 className="w-3 h-3 text-[#d9a406] group-hover:text-black" />
// //                       </div>
// //                       <span className="text-gray-300 text-sm">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Location & CTA Box */}
// //                 <Card className="bg-[#111] border border-white/10 p-6 rounded-xl mt-8">
// //                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
// //                       <div className="space-y-3">
// //                          <div className="flex items-start gap-3">
// //                             <MapPin className="w-5 h-5 text-[#d9a406] shrink-0" />
// //                             <p className="text-sm text-gray-400">{project.location.address}</p>
// //                          </div>
// //                          <div className="flex items-center gap-3">
// //                             <Phone className="w-5 h-5 text-[#d9a406] shrink-0" />
// //                             <p className="text-sm text-gray-400">{project.location.contact}</p>
// //                          </div>
// //                       </div>
// //                       <Button 
// //                         size="lg"
// //                         className="w-full md:w-auto bg-[#d9a406] hover:bg-[#b08505] text-black font-bold whitespace-nowrap"
// //                         onClick={() => handleEnquiry(project.name)}
// //                       >
// //                         Enquire Space
// //                       </Button>
// //                    </div>
// //                 </Card>

// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* --- Why Choose Us (Dark Grid) --- */}
// //       <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
// //         <div className="container mx-auto px-4">
// //            <div className="text-center mb-16">
// //               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why <span className="text-[#d9a406]">RRL Commercial?</span></h2>
// //               <p className="text-gray-400">Setting the benchmark for commercial infrastructure in Bangalore South.</p>
// //            </div>
           
// //            <div className="grid md:grid-cols-3 gap-8">
// //               {[
// //                  { icon: ShieldCheck, title: "Trusted Legacy", desc: "Over 18 successful commercial projects delivered with excellence." },
// //                  { icon: MapPin, title: "Strategic Locations", desc: "Properties located in high-growth corridors ensuring maximum footfall." },
// //                  { icon: Zap, title: "Modern Amenities", desc: "Power backup, ample parking, and automated systems for seamless operations." }
// //               ].map((item, i) => (
// //                  <motion.div 
// //                     key={i}
// //                     whileHover={{ y: -10 }}
// //                     className="bg-black border border-white/10 p-8 rounded-2xl text-center hover:border-[#d9a406]/50 transition-colors group"
// //                  >
// //                     <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d9a406] transition-colors">
// //                        <item.icon className="w-8 h-8 text-[#d9a406] group-hover:text-black" />
// //                     </div>
// //                     <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
// //                     <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// //                  </motion.div>
// //               ))}
// //            </div>
// //         </div>
// //       </section>

// //       {/* --- Footer CTA --- */}
// //       <section className="py-24 relative overflow-hidden">
// //          <div className="absolute inset-0 bg-[#d9a406] opacity-90"></div>
// //          <div className="container mx-auto px-4 text-center relative z-10">
// //             <h2 className="text-4xl font-bold text-black mb-6">Start Your Business Journey Here</h2>
// //             <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
// //                Join the league of successful businesses at RRL Properties. Contact us today for a site visit.
// //             </p>
// //             <Button 
// //                size="lg" 
// //                className="bg-black text-white hover:bg-gray-900 font-bold px-10 py-6 text-lg rounded-full"
// //                onClick={() => handleEnquiry("Property")}
// //             >
// //                Contact Sales Team
// //             </Button>
// //          </div>
// //       </section>

// //       {/* --- Modal --- */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div 
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setIsModalOpen(false)}
// //           >
// //             <motion.div 
// //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button 
// //                 onClick={() => setIsModalOpen(false)}
// //                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
// //               >
// //                 <X className="w-6 h-6" />
// //               </button>
              
// //               <div className="text-center mb-8">
// //                  <h3 className="text-2xl font-bold text-white mb-2">Enquire about <span className="text-[#d9a406]">{selectedProject}</span></h3>
// //                  <p className="text-gray-400 text-sm">Fill the details below to get a callback.</p>
// //               </div>

// //               <form onSubmit={handleFormSubmit} className="space-y-4">
// //                 <div className="space-y-2">
// //                    <div className="relative">
// //                       <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
// //                       <input type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" required />
// //                    </div>
// //                 </div>
// //                 <div className="space-y-2">
// //                    <div className="relative">
// //                       <Smartphone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
// //                       <input type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" required />
// //                    </div>
// //                 </div>
// //                 <div className="space-y-2">
// //                    <div className="relative">
// //                       <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
// //                       <input type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" required />
// //                    </div>
// //                 </div>
// //                 <Button className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4">
// //                   Submit Enquiry
// //                 </Button>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //     </main>
// //   )
// // }

// "use client"

// import React, { useState } from "react"
// import { motion, AnimatePresence, Variants } from "framer-motion"
// import { 
//   Building2, MapPin, Phone, CheckCircle2, ArrowRight, 
//   Menu, X, Smartphone, User, Mail, Star, ShieldCheck, Zap,
//   Loader2, // Added for loading state
//   CheckCircle // Added for success state
// } from "lucide-react"

// // 1. Import Formspree
// import { useForm, ValidationError } from '@formspree/react';

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card } from "@/components/ui/card"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// // --- Data ---
// const projects = [
//   {
//     id: "rrl-towers",
//     name: "RRL Towers",
//     subtitle: "Premium Commercial Space in Sarjapur Attibele",
//     description: "The flagship commercial tower of RRL Groups, established in 1996 and renovated to modern standards. A hub for government offices and corporate entities.",
//     status: "Completed",
//     image: "/Tower.jpeg", // Ensure this path exists in public folder
//     tags: ["Corporate Office", "Sub Registrar Office", "SMEs"],
//     features: [
//       "Located on the premium Sarjapur-Marathahalli belt",
//       "High rental demand & 27% YoY growth",
//       "Proximity to Columbia Asia & Dr. Levine Hospital",
//       "Houses RRL Corporate Office & Government bodies"
//     ],
//     location: {
//       address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru",
//       contact: "+91-7337816996"
//     }
//   },
//   {
//     id: "rrl-complex",
//     name: "RRL Complex",
//     subtitle: "Commercial Hub in Bidaraguppa",
//     description: "Our 18th commercial milestone. A commodious complex designed to host diverse businesses ranging from retail outlets like Mayura Bakery to fitness centers.",
//     status: "Completed",
//     image: "/complex.jpg", // Ensure this path exists in public folder
//     tags: ["Retail Hub", "Fitness Centers", "Ample Parking"],
//     features: [
//       "Strategic location on Sarjapur Attibele Road",
//       "Rated 5/5 for connectivity by residents",
//       "Direct access to Electronic City via NH-44",
//       "Pet-friendly spaces & ample visitor parking"
//     ],
//     location: {
//       address: "SY NO - 269, BIDURGUPPA VILLAGE, RRL COMPLEX, Sarjapur Attibele Rd, Bengaluru",
//       contact: "+91-7337816996"
//     }
//   }
// ]

// // --- Animations ---
// const fadeIn: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// }

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
// }

// export default function CommercialPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedProject, setSelectedProject] = useState<string | null>(null)

//   // 2. Formspree Configuration
//   // REPLACE "YOUR_FORMSPREE_FORM_ID" with your actual Form ID
//   const [state, handleSubmit] = useForm("xqezwved");

//   const handleEnquiry = (projectName: string) => {
//     setSelectedProject(projectName)
//     setIsModalOpen(true)
//   }

//   return (
//     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
      
//       {/* --- Navigation --- */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
//          <div className="container mx-auto px-4 flex justify-between items-center">
//             <div className="text-2xl font-bold tracking-tighter">
//                RRL <span className="text-[#d9a406]">Commercial</span>
//             </div>
//             <Button 
//                variant="outline" 
//                className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
//                onClick={() => handleEnquiry("General Enquiry")}
//             >
//                List Your Business
//             </Button>
//             <button className="md:hidden text-white" onClick={() => handleEnquiry("General Enquiry")}>
//                <Menu />
//             </button>
//          </div>
//       </nav>

//       {/* --- Hero Section --- */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         {/* Abstract Background */}
//         <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-black to-black opacity-70"></div>
        
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.div variants={fadeIn}>
//               <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] mb-6 px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">
//                 Business & Retail Spaces
//               </Badge>
//             </motion.div>
            
//             <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               Prime Spaces for <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">
//                 Limitless Growth
//               </span>
//             </motion.h1>
            
//             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
//               Strategically located commercial properties in Bangalore's thriving corridors. 
//               Designed for visibility, connectivity, and success.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- Projects List --- */}
//       <section className="py-10 pb-32">
//         <div className="container mx-auto px-4 space-y-32">
//           {projects.map((project, index) => (
//             <motion.div 
//               key={project.id}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={staggerContainer}
//               className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
//             >
              
//               {/* Image Side */}
//               <motion.div 
//                 variants={fadeIn}
//                 className={`relative h-[500px] rounded-2xl overflow-hidden group border border-white/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
//               >
//                 <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder while loading */}
//                 <img 
//                   src={project.image} 
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
//                 {/* Floating Status Badge */}
//                 <div className="absolute top-6 left-6">
//                    <div className="bg-black/60 backdrop-blur-md border border-[#d9a406]/50 text-[#d9a406] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
//                       <Star className="w-4 h-4 fill-[#d9a406]" /> {project.status}
//                    </div>
//                 </div>
//               </motion.div>

//               {/* Content Side */}
//               <motion.div variants={fadeIn} className="space-y-8">
//                 <div>
//                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{project.name}</h2>
//                   <p className="text-[#d9a406] text-xl font-medium mb-6">{project.subtitle}</p>
//                   <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {project.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-3 group">
//                       <div className="mt-1 w-5 h-5 rounded-full bg-[#d9a406]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d9a406] transition-colors">
//                         <CheckCircle2 className="w-3 h-3 text-[#d9a406] group-hover:text-black" />
//                       </div>
//                       <span className="text-gray-300 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Location & CTA Box */}
//                 <Card className="bg-[#111] border border-white/10 p-6 rounded-xl mt-8">
//                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
//                       <div className="space-y-3">
//                          <div className="flex items-start gap-3">
//                             <MapPin className="w-5 h-5 text-[#d9a406] shrink-0" />
//                             <p className="text-sm text-gray-400">{project.location.address}</p>
//                          </div>
//                          <div className="flex items-center gap-3">
//                             <Phone className="w-5 h-5 text-[#d9a406] shrink-0" />
//                             <p className="text-sm text-gray-400">{project.location.contact}</p>
//                          </div>
//                       </div>
//                       <Button 
//                         size="lg"
//                         className="w-full md:w-auto bg-[#d9a406] hover:bg-[#b08505] text-black font-bold whitespace-nowrap"
//                         onClick={() => handleEnquiry(project.name)}
//                       >
//                         Enquire Space
//                       </Button>
//                    </div>
//                 </Card>

//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- Why Choose Us (Dark Grid) --- */}
//       <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
//         <div className="container mx-auto px-4">
//            <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why <span className="text-[#d9a406]">RRL Commercial?</span></h2>
//               <p className="text-gray-400">Setting the benchmark for commercial infrastructure in Bangalore South.</p>
//            </div>
           
//            <div className="grid md:grid-cols-3 gap-8">
//               {[
//                  { icon: ShieldCheck, title: "Trusted Legacy", desc: "Over 18 successful commercial projects delivered with excellence." },
//                  { icon: MapPin, title: "Strategic Locations", desc: "Properties located in high-growth corridors ensuring maximum footfall." },
//                  { icon: Zap, title: "Modern Amenities", desc: "Power backup, ample parking, and automated systems for seamless operations." }
//               ].map((item, i) => (
//                  <motion.div 
//                     key={i}
//                     whileHover={{ y: -10 }}
//                     className="bg-black border border-white/10 p-8 rounded-2xl text-center hover:border-[#d9a406]/50 transition-colors group"
//                  >
//                     <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d9a406] transition-colors">
//                        <item.icon className="w-8 h-8 text-[#d9a406] group-hover:text-black" />
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//                  </motion.div>
//               ))}
//            </div>
//         </div>
//       </section>

//       {/* --- Footer CTA --- */}
//       <section className="py-24 relative overflow-hidden">
//          <div className="absolute inset-0 bg-[#d9a406] opacity-90"></div>
//          <div className="container mx-auto px-4 text-center relative z-10">
//             <h2 className="text-4xl font-bold text-black mb-6">Start Your Business Journey Here</h2>
//             <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
//                Join the league of successful businesses at RRL Properties. Contact us today for a site visit.
//             </p>
//             <Button 
//                size="lg" 
//                className="bg-black text-white hover:bg-gray-900 font-bold px-10 py-6 text-lg rounded-full"
//                onClick={() => handleEnquiry("Property")}
//             >
//                Contact Sales Team
//             </Button>
//          </div>
//       </section>

//       {/* --- Modal --- */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div 
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsModalOpen(false)}
//           >
//             <motion.div 
//               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
              
//               {state.succeeded ? (
//                 <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-500">
//                   <CheckCircle className="w-16 h-16 text-[#d9a406] mb-4" />
//                   <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
//                   <p className="text-gray-400 mb-6">We will get back to you shortly regarding {selectedProject}.</p>
//                   <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Close</Button>
//                 </div>
//               ) : (
//                 <>
//                   <div className="text-center mb-8">
//                      <h3 className="text-2xl font-bold text-white mb-2">Enquire about <span className="text-[#d9a406]">{selectedProject}</span></h3>
//                      <p className="text-gray-400 text-sm">Fill the details below to get a callback.</p>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <input type="hidden" name="project" value={selectedProject || "General Enquiry"} />
                    
//                     <div className="space-y-2">
//                        <div className="relative">
//                           <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//                           <input 
//                             name="name" // Added Name
//                             type="text" 
//                             placeholder="Your Name" 
//                             className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
//                             required 
//                           />
//                        </div>
//                     </div>
//                     <div className="space-y-2">
//                        <div className="relative">
//                           <Smartphone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//                           <input 
//                             name="phone" // Added Name
//                             type="tel" 
//                             placeholder="Phone Number" 
//                             className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
//                             required 
//                           />
//                        </div>
//                     </div>
//                     <div className="space-y-2">
//                        <div className="relative">
//                           <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//                           <input 
//                             name="email" // Added Name
//                             type="email" 
//                             placeholder="Email Address" 
//                             className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
//                             required 
//                           />
//                           <ValidationError prefix="Email" field="email" errors={state.errors} />
//                        </div>
//                     </div>
//                     <Button 
//                       type="submit" 
//                       disabled={state.submitting} 
//                       className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4"
//                     >
//                       {state.submitting ? (
//                         <>
//                           <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
//                         </>
//                       ) : (
//                         "Submit Enquiry"
//                       )}
//                     </Button>
//                   </form>
//                 </>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   )
// }

"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { 
  Building2, MapPin, Phone, CheckCircle2, ArrowRight, 
  Menu, X, Smartphone, User, Mail, Star, ShieldCheck, Zap,
  Loader2,
  CheckCircle 
} from "lucide-react"

// 1. Import Formspree
import { useForm, ValidationError } from '@formspree/react';

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// --- Data ---
const projects = [
  {
    id: "rrl-towers",
    name: "RRL Towers",
    subtitle: "Premium Commercial Space in Sarjapur Attibele",
    description: "The flagship commercial tower of RRL Groups, established in 1996 and renovated to modern standards. A hub for government offices and corporate entities.",
    status: "Completed",
    // DESKTOP IMAGE
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766051626/RRL_Towers_k9ksfq.png", 
    // MOBILE IMAGE (Update this path)
    mobileImage: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766572119/RRL_Towers_1_vezxyt.png", 
    tags: ["Corporate Office", "Sub Registrar Office", "SMEs"],
    features: [
      "Located on the premium Sarjapur-Marathahalli belt",
      "High rental demand & 27% YoY growth",
      "Proximity to Columbia Asia & Dr. Levine Hospital",
      "Houses RRL Corporate Office & Government bodies"
    ],
    location: {
      address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru",
      contact: "+91-7337816996"
    }
  },
  {
    id: "rrl-complex",
    name: "RRL Complex",
    subtitle: "Commercial Hub in Bidaraguppa",
    description: "Our 18th commercial milestone. A commodious complex designed to host diverse businesses ranging from retail outlets like Mayura Bakery to fitness centers.",
    status: "Completed",
    // DESKTOP IMAGE
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766051626/RRL_Complex_cogjaw.png", 
    // MOBILE IMAGE (Update this path)
    mobileImage: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766572121/RRL_Complex_1_yrbmhw.png",
    tags: ["Retail Hub", "Fitness Centers", "Ample Parking"],
    features: [
      "Strategic location on Sarjapur Attibele Road",
      "Rated 5/5 for connectivity by residents",
      "Direct access to Electronic City via NH-44",
      "Pet-friendly spaces & ample visitor parking"
    ],
    location: {
      address: "SY NO - 269, BIDURGUPPA VILLAGE, RRL COMPLEX, Sarjapur Attibele Rd, Bengaluru",
      contact: "+91-7337816996"
    }
  }
]

// --- Animations ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

export default function CommercialPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // 2. Formspree Configuration
  const [state, handleSubmit] = useForm("xqezwved");

  const handleEnquiry = (projectName: string) => {
    setSelectedProject(projectName)
    setIsModalOpen(true)
  }

  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
               RRL <span className="text-[#d9a406]">Commercial</span>
            </div>
            <Button 
               variant="outline" 
               className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
               onClick={() => handleEnquiry("General Enquiry")}
            >
               List Your Business
            </Button>
            <button className="md:hidden text-white" onClick={() => handleEnquiry("General Enquiry")}>
               <Menu />
            </button>
         </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-black to-black opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] mb-6 px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">
                Business & Retail Spaces
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Prime Spaces for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">
                Limitless Growth
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Strategically located commercial properties in Bangalore's thriving corridors. 
              Designed for visibility, connectivity, and success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- Projects List --- */}
      <section className="py-10 pb-32">
        <div className="container mx-auto px-4 space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              
              {/* Image Side */}
              <motion.div 
                variants={fadeIn}
                className={`relative h-[500px] rounded-2xl overflow-hidden group border border-white/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder while loading */}
                
                {/* --- MOBILE IMAGE (Visible on small screens) --- */}
                <img 
                  src={project.mobileImage || project.image} 
                  alt={project.name}
                  className="block md:hidden w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* --- DESKTOP IMAGE (Visible on medium screens and up) --- */}
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="hidden md:block w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* Floating Status Badge */}
                <div className="absolute top-6 left-6">
                   <div className="bg-black/60 backdrop-blur-md border border-[#d9a406]/50 text-[#d9a406] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-[#d9a406]" /> {project.status}
                   </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div variants={fadeIn} className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{project.name}</h2>
                  <p className="text-[#d9a406] text-xl font-medium mb-6">{project.subtitle}</p>
                  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                    {project.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#d9a406]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d9a406] transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-[#d9a406] group-hover:text-black" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Location & CTA Box */}
                <Card className="bg-[#111] border border-white/10 p-6 rounded-xl mt-8">
                   <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                      <div className="space-y-3">
                         <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#d9a406] shrink-0" />
                            <p className="text-sm text-gray-400">{project.location.address}</p>
                         </div>
                         <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#d9a406] shrink-0" />
                            <p className="text-sm text-gray-400">{project.location.contact}</p>
                         </div>
                      </div>
                      <Button 
                        size="lg"
                        className="w-full md:w-auto bg-[#d9a406] hover:bg-[#b08505] text-black font-bold whitespace-nowrap"
                        onClick={() => handleEnquiry(project.name)}
                      >
                        Enquire Space
                      </Button>
                   </div>
                </Card>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Why Choose Us (Dark Grid) --- */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why <span className="text-[#d9a406]">RRL Commercial?</span></h2>
              <p className="text-gray-400">Setting the benchmark for commercial infrastructure in Bangalore South.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                 { icon: ShieldCheck, title: "Trusted Legacy", desc: "Over 18 successful commercial projects delivered with excellence." },
                 { icon: MapPin, title: "Strategic Locations", desc: "Properties located in high-growth corridors ensuring maximum footfall." },
                 { icon: Zap, title: "Modern Amenities", desc: "Power backup, ample parking, and automated systems for seamless operations." }
              ].map((item, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-black border border-white/10 p-8 rounded-2xl text-center hover:border-[#d9a406]/50 transition-colors group"
                 >
                    <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d9a406] transition-colors">
                       <item.icon className="w-8 h-8 text-[#d9a406] group-hover:text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[#d9a406] opacity-90"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-black mb-6">Start Your Business Journey Here</h2>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
               Join the league of successful businesses at RRL Properties. Contact us today for a site visit.
            </p>
            <Button 
               size="lg" 
               className="bg-black text-white hover:bg-gray-900 font-bold px-10 py-6 text-lg rounded-full"
               onClick={() => handleEnquiry("Property")}
            >
               Contact Sales Team
            </Button>
         </div>
      </section>

      {/* --- Modal --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle className="w-16 h-16 text-[#d9a406] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                  <p className="text-gray-400 mb-6">We will get back to you shortly regarding {selectedProject}.</p>
                  <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Close</Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                     <h3 className="text-2xl font-bold text-white mb-2">Enquire about <span className="text-[#d9a406]">{selectedProject}</span></h3>
                     <p className="text-gray-400 text-sm">Fill the details below to get a callback.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="project" value={selectedProject || "General Enquiry"} />
                    
                    <div className="space-y-2">
                       <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <input 
                            name="name" 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                            required 
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="relative">
                          <Smartphone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <input 
                            name="phone" 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                            required 
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <input 
                            name="email" 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                            required 
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                       </div>
                    </div>
                    <Button 
                      type="submit" 
                      disabled={state.submitting} 
                      className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                        </>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}