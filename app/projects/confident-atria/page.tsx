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
//   AlertCircle
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
//   { icon: Coffee, title: "Premium Clubhouse", body: "Family & social hub featuring a clubhouse, banquet hall & outdoor amphitheater." },
//   { icon: Waves, title: "Large Swimming Pool", body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness." },
//   { icon: Award, title: "Sports & Courts", body: "Tennis & basketball courts, dedicated indoor squash, badminton & indoor games." },
//   { icon: Dumbbell, title: "Fitness & Tracks", body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks." },
//   { icon: Trees, title: "Parks & Open Lawns", body: "Beautiful flower gardens, landscaped open lawns, and a safe children's play area." },
//   { icon: ShieldCheck, title: "24/7 Manned Security", body: "Gated community with 24/7 manned security, CCTV surveillance, and visitor parking." },
//   { icon: Wind, title: "Eco Infrastructure", body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage." },
//   { icon: Zap, title: "Vaastu Compliant", body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance and meditation area." },
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
      
//       {/* --- HERO IMAGE BANNER --- */}
//       <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
//         <div className="relative w-full max-w-[1536px] mx-auto overflow-hidden aspect-[16/9] md:aspect-[1536/752]">
//           <Image
//             src="https://ik.imagekit.io/j0xzq9pns/svt/Atria%20poster%20web.png"
//             alt="Confident Atria Hero Banner"
//             fill
//             priority
//             className="object-cover md:object-contain"
//           />
//         </div>
//       </section>

//       {/* --- HERO SECTION --- */}
//       <section className="relative w-full min-h-[80vh] bg-black overflow-hidden flex items-center pt-12 pb-16">
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

//             {/* Right Side: Quick Spec Card */}
//             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
//               <div className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl relative">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Project Overview</h3>
//                 <p className="text-gray-400 text-sm mb-6">Marketed by RRL Group · Built by SVT Developers</p>

//                 <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/10 py-6">
//                   {STATS.map(({ label, value, icon: Icon }) => (
//                     <div key={label} className="flex flex-col">
//                       <div className="flex items-center text-[#d9a406] text-xs font-semibold mb-1">
//                         <Icon className="w-4 h-4 mr-1.5" /> {label}
//                       </div>
//                       <span className="text-white font-bold text-lg">{value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="w-full bg-white/10 hover:bg-[#d9a406] hover:text-black text-white font-bold py-3.5 rounded-lg border border-white/20 transition-all text-sm uppercase tracking-wider"
//                 >
//                   Download Complete Brochure
//                 </button>
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

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {AMENITIES.map((a, i) => (
//               <div key={i} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/50 p-6 rounded-2xl transition-all group">
//                 <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">
//                   <a.icon className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{a.body}</p>
//               </div>
//             ))}
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  AlertCircle
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
  { icon: Coffee, title: "Premium Clubhouse", body: "Family & social hub featuring a clubhouse, banquet hall & outdoor amphitheater." },
  { icon: Waves, title: "Large Swimming Pool", body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness." },
  { icon: Award, title: "Sports & Courts", body: "Tennis & basketball courts, dedicated indoor squash, badminton & indoor games." },
  { icon: Dumbbell, title: "Fitness & Tracks", body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks." },
  { icon: Trees, title: "Parks & Open Lawns", body: "Beautiful flower gardens, landscaped open lawns, and a safe children's play area." },
  { icon: ShieldCheck, title: "24/7 Manned Security", body: "Gated community with 24/7 manned security, CCTV surveillance, and visitor parking." },
  { icon: Wind, title: "Eco Infrastructure", body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage." },
  { icon: Zap, title: "Vaastu Compliant", body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance and meditation area." },
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

export default function ConfidentAtriaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
  const [formOpenId, setFormOpenId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

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
    <main className="w-full bg-black min-h-screen text-white font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden">


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
             src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg"
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

      {/* --- AMENITIES --- */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              World-Class <span className="text-[#d9a406] font-serif italic">Amenities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every detail considered for your active, modern, and high-end lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((a, i) => (
              <div key={i} className="bg-[#111] border border-white/5 hover:border-[#d9a406]/50 p-6 rounded-2xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#d9a406] mb-4 group-hover:scale-110 transition-transform">
                  <a.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
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