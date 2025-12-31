// // // // import { ProjectHero } from "@/components/projects/project-hero"
// // // // import { ProjectDetails } from "@/components/projects/project-details"
// // // // import { ProjectAmenities } from "@/components/projects/project-amenities"
// // // // import { ProjectSpecifications } from "@/components/projects/project-specifications"
// // // // import { ProjectGallery } from "@/components/projects/project-gallery"
// // // // import { ContactForm } from "@/components/contact/contact-form"

// // // // export default function NatureWoodsPage() {
// // // //   const projectData = {
// // // //     name: "RRL Nature Woods",
// // // //     subtitle: "2 & 3 BHK Apartments in Sarjapur Road",
// // // //     description:
// // // //       "Settled between Whitefield & Electronic City, Soul Tree at Sompura Gate offers close proximity to Wipro IT Park, Infosys at Huskur, Marathahalli, and Koramangala all while being conveniently tucked away from the concrete jungle's hustle and bustle.",
// // // //     status: "Award Winner",
// // // //     heroImage:
// // // //       "/naturalwood.png",
// // // //     features: [
// // // //       "RERA No: PRM/KA/RERA/1251/308/PR/171023/005654",
// // // //       "Occupying an area of 1.53 acres on the NH-7 and scaling upto G+7 floors, the project offers spacious 2 BHK and 3 BHK apartments",
// // // //       "Located at Sarjapur Road which is located in south-east Bangalore, is one of the fastest growing parts of the city which makes it a perfect & favoured property investment destination",
// // // //       "15 to 40 mins drive away from all the major IT hubs, connecting Sarjapur Road in confluence to Whitefield, Electronic City and the Outer Ring Road in SEZ areas",
// // // //       "Near to some of the topmost & best-rated schools in Bangalore such as Azim Premji University (Wipro), Greenwood High (ICSE) School, LNK Management School and more",
// // // //       "Provides best in class amenities for a life of leisure and luxury within the project, at the lap of nature",
// // // //     ],
// // // //     specifications: {
// // // //       civil: [
// // // //         "Structure: R.C.C framed structure, designed as per relevant IS codes for earthquake resistance and structurally efficient systems implemented",
// // // //         'Walls: External walls with 6" solid blocks and internal walls with 4" solid blocks',
// // // //         "Plastering: Sponge finish for external walls with smooth cement finish for internal walls",
// // // //         "Amenities: Swimming Pool, Amphitheatre, Jogging Track, Kids' Park, Indoor and Outdoor Gym, Closed Parking for 2 and 3 Wheelers",
// // // //         "Automation: Pump, Light provision has been automated for seamless experience",
// // // //       ],
// // // //       architecture: [
// // // //         "Doors: Main Door - Teak wood frame with OT shutter, Internal doors - Hardwood with flush door shutters",
// // // //         "Flooring: Vitrified tiles for entire flooring in bedrooms, living and balconies. Granite flooring for common areas",
// // // //         "Bathroom: Floor - Anti skid ceramic tiles flooring. And, Walls - Glazed tile dado upto 7' height",
// // // //         "Paint: External walls - Apex paints. And Internal walls - Emulsion paints",
// // // //         "Windows: 3 Track fabrication windows for living and bedroom with safety grills and mosquito mesh. & 2 track for kitchen and bathroom with safety grills",
// // // //       ],
// // // //       services: [
// // // //         "Sanitary: Jaguar CP fittings and Taps or Hindware Sanitary with Geyser provision",
// // // //         "Electricals: Concealed copper wiring with Anchor/Roma switches and sockets",
// // // //         "Grid Power And Back-Up: Generator for common UPS Lift & for each flat (lighting points)",
// // // //         "Elevator: Fully automated 4 lifts of 6 Passenger capacity elevator of reputed make",
// // // //         "Electrical Points: Provision of electrical points for Refrigerator, chimney and washing machine. Individual TV & Telephone points in the living & Master bedroom",
// // // //       ],
// // // //     },
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <ProjectHero project={projectData} />
// // // //       <ProjectDetails project={projectData} />
// // // //       <ProjectAmenities />
// // // //       <ProjectSpecifications specifications={projectData.specifications} />
// // // //       <ProjectGallery projectName="RRL Nature Woods" />
// // // //       <ContactForm />
// // // //     </>
// // // //   )
// // // // }


// // // "use client"

// // // import { useState } from "react"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import { 
// // //   Phone, 
// // //   Mail, 
// // //   MapPin, 
// // //   ChevronDown, 
// // //   X, 
// // //   Building2, 
// // //   Zap, 
// // //   ShieldCheck, 
// // //   Award, 
// // //   Wind, 
// // //   Dumbbell, 
// // //   Waves, 
// // //   MonitorPlay, 
// // //   Gamepad2, 
// // //   Coffee, 
// // //   Trees, 
// // //   CheckCircle2,
// // //   Maximize2,
// // //   ArrowRight,
// // //   Menu,
// // //   User,
// // //   Smartphone,
// // //   Lock,
// // //   Droplets,
// // //   Sofa,
// // //   Sun
// // // } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { Card } from "@/components/ui/card"
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // import { Badge } from "@/components/ui/badge"
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogTrigger,
// // // } from "@/components/ui/dialog"

// // // // --- Types ---
// // // type FloorPlan = {
// // //   id: string
// // //   type: "1BHK" | "2BHK" | "3BHK"
// // //   area: number
// // //   dims: {
// // //     living?: string
// // //     dining?: string
// // //     kitchen: string
// // //     masterBed: string
// // //     bed2?: string
// // //     bed3?: string
// // //   }
// // // }

// // // // --- Data extracted from Individual Floor Plan PDF ---
// // // const floorPlans: FloorPlan[] = [
// // //   // 3 BHK Units
// // //   { id: "01", type: "3BHK", area: 1410, dims: { living: "15'9\" x 11'6\"", dining: "Yes", kitchen: "11'0\" x 8'0\"", masterBed: "11'0\" x 13'9\"", bed2: "10'0\" x 11'6\"", bed3: "11'0\" x 11'6\"" } },
// // //   { id: "02", type: "3BHK", area: 1395, dims: { living: "11'6\" x 14'0\"", dining: "11'6\" x 11'3\"", kitchen: "10'6\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "10'6\" x 14'0\"", bed3: "10'6\" x 13'0\"" } },
  
// // //   // 2 BHK Units
// // //   { id: "03", type: "2BHK", area: 1140, dims: { living: "15'9\" x 11'6\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'6\"" } },
// // //   { id: "04", type: "2BHK", area: 1200, dims: { living: "17'0\" x 11'6\"", dining: "8'6\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "12'0\" x 12'6\"", bed2: "12'0\" x 11'6\"" } },
// // //   { id: "06", type: "2BHK", area: 1050, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 11'0\"", bed2: "12'3\" x 10'6\"" } },
// // //   { id: "07", type: "2BHK", area: 1165, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'6\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" } },
// // //   { id: "08", type: "2BHK", area: 1080, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "12'0\" x 11'0\"", bed2: "12'9\" x 10'6\"" } },
// // //   { id: "09", type: "2BHK", area: 1160, dims: { living: "16'3\" x 11'6\"", dining: "8'6\" x 11'6\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" } },
// // //   { id: "10", type: "2BHK", area: 1000, dims: { living: "11'0\" x 14'9\"", dining: "12'3\" x 8'3\"", kitchen: "7'6\" x 8'6\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 10'0\"" } },
// // //   { id: "11", type: "2BHK", area: 1110, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "7'9\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" } },
// // //   { id: "12", type: "2BHK", area: 1140, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "11'0\" x 12'6\"", bed2: "11'0\" x 11'6\"" } },
// // //   { id: "14", type: "2BHK", area: 1085, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" } },
// // //   { id: "15", type: "2BHK", area: 1150, dims: { living: "16'3\" x 11'0\"", dining: "8'0\" x 9'3\"", kitchen: "8'0\" x 9'3\"", masterBed: "16'3\" x 10'0\"", bed2: "11'6\" x 10'0\"" } },
// // //   { id: "16", type: "2BHK", area: 1015, dims: { living: "13'3\" x 17'9\" (Living/Dining)", kitchen: "8'6\" x 8'0\"", masterBed: "12'0\" x 11'0\"", bed2: "12'0\" x 10'0\"" } },
// // //   { id: "17", type: "2BHK", area: 1140, dims: { living: "22'6\" x 11'0\" (Living/Dining)", kitchen: "8'0\" x 7'9\"", masterBed: "13'0\" x 11'6\"", bed2: "11'0\" x 11'0\"" } },
// // //   { id: "20", type: "2BHK", area: 1060, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'6\" x 11'0\"", bed2: "12'3\" x 10'6\"" } },

// // //   // 1 BHK Units
// // //   { id: "05", type: "1BHK", area: 690, dims: { living: "14'0\" x 12'3\" (Living/Dining)", kitchen: "7'0\" x 6'0\"", masterBed: "11'0\" x 14'0\"" } },
// // //   { id: "13", type: "1BHK", area: 750, dims: { living: "13'6\" x 12'6\" (Living/Dining)", kitchen: "7'0\" x 12'0\"", masterBed: "11'0\" x 12'0\"" } },
// // //   { id: "18", type: "1BHK", area: 720, dims: { living: "14'9\" x 10'6\" (Living/Dining)", kitchen: "11'0\" x 8'0\"", masterBed: "12'0\" x 11'0\"" } },
// // //   { id: "19", type: "1BHK", area: 790, dims: { living: "22'3\" x 10'9\" (Living/Dining)", kitchen: "8'0\" x 8'6\"", masterBed: "14'0\" x 10'6\"" } },
// // // ]

// // // export default function NatureWoodsPage() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // //   const [activeTab, setActiveTab] = useState("all")

// // //   // --- Animation Variants ---
// // //   const fadeIn = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// // //   }

// // //   const staggerContainer = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
// // //   }

// // //   // --- Form Handler ---
// // //   const handleFormSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     alert("Thank you for your enquiry! We will contact you shortly.")
// // //     setIsModalOpen(false)
// // //   }

// // //   // ========== HERO SECTION ==========
// // //   const HeroSection = () => (
// // //     <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
// // //       {/* Background Abstract: Green and Gold for Nature Theme */}
// // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10b981]/20 via-black to-black opacity-60"></div>
// // //       <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
      
// // //       <div className="container mx-auto px-4 relative z-10">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
// // //           {/* Left Content */}
// // //           <motion.div 
// // //             initial="hidden" 
// // //             animate="visible" 
// // //             variants={staggerContainer}
// // //           >
// // //             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// // //                <Badge variant="outline" className="text-[#10b981] border-[#10b981] px-4 py-1 text-sm uppercase tracking-widest bg-[#10b981]/10 backdrop-blur-md">
// // //                   Ready To Move In
// // //                </Badge>
// // //                <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">
// // //                   RERA Approved
// // //                </Badge>
// // //             </motion.div>

// // //             <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// // //               RRL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Nature Woods</span>
// // //             </motion.h1>

// // //             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-6 leading-relaxed border-l-4 border-[#10b981] pl-6 italic">
// // //               "Where Nature Meets Luxury." <br/>
// // //               1, 2 & 3 BHK Luxury Apartments fully furnished with world-class amenities.
// // //             </motion.p>

// // //             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-300">
// // //               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]"/> 140 Units</span>
// // //               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]"/> B+G+7 Floors</span>
// // //               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]"/> Thindlu, Bangalore</span>
// // //             </motion.div>

// // //             <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
// // //               <Button 
// // //                 size="lg" 
// // //                 className="bg-[#10b981] hover:bg-[#059669] text-white font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105"
// // //                 onClick={() => setIsModalOpen(true)}
// // //               >
// // //                 <span className="skew-x-[10deg] flex items-center gap-2">
// // //                   Download Brochure <ArrowRight className="w-5 h-5"/>
// // //                 </span>
// // //               </Button>
// // //               <Button 
// // //                 size="lg" 
// // //                 variant="outline"
// // //                 className="border-[#10b981] text-[#10b981] hover:bg-[#10b981]/10 font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all"
// // //               >
// // //                 <span className="skew-x-[10deg] flex items-center gap-2">
// // //                   <Phone className="w-5 h-5" /> +91 73378 16996
// // //                 </span>
// // //               </Button>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* Right Contact Form */}
// // //           <motion.div 
// // //              initial={{ opacity: 0, x: 50 }}
// // //              animate={{ opacity: 1, x: 0 }}
// // //              transition={{ duration: 0.8, delay: 0.2 }}
// // //              className="w-full max-w-md mx-auto lg:ml-auto"
// // //           >
// // //              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
// // //                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent"></div>
// // //                 <div className="mb-6">
// // //                    <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
// // //                    <p className="text-gray-400 text-sm mt-1">Get exclusive floor plans & pricing.</p>
// // //                 </div>
                
// // //                 <form onSubmit={handleFormSubmit} className="space-y-5">
// // //                    <div className="relative">
// // //                       <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                       <input 
// // //                         type="text" 
// // //                         placeholder="Your Name" 
// // //                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
// // //                         required
// // //                       />
// // //                    </div>
// // //                    <div className="relative">
// // //                       <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                       <input 
// // //                         type="tel" 
// // //                         placeholder="Phone Number" 
// // //                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
// // //                         required
// // //                       />
// // //                    </div>
// // //                    <div className="relative">
// // //                       <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                       <input 
// // //                         type="email" 
// // //                         placeholder="Email Address" 
// // //                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
// // //                         required
// // //                       />
// // //                    </div>
                   
// // //                    <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-lg h-12 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
// // //                       Get Call Back
// // //                    </Button>
                   
// // //                    <p className="text-xs text-center text-gray-500 mt-4">
// // //                       By submitting, you agree to our privacy policy.
// // //                    </p>
// // //                 </form>
// // //              </Card>
// // //           </motion.div>
// // //         </div>
// // //       </div>

// // //       <motion.div 
// // //         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#10b981]/50"
// // //         animate={{ y: [0, 10, 0] }}
// // //         transition={{ duration: 2, repeat: Infinity }}
// // //       >
// // //         <ChevronDown className="w-10 h-10" />
// // //       </motion.div>
// // //     </section>
// // //   )

// // //   // ========== KEY HIGHLIGHTS ==========
// // //   const HighlightsSection = () => (
// // //     <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
// // //       <div className="container mx-auto px-4">
// // //         <div className="text-center mb-12">
// // //            <h2 className="text-3xl md:text-4xl font-bold text-white">Why <span className="text-[#10b981]">RRL Nature Woods?</span></h2>
// // //            <p className="text-gray-400 mt-2">Premium features that redefine standard living.</p>
// // //         </div>
// // //         <motion.div 
// // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           variants={staggerContainer}
// // //         >
// // //           {[
// // //             { icon: Sofa, title: "Fully Furnished", desc: "Premium Century Prowud interiors included." },
// // //             { icon: Zap, title: "100% Power Backup", desc: "Includes AC, Geyser & Induction Stove points." },
// // //             { icon: Lock, title: "Biometric Lock", desc: "Digital security for your main door." },
// // //             { icon: Award, title: "Marble Effect Tiles", desc: "Luxury white floor tiles throughout." },
// // //             { icon: Droplets, title: "Premium Fittings", desc: "Kerovit by Kajaria bathroom fittings." },
// // //           ].map((item, idx) => (
// // //             <motion.div key={idx} variants={fadeIn} className="group">
// // //               <Card className="bg-black/50 border border-white/10 p-6 h-full hover:border-[#10b981]/50 transition-colors duration-300 relative overflow-hidden text-center">
// // //                 <div className="mx-auto w-14 h-14 rounded-full bg-[#10b981]/10 flex items-center justify-center mb-4 text-[#10b981] group-hover:scale-110 transition-transform">
// // //                     <item.icon className="w-7 h-7" />
// // //                 </div>
// // //                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
// // //                 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// // //               </Card>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   )

// // //   // ========== AMENITIES SECTION ==========
// // //   const AmenitiesSection = () => {
// // //     // Amenities extracted from text & PDF
// // //     const amenitiesList = [
// // //       { name: "Swimming Pool", icon: Waves },
// // //       { name: "Toddler's Pool", icon: Waves },
// // //       { name: "Ultra Modern Gym", icon: Dumbbell },
// // //       { name: "Children's Play Area", icon: Gamepad2 },
// // //       { name: "Elder's Park", icon: Trees },
// // //       { name: "Jogging Track", icon: Trees },
// // //       { name: "Cycling Track", icon: Wind },
// // //       { name: "Skating Rink", icon: Gamepad2 },
// // //       { name: "Volleyball Court", icon: Gamepad2 },
// // //       { name: "Cricket Pitch", icon: Gamepad2 },
// // //       { name: "Basketball Court", icon: Gamepad2 },
// // //       { name: "Badminton Court", icon: Gamepad2 },
// // //       { name: "Yoga & Spiritual Centre", icon: Sun },
// // //       { name: "Amphitheatre", icon: MonitorPlay },
// // //       { name: "Indoor Games (TT, Carrom, Chess)", icon: Gamepad2 },
// // //       { name: "Billiards", icon: Gamepad2 },
// // //       { name: "Picnic Lawn", icon: Coffee },
// // //       { name: "Pets Park", icon: Trees },
// // //       { name: "Car Wash Bay", icon: Droplets },
// // //       { name: "EV Charging Provision", icon: Zap },
// // //       { name: "Valet Trash", icon: CheckCircle2 },
// // //       { name: "Laundry in Building", icon: CheckCircle2 },
// // //       { name: "Pharmacy Door Delivery", icon: CheckCircle2 },
// // //       { name: "ATM Provision", icon: CheckCircle2 },
// // //     ]

// // //     return (
// // //       <section className="py-24 bg-black relative overflow-hidden">
// // //         <div className="absolute top-0 left-0 w-full h-full bg-[#10b981]/5"></div>

// // //         <div className="container mx-auto px-4 relative z-10">
// // //           <div className="mb-12 text-center">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#10b981]">Amenities</span></h2>
// // //             <p className="text-gray-400 max-w-2xl mx-auto">
// // //                 From fitness to leisure, RRL Nature Woods offers a comprehensive suite of amenities designed for every member of the family.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
// // //             {amenitiesList.map((item, i) => (
// // //               <motion.div 
// // //                 key={i} 
// // //                 initial={{ opacity: 0, scale: 0.9 }}
// // //                 whileInView={{ opacity: 1, scale: 1 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: i * 0.02 }}
// // //                 className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-[#10b981]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4"
// // //               >
// // //                 <div className="p-2 bg-black rounded-lg text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-colors">
// // //                   <item.icon className="w-5 h-5" />
// // //                 </div>
// // //                 <span className="text-gray-300 text-sm font-medium group-hover:text-white">{item.name}</span>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== FLOOR PLANS SECTION ==========
// // //   const FloorPlansSection = () => {
// // //     const filteredPlans = activeTab === "all" ? floorPlans : floorPlans.filter(p => p.type === activeTab)

// // //     return (
// // //       <section className="py-24 bg-[#050505]" id="floorplans">
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // //             <div>
// // //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#10b981]">Planned</span></h2>
// // //               <p className="text-gray-400 max-w-xl">
// // //                 140 Units | B+G+7 Floors | 20 Unique Layouts <br/>
// // //                 Choose from our wide range of 1, 2 & 3 BHK distinct unit layouts.
// // //               </p>
// // //             </div>
            
// // //             <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
// // //               {["all", "1BHK", "2BHK", "3BHK"].map((tab) => (
// // //                 <button
// // //                   key={tab}
// // //                   onClick={() => setActiveTab(tab)}
// // //                   className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
// // //                     activeTab === tab 
// // //                     ? "bg-[#10b981] text-white shadow-lg" 
// // //                     : "text-gray-400 hover:text-white"
// // //                   }`}
// // //                 >
// // //                   {tab.toUpperCase()}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //             <AnimatePresence mode="popLayout">
// // //               {filteredPlans.map((plan) => (
// // //                 <motion.div
// // //                   key={plan.id}
// // //                   layout
// // //                   initial={{ opacity: 0, scale: 0.9 }}
// // //                   animate={{ opacity: 1, scale: 1 }}
// // //                   exit={{ opacity: 0, scale: 0.9 }}
// // //                   className="group"
// // //                 >
// // //                   <Card className="bg-[#111] border border-white/5 overflow-hidden hover:border-[#10b981] transition-all duration-300">
// // //                     <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
// // //                       <div className="flex justify-between items-start mb-4">
// // //                         <div>
// // //                           <h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3>
// // //                           <p className="text-[#10b981] font-medium">{plan.type}</p>
// // //                         </div>
// // //                         <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
// // //                            Apartment
// // //                         </Badge>
// // //                       </div>
// // //                       <div className="flex items-baseline gap-1">
// // //                         <span className="text-4xl font-bold text-white">{plan.area}</span>
// // //                         <span className="text-gray-500 font-medium">SFT</span>
// // //                       </div>
// // //                     </div>
                    
// // //                     <div className="p-6 space-y-3">
// // //                       <div className="flex justify-between text-sm">
// // //                         <span className="text-gray-500">Living</span>
// // //                         <span className="text-gray-300">{plan.dims.living || "N/A"}</span>
// // //                       </div>
// // //                       <div className="flex justify-between text-sm">
// // //                         <span className="text-gray-500">Master Bed</span>
// // //                         <span className="text-gray-300">{plan.dims.masterBed}</span>
// // //                       </div>
// // //                       <div className="flex justify-between text-sm">
// // //                         <span className="text-gray-500">Kitchen</span>
// // //                         <span className="text-gray-300">{plan.dims.kitchen}</span>
// // //                       </div>
// // //                     </div>

// // //                     <div className="p-4 bg-black">
// // //                       <Dialog>
// // //                         <DialogTrigger asChild>
// // //                           <Button className="w-full bg-white/5 hover:bg-[#10b981] hover:text-white text-white border border-white/10 transition-colors">
// // //                             <Maximize2 className="w-4 h-4 mr-2" /> View Plan
// // //                           </Button>
// // //                         </DialogTrigger>
// // //                         <DialogContent className="bg-[#111] border border-[#333] text-white max-w-3xl">
// // //                           <DialogHeader>
// // //                             <DialogTitle className="text-2xl font-bold text-[#10b981]">
// // //                               Unit {plan.id} - {plan.type} ({plan.area} SFT)
// // //                             </DialogTitle>
// // //                           </DialogHeader>
// // //                           <div className="mt-4 grid md:grid-cols-2 gap-8">
// // //                             <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/20 relative">
// // //                                <p className="text-gray-500 text-center px-4">
// // //                                   Image of Floor Plan Unit {plan.id} goes here.
// // //                                </p>
// // //                             </div>
// // //                             <div className="space-y-6">
// // //                               <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Dimensions</h4>
// // //                               <dl className="grid grid-cols-2 gap-4 text-sm">
// // //                                 <dt className="text-gray-400">Total Area</dt>
// // //                                 <dd className="font-medium text-right text-white">{plan.area} SFT</dd>
                                
// // //                                 <dt className="text-gray-400">Living Area</dt>
// // //                                 <dd className="font-medium text-right text-white">{plan.dims.living}</dd>
                                
// // //                                 {plan.dims.dining && (
// // //                                   <>
// // //                                     <dt className="text-gray-400">Dining</dt>
// // //                                     <dd className="font-medium text-right text-white">{plan.dims.dining}</dd>
// // //                                   </>
// // //                                 )}
                                
// // //                                 <dt className="text-gray-400">Master Bedroom</dt>
// // //                                 <dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
                                
// // //                                 {plan.dims.bed2 && (
// // //                                   <>
// // //                                     <dt className="text-gray-400">Bedroom 2</dt>
// // //                                     <dd className="font-medium text-right text-white">{plan.dims.bed2}</dd>
// // //                                   </>
// // //                                 )}
                                
// // //                                 {plan.dims.bed3 && (
// // //                                   <>
// // //                                     <dt className="text-gray-400">Bedroom 3</dt>
// // //                                     <dd className="font-medium text-right text-white">{plan.dims.bed3}</dd>
// // //                                   </>
// // //                                 )}
                                
// // //                                 <dt className="text-gray-400">Kitchen</dt>
// // //                                 <dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
// // //                               </dl>
// // //                               <Button className="w-full bg-[#10b981] text-white font-bold mt-4" onClick={() => setIsModalOpen(true)}>
// // //                                 Enquire This Unit
// // //                               </Button>
// // //                             </div>
// // //                           </div>
// // //                         </DialogContent>
// // //                       </Dialog>
// // //                     </div>
// // //                   </Card>
// // //                 </motion.div>
// // //               ))}
// // //             </AnimatePresence>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== SPECIFICATIONS ==========
// // //   const SpecsSection = () => {
// // //     const specs = [
// // //       { title: "Structure", desc: "RCC framed structure." },
// // //       { title: "Walls", desc: "6\" solid cement block (Exterior), 4\" solid cement block (Interior)." },
// // //       { title: "Doors", desc: "Main: Teak wood frame with OST shutters. Others: Hardwood frame with flush shutters." },
// // //       { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh." },
// // //       { title: "Flooring", desc: "Vitrified tiles for entire flooring. Granite for common areas." },
// // //       { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
// // //       { title: "Electrical", desc: "Concealed copper wiring with Anchor/Roma switches." },
// // //       { title: "Sanitary", desc: "Jaquar CP fittings & Cera/Hindware/Kerovit Sanitary." },
// // //       { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
// // //       { title: "Water Supply", desc: "24hrs water supply from Borewell + Overhead tank. Cauvery provision." },
// // //       { title: "Power Backup", desc: "Generator for common area, Lift & for each flat (Lighting points)." },
// // //       { title: "Lifts", desc: "Fully Automatic - Four lifts of 6 passengers capacity." },
// // //     ]

// // //     return (
// // //       <section className="py-24 bg-black border-y border-white/5">
// // //          <div className="container mx-auto px-4">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
// // //               Technical <span className="text-[#10b981]">Specifications</span>
// // //             </h2>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
// // //               {specs.map((item, i) => (
// // //                 <div key={i} className="flex gap-4 items-start">
// // //                    <div className="w-2 h-2 mt-2 bg-[#10b981] rounded-full shrink-0 shadow-[0_0_10px_#10b981]"></div>
// // //                    <div>
// // //                       <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
// // //                       <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// // //                    </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //          </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== LOCATION SECTION ==========
// // //   const LocationSection = () => (
// // //     <section className="py-24 bg-[#0a0a0a]">
// // //       <div className="container mx-auto px-4">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// // //           <div>
// // //             <Badge className="bg-[#10b981] text-white mb-4 hover:bg-[#10b981]">Prime Location</Badge>
// // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// // //               Connected to <span className="text-[#10b981]">Everything</span>
// // //             </h2>
// // //             <p className="text-gray-400 mb-8 text-lg">
// // //               Strategically located at Thindlu, near Sarjapura Bus Stop. Enjoy easy accessibility to Wipro SEZ, Electronic City, and top international schools.
// // //             </p>

// // //             <div className="space-y-8">
// // //                <div className="border-l-2 border-[#333] pl-6 relative">
// // //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#10b981] rounded-full"></div>
// // //                  <h4 className="text-white font-bold text-lg mb-2">Tech Hubs</h4>
// // //                  <p className="text-gray-500">Wipro SEZ, RMZ SEZ 2, Cisco, Intel, JP Morgan, Eco Space.</p>
// // //                </div>
// // //                <div className="border-l-2 border-[#333] pl-6 relative">
// // //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#10b981] rounded-full"></div>
// // //                  <h4 className="text-white font-bold text-lg mb-2">Schools</h4>
// // //                  <p className="text-gray-500">Greenwood High, Indus Intl, TISB, GEAR Innovative, Delhi Public School.</p>
// // //                </div>
// // //                <div className="border-l-2 border-[#333] pl-6 relative">
// // //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#10b981] rounded-full"></div>
// // //                  <h4 className="text-white font-bold text-lg mb-2">Essentials</h4>
// // //                  <p className="text-gray-500">D-Mart, Decathlon, Sarjapura Market, Krupanidhi College.</p>
// // //                </div>
// // //             </div>
// // //           </div>
          
// // //           <div className="relative">
// // //              <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
// // //                {/* Map Placeholder */}
// // //                <div className="w-full h-[500px] bg-[#000] rounded-lg flex items-center justify-center flex-col gap-4 overflow-hidden relative">
// // //                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] opacity-50 bg-cover bg-center"></div>
// // //                    <MapPin className="w-16 h-16 text-[#10b981] animate-bounce relative z-10" />
// // //                    <p className="text-gray-300 relative z-10 font-bold bg-black/50 px-4 py-2 rounded">Thindlu, Bangalore</p>
// // //                </div>
// // //              </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )

// // //   // ========== FOOTER / CTA ==========
// // //   const FooterSection = () => (
// // //     <footer className="bg-black pt-24 pb-12 border-t border-white/10">
// // //        <div className="container mx-auto px-4 text-center">
// // //           <div className="max-w-3xl mx-auto mb-16">
// // //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#10b981]">Nature?</span></h2>
// // //             <p className="text-gray-400 mb-8">Download the brochure to see the complete floor plans, legal approvals, and pricing details.</p>
// // //             <Button 
// // //               size="lg" 
// // //               className="bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all"
// // //               onClick={() => setIsModalOpen(true)}
// // //             >
// // //               Enquire Now
// // //             </Button>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 text-left">
// // //             <div>
// // //                <h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#10b981]">Nature Woods</span></h3>
// // //                <p className="text-gray-500 text-sm">RERA: PRM/KA/RERA/1251/308/PR/110722/005054</p>
// // //                <p className="text-gray-500 text-sm mt-2">Sy. No 23/1, RRL Towers, Sarjapura Road, Bangalore.</p>
// // //             </div>
// // //             <div>
// // //               <h4 className="text-white font-bold mb-4">Quick Links</h4>
// // //               <ul className="space-y-2 text-gray-500 text-sm">
// // //                 <li><a href="#" className="hover:text-[#10b981]">Home</a></li>
// // //                 <li><a href="#floorplans" className="hover:text-[#10b981]">Floor Plans</a></li>
// // //                 <li><a href="#" className="hover:text-[#10b981]">Amenities</a></li>
// // //                 <li><a href="#" className="hover:text-[#10b981]">Location</a></li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //                <h4 className="text-white font-bold mb-4">Contact</h4>
// // //                <p className="text-gray-500 text-sm mb-2">Mr. Ram R (Managing Director)</p>
// // //                <p className="text-gray-500 text-sm font-bold text-white">+91 73378 16996 / 91</p>
// // //                <p className="text-gray-500 text-sm">sales@rrlbuilders.com</p>
// // //             </div>
// // //           </div>
// // //           <div className="mt-12 text-center text-gray-700 text-xs">
// // //             © 2024 RRL Builders and Developers Pvt Ltd. All rights reserved. Disclaimer: Images are for representation purpose only.
// // //           </div>
// // //        </div>
// // //     </footer>
// // //   )

// // //   // ========== MODAL ==========
// // //   const EnquiryModal = () => (
// // //     <AnimatePresence>
// // //       {isModalOpen && (
// // //         <motion.div 
// // //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           exit={{ opacity: 0 }}
// // //           onClick={() => setIsModalOpen(false)}
// // //         >
// // //           <motion.div 
// // //             className="bg-[#111] border border-[#10b981] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(16,185,129,0.15)]"
// // //             initial={{ scale: 0.9, y: 20 }}
// // //             animate={{ scale: 1, y: 0 }}
// // //             exit={{ scale: 0.9, y: 20 }}
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             <button 
// // //               onClick={() => setIsModalOpen(false)}
// // //               className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
// // //             >
// // //               <X className="w-6 h-6" />
// // //             </button>
            
// // //             <div className="text-center mb-8">
// // //                <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
// // //                <p className="text-[#10b981] text-sm">Fill the form to unlock exclusive offers</p>
// // //             </div>

// // //             <form onSubmit={handleFormSubmit} className="space-y-4">
// // //               <div className="space-y-2">
// // //                 <input 
// // //                   type="text" 
// // //                   placeholder="Your Name" 
// // //                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#10b981] outline-none transition-colors" 
// // //                   required 
// // //                 />
// // //               </div>
// // //               <div className="space-y-2">
// // //                 <input 
// // //                   type="tel" 
// // //                   placeholder="Phone Number" 
// // //                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#10b981] outline-none transition-colors" 
// // //                   required 
// // //                 />
// // //               </div>
// // //               <div className="space-y-2">
// // //                 <input 
// // //                   type="email" 
// // //                   placeholder="Email Address" 
// // //                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#10b981] outline-none transition-colors" 
// // //                   required 
// // //                 />
// // //               </div>
// // //               <Button className="w-full bg-[#10b981] text-white font-bold text-lg h-12 hover:bg-[#059669] mt-2">
// // //                 Submit Enquiry
// // //               </Button>
// // //             </form>
// // //           </motion.div>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   )

// // //   return (
// // //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#10b981] selection:text-white">
// // //       {/* Navigation Bar */}
// // //       <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
// // //          <div className="container mx-auto px-4 flex justify-between items-center">
// // //             <div className="text-2xl font-bold tracking-tighter">
// // //                RRL <span className="text-[#10b981]">Nature Woods</span>
// // //             </div>
// // //             <Button 
// // //                variant="outline" 
// // //                className="hidden md:flex border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white"
// // //                onClick={() => setIsModalOpen(true)}
// // //             >
// // //                Enquire Now
// // //             </Button>
// // //             <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}>
// // //                <Menu />
// // //             </button>
// // //          </div>
// // //       </nav>

// // //       <HeroSection />
// // //       <HighlightsSection />
// // //       <AmenitiesSection />
// // //       <FloorPlansSection />
// // //       <SpecsSection />
// // //       <LocationSection />
// // //       <FooterSection />
// // //       <EnquiryModal />
// // //     </main>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { 
// //   Phone, 
// //   Mail, 
// //   MapPin, 
// //   ChevronDown, 
// //   X, 
// //   Building2, 
// //   Zap, 
// //   ShieldCheck, 
// //   Award, 
// //   Wind, 
// //   Dumbbell, 
// //   Waves, 
// //   MonitorPlay, 
// //   Gamepad2, 
// //   Coffee, 
// //   Trees, 
// //   CheckCircle2,
// //   Maximize2,
// //   ArrowRight,
// //   Menu,
// //   User,
// //   Smartphone,
// //   Lock,
// //   Droplets,
// //   Sofa,
// //   Sun
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Badge } from "@/components/ui/badge"
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog"

// // // --- Types ---
// // type FloorPlan = {
// //   id: string
// //   type: "1BHK" | "2BHK" | "3BHK"
// //   area: number
// //   dims: {
// //     living?: string
// //     dining?: string
// //     kitchen: string
// //     masterBed: string
// //     bed2?: string
// //     bed3?: string
// //   }
// // }

// // // --- Data extracted from Individual Floor Plan PDF ---
// // const floorPlans: FloorPlan[] = [
// //   // 3 BHK Units
// //   { id: "01", type: "3BHK", area: 1410, dims: { living: "15'9\" x 11'6\"", dining: "Yes", kitchen: "11'0\" x 8'0\"", masterBed: "11'0\" x 13'9\"", bed2: "10'0\" x 11'6\"", bed3: "11'0\" x 11'6\"" } },
// //   { id: "02", type: "3BHK", area: 1395, dims: { living: "11'6\" x 14'0\"", dining: "11'6\" x 11'3\"", kitchen: "10'6\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "10'6\" x 14'0\"", bed3: "10'6\" x 13'0\"" } },
  
// //   // 2 BHK Units
// //   { id: "03", type: "2BHK", area: 1140, dims: { living: "15'9\" x 11'6\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'6\"" } },
// //   { id: "04", type: "2BHK", area: 1200, dims: { living: "17'0\" x 11'6\"", dining: "8'6\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "12'0\" x 12'6\"", bed2: "12'0\" x 11'6\"" } },
// //   { id: "06", type: "2BHK", area: 1050, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 11'0\"", bed2: "12'3\" x 10'6\"" } },
// //   { id: "07", type: "2BHK", area: 1165, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'6\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" } },
// //   { id: "08", type: "2BHK", area: 1080, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "12'0\" x 11'0\"", bed2: "12'9\" x 10'6\"" } },
// //   { id: "09", type: "2BHK", area: 1160, dims: { living: "16'3\" x 11'6\"", dining: "8'6\" x 11'6\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" } },
// //   { id: "10", type: "2BHK", area: 1000, dims: { living: "11'0\" x 14'9\"", dining: "12'3\" x 8'3\"", kitchen: "7'6\" x 8'6\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 10'0\"" } },
// //   { id: "11", type: "2BHK", area: 1110, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "7'9\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "12", type: "2BHK", area: 1140, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "11'0\" x 12'6\"", bed2: "11'0\" x 11'6\"" } },
// //   { id: "14", type: "2BHK", area: 1085, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "15", type: "2BHK", area: 1150, dims: { living: "16'3\" x 11'0\"", dining: "8'0\" x 9'3\"", kitchen: "8'0\" x 9'3\"", masterBed: "16'3\" x 10'0\"", bed2: "11'6\" x 10'0\"" } },
// //   { id: "16", type: "2BHK", area: 1015, dims: { living: "13'3\" x 17'9\" (Living/Dining)", kitchen: "8'6\" x 8'0\"", masterBed: "12'0\" x 11'0\"", bed2: "12'0\" x 10'0\"" } },
// //   { id: "17", type: "2BHK", area: 1140, dims: { living: "22'6\" x 11'0\" (Living/Dining)", kitchen: "8'0\" x 7'9\"", masterBed: "13'0\" x 11'6\"", bed2: "11'0\" x 11'0\"" } },
// //   { id: "20", type: "2BHK", area: 1060, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'6\" x 11'0\"", bed2: "12'3\" x 10'6\"" } },

// //   // 1 BHK Units
// //   { id: "05", type: "1BHK", area: 690, dims: { living: "14'0\" x 12'3\" (Living/Dining)", kitchen: "7'0\" x 6'0\"", masterBed: "11'0\" x 14'0\"" } },
// //   { id: "13", type: "1BHK", area: 750, dims: { living: "13'6\" x 12'6\" (Living/Dining)", kitchen: "7'0\" x 12'0\"", masterBed: "11'0\" x 12'0\"" } },
// //   { id: "18", type: "1BHK", area: 720, dims: { living: "14'9\" x 10'6\" (Living/Dining)", kitchen: "11'0\" x 8'0\"", masterBed: "12'0\" x 11'0\"" } },
// //   { id: "19", type: "1BHK", area: 790, dims: { living: "22'3\" x 10'9\" (Living/Dining)", kitchen: "8'0\" x 8'6\"", masterBed: "14'0\" x 10'6\"" } },
// // ]

// // export default function NatureWoodsPage() {
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [activeTab, setActiveTab] = useState("all")

// //   // --- Animation Variants ---
// //   const fadeIn = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// //   }

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
// //   }

// //   // --- Form Handler ---
// //   const handleFormSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     alert("Thank you for your enquiry! We will contact you shortly.")
// //     setIsModalOpen(false)
// //   }

// //   const HeroImageBanner = () => {
// //     return (
// //       <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black border-y border-[#333]">
// //         <motion.div 
// //           initial={{ scale: 1.1, opacity: 0 }}
// //           whileInView={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 1.5 }}
// //           viewport={{ once: true }}
// //           className="w-full h-full relative"
// //         >
// //           {/* The Image */}
// //           <img 
// //             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766055907/RRl_website_banners_1536_x_752_px_6_liyalp.png" 
// //             alt="RRL Hero Banner" 
// //             className="w-full h-full object-fill"
// //           />
          
// //           {/* Gradient Overlay for style */}
// //           {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div> */}
          
// //           {/* Optional Text Overlay */}
// //           <div className="absolute bottom-10 left-0 w-full text-center z-10">
// //             {/* <p className="text-[#d9a406] uppercase tracking-[0.2em] text-sm md:text-base font-semibold bg-black/50 inline-block px-4 py-2 rounded-full backdrop-blur-md border border-[#d9a406]/30">
// //               Excellence in Construction
// //             </p> */}
// //           </div>
// //         </motion.div>
// //       </section>
// //     );
// //   };
  
// //   // ========== HERO SECTION ==========
// //   const HeroSection = () => (
// //     <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
// //       {/* Background Abstract: Gold and Black */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// //       <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
// //       <div className="container mx-auto px-4 relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
// //           {/* Left Content */}
// //           <motion.div 
// //             initial="hidden" 
// //             animate="visible" 
// //             variants={staggerContainer}
// //           >
// //             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// //                <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">
// //                   Ready To Move In
// //                </Badge>
// //                <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">
// //                   RERA Approved
// //                </Badge>
// //             </motion.div>

// //             <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// //               RRL <br/> 
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Nature Woods</span>
// //             </motion.h1>

// //             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-6 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic">
// //               "Where Nature Meets Luxury." <br/>
// //               1, 2 & 3 BHK Luxury Apartments fully furnished with world-class amenities.
// //             </motion.p>

// //             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-300">
// //               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> 140 Units</span>
// //               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> B+G+7 Floors</span>
// //               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> Thindlu, Bangalore</span>
// //             </motion.div>

// //             <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
// //               <Button 
// //                 size="lg" 
// //                 className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105"
// //                 onClick={() => setIsModalOpen(true)}
// //               >
// //                 <span className="skew-x-[10deg] flex items-center gap-2">
// //                   Download Brochure <ArrowRight className="w-5 h-5"/>
// //                 </span>
// //               </Button>
// //               <Button 
// //                 size="lg" 
// //                 variant="outline"
// //                 className="border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406]/10 font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all"
// //               >
// //                 <span className="skew-x-[10deg] flex items-center gap-2">
// //                   <Phone className="w-5 h-5" /> +91 73378 16996
// //                 </span>
// //               </Button>
// //             </motion.div>
// //           </motion.div>

// //           {/* Right Contact Form */}
// //           <motion.div 
// //              initial={{ opacity: 0, x: 50 }}
// //              animate={{ opacity: 1, x: 0 }}
// //              transition={{ duration: 0.8, delay: 0.2 }}
// //              className="w-full max-w-md mx-auto lg:ml-auto"
// //           >
// //              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
// //                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
// //                 <div className="mb-6">
// //                    <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
// //                    <p className="text-gray-400 text-sm mt-1">Get exclusive floor plans & pricing.</p>
// //                 </div>
                
// //                 <form onSubmit={handleFormSubmit} className="space-y-5">
// //                    <div className="relative">
// //                       <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                       <input 
// //                         type="text" 
// //                         placeholder="Your Name" 
// //                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// //                         required
// //                       />
// //                    </div>
// //                    <div className="relative">
// //                       <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                       <input 
// //                         type="tel" 
// //                         placeholder="Phone Number" 
// //                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// //                         required
// //                       />
// //                    </div>
// //                    <div className="relative">
// //                       <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                       <input 
// //                         type="email" 
// //                         placeholder="Email Address" 
// //                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// //                         required
// //                       />
// //                    </div>
                   
// //                    <Button className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all">
// //                       Get Call Back
// //                    </Button>
                   
// //                    <p className="text-xs text-center text-gray-500 mt-4">
// //                       By submitting, you agree to our privacy policy.
// //                    </p>
// //                 </form>
// //              </Card>
// //           </motion.div>
// //         </div>
// //       </div>

// //       <motion.div 
// //         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d9a406]/50"
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //       >
// //         <ChevronDown className="w-10 h-10" />
// //       </motion.div>
// //     </section>
// //   )

// //   // ========== KEY HIGHLIGHTS ==========
// //   const HighlightsSection = () => (
// //     <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12">
// //            <h2 className="text-3xl md:text-4xl font-bold text-white">Why <span className="text-[#d9a406]">RRL Nature Woods?</span></h2>
// //            <p className="text-gray-400 mt-2">Premium features that redefine standard living.</p>
// //         </div>
// //         <motion.div 
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //         >
// //           {[
// //             { icon: Sofa, title: "Fully Furnished", desc: "Premium Century Prowud interiors included." },
// //             { icon: Zap, title: "100% Power Backup", desc: "Includes AC, Geyser & Induction Stove points." },
// //             { icon: Lock, title: "Biometric Lock", desc: "Digital security for your main door." },
// //             { icon: Award, title: "Marble Effect Tiles", desc: "Luxury white floor tiles throughout." },
// //             { icon: Droplets, title: "Premium Fittings", desc: "Kerovit by Kajaria bathroom fittings." },
// //           ].map((item, idx) => (
// //             <motion.div key={idx} variants={fadeIn} className="group">
// //               <Card className="bg-black/50 border border-white/10 p-6 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden text-center">
// //                 <div className="mx-auto w-14 h-14 rounded-full bg-[#d9a406]/10 flex items-center justify-center mb-4 text-[#d9a406] group-hover:scale-110 transition-transform">
// //                     <item.icon className="w-7 h-7" />
// //                 </div>
// //                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
// //                 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// //               </Card>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   )

// //   // ========== AMENITIES SECTION ==========
// //   const AmenitiesSection = () => {
// //     // Amenities extracted from text & PDF
// //     const amenitiesList = [
// //       { name: "Swimming Pool", icon: Waves },
// //       { name: "Toddler's Pool", icon: Waves },
// //       { name: "Ultra Modern Gym", icon: Dumbbell },
// //       { name: "Children's Play Area", icon: Gamepad2 },
// //       { name: "Elder's Park", icon: Trees },
// //       { name: "Jogging Track", icon: Trees },
// //       { name: "Cycling Track", icon: Wind },
// //       { name: "Skating Rink", icon: Gamepad2 },
// //       { name: "Volleyball Court", icon: Gamepad2 },
// //       { name: "Cricket Pitch", icon: Gamepad2 },
// //       { name: "Basketball Court", icon: Gamepad2 },
// //       { name: "Badminton Court", icon: Gamepad2 },
// //       { name: "Yoga & Spiritual Centre", icon: Sun },
// //       { name: "Amphitheatre", icon: MonitorPlay },
// //       { name: "Indoor Games (TT, Carrom, Chess)", icon: Gamepad2 },
// //       { name: "Billiards", icon: Gamepad2 },
// //       { name: "Picnic Lawn", icon: Coffee },
// //       { name: "Pets Park", icon: Trees },
// //       { name: "Car Wash Bay", icon: Droplets },
// //       { name: "EV Charging Provision", icon: Zap },
// //       { name: "Valet Trash", icon: CheckCircle2 },
// //       { name: "Laundry in Building", icon: CheckCircle2 },
// //       { name: "Pharmacy Door Delivery", icon: CheckCircle2 },
// //       { name: "ATM Provision", icon: CheckCircle2 },
// //     ]

// //     return (
// //       <section className="py-24 bg-black relative overflow-hidden">
// //         <div className="absolute top-0 left-0 w-full h-full bg-[#d9a406]/5"></div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="mb-12 text-center">
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
// //             <p className="text-gray-400 max-w-2xl mx-auto">
// //                 From fitness to leisure, RRL Nature Woods offers a comprehensive suite of amenities designed for every member of the family.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
// //             {amenitiesList.map((item, i) => (
// //               <motion.div 
// //                 key={i} 
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: i * 0.02 }}
// //                 className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4"
// //               >
// //                 <div className="p-2 bg-black rounded-lg text-[#d9a406] group-hover:bg-[#d9a406] group-hover:text-black transition-colors">
// //                   <item.icon className="w-5 h-5" />
// //                 </div>
// //                 <span className="text-gray-300 text-sm font-medium group-hover:text-white">{item.name}</span>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== FLOOR PLANS SECTION ==========
// //   const FloorPlansSection = () => {
// //     const filteredPlans = activeTab === "all" ? floorPlans : floorPlans.filter(p => p.type === activeTab)

// //     return (
// //       <section className="py-24 bg-[#050505]" id="floorplans">
// //         <div className="container mx-auto px-4">
// //           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// //             <div>
// //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
// //               <p className="text-gray-400 max-w-xl">
// //                 140 Units | B+G+7 Floors | 20 Unique Layouts <br/>
// //                 Choose from our wide range of 1, 2 & 3 BHK distinct unit layouts.
// //               </p>
// //             </div>
            
// //             <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
// //               {["all", "1BHK", "2BHK", "3BHK"].map((tab) => (
// //                 <button
// //                   key={tab}
// //                   onClick={() => setActiveTab(tab)}
// //                   className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
// //                     activeTab === tab 
// //                     ? "bg-[#d9a406] text-black shadow-lg" 
// //                     : "text-gray-400 hover:text-white"
// //                   }`}
// //                 >
// //                   {tab.toUpperCase()}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             <AnimatePresence mode="popLayout">
// //               {filteredPlans.map((plan) => (
// //                 <motion.div
// //                   key={plan.id}
// //                   layout
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   exit={{ opacity: 0, scale: 0.9 }}
// //                   className="group"
// //                 >
// //                   <Card className="bg-[#111] border border-white/5 overflow-hidden hover:border-[#d9a406] transition-all duration-300">
// //                     <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
// //                       <div className="flex justify-between items-start mb-4">
// //                         <div>
// //                           <h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3>
// //                           <p className="text-[#d9a406] font-medium">{plan.type}</p>
// //                         </div>
// //                         <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
// //                            Apartment
// //                         </Badge>
// //                       </div>
// //                       <div className="flex items-baseline gap-1">
// //                         <span className="text-4xl font-bold text-white">{plan.area}</span>
// //                         <span className="text-gray-500 font-medium">SFT</span>
// //                       </div>
// //                     </div>
                    
// //                     <div className="p-6 space-y-3">
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500">Living</span>
// //                         <span className="text-gray-300">{plan.dims.living || "N/A"}</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500">Master Bed</span>
// //                         <span className="text-gray-300">{plan.dims.masterBed}</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-gray-500">Kitchen</span>
// //                         <span className="text-gray-300">{plan.dims.kitchen}</span>
// //                       </div>
// //                     </div>

// //                     <div className="p-4 bg-black">
// //                       <Dialog>
// //                         <DialogTrigger asChild>
// //                           <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
// //                             <Maximize2 className="w-4 h-4 mr-2" /> View Plan
// //                           </Button>
// //                         </DialogTrigger>
// //                         <DialogContent className="bg-[#111] border border-[#333] text-white max-w-3xl">
// //                           <DialogHeader>
// //                             <DialogTitle className="text-2xl font-bold text-[#d9a406]">
// //                               Unit {plan.id} - {plan.type} ({plan.area} SFT)
// //                             </DialogTitle>
// //                           </DialogHeader>
// //                           <div className="mt-4 grid md:grid-cols-2 gap-8">
// //                             <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/20 relative">
// //                                <p className="text-gray-500 text-center px-4">
// //                                   Image of Floor Plan Unit {plan.id} goes here.
// //                                </p>
// //                             </div>
// //                             <div className="space-y-6">
// //                               <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Dimensions</h4>
// //                               <dl className="grid grid-cols-2 gap-4 text-sm">
// //                                 <dt className="text-gray-400">Total Area</dt>
// //                                 <dd className="font-medium text-right text-white">{plan.area} SFT</dd>
                                
// //                                 <dt className="text-gray-400">Living Area</dt>
// //                                 <dd className="font-medium text-right text-white">{plan.dims.living}</dd>
                                
// //                                 {plan.dims.dining && (
// //                                   <>
// //                                     <dt className="text-gray-400">Dining</dt>
// //                                     <dd className="font-medium text-right text-white">{plan.dims.dining}</dd>
// //                                   </>
// //                                 )}
                                
// //                                 <dt className="text-gray-400">Master Bedroom</dt>
// //                                 <dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
                                
// //                                 {plan.dims.bed2 && (
// //                                   <>
// //                                     <dt className="text-gray-400">Bedroom 2</dt>
// //                                     <dd className="font-medium text-right text-white">{plan.dims.bed2}</dd>
// //                                   </>
// //                                 )}
                                
// //                                 {plan.dims.bed3 && (
// //                                   <>
// //                                     <dt className="text-gray-400">Bedroom 3</dt>
// //                                     <dd className="font-medium text-right text-white">{plan.dims.bed3}</dd>
// //                                   </>
// //                                 )}
                                
// //                                 <dt className="text-gray-400">Kitchen</dt>
// //                                 <dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
// //                               </dl>
// //                               <Button className="w-full bg-[#d9a406] text-black font-bold mt-4" onClick={() => setIsModalOpen(true)}>
// //                                 Enquire This Unit
// //                               </Button>
// //                             </div>
// //                           </div>
// //                         </DialogContent>
// //                       </Dialog>
// //                     </div>
// //                   </Card>
// //                 </motion.div>
// //               ))}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </section>
// //     )
// //   }

// //   // ========== SPECIFICATIONS ==========
// //   const SpecsSection = () => {
// //     const specs = [
// //       { title: "Structure", desc: "RCC framed structure." },
// //       { title: "Walls", desc: "6\" solid cement block (Exterior), 4\" solid cement block (Interior)." },
// //       { title: "Doors", desc: "Main: Teak wood frame with OST shutters. Others: Hardwood frame with flush shutters." },
// //       { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh." },
// //       { title: "Flooring", desc: "Vitrified tiles for entire flooring. Granite for common areas." },
// //       { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
// //       { title: "Electrical", desc: "Concealed copper wiring with Anchor/Roma switches." },
// //       { title: "Sanitary", desc: "Jaquar CP fittings & Cera/Hindware/Kerovit Sanitary." },
// //       { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
// //       { title: "Water Supply", desc: "24hrs water supply from Borewell + Overhead tank. Cauvery provision." },
// //       { title: "Power Backup", desc: "Generator for common area, Lift & for each flat (Lighting points)." },
// //       { title: "Lifts", desc: "Fully Automatic - Four lifts of 6 passengers capacity." },
// //     ]

// //     return (
// //       <section className="py-24 bg-black border-y border-white/5">
// //          <div className="container mx-auto px-4">
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
// //               Technical <span className="text-[#d9a406]">Specifications</span>
// //             </h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
// //               {specs.map((item, i) => (
// //                 <div key={i} className="flex gap-4 items-start">
// //                    <div className="w-2 h-2 mt-2 bg-[#d9a406] rounded-full shrink-0 shadow-[0_0_10px_#d9a406]"></div>
// //                    <div>
// //                       <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
// //                       <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// //                    </div>
// //                 </div>
// //               ))}
// //             </div>
// //          </div>
// //       </section>
// //     )
// //   }

// //   // ========== LOCATION SECTION ==========
// //   const LocationSection = () => (
// //     <section className="py-24 bg-[#0a0a0a]">
// //       <div className="container mx-auto px-4">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //           <div>
// //             <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406]">Prime Location</Badge>
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //               Connected to <span className="text-[#d9a406]">Everything</span>
// //             </h2>
// //             <p className="text-gray-400 mb-8 text-lg">
// //               Strategically located at Thindlu, near Sarjapura Bus Stop. Enjoy easy accessibility to Wipro SEZ, Electronic City, and top international schools.
// //             </p>

// //             <div className="space-y-8">
// //                <div className="border-l-2 border-[#333] pl-6 relative">
// //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
// //                  <h4 className="text-white font-bold text-lg mb-2">Tech Hubs</h4>
// //                  <p className="text-gray-500">Wipro SEZ, RMZ SEZ 2, Cisco, Intel, JP Morgan, Eco Space.</p>
// //                </div>
// //                <div className="border-l-2 border-[#333] pl-6 relative">
// //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// //                  <h4 className="text-white font-bold text-lg mb-2">Schools</h4>
// //                  <p className="text-gray-500">Greenwood High, Indus Intl, TISB, GEAR Innovative, Delhi Public School.</p>
// //                </div>
// //                <div className="border-l-2 border-[#333] pl-6 relative">
// //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// //                  <h4 className="text-white font-bold text-lg mb-2">Essentials</h4>
// //                  <p className="text-gray-500">D-Mart, Decathlon, Sarjapura Market, Krupanidhi College.</p>
// //                </div>
// //             </div>
// //           </div>
          
// //           <div className="relative">
// //              <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
// //                {/* Map Placeholder */}
// //                <div className="w-full h-[500px] bg-[#000] rounded-lg flex items-center justify-center flex-col gap-4 overflow-hidden relative">
// //                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] opacity-50 bg-cover bg-center"></div>
// //                    <MapPin className="w-16 h-16 text-[#d9a406] animate-bounce relative z-10" />
// //                    <p className="text-gray-300 relative z-10 font-bold bg-black/50 px-4 py-2 rounded">Thindlu, Bangalore</p>
// //                </div>
// //              </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )

// //   // ========== FOOTER / CTA ==========
// //   const FooterSection = () => (
// //     <footer className="bg-black pt-24 pb-12 border-t border-white/10">
// //        <div className="container mx-auto px-4 text-center">
// //           <div className="max-w-3xl mx-auto mb-16">
// //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Nature?</span></h2>
// //             <p className="text-gray-400 mb-8">Download the brochure to see the complete floor plans, legal approvals, and pricing details.</p>
// //             <Button 
// //               size="lg" 
// //               className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(217,164,6,0.3)] hover:shadow-[0_0_50px_rgba(217,164,6,0.5)] transition-all"
// //               onClick={() => setIsModalOpen(true)}
// //             >
// //               Enquire Now
// //             </Button>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 text-left">
// //             <div>
// //                <h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#d9a406]">Nature Woods</span></h3>
// //                <p className="text-gray-500 text-sm">RERA: PRM/KA/RERA/1251/308/PR/110722/005054</p>
// //                <p className="text-gray-500 text-sm mt-2">Sy. No 23/1, RRL Towers, Sarjapura Road, Bangalore.</p>
// //             </div>
// //             <div>
// //               <h4 className="text-white font-bold mb-4">Quick Links</h4>
// //               <ul className="space-y-2 text-gray-500 text-sm">
// //                 <li><a href="#" className="hover:text-[#d9a406]">Home</a></li>
// //                 <li><a href="#floorplans" className="hover:text-[#d9a406]">Floor Plans</a></li>
// //                 <li><a href="#" className="hover:text-[#d9a406]">Amenities</a></li>
// //                 <li><a href="#" className="hover:text-[#d9a406]">Location</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //                <h4 className="text-white font-bold mb-4">Contact</h4>
// //                <p className="text-gray-500 text-sm mb-2">Mr. Ram R (Managing Director)</p>
// //                <p className="text-gray-500 text-sm font-bold text-white">+91 73378 16996 / 91</p>
// //                <p className="text-gray-500 text-sm">sales@rrlbuilders.com</p>
// //             </div>
// //           </div>
// //           <div className="mt-12 text-center text-gray-700 text-xs">
// //             © 2024 RRL Builders and Developers Pvt Ltd. All rights reserved. Disclaimer: Images are for representation purpose only.
// //           </div>
// //        </div>
// //     </footer>
// //   )

// //   // ========== MODAL ==========
// //   const EnquiryModal = () => (
// //     <AnimatePresence>
// //       {isModalOpen && (
// //         <motion.div 
// //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           onClick={() => setIsModalOpen(false)}
// //         >
// //           <motion.div 
// //             className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// //             initial={{ scale: 0.9, y: 20 }}
// //             animate={{ scale: 1, y: 0 }}
// //             exit={{ scale: 0.9, y: 20 }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button 
// //               onClick={() => setIsModalOpen(false)}
// //               className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
// //             >
// //               <X className="w-6 h-6" />
// //             </button>
            
// //             <div className="text-center mb-8">
// //                <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
// //                <p className="text-[#d9a406] text-sm">Fill the form to unlock exclusive offers</p>
// //             </div>

// //             <form onSubmit={handleFormSubmit} className="space-y-4">
// //               <div className="space-y-2">
// //                 <input 
// //                   type="text" 
// //                   placeholder="Your Name" 
// //                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
// //                   required 
// //                 />
// //               </div>
// //               <div className="space-y-2">
// //                 <input 
// //                   type="tel" 
// //                   placeholder="Phone Number" 
// //                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
// //                   required 
// //                 />
// //               </div>
// //               <div className="space-y-2">
// //                 <input 
// //                   type="email" 
// //                   placeholder="Email Address" 
// //                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
// //                   required 
// //                 />
// //               </div>
// //               <Button className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-2">
// //                 Submit Enquiry
// //               </Button>
// //             </form>
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   )

// //   return (
// //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
// //       {/* Navigation Bar */}
// //       <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
// //          <div className="container mx-auto px-4 flex justify-between items-center">
// //             <div className="text-2xl font-bold tracking-tighter">
// //                RRL <span className="text-[#d9a406]">Nature Woods</span>
// //             </div>
// //             <Button 
// //                variant="outline" 
// //                className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
// //                onClick={() => setIsModalOpen(true)}
// //             >
// //                Enquire Now
// //             </Button>
// //             <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}>
// //                <Menu />
// //             </button>
// //          </div>
// //       </nav>
// //       <HeroImageBanner />
// //       <HeroSection />
// //       <HighlightsSection />
// //       <AmenitiesSection />
// //       <FloorPlansSection />
// //       <SpecsSection />
// //       <LocationSection />
// //       <FooterSection />
// //       <EnquiryModal />
// //     </main>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   ChevronDown, 
//   X, 
//   Building2, 
//   Zap, 
//   ShieldCheck, 
//   Award, 
//   Wind, 
//   Dumbbell, 
//   Waves, 
//   MonitorPlay, 
//   Gamepad2, 
//   Coffee, 
//   Trees, 
//   CheckCircle2,
//   Maximize2,
//   ArrowRight,
//   Menu,
//   User,
//   Smartphone,
//   Lock,
//   Unlock,
//   CheckCircle,
//   ArrowLeft,
//   Droplets,
//   Sofa,
//   Sun
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// // --- Types ---
// type FloorPlan = {
//   id: string
//   type: "1BHK" | "2BHK" | "3BHK"
//   area: number
//   dims: {
//     living?: string
//     dining?: string
//     kitchen: string
//     masterBed: string
//     bed2?: string
//     bed3?: string
//   }
//   image: string
// }

// // --- Data extracted from Individual Floor Plan PDF ---
// // UPDATED: Added the specific image URL to all items
// const floorPlans: FloorPlan[] = [
//   // 3 BHK Units
//   { id: "01", type: "3BHK", area: 1410, dims: { living: "15'9\" x 11'6\"", dining: "Yes", kitchen: "11'0\" x 8'0\"", masterBed: "11'0\" x 13'9\"", bed2: "10'0\" x 11'6\"", bed3: "11'0\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "02", type: "3BHK", area: 1395, dims: { living: "11'6\" x 14'0\"", dining: "11'6\" x 11'3\"", kitchen: "10'6\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "10'6\" x 14'0\"", bed3: "10'6\" x 13'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  
//   // 2 BHK Units
//   { id: "03", type: "2BHK", area: 1140, dims: { living: "15'9\" x 11'6\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "04", type: "2BHK", area: 1200, dims: { living: "17'0\" x 11'6\"", dining: "8'6\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "12'0\" x 12'6\"", bed2: "12'0\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "06", type: "2BHK", area: 1050, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 11'0\"", bed2: "12'3\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "07", type: "2BHK", area: 1165, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'6\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "08", type: "2BHK", area: 1080, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "12'0\" x 11'0\"", bed2: "12'9\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "09", type: "2BHK", area: 1160, dims: { living: "16'3\" x 11'6\"", dining: "8'6\" x 11'6\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "10", type: "2BHK", area: 1000, dims: { living: "11'0\" x 14'9\"", dining: "12'3\" x 8'3\"", kitchen: "7'6\" x 8'6\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 10'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "11", type: "2BHK", area: 1110, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "7'9\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "12", type: "2BHK", area: 1140, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "11'0\" x 12'6\"", bed2: "11'0\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "14", type: "2BHK", area: 1085, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "15", type: "2BHK", area: 1150, dims: { living: "16'3\" x 11'0\"", dining: "8'0\" x 9'3\"", kitchen: "8'0\" x 9'3\"", masterBed: "16'3\" x 10'0\"", bed2: "11'6\" x 10'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "16", type: "2BHK", area: 1015, dims: { living: "13'3\" x 17'9\" (Living/Dining)", kitchen: "8'6\" x 8'0\"", masterBed: "12'0\" x 11'0\"", bed2: "12'0\" x 10'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "17", type: "2BHK", area: 1140, dims: { living: "22'6\" x 11'0\" (Living/Dining)", kitchen: "8'0\" x 7'9\"", masterBed: "13'0\" x 11'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "20", type: "2BHK", area: 1060, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'6\" x 11'0\"", bed2: "12'3\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },

//   // 1 BHK Units
//   { id: "05", type: "1BHK", area: 690, dims: { living: "14'0\" x 12'3\" (Living/Dining)", kitchen: "7'0\" x 6'0\"", masterBed: "11'0\" x 14'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "13", type: "1BHK", area: 750, dims: { living: "13'6\" x 12'6\" (Living/Dining)", kitchen: "7'0\" x 12'0\"", masterBed: "11'0\" x 12'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "18", type: "1BHK", area: 720, dims: { living: "14'9\" x 10'6\" (Living/Dining)", kitchen: "11'0\" x 8'0\"", masterBed: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "19", type: "1BHK", area: 790, dims: { living: "22'3\" x 10'9\" (Living/Dining)", kitchen: "8'0\" x 8'6\"", masterBed: "14'0\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
// ]

// export default function NatureWoodsPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [activeTab, setActiveTab] = useState("all")

//   // --- Animation Variants ---
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   }

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   }

//   // --- Form Handler ---
//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     alert("Thank you for your enquiry! We will contact you shortly.")
//     setIsModalOpen(false)
//   }

//   const HeroImageBanner = () => {
//     return (
//       <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black border-y border-[#333]">
//         <motion.div 
//           initial={{ scale: 1.1, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           viewport={{ once: true }}
//           className="w-full h-full relative"
//         >
//           {/* The Image */}
//           <img 
//             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766055907/RRl_website_banners_1536_x_752_px_6_liyalp.png" 
//             alt="RRL Hero Banner" 
//             className="w-full h-full object-fill"
//           />
//         </motion.div>
//       </section>
//     );
//   };
  
//   // ========== HERO SECTION ==========
//   const HeroSection = () => (
//     <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
//       {/* Background Abstract: Gold and Black */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
//       <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <motion.div 
//             initial="hidden" 
//             animate="visible" 
//             variants={staggerContainer}
//           >
//             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
//                <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">
//                   Ready To Move In
//                </Badge>
//                <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">
//                   RERA Approved
//                </Badge>
//             </motion.div>

//             <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
//               RRL <br/> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Nature Woods</span>
//             </motion.h1>

//             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-6 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic">
//               "Where Nature Meets Luxury." <br/>
//               1, 2 & 3 BHK Luxury Apartments fully furnished with world-class amenities.
//             </motion.p>

//             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-300">
//               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> 140 Units</span>
//               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> B+G+7 Floors</span>
//               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> Thindlu, Bangalore</span>
//             </motion.div>

//             <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
//               <Button 
//                 size="lg" 
//                 className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 <span className="skew-x-[10deg] flex items-center gap-2">
//                   Download Brochure <ArrowRight className="w-5 h-5"/>
//                 </span>
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline"
//                 className="border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406]/10 font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all"
//               >
//                 <span className="skew-x-[10deg] flex items-center gap-2">
//                   <Phone className="w-5 h-5" /> +91 73378 16996
//                 </span>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Contact Form */}
//           <motion.div 
//              initial={{ opacity: 0, x: 50 }}
//              animate={{ opacity: 1, x: 0 }}
//              transition={{ duration: 0.8, delay: 0.2 }}
//              className="w-full max-w-md mx-auto lg:ml-auto"
//           >
//              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
//                 <div className="mb-6">
//                    <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
//                    <p className="text-gray-400 text-sm mt-1">Get exclusive floor plans & pricing.</p>
//                 </div>
                
//                 <form onSubmit={handleFormSubmit} className="space-y-5">
//                    <div className="relative">
//                       <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                       <input 
//                         type="text" 
//                         placeholder="Your Name" 
//                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
//                         required
//                       />
//                    </div>
//                    <div className="relative">
//                       <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                       <input 
//                         type="tel" 
//                         placeholder="Phone Number" 
//                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
//                         required
//                       />
//                    </div>
//                    <div className="relative">
//                       <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                       <input 
//                         type="email" 
//                         placeholder="Email Address" 
//                         className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
//                         required
//                       />
//                    </div>
                   
//                    <Button className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all">
//                       Get Call Back
//                    </Button>
                   
//                    <p className="text-xs text-center text-gray-500 mt-4">
//                       By submitting, you agree to our privacy policy.
//                    </p>
//                 </form>
//              </Card>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div 
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d9a406]/50"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <ChevronDown className="w-10 h-10" />
//       </motion.div>
//     </section>
//   )

//   // ========== KEY HIGHLIGHTS ==========
//   const HighlightsSection = () => (
//     <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//            <h2 className="text-3xl md:text-4xl font-bold text-white">Why <span className="text-[#d9a406]">RRL Nature Woods?</span></h2>
//            <p className="text-gray-400 mt-2">Premium features that redefine standard living.</p>
//         </div>
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//         >
//           {[
//             { icon: Sofa, title: "Fully Furnished", desc: "Premium Century Prowud interiors included." },
//             { icon: Zap, title: "100% Power Backup", desc: "Includes AC, Geyser & Induction Stove points." },
//             { icon: Lock, title: "Biometric Lock", desc: "Digital security for your main door." },
//             { icon: Award, title: "Marble Effect Tiles", desc: "Luxury white floor tiles throughout." },
//             { icon: Droplets, title: "Premium Fittings", desc: "Kerovit by Kajaria bathroom fittings." },
//           ].map((item, idx) => (
//             <motion.div key={idx} variants={fadeIn} className="group">
//               <Card className="bg-black/50 border border-white/10 p-6 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden text-center">
//                 <div className="mx-auto w-14 h-14 rounded-full bg-[#d9a406]/10 flex items-center justify-center mb-4 text-[#d9a406] group-hover:scale-110 transition-transform">
//                     <item.icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )

//   // ========== AMENITIES SECTION ==========
//   const AmenitiesSection = () => {
//     // Amenities extracted from text & PDF
//     const amenitiesList = [
//       { name: "Swimming Pool", icon: Waves },
//       { name: "Toddler's Pool", icon: Waves },
//       { name: "Ultra Modern Gym", icon: Dumbbell },
//       { name: "Children's Play Area", icon: Gamepad2 },
//       { name: "Elder's Park", icon: Trees },
//       { name: "Jogging Track", icon: Trees },
//       { name: "Cycling Track", icon: Wind },
//       { name: "Skating Rink", icon: Gamepad2 },
//       { name: "Volleyball Court", icon: Gamepad2 },
//       { name: "Cricket Pitch", icon: Gamepad2 },
//       { name: "Basketball Court", icon: Gamepad2 },
//       { name: "Badminton Court", icon: Gamepad2 },
//       { name: "Yoga & Spiritual Centre", icon: Sun },
//       { name: "Amphitheatre", icon: MonitorPlay },
//       { name: "Indoor Games (TT, Carrom, Chess)", icon: Gamepad2 },
//       { name: "Billiards", icon: Gamepad2 },
//       { name: "Picnic Lawn", icon: Coffee },
//       { name: "Pets Park", icon: Trees },
//       { name: "Car Wash Bay", icon: Droplets },
//       { name: "EV Charging Provision", icon: Zap },
//       { name: "Valet Trash", icon: CheckCircle2 },
//       { name: "Laundry in Building", icon: CheckCircle2 },
//       { name: "Pharmacy Door Delivery", icon: CheckCircle2 },
//       { name: "ATM Provision", icon: CheckCircle2 },
//     ]

//     return (
//       <section className="py-24 bg-black relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full bg-[#d9a406]/5"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="mb-12 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//                 From fitness to leisure, RRL Nature Woods offers a comprehensive suite of amenities designed for every member of the family.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {amenitiesList.map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.02 }}
//                 className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4"
//               >
//                 <div className="p-2 bg-black rounded-lg text-[#d9a406] group-hover:bg-[#d9a406] group-hover:text-black transition-colors">
//                   <item.icon className="w-5 h-5" />
//                 </div>
//                 <span className="text-gray-300 text-sm font-medium group-hover:text-white">{item.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // ========== FLOOR PLANS SECTION (UPDATED) ==========
//   const FloorPlansSection = () => {
//     const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
//     const [formOpenId, setFormOpenId] = useState<string | null>(null);
//     const filteredPlans = activeTab === "all" ? floorPlans : floorPlans.filter(p => p.type === activeTab)

//     const handleUnlockSubmit = (e: React.FormEvent<HTMLFormElement>, planId: string) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         console.log("Lead Captured:", {
//           name: formData.get('name'),
//           phone: formData.get('phone'),
//           email: formData.get('email'),
//           unitId: planId
//         });
//         // Mark as unlocked
//         setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
//         // Close the form view (switch back to dimensions view)
//         setFormOpenId(null);
//     };

//     return (
//       <section className="py-24 bg-[#050505]" id="floorplans">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
//               <p className="text-gray-400 max-w-xl">
//                 140 Units | B+G+7 Floors | 20 Unique Layouts <br/>
//                 Choose from our wide range of 1, 2 & 3 BHK distinct unit layouts.
//               </p>
//             </div>
            
//             <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
//               {["all", "1BHK", "2BHK", "3BHK"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
//                     activeTab === tab 
//                     ? "bg-[#d9a406] text-black shadow-lg" 
//                     : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   {tab.toUpperCase()}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredPlans.map((plan) => (
//                 <motion.div
//                   key={plan.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   className="group"
//                 >
//                   <Card className="bg-[#111] border border-white/5 overflow-hidden hover:border-[#d9a406] transition-all duration-300">
//                     <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
//                       <div className="flex justify-between items-start mb-4">
//                         <div>
//                           <h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3>
//                           <p className="text-[#d9a406] font-medium">{plan.type}</p>
//                         </div>
//                         <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
//                            Apartment
//                         </Badge>
//                       </div>
//                       <div className="flex items-baseline gap-1">
//                         <span className="text-4xl font-bold text-white">{plan.area}</span>
//                         <span className="text-gray-500 font-medium">SFT</span>
//                       </div>
//                     </div>
                    
//                     <div className="p-6 space-y-3">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Living</span>
//                         <span className="text-gray-300">{plan.dims.living || "N/A"}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Master Bed</span>
//                         <span className="text-gray-300">{plan.dims.masterBed}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-500">Kitchen</span>
//                         <span className="text-gray-300">{plan.dims.kitchen}</span>
//                       </div>
//                     </div>

//                     <div className="p-4 bg-black">
//                       <Dialog onOpenChange={(open) => { if(!open) setFormOpenId(null); }}>
//                         <DialogTrigger asChild>
//                           <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
//                             <Maximize2 className="w-4 h-4 mr-2" /> View Plan
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent className="bg-[#111] border border-[#333] text-white max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw]">
//                           <DialogHeader>
//                             <DialogTitle className="text-2xl font-bold text-[#d9a406] flex items-center gap-2">
//                               Unit {plan.id} - {plan.type} ({plan.area} SFT)
//                               {unlockedPlans[plan.id] && (<div className="bg-green-500/20 text-green-500 border-green-500/50 text-xs px-2 py-1 rounded border">Unlocked</div>)}
//                             </DialogTitle>
//                           </DialogHeader>
                          
//                           <div className="mt-4 grid md:grid-cols-2 gap-8">
                            
//                             {/* === LEFT SIDE: IMAGE === */}
//                             <div className="relative aspect-square bg-black/50 rounded-lg overflow-hidden border border-white/10">
//                                <img 
//                                   src={plan.image} 
//                                   alt={`Plan ${plan.id}`} 
//                                   className={`w-full h-full object-contain transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl scale-110 opacity-50'}`}
//                                />
//                                {/* Overlay on Image if Locked */}
//                                {!unlockedPlans[plan.id] && (
//                                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 p-4 text-center backdrop-blur-sm">
//                                    <div className="bg-[#111] p-4 rounded-full border border-[#d9a406] mb-4"><Lock className="w-8 h-8 text-[#d9a406]" /></div>
//                                    <p className="text-white font-bold text-lg">Floor Plan Locked</p>
//                                    <p className="text-sm text-gray-300 mt-2 mb-4 max-w-[200px]">Unlock to view clear image</p>
//                                    <Button 
//                                       size="sm" 
//                                       className="bg-[#d9a406] text-black hover:bg-[#b08505]"
//                                       onClick={() => setFormOpenId(plan.id)}
//                                    >
//                                       <Unlock className="w-4 h-4 mr-2" /> Unlock Now
//                                    </Button>
//                                  </div>
//                                )}
//                             </div>

//                             {/* === RIGHT SIDE: DIMENSIONS (OR FORM) === */}
//                             <div className="space-y-6 flex flex-col justify-center min-h-[400px]">
//                               {/* If Form is NOT open, show Dimensions (Default View) */}
//                               {formOpenId !== plan.id ? (
//                                   <div className="animate-in fade-in slide-in-from-right-4">
//                                       <h4 className="text-lg font-semibold border-b border-white/10 pb-2 text-white mb-4">Room Dimensions</h4>
//                                       <dl className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
//                                           <dt className="text-gray-400">Total Area</dt>
//                                           <dd className="font-medium text-right text-white">{plan.area} SFT</dd>
                                          
//                                           <dt className="text-gray-400">Living</dt>
//                                           <dd className="font-medium text-right text-white">{plan.dims.living}</dd>
                                          
//                                           {plan.dims.dining && (
//                                             <>
//                                               <dt className="text-gray-400">Dining</dt>
//                                               <dd className="font-medium text-right text-white">{plan.dims.dining}</dd>
//                                             </>
//                                           )}
                                          
//                                           <dt className="text-gray-400">Master Bedroom</dt>
//                                           <dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
                                          
//                                           {plan.dims.bed2 && (
//                                             <>
//                                               <dt className="text-gray-400">Bedroom 2</dt>
//                                               <dd className="font-medium text-right text-white">{plan.dims.bed2}</dd>
//                                             </>
//                                           )}
                                          
//                                           {plan.dims.bed3 && (
//                                             <>
//                                               <dt className="text-gray-400">Bedroom 3</dt>
//                                               <dd className="font-medium text-right text-white">{plan.dims.bed3}</dd>
//                                             </>
//                                           )}
                                          
//                                           <dt className="text-gray-400">Kitchen</dt>
//                                           <dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
//                                       </dl>
                                      
//                                       <div className="mt-8 pt-6 border-t border-white/10">
//                                           {!unlockedPlans[plan.id] ? (
//                                               <Button 
//                                                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold"
//                                                   onClick={() => setFormOpenId(plan.id)}
//                                               >
//                                                   <Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan
//                                               </Button>
//                                           ) : (
//                                               <div className="grid grid-cols-2 gap-3">
//                                                   <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Download PDF</Button>
//                                                   <Button className="bg-[#d9a406] text-black hover:bg-[#b38605]">Book Site Visit</Button>
//                                               </div>
//                                           )}
//                                       </div>
//                                   </div>
//                               ) : (
//                                   // If Form IS open, show the Form (Swaps the view)
//                                   <div className="bg-white/5 p-6 rounded-lg border border-white/10 animate-in fade-in slide-in-from-right-4 relative">
//                                       <button 
//                                           onClick={() => setFormOpenId(null)}
//                                           className="absolute top-4 right-4 text-gray-400 hover:text-white"
//                                           title="Back to details"
//                                       >
//                                           <X className="w-5 h-5" />
//                                       </button>
                                      
//                                       <div className="mb-6 flex items-center gap-2 text-[#d9a406]">
//                                           <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-white" onClick={() => setFormOpenId(null)}/>
//                                           <h4 className="text-xl font-semibold text-white">Unlock Access</h4>
//                                       </div>
                                      
//                                       <p className="text-sm text-gray-400 mb-6">Enter your details to instantly view the floor plan.</p>
//                                       <form onSubmit={(e) => handleUnlockSubmit(e, plan.id)} className="space-y-4">
//                                           <div className="space-y-2"><Label className="text-gray-300">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
//                                           <div className="space-y-2"><Label className="text-gray-300">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
//                                           <div className="space-y-2"><Label className="text-gray-300">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
//                                           <Button type="submit" className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold mt-2"><Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan</Button>
//                                       </form>
//                                   </div>
//                               )}
//                             </div>
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // ========== SPECIFICATIONS ==========
//   const SpecsSection = () => {
//     const specs = [
//       { title: "Structure", desc: "RCC framed structure." },
//       { title: "Walls", desc: "6\" solid cement block (Exterior), 4\" solid cement block (Interior)." },
//       { title: "Doors", desc: "Main: Teak wood frame with OST shutters. Others: Hardwood frame with flush shutters." },
//       { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh." },
//       { title: "Flooring", desc: "Vitrified tiles for entire flooring. Granite for common areas." },
//       { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
//       { title: "Electrical", desc: "Concealed copper wiring with Anchor/Roma switches." },
//       { title: "Sanitary", desc: "Jaquar CP fittings & Cera/Hindware/Kerovit Sanitary." },
//       { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
//       { title: "Water Supply", desc: "24hrs water supply from Borewell + Overhead tank. Cauvery provision." },
//       { title: "Power Backup", desc: "Generator for common area, Lift & for each flat (Lighting points)." },
//       { title: "Lifts", desc: "Fully Automatic - Four lifts of 6 passengers capacity." },
//     ]

//     return (
//       <section className="py-24 bg-black border-y border-white/5">
//          <div className="container mx-auto px-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//               Technical <span className="text-[#d9a406]">Specifications</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
//               {specs.map((item, i) => (
//                 <div key={i} className="flex gap-4 items-start">
//                    <div className="w-2 h-2 mt-2 bg-[#d9a406] rounded-full shrink-0 shadow-[0_0_10px_#d9a406]"></div>
//                    <div>
//                       <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
//                       <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//                    </div>
//                 </div>
//               ))}
//             </div>
//          </div>
//       </section>
//     )
//   }

//   const LocationSection = () => (
//   <section className="py-24 bg-[#0a0a0a]">
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div>
//           <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406]">Prime Location</Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Connected to <span className="text-[#d9a406]">Everything</span>
//           </h2>
//           <p className="text-gray-400 mb-8 text-lg">
//             Strategically located at Thindlu, near Sarjapura Bus Stop. Enjoy easy accessibility to Wipro SEZ, Electronic City, and top international schools.
//           </p>

//           <div className="space-y-8">
//              <div className="border-l-2 border-[#333] pl-6 relative">
//                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
//                <h4 className="text-white font-bold text-lg mb-2">Tech Hubs</h4>
//                <p className="text-gray-500">Wipro SEZ, RMZ SEZ 2, Cisco, Intel, JP Morgan, Eco Space.</p>
//              </div>
//              <div className="border-l-2 border-[#333] pl-6 relative">
//                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
//                <h4 className="text-white font-bold text-lg mb-2">Schools</h4>
//                <p className="text-gray-500">Greenwood High, Indus Intl, TISB, GEAR Innovative, Delhi Public School.</p>
//              </div>
//              <div className="border-l-2 border-[#333] pl-6 relative">
//                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
//                <h4 className="text-white font-bold text-lg mb-2">Essentials</h4>
//                <p className="text-gray-500">D-Mart, Decathlon, Sarjapura Market, Krupanidhi College.</p>
//              </div>
//           </div>
//         </div>
        
//         {/* Right Map Section */}
//         <div className="relative">
//            <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
//              <div className="w-full h-[500px] bg-[#000] rounded-lg overflow-hidden relative">
//                 {/* Google Map Embed for Thindlu */}
//                 <iframe 
//                   src="https://maps.google.com/maps?q=Thindlu+Sarjapura+Bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed"
//                   width="100%" 
//                   height="100%" 
//                   style={{ border: 0 }} 
//                   allowFullScreen 
//                   loading="lazy" 
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="absolute inset-0"
//                 ></iframe>
                
//                 {/* Overlay Label */}
//                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] pointer-events-none shadow-lg">
//                   <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
//                   <p className="text-black text-sm font-bold">Thindlu, Bangalore</p>
//                 </div>
//              </div>
//            </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

//   // ========== FOOTER / CTA ==========
//   const FooterSection = () => (
//     <footer className="bg-black pt-24 pb-12 border-t border-white/10">
//        <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Nature?</span></h2>
//             <p className="text-gray-400 mb-8">Download the brochure to see the complete floor plans, legal approvals, and pricing details.</p>
//             <Button 
//               size="lg" 
//               className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(217,164,6,0.3)] hover:shadow-[0_0_50px_rgba(217,164,6,0.5)] transition-all"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Enquire Now
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 text-left">
//             <div>
//                <h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#d9a406]">Nature Woods</span></h3>
//                <p className="text-gray-500 text-sm">RERA: PRM/KA/RERA/1251/308/PR/110722/005054</p>
//                <p className="text-gray-500 text-sm mt-2">Sy. No 23/1, RRL Towers, Sarjapura Road, Bangalore.</p>
//             </div>
//             <div>
//               <h4 className="text-white font-bold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-500 text-sm">
//                 <li><a href="#" className="hover:text-[#d9a406]">Home</a></li>
//                 <li><a href="#floorplans" className="hover:text-[#d9a406]">Floor Plans</a></li>
//                 <li><a href="#" className="hover:text-[#d9a406]">Amenities</a></li>
//                 <li><a href="#" className="hover:text-[#d9a406]">Location</a></li>
//               </ul>
//             </div>
//             <div>
//                <h4 className="text-white font-bold mb-4">Contact</h4>
//                <p className="text-gray-500 text-sm mb-2">Mr. Ram R (Managing Director)</p>
//                <p className="text-gray-500 text-sm font-bold text-white">+91 73378 16996 / 91</p>
//                <p className="text-gray-500 text-sm">sales@rrlbuilders.com</p>
//             </div>
//           </div>
//           <div className="mt-12 text-center text-gray-700 text-xs">
//             © 2024 RRL Builders and Developers Pvt Ltd. All rights reserved. Disclaimer: Images are for representation purpose only.
//           </div>
//        </div>
//     </footer>
//   )

//   // ========== MODAL ==========
//   const EnquiryModal = () => (
//     <AnimatePresence>
//       {isModalOpen && (
//         <motion.div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsModalOpen(false)}
//         >
//           <motion.div 
//             className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
//             initial={{ scale: 0.9, y: 20 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 20 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button 
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
            
//             <div className="text-center mb-8">
//                <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
//                <p className="text-[#d9a406] text-sm">Fill the form to unlock exclusive offers</p>
//             </div>

//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <input 
//                   type="text" 
//                   placeholder="Your Name" 
//                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
//                   required 
//                 />
//               </div>
//               <div className="space-y-2">
//                 <input 
//                   type="tel" 
//                   placeholder="Phone Number" 
//                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
//                   required 
//                 />
//               </div>
//               <div className="space-y-2">
//                 <input 
//                   type="email" 
//                   placeholder="Email Address" 
//                   className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
//                   required 
//                 />
//               </div>
//               <Button className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-2">
//                 Submit Enquiry
//               </Button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )

//   return (
//     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
//       {/* Navigation Bar */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
//          <div className="container mx-auto px-4 flex justify-between items-center">
//             <div className="text-2xl font-bold tracking-tighter">
//                RRL <span className="text-[#d9a406]">Nature Woods</span>
//             </div>
//             <Button 
//                variant="outline" 
//                className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
//                onClick={() => setIsModalOpen(true)}
//             >
//                Enquire Now
//             </Button>
//             <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}>
//                <Menu />
//             </button>
//          </div>
//       </nav>
//       <HeroImageBanner />
//       <HeroSection />
//       <HighlightsSection />
//       <AmenitiesSection />
//       <FloorPlansSection />
//       <SpecsSection />
//       <LocationSection />
//       <FooterSection />
//       <EnquiryModal />
//     </main>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  X, 
  Building2, 
  Zap, 
  ShieldCheck, 
  Award, 
  Wind, 
  Dumbbell, 
  Waves, 
  MonitorPlay, 
  Gamepad2, 
  Coffee, 
  Trees, 
  CheckCircle2,
  Maximize2,
  ArrowRight,
  Menu,
  User,
  Smartphone,
  Lock,
  Unlock,
  CheckCircle,
  ArrowLeft,
  Droplets,
  Sofa,
  Sun,
  Loader2 // Imported for loading states
} from "lucide-react"

// 1. Import Formspree
import { useForm, ValidationError } from '@formspree/react';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// --- Types ---
type FloorPlan = {
  id: string
  type: "1BHK" | "2BHK" | "3BHK"
  area: number
  dims: {
    living?: string
    dining?: string
    kitchen: string
    masterBed: string
    bed2?: string
    bed3?: string
  }
  image: string
}

// --- Data extracted from Individual Floor Plan PDF ---
// UPDATED: Added the specific image URL to all items
const floorPlans: FloorPlan[] = [
  // 3 BHK Units
  { id: "01", type: "3BHK", area: 1410, dims: { living: "15'9\" x 11'6\"", dining: "Yes", kitchen: "11'0\" x 8'0\"", masterBed: "11'0\" x 13'9\"", bed2: "10'0\" x 11'6\"", bed3: "11'0\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "02", type: "3BHK", area: 1395, dims: { living: "11'6\" x 14'0\"", dining: "11'6\" x 11'3\"", kitchen: "10'6\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "10'6\" x 14'0\"", bed3: "10'6\" x 13'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  
  // 2 BHK Units
  { id: "03", type: "2BHK", area: 1140, dims: { living: "15'9\" x 11'6\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "04", type: "2BHK", area: 1200, dims: { living: "17'0\" x 11'6\"", dining: "8'6\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "12'0\" x 12'6\"", bed2: "12'0\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "06", type: "2BHK", area: 1050, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 11'0\"", bed2: "12'3\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "07", type: "2BHK", area: 1165, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'6\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "08", type: "2BHK", area: 1080, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "12'0\" x 11'0\"", bed2: "12'9\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "09", type: "2BHK", area: 1160, dims: { living: "16'3\" x 11'6\"", dining: "8'6\" x 11'6\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'0\" x 14'9\"", bed2: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "10", type: "2BHK", area: 1000, dims: { living: "11'0\" x 14'9\"", dining: "12'3\" x 8'3\"", kitchen: "7'6\" x 8'6\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 10'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "11", type: "2BHK", area: 1110, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "7'9\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "12", type: "2BHK", area: 1140, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 13'6\"", kitchen: "8'0\" x 8'6\"", masterBed: "11'0\" x 12'6\"", bed2: "11'0\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "14", type: "2BHK", area: 1085, dims: { living: "15'9\" x 11'0\"", dining: "8'0\" x 12'9\"", kitchen: "8'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "15", type: "2BHK", area: 1150, dims: { living: "16'3\" x 11'0\"", dining: "8'0\" x 9'3\"", kitchen: "8'0\" x 9'3\"", masterBed: "16'3\" x 10'0\"", bed2: "11'6\" x 10'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "16", type: "2BHK", area: 1015, dims: { living: "13'3\" x 17'9\" (Living/Dining)", kitchen: "8'6\" x 8'0\"", masterBed: "12'0\" x 11'0\"", bed2: "12'0\" x 10'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "17", type: "2BHK", area: 1140, dims: { living: "22'6\" x 11'0\" (Living/Dining)", kitchen: "8'0\" x 7'9\"", masterBed: "13'0\" x 11'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "20", type: "2BHK", area: 1060, dims: { living: "16'3\" x 11'6\"", dining: "8'0\" x 8'3\"", kitchen: "8'0\" x 8'3\"", masterBed: "11'6\" x 11'0\"", bed2: "12'3\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },

  // 1 BHK Units
  { id: "05", type: "1BHK", area: 690, dims: { living: "14'0\" x 12'3\" (Living/Dining)", kitchen: "7'0\" x 6'0\"", masterBed: "11'0\" x 14'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "13", type: "1BHK", area: 750, dims: { living: "13'6\" x 12'6\" (Living/Dining)", kitchen: "7'0\" x 12'0\"", masterBed: "11'0\" x 12'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "18", type: "1BHK", area: 720, dims: { living: "14'9\" x 10'6\" (Living/Dining)", kitchen: "11'0\" x 8'0\"", masterBed: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "19", type: "1BHK", area: 790, dims: { living: "22'3\" x 10'9\" (Living/Dining)", kitchen: "8'0\" x 8'6\"", masterBed: "14'0\" x 10'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
]

export default function NatureWoodsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // Integrate Formspree for Global Modal
  // REPLACE "YOUR_MODAL_FORM_ID" with your actual Formspree ID
  const [modalState, handleModalSubmit] = useForm("mrezrwgp");

  // Close modal automatically on success
  useEffect(() => {
    if (modalState.succeeded) {
      // Optional: Add a delay before closing to let user see success message
      // setTimeout(() => setIsModalOpen(false), 3000); 
    }
  }, [modalState.succeeded]);

  // --- Animation Variants ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

const HeroImageBanner = () => {
  return (
    <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
      
      {/* ===== MOBILE HERO (400 × 300) ===== */}
      <div className="block md:hidden">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/RRl%20website%20mobile%20banners%20(400%20x%20300%20px).png"
            alt="RRL Hero Banner Mobile"
            loading="eager"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* ===== DESKTOP HERO (UNCHANGED DESIGN) ===== */}
      <div className="hidden md:block h-[60vh] lg:h-[80vh]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full overflow-hidden"
        >
          <img
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/14.png"
            alt="RRL Hero Banner Desktop"
            loading="eager"
            className="w-full h-full object-fill"
          />
        </motion.div>
      </div>

    </section>
  )
}

  
  // ========== HERO SECTION ==========
  const HeroSection = () => {
    // Integrate Formspree for Hero Form
    // REPLACE "YOUR_HERO_FORM_ID" with your actual Formspree ID
    const [state, handleSubmit] = useForm("mrezrwgp");

    return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
      {/* Background Abstract: Gold and Black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
               <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">
                  Ready To Move In
               </Badge>
               <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">
                  RERA Approved
               </Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              RRL <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Nature Woods</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-6 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic">
              "Where Nature Meets Luxury." <br/>
              1, 2 & 3 BHK Luxury Apartments fully furnished with world-class amenities.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-300">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> 140 Units</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> B+G+7 Floors</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d9a406]"/> Thindlu, Bangalore</span>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="skew-x-[10deg] flex items-center gap-2">
                  Download Brochure <ArrowRight className="w-5 h-5"/>
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406]/10 font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all"
              >
                <span className="skew-x-[10deg] flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +91 73378 16996
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full max-w-md mx-auto lg:ml-auto"
          >
             <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
                
                {state.succeeded ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                      <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                      <p className="text-gray-400">Your details have been submitted. We will call you shortly.</p>
                    </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
                      <p className="text-gray-400 text-sm mt-1">Get exclusive floor plans & pricing.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="relative">
                          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                          <input 
                            name="name" // Added Name
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                            required
                          />
                      </div>
                      <div className="relative">
                          <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                          <input 
                            name="phone" // Added Name
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                            required
                          />
                      </div>
                      <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                          <input 
                            name="email" // Added Name
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                      
                      <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all">
                          {state.submitting ? "Submitting..." : "Get Call Back"}
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500 mt-4">
                          By submitting, you agree to our privacy policy.
                      </p>
                    </form>
                  </>
                )}
             </Card>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d9a406]/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </section>
    )
  }

  // ========== KEY HIGHLIGHTS ==========
  const HighlightsSection = () => (
    <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-white">Why <span className="text-[#d9a406]">RRL Nature Woods?</span></h2>
           <p className="text-gray-400 mt-2">Premium features that redefine standard living.</p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { icon: Sofa, title: "Fully Furnished", desc: "Premium Century Prowud interiors included." },
            { icon: Zap, title: "100% Power Backup", desc: "Includes AC, Geyser & Induction Stove points." },
            { icon: Lock, title: "Biometric Lock", desc: "Digital security for your main door." },
            { icon: Award, title: "Marble Effect Tiles", desc: "Luxury white floor tiles throughout." },
            { icon: Droplets, title: "Premium Fittings", desc: "Kerovit by Kajaria bathroom fittings." },
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeIn} className="group">
              <Card className="bg-black/50 border border-white/10 p-6 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#d9a406]/10 flex items-center justify-center mb-4 text-[#d9a406] group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )

  // ========== AMENITIES SECTION ==========
  const AmenitiesSection = () => {
    // Amenities extracted from text & PDF
    const amenitiesList = [
      { name: "Swimming Pool", icon: Waves },
      { name: "Toddler's Pool", icon: Waves },
      { name: "Ultra Modern Gym", icon: Dumbbell },
      { name: "Children's Play Area", icon: Gamepad2 },
      { name: "Elder's Park", icon: Trees },
      { name: "Jogging Track", icon: Trees },
      { name: "Cycling Track", icon: Wind },
      { name: "Skating Rink", icon: Gamepad2 },
      { name: "Volleyball Court", icon: Gamepad2 },
      { name: "Cricket Pitch", icon: Gamepad2 },
      { name: "Basketball Court", icon: Gamepad2 },
      { name: "Badminton Court", icon: Gamepad2 },
      { name: "Yoga & Spiritual Centre", icon: Sun },
      { name: "Amphitheatre", icon: MonitorPlay },
      { name: "Indoor Games (TT, Carrom, Chess)", icon: Gamepad2 },
      { name: "Billiards", icon: Gamepad2 },
      { name: "Picnic Lawn", icon: Coffee },
      { name: "Pets Park", icon: Trees },
      { name: "Car Wash Bay", icon: Droplets },
      { name: "EV Charging Provision", icon: Zap },
      { name: "Valet Trash", icon: CheckCircle2 },
      { name: "Laundry in Building", icon: CheckCircle2 },
      { name: "Pharmacy Door Delivery", icon: CheckCircle2 },
      { name: "ATM Provision", icon: CheckCircle2 },
    ]

    return (
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#d9a406]/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                From fitness to leisure, RRL Nature Woods offers a comprehensive suite of amenities designed for every member of the family.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {amenitiesList.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4"
              >
                <div className="p-2 bg-black rounded-lg text-[#d9a406] group-hover:bg-[#d9a406] group-hover:text-black transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ========== FLOOR PLANS SECTION (UPDATED) ==========
  const FloorPlansSection = () => {
    const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
    const [formOpenId, setFormOpenId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Added State
    const filteredPlans = activeTab === "all" ? floorPlans : floorPlans.filter(p => p.type === activeTab)

    const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Manual Formspree Submission using fetch
        // REPLACE "YOUR_FLOORPLAN_FORM_ID" with your actual Formspree ID
        const formId = "mrezrwgp"; 
        const formData = new FormData(e.currentTarget);
        // Add extra data to identify which unit they wanted
        formData.append("Unit Interest", planId); 

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Mark as unlocked
                setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
                // Close the form view (switch back to dimensions view)
                setFormOpenId(null);
            } else {
                alert("There was an error submitting the form. Please try again.");
            }
        } catch (error) {
            alert("There was an error submitting the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <section className="py-24 bg-[#050505]" id="floorplans">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
              <p className="text-gray-400 max-w-xl">
                140 Units | B+G+7 Floors | 20 Unique Layouts <br/>
                Choose from our wide range of 1, 2 & 3 BHK distinct unit layouts.
              </p>
            </div>
            
            <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
              {["all", "1BHK", "2BHK", "3BHK"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                    activeTab === tab 
                    ? "bg-[#d9a406] text-black shadow-lg" 
                    : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <Card className="bg-[#111] border border-white/5 overflow-hidden hover:border-[#d9a406] transition-all duration-300">
                    <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3>
                          <p className="text-[#d9a406] font-medium">{plan.type}</p>
                        </div>
                        <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                           Apartment
                        </Badge>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">{plan.area}</span>
                        <span className="text-gray-500 font-medium">SFT</span>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Living</span>
                        <span className="text-gray-300">{plan.dims.living || "N/A"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Master Bed</span>
                        <span className="text-gray-300">{plan.dims.masterBed}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Kitchen</span>
                        <span className="text-gray-300">{plan.dims.kitchen}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-black">
                      <Dialog onOpenChange={(open) => { if(!open) setFormOpenId(null); }}>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
                            <Maximize2 className="w-4 h-4 mr-2" /> View Plan
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#111] border border-[#333] text-white max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-[#d9a406] flex items-center gap-2">
                              Unit {plan.id} - {plan.type} ({plan.area} SFT)
                              {unlockedPlans[plan.id] && (<div className="bg-green-500/20 text-green-500 border-green-500/50 text-xs px-2 py-1 rounded border">Unlocked</div>)}
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="mt-4 grid md:grid-cols-2 gap-8">
                            
                            {/* === LEFT SIDE: IMAGE === */}
                            <div className="relative aspect-square bg-black/50 rounded-lg overflow-hidden border border-white/10">
                               <img 
                                  src={plan.image} 
                                  alt={`Plan ${plan.id}`} 
                                  className={`w-full h-full object-contain transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl scale-110 opacity-50'}`}
                               />
                               {/* Overlay on Image if Locked */}
                               {!unlockedPlans[plan.id] && (
                                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 p-4 text-center backdrop-blur-sm">
                                   <div className="bg-[#111] p-4 rounded-full border border-[#d9a406] mb-4"><Lock className="w-8 h-8 text-[#d9a406]" /></div>
                                   <p className="text-white font-bold text-lg">Floor Plan Locked</p>
                                   <p className="text-sm text-gray-300 mt-2 mb-4 max-w-[200px]">Unlock to view clear image</p>
                                   <Button 
                                      size="sm" 
                                      className="bg-[#d9a406] text-black hover:bg-[#b08505]"
                                      onClick={() => setFormOpenId(plan.id)}
                                   >
                                      <Unlock className="w-4 h-4 mr-2" /> Unlock Now
                                   </Button>
                                 </div>
                               )}
                            </div>

                            {/* === RIGHT SIDE: DIMENSIONS (OR FORM) === */}
                            <div className="space-y-6 flex flex-col justify-center min-h-[400px]">
                              {/* If Form is NOT open, show Dimensions (Default View) */}
                              {formOpenId !== plan.id ? (
                                  <div className="animate-in fade-in slide-in-from-right-4">
                                      <h4 className="text-lg font-semibold border-b border-white/10 pb-2 text-white mb-4">Room Dimensions</h4>
                                      <dl className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                                          <dt className="text-gray-400">Total Area</dt>
                                          <dd className="font-medium text-right text-white">{plan.area} SFT</dd>
                                          
                                          <dt className="text-gray-400">Living</dt>
                                          <dd className="font-medium text-right text-white">{plan.dims.living}</dd>
                                          
                                          {plan.dims.dining && (
                                            <>
                                              <dt className="text-gray-400">Dining</dt>
                                              <dd className="font-medium text-right text-white">{plan.dims.dining}</dd>
                                            </>
                                          )}
                                          
                                          <dt className="text-gray-400">Master Bedroom</dt>
                                          <dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
                                          
                                          {plan.dims.bed2 && (
                                            <>
                                              <dt className="text-gray-400">Bedroom 2</dt>
                                              <dd className="font-medium text-right text-white">{plan.dims.bed2}</dd>
                                            </>
                                          )}
                                          
                                          {plan.dims.bed3 && (
                                            <>
                                              <dt className="text-gray-400">Bedroom 3</dt>
                                              <dd className="font-medium text-right text-white">{plan.dims.bed3}</dd>
                                            </>
                                          )}
                                          
                                          <dt className="text-gray-400">Kitchen</dt>
                                          <dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
                                      </dl>
                                      
                                      <div className="mt-8 pt-6 border-t border-white/10">
                                          {!unlockedPlans[plan.id] ? (
                                              <Button 
                                                  className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold"
                                                  onClick={() => setFormOpenId(plan.id)}
                                              >
                                                  <Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan
                                              </Button>
                                          ) : (
                                              <div className="grid grid-cols-2 gap-3">
                                                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Download PDF</Button>
                                                  <Button className="bg-[#d9a406] text-black hover:bg-[#b38605]">Book Site Visit</Button>
                                              </div>
                                          )}
                                      </div>
                                  </div>
                              ) : (
                                  // If Form IS open, show the Form (Swaps the view)
                                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 animate-in fade-in slide-in-from-right-4 relative">
                                      <button 
                                          onClick={() => setFormOpenId(null)}
                                          className="absolute top-4 right-4 text-gray-400 hover:text-white"
                                          title="Back to details"
                                      >
                                          <X className="w-5 h-5" />
                                      </button>
                                      
                                      <div className="mb-6 flex items-center gap-2 text-[#d9a406]">
                                          <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-white" onClick={() => setFormOpenId(null)}/>
                                          <h4 className="text-xl font-semibold text-white">Unlock Access</h4>
                                      </div>
                                      
                                      <p className="text-sm text-gray-400 mb-6">Enter your details to instantly view the floor plan.</p>
                                      <form onSubmit={(e) => handleUnlockSubmit(e, plan.id)} className="space-y-4">
                                          <div className="space-y-2"><Label className="text-gray-300">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                          <div className="space-y-2"><Label className="text-gray-300">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                          <div className="space-y-2"><Label className="text-gray-300">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold mt-2">
                                              {isSubmitting ? (
                                                <>
                                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Unlocking...
                                                </>
                                              ) : (
                                                <>
                                                  <Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan
                                                </>
                                              )}
                                          </Button>
                                      </form>
                                  </div>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    )
  }

  // ========== SPECIFICATIONS ==========
  const SpecsSection = () => {
    const specs = [
      { title: "Structure", desc: "RCC framed structure." },
      { title: "Walls", desc: "6\" solid cement block (Exterior), 4\" solid cement block (Interior)." },
      { title: "Doors", desc: "Main: Teak wood frame with OST shutters. Others: Hardwood frame with flush shutters." },
      { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh." },
      { title: "Flooring", desc: "Vitrified tiles for entire flooring. Granite for common areas." },
      { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
      { title: "Electrical", desc: "Concealed copper wiring with Anchor/Roma switches." },
      { title: "Sanitary", desc: "Jaquar CP fittings & Cera/Hindware/Kerovit Sanitary." },
      { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
      { title: "Water Supply", desc: "24hrs water supply from Borewell + Overhead tank. Cauvery provision." },
      { title: "Power Backup", desc: "Generator for common area, Lift & for each flat (Lighting points)." },
      { title: "Lifts", desc: "Fully Automatic - Four lifts of 6 passengers capacity." },
    ]

    return (
      <section className="py-24 bg-black border-y border-white/5">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Technical <span className="text-[#d9a406]">Specifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {specs.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <div className="w-2 h-2 mt-2 bg-[#d9a406] rounded-full shrink-0 shadow-[0_0_10px_#d9a406]"></div>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>
    )
  }

  const LocationSection = () => (
  <section className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406]">Prime Location</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connected to <span className="text-[#d9a406]">Everything</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Strategically located at Thindlu, near Sarjapura Bus Stop. Enjoy easy accessibility to Wipro SEZ, Electronic City, and top international schools.
          </p>

          <div className="space-y-8">
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Tech Hubs</h4>
               <p className="text-gray-500">Wipro SEZ, RMZ SEZ 2, Cisco, Intel, JP Morgan, Eco Space.</p>
             </div>
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Schools</h4>
               <p className="text-gray-500">Greenwood High, Indus Intl, TISB, GEAR Innovative, Delhi Public School.</p>
             </div>
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Essentials</h4>
               <p className="text-gray-500">D-Mart, Decathlon, Sarjapura Market, Krupanidhi College.</p>
             </div>
          </div>
        </div>
        
        {/* Right Map Section */}
        <div className="relative">
           <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
             <div className="w-full h-[500px] bg-[#000] rounded-lg overflow-hidden relative">
                {/* Google Map Embed for Thindlu */}
                <iframe 
                  src="https://maps.google.com/maps?q=Thindlu+Sarjapura+Bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Overlay Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] pointer-events-none shadow-lg">
                  <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
                  <p className="text-black text-sm font-bold">Thindlu, Bangalore</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
)

  // ========== REVIEWS SECTION ==========
  const ReviewsSection = () => {
    const testimonialData = [
      {
        type: "text",
        name: "Rama Krishna Kanupuri",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "Best apartments with good amenities. Build quality is excellent. Ram and Lakshman are genuine, humble and have great knowledge in construction. Highly recommend for a visit!",
      },
      {
        type: "text",
        name: "Samta Goyat",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "Construction quality is top-notch. Peaceful location away from busy areas. Ram and Lakshman made the process smooth with no fake promises. Kavya and team is really hard working!",
      },
      {
        type: "video",
        name: "VideoTestimonial1",
        videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
      },
      {
        type: "text",
        name: "Shyam Mohan",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "Staying here since May 2023. Good construction quality with excellent amenities - swimming pool, gym, indoor games, function hall and amphitheatre.",
      },
      {
        type: "text",
        name: "Ravi Viswanathan",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "One of the best apartments with good amenities in Bengaluru at a non-polluted area. Ram and Lakshmanan are friendly and polite. Worth investment!",
      },
      {
        type: "video",
        name: "VideoTestimonial2",
        videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
      },
      {
        type: "text",
        name: "Chandrakalag",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "Great project with furnished flats. Manager Kavya explained everything clearly. Genuine, humble and decent conversation. One of the best apartments - worth investing!",
      },
      {
        type: "text",
        name: "iRReddy",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "Best part is the positive, peaceful location with nature surrounding it. Just 10 mins to Sarjapur main market. Top level maintenance, amenities and security systems!",
      },
      {
        type: "text",
        name: "Murali Dabbaru",
        role: "Happy Home Buyer",
        location: "RRL Nature Woods",
        rating: 5,
        testimonial: "Very smooth buying experience. Prime location, good connectivity, nice amenities, reasonable pricing. Genuine and honest management. Strongly recommended!",
      },
    ]

    // --- GOOGLE ICON SVG ---
    const GoogleIcon = () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    )

    return (
      <section className="py-24 relative bg-gray-50 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766479785/CLIENTS_BACKGROUND_1_sfkdst.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Centered Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-white font-bold">Client Testimonials</h2>
            <div className="flex items-center gap-3 mt-4 justify-center">
              <div className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
                <GoogleIcon />
                <span className="font-bold text-gray-700 text-sm">Google Reviews</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-[#FFB400] text-lg">★</span>
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">5.0 Average</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialData.map((item, index) => (
              <div key={index} className="h-full">
                {item.type === "video" ? (
                  // --- Video Card ---
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/50 hover:shadow-xl hover:border-[#d9a406]/30 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-black relative flex-grow min-h-[200px]">
                      <iframe
                        src={item.videoUrl}
                        title={item.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full absolute inset-0"
                      ></iframe>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-4">
                      <span className="text-xs font-semibold text-[#d9a406] bg-[#d9a406]/10 px-3 py-1 rounded-full">
                        Happy Home Buyer
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  // --- Text Card ---
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/50 hover:shadow-xl hover:border-[#d9a406]/30 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* Initials Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#333] to-[#555] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                          {item.name ? item.name.charAt(0) : "U"}
                        </div>
                        <div>
                          <h4 className="font-bold text-black text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.location}</p>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>

                    <div className="mb-4 flex-grow">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <span key={i} className="text-[#FFB400] text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed italic relative z-10">
                        "{item.testimonial}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                      <span className="text-xs font-semibold text-[#d9a406] bg-[#d9a406]/10 px-3 py-1 rounded-full">
                        {item.role}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ========== FOOTER / CTA ==========
  const FooterSection = () => (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
       <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Nature?</span></h2>
            <p className="text-gray-400 mb-8">Download the brochure to see the complete floor plans, legal approvals, and pricing details.</p>
            <Button 
              size="lg" 
              className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(217,164,6,0.3)] hover:shadow-[0_0_50px_rgba(217,164,6,0.5)] transition-all"
              onClick={() => setIsModalOpen(true)}
            >
              Enquire Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 text-left">
            <div>
               <h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#d9a406]">Nature Woods</span></h3>
               <p className="text-gray-500 text-sm">RERA: PRM/KA/RERA/1251/308/PR/110722/005054</p>
               <p className="text-gray-500 text-sm mt-2">Sy. No 23/1, RRL Towers, Sarjapura Road, Bangalore.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-[#d9a406]">Home</a></li>
                <li><a href="#floorplans" className="hover:text-[#d9a406]">Floor Plans</a></li>
                <li><a href="#" className="hover:text-[#d9a406]">Amenities</a></li>
                <li><a href="#" className="hover:text-[#d9a406]">Location</a></li>
              </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Contact</h4>
               <p className="text-gray-500 text-sm mb-2">Mr. Ram R (Managing Director)</p>
               <p className="text-gray-500 text-sm font-bold text-white">+91 73378 16996 / 91</p>
               <p className="text-gray-500 text-sm">sales@rrlbuilders.com</p>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-700 text-xs">
            © 2024 RRL Builders and Developers Pvt Ltd. All rights reserved. Disclaimer: Images are for representation purpose only.
          </div>
       </div>
    </footer>
  )

  // ========== MODAL ==========
  const EnquiryModal = () => (
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
            className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
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
            
            {modalState.succeeded ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Received!</h3>
                  <p className="text-gray-400 mb-6">Thank you for your enquiry. We will contact you shortly.</p>
                  <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Close</Button>
                </div>
            ) : (
                <>
                    <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
                    <p className="text-[#d9a406] text-sm">Fill the form to unlock exclusive offers</p>
                    </div>

                    <form onSubmit={handleModalSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <input 
                        name="name" // Added Name
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                        required 
                        />
                    </div>
                    <div className="space-y-2">
                        <input 
                        name="phone" // Added Name
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                        required 
                        />
                    </div>
                    <div className="space-y-2">
                        <input 
                        name="email" // Added Name
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                        required 
                        />
                        <ValidationError prefix="Email" field="email" errors={modalState.errors} />
                    </div>
                    <Button type="submit" disabled={modalState.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-2">
                        {modalState.submitting ? "Sending..." : "Submit Enquiry"}
                    </Button>
                    </form>
                </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
               RRL <span className="text-[#d9a406]">Nature Woods</span>
            </div>
            <Button 
               variant="outline" 
               className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
               onClick={() => setIsModalOpen(true)}
            >
               Enquire Now
            </Button>
            <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}>
               <Menu />
            </button>
         </div>
      </nav>
      <HeroImageBanner />
      <HeroSection />
      <HighlightsSection />
      <AmenitiesSection />
      <FloorPlansSection />
      <SpecsSection />
      <LocationSection />
      <ReviewsSection />
      <FooterSection />
      <EnquiryModal />
    </main>
  )
}