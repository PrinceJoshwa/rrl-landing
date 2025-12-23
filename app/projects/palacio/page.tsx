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
// //   Music, 
// //   MonitorPlay, 
// //   Gamepad2, 
// //   Coffee, 
// //   Trees, 
// //   School, 
// //   Hospital, 
// //   ShoppingCart, 
// //   Maximize2,
// //   ArrowRight,
// //   CheckCircle2,
// //   Menu,
// //   Smartphone,
// //   User
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Badge } from "@/components/ui/badge"
// // import { ScrollArea } from "@/components/ui/scroll-area"
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
// //   type: "2BHK" | "3BHK"
// //   facing: "North" | "East"
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

// // // --- Data ---
// // const floorPlans: FloorPlan[] = [
// //   { id: "01", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "02", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" } },
// //   { id: "03", type: "2BHK", facing: "North", area: 1080, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "04", type: "3BHK", facing: "North", area: 1425, dims: { living: "16'3\" x 11'6\"", dining: "12'3\" x 9'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'6\"", bed2: "11'0\" x 11'6\"", bed3: "11'0\" x 11'0\"" } },
// //   { id: "05", type: "3BHK", facing: "East", area: 1525, dims: { living: "16'3\" x 14'0\"", dining: "8'0\" x 9'6\"", masterBed: "12'0\" x 13'0\"", kitchen: "8'0\" x 9'6\"", bed2: "11'0\" x 11'0\"", bed3: "11'0\" x 12'0\"" } },
// //   { id: "06", type: "3BHK", facing: "East", area: 1360, dims: { living: "23'6\" x 11'0\" (Living/Dining)", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'9\" x 11'0\"" } },
// //   { id: "07", type: "2BHK", facing: "East", area: 1245, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "08", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\" (Living/Dining)", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" } },
// //   { id: "09", type: "3BHK", facing: "East", area: 1460, dims: { living: "11'6\" x 18'9\" (Living/Dining)", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" } },
// //   { id: "10", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "11", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" } },
// //   { id: "12", type: "2BHK", facing: "North", area: 1120, dims: { living: "11'3\" x 16'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'0\"", bed2: "11'6\" x 11'0\"" } },
// //   { id: "13", type: "3BHK", facing: "East", area: 1485, dims: { living: "26'6\" x 11'6\" (Living/Dining)", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" } },
// //   { id: "14", type: "2BHK", facing: "East", area: 1250, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "10'6\" x 11'0\"" } },
// //   { id: "15", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\" (Living/Dining)", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" } },
// //   { id: "16", type: "3BHK", facing: "East", area: 1540, dims: { living: "11'6\" x 22'9\" (Living/Dining)", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" } },
// // ]

// // export default function PalacioPage() {
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
// //             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766056600/HOME_HERO_2_ahmbpj.png" 
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
  

// // // ========== HERO SECTION ==========
// //   const HeroSection = () => (
// //     <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
// //       {/* Background Abstract */}
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
// //                   BMRDA & RERA Approved
// //                </Badge>
// //             </motion.div>

// //             <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// //               Where Luxury <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">
// //                 Meets Legacy
// //               </span>
// //             </motion.h1>

// //             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic">
// //               "Every corner echoes with regal tales." <br/>
// //               Experience the royal lifestyle with 50% UDS and Free Interiors.
// //             </motion.p>

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
// //                    <p className="text-gray-400 text-sm mt-1">Get exclusive offers & floor plans.</p>
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
// //         <motion.div 
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //         >
// //           {[
// //             { icon: Award, title: "Free Interiors", desc: "Fully designed & ready to live homes. More value, less hassle." },
// //             { icon: ShieldCheck, title: "50% UDS", desc: "Own a significant share of the land. Higher resale potential." },
// //             { icon: Zap, title: "100% Power Backup", desc: "Generators for all flats, lifts & common areas." },
// //             { icon: Building2, title: "Ready To Move In", desc: "No waiting, no delays. Start living your lifestyle today." }
// //           ].map((item, idx) => (
// //             <motion.div key={idx} variants={fadeIn} className="group">
// //               <Card className="bg-black/50 border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
// //                 <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
// //                 <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
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
// //     const amenities5Star = [
// //       { name: "Steam Bath", icon: Wind },
// //       { name: "Outdoor Games", icon: Gamepad2 },
// //       { name: "Basket Ball Court", icon: CheckCircle2 },
// //       { name: "Home Theater", icon: MonitorPlay },
// //       { name: "Skating Rink", icon: Gamepad2 },
// //       { name: "Rooftop BBQ", icon: Coffee },
// //       { name: "Jogging Track", icon: Trees },
// //       { name: "Club House", icon: Building2 },
// //       { name: "Outdoor Gym", icon: Dumbbell },
// //       { name: "Drive Way", icon: CheckCircle2 },
// //       { name: "Senior Seating", icon: Coffee },
// //       { name: "Indoor Games", icon: Gamepad2 }
// //     ]

// //     const amenities4Star = [
// //       { name: "Swimming Pool", sub: "With Toddler Pool", icon: Waves },
// //       { name: "Ultra-Modern Gym", sub: "For fitness enthusiasts", icon: Dumbbell },
// //       { name: "Kids Play Area", sub: "Indoor Safe Zone", icon: Gamepad2 },
// //     ]

// //     return (
// //       <section className="py-24 bg-black relative overflow-hidden">
// //         {/* Decorative elements */}
// //         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
// //             <p className="text-gray-400 max-w-2xl">Meticulously curated amenities designed for a modern & comfortable lifestyle.</p>
// //           </div>

// //           <Tabs defaultValue="5star" className="w-full">
// //             <TabsList className="bg-transparent border-b border-white/10 w-full justify-start rounded-none h-auto p-0 mb-10">
// //               <TabsTrigger 
// //                 value="5star" 
// //                 className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none"
// //               >
// //                 5 Star Amenities
// //               </TabsTrigger>
// //               <TabsTrigger 
// //                 value="4star" 
// //                 className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none"
// //               >
// //                 4 Star Amenities
// //               </TabsTrigger>
// //             </TabsList>

// //             <TabsContent value="5star">
// //               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //                 {amenities5Star.map((item, i) => (
// //                   <motion.div 
// //                     key={i} 
// //                     initial={{ opacity: 0, scale: 0.9 }}
// //                     whileInView={{ opacity: 1, scale: 1 }}
// //                     transition={{ delay: i * 0.05 }}
// //                     className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4"
// //                   >
// //                     <div className="p-3 bg-black rounded-lg text-[#d9a406] group-hover:scale-110 transition-transform">
// //                       <item.icon className="w-6 h-6" />
// //                     </div>
// //                     <span className="text-gray-300 font-medium group-hover:text-white">{item.name}</span>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </TabsContent>

// //             <TabsContent value="4star">
// //                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                 {amenities4Star.map((item, i) => (
// //                   <motion.div 
// //                     key={i}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     className="relative h-64 rounded-2xl overflow-hidden group border border-white/10"
// //                   >
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
// //                     {/* Placeholder for amenity image */}
// //                     <div className="absolute inset-0 bg-[#222] group-hover:scale-110 transition-transform duration-700"></div>
                    
// //                     <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
// //                       <div className="bg-[#d9a406] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-black">
// //                         <item.icon className="w-6 h-6" />
// //                       </div>
// //                       <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
// //                       <p className="text-gray-400">{item.sub}</p>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //                </div>
// //             </TabsContent>
// //           </Tabs>
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
// //                 103 Units | B+G+6 Floors | No Common Walls <br/>
// //                 Choose from our range of 16 distinct unit layouts designed for maximum space and light.
// //               </p>
// //             </div>
            
// //             <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
// //               {["all", "2BHK", "3BHK"].map((tab) => (
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
// //                           {plan.facing} Facing
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
// //                             <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/20">
// //                                <span className="text-gray-500">Floor Plan Image Placeholder</span>
// //                             </div>
// //                             <div className="space-y-6">
// //                               <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Dimensions</h4>
// //                               <dl className="grid grid-cols-2 gap-4 text-sm">
// //                                 <dt className="text-gray-400">Facing</dt>
// //                                 <dd className="font-medium text-right">{plan.facing}</dd>
                                
// //                                 <dt className="text-gray-400">Living Area</dt>
// //                                 <dd className="font-medium text-right">{plan.dims.living}</dd>
                                
// //                                 {plan.dims.dining && (
// //                                   <>
// //                                     <dt className="text-gray-400">Dining</dt>
// //                                     <dd className="font-medium text-right">{plan.dims.dining}</dd>
// //                                   </>
// //                                 )}
                                
// //                                 <dt className="text-gray-400">Master Bedroom</dt>
// //                                 <dd className="font-medium text-right">{plan.dims.masterBed}</dd>
                                
// //                                 {plan.dims.bed2 && (
// //                                   <>
// //                                     <dt className="text-gray-400">Bedroom 2</dt>
// //                                     <dd className="font-medium text-right">{plan.dims.bed2}</dd>
// //                                   </>
// //                                 )}
                                
// //                                 {plan.dims.bed3 && (
// //                                   <>
// //                                     <dt className="text-gray-400">Bedroom 3</dt>
// //                                     <dd className="font-medium text-right">{plan.dims.bed3}</dd>
// //                                   </>
// //                                 )}
                                
// //                                 <dt className="text-gray-400">Kitchen</dt>
// //                                 <dd className="font-medium text-right">{plan.dims.kitchen}</dd>
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
// //       { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh. 2 Track for Kitchen/Bath." },
// //       { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
// //       { title: "Doors", desc: "Main: WPC frame & shutters. Others: Hardwood frame with flush shutters." },
// //       { title: "Flooring", desc: "Vitrified tiles entire flooring. Anti-skid in balconies." },
// //       { title: "Electrical", desc: "Concealed copper wiring (Schneider switches)." },
// //       { title: "Sanitary", desc: "Kajaria CP fittings & Kerovit Sanitary." },
// //       { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
// //       { title: "Water Supply", desc: "24hrs Borewell + Overhead tank. Cauvery water provision in kitchen." },
// //       { title: "Power Backup", desc: "Generator for common area, Lift & lighting points for each flat." },
// //       { title: "Lifts", desc: "Fully Automatic - Four lifts of 8 passengers capacity." },
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
// //               Strategically located near Electronic City, Wipro SEZ & Sarjapura Road. Enjoy low traffic volumes with easy accessibility to ORR.
// //             </p>

// //             <div className="space-y-8">
// //                <div className="border-l-2 border-[#333] pl-6 relative">
// //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
// //                  <h4 className="text-white font-bold text-lg mb-2">Work Hubs</h4>
// //                  <p className="text-gray-500">Electronic City, Wipro SEZ, Infosys Ltd, BHEL, Bommasandra Ind. Area.</p>
// //                </div>
// //                <div className="border-l-2 border-[#333] pl-6 relative">
// //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// //                  <h4 className="text-white font-bold text-lg mb-2">Education</h4>
// //                  <p className="text-gray-500">PES College, Christ Academy, Greenwood High, Indus Intl. School.</p>
// //                </div>
// //                <div className="border-l-2 border-[#333] pl-6 relative">
// //                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// //                  <h4 className="text-white font-bold text-lg mb-2">Essentials</h4>
// //                  <p className="text-gray-500">D-Mart, Chandrapura Market, Vimalalaya Hospital, Narayana Health City.</p>
// //                </div>
// //             </div>
// //           </div>
          
// //           <div className="relative">
// //              <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
// //                {/* Map Placeholder */}
// //                <div className="w-full h-[500px] bg-[#000] rounded-lg flex items-center justify-center flex-col gap-4">
// //                   <MapPin className="w-16 h-16 text-[#d9a406] animate-bounce" />
// //                   <p className="text-gray-500">Map View Placeholder</p>
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
// //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Royalty?</span></h2>
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
// //                <h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#d9a406]">Palacio</span></h3>
// //                <p className="text-gray-500 text-sm">PRM/KA/RERA/1251/308/ PR/220424/006827</p>
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
// //                <p className="text-gray-500 text-sm mb-2">Near Electronic City, Bangalore</p>
// //                <p className="text-gray-500 text-sm">+91 99999 99999</p>
// //                <p className="text-gray-500 text-sm">sales@rrlpalacio.com</p>
// //             </div>
// //           </div>
// //           <div className="mt-12 text-center text-gray-700 text-xs">
// //             © 2024 RRL Palacio. All rights reserved. Disclaimer: Images are for representation purpose only.
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
// //                RRL <span className="text-[#d9a406]">Palacio</span>
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
// //       {/* <FooterSection /> */}
// //       <EnquiryModal />
// //     </main>
// //   )
// // }

// "use client"

// import React, { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { 
//   Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck, 
//   Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee, 
//   Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User, 
//   Lock, Unlock, CheckCircle, ArrowLeft
// } from "lucide-react"

// // UI Component Imports - Ensure you have these installed via Shadcn UI
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

// // --- DATA ---
// type FloorPlan = {
//   id: string
//   type: "2BHK" | "3BHK"
//   facing: string
//   area: number
//   dims: {
//     living: string
//     dining?: string
//     kitchen: string
//     masterBed: string
//     bed2?: string
//     bed3?: string
//   }
//   image: string
// }

// // Full dataset of 16 units
// const floorPlansData: FloorPlan[] = [
//   { id: "01", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "02", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "03", type: "2BHK", facing: "North", area: 1080, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "04", type: "3BHK", facing: "North", area: 1425, dims: { living: "16'3\" x 11'6\"", dining: "12'3\" x 9'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'6\"", bed2: "11'0\" x 11'6\"", bed3: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "05", type: "3BHK", facing: "East", area: 1525, dims: { living: "16'3\" x 14'0\"", dining: "8'0\" x 9'6\"", masterBed: "12'0\" x 13'0\"", kitchen: "8'0\" x 9'6\"", bed2: "11'0\" x 11'0\"", bed3: "11'0\" x 12'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "06", type: "3BHK", facing: "East", area: 1360, dims: { living: "23'6\" x 11'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'9\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "07", type: "2BHK", facing: "East", area: 1245, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "08", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "09", type: "3BHK", facing: "East", area: 1460, dims: { living: "11'6\" x 18'9\"", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "10", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "11", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "12", type: "2BHK", facing: "North", area: 1120, dims: { living: "11'3\" x 16'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "13", type: "3BHK", facing: "East", area: 1485, dims: { living: "26'6\" x 11'6\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "14", type: "2BHK", facing: "East", area: 1250, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "10'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "15", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
//   { id: "16", type: "3BHK", facing: "East", area: 1540, dims: { living: "11'6\" x 22'9\"", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
// ]

// // --- ANIMATION VARIANTS ---
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
// }

// // ========== SUB-COMPONENTS ==========

// const HeroImageBanner = () => {
//   return (
//     <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black border-y border-[#333]">
//       <motion.div 
//         initial={{ scale: 1.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: true }}
//         className="w-full h-full relative"
//       >
//         <img 
//           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766056600/HOME_HERO_2_ahmbpj.png" 
//           alt="RRL Hero Banner" 
//           className="w-full h-full object-fill"
//         />
//       </motion.div>
//     </section>
//   );
// };

// const HeroSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Enquiry Submitted!");
//   };

//   return (
//     <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
//                <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">Ready To Move In</Badge>
//                <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">BMRDA & RERA Approved</Badge>
//             </motion.div>

//             <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
//               Where Luxury <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Meets Legacy</span>
//             </motion.h1>

//             <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic">
//               "Every corner echoes with regal tales." <br/>
//               Experience the royal lifestyle with 50% UDS and Free Interiors.
//             </motion.p>

//             <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105" onClick={onOpenModal}>
//                 <span className="skew-x-[10deg] flex items-center gap-2">Download Brochure <ArrowRight className="w-5 h-5"/></span>
//               </Button>
//             </motion.div>
//           </motion.div>

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
//                    <p className="text-gray-400 text-sm mt-1">Get exclusive offers & floor plans.</p>
//                 </div>
                
//                 <form onSubmit={handleFormSubmit} className="space-y-5">
//                    <div className="relative">
//                       <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                       <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all" required/>
//                    </div>
//                    <div className="relative">
//                       <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                       <input type="tel" placeholder="Phone Number" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all" required/>
//                    </div>
//                    <div className="relative">
//                       <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                       <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all" required/>
//                    </div>
//                    <Button className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all">Get Call Back</Button>
//                 </form>
//              </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const HighlightsSection = () => (
//   <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
//     <div className="container mx-auto px-4">
//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         {[
//           { icon: Award, title: "Free Interiors", desc: "Fully designed & ready to live homes." },
//           { icon: ShieldCheck, title: "50% UDS", desc: "Own a significant share of the land." },
//           { icon: Zap, title: "100% Power Backup", desc: "Generators for all flats & lifts." },
//           { icon: Building2, title: "Ready To Move In", desc: "No waiting, no delays." }
//         ].map((item, idx) => (
//           <motion.div key={idx} variants={fadeIn} className="group">
//             <Card className="bg-black/50 border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
//               <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
//               <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// )

// const AmenitiesSection = () => {
//   const amenities5Star = [
//     { name: "Steam Bath", icon: Wind }, { name: "Outdoor Games", icon: Gamepad2 },
//     { name: "Basket Ball Court", icon: CheckCircle2 }, { name: "Home Theater", icon: MonitorPlay },
//     { name: "Skating Rink", icon: Gamepad2 }, { name: "Rooftop BBQ", icon: Coffee },
//     { name: "Jogging Track", icon: Trees }, { name: "Club House", icon: Building2 },
//     { name: "Outdoor Gym", icon: Dumbbell }, { name: "Drive Way", icon: CheckCircle2 },
//     { name: "Senior Seating", icon: Coffee }, { name: "Indoor Games", icon: Gamepad2 }
//   ]
//   const amenities4Star = [
//     { name: "Swimming Pool", sub: "With Toddler Pool", icon: Waves },
//     { name: "Ultra-Modern Gym", sub: "For fitness enthusiasts", icon: Dumbbell },
//     { name: "Kids Play Area", sub: "Indoor Safe Zone", icon: Gamepad2 },
//   ]

//   return (
//     <section className="py-24 bg-black relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
//           <p className="text-gray-400 max-w-2xl">Meticulously curated amenities designed for a modern & comfortable lifestyle.</p>
//         </div>

//         <Tabs defaultValue="5star" className="w-full">
//           <TabsList className="bg-transparent border-b border-white/10 w-full justify-start rounded-none h-auto p-0 mb-10">
//             <TabsTrigger value="5star" className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none">5 Star Amenities</TabsTrigger>
//             <TabsTrigger value="4star" className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none">4 Star Amenities</TabsTrigger>
//           </TabsList>
//           <TabsContent value="5star">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {amenities5Star.map((item, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4">
//                   <div className="p-3 bg-black rounded-lg text-[#d9a406] group-hover:scale-110 transition-transform"><item.icon className="w-6 h-6" /></div>
//                   <span className="text-gray-300 font-medium group-hover:text-white">{item.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>
//           <TabsContent value="4star">
//              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {amenities4Star.map((item, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative h-64 rounded-2xl overflow-hidden group border border-white/10">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
//                   <div className="absolute inset-0 bg-[#222] group-hover:scale-110 transition-transform duration-700"></div>
//                   <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
//                     <div className="bg-[#d9a406] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-black"><item.icon className="w-6 h-6" /></div>
//                     <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
//                     <p className="text-gray-400">{item.sub}</p>
//                   </div>
//                 </motion.div>
//               ))}
//              </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   )
// }

// // ========== FLOOR PLANS SECTION (FIXED: RIGHT SIDE REVERTED) ==========
// const FloorPlansSection = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
//   const [formOpenId, setFormOpenId] = useState<string | null>(null);

//   const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>, planId: string) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     console.log("Lead Captured:", {
//       name: formData.get('name'),
//       phone: formData.get('phone'),
//       email: formData.get('email'),
//       unitId: planId
//     });
//     // Mark as unlocked
//     setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
//     // Close the form view (switch back to dimensions view)
//     setFormOpenId(null);
//   };

//   return (
//     <section className="py-24 bg-[#050505]" id="floorplans">
//       <div className="container mx-auto px-4">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
//             <p className="text-gray-400 max-w-xl">103 Units | B+G+6 Floors | No Common Walls <br/>Choose from our range of 16 distinct unit layouts.</p>
//           </div>
//           <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
//             {["all", "2BHK", "3BHK"].map((tab) => (
//               <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === tab ? "bg-[#d9a406] text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>
//                 {tab.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           <AnimatePresence mode="popLayout">
//             {filteredPlans.map((plan) => (
//               <motion.div key={plan.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group">
//                 <Card className="bg-[#111] border border-white/5 overflow-hidden hover:border-[#d9a406] transition-all duration-300">
//                   <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
//                     <div className="flex justify-between items-start mb-4">
//                       <div><h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3><p className="text-[#d9a406] font-medium">{plan.type}</p></div>
//                       <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">{plan.facing} Facing</Badge>
//                     </div>
//                     <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{plan.area}</span><span className="text-gray-500 font-medium">SFT</span></div>
//                   </div>
                  
//                   <div className="p-6 space-y-3">
//                     <div className="flex justify-between text-sm"><span className="text-gray-500">Living</span><span className="text-gray-300">{plan.dims.living || "N/A"}</span></div>
//                     <div className="flex justify-between text-sm"><span className="text-gray-500">Master Bed</span><span className="text-gray-300">{plan.dims.masterBed}</span></div>
//                   </div>

//                   <div className="p-4 bg-black">
//                     <Dialog onOpenChange={(open) => { if(!open) setFormOpenId(null); }}>
//                       <DialogTrigger asChild>
//                         <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
//                           <Maximize2 className="w-4 h-4 mr-2" /> View Floor Plans
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="bg-[#111] border border-[#333] text-white max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw]">
//                         <DialogHeader>
//                           <DialogTitle className="text-2xl font-bold text-[#d9a406] flex items-center gap-2">
//                             Unit {plan.id} - {plan.type} ({plan.area} SFT)
//                             {unlockedPlans[plan.id] && (<Badge className="bg-green-500/20 text-green-500 border-green-500/50">Unlocked</Badge>)}
//                           </DialogTitle>
//                         </DialogHeader>

//                         <div className="mt-4 grid md:grid-cols-2 gap-8">
                          
//                           {/* === LEFT SIDE: IMAGE === */}
//                           <div className="relative aspect-square bg-black/50 rounded-lg overflow-hidden border border-white/10">
//                              <img 
//                                 src={plan.image} 
//                                 alt={`Plan ${plan.id}`} 
//                                 className={`w-full h-full object-contain transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl scale-110 opacity-50'}`}
//                              />
//                              {/* Overlay on Image if Locked */}
//                              {!unlockedPlans[plan.id] && (
//                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 p-4 text-center backdrop-blur-sm">
//                                  <div className="bg-[#111] p-4 rounded-full border border-[#d9a406] mb-4"><Lock className="w-8 h-8 text-[#d9a406]" /></div>
//                                  <p className="text-white font-bold text-lg">Floor Plan Locked</p>
//                                  <p className="text-sm text-gray-300 mt-2 mb-4 max-w-[200px]">Unlock to view clear image</p>
//                                  <Button 
//                                     size="sm" 
//                                     className="bg-[#d9a406] text-black hover:bg-[#b08505]"
//                                     onClick={() => setFormOpenId(plan.id)}
//                                  >
//                                     <Unlock className="w-4 h-4 mr-2" /> Unlock Now
//                                  </Button>
//                                </div>
//                              )}
//                           </div>
                          
//                           {/* === RIGHT SIDE: DIMENSIONS (OR FORM) === */}
//                           <div className="space-y-6 flex flex-col justify-center min-h-[400px]">
//                             {/* If Form is NOT open, show Dimensions (Default View) */}
//                             {formOpenId !== plan.id ? (
//                                 <div className="animate-in fade-in slide-in-from-right-4">
//                                     <h4 className="text-lg font-semibold border-b border-white/10 pb-2 text-white mb-4">Room Dimensions</h4>
//                                     <dl className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
//                                         <dt className="text-gray-400">Facing</dt><dd className="font-medium text-right text-white">{plan.facing}</dd>
//                                         <dt className="text-gray-400">Living</dt><dd className="font-medium text-right text-white">{plan.dims.living}</dd>
//                                         {plan.dims.dining && <><dt className="text-gray-400">Dining</dt><dd className="font-medium text-right text-white">{plan.dims.dining}</dd></>}
//                                         <dt className="text-gray-400">Master Bed</dt><dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
//                                         {plan.dims.bed2 && <><dt className="text-gray-400">Bedroom 2</dt><dd className="font-medium text-right text-white">{plan.dims.bed2}</dd></>}
//                                         {plan.dims.bed3 && <><dt className="text-gray-400">Bedroom 3</dt><dd className="font-medium text-right text-white">{plan.dims.bed3}</dd></>}
//                                         <dt className="text-gray-400">Kitchen</dt><dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
//                                     </dl>
                                    
//                                     <div className="mt-8 pt-6 border-t border-white/10">
//                                         {!unlockedPlans[plan.id] ? (
//                                             <Button 
//                                                 className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold"
//                                                 onClick={() => setFormOpenId(plan.id)}
//                                             >
//                                                 <Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan
//                                             </Button>
//                                         ) : (
//                                             <div className="grid grid-cols-2 gap-3">
//                                                 <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Download PDF</Button>
//                                                 <Button className="bg-[#d9a406] text-black hover:bg-[#b38605]">Book Site Visit</Button>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ) : (
//                                 // If Form IS open, show the Form (Swaps the view)
//                                 <div className="bg-white/5 p-6 rounded-lg border border-white/10 animate-in fade-in slide-in-from-right-4 relative">
//                                     <button 
//                                         onClick={() => setFormOpenId(null)}
//                                         className="absolute top-4 right-4 text-gray-400 hover:text-white"
//                                         title="Back to details"
//                                     >
//                                         <X className="w-5 h-5" />
//                                     </button>
                                    
//                                     <div className="mb-6 flex items-center gap-2 text-[#d9a406]">
//                                         <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-white" onClick={() => setFormOpenId(null)}/>
//                                         <h4 className="text-xl font-semibold text-white">Unlock Access</h4>
//                                     </div>
                                    
//                                     <p className="text-sm text-gray-400 mb-6">Enter your details to instantly view the floor plan.</p>
//                                     <form onSubmit={(e) => handleFormSubmit(e, plan.id)} className="space-y-4">
//                                         <div className="space-y-2"><Label className="text-gray-300">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
//                                         <div className="space-y-2"><Label className="text-gray-300">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
//                                         <div className="space-y-2"><Label className="text-gray-300">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
//                                         <Button type="submit" className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold mt-2"><Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan</Button>
//                                     </form>
//                                 </div>
//                             )}
//                           </div>
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   )
// }

// const SpecsSection = () => {
//   const specs = [
//     { title: "Structure", desc: "RCC framed structure." },
//     { title: "Walls", desc: "6\" solid cement block (Exterior), 4\" solid cement block (Interior)." },
//     { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh. 2 Track for Kitchen/Bath." },
//     { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
//     { title: "Doors", desc: "Main: WPC frame & shutters. Others: Hardwood frame with flush shutters." },
//     { title: "Flooring", desc: "Vitrified tiles entire flooring. Anti-skid in balconies." },
//     { title: "Electrical", desc: "Concealed copper wiring (Schneider switches)." },
//     { title: "Sanitary", desc: "Kajaria CP fittings & Kerovit Sanitary." },
//     { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
//     { title: "Water Supply", desc: "24hrs Borewell + Overhead tank. Cauvery water provision in kitchen." },
//     { title: "Power Backup", desc: "Generator for common area, Lift & lighting points for each flat." },
//     { title: "Lifts", desc: "Fully Automatic - Four lifts of 8 passengers capacity." },
//   ]
//   return (
//     <section className="py-24 bg-black border-y border-white/5">
//        <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Technical <span className="text-[#d9a406]">Specifications</span></h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
//             {specs.map((item, i) => (
//               <div key={i} className="flex gap-4 items-start">
//                  <div className="w-2 h-2 mt-2 bg-[#d9a406] rounded-full shrink-0 shadow-[0_0_10px_#d9a406]"></div>
//                  <div><h4 className="text-lg font-bold text-white mb-1">{item.title}</h4><p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p></div>
//               </div>
//             ))}
//           </div>
//        </div>
//     </section>
//   )
// }

// const LocationSection = () => (
//   <section className="py-24 bg-[#0a0a0a]">
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div>
//           <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406]">Prime Location</Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connected to <span className="text-[#d9a406]">Everything</span></h2>
//           <p className="text-gray-400 mb-8 text-lg">Strategically located near Electronic City, Wipro SEZ & Sarjapura Road. Enjoy low traffic volumes with easy accessibility to ORR.</p>
//           <div className="space-y-8">
//              <div className="border-l-2 border-[#333] pl-6 relative">
//                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
//                <h4 className="text-white font-bold text-lg mb-2">Work Hubs</h4><p className="text-gray-500">Electronic City, Wipro SEZ, Infosys Ltd, BHEL.</p>
//              </div>
//              <div className="border-l-2 border-[#333] pl-6 relative">
//                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
//                <h4 className="text-white font-bold text-lg mb-2">Education</h4><p className="text-gray-500">PES College, Christ Academy, Greenwood High.</p>
//              </div>
//              <div className="border-l-2 border-[#333] pl-6 relative">
//                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
//                <h4 className="text-white font-bold text-lg mb-2">Essentials</h4><p className="text-gray-500">D-Mart, Chandrapura Market, Narayana Health City.</p>
//              </div>
//           </div>
//         </div>

//         {/* Right Map Section */}
//         <div className="relative">
//            <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
//              <div className="w-full h-[500px] bg-[#000] rounded-lg overflow-hidden relative">
//                 {/* Google Map Embed - Full Color */}
//                 <iframe 
//                   src="https://maps.google.com/maps?q=Sarjapur+Road,Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
//                   <p className="text-black text-sm font-bold">Sarjapura Road, Bengaluru</p>
//                 </div>
//              </div>
//            </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

// const FooterSection = ({ onOpenModal }: { onOpenModal: () => void }) => (
//   <footer className="bg-black pt-24 pb-12 border-t border-white/10">
//      <div className="container mx-auto px-4 text-center">
//         <div className="max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Royalty?</span></h2>
//           <p className="text-gray-400 mb-8">Download the brochure to see the complete floor plans, legal approvals, and pricing details.</p>
//           <Button size="lg" className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(217,164,6,0.3)] hover:shadow-[0_0_50px_rgba(217,164,6,0.5)] transition-all" onClick={onOpenModal}>Enquire Now</Button>
//         </div>
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 text-left">
//           <div><h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#d9a406]">Palacio</span></h3><p className="text-gray-500 text-sm">PRM/KA/RERA/1251/308/ PR/220424/006827</p></div>
//           <div><h4 className="text-white font-bold mb-4">Quick Links</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Home</li><li>Floor Plans</li><li>Amenities</li></ul></div>
//           <div><h4 className="text-white font-bold mb-4">Contact</h4><p className="text-gray-500 text-sm mb-2">Near Electronic City, Bangalore</p><p className="text-gray-500 text-sm">+91 99999 99999</p></div>
//         </div>
//         <div className="mt-12 text-center text-gray-700 text-xs">© 2024 RRL Palacio. All rights reserved. Disclaimer: Images are for representation purpose only.</div> */}
//      </div>
//   </footer>
// )

// // ========== MAIN COMPONENT ==========

// export default function PalacioPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const handleModalSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert("Thank you for your enquiry! We will contact you shortly.")
//     setIsModalOpen(false)
//   }

//   return (
//     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
//       {/* Navigation Bar */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
//          <div className="container mx-auto px-4 flex justify-between items-center">
//             <div className="text-2xl font-bold tracking-tighter">
//                RRL <span className="text-[#d9a406]">Palacio</span>
//             </div>
//             <Button variant="outline" className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black" onClick={() => setIsModalOpen(true)}>Enquire Now</Button>
//             <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}><Menu /></button>
//          </div>
//       </nav>

//       {/* Sections */}
//       <HeroImageBanner />
//       <HeroSection onOpenModal={() => setIsModalOpen(true)} />
//       <HighlightsSection />
//       <AmenitiesSection />
//       <FloorPlansSection />
//       <SpecsSection />
//       <LocationSection />
//       <FooterSection onOpenModal={() => setIsModalOpen(true)} />

//       {/* Global Enquiry Modal */}
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
//               className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
//               <div className="text-center mb-8"><h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3><p className="text-[#d9a406] text-sm">Fill the form to unlock exclusive offers</p></div>
//               <form onSubmit={handleModalSubmit} className="space-y-4">
//                 <div className="space-y-2"><input type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" required /></div>
//                 <div className="space-y-2"><input type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" required /></div>
//                 <div className="space-y-2"><input type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" required /></div>
//                 <Button className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-2">Submit Enquiry</Button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   )
// }

"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck, 
  Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee, 
  Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User, 
  Lock, Unlock, CheckCircle, ArrowLeft, Loader2
} from "lucide-react"

// 1. Formspree Imports
import { useForm, ValidationError } from '@formspree/react';

// UI Component Imports
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

// --- DATA ---
type FloorPlan = {
  id: string
  type: "2BHK" | "3BHK"
  facing: string
  area: number
  dims: {
    living: string
    dining?: string
    kitchen: string
    masterBed: string
    bed2?: string
    bed3?: string
  }
  image: string
}

// Full dataset of 16 units
const floorPlansData: FloorPlan[] = [
  { id: "01", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "02", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "03", type: "2BHK", facing: "North", area: 1080, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "04", type: "3BHK", facing: "North", area: 1425, dims: { living: "16'3\" x 11'6\"", dining: "12'3\" x 9'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'6\"", bed2: "11'0\" x 11'6\"", bed3: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "05", type: "3BHK", facing: "East", area: 1525, dims: { living: "16'3\" x 14'0\"", dining: "8'0\" x 9'6\"", masterBed: "12'0\" x 13'0\"", kitchen: "8'0\" x 9'6\"", bed2: "11'0\" x 11'0\"", bed3: "11'0\" x 12'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "06", type: "3BHK", facing: "East", area: 1360, dims: { living: "23'6\" x 11'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'9\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "07", type: "2BHK", facing: "East", area: 1245, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "08", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "09", type: "3BHK", facing: "East", area: 1460, dims: { living: "11'6\" x 18'9\"", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "10", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "11", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "12", type: "2BHK", facing: "North", area: 1120, dims: { living: "11'3\" x 16'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'0\"", bed2: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "13", type: "3BHK", facing: "East", area: 1485, dims: { living: "26'6\" x 11'6\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "14", type: "2BHK", facing: "East", area: 1250, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "10'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "15", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "16", type: "3BHK", facing: "East", area: 1540, dims: { living: "11'6\" x 22'9\"", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
]

// --- ANIMATION VARIANTS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

// ========== SUB-COMPONENTS ==========

const HeroImageBanner = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black border-y border-[#333]">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-full h-full relative"
      >
        <img 
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766056600/HOME_HERO_2_ahmbpj.png" 
          alt="RRL Hero Banner" 
          className="w-full h-full object-fill"
        />
      </motion.div>
    </section>
  );
};

const HeroSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  // Integrate Formspree for Hero Form
  // REPLACE "YOUR_HERO_FORM_ID" with your actual Formspree ID
  const [state, handleSubmit] = useForm("xbdrqepk");

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
               <Badge variant="outline" className="text-[#d9a406] border-[#d9a406] px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406]/10 backdrop-blur-md">Ready To Move In</Badge>
               <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">BMRDA & RERA Approved</Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Where Luxury <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Meets Legacy</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic">
              "Every corner echoes with regal tales." <br/>
              Experience the royal lifestyle with 50% UDS and Free Interiors.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105" onClick={onOpenModal}>
                <span className="skew-x-[10deg] flex items-center gap-2">Download Brochure <ArrowRight className="w-5 h-5"/></span>
              </Button>
            </motion.div>
          </motion.div>

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
                      <p className="text-gray-400 text-sm mt-1">Get exclusive offers & floor plans.</p>
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
                    </form>
                  </>
                )}
             </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const HighlightsSection = () => (
  <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
    <div className="container mx-auto px-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { icon: Award, title: "Free Interiors", desc: "Fully designed & ready to live homes." },
          { icon: ShieldCheck, title: "50% UDS", desc: "Own a significant share of the land." },
          { icon: Zap, title: "100% Power Backup", desc: "Generators for all flats & lifts." },
          { icon: Building2, title: "Ready To Move In", desc: "No waiting, no delays." }
        ].map((item, idx) => (
          <motion.div key={idx} variants={fadeIn} className="group">
            <Card className="bg-black/50 border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

const AmenitiesSection = () => {
  const amenities5Star = [
    { name: "Steam Bath", icon: Wind }, { name: "Outdoor Games", icon: Gamepad2 },
    { name: "Basket Ball Court", icon: CheckCircle2 }, { name: "Home Theater", icon: MonitorPlay },
    { name: "Skating Rink", icon: Gamepad2 }, { name: "Rooftop BBQ", icon: Coffee },
    { name: "Jogging Track", icon: Trees }, { name: "Club House", icon: Building2 },
    { name: "Outdoor Gym", icon: Dumbbell }, { name: "Drive Way", icon: CheckCircle2 },
    { name: "Senior Seating", icon: Coffee }, { name: "Indoor Games", icon: Gamepad2 }
  ]
  const amenities4Star = [
    { name: "Swimming Pool", sub: "With Toddler Pool", icon: Waves },
    { name: "Ultra-Modern Gym", sub: "For fitness enthusiasts", icon: Dumbbell },
    { name: "Kids Play Area", sub: "Indoor Safe Zone", icon: Gamepad2 },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
          <p className="text-gray-400 max-w-2xl">Meticulously curated amenities designed for a modern & comfortable lifestyle.</p>
        </div>

        <Tabs defaultValue="5star" className="w-full">
          <TabsList className="bg-transparent border-b border-white/10 w-full justify-start rounded-none h-auto p-0 mb-10">
            <TabsTrigger value="5star" className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none">5 Star Amenities</TabsTrigger>
            <TabsTrigger value="4star" className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none">4 Star Amenities</TabsTrigger>
          </TabsList>
          <TabsContent value="5star">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {amenities5Star.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4">
                  <div className="p-3 bg-black rounded-lg text-[#d9a406] group-hover:scale-110 transition-transform"><item.icon className="w-6 h-6" /></div>
                  <span className="text-gray-300 font-medium group-hover:text-white">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="4star">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenities4Star.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative h-64 rounded-2xl overflow-hidden group border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[#222] group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <div className="bg-[#d9a406] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-black"><item.icon className="w-6 h-6" /></div>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-gray-400">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

// ========== FLOOR PLANS SECTION ==========
const FloorPlansSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
  const [formOpenId, setFormOpenId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Manual Formspree Submission using fetch
    // REPLACE "YOUR_FLOORPLAN_FORM_ID" with your actual Formspree ID
    const formId = "xbdrqepk"; 
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
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
            <p className="text-gray-400 max-w-xl">103 Units | B+G+6 Floors | No Common Walls <br/>Choose from our range of 16 distinct unit layouts.</p>
          </div>
          <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
            {["all", "2BHK", "3BHK"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === tab ? "bg-[#d9a406] text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan) => (
              <motion.div key={plan.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group">
                <Card className="bg-[#111] border border-white/5 overflow-hidden hover:border-[#d9a406] transition-all duration-300">
                  <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
                    <div className="flex justify-between items-start mb-4">
                      <div><h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3><p className="text-[#d9a406] font-medium">{plan.type}</p></div>
                      <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">{plan.facing} Facing</Badge>
                    </div>
                    <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{plan.area}</span><span className="text-gray-500 font-medium">SFT</span></div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Living</span><span className="text-gray-300">{plan.dims.living || "N/A"}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Master Bed</span><span className="text-gray-300">{plan.dims.masterBed}</span></div>
                  </div>

                  <div className="p-4 bg-black">
                    <Dialog onOpenChange={(open) => { if(!open) setFormOpenId(null); }}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
                          <Maximize2 className="w-4 h-4 mr-2" /> View Floor Plans
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#111] border border-[#333] text-white max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#d9a406] flex items-center gap-2">
                            Unit {plan.id} - {plan.type} ({plan.area} SFT)
                            {unlockedPlans[plan.id] && (<Badge className="bg-green-500/20 text-green-500 border-green-500/50">Unlocked</Badge>)}
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
                                        <dt className="text-gray-400">Facing</dt><dd className="font-medium text-right text-white">{plan.facing}</dd>
                                        <dt className="text-gray-400">Living</dt><dd className="font-medium text-right text-white">{plan.dims.living}</dd>
                                        {plan.dims.dining && <><dt className="text-gray-400">Dining</dt><dd className="font-medium text-right text-white">{plan.dims.dining}</dd></>}
                                        <dt className="text-gray-400">Master Bed</dt><dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
                                        {plan.dims.bed2 && <><dt className="text-gray-400">Bedroom 2</dt><dd className="font-medium text-right text-white">{plan.dims.bed2}</dd></>}
                                        {plan.dims.bed3 && <><dt className="text-gray-400">Bedroom 3</dt><dd className="font-medium text-right text-white">{plan.dims.bed3}</dd></>}
                                        <dt className="text-gray-400">Kitchen</dt><dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
                                    </dl>
                                    
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        {!unlockedPlans[plan.id] ? (
                                            <Button 
                                                className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold"
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
                                    <form onSubmit={(e) => handleFormSubmit(e, plan.id)} className="space-y-4">
                                        <div className="space-y-2"><Label className="text-gray-300">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                        <div className="space-y-2"><Label className="text-gray-300">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                        <div className="space-y-2"><Label className="text-gray-300">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold mt-2">
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

const SpecsSection = () => {
  const specs = [
    { title: "Structure", desc: "RCC framed structure." },
    { title: "Walls", desc: "6\" solid cement block (Exterior), 4\" solid cement block (Interior)." },
    { title: "Windows", desc: "3 Track for Living/Bedroom with safety grills & mosquito mesh. 2 Track for Kitchen/Bath." },
    { title: "Kitchen", desc: "20mm Granite slab, SS Sink, Glazed tiles dado up to 2ft." },
    { title: "Doors", desc: "Main: WPC frame & shutters. Others: Hardwood frame with flush shutters." },
    { title: "Flooring", desc: "Vitrified tiles entire flooring. Anti-skid in balconies." },
    { title: "Electrical", desc: "Concealed copper wiring (Schneider switches)." },
    { title: "Sanitary", desc: "Kajaria CP fittings & Kerovit Sanitary." },
    { title: "Painting", desc: "Emulsion for internal walls. Apex paints for exterior." },
    { title: "Water Supply", desc: "24hrs Borewell + Overhead tank. Cauvery water provision in kitchen." },
    { title: "Power Backup", desc: "Generator for common area, Lift & lighting points for each flat." },
    { title: "Lifts", desc: "Fully Automatic - Four lifts of 8 passengers capacity." },
  ]
  return (
    <section className="py-24 bg-black border-y border-white/5">
       <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Technical <span className="text-[#d9a406]">Specifications</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {specs.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                 <div className="w-2 h-2 mt-2 bg-[#d9a406] rounded-full shrink-0 shadow-[0_0_10px_#d9a406]"></div>
                 <div><h4 className="text-lg font-bold text-white mb-1">{item.title}</h4><p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connected to <span className="text-[#d9a406]">Everything</span></h2>
          <p className="text-gray-400 mb-8 text-lg">Strategically located near Electronic City, Wipro SEZ & Sarjapura Road. Enjoy low traffic volumes with easy accessibility to ORR.</p>
          <div className="space-y-8">
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Work Hubs</h4><p className="text-gray-500">Electronic City, Wipro SEZ, Infosys Ltd, BHEL.</p>
             </div>
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Education</h4><p className="text-gray-500">PES College, Christ Academy, Greenwood High.</p>
             </div>
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Essentials</h4><p className="text-gray-500">D-Mart, Chandrapura Market, Narayana Health City.</p>
             </div>
          </div>
        </div>

        {/* Right Map Section */}
        <div className="relative">
           <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
             <div className="w-full h-[500px] bg-[#000] rounded-lg overflow-hidden relative">
                {/* Google Map Embed - Full Color */}
                <iframe 
                  src="https://maps.google.com/maps?q=Sarjapur+Road,Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                  <p className="text-black text-sm font-bold">Sarjapura Road, Bengaluru</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
)

const FooterSection = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <footer className="bg-black pt-24 pb-12 border-t border-white/10">
     <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Royalty?</span></h2>
          <p className="text-gray-400 mb-8">Download the brochure to see the complete floor plans, legal approvals, and pricing details.</p>
          <Button size="lg" className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(217,164,6,0.3)] hover:shadow-[0_0_50px_rgba(217,164,6,0.5)] transition-all" onClick={onOpenModal}>Enquire Now</Button>
        </div>
     </div>
  </footer>
)

// ========== MAIN COMPONENT ==========

export default function PalacioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Integrate Formspree for Global Modal
  // REPLACE "YOUR_MODAL_FORM_ID" with your actual Formspree ID
  const [state, handleSubmit] = useForm("xbdrqepk");

  // Close modal automatically on success
  useEffect(() => {
    if (state.succeeded) {
      // Optional: Add a delay before closing to let user see success message,
      // or rely on the UI update below.
      // setTimeout(() => setIsModalOpen(false), 3000); 
    }
  }, [state.succeeded]);

  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
               RRL <span className="text-[#d9a406]">Palacio</span>
            </div>
            <Button variant="outline" className="hidden md:flex border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black" onClick={() => setIsModalOpen(true)}>Enquire Now</Button>
            <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}><Menu /></button>
         </div>
      </nav>

      {/* Sections */}
      <HeroImageBanner />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <HighlightsSection />
      <AmenitiesSection />
      <FloorPlansSection />
      <SpecsSection />
      <LocationSection />
      <FooterSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Global Enquiry Modal */}
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
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
              
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Received!</h3>
                  <p className="text-gray-400 mb-6">Thank you for your enquiry. We will contact you shortly.</p>
                  <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Close</Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8"><h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3><p className="text-[#d9a406] text-sm">Fill the form to unlock exclusive offers</p></div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <input 
                        name="name" 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        name="phone" 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        name="email" 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                        required 
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-2">
                      {state.submitting ? "Sending..." : "Submit Enquiry"}
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