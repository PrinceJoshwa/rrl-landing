// // // // // "use client"

// // // // // import React, { useState, useEffect } from "react"
// // // // // import { useRouter } from "next/navigation"
// // // // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // // // import {
// // // // //   Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck,
// // // // //   Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee,
// // // // //   Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User,
// // // // //   Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, BrickWall, 
// // // // //   PaintRoller, AppWindow, Droplets, Leaf, Frame, DoorOpen, Bath, Wrench, BatteryCharging,
// // // // //   LayoutDashboard, BookOpen, Music, Utensils, Table2, Tv, Flower2,
// // // // //   Train, ShoppingCart, Hospital, Map, Briefcase, Megaphone
// // // // // } from "lucide-react"
// // // // // import { useForm, ValidationError } from '@formspree/react'

// // // // // // UI Component Imports
// // // // // import { Button } from "@/components/ui/button"
// // // // // import { Card } from "@/components/ui/card"
// // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // // // import { Badge } from "@/components/ui/badge"
// // // // // import { Input } from "@/components/ui/input"
// // // // // import { Label } from "@/components/ui/label"
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogContent,
// // // // //   DialogHeader,
// // // // //   DialogTitle,
// // // // //   DialogTrigger,
// // // // // } from "@/components/ui/dialog"

// // // // // // --- DATA FROM NATURE CRUST ---
// // // // // const floorPlansData = [
// // // // //   {
// // // // //     id: "1BHK",
// // // // //     type: "1 BHK",
// // // // //     facing: "East",
// // // // //     area: "655",
// // // // //     tag: "Only 1 Unit Available — Exclusive",
// // // // //     desc: "A thoughtfully designed compact sanctuary with east-facing windows for sunrise light and natural ventilation in every room.",
// // // // //     dims: { living: "10'0\" × 14'0\"", kitchen: "7'0\" × 7'0\"", masterBed: "11'0\" × 11'0\"", bath: "5'0\" × 8'0\"", balcony: "4'6\" × 7'0\"" },
// // // // //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
// // // // //   },
// // // // //   {
// // // // //     id: "2BHK",
// // // // //     type: "2 BHK",
// // // // //     facing: "East & North",
// // // // //     area: "835 - 1,055",
// // // // //     tag: "33 Units · 10 Unique Layouts",
// // // // //     desc: "The 'Versatile' Series — 10 layouts for all generations. Whether you're a young couple or a growing family, there's a home here for you.",
// // // // //     dims: { livingDining: "11'0\" × 16'0\"", kitchen: "8'0\" × 8'0\"", masterBed: "12'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", balcony: "5'0\" × 8'0\"" },
// // // // //     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
// // // // //   },
// // // // //   {
// // // // //     id: "3BHK",
// // // // //     type: "3 BHK",
// // // // //     facing: "Corner Units",
// // // // //     area: "1,035 - 1,215",
// // // // //     tag: "18 Premium Corner Homes",
// // // // //     desc: "The 'Executive' Series — panoramic sunrise views, cross ventilation & corner layouts up to 1,215 Sq.Ft. These aren't just big homes — they're the best homes in the building.",
// // // // //     dims: { living: "16'0\" × 12'0\"", dining: "12'0\" × 10'0\"", kitchen: "10'0\" × 8'0\"", masterBed: "13'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", bed3: "10'0\" × 10'0\"" },
// // // // //     image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85"
// // // // //   }
// // // // // ]

// // // // // const unitBreakdown2BHK = [
// // // // //   { area: "655", units: 1, nums: "39" },
// // // // //   { area: "835", units: 1, nums: "48" },
// // // // //   { area: "850", units: 1, nums: "47" },
// // // // //   { area: "875", units: 7, nums: "7,6,23,24,25,26,27" },
// // // // //   { area: "890", units: 9, nums: "16,17,18,19,20,30,31,32,33" },
// // // // //   { area: "895", units: 3, nums: "38,40,41" },
// // // // //   { area: "910", units: 7, nums: "11,3,29,34,44,45,37" },
// // // // //   { area: "930", units: 2, nums: "14,2" },
// // // // //   { area: "935", units: 1, nums: "8" },
// // // // //   { area: "950", units: 1, nums: "9" },
// // // // //   { area: "1055", units: 1, nums: "22" },
// // // // // ]

// // // // // const unitBreakdown3BHK = [
// // // // //   { area: "1035", units: 1, nums: "49" },
// // // // //   { area: "1090", units: 1, nums: "50" },
// // // // //   { area: "1100", units: 1, nums: "51" },
// // // // //   { area: "1110", units: 1, nums: "43" },
// // // // //   { area: "1115", units: 2, nums: "1, 15" },
// // // // //   { area: "1120", units: 2, nums: "10, 12" },
// // // // //   { area: "1130", units: 4, nums: "4, 21, 35, 46" },
// // // // //   { area: "1135", units: 2, nums: "28, 52" },
// // // // //   { area: "1140", units: 1, nums: "36" },
// // // // //   { area: "1155", units: 1, nums: "5" },
// // // // //   { area: "1175", units: 1, nums: "42" },
// // // // //   { area: "1215", units: 1, nums: "13" },
// // // // // ]

// // // // // const otherProjectsData = [
// // // // //   { name: "RRL Nature Wood", status: "Completed", desc: "Every corner reflects simplicity and elegance", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502?w=600&q=85" },
// // // // //   { name: "RRL Palacio", status: "Ready to Move", desc: "Ready-to-move 3 BHK furnished/semi-furnished · 1,400–1,540 SBA", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531?w=600&q=85" },
// // // // //   { name: "RRL Palm Altezze", status: "Ongoing", desc: "2 & 3 BHK Premium · G+23 · 92% Open Space · 50% UDS", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863?w=600&q=85" },
// // // // //   { name: "RRL Towers", status: "Completed", desc: "Landmark commercial and residential development", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451?w=600&q=85" },
// // // // //   { name: "RRL Complex", status: "Completed", desc: "Premium apartment project", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360?w=600&q=85" },
// // // // // ]

// // // // // // --- ANIMATION VARIANTS ---
// // // // // const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
// // // // // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
// // // // // const slideInVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }

// // // // // // --- HELPER COMPONENTS ---
// // // // // const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number; }) => {
// // // // //   const [count, setCount] = useState(0)
// // // // //   const [hasAnimated, setHasAnimated] = useState(false)
// // // // //   const ref = React.useRef<HTMLDivElement>(null)

// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         if (entries[0].isIntersecting && !hasAnimated) {
// // // // //           setHasAnimated(true)
// // // // //           let startTime: number | null = null
// // // // //           const step = (timestamp: number) => {
// // // // //             if (!startTime) startTime = timestamp
// // // // //             const progress = Math.min((timestamp - startTime) / duration, 1)
// // // // //             setCount(progress * end)
// // // // //             if (progress < 1) window.requestAnimationFrame(step)
// // // // //           }
// // // // //           window.requestAnimationFrame(step)
// // // // //         }
// // // // //       },
// // // // //       { threshold: 0.5 }
// // // // //     )
// // // // //     if (ref.current) observer.observe(ref.current)
// // // // //     return () => observer.disconnect()
// // // // //   }, [end, duration, hasAnimated])

// // // // //   return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
// // // // // }

// // // // // function EOICountdown() {
// // // // //   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
// // // // //   const [mounted, setMounted] = useState(false)

// // // // //   useEffect(() => {
// // // // //     setMounted(true)
// // // // //     const target = new Date("2026-06-30T23:59:59").getTime()
// // // // //     const interval = setInterval(() => {
// // // // //       const now = new Date().getTime()
// // // // //       const distance = target - now
// // // // //       if (distance < 0) { clearInterval(interval); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
// // // // //       setTimeLeft({
// // // // //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
// // // // //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
// // // // //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
// // // // //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
// // // // //       })
// // // // //     }, 1000)
// // // // //     return () => clearInterval(interval)
// // // // //   }, [])

// // // // //   if (!mounted) return null

// // // // //   return (
// // // // //     <div className="mt-8 mb-6">
// // // // //       <div className="text-[10px] text-[#d9a406] font-bold tracking-[.15em] uppercase mb-3 flex items-center gap-2">
// // // // //         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
// // // // //         EOI Ends In (June 30, 2026)
// // // // //       </div>
// // // // //       <div className="flex gap-3">
// // // // //         {[{ label: "Days", value: timeLeft.days }, { label: "Hours", value: timeLeft.hours }, { label: "Mins", value: timeLeft.minutes }, { label: "Secs", value: timeLeft.seconds }].map((item, i) => (
// // // // //           <div key={i} className="flex flex-col items-center justify-center bg-[#111] border border-[#d9a406]/30 px-4 py-3 min-w-[70px] rounded-lg shadow-[0_0_15px_rgba(217,164,6,0.1)]">
// // // // //             <span className="font-serif text-3xl text-[#fcd34d] font-bold leading-none">{String(item.value).padStart(2, '0')}</span>
// // // // //             <span className="text-[9px] font-bold tracking-[.2em] uppercase text-gray-500 mt-1.5">{item.label}</span>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ════════ MAIN PAGE COMPONENT ════════
// // // // // export default function Nc216Page() {
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// // // // //   const router = useRouter()
// // // // //   const [state, handleSubmit] = useForm("mkonkbkk")

// // // // //   // Dual Submit Logic (CRM + Formspree)
// // // // //   const handleDualSubmit = async (e: React.FormEvent<HTMLFormElement>, customProjectName = "RRL NC-216") => {
// // // // //     e.preventDefault()
// // // // //     const form = e.currentTarget
// // // // //     const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
// // // // //     const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
// // // // //     const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    
// // // // //     fetch('/enquire-now-api.php', {
// // // // //       method: 'POST',
// // // // //       headers: { 'Content-Type': 'application/json' },
// // // // //       body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: customProjectName }),
// // // // //     }).catch(() => {})
    
// // // // //     await handleSubmit(e)
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     if (state.succeeded) {
// // // // //       setTimeout(() => { setIsModalOpen(false) }, 3000)
// // // // //     }
// // // // //   }, [state.succeeded])

// // // // //   return (
// // // // //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black font-sans overflow-x-hidden">
    

// // // // //       {/* ════════ HERO IMAGE BANNER (Nature Crust Content) ════════ */}

// // // // //     <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">

// // // // //       {/* MOBILE HERO (400 × 300) */}
// // // // //       <div className="block md:hidden">
// // // // //         <div className="relative w-full aspect-[4/3] overflow-hidden">
// // // // //           <img
// // // // //             src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// // // // //             alt="RRL Hero Banner Mobile"
// // // // //             className="w-full h-full object-contain"
// // // // //             loading="eager"
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* DESKTOP HERO (UNCHANGED) */}
// // // // //       <div className="hidden md:block h-[60vh] md:h-[80vh]">
// // // // //         <motion.div
// // // // //           initial={{ scale: 1.1, opacity: 0 }}
// // // // //           whileInView={{ scale: 1, opacity: 1 }}
// // // // //           transition={{ duration: 1.5, ease: "easeOut" }}
// // // // //           viewport={{ once: true }}
// // // // //           className="relative w-full h-full"
// // // // //         >
// // // // //           <img
// // // // //             src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// // // // //             alt="RRL Hero Banner Desktop"
// // // // //             loading="eager"
// // // // //             className="w-full h-full object-fill"
// // // // //           />
// // // // //         </motion.div>
// // // // //       </div>

// // // // //     </section>


// // // // //       {/* ════════ HERO CONTENT & FORM (Palm Altezze UI + Nature Crust Content) ════════ */}
// // // // //       <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-12 pb-12">
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// // // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// // // // //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // // // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// // // // //                 <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm font-bold uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
// // // // //                 <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Sarjapura, Bengaluru</Badge>
// // // // //               </motion.div>

// // // // //               <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// // // // //                 Own a Home <br />
// // // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d] italic font-serif font-light">at the Cost of a Rent</span>
// // // // //               </motion.h1>

// // // // //               <motion.div variants={fadeIn} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed space-y-4">
// // // // //                 <p>Welcome to <strong className="text-white font-bold">RRL NC-216</strong> — a clear green lifestyle near Sarjapura. Zero compromise living with 100% East & North facing 1, 2 & 3 BHK homes on G+3 boutique blocks.</p>
// // // // //                 <p className="text-3xl font-bold text-white mt-4">Price <span className="text-[#d9a406]">₹46 Lakhs Onwards</span></p>
// // // // //               </motion.div>

// // // // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// // // // //                 {["RERA & BMRDA Approved", "100% Vastu Compliant", "42.47% UDS", "G+3 Boutique Living"].map(b => (
// // // // //                   <span key={b} className="border border-[#d9a406]/50 text-[#fcd34d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// // // // //                     {b}
// // // // //                   </span>
// // // // //                 ))}
// // // // //               </motion.div>

// // // // //               <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4 border-t border-white/10 overflow-hidden">
// // // // //                 <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase shrink-0">Awarded</span>
// // // // //                 <div className="flex-1 overflow-hidden whitespace-nowrap">
// // // // //                    <div className="inline-block animate-[marquee_30s_linear_infinite] text-[11px] text-gray-400 font-bold">
// // // // //                      🏆 Property Award of the Year 2023 &nbsp;&nbsp;&nbsp; 🏆 Global Real Estate Brand Awards 2023 &nbsp;&nbsp;&nbsp; 🏆 Excellence in Amenities Premium 2024 &nbsp;&nbsp;&nbsp; 🏆 Time Real Estate Icon Awards 2025 &nbsp;&nbsp;&nbsp; 🏆 Featured Recognition The Times of India 2026
// // // // //                    </div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             </motion.div>

// // // // //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // // // //                <Card className="bg-[#111] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden rounded-2xl">
// // // // //                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>

// // // // //                   {state.succeeded ? (
// // // // //                      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
// // // // //                         <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// // // // //                         <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
// // // // //                         <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
// // // // //                      </div>
// // // // //                   ) : (
// // // // //                     <div className="p-8">
// // // // //                       <div className="mb-4">
// // // // //                         <h3 className="text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-6 h-6 text-[#d9a406]"/> Register Interest</h3>
// // // // //                         <p className="text-[#d9a406] text-xs font-bold tracking-widest uppercase mt-2">Get Guaranteed Pre-Launch Pricing</p>
// // // // //                       </div>

// // // // //                       <EOICountdown />

// // // // //                       <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Hero Enquiry")} className="space-y-4">
// // // // //                         <div className="relative">
// // // // //                             <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // // // //                             <input name="name" type="text" placeholder="Full Name *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // // // //                         </div>
// // // // //                         <div className="relative">
// // // // //                             <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // // // //                             <input name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // // // //                         </div>
// // // // //                         <div className="relative">
// // // // //                             <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // // // //                             <input name="email" type="email" placeholder="Email Address *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // // // //                         </div>
// // // // //                         <select name="config" className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-gray-400 focus:text-white focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm appearance-none cursor-pointer">
// // // // //                           <option value="">Interested In...</option>
// // // // //                           <option>1 BHK — 655 Sq.Ft (Only 1 Unit)</option>
// // // // //                           <option>2 BHK — 835–1,055 Sq.Ft (33 Units)</option>
// // // // //                           <option>3 BHK — 1,035–1,215 Sq.Ft (18 Units)</option>
// // // // //                         </select>
// // // // //                         <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm uppercase tracking-widest h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all rounded-lg mt-2">
// // // // //                           {state.submitting ? "Processing..." : "Get Cost Sheet & Details →"}
// // // // //                         </Button>
// // // // //                       </form>
// // // // //                     </div>
// // // // //                   )}
// // // // //                </Card>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ PROJECT GLANCE (Palm Altezze Grid + Nature Crust Data) ════════ */}
// // // // //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden border-t border-white/5">
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-transparent to-transparent"></div>
// // // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // // //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
// // // // //             {[
// // // // //               { label: "Land Area", value: 85990, suffix: " Sq.Ft", icon: MapPin },
// // // // //               { label: "Total Units", value: 208, suffix: " Homes", icon: Building2 },
// // // // //               { label: "Starting Size", value: 655, suffix: " Sq.Ft", icon: Maximize2 },
// // // // //               { label: "Structure", value: 4, suffix: " Blocks", icon: Building2, isText: true, textVal: "G+3 Blocks" },
// // // // //             ].map((stat, index) => (
// // // // //               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
// // // // //                 <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#d9a406]/50 transition-all duration-500 h-full">
// // // // //                   <div className="w-14 h-14 bg-[#d9a406]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9a406]/20 transition-colors">
// // // // //                     <stat.icon className="w-7 h-7 text-[#d9a406]" />
// // // // //                   </div>
// // // // //                   <div className="text-3xl md:text-4xl font-bold text-[#d9a406] mb-2">
// // // // //                     {stat.isText ? <span>{stat.textVal}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
// // // // //                   </div>
// // // // //                   <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
// // // // //                   <div className="absolute inset-0 rounded-2xl bg-[#d9a406]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ EOI BENEFITS (Nature Crust Content in Palm Altezze USP layout) ════════ */}
// // // // //       <section className="py-20 bg-[#0a0a0a] border-b border-white/5" id="eoi">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <div className="text-center mb-12">
// // // // //             <h2 className="text-3xl md:text-4xl font-bold text-white">Expression of Interest <span className="text-[#d9a406] font-serif italic">(EOI) is Open</span></h2>
// // // // //             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Be among the first to secure your dream home at RRL NC-216. By submitting your EOI, you gain priority access to our exclusive pre-launch inventory.</p>
// // // // //           </div>
// // // // //           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// // // // //             {[
// // // // //               { icon: Star, title: "Priority Unit Selection", desc: "Choose your preferred floor & facing before public launch." },
// // // // //               { icon: Award, title: "Lowest Guaranteed Price", desc: "Pre-launch pricing locked in safely and securely." },
// // // // //               { icon: Zap, title: "Launch Day Offers", desc: "Exclusive access to special upgrades and launch discounts." },
// // // // //               { icon: ShieldCheck, title: "100% Refundable", desc: "Your EOI token is fully refundable without questions." }
// // // // //             ].map((item, idx) => (
// // // // //               <motion.div key={idx} variants={fadeIn} className="group">
// // // // //                 <Card className="bg-[#111] border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden rounded-2xl">
// // // // //                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
// // // // //                   <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
// // // // //                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
// // // // //                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// // // // //                 </Card>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ OVERVIEW & UDS (Architecture Section Style) ════════ */}
// // // // //       <section id="overview" className="py-24 bg-black text-white overflow-hidden relative">
// // // // //         <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
// // // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // // // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// // // // //               <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block mb-4">Ownership Advantage</span>
// // // // //               <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
// // // // //                 You Own the <br /> <span className="text-[#d9a406]">Land Too.</span>
// // // // //               </h2>
// // // // //               <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
// // // // //                 <p>
// // // // //                   Most apartments give you walls. We give you land. RRL NC-216 is a boutique residential enclave set on 85,990 Sq.Ft. Designed as G+3 blocks for low-density, congestion-free living.
// // // // //                 </p>
// // // // //                 <div className="pt-4 border-l-4 border-[#d9a406] pl-6">
// // // // //                   <p className="text-xl font-bold text-white uppercase tracking-wider mb-2">42.47% UNDIVIDED SHARE (UDS)</p>
// // // // //                   <p className="text-sm">Reserved exclusively for homeowners — ensuring a real, legal share of the ground beneath your home for superior asset appreciation.</p>
// // // // //                 </div>
                
// // // // //                 <div className="grid sm:grid-cols-2 gap-4 mt-8">
// // // // //                   {[
// // // // //                     "100% East & North Facing",
// // // // //                     "RERA & BMRDA Approved",
// // // // //                     "All Vastu Compliant Homes",
// // // // //                     "G+3 Boutique — No Congestion"
// // // // //                   ].map(f => (
// // // // //                     <div key={f} className="flex items-center gap-3 bg-[#111] p-3 border border-[#333] rounded-lg">
// // // // //                       <ShieldCheck className="w-4 h-4 text-[#d9a406] shrink-0" />
// // // // //                       <span className="text-xs font-bold text-gray-200 uppercase">{f}</span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>

// // // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
// // // // //               <div className="absolute inset-0 bg-[#d9a406] rounded-2xl transform rotate-3 opacity-20"></div>
// // // // //               {/* Image directly from Nature Crust */}
// // // // //               <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85" alt="RRL NC-216 Building" className="relative rounded-2xl shadow-2xl border-2 border-white/10 w-full h-[560px] object-cover" />
// // // // //               <div className="absolute bottom-8 left-[-20px] bg-[#111] border border-[#d9a406] text-white p-6 w-56 shadow-2xl rounded-xl">
// // // // //                  <div className="font-serif text-5xl font-light text-[#fcd34d]">42.47%</div>
// // // // //                  <div className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-400 mt-2">UDS Reserved</div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ MASTER PLAN ════════ */}
// // // // //       <section className="py-24 bg-[#0a0a0a] border-t border-[#333]">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
// // // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative">
// // // // //               <div className="absolute inset-0 bg-[#d9a406] rounded-2xl transform -rotate-2 opacity-10"></div>
// // // // //               {/* Image from Nature Crust Master Plan */}
// // // // //               <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=85" alt="RRL NC-216 Master Plan" className="relative w-full h-[480px] object-cover rounded-2xl border border-white/10 shadow-2xl" />
// // // // //             </motion.div>

// // // // //             <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
// // // // //               <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block">Master Plan</span>
// // // // //               <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
// // // // //                 Your Dream Home <br /> <span className="text-[#d9a406] italic">Awaits</span>
// // // // //               </h2>
// // // // //               <div className="w-20 h-1 bg-[#d9a406] rounded-full" />
// // // // //               <p className="text-lg text-gray-400 leading-relaxed">
// // // // //                 4 boutique G+3 blocks spread across 85,990 Sq.Ft with generous open spaces, landscaped gardens, community amenities and tree-lined pathways. East & North facing for every single unit.
// // // // //               </p>
// // // // //             </motion.div>

// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ AMENITIES (Palm Altezze Icons + Nature Crust Collage) ════════ */}
// // // // //       <section id="amenities" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// // // // //         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
// // // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // // //           <div className="mb-16 text-center">
// // // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than a Home. <span className="text-[#d9a406] font-serif italic">A Community.</span></h2>
// // // // //             <p className="text-gray-400 max-w-2xl mx-auto">Step outside and find everything you need — pools, parks, a gym, games and more. All within your campus. Your weekend is sorted.</p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
// // // // //             {[
// // // // //               { icon: Waves, title: "Swim & Stay Fit", desc: "Adult pool + kid's pool for safe splashing. Outdoor & indoor gym." },
// // // // //               { icon: Trees, title: "Walk, Play, Breathe", desc: "A natural park right at your doorstep. Curated landscaping." },
// // // // //               { icon: Music, title: "Celebrate Together", desc: "Multipurpose hall for birthdays, anniversaries and events." },
// // // // //               { icon: Zap, title: "The Essentials", desc: "High-speed lifts · In-house STP · 100% power backup · Solar." },
// // // // //               { icon: Gamepad2, title: "Game On", desc: "Table tennis, carom board, chess & indoor games." },
// // // // //               { icon: Building2, title: "Smart Parking", desc: "Dedicated covered parking with visitor management." },
// // // // //               { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV at every entrance and common area. Always watching." },
// // // // //               { icon: Droplets, title: "Water Supply", desc: "Deep borewell with overhead tanks and underground sumps." },
// // // // //             ].map((item, i) => (
// // // // //               <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#161616] transition-all group flex flex-col items-center text-center">
// // // // //                 <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)] mb-4">
// // // // //                   <item.icon className="w-8 h-8" />
// // // // //                 </div>
// // // // //                 <span className="text-white font-bold group-hover:text-[#d9a406] text-lg mb-2">{item.title}</span>
// // // // //                 <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Nature Crust Image Collage */}
// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
// // // // //             {[
// // // // //               { label: "Swimming Pool", sub: "Infant Pool", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=85" },
// // // // //               { label: "Party Hall", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=85" },
// // // // //               { label: "Indoor Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=85" },
// // // // //               { label: "Children's Play Area", img: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=85" }
// // // // //             ].map(({ label, sub, img }, i) => (
// // // // //               <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl group h-[220px]">
// // // // //                 <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
// // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
// // // // //                 <div className="absolute bottom-0 left-0 right-0 p-5">
// // // // //                   <span className="text-sm font-bold text-[#fcd34d] uppercase tracking-wider block">{label}</span>
// // // // //                   {sub && <span className="text-xs text-gray-300 block mt-1">{sub}</span>}
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ FLOOR PLANS & CONFIGURATIONS (Palm Altezze Cards + Nature Crust Tables) ════════ */}
// // // // //       <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="floorplans">
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-transparent to-transparent"></div>
// // // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          
// // // // //           <div className="text-center mb-16">
// // // // //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
// // // // //               <span className="inline-block px-4 py-1.5 rounded-full border border-[#d9a406]/50 bg-[#d9a406]/10 text-[#d9a406] text-sm font-bold uppercase tracking-wider mb-6">
// // // // //                 Configurations
// // // // //               </span>
// // // // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// // // // //                 Pick Your Home <span className="text-[#d9a406] font-serif italic">Amongst 52 Units</span>
// // // // //               </h2>
// // // // //               <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// // // // //                 1 BHK, 2 BHK "Versatile" Series, and 3 BHK "Executive" Series
// // // // //               </p>
// // // // //             </motion.div>
// // // // //           </div>

// // // // //           {/* Cards for Floor Plans */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
// // // // //             {floorPlansData.map((config, index) => {
// // // // //               const [activeForm, setActiveForm] = useState<string | null>(null)
// // // // //               const [isSubmitting, setIsSubmitting] = useState(false)
// // // // //               const [isSubmitted, setIsSubmitted] = useState(false)

// // // // //               const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // // //                 e.preventDefault()
// // // // //                 setIsSubmitting(true)
// // // // //                 await handleDualSubmit(e, `NC 216 - ${config.type} Unlock`)
// // // // //                 setIsSubmitted(true)
// // // // //                 setIsSubmitting(false)
// // // // //                 setActiveForm(null)
// // // // //               }

// // // // //               return (
// // // // //                 <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group relative">
// // // // //                   <div className={`absolute inset-0 bg-gradient-to-br from-[#d9a406]/20 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

// // // // //                   <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#d9a406]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
// // // // //                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/5 rounded-bl-full"></div>

// // // // //                     <div className="inline-flex flex-wrap items-center gap-2 mb-6">
// // // // //                       <span className="px-3 py-1 rounded-full bg-[#d9a406] text-black text-xs font-bold uppercase tracking-wider">
// // // // //                         {config.tag}
// // // // //                       </span>
// // // // //                       <span className="px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
// // // // //                         {config.facing}
// // // // //                       </span>
// // // // //                     </div>

// // // // //                     <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#d9a406] transition-colors duration-300">
// // // // //                       {config.type}
// // // // //                     </h3>
// // // // //                     <p className="text-2xl text-gray-400 mb-4">{config.area} Sq.Ft</p>
// // // // //                     <p className="text-sm text-gray-500 leading-relaxed mb-6">{config.desc}</p>

// // // // //                     <div className="mt-auto pt-4 border-t border-white/10">
// // // // //                       {isSubmitted ? (
// // // // //                         <div className="text-center py-4">
// // // // //                           <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
// // // // //                           <p className="text-white font-bold">Blueprint Unlocked!</p>
// // // // //                           <p className="text-gray-400 text-sm">Our team will call you within 2 hours.</p>
// // // // //                         </div>
// // // // //                       ) : activeForm === config.type ? (
// // // // //                         <form onSubmit={handleUnlockSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
// // // // //                           <div className="relative">
// // // // //                             <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // // // //                             <input name="name" type="text" placeholder="Your Name" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // // // //                           </div>
// // // // //                           <div className="relative">
// // // // //                             <Smartphone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // // // //                             <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // // // //                           </div>
// // // // //                           <div className="relative">
// // // // //                             <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // // // //                             <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // // // //                           </div>
// // // // //                           <div className="flex gap-2">
// // // // //                             <button type="button" onClick={() => setActiveForm(null)} className="flex-1 py-3 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">Cancel</button>
// // // // //                             <button type="submit" disabled={isSubmitting} className="flex-1 py-3 px-4 rounded-lg bg-[#d9a406] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b08505] transition-colors">
// // // // //                               {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Get Details"}
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         </form>
// // // // //                       ) : (
// // // // //                         <button onClick={() => setActiveForm(config.type)} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a406] to-[#b08505] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,164,6,0.3)] transition-all duration-300 hover:scale-[1.02]">
// // // // //                           Unlock Full Blueprint
// // // // //                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// // // // //                         </button>
// // // // //                       )}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </motion.div>
// // // // //               )
// // // // //             })}
// // // // //           </div>

// // // // //           {/* Detailed Unit Breakdowns (From Nature Crust PDF) embedded in Palm Altezze UI */}
// // // // //           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
// // // // //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// // // // //                <div className="bg-[#d9a406] px-6 py-4 flex items-center justify-between">
// // // // //                  <span className="font-bold text-black text-sm tracking-wider uppercase">2 BHK 'Versatile' - 10 Variants</span>
// // // // //                  <span className="text-xs font-bold text-black/70 bg-black/10 px-3 py-1 rounded-full">Total: 33 Units</span>
// // // // //                </div>
// // // // //                <div className="p-0">
// // // // //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// // // // //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// // // // //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// // // // //                    ))}
// // // // //                  </div>
// // // // //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// // // // //                    {unitBreakdown2BHK.map(({ area, units, nums }, idx) => (
// // // // //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// // // // //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// // // // //                        <span className="text-sm text-gray-300">{units}</span>
// // // // //                        <span className="text-xs text-gray-500">{nums}</span>
// // // // //                      </div>
// // // // //                    ))}
// // // // //                  </div>
// // // // //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// // // // //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 835–1,055 Sq.Ft</span>
// // // // //                  </div>
// // // // //                </div>
// // // // //              </div>

// // // // //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// // // // //                <div className="bg-[#333] px-6 py-4 flex items-center justify-between border-b border-[#d9a406]">
// // // // //                  <span className="font-bold text-white text-sm tracking-wider uppercase">3 BHK 'Executive' - 12 Variants</span>
// // // // //                  <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">Total: 18 Units</span>
// // // // //                </div>
// // // // //                <div className="p-0">
// // // // //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// // // // //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// // // // //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// // // // //                    ))}
// // // // //                  </div>
// // // // //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// // // // //                    {unitBreakdown3BHK.map(({ area, units, nums }, idx) => (
// // // // //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// // // // //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// // // // //                        <span className="text-sm text-gray-300">{units}</span>
// // // // //                        <span className="text-xs text-gray-500">{nums}</span>
// // // // //                      </div>
// // // // //                    ))}
// // // // //                  </div>
// // // // //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// // // // //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 1,035–1,215 Sq.Ft · Corner Units</span>
// // // // //                  </div>
// // // // //                </div>
// // // // //              </div>
// // // // //           </div>

// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ SPECIFICATIONS (Palm Altezze Layout + Nature Crust Data) ════════ */}
// // // // //       <section className="py-24 bg-black text-white border-t border-[#333]">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <div className="mb-16 text-center">
// // // // //             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium <span className="text-[#d9a406] font-serif italic normal-case">Specifications</span></h2>
// // // // //             <p className="text-gray-400 mt-4">No shortcuts. No compromise. Just quality.</p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// // // // //             <div className="space-y-0">
// // // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // // //                 <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Structure & Walls</h4><p className="text-gray-400 text-sm leading-relaxed">External walls: 6-inch concrete. Internal walls: 4-inch concrete with 1-inch plastering on both surfaces.</p></div>
// // // // //               </div>
// // // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // // //                 <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Roma or Anchor switches throughout. Premium wiring with fire-safe conduits and dedicated earth connections.</p></div>
// // // // //               </div>
// // // // //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// // // // //                 <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria premium sanitary fittings. CPVC pipes with leak-proof joints and concealed piping.</p></div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="relative h-full min-h-[500px] w-full hidden lg:block">
// // // // //               <div className="absolute inset-0 bg-[#d9a406]/10 rounded-t-full"></div>
// // // // //               {/* Fallback to premium interior image since specific spec image wasn't in source 1, using general premium vibe */}
// // // // //               <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85" alt="Premium Interior" className="w-full h-full object-cover rounded-t-full shadow-2xl border-4 border-[#111]" />
// // // // //             </div>

// // // // //             <div className="space-y-0">
// // // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // // //                 <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">Living & bedroom: 600mm × 600mm vitrified floor tiles. Bathroom: 300mm × 450mm anti-skid ceramic tiles.</p></div>
// // // // //               </div>
// // // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // // //                 <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">Interior: Tractor emulsion finish. Exterior: Asian Paint or Nippon Paint double-coating for durability.</p></div>
// // // // //               </div>
// // // // //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// // // // //                 <div className="shrink-0 pt-1"><ShieldCheck className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Eco & Security</h4><p className="text-gray-400 text-sm leading-relaxed">CCTV at entrances. Video door phones. Deep borewell with STP. 100% power backup. Solar-lit common areas.</p></div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ LOCATION (Palm Altezze Location Layout + Nature Crust Location Data) ════════ */}
// // // // //       <section className="py-24 bg-[#0a0a0a]" id="location">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
// // // // //             <div>
// // // // //               <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406] font-bold tracking-widest uppercase">Strategically Located</Badge>
// // // // //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406] font-serif italic font-light">Road</span></h2>
// // // // //               <p className="text-gray-400 mb-10 text-lg leading-relaxed">Set in the sought-after neighbourhood of Sarjapura, balancing pulse and peace — keeping you close to everything, yet comfortably away.</p>
              
// // // // //               <div className="space-y-8">
// // // // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // // // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
// // // // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#d9a406]"/> Educational Institutes</h4>
// // // // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // // // //                     <span className="flex justify-between">Endeavour Int. <strong className="text-[#d9a406]">0.1 km</strong></span>
// // // // //                     <span className="flex justify-between">Champion Int. <strong className="text-[#d9a406]">1 km</strong></span>
// // // // //                     <span className="flex justify-between">Azim Premji Uni <strong className="text-[#d9a406]">3 km</strong></span>
// // // // //                     <span className="flex justify-between">Greenwood High <strong className="text-[#d9a406]">8 km</strong></span>
// // // // //                     <span className="flex justify-between">DPS <strong className="text-[#d9a406]">10 km</strong></span>
// // // // //                     <span className="flex justify-between">Christ College <strong className="text-[#d9a406]">15 km</strong></span>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // // // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// // // // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#d9a406]"/> IT Companies</h4>
// // // // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // // // //                     <span className="flex justify-between">Infosys HQ <strong className="text-[#d9a406]">2 km</strong></span>
// // // // //                     <span className="flex justify-between">Wipro <strong className="text-[#d9a406]">11 km</strong></span>
// // // // //                     <span className="flex justify-between">RGA Tech Park <strong className="text-[#d9a406]">13 km</strong></span>
// // // // //                     <span className="flex justify-between">RMZ Ecoworld <strong className="text-[#d9a406]">17 km</strong></span>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // // // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// // // // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Hospital className="w-5 h-5 text-[#d9a406]"/> Hospitals & Shopping</h4>
// // // // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // // // //                     <span className="flex justify-between">Spandana Hosp <strong className="text-[#d9a406]">7 km</strong></span>
// // // // //                     <span className="flex justify-between">Sparsh Hosp <strong className="text-[#d9a406]">11 km</strong></span>
// // // // //                     <span className="flex justify-between">Manipal Hosp <strong className="text-[#d9a406]">17 km</strong></span>
// // // // //                     <span className="flex justify-between">D-Mart <strong className="text-[#d9a406]">6 km</strong></span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="relative flex flex-col gap-6">
// // // // //               <div className="bg-[#111] border border-white/10 p-2 rounded-2xl">
// // // // //                 <div className="w-full h-[400px] bg-black rounded-xl overflow-hidden relative">
// // // // //                   <iframe 
// // // // //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.35412497676!2d77.68465053744655!3d12.857675276326083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a50595a12c0b084!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453412345!5m2!1sen!2sin" 
// // // // //                     width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
// // // // //                     className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
// // // // //                   />
// // // // //                   <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] shadow-xl pointer-events-none">
// // // // //                     <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
// // // // //                     <p className="text-white text-sm font-bold">Mugulur Village, Sarjapura</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* The Next Big Address */}
// // // // //               <div className="bg-gradient-to-r from-[#d9a406] to-[#b08505] p-8 rounded-2xl shadow-xl">
// // // // //                 <h3 className="text-2xl text-black font-bold mb-1">The Next Big Address</h3>
// // // // //                 <p className="text-sm text-black/80 font-medium mb-5">Where Sarjapura's Progress Finds Homes</p>
// // // // //                 <div className="space-y-3">
// // // // //                   {[
// // // // //                     { icon: "🛣️", title: "Proposed STRR", desc: "Satellite Town Ring Road linking hubs" },
// // // // //                     { icon: "🏗️", title: "SWIFT City SEZ", desc: "Massive 1,000-Acre govt IT/Startup SEZ" },
// // // // //                     { icon: "🚇", title: "Metro Phase 3A", desc: "Red Line from Sarjapura to Hebbal" },
// // // // //                   ].map(({ icon, title, desc }) => (
// // // // //                     <div key={title} className="flex gap-3 items-start bg-black/10 p-3 rounded-xl">
// // // // //                       <span className="text-xl shrink-0">{icon}</span>
// // // // //                       <div>
// // // // //                         <span className="text-sm font-bold text-black block">{title}</span>
// // // // //                         <span className="text-xs text-black/80">{desc}</span>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ AWARDS & TRUST ════════ */}
// // // // //       <section className="py-24 bg-black border-t border-[#333]">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awarded for <span className="text-[#d9a406] font-serif italic">Trust & Quality</span></h2>
// // // // //             <p className="text-gray-400">Recognised by India's leading real estate and business bodies, 2023–2026.</p>
// // // // //           </div>

// // // // //           <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
// // // // //             {[
// // // // //               { yr: "2023", award: "Property Award of the Year", body: "Real Estate Excellence Council" },
// // // // //               { yr: "2023", award: "Global Real Estate Brand", body: "Zee Business" },
// // // // //               { yr: "2024", award: "Excellence in Amenities", body: "National Developers Association" },
// // // // //               { yr: "2025", award: "Real Estate Icon Awards", body: "Times Group" },
// // // // //               { yr: "2026", award: "Featured Recognition", body: "The Times of India" },
// // // // //             ].map(({ yr, award, body }) => (
// // // // //               <Card key={award} className="bg-[#111] border-white/5 p-8 text-center hover:border-[#d9a406]/50 transition-colors rounded-3xl group">
// // // // //                 <div className="font-serif text-4xl text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">{yr}</div>
// // // // //                 <div className="text-sm font-bold text-white leading-tight mb-3">{award}</div>
// // // // //                 <div className="text-xs text-gray-500 uppercase tracking-wider">{body}</div>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ OTHER RRL PROJECTS (CompleteProject section style with Nature Crust Data) ════════ */}
// // // // //       <section className="py-24 bg-[#0a0a0a]">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <h2 className="text-4xl font-bold text-white mb-16 text-center">
// // // // //             Other <span className="text-[#d9a406] font-serif italic">RRL Projects</span>
// // // // //           </h2>
          
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
// // // // //             {otherProjectsData.map((project, index) => (
// // // // //               <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group h-full">
// // // // //                 <div className="bg-[#111] rounded-2xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-[#d9a406]/50 transition-all shadow-lg">
// // // // //                   <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
// // // // //                     <img src={project.img} alt={project.name} className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500" />
// // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
// // // // //                     <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md ${
// // // // //                       project.status === "Completed" ? "bg-[#064e3b] text-[#c9a84c]" :
// // // // //                       project.status === "Ready to Move" ? "bg-[#d9a406] text-black" :
// // // // //                       "bg-blue-900 text-blue-200"
// // // // //                     }`}>
// // // // //                       {project.status}
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   <div className="p-5 flex flex-col flex-grow">
// // // // //                     <h3 className="text-lg font-bold text-white group-hover:text-[#d9a406] transition-colors mb-2">
// // // // //                       {project.name}
// // // // //                     </h3>
// // // // //                     <p className="text-xs text-gray-400 leading-relaxed mb-4">{project.desc}</p>
// // // // //                     <div className="mt-auto">
// // // // //                       <Button className="w-full bg-white/5 hover:bg-[#d9a406] text-white hover:text-black border border-white/10 transition-colors text-xs uppercase tracking-widest font-bold">
// // // // //                         View Details
// // // // //                       </Button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
// // // // //              {[
// // // // //                { n: 18, suf: "+", label: "Years of Expertise" },
// // // // //                { n: 4200, suf: "+", label: "Happy Families" },
// // // // //                { n: 12, suf: "", label: "Completed Projects" },
// // // // //                { n: 98, suf: "%", label: "On-Time Delivery" },
// // // // //              ].map(({ n, suf, label }) => (
// // // // //                <div key={label} className="bg-black rounded-2xl border border-white/5 text-center py-10 px-6">
// // // // //                  <div className="font-serif text-5xl font-light text-[#d9a406]">
// // // // //                    <AnimatedCounter end={n} suffix={suf} />
// // // // //                  </div>
// // // // //                  <div className="text-xs font-bold tracking-[.18em] uppercase text-gray-500 mt-4">{label}</div>
// // // // //                </div>
// // // // //              ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ BROCHURE CTA SECTION (Palm Altezze Style) ════════ */}
// // // // //       <section className="py-24 bg-black border-t border-[#333]">
// // // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //           <div className="relative rounded-3xl overflow-hidden group border border-[#d9a406]/30 h-[450px]">
// // // // //             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
// // // // //             <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
            
// // // // //             <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 space-y-8">
// // // // //               <span className="text-[#d9a406] text-xs font-bold tracking-[.25em] uppercase px-4 py-1.5 border border-[#d9a406]/50 bg-[#d9a406]/10 rounded-full">Limited Inventory</span>
// // // // //               <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
// // // // //                 GET COST SHEET & <span className="text-[#d9a406] italic">BROCHURE</span>
// // // // //               </h2>
// // // // //               <div className="w-24 h-1 bg-[#d9a406] rounded-full" />
// // // // //               <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
// // // // //                 Join over 150 early registrants who have already secured their preferred units at pre-launch prices starting at ₹46 Lakhs.
// // // // //               </p>
// // // // //               <Button onClick={() => setIsModalOpen(true)} className="bg-[#d9a406] hover:bg-white text-black px-12 py-7 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all transform hover:-translate-y-1">
// // // // //                 Download Now
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ════════ FOOTER (Palm Altezze Styling) ════════ */}
// // // // //       <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
// // // // //          <div className="container mx-auto px-4 max-w-[1280px]">
// // // // //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// // // // //               <div>
// // // // //                 <h3 className="text-2xl font-bold text-white tracking-tighter mb-4">RRL <span className="text-[#d9a406]">NC-216</span></h3>
// // // // //                 <p className="text-sm text-gray-400 leading-relaxed mb-6">Premium 1, 2 & 3 BHK apartments near Sarjapura. RERA & BMRDA approved. East & North facing. G+3 boutique living with 42.47% UDS.</p>
// // // // //                 <div className="space-y-3">
// // // // //                   <a href="tel:+918494966966" className="flex items-center gap-3 text-[#d9a406] font-bold hover:text-white transition-colors"><Phone className="w-5 h-5"/> 84 94 966 966</a>
// // // // //                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><Mail className="w-5 h-5"/> enquiry@rrlbuildersanddevelopers.com</a>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Quick Links</h4>
// // // // //                 <ul className="space-y-4 text-sm text-gray-400">
// // // // //                   {["Overview", "Amenities", "Floor Plans", "Location Map"].map(l => (
// // // // //                     <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#d9a406] transition-colors">{l}</a></li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Configurations</h4>
// // // // //                 <div className="space-y-4">
// // // // //                   {[
// // // // //                     { t: "1 BHK", r: "655 Sq.Ft", u: "1 Unit" },
// // // // //                     { t: "2 BHK Versatile", r: "835–1,055 Sq.Ft", u: "33 Units" },
// // // // //                     { t: "3 BHK Executive", r: "1,035–1,215 Sq.Ft", u: "18 Units" },
// // // // //                   ].map(({ t, r, u }) => (
// // // // //                     <div key={t} className="border-b border-white/5 pb-3">
// // // // //                       <div className="text-sm font-bold text-white">{t}</div>
// // // // //                       <div className="text-xs text-[#d9a406] mt-1">{r}</div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Address</h4>
// // // // //                 <address className="not-italic text-sm text-gray-400 leading-relaxed mb-6">
// // // // //                   <strong className="text-white block mb-1">Project Site:</strong>
// // // // //                   SY No. 123, 124, Mugulur Village,<br/>
// // // // //                   Off Sarjapura Road, Near Endeavours<br/>
// // // // //                   International School, Bengaluru – 562 125.<br/>
// // // // //                 </address>
// // // // //                 <div className="text-xs text-gray-500 tracking-wider uppercase font-semibold mb-2">RERA Registration</div>
// // // // //                 <div className="text-sm text-gray-400">PRM/KA/RERA/XXXX</div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
// // // // //               <p>RRL Builders & Developers © {new Date().getFullYear()}. All rights reserved.</p>
// // // // //               <p className="text-center md:text-right max-w-2xl">This brochure is only conceptual and not a legal offering. The promoters reserve all rights to add/delete/alter details without prior notice.</p>
// // // // //             </div>
// // // // //          </div>
// // // // //       </footer>

// // // // //       {/* ════════ GLOBAL ENQUIRY MODAL (Palm Altezze Style) ════════ */}
// // // // //       <AnimatePresence>
// // // // //         {isModalOpen && (
// // // // //           <motion.div 
// // // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// // // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // // //             onClick={() => setIsModalOpen(false)}
// // // // //           >
// // // // //             <motion.div 
// // // // //               className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// // // // //               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
// // // // //               onClick={(e) => e.stopPropagation()}
// // // // //             >
// // // // //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

// // // // //               {state.succeeded ? (
// // // // //                 <div className="flex flex-col items-center justify-center py-6 text-center">
// // // // //                   <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// // // // //                   <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
// // // // //                   <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
// // // // //                   <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full">Close</Button>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <>
// // // // //                   <div className="text-center mb-8">
// // // // //                     <h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3>
// // // // //                     <p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p>
// // // // //                   </div>
// // // // //                   <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Global Modal")} className="space-y-4">
// // // // //                     <div className="space-y-2">
// // // // //                       <input name="name" type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // // // //                     </div>
// // // // //                     <div className="space-y-2">
// // // // //                       <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // // // //                     </div>
// // // // //                     <div className="space-y-2">
// // // // //                       <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // // // //                     </div>
// // // // //                     <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4 rounded-lg shadow-lg">
// // // // //                       {state.submitting ? "Sending..." : "Get Priority Access"}
// // // // //                     </Button>
// // // // //                   </form>
// // // // //                 </>
// // // // //               )}
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </main>
// // // // //   )
// // // // // }
// // // // "use client"

// // // // import React, { useState, useEffect } from "react"
// // // // import { useRouter } from "next/navigation"
// // // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // // import {
// // // //   Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck,
// // // //   Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee,
// // // //   Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User,
// // // //   Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, BrickWall, 
// // // //   PaintRoller, AppWindow, Droplets, Leaf, Frame, DoorOpen, Bath, Wrench, BatteryCharging,
// // // //   LayoutDashboard, BookOpen, Music, Utensils, Table2, Tv, Flower2,
// // // //   Train, ShoppingCart, Hospital, Map, Briefcase, Megaphone
// // // // } from "lucide-react"
// // // // import { useForm, ValidationError } from '@formspree/react'

// // // // // UI Component Imports
// // // // import { Button } from "@/components/ui/button"
// // // // import { Card } from "@/components/ui/card"
// // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // // import { Badge } from "@/components/ui/badge"
// // // // import { Input } from "@/components/ui/input"
// // // // import { Label } from "@/components/ui/label"
// // // // import {
// // // //   Dialog,
// // // //   DialogContent,
// // // //   DialogHeader,
// // // //   DialogTitle,
// // // //   DialogTrigger,
// // // // } from "@/components/ui/dialog"

// // // // // --- DATA FROM NATURE CRUST ---
// // // // const floorPlansData = [
// // // //   {
// // // //     id: "1BHK",
// // // //     type: "1 BHK",
// // // //     facing: "East",
// // // //     area: "655",
// // // //     tag: "Only 1 Unit Available — Exclusive",
// // // //     desc: "A thoughtfully designed compact sanctuary with east-facing windows for sunrise light and natural ventilation in every room.",
// // // //     dims: { living: "10'0\" × 14'0\"", kitchen: "7'0\" × 7'0\"", masterBed: "11'0\" × 11'0\"", bath: "5'0\" × 8'0\"", balcony: "4'6\" × 7'0\"" },
// // // //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
// // // //   },
// // // //   {
// // // //     id: "2BHK",
// // // //     type: "2 BHK",
// // // //     facing: "East & North",
// // // //     area: "835 - 1,055",
// // // //     tag: "33 Units · 10 Unique Layouts",
// // // //     desc: "The 'Versatile' Series — 10 layouts for all generations. Whether you're a young couple or a growing family, there's a home here for you.",
// // // //     dims: { livingDining: "11'0\" × 16'0\"", kitchen: "8'0\" × 8'0\"", masterBed: "12'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", balcony: "5'0\" × 8'0\"" },
// // // //     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
// // // //   },
// // // //   {
// // // //     id: "3BHK",
// // // //     type: "3 BHK",
// // // //     facing: "Corner Units",
// // // //     area: "1,035 - 1,215",
// // // //     tag: "18 Premium Corner Homes",
// // // //     desc: "The 'Executive' Series — panoramic sunrise views, cross ventilation & corner layouts up to 1,215 Sq.Ft. These aren't just big homes — they're the best homes in the building.",
// // // //     dims: { living: "16'0\" × 12'0\"", dining: "12'0\" × 10'0\"", kitchen: "10'0\" × 8'0\"", masterBed: "13'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", bed3: "10'0\" × 10'0\"" },
// // // //     image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85"
// // // //   }
// // // // ]

// // // // const unitBreakdown2BHK = [
// // // //   { area: "835", units: 1, nums: "48" },
// // // //   { area: "850", units: 1, nums: "47" },
// // // //   { area: "875", units: 7, nums: "7,6,23,24,25,26,27" },
// // // //   { area: "890", units: 9, nums: "16,17,18,19,20,30,31,32,33" },
// // // //   { area: "895", units: 3, nums: "38,40,41" },
// // // //   { area: "910", units: 7, nums: "11,3,29,34,44,45,37" },
// // // //   { area: "930", units: 2, nums: "14,2" },
// // // //   { area: "935", units: 1, nums: "8" },
// // // //   { area: "950", units: 1, nums: "9" },
// // // //   { area: "1055", units: 1, nums: "22" },
// // // // ]

// // // // const unitBreakdown3BHK = [
// // // //   { area: "1035", units: 1, nums: "49" },
// // // //   { area: "1090", units: 1, nums: "50" },
// // // //   { area: "1100", units: 1, nums: "51" },
// // // //   { area: "1110", units: 1, nums: "43" },
// // // //   { area: "1115", units: 2, nums: "1, 15" },
// // // //   { area: "1120", units: 2, nums: "10, 12" },
// // // //   { area: "1130", units: 4, nums: "4, 21, 35, 46" },
// // // //   { area: "1135", units: 2, nums: "28, 52" },
// // // //   { area: "1140", units: 1, nums: "36" },
// // // //   { area: "1155", units: 1, nums: "5" },
// // // //   { area: "1175", units: 1, nums: "42" },
// // // //   { area: "1215", units: 1, nums: "13" },
// // // // ]

// // // // const otherProjectsData = [
// // // //   { name: "RRL Nature Wood", status: "Completed", desc: "Every corner reflects simplicity and elegance", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502?w=600&q=85" },
// // // //   { name: "RRL Palacio", status: "Ready to Move", desc: "Ready-to-move 3 BHK furnished/semi-furnished · 1,400–1,540 SBA", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531?w=600&q=85" },
// // // //   { name: "RRL Palm Altezze", status: "Ongoing", desc: "2 & 3 BHK Premium · G+23 · 92% Open Space · 50% UDS", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863?w=600&q=85" },
// // // //   { name: "RRL Towers", status: "Completed", desc: "Landmark commercial and residential development", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451?w=600&q=85" },
// // // //   { name: "RRL Complex", status: "Completed", desc: "Premium apartment project", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360?w=600&q=85" },
// // // // ]

// // // // // --- ANIMATION VARIANTS ---
// // // // const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
// // // // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
// // // // const slideInVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }

// // // // // --- HELPER COMPONENTS ---
// // // // const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number; }) => {
// // // //   const [count, setCount] = useState(0)
// // // //   const [hasAnimated, setHasAnimated] = useState(false)
// // // //   const ref = React.useRef<HTMLDivElement>(null)

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         if (entries[0].isIntersecting && !hasAnimated) {
// // // //           setHasAnimated(true)
// // // //           let startTime: number | null = null
// // // //           const step = (timestamp: number) => {
// // // //             if (!startTime) startTime = timestamp
// // // //             const progress = Math.min((timestamp - startTime) / duration, 1)
// // // //             setCount(progress * end)
// // // //             if (progress < 1) window.requestAnimationFrame(step)
// // // //           }
// // // //           window.requestAnimationFrame(step)
// // // //         }
// // // //       },
// // // //       { threshold: 0.5 }
// // // //     )
// // // //     if (ref.current) observer.observe(ref.current)
// // // //     return () => observer.disconnect()
// // // //   }, [end, duration, hasAnimated])

// // // //   return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
// // // // }

// // // // function EOICountdown() {
// // // //   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
// // // //   const [mounted, setMounted] = useState(false)

// // // //   useEffect(() => {
// // // //     setMounted(true)
// // // //     const target = new Date("2026-06-30T23:59:59").getTime()
// // // //     const interval = setInterval(() => {
// // // //       const now = new Date().getTime()
// // // //       const distance = target - now
// // // //       if (distance < 0) { clearInterval(interval); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
// // // //       setTimeLeft({
// // // //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
// // // //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
// // // //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
// // // //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
// // // //       })
// // // //     }, 1000)
// // // //     return () => clearInterval(interval)
// // // //   }, [])

// // // //   if (!mounted) return null

// // // //   return (
// // // //     <div className="mt-8 mb-6">
// // // //       <div className="text-[10px] text-[#d9a406] font-bold tracking-[.15em] uppercase mb-3 flex items-center gap-2">
// // // //         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
// // // //         EOI Ends In (June 30, 2026)
// // // //       </div>
// // // //       <div className="flex gap-3">
// // // //         {[{ label: "Days", value: timeLeft.days }, { label: "Hours", value: timeLeft.hours }, { label: "Mins", value: timeLeft.minutes }, { label: "Secs", value: timeLeft.seconds }].map((item, i) => (
// // // //           <div key={i} className="flex flex-col items-center justify-center bg-[#111] border border-[#d9a406]/30 px-4 py-3 min-w-[70px] rounded-lg shadow-[0_0_15px_rgba(217,164,6,0.1)]">
// // // //             <span className="font-serif text-3xl text-[#fcd34d] font-bold leading-none">{String(item.value).padStart(2, '0')}</span>
// // // //             <span className="text-[9px] font-bold tracking-[.2em] uppercase text-gray-500 mt-1.5">{item.label}</span>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // // ════════ MAIN PAGE COMPONENT ════════
// // // // export default function Nc216Page() {
// // // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// // // //   const router = useRouter()
// // // //   const [state, handleSubmit] = useForm("mkonkbkk")

// // // //   // Dual Submit Logic (CRM + Formspree)
// // // //   const handleDualSubmit = async (e: React.FormEvent<HTMLFormElement>, customProjectName = "RRL NC-216") => {
// // // //     e.preventDefault()
// // // //     const form = e.currentTarget
// // // //     const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
// // // //     const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
// // // //     const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    
// // // //     fetch('/enquire-now-api.php', {
// // // //       method: 'POST',
// // // //       headers: { 'Content-Type': 'application/json' },
// // // //       body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: customProjectName }),
// // // //     }).catch(() => {})
    
// // // //     await handleSubmit(e)
// // // //   }

// // // //   useEffect(() => {
// // // //     if (state.succeeded) {
// // // //       setTimeout(() => { setIsModalOpen(false) }, 3000)
// // // //     }
// // // //   }, [state.succeeded])

// // // //   return (
// // // //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black font-sans overflow-x-hidden">
    

// // // //       {/* ════════ HERO IMAGE BANNER (Nature Crust Content) ════════ */}

// // // //     <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">

// // // //       {/* MOBILE HERO (400 × 300) */}
// // // //       <div className="block md:hidden">
// // // //         <div className="relative w-full aspect-[4/3] overflow-hidden">
// // // //           <img
// // // //             src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// // // //             alt="RRL Hero Banner Mobile"
// // // //             className="w-full h-full object-contain"
// // // //             loading="eager"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* DESKTOP HERO (UNCHANGED) */}
// // // //       <div className="hidden md:block h-[60vh] md:h-[80vh]">
// // // //         <motion.div
// // // //           initial={{ scale: 1.1, opacity: 0 }}
// // // //           whileInView={{ scale: 1, opacity: 1 }}
// // // //           transition={{ duration: 1.5, ease: "easeOut" }}
// // // //           viewport={{ once: true }}
// // // //           className="relative w-full h-full"
// // // //         >
// // // //           <img
// // // //             src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// // // //             alt="RRL Hero Banner Desktop"
// // // //             loading="eager"
// // // //             className="w-full h-full object-fill"
// // // //           />
// // // //         </motion.div>
// // // //       </div>

// // // //     </section>


// // // //       {/* ════════ HERO CONTENT & FORM (Palm Altezze UI + Nature Crust Content) ════════ */}
// // // //       <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-12 pb-12">
// // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// // // //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// // // //                 <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm font-bold uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
// // // //                 <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Sarjapura, Bengaluru</Badge>
// // // //               </motion.div>

// // // //               <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// // // //                 Own a Home <br />
// // // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d] italic font-serif font-light">at the Cost of a Rent</span>
// // // //               </motion.h1>

// // // //               <motion.div variants={fadeIn} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed space-y-4">
// // // //                 <p>Welcome to <strong className="text-white font-bold">RRL NC-216</strong> — a clear green lifestyle near Sarjapura. Zero compromise living with 100% East & North facing 1, 2 & 3 BHK homes on G+3 boutique blocks.</p>
// // // //                 <p className="text-3xl font-bold text-white mt-4">Starting <span className="text-[#d9a406]">₹46L – ₹98L Onwards</span></p>
// // // //               </motion.div>

// // // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// // // //                 {["RERA & BMRDA Approved", "100% Vastu Compliant", "42.47% UDS", "G+3 Boutique Living"].map(b => (
// // // //                   <span key={b} className="border border-[#d9a406]/50 text-[#fcd34d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// // // //                     {b}
// // // //                   </span>
// // // //                 ))}
// // // //               </motion.div>

// // // //               <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4 border-t border-white/10 overflow-hidden">
// // // //                 <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase shrink-0">Awarded</span>
// // // //                 <div className="flex-1 overflow-hidden whitespace-nowrap">
// // // //                    <div className="inline-block animate-[marquee_30s_linear_infinite] text-[11px] text-gray-400 font-bold">
// // // //                      🏆 Property Award of the Year 2023 &nbsp;&nbsp;&nbsp; 🏆 Global Real Estate Brand Awards 2023 &nbsp;&nbsp;&nbsp; 🏆 Excellence in Amenities Premium 2024 &nbsp;&nbsp;&nbsp; 🏆 Time Real Estate Icon Awards 2025 &nbsp;&nbsp;&nbsp; 🏆 Featured Recognition The Times of India 2026
// // // //                    </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.div>

// // // //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // // //                <Card className="bg-[#111] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden rounded-2xl">
// // // //                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>

// // // //                   {state.succeeded ? (
// // // //                      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
// // // //                         <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// // // //                         <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
// // // //                         <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
// // // //                      </div>
// // // //                   ) : (
// // // //                     <div className="p-8">
// // // //                       <div className="mb-4">
// // // //                         <h3 className="text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-6 h-6 text-[#d9a406]"/> Register Interest</h3>
// // // //                         <p className="text-[#d9a406] text-xs font-bold tracking-widest uppercase mt-2">Get Guaranteed Pre-Launch Pricing</p>
// // // //                       </div>

// // // //                       <EOICountdown />

// // // //                       <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Hero Enquiry")} className="space-y-4">
// // // //                         <div className="relative">
// // // //                             <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // // //                             <input name="name" type="text" placeholder="Full Name *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // // //                         </div>
// // // //                         <div className="relative">
// // // //                             <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // // //                             <input name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // // //                         </div>
// // // //                         <div className="relative">
// // // //                             <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // // //                             <input name="email" type="email" placeholder="Email Address *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // // //                         </div>
// // // //                         <select name="config" className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-gray-400 focus:text-white focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm appearance-none cursor-pointer">
// // // //                           <option value="">Interested In...</option>
// // // //                           <option>1 BHK — 655 Sq.Ft (Only 1 Unit)</option>
// // // //                           <option>2 BHK — 835–1,055 Sq.Ft (33 Units)</option>
// // // //                           <option>3 BHK — 1,035–1,215 Sq.Ft (18 Units)</option>
// // // //                         </select>
// // // //                         <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm uppercase tracking-widest h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all rounded-lg mt-2">
// // // //                           {state.submitting ? "Processing..." : "Get Cost Sheet & Details →"}
// // // //                         </Button>
// // // //                       </form>
// // // //                     </div>
// // // //                   )}
// // // //                </Card>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ PROJECT GLANCE (Palm Altezze Grid + Nature Crust Data) ════════ */}
// // // //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden border-t border-white/5">
// // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-transparent to-transparent"></div>
// // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
// // // //             {[
// // // //               { label: "Land Area", value: 85990, suffix: " Sq.Ft", icon: MapPin },
// // // //               { label: "Total Units", value: 208, suffix: " Homes", icon: Building2 },
// // // //               { label: "Starting Size", value: 655, suffix: " Sq.Ft", icon: Maximize2 },
// // // //               { label: "Structure", value: 4, suffix: " Blocks", icon: Building2, isText: true, textVal: "G+3 Blocks" },
// // // //             ].map((stat, index) => (
// // // //               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
// // // //                 <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#d9a406]/50 transition-all duration-500 h-full">
// // // //                   <div className="w-14 h-14 bg-[#d9a406]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9a406]/20 transition-colors">
// // // //                     <stat.icon className="w-7 h-7 text-[#d9a406]" />
// // // //                   </div>
// // // //                   <div className="text-3xl md:text-4xl font-bold text-[#d9a406] mb-2">
// // // //                     {stat.isText ? <span>{stat.textVal}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
// // // //                   </div>
// // // //                   <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
// // // //                   <div className="absolute inset-0 rounded-2xl bg-[#d9a406]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ EOI BENEFITS (Nature Crust Content in Palm Altezze USP layout) ════════ */}
// // // //       <section className="py-20 bg-[#0a0a0a] border-b border-white/5" id="eoi">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="text-center mb-12">
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-white">Expression of Interest <span className="text-[#d9a406] font-serif italic">(EOI) is Open</span></h2>
// // // //             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Be among the first to secure your dream home at RRL NC-216. By submitting your EOI, you gain priority access to our exclusive pre-launch inventory.</p>
// // // //           </div>
// // // //           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// // // //             {[
// // // //               { icon: Star, title: "Priority Unit Selection", desc: "Choose your preferred floor & facing before public launch." },
// // // //               { icon: Award, title: "Lowest Guaranteed Price", desc: "Pre-launch pricing locked in safely and securely." },
// // // //               { icon: Zap, title: "Launch Day Offers", desc: "Exclusive access to special upgrades and launch discounts." },
// // // //               { icon: ShieldCheck, title: "100% Refundable", desc: "Your EOI token is fully refundable without questions." }
// // // //             ].map((item, idx) => (
// // // //               <motion.div key={idx} variants={fadeIn} className="group">
// // // //                 <Card className="bg-[#111] border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden rounded-2xl">
// // // //                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
// // // //                   <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
// // // //                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
// // // //                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// // // //                 </Card>
// // // //               </motion.div>
// // // //             ))}
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ OVERVIEW & UDS (Architecture Section Style) ════════ */}
// // // //       <section id="overview" className="py-24 bg-black text-white overflow-hidden relative">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
// // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// // // //               <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block mb-4">Ownership Advantage</span>
// // // //               <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
// // // //                 You Own the <br /> <span className="text-[#d9a406]">Land Too.</span>
// // // //               </h2>
// // // //               <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
// // // //                 <p>
// // // //                   Most apartments give you walls. We give you land. RRL NC-216 is a boutique residential enclave set on 85,990 Sq.Ft. Designed as G+3 blocks for low-density, congestion-free living.
// // // //                 </p>
// // // //                 <div className="pt-4 border-l-4 border-[#d9a406] pl-6">
// // // //                   <p className="text-xl font-bold text-white uppercase tracking-wider mb-2">42.47% UNDIVIDED SHARE (UDS)</p>
// // // //                   <p className="text-sm">Reserved exclusively for homeowners — ensuring a real, legal share of the ground beneath your home for superior asset appreciation.</p>
// // // //                 </div>
                
// // // //                 <div className="grid sm:grid-cols-2 gap-4 mt-8">
// // // //                   {[
// // // //                     "100% East & North Facing",
// // // //                     "RERA & BMRDA Approved",
// // // //                     "All Vastu Compliant Homes",
// // // //                     "G+3 Boutique — No Congestion"
// // // //                   ].map(f => (
// // // //                     <div key={f} className="flex items-center gap-3 bg-[#111] p-3 border border-[#333] rounded-lg">
// // // //                       <ShieldCheck className="w-4 h-4 text-[#d9a406] shrink-0" />
// // // //                       <span className="text-xs font-bold text-gray-200 uppercase">{f}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>

// // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
// // // //               <div className="absolute inset-0 bg-[#d9a406] rounded-2xl transform rotate-3 opacity-20"></div>
// // // //               {/* Image directly from Nature Crust */}
// // // //               <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85" alt="RRL NC-216 Building" className="relative rounded-2xl shadow-2xl border-2 border-white/10 w-full h-[560px] object-cover" />
// // // //               <div className="absolute bottom-8 left-[-20px] bg-[#111] border border-[#d9a406] text-white p-6 w-56 shadow-2xl rounded-xl">
// // // //                  <div className="font-serif text-5xl font-light text-[#fcd34d]">42.47%</div>
// // // //                  <div className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-400 mt-2">UDS Reserved</div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ MASTER PLAN ════════ */}
// // // //       <section className="py-24 bg-[#0a0a0a] border-t border-[#333]">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
// // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1 relative">
// // // //               <div className="absolute inset-0 bg-[#d9a406] rounded-2xl transform -rotate-2 opacity-10"></div>
// // // //               {/* Image from Nature Crust Master Plan */}
// // // //               <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=85" alt="RRL NC-216 Master Plan" className="relative w-full h-[480px] object-cover rounded-2xl border border-white/10 shadow-2xl" />
// // // //             </motion.div>

// // // //             <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
// // // //               <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block">Master Plan</span>
// // // //               <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
// // // //                 Your Dream Home <br /> <span className="text-[#d9a406] italic">Awaits</span>
// // // //               </h2>
// // // //               <div className="w-20 h-1 bg-[#d9a406] rounded-full" />
// // // //               <p className="text-lg text-gray-400 leading-relaxed">
// // // //                 4 boutique G+3 blocks spread across 85,990 Sq.Ft with generous open spaces, landscaped gardens, community amenities and tree-lined pathways. East & North facing for every single unit.
// // // //               </p>
// // // //             </motion.div>

// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ AMENITIES (Palm Altezze Icons + Nature Crust Collage) ════════ */}
// // // //       <section id="amenities" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// // // //         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
// // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // //           <div className="mb-16 text-center">
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than a Home. <span className="text-[#d9a406] font-serif italic">A Community.</span></h2>
// // // //             <p className="text-gray-400 max-w-2xl mx-auto">Step outside and find everything you need — pools, parks, a gym, games and more. All within your campus. Your weekend is sorted.</p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
// // // //             {[
// // // //               { icon: Waves, title: "Swim & Stay Fit", desc: "Adult pool + kid's pool for safe splashing. Outdoor & indoor gym." },
// // // //               { icon: Trees, title: "Walk, Play, Breathe", desc: "A natural park right at your doorstep. Curated landscaping." },
// // // //               { icon: Music, title: "Celebrate Together", desc: "Multipurpose hall for birthdays, anniversaries and events." },
// // // //               { icon: Zap, title: "The Essentials", desc: "High-speed lifts · In-house STP · 100% power backup · Solar." },
// // // //               { icon: Gamepad2, title: "Game On", desc: "Table tennis, carom board, chess & indoor games." },
// // // //               { icon: Building2, title: "Smart Parking", desc: "Dedicated covered parking with visitor management." },
// // // //               { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV at every entrance and common area. Always watching." },
// // // //               { icon: Droplets, title: "Water Supply", desc: "Deep borewell with overhead tanks and underground sumps." },
// // // //             ].map((item, i) => (
// // // //               <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#161616] transition-all group flex flex-col items-center text-center">
// // // //                 <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)] mb-4">
// // // //                   <item.icon className="w-8 h-8" />
// // // //                 </div>
// // // //                 <span className="text-white font-bold group-hover:text-[#d9a406] text-lg mb-2">{item.title}</span>
// // // //                 <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Nature Crust Image Collage */}
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
// // // //             {[
// // // //               { label: "Swimming Pool", sub: "Infant Pool", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=85" },
// // // //               { label: "Party Hall", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=85" },
// // // //               { label: "Indoor Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=85" },
// // // //               { label: "Children's Play Area", img: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=85" }
// // // //             ].map(({ label, sub, img }, i) => (
// // // //               <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl group h-[220px]">
// // // //                 <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
// // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
// // // //                 <div className="absolute bottom-0 left-0 right-0 p-5">
// // // //                   <span className="text-sm font-bold text-[#fcd34d] uppercase tracking-wider block">{label}</span>
// // // //                   {sub && <span className="text-xs text-gray-300 block mt-1">{sub}</span>}
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ FLOOR PLANS & CONFIGURATIONS (Palm Altezze Cards + Nature Crust Tables) ════════ */}
// // // //       <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="floorplans">
// // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-transparent to-transparent"></div>
// // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          
// // // //           <div className="text-center mb-16">
// // // //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
// // // //               <span className="inline-block px-4 py-1.5 rounded-full border border-[#d9a406]/50 bg-[#d9a406]/10 text-[#d9a406] text-sm font-bold uppercase tracking-wider mb-6">
// // // //                 Configurations
// // // //               </span>
// // // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// // // //                 Pick Your Home <span className="text-[#d9a406] font-serif italic">Amongst 52 Units</span>
// // // //               </h2>
// // // //               <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// // // //                 1 BHK, 2 BHK "Versatile" Series, and 3 BHK "Executive" Series
// // // //               </p>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Cards for Floor Plans */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
// // // //             {floorPlansData.map((config, index) => {
// // // //               const [activeForm, setActiveForm] = useState<string | null>(null)
// // // //               const [isSubmitting, setIsSubmitting] = useState(false)
// // // //               const [isSubmitted, setIsSubmitted] = useState(false)

// // // //               const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // //                 e.preventDefault()
// // // //                 setIsSubmitting(true)
// // // //                 await handleDualSubmit(e, `NC 216 - ${config.type} Unlock`)
// // // //                 setIsSubmitted(true)
// // // //                 setIsSubmitting(false)
// // // //                 setActiveForm(null)
// // // //               }

// // // //               return (
// // // //                 <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group relative">
// // // //                   <div className={`absolute inset-0 bg-gradient-to-br from-[#d9a406]/20 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

// // // //                   <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#d9a406]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
// // // //                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/5 rounded-bl-full"></div>

// // // //                     <div className="inline-flex flex-wrap items-center gap-2 mb-6">
// // // //                       <span className="px-3 py-1 rounded-full bg-[#d9a406] text-black text-xs font-bold uppercase tracking-wider">
// // // //                         {config.tag}
// // // //                       </span>
// // // //                       <span className="px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
// // // //                         {config.facing}
// // // //                       </span>
// // // //                     </div>

// // // //                     <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#d9a406] transition-colors duration-300">
// // // //                       {config.type}
// // // //                     </h3>
// // // //                     <p className="text-2xl text-gray-400 mb-4">{config.area} Sq.Ft</p>
// // // //                     <p className="text-sm text-gray-500 leading-relaxed mb-6">{config.desc}</p>

// // // //                     <div className="mt-auto pt-4 border-t border-white/10">
// // // //                       {isSubmitted ? (
// // // //                         <div className="text-center py-4">
// // // //                           <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
// // // //                           <p className="text-white font-bold">Blueprint Unlocked!</p>
// // // //                           <p className="text-gray-400 text-sm">Our team will call you within 2 hours.</p>
// // // //                         </div>
// // // //                       ) : activeForm === config.type ? (
// // // //                         <form onSubmit={handleUnlockSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
// // // //                           <div className="relative">
// // // //                             <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // // //                             <input name="name" type="text" placeholder="Your Name" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // // //                           </div>
// // // //                           <div className="relative">
// // // //                             <Smartphone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // // //                             <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // // //                           </div>
// // // //                           <div className="relative">
// // // //                             <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // // //                             <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // // //                           </div>
// // // //                           <div className="flex gap-2">
// // // //                             <button type="button" onClick={() => setActiveForm(null)} className="flex-1 py-3 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">Cancel</button>
// // // //                             <button type="submit" disabled={isSubmitting} className="flex-1 py-3 px-4 rounded-lg bg-[#d9a406] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b08505] transition-colors">
// // // //                               {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Get Details"}
// // // //                             </button>
// // // //                           </div>
// // // //                         </form>
// // // //                       ) : (
// // // //                         <button onClick={() => setActiveForm(config.type)} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a406] to-[#b08505] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,164,6,0.3)] transition-all duration-300 hover:scale-[1.02]">
// // // //                           Unlock Full Blueprint
// // // //                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// // // //                         </button>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               )
// // // //             })}
// // // //           </div>

// // // //           {/* Detailed Unit Breakdowns (From Nature Crust PDF) embedded in Palm Altezze UI */}
// // // //           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
// // // //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// // // //                <div className="bg-[#d9a406] px-6 py-4 flex items-center justify-between">
// // // //                  <span className="font-bold text-black text-sm tracking-wider uppercase">2 BHK 'Versatile' - 10 Variants</span>
// // // //                  <span className="text-xs font-bold text-black/70 bg-black/10 px-3 py-1 rounded-full">Total: 33 Units</span>
// // // //                </div>
// // // //                <div className="p-0">
// // // //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// // // //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// // // //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// // // //                    ))}
// // // //                  </div>
// // // //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// // // //                    {unitBreakdown2BHK.map(({ area, units, nums }, idx) => (
// // // //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// // // //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// // // //                        <span className="text-sm text-gray-300">{units}</span>
// // // //                        <span className="text-xs text-gray-500">{nums}</span>
// // // //                      </div>
// // // //                    ))}
// // // //                  </div>
// // // //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// // // //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 835–1,055 Sq.Ft</span>
// // // //                  </div>
// // // //                </div>
// // // //              </div>

// // // //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// // // //                <div className="bg-[#333] px-6 py-4 flex items-center justify-between border-b border-[#d9a406]">
// // // //                  <span className="font-bold text-white text-sm tracking-wider uppercase">3 BHK 'Executive' - 12 Variants</span>
// // // //                  <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">Total: 18 Units</span>
// // // //                </div>
// // // //                <div className="p-0">
// // // //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// // // //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// // // //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// // // //                    ))}
// // // //                  </div>
// // // //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// // // //                    {unitBreakdown3BHK.map(({ area, units, nums }, idx) => (
// // // //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// // // //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// // // //                        <span className="text-sm text-gray-300">{units}</span>
// // // //                        <span className="text-xs text-gray-500">{nums}</span>
// // // //                      </div>
// // // //                    ))}
// // // //                  </div>
// // // //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// // // //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 1,035–1,215 Sq.Ft · Corner Units</span>
// // // //                  </div>
// // // //                </div>
// // // //              </div>
// // // //           </div>

// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ SPECIFICATIONS (Palm Altezze Layout + Nature Crust Data) ════════ */}
// // // //       <section className="py-24 bg-black text-white border-t border-[#333]">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="mb-16 text-center">
// // // //             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium <span className="text-[#d9a406] font-serif italic normal-case">Specifications</span></h2>
// // // //             <p className="text-gray-400 mt-4">No shortcuts. No compromise. Just quality.</p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// // // //             <div className="space-y-0">
// // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // //                 <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Structure & Walls</h4><p className="text-gray-400 text-sm leading-relaxed">External walls: 6-inch concrete. Internal walls: 4-inch concrete with 1-inch plastering on both surfaces.</p></div>
// // // //               </div>
// // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // //                 <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Roma or Anchor switches throughout. Premium wiring with fire-safe conduits and dedicated earth connections.</p></div>
// // // //               </div>
// // // //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// // // //                 <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria premium sanitary fittings. CPVC pipes with leak-proof joints and concealed piping.</p></div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="relative h-full min-h-[500px] w-full hidden lg:flex flex-col items-center justify-center gap-6">
// // // //               <div className="w-48 h-48 rounded-full bg-[#d9a406]/10 flex items-center justify-center border-4 border-[#d9a406]/20">
// // // //                 <ShieldCheck className="w-24 h-24 text-[#d9a406]/60" strokeWidth={1} />
// // // //               </div>
// // // //               <p className="text-center text-gray-500 text-sm font-bold tracking-widest uppercase">No shortcuts.<br/>No compromise.<br/>Just quality.</p>
// // // //             </div>

// // // //             <div className="space-y-0">
// // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // //                 <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">Living & bedroom: 600mm × 600mm vitrified floor tiles. Bathroom: 300mm × 450mm anti-skid ceramic tiles.</p></div>
// // // //               </div>
// // // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // // //                 <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">Interior: Tractor emulsion finish. Exterior: Asian Paint or Nippon Paint double-coating for durability.</p></div>
// // // //               </div>
// // // //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// // // //                 <div className="shrink-0 pt-1"><ShieldCheck className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Eco & Security</h4><p className="text-gray-400 text-sm leading-relaxed">CCTV at entrances. Video door phones. Deep borewell with STP. 100% power backup. Solar-lit common areas.</p></div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ LOCATION (Palm Altezze Location Layout + Nature Crust Location Data) ════════ */}
// // // //       <section className="py-24 bg-[#0a0a0a]" id="location">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
// // // //             <div>
// // // //               <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406] font-bold tracking-widest uppercase">Strategically Located</Badge>
// // // //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406] font-serif italic font-light">Road</span></h2>
// // // //               <p className="text-gray-400 mb-10 text-lg leading-relaxed">Set in the sought-after neighbourhood of Sarjapura, balancing pulse and peace — keeping you close to everything, yet comfortably away.</p>
              
// // // //               <div className="space-y-8">
// // // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
// // // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#d9a406]"/> Educational Institutes</h4>
// // // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // // //                     <span className="flex justify-between">Endeavour Int. <strong className="text-[#d9a406]">0.1 km</strong></span>
// // // //                     <span className="flex justify-between">Champion Int. <strong className="text-[#d9a406]">1 km</strong></span>
// // // //                     <span className="flex justify-between">Azim Premji Uni <strong className="text-[#d9a406]">3 km</strong></span>
// // // //                     <span className="flex justify-between">Greenwood High <strong className="text-[#d9a406]">8 km</strong></span>
// // // //                     <span className="flex justify-between">DPS <strong className="text-[#d9a406]">10 km</strong></span>
// // // //                     <span className="flex justify-between">Christ College <strong className="text-[#d9a406]">15 km</strong></span>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// // // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#d9a406]"/> IT Companies</h4>
// // // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // // //                     <span className="flex justify-between">Infosys HQ <strong className="text-[#d9a406]">2 km</strong></span>
// // // //                     <span className="flex justify-between">Wipro <strong className="text-[#d9a406]">11 km</strong></span>
// // // //                     <span className="flex justify-between">RGA Tech Park <strong className="text-[#d9a406]">13 km</strong></span>
// // // //                     <span className="flex justify-between">RMZ Ecoworld <strong className="text-[#d9a406]">17 km</strong></span>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// // // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Hospital className="w-5 h-5 text-[#d9a406]"/> Hospitals & Shopping</h4>
// // // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // // //                     <span className="flex justify-between">Spandana Hosp <strong className="text-[#d9a406]">7 km</strong></span>
// // // //                     <span className="flex justify-between">Sparsh Hosp <strong className="text-[#d9a406]">11 km</strong></span>
// // // //                     <span className="flex justify-between">Manipal Hosp <strong className="text-[#d9a406]">17 km</strong></span>
// // // //                     <span className="flex justify-between">D-Mart <strong className="text-[#d9a406]">6 km</strong></span>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="relative flex flex-col gap-6">
// // // //               <div className="bg-[#111] border border-white/10 p-2 rounded-2xl">
// // // //                 <div className="w-full h-[400px] bg-black rounded-xl overflow-hidden relative">
// // // //                   <iframe 
// // // //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.35412497676!2d77.68465053744655!3d12.857675276326083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a50595a12c0b084!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453412345!5m2!1sen!2sin" 
// // // //                     width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
// // // //                     className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
// // // //                   />
// // // //                   <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] shadow-xl pointer-events-none">
// // // //                     <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
// // // //                     <p className="text-white text-sm font-bold">Mugulur Village, Sarjapura</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* The Next Big Address */}
// // // //               <div className="bg-gradient-to-r from-[#d9a406] to-[#b08505] p-8 rounded-2xl shadow-xl">
// // // //                 <h3 className="text-2xl text-black font-bold mb-1">The Next Big Address</h3>
// // // //                 <p className="text-sm text-black/80 font-medium mb-5">Where Sarjapura's Progress Finds Homes</p>
// // // //                 <div className="space-y-3">
// // // //                   {[
// // // //                     { icon: "🛣️", title: "Proposed STRR", desc: "Satellite Town Ring Road linking hubs" },
// // // //                     { icon: "🏗️", title: "SWIFT City SEZ", desc: "Massive 1,000-Acre govt IT/Startup SEZ" },
// // // //                     { icon: "🚇", title: "Metro Phase 3A", desc: "Red Line from Sarjapura to Hebbal" },
// // // //                   ].map(({ icon, title, desc }) => (
// // // //                     <div key={title} className="flex gap-3 items-start bg-black/10 p-3 rounded-xl">
// // // //                       <span className="text-xl shrink-0">{icon}</span>
// // // //                       <div>
// // // //                         <span className="text-sm font-bold text-black block">{title}</span>
// // // //                         <span className="text-xs text-black/80">{desc}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ AWARDS & TRUST ════════ */}
// // // //       <section className="py-24 bg-black border-t border-[#333]">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awarded for <span className="text-[#d9a406] font-serif italic">Trust & Quality</span></h2>
// // // //             <p className="text-gray-400">Recognised by India's leading real estate and business bodies, 2023–2026.</p>
// // // //           </div>

// // // //           <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
// // // //             {[
// // // //               { yr: "2023", award: "Property Award of the Year" },
// // // //               { yr: "2023", award: "Global Real Estate Brand Awards" },
// // // //               { yr: "2024", award: "Excellence in Amenities Premium" },
// // // //               { yr: "2025", award: "Time Real Estate Icon Awards" },
// // // //               { yr: "2026", award: "The Times of India" },
// // // //             ].map(({ yr, award }) => (
// // // //               <Card key={award} className="bg-[#111] border-white/5 p-8 text-center hover:border-[#d9a406]/50 transition-colors rounded-3xl group">
// // // //                 <div className="font-serif text-4xl text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">{yr}</div>
// // // //                 <div className="text-sm font-bold text-white leading-tight">{award}</div>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ OTHER RRL PROJECTS (CompleteProject section style with Nature Crust Data) ════════ */}
// // // //       <section className="py-24 bg-[#0a0a0a]">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <h2 className="text-4xl font-bold text-white mb-16 text-center">
// // // //             Other <span className="text-[#d9a406] font-serif italic">RRL Projects</span>
// // // //           </h2>
          
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
// // // //             {otherProjectsData.map((project, index) => (
// // // //               <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group h-full">
// // // //                 <div className="bg-[#111] rounded-2xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-[#d9a406]/50 transition-all shadow-lg">
// // // //                   <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
// // // //                     <img src={project.img} alt={project.name} className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500" />
// // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
// // // //                     <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md ${
// // // //                       project.status === "Completed" ? "bg-[#064e3b] text-[#c9a84c]" :
// // // //                       project.status === "Ready to Move" ? "bg-[#d9a406] text-black" :
// // // //                       "bg-blue-900 text-blue-200"
// // // //                     }`}>
// // // //                       {project.status}
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="p-5 flex flex-col flex-grow">
// // // //                     <h3 className="text-lg font-bold text-white group-hover:text-[#d9a406] transition-colors mb-2">
// // // //                       {project.name}
// // // //                     </h3>
// // // //                     <p className="text-xs text-gray-400 leading-relaxed mb-4">{project.desc}</p>
// // // //                     <div className="mt-auto">
// // // //                       <Button className="w-full bg-white/5 hover:bg-[#d9a406] text-white hover:text-black border border-white/10 transition-colors text-xs uppercase tracking-widest font-bold">
// // // //                         View Details
// // // //                       </Button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
// // // //              {[
// // // //                { n: 18, suf: "+", label: "Years of Expertise" },
// // // //                { n: 4200, suf: "+", label: "Happy Families" },
// // // //                { n: 12, suf: "", label: "Completed Projects" },
// // // //                { n: 98, suf: "%", label: "On-Time Delivery" },
// // // //              ].map(({ n, suf, label }) => (
// // // //                <div key={label} className="bg-black rounded-2xl border border-white/5 text-center py-10 px-6">
// // // //                  <div className="font-serif text-5xl font-light text-[#d9a406]">
// // // //                    <AnimatedCounter end={n} suffix={suf} />
// // // //                  </div>
// // // //                  <div className="text-xs font-bold tracking-[.18em] uppercase text-gray-500 mt-4">{label}</div>
// // // //                </div>
// // // //              ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ BROCHURE CTA SECTION (Palm Altezze Style) ════════ */}
// // // //       <section className="py-24 bg-black border-t border-[#333]">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="relative rounded-3xl overflow-hidden group border border-[#d9a406]/30 h-[450px]">
// // // //             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
            
// // // //             <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 space-y-8">
// // // //               <span className="text-[#d9a406] text-xs font-bold tracking-[.25em] uppercase px-4 py-1.5 border border-[#d9a406]/50 bg-[#d9a406]/10 rounded-full">Limited Inventory</span>
// // // //               <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
// // // //                 GET COST SHEET & <span className="text-[#d9a406] italic">BROCHURE</span>
// // // //               </h2>
// // // //               <div className="w-24 h-1 bg-[#d9a406] rounded-full" />
// // // //               <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
// // // //                 Join over 150 early registrants who have already secured their preferred units at pre-launch prices starting at ₹46 Lakhs.
// // // //               </p>
// // // //               <Button onClick={() => setIsModalOpen(true)} className="bg-[#d9a406] hover:bg-white text-black px-12 py-7 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all transform hover:-translate-y-1">
// // // //                 Download Now
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ════════ FOOTER (Palm Altezze Styling) ════════ */}
// // // //       <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
// // // //          <div className="container mx-auto px-4 max-w-[1280px]">
// // // //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// // // //               <div>
// // // //                 <h3 className="text-2xl font-bold text-white tracking-tighter mb-4">RRL <span className="text-[#d9a406]">NC-216</span></h3>
// // // //                 <p className="text-sm text-gray-400 leading-relaxed mb-6">Premium 1, 2 & 3 BHK apartments near Sarjapura. RERA & BMRDA approved. East & North facing. G+3 boutique living with 42.47% UDS.</p>
// // // //                 <div className="space-y-3">
// // // //                   <a href="tel:+918494966966" className="flex items-center gap-3 text-[#d9a406] font-bold hover:text-white transition-colors"><Phone className="w-5 h-5"/> 84 94 966 966</a>
// // // //                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><Mail className="w-5 h-5"/> enquiry@rrlbuildersanddevelopers.com</a>
// // // //                 </div>
// // // //               </div>

// // // //               <div>
// // // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Quick Links</h4>
// // // //                 <ul className="space-y-4 text-sm text-gray-400">
// // // //                   {["Overview", "Amenities", "Floor Plans", "Location Map"].map(l => (
// // // //                     <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#d9a406] transition-colors">{l}</a></li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>

// // // //               <div>
// // // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Configurations</h4>
// // // //                 <div className="space-y-4">
// // // //                   {[
// // // //                     { t: "1 BHK", r: "655 Sq.Ft", u: "1 Unit" },
// // // //                     { t: "2 BHK Versatile", r: "835–1,055 Sq.Ft", u: "33 Units" },
// // // //                     { t: "3 BHK Executive", r: "1,035–1,215 Sq.Ft", u: "18 Units" },
// // // //                   ].map(({ t, r, u }) => (
// // // //                     <div key={t} className="border-b border-white/5 pb-3">
// // // //                       <div className="text-sm font-bold text-white">{t}</div>
// // // //                       <div className="text-xs text-[#d9a406] mt-1">{r}</div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <div>
// // // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Address</h4>
// // // //                 <address className="not-italic text-sm text-gray-400 leading-relaxed mb-6">
// // // //                   <strong className="text-white block mb-1">Project Site:</strong>
// // // //                   SY No. 123, 124, Mugulur Village,<br/>
// // // //                   Off Sarjapura Road, Near Endeavours<br/>
// // // //                   International School, Bengaluru – 562 125.<br/>
// // // //                 </address>
// // // //                 <div className="text-xs text-gray-500 tracking-wider uppercase font-semibold mb-2">RERA Registration</div>
// // // //                 <div className="text-sm text-gray-400">PRM/KA/RERA/XXXX</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
// // // //               <p>RRL Builders & Developers © {new Date().getFullYear()}. All rights reserved.</p>
// // // //               <p className="text-center md:text-right max-w-2xl">This brochure is only conceptual and not a legal offering. The promoters reserve all rights to add/delete/alter details without prior notice.</p>
// // // //             </div>
// // // //          </div>
// // // //       </footer>

// // // //       {/* ════════ GLOBAL ENQUIRY MODAL (Palm Altezze Style) ════════ */}
// // // //       <AnimatePresence>
// // // //         {isModalOpen && (
// // // //           <motion.div 
// // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // //             onClick={() => setIsModalOpen(false)}
// // // //           >
// // // //             <motion.div 
// // // //               className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// // // //               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

// // // //               {state.succeeded ? (
// // // //                 <div className="flex flex-col items-center justify-center py-6 text-center">
// // // //                   <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// // // //                   <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
// // // //                   <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
// // // //                   <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full">Close</Button>
// // // //                 </div>
// // // //               ) : (
// // // //                 <>
// // // //                   <div className="text-center mb-8">
// // // //                     <h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3>
// // // //                     <p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p>
// // // //                   </div>
// // // //                   <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Global Modal")} className="space-y-4">
// // // //                     <div className="space-y-2">
// // // //                       <input name="name" type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // // //                     </div>
// // // //                     <div className="space-y-2">
// // // //                       <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // // //                     </div>
// // // //                     <div className="space-y-2">
// // // //                       <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // // //                     </div>
// // // //                     <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4 rounded-lg shadow-lg">
// // // //                       {state.submitting ? "Sending..." : "Get Priority Access"}
// // // //                     </Button>
// // // //                   </form>
// // // //                 </>
// // // //               )}
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </main>
// // // //   )
// // // // }


// // // "use client"

// // // import React, { useState, useEffect } from "react"
// // // import { useRouter } from "next/navigation"
// // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // import {
// // //   Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck,
// // //   Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee,
// // //   Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User,
// // //   Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, BrickWall, 
// // //   PaintRoller, AppWindow, Droplets, Leaf, Frame, DoorOpen, Bath, Wrench, BatteryCharging,
// // //   LayoutDashboard, BookOpen, Music, Utensils, Table2, Tv, Flower2,
// // //   Train, ShoppingCart, Hospital, Map, Briefcase, Megaphone
// // // } from "lucide-react"
// // // import { useForm, ValidationError } from '@formspree/react'

// // // // UI Component Imports
// // // import { Button } from "@/components/ui/button"
// // // import { Card } from "@/components/ui/card"
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // import { Badge } from "@/components/ui/badge"
// // // import { Input } from "@/components/ui/input"
// // // import { Label } from "@/components/ui/label"
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogTrigger,
// // // } from "@/components/ui/dialog"

// // // // --- DATA FROM NATURE CRUST (100% INTACT) ---
// // // const floorPlansData = [
// // //   {
// // //     id: "1BHK",
// // //     type: "1 BHK",
// // //     facing: "East",
// // //     area: "655",
// // //     tag: "Only 1 Unit Available — Exclusive",
// // //     desc: "A thoughtfully designed compact sanctuary with east-facing windows for sunrise light and natural ventilation in every room.",
// // //     dims: { living: "10'0\" × 14'0\"", kitchen: "7'0\" × 7'0\"", masterBed: "11'0\" × 11'0\"", bath: "5'0\" × 8'0\"", balcony: "4'6\" × 7'0\"" },
// // //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
// // //   },
// // //   {
// // //     id: "2BHK",
// // //     type: "2 BHK",
// // //     facing: "East & North",
// // //     area: "835 - 1,055",
// // //     tag: "33 Units · 10 Unique Layouts",
// // //     desc: "The 'Versatile' Series — 10 layouts for all generations. Whether you're a young couple or a growing family, there's a home here for you.",
// // //     dims: { livingDining: "11'0\" × 16'0\"", kitchen: "8'0\" × 8'0\"", masterBed: "12'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", balcony: "5'0\" × 8'0\"" },
// // //     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
// // //   },
// // //   {
// // //     id: "3BHK",
// // //     type: "3 BHK",
// // //     facing: "Corner Units",
// // //     area: "1,035 - 1,215",
// // //     tag: "18 Premium Corner Homes",
// // //     desc: "The 'Executive' Series — panoramic sunrise views, cross ventilation & corner layouts up to 1,215 Sq.Ft. These aren't just big homes — they're the best homes in the building.",
// // //     dims: { living: "16'0\" × 12'0\"", dining: "12'0\" × 10'0\"", kitchen: "10'0\" × 8'0\"", masterBed: "13'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", bed3: "10'0\" × 10'0\"" },
// // //     image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85"
// // //   }
// // // ]

// // // const unitBreakdown2BHK = [
// // //   { area: "835", units: 1, nums: "48" },
// // //   { area: "850", units: 1, nums: "47" },
// // //   { area: "875", units: 7, nums: "7,6,23,24,25,26,27" },
// // //   { area: "890", units: 9, nums: "16,17,18,19,20,30,31,32,33" },
// // //   { area: "895", units: 3, nums: "38,40,41" },
// // //   { area: "910", units: 7, nums: "11,3,29,34,44,45,37" },
// // //   { area: "930", units: 2, nums: "14,2" },
// // //   { area: "935", units: 1, nums: "8" },
// // //   { area: "950", units: 1, nums: "9" },
// // //   { area: "1055", units: 1, nums: "22" },
// // // ]

// // // const unitBreakdown3BHK = [
// // //   { area: "1035", units: 1, nums: "49" },
// // //   { area: "1090", units: 1, nums: "50" },
// // //   { area: "1100", units: 1, nums: "51" },
// // //   { area: "1110", units: 1, nums: "43" },
// // //   { area: "1115", units: 2, nums: "1, 15" },
// // //   { area: "1120", units: 2, nums: "10, 12" },
// // //   { area: "1130", units: 4, nums: "4, 21, 35, 46" },
// // //   { area: "1135", units: 2, nums: "28, 52" },
// // //   { area: "1140", units: 1, nums: "36" },
// // //   { area: "1155", units: 1, nums: "5" },
// // //   { area: "1175", units: 1, nums: "42" },
// // //   { area: "1215", units: 1, nums: "13" },
// // // ]

// // // const otherProjectsData = [
// // //   { name: "RRL Nature Wood", status: "Completed", desc: "Every corner reflects simplicity and elegance", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502?w=600&q=85" },
// // //   { name: "RRL Palacio", status: "Ready to Move", desc: "Ready-to-move 3 BHK furnished/semi-furnished · 1,400–1,540 SBA", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531?w=600&q=85" },
// // //   { name: "RRL Palm Altezze", status: "Ongoing", desc: "2 & 3 BHK Premium · G+23 · 92% Open Space · 50% UDS", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863?w=600&q=85" },
// // //   { name: "RRL Towers", status: "Completed", desc: "Landmark commercial and residential development", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451?w=600&q=85" },
// // //   { name: "RRL Complex", status: "Completed", desc: "Premium apartment project", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360?w=600&q=85" },
// // // ]

// // // // --- ANIMATION VARIANTS ---
// // // const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
// // // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
// // // const slideInVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }

// // // // --- HELPER COMPONENTS ---
// // // const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number; }) => {
// // //   const [count, setCount] = useState(0)
// // //   const [hasAnimated, setHasAnimated] = useState(false)
// // //   const ref = React.useRef<HTMLDivElement>(null)

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         if (entries[0].isIntersecting && !hasAnimated) {
// // //           setHasAnimated(true)
// // //           let startTime: number | null = null
// // //           const step = (timestamp: number) => {
// // //             if (!startTime) startTime = timestamp
// // //             const progress = Math.min((timestamp - startTime) / duration, 1)
// // //             setCount(progress * end)
// // //             if (progress < 1) window.requestAnimationFrame(step)
// // //           }
// // //           window.requestAnimationFrame(step)
// // //         }
// // //       },
// // //       { threshold: 0.5 }
// // //     )
// // //     if (ref.current) observer.observe(ref.current)
// // //     return () => observer.disconnect()
// // //   }, [end, duration, hasAnimated])

// // //   return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
// // // }

// // // function EOICountdown() {
// // //   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
// // //   const [mounted, setMounted] = useState(false)

// // //   useEffect(() => {
// // //     setMounted(true)
// // //     const target = new Date("2026-06-30T23:59:59").getTime()
// // //     const interval = setInterval(() => {
// // //       const now = new Date().getTime()
// // //       const distance = target - now
// // //       if (distance < 0) { clearInterval(interval); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
// // //       setTimeLeft({
// // //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
// // //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
// // //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
// // //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
// // //       })
// // //     }, 1000)
// // //     return () => clearInterval(interval)
// // //   }, [])

// // //   if (!mounted) return null

// // //   return (
// // //     <div className="mt-8 mb-6">
// // //       <div className="text-[10px] text-[#d9a406] font-bold tracking-[.15em] uppercase mb-3 flex items-center gap-2">
// // //         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
// // //         EOI Ends In (June 30, 2026)
// // //       </div>
// // //       <div className="flex gap-3">
// // //         {[{ label: "Days", value: timeLeft.days }, { label: "Hours", value: timeLeft.hours }, { label: "Mins", value: timeLeft.minutes }, { label: "Secs", value: timeLeft.seconds }].map((item, i) => (
// // //           <div key={i} className="flex flex-col items-center justify-center bg-[#111] border border-[#d9a406]/30 px-4 py-3 min-w-[70px] rounded-lg shadow-[0_0_15px_rgba(217,164,6,0.1)]">
// // //             <span className="font-serif text-3xl text-[#fcd34d] font-bold leading-none">{String(item.value).padStart(2, '0')}</span>
// // //             <span className="text-[9px] font-bold tracking-[.2em] uppercase text-gray-500 mt-1.5">{item.label}</span>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // // ════════ MAIN PAGE COMPONENT ════════
// // // export default function Nc216Page() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// // //   const router = useRouter()
// // //   const [state, handleSubmit] = useForm("mkonkbkk")

// // //   // Dual Submit Logic (CRM + Formspree)
// // //   const handleDualSubmit = async (e: React.FormEvent<HTMLFormElement>, customProjectName = "RRL NC-216") => {
// // //     e.preventDefault()
// // //     const form = e.currentTarget
// // //     const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
// // //     const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
// // //     const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    
// // //     fetch('/enquire-now-api.php', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: customProjectName }),
// // //     }).catch(() => {})
    
// // //     await handleSubmit(e)
// // //   }

// // //   useEffect(() => {
// // //     if (state.succeeded) {
// // //       setTimeout(() => { setIsModalOpen(false) }, 3000)
// // //     }
// // //   }, [state.succeeded])

// // //   return (
// // //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black font-sans overflow-x-hidden">
    

// // //       {/* ════════ HERO IMAGE BANNER (Nature Crust Content - ONLY IMAGE KEPT) ════════ */}
// // //       <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
// // //         {/* MOBILE HERO (400 × 300) */}
// // //         <div className="block md:hidden">
// // //           <div className="relative w-full aspect-[4/3] overflow-hidden">
// // //             <img
// // //               src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// // //               alt="RRL Hero Banner Mobile"
// // //               className="w-full h-full object-contain"
// // //               loading="eager"
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* DESKTOP HERO */}
// // //         <div className="hidden md:block h-[60vh] md:h-[80vh]">
// // //           <motion.div
// // //             initial={{ scale: 1.1, opacity: 0 }}
// // //             whileInView={{ scale: 1, opacity: 1 }}
// // //             transition={{ duration: 1.5, ease: "easeOut" }}
// // //             viewport={{ once: true }}
// // //             className="relative w-full h-full"
// // //           >
// // //             <img
// // //               src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// // //               alt="RRL Hero Banner Desktop"
// // //               loading="eager"
// // //               className="w-full h-full object-fill"
// // //             />
// // //           </motion.div>
// // //         </div>
// // //       </section>


// // //       {/* ════════ HERO CONTENT & FORM ════════ */}
// // //       <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-12 pb-12">
// // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// // //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// // //                 <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm font-bold uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
// // //                 <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Sarjapura, Bengaluru</Badge>
// // //               </motion.div>

// // //               <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// // //                 Own a Home <br />
// // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d] italic font-serif font-light">at the Cost of a Rent</span>
// // //               </motion.h1>

// // //               <motion.div variants={fadeIn} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed space-y-4">
// // //                 <p>Welcome to <strong className="text-white font-bold">RRL NC-216</strong> — a clear green lifestyle near Sarjapura. Zero compromise living with 100% East & North facing 1, 2 & 3 BHK homes on G+3 boutique blocks.</p>
// // //                 <p className="text-3xl font-bold text-white mt-4">Starting <span className="text-[#d9a406]">₹46L – ₹98L Onwards</span></p>
// // //               </motion.div>

// // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// // //                 {["RERA & BMRDA Approved", "100% Vastu Compliant", "42.47% UDS", "G+3 Boutique Living"].map(b => (
// // //                   <span key={b} className="border border-[#d9a406]/50 text-[#fcd34d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// // //                     {b}
// // //                   </span>
// // //                 ))}
// // //               </motion.div>

// // //               <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4 border-t border-white/10 overflow-hidden">
// // //                 <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase shrink-0">Awarded</span>
// // //                 <div className="flex-1 overflow-hidden whitespace-nowrap">
// // //                    <div className="inline-block animate-[marquee_30s_linear_infinite] text-[11px] text-gray-400 font-bold">
// // //                      🏆 Property Award of the Year 2023 &nbsp;&nbsp;&nbsp; 🏆 Global Real Estate Brand Awards 2023 &nbsp;&nbsp;&nbsp; 🏆 Excellence in Amenities Premium 2024 &nbsp;&nbsp;&nbsp; 🏆 Time Real Estate Icon Awards 2025 &nbsp;&nbsp;&nbsp; 🏆 Featured Recognition The Times of India 2026
// // //                    </div>
// // //                 </div>
// // //               </motion.div>
// // //             </motion.div>

// // //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // //                <Card className="bg-[#111] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden rounded-2xl">
// // //                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>

// // //                   {state.succeeded ? (
// // //                      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
// // //                         <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// // //                         <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
// // //                         <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
// // //                      </div>
// // //                   ) : (
// // //                     <div className="p-8">
// // //                       <div className="mb-4">
// // //                         <h3 className="text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-6 h-6 text-[#d9a406]"/> Register Interest</h3>
// // //                         <p className="text-[#d9a406] text-xs font-bold tracking-widest uppercase mt-2">Get Guaranteed Pre-Launch Pricing</p>
// // //                       </div>

// // //                       <EOICountdown />

// // //                       <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Hero Enquiry")} className="space-y-4">
// // //                         <div className="relative">
// // //                             <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                             <input name="name" type="text" placeholder="Full Name *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // //                         </div>
// // //                         <div className="relative">
// // //                             <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                             <input name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // //                         </div>
// // //                         <div className="relative">
// // //                             <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                             <input name="email" type="email" placeholder="Email Address *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// // //                         </div>
// // //                         <select name="config" className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-gray-400 focus:text-white focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm appearance-none cursor-pointer">
// // //                           <option value="">Interested In...</option>
// // //                           <option>1 BHK — 655 Sq.Ft (Only 1 Unit)</option>
// // //                           <option>2 BHK — 835–1,055 Sq.Ft (33 Units)</option>
// // //                           <option>3 BHK — 1,035–1,215 Sq.Ft (18 Units)</option>
// // //                         </select>
// // //                         <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm uppercase tracking-widest h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all rounded-lg mt-2">
// // //                           {state.submitting ? "Processing..." : "Get Cost Sheet & Details →"}
// // //                         </Button>
// // //                       </form>
// // //                     </div>
// // //                   )}
// // //                </Card>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ PROJECT GLANCE ════════ */}
// // //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden border-t border-white/5">
// // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-transparent to-transparent"></div>
// // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
// // //             {[
// // //               { label: "Land Area", value: 85990, suffix: " Sq.Ft", icon: MapPin },
// // //               { label: "Total Units", value: 208, suffix: " Homes", icon: Building2 },
// // //               { label: "Starting Size", value: 655, suffix: " Sq.Ft", icon: Maximize2 },
// // //               { label: "Structure", value: 4, suffix: " Blocks", icon: Building2, isText: true, textVal: "G+3 Blocks" },
// // //             ].map((stat, index) => (
// // //               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
// // //                 <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#d9a406]/50 transition-all duration-500 h-full">
// // //                   <div className="w-14 h-14 bg-[#d9a406]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9a406]/20 transition-colors">
// // //                     <stat.icon className="w-7 h-7 text-[#d9a406]" />
// // //                   </div>
// // //                   <div className="text-3xl md:text-4xl font-bold text-[#d9a406] mb-2">
// // //                     {stat.isText ? <span>{stat.textVal}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
// // //                   </div>
// // //                   <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
// // //                   <div className="absolute inset-0 rounded-2xl bg-[#d9a406]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ EOI BENEFITS ════════ */}
// // //       <section className="py-20 bg-[#0a0a0a] border-b border-white/5" id="eoi">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl md:text-4xl font-bold text-white">Expression of Interest <span className="text-[#d9a406] font-serif italic">(EOI) is Open</span></h2>
// // //             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Be among the first to secure your dream home at RRL NC-216. By submitting your EOI, you gain priority access to our exclusive pre-launch inventory.</p>
// // //           </div>
// // //           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// // //             {[
// // //               { icon: Star, title: "Priority Unit Selection", desc: "Choose your preferred floor & facing before public launch." },
// // //               { icon: Award, title: "Lowest Guaranteed Price", desc: "Pre-launch pricing locked in safely and securely." },
// // //               { icon: Zap, title: "Launch Day Offers", desc: "Exclusive access to special upgrades and launch discounts." },
// // //               { icon: ShieldCheck, title: "100% Refundable", desc: "Your EOI token is fully refundable without questions." }
// // //             ].map((item, idx) => (
// // //               <motion.div key={idx} variants={fadeIn} className="group">
// // //                 <Card className="bg-[#111] border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden rounded-2xl">
// // //                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
// // //                   <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
// // //                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
// // //                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ OVERVIEW & UDS ════════ */}
// // //       <section id="overview" className="py-24 bg-black text-white overflow-hidden relative">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
// // //           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            
// // //             <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block mb-4">Ownership Advantage</span>
// // //             <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
// // //               You Own the <span className="text-[#d9a406]">Land Too.</span>
// // //             </h2>
            
// // //             <p className="text-lg text-gray-300 leading-relaxed mb-12">
// // //               Most apartments give you walls. We give you land. RRL NC-216 is a boutique residential enclave set on 85,990 Sq.Ft. Designed as G+3 blocks for low-density, congestion-free living.
// // //             </p>

// // //             <div className="p-8 bg-gradient-to-r from-[#111] via-[#1a1810] to-[#111] border border-[#d9a406]/30 rounded-3xl flex flex-col sm:flex-row items-center justify-center gap-8 shadow-[0_0_30px_rgba(217,164,6,0.05)] mb-12">
// // //               <div className="font-serif text-6xl md:text-7xl font-light text-[#fcd34d]">42.47%</div>
// // //               <div className="text-center sm:text-left">
// // //                 <div className="text-xl font-bold text-white uppercase tracking-wider mb-2">Undivided Share (UDS)</div>
// // //                 <div className="text-sm text-gray-400 max-w-sm">Reserved exclusively for homeowners — ensuring a real, legal share of the ground beneath your home for superior asset appreciation.</div>
// // //               </div>
// // //             </div>

// // //             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
// // //               {[
// // //                 "100% East & North Facing",
// // //                 "RERA & BMRDA Approved",
// // //                 "All Vastu Compliant Homes",
// // //                 "G+3 Boutique Living"
// // //               ].map(f => (
// // //                 <div key={f} className="flex flex-col items-center gap-3 bg-[#111] p-5 border border-white/5 rounded-2xl">
// // //                   <ShieldCheck className="w-6 h-6 text-[#d9a406] shrink-0" />
// // //                   <span className="text-xs font-bold text-gray-200 uppercase tracking-wide">{f}</span>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ MASTER PLAN ════════ */}
// // //       <section className="py-24 bg-[#0a0a0a] border-t border-[#333]">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center space-y-8">
            
// // //             <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block">Master Plan</span>
// // //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
// // //               Your Dream Home <br /> <span className="text-[#d9a406] italic">Awaits</span>
// // //             </h2>
// // //             <div className="w-24 h-1 bg-[#d9a406] rounded-full mx-auto" />
            
// // //             <p className="text-xl text-gray-400 leading-relaxed pt-4">
// // //               4 boutique G+3 blocks spread across 85,990 Sq.Ft with generous open spaces, landscaped gardens, community amenities and tree-lined pathways.
// // //             </p>
// // //             <p className="text-[#d9a406] font-bold tracking-widest uppercase text-sm">East & North facing for every single unit.</p>
            
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ AMENITIES ════════ */}
// // //       <section id="amenities" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// // //         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
// // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // //           <div className="mb-16 text-center">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than a Home. <span className="text-[#d9a406] font-serif italic">A Community.</span></h2>
// // //             <p className="text-gray-400 max-w-2xl mx-auto">Step outside and find everything you need — pools, parks, a gym, games and more. All within your campus. Your weekend is sorted.</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
// // //             {[
// // //               { icon: Waves, title: "Swim & Stay Fit", desc: "Adult pool + kid's pool for safe splashing. Outdoor & indoor gym." },
// // //               { icon: Trees, title: "Walk, Play, Breathe", desc: "A natural park right at your doorstep. Curated landscaping." },
// // //               { icon: Music, title: "Celebrate Together", desc: "Multipurpose hall for birthdays, anniversaries and events." },
// // //               { icon: Zap, title: "The Essentials", desc: "High-speed lifts · In-house STP · 100% power backup · Solar." },
// // //               { icon: Gamepad2, title: "Game On", desc: "Table tennis, carom board, chess & indoor games." },
// // //               { icon: Building2, title: "Smart Parking", desc: "Dedicated covered parking with visitor management." },
// // //               { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV at every entrance and common area. Always watching." },
// // //               { icon: Droplets, title: "Water Supply", desc: "Deep borewell with overhead tanks and underground sumps." },
// // //             ].map((item, i) => (
// // //               <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#161616] transition-all group flex flex-col items-center text-center">
// // //                 <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)] mb-4">
// // //                   <item.icon className="w-8 h-8" />
// // //                 </div>
// // //                 <span className="text-white font-bold group-hover:text-[#d9a406] text-lg mb-2">{item.title}</span>
// // //                 <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
// // //             {[
// // //               { label: "Swimming Pool", sub: "Infant Pool" },
// // //               { label: "Party Hall" },
// // //               { label: "Indoor Gym" },
// // //               { label: "Children's Play Area" }
// // //             ].map(({ label, sub }, i) => (
// // //               <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#111] border border-[#d9a406]/20 rounded-2xl p-6 text-center hover:border-[#d9a406] hover:bg-[#161616] transition-all flex flex-col justify-center min-h-[140px]">
// // //                 <span className="text-sm md:text-base font-bold text-[#fcd34d] uppercase tracking-wider block mb-2">{label}</span>
// // //                 {sub && <span className="text-xs text-gray-400 block leading-relaxed">{sub}</span>}
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ FLOOR PLANS & CONFIGURATIONS ════════ */}
// // //       <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="floorplans">
// // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-transparent to-transparent"></div>
// // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          
// // //           <div className="text-center mb-16">
// // //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
// // //               <span className="inline-block px-4 py-1.5 rounded-full border border-[#d9a406]/50 bg-[#d9a406]/10 text-[#d9a406] text-sm font-bold uppercase tracking-wider mb-6">
// // //                 Configurations
// // //               </span>
// // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// // //                 Pick Your Home <span className="text-[#d9a406] font-serif italic">Amongst 52 Units</span>
// // //               </h2>
// // //               <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// // //                 1 BHK, 2 BHK "Versatile" Series, and 3 BHK "Executive" Series
// // //               </p>
// // //             </motion.div>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
// // //             {floorPlansData.map((config, index) => {
// // //               const [activeForm, setActiveForm] = useState<string | null>(null)
// // //               const [isSubmitting, setIsSubmitting] = useState(false)
// // //               const [isSubmitted, setIsSubmitted] = useState(false)

// // //               const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // //                 e.preventDefault()
// // //                 setIsSubmitting(true)
// // //                 await handleDualSubmit(e, `NC 216 - ${config.type} Unlock`)
// // //                 setIsSubmitted(true)
// // //                 setIsSubmitting(false)
// // //                 setActiveForm(null)
// // //               }

// // //               return (
// // //                 <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group relative">
// // //                   <div className={`absolute inset-0 bg-gradient-to-br from-[#d9a406]/20 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

// // //                   <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#d9a406]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
// // //                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/5 rounded-bl-full"></div>

// // //                     <div className="inline-flex flex-wrap items-center gap-2 mb-6">
// // //                       <span className="px-3 py-1 rounded-full bg-[#d9a406] text-black text-xs font-bold uppercase tracking-wider">
// // //                         {config.tag}
// // //                       </span>
// // //                       <span className="px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
// // //                         {config.facing}
// // //                       </span>
// // //                     </div>

// // //                     <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#d9a406] transition-colors duration-300">
// // //                       {config.type}
// // //                     </h3>
// // //                     <p className="text-2xl text-gray-400 mb-4">{config.area} Sq.Ft</p>
// // //                     <p className="text-sm text-gray-500 leading-relaxed mb-6">{config.desc}</p>

// // //                     <div className="mt-auto pt-4 border-t border-white/10">
// // //                       {isSubmitted ? (
// // //                         <div className="text-center py-4">
// // //                           <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
// // //                           <p className="text-white font-bold">Blueprint Unlocked!</p>
// // //                           <p className="text-gray-400 text-sm">Our team will call you within 2 hours.</p>
// // //                         </div>
// // //                       ) : activeForm === config.type ? (
// // //                         <form onSubmit={handleUnlockSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
// // //                           <div className="relative">
// // //                             <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // //                             <input name="name" type="text" placeholder="Your Name" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // //                           </div>
// // //                           <div className="relative">
// // //                             <Smartphone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // //                             <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // //                           </div>
// // //                           <div className="relative">
// // //                             <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// // //                             <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// // //                           </div>
// // //                           <div className="flex gap-2">
// // //                             <button type="button" onClick={() => setActiveForm(null)} className="flex-1 py-3 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">Cancel</button>
// // //                             <button type="submit" disabled={isSubmitting} className="flex-1 py-3 px-4 rounded-lg bg-[#d9a406] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b08505] transition-colors">
// // //                               {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Get Details"}
// // //                             </button>
// // //                           </div>
// // //                         </form>
// // //                       ) : (
// // //                         <button onClick={() => setActiveForm(config.type)} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a406] to-[#b08505] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,164,6,0.3)] transition-all duration-300 hover:scale-[1.02]">
// // //                           Unlock Full Blueprint
// // //                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               )
// // //             })}
// // //           </div>

// // //           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
// // //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// // //                <div className="bg-[#d9a406] px-6 py-4 flex items-center justify-between">
// // //                  <span className="font-bold text-black text-sm tracking-wider uppercase">2 BHK 'Versatile' - 10 Variants</span>
// // //                  <span className="text-xs font-bold text-black/70 bg-black/10 px-3 py-1 rounded-full">Total: 33 Units</span>
// // //                </div>
// // //                <div className="p-0">
// // //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// // //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// // //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// // //                    ))}
// // //                  </div>
// // //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// // //                    {unitBreakdown2BHK.map(({ area, units, nums }, idx) => (
// // //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// // //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// // //                        <span className="text-sm text-gray-300">{units}</span>
// // //                        <span className="text-xs text-gray-500">{nums}</span>
// // //                      </div>
// // //                    ))}
// // //                  </div>
// // //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// // //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 835–1,055 Sq.Ft</span>
// // //                  </div>
// // //                </div>
// // //              </div>

// // //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// // //                <div className="bg-[#333] px-6 py-4 flex items-center justify-between border-b border-[#d9a406]">
// // //                  <span className="font-bold text-white text-sm tracking-wider uppercase">3 BHK 'Executive' - 12 Variants</span>
// // //                  <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">Total: 18 Units</span>
// // //                </div>
// // //                <div className="p-0">
// // //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// // //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// // //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// // //                    ))}
// // //                  </div>
// // //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// // //                    {unitBreakdown3BHK.map(({ area, units, nums }, idx) => (
// // //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// // //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// // //                        <span className="text-sm text-gray-300">{units}</span>
// // //                        <span className="text-xs text-gray-500">{nums}</span>
// // //                      </div>
// // //                    ))}
// // //                  </div>
// // //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// // //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 1,035–1,215 Sq.Ft · Corner Units</span>
// // //                  </div>
// // //                </div>
// // //              </div>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ════════ SPECIFICATIONS ════════ */}
// // //       <section className="py-24 bg-black text-white border-t border-[#333]">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="mb-16 text-center">
// // //             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium <span className="text-[#d9a406] font-serif italic normal-case">Specifications</span></h2>
// // //             <p className="text-gray-400 mt-4">No shortcuts. No compromise. Just quality.</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// // //             <div className="space-y-0">
// // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // //                 <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Structure & Walls</h4><p className="text-gray-400 text-sm leading-relaxed">External walls: 6-inch concrete. Internal walls: 4-inch concrete with 1-inch plastering on both surfaces.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // //                 <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Roma or Anchor switches throughout. Premium wiring with fire-safe conduits and dedicated earth connections.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// // //                 <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria premium sanitary fittings. CPVC pipes with leak-proof joints and concealed piping.</p></div>
// // //               </div>
// // //             </div>

// // //             <div className="relative h-full min-h-[500px] w-full hidden lg:flex flex-col items-center justify-center gap-6">
// // //               <div className="w-48 h-48 rounded-full bg-[#d9a406]/10 flex items-center justify-center border-4 border-[#d9a406]/20">
// // //                 <ShieldCheck className="w-24 h-24 text-[#d9a406]/60" strokeWidth={1} />
// // //               </div>
// // //               <p className="text-center text-gray-500 text-sm font-bold tracking-widest uppercase">No shortcuts.<br/>No compromise.<br/>Just quality.</p>
// // //             </div>

// // //             <div className="space-y-0">
// // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // //                 <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">Living & bedroom: 600mm × 600mm vitrified floor tiles. Bathroom: 300mm × 450mm anti-skid ceramic tiles.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-[#333]">
// // //                 <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">Interior: Tractor emulsion finish. Exterior: Asian Paint or Nippon Paint double-coating for durability.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// // //                 <div className="shrink-0 pt-1"><ShieldCheck className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg uppercase mb-1">Eco & Security</h4><p className="text-gray-400 text-sm leading-relaxed">CCTV at entrances. Video door phones. Deep borewell with STP. 100% power backup. Solar-lit common areas.</p></div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ LOCATION ════════ */}
// // //       <section className="py-24 bg-[#0a0a0a]" id="location">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
// // //             <div>
// // //               <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406] font-bold tracking-widest uppercase">Strategically Located</Badge>
// // //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406] font-serif italic font-light">Road</span></h2>
// // //               <p className="text-gray-400 mb-10 text-lg leading-relaxed">Set in the sought-after neighbourhood of Sarjapura, balancing pulse and peace — keeping you close to everything, yet comfortably away.</p>
              
// // //               <div className="space-y-8">
// // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
// // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#d9a406]"/> Educational Institutes</h4>
// // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // //                     <span className="flex justify-between">Endeavour Int. <strong className="text-[#d9a406]">0.1 km</strong></span>
// // //                     <span className="flex justify-between">Champion Int. <strong className="text-[#d9a406]">1 km</strong></span>
// // //                     <span className="flex justify-between">Azim Premji Uni <strong className="text-[#d9a406]">3 km</strong></span>
// // //                     <span className="flex justify-between">Greenwood High <strong className="text-[#d9a406]">8 km</strong></span>
// // //                     <span className="flex justify-between">DPS <strong className="text-[#d9a406]">10 km</strong></span>
// // //                     <span className="flex justify-between">Christ College <strong className="text-[#d9a406]">15 km</strong></span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#d9a406]"/> IT Companies</h4>
// // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // //                     <span className="flex justify-between">Infosys HQ <strong className="text-[#d9a406]">2 km</strong></span>
// // //                     <span className="flex justify-between">Wipro <strong className="text-[#d9a406]">11 km</strong></span>
// // //                     <span className="flex justify-between">RGA Tech Park <strong className="text-[#d9a406]">13 km</strong></span>
// // //                     <span className="flex justify-between">RMZ Ecoworld <strong className="text-[#d9a406]">17 km</strong></span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="border-l-2 border-[#333] pl-6 relative">
// // //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// // //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Hospital className="w-5 h-5 text-[#d9a406]"/> Hospitals & Shopping</h4>
// // //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// // //                     <span className="flex justify-between">Spandana Hosp <strong className="text-[#d9a406]">7 km</strong></span>
// // //                     <span className="flex justify-between">Sparsh Hosp <strong className="text-[#d9a406]">11 km</strong></span>
// // //                     <span className="flex justify-between">Manipal Hosp <strong className="text-[#d9a406]">17 km</strong></span>
// // //                     <span className="flex justify-between">D-Mart <strong className="text-[#d9a406]">6 km</strong></span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="relative flex flex-col gap-6">
// // //               <div className="bg-[#111] border border-white/10 p-2 rounded-2xl">
// // //                 <div className="w-full h-[400px] bg-black rounded-xl overflow-hidden relative">
// // //                   <iframe 
// // //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.35412497676!2d77.68465053744655!3d12.857675276326083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a50595a12c0b084!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453412345!5m2!1sen!2sin" 
// // //                     width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
// // //                     className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
// // //                   />
// // //                   <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] shadow-xl pointer-events-none">
// // //                     <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
// // //                     <p className="text-white text-sm font-bold">Mugulur Village, Sarjapura</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="bg-gradient-to-r from-[#d9a406] to-[#b08505] p-8 rounded-2xl shadow-xl">
// // //                 <h3 className="text-2xl text-black font-bold mb-1">The Next Big Address</h3>
// // //                 <p className="text-sm text-black/80 font-medium mb-5">Where Sarjapura's Progress Finds Homes</p>
// // //                 <div className="space-y-3">
// // //                   {[
// // //                     { icon: "🛣️", title: "Proposed STRR", desc: "Satellite Town Ring Road linking hubs" },
// // //                     { icon: "🏗️", title: "SWIFT City SEZ", desc: "Massive 1,000-Acre govt IT/Startup SEZ" },
// // //                     { icon: "🚇", title: "Metro Phase 3A", desc: "Red Line from Sarjapura to Hebbal" },
// // //                   ].map(({ icon, title, desc }) => (
// // //                     <div key={title} className="flex gap-3 items-start bg-black/10 p-3 rounded-xl">
// // //                       <span className="text-xl shrink-0">{icon}</span>
// // //                       <div>
// // //                         <span className="text-sm font-bold text-black block">{title}</span>
// // //                         <span className="text-xs text-black/80">{desc}</span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ AWARDS & TRUST ════════ */}
// // //       <section className="py-24 bg-black border-t border-[#333]">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awarded for <span className="text-[#d9a406] font-serif italic">Trust & Quality</span></h2>
// // //             <p className="text-gray-400">Recognised by India's leading real estate and business bodies, 2023–2026.</p>
// // //           </div>

// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
// // //             {[
// // //               { yr: "2023", award: "Property Award of the Year" },
// // //               { yr: "2023", award: "Global Real Estate Brand Awards" },
// // //               { yr: "2024", award: "Excellence in Amenities Premium" },
// // //               { yr: "2025", award: "Time Real Estate Icon Awards" },
// // //               { yr: "2026", award: "The Times of India" },
// // //             ].map(({ yr, award }) => (
// // //               <Card key={award} className="bg-[#111] border-white/5 p-8 text-center hover:border-[#d9a406]/50 transition-colors rounded-3xl group">
// // //                 <div className="font-serif text-4xl text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">{yr}</div>
// // //                 <div className="text-sm font-bold text-white leading-tight">{award}</div>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ OTHER RRL PROJECTS ════════ */}
// // //       <section className="py-24 bg-[#0a0a0a]">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <h2 className="text-4xl font-bold text-white mb-16 text-center">
// // //             Other <span className="text-[#d9a406] font-serif italic">RRL Projects</span>
// // //           </h2>
          
// // //           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
// // //             {otherProjectsData.map((project, index) => (
// // //               <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group h-full">
// // //                 <div className="bg-[#111] rounded-2xl p-6 flex flex-col border border-white/5 hover:border-[#d9a406]/50 transition-all shadow-lg h-full">
// // //                   <div className="mb-4">
// // //                     <span className={`text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider ${
// // //                       project.status === "Completed" ? "bg-[#064e3b] text-[#c9a84c]" :
// // //                       project.status === "Ready to Move" ? "bg-[#d9a406] text-black" :
// // //                       "bg-blue-900 text-blue-200"
// // //                     }`}>
// // //                       {project.status}
// // //                     </span>
// // //                   </div>
// // //                   <h3 className="text-xl font-bold text-white group-hover:text-[#d9a406] transition-colors mb-3">
// // //                     {project.name}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-400 leading-relaxed mb-6">{project.desc}</p>
// // //                   <div className="mt-auto">
// // //                     <Button className="w-full bg-white/5 hover:bg-[#d9a406] text-white hover:text-black border border-white/10 transition-colors text-xs uppercase tracking-widest font-bold">
// // //                       View Details
// // //                     </Button>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
// // //              {[
// // //                { n: 18, suf: "+", label: "Years of Expertise" },
// // //                { n: 4200, suf: "+", label: "Happy Families" },
// // //                { n: 12, suf: "", label: "Completed Projects" },
// // //                { n: 98, suf: "%", label: "On-Time Delivery" },
// // //              ].map(({ n, suf, label }) => (
// // //                <div key={label} className="bg-black rounded-2xl border border-white/5 text-center py-10 px-6">
// // //                  <div className="font-serif text-5xl font-light text-[#d9a406]">
// // //                    <AnimatedCounter end={n} suffix={suf} />
// // //                  </div>
// // //                  <div className="text-xs font-bold tracking-[.18em] uppercase text-gray-500 mt-4">{label}</div>
// // //                </div>
// // //              ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ BROCHURE CTA SECTION ════════ */}
// // //       <section className="py-24 bg-black border-t border-[#333]">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="relative rounded-3xl overflow-hidden border border-[#d9a406]/30 bg-gradient-to-br from-[#111] via-[#1a1810] to-[#111] shadow-[0_0_50px_rgba(217,164,6,0.05)] py-20 px-6 text-center flex flex-col items-center justify-center">
            
// // //             <span className="text-[#d9a406] text-xs font-bold tracking-[.25em] uppercase px-4 py-1.5 border border-[#d9a406]/50 bg-[#d9a406]/10 rounded-full mb-8">Limited Inventory</span>
// // //             <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
// // //               GET COST SHEET & <span className="text-[#d9a406] italic">BROCHURE</span>
// // //             </h2>
// // //             <div className="w-24 h-1 bg-[#d9a406] rounded-full mb-8" />
// // //             <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed mb-10">
// // //               Join over 150 early registrants who have already secured their preferred units at pre-launch prices starting at ₹46 Lakhs.
// // //             </p>
// // //             <Button onClick={() => setIsModalOpen(true)} className="bg-[#d9a406] hover:bg-white text-black px-12 py-7 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all transform hover:-translate-y-1">
// // //               Download Now
// // //             </Button>
            
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ════════ FOOTER ════════ */}
// // //       <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
// // //          <div className="container mx-auto px-4 max-w-[1280px]">
// // //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// // //               <div>
// // //                 <h3 className="text-2xl font-bold text-white tracking-tighter mb-4">RRL <span className="text-[#d9a406]">NC-216</span></h3>
// // //                 <p className="text-sm text-gray-400 leading-relaxed mb-6">Premium 1, 2 & 3 BHK apartments near Sarjapura. RERA & BMRDA approved. East & North facing. G+3 boutique living with 42.47% UDS.</p>
// // //                 <div className="space-y-3">
// // //                   <a href="tel:+918494966966" className="flex items-center gap-3 text-[#d9a406] font-bold hover:text-white transition-colors"><Phone className="w-5 h-5"/> 84 94 966 966</a>
// // //                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><Mail className="w-5 h-5"/> enquiry@rrlbuildersanddevelopers.com</a>
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Quick Links</h4>
// // //                 <ul className="space-y-4 text-sm text-gray-400">
// // //                   {["Overview", "Amenities", "Floor Plans", "Location Map"].map(l => (
// // //                     <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#d9a406] transition-colors">{l}</a></li>
// // //                   ))}
// // //                 </ul>
// // //               </div>

// // //               <div>
// // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Configurations</h4>
// // //                 <div className="space-y-4">
// // //                   {[
// // //                     { t: "1 BHK", r: "655 Sq.Ft", u: "1 Unit" },
// // //                     { t: "2 BHK Versatile", r: "835–1,055 Sq.Ft", u: "33 Units" },
// // //                     { t: "3 BHK Executive", r: "1,035–1,215 Sq.Ft", u: "18 Units" },
// // //                   ].map(({ t, r, u }) => (
// // //                     <div key={t} className="border-b border-white/5 pb-3">
// // //                       <div className="text-sm font-bold text-white">{t}</div>
// // //                       <div className="text-xs text-[#d9a406] mt-1">{r}</div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Address</h4>
// // //                 <address className="not-italic text-sm text-gray-400 leading-relaxed mb-6">
// // //                   <strong className="text-white block mb-1">Project Site:</strong>
// // //                   SY No. 123, 124, Mugulur Village,<br/>
// // //                   Off Sarjapura Road, Near Endeavours<br/>
// // //                   International School, Bengaluru – 562 125.<br/>
// // //                 </address>
// // //                 <div className="text-xs text-gray-500 tracking-wider uppercase font-semibold mb-2">RERA Registration</div>
// // //                 <div className="text-sm text-gray-400">PRM/KA/RERA/XXXX</div>
// // //               </div>
// // //             </div>

// // //             <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
// // //               <p>RRL Builders & Developers © {new Date().getFullYear()}. All rights reserved.</p>
// // //               <p className="text-center md:text-right max-w-2xl">This brochure is only conceptual and not a legal offering. The promoters reserve all rights to add/delete/alter details without prior notice.</p>
// // //             </div>
// // //          </div>
// // //       </footer>

// // //       {/* ════════ GLOBAL ENQUIRY MODAL ════════ */}
// // //       <AnimatePresence>
// // //         {isModalOpen && (
// // //           <motion.div 
// // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // //             onClick={() => setIsModalOpen(false)}
// // //           >
// // //             <motion.div 
// // //               className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// // //               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

// // //               {state.succeeded ? (
// // //                 <div className="flex flex-col items-center justify-center py-6 text-center">
// // //                   <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// // //                   <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
// // //                   <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
// // //                   <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full">Close</Button>
// // //                 </div>
// // //               ) : (
// // //                 <>
// // //                   <div className="text-center mb-8">
// // //                     <h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3>
// // //                     <p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p>
// // //                   </div>
// // //                   <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Global Modal")} className="space-y-4">
// // //                     <div className="space-y-2">
// // //                       <input name="name" type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // //                     </div>
// // //                     <div className="space-y-2">
// // //                       <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // //                     </div>
// // //                     <div className="space-y-2">
// // //                       <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// // //                     </div>
// // //                     <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4 rounded-lg shadow-lg">
// // //                       {state.submitting ? "Sending..." : "Get Priority Access"}
// // //                     </Button>
// // //                   </form>
// // //                 </>
// // //               )}
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </main>
// // //   )
// // // }

// // "use client"

// // import React, { useState, useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { motion, AnimatePresence, Variants } from "framer-motion"
// // import {
// //   Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck,
// //   Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee,
// //   Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User,
// //   Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, BrickWall, 
// //   PaintRoller, AppWindow, Droplets, Leaf, Frame, DoorOpen, Bath, Wrench, BatteryCharging,
// //   LayoutDashboard, BookOpen, Music, Utensils, Table2, Tv, Flower2,
// //   Train, ShoppingCart, Hospital, Map, Briefcase, Megaphone
// // } from "lucide-react"
// // import { useForm, ValidationError } from '@formspree/react'
// // import Image from "next/image";
// // // UI Component Imports
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Badge } from "@/components/ui/badge"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog"

// // // --- DATA FROM NATURE CRUST (100% INTACT) ---
// // const floorPlansData = [
// //   {
// //     id: "1BHK",
// //     type: "1 BHK",
// //     facing: "East",
// //     area: "655",
// //     tag: "Only 1 Unit Available — Exclusive",
// //     desc: "A thoughtfully designed compact sanctuary with east-facing windows for sunrise light and natural ventilation in every room.",
// //     dims: { living: "10'0\" × 14'0\"", kitchen: "7'0\" × 7'0\"", masterBed: "11'0\" × 11'0\"", bath: "5'0\" × 8'0\"", balcony: "4'6\" × 7'0\"" },
// //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
// //   },
// //   {
// //     id: "2BHK",
// //     type: "2 BHK",
// //     facing: "East & North",
// //     area: "835 - 1,055",
// //     tag: "33 Units · 10 Unique Layouts",
// //     desc: "The 'Versatile' Series — 10 layouts for all generations. Whether you're a young couple or a growing family, there's a home here for you.",
// //     dims: { livingDining: "11'0\" × 16'0\"", kitchen: "8'0\" × 8'0\"", masterBed: "12'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", balcony: "5'0\" × 8'0\"" },
// //     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
// //   },
// //   {
// //     id: "3BHK",
// //     type: "3 BHK",
// //     facing: "Corner Units",
// //     area: "1,035 - 1,215",
// //     tag: "18 Premium Corner Homes",
// //     desc: "The 'Executive' Series — panoramic sunrise views, cross ventilation & corner layouts up to 1,215 Sq.Ft. These aren't just big homes — they're the best homes in the building.",
// //     dims: { living: "16'0\" × 12'0\"", dining: "12'0\" × 10'0\"", kitchen: "10'0\" × 8'0\"", masterBed: "13'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", bed3: "10'0\" × 10'0\"" },
// //     image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85"
// //   }
// // ]

// // const unitBreakdown2BHK = [
// //   { area: "835", units: 1, nums: "48" },
// //   { area: "850", units: 1, nums: "47" },
// //   { area: "875", units: 7, nums: "7,6,23,24,25,26,27" },
// //   { area: "890", units: 9, nums: "16,17,18,19,20,30,31,32,33" },
// //   { area: "895", units: 3, nums: "38,40,41" },
// //   { area: "910", units: 7, nums: "11,3,29,34,44,45,37" },
// //   { area: "930", units: 2, nums: "14,2" },
// //   { area: "935", units: 1, nums: "8" },
// //   { area: "950", units: 1, nums: "9" },
// //   { area: "1055", units: 1, nums: "22" },
// // ]

// // const unitBreakdown3BHK = [
// //   { area: "1035", units: 1, nums: "49" },
// //   { area: "1090", units: 1, nums: "50" },
// //   { area: "1100", units: 1, nums: "51" },
// //   { area: "1110", units: 1, nums: "43" },
// //   { area: "1115", units: 2, nums: "1, 15" },
// //   { area: "1120", units: 2, nums: "10, 12" },
// //   { area: "1130", units: 4, nums: "4, 21, 35, 46" },
// //   { area: "1135", units: 2, nums: "28, 52" },
// //   { area: "1140", units: 1, nums: "36" },
// //   { area: "1155", units: 1, nums: "5" },
// //   { area: "1175", units: 1, nums: "42" },
// //   { area: "1215", units: 1, nums: "13" },
// // ]

// // const otherProjectsData = [
// //   { name: "RRL Nature Wood", status: "Completed", desc: "Every corner reflects simplicity and elegance", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502?w=600&q=85" },
// //   { name: "RRL Palacio", status: "Ready to Move", desc: "Ready-to-move 3 BHK furnished/semi-furnished · 1,400–1,540 SBA", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531?w=600&q=85" },
// //   { name: "RRL Palm Altezze", status: "Ongoing", desc: "2 & 3 BHK Premium · G+23 · 92% Open Space · 50% UDS", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863?w=600&q=85" },
// //   { name: "RRL Towers", status: "Completed", desc: "Landmark commercial and residential development", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451?w=600&q=85" },
// //   { name: "RRL Complex", status: "Completed", desc: "Premium apartment project", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360?w=600&q=85" },
// // ]

// // // --- ANIMATION VARIANTS ---
// // const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
// // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
// // const slideInVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }

// // // --- HELPER COMPONENTS ---
// // const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number; }) => {
// //   const [count, setCount] = useState(0)
// //   const [hasAnimated, setHasAnimated] = useState(false)
// //   const ref = React.useRef<HTMLDivElement>(null)

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting && !hasAnimated) {
// //           setHasAnimated(true)
// //           let startTime: number | null = null
// //           const step = (timestamp: number) => {
// //             if (!startTime) startTime = timestamp
// //             const progress = Math.min((timestamp - startTime) / duration, 1)
// //             setCount(progress * end)
// //             if (progress < 1) window.requestAnimationFrame(step)
// //           }
// //           window.requestAnimationFrame(step)
// //         }
// //       },
// //       { threshold: 0.5 }
// //     )
// //     if (ref.current) observer.observe(ref.current)
// //     return () => observer.disconnect()
// //   }, [end, duration, hasAnimated])

// //   return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
// // }

// // function EOICountdown() {
// //   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
// //   const [mounted, setMounted] = useState(false)

// //   useEffect(() => {
// //     setMounted(true)
// //     const target = new Date("2026-07-31T23:59:59").getTime()
// //     const interval = setInterval(() => {
// //       const now = new Date().getTime()
// //       const distance = target - now
// //       if (distance < 0) { clearInterval(interval); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
// //       setTimeLeft({
// //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
// //         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
// //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
// //         seconds: Math.floor((distance % (1000 * 60)) / 1000)
// //       })
// //     }, 1000)
// //     return () => clearInterval(interval)
// //   }, [])

// //   if (!mounted) return null

// //   return (
// //     <div className="mt-8 mb-6 w-full">
// //       <div className="text-[10px] text-[#d9a406] font-bold tracking-[.15em] uppercase mb-3 flex items-center gap-2">
// //         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
// //         EOI Ends In (July 31, 2026)
// //       </div>
      
// //       {/* FIX APPLIED HERE: 
// //         1. Changed 'flex' to 'grid grid-cols-4' 
// //         2. Removed 'min-w-[70px]' 
// //         3. Adjusted padding and text sizes for mobile (using sm: prefixes)
// //       */}
// //       <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
// //         {[
// //           { label: "Days", value: timeLeft.days }, 
// //           { label: "Hours", value: timeLeft.hours }, 
// //           { label: "Mins", value: timeLeft.minutes }, 
// //           { label: "Secs", value: timeLeft.seconds }
// //         ].map((item, i) => (
// //           <div key={i} className="flex flex-col items-center justify-center bg-[#111] border border-[#d9a406]/30 p-2 sm:px-4 sm:py-3 rounded-lg shadow-[0_0_15px_rgba(217,164,6,0.1)]">
// //             <span className="font-serif text-xl sm:text-3xl text-[#fcd34d] font-bold leading-none">
// //               {String(item.value).padStart(2, '0')}
// //             </span>
// //             <span className="text-[8px] sm:text-[9px] font-bold tracking-[.2em] uppercase text-gray-500 mt-1 sm:mt-1.5">
// //               {item.label}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // function HappyClientsGallery() {
// //   const clientImages = [
// //     "https://ik.imagekit.io/j0xzq9pns/tr:w-800,c-at_max,f-auto/happy%20clients/happy-clients%20(4).jpeg",
// //     "https://ik.imagekit.io/j0xzq9pns/tr:w-800,c-at_max,f-auto/happy%20clients/happy-clients%20(1).jpeg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560219/20250731_121250_nq8l6b.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560213/20250808_115517_vitgx0.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560198/20250728_164509_qpnvtc.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560193/20250801_121200_sorava.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
// //     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560033/20250805_115305_qoouj2.jpg",
// //   ]

// //   return (
// //     <section className="py-24 bg-neutral-50 overflow-hidden relative">
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

// //       <div className="container mx-auto px-4 mb-16 text-center relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
// //             Client Stories
// //           </div>
// //           <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
// //             Smiles We've <span className="text-gold-500">Created</span>
// //           </h2>
// //           <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
// //             Join our growing family of satisfied homeowners who found their dream home with RRL.
// //           </p>
// //         </motion.div>
// //       </div>

// //       <div className="relative w-full overflow-hidden py-10">
// //         <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
// //         <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-neutral-50 to-transparent" />

// //         <div className="animate-scroll gap-4 sm:gap-6 md:gap-8 pl-4 sm:pl-6 md:pl-8">
// //           {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
// //             <div
// //               key={i}
// //               className="group relative
// //                 h-[240px] w-[180px]
// //                 sm:h-[280px] sm:w-[200px]
// //                 md:h-[360px] md:w-[260px]
// //                 lg:h-[400px] lg:w-[300px]
// //                 flex-shrink-0 cursor-pointer"
// //             >
// //               <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
// //                 <div className="relative h-full w-full">
// //                   <Image
// //                     src={img}
// //                     alt={`Happy Client ${i}`}
// //                     fill
// //                     className="object-cover transition-transform duration-700 group-hover:scale-110"
// //                     unoptimized
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
// //                   <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
// //                     <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
// //                       <div className="h-0.5 w-6 bg-gold-400" />
// //                       <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
// //                         Handover
// //                       </span>
// //                     </div>
// //                     <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-playfair">
// //                       RRL Family
// //                     </h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // function Testimonials() {
// //   const testimonialData = [
// //     { type: "text", name: "Anusha V", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
// //     { type: "text", name: "Rama Krishna Kanupuri", role: "Happy Home Buyer", location: "RRL Nature Woods", rating: 5, testimonial: "Best apartments with good amenities. Build quality is excellent. Ram and Lakshman are genuine, humble and have great knowledge in construction. Highly recommend for a visit!" },
// //     { type: "video", name: "VideoTestimonial1", videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
// //     { type: "text", name: "Kishore Babu", role: "Happy Home Buyer", location: "RRL Palm Altezze", rating: 5, testimonial: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym, open barbeque facing swimming pool." },
// //     { type: "text", name: "Samta Goyat", role: "Happy Home Buyer", location: "RRL Nature Woods", rating: 5, testimonial: "Construction quality is top-notch. Peaceful location away from busy areas. Ram and Lakshman made the process smooth with no fake promises." },
// //     { type: "video", name: "VideoTestimonial2", videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
// //   ]

// //   return (
// //     <section className="relative py-24 overflow-hidden border-t border-[#333] bg-[#0a0a0a]">
// //       <div className="container mx-auto px-4 max-w-[1280px]">
// //         <div className="mb-16 text-center">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hear From Our <span className="text-[#d9a406] font-serif italic">Clients</span></h2>
// //           <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real stories from families who found their dream home with RRL.</p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {testimonialData.map((item, index) =>
// //             item.type === "video" ? (
// //               <div key={index} className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-black aspect-video md:aspect-[4/3] lg:aspect-[4/3]">
// //                 <iframe src={item.videoUrl} title={item.name} className="w-full h-full" allowFullScreen />
// //               </div>
// //             ) : (
// //               <div key={index} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/30 transition-all rounded-3xl p-6 md:p-8 shadow-xl flex flex-col h-full group">
// //                 <div className="flex mb-4">{[...Array(item.rating)].map((_, i) => (<span key={i} className="text-[#d9a406]">★</span>))}</div>
// //                 <p className="text-gray-300 italic text-sm md:text-base leading-relaxed mb-6">“{item.testimonial}”</p>
// //                 <div className="mt-auto border-t border-white/10 pt-4">
// //                   <h4 className="font-bold text-white">{item.name}</h4>
// //                   <p className="text-[#d9a406] text-sm font-semibold">{item.role}</p>
// //                   <p className="text-gray-500 text-xs">{item.location}</p>
// //                 </div>
// //               </div>
// //             )
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ════════ MAIN PAGE COMPONENT ════════
// // export default function Nc216Page() {
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// //   const router = useRouter()
// //   const [state, handleSubmit] = useForm("mkonkbkk")

// //   // Dual Submit Logic (CRM + Formspree)
// //   const handleDualSubmit = async (e: React.FormEvent<HTMLFormElement>, customProjectName = "RRL NC-216") => {
// //     e.preventDefault()
// //     const form = e.currentTarget
// //     const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
// //     const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
// //     const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    
// //     fetch('/enquire-now-api.php', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: customProjectName }),
// //     }).catch(() => {})
    
// //     await handleSubmit(e)
// //   }

// //   useEffect(() => {
// //     if (state.succeeded) {
// //       setTimeout(() => { setIsModalOpen(false) }, 3000)
// //     }
// //   }, [state.succeeded])

// //   return (
// //     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black font-sans overflow-x-hidden">
      

// //       {/* ════════ HERO IMAGE BANNER (Nature Crust Content - ONLY IMAGE KEPT) ════════ */}
// // <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
        
// //         {/* MOBILE HERO (400 × 300) */}
// //         <div className="block md:hidden">
// //           <div className="relative w-full aspect-[4/3] overflow-hidden">
// //             <img
// //               src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// //               alt="RRL Hero Banner Mobile"
// //               className="w-full h-full object-contain"
// //               loading="eager"
// //             />
// //           </div>
// //         </div>

// //         {/* DESKTOP HERO */}
// //         <div className="hidden md:block w-full">
// //           <motion.div
// //             initial={{ scale: 1.1, opacity: 0 }}
// //             whileInView={{ scale: 1, opacity: 1 }}
// //             transition={{ duration: 1.5, ease: "easeOut" }}
// //             viewport={{ once: true }}
// //             className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
// //           >
// //             <img
// //               src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
// //               alt="RRL Hero Banner Desktop"
// //               loading="eager"
// //               className="w-full h-auto object-contain"
// //             />
// //           </motion.div>
// //         </div>
        
// //       </section>


// //       {/* ════════ HERO CONTENT & FORM ════════ */}
// //       <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-12 pb-12">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// //                 <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm font-bold uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
// //                 <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Sarjapura, Bengaluru</Badge>
// //               </motion.div>

// //               <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
// //                 Why Rent, <br />
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d] italic font-serif font-light">When you can Own a apartment</span>
// //               </motion.h1>

// //               <motion.div variants={fadeIn} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed space-y-4">
// //                 <p>Welcome to <strong className="text-white font-bold">RRL NC-216</strong> — a clear green lifestyle near Sarjapura. Zero compromise living with 100% East & North facing 1, 2 & 3 BHK homes on G+3 boutique blocks.</p>
// //                 <p className="text-3xl font-bold text-white mt-4">Starting <span className="text-[#d9a406]">₹46L – ₹98L Onwards</span></p>
// //               </motion.div>

// //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// //                 {["RERA & BMRDA Approved", "100% Vastu Compliant", "42.47% UDS", "G+3 Boutique Living"].map(b => (
// //                   <span key={b} className="border border-[#d9a406]/50 text-[#fcd34d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// //                     {b}
// //                   </span>
// //                 ))}
// //               </motion.div>

// //               <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4 border-t border-white/10 overflow-hidden">
// //                 <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase shrink-0">Awarded</span>
// //                 <div className="flex-1 overflow-hidden whitespace-nowrap">
// //                    <div className="inline-block animate-[marquee_30s_linear_infinite] text-[11px] text-gray-400 font-bold">
// //                      🏆 Property Award of the Year 2023     🏆 Global Real Estate Brand Awards 2023     🏆 Excellence in Amenities Premium 2024     🏆 Time Real Estate Icon Awards 2025     🏆 Featured Recognition The Times of India 2026
// //                    </div>
// //                 </div>
// //               </motion.div>
// //             </motion.div>

// // <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md mx-auto lg:ml-auto">
// //    <Card className="bg-[#111] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden rounded-2xl">
// //       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>

// //       {state.succeeded ? (
// //          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
// //             <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// //             <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
// //             <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
// //          </div>
// //       ) : (
// //         <div className="p-4 sm:p-8">
// //           <div className="mb-4">
// //             <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9a406]"/> Register Interest</h3>
// //             <p className="text-[#d9a406] text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-2">Get Guaranteed Pre-Launch Pricing</p>
// //           </div>

// //           {/* Countdown Wrapper */}
// //           <div className="w-full overflow-hidden mb-6">
// //             <EOICountdown />
// //           </div>

// //           <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Hero Enquiry")} className="space-y-4">
// //             <div className="relative">
// //                 <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                 <input aria-label="Full Name" name="name" type="text" placeholder="Full Name *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// //             </div>
// //             <div className="relative">
// //                 <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                 <input aria-label="Phone Number" name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// //             </div>
// //             <div className="relative">
// //                 <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                 <input aria-label="Email Address" name="email" type="email" placeholder="Email Address *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
// //             </div>
// //             <select aria-label="Interested In" name="config" required className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-gray-400 focus:text-white focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm appearance-none cursor-pointer">
// //               <option value="">Interested In...</option>
// //               <option>1 BHK — 655 Sq.Ft (Only 1 Unit)</option>
// //               <option>2 BHK — 835–1,055 Sq.Ft (33 Units)</option>
// //               <option>3 BHK — 1,035–1,215 Sq.Ft (18 Units)</option>
// //             </select>
// //             <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm uppercase tracking-widest h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all rounded-lg mt-2">
// //               {state.submitting ? "Processing..." : "Get Cost Sheet & Details →"}
// //             </Button>
// //           </form>
// //         </div>
// //       )}
// //    </Card>
// // </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ PROJECT GLANCE ════════ */}
// //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden border-t border-white/5">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-transparent to-transparent"></div>
// //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
// //             {[
// //               { label: "Land Area", value: 85990, suffix: " Sq.Ft", icon: MapPin },
// //               { label: "Total Units", value: 208, suffix: " Homes", icon: Building2 },
// //               { label: "Starting Size", value: 655, suffix: " Sq.Ft", icon: Maximize2 },
// //               { label: "Structure", value: 4, suffix: " Blocks", icon: Building2, isText: true, textVal: "G+3 Blocks" },
// //             ].map((stat, index) => (
// //               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
// //                 <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#d9a406]/50 transition-all duration-500 h-full">
// //                   <div className="w-14 h-14 bg-[#d9a406]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9a406]/20 transition-colors">
// //                     <stat.icon className="w-7 h-7 text-[#d9a406]" />
// //                   </div>
// //                   <div className="text-3xl md:text-4xl font-bold text-[#d9a406] mb-2">
// //                     {stat.isText ? <span>{stat.textVal}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
// //                   </div>
// //                   <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
// //                   <div className="absolute inset-0 rounded-2xl bg-[#d9a406]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ EOI BENEFITS ════════ */}
// //       <section className="py-20 bg-[#0a0a0a] border-b border-white/5" id="eoi">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-white">Expression of Interest <span className="text-[#d9a406] font-serif italic">(EOI) is Open</span></h2>
// //             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Be among the first to secure your dream home at RRL NC-216. By submitting your EOI, you gain priority access to our exclusive pre-launch inventory.</p>
// //           </div>
// //           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //             {[
// //               { icon: Star, title: "Priority Unit Selection", desc: "Choose your preferred floor & facing before public launch." },
// //               { icon: Award, title: "Lowest Guaranteed Price", desc: "Pre-launch pricing locked in safely and securely." },
// //               { icon: Zap, title: "Launch Day Offers", desc: "Exclusive access to special upgrades and launch discounts." },
// //               { icon: ShieldCheck, title: "100% Refundable", desc: "Your EOI token is fully refundable without questions." }
// //             ].map((item, idx) => (
// //               <motion.div key={idx} variants={fadeIn} className="group">
// //                 <Card className="bg-[#111] border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden rounded-2xl">
// //                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
// //                   <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
// //                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
// //                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
// //                 </Card>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ════════ OVERVIEW & UDS ════════ */}
// //       <section id="overview" className="py-24 bg-black text-white overflow-hidden relative">
// //         <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
// //           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            
// //             <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block mb-4">Ownership Advantage</span>
// //             <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
// //               You Own the <span className="text-[#d9a406]">Land Too.</span>
// //             </h2>
            
// //             <p className="text-lg text-gray-300 leading-relaxed mb-12">
// //               Most apartments give you walls. We give you land. RRL NC-216 is a boutique residential enclave set on 85,990 Sq.Ft. Designed as G+3 blocks for low-density, congestion-free living.
// //             </p>

// //             <div className="p-8 bg-gradient-to-r from-[#111] via-[#1a1810] to-[#111] border border-[#d9a406]/30 rounded-3xl flex flex-col sm:flex-row items-center justify-center gap-8 shadow-[0_0_30px_rgba(217,164,6,0.05)] mb-12">
// //               <div className="font-serif text-6xl md:text-7xl font-light text-[#fcd34d]">42.47%</div>
// //               <div className="text-center sm:text-left">
// //                 <div className="text-xl font-bold text-white uppercase tracking-wider mb-2">Undivided Share (UDS)</div>
// //                 <div className="text-sm text-gray-400 max-w-sm">Reserved exclusively for homeowners — ensuring a real, legal share of the ground beneath your home for superior asset appreciation.</div>
// //               </div>
// //             </div>

// //             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
// //               {[
// //                 "100% East & North Facing",
// //                 "RERA & BMRDA Approved",
// //                 "All Vastu Compliant Homes",
// //                 "G+3 Boutique Living"
// //               ].map(f => (
// //                 <div key={f} className="flex flex-col items-center gap-3 bg-[#111] p-5 border border-white/5 rounded-2xl">
// //                   <ShieldCheck className="w-6 h-6 text-[#d9a406] shrink-0" />
// //                   <span className="text-xs font-bold text-gray-200 uppercase tracking-wide">{f}</span>
// //                 </div>
// //               ))}
// //             </div>

// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ════════ MASTER PLAN ════════ */}
// //       <section className="py-24 bg-[#0a0a0a] border-t border-[#333]">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center space-y-8">
            
// //             <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block">Master Plan</span>
// //             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
// //               Your Dream Home <br /> <span className="text-[#d9a406] italic">Awaits</span>
// //             </h2>
// //             <div className="w-24 h-1 bg-[#d9a406] rounded-full mx-auto" />
            
// //             <p className="text-xl text-gray-400 leading-relaxed pt-4">
// //               4 boutique G+3 blocks spread across 85,990 Sq.Ft with generous open spaces, landscaped gardens, community amenities and tree-lined pathways.
// //             </p>
// //             <p className="text-[#d9a406] font-bold tracking-widest uppercase text-sm">East & North facing for every single unit.</p>
            
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ════════ AMENITIES ════════ */}
// //       <section id="amenities" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// //         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
// //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// //           <div className="mb-16 text-center">
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than a Home. <span className="text-[#d9a406] font-serif italic">A Community.</span></h2>
// //             <p className="text-gray-400 max-w-2xl mx-auto">Step outside and find everything you need — pools, parks, a gym, games and more. All within your campus. Your weekend is sorted.</p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
// //             {[
// //               { icon: Waves, title: "Swim & Stay Fit", desc: "Adult pool + kid's pool for safe splashing. Outdoor & indoor gym." },
// //               { icon: Trees, title: "Walk, Play, Breathe", desc: "A natural park right at your doorstep. Curated landscaping." },
// //               { icon: Music, title: "Celebrate Together", desc: "Multipurpose hall for birthdays, anniversaries and events." },
// //               { icon: Zap, title: "The Essentials", desc: "High-speed lifts · In-house STP · 100% power backup · Solar." },
// //               { icon: Gamepad2, title: "Game On", desc: "Table tennis, carom board, chess & indoor games." },
// //               { icon: Building2, title: "Smart Parking", desc: "Dedicated covered parking with visitor management." },
// //               { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV at every entrance and common area. Always watching." },
// //               { icon: Droplets, title: "Water Supply", desc: "Deep borewell with overhead tanks and underground sumps." },
// //             ].map((item, i) => (
// //               <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#161616] transition-all group flex flex-col items-center text-center">
// //                 <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)] mb-4">
// //                   <item.icon className="w-8 h-8" />
// //                 </div>
// //                 <span className="text-white font-bold group-hover:text-[#d9a406] text-lg mb-2">{item.title}</span>
// //                 <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
// //             {[
// //               { label: "Swimming Pool", sub: "Infant Pool" },
// //               { label: "Party Hall" },
// //               { label: "Indoor Gym" },
// //               { label: "Children's Play Area" }
// //             ].map(({ label, sub }, i) => (
// //               <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#111] border border-[#d9a406]/20 rounded-2xl p-6 text-center hover:border-[#d9a406] hover:bg-[#161616] transition-all flex flex-col justify-center min-h-[140px]">
// //                 <span className="text-sm md:text-base font-bold text-[#fcd34d] uppercase tracking-wider block mb-2">{label}</span>
// //                 {sub && <span className="text-xs text-gray-400 block leading-relaxed">{sub}</span>}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ FLOOR PLANS & CONFIGURATIONS ════════ */}
// //       <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="floorplans">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-transparent to-transparent"></div>
// //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          
// //           <div className="text-center mb-16">
// //             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
// //               <span className="inline-block px-4 py-1.5 rounded-full border border-[#d9a406]/50 bg-[#d9a406]/10 text-[#d9a406] text-sm font-bold uppercase tracking-wider mb-6">
// //                 Configurations
// //               </span>
// //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// //                 Pick Your Home <span className="text-[#d9a406] font-serif italic">Amongst 52 Units</span>
// //               </h2>
// //               <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //                 1 BHK, 2 BHK "Versatile" Series, and 3 BHK "Executive" Series
// //               </p>
// //             </motion.div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
// //             {floorPlansData.map((config, index) => {
// //               const [activeForm, setActiveForm] = useState<string | null>(null)
// //               const [isSubmitting, setIsSubmitting] = useState(false)
// //               const [isSubmitted, setIsSubmitted] = useState(false)

// //               const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //                 e.preventDefault()
// //                 setIsSubmitting(true)
// //                 await handleDualSubmit(e, `NC 216 - ${config.type} Unlock`)
// //                 setIsSubmitted(true)
// //                 setIsSubmitting(false)
// //                 setActiveForm(null)
// //               }

// //               return (
// //                 <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group relative">
// //                   <div className={`absolute inset-0 bg-gradient-to-br from-[#d9a406]/20 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

// //                   <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#d9a406]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
// //                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/5 rounded-bl-full"></div>

// //                     <div className="inline-flex flex-wrap items-center gap-2 mb-6">
// //                       <span className="px-3 py-1 rounded-full bg-[#d9a406] text-black text-xs font-bold uppercase tracking-wider">
// //                         {config.tag}
// //                       </span>
// //                       <span className="px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
// //                         {config.facing}
// //                       </span>
// //                     </div>

// //                     <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#d9a406] transition-colors duration-300">
// //                       {config.type}
// //                     </h3>
// //                     <p className="text-2xl text-gray-400 mb-4">{config.area} Sq.Ft</p>
// //                     <p className="text-sm text-gray-500 leading-relaxed mb-6">{config.desc}</p>

// //                     <div className="mt-auto pt-4 border-t border-white/10">
// //                       {isSubmitted ? (
// //                         <div className="text-center py-4">
// //                           <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
// //                           <p className="text-white font-bold">Blueprint Unlocked!</p>
// //                           <p className="text-gray-400 text-sm">Our team will call you within 2 hours.</p>
// //                         </div>
// //                       ) : activeForm === config.type ? (
// //                         <form onSubmit={handleUnlockSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
// //                           <div className="relative">
// //                             <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// //                             <input name="name" type="text" placeholder="Your Name" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// //                           </div>
// //                           <div className="relative">
// //                             <Smartphone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// //                             <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// //                           </div>
// //                           <div className="relative">
// //                             <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
// //                             <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
// //                           </div>
// //                           <div className="flex gap-2">
// //                             <button type="button" onClick={() => setActiveForm(null)} className="flex-1 py-3 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">Cancel</button>
// //                             <button type="submit" disabled={isSubmitting} className="flex-1 py-3 px-4 rounded-lg bg-[#d9a406] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b08505] transition-colors">
// //                               {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Get Details"}
// //                             </button>
// //                           </div>
// //                         </form>
// //                       ) : (
// //                         <button onClick={() => setActiveForm(config.type)} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a406] to-[#b08505] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,164,6,0.3)] transition-all duration-300 hover:scale-[1.02]">
// //                           Unlock Full Blueprint
// //                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //                         </button>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               )
// //             })}
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
// //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// //                <div className="bg-[#d9a406] px-6 py-4 flex items-center justify-between">
// //                  <span className="font-bold text-black text-sm tracking-wider uppercase">2 BHK 'Versatile' - 10 Variants</span>
// //                  <span className="text-xs font-bold text-black/70 bg-black/10 px-3 py-1 rounded-full">Total: 33 Units</span>
// //                </div>
// //                <div className="p-0">
// //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// //                    ))}
// //                  </div>
// //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// //                    {unitBreakdown2BHK.map(({ area, units, nums }, idx) => (
// //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// //                        <span className="text-sm text-gray-300">{units}</span>
// //                        <span className="text-xs text-gray-500">{nums}</span>
// //                      </div>
// //                    ))}
// //                  </div>
// //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 835–1,055 Sq.Ft</span>
// //                  </div>
// //                </div>
// //              </div>

// //              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
// //                <div className="bg-[#333] px-6 py-4 flex items-center justify-between border-b border-[#d9a406]">
// //                  <span className="font-bold text-white text-sm tracking-wider uppercase">3 BHK 'Executive' - 12 Variants</span>
// //                  <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">Total: 18 Units</span>
// //                </div>
// //                <div className="p-0">
// //                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
// //                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
// //                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
// //                    ))}
// //                  </div>
// //                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
// //                    {unitBreakdown3BHK.map(({ area, units, nums }, idx) => (
// //                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
// //                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
// //                        <span className="text-sm text-gray-300">{units}</span>
// //                        <span className="text-xs text-gray-500">{nums}</span>
// //                      </div>
// //                    ))}
// //                  </div>
// //                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
// //                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 1,035–1,215 Sq.Ft · Corner Units</span>
// //                  </div>
// //                </div>
// //              </div>
// //           </div>

// //         </div>
// //       </section>

// //       {/* ════════ SPECIFICATIONS ════════ */}
// //       <section className="py-24 bg-black text-white border-t border-[#333]">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="mb-16 text-center">
// //             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium <span className="text-[#d9a406] font-serif italic normal-case">Specifications</span></h2>
// //             <p className="text-gray-400 mt-4">No shortcuts. No compromise. Just quality.</p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// //             <div className="space-y-0">
// //               <div className="flex gap-5 py-6 border-b border-[#333]">
// //                 <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// //                 <div><h4 className="font-bold text-lg uppercase mb-1">Structure & Walls</h4><p className="text-gray-400 text-sm leading-relaxed">External walls: 6-inch concrete. Internal walls: 4-inch concrete with 1-inch plastering on both surfaces.</p></div>
// //               </div>
// //               <div className="flex gap-5 py-6 border-b border-[#333]">
// //                 <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// //                 <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Roma or Anchor switches throughout. Premium wiring with fire-safe conduits and dedicated earth connections.</p></div>
// //               </div>
// //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// //                 <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// //                 <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria premium sanitary fittings. CPVC pipes with leak-proof joints and concealed piping.</p></div>
// //               </div>
// //             </div>

// //             <div className="relative h-full min-h-[500px] w-full hidden lg:flex flex-col items-center justify-center gap-6">
// //               <div className="w-48 h-48 rounded-full bg-[#d9a406]/10 flex items-center justify-center border-4 border-[#d9a406]/20">
// //                 <ShieldCheck className="w-24 h-24 text-[#d9a406]/60" strokeWidth={1} />
// //               </div>
// //               <p className="text-center text-gray-500 text-sm font-bold tracking-widest uppercase">No shortcuts.<br/>No compromise.<br/>Just quality.</p>
// //             </div>

// //             <div className="space-y-0">
// //               <div className="flex gap-5 py-6 border-b border-[#333]">
// //                 <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// //                 <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">Living & bedroom: 600mm × 600mm vitrified floor tiles. Bathroom: 300mm × 450mm anti-skid ceramic tiles.</p></div>
// //               </div>
// //               <div className="flex gap-5 py-6 border-b border-[#333]">
// //                 <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// //                 <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">Interior: Tractor emulsion finish. Exterior: Asian Paint or Nippon Paint double-coating for durability.</p></div>
// //               </div>
// //               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
// //                 <div className="shrink-0 pt-1"><ShieldCheck className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
// //                 <div><h4 className="font-bold text-lg uppercase mb-1">Eco & Security</h4><p className="text-gray-400 text-sm leading-relaxed">CCTV at entrances. Video door phones. Deep borewell with STP. 100% power backup. Solar-lit common areas.</p></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ LOCATION ════════ */}
// //       <section className="py-24 bg-[#0a0a0a]" id="location">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
// //             <div>
// //               <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406] font-bold tracking-widest uppercase">Strategically Located</Badge>
// //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406] font-serif italic font-light">Road</span></h2>
// //               <p className="text-gray-400 mb-10 text-lg leading-relaxed">Set in the sought-after neighbourhood of Sarjapura, balancing pulse and peace — keeping you close to everything, yet comfortably away.</p>
              
// //               <div className="space-y-8">
// //                 <div className="border-l-2 border-[#333] pl-6 relative">
// //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
// //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#d9a406]"/> Educational Institutes</h4>
// //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// //                     <span className="flex justify-between">Endeavour Int. <strong className="text-[#d9a406]">1 Min</strong></span>
// //                     <span className="flex justify-between">Champion Int. <strong className="text-[#d9a406]">3 Min</strong></span>
// //                     <span className="flex justify-between">Azim Premji Uni <strong className="text-[#d9a406]">10 Min</strong></span>
// //                     <span className="flex justify-between">Greenwood High <strong className="text-[#d9a406]">25 Min</strong></span>
// //                     <span className="flex justify-between">DPS <strong className="text-[#d9a406]">30 Min</strong></span>
// //                     <span className="flex justify-between">Christ College <strong className="text-[#d9a406]">45 Min</strong></span>
// //                   </div>
// //                 </div>

// //                 <div className="border-l-2 border-[#333] pl-6 relative">
// //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#d9a406]"/> IT Companies</h4>
// //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// //                     <span className="flex justify-between">Infosys HQ <strong className="text-[#d9a406]">5 Min</strong></span>
// //                     <span className="flex justify-between">Wipro <strong className="text-[#d9a406]">30 Min</strong></span>
// //                     <span className="flex justify-between">RGA Tech Park <strong className="text-[#d9a406]">30 Min</strong></span>
// //                     <span className="flex justify-between">RMZ Ecoworld <strong className="text-[#d9a406]">40 Min</strong></span>
// //                   </div>
// //                 </div>

// //                 <div className="border-l-2 border-[#333] pl-6 relative">
// //                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
// //                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Hospital className="w-5 h-5 text-[#d9a406]"/> Hospitals & Shopping</h4>
// //                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
// //                     <span className="flex justify-between">Spandana Hosp <strong className="text-[#d9a406]">15 Min</strong></span>
// //                     <span className="flex justify-between">Sparsh Hosp <strong className="text-[#d9a406]">30 Min</strong></span>
// //                     <span className="flex justify-between">Manipal Hosp <strong className="text-[#d9a406]">50 Min</strong></span>
// //                     <span className="flex justify-between">D-Mart <strong className="text-[#d9a406]">15 Min</strong></span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="relative flex flex-col gap-6">
// //               <div className="bg-[#111] border border-white/10 p-2 rounded-2xl">
// //                 <div className="w-full h-[400px] bg-black rounded-xl overflow-hidden relative">
// //                   <iframe 
// //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.35412497676!2d77.68465053744655!3d12.857675276326083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a50595a12c0b084!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453412345!5m2!1sen!2sin" 
// //                     width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
// //                     className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
// //                   />
// //                   <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] shadow-xl pointer-events-none">
// //                     <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
// //                     <p className="text-white text-sm font-bold">Mugulur Village, Sarjapura</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-gradient-to-r from-[#d9a406] to-[#b08505] p-8 rounded-2xl shadow-xl">
// //                 <h3 className="text-2xl text-black font-bold mb-1">The Next Big Address</h3>
// //                 <p className="text-sm text-black/80 font-medium mb-5">Where Sarjapura's Progress Finds Homes</p>
// //                 <div className="space-y-3">
// //                   {[
// //                     { icon: "🛣️", title: "Proposed STRR", desc: "Satellite Town Ring Road linking hubs" },
// //                     { icon: "🏗️", title: "SWIFT City SEZ", desc: "Massive 1,000-Acre govt IT/Startup SEZ" },
// //                     { icon: "🚇", title: "Metro Phase 3A", desc: "Red Line from Sarjapura to Hebbal" },
// //                   ].map(({ icon, title, desc }) => (
// //                     <div key={title} className="flex gap-3 items-start bg-black/10 p-3 rounded-xl">
// //                       <span className="text-xl shrink-0">{icon}</span>
// //                       <div>
// //                         <span className="text-sm font-bold text-black block">{title}</span>
// //                         <span className="text-xs text-black/80">{desc}</span>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ AWARDS & TRUST ════════ */}
// // {/* ════════ AWARDS & TRUST ════════ */}
// //       <section className="py-24 bg-black border-t border-[#333]">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="grid lg:grid-cols-2 gap-16 items-center">
            
// //             {/* Left Side: Text and Cards (Unchanged) */}
// //             <div>
// //               <div className="mb-12">
// //                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awarded for <span className="text-[#d9a406] font-serif italic">Trust & Quality</span></h2>
// //                 <p className="text-gray-400">Recognised by India's leading real estate and business bodies, 2023–2026.</p>
// //               </div>
// // <div className="grid sm:grid-cols-2 gap-6">
// //                 {[
// //                   { yr: "2023", award: "Best Property Award of the Year" },
// //                   { yr: "2024", award: "Excellence in Amenities Premium" },
// //                   { yr: "2025", award: "Best Debutant Developer of the Year" },
// //                   { yr: "2026", award: "Emerging Developer of the Year" },
// //                 ].map(({ yr, award }) => (
// //                   <Card key={award} className="bg-[#111] border-white/5 p-6 text-center hover:border-[#d9a406]/50 transition-colors rounded-2xl group">
// //                     <div className="font-serif text-3xl text-[#d9a406] mb-3 group-hover:scale-110 transition-transform">{yr}</div>
// //                     <div className="text-xs font-bold text-white leading-tight">{award}</div>
// //                   </Card>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Right Side: New Image Grid containing all the client's images */}
// //             <div className="relative">
// //               <div className="absolute -inset-4 bg-[#d9a406]/20 rounded-3xl blur-2xl"></div>
// //               <div className="relative z-10 grid grid-cols-2 gap-4">
// //                 {[
// //                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/awardhome(1).jpg.jpeg",
// //                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/rrl-award.jpeg",
// //                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/Award1.jpeg?updatedAt=1767712378645",
// //                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.51%20PM.jpeg",
// //                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.50%20PM.jpeg",
// //                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%202.08.15%20PM.jpeg"
// //                 ].map((img, idx) => (
// //                   <img 
// //                     key={idx} 
// //                     src={img} 
// //                     alt={`RRL Award ${idx + 1}`} 
// //                     className="rounded-2xl w-full h-40 md:h-56 object-cover shadow-2xl border border-[#333] hover:border-[#d9a406] transition-colors" 
// //                   />
// //                 ))}
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ HAPPY CLIENTS ════════ */}
// //       <HappyClientsGallery />

// //       {/* ════════ TESTIMONIALS ════════ */}
// //       <Testimonials />

// //       {/* ════════ OTHER RRL PROJECTS ════════ */}
// //       <section className="py-24 bg-[#0a0a0a]">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <h2 className="text-4xl font-bold text-white mb-16 text-center">
// //             Other <span className="text-[#d9a406] font-serif italic">RRL Projects</span>
// //           </h2>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
// //             {otherProjectsData.map((project, index) => (
// //               <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group h-full">
// //                 <div className="bg-[#111] rounded-2xl p-6 flex flex-col border border-white/5 hover:border-[#d9a406]/50 transition-all shadow-lg h-full">
// //                   <div className="mb-4">
// //                     <span className={`text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider ${
// //                       project.status === "Completed" ? "bg-[#064e3b] text-[#c9a84c]" :
// //                       project.status === "Ready to Move" ? "bg-[#d9a406] text-black" :
// //                       "bg-blue-900 text-blue-200"
// //                     }`}>
// //                       {project.status}
// //                     </span>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-white group-hover:text-[#d9a406] transition-colors mb-3">
// //                     {project.name}
// //                   </h3>
// //                   <p className="text-sm text-gray-400 leading-relaxed mb-6">{project.desc}</p>
// //                   <div className="mt-auto">
// //                     <Button className="w-full bg-white/5 hover:bg-[#d9a406] text-white hover:text-black border border-white/10 transition-colors text-xs uppercase tracking-widest font-bold">
// //                       View Details
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
// //              {[
// //                { n: 10, suf: "+", label: "Years of Expertise" },
// //                { n: 1000, suf: "'s", label: "Happy Families" },
// //                { n: 4, suf: "", label: "Completed Projects" },
// //                { n: 100, suf: "%", label: "On-Time Delivery" },
// //              ].map(({ n, suf, label }) => (
// //                <div key={label} className="bg-black rounded-2xl border border-white/5 text-center py-10 px-6">
// //                  <div className="font-serif text-5xl font-light text-[#d9a406]">
// //                    <AnimatedCounter end={n} suffix={suf} />
// //                  </div>
// //                  <div className="text-xs font-bold tracking-[.18em] uppercase text-gray-500 mt-4">{label}</div>
// //                </div>
// //              ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ BROCHURE CTA SECTION ════════ */}
// //       <section className="py-24 bg-black border-t border-[#333]">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="relative rounded-3xl overflow-hidden border border-[#d9a406]/30 bg-gradient-to-br from-[#111] via-[#1a1810] to-[#111] shadow-[0_0_50px_rgba(217,164,6,0.05)] py-20 px-6 text-center flex flex-col items-center justify-center">
            
// //             <span className="text-[#d9a406] text-xs font-bold tracking-[.25em] uppercase px-4 py-1.5 border border-[#d9a406]/50 bg-[#d9a406]/10 rounded-full mb-8">Limited Inventory</span>
// //             <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
// //               GET COST SHEET & <span className="text-[#d9a406] italic">BROCHURE</span>
// //             </h2>
// //             <div className="w-24 h-1 bg-[#d9a406] rounded-full mb-8" />
// //             <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed mb-10">
// //               Join over 150 early registrants who have already secured their preferred units at pre-launch prices starting at ₹46 Lakhs.
// //             </p>
// //             <Button onClick={() => setIsModalOpen(true)} className="bg-[#d9a406] hover:bg-white text-black px-12 py-7 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all transform hover:-translate-y-1">
// //               Download Now
// //             </Button>
            
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════ FOOTER ════════ */}
// //       <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
// //          <div className="container mx-auto px-4 max-w-[1280px]">
// //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// //               <div>
// //                 <h3 className="text-2xl font-bold text-white tracking-tighter mb-4">RRL <span className="text-[#d9a406]">NC-216</span></h3>
// //                 <p className="text-sm text-gray-400 leading-relaxed mb-6">Premium 1, 2 & 3 BHK apartments near Sarjapura. RERA & BMRDA approved. East & North facing. G+3 boutique living with 42.47% UDS.</p>
// //                 <div className="space-y-3">
// //                   <a href="tel:+918494966966" className="flex items-center gap-3 text-[#d9a406] font-bold hover:text-white transition-colors"><Phone className="w-5 h-5"/> 84 94 966 966</a>
// //                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><Mail className="w-5 h-5"/> enquiry@rrlbuildersanddevelopers.com</a>
// //                 </div>
// //               </div>

// //               <div>
// //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Quick Links</h4>
// //                 <ul className="space-y-4 text-sm text-gray-400">
// //                   {["Overview", "Amenities", "Floor Plans", "Location Map"].map(l => (
// //                     <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#d9a406] transition-colors">{l}</a></li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div>
// //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Configurations</h4>
// //                 <div className="space-y-4">
// //                   {[
// //                     { t: "1 BHK", r: "655 Sq.Ft", u: "1 Unit" },
// //                     { t: "2 BHK Versatile", r: "835–1,055 Sq.Ft", u: "33 Units" },
// //                     { t: "3 BHK Executive", r: "1,035–1,215 Sq.Ft", u: "18 Units" },
// //                   ].map(({ t, r, u }) => (
// //                     <div key={t} className="border-b border-white/5 pb-3">
// //                       <div className="text-sm font-bold text-white">{t}</div>
// //                       <div className="text-xs text-[#d9a406] mt-1">{r}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div>
// //                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Address</h4>
// //                 <address className="not-italic text-sm text-gray-400 leading-relaxed mb-6">
// //                   <strong className="text-white block mb-1">Project Site:</strong>
// //                   SY No. 123, 124, Mugulur Village,<br/>
// //                   Off Sarjapura Road, Near Endeavours<br/>
// //                   International School, Bengaluru – 562 125.<br/>
// //                 </address>
// //                 <div className="text-xs text-gray-500 tracking-wider uppercase font-semibold mb-2">RERA Registration</div>
// //                 <div className="text-sm text-gray-400">PRM/KA/RERA/XXXX</div>
// //               </div>
// //             </div>

// //             <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
// //               <p>RRL Builders & Developers © {new Date().getFullYear()}. All rights reserved.</p>
// //               <p className="text-center md:text-right max-w-2xl">This brochure is only conceptual and not a legal offering. The promoters reserve all rights to add/delete/alter details without prior notice.</p>
// //             </div>
// //          </div>
// //       </footer>

// //       {/* ════════ GLOBAL ENQUIRY MODAL ════════ */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div 
// //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //             onClick={() => setIsModalOpen(false)}
// //           >
// //             <motion.div 
// //               className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// //               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

// //               {state.succeeded ? (
// //                 <div className="flex flex-col items-center justify-center py-6 text-center">
// //                   <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
// //                   <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
// //                   <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
// //                   <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full">Close</Button>
// //                 </div>
// //               ) : (
// //                 <>
// //                   <div className="text-center mb-8">
// //                     <h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3>
// //                     <p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p>
// //                   </div>
// //                   <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Global Modal")} className="space-y-4">
// //                     <div className="space-y-2">
// //                       <input name="name" type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
// //                     </div>
// //                     <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4 rounded-lg shadow-lg">
// //                       {state.submitting ? "Sending..." : "Get Priority Access"}
// //                     </Button>
// //                   </form>
// //                 </>
// //               )}
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </main>
// //   )
// // }

// "use client"

// import React, { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { motion, AnimatePresence, Variants } from "framer-motion"
// import {
//   Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck,
//   Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee,
//   Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User,
//   Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, BrickWall, 
//   PaintRoller, AppWindow, Droplets, Leaf, Frame, DoorOpen, Bath, Wrench, BatteryCharging,
//   LayoutDashboard, BookOpen, Music, Utensils, Table2, Tv, Flower2,
//   Train, ShoppingCart, Hospital, Map, Briefcase, Megaphone
// } from "lucide-react"
// import { useForm, ValidationError } from '@formspree/react'
// import Image from "next/image";
// // UI Component Imports
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

// // --- DATA FROM NATURE CRUST (UPDATED TO MATCH BROCHURE) ---
// const floorPlansData = [
//   {
//     id: "1BHK",
//     type: "1 BHK",
//     facing: "East",
//     area: "655",
//     tag: "Only 1 available unit per floor. Total 4 units",
//     desc: "A thoughtfully designed compact sanctuary with east-facing windows for sunrise light and natural ventilation in every room.",
//     dims: { living: "10'0\" × 14'0\"", kitchen: "7'0\" × 7'0\"", masterBed: "11'0\" × 11'0\"", bath: "5'0\" × 8'0\"", balcony: "4'6\" × 7'0\"" },
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
//   },
//   {
//     id: "2BHK",
//     type: "2 BHK",
//     facing: "East & North",
//     area: "835 - 1,055",
//     tag: "33 Units · 10 Unique Layouts",
//     desc: "The 'Versatile' Series — 10 layouts for all generations. Whether you're a young couple or a growing family, there's a home here for you.",
//     dims: { livingDining: "11'0\" × 16'0\"", kitchen: "8'0\" × 8'0\"", masterBed: "12'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", balcony: "5'0\" × 8'0\"" },
//     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
//   },
//   {
//     id: "3BHK",
//     type: "3 BHK",
//     facing: "Corner Units",
//     area: "1,035 - 1,215",
//     tag: "18 Premium Corner Homes",
//     desc: "The 'Executive' Series — panoramic sunrise views, cross ventilation & corner layouts up to 1,215 Sq.Ft. These aren't just big homes — they're the best homes in the building.",
//     dims: { living: "16'0\" × 12'0\"", dining: "12'0\" × 10'0\"", kitchen: "10'0\" × 8'0\"", masterBed: "13'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", bed3: "10'0\" × 10'0\"" },
//     image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85"
//   }
// ]

// const unitBreakdown2BHK = [
//   { area: "835", units: 1, nums: "48" },
//   { area: "850", units: 1, nums: "47" },
//   { area: "875", units: 7, nums: "7,6,23,24,25,26,27" },
//   { area: "890", units: 9, nums: "16,17,18,19,20,30,31,32,33" },
//   { area: "895", units: 3, nums: "38,40,41" },
//   { area: "910", units: 7, nums: "11,3,29,34,44,45,37" },
//   { area: "930", units: 2, nums: "14,2" },
//   { area: "935", units: 1, nums: "8" },
//   { area: "950", units: 1, nums: "9" },
//   { area: "1055", units: 1, nums: "22" },
// ]

// const unitBreakdown3BHK = [
//   { area: "1035", units: 1, nums: "49" },
//   { area: "1090", units: 1, nums: "50" },
//   { area: "1100", units: 1, nums: "51" },
//   { area: "1110", units: 1, nums: "43" },
//   { area: "1115", units: 2, nums: "1, 15" },
//   { area: "1120", units: 2, nums: "10, 12" },
//   { area: "1130", units: 4, nums: "4, 21, 35, 46" },
//   { area: "1135", units: 2, nums: "28, 52" },
//   { area: "1140", units: 1, nums: "36" },
//   { area: "1155", units: 1, nums: "5" },
//   { area: "1175", units: 1, nums: "42" },
//   { area: "1215", units: 1, nums: "13" },
// ]

// const otherProjectsData = [
//   { name: "RRL Nature Wood", status: "Completed", desc: "Every corner reflects simplicity and elegance", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502?w=600&q=85" },
//   { name: "RRL Palacio", status: "Completed", desc: "Ready-to-move 3 BHK furnished/semi-furnished · 1,400–1,540 SBA", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531?w=600&q=85" },
//   { name: "RRL Palm Altezze", status: "Ongoing", desc: "2 & 3 BHK Premium · G+23 · 92% Open Space · 50% UDS", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863?w=600&q=85" },
//   { name: "RRL Towers", status: "Completed", desc: "Landmark commercial and residential development", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451?w=600&q=85" },
//   { name: "RRL Complex", status: "Completed", desc: "Premium apartment project", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360?w=600&q=85" },
// ]

// // --- ANIMATION VARIANTS ---
// const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
// const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
// const slideInVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }

// // --- HELPER COMPONENTS ---
// const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number; }) => {
//   const [count, setCount] = useState(0)
//   const [hasAnimated, setHasAnimated] = useState(false)
//   const ref = React.useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           setHasAnimated(true)
//           let startTime: number | null = null
//           const step = (timestamp: number) => {
//             if (!startTime) startTime = timestamp
//             const progress = Math.min((timestamp - startTime) / duration, 1)
//             setCount(progress * end)
//             if (progress < 1) window.requestAnimationFrame(step)
//           }
//           window.requestAnimationFrame(step)
//         }
//       },
//       { threshold: 0.5 }
//     )
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [end, duration, hasAnimated])

//   return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
// }

// function EOICountdown() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const target = new Date("2026-07-31T23:59:59").getTime()
//     const interval = setInterval(() => {
//       const now = new Date().getTime()
//       const distance = target - now
//       if (distance < 0) { clearInterval(interval); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       })
//     }, 1000)
//     return () => clearInterval(interval)
//   }, [])

//   if (!mounted) return null

//   return (
//     <div className="mt-8 mb-6 w-full">
//       <div className="text-[10px] text-[#d9a406] font-bold tracking-[.15em] uppercase mb-3 flex items-center gap-2">
//         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
//         EOI Ends In (July 31, 2026)
//       </div>
      
//       <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
//         {[
//           { label: "Days", value: timeLeft.days }, 
//           { label: "Hours", value: timeLeft.hours }, 
//           { label: "Mins", value: timeLeft.minutes }, 
//           { label: "Secs", value: timeLeft.seconds }
//         ].map((item, i) => (
//           <div key={i} className="flex flex-col items-center justify-center bg-[#111] border border-[#d9a406]/30 p-2 sm:px-4 sm:py-3 rounded-lg shadow-[0_0_15px_rgba(217,164,6,0.1)]">
//             <span className="font-serif text-xl sm:text-3xl text-[#fcd34d] font-bold leading-none">
//               {String(item.value).padStart(2, '0')}
//             </span>
//             <span className="text-[8px] sm:text-[9px] font-bold tracking-[.2em] uppercase text-gray-500 mt-1 sm:mt-1.5">
//               {item.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function HappyClientsGallery() {
//   const clientImages = [
//     "https://ik.imagekit.io/j0xzq9pns/tr:w-800,c-at_max,f-auto/happy%20clients/happy-clients%20(4).jpeg",
//     "https://ik.imagekit.io/j0xzq9pns/tr:w-800,c-at_max,f-auto/happy%20clients/happy-clients%20(1).jpeg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560219/20250731_121250_nq8l6b.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560213/20250808_115517_vitgx0.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560198/20250728_164509_qpnvtc.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560193/20250801_121200_sorava.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
//     "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560033/20250805_115305_qoouj2.jpg",
//   ]

//   return (
//     <section className="py-24 bg-neutral-50 overflow-hidden relative">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

//       <div className="container mx-auto px-4 mb-16 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
//             Client Stories
//           </div>
//           <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
//             Smiles We've <span className="text-gold-500">Created</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
//             Join our growing family of satisfied homeowners who found their dream home with RRL.
//           </p>
//         </motion.div>
//       </div>

//       <div className="relative w-full overflow-hidden py-10">
//         <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
//         <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-neutral-50 to-transparent" />

//         <div className="animate-scroll gap-4 sm:gap-6 md:gap-8 pl-4 sm:pl-6 md:pl-8">
//           {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
//             <div
//               key={i}
//               className="group relative
//                 h-[240px] w-[180px]
//                 sm:h-[280px] sm:w-[200px]
//                 md:h-[360px] md:w-[260px]
//                 lg:h-[400px] lg:w-[300px]
//                 flex-shrink-0 cursor-pointer"
//             >
//               <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
//                 <div className="relative h-full w-full">
//                   <Image
//                     src={img}
//                     alt={`Happy Client ${i}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     unoptimized
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
//                   <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
//                     <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                       <div className="h-0.5 w-6 bg-gold-400" />
//                       <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
//                         Handover
//                       </span>
//                     </div>
//                     <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-playfair">
//                       RRL Family
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function Testimonials() {
//   const testimonialData = [
//     { type: "text", name: "Anusha V", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
//     { type: "text", name: "Rama Krishna Kanupuri", role: "Happy Home Buyer", location: "RRL Nature Woods", rating: 5, testimonial: "Best apartments with good amenities. Build quality is excellent. Ram and Lakshman are genuine, humble and have great knowledge in construction. Highly recommend for a visit!" },
//     { type: "video", name: "VideoTestimonial1", videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
//     { type: "text", name: "Kishore Babu", role: "Happy Home Buyer", location: "RRL Palm Altezze", rating: 5, testimonial: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym, open barbeque facing swimming pool." },
//     { type: "text", name: "Samta Goyat", role: "Happy Home Buyer", location: "RRL Nature Woods", rating: 5, testimonial: "Construction quality is top-notch. Peaceful location away from busy areas. Ram and Lakshman made the process smooth with no fake promises." },
//     { type: "video", name: "VideoTestimonial2", videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
//   ]

//   return (
//     <section className="relative py-24 overflow-hidden border-t border-[#333] bg-[#0a0a0a]">
//       <div className="container mx-auto px-4 max-w-[1280px]">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hear From Our <span className="text-[#d9a406] font-serif italic">Clients</span></h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real stories from families who found their dream home with RRL.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonialData.map((item, index) =>
//             item.type === "video" ? (
//               <div key={index} className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-black aspect-video md:aspect-[4/3] lg:aspect-[4/3]">
//                 <iframe src={item.videoUrl} title={item.name} className="w-full h-full" allowFullScreen />
//               </div>
//             ) : (
//               <div key={index} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/30 transition-all rounded-3xl p-6 md:p-8 shadow-xl flex flex-col h-full group">
//                 <div className="flex mb-4">{[...Array(item.rating)].map((_, i) => (<span key={i} className="text-[#d9a406]">★</span>))}</div>
//                 <p className="text-gray-300 italic text-sm md:text-base leading-relaxed mb-6">“{item.testimonial}”</p>
//                 <div className="mt-auto border-t border-white/10 pt-4">
//                   <h4 className="font-bold text-white">{item.name}</h4>
//                   <p className="text-[#d9a406] text-sm font-semibold">{item.role}</p>
//                   <p className="text-gray-500 text-xs">{item.location}</p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ════════ MAIN PAGE COMPONENT ════════
// export default function Nc216Page() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const router = useRouter()
//   const [state, handleSubmit] = useForm("mkonkbkk")

//   // Dual Submit Logic (CRM + Formspree)
//   const handleDualSubmit = async (e: React.FormEvent<HTMLFormElement>, customProjectName = "RRL NC-216") => {
//     e.preventDefault()
//     const form = e.currentTarget
//     const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
//     const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
//     const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    
//     fetch('/enquire-now-api.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: customProjectName }),
//     }).catch(() => {})
    
//     await handleSubmit(e)
//   }

//   useEffect(() => {
//     if (state.succeeded) {
//       setTimeout(() => { setIsModalOpen(false) }, 3000)
//     }
//   }, [state.succeeded])

//   return (
//     <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black font-sans overflow-x-hidden">
      

//       {/* ════════ HERO IMAGE BANNER ════════ */}
// <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
        
//         {/* MOBILE HERO (400 × 300) */}
//         <div className="block md:hidden">
//           <div className="relative w-full aspect-[4/3] overflow-hidden">
//             <img
//               src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
//               alt="RRL Hero Banner Mobile"
//               className="w-full h-full object-contain"
//               loading="eager"
//             />
//           </div>
//         </div>

//         {/* DESKTOP HERO */}
//         <div className="hidden md:block w-full">
//           <motion.div
//             initial={{ scale: 1.1, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
//           >
//             <img
//               src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
//               alt="RRL Hero Banner Desktop"
//               loading="eager"
//               className="w-full h-auto object-contain"
//             />
//           </motion.div>
//         </div>
        
//       </section>


//       {/* ════════ HERO CONTENT & FORM ════════ */}
//       <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-12 pb-12">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
//                 <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm font-bold uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
//                 <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Sarjapura, Bengaluru</Badge>
//               </motion.div>

//               {/* Tagline updated to match brochure */}
//               <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
//                 Why Rent a home? <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d] italic font-serif font-light">When you can Own it</span>
//               </motion.h1>

//               <motion.div variants={fadeIn} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed space-y-4">
//                 <p>Welcome to <strong className="text-white font-bold">RRL NC-216</strong> — a clear green lifestyle near Sarjapura. Zero compromise living with 100% East & North facing 1, 2 & 3 BHK homes on S+G+3 boutique blocks.</p>
//                 <p className="text-3xl font-bold text-white mt-4">Starting <span className="text-[#d9a406]">₹46L – ₹98L Onwards</span></p>
//               </motion.div>

//               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
//                 {["RERA & BMRDA Approved", "100% Vastu Compliant", "42.47% UDS", "S+G+3 Boutique Living"].map(b => (
//                   <span key={b} className="border border-[#d9a406]/50 text-[#fcd34d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
//                     {b}
//                   </span>
//                 ))}
//               </motion.div>

//               <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4 border-t border-white/10 overflow-hidden">
//                 <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase shrink-0">Awarded</span>
//                 <div className="flex-1 overflow-hidden whitespace-nowrap">
//                    <div className="inline-block animate-[marquee_30s_linear_infinite] text-[11px] text-gray-400 font-bold">
//                      🏆 Property Award of the Year 2023     🏆 Global Real Estate Brand Awards 2023     🏆 Excellence in Amenities Premium 2024     🏆 Time Real Estate Icon Awards 2025     🏆 Emerging Builder of the year by TOI 2026
//                    </div>
//                 </div>
//               </motion.div>
//             </motion.div>

// <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md mx-auto lg:ml-auto">
//    <Card className="bg-[#111] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden rounded-2xl">
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>

//       {state.succeeded ? (
//          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
//             <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
//             <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
//             <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
//          </div>
//       ) : (
//         <div className="p-4 sm:p-8">
//           <div className="mb-4">
//             <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9a406]"/> Register Interest</h3>
//             <p className="text-[#d9a406] text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-2">Get Guaranteed Pre-Launch Pricing</p>
//           </div>

//           <div className="w-full overflow-hidden mb-6">
//             <EOICountdown />
//           </div>

//           <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Hero Enquiry")} className="space-y-4">
//             <div className="relative">
//                 <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                 <input aria-label="Full Name" name="name" type="text" placeholder="Full Name *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
//             </div>
//             <div className="relative">
//                 <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                 <input aria-label="Phone Number" name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
//             </div>
//             <div className="relative">
//                 <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                 <input aria-label="Email Address" name="email" type="email" placeholder="Email Address *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
//             </div>
//             <select aria-label="Interested In" name="config" required className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-gray-400 focus:text-white focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm appearance-none cursor-pointer">
//               <option value="">Interested In...</option>
//               <option>1 BHK — 655 Sq.Ft (Only 1 Unit)</option>
//               <option>2 BHK — 835–1,055 Sq.Ft (33 Units)</option>
//               <option>3 BHK — 1,035–1,215 Sq.Ft (18 Units)</option>
//             </select>
//             <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm uppercase tracking-widest h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all rounded-lg mt-2">
//               {state.submitting ? "Processing..." : "Get Cost Sheet & Details →"}
//             </Button>
//           </form>
//         </div>
//       )}
//    </Card>
// </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ════════ PROJECT GLANCE ════════ */}
//       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden border-t border-white/5">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-transparent to-transparent"></div>
//         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
//             {[
//               { label: "Land Area", value: 85990, suffix: " Sq.Ft", icon: MapPin },
//               { label: "Total Units", value: 208, suffix: " Homes", icon: Building2 },
//               { label: "Starting Size", value: 655, suffix: " Sq.Ft", icon: Maximize2 },
//               { label: "Structure", value: 4, suffix: " Wings", icon: Building2, isText: true, textVal: "S+G+3 Wings" },
//             ].map((stat, index) => (
//               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
//                 <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#d9a406]/50 transition-all duration-500 h-full">
//                   <div className="w-14 h-14 bg-[#d9a406]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9a406]/20 transition-colors">
//                     <stat.icon className="w-7 h-7 text-[#d9a406]" />
//                   </div>
//                   <div className="text-3xl md:text-4xl font-bold text-[#d9a406] mb-2">
//                     {stat.isText ? <span>{stat.textVal}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
//                   </div>
//                   <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
//                   <div className="absolute inset-0 rounded-2xl bg-[#d9a406]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════ EOI BENEFITS ════════ */}
//       <section className="py-20 bg-[#0a0a0a] border-b border-white/5" id="eoi">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Expression of Interest <span className="text-[#d9a406] font-serif italic">(EOI) is Open</span></h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Be among the first to secure your dream home at RRL NC-216. By submitting your EOI, you gain priority access to our exclusive pre-launch inventory.</p>
//           </div>
//           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             {[
//               { icon: Star, title: "Priority Unit Selection", desc: "Choose your preferred floor & facing before public launch." },
//               { icon: Award, title: "Lowest Guaranteed Price", desc: "Pre-launch pricing locked in safely and securely." },
//               { icon: Zap, title: "Launch Day Offers", desc: "Exclusive access to special upgrades and launch discounts." },
//               { icon: ShieldCheck, title: "100% Refundable", desc: "Your EOI token is fully refundable without questions." }
//             ].map((item, idx) => (
//               <motion.div key={idx} variants={fadeIn} className="group">
//                 <Card className="bg-[#111] border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden rounded-2xl">
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9a406]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
//                   <item.icon className="w-10 h-10 text-[#d9a406] mb-4" />
//                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ════════ OVERVIEW & UDS ════════ */}
//       <section id="overview" className="py-24 bg-black text-white overflow-hidden relative">
//         <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            
//             <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block mb-4">Ownership Advantage</span>
//             <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
//               You Own the <span className="text-[#d9a406]">Land Too.</span>
//             </h2>
            
//             <p className="text-lg text-gray-300 leading-relaxed mb-12">
//               Most apartments give you walls. We give you land. RRL NC-216 is a boutique residential enclave set on 85,990 Sq.Ft. Designed as S+G+3 blocks for low-density, congestion-free living.
//             </p>

//             <div className="p-8 bg-gradient-to-r from-[#111] via-[#1a1810] to-[#111] border border-[#d9a406]/30 rounded-3xl flex flex-col sm:flex-row items-center justify-center gap-8 shadow-[0_0_30px_rgba(217,164,6,0.05)] mb-12">
//               <div className="font-serif text-6xl md:text-7xl font-light text-[#fcd34d]">42.47%</div>
//               <div className="text-center sm:text-left">
//                 <div className="text-xl font-bold text-white uppercase tracking-wider mb-2">Undivided Share (UDS)</div>
//                 <div className="text-sm text-gray-400 max-w-sm">Reserved exclusively for homeowners — ensuring a real, legal share of the ground beneath your home for superior asset appreciation.</div>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {[
//                 "100% East & North Facing",
//                 "RERA & BMRDA Approved",
//                 "All Vastu Compliant Homes",
//                 "S+G+3 Boutique Living"
//               ].map(f => (
//                 <div key={f} className="flex flex-col items-center gap-3 bg-[#111] p-5 border border-white/5 rounded-2xl">
//                   <ShieldCheck className="w-6 h-6 text-[#d9a406] shrink-0" />
//                   <span className="text-xs font-bold text-gray-200 uppercase tracking-wide">{f}</span>
//                 </div>
//               ))}
//             </div>

//           </motion.div>
//         </div>
//       </section>

//       {/* ════════ MASTER PLAN ════════ */}
//       <section className="py-24 bg-[#0a0a0a] border-t border-[#333]">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center space-y-8">
            
//             <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block">Master Plan</span>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
//               Your Dream Home <br /> <span className="text-[#d9a406] italic">Awaits</span>
//             </h2>
//             <div className="w-24 h-1 bg-[#d9a406] rounded-full mx-auto" />
            
//             <p className="text-xl text-gray-400 leading-relaxed pt-4">
//               4 boutique S+G+3 wings spread across 85,990 Sq.Ft with generous open spaces, landscaped gardens, community amenities and tree-lined pathways.
//             </p>
//             <p className="text-[#d9a406] font-bold tracking-widest uppercase text-sm">East & North facing for every single unit.</p>
            
//           </motion.div>
//         </div>
//       </section>

//       {/* ════════ AMENITIES ════════ */}
//       <section id="amenities" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
//         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
//           <div className="mb-16 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than a Home. <span className="text-[#d9a406] font-serif italic">A Community.</span></h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">Step outside and find everything you need — pools, parks, a gym, games and more. All within your campus. Your weekend is sorted.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//             {[
//               { icon: Waves, title: "Swim & Stay Fit", desc: "Adult pool + kid's pool for safe splashing. Outdoor & indoor gym." },
//               { icon: Trees, title: "Walk, Play, Breathe", desc: "A natural park right at your doorstep. Curated landscaping." },
//               { icon: Music, title: "Celebrate Together", desc: "Multipurpose hall for birthdays, anniversaries and events." },
//               { icon: Zap, title: "The Essentials", desc: "High-speed lifts · In-house STP · 100% power backup · Solar." },
//               { icon: Gamepad2, title: "Game On", desc: "Table tennis, carom board, chess & indoor games." },
//               { icon: Building2, title: "Smart Parking", desc: "Dedicated covered parking with visitor management." },
//               { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV at every entrance and common area. Always watching." },
//               { icon: Droplets, title: "Water Supply", desc: "Deep borewell with overhead tanks and underground sumps." },
//             ].map((item, i) => (
//               <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#161616] transition-all group flex flex-col items-center text-center">
//                 <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)] mb-4">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <span className="text-white font-bold group-hover:text-[#d9a406] text-lg mb-2">{item.title}</span>
//                 <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
//               </motion.div>
//             ))}
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
//             {[
//               { label: "Swimming Pool", sub: "Infant Pool" },
//               { label: "Party Hall" },
//               { label: "Indoor Gym" },
//               { label: "Children's Play Area" }
//             ].map(({ label, sub }, i) => (
//               <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#111] border border-[#d9a406]/20 rounded-2xl p-6 text-center hover:border-[#d9a406] hover:bg-[#161616] transition-all flex flex-col justify-center min-h-[140px]">
//                 <span className="text-sm md:text-base font-bold text-[#fcd34d] uppercase tracking-wider block mb-2">{label}</span>
//                 {sub && <span className="text-xs text-gray-400 block leading-relaxed">{sub}</span>}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════ FLOOR PLANS & CONFIGURATIONS ════════ */}
//       <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="floorplans">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-transparent to-transparent"></div>
//         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          
//           <div className="text-center mb-16">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//               <span className="inline-block px-4 py-1.5 rounded-full border border-[#d9a406]/50 bg-[#d9a406]/10 text-[#d9a406] text-sm font-bold uppercase tracking-wider mb-6">
//                 Configurations
//               </span>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                 Pick Your Home <span className="text-[#d9a406] font-serif italic">Amongst 52 Units</span>
//               </h2>
//               <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//                 1 BHK, 2 BHK "Versatile" Series, and 3 BHK "Executive" Series
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
//             {floorPlansData.map((config, index) => {
//               const [activeForm, setActiveForm] = useState<string | null>(null)
//               const [isSubmitting, setIsSubmitting] = useState(false)
//               const [isSubmitted, setIsSubmitted] = useState(false)

//               const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault()
//                 setIsSubmitting(true)
//                 await handleDualSubmit(e, `NC 216 - ${config.type} Unlock`)
//                 setIsSubmitted(true)
//                 setIsSubmitting(false)
//                 setActiveForm(null)
//               }

//               return (
//                 <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group relative">
//                   <div className={`absolute inset-0 bg-gradient-to-br from-[#d9a406]/20 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

//                   <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#d9a406]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/5 rounded-bl-full"></div>

//                     <div className="inline-flex flex-wrap items-center gap-2 mb-6">
//                       <span className="px-3 py-1 rounded-full bg-[#d9a406] text-black text-xs font-bold uppercase tracking-wider">
//                         {config.tag}
//                       </span>
//                       <span className="px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
//                         {config.facing}
//                       </span>
//                     </div>

//                     <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#d9a406] transition-colors duration-300">
//                       {config.type}
//                     </h3>
//                     <p className="text-2xl text-gray-400 mb-4">{config.area} Sq.Ft</p>
//                     <p className="text-sm text-gray-500 leading-relaxed mb-6">{config.desc}</p>

//                     <div className="mt-auto pt-4 border-t border-white/10">
//                       {isSubmitted ? (
//                         <div className="text-center py-4">
//                           <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
//                           <p className="text-white font-bold">Blueprint Unlocked!</p>
//                           <p className="text-gray-400 text-sm">Our team will call you within 2 hours.</p>
//                         </div>
//                       ) : activeForm === config.type ? (
//                         <form onSubmit={handleUnlockSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
//                           <div className="relative">
//                             <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
//                             <input name="name" type="text" placeholder="Your Name" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
//                           </div>
//                           <div className="relative">
//                             <Smartphone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
//                             <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
//                           </div>
//                           <div className="relative">
//                             <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
//                             <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
//                           </div>
//                           <div className="flex gap-2">
//                             <button type="button" onClick={() => setActiveForm(null)} className="flex-1 py-3 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">Cancel</button>
//                             <button type="submit" disabled={isSubmitting} className="flex-1 py-3 px-4 rounded-lg bg-[#d9a406] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b08505] transition-colors">
//                               {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Get Details"}
//                             </button>
//                           </div>
//                         </form>
//                       ) : (
//                         <button onClick={() => setActiveForm(config.type)} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a406] to-[#b08505] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,164,6,0.3)] transition-all duration-300 hover:scale-[1.02]">
//                           Unlock Full Blueprint
//                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
//                <div className="bg-[#d9a406] px-6 py-4 flex items-center justify-between">
//                  <span className="font-bold text-black text-sm tracking-wider uppercase">2 BHK 'Versatile' - 10 Variants</span>
//                  <span className="text-xs font-bold text-black/70 bg-black/10 px-3 py-1 rounded-full">Total: 33 Units</span>
//                </div>
//                <div className="p-0">
//                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
//                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
//                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
//                    ))}
//                  </div>
//                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
//                    {unitBreakdown2BHK.map(({ area, units, nums }, idx) => (
//                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
//                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
//                        <span className="text-sm text-gray-300">{units}</span>
//                        <span className="text-xs text-gray-500">{nums}</span>
//                      </div>
//                    ))}
//                  </div>
//                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
//                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 835–1,055 Sq.Ft</span>
//                  </div>
//                </div>
//              </div>

//              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
//                <div className="bg-[#333] px-6 py-4 flex items-center justify-between border-b border-[#d9a406]">
//                  <span className="font-bold text-white text-sm tracking-wider uppercase">3 BHK 'Executive' - 12 Variants</span>
//                  <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">Total: 18 Units</span>
//                </div>
//                <div className="p-0">
//                  <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
//                    {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
//                      <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
//                    ))}
//                  </div>
//                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
//                    {unitBreakdown3BHK.map(({ area, units, nums }, idx) => (
//                      <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
//                        <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
//                        <span className="text-sm text-gray-300">{units}</span>
//                        <span className="text-xs text-gray-500">{nums}</span>
//                      </div>
//                    ))}
//                  </div>
//                  <div className="px-6 py-4 bg-black/50 border-t border-white/10">
//                    <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 1,035–1,215 Sq.Ft · Corner Units</span>
//                  </div>
//                </div>
//              </div>
//           </div>

//         </div>
//       </section>

//       {/* ════════ SPECIFICATIONS ════════ */}
//       <section className="py-24 bg-black text-white border-t border-[#333]">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="mb-16 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium <span className="text-[#d9a406] font-serif italic normal-case">Specifications</span></h2>
//             <p className="text-gray-400 mt-4">No shortcuts. No compromise. Just quality.</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
//             <div className="space-y-0">
//               <div className="flex gap-5 py-6 border-b border-[#333]">
//                 <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
//                 <div><h4 className="font-bold text-lg uppercase mb-1">Structure & Walls</h4><p className="text-gray-400 text-sm leading-relaxed">External walls: 6-inch concrete. Internal walls: 4-inch concrete with 1-inch plastering on both surfaces.</p></div>
//               </div>
//               <div className="flex gap-5 py-6 border-b border-[#333]">
//                 <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
//                 <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Indo-Asian switches throughout. Premium wiring with fire-safe conduits and dedicated earth connections.</p></div>
//               </div>
//               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
//                 <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
//                 <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria premium sanitary fittings. CPVC pipes with leak-proof joints and concealed piping.</p></div>
//               </div>
//             </div>

//             <div className="relative h-full min-h-[500px] w-full hidden lg:flex flex-col items-center justify-center gap-6">
//               <div className="w-48 h-48 rounded-full bg-[#d9a406]/10 flex items-center justify-center border-4 border-[#d9a406]/20">
//                 <ShieldCheck className="w-24 h-24 text-[#d9a406]/60" strokeWidth={1} />
//               </div>
//               <p className="text-center text-gray-500 text-sm font-bold tracking-widest uppercase">No shortcuts.<br/>No compromise.<br/>Just quality.</p>
//             </div>

//             <div className="space-y-0">
//               <div className="flex gap-5 py-6 border-b border-[#333]">
//                 <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
//                 <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">Living & bedroom: 600mm × 600mm vitrified floor tiles. Bathroom: 300mm × 450mm anti-skid ceramic tiles.</p></div>
//               </div>
//               <div className="flex gap-5 py-6 border-b border-[#333]">
//                 <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
//                 <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">Interior: Tractor emulsion finish. Exterior: Asian Paint or Nippon Paint double-coating for durability.</p></div>
//               </div>
//               <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
//                 <div className="shrink-0 pt-1"><ShieldCheck className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
//                 <div><h4 className="font-bold text-lg uppercase mb-1">Eco & Security</h4><p className="text-gray-400 text-sm leading-relaxed">CCTV at entrances. Video door phones. Deep borewell with STP. 100% power backup. Solar-lit common areas.</p></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ════════ LOCATION ════════ */}
//       <section className="py-24 bg-[#0a0a0a]" id="location">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
//             <div>
//               <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406] font-bold tracking-widest uppercase">Strategically Located</Badge>
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406] font-serif italic font-light">Road</span></h2>
//               <p className="text-gray-400 mb-10 text-lg leading-relaxed">Set in the sought-after neighbourhood of Sarjapura, balancing pulse and peace — keeping you close to everything, yet comfortably away.</p>
              
//               <div className="space-y-8">
//                 <div className="border-l-2 border-[#333] pl-6 relative">
//                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
//                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#d9a406]"/> Educational Institutes</h4>
//                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
//                     <span className="flex justify-between">Endeavour Int. <strong className="text-[#d9a406]">1 Min</strong></span>
//                     <span className="flex justify-between">Champion Int. <strong className="text-[#d9a406]">3 Min</strong></span>
//                     <span className="flex justify-between">Azim Premji Uni <strong className="text-[#d9a406]">15 Min</strong></span>
//                     <span className="flex justify-between">Greenwood High <strong className="text-[#d9a406]">25 Min</strong></span>
//                     <span className="flex justify-between">DPS <strong className="text-[#d9a406]">25 Min</strong></span>
//                     <span className="flex justify-between">Christ College <strong className="text-[#d9a406]">20 Min</strong></span>
//                   </div>
//                 </div>

//                 <div className="border-l-2 border-[#333] pl-6 relative">
//                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
//                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#d9a406]"/> IT Companies</h4>
//                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
//                     <span className="flex justify-between">Infosys HQ <strong className="text-[#d9a406]">15 Min</strong></span>
//                     <span className="flex justify-between">Wipro <strong className="text-[#d9a406]">25 Min</strong></span>
//                     <span className="flex justify-between">RGA Tech Park <strong className="text-[#d9a406]">30 Min</strong></span>
//                     <span className="flex justify-between">RMZ Ecoworld <strong className="text-[#d9a406]">45 Min</strong></span>
//                   </div>
//                 </div>

//                 <div className="border-l-2 border-[#333] pl-6 relative">
//                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
//                   <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Hospital className="w-5 h-5 text-[#d9a406]"/> Hospitals & Shopping</h4>
//                   <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
//                     <span className="flex justify-between">Spandana Hosp <strong className="text-[#d9a406]">15 Min</strong></span>
//                     <span className="flex justify-between">Sparsh Hosp <strong className="text-[#d9a406]">30 Min</strong></span>
//                     <span className="flex justify-between">Manipal Hosp <strong className="text-[#d9a406]">35 Min</strong></span>
//                     <span className="flex justify-between">D-Mart <strong className="text-[#d9a406]">10 Min</strong></span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative flex flex-col gap-6">
//               <div className="bg-[#111] border border-white/10 p-2 rounded-2xl">
//                 <div className="w-full h-[400px] bg-black rounded-xl overflow-hidden relative">
//                   <iframe 
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.35412497676!2d77.68465053744655!3d12.857675276326083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a50595a12c0b084!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453412345!5m2!1sen!2sin" 
//                     width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
//                     className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                   <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] shadow-xl pointer-events-none">
//                     <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
//                     <p className="text-white text-sm font-bold">Mugulur Village, Sarjapura</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-[#d9a406] to-[#b08505] p-8 rounded-2xl shadow-xl">
//                 <h3 className="text-2xl text-black font-bold mb-1">The Next Big Address</h3>
//                 <p className="text-sm text-black/80 font-medium mb-5">Where Sarjapura's Progress Finds Homes</p>
//                 <div className="space-y-3">
//                   {[
//                     { icon: "🛣️", title: "Proposed STRR", desc: "Satellite Town Ring Road linking hubs" },
//                     { icon: "🏗️", title: "SWIFT City SEZ", desc: "Massive 1,000-Acre govt IT/Startup SEZ" },
//                     { icon: "🚇", title: "Metro Phase 3A", desc: "Red Line from Sarjapura to Hebbal" },
//                   ].map(({ icon, title, desc }) => (
//                     <div key={title} className="flex gap-3 items-start bg-black/10 p-3 rounded-xl">
//                       <span className="text-xl shrink-0">{icon}</span>
//                       <div>
//                         <span className="text-sm font-bold text-black block">{title}</span>
//                         <span className="text-xs text-black/80">{desc}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ════════ AWARDS & TRUST ════════ */}
//       <section className="py-24 bg-black border-t border-[#333]">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
            
//             <div>
//               <div className="mb-12">
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awarded for <span className="text-[#d9a406] font-serif italic">Trust & Quality</span></h2>
//                 <p className="text-gray-400">Recognised by India's leading real estate and business bodies, 2023–2026.</p>
//               </div>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {[
//                   { yr: "2023", award: "Property Award of the Year" },
//                   { yr: "2024", award: "Excellence in Amenities Premium" },
//                   { yr: "2025", award: "Time Real Estate Icon Awards" },
//                   { yr: "2026", award: "Emerging Builder of the year by TOI" },
//                 ].map(({ yr, award }) => (
//                   <Card key={award} className="bg-[#111] border-white/5 p-6 text-center hover:border-[#d9a406]/50 transition-colors rounded-2xl group">
//                     <div className="font-serif text-3xl text-[#d9a406] mb-3 group-hover:scale-110 transition-transform">{yr}</div>
//                     <div className="text-xs font-bold text-white leading-tight">{award}</div>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute -inset-4 bg-[#d9a406]/20 rounded-3xl blur-2xl"></div>
//               <div className="relative z-10 grid grid-cols-2 gap-4">
//                 {[
//                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/awardhome(1).jpg.jpeg",
//                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/rrl-award.jpeg",
//                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/Award1.jpeg?updatedAt=1767712378645",
//                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.51%20PM.jpeg",
//                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.50%20PM.jpeg",
//                   "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%202.08.15%20PM.jpeg"
//                 ].map((img, idx) => (
//                   <img 
//                     key={idx} 
//                     src={img} 
//                     alt={`RRL Award ${idx + 1}`} 
//                     className="rounded-2xl w-full h-40 md:h-56 object-cover shadow-2xl border border-[#333] hover:border-[#d9a406] transition-colors" 
//                   />
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ════════ HAPPY CLIENTS ════════ */}
//       <HappyClientsGallery />

//       {/* ════════ TESTIMONIALS ════════ */}
//       <Testimonials />

//       {/* ════════ OTHER RRL PROJECTS ════════ */}
//       <section className="py-24 bg-[#0a0a0a]">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <h2 className="text-4xl font-bold text-white mb-16 text-center">
//             Other <span className="text-[#d9a406] font-serif italic">RRL Projects</span>
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
//             {otherProjectsData.map((project, index) => (
//               <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group h-full">
//                 <div className="bg-[#111] rounded-2xl p-6 flex flex-col border border-white/5 hover:border-[#d9a406]/50 transition-all shadow-lg h-full">
//                   <div className="mb-4">
//                     <span className={`text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider ${
//                       project.status === "Completed" ? "bg-[#064e3b] text-[#c9a84c]" :
//                       project.status === "Ready to Move" ? "bg-[#d9a406] text-black" :
//                       "bg-blue-900 text-blue-200"
//                     }`}>
//                       {project.status}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-[#d9a406] transition-colors mb-3">
//                     {project.name}
//                   </h3>
//                   <p className="text-sm text-gray-400 leading-relaxed mb-6">{project.desc}</p>
//                   <div className="mt-auto">
//                     <Button className="w-full bg-white/5 hover:bg-[#d9a406] text-white hover:text-black border border-white/10 transition-colors text-xs uppercase tracking-widest font-bold">
//                       View Details
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
//              {[
//                { n: 10, suf: "+", label: "Years of Expertise" },
//                { n: 1000, suf: "'s", label: "Happy Families" },
//                { n: 4, suf: "", label: "Completed Projects" },
//                { n: 100, suf: "%", label: "On-Time Delivery" },
//              ].map(({ n, suf, label }) => (
//                <div key={label} className="bg-black rounded-2xl border border-white/5 text-center py-10 px-6">
//                  <div className="font-serif text-5xl font-light text-[#d9a406]">
//                    <AnimatedCounter end={n} suffix={suf} />
//                  </div>
//                  <div className="text-xs font-bold tracking-[.18em] uppercase text-gray-500 mt-4">{label}</div>
//                </div>
//              ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════ BROCHURE CTA SECTION ════════ */}
//       <section className="py-24 bg-black border-t border-[#333]">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="relative rounded-3xl overflow-hidden border border-[#d9a406]/30 bg-gradient-to-br from-[#111] via-[#1a1810] to-[#111] shadow-[0_0_50px_rgba(217,164,6,0.05)] py-20 px-6 text-center flex flex-col items-center justify-center">
            
//             <span className="text-[#d9a406] text-xs font-bold tracking-[.25em] uppercase px-4 py-1.5 border border-[#d9a406]/50 bg-[#d9a406]/10 rounded-full mb-8">Limited Inventory</span>
//             <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
//               GET COST SHEET & <span className="text-[#d9a406] italic">BROCHURE</span>
//             </h2>
//             <div className="w-24 h-1 bg-[#d9a406] rounded-full mb-8" />
//             <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed mb-10">
//               Join over 150 early registrants who have already secured their preferred units at pre-launch prices starting at ₹46 Lakhs.
//             </p>
//             <Button onClick={() => setIsModalOpen(true)} className="bg-[#d9a406] hover:bg-white text-black px-12 py-7 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all transform hover:-translate-y-1">
//               Download Now
//             </Button>
            
//           </div>
//         </div>
//       </section>

//       {/* ════════ FOOTER ════════ */}
//       <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
//          <div className="container mx-auto px-4 max-w-[1280px]">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//               <div>
//                 <h3 className="text-2xl font-bold text-white tracking-tighter mb-4">RRL <span className="text-[#d9a406]">NC-216</span></h3>
//                 <p className="text-sm text-gray-400 leading-relaxed mb-6">Premium 1, 2 & 3 BHK apartments near Sarjapura. RERA & BMRDA approved. East & North facing. S+G+3 boutique living with 42.47% UDS.</p>
//                 <div className="space-y-3">
//                   <a href="tel:+918494966966" className="flex items-center gap-3 text-[#d9a406] font-bold hover:text-white transition-colors"><Phone className="w-5 h-5"/> 84 94 966 966</a>
//                   <a href="mailto:info@rrlprojects.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><Mail className="w-5 h-5"/> info@rrlprojects.com</a>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Quick Links</h4>
//                 <ul className="space-y-4 text-sm text-gray-400">
//                   {["Overview", "Amenities", "Floor Plans", "Location Map"].map(l => (
//                     <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#d9a406] transition-colors">{l}</a></li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Configurations</h4>
//                 <div className="space-y-4">
//                   {[
//                     { t: "1 BHK", r: "655 Sq.Ft", u: "4 Units" },
//                     { t: "2 BHK Versatile", r: "835–1,055 Sq.Ft", u: "33 Units" },
//                     { t: "3 BHK Executive", r: "1,035–1,215 Sq.Ft", u: "18 Units" },
//                   ].map(({ t, r, u }) => (
//                     <div key={t} className="border-b border-white/5 pb-3">
//                       <div className="text-sm font-bold text-white">{t}</div>
//                       <div className="text-xs text-[#d9a406] mt-1">{r}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Address</h4>
//                 <address className="not-italic text-sm text-gray-400 leading-relaxed mb-6">
//                   <strong className="text-white block mb-1">Corporate Office:</strong>
//                   3rd Floor, RRL Tower, Vinayaka Nagar,<br/>
//                   Sompura Gate, Sarjapura Road,<br/>
//                   Bengaluru – 562 125.<br/>
//                   <br/>
//                   <strong className="text-white block mb-1">Project Site:</strong>
//                   SY No. 123, 124, Mugulur Village,<br/>
//                   Off Sarjapura Road, Near Endeavours<br/>
//                   International School, Bengaluru.<br/>
//                 </address>
//                 <div className="text-xs text-gray-500 tracking-wider uppercase font-semibold mb-2">RERA Registration</div>
//                 <div className="text-sm text-gray-400">PRM/KA/RERA/XXXX</div>
//               </div>
//             </div>

//             <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
//               <p>RRL Builders & Developers © {new Date().getFullYear()}. All rights reserved.</p>
//               <p className="text-center md:text-right max-w-2xl">This brochure is only conceptual and not a legal offering. The promoters reserve all rights to add/delete/alter details without prior notice.</p>
//             </div>
//          </div>
//       </footer>

//       {/* ════════ GLOBAL ENQUIRY MODAL ════════ */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div 
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => setIsModalOpen(false)}
//           >
//             <motion.div 
//               className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
//               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

//               {state.succeeded ? (
//                 <div className="flex flex-col items-center justify-center py-6 text-center">
//                   <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
//                   <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
//                   <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
//                   <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full">Close</Button>
//                 </div>
//               ) : (
//                 <>
//                   <div className="text-center mb-8">
//                     <h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3>
//                     <p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p>
//                   </div>
//                   <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Global Modal")} className="space-y-4">
//                     <div className="space-y-2">
//                       <input name="name" type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
//                     </div>
//                     <div className="space-y-2">
//                       <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
//                     </div>
//                     <div className="space-y-2">
//                       <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
//                     </div>
//                     <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4 rounded-lg shadow-lg">
//                       {state.submitting ? "Sending..." : "Get Priority Access"}
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

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck,
  Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee,
  Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User,
  Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, BrickWall, 
  PaintRoller, AppWindow, Droplets, Leaf, Frame, DoorOpen, Bath, Wrench, BatteryCharging,
  LayoutDashboard, BookOpen, Music, Utensils, Table2, Tv, Flower2,
  Train, ShoppingCart, Hospital, Map, Briefcase, Megaphone
} from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'
import Image from "next/image";
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

// --- DATA FROM NATURE CRUST (UPDATED TO MATCH BROCHURE) ---
const floorPlansData = [
  {
    id: "1BHK",
    type: "1 BHK",
    facing: "East",
    area: "655",
    tag: "Only 1 available unit per floor. Total 4 units",
    desc: "A thoughtfully designed compact sanctuary with east-facing windows for sunrise light and natural ventilation in every room.",
    dims: { living: "10'0\" × 14'0\"", kitchen: "7'0\" × 7'0\"", masterBed: "11'0\" × 11'0\"", bath: "5'0\" × 8'0\"", balcony: "4'6\" × 7'0\"" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
  },
  {
    id: "2BHK",
    type: "2 BHK",
    facing: "East & North",
    area: "835 - 1,055",
    tag: "33 Units · 10 Unique Layouts",
    desc: "The 'Versatile' Series — 10 layouts for all generations. Whether you're a young couple or a growing family, there's a home here for you.",
    dims: { livingDining: "11'0\" × 16'0\"", kitchen: "8'0\" × 8'0\"", masterBed: "12'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", balcony: "5'0\" × 8'0\"" },
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85"
  },
  {
    id: "3BHK",
    type: "3 BHK",
    facing: "Corner Units",
    area: "1,035 - 1,215",
    tag: "18 Premium Corner Homes",
    desc: "The 'Executive' Series — panoramic sunrise views, cross ventilation & corner layouts up to 1,215 Sq.Ft. These aren't just big homes — they're the best homes in the building.",
    dims: { living: "16'0\" × 12'0\"", dining: "12'0\" × 10'0\"", kitchen: "10'0\" × 8'0\"", masterBed: "13'0\" × 12'0\"", bed2: "11'0\" × 11'0\"", bed3: "10'0\" × 10'0\"" },
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85"
  }
]

const unitBreakdown2BHK = [
  { area: "835", units: 1, nums: "48" },
  { area: "850", units: 1, nums: "47" },
  { area: "875", units: 7, nums: "7,6,23,24,25,26,27" },
  { area: "890", units: 9, nums: "16,17,18,19,20,30,31,32,33" },
  { area: "895", units: 3, nums: "38,40,41" },
  { area: "910", units: 7, nums: "11,3,29,34,44,45,37" },
  { area: "930", units: 2, nums: "14,2" },
  { area: "935", units: 1, nums: "8" },
  { area: "950", units: 1, nums: "9" },
  { area: "1055", units: 1, nums: "22" },
]

const unitBreakdown3BHK = [
  { area: "1035", units: 1, nums: "49" },
  { area: "1090", units: 1, nums: "50" },
  { area: "1100", units: 1, nums: "51" },
  { area: "1110", units: 1, nums: "43" },
  { area: "1115", units: 2, nums: "1, 15" },
  { area: "1120", units: 2, nums: "10, 12" },
  { area: "1130", units: 4, nums: "4, 21, 35, 46" },
  { area: "1135", units: 2, nums: "28, 52" },
  { area: "1140", units: 1, nums: "36" },
  { area: "1155", units: 1, nums: "5" },
  { area: "1175", units: 1, nums: "42" },
  { area: "1215", units: 1, nums: "13" },
]

const otherProjectsData = [
  { name: "RRL Nature Wood", status: "Completed", desc: "Every corner reflects simplicity and elegance", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502?w=600&q=85" },
  { name: "RRL Palacio", status: "Completed", desc: "Ready-to-move 3 BHK furnished/semi-furnished · 1,400–1,540 SBA", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531?w=600&q=85" },
  { name: "RRL Palm Altezze", status: "Ongoing", desc: "2 & 3 BHK Premium · G+23 · 92% Open Space · 50% UDS", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863?w=600&q=85" },
  { name: "RRL Towers", status: "Completed", desc: "Landmark commercial and residential development", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451?w=600&q=85" },
  { name: "RRL Complex", status: "Completed", desc: "Premium apartment project", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360?w=600&q=85" },
]

// --- ANIMATION VARIANTS ---
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const slideInVariants: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }

// --- HELPER COMPONENTS ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number; }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(progress * end)
            if (progress < 1) window.requestAnimationFrame(step)
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
}

function EOICountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const target = new Date("2026-07-31T23:59:59").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = target - now
      if (distance < 0) { clearInterval(interval); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="mt-8 mb-6 w-full">
      <div className="text-[10px] text-[#d9a406] font-bold tracking-[.15em] uppercase mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
        EOI Ends In (July 31, 2026)
      </div>
      
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
        {[
          { label: "Days", value: timeLeft.days }, 
          { label: "Hours", value: timeLeft.hours }, 
          { label: "Mins", value: timeLeft.minutes }, 
          { label: "Secs", value: timeLeft.seconds }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-[#111] border border-[#d9a406]/30 p-2 sm:px-4 sm:py-3 rounded-lg shadow-[0_0_15px_rgba(217,164,6,0.1)]">
            <span className="font-serif text-xl sm:text-3xl text-[#fcd34d] font-bold leading-none">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold tracking-[.2em] uppercase text-gray-500 mt-1 sm:mt-1.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function HappyClientsGallery() {
  const clientImages = [
    "https://ik.imagekit.io/j0xzq9pns/tr:w-800,c-at_max,f-auto/happy%20clients/happy-clients%20(4).jpeg",
    "https://ik.imagekit.io/j0xzq9pns/tr:w-800,c-at_max,f-auto/happy%20clients/happy-clients%20(1).jpeg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560219/20250731_121250_nq8l6b.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560213/20250808_115517_vitgx0.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560198/20250728_164509_qpnvtc.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560193/20250801_121200_sorava.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/q_auto,f_auto,w_800,c_limit/v1764560033/20250805_115305_qoouj2.jpg",
  ]

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-sm font-bold uppercase tracking-wider mb-6">
            Client Stories
          </div>
          <h2 className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl">
            Smiles We've <span className="text-gold-500">Created</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 font-light">
            Join our growing family of satisfied homeowners who found their dream home with RRL.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-neutral-50 to-transparent" />

        <div className="animate-scroll gap-4 sm:gap-6 md:gap-8 pl-4 sm:pl-6 md:pl-8">
          {[...clientImages, ...clientImages, ...clientImages].map((img, i) => (
            <div
              key={i}
              className="group relative
                h-[240px] w-[180px]
                sm:h-[280px] sm:w-[200px]
                md:h-[360px] md:w-[260px]
                lg:h-[400px] lg:w-[300px]
                flex-shrink-0 cursor-pointer"
            >
              <div className="h-full w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-gray-100 group-hover:border-gold-500/50">
                <div className="relative h-full w-full">
                  <Image
                    src={img}
                    alt={`Happy Client ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className="h-0.5 w-6 bg-gold-400" />
                      <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                        Handover
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-playfair">
                      RRL Family
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonialData = [
    { type: "text", name: "Anusha V", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
    { type: "text", name: "Rama Krishna Kanupuri", role: "Happy Home Buyer", location: "RRL Nature Woods", rating: 5, testimonial: "Best apartments with good amenities. Build quality is excellent. Ram and Lakshman are genuine, humble and have great knowledge in construction. Highly recommend for a visit!" },
    { type: "video", name: "VideoTestimonial1", videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
    { type: "text", name: "Kishore Babu", role: "Happy Home Buyer", location: "RRL Palm Altezze", rating: 5, testimonial: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym, open barbeque facing swimming pool." },
    { type: "text", name: "Samta Goyat", role: "Happy Home Buyer", location: "RRL Nature Woods", rating: 5, testimonial: "Construction quality is top-notch. Peaceful location away from busy areas. Ram and Lakshman made the process smooth with no fake promises." },
    { type: "video", name: "VideoTestimonial2", videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
  ]

  return (
    <section className="relative py-24 overflow-hidden border-t border-[#333] bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hear From Our <span className="text-[#d9a406] font-serif italic">Clients</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real stories from families who found their dream home with RRL.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((item, index) =>
            item.type === "video" ? (
              <div key={index} className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-black aspect-video md:aspect-[4/3] lg:aspect-[4/3]">
                <iframe src={item.videoUrl} title={item.name} className="w-full h-full" allowFullScreen />
              </div>
            ) : (
              <div key={index} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/30 transition-all rounded-3xl p-6 md:p-8 shadow-xl flex flex-col h-full group">
                <div className="flex mb-4">{[...Array(item.rating)].map((_, i) => (<span key={i} className="text-[#d9a406]">★</span>))}</div>
                <p className="text-gray-300 italic text-sm md:text-base leading-relaxed mb-6">“{item.testimonial}”</p>
                <div className="mt-auto border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-[#d9a406] text-sm font-semibold">{item.role}</p>
                  <p className="text-gray-500 text-xs">{item.location}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

// ════════ MAIN PAGE COMPONENT ════════
export default function Nc216Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const [state, handleSubmit] = useForm("mkonkbkk")

  // Dual Submit Logic (CRM + Formspree)
  const handleDualSubmit = async (e: React.FormEvent<HTMLFormElement>, customProjectName = "RRL NC-216") => {
    e.preventDefault()
    const form = e.currentTarget
    const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
    const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
    const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    
    fetch('/enquire-now-api.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: customProjectName }),
    }).catch(() => {})
    
    await handleSubmit(e)
  }

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => { setIsModalOpen(false) }, 3000)
    }
  }, [state.succeeded])

  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black font-sans overflow-x-hidden">
      

      {/* ════════ HERO IMAGE BANNER ════════ */}
<section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
        
        {/* MOBILE HERO (400 × 300) */}
        <div className="block md:hidden">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
              alt="RRL Hero Banner Mobile"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </div>

        {/* DESKTOP HERO */}
        <div className="hidden md:block w-full">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
          >
            <img
              src="https://ik.imagekit.io/j0xzq9pns/groceries/nc216/nc216-3.jpeg?updatedAt=1780648642617"
              alt="RRL Hero Banner Desktop"
              loading="eager"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
        
      </section>


      {/* ════════ HERO CONTENT & FORM ════════ */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-12 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
                <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm font-bold uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
                <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Sarjapura, Bengaluru</Badge>
              </motion.div>

              {/* Tagline updated to match brochure */}
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Why Rent a home? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d] italic font-serif font-light">When you can Own it</span>
              </motion.h1>

              <motion.div variants={fadeIn} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed space-y-4">
                <p>Welcome to <strong className="text-white font-bold">RRL NC-216</strong> — a clear green lifestyle near Sarjapura. Zero compromise living with 100% East & North facing 1, 2 & 3 BHK homes on S+G+3 boutique wings.</p>
                <p className="text-3xl font-bold text-white mt-4">Starting <span className="text-[#d9a406]">₹46L – ₹98L Onwards</span></p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
                {["RERA & BMRDA Approved", "100% Vastu Compliant", "42.47% UDS", "S+G+3 Boutique Living"].map(b => (
                  <span key={b} className="border border-[#d9a406]/50 text-[#fcd34d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
                    {b}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4 border-t border-white/10 overflow-hidden">
                <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase shrink-0">Awarded</span>
                <div className="flex-1 overflow-hidden whitespace-nowrap">
                   <div className="inline-block animate-[marquee_30s_linear_infinite] text-[11px] text-gray-400 font-bold">
                     🏆 Property Award of the Year 2023     🏆 Global Real Estate Brand Awards 2023     🏆 Excellence in Amenities Premium 2024     🏆 Time Real Estate Icon Awards 2025     🏆 Emerging Builder of the year by TOI 2026
                   </div>
                </div>
              </motion.div>
            </motion.div>

<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md mx-auto lg:ml-auto">
   <Card className="bg-[#111] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>

      {state.succeeded ? (
         <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
            <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
            <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
         </div>
      ) : (
        <div className="p-4 sm:p-8">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9a406]"/> Register Interest</h3>
            <p className="text-[#d9a406] text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-2">Get Guaranteed Pre-Launch Pricing</p>
          </div>

          <div className="w-full overflow-hidden mb-6">
            <EOICountdown />
          </div>

          <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Hero Enquiry")} className="space-y-4">
            <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input aria-label="Full Name" name="name" type="text" placeholder="Full Name *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
            </div>
            <div className="relative">
                <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input aria-label="Phone Number" name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
            </div>
            <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input aria-label="Email Address" name="email" type="email" placeholder="Email Address *" required className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm" />
            </div>
            <select aria-label="Interested In" name="config" required className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-gray-400 focus:text-white focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all text-sm appearance-none cursor-pointer">
              <option value="">Interested In...</option>
              <option>1 BHK — 655 Sq.Ft (Only 1 Unit)</option>
              <option>2 BHK — 835–1,055 Sq.Ft (33 Units)</option>
              <option>3 BHK — 1,035–1,215 Sq.Ft (18 Units)</option>
            </select>
            <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm uppercase tracking-widest h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all rounded-lg mt-2">
              {state.submitting ? "Processing..." : "Get Cost Sheet & Details →"}
            </Button>
          </form>
        </div>
      )}
   </Card>
</motion.div>
          </div>
        </div>
      </section>

      {/* ════════ PROJECT GLANCE ════════ */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { label: "Land Area", value: 85990, suffix: " Sq.Ft", icon: MapPin },
              { label: "Total Units", value: 208, suffix: " Homes", icon: Building2 },
              { label: "Starting Size", value: 655, suffix: " Sq.Ft", icon: Maximize2 },
              { label: "Structure", value: 4, suffix: " Wings", icon: Building2, isText: true, textVal: "S+G+3 Wings" },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#d9a406]/50 transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-[#d9a406]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9a406]/20 transition-colors">
                    <stat.icon className="w-7 h-7 text-[#d9a406]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#d9a406] mb-2">
                    {stat.isText ? <span>{stat.textVal}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                  <div className="absolute inset-0 rounded-2xl bg-[#d9a406]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ EOI BENEFITS ════════ */}
      <section className="py-20 bg-[#0a0a0a] border-b border-white/5" id="eoi">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Expression of Interest <span className="text-[#d9a406] font-serif italic">(EOI) is Open</span></h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Be among the first to secure your dream home at RRL NC-216. By submitting your EOI, you gain priority access to our exclusive pre-launch inventory.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: Star, title: "Priority Unit Selection", desc: "Choose your preferred floor & facing before public launch." },
              { icon: Award, title: "Lowest Guaranteed Price", desc: "Pre-launch pricing locked in safely and securely." },
              { icon: Zap, title: "Launch Day Offers", desc: "Exclusive access to special upgrades and launch discounts." },
              { icon: ShieldCheck, title: "100% Refundable", desc: "Your EOI token is fully refundable without questions." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group">
                <Card className="bg-[#111] border border-white/10 p-8 h-full hover:border-[#d9a406]/50 transition-colors duration-300 relative overflow-hidden rounded-2xl">
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

      {/* ════════ OVERVIEW & UDS ════════ */}
      <section id="overview" className="py-24 bg-black text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            
            <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block mb-4">Ownership Advantage</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
              You Own the <span className="text-[#d9a406]">Land Too.</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Most apartments give you walls. We give you land. RRL NC-216 is a boutique residential enclave set on 85,990 Sq.Ft. Designed as S+G+3 wings for low-density, congestion-free living.
            </p>

            <div className="p-8 bg-gradient-to-r from-[#111] via-[#1a1810] to-[#111] border border-[#d9a406]/30 rounded-3xl flex flex-col sm:flex-row items-center justify-center gap-8 shadow-[0_0_30px_rgba(217,164,6,0.05)] mb-12">
              <div className="font-serif text-6xl md:text-7xl font-light text-[#fcd34d]">42.47%</div>
              <div className="text-center sm:text-left">
                <div className="text-xl font-bold text-white uppercase tracking-wider mb-2">Undivided Share (UDS)</div>
                <div className="text-sm text-gray-400 max-w-sm">Reserved exclusively for homeowners — ensuring a real, legal share of the ground beneath your home for superior asset appreciation.</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "100% East & North Facing",
                "RERA & BMRDA Approved",
                "All Vastu Compliant Homes",
                "S+G+3 Boutique Living"
              ].map(f => (
                <div key={f} className="flex flex-col items-center gap-3 bg-[#111] p-5 border border-white/5 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-[#d9a406] shrink-0" />
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wide">{f}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ════════ MASTER PLAN ════════ */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#333]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center space-y-8">
            
            <span className="text-[#d9a406] text-xs font-bold tracking-widest uppercase block">Master Plan</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Your Dream Home <br /> <span className="text-[#d9a406] italic">Awaits</span>
            </h2>
            <div className="w-24 h-1 bg-[#d9a406] rounded-full mx-auto" />
            
            <p className="text-xl text-gray-400 leading-relaxed pt-4">
              4 boutique S+G+3 wings spread across 85,990 Sq.Ft with generous open spaces, landscaped gardens, community amenities and tree-lined pathways.
            </p>
            <p className="text-[#d9a406] font-bold tracking-widest uppercase text-sm">East & North facing for every single unit.</p>
            
          </motion.div>
        </div>
      </section>

      {/* ════════ AMENITIES ════════ */}
      <section id="amenities" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than a Home. <span className="text-[#d9a406] font-serif italic">A Community.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Step outside and find everything you need — pools, parks, a gym, games and more. All within your campus. Your weekend is sorted.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Waves, title: "Swim & Stay Fit", desc: "Adult pool + kid's pool for safe splashing. Outdoor & indoor gym." },
              { icon: Trees, title: "Walk, Play, Breathe", desc: "A natural park right at your doorstep. Curated landscaping." },
              { icon: Music, title: "Celebrate Together", desc: "Multipurpose hall for birthdays, anniversaries and events." },
              { icon: Zap, title: "The Essentials", desc: "High-speed lifts · In-house STP · 100% power backup." },
              { icon: Gamepad2, title: "Game On", desc: "Table tennis, carom board, chess & indoor games." },
              { icon: Building2, title: "Smart Parking", desc: "Dedicated covered parking with visitor management." },
              { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV at every entrance and common area. Always watching." },
              { icon: Droplets, title: "Water Supply", desc: "Deep borewell with overhead tanks and underground sumps." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#161616] transition-all group flex flex-col items-center text-center">
                <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)] mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="text-white font-bold group-hover:text-[#d9a406] text-lg mb-2">{item.title}</span>
                <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: "Swimming Pool", sub: "Infant Pool" },
              { label: "Party Hall" },
              { label: "Indoor Gym" },
              { label: "Children's Play Area" }
            ].map(({ label, sub }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#111] border border-[#d9a406]/20 rounded-2xl p-6 text-center hover:border-[#d9a406] hover:bg-[#161616] transition-all flex flex-col justify-center min-h-[140px]">
                <span className="text-sm md:text-base font-bold text-[#fcd34d] uppercase tracking-wider block mb-2">{label}</span>
                {sub && <span className="text-xs text-gray-400 block leading-relaxed">{sub}</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FLOOR PLANS & CONFIGURATIONS ════════ */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="floorplans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#d9a406]/50 bg-[#d9a406]/10 text-[#d9a406] text-sm font-bold uppercase tracking-wider mb-6">
                Configurations
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Pick Your Home <span className="text-[#d9a406] font-serif italic">Amongst 52 Units</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                1 BHK, 2 BHK "Versatile" Series, and 3 BHK "Executive" Series
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {floorPlansData.map((config, index) => {
              const [activeForm, setActiveForm] = useState<string | null>(null)
              const [isSubmitting, setIsSubmitting] = useState(false)
              const [isSubmitted, setIsSubmitted] = useState(false)

              const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                setIsSubmitting(true)
                await handleDualSubmit(e, `NC 216 - ${config.type} Unlock`)
                setIsSubmitted(true)
                setIsSubmitting(false)
                setActiveForm(null)
              }

              return (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#d9a406]/20 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#d9a406]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/5 rounded-bl-full"></div>

                    <div className="inline-flex flex-wrap items-center gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-[#d9a406] text-black text-xs font-bold uppercase tracking-wider">
                        {config.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                        {config.facing}
                      </span>
                    </div>

                    <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#d9a406] transition-colors duration-300">
                      {config.type}
                    </h3>
                    <p className="text-2xl text-gray-400 mb-4">{config.area} Sq.Ft</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{config.desc}</p>

                    <div className="mt-auto pt-4 border-t border-white/10">
                      {isSubmitted ? (
                        <div className="text-center py-4">
                          <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                          <p className="text-white font-bold">Blueprint Unlocked!</p>
                          <p className="text-gray-400 text-sm">Our team will call you within 2 hours.</p>
                        </div>
                      ) : activeForm === config.type ? (
                        <form onSubmit={handleUnlockSubmit} className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                          <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                            <input name="name" type="text" placeholder="Your Name" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
                          </div>
                          <div className="relative">
                            <Smartphone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                            <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                            <input name="email" type="email" placeholder="Email Address" required className="w-full bg-black/50 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 text-sm focus:border-[#d9a406] outline-none transition-colors" />
                          </div>
                          <div className="flex gap-2">
                            <button type="button" onClick={() => setActiveForm(null)} className="flex-1 py-3 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">Cancel</button>
                            <button type="submit" disabled={isSubmitting} className="flex-1 py-3 px-4 rounded-lg bg-[#d9a406] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b08505] transition-colors">
                              {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Get Details"}
                            </button>
                          </div>
                        </form>
                      ) : (
                        <button onClick={() => setActiveForm(config.type)} className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a406] to-[#b08505] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,164,6,0.3)] transition-all duration-300 hover:scale-[1.02]">
                          Unlock Full Blueprint
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
               <div className="bg-[#d9a406] px-6 py-4 flex items-center justify-between">
                 <span className="font-bold text-black text-sm tracking-wider uppercase">2 BHK 'Versatile' - 10 Variants</span>
                 <span className="text-xs font-bold text-black/70 bg-black/10 px-3 py-1 rounded-full">Total: 33 Units</span>
               </div>
               <div className="p-0">
                 <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
                   {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
                     <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
                   ))}
                 </div>
                 <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                   {unitBreakdown2BHK.map(({ area, units, nums }, idx) => (
                     <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                       <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
                       <span className="text-sm text-gray-300">{units}</span>
                       <span className="text-xs text-gray-500">{nums}</span>
                     </div>
                   ))}
                 </div>
                 <div className="px-6 py-4 bg-black/50 border-t border-white/10">
                   <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 835–1,055 Sq.Ft</span>
                 </div>
               </div>
             </div>

             <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
               <div className="bg-[#333] px-6 py-4 flex items-center justify-between border-b border-[#d9a406]">
                 <span className="font-bold text-white text-sm tracking-wider uppercase">3 BHK 'Executive' - 12 Variants</span>
                 <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">Total: 18 Units</span>
               </div>
               <div className="p-0">
                 <div className="grid grid-cols-3 px-6 py-3 border-b border-white/10 bg-black/50">
                   {["Area (Sq.Ft)", "Units", "Unit Numbers"].map(h => (
                     <span key={h} className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">{h}</span>
                   ))}
                 </div>
                 <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                   {unitBreakdown3BHK.map(({ area, units, nums }, idx) => (
                     <div key={idx} className="grid grid-cols-3 px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                       <span className="text-sm font-bold text-[#e2c87a]">{area}</span>
                       <span className="text-sm text-gray-300">{units}</span>
                       <span className="text-xs text-gray-500">{nums}</span>
                     </div>
                   ))}
                 </div>
                 <div className="px-6 py-4 bg-black/50 border-t border-white/10">
                   <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">Range: 1,035–1,215 Sq.Ft · Corner Units</span>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* ════════ SPECIFICATIONS ════════ */}
      <section className="py-24 bg-black text-white border-t border-[#333]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium <span className="text-[#d9a406] font-serif italic normal-case">Specifications</span></h2>
            <p className="text-gray-400 mt-4">No shortcuts. No compromise. Just quality.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="space-y-0">
              <div className="flex gap-5 py-6 border-b border-[#333]">
                <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Structure & Walls</h4><p className="text-gray-400 text-sm leading-relaxed">External walls: 6-inch concrete blocks. Internal walls: 4-inch concrete blocks with 1-inch plastering on both surfaces.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-[#333]">
                <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Indo-Asian switches throughout. Premium wiring with fire-safe conduits and dedicated earth connections.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
                <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria premium sanitary fittings. CPVC pipes with leak-proof joints and concealed piping.</p></div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] w-full hidden lg:flex flex-col items-center justify-center gap-6">
              <div className="w-48 h-48 rounded-full bg-[#d9a406]/10 flex items-center justify-center border-4 border-[#d9a406]/20">
                <ShieldCheck className="w-24 h-24 text-[#d9a406]/60" strokeWidth={1} />
              </div>
              <p className="text-center text-gray-500 text-sm font-bold tracking-widest uppercase">No shortcuts.<br/>No compromise.<br/>Just quality.</p>
            </div>

            <div className="space-y-0">
              <div className="flex gap-5 py-6 border-b border-[#333]">
                <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">Living & bedroom: 600mm × 600mm vitrified floor tiles. Bathroom: 300mm × 450mm anti-skid ceramic tiles.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-[#333]">
                <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">Interior: Tractor emulsion finish. Exterior: Asian Paint or Nippon Paint double-coating for durability.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-[#333] lg:border-b-0">
                <div className="shrink-0 pt-1"><ShieldCheck className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Eco & Security</h4><p className="text-gray-400 text-sm leading-relaxed">CCTV at entrances. Video door phones. Deep borewell with STP. 100% power backup.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ LOCATION ════════ */}
      <section className="py-24 bg-[#0a0a0a]" id="location">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406] font-bold tracking-widest uppercase">Strategically Located</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406] font-serif italic font-light">Road</span></h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">Set in the sought-after neighbourhood of Sarjapura, balancing pulse and peace — keeping you close to everything, yet comfortably away.</p>
              
              <div className="space-y-8">
                <div className="border-l-2 border-[#333] pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#d9a406]"/> Educational Institutes</h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
                    <span className="flex justify-between">Endeavour Int. <strong className="text-[#d9a406]">1 Min</strong></span>
                    <span className="flex justify-between">Champion Int. <strong className="text-[#d9a406]">3 Min</strong></span>
                    <span className="flex justify-between">Azim Premji Uni <strong className="text-[#d9a406]">15 Min</strong></span>
                    <span className="flex justify-between">Greenwood High <strong className="text-[#d9a406]">25 Min</strong></span>
                    <span className="flex justify-between">DPS <strong className="text-[#d9a406]">25 Min</strong></span>
                    <span className="flex justify-between">Christ College <strong className="text-[#d9a406]">20 Min</strong></span>
                  </div>
                </div>

                <div className="border-l-2 border-[#333] pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#d9a406]"/> IT Companies</h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
                    <span className="flex justify-between">Infosys HQ <strong className="text-[#d9a406]">15 Min</strong></span>
                    <span className="flex justify-between">Wipro <strong className="text-[#d9a406]">25 Min</strong></span>
                    <span className="flex justify-between">RGA Tech Park <strong className="text-[#d9a406]">30 Min</strong></span>
                    <span className="flex justify-between">RMZ Ecoworld <strong className="text-[#d9a406]">45 Min</strong></span>
                  </div>
                </div>

                <div className="border-l-2 border-[#333] pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Hospital className="w-5 h-5 text-[#d9a406]"/> Hospitals & Shopping</h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
                    <span className="flex justify-between">Spandana Hosp <strong className="text-[#d9a406]">15 Min</strong></span>
                    <span className="flex justify-between">Sparsh Hosp <strong className="text-[#d9a406]">30 Min</strong></span>
                    <span className="flex justify-between">Manipal Hosp <strong className="text-[#d9a406]">35 Min</strong></span>
                    <span className="flex justify-between">D-Mart <strong className="text-[#d9a406]">10 Min</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="bg-[#111] border border-white/10 p-2 rounded-2xl">
                <div className="w-full h-[400px] bg-black rounded-xl overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.35412497676!2d77.68465053744655!3d12.857675276326083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a50595a12c0b084!2sSarjapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453412345!5m2!1sen!2sin" 
                    width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] shadow-xl pointer-events-none">
                    <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
                    <p className="text-white text-sm font-bold">Mugulur Village, Sarjapura</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#d9a406] to-[#b08505] p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-black font-bold mb-1">The Next Big Address</h3>
                <p className="text-sm text-black/80 font-medium mb-5">Where Sarjapura's Progress Finds Homes</p>
                <div className="space-y-3">
                  {[
                    { icon: "🛣️", title: "Proposed STRR", desc: "Satellite Town Ring Road linking hubs" },
                    { icon: "🏗️", title: "SWIFT City SEZ", desc: "Massive 1,000-Acre govt IT/Startup SEZ" },
                    { icon: "🚇", title: "Metro Phase 3A", desc: "Red Line from Sarjapura to Hebbal" },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-3 items-start bg-black/10 p-3 rounded-xl">
                      <span className="text-xl shrink-0">{icon}</span>
                      <div>
                        <span className="text-sm font-bold text-black block">{title}</span>
                        <span className="text-xs text-black/80">{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ AWARDS & TRUST ════════ */}
      <section className="py-24 bg-black border-t border-[#333]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awarded for <span className="text-[#d9a406] font-serif italic">Trust & Quality</span></h2>
                <p className="text-gray-400">Recognised by India's leading real estate and business bodies, 2023–2026.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { yr: "2023", award: "Property Award of the Year" },
                  { yr: "2024", award: "Excellence in Amenities Premium" },
                  { yr: "2025", award: "Time Real Estate Icon Awards" },
                  { yr: "2026", award: "Emerging Builder of the year by TOI" },
                ].map(({ yr, award }) => (
                  <Card key={award} className="bg-[#111] border-white/5 p-6 text-center hover:border-[#d9a406]/50 transition-colors rounded-2xl group">
                    <div className="font-serif text-3xl text-[#d9a406] mb-3 group-hover:scale-110 transition-transform">{yr}</div>
                    <div className="text-xs font-bold text-white leading-tight">{award}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#d9a406]/20 rounded-3xl blur-2xl"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                  "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/awardhome(1).jpg.jpeg",
                  "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/rrl-award.jpeg",
                  "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/Award1.jpeg?updatedAt=1767712378645",
                  "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.51%20PM.jpeg",
                  "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%2012.07.50%20PM.jpeg",
                  "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/WhatsApp%20Image%202026-05-18%20at%202.08.15%20PM.jpeg"
                ].map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`RRL Award ${idx + 1}`} 
                    className="rounded-2xl w-full h-40 md:h-56 object-cover shadow-2xl border border-[#333] hover:border-[#d9a406] transition-colors" 
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ HAPPY CLIENTS ════════ */}
      <HappyClientsGallery />

      {/* ════════ TESTIMONIALS ════════ */}
      <Testimonials />

      {/* ════════ OTHER RRL PROJECTS ════════ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Other <span className="text-[#d9a406] font-serif italic">RRL Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {otherProjectsData.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group h-full">
                <div className="bg-[#111] rounded-2xl p-6 flex flex-col border border-white/5 hover:border-[#d9a406]/50 transition-all shadow-lg h-full">
                  <div className="mb-4">
                    <span className={`text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider ${
                      project.status === "Completed" ? "bg-[#064e3b] text-[#c9a84c]" :
                      project.status === "Ready to Move" ? "bg-[#d9a406] text-black" :
                      "bg-blue-900 text-blue-200"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#d9a406] transition-colors mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{project.desc}</p>
                  <div className="mt-auto">
                    <Button className="w-full bg-white/5 hover:bg-[#d9a406] text-white hover:text-black border border-white/10 transition-colors text-xs uppercase tracking-widest font-bold">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
             {[
               { n: 10, suf: "+", label: "Years of Expertise" },
               { n: 1000, suf: "'s", label: "Happy Families" },
               { n: 4, suf: "", label: "Completed Projects" },
               { n: 100, suf: "%", label: "On-Time Delivery" },
             ].map(({ n, suf, label }) => (
               <div key={label} className="bg-black rounded-2xl border border-white/5 text-center py-10 px-6">
                 <div className="font-serif text-5xl font-light text-[#d9a406]">
                   <AnimatedCounter end={n} suffix={suf} />
                 </div>
                 <div className="text-xs font-bold tracking-[.18em] uppercase text-gray-500 mt-4">{label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ════════ BROCHURE CTA SECTION ════════ */}
      <section className="py-24 bg-black border-t border-[#333]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="relative rounded-3xl overflow-hidden border border-[#d9a406]/30 bg-gradient-to-br from-[#111] via-[#1a1810] to-[#111] shadow-[0_0_50px_rgba(217,164,6,0.05)] py-20 px-6 text-center flex flex-col items-center justify-center">
            
            <span className="text-[#d9a406] text-xs font-bold tracking-[.25em] uppercase px-4 py-1.5 border border-[#d9a406]/50 bg-[#d9a406]/10 rounded-full mb-8">Limited Inventory</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
              GET COST SHEET & <span className="text-[#d9a406] italic">BROCHURE</span>
            </h2>
            <div className="w-24 h-1 bg-[#d9a406] rounded-full mb-8" />
            <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed mb-10">
              Join over 150 early registrants who have already secured their preferred units at pre-launch prices starting at ₹46 Lakhs.
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="bg-[#d9a406] hover:bg-white text-black px-12 py-7 text-sm font-bold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all transform hover:-translate-y-1">
              Download Now
            </Button>
            
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
         <div className="container mx-auto px-4 max-w-[1280px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tighter mb-4">RRL <span className="text-[#d9a406]">NC-216</span></h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">Premium 1, 2 & 3 BHK apartments near Sarjapura. RERA & BMRDA approved. East & North facing. S+G+3 boutique living with 42.47% UDS.</p>
                <div className="space-y-3">
                  <a href="tel:+918494966966" className="flex items-center gap-3 text-[#d9a406] font-bold hover:text-white transition-colors"><Phone className="w-5 h-5"/> 84 94 966 966</a>
                  <a href="mailto:info@rrlprojects.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><Mail className="w-5 h-5"/> info@rrlprojects.com</a>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Quick Links</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  {["Overview", "Amenities", "Floor Plans", "Location Map"].map(l => (
                    <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#d9a406] transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Configurations</h4>
                <div className="space-y-4">
                  {[
                    { t: "1 BHK", r: "655 Sq.Ft", u: "4 Units" },
                    { t: "2 BHK Versatile", r: "835–1,055 Sq.Ft", u: "33 Units" },
                    { t: "3 BHK Executive", r: "1,035–1,215 Sq.Ft", u: "18 Units" },
                  ].map(({ t, r, u }) => (
                    <div key={t} className="border-b border-white/5 pb-3">
                      <div className="text-sm font-bold text-white">{t}</div>
                      <div className="text-xs text-[#d9a406] mt-1">{r}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#d9a406] mb-6">Address</h4>
                <address className="not-italic text-sm text-gray-400 leading-relaxed mb-6">
                  <strong className="text-white block mb-1">Corporate Office:</strong>
                  3rd Floor, RRL Tower, Vinayaka Nagar,<br/>
                  Sompura Gate, Sarjapura Road,<br/>
                  Bengaluru – 562 125.<br/>
                  <br/>
                  <strong className="text-white block mb-1">Project Site:</strong>
                  SY No. 123, 124, Mugulur Village,<br/>
                  Off Sarjapura Road, Near Endeavours<br/>
                  International School, Bengaluru.<br/>
                </address>
                <div className="text-xs text-gray-500 tracking-wider uppercase font-semibold mb-2">RERA Registration</div>
                <div className="text-sm text-gray-400">PRM/KA/RERA/XXXX</div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
              <p>RRL Builders & Developers © {new Date().getFullYear()}. All rights reserved.</p>
              <p className="text-center md:text-right max-w-2xl">This brochure is only conceptual and not a legal offering. The promoters reserve all rights to add/delete/alter details without prior notice.</p>
            </div>
         </div>
      </footer>

      {/* ════════ GLOBAL ENQUIRY MODAL ════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="bg-[#111] border border-[#d9a406] p-8 md:p-10 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#d9a406] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
                  <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
                  <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black w-full">Close</Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3>
                    <p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p>
                  </div>
                  <form onSubmit={(e) => handleDualSubmit(e, "NC 216 Global Modal")} className="space-y-4">
                    <div className="space-y-2">
                      <input name="name" type="text" placeholder="Your Name" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
                    </div>
                    <div className="space-y-2">
                      <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
                    </div>
                    <div className="space-y-2">
                      <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors text-sm" required />
                    </div>
                    <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-4 rounded-lg shadow-lg">
                      {state.submitting ? "Sending..." : "Get Priority Access"}
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