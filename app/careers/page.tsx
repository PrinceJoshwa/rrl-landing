// // "use client"

// // import { useState } from "react"
// // import { motion } from "framer-motion"
// // import { Upload, Briefcase, Users, Heart, ArrowRight, Send, CheckCircle } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import Image from "next/image"

// // export default function CareersPage() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     role: "",
// //     intro: "",
// //   })

// //   const openRoles = [
// //     { title: "Sales Executive", type: "Full Time", location: "Bangalore" },
// //     { title: "Marketing Manager", type: "Full Time", location: "Bangalore" },
// //     { title: "Site Engineer", type: "Full Time", location: "Sarjapur/Varthur" },
// //     { title: "Site Supervisor", type: "Full Time", location: "Sarjapur/Varthur" },
// //   ]

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     alert("Application Submitted! (Integrate Formspree here)")
// //   }

// //   return (
// //     <div className="bg-black min-h-screen text-white">
// //       {/* 1. HERO SECTION */}
// //       <section className="relative py-24 overflow-hidden">
// //         <div className="absolute inset-0 bg-grid-white/[0.05]" />
// //         {/* Gold Glow */}
// //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/20 blur-[120px] rounded-full pointer-events-none" />
        
// //         <div className="container mx-auto px-4 relative z-10 text-center">
// //           <motion.h1 
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-5xl md:text-7xl font-playfair font-bold mb-6"
// //           >
// //             Careers at <span className="text-gold-400">RRL</span>
// //           </motion.h1>
// //           <motion.p 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="text-xl text-gray-300 max-w-2xl mx-auto"
// //           >
// //             Build your future with a company that builds dreams. Join the RRL family and be part of our journey in transforming skylines.
// //           </motion.p>
// //         </div>
// //       </section>

// //       {/* 2. SPLIT SECTION: APPLICATION FORM & TEAM PHOTO */}
// //       <section className="py-12">
// //         <div className="container mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-8 items-start">
            
// //             {/* Left: Team Photo (Placeholder) */}
// //             <motion.div 
// //                initial={{ opacity: 0, x: -50 }}
// //                whileInView={{ opacity: 1, x: 0 }}
// //                viewport={{ once: true }}
// //                className="h-full min-h-[500px] relative rounded-3xl overflow-hidden border border-gold-800 bg-neutral-900 group"
// //             >
// //                 {/* Replace src with your actual team photo */}
// //                 <Image 
// //                     src="/awardhome.jpeg" // Using existing image as placeholder
// //                     alt="RRL Team"
// //                     fill
// //                     className="object-cover transition-transform duration-700 group-hover:scale-105"
// //                 />
// //                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
// //                     <h3 className="text-3xl font-playfair font-bold text-white border-b-2 border-gold-500 pb-2">Join Our Team</h3>
// //                 </div>
// //             </motion.div>

// //             {/* Right: Application Form (Matches Figma Yellow Style) */}
// //             <motion.div 
// //                initial={{ opacity: 0, x: 50 }}
// //                whileInView={{ opacity: 1, x: 0 }}
// //                viewport={{ once: true }}
// //                className="bg-gold-500 rounded-3xl p-8 md:p-12 shadow-2xl text-black"
// //             >
// //                 <h3 className="text-3xl font-bold font-playfair mb-2">Job Application</h3>
// //                 <p className="text-black/70 mb-8">Ready to make an impact? Fill out the details below.</p>

// //                 <form onSubmit={handleSubmit} className="space-y-4">
// //                     <Input 
// //                         placeholder="Full Name" 
// //                         className="bg-white/90 border-none h-12 text-black placeholder:text-gray-500 focus-visible:ring-black"
// //                         onChange={(e) => setFormData({...formData, name: e.target.value})}
// //                     />
// //                     <Input 
// //                         placeholder="Email Address" 
// //                         type="email"
// //                         className="bg-white/90 border-none h-12 text-black placeholder:text-gray-500 focus-visible:ring-black"
// //                         onChange={(e) => setFormData({...formData, email: e.target.value})}
// //                     />
// //                     <Input 
// //                         placeholder="Phone Number" 
// //                         type="tel"
// //                         className="bg-white/90 border-none h-12 text-black placeholder:text-gray-500 focus-visible:ring-black"
// //                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
// //                     />
                    
// //                     <Select onValueChange={(val) => setFormData({...formData, role: val})}>
// //                         <SelectTrigger className="bg-white/90 border-none h-12 text-gray-500 focus:ring-black">
// //                             <SelectValue placeholder="Which role are you applying for?" />
// //                         </SelectTrigger>
// //                         <SelectContent>
// //                             <SelectItem value="sales">Sales Executive</SelectItem>
// //                             <SelectItem value="marketing">Marketing</SelectItem>
// //                             <SelectItem value="engineer">Site Engineer</SelectItem>
// //                             <SelectItem value="supervisor">Site Supervisor</SelectItem>
// //                             <SelectItem value="other">Other</SelectItem>
// //                         </SelectContent>
// //                     </Select>

// //                     <Textarea 
// //                         placeholder="Introduce yourself briefly..."
// //                         className="bg-white/90 border-none min-h-[100px] text-black placeholder:text-gray-500 focus-visible:ring-black"
// //                         onChange={(e) => setFormData({...formData, intro: e.target.value})}
// //                     />

// //                     <div className="flex items-center gap-4 py-2">
// //                         <Button type="button" variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full h-12 rounded-lg border-dashed">
// //                             <Upload className="mr-2 h-4 w-4" /> Attach CV
// //                         </Button>
// //                     </div>

// //                     <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 font-bold text-lg rounded-lg">
// //                         Submit Application
// //                     </Button>
// //                 </form>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 3. LIFE AT RRL */}
// //       <section className="py-20 bg-neutral-900/50">
// //         <div className="container mx-auto px-4 text-center">
// //             <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
// //                 Life at <span className="text-gold-400">RRL</span>
// //             </h2>
// //             <p className="text-gray-400 mb-12">More than just work - celebrating milestones together.</p>

// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
// //                 {/* Gallery Layout */}
// //                 <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
// //                     <Image src="/awardhome1.jpeg" alt="Team Outing" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
// //                 </div>
// //                 <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
// //                      <Image src="/awardhome.jpeg" alt="Celebration" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
// //                 </div>
// //                 <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group">
// //                      <Image src="/LookProject2.jpeg" alt="Office Life" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
// //                 </div>
// //                 <div className="col-span-1 row-span-1 relative bg-gold-500 rounded-2xl flex items-center justify-center p-4">
// //                     <p className="text-black font-bold text-xl font-playfair">Team <br/>Spirit</p>
// //                 </div>
// //             </div>
// //         </div>
// //       </section>

// //       {/* 4. OPEN ROLES */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4 max-w-4xl">
// //             <div className="text-center mb-12">
// //                 <h2 className="text-3xl font-bold font-playfair text-gold-400">Current Openings</h2>
// //             </div>
            
// //             <div className="grid gap-6">
// //                 {openRoles.map((job, index) => (
// //                     <motion.div 
// //                         key={index}
// //                         initial={{ opacity: 0, y: 20 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: index * 0.1 }}
// //                         className="bg-neutral-900 border border-gold-900/50 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center hover:border-gold-500 transition-colors group"
// //                     >
// //                         <div className="mb-4 md:mb-0 text-center md:text-left">
// //                             <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">{job.title}</h3>
// //                             <div className="flex gap-4 text-sm text-gray-400 justify-center md:justify-start">
// //                                 <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {job.type}</span>
// //                                 <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> {job.location}</span>
// //                             </div>
// //                         </div>
// //                         <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full px-6">
// //                             Apply Now
// //                         </Button>
// //                     </motion.div>
// //                 ))}
// //             </div>
// //         </div>
// //       </section>

// //       {/* 5. CSR SECTION (Based on Screenshot text) */}
// //       <section className="py-20 bg-white text-black">
// //         <div className="container mx-auto px-4">
// //             <div className="max-w-4xl mx-auto">
// //                 <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
// //                     <div className="w-full md:w-1/3">
// //                         <Image 
// //                             src="/LookProject5.jpeg" 
// //                             alt="CSR Activity" 
// //                             width={400} 
// //                             height={300} 
// //                             className="rounded-2xl shadow-xl"
// //                         />
// //                     </div>
// //                     <div className="w-full md:w-2/3">
// //                         <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1 bg-gold-100 text-gold-800 text-sm font-bold mb-4">
// //                             <Heart className="w-4 h-4 fill-gold-500 text-gold-500" />
// //                             <span>Community Impact</span>
// //                         </div>
// //                         <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
// //                             Corporate Social Responsibility (CSR)
// //                         </h2>
// //                         <p className="text-lg text-gray-700 leading-relaxed mb-6">
// //                             RRL Builders and Developers, recognized as trusted builders in Bangalore and a leading name in Sarjapur, actively contributes to social harmony and community welfare through meaningful Corporate Social Responsibility (CSR) initiatives. These efforts reflect our commitment to building not just homes, but stronger communities rooted in trust and unity.
// //                         </p>
// //                     </div>
// //                 </div>

// //                 <div className="grid md:grid-cols-3 gap-8 text-left">
// //                     <div className="p-6 bg-gray-50 rounded-2xl">
// //                         <h4 className="font-bold text-xl mb-3">Community Events</h4>
// //                         <p className="text-sm text-gray-600 leading-relaxed">
// //                             RRL regularly hosts community events that foster inclusivity, cultural exchange, and social harmony, creating shared spaces for celebration.
// //                         </p>
// //                     </div>
// //                     <div className="p-6 bg-gray-50 rounded-2xl">
// //                         <h4 className="font-bold text-xl mb-3">Temple Donations</h4>
// //                         <p className="text-sm text-gray-600 leading-relaxed">
// //                             We support temple renovations as vital centers of community life, promoting spiritual well-being and uplifting local economies.
// //                         </p>
// //                     </div>
// //                     <div className="p-6 bg-gray-50 rounded-2xl">
// //                         <h4 className="font-bold text-xl mb-3">Trusted Development</h4>
// //                         <p className="text-sm text-gray-600 leading-relaxed">
// //                             By integrating CSR into our core values, RRL ensures that every project reflects not just architectural excellence, but also social responsibility.
// //                         </p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// "use client"

// import { useState, useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { Upload, Briefcase, Users, Heart, ArrowRight, Send, CheckCircle2, MapPin, Sparkles, Building2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Image from "next/image"

// // --- Image Assets from your project-gallery.tsx ---
// const lifeAtRRLImages = [
//   // "/awardhome.jpeg",
//   // "/awardhome1.jpeg",
//   "/LookProject2.jpeg", // Play Area
//   "/LookProject4.jpeg", // Clubhouse
//   "/LookProject5.jpeg", // Pool
//   "/LookProject11.jpeg", // Community Hall
//   "/LookProject3.jpeg", // Gym
// ];

// const openRoles = [
//   { title: "Sales Executive", type: "Full Time", location: "Bangalore", exp: "1-3 Years" },
//   { title: "Marketing Manager", type: "Full Time", location: "Bangalore", exp: "3-5 Years" },
//   { title: "Site Engineer", type: "Full Time", location: "Sarjapur", exp: "2-4 Years" },
//   { title: "CRM Executive", type: "Full Time", location: "Varthur", exp: "1-2 Years" },
// ]

// export default function CareersPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     intro: "",
//   })

//   // Scroll Parallax Logic
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Add your Formspree logic here
//     alert("Application Submitted!")
//   }

//   return (
//     <div className="bg-black min-h-screen text-white overflow-hidden">
      
//       {/* 1. CINEMATIC HERO SECTION */}
//       <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
//         {/* Background Parallax Image */}
//         <motion.div 
//           style={{ y: backgroundY }}
//           className="absolute inset-0 z-0"
//         >
//           <Image 
//             src="/LookProject1.jpeg" // Using Exterior View for grandeur
//             alt="RRL Careers Background"
//             fill
//             className="object-cover opacity-40 scale-110"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
//         </motion.div>

//         {/* Content */}
//         <motion.div 
//           style={{ y: textY }}
//           className="relative z-10 text-center px-4 max-w-5xl"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
//           >
//             <Sparkles className="w-4 h-4 text-gold-400" />
//             <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">We Are Hiring</span>
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-6xl md:text-8xl font-playfair font-bold mb-6 leading-tight"
//           >
//             Build Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">Legacy</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
//           >
//             Join a team that doesn't just construct buildings, but crafts the skylines of tomorrow.
//           </motion.p>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1, y: [0, 10, 0] }} 
//           transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
//         >
//           <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center p-1">
//             <div className="w-1 h-2 bg-gold-500 rounded-full" />
//           </div>
//         </motion.div>
//       </section>

//       {/* 2. VALUES / WHY JOIN US */}
//       <section className="py-24 relative">
//         <div className="absolute inset-0 bg-grid-white/[0.03]" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: Building2, title: "Iconic Projects", desc: "Work on award-winning properties like RRL Palacio and Palm Altezze." },
//               { icon: Users, title: "Growth Culture", desc: "Mentorship from industry leaders and rapid career progression paths." },
//               { icon: Heart, title: "Impactful Work", desc: "Contribute to CSR initiatives that build stronger communities." }
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.2 }}
//                 className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-2"
//               >
//                 <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
//                   <item.icon className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
//                 </div>
//                 <h3 className="text-2xl font-bold font-playfair mb-3">{item.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. LIFE AT RRL (INFINITE MARQUEE) */}
//       <section className="py-20 bg-neutral-900 border-y border-white/5 overflow-hidden">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
//             Life at <span className="text-gold-400">RRL</span>
//           </h2>
//           <p className="text-gray-400">More than just work - celebrating milestones together.</p>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative flex w-full overflow-hidden">
//           <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-900 to-transparent" />
//           <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-900 to-transparent" />
          
//           <motion.div 
//             className="flex gap-6 whitespace-nowrap"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
//           >
//             {/* Duplicated list for seamless loop */}
//             {[...lifeAtRRLImages, ...lifeAtRRLImages].map((src, i) => (
//               <div key={i} className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer border border-white/10 hover:border-gold-500">
//                 <Image 
//                   src={src} 
//                   alt="Life at RRL" 
//                   fill 
//                   className="object-cover hover:scale-110 transition-transform duration-700" 
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* 4. CURRENT OPENINGS & APPLICATION FORM */}
//       <section className="py-24 bg-black relative">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-900/20 via-black to-black" />
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16">
            
//             {/* LEFT: OPEN POSITIONS */}
//             <div>
//               <h2 className="text-4xl font-playfair font-bold mb-8">Current <span className="text-gold-400">Openings</span></h2>
//               <div className="space-y-4">
//                 {openRoles.map((role, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.1 }}
//                     className="group bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-gold-500 transition-all duration-300 cursor-pointer"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">{role.title}</h3>
//                         <div className="flex gap-4 mt-2 text-sm text-gray-400">
//                           <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {role.type}</span>
//                           <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {role.location}</span>
//                           <span className="flex items-center text-gold-600 font-medium">{role.exp}</span>
//                         </div>
//                       </div>
//                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
//                         <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* CSR MINI SECTION */}
//               <div className="mt-16 bg-gradient-to-r from-neutral-900 to-neutral-900/50 p-8 rounded-2xl border-l-4 border-gold-500">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-gold-500/20 p-3 rounded-full">
//                     <Heart className="w-6 h-6 text-gold-500" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold font-playfair mb-2">Our Commitment to CSR</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">
//                       We actively contribute to social harmony through temple renovations, community events, and supporting local economies in Sarjapur & Varthur. Join a company with a heart.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: APPLICATION FORM */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="bg-neutral-900 border border-gold-900/50 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
//             >
//               {/* Decorative Glow */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[80px] pointer-events-none" />

//               <h3 className="text-3xl font-bold font-playfair mb-2 relative z-10">Apply Now</h3>
//               <p className="text-gray-400 mb-8 relative z-10">Take the first step towards a rewarding career.</p>

//               <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
//                     <Input 
//                       className="bg-black/50 border-neutral-700 h-12 focus:border-gold-500 transition-colors"
//                       placeholder="John Doe"
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
//                     <Input 
//                       className="bg-black/50 border-neutral-700 h-12 focus:border-gold-500 transition-colors"
//                       placeholder="+91 98765 43210"
//                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
//                   <Input 
//                     type="email"
//                     className="bg-black/50 border-neutral-700 h-12 focus:border-gold-500 transition-colors"
//                     placeholder="john@example.com"
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Position</label>
//                   <Select onValueChange={(val) => setFormData({...formData, role: val})}>
//                     <SelectTrigger className="bg-black/50 border-neutral-700 h-12 focus:ring-gold-500">
//                       <SelectValue placeholder="Select a role" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-neutral-900 border-neutral-700 text-white">
//                       {openRoles.map((role) => (
//                         <SelectItem key={role.title} value={role.title}>{role.title}</SelectItem>
//                       ))}
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Cover Letter / Intro</label>
//                   <Textarea 
//                     className="bg-black/50 border-neutral-700 min-h-[120px] focus:border-gold-500 transition-colors"
//                     placeholder="Tell us why you're a great fit..."
//                     onChange={(e) => setFormData({...formData, intro: e.target.value})}
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <label className="flex items-center justify-center w-full h-16 px-4 transition bg-black/30 border-2 border-neutral-700 border-dashed rounded-lg appearance-none cursor-pointer hover:border-gold-500 hover:bg-gold-900/10">
//                     <span className="flex items-center space-x-2">
//                       <Upload className="w-5 h-5 text-gray-400" />
//                       <span className="font-medium text-gray-400">Upload CV / Resume</span>
//                     </span>
//                     <input type="file" name="file_upload" className="hidden" />
//                   </label>
//                 </div>

//                 <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-14 text-lg rounded-xl mt-4 transition-all hover:scale-[1.02]">
//                   Submit Application <Send className="ml-2 w-5 h-5" />
//                 </Button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Upload, Briefcase, Users, Heart, ArrowRight, Send, MapPin, Sparkles, Building2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from "next/image"

// --- Image Assets ---
const lifeAtRRLImages = [
  // "/awardhome.jpeg",
  // "/awardhome1.jpeg",
  "/LookProject2.jpeg", 
  "/LookProject4.jpeg", 
  "/LookProject5.jpeg", 
  "/LookProject11.jpeg", 
  "/LookProject3.jpeg",
];

// Exact Roles from Screenshot
const openRoles = [
  { title: "Sales Executive", type: "Full Time", location: "Bangalore", exp: "1-3 Years" },
  { title: "Marketing Manager", type: "Full Time", location: "Bangalore", exp: "3-5 Years" },
  { title: "Site Engineer", type: "Full Time", location: "Sarjapur", exp: "2-4 Years" },
  { title: "Site Supervisor", type: "Full Time", location: "Varthur", exp: "2+ Years" },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experienceLevel: "fresher", // Default value
    role: "",
    intro: "",
  })

  // Parallax Scroll Logic
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integrate Formspree or backend logic here
    console.log("Form Data:", formData)
    alert("Application Submitted Successfully!")
  }

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/LookProject1.jpeg" // Ensure this image path is correct
            alt="RRL Careers Background"
            fill
            className="object-cover opacity-50 scale-110" 
            priority
          />
          {/* darker gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 text-center px-4 max-w-5xl mt-10"
        >
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-gold-500/50 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-white text-sm font-semibold uppercase tracking-widest">We Are Hiring</span>
          </motion.div>

          {/* Main Title - FIXED VISIBILITY */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-playfair font-bold mb-6 leading-tight text-white"
          >
            Career at <span className="text-gold-500">RRL</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Join our team and help build the future of Bangalore's skyline.
          </motion.p>
        </motion.div>

        {/* Scroll Mouse Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ================= 2. LIFE AT RRL / TEAM OUTING ================= */}
      <section className="py-24 bg-[#111] border-y border-gold-900/30 overflow-hidden relative">
        <div className="container mx-auto px-4 mb-12 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-white">
              Life at <span className="text-gold-500">RRL</span>
            </h2>
            <p className="text-xl text-gold-400/80 uppercase tracking-widest font-medium">Team Outing Gallery</p>
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex w-full overflow-hidden group">
          <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-[#111] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-[#111] to-transparent" />
          
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {/* Double list for seamless loop */}
            {[...lifeAtRRLImages, ...lifeAtRRLImages].map((src, i) => (
              <div key={i} className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5 hover:border-gold-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(217,164,6,0.3)]">
                <Image 
                  src={src} 
                  alt="Life at RRL" 
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 4. CSR SECTION (Exact Content from Screenshot) ================= */}
      <section className="py-24 bg-white text-black relative">
         <div className="container mx-auto px-4 relative z-10">
            {/* Header Text */}
            <div className="text-center mb-16 max-w-5xl mx-auto">
                <div className="inline-flex items-center space-x-2 rounded-full bg-gold-100 px-4 py-2 text-gold-700 mb-6">
                    <Heart className="h-4 w-4 fill-gold-500 text-gold-500" />
                    <span className="text-sm font-bold uppercase">Community Impact</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-8">
                    Corporate Social Responsibility (CSR)
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    RRL Builders and Developers, recognized as trusted builders in Bangalore and a leading name in Sarjapur, actively contributes to social harmony and community welfare through meaningful Corporate Social Responsibility (CSR) initiatives. These efforts reflect our commitment to building not just homes, but stronger communities rooted in trust and unity.
                </p>
            </div>

            {/* 3 Column Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 text-black shadow-lg">
                        <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-playfair mb-4">Community Events for Harmony</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        RRL Builders and Developers regularly host community events that foster inclusivity, cultural exchange, and social harmony. These gatherings bring together residents, local leaders, and stakeholders, promoting a sense of belonging and collective well-being.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 text-black shadow-lg">
                        <Building2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-playfair mb-4">Temple Donations & Social Impact</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        As part of our CSR activities, we support temple renovations and donations, recognizing temples as vital centers of community life. These contributions help preserve heritage, promote spiritual well-being, and uplift local economies.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 text-black shadow-lg">
                        <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-playfair mb-4">Commitment to Trusted Development</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        By integrating CSR into our core values, RRL ensures that every project reflects not just architectural excellence, but also social responsibility. Our initiatives are designed to build trust with investors and buyers, demonstrating we are builders of a better society.
                    </p>
                </motion.div>
            </div>
         </div>
      </section>
      {/* ================= 3. OPEN ROLES & APPLICATION FORM ================= */}
      <section className="py-24 bg-black relative">
        {/* Background Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN: Open Roles List */}
            <div>
              <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Open <span className="text-gold-500">Roles</span></h2>
                  <p className="text-gray-400 text-lg">Find your place in our growing team.</p>
              </div>
              
              <div className="space-y-5">
                {openRoles.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl hover:border-gold-500 hover:bg-neutral-900 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors mb-2">{role.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5 text-gold-600" /> {role.type}</span>
                          <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5 text-gold-600" /> {role.location}</span>
                        </div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-black border border-neutral-700 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-black transition-all">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Application Form (Matches Figma Screenshot) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gold-500 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden text-black"
            >
              <h3 className="text-3xl font-bold font-playfair mb-2 relative z-10">Job Application Form</h3>
              <p className="text-black/80 mb-8 relative z-10 font-medium">Fill in your details to apply.</p>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Name */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70">Name</label>
                    <Input 
                      className="bg-white/90 border-none h-12 focus:ring-2 focus:ring-black/20 text-black placeholder:text-gray-500 rounded-xl"
                      placeholder="Your Full Name"
                      required
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70">Email</label>
                    <Input 
                      type="email"
                      className="bg-white/90 border-none h-12 focus:ring-2 focus:ring-black/20 text-black placeholder:text-gray-500 rounded-xl"
                      placeholder="you@example.com"
                      required
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70">Phone Number</label>
                    <Input 
                      type="tel"
                      className="bg-white/90 border-none h-12 focus:ring-2 focus:ring-black/20 text-black placeholder:text-gray-500 rounded-xl"
                      placeholder="+91 98765 43210"
                      required
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                </div>

                {/* Fresher or Experienced (Radio Buttons per Screenshot) */}
                <div className="space-y-2 py-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70 block">Are you?</label>
                    <RadioGroup 
                        defaultValue="fresher" 
                        className="flex space-x-6"
                        onValueChange={(val) => setFormData({...formData, experienceLevel: val})}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fresher" id="fresher" className="border-black text-black" />
                            <Label htmlFor="fresher" className="text-black font-semibold cursor-pointer">Fresher</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="experienced" id="experienced" className="border-black text-black" />
                            <Label htmlFor="experienced" className="text-black font-semibold cursor-pointer">Experienced</Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Role Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">Which role are you applying for?</label>
                  <Select onValueChange={(val) => setFormData({...formData, role: val})}>
                    <SelectTrigger className="bg-white/90 border-none h-12 text-black focus:ring-2 focus:ring-black/20 rounded-xl">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {openRoles.map((role) => (
                        <SelectItem key={role.title} value={role.title}>{role.title}</SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Introduction */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">Introduce Yourself</label>
                  <Textarea 
                    className="bg-white/90 border-none min-h-[100px] focus:ring-2 focus:ring-black/20 text-black placeholder:text-gray-500 rounded-xl resize-none"
                    placeholder="Briefly tell us about yourself..."
                    onChange={(e) => setFormData({...formData, intro: e.target.value})}
                  />
                </div>

                {/* Attach CV Button */}
                <div className="pt-2">
                  <label className="flex items-center justify-center w-full h-14 px-4 transition bg-black/5 border-2 border-black/10 border-dashed rounded-xl appearance-none cursor-pointer hover:bg-black/10 hover:border-black/30">
                    <span className="flex items-center space-x-2">
                      <Upload className="w-5 h-5 text-black/60" />
                      <span className="font-medium text-black/70">Attach CV</span>
                    </span>
                    <input type="file" name="file_upload" className="hidden" />
                  </label>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-black hover:bg-neutral-800 text-white font-bold h-14 text-lg rounded-xl mt-4 shadow-lg transition-transform hover:scale-[1.02]">
                  Submit Application <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}