// "use client"

// import { useState, useRef } from "react"
// import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion"
// import { 
//   Globe, Plane, TrendingUp, Phone, FileCheck, Landmark, 
//   ArrowRight, ShieldCheck, MapPin, Building2, CheckCircle2, 
//   Briefcase, Scale, Users, Lightbulb, Target, Building, Star
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import Image from "next/image"
// import Link from "next/link"
// import { useForm, ValidationError } from '@formspree/react';

// // --- Animation Variants ---
// // Explicitly typing these as 'Variants' fixes the build error regarding "ease" types
// const containerVar: Variants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1, 
//     transition: { staggerChildren: 0.1 } 
//   }
// }

// const itemVar: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { 
//       duration: 0.6, 
//       ease: "easeOut" 
//     } 
//   }
// }

// export default function NRICornerPage() {
//   const [state, handleSubmit] = useForm("mvzpdloo");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     country: "",
//     phone: "",
//     message: "",
//   })

//   // Parallax Logic
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   })
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     alert("Request sent! Our NRI Desk will contact you shortly.")
// //   }

//   return (
//     <div className="bg-black min-h-screen text-white overflow-hidden selection:bg-gold-500 selection:text-black">
      
//       {/* ================= 1. HERO SECTION ================= */}
//       <section ref={ref} className="relative h-[95vh] flex items-center justify-center overflow-hidden">
//         <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
//           <Image 
//             src="/LookProject1.jpeg" 
//             alt="NRI Investment Opportunity"
//             fill
//             className="object-cover opacity-50 scale-110" 
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />
//           <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay"></div>
//         </motion.div>

//         <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-6xl mt-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="inline-flex items-center space-x-3 border border-gold-500/30 bg-gold-500/10 backdrop-blur-xl px-6 py-2 rounded-full mb-8 shadow-[0_0_30px_rgba(217,164,6,0.15)]"
//           >
//             <Plane className="w-4 h-4 text-gold-400" />
//             <span className="text-gold-100 text-sm font-bold uppercase tracking-widest">NRI Investment Opportunity</span>
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-8xl font-playfair font-bold mb-8 leading-tight text-white drop-shadow-2xl"
//           >
//             Invest in Your <br/>
//             <span className="text-[#d9a406]">Homeland</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
//           >
//             Secure high-appreciation assets in Bangalore with <strong>RRL Builders & Developers</strong>. 
//             A seamless pathway for Global Indians to build wealth back home.
//           </motion.p>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1, y: [0, 10, 0] }} 
//           transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
//         >
//           <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex justify-center p-1 bg-black/50 backdrop-blur-sm">
//             <div className="w-1 h-2 bg-gold-500 rounded-full" />
//           </div>
//         </motion.div>
//       </section>
//       {/* ================= 9. CONTACT / INQUIRY FORM ================= */}
//       <section className="py-24 bg-gradient-to-b from-neutral-900 to-black relative">
//         <div className="container mx-auto px-4">
//             <div className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-[3rem] p-[2px] shadow-[0_0_60px_rgba(217,164,6,0.15)]">
//                 <div className="bg-black rounded-[2.9rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center overflow-hidden relative">
                    
//                     {/* Background Pattern */}
//                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

//                     {/* Left Info */}
//                     <div className="space-y-8 relative z-10">
//                         <div className="inline-block px-4 py-2 bg-gold-500/10 rounded-full border border-gold-500/30 text-gold-500 font-bold text-sm">
//                             <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> NRI Support Desk</span>
//                         </div>
//                         <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight">
//                             Connect with us <br/> from <span className="text-gold-500">Anywhere</span>
//                         </h2>
//                         <p className="text-gray-400 text-lg leading-relaxed">
//                             Our dedicated NRI Relationship Managers are available 24/7 to answer your queries. Fill the form to schedule a priority callback.
//                         </p>
                        
//                         <div className="space-y-6 pt-6">
//                             <div className="flex items-center gap-5 p-5 bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm">
//                                 <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-gold-500 border border-gold-900 shadow-lg">
//                                     <Phone className="w-6 h-6" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Direct NRI Hotline / WhatsApp</p>
//                                     <p className="text-xl font-bold text-white">+91 84949 66966</p>
//                                 </div>
//                             </div>
                            
//                             <div className="flex items-center gap-5 p-5 bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm">
//                                 <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-gold-500 border border-gold-900 shadow-lg">
//                                     <Building2 className="w-6 h-6" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Head Office</p>
//                                     <p className="text-lg font-bold text-white">RRL Towers, Sarjapur, Bangalore</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Form */}
//                     <div className="bg-neutral-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-neutral-800 shadow-2xl relative z-10">
//                         <h3 className="text-2xl font-bold text-white mb-6">Inquiry Form</h3>
                        
//                         {/* 3. Success State Check */}
//                         {state.succeeded ? (
//                            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
//                                 <CheckCircle2 className="w-20 h-20 text-gold-500 mb-6" />
//                                 <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
//                                 <p className="text-gray-400">Our NRI Desk will contact you shortly.</p>
//                            </div>
//                         ) : (
//                             <form onSubmit={handleSubmit} className="space-y-5">
//                                 <Input 
//                                     name="name" // Added Name
//                                     className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
//                                     placeholder="Full Name"
//                                     required
//                                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                                 />
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <Input 
//                                         name="country" // Added Name
//                                         className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
//                                         placeholder="Country"
//                                         required
//                                         onChange={(e) => setFormData({...formData, country: e.target.value})}
//                                     />
//                                     <Input 
//                                         name="phone" // Added Name
//                                         className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
//                                         placeholder="Phone"
//                                         type="tel"
//                                         required
//                                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                                     />
//                                 </div>
//                                 <div>
//                                     <Input 
//                                         name="email" // Added Name
//                                         className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
//                                         placeholder="Email Address"
//                                         type="email"
//                                         required
//                                         onChange={(e) => setFormData({...formData, email: e.target.value})}
//                                     />
//                                     <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
//                                 </div>
//                                 <Textarea 
//                                     name="message" // Added Name
//                                     className="bg-black/50 border-neutral-700 min-h-[120px] text-white focus:border-gold-500 rounded-xl px-5 py-4 text-lg resize-none" 
//                                     placeholder="How can we help you?"
//                                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                                 />
//                                 <Button 
//                                     type="submit" 
//                                     disabled={state.submitting}
//                                     className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-14 text-lg rounded-xl mt-4 transition-all hover:scale-[1.02] shadow-lg"
//                                 >
//                                     {state.submitting ? "Sending..." : "Submit Inquiry"} 
//                                     {!state.submitting && <ArrowRight className="ml-2 w-5 h-5" />}
//                                 </Button>
//                             </form>
//                         )}
//                     </div>

//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* ================= 2. COMPANY OVERVIEW (Bento Grid) ================= */}
//       <section className="py-24 bg-neutral-950 relative">
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900 to-transparent"></div>
//         <div className="container mx-auto px-4">
//             <div className="text-center mb-20">
//                 <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">About <span className="text-gold-500">RRL Group</span></h2>
//                 <p className="text-gray-400 max-w-3xl mx-auto text-lg">
//                     Building trust since inception. We are more than just developers; we are partners in your wealth creation journey.
//                 </p>
//             </div>

//             <motion.div 
//                 variants={containerVar}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="grid md:grid-cols-3 gap-8"
//             >
//                 {/* Company Overview */}
//                 <motion.div variants={itemVar} className="group bg-gradient-to-br from-neutral-900 to-black p-10 rounded-[2rem] border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10"></div>
//                     <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
//                         <Building2 className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Company Overview</h3>
//                     <p className="text-gray-400 leading-relaxed text-sm">
//                         RRL Builders is a premier real estate development company based in Bangalore. We specialize in creating residential and commercial masterpieces that blend luxury with affordability.
//                     </p>
//                 </motion.div>

//                 {/* Vision and Mission */}
//                 <motion.div variants={itemVar} className="group bg-gradient-to-br from-neutral-900 to-black p-10 rounded-[2rem] border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10"></div>
//                     <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
//                         <Target className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Vision & Mission</h3>
//                     <div className="space-y-3">
//                         <p className="text-gray-400 text-sm"><strong className="text-white">Vision:</strong> To be the most trusted real estate partner for global Indians.</p>
//                         <p className="text-gray-400 text-sm"><strong className="text-white">Mission:</strong> Delivering quality homes on time with complete transparency.</p>
//                     </div>
//                 </motion.div>

//                 {/* RRL Group of Companies */}
//                 <motion.div variants={itemVar} className="group bg-gradient-to-br from-neutral-900 to-black p-10 rounded-[2rem] border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10"></div>
//                     <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
//                         <Users className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Group of Companies</h3>
//                     <p className="text-gray-400 leading-relaxed text-sm">
//                         Our diversified portfolio includes Construction, Interiors, and Property Management, offering a holistic ecosystem for your real estate needs.
//                     </p>
//                 </motion.div>
//             </motion.div>
//         </div>
//       </section>

//       {/* ================= 3. NRI INVESTMENT: WHY CHOOSE INDIA & RRL? ================= */}
//       <section className="py-24 bg-black relative overflow-hidden">
//          {/* Background Glow */}
//          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

//          <div className="container mx-auto px-4 relative z-10">
//             <div className="grid lg:grid-cols-2 gap-20">
                
//                 {/* Why Choose India? */}
//                 <motion.div 
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <div className="inline-block px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-full text-xs font-bold mb-6 tracking-wider">THE GROWTH STORY</div>
//                     <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">Why Choose <span className="text-gold-500">India?</span></h3>
//                     <p className="text-gray-400 mb-8 text-lg leading-relaxed">
//                         India is currently the fastest-growing major economy. The real estate sector is projected to reach $1 Trillion by 2030. For NRIs, the favorable exchange rate and RERA transparency make this the perfect time to invest.
//                     </p>
//                     <ul className="space-y-6">
//                         {[
//                             "Fastest Growing Major Economy", 
//                             "High Rental Yields in IT Hubs", 
//                             "Rapid Infrastructure Growth (Metro/Highways)", 
//                             "Regulatory Transparency via RERA"
//                         ].map((item, i) => (
//                             <motion.li 
//                                 key={i} 
//                                 className="flex items-center gap-4 text-gray-200 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800"
//                                 whileHover={{ scale: 1.02 }}
//                             >
//                                 <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-black" /></div>
//                                 {item}
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </motion.div>

//                 {/* Why Choose RRL Builders? */}
//                 <motion.div 
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <div className="inline-block px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-full text-xs font-bold mb-6 tracking-wider">YOUR TRUSTED PARTNER</div>
//                     <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">Why Choose <span className="text-gold-500">RRL?</span></h3>
//                     <p className="text-gray-400 mb-8 text-lg leading-relaxed">
//                         We understand the challenges of managing property from abroad. RRL provides a comprehensive, worry-free ecosystem specifically designed for the needs of Non-Resident Indians.
//                     </p>
//                     <ul className="space-y-6">
//                         {[
//                             "Dedicated NRI Relationship Managers", 
//                             "Legal Assistance & POA Support", 
//                             "Post-Purchase Rental Management", 
//                             "On-Time Delivery with Quality Assurance"
//                         ].map((item, i) => (
//                             <motion.li 
//                                 key={i} 
//                                 className="flex items-center gap-4 text-gray-200 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800"
//                                 whileHover={{ scale: 1.02 }}
//                             >
//                                 <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-black" /></div>
//                                 {item}
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </motion.div>

//             </div>
//          </div>
//       </section>

//       {/* ================= 4. INVESTMENT PROCESS (Step-by-Step) ================= */}
//       <section className="py-24 bg-neutral-950 border-t border-gold-900/30">
//          <div className="container mx-auto px-4">
//             <div className="text-center mb-20">
//                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Investment Process for <span className="text-gold-500">NRIs</span></h2>
//                <p className="text-gray-400 text-lg">A seamless, step-by-step guide to owning your dream home.</p>
//             </div>

//             <div className="relative grid md:grid-cols-4 gap-8">
//                 {/* Visual Connector Line (Desktop) */}
//                 <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-0"></div>

//                 {[
//                     { icon: Phone, title: "1. Virtual Inquiry", text: "Schedule a video call with our NRI expert." },
//                     { icon: FileCheck, title: "2. Documentation", text: "Select unit & submit KYC documents online." },
//                     { icon: Landmark, title: "3. Fund Transfer", text: "Secure transfer via NRE/NRO accounts." },
//                     { icon: Scale, title: "4. Registration", text: "We facilitate POA and final registration." },
//                 ].map((step, i) => (
//                     <motion.div 
//                         key={i}
//                         variants={itemVar}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         custom={i}
//                         className="relative z-10 bg-black p-8 rounded-3xl border border-neutral-800 text-center hover:border-gold-500 transition-all duration-300 group hover:-translate-y-2 shadow-xl"
//                     >
//                         <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-6 mx-auto border border-gold-500/30 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-500">
//                             <step.icon className="w-8 h-8 text-gold-500 group-hover:text-black transition-colors" />
//                         </div>
//                         <h4 className="text-xl font-bold text-white mb-3 font-playfair">{step.title}</h4>
//                         <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
//                     </motion.div>
//                 ))}
//             </div>
//          </div>
//       </section>

//       {/* ================= 5. LOCATION, INFRASTRUCTURE & BENEFITS ================= */}
//       <section className="py-24 bg-black relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
//         <div className="container mx-auto px-4 relative z-10">
//             <div className="grid lg:grid-cols-2 gap-16 items-start">
                
//                 {/* Location Advantage */}
//                 <div>
//                     <h3 className="text-4xl font-playfair font-bold text-white mb-8">Location & <span className="text-gold-500">Infrastructure</span></h3>
//                     <p className="text-gray-400 mb-8 text-lg">Bangalore is expanding rapidly. Our projects are strategically located in the "Golden Quadrilateral" of growth.</p>
                    
//                     <div className="space-y-6">
//                         <motion.div whileHover={{ x: 10 }} className="bg-neutral-900/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-800 border-l-4 border-l-gold-500">
//                             <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><MapPin className="text-gold-500 w-5 h-5"/> Prime Locations</h4>
//                             <p className="text-gray-400">Strategically located in Sarjapur and Varthur, close to major IT Tech Parks (Wipro, RGA Tech Park).</p>
//                         </motion.div>
//                         <motion.div whileHover={{ x: 10 }} className="bg-neutral-900/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-800 border-l-4 border-l-gold-500">
//                             <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Building className="text-gold-500 w-5 h-5"/> Connectivity</h4>
//                             <p className="text-gray-400">Excellent connectivity via the upcoming Metro lines, STRR (Satellite Town Ring Road), and easy airport access.</p>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* Investment Benefits Grid */}
//                 <div>
//                     <h3 className="text-4xl font-playfair font-bold text-white mb-8">Investment <span className="text-gold-500">Benefits</span></h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                         <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
//                             <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-4" />
//                             <h4 className="font-bold text-white text-lg">Appreciation</h4>
//                             <p className="text-sm text-gray-500 mt-2">Consistent 10-15% annual growth in asset value.</p>
//                         </motion.div>
//                         <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
//                             <Landmark className="w-10 h-10 text-blue-500 mx-auto mb-4" />
//                             <h4 className="font-bold text-white text-lg">Rental Income</h4>
//                             <p className="text-sm text-gray-500 mt-2">High demand ensures 3-5% rental yield annually.</p>
//                         </motion.div>
//                         <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
//                             <Lightbulb className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
//                             <h4 className="font-bold text-white text-lg">Long Term Wealth</h4>
//                             <p className="text-sm text-gray-500 mt-2">A tangible asset that builds generational wealth.</p>
//                         </motion.div>
//                         <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
//                             <Globe className="w-10 h-10 text-purple-500 mx-auto mb-4" />
//                             <h4 className="font-bold text-white text-lg">Global Standards</h4>
//                             <p className="text-sm text-gray-500 mt-2">World-class amenities matching global lifestyles.</p>
//                         </motion.div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//       </section>

//       {/* ================= 6. LEGAL & REGULATORY COMPLIANCE ================= */}
//       <section className="py-24 bg-gradient-to-r from-neutral-950 to-black border-y border-gold-900/30">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
//             <div className="md:w-1/2">
//                 <div className="inline-block px-4 py-1 bg-green-900/20 border border-green-500/30 text-green-500 rounded-full text-xs font-bold mb-6 tracking-wider">100% COMPLIANT</div>
//                 <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Legal & Regulatory <span className="text-gold-500">Compliance</span></h2>
//                 <p className="text-gray-400 mb-8 leading-relaxed text-lg">
//                     Investing in India is simpler than ever. We ensure 100% compliance with FEMA regulations and RBI guidelines for NRI investments. Our dedicated legal team assists you at every step.
//                 </p>
//                 <div className="grid grid-cols-1 gap-4">
//                     {["FEMA Compliance Checks", "RBI Guidelines Adherence", "Power of Attorney (POA) Assistance", "Repatriation of Funds Support"].map((item, i) => (
//                         <div key={i} className="flex items-center gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-gold-500/30 transition-colors">
//                             <Scale className="w-6 h-6 text-gold-500" />
//                             <span className="text-gray-200 font-medium">{item}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="md:w-1/2 relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-gold-900 shadow-2xl">
//                  {/* <Image src="/LookProject11.jpeg" alt="Legal Compliance" fill className="object-cover transition-transform hover:scale-105 duration-700" /> */}
//                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8">
//                     <ShieldCheck className="w-20 h-20 text-gold-500 mb-4 drop-shadow-[0_0_15px_rgba(217,164,6,0.5)]" />
//                     <h3 className="text-3xl font-bold text-white font-playfair">Your Investment is Safe</h3>
//                     <p className="text-gray-300 mt-2">Verified Titles & Approvals</p>
//                  </div>
//             </div>
//         </div>
//       </section>

//       {/* ================= 7. FEATURED PROJECTS ================= */}
//       <section className="py-24 bg-black">
//         <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Featured <span className="text-gold-500">Projects</span></h2>
//                 <p className="text-gray-400 text-lg">Premium residential and commercial developments curated for you.</p>
//             </div>

//             {/* Residential */}
//             <div className="mb-20">
//                 <div className="flex items-center gap-4 mb-8">
//                     <div className="h-px bg-gold-900 flex-1"></div>
//                     <h3 className="text-2xl font-bold text-gold-400 uppercase tracking-widest">Residential</h3>
//                     <div className="h-px bg-gold-900 flex-1"></div>
//                 </div>
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {[
//                         { name: "RRL Palacio", loc: "Medahalli", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531", status: "Ready to Move" },
//                         { name: "RRL Palm Altezze", loc: "Varthur", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863", status: "New Launch" },
//                         { name: "RRL Nature Woods", loc: "Sarjapur", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502", status: "Ready to Move" }
//                     ].map((proj, i) => (
//                         <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-800 cursor-pointer">
//                             <Image src={proj.img} alt={proj.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
//                             <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">{proj.status}</div>
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
//                             <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                                 <h4 className="text-2xl font-bold text-white mb-1 font-playfair">{proj.name}</h4>
//                                 <p className="text-gold-500 text-sm flex items-center gap-1 font-medium"><MapPin className="w-4 h-4"/> {proj.loc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Commercial */}
//             <div>
//                 <div className="flex items-center gap-4 mb-8">
//                     <div className="h-px bg-gold-900 flex-1"></div>
//                     <h3 className="text-2xl font-bold text-gold-400 uppercase tracking-widest">Commercial</h3>
//                     <div className="h-px bg-gold-900 flex-1"></div>
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-8">
//                     {[
//                         { name: "RRL Towers", loc: "Sampige Jala", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451", type: "Office Space" },
//                         { name: "RRL Complex", loc: "South Bangalore", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360", type: "Retail & Office" }
//                     ].map((proj, i) => (
//                         <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video border border-neutral-800 cursor-pointer">
//                             <Image src={proj.img} alt={proj.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
//                             <div className="absolute bottom-0 left-0 p-8 w-full">
//                                 <span className="text-xs text-gray-300 bg-gold-500/20 px-2 py-1 rounded mb-2 inline-block border border-gold-500/20">{proj.type}</span>
//                                 <h4 className="text-2xl font-bold text-white mb-1 font-playfair">{proj.name}</h4>
//                                 <p className="text-gold-500 text-sm flex items-center gap-1 font-medium"><MapPin className="w-4 h-4"/> {proj.loc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* ================= 8. TESTIMONIALS (Marquee Style) ================= */}
//       <section className="py-24 bg-neutral-950 border-t border-gold-900/30 overflow-hidden">
//         <div className="container mx-auto px-4 text-center mb-12">
//             <h2 className="text-4xl font-playfair font-bold text-white mb-4">NRI Client <span className="text-gold-500">Stories</span></h2>
//             <p className="text-gray-400">Join over 500+ happy families across the globe.</p>
//         </div>
        
//         {/* Simple Marquee Implementation */}
//         <div className="relative flex w-full overflow-hidden">
//              <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-950 to-transparent" />
//              <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-950 to-transparent" />
             
//              <motion.div 
//                 className="flex gap-8 whitespace-nowrap"
//                 animate={{ x: ["0%", "-50%"] }}
//                 transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
//              >
//                 {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
//                     <div key={idx} className="w-[400px] flex-shrink-0 bg-black p-8 rounded-3xl border border-neutral-800 hover:border-gold-500/50 transition-colors">
//                         <div className="flex gap-1 mb-4">
//                             {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-gold-500 text-gold-500" />)}
//                         </div>
//                         <p className="text-gray-300 italic mb-6 text-sm whitespace-normal leading-relaxed">
//                             "Managing property from the USA seemed impossible until I met the RRL team. Their transparency and regular updates made the process seamless."
//                         </p>
//                         <div className="flex items-center gap-3">
//                             <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-black font-bold">C{i}</div>
//                             <div className="text-left">
//                                 <p className="text-white font-bold text-sm">Client Name</p>
//                                 <p className="text-gold-500 text-xs">NRI Investor, Dubai</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//              </motion.div>
//         </div>
//       </section>

//     </div>
//   )
// }

"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion"
import { 
  Globe, Plane, TrendingUp, Phone, FileCheck, Landmark, 
  ArrowRight, ShieldCheck, MapPin, Building2, CheckCircle2, 
  Briefcase, Scale, Users, Lightbulb, Target, Building, Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { useForm, ValidationError } from '@formspree/react';

// --- Animation Variants ---
const containerVar: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
}

const itemVar: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
}

// --- Helper Component: Google Icon (Official Colors) ---
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

// --- Google Reviews Data ---
const googleReviews = [
  {
    name: "Anusha V",
    date: "a month ago",
    text: "After doing lot of research I PURCHASE flat in RRl palacio my kid was happely playing n he like this society, I like their gym n movie theater and roop top pool.",
    rating: 5
  },
  {
    name: "Rahil R",
    date: "4 months ago",
    text: "RRL Palacio is a great place to live! The apartments are spacious and well-designed, and the grounds are always clean and green. The staff is really friendly.",
    rating: 5
  },
  {
    name: "Chaitanya Samprajan",
    date: "6 months ago",
    text: "Good builder & team. Value for money. Well planned & organised. I’ve booked my flat 6 months ago. The experience has been great so far.",
    rating: 5
  },
  {
    name: "Nagarajan K",
    date: "a year ago",
    text: "We purchased a flat in RRL palacio and the marketing team was very supportive in all the documents processing and responded to all our queries on a timely basis.",
    rating: 5
  },
  {
    name: "Team work",
    date: "4 months ago",
    text: "RRL Palacio has a really nice vibe and a great range of facilities for everyone. There’s a children’s park, walking paths, plenty of sitting spots.",
    rating: 5
  },
  {
    name: "Chithra Veeranna",
    date: "a year ago",
    text: "One of the best and premium societies by RRL Palacio in this Locality. Flats are well ventilated and Apartment has lots of premium 5 & 4 star amenities.",
    rating: 5
  },
  {
    name: "Mukul Verma",
    date: "10 months ago",
    text: "We booked a flat here, visited site multiple times. The project is having Good construction quality, builder reliable, they are using top material, full open space.",
    rating: 5
  },
  {
    name: "Shashikumar Reddy",
    date: "a year ago",
    text: "RRL Palacio - This is an excellent choice for anyone looking for a quality home. The amenities provided are top-notch, including recreational spaces, security.",
    rating: 5
  },
  {
    name: "Premendra Kumar Patel",
    date: "10 months ago",
    text: "The team was highly professional, patient, and supportive throughout the process. Special thanks to Marketing Manager Kavya for her assistance.",
    rating: 5
  },
  {
    name: "Pavan Kumar B Y",
    date: "a year ago",
    text: "RRL PALACIO - I would say this is a project where Luxury meets affordability, Overall the Project looks great with plenty of amenities and spacious flat.",
    rating: 5
  },
  {
    name: "Monika Reddy",
    date: "a year ago",
    text: "I have recently booked a flat in RRL palacio. Firstly when we contacted the team they were really friendly and shared all the details of the project.",
    rating: 5
  },
  {
    name: "kishore babu",
    date: "a year ago",
    text: "We Recently booked a flat . Structure quality is very good, very good atmosphere we have all around Greenery with spacious balcony view.",
    rating: 5
  },
  {
    name: "chetan chetu",
    date: "a year ago",
    text: "RRL is budget friendly and premium apartments. The responsiveness and professionalism of the management team are also commonly evaluated.",
    rating: 5
  },
  {
    name: "Sagar Mana",
    date: "a year ago",
    text: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offies, units,R&D Centers.",
    rating: 5
  },
  {
    name: "Harini v",
    date: "a year ago",
    text: "Excellent options for 2 and 3 bhk flats with balconies and bay windows. Good quality material used for construction, bathroom and kitchens.",
    rating: 5
  },
  {
    name: "Mahesh MG",
    date: "a year ago",
    text: "I visited the project construction quality is betten than other builders. we thought of booking flate, builder is providing class leading amenities.",
    rating: 5
  }
];

export default function NRICornerPage() {
  const [state, handleSubmit] = useForm("mvzpdloo");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  })

  // Parallax Logic
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden selection:bg-gold-500 selection:text-black">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section ref={ref} className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <Image 
            src="/LookProject1.jpeg" 
            alt="NRI Investment Opportunity"
            fill
            className="object-cover opacity-50 scale-110" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay"></div>
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-6xl mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 border border-gold-500/30 bg-gold-500/10 backdrop-blur-xl px-6 py-2 rounded-full mb-8 shadow-[0_0_30px_rgba(217,164,6,0.15)]"
          >
            <Plane className="w-4 h-4 text-gold-400" />
            <span className="text-gold-100 text-sm font-bold uppercase tracking-widest">NRI Investment Opportunity</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-playfair font-bold mb-8 leading-tight text-white drop-shadow-2xl"
          >
            Invest in Your <br/>
            <span className="text-[#d9a406]">Homeland</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Secure high-appreciation assets in Bangalore with <strong>RRL Builders & Developers</strong>. 
            A seamless pathway for Global Indians to build wealth back home.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex justify-center p-1 bg-black/50 backdrop-blur-sm">
            <div className="w-1 h-2 bg-gold-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ================= 9. CONTACT / INQUIRY FORM ================= */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black relative">
        <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-[3rem] p-[2px] shadow-[0_0_60px_rgba(217,164,6,0.15)]">
                <div className="bg-black rounded-[2.9rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center overflow-hidden relative">
                    
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

                    {/* Left Info */}
                    <div className="space-y-8 relative z-10">
                        <div className="inline-block px-4 py-2 bg-gold-500/10 rounded-full border border-gold-500/30 text-gold-500 font-bold text-sm">
                            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> NRI Support Desk</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight">
                            Connect with us <br/> from <span className="text-gold-500">Anywhere</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our dedicated NRI Relationship Managers are available 24/7 to answer your queries. Fill the form to schedule a priority callback.
                        </p>
                        
                        <div className="space-y-6 pt-6">
                            <div className="flex items-center gap-5 p-5 bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm">
                                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-gold-500 border border-gold-900 shadow-lg">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Direct NRI Hotline / WhatsApp</p>
                                    <p className="text-xl font-bold text-white">+91 84949 66966</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-5 p-5 bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-sm">
                                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-gold-500 border border-gold-900 shadow-lg">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Head Office</p>
                                    <p className="text-lg font-bold text-white">RRL Towers, Sarjapur, Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-neutral-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-neutral-800 shadow-2xl relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-6">Inquiry Form</h3>
                        
                        {/* 3. Success State Check */}
                        {state.succeeded ? (
                           <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                                <CheckCircle2 className="w-20 h-20 text-gold-500 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                                <p className="text-gray-400">Our NRI Desk will contact you shortly.</p>
                           </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <Input 
                                    name="name" 
                                    className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
                                    placeholder="Full Name"
                                    required
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input 
                                        name="country" 
                                        className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
                                        placeholder="Country"
                                        required
                                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                                    />
                                    <Input 
                                        name="phone" 
                                        className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
                                        placeholder="Phone"
                                        type="tel"
                                        required
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <Input 
                                        name="email" 
                                        className="bg-black/50 border-neutral-700 h-14 text-white focus:border-gold-500 rounded-xl px-5 text-lg" 
                                        placeholder="Email Address"
                                        type="email"
                                        required
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                <Textarea 
                                    name="message" 
                                    className="bg-black/50 border-neutral-700 min-h-[120px] text-white focus:border-gold-500 rounded-xl px-5 py-4 text-lg resize-none" 
                                    placeholder="How can we help you?"
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                                <Button 
                                    type="submit" 
                                    disabled={state.submitting}
                                    className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-14 text-lg rounded-xl mt-4 transition-all hover:scale-[1.02] shadow-lg"
                                >
                                    {state.submitting ? "Sending..." : "Submit Inquiry"} 
                                    {!state.submitting && <ArrowRight className="ml-2 w-5 h-5" />}
                                </Button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* ================= 2. COMPANY OVERVIEW (Bento Grid) ================= */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900 to-transparent"></div>
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">About <span className="text-gold-500">RRL Group</span></h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                    Building trust since inception. We are more than just developers; we are partners in your wealth creation journey.
                </p>
            </div>

            <motion.div 
                variants={containerVar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid md:grid-cols-3 gap-8"
            >
                {/* Company Overview */}
                <motion.div variants={itemVar} className="group bg-gradient-to-br from-neutral-900 to-black p-10 rounded-[2rem] border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10"></div>
                    <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                        <Building2 className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Company Overview</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        RRL Builders is a premier real estate development company based in Bangalore. We specialize in creating residential and commercial masterpieces that blend luxury with affordability.
                    </p>
                </motion.div>

                {/* Vision and Mission */}
                <motion.div variants={itemVar} className="group bg-gradient-to-br from-neutral-900 to-black p-10 rounded-[2rem] border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10"></div>
                    <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                        <Target className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Vision & Mission</h3>
                    <div className="space-y-3">
                        <p className="text-gray-400 text-sm"><strong className="text-white">Vision:</strong> To be the most trusted real estate partner for global Indians.</p>
                        <p className="text-gray-400 text-sm"><strong className="text-white">Mission:</strong> Delivering quality homes on time with complete transparency.</p>
                    </div>
                </motion.div>

                {/* RRL Group of Companies */}
                <motion.div variants={itemVar} className="group bg-gradient-to-br from-neutral-900 to-black p-10 rounded-[2rem] border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10"></div>
                    <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                        <Users className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Group of Companies</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Our diversified portfolio includes Construction, Interiors, and Property Management, offering a holistic ecosystem for your real estate needs.
                    </p>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* ================= 3. NRI INVESTMENT: WHY CHOOSE INDIA & RRL? ================= */}
      <section className="py-24 bg-black relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

         <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
                
                {/* Why Choose India? */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-full text-xs font-bold mb-6 tracking-wider">THE GROWTH STORY</div>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">Why Choose <span className="text-gold-500">India?</span></h3>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        India is currently the fastest-growing major economy. The real estate sector is projected to reach $1 Trillion by 2030. For NRIs, the favorable exchange rate and RERA transparency make this the perfect time to invest.
                    </p>
                    <ul className="space-y-6">
                        {[
                            "Fastest Growing Major Economy", 
                            "High Rental Yields in IT Hubs", 
                            "Rapid Infrastructure Growth (Metro/Highways)", 
                            "Regulatory Transparency via RERA"
                        ].map((item, i) => (
                            <motion.li 
                                key={i} 
                                className="flex items-center gap-4 text-gray-200 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-black" /></div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Why Choose RRL Builders? */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-full text-xs font-bold mb-6 tracking-wider">YOUR TRUSTED PARTNER</div>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">Why Choose <span className="text-gold-500">RRL?</span></h3>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        We understand the challenges of managing property from abroad. RRL provides a comprehensive, worry-free ecosystem specifically designed for the needs of Non-Resident Indians.
                    </p>
                    <ul className="space-y-6">
                        {[
                            "Dedicated NRI Relationship Managers", 
                            "Legal Assistance & POA Support", 
                            "Post-Purchase Rental Management", 
                            "On-Time Delivery with Quality Assurance"
                        ].map((item, i) => (
                            <motion.li 
                                key={i} 
                                className="flex items-center gap-4 text-gray-200 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-black" /></div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>
         </div>
      </section>

      {/* ================= 4. INVESTMENT PROCESS (Step-by-Step) ================= */}
      <section className="py-24 bg-neutral-950 border-t border-gold-900/30">
         <div className="container mx-auto px-4">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Investment Process for <span className="text-gold-500">NRIs</span></h2>
               <p className="text-gray-400 text-lg">A seamless, step-by-step guide to owning your dream home.</p>
            </div>

            <div className="relative grid md:grid-cols-4 gap-8">
                {/* Visual Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-0"></div>

                {[
                    { icon: Phone, title: "1. Virtual Inquiry", text: "Schedule a video call with our NRI expert." },
                    { icon: FileCheck, title: "2. Documentation", text: "Select unit & submit KYC documents online." },
                    { icon: Landmark, title: "3. Fund Transfer", text: "Secure transfer via NRE/NRO accounts." },
                    { icon: Scale, title: "4. Registration", text: "We facilitate POA and final registration." },
                ].map((step, i) => (
                    <motion.div 
                        key={i}
                        variants={itemVar}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        className="relative z-10 bg-black p-8 rounded-3xl border border-neutral-800 text-center hover:border-gold-500 transition-all duration-300 group hover:-translate-y-2 shadow-xl"
                    >
                        <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-6 mx-auto border border-gold-500/30 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-500">
                            <step.icon className="w-8 h-8 text-gold-500 group-hover:text-black transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 font-playfair">{step.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* ================= 5. LOCATION, INFRASTRUCTURE & BENEFITS ================= */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Location Advantage */}
                <div>
                    <h3 className="text-4xl font-playfair font-bold text-white mb-8">Location & <span className="text-gold-500">Infrastructure</span></h3>
                    <p className="text-gray-400 mb-8 text-lg">Bangalore is expanding rapidly. Our projects are strategically located in the "Golden Quadrilateral" of growth.</p>
                    
                    <div className="space-y-6">
                        <motion.div whileHover={{ x: 10 }} className="bg-neutral-900/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-800 border-l-4 border-l-gold-500">
                            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><MapPin className="text-gold-500 w-5 h-5"/> Prime Locations</h4>
                            <p className="text-gray-400">Strategically located in Sarjapur and Varthur, close to major IT Tech Parks (Wipro, RGA Tech Park).</p>
                        </motion.div>
                        <motion.div whileHover={{ x: 10 }} className="bg-neutral-900/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-800 border-l-4 border-l-gold-500">
                            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Building className="text-gold-500 w-5 h-5"/> Connectivity</h4>
                            <p className="text-gray-400">Excellent connectivity via the upcoming Metro lines, STRR (Satellite Town Ring Road), and easy airport access.</p>
                        </motion.div>
                    </div>
                </div>

                {/* Investment Benefits Grid */}
                <div>
                    <h3 className="text-4xl font-playfair font-bold text-white mb-8">Investment <span className="text-gold-500">Benefits</span></h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
                            <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-4" />
                            <h4 className="font-bold text-white text-lg">Appreciation</h4>
                            <p className="text-sm text-gray-500 mt-2">Consistent 10-15% annual growth in asset value.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
                            <Landmark className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                            <h4 className="font-bold text-white text-lg">Rental Income</h4>
                            <p className="text-sm text-gray-500 mt-2">High demand ensures 3-5% rental yield annually.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
                            <Lightbulb className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                            <h4 className="font-bold text-white text-lg">Long Term Wealth</h4>
                            <p className="text-sm text-gray-500 mt-2">A tangible asset that builds generational wealth.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-900 transition-colors">
                            <Globe className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                            <h4 className="font-bold text-white text-lg">Global Standards</h4>
                            <p className="text-sm text-gray-500 mt-2">World-class amenities matching global lifestyles.</p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* ================= 6. LEGAL & REGULATORY COMPLIANCE ================= */}
      <section className="py-24 bg-gradient-to-r from-neutral-950 to-black border-y border-gold-900/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 bg-green-900/20 border border-green-500/30 text-green-500 rounded-full text-xs font-bold mb-6 tracking-wider">100% COMPLIANT</div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Legal & Regulatory <span className="text-gold-500">Compliance</span></h2>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Investing in India is simpler than ever. We ensure 100% compliance with FEMA regulations and RBI guidelines for NRI investments. Our dedicated legal team assists you at every step.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    {["FEMA Compliance Checks", "RBI Guidelines Adherence", "Power of Attorney (POA) Assistance", "Repatriation of Funds Support"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-gold-500/30 transition-colors">
                            <Scale className="w-6 h-6 text-gold-500" />
                            <span className="text-gray-200 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-gold-900 shadow-2xl">
                 {/* <Image src="/LookProject11.jpeg" alt="Legal Compliance" fill className="object-cover transition-transform hover:scale-105 duration-700" /> */}
                 <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8">
                    <ShieldCheck className="w-20 h-20 text-gold-500 mb-4 drop-shadow-[0_0_15px_rgba(217,164,6,0.5)]" />
                    <h3 className="text-3xl font-bold text-white font-playfair">Your Investment is Safe</h3>
                    <p className="text-gray-300 mt-2">Verified Titles & Approvals</p>
                 </div>
            </div>
        </div>
      </section>

      {/* ================= 7. FEATURED PROJECTS ================= */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Featured <span className="text-gold-500">Projects</span></h2>
                <p className="text-gray-400 text-lg">Premium residential and commercial developments curated for you.</p>
            </div>

            {/* Residential */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gold-900 flex-1"></div>
                    <h3 className="text-2xl font-bold text-gold-400 uppercase tracking-widest">Residential</h3>
                    <div className="h-px bg-gold-900 flex-1"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "RRL Palacio", loc: "Medahalli", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531", status: "Ready to Move" },
                        { name: "RRL Palm Altezze", loc: "Varthur", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863", status: "New Launch" },
                        { name: "RRL Nature Woods", loc: "Sarjapur", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502", status: "Ready to Move" }
                    ].map((proj, i) => (
                        <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-800 cursor-pointer">
                            <Image src={proj.img} alt={proj.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">{proj.status}</div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-2xl font-bold text-white mb-1 font-playfair">{proj.name}</h4>
                                <p className="text-gold-500 text-sm flex items-center gap-1 font-medium"><MapPin className="w-4 h-4"/> {proj.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Commercial */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gold-900 flex-1"></div>
                    <h3 className="text-2xl font-bold text-gold-400 uppercase tracking-widest">Commercial</h3>
                    <div className="h-px bg-gold-900 flex-1"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { name: "RRL Towers", loc: "Sampige Jala", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451", type: "Office Space" },
                        { name: "RRL Complex", loc: "South Bangalore", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360", type: "Retail & Office" }
                    ].map((proj, i) => (
                        <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video border border-neutral-800 cursor-pointer">
                            <Image src={proj.img} alt={proj.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-xs text-gray-300 bg-gold-500/20 px-2 py-1 rounded mb-2 inline-block border border-gold-500/20">{proj.type}</span>
                                <h4 className="text-2xl font-bold text-white mb-1 font-playfair">{proj.name}</h4>
                                <p className="text-gold-500 text-sm flex items-center gap-1 font-medium"><MapPin className="w-4 h-4"/> {proj.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* ================= 8. TESTIMONIALS (Google Reviews) ================= */}
      <section className="py-24 bg-neutral-950 border-t border-gold-900/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">What People Say on <span className="text-gold-500">Google</span></h2>
            <p className="text-gray-400">Authentic reviews from our happy homeowners.</p>
        </div>
        
        {/* Simple Marquee Implementation */}
        <div className="relative flex w-full overflow-hidden group">
             <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
             <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
             
             <motion.div 
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 99, // Changed from 60 to 90 for slower speed
                    repeatType: "loop"
                }}
             >
                {/* We double the reviews array to create a seamless loop */}
                {[...googleReviews, ...googleReviews].map((review, idx) => (
                    <div key={idx} className="w-[400px] flex-shrink-0 bg-black p-8 rounded-3xl border border-neutral-800 hover:border-gold-500/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, s) => <Star key={s} className="w-4 h-4 fill-gold-500 text-gold-500" />)}
                            </div>
                            <span className="text-xs text-gray-500 bg-neutral-900 px-2 py-1 rounded">{review.date}</span>
                        </div>
                        <p className="text-gray-300 italic mb-6 text-sm whitespace-normal leading-relaxed h-[80px] overflow-hidden text-ellipsis line-clamp-4">
                            "{review.text}"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-black font-bold text-lg">
                                {review.name.charAt(0)}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">{review.name}</p>
                                <p className="text-blue-400 text-xs flex items-center gap-1 mt-1">
                                    <GoogleIcon /> {/* Added Custom Google Icon */}
                                    Google Review
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
             </motion.div>
        </div>
      </section>

    </div>
  )
}