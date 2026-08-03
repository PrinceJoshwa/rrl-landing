// // // // "use client";

// // // // import React, { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence, Variants } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { useRouter } from "next/navigation";
// // // // import {
// // // //   Phone,
// // // //   Mail,
// // // //   MapPin,
// // // //   X,
// // // //   Building2,
// // // //   Zap,
// // // //   ShieldCheck,
// // // //   Award,
// // // //   Wind,
// // // //   Dumbbell,
// // // //   Waves,
// // // //   Coffee,
// // // //   Trees,
// // // //   Maximize2,
// // // //   ArrowRight,
// // // //   CheckCircle2,
// // // //   Menu,
// // // //   Smartphone,
// // // //   User,
// // // //   Lock,
// // // //   Unlock,
// // // //   ArrowLeft,
// // // //   Loader2,
// // // //   Star,
// // // //   BrickWall,
// // // //   PaintRoller,
// // // //   AppWindow,
// // // //   Bath,
// // // //   Home as HomeIcon,
// // // //   Ruler,
// // // //   Layers,
// // // //   GraduationCap,
// // // //   Factory,
// // // //   Milestone,
// // // //   IndianRupee,
// // // //   Key,
// // // //   Download,
// // // //   FileText,
// // // //   AlertCircle
// // // // } from "lucide-react";

// // // // // --- Formspree Config ---
// // // // const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";
// // // // const BROCHURE_URL =
// // // //   "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// // // // // --- Project Data ---
// // // // const PHONES = ["8494966966"];
// // // // const ADDRESS = [
// // // //   "Confident Atria",
// // // //   "Sarjapura - Attibele Road",
// // // //   "Bengaluru, Karnataka",
// // // // ];

// // // // const STATS = [
// // // //   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
// // // //   { label: "Site Area", value: "1162 sqft", icon: Ruler },
// // // //   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
// // // //   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// // // // ];

// // // // const FLOOR_PLAN_IMAGES = [
// // // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
// // // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
// // // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
// // // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
// // // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
// // // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
// // // // ];

// // // // const SITE_AREAS = [
// // // //   { site: "12", area: "1,162" },
// // // //   { site: "12A", area: "1,162" },
// // // //   { site: "124", area: "1,302" },
// // // //   { site: "125", area: "1,285" },
// // // //   { site: "181", area: "1,162" },
// // // //   { site: "199", area: "1,346" },
// // // //   { site: "202", area: "1,096" },
// // // //   { site: "218", area: "1,200" },
// // // //   { site: "220", area: "1,200" },
// // // //   { site: "221", area: "1,200" },
// // // //   { site: "256", area: "1,500" },
// // // //   { site: "266", area: "1,200" },
// // // // ];

// // // // const AMENITIES = [
// // // //   { icon: Coffee, title: "Premium Clubhouse", body: "Family & social hub featuring a clubhouse, banquet hall & outdoor amphitheater." },
// // // //   { icon: Waves, title: "Large Swimming Pool", body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness." },
// // // //   { icon: Award, title: "Sports & Courts", body: "Tennis & basketball courts, dedicated indoor squash, badminton & indoor games." },
// // // //   { icon: Dumbbell, title: "Fitness & Tracks", body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks." },
// // // //   { icon: Trees, title: "Parks & Open Lawns", body: "Beautiful flower gardens, landscaped open lawns, and a safe children's play area." },
// // // //   { icon: ShieldCheck, title: "24/7 Manned Security", body: "Gated community with 24/7 manned security, CCTV surveillance, and visitor parking." },
// // // //   { icon: Wind, title: "Eco Infrastructure", body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage." },
// // // //   { icon: Zap, title: "Vaastu Compliant", body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance and meditation area." },
// // // // ];

// // // // const SPECS = [
// // // //   {
// // // //     group: "Approvals & Layout",
// // // //     rows: [
// // // //       ["Layout Approval", "BMRDA Approved"],
// // // //       ["Layout Extent", "25-Acre Gated Community (319 Units)"],
// // // //       ["Layout Name", "Confident Atria"],
// // // //       ["Developer", "Confident Group"],
// // // //       ["Architect", "STAVBA Infra LLP"],
// // // //     ],
// // // //   },
// // // //   {
// // // //     group: "Structure & Envelope",
// // // //     rows: [
// // // //       ["Building Structure", "RCC Column Frame"],
// // // //       ["Walls", "6\" Solid Block"],
// // // //       ["Main Door", "Teak Wood with Biometric Digital Lock"],
// // // //       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
// // // //       ["Windows", "3-Track UPVC, Wooden Pattern"],
// // // //     ],
// // // //   },
// // // //   {
// // // //     group: "Interiors & Finishes",
// // // //     rows: [
// // // //       ["Flooring - Living & Beds", "Vitrified Tiles, 4' x 6'"],
// // // //       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
// // // //       ["Flooring - Staircase", "Granite"],
// // // //       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
// // // //       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
// // // //     ],
// // // //   },
// // // //   {
// // // //     group: "Electrical & Plumbing",
// // // //     rows: [
// // // //       ["Electrical", "Polycab / V-Guard / Havells"],
// // // //       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
// // // //       ["Sanitary - Fittings", "Jaquar"],
// // // //       ["Sanitary - Flush Tanks", "Grohe"],
// // // //     ],
// // // //   },
// // // // ];

// // // // const LANDMARKS = [
// // // //   { category: "Education", icon: GraduationCap, places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian Int. School"] },
// // // //   { category: "Business & Industry", icon: Factory, places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"] },
// // // //   { category: "Civic & Everyday", icon: ShieldCheck, places: ["Police Station", "Sompura Gate"] },
// // // //   { category: "Connectivity", icon: Milestone, places: ["Sarjapura Circle", "Attibele Circle", "Dommasandra", "Whitefield Corridor", "Chandapura Road"] },
// // // // ];

// // // // const staggerContainer: Variants = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // // };

// // // // const fadeIn: Variants = {
// // // //   hidden: { opacity: 0, y: 20 },
// // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // // // };

// // // // export default function ConfidentAtriaPage() {
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [isUnlocked, setIsUnlocked] = useState(false);
// // // //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
// // // //   const [formOpenId, setFormOpenId] = useState<string | null>(null);
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const router = useRouter();

// // // //   const handleGlobalFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitting(true);
// // // //     const form = e.currentTarget;
// // // //     const formData = new FormData(form);

// // // //     try {
// // // //       const res = await fetch(FORMSPREE_ENDPOINT, {
// // // //         method: "POST",
// // // //         body: formData,
// // // //         headers: { Accept: "application/json" },
// // // //       });

// // // //       if (res.ok) {
// // // //         setIsUnlocked(true);
// // // //         setIsModalOpen(false);
// // // //         router.push("/c4/thankyou");
// // // //       } else {
// // // //         alert("Submission error. Please try again.");
// // // //       }
// // // //     } catch {
// // // //       alert("An error occurred. Please check your connection.");
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   const handleUnlockPlanSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitting(true);
// // // //     const formData = new FormData(e.currentTarget);
// // // //     formData.append("Unlocked Unit", planId);

// // // //     try {
// // // //       const res = await fetch(FORMSPREE_ENDPOINT, {
// // // //         method: "POST",
// // // //         body: formData,
// // // //         headers: { Accept: "application/json" },
// // // //       });

// // // //       if (res.ok) {
// // // //         setUnlockedPlans((prev) => ({ ...prev, [planId]: true }));
// // // //         setIsUnlocked(true);
// // // //         setFormOpenId(null);
// // // //       } else {
// // // //         alert("Verification failed. Please try again.");
// // // //       }
// // // //     } catch {
// // // //       alert("Something went wrong. Please check your network connection.");
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden">
      
// // // //       {/* --- HERO IMAGE BANNER --- */}
// // // //       <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
// // // //         <div className="relative w-full max-w-[1536px] mx-auto overflow-hidden aspect-[16/9] md:aspect-[1536/752]">
// // // //           <Image
// // // //             src="https://ik.imagekit.io/j0xzq9pns/svt/Atria%20poster%20web.png"
// // // //             alt="Confident Atria Hero Banner"
// // // //             fill
// // // //             priority
// // // //             className="object-cover md:object-contain"
// // // //           />
// // // //         </div>
// // // //       </section>

// // // //       {/* --- HERO SECTION --- */}
// // // //       <section className="relative w-full min-h-[80vh] bg-black overflow-hidden flex items-center pt-12 pb-16">
// // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// // // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
// // // //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// // // //                 <span className="bg-[#d9a406] text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-widest animate-pulse">
// // // //                   Possession in 4 Months
// // // //                 </span>
// // // //                 <span className="border border-white/20 text-white font-semibold text-xs uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
// // // //                   Sarjapura - Attibele Road
// // // //                 </span>
// // // //               </motion.div>

// // // //               <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
// // // //                 Confident <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Atria</span>
// // // //               </motion.h1>

// // // //               <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
// // // //                 Premium 4 BHK Villa Living in a sprawling 25-acre gated community. Modern architecture, vast green lawns, and ready-to-move-in convenience starting at ₹2 Cr*.
// // // //               </motion.p>

// // // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// // // //                 {["BMRDA Approved", "4 BHK Luxury Villas", "25-Acre Gated Community", "319 Total Units"].map((tag) => (
// // // //                   <span key={tag} className="border border-[#d9a406]/40 text-[#fcd34d] text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// // // //                     {tag}
// // // //                   </span>
// // // //                 ))}
// // // //               </motion.div>

// // // //               <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
// // // //                 <button
// // // //                   onClick={() => setIsModalOpen(true)}
// // // //                   className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,164,6,0.3)] transition-all"
// // // //                 >
// // // //                   Register Your Interest <ArrowRight className="w-5 h-5" />
// // // //                 </button>
// // // //               </motion.div>
// // // //             </motion.div>

// // // //             {/* Right Side: Quick Spec Card */}
// // // //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // // //               <div className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl relative">
// // // //                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
// // // //                 <h3 className="text-2xl font-bold text-white mb-2">Project Overview</h3>
// // // //                 <p className="text-gray-400 text-sm mb-6">Marketed by RRL Group · Built by SVT Developers</p>

// // // //                 <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/10 py-6">
// // // //                   {STATS.map(({ label, value, icon: Icon }) => (
// // // //                     <div key={label} className="flex flex-col">
// // // //                       <div className="flex items-center text-[#d9a406] text-xs font-semibold mb-1">
// // // //                         <Icon className="w-4 h-4 mr-1.5" /> {label}
// // // //                       </div>
// // // //                       <span className="text-white font-bold text-lg">{value}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>

// // // //                 <button
// // // //                   onClick={() => setIsModalOpen(true)}
// // // //                   className="w-full bg-white/10 hover:bg-[#d9a406] hover:text-black text-white font-bold py-3.5 rounded-lg border border-white/20 transition-all text-sm uppercase tracking-wider"
// // // //                 >
// // // //                   Download Complete Brochure
// // // //                 </button>
// // // //               </div>
// // // //             </motion.div>

// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- PROJECT AT A GLANCE --- */}
// // // //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/5">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
// // // //             {[
// // // //               { label: "Community Area", value: "25 Acres" },
// // // //               { label: "Total Inventory", value: "319 Units" },
// // // //               { label: "Villa Built-up", value: "~2,400 Sq.ft" },
// // // //               { label: "Configuration", value: "4 BHK Premium" },
// // // //             ].map((stat, idx) => (
// // // //               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-[#d9a406]/50 transition-all">
// // // //                 <span className="text-2xl md:text-3xl font-bold text-[#d9a406] block mb-2">{stat.value}</span>
// // // //                 <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{stat.label}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- AMENITIES --- */}
// // // //       <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// // // //               World-Class <span className="text-[#d9a406] font-serif italic">Amenities</span>
// // // //             </h2>
// // // //             <p className="text-gray-400 max-w-2xl mx-auto">Every detail considered for your active, modern, and high-end lifestyle.</p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //             {AMENITIES.map((a, i) => (
// // // //               <div key={i} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/50 p-6 rounded-2xl transition-all group">
// // // //                 <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">
// // // //                   <a.icon className="w-6 h-6" />
// // // //                 </div>
// // // //                 <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
// // // //                 <p className="text-gray-400 text-sm leading-relaxed">{a.body}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- FLOOR PLANS / VILLA LAYOUTS --- */}
// // // //       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
// // // //             <div>
// // // //               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
// // // //                 Six Villa Layouts, <span className="text-[#d9a406]">One Address</span>
// // // //               </h2>
// // // //               <p className="text-gray-400 max-w-lg">Villas 12, 12A, 124, 125, 181 and 266 — each planned across ground, first, and terrace levels.</p>
// // // //             </div>
// // // //           </div>

// // // //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             {FLOOR_PLAN_IMAGES.map((img, idx) => (
// // // //               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group relative flex flex-col">
// // // //                 <div className="relative aspect-[3/4] bg-white w-full">
// // // //                   <Image
// // // //                     src={img.src}
// // // //                     alt={img.label}
// // // //                     fill
// // // //                     className={`object-contain p-4 transition-all duration-500 ${!unlockedPlans[img.label] && !isUnlocked ? "blur-md opacity-40 scale-105" : "group-hover:scale-105"}`}
// // // //                   />

// // // //                   {!unlockedPlans[img.label] && !isUnlocked && (
// // // //                     <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
// // // //                       <div className="w-12 h-12 rounded-full bg-[#111] border border-[#d9a406] flex items-center justify-center mb-4">
// // // //                         <Lock className="w-5 h-5 text-[#d9a406]" />
// // // //                       </div>
// // // //                       <p className="text-white font-bold text-base mb-1">{img.label}</p>
// // // //                       <p className="text-xs text-gray-400 mb-4">Unlock to view layout specifications</p>
// // // //                       <button
// // // //                         onClick={() => setFormOpenId(img.label)}
// // // //                         className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
// // // //                       >
// // // //                         Unlock Layout
// // // //                       </button>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>

// // // //                 <div className="p-4 bg-[#111] border-t border-white/5 flex justify-between items-center">
// // // //                   <span className="font-bold text-white text-sm">{img.label}</span>
// // // //                   <span className="text-xs text-[#d9a406] font-semibold">4 BHK · 3 Levels</span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- SITE-WISE AREA TABLE --- */}
// // // //       <section className="py-20 bg-black border-t border-white/5">
// // // //         <div className="container mx-auto px-4 max-w-4xl">
// // // //           <div className="text-center mb-10">
// // // //             <h2 className="text-3xl font-bold text-white mb-2">Available Site Dimensions</h2>
// // // //             <p className="text-gray-400 text-sm">Site-wise plot area variations for available 4 BHK villas</p>
// // // //           </div>

// // // //           <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111]">
// // // //             <table className="w-full text-left text-sm">
// // // //               <thead>
// // // //                 <tr className="border-b border-white/10 bg-white/5 text-[#d9a406]">
// // // //                   <th className="px-6 py-4 font-bold uppercase tracking-wider">Site No.</th>
// // // //                   <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Plot Area (Sq.ft)</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="divide-y divide-white/5 text-gray-300">
// // // //                 {SITE_AREAS.map((row, i) => (
// // // //                   <tr key={row.site} className={i % 2 === 0 ? "bg-black/30" : "bg-transparent"}>
// // // //                     <td className="px-6 py-3.5 font-medium text-white">Villa Site {row.site}</td>
// // // //                     <td className="px-6 py-3.5 text-right font-mono text-[#d9a406]">{row.area}</td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- SPECIFICATIONS --- */}
// // // //       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-[#d9a406]">Specifications</span></h2>
// // // //             <p className="text-gray-400 text-sm">Material honesty and structurally sound engineering</p>
// // // //           </div>

// // // //           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// // // //             {SPECS.map((group) => (
// // // //               <div key={group.group} className="bg-[#111] border border-white/10 rounded-2xl p-8">
// // // //                 <h3 className="text-2xl font-serif text-[#d9a406] italic mb-6">{group.group}</h3>
// // // //                 <dl className="divide-y divide-white/5">
// // // //                   {group.rows.map(([k, v]) => (
// // // //                     <div key={k} className="py-3.5 flex justify-between gap-4 text-sm">
// // // //                       <dt className="text-gray-400 font-normal">{k}</dt>
// // // //                       <dd className="text-white font-medium text-right">{v}</dd>
// // // //                     </div>
// // // //                   ))}
// // // //                 </dl>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- LOCATION & MAP --- */}
// // // //       <section className="py-24 bg-black border-t border-white/5">
// // // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // // //           <div className="grid lg:grid-cols-2 gap-12 items-start">
// // // //             <div>
// // // //               <span className="bg-[#d9a406]/10 border border-[#d9a406]/40 text-[#d9a406] text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">Prime Location</span>
// // // //               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Set at Sarjapura - Attibele Road</h2>
// // // //               <p className="text-gray-400 leading-relaxed mb-8">
// // // //                 Located in one of Bengaluru's fastest-growing residential corridors with exceptional connectivity to IT hubs, Whitefield, and Chandapura Road.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 gap-8">
// // // //                 {LANDMARKS.map(({ category, icon: Icon, places }) => (
// // // //                   <div key={category} className="space-y-3">
// // // //                     <div className="flex items-center gap-2.5 text-[#d9a406] font-bold text-sm uppercase">
// // // //                       <Icon className="w-5 h-5" /> {category}
// // // //                     </div>
// // // //                     <ul className="space-y-1.5 text-xs text-gray-400 pl-2 border-l border-white/10">
// // // //                       {places.map((p) => (
// // // //                         <li key={p}>• {p}</li>
// // // //                       ))}
// // // //                     </ul>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Map Frame */}
// // // //             <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
// // // //               <iframe
// // // //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
// // // //                 width="100%"
// // // //                 height="100%"
// // // //                 style={{ border: 0 }}
// // // //                 allowFullScreen={true}
// // // //                 loading="lazy"
// // // //                 referrerPolicy="no-referrer-when-downgrade"
// // // //                 className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- FOOTER --- */}
// // // //       <footer className="bg-[#050505] py-16 border-t border-white/10">
// // // //         <div className="container mx-auto px-4 max-w-[1280px] text-center">
// // // //           <h2 className="text-3xl font-bold text-white mb-4">Only 12 Villas Remain Available</h2>
// // // //           <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Get in touch with our team to arrange a private site visit.</p>
// // // //           <button
// // // //             onClick={() => setIsModalOpen(true)}
// // // //             className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all"
// // // //           >
// // // //             Enquire Now
// // // //           </button>
// // // //           <p className="text-xs text-gray-600 mt-12">
// // // //             Constructed by SVT Developers & Constructions | Marketed by RRL Group <br />
// // // //             © {new Date().getFullYear()} Confident Atria. All rights reserved.
// // // //           </p>
// // // //         </div>
// // // //       </footer>

// // // //       {/* --- GLOBAL ENQUIRY MODAL --- */}
// // // //       <AnimatePresence>
// // // //         {isModalOpen && (
// // // //           <motion.div
// // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={() => setIsModalOpen(false)}
// // // //           >
// // // //             <motion.div
// // // //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
// // // //               initial={{ scale: 0.9, y: 20 }}
// // // //               animate={{ scale: 1, y: 0 }}
// // // //               exit={{ scale: 0.9, y: 20 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
// // // //                 <X className="w-5 h-5" />
// // // //               </button>

// // // //               <h3 className="text-2xl font-bold text-white mb-2">Register Interest</h3>
// // // //               <p className="text-xs text-gray-400 mb-6">Enter your details to unlock complete villa blueprints & pricing.</p>

// // // //               <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
// // // //                 <input type="hidden" name="Project" value="Confident Atria" />
// // // //                 <input
// // // //                   name="name"
// // // //                   type="text"
// // // //                   placeholder="Full Name *"
// // // //                   required
// // // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // // //                 />
// // // //                 <input
// // // //                   name="phone"
// // // //                   type="tel"
// // // //                   placeholder="Phone Number *"
// // // //                   required
// // // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // // //                 />
// // // //                 <input
// // // //                   name="email"
// // // //                   type="email"
// // // //                   placeholder="Email Address"
// // // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // // //                 />
// // // //                 <button
// // // //                   type="submit"
// // // //                   disabled={isSubmitting}
// // // //                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
// // // //                 >
// // // //                   {isSubmitting ? "Submitting..." : "Submit Enquiry"}
// // // //                 </button>
// // // //               </form>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* --- SPECIFIC LAYOUT UNLOCK DIALOG --- */}
// // // //       <AnimatePresence>
// // // //         {formOpenId && (
// // // //           <motion.div
// // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={() => setFormOpenId(null)}
// // // //           >
// // // //             <motion.div
// // // //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
// // // //               initial={{ scale: 0.9, y: 20 }}
// // // //               animate={{ scale: 1, y: 0 }}
// // // //               exit={{ scale: 0.9, y: 20 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <button onClick={() => setFormOpenId(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
// // // //                 <X className="w-5 h-5" />
// // // //               </button>

// // // //               <h3 className="text-xl font-bold text-white mb-2">Unlock {formOpenId} Blueprint</h3>
// // // //               <p className="text-xs text-gray-400 mb-6">Enter your details to instantly view layout details for {formOpenId}.</p>

// // // //               <form onSubmit={(e) => handleUnlockPlanSubmit(e, formOpenId)} className="space-y-4">
// // // //                 <input
// // // //                   name="name"
// // // //                   type="text"
// // // //                   placeholder="Full Name *"
// // // //                   required
// // // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // // //                 />
// // // //                 <input
// // // //                   name="phone"
// // // //                   type="tel"
// // // //                   placeholder="Phone Number *"
// // // //                   required
// // // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // // //                 />
// // // //                 <input
// // // //                   name="email"
// // // //                   type="email"
// // // //                   placeholder="Email Address"
// // // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // // //                 />
// // // //                 <button
// // // //                   type="submit"
// // // //                   disabled={isSubmitting}
// // // //                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
// // // //                 >
// // // //                   {isSubmitting ? "Unlocking..." : "Unlock Floor Plan"}
// // // //                 </button>
// // // //               </form>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence, Variants } from "framer-motion";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { useRouter } from "next/navigation";
// // // import {
// // //   Phone,
// // //   Mail,
// // //   MapPin,
// // //   X,
// // //   Building2,
// // //   Zap,
// // //   ShieldCheck,
// // //   Award,
// // //   Wind,
// // //   Dumbbell,
// // //   Waves,
// // //   Coffee,
// // //   Trees,
// // //   Maximize2,
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Menu,
// // //   Smartphone,
// // //   User,
// // //   Lock,
// // //   Unlock,
// // //   ArrowLeft,
// // //   Loader2,
// // //   Star,
// // //   BrickWall,
// // //   PaintRoller,
// // //   AppWindow,
// // //   Bath,
// // //   Home as HomeIcon,
// // //   Ruler,
// // //   Layers,
// // //   GraduationCap,
// // //   Factory,
// // //   Milestone,
// // //   IndianRupee,
// // //   Key,
// // //   Download,
// // //   FileText,
// // //   AlertCircle
// // // } from "lucide-react";

// // // // --- Formspree Config ---
// // // const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";
// // // const BROCHURE_URL =
// // //   "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// // // // --- Project Data ---
// // // const PHONES = ["8494966966"];
// // // const ADDRESS = [
// // //   "Confident Atria",
// // //   "Sarjapura - Attibele Road",
// // //   "Bengaluru, Karnataka",
// // // ];

// // // const STATS = [
// // //   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
// // //   { label: "Site Area", value: "1162 sqft", icon: Ruler },
// // //   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
// // //   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// // // ];

// // // const FLOOR_PLAN_IMAGES = [
// // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
// // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
// // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
// // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
// // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
// // //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
// // // ];

// // // const SITE_AREAS = [
// // //   { site: "12", area: "1,162" },
// // //   { site: "12A", area: "1,162" },
// // //   { site: "124", area: "1,302" },
// // //   { site: "125", area: "1,285" },
// // //   { site: "181", area: "1,162" },
// // //   { site: "199", area: "1,346" },
// // //   { site: "202", area: "1,096" },
// // //   { site: "218", area: "1,200" },
// // //   { site: "220", area: "1,200" },
// // //   { site: "221", area: "1,200" },
// // //   { site: "256", area: "1,500" },
// // //   { site: "266", area: "1,200" },
// // // ];

// // // const AMENITIES = [
// // //   { icon: Coffee, title: "Premium Clubhouse", body: "Family & social hub featuring a clubhouse, banquet hall & outdoor amphitheater." },
// // //   { icon: Waves, title: "Large Swimming Pool", body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness." },
// // //   { icon: Award, title: "Sports & Courts", body: "Tennis & basketball courts, dedicated indoor squash, badminton & indoor games." },
// // //   { icon: Dumbbell, title: "Fitness & Tracks", body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks." },
// // //   { icon: Trees, title: "Parks & Open Lawns", body: "Beautiful flower gardens, landscaped open lawns, and a safe children's play area." },
// // //   { icon: ShieldCheck, title: "24/7 Manned Security", body: "Gated community with 24/7 manned security, CCTV surveillance, and visitor parking." },
// // //   { icon: Wind, title: "Eco Infrastructure", body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage." },
// // //   { icon: Zap, title: "Vaastu Compliant", body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance and meditation area." },
// // // ];

// // // const SPECS = [
// // //   {
// // //     group: "Approvals & Layout",
// // //     rows: [
// // //       ["Layout Approval", "BMRDA Approved"],
// // //       ["Layout Extent", "25-Acre Gated Community (319 Units)"],
// // //       ["Layout Name", "Confident Atria"],
// // //       ["Developer", "Confident Group"],
// // //       ["Architect", "STAVBA Infra LLP"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Structure & Envelope",
// // //     rows: [
// // //       ["Building Structure", "RCC Column Frame"],
// // //       ["Walls", "6\" Solid Block"],
// // //       ["Main Door", "Teak Wood with Biometric Digital Lock"],
// // //       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
// // //       ["Windows", "3-Track UPVC, Wooden Pattern"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Interiors & Finishes",
// // //     rows: [
// // //       ["Flooring - Living & Beds", "Vitrified Tiles, 4' x 6'"],
// // //       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
// // //       ["Flooring - Staircase", "Granite"],
// // //       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
// // //       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Electrical & Plumbing",
// // //     rows: [
// // //       ["Electrical", "Polycab / V-Guard / Havells"],
// // //       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
// // //       ["Sanitary - Fittings", "Jaquar"],
// // //       ["Sanitary - Flush Tanks", "Grohe"],
// // //     ],
// // //   },
// // // ];

// // // const LANDMARKS = [
// // //   { category: "Education", icon: GraduationCap, places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian Int. School"] },
// // //   { category: "Business & Industry", icon: Factory, places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"] },
// // //   { category: "Civic & Everyday", icon: ShieldCheck, places: ["Police Station", "Sompura Gate"] },
// // //   { category: "Connectivity", icon: Milestone, places: ["Sarjapura Circle", "Attibele Circle", "Dommasandra", "Whitefield Corridor", "Chandapura Road"] },
// // // ];

// // // const staggerContainer: Variants = {
// // //   hidden: { opacity: 0 },
// // //   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // };

// // // const fadeIn: Variants = {
// // //   hidden: { opacity: 0, y: 20 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // // };

// // // export default function ConfidentAtriaPage() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [isUnlocked, setIsUnlocked] = useState(false);
// // //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
// // //   const [formOpenId, setFormOpenId] = useState<string | null>(null);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const router = useRouter();

// // //   const handleGlobalFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     const form = e.currentTarget;
// // //     const formData = new FormData(form);

// // //     try {
// // //       const res = await fetch(FORMSPREE_ENDPOINT, {
// // //         method: "POST",
// // //         body: formData,
// // //         headers: { Accept: "application/json" },
// // //       });

// // //       if (res.ok) {
// // //         setIsUnlocked(true);
// // //         setIsModalOpen(false);
// // //         router.push("/c4/thankyou");
// // //       } else {
// // //         alert("Submission error. Please try again.");
// // //       }
// // //     } catch {
// // //       alert("An error occurred. Please check your connection.");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const handleUnlockPlanSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     const formData = new FormData(e.currentTarget);
// // //     formData.append("Unlocked Unit", planId);

// // //     try {
// // //       const res = await fetch(FORMSPREE_ENDPOINT, {
// // //         method: "POST",
// // //         body: formData,
// // //         headers: { Accept: "application/json" },
// // //       });

// // //       if (res.ok) {
// // //         setUnlockedPlans((prev) => ({ ...prev, [planId]: true }));
// // //         setIsUnlocked(true);
// // //         setFormOpenId(null);
// // //       } else {
// // //         alert("Verification failed. Please try again.");
// // //       }
// // //     } catch {
// // //       alert("Something went wrong. Please check your network connection.");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden">


// // //  {/* --- HERO BANNER --- */}
// // //      <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
// // //        {/* ===== MOBILE HERO ===== */}
// // //        <div className="block md:hidden">
// // //          <div className="relative w-full aspect-[4/3] overflow-hidden">
// // //            <img
// // //              src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg"
// // //              alt="RRL Hero Banner Mobile"
// // //              loading="eager"
// // //              className="w-full h-full object-contain"
// // //            />
// // //          </div>
// // //        </div>
 
// // //        {/* ===== DESKTOP HERO ===== */}
// // //        <div className="hidden md:block w-full">
// // //          <motion.div
// // //            initial={{ scale: 1.05, opacity: 0 }}
// // //            whileInView={{ scale: 1, opacity: 1 }}
// // //            transition={{ duration: 1.2, ease: "easeOut" }}
// // //            viewport={{ once: true }}
// // //            className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
// // //          >
// // //            <img
// // //              src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-08-03%20at%202.26.40%20PM.jpeg"
// // //              alt="RRL Hero Banner Desktop"
// // //              loading="eager"
// // //              className="w-full h-auto object-contain"
// // //            />
// // //          </motion.div>
// // //        </div>
// // //      </section>
   
// // //       {/* --- HERO SECTION --- */}
// // //       <section className="relative w-full min-h-[80vh] bg-black overflow-hidden flex items-center pt-28 pb-16">
// // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// // //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
// // //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// // //                 <span className="bg-[#d9a406] text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-widest animate-pulse">
// // //                   Possession in 4 Months
// // //                 </span>
// // //                 <span className="border border-white/20 text-white font-semibold text-xs uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
// // //                   Sarjapura - Attibele Road
// // //                 </span>
// // //               </motion.div>

// // //               <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
// // //                 Confident <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Atria</span>
// // //               </motion.h1>

// // //               <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
// // //                 Premium 4 BHK Villa Living in a sprawling 25-acre gated community. Modern architecture, vast green lawns, and ready-to-move-in convenience starting at ₹2 Cr*.
// // //               </motion.p>

// // //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// // //                 {["BMRDA Approved", "4 BHK Luxury Villas", "25-Acre Gated Community", "319 Total Units"].map((tag) => (
// // //                   <span key={tag} className="border border-[#d9a406]/40 text-[#fcd34d] text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// // //                     {tag}
// // //                   </span>
// // //                 ))}
// // //               </motion.div>

// // //               <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
// // //                 <button
// // //                   onClick={() => setIsModalOpen(true)}
// // //                   className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,164,6,0.3)] transition-all"
// // //                 >
// // //                   Register Your Interest <ArrowRight className="w-5 h-5" />
// // //                 </button>
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* Right Side: Hero Contact Form */}
// // //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // //               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden rounded-2xl">
// // //                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
                
// // //                 <div className="mb-6">
// // //                   <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
// // //                   <p className="text-gray-400 text-sm mt-1">Get exclusive offers & details.</p>
// // //                 </div>

// // //                 <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
// // //                   <input type="hidden" name="Project" value="Confident Atria Hero Form" />
// // //                   <div className="relative">
// // //                     <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                     <input
// // //                       name="name"
// // //                       type="text"
// // //                       placeholder="Your Name"
// // //                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="relative">
// // //                     <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                     <input
// // //                       name="phone"
// // //                       type="tel"
// // //                       placeholder="Phone Number"
// // //                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="relative">
// // //                     <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// // //                     <input
// // //                       name="email"
// // //                       type="email"
// // //                       placeholder="Email Address"
// // //                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// // //                     />
// // //                   </div>
// // //                   <button
// // //                     type="submit"
// // //                     disabled={isSubmitting}
// // //                     className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all mt-2"
// // //                   >
// // //                     {isSubmitting ? "Submitting..." : "Get Call Back"}
// // //                   </button>
// // //                 </form>
// // //               </div>
// // //             </motion.div>

// // //           </div>
// // //         </div>
// // //       </section>


// // //       {/* --- PROJECT AT A GLANCE --- */}
// // //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/5">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
// // //             {[
// // //               { label: "Community Area", value: "25 Acres" },
// // //               { label: "Total Inventory", value: "319 Units" },
// // //               { label: "Villa Built-up", value: "~2,400 Sq.ft" },
// // //               { label: "Configuration", value: "4 BHK Premium" },
// // //             ].map((stat, idx) => (
// // //               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-[#d9a406]/50 transition-all">
// // //                 <span className="text-2xl md:text-3xl font-bold text-[#d9a406] block mb-2">{stat.value}</span>
// // //                 <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{stat.label}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- AMENITIES --- */}
// // //       <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// // //               World-Class <span className="text-[#d9a406] font-serif italic">Amenities</span>
// // //             </h2>
// // //             <p className="text-gray-400 max-w-2xl mx-auto">Every detail considered for your active, modern, and high-end lifestyle.</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {AMENITIES.map((a, i) => (
// // //               <div key={i} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/50 p-6 rounded-2xl transition-all group">
// // //                 <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">
// // //                   <a.icon className="w-6 h-6" />
// // //                 </div>
// // //                 <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
// // //                 <p className="text-gray-400 text-sm leading-relaxed">{a.body}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- FLOOR PLANS / VILLA LAYOUTS --- */}
// // //       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
// // //             <div>
// // //               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
// // //                 Six Villa Layouts, <span className="text-[#d9a406]">One Address</span>
// // //               </h2>
// // //               <p className="text-gray-400 max-w-lg">Villas 12, 12A, 124, 125, 181 and 266 — each planned across ground, first, and terrace levels.</p>
// // //             </div>
// // //           </div>

// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {FLOOR_PLAN_IMAGES.map((img, idx) => (
// // //               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group relative flex flex-col">
// // //                 <div className="relative aspect-[3/4] bg-white w-full">
// // //                   <Image
// // //                     src={img.src}
// // //                     alt={img.label}
// // //                     fill
// // //                     className={`object-contain p-4 transition-all duration-500 ${!unlockedPlans[img.label] && !isUnlocked ? "blur-md opacity-40 scale-105" : "group-hover:scale-105"}`}
// // //                   />

// // //                   {!unlockedPlans[img.label] && !isUnlocked && (
// // //                     <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
// // //                       <div className="w-12 h-12 rounded-full bg-[#111] border border-[#d9a406] flex items-center justify-center mb-4">
// // //                         <Lock className="w-5 h-5 text-[#d9a406]" />
// // //                       </div>
// // //                       <p className="text-white font-bold text-base mb-1">{img.label}</p>
// // //                       <p className="text-xs text-gray-400 mb-4">Unlock to view layout specifications</p>
// // //                       <button
// // //                         onClick={() => setFormOpenId(img.label)}
// // //                         className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
// // //                       >
// // //                         Unlock Layout
// // //                       </button>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="p-4 bg-[#111] border-t border-white/5 flex justify-between items-center">
// // //                   <span className="font-bold text-white text-sm">{img.label}</span>
// // //                   <span className="text-xs text-[#d9a406] font-semibold">4 BHK · 3 Levels</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- SITE-WISE AREA TABLE --- */}
// // //       <section className="py-20 bg-black border-t border-white/5">
// // //         <div className="container mx-auto px-4 max-w-4xl">
// // //           <div className="text-center mb-10">
// // //             <h2 className="text-3xl font-bold text-white mb-2">Available Site Dimensions</h2>
// // //             <p className="text-gray-400 text-sm">Site-wise plot area variations for available 4 BHK villas</p>
// // //           </div>

// // //           <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111]">
// // //             <table className="w-full text-left text-sm">
// // //               <thead>
// // //                 <tr className="border-b border-white/10 bg-white/5 text-[#d9a406]">
// // //                   <th className="px-6 py-4 font-bold uppercase tracking-wider">Site No.</th>
// // //                   <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Plot Area (Sq.ft)</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-white/5 text-gray-300">
// // //                 {SITE_AREAS.map((row, i) => (
// // //                   <tr key={row.site} className={i % 2 === 0 ? "bg-black/30" : "bg-transparent"}>
// // //                     <td className="px-6 py-3.5 font-medium text-white">Villa Site {row.site}</td>
// // //                     <td className="px-6 py-3.5 text-right font-mono text-[#d9a406]">{row.area}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- SPECIFICATIONS --- */}
// // //       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-[#d9a406]">Specifications</span></h2>
// // //             <p className="text-gray-400 text-sm">Material honesty and structurally sound engineering</p>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// // //             {SPECS.map((group) => (
// // //               <div key={group.group} className="bg-[#111] border border-white/10 rounded-2xl p-8">
// // //                 <h3 className="text-2xl font-serif text-[#d9a406] italic mb-6">{group.group}</h3>
// // //                 <dl className="divide-y divide-white/5">
// // //                   {group.rows.map(([k, v]) => (
// // //                     <div key={k} className="py-3.5 flex justify-between gap-4 text-sm">
// // //                       <dt className="text-gray-400 font-normal">{k}</dt>
// // //                       <dd className="text-white font-medium text-right">{v}</dd>
// // //                     </div>
// // //                   ))}
// // //                 </dl>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- LOCATION & MAP --- */}
// // //       <section className="py-24 bg-black border-t border-white/5">
// // //         <div className="container mx-auto px-4 max-w-[1280px]">
// // //           <div className="grid lg:grid-cols-2 gap-12 items-start">
// // //             <div>
// // //               <span className="bg-[#d9a406]/10 border border-[#d9a406]/40 text-[#d9a406] text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">Prime Location</span>
// // //               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Set at Sarjapura - Attibele Road</h2>
// // //               <p className="text-gray-400 leading-relaxed mb-8">
// // //                 Located in one of Bengaluru's fastest-growing residential corridors with exceptional connectivity to IT hubs, Whitefield, and Chandapura Road.
// // //               </p>

// // //               <div className="grid sm:grid-cols-2 gap-8">
// // //                 {LANDMARKS.map(({ category, icon: Icon, places }) => (
// // //                   <div key={category} className="space-y-3">
// // //                     <div className="flex items-center gap-2.5 text-[#d9a406] font-bold text-sm uppercase">
// // //                       <Icon className="w-5 h-5" /> {category}
// // //                     </div>
// // //                     <ul className="space-y-1.5 text-xs text-gray-400 pl-2 border-l border-white/10">
// // //                       {places.map((p) => (
// // //                         <li key={p}>• {p}</li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Map Frame */}
// // //             <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
// // //               <iframe
// // //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
// // //                 width="100%"
// // //                 height="100%"
// // //                 style={{ border: 0 }}
// // //                 allowFullScreen={true}
// // //                 loading="lazy"
// // //                 referrerPolicy="no-referrer-when-downgrade"
// // //                 className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- FOOTER --- */}
// // //       <footer className="bg-[#050505] py-16 border-t border-white/10">
// // //         <div className="container mx-auto px-4 max-w-[1280px] text-center">
// // //           <h2 className="text-3xl font-bold text-white mb-4">Only 12 Villas Remain Available</h2>
// // //           <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Get in touch with our team to arrange a private site visit.</p>
// // //           <button
// // //             onClick={() => setIsModalOpen(true)}
// // //             className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all"
// // //           >
// // //             Enquire Now
// // //           </button>
// // //           <p className="text-xs text-gray-600 mt-12">
// // //             Constructed by SVT Developers & Constructions | Marketed by RRL Group <br />
// // //             © {new Date().getFullYear()} Confident Atria. All rights reserved.
// // //           </p>
// // //         </div>
// // //       </footer>

// // //       {/* --- GLOBAL ENQUIRY MODAL --- */}
// // //       <AnimatePresence>
// // //         {isModalOpen && (
// // //           <motion.div
// // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsModalOpen(false)}
// // //           >
// // //             <motion.div
// // //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
// // //               initial={{ scale: 0.9, y: 20 }}
// // //               animate={{ scale: 1, y: 0 }}
// // //               exit={{ scale: 0.9, y: 20 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
// // //                 <X className="w-5 h-5" />
// // //               </button>

// // //               <h3 className="text-2xl font-bold text-white mb-2">Register Interest</h3>
// // //               <p className="text-xs text-gray-400 mb-6">Enter your details to unlock complete villa blueprints & pricing.</p>

// // //               <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
// // //                 <input type="hidden" name="Project" value="Confident Atria" />
// // //                 <input
// // //                   name="name"
// // //                   type="text"
// // //                   placeholder="Full Name *"
// // //                   required
// // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // //                 />
// // //                 <input
// // //                   name="phone"
// // //                   type="tel"
// // //                   placeholder="Phone Number *"
// // //                   required
// // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // //                 />
// // //                 <input
// // //                   name="email"
// // //                   type="email"
// // //                   placeholder="Email Address"
// // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // //                 />
// // //                 <button
// // //                   type="submit"
// // //                   disabled={isSubmitting}
// // //                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
// // //                 >
// // //                   {isSubmitting ? "Submitting..." : "Submit Enquiry"}
// // //                 </button>
// // //               </form>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* --- SPECIFIC LAYOUT UNLOCK DIALOG --- */}
// // //       <AnimatePresence>
// // //         {formOpenId && (
// // //           <motion.div
// // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setFormOpenId(null)}
// // //           >
// // //             <motion.div
// // //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
// // //               initial={{ scale: 0.9, y: 20 }}
// // //               animate={{ scale: 1, y: 0 }}
// // //               exit={{ scale: 0.9, y: 20 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <button onClick={() => setFormOpenId(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
// // //                 <X className="w-5 h-5" />
// // //               </button>

// // //               <h3 className="text-xl font-bold text-white mb-2">Unlock {formOpenId} Blueprint</h3>
// // //               <p className="text-xs text-gray-400 mb-6">Enter your details to instantly view layout details for {formOpenId}.</p>

// // //               <form onSubmit={(e) => handleUnlockPlanSubmit(e, formOpenId)} className="space-y-4">
// // //                 <input
// // //                   name="name"
// // //                   type="text"
// // //                   placeholder="Full Name *"
// // //                   required
// // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // //                 />
// // //                 <input
// // //                   name="phone"
// // //                   type="tel"
// // //                   placeholder="Phone Number *"
// // //                   required
// // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // //                 />
// // //                 <input
// // //                   name="email"
// // //                   type="email"
// // //                   placeholder="Email Address"
// // //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// // //                 />
// // //                 <button
// // //                   type="submit"
// // //                   disabled={isSubmitting}
// // //                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
// // //                 >
// // //                   {isSubmitting ? "Unlocking..." : "Unlock Floor Plan"}
// // //                 </button>
// // //               </form>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //     </main>
// // //   );
// // // }

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence, Variants } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import {
// //   Phone,
// //   Mail,
// //   MapPin,
// //   X,
// //   Building2,
// //   Zap,
// //   ShieldCheck,
// //   Award,
// //   Wind,
// //   Dumbbell,
// //   Waves,
// //   Coffee,
// //   Trees,
// //   Maximize2,
// //   ArrowRight,
// //   CheckCircle2,
// //   Menu,
// //   Smartphone,
// //   User,
// //   Lock,
// //   Unlock,
// //   ArrowLeft,
// //   Loader2,
// //   Star,
// //   BrickWall,
// //   PaintRoller,
// //   AppWindow,
// //   Bath,
// //   Home as HomeIcon,
// //   Ruler,
// //   Layers,
// //   GraduationCap,
// //   Factory,
// //   Milestone,
// //   IndianRupee,
// //   Key,
// //   Download,
// //   FileText,
// //   AlertCircle
// // } from "lucide-react";

// // // --- Formspree Config ---
// // const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";
// // const BROCHURE_URL =
// //   "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// // // --- Project Data ---
// // const PHONES = ["8494966966"];
// // const ADDRESS = [
// //   "Confident Atria",
// //   "Sarjapura - Attibele Road",
// //   "Bengaluru, Karnataka",
// // ];

// // const STATS = [
// //   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
// //   { label: "Site Area", value: "1162 sqft", icon: Ruler },
// //   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
// //   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// // ];

// // const FLOOR_PLAN_IMAGES = [
// //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
// //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
// //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
// //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
// //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
// //   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
// // ];

// // const SITE_AREAS = [
// //   { site: "12", area: "1,162" },
// //   { site: "12A", area: "1,162" },
// //   { site: "124", area: "1,302" },
// //   { site: "125", area: "1,285" },
// //   { site: "181", area: "1,162" },
// //   { site: "199", area: "1,346" },
// //   { site: "202", area: "1,096" },
// //   { site: "218", area: "1,200" },
// //   { site: "220", area: "1,200" },
// //   { site: "221", area: "1,200" },
// //   { site: "256", area: "1,500" },
// //   { site: "266", area: "1,200" },
// // ];

// // const AMENITIES = [
// //   { icon: Coffee, title: "Premium Clubhouse", body: "Family & social hub featuring a clubhouse, banquet hall & outdoor amphitheater." },
// //   { icon: Waves, title: "Large Swimming Pool", body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness." },
// //   { icon: Award, title: "Sports & Courts", body: "Tennis & basketball courts, dedicated indoor squash, badminton & indoor games." },
// //   { icon: Dumbbell, title: "Fitness & Tracks", body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks." },
// //   { icon: Trees, title: "Parks & Open Lawns", body: "Beautiful flower gardens, landscaped open lawns, and a safe children's play area." },
// //   { icon: ShieldCheck, title: "24/7 Manned Security", body: "Gated community with 24/7 manned security, CCTV surveillance, and visitor parking." },
// //   { icon: Wind, title: "Eco Infrastructure", body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage." },
// //   { icon: Zap, title: "Vaastu Compliant", body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance and meditation area." },
// // ];

// // // --- NEW: VILLA INTERIOR IMAGES ---
// // const VILLA_INTERIORS = [
// //   "https://ik.imagekit.io/j0xzq9pns/palm-altezze%20(20).jpeg",
// //   "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766051893/Copy_of_HOME_HERO_1_yqcpcn.png",
// //   "https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg",
// // ];

// // const SPECS = [
// //   {
// //     group: "Approvals & Layout",
// //     rows: [
// //       ["Layout Approval", "BMRDA Approved"],
// //       ["Layout Extent", "25-Acre Gated Community (319 Units)"],
// //       ["Layout Name", "Confident Atria"],
// //       ["Developer", "Confident Group"],
// //       ["Architect", "STAVBA Infra LLP"],
// //     ],
// //   },
// //   {
// //     group: "Structure & Envelope",
// //     rows: [
// //       ["Building Structure", "RCC Column Frame"],
// //       ["Walls", "6\" Solid Block"],
// //       ["Main Door", "Teak Wood with Biometric Digital Lock"],
// //       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
// //       ["Windows", "3-Track UPVC, Wooden Pattern"],
// //     ],
// //   },
// //   {
// //     group: "Interiors & Finishes",
// //     rows: [
// //       ["Flooring - Living & Beds", "Vitrified Tiles, 4' x 6'"],
// //       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
// //       ["Flooring - Staircase", "Granite"],
// //       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
// //       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
// //     ],
// //   },
// //   {
// //     group: "Electrical & Plumbing",
// //     rows: [
// //       ["Electrical", "Polycab / V-Guard / Havells"],
// //       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
// //       ["Sanitary - Fittings", "Jaquar"],
// //       ["Sanitary - Flush Tanks", "Grohe"],
// //     ],
// //   },
// // ];

// // const LANDMARKS = [
// //   { category: "Education", icon: GraduationCap, places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian Int. School"] },
// //   { category: "Business & Industry", icon: Factory, places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"] },
// //   { category: "Civic & Everyday", icon: ShieldCheck, places: ["Police Station", "Sompura Gate"] },
// //   { category: "Connectivity", icon: Milestone, places: ["Sarjapura Circle", "Attibele Circle", "Dommasandra", "Whitefield Corridor", "Chandapura Road"] },
// // ];

// // const staggerContainer: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // };

// // const fadeIn: Variants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // };

// // export default function ConfidentAtriaPage() {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isUnlocked, setIsUnlocked] = useState(false);
// //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
// //   const [formOpenId, setFormOpenId] = useState<string | null>(null);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const router = useRouter();

// //   const handleGlobalFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     const form = e.currentTarget;
// //     const formData = new FormData(form);

// //     try {
// //       const res = await fetch(FORMSPREE_ENDPOINT, {
// //         method: "POST",
// //         body: formData,
// //         headers: { Accept: "application/json" },
// //       });

// //       if (res.ok) {
// //         setIsUnlocked(true);
// //         setIsModalOpen(false);
// //         router.push("/c4/thankyou");
// //       } else {
// //         alert("Submission error. Please try again.");
// //       }
// //     } catch {
// //       alert("An error occurred. Please check your connection.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleUnlockPlanSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     const formData = new FormData(e.currentTarget);
// //     formData.append("Unlocked Unit", planId);

// //     try {
// //       const res = await fetch(FORMSPREE_ENDPOINT, {
// //         method: "POST",
// //         body: formData,
// //         headers: { Accept: "application/json" },
// //       });

// //       if (res.ok) {
// //         setUnlockedPlans((prev) => ({ ...prev, [planId]: true }));
// //         setIsUnlocked(true);
// //         setFormOpenId(null);
// //       } else {
// //         alert("Verification failed. Please try again.");
// //       }
// //     } catch {
// //       alert("Something went wrong. Please check your network connection.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden">


// //  {/* --- HERO BANNER --- */}
// //       <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
// //         {/* ===== MOBILE HERO ===== */}
// //         <div className="block md:hidden">
// //           <div className="relative w-full aspect-[4/3] overflow-hidden">
// //             <img
// //               src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg"
// //               alt="RRL Hero Banner Mobile"
// //               loading="eager"
// //               className="w-full h-full object-contain"
// //             />
// //           </div>
// //         </div>
 
// //         {/* ===== DESKTOP HERO ===== */}
// //         <div className="hidden md:block w-full">
// //           <motion.div
// //             initial={{ scale: 1.05, opacity: 0 }}
// //             whileInView={{ scale: 1, opacity: 1 }}
// //             transition={{ duration: 1.2, ease: "easeOut" }}
// //             viewport={{ once: true }}
// //             className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
// //           >
// //             <img
// //               src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-08-03%20at%202.26.40%20PM.jpeg"
// //               alt="RRL Hero Banner Desktop"
// //               loading="eager"
// //               className="w-full h-auto object-contain"
// //             />
// //           </motion.div>
// //         </div>
// //       </section>
    
// //       {/* --- HERO SECTION --- */}
// //       <section className="relative w-full min-h-[80vh] bg-black overflow-hidden flex items-center pt-28 pb-16">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
// //         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
// //             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
// //                 <span className="bg-[#d9a406] text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-widest animate-pulse">
// //                   Possession in 4 Months
// //                 </span>
// //                 <span className="border border-white/20 text-white font-semibold text-xs uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
// //                   Sarjapura - Attibele Road
// //                 </span>
// //               </motion.div>

// //               <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
// //                 Confident <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Atria</span>
// //               </motion.h1>

// //               <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
// //                 Premium 4 BHK Villa Living in a sprawling 25-acre gated community. Modern architecture, vast green lawns, and ready-to-move-in convenience starting at ₹2 Cr*.
// //               </motion.p>

// //               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
// //                 {["BMRDA Approved", "4 BHK Luxury Villas", "25-Acre Gated Community", "319 Total Units"].map((tag) => (
// //                   <span key={tag} className="border border-[#d9a406]/40 text-[#fcd34d] text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </motion.div>

// //               <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
// //                 <button
// //                   onClick={() => setIsModalOpen(true)}
// //                   className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,164,6,0.3)] transition-all"
// //                 >
// //                   Register Your Interest <ArrowRight className="w-5 h-5" />
// //                 </button>
// //               </motion.div>
// //             </motion.div>

// //             {/* Right Side: Hero Contact Form */}
// //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
// //               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden rounded-2xl">
// //                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
                
// //                 <div className="mb-6">
// //                   <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
// //                   <p className="text-gray-400 text-sm mt-1">Get exclusive offers & details.</p>
// //                 </div>

// //                 <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
// //                   <input type="hidden" name="Project" value="Confident Atria Hero Form" />
// //                   <div className="relative">
// //                     <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                     <input
// //                       name="name"
// //                       type="text"
// //                       placeholder="Your Name"
// //                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// //                       required
// //                     />
// //                   </div>
// //                   <div className="relative">
// //                     <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                     <input
// //                       name="phone"
// //                       type="tel"
// //                       placeholder="Phone Number"
// //                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// //                       required
// //                     />
// //                   </div>
// //                   <div className="relative">
// //                     <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
// //                     <input
// //                       name="email"
// //                       type="email"
// //                       placeholder="Email Address"
// //                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all mt-2"
// //                   >
// //                     {isSubmitting ? "Submitting..." : "Get Call Back"}
// //                   </button>
// //                 </form>
// //               </div>
// //             </motion.div>

// //           </div>
// //         </div>
// //       </section>


// //       {/* --- PROJECT AT A GLANCE --- */}
// //       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/5">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
// //             {[
// //               { label: "Community Area", value: "25 Acres" },
// //               { label: "Total Inventory", value: "319 Units" },
// //               { label: "Villa Built-up", value: "~2,400 Sq.ft" },
// //               { label: "Configuration", value: "4 BHK Premium" },
// //             ].map((stat, idx) => (
// //               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-[#d9a406]/50 transition-all">
// //                 <span className="text-2xl md:text-3xl font-bold text-[#d9a406] block mb-2">{stat.value}</span>
// //                 <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{stat.label}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- AMENITIES --- */}
// //       <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// //               World-Class <span className="text-[#d9a406] font-serif italic">Amenities</span>
// //             </h2>
// //             <p className="text-gray-400 max-w-2xl mx-auto">Every detail considered for your active, modern, and high-end lifestyle.</p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {AMENITIES.map((a, i) => (
// //               <div key={i} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/50 p-6 rounded-2xl transition-all group">
// //                 <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">
// //                   <a.icon className="w-6 h-6" />
// //                 </div>
// //                 <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
// //                 <p className="text-gray-400 text-sm leading-relaxed">{a.body}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- NEW: VILLA INTERIORS GALLERY --- */}
// //       <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d9a406]/5 rounded-full blur-[150px] pointer-events-none"></div>
// //         <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
// //           <div className="text-center mb-16">
// //             <div className="inline-flex items-center gap-2 rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 px-5 py-2 text-[#d9a406] mb-6">
// //               <Star className="h-4 w-4" />
// //               <span className="text-xs font-bold uppercase tracking-[0.2em]">Grand Interiors</span>
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// //               Inside The <span className="text-[#d9a406] font-serif italic">Villa</span>
// //             </h2>
// //             <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into the premium finishes, spacious living areas, and luxurious aesthetic of your future home.</p>
// //           </div>

// //           {/* Premium Bento Grid Layout */}
// //           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[600px]">
// //             {/* Main Highlight Image */}
// //             <motion.div 
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.7 }}
// //               className="md:col-span-8 relative rounded-3xl overflow-hidden group border border-white/10 hover:border-[#d9a406]/40 transition-colors h-[300px] md:h-full"
// //             >
// //               <Image 
// //                 src={VILLA_INTERIORS[0]} 
// //                 alt="Living Area Interior" 
// //                 fill 
// //                 className="object-cover transition-transform duration-700 group-hover:scale-105"
// //                 unoptimized
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
// //               <div className="absolute bottom-6 left-6 right-6">
// //                 <h3 className="text-2xl font-serif text-white mb-2">Double-Height Living Spaces</h3>
// //                 <p className="text-sm text-gray-300">Spacious and well-lit interiors designed for grandeur.</p>
// //               </div>
// //             </motion.div>

// //             {/* Side Images */}
// //             <div className="md:col-span-4 flex flex-col gap-4 md:gap-6 h-full">
// //               <motion.div 
// //                 initial={{ opacity: 0, x: 30 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: 0.2 }}
// //                 className="relative flex-1 rounded-3xl overflow-hidden group border border-white/10 hover:border-[#d9a406]/40 transition-colors h-[250px] md:h-auto"
// //               >
// //                 <Image 
// //                   src={VILLA_INTERIORS[1]} 
// //                   alt="Premium Finishes" 
// //                   fill 
// //                   className="object-cover transition-transform duration-700 group-hover:scale-105"
// //                   unoptimized
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
// //                 <div className="absolute bottom-5 left-5 right-5">
// //                   <h4 className="text-lg font-bold text-white">Exquisite Materials</h4>
// //                 </div>
// //               </motion.div>

// //               <motion.div 
// //                 initial={{ opacity: 0, x: 30 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: 0.4 }}
// //                 className="relative flex-1 rounded-3xl overflow-hidden group border border-white/10 hover:border-[#d9a406]/40 transition-colors h-[250px] md:h-auto"
// //               >
// //                 <Image 
// //                   src={VILLA_INTERIORS[2]} 
// //                   alt="Modern Architecture" 
// //                   fill 
// //                   className="object-cover transition-transform duration-700 group-hover:scale-105"
// //                   unoptimized
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
// //                 <div className="absolute bottom-5 left-5 right-5">
// //                   <h4 className="text-lg font-bold text-white">Modern Facades</h4>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- FLOOR PLANS / VILLA LAYOUTS --- */}
// //       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
// //             <div>
// //               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
// //                 Six Villa Layouts, <span className="text-[#d9a406]">One Address</span>
// //               </h2>
// //               <p className="text-gray-400 max-w-lg">Villas 12, 12A, 124, 125, 181 and 266 — each planned across ground, first, and terrace levels.</p>
// //             </div>
// //           </div>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {FLOOR_PLAN_IMAGES.map((img, idx) => (
// //               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group relative flex flex-col">
// //                 <div className="relative aspect-[3/4] bg-white w-full">
// //                   <Image
// //                     src={img.src}
// //                     alt={img.label}
// //                     fill
// //                     className={`object-contain p-4 transition-all duration-500 ${!unlockedPlans[img.label] && !isUnlocked ? "blur-md opacity-40 scale-105" : "group-hover:scale-105"}`}
// //                   />

// //                   {!unlockedPlans[img.label] && !isUnlocked && (
// //                     <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
// //                       <div className="w-12 h-12 rounded-full bg-[#111] border border-[#d9a406] flex items-center justify-center mb-4">
// //                         <Lock className="w-5 h-5 text-[#d9a406]" />
// //                       </div>
// //                       <p className="text-white font-bold text-base mb-1">{img.label}</p>
// //                       <p className="text-xs text-gray-400 mb-4">Unlock to view layout specifications</p>
// //                       <button
// //                         onClick={() => setFormOpenId(img.label)}
// //                         className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
// //                       >
// //                         Unlock Layout
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="p-4 bg-[#111] border-t border-white/5 flex justify-between items-center">
// //                   <span className="font-bold text-white text-sm">{img.label}</span>
// //                   <span className="text-xs text-[#d9a406] font-semibold">4 BHK · 3 Levels</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- SITE-WISE AREA TABLE --- */}
// //       <section className="py-20 bg-black border-t border-white/5">
// //         <div className="container mx-auto px-4 max-w-4xl">
// //           <div className="text-center mb-10">
// //             <h2 className="text-3xl font-bold text-white mb-2">Available Site Dimensions</h2>
// //             <p className="text-gray-400 text-sm">Site-wise plot area variations for available 4 BHK villas</p>
// //           </div>

// //           <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111]">
// //             <table className="w-full text-left text-sm">
// //               <thead>
// //                 <tr className="border-b border-white/10 bg-white/5 text-[#d9a406]">
// //                   <th className="px-6 py-4 font-bold uppercase tracking-wider">Site No.</th>
// //                   <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Plot Area (Sq.ft)</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-white/5 text-gray-300">
// //                 {SITE_AREAS.map((row, i) => (
// //                   <tr key={row.site} className={i % 2 === 0 ? "bg-black/30" : "bg-transparent"}>
// //                     <td className="px-6 py-3.5 font-medium text-white">Villa Site {row.site}</td>
// //                     <td className="px-6 py-3.5 text-right font-mono text-[#d9a406]">{row.area}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- SPECIFICATIONS --- */}
// //       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-[#d9a406]">Specifications</span></h2>
// //             <p className="text-gray-400 text-sm">Material honesty and structurally sound engineering</p>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// //             {SPECS.map((group) => (
// //               <div key={group.group} className="bg-[#111] border border-white/10 rounded-2xl p-8">
// //                 <h3 className="text-2xl font-serif text-[#d9a406] italic mb-6">{group.group}</h3>
// //                 <dl className="divide-y divide-white/5">
// //                   {group.rows.map(([k, v]) => (
// //                     <div key={k} className="py-3.5 flex justify-between gap-4 text-sm">
// //                       <dt className="text-gray-400 font-normal">{k}</dt>
// //                       <dd className="text-white font-medium text-right">{v}</dd>
// //                     </div>
// //                   ))}
// //                 </dl>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- LOCATION & MAP --- */}
// //       <section className="py-24 bg-black border-t border-white/5">
// //         <div className="container mx-auto px-4 max-w-[1280px]">
// //           <div className="grid lg:grid-cols-2 gap-12 items-start">
// //             <div>
// //               <span className="bg-[#d9a406]/10 border border-[#d9a406]/40 text-[#d9a406] text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">Prime Location</span>
// //               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Set at Sarjapura - Attibele Road</h2>
// //               <p className="text-gray-400 leading-relaxed mb-8">
// //                 Located in one of Bengaluru's fastest-growing residential corridors with exceptional connectivity to IT hubs, Whitefield, and Chandapura Road.
// //               </p>

// //               <div className="grid sm:grid-cols-2 gap-8">
// //                 {LANDMARKS.map(({ category, icon: Icon, places }) => (
// //                   <div key={category} className="space-y-3">
// //                     <div className="flex items-center gap-2.5 text-[#d9a406] font-bold text-sm uppercase">
// //                       <Icon className="w-5 h-5" /> {category}
// //                     </div>
// //                     <ul className="space-y-1.5 text-xs text-gray-400 pl-2 border-l border-white/10">
// //                       {places.map((p) => (
// //                         <li key={p}>• {p}</li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Map Frame */}
// //             <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen={true}
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //                 className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- FOOTER --- */}
// //       <footer className="bg-[#050505] py-16 border-t border-white/10">
// //         <div className="container mx-auto px-4 max-w-[1280px] text-center">
// //           <h2 className="text-3xl font-bold text-white mb-4">Only 12 Villas Remain Available</h2>
// //           <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Get in touch with our team to arrange a private site visit.</p>
// //           <button
// //             onClick={() => setIsModalOpen(true)}
// //             className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all"
// //           >
// //             Enquire Now
// //           </button>
// //           <p className="text-xs text-gray-600 mt-12">
// //             Constructed by SVT Developers & Constructions | Marketed by RRL Group <br />
// //             © {new Date().getFullYear()} Confident Atria. All rights reserved.
// //           </p>
// //         </div>
// //       </footer>

// //       {/* --- GLOBAL ENQUIRY MODAL --- */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div
// //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setIsModalOpen(false)}
// //           >
// //             <motion.div
// //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
// //                 <X className="w-5 h-5" />
// //               </button>

// //               <h3 className="text-2xl font-bold text-white mb-2">Register Interest</h3>
// //               <p className="text-xs text-gray-400 mb-6">Enter your details to unlock complete villa blueprints & pricing.</p>

// //               <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
// //                 <input type="hidden" name="Project" value="Confident Atria" />
// //                 <input
// //                   name="name"
// //                   type="text"
// //                   placeholder="Full Name *"
// //                   required
// //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// //                 />
// //                 <input
// //                   name="phone"
// //                   type="tel"
// //                   placeholder="Phone Number *"
// //                   required
// //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// //                 />
// //                 <input
// //                   name="email"
// //                   type="email"
// //                   placeholder="Email Address"
// //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// //                 />
// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
// //                 >
// //                   {isSubmitting ? "Submitting..." : "Submit Enquiry"}
// //                 </button>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* --- SPECIFIC LAYOUT UNLOCK DIALOG --- */}
// //       <AnimatePresence>
// //         {formOpenId && (
// //           <motion.div
// //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setFormOpenId(null)}
// //           >
// //             <motion.div
// //               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button onClick={() => setFormOpenId(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
// //                 <X className="w-5 h-5" />
// //               </button>

// //               <h3 className="text-xl font-bold text-white mb-2">Unlock {formOpenId} Blueprint</h3>
// //               <p className="text-xs text-gray-400 mb-6">Enter your details to instantly view layout details for {formOpenId}.</p>

// //               <form onSubmit={(e) => handleUnlockPlanSubmit(e, formOpenId)} className="space-y-4">
// //                 <input
// //                   name="name"
// //                   type="text"
// //                   placeholder="Full Name *"
// //                   required
// //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// //                 />
// //                 <input
// //                   name="phone"
// //                   type="tel"
// //                   placeholder="Phone Number *"
// //                   required
// //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// //                 />
// //                 <input
// //                   name="email"
// //                   type="email"
// //                   placeholder="Email Address"
// //                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
// //                 />
// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
// //                 >
// //                   {isSubmitting ? "Unlocking..." : "Unlock Floor Plan"}
// //                 </button>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //     </main>
// //   );
// // }

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   X,
//   Building2,
//   Zap,
//   ShieldCheck,
//   Award,
//   Wind,
//   Dumbbell,
//   Waves,
//   Coffee,
//   Trees,
//   Maximize2,
//   ArrowRight,
//   CheckCircle2,
//   Menu,
//   Smartphone,
//   User,
//   Lock,
//   Unlock,
//   ArrowLeft,
//   Loader2,
//   Star,
//   BrickWall,
//   PaintRoller,
//   AppWindow,
//   Bath,
//   Home as HomeIcon,
//   Ruler,
//   Layers,
//   GraduationCap,
//   Factory,
//   Milestone,
//   IndianRupee,
//   Key,
//   Download,
//   FileText,
//   AlertCircle,
//   Hammer
// } from "lucide-react";

// // --- Formspree Config ---
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";
// const BROCHURE_URL =
//   "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// // --- Project Data ---
// const PHONES = ["8494966966"];
// const ADDRESS = [
//   "Confident Atria",
//   "Sarjapura - Attibele Road",
//   "Bengaluru, Karnataka",
// ];

// const STATS = [
//   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
//   { label: "Site Area", value: "1162 sqft", icon: Ruler },
//   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
//   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// ];

// const FLOOR_PLAN_IMAGES = [
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
// ];

// const SITE_AREAS = [
//   { site: "12", area: "1,162" },
//   { site: "12A", area: "1,162" },
//   { site: "124", area: "1,302" },
//   { site: "125", area: "1,285" },
//   { site: "181", area: "1,162" },
//   { site: "199", area: "1,346" },
//   { site: "202", area: "1,096" },
//   { site: "218", area: "1,200" },
//   { site: "220", area: "1,200" },
//   { site: "221", area: "1,200" },
//   { site: "256", area: "1,500" },
//   { site: "266", area: "1,200" },
// ];

// const AMENITIES = [
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko.png?updatedAt=1785396370955",
//     title: "Premium Clubhouse",
//     body: "A Family & Social hub featuring a premium clubhouse, banquet hall, and an outdoor amphitheater.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(2).png?updatedAt=1785396365858",
//     title: "Large Swimming Pool",
//     body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(3).png?updatedAt=1785396383525",
//     title: "Sports & Courts",
//     body: "Tennis & basketball courts, dedicated indoor squash and badminton courts, and an indoor games room.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_yausmlyausmlyaus%20(1).png",
//     title: "Fitness & Tracks",
//     body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/park.jpeg",
//     title: "Parks & Open Lawns",
//     body: "Beautiful flower gardens, landscaped open lawns, and a dedicated safe children's play area.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(6).png?updatedAt=1785396365950",
//     title: "24/7 Manned Security",
//     body: "Fully gated community with 24/7 manned security, extensive CCTV surveillance, and visitor parking.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(5).png?updatedAt=1785396386864",
//     title: "Eco-Friendly Infrastructure",
//     body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage systems.",
//   },
//   {
//     image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(7).png?updatedAt=1785396380395",
//     title: "Vaastu Compliant",
//     body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
//   },
// ];

// const VILLA_IMAGES = [
//   "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_11_25-PM.png", 
//   "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/image%20(5).png",
//   "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_14_35-PM.png",
//   "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/image%20(6).png",
//   "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_14_44-PM.png",
//   "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_07_10-PM.png",
// ];

// const SPECS = [
//   {
//     group: "Approvals & Layout",
//     rows: [
//       ["Layout Approval", "BMRDA Approved"],
//       ["Layout Extent", "25-Acre Gated Community (319 Units)"],
//       ["Layout Name", "Confident Atria"],
//       ["Developer", "Confident Group"],
//       ["Architect", "STAVBA Infra LLP"],
//     ],
//   },
//   {
//     group: "Structure & Envelope",
//     rows: [
//       ["Building Structure", "RCC Column Frame"],
//       ["Walls", "6\" Solid Block"],
//       ["Main Door", "Teak Wood with Biometric Digital Lock"],
//       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
//       ["Windows", "3-Track UPVC, Wooden Pattern"],
//     ],
//   },
//   {
//     group: "Interiors & Finishes",
//     rows: [
//       ["Flooring - Living & Beds", "Vitrified Tiles, 4' x 6'"],
//       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
//       ["Flooring - Staircase", "Granite"],
//       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
//       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
//     ],
//   },
//   {
//     group: "Electrical & Plumbing",
//     rows: [
//       ["Electrical", "Polycab / V-Guard / Havells"],
//       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
//       ["Sanitary - Fittings", "Jaquar"],
//       ["Sanitary - Flush Tanks", "Grohe"],
//     ],
//   },
// ];

// const LANDMARKS = [
//   { category: "Education", icon: GraduationCap, places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian Int. School"] },
//   { category: "Business & Industry", icon: Factory, places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"] },
//   { category: "Civic & Everyday", icon: ShieldCheck, places: ["Police Station", "Sompura Gate"] },
//   { category: "Connectivity", icon: Milestone, places: ["Sarjapura Circle", "Attibele Circle", "Dommasandra", "Whitefield Corridor", "Chandapura Road"] },
// ];

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function ConfidentAtriaPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
//   const [formOpenId, setFormOpenId] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   const handleGlobalFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const res = await fetch(FORMSPREE_ENDPOINT, {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" },
//       });

//       if (res.ok) {
//         setIsUnlocked(true);
//         setIsModalOpen(false);
//         router.push("/c4/thankyou");
//       } else {
//         alert("Submission error. Please try again.");
//       }
//     } catch {
//       alert("An error occurred. Please check your connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleUnlockPlanSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const formData = new FormData(e.currentTarget);
//     formData.append("Unlocked Unit", planId);

//     try {
//       const res = await fetch(FORMSPREE_ENDPOINT, {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" },
//       });

//       if (res.ok) {
//         setUnlockedPlans((prev) => ({ ...prev, [planId]: true }));
//         setIsUnlocked(true);
//         setFormOpenId(null);
//       } else {
//         alert("Verification failed. Please try again.");
//       }
//     } catch {
//       alert("Something went wrong. Please check your network connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden">


//  {/* --- HERO BANNER --- */}
//       <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
//         {/* ===== MOBILE HERO ===== */}
//         <div className="block md:hidden">
//           <div className="relative w-full aspect-[4/3] overflow-hidden">
//             <img
//               src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg"
//               alt="RRL Hero Banner Mobile"
//               loading="eager"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>
 
//         {/* ===== DESKTOP HERO ===== */}
//         <div className="hidden md:block w-full">
//           <motion.div
//             initial={{ scale: 1.05, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
//           >
//             <img
//               src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-08-03%20at%202.26.40%20PM.jpeg"
//               alt="RRL Hero Banner Desktop"
//               loading="eager"
//               className="w-full h-auto object-contain"
//             />
//           </motion.div>
//         </div>
//       </section>
    
//       {/* --- HERO SECTION --- */}
//       <section className="relative w-full min-h-[80vh] bg-black overflow-hidden flex items-center pt-28 pb-16">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//               <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
//                 <span className="bg-[#d9a406] text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-widest animate-pulse">
//                   Possession in 4 Months
//                 </span>
//                 <span className="border border-white/20 text-white font-semibold text-xs uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
//                   Sarjapura - Attibele Road
//                 </span>
//               </motion.div>

//               <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
//                 Confident <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Atria</span>
//               </motion.h1>

//               <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
//                 Premium 4 BHK Villa Living in a sprawling 25-acre gated community. Modern architecture, vast green lawns, and ready-to-move-in convenience starting at ₹2 Cr*.
//               </motion.p>

//               <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
//                 {["BMRDA Approved", "4 BHK Luxury Villas", "25-Acre Gated Community", "319 Total Units"].map((tag) => (
//                   <span key={tag} className="border border-[#d9a406]/40 text-[#fcd34d] text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
//                     {tag}
//                   </span>
//                 ))}
//               </motion.div>

//               <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,164,6,0.3)] transition-all"
//                 >
//                   Register Your Interest <ArrowRight className="w-5 h-5" />
//                 </button>
//               </motion.div>
//             </motion.div>

//             {/* Right Side: Hero Contact Form */}
//             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
//               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden rounded-2xl">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
                
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
//                   <p className="text-gray-400 text-sm mt-1">Get exclusive offers & details.</p>
//                 </div>

//                 <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
//                   <input type="hidden" name="Project" value="Confident Atria Hero Form" />
//                   <div className="relative">
//                     <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                     <input
//                       name="name"
//                       type="text"
//                       placeholder="Your Name"
//                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                     <input
//                       name="phone"
//                       type="tel"
//                       placeholder="Phone Number"
//                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
//                     <input
//                       name="email"
//                       type="email"
//                       placeholder="Email Address"
//                       className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all mt-2"
//                   >
//                     {isSubmitting ? "Submitting..." : "Get Call Back"}
//                   </button>
//                 </form>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>


//       {/* --- PROJECT AT A GLANCE --- */}
//       <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/5">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             {[
//               { label: "Community Area", value: "25 Acres" },
//               { label: "Total Inventory", value: "319 Units" },
//               { label: "Villa Built-up", value: "~2,400 Sq.ft" },
//               { label: "Configuration", value: "4 BHK Premium" },
//             ].map((stat, idx) => (
//               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-[#d9a406]/50 transition-all">
//                 <span className="text-2xl md:text-3xl font-bold text-[#d9a406] block mb-2">{stat.value}</span>
//                 <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{stat.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- AMENITIES --- */}
//       <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               World-Class <span className="text-[#d9a406] font-serif italic">Amenities</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">Every detail considered for your active, modern, and high-end lifestyle.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {AMENITIES.map((a, i) => (
//               <div key={i} className="group h-full rounded-2xl bg-[#111] shadow-sm hover:shadow-[0_0_20px_rgba(217,164,6,0.15)] transition-all duration-500 border border-white/10 hover:border-[#d9a406]/40 hover:-translate-y-2 overflow-hidden flex flex-col">
                
//                 {/* Top Image Section */}
//                 <div className="w-full h-48 sm:h-52 overflow-hidden">
//                   <img 
//                     src={a.image} 
//                     alt={a.title} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                   />
//                 </div>
                
//                 {/* Bottom Details Section */}
//                 <div className="p-6 sm:p-8 flex flex-col flex-grow">
//                   <h3 className="text-[17px] font-bold text-white mb-3">{a.title}</h3>
//                   <p className="text-[14px] leading-relaxed text-gray-400">{a.body}</p>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- INSIDE THE VILLA --- */}
//       <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d9a406]/5 rounded-full blur-[150px] pointer-events-none"></div>
//         <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
          
//           {/* Header Section */}
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 px-5 py-2 text-[#d9a406] mb-6">
//               <Star className="h-4 w-4" />
//               <span className="text-xs font-bold uppercase tracking-[0.2em]">A Glimpse of Your Future Home</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Inside The <span className="text-[#d9a406] font-serif italic">Villa</span>
//             </h2>
//           </div>

//           {/* Pure Image Gallery (6 Images) */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
//             {VILLA_IMAGES.map((imgSrc, i) => (
//               <div key={i} className="rounded-2xl overflow-hidden shadow-sm h-48 sm:h-64 lg:h-80 border border-white/10 group bg-[#111]">
//                 <img 
//                   src={imgSrc} 
//                   alt={`Inside the Villa ${i + 1}`} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Subtext */}
//           <div className="text-center mb-12">
//             <p className="italic text-[14px] sm:text-[15px] text-gray-400 font-medium">
//               Actual site photos — premium finishes, spacious interiors, and quality craftsmanship throughout.
//             </p>
//           </div>

//           {/* Bottom Feature Cards */}
//           <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
//             <div className="h-full rounded-2xl bg-[#111] p-6 sm:p-8 border border-white/10 hover:border-[#d9a406]/50 transition-colors duration-300">
//               <div className="flex items-center gap-3 mb-4">
//                 <HomeIcon className="h-5 w-5 text-[#d9a406]" strokeWidth={2} />
//                 <h3 className="text-[17px] font-bold text-white">Premium Finishes</h3>
//               </div>
//               <p className="text-[14px] leading-relaxed text-gray-400">
//                 Top-grade materials and brand-name fittings across every room.
//               </p>
//             </div>

//             <div className="h-full rounded-2xl bg-[#111] p-6 sm:p-8 border border-white/10 hover:border-[#d9a406]/50 transition-colors duration-300">
//               <div className="flex items-center gap-3 mb-4">
//                 <Ruler className="h-5 w-5 text-[#d9a406]" strokeWidth={2} />
//                 <h3 className="text-[17px] font-bold text-white">Spacious Interiors</h3>
//               </div>
//               <p className="text-[14px] leading-relaxed text-gray-400">
//                 Thoughtfully designed layouts that maximise comfort and natural light.
//               </p>
//             </div>

//             <div className="h-full rounded-2xl bg-[#111] p-6 sm:p-8 border border-white/10 hover:border-[#d9a406]/50 transition-colors duration-300">
//               <div className="flex items-center gap-3 mb-4">
//                 <Hammer className="h-5 w-5 text-[#d9a406]" strokeWidth={2} />
//                 <h3 className="text-[17px] font-bold text-white">Quality Craftsmanship</h3>
//               </div>
//               <p className="text-[14px] leading-relaxed text-gray-400">
//                 Skilled workmanship visible in every corner and surface detail.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* --- FLOOR PLANS / VILLA LAYOUTS --- */}
//       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                 Six Villa Layouts, <span className="text-[#d9a406]">One Address</span>
//               </h2>
//               <p className="text-gray-400 max-w-lg">Villas 12, 12A, 124, 125, 181 and 266 — each planned across ground, first, and terrace levels.</p>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {FLOOR_PLAN_IMAGES.map((img, idx) => (
//               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group relative flex flex-col">
//                 <div className="relative aspect-[3/4] bg-white w-full">
//                   <Image
//                     src={img.src}
//                     alt={img.label}
//                     fill
//                     className={`object-contain p-4 transition-all duration-500 ${!unlockedPlans[img.label] && !isUnlocked ? "blur-md opacity-40 scale-105" : "group-hover:scale-105"}`}
//                   />

//                   {!unlockedPlans[img.label] && !isUnlocked && (
//                     <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
//                       <div className="w-12 h-12 rounded-full bg-[#111] border border-[#d9a406] flex items-center justify-center mb-4">
//                         <Lock className="w-5 h-5 text-[#d9a406]" />
//                       </div>
//                       <p className="text-white font-bold text-base mb-1">{img.label}</p>
//                       <p className="text-xs text-gray-400 mb-4">Unlock to view layout specifications</p>
//                       <button
//                         onClick={() => setFormOpenId(img.label)}
//                         className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
//                       >
//                         Unlock Layout
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-4 bg-[#111] border-t border-white/5 flex justify-between items-center">
//                   <span className="font-bold text-white text-sm">{img.label}</span>
//                   <span className="text-xs text-[#d9a406] font-semibold">4 BHK · 3 Levels</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SITE-WISE AREA TABLE --- */}
//       <section className="py-20 bg-black border-t border-white/5">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-white mb-2">Available Site Dimensions</h2>
//             <p className="text-gray-400 text-sm">Site-wise plot area variations for available 4 BHK villas</p>
//           </div>

//           <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111]">
//             <table className="w-full text-left text-sm">
//               <thead>
//                 <tr className="border-b border-white/10 bg-white/5 text-[#d9a406]">
//                   <th className="px-6 py-4 font-bold uppercase tracking-wider">Site No.</th>
//                   <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Plot Area (Sq.ft)</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/5 text-gray-300">
//                 {SITE_AREAS.map((row, i) => (
//                   <tr key={row.site} className={i % 2 === 0 ? "bg-black/30" : "bg-transparent"}>
//                     <td className="px-6 py-3.5 font-medium text-white">Villa Site {row.site}</td>
//                     <td className="px-6 py-3.5 text-right font-mono text-[#d9a406]">{row.area}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* --- SPECIFICATIONS --- */}
//       <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-[#d9a406]">Specifications</span></h2>
//             <p className="text-gray-400 text-sm">Material honesty and structurally sound engineering</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {SPECS.map((group) => (
//               <div key={group.group} className="bg-[#111] border border-white/10 rounded-2xl p-8">
//                 <h3 className="text-2xl font-serif text-[#d9a406] italic mb-6">{group.group}</h3>
//                 <dl className="divide-y divide-white/5">
//                   {group.rows.map(([k, v]) => (
//                     <div key={k} className="py-3.5 flex justify-between gap-4 text-sm">
//                       <dt className="text-gray-400 font-normal">{k}</dt>
//                       <dd className="text-white font-medium text-right">{v}</dd>
//                     </div>
//                   ))}
//                 </dl>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- LOCATION & MAP --- */}
//       <section className="py-24 bg-black border-t border-white/5">
//         <div className="container mx-auto px-4 max-w-[1280px]">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div>
//               <span className="bg-[#d9a406]/10 border border-[#d9a406]/40 text-[#d9a406] text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">Prime Location</span>
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Set at Sarjapura - Attibele Road</h2>
//               <p className="text-gray-400 leading-relaxed mb-8">
//                 Located in one of Bengaluru's fastest-growing residential corridors with exceptional connectivity to IT hubs, Whitefield, and Chandapura Road.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-8">
//                 {LANDMARKS.map(({ category, icon: Icon, places }) => (
//                   <div key={category} className="space-y-3">
//                     <div className="flex items-center gap-2.5 text-[#d9a406] font-bold text-sm uppercase">
//                       <Icon className="w-5 h-5" /> {category}
//                     </div>
//                     <ul className="space-y-1.5 text-xs text-gray-400 pl-2 border-l border-white/10">
//                       {places.map((p) => (
//                         <li key={p}>• {p}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Map Frame */}
//             <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen={true}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="bg-[#050505] py-16 border-t border-white/10">
//         <div className="container mx-auto px-4 max-w-[1280px] text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Only 12 Villas Remain Available</h2>
//           <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Get in touch with our team to arrange a private site visit.</p>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all"
//           >
//             Enquire Now
//           </button>
//           <p className="text-xs text-gray-600 mt-12">
//             Constructed by SVT Developers & Constructions | Marketed by RRL Group <br />
//             © {new Date().getFullYear()} Confident Atria. All rights reserved.
//           </p>
//         </div>
//       </footer>

//       {/* --- GLOBAL ENQUIRY MODAL --- */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsModalOpen(false)}
//           >
//             <motion.div
//               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//                 <X className="w-5 h-5" />
//               </button>

//               <h3 className="text-2xl font-bold text-white mb-2">Register Interest</h3>
//               <p className="text-xs text-gray-400 mb-6">Enter your details to unlock complete villa blueprints & pricing.</p>

//               <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
//                 <input type="hidden" name="Project" value="Confident Atria" />
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Full Name *"
//                   required
//                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
//                 />
//                 <input
//                   name="phone"
//                   type="tel"
//                   placeholder="Phone Number *"
//                   required
//                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
//                 />
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Enquiry"}
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* --- SPECIFIC LAYOUT UNLOCK DIALOG --- */}
//       <AnimatePresence>
//         {formOpenId && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setFormOpenId(null)}
//           >
//             <motion.div
//               className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button onClick={() => setFormOpenId(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//                 <X className="w-5 h-5" />
//               </button>

//               <h3 className="text-xl font-bold text-white mb-2">Unlock {formOpenId} Blueprint</h3>
//               <p className="text-xs text-gray-400 mb-6">Enter your details to instantly view layout details for {formOpenId}.</p>

//               <form onSubmit={(e) => handleUnlockPlanSubmit(e, formOpenId)} className="space-y-4">
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Full Name *"
//                   required
//                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
//                 />
//                 <input
//                   name="phone"
//                   type="tel"
//                   placeholder="Phone Number *"
//                   required
//                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
//                 />
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
//                 >
//                   {isSubmitting ? "Unlocking..." : "Unlock Floor Plan"}
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  Phone,
  Mail,
  MapPin,
  X,
  Building2,
  Zap,
  ShieldCheck,
  Award,
  Wind,
  Dumbbell,
  Waves,
  Coffee,
  Trees,
  Maximize2,
  ArrowRight,
  CheckCircle2,
  Menu,
  Smartphone,
  User,
  Lock,
  Unlock,
  ArrowLeft,
  Loader2,
  Star,
  BrickWall,
  PaintRoller,
  AppWindow,
  Bath,
  Home as HomeIcon,
  Ruler,
  Layers,
  GraduationCap,
  Factory,
  Milestone,
  IndianRupee,
  Key,
  Download,
  FileText,
  AlertCircle,
  Hammer,
  MessageCircle,
  Compass
} from "lucide-react";

// --- Formspree Config ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";
const BROCHURE_URL =
  "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// --- Project Data ---
const PHONES = ["8494966966"];
const ADDRESS = [
  "Confident Atria",
  "Sarjapura - Attibele Road",
  "Bengaluru, Karnataka",
];

const STATS = [
  { label: "Configuration", value: "4 BHK", icon: HomeIcon },
  { label: "Site Area", value: "1162 sqft", icon: Ruler },
  { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
  { label: "Availability", value: "12 Units Left", icon: AlertCircle },
];

const FLOOR_PLAN_IMAGES = [
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
];

const SITE_AREAS = [
  { site: "12", area: "1,162" },
  { site: "12A", area: "1,162" },
  { site: "124", area: "1,302" },
  { site: "125", area: "1,285" },
  { site: "181", area: "1,162" },
  { site: "199", area: "1,346" },
  { site: "202", area: "1,096" },
  { site: "218", area: "1,200" },
  { site: "220", area: "1,200" },
  { site: "221", area: "1,200" },
  { site: "256", area: "1,500" },
  { site: "266", area: "1,200" },
];

const AMENITIES = [
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko.png?updatedAt=1785396370955",
    title: "Premium Clubhouse",
    body: "A Family & Social hub featuring a premium clubhouse, banquet hall, and an outdoor amphitheater.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(2).png?updatedAt=1785396365858",
    title: "Large Swimming Pool",
    body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(3).png?updatedAt=1785396383525",
    title: "Sports & Courts",
    body: "Tennis & basketball courts, dedicated indoor squash and badminton courts, and an indoor games room.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_yausmlyausmlyaus%20(1).png",
    title: "Fitness & Tracks",
    body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/park.jpeg",
    title: "Parks & Open Lawns",
    body: "Beautiful flower gardens, landscaped open lawns, and a dedicated safe children's play area.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(6).png?updatedAt=1785396365950",
    title: "24/7 Manned Security",
    body: "Fully gated community with 24/7 manned security, extensive CCTV surveillance, and visitor parking.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(5).png?updatedAt=1785396386864",
    title: "Eco-Friendly Infrastructure",
    body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage systems.",
  },
  {
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Amenities/Gemini_Generated_Image_ibkooribkooribko%20(7).png?updatedAt=1785396380395",
    title: "Vaastu Compliant",
    body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
  },
];

const VILLA_IMAGES = [
  "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_11_25-PM.png", 
  "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/image%20(5).png",
  "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_14_35-PM.png",
  "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/image%20(6).png",
  "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_14_44-PM.png",
  "https://ik.imagekit.io/j0xzq9pns/svt/inside%20villa/ChatGPT-Image-Jul-19-2026-11_07_10-PM.png",
];

const SPECS = [
  {
    group: "Approvals & Layout",
    rows: [
      ["Layout Approval", "BMRDA Approved"],
      ["Layout Extent", "25-Acre Gated Community (319 Units)"],
      ["Layout Name", "Confident Atria"],
      ["Developer", "Confident Group"],
      ["Architect", "STAVBA Infra LLP"],
    ],
  },
  {
    group: "Structure & Envelope",
    rows: [
      ["Building Structure", "RCC Column Frame"],
      ["Walls", "6\" Solid Block"],
      ["Main Door", "Teak Wood with Biometric Digital Lock"],
      ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
      ["Windows", "3-Track UPVC, Wooden Pattern"],
    ],
  },
  {
    group: "Interiors & Finishes",
    rows: [
      ["Flooring - Living & Beds", "Vitrified Tiles, 4' x 6'"],
      ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
      ["Flooring - Staircase", "Granite"],
      ["Painting - Internal", "Asian Paints Tractor Emulsion"],
      ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
    ],
  },
  {
    group: "Electrical & Plumbing",
    rows: [
      ["Electrical", "Polycab / V-Guard / Havells"],
      ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
      ["Sanitary - Fittings", "Jaquar"],
      ["Sanitary - Flush Tanks", "Grohe"],
    ],
  },
];

const LANDMARKS = [
  { category: "Education", icon: GraduationCap, places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian Int. School"] },
  { category: "Business & Industry", icon: Factory, places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"] },
  { category: "Civic & Everyday", icon: ShieldCheck, places: ["Police Station", "Sompura Gate"] },
  { category: "Connectivity", icon: Milestone, places: ["Sarjapura Circle", "Attibele Circle", "Dommasandra", "Whitefield Corridor", "Chandapura Road"] },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------------------------------------------------------ */
/*  Scroll-reveal helper                                              */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const UNLOCK_STORAGE_KEY = "confidentAtria_unlocked";

export default function ConfidentAtriaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
  const [formOpenId, setFormOpenId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      if (window.localStorage.getItem(UNLOCK_STORAGE_KEY) === "true") {
        setIsUnlocked(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleGlobalFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsUnlocked(true);
        try { window.localStorage.setItem(UNLOCK_STORAGE_KEY, "true"); } catch {}
        setIsModalOpen(false);
        router.push("/c4/thankyou");
      } else {
        alert("Submission error. Please try again.");
      }
    } catch {
      alert("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUnlockPlanSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("Unlocked Unit", planId);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setUnlockedPlans((prev) => ({ ...prev, [planId]: true }));
        setIsUnlocked(true);
        try { window.localStorage.setItem(UNLOCK_STORAGE_KEY, "true"); } catch {}
        setFormOpenId(null);
      } else {
        alert("Verification failed. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden relative">

      {/* --- HERO BANNER --- */}
      <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
        {/* ===== MOBILE HERO ===== */}
        <div className="block md:hidden">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg"
              alt="RRL Hero Banner Mobile"
              loading="eager"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
 
        {/* ===== DESKTOP HERO ===== */}
        <div className="hidden md:block w-full">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-[1536px] mx-auto overflow-hidden"
          >
            <img
              src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-08-03%20at%202.26.40%20PM.jpeg"
              alt="RRL Hero Banner Desktop"
              loading="eager"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>
    
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[80vh] bg-black overflow-hidden flex items-center pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
                <span className="bg-[#d9a406] text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-widest animate-pulse">
                  Possession in 4 Months
                </span>
                <span className="border border-white/20 text-white font-semibold text-xs uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
                  Sarjapura - Attibele Road
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Confident <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">Atria</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
                Premium 4 BHK Villa Living in a sprawling 25-acre gated community. Modern architecture, vast green lawns, and ready-to-move-in convenience starting at ₹2 Cr*.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
                {["BMRDA Approved", "4 BHK Luxury Villas", "25-Acre Gated Community", "319 Total Units"].map((tag) => (
                  <span key={tag} className="border border-[#d9a406]/40 text-[#fcd34d] text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-[#d9a406]/10 rounded-md">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,164,6,0.3)] transition-all"
                >
                  Register Your Interest <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side: Hero Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
                  <p className="text-gray-400 text-sm mt-1">Get exclusive offers & details.</p>
                </div>

                <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
                  <input type="hidden" name="Project" value="Confident Atria Hero Form" />
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all mt-2"
                  >
                    {isSubmitting ? "Submitting..." : "Get Call Back"}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* --- PROJECT AT A GLANCE --- */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Community Area", value: "25 Acres" },
              { label: "Total Inventory", value: "319 Units" },
              { label: "Villa Built-up", value: "~2,400 Sq.ft" },
              { label: "Configuration", value: "4 BHK Premium" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-[#d9a406]/50 transition-all">
                <span className="text-2xl md:text-3xl font-bold text-[#d9a406] block mb-2">{stat.value}</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OVERVIEW / WHY CHOOSE CONFIDENT ATRIA (NEW ADDITION) --- */}
      <section id="overview" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-black border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
              <p className="text-[12px] tracking-[0.2em] uppercase text-[#d9a406] mb-4">Why Choose Confident Atria?</p>
              <h2 className="font-playfair text-3xl sm:text-4xl leading-tight text-white mb-8">
                Starting at ₹2 Cr* — <br />Possession in 4 Months
              </h2>
              
              {/* Project Entrance Image */}
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(217,164,6,0.1)] border border-white/10 group">
                <Image 
                  src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-18%20at%205.57.47%20PM.jpeg" 
                  alt="Confident Atria Entrance" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-sm font-bold tracking-wider uppercase drop-shadow-md text-[#d9a406]">Confident Atria</p>
                  <p className="text-xs text-white/80 font-light mt-1">Project Entrance View</p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 lg:pl-10">
              <Reveal delay={100}>
                <OverviewPoint icon={ShieldCheck} title="BMRDA Approved" body="Fully compliant, legally cleared project — buy with complete confidence." />
              </Reveal>
              <Reveal delay={200}>
                <OverviewPoint icon={Key} title="Ready to Move In" body="Get possession in just 4 months from the date of booking — no long waiting periods." />
              </Reveal>
              <Reveal delay={300}>
                <OverviewPoint icon={Building2} title="Confident Group" body="Renowned developer of well-planned, premium residential communities." />
              </Reveal>
              <Reveal delay={400}>
                <OverviewPoint icon={Hammer} title="SVT Builders & Developers" body="Trusted construction quality across Bengaluru." />
              </Reveal>
              <Reveal delay={500} className="sm:col-span-2">
                <div className="group border-t border-white/10 pt-8 hover:border-[#d9a406] transition-colors duration-500 relative">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#d9a406] transition-all duration-500 group-hover:w-full" />
                  <Compass className="h-6 w-6 text-[#d9a406] mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <h3 className="text-[18px] font-bold text-white mb-3">East-Facing, 1162 sqft</h3>
                  <p className="text-[15px] leading-relaxed text-gray-400 font-light">A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels — RCC column framing, 6-inch solid block walls, teak wood doors with biometric digital locks and 3-track UPVC windows.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- AMENITIES WITH IMAGES --- */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              World-Class <span className="text-[#d9a406] font-serif italic">Amenities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every detail considered for your active, modern, and high-end lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {AMENITIES.map((a, i) => (
              <div key={i} className="group h-full rounded-2xl bg-[#111] shadow-sm hover:shadow-[0_0_20px_rgba(217,164,6,0.15)] transition-all duration-500 border border-white/10 hover:border-[#d9a406]/40 hover:-translate-y-2 overflow-hidden flex flex-col">
                
                {/* Top Image Section */}
                <div className="w-full h-48 sm:h-52 overflow-hidden">
                  <img 
                    src={a.image} 
                    alt={a.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                {/* Bottom Details Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-400">{a.body}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INSIDE THE VILLA (6 Images + Cards) --- */}
      <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d9a406]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 px-5 py-2 text-[#d9a406] mb-6">
              <Star className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">A Glimpse of Your Future Home</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Inside The <span className="text-[#d9a406] font-serif italic">Villa</span>
            </h2>
          </div>

          {/* Pure Image Gallery (6 Images) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {VILLA_IMAGES.map((imgSrc, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm h-48 sm:h-64 lg:h-80 border border-white/10 group bg-[#111]">
                <img 
                  src={imgSrc} 
                  alt={`Inside the Villa ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>

          {/* Subtext */}
          <div className="text-center mb-12">
            <p className="italic text-[14px] sm:text-[15px] text-gray-400 font-medium">
              Actual site photos — premium finishes, spacious interiors, and quality craftsmanship throughout.
            </p>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="h-full rounded-2xl bg-[#111] p-6 sm:p-8 border border-white/10 hover:border-[#d9a406]/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <HomeIcon className="h-5 w-5 text-[#d9a406]" strokeWidth={2} />
                <h3 className="text-[17px] font-bold text-white">Premium Finishes</h3>
              </div>
              <p className="text-[14px] leading-relaxed text-gray-400">
                Top-grade materials and brand-name fittings across every room.
              </p>
            </div>

            <div className="h-full rounded-2xl bg-[#111] p-6 sm:p-8 border border-white/10 hover:border-[#d9a406]/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="h-5 w-5 text-[#d9a406]" strokeWidth={2} />
                <h3 className="text-[17px] font-bold text-white">Spacious Interiors</h3>
              </div>
              <p className="text-[14px] leading-relaxed text-gray-400">
                Thoughtfully designed layouts that maximise comfort and natural light.
              </p>
            </div>

            <div className="h-full rounded-2xl bg-[#111] p-6 sm:p-8 border border-white/10 hover:border-[#d9a406]/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Hammer className="h-5 w-5 text-[#d9a406]" strokeWidth={2} />
                <h3 className="text-[17px] font-bold text-white">Quality Craftsmanship</h3>
              </div>
              <p className="text-[14px] leading-relaxed text-gray-400">
                Skilled workmanship visible in every corner and surface detail.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- FLOOR PLANS / VILLA LAYOUTS --- */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Six Villa Layouts, <span className="text-[#d9a406]">One Address</span>
              </h2>
              <p className="text-gray-400 max-w-lg">Villas 12, 12A, 124, 125, 181 and 266 — each planned across ground, first, and terrace levels.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLOOR_PLAN_IMAGES.map((img, idx) => (
              <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group relative flex flex-col">
                <div className="relative aspect-[3/4] bg-white w-full">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className={`object-contain p-4 transition-all duration-500 ${!unlockedPlans[img.label] && !isUnlocked ? "blur-md opacity-40 scale-105" : "group-hover:scale-105"}`}
                  />

                  {!unlockedPlans[img.label] && !isUnlocked && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-12 h-12 rounded-full bg-[#111] border border-[#d9a406] flex items-center justify-center mb-4">
                        <Lock className="w-5 h-5 text-[#d9a406]" />
                      </div>
                      <p className="text-white font-bold text-base mb-1">{img.label}</p>
                      <p className="text-xs text-gray-400 mb-4">Unlock to view layout specifications</p>
                      <button
                        onClick={() => setFormOpenId(img.label)}
                        className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
                      >
                        Unlock Layout
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-[#111] border-t border-white/5 flex justify-between items-center">
                  <span className="font-bold text-white text-sm">{img.label}</span>
                  <span className="text-xs text-[#d9a406] font-semibold">4 BHK · 3 Levels</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SITE-WISE AREA TABLE --- */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Available Site Dimensions</h2>
            <p className="text-gray-400 text-sm">Site-wise plot area variations for available 4 BHK villas</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-[#d9a406]">
                  <th className="px-6 py-4 font-bold uppercase tracking-wider">Site No.</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Plot Area (Sq.ft)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {SITE_AREAS.map((row, i) => (
                  <tr key={row.site} className={i % 2 === 0 ? "bg-black/30" : "bg-transparent"}>
                    <td className="px-6 py-3.5 font-medium text-white">Villa Site {row.site}</td>
                    <td className="px-6 py-3.5 text-right font-mono text-[#d9a406]">{row.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- SPECIFICATIONS --- */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-[#d9a406]">Specifications</span></h2>
            <p className="text-gray-400 text-sm">Material honesty and structurally sound engineering</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SPECS.map((group) => (
              <div key={group.group} className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-[#d9a406] italic mb-6">{group.group}</h3>
                <dl className="divide-y divide-white/5">
                  {group.rows.map(([k, v]) => (
                    <div key={k} className="py-3.5 flex justify-between gap-4 text-sm">
                      <dt className="text-gray-400 font-normal">{k}</dt>
                      <dd className="text-white font-medium text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATION & MAP --- */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="bg-[#d9a406]/10 border border-[#d9a406]/40 text-[#d9a406] text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">Prime Location</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Set at Sarjapura - Attibele Road</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Located in one of Bengaluru's fastest-growing residential corridors with exceptional connectivity to IT hubs, Whitefield, and Chandapura Road.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {LANDMARKS.map(({ category, icon: Icon, places }) => (
                  <div key={category} className="space-y-3">
                    <div className="flex items-center gap-2.5 text-[#d9a406] font-bold text-sm uppercase">
                      <Icon className="w-5 h-5" /> {category}
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-400 pl-2 border-l border-white/10">
                      {places.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Frame */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050505] py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1280px] text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Only 12 Villas Remain Available</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Get in touch with our team to arrange a private site visit.</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all"
          >
            Enquire Now
          </button>
          <p className="text-xs text-gray-600 mt-12">
            Constructed by SVT Developers & Constructions | Marketed by RRL Group <br />
            © {new Date().getFullYear()} Confident Atria. All rights reserved.
          </p>
        </div>
      </footer>

      {/* --- GLOBAL ENQUIRY MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">Register Interest</h3>
              <p className="text-xs text-gray-400 mb-6">Enter your details to unlock complete villa blueprints & pricing.</p>

              <form onSubmit={handleGlobalFormSubmit} className="space-y-4">
                <input type="hidden" name="Project" value="Confident Atria" />
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SPECIFIC LAYOUT UNLOCK DIALOG --- */}
      <AnimatePresence>
        {formOpenId && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFormOpenId(null)}
          >
            <motion.div
              className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setFormOpenId(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white mb-2">Unlock {formOpenId} Blueprint</h3>
              <p className="text-xs text-gray-400 mb-6">Enter your details to instantly view layout details for {formOpenId}.</p>

              <form onSubmit={(e) => handleUnlockPlanSubmit(e, formOpenId)} className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 rounded-lg py-3 px-4 text-white text-sm focus:border-[#d9a406] outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all"
                >
                  {isSubmitting ? "Unlocking..." : "Unlock Floor Plan"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Small components                                                  */
/* ------------------------------------------------------------------ */

// function Logo({
//   scrolled = true,
//   variant = "header",
// }: {
//   scrolled?: boolean;
//   variant?: "header" | "footer";
// }) {
//   const dark = scrolled || variant === "footer";
//   return (
//     <a href="#" className="flex items-center gap-3 group">
//       <span className="relative h-9 sm:h-12 w-[100px] sm:w-[130px]">
//         <Image
//           src={RRL_LOGO}
//           alt="RRL Group logo"
//           fill
//           priority
//           className="object-contain object-left"
//         />
//       </span>
//     </a>
//   );
// }

function OverviewPoint({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="group border-t border-white/10 pt-8 hover:border-[#d9a406] transition-colors duration-500 relative">
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#d9a406] transition-all duration-500 group-hover:w-full" />
      <Icon className="h-6 w-6 text-[#d9a406] mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
      <h3 className="text-[18px] font-bold text-white mb-3">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-400 font-light">{body}</p>
    </div>
  );
}