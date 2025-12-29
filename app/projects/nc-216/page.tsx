"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Phone, Mail, MapPin, ChevronDown, X, Building2, Zap, ShieldCheck, 
  Award, Wind, Dumbbell, Waves, MonitorPlay, Gamepad2, Coffee, 
  Trees, Maximize2, ArrowRight, CheckCircle2, Menu, Smartphone, User, 
  Lock, Unlock, CheckCircle, ArrowLeft, Loader2, Star, Megaphone
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

// --- DATA (PLACEHOLDERS FOR NC 216) ---
// Note: Actual dims and images need to be updated when available.
type FloorPlan = {
  id: string
  type: "2BHK" | "3BHK"
  facing: string
  area: string // Changed to string for flexibility like "900-1100"
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

const floorPlansData: FloorPlan[] = [
  { 
    id: "A1", 
    type: "2BHK", 
    facing: "East", 
    area: "900 - 1100", 
    dims: { living: "11'0\" x 16'0\"", dining: "10'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "8'0\" x 8'0\"", bed2: "11'0\" x 11'0\"" }, 
    image: "https://placehold.co/800x800/111/d9a406?text=NC+216+2BHK+Plan" 
  },
  { 
    id: "B1", 
    type: "3BHK", 
    facing: "North", 
    area: "1250 - 1450", 
    dims: { living: "16'0\" x 12'0\"", dining: "12'0\" x 10'0\"", masterBed: "13'0\" x 12'0\"", kitchen: "10'0\" x 8'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'0\" x 10'0\"" }, 
    image: "https://placehold.co/800x800/111/d9a406?text=NC+216+3BHK+Plan" 
  },
  { 
    id: "A2", 
    type: "2BHK", 
    facing: "West", 
    area: "950", 
    dims: { living: "11'6\" x 16'0\"", dining: "10'0\" x 8'0\"", masterBed: "11'0\" x 12'0\"", kitchen: "8'0\" x 8'0\"", bed2: "10'0\" x 11'0\"" }, 
    image: "https://placehold.co/800x800/111/d9a406?text=NC+216+2BHK+Plan" 
  },
   { 
    id: "B2", 
    type: "3BHK", 
    facing: "East", 
    area: "1350", 
    dims: { living: "18'0\" x 12'0\"", dining: "12'0\" x 10'0\"", masterBed: "14'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "12'0\" x 11'0\"", bed3: "11'0\" x 10'0\"" }, 
    image: "https://placehold.co/800x800/111/d9a406?text=NC+216+3BHK+Plan" 
  },
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
    <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
      {/* MOBILE HERO */}
      <div className="block md:hidden">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#111] flex items-center justify-center">
            {/* Placeholder for Mobile Banner */}
            <div className="text-center p-4">
                <h2 className="text-[#d9a406] text-3xl font-bold">NC 216</h2>
                <p className="text-white text-sm">New Launch @ Sarjapura</p>
            </div>
            {/* Replace src below with actual banner */}
            <img
            src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/NC%20216.png?updatedAt=1766849714503?q=80&w=1000&auto=format&fit=crop"
            alt="NC 216 Mobile Banner"
            className="absolute inset-0 w-full h-full object-fill opacity-60"
            />
        </div>
      </div>

      {/* DESKTOP HERO */}
      <div className="hidden md:block h-[60vh] md:h-[80vh] relative bg-[#111]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
             {/* Replace src below with actual banner */}
          <img
            src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/NC%20216.png?updatedAt=1766849714503?q=80&w=2000&auto=format&fit=crop"
            alt="NC 216 Desktop Banner"
            loading="eager"
            className="w-full h-full object-fill opacity-70"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
};

const HeroSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [state, handleSubmit] = useForm("mkonkbkk"); // Uses same Formspree ID, consider creating a new one for NC 216

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/20 via-black to-black opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
               <Badge variant="outline" className="text-black border-[#d9a406] px-4 py-1 text-sm uppercase tracking-widest bg-[#d9a406] animate-pulse">New Launch</Badge>
               <Badge variant="outline" className="text-white border-white/30 px-4 py-1 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">Pre-Launch Benefits</Badge>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Code Name <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">NC 216</span>
            </motion.h1>

            <motion.div variants={fadeIn} className="text-xl text-gray-300 max-w-xl mb-10 leading-relaxed space-y-2">
              <p className="flex items-center gap-2"><MapPin className="text-[#d9a406] w-5 h-5"/> Sarjapura – Chikka Tirupathi Road</p>
              <p className="text-2xl font-bold text-white">Starting from <span className="text-[#d9a406]">₹38.5 Lakhs*</span></p>
              <p className="text-sm text-gray-500 italic">*Limited Inventory. EOI Open Now.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-all hover:scale-105" onClick={onOpenModal}>
                <span className="skew-x-[10deg] flex items-center gap-2">Submit EOI Now <ArrowRight className="w-5 h-5"/></span>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-8 flex gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                    <CheckCircle className="w-4 h-4 text-[#d9a406]" /> No Pre-EMI
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                    <CheckCircle className="w-4 h-4 text-[#d9a406]" /> Early Bird Price
                </div>
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
                      <h3 className="text-2xl font-bold text-white mb-2">Interest Registered!</h3>
                      <p className="text-gray-400">You have secured your priority slot. We will call you shortly.</p>
                   </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2"><Megaphone className="w-6 h-6 text-[#d9a406]"/> EOI Open</h3>
                      <p className="text-gray-400 text-sm mt-1">Submit to get Priority Unit Selection & Best Price.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
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
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                          <input type="hidden" name="project" value="NC 216" />
                      </div>
                      <Button type="submit" disabled={state.submitting} className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all">
                        {state.submitting ? "Submitting..." : "Get Priority Pass"}
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
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose <span className="text-[#d9a406]">NC 216?</span></h2>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { icon: Star, title: "No Pre-EMI", desc: "Pay nothing until possession. Stress-free investment." },
          { icon: Award, title: "Early Bird Price", desc: "Launch prices will increase. Lock in the best rate now." },
          { icon: Zap, title: "High Growth", desc: "Located in a rapidly developing corridor of South Bangalore." },
          { icon: ShieldCheck, title: "Premium Living", desc: "Top-tier 2 & 3 BHK units at affordable rates." }
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
  // Generic Amenities for now
  const amenities = [
    { name: "Swimming Pool", icon: Waves },
    { name: "Gymnasium", icon: Dumbbell },
    { name: "Kids Play Area", icon: Gamepad2 },
    { name: "Club House", icon: Building2 },
    { name: "Jogging Track", icon: Trees },
    { name: "Landscaped Garden", icon: Trees },
    { name: "Security", icon: ShieldCheck },
    { name: "Power Backup", icon: Zap },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Modern <span className="text-[#d9a406]">Amenities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience a lifestyle designed for comfort and leisure.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex flex-col items-center gap-4 text-center">
                <div className="p-4 bg-black rounded-full text-[#d9a406] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,164,6,0.1)]">
                    <item.icon className="w-8 h-8" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white text-lg">{item.name}</span>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

// ========== FLOOR PLANS SECTION (ADAPTED FOR NC 216) ==========
const FloorPlansSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
  const [formOpenId, setFormOpenId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formId = "xbdrqepk"; 
    const formData = new FormData(e.currentTarget);
    formData.append("Unit Interest", `NC 216 - Unit ${planId}`); 

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
        setFormOpenId(null);
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Unit <span className="text-[#d9a406]">Configurations</span></h2>
            <p className="text-gray-400 max-w-xl">Premium 2 & 3 BHK Apartments designed for maximum space utilization. <br/> Submit EOI to view detailed layouts.</p>
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
                      <div><h3 className="text-2xl font-bold text-white">Type {plan.id}</h3><p className="text-[#d9a406] font-medium">{plan.type}</p></div>
                      <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">{plan.facing} Facing</Badge>
                    </div>
                    <div className="flex items-baseline gap-1"><span className="text-3xl font-bold text-white">{plan.area}</span><span className="text-gray-500 font-medium">SFT (Approx)</span></div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Living</span><span className="text-gray-300">{plan.dims.living || "N/A"}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Master Bed</span><span className="text-gray-300">{plan.dims.masterBed}</span></div>
                  </div>

                  <div className="p-4 bg-black">
                    <Dialog onOpenChange={(open) => { if(!open) setFormOpenId(null); }}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
                          <Maximize2 className="w-4 h-4 mr-2" /> View Layout
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#111] border border-[#333] text-white max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#d9a406] flex items-center gap-2">
                            {plan.type} Layout
                            {unlockedPlans[plan.id] && (<Badge className="bg-green-500/20 text-green-500 border-green-500/50">Unlocked</Badge>)}
                          </DialogTitle>
                        </DialogHeader>

                        <div className="mt-4 grid md:grid-cols-2 gap-8">
                          {/* IMAGE */}
                          <div className="relative aspect-square bg-black/50 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                             <img 
                                src={plan.image} 
                                alt={`Plan ${plan.id}`} 
                                className={`w-full h-full object-contain transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl scale-110 opacity-50'}`}
                             />
                             {!unlockedPlans[plan.id] && (
                               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 p-4 text-center backdrop-blur-sm">
                                 <div className="bg-[#111] p-4 rounded-full border border-[#d9a406] mb-4"><Lock className="w-8 h-8 text-[#d9a406]" /></div>
                                 <p className="text-white font-bold text-lg">Layout Locked</p>
                                 <p className="text-sm text-gray-300 mt-2 mb-4 max-w-[200px]">Submit EOI to view layouts</p>
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
                          
                          {/* DETAILS */}
                          <div className="space-y-6 flex flex-col justify-center min-h-[400px]">
                            {formOpenId !== plan.id ? (
                                <div className="animate-in fade-in slide-in-from-right-4">
                                    <h4 className="text-lg font-semibold border-b border-white/10 pb-2 text-white mb-4">Tentative Dimensions</h4>
                                    <dl className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                                        <dt className="text-gray-400">Facing</dt><dd className="font-medium text-right text-white">{plan.facing}</dd>
                                        <dt className="text-gray-400">Living</dt><dd className="font-medium text-right text-white">{plan.dims.living}</dd>
                                        <dt className="text-gray-400">Master Bed</dt><dd className="font-medium text-right text-white">{plan.dims.masterBed}</dd>
                                        <dt className="text-gray-400">Kitchen</dt><dd className="font-medium text-right text-white">{plan.dims.kitchen}</dd>
                                    </dl>
                                    
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        {!unlockedPlans[plan.id] ? (
                                            <Button 
                                                className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold"
                                                onClick={() => setFormOpenId(plan.id)}
                                            >
                                                <Unlock className="w-4 h-4 mr-2" /> Unlock Details
                                            </Button>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-3">
                                                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Download Brochure</Button>
                                                <Button className="bg-[#d9a406] text-black hover:bg-[#b38605]">Book Site Visit</Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white/5 p-6 rounded-lg border border-white/10 animate-in fade-in slide-in-from-right-4 relative">
                                    <button 
                                        onClick={() => setFormOpenId(null)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-white"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                    <h4 className="text-xl font-semibold text-white mb-2">Unlock Layout</h4>
                                    <p className="text-sm text-gray-400 mb-6">Enter details to view the floor plan.</p>
                                    <form onSubmit={(e) => handleFormSubmit(e, plan.id)} className="space-y-4">
                                        <div className="space-y-2"><Label className="text-gray-300">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                        <div className="space-y-2"><Label className="text-gray-300">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                        <div className="space-y-2"><Label className="text-gray-300">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold mt-2">
                                          {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Unlocking...</> : "Unlock Now"}
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

const LocationSection = () => (
  <section className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406]">Strategically Located</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sarjapura <span className="text-[#d9a406]">Chikka Tirupathi Road</span></h2>
          <p className="text-gray-400 mb-8 text-lg">A high-growth corridor offering excellent connectivity and peaceful living, just a short drive from major work hubs.</p>
          <div className="space-y-8">
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Connectivity</h4><p className="text-gray-500">Easy accessibility to ORR, Whitefield, and Sarjapura Main Road.</p>
             </div>
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Work Hubs</h4><p className="text-gray-500">Proximity to IT Parks and Wipro SEZ.</p>
             </div>
             <div className="border-l-2 border-[#333] pl-6 relative">
               <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
               <h4 className="text-white font-bold text-lg mb-2">Future Growth</h4><p className="text-gray-500">One of the most affordable price points in South Bangalore with high appreciation potential.</p>
             </div>
          </div>
        </div>

        {/* Right Map Section */}
        <div className="relative">
           <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
             <div className="w-full h-[500px] bg-[#000] rounded-lg overflow-hidden relative">
                {/* Google Map Embed Placeholder for Sarjapura */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.375647728795!2d77.8300!3d12.8800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzQ4LjAiTiA3N8KwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#d9a406] pointer-events-none shadow-lg">
                  <p className="text-[#d9a406] text-xs font-bold uppercase tracking-wider">Location</p>
                  <p className="text-black text-sm font-bold">Sarjapura - Chikka Tirupathi Road</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Miss the <span className="text-[#d9a406]">Pre-Launch!</span></h2>
          <p className="text-gray-400 mb-8">Limited inventory at this price point. Secure your EOI today to get priority selection and early bird pricing.</p>
          <Button size="lg" className="bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-xl px-10 py-8 rounded-full shadow-[0_0_30px_rgba(217,164,6,0.3)] hover:shadow-[0_0_50px_rgba(217,164,6,0.5)] transition-all" onClick={onOpenModal}>Submit EOI Now</Button>
        </div>
        <p className="text-gray-600 text-sm">RRL Builders & Developers © 2025. All rights reserved.</p>
     </div>
  </footer>
)

// ========== MAIN COMPONENT ==========

export default function Nc216Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [state, handleSubmit] = useForm("mkonkbkk"); // Formspree ID

  useEffect(() => {
    if (state.succeeded) {
       // Optional auto-close logic
    }
  }, [state.succeeded]);

  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-[#d9a406] selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
               RRL <span className="text-[#d9a406]">NC 216</span>
            </div>
            <div className="hidden md:flex gap-6 items-center">
               <span className="text-sm text-gray-400"><Phone className="inline w-4 h-4 mr-1 text-[#d9a406]"/> +91 99999 99999</span>
               <Button variant="outline" className="border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black" onClick={() => setIsModalOpen(true)}>Submit EOI</Button>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsModalOpen(true)}><Menu /></button>
         </div>
      </nav>

      <HeroImageBanner />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <HighlightsSection />
      <AmenitiesSection />
      {/* <FloorPlansSection /> */}
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
                  <h3 className="text-2xl font-bold text-white mb-2">EOI Received!</h3>
                  <p className="text-gray-400 mb-6">We have received your expression of interest. Our team will contact you shortly with floor plans and pricing.</p>
                  <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Close</Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8"><h3 className="text-3xl font-bold text-white mb-2">Submit EOI</h3><p className="text-[#d9a406] text-sm">Early Bird Pricing Ends Soon!</p></div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="project" value="NC 216 General Enquiry" />
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