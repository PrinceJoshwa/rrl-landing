"use client"

import { useState, useEffect, useRef } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, Variants, useScroll, useTransform, AnimatePresence} from "framer-motion"

// UI Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Icons
import {
  Award,
  ArrowRight,
  Play,
  Star,
  Building,
  Users,
  Target,
  Trophy,
  Newspaper,
  Calendar,
  Medal,
  MapPin,
  Home,
  Building2,
  Quote,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Send,
  Maximize,
  Download,
  CheckCircle2,
  ShieldCheck,
  Zap,
  CalendarClock,
  Clock,
  MessageCircle,
  Key,
  Briefcase,
  TrendingUp,
  Globe,
  Handshake, // Added for WhatsApp
  X, User, Smartphone,
  Loader2, CheckCircle
} from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'

const HeroImageBanner = () => {
  return (
    <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">
      
      {/* ===== MOBILE HERO (400 × 300) ===== */}
      <div className="block md:hidden">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)%20(1).png"
            alt="RRL Hero Banner Mobile"
            loading="eager"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* ===== DESKTOP HERO (UNCHANGED) ===== */}
      <div className="hidden md:block h-[60vh] lg:h-[80vh]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full overflow-hidden"
        >
          <img
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/RRl%20website%20banners%20(1536%20x%20752%20px)%20(19).png"
            alt="RRL Hero Banner Desktop"
            loading="eager"
            className="w-full h-full object-fill"
          />
        </motion.div>
      </div>

    </section>
  )
}



// ========== 1. HERO COMPONENT ==========
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  // const [isVRModalOpen, setIsVRModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // 1. State to control the popup
  const [isVRModalOpen, setIsVRModalOpen] = useState(false)
  
  // 2. Formspree Hook (ID: xkgkyavn)
  const [state, handleSubmit] = useForm("xkgkyavn");
  const router = useRouter()


  const slides = [
    {
      title: "Times Real Estate Icons Award",
      subtitle: "2025 Winner",
      description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
      image: "/awardhome.jpeg",
      badge: "Award Winner",
    },
    {
      title: "Global Real Estate Brand",
      subtitle: "2023 Champion",
      description: "Recognized globally for excellence in affordable luxury real estate development",
      image: "/awardhome1.jpeg",
      badge: "Global Recognition",
    },
  ]
  
const handleVRSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  await handleSubmit(e)

  // IMPORTANT: useForm updates state synchronously
  if (state.succeeded) {
    setIsVRModalOpen(false)
    router.push("/vr-tour/")
  }
}



  return (
    <>
      {/* ===== Hero Section ===== */}
      <motion.section
        className="relative flex min-h-[90vh] items-center overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />

        {/* Background Gradient Accent */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500">
                  <Award className="h-4 w-4 text-black" />
                </div>
                <span className="text-sm font-semibold">
                  Times Real Estate Icon Awards 2025 Winner
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-playfair">
                  RRL Builders & <span className="text-gold-400 block">Developers</span>
                </h1>

                <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                  <p>
                    RRL Builders & Developers is redefining modern luxury. We don't just build apartments; we craft high-quality lifestyles through innovation and a decade of expertise.
                    With 4 successfully delivered projects, we prioritise precision to ensure early possession for our homeowners
                    Residents and home buyers experience uncompromising quality in every detail, from premium finishes to future-ready amenities.
                  </p>
                  <p>
                    Our properties are perfectly positioned in Bangalore’s high-value zones:{" "}
                    <span className="text-gold-400 font-semibold">Sarjapura, Varthur, and Chikkatirupati.</span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
{/* ========== THE BUTTONS ========== */}
        <div className="flex flex-col gap-4 sm:flex-row pt-4 justify-center md:justify-start">
            <Link href="/projects">
              <Button
                size="lg"
                className="group w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold text-black bg-[#d9a406] hover:bg-[#b08505] transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
              >
                Explore RRL Properties
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* This Button now opens the Modal */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsVRModalOpen(true)}
              className="group w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold text-[#d9a406] border-[#d9a406] hover:bg-[#d9a406] hover:text-black transition-all duration-300"
            >
              Book a Virtual Tour
            </Button>
        </div>

        {/* ========== THE POPUP FORM (Required) ========== */}
      <AnimatePresence>
        {isVRModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVRModalOpen(false)}
          >
            <motion.div 
              className="bg-[#111] border border-[#d9a406] p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVRModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {state.succeeded ? (
                // Success Message
                <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle className="w-16 h-16 text-[#d9a406] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-400 mb-6">We'll contact you shortly to schedule your VR experience.</p>
                  <Button onClick={() => setIsVRModalOpen(false)} variant="outline" className="border-white/20 text-black hover:bg-white hover:text-black">Close</Button>
                </div>
              ) : (
                // The Form
                <>
                  <div className="text-center mb-8">
                     <h3 className="text-2xl font-bold text-white mb-2">
                       Book <span className="text-[#d9a406]">VR Experience</span>
                     </h3>
                     <p className="text-gray-400 text-sm">Fill in your details to schedule a session.</p>
                  </div>

                  {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
                  <form onSubmit={handleVRSubmit} className="space-y-4">

                    <input type="hidden" name="subject" value="Hero Section - VR Booking" />
                    
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
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Scheduling...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-400">
                    4.9/5 Customer Rating
                  </span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-gold-800" />
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-medium text-gray-400">
                    150+ Proud Employees
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Video */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gold-800 shadow-2xl shadow-gold-900/20 group">
                <div className="absolute inset-0 bg-gold-500/10 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
                <iframe
                  src="https://www.youtube.com/embed/noXGLRYcyBU?autoplay=1&mute=1&loop=1&playlist=noXGLRYcyBU"
                  title="Our Story Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full scale-105"
                ></iframe>
              </div>

              {/* Decorative elements around video */}
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-gold-800/30 bg-gray-900/50" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== Palm Altezze Banner ===== */}
      <PalmAltezzeBanner />

      {/* ===== Horizontal Brochure Form ===== */}
      <HorizontalBrochureForm />
    </>
  )
}

function PalmAltezzeBanner() {
  return (
    <section className="relative w-full bg-black py-20">
      {/* Background - Responsive Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/w_768,c_scale/v1766051893/Copy_of_HOME_HERO_1_yqcpcn.png"
          alt="Palm Altezze Background"
          fill
          className="block md:hidden object-cover opacity-30"
        />
        {/* Desktop Background */}
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766051893/Copy_of_HOME_HERO_1_yqcpcn.png"
          alt="Palm Altezze Background"
          fill
          className="hidden md:block object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/2 pt-10">
            <div className="lg:sticky lg:top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1 rounded-full border border-gold-500 text-gold-400 text-sm font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm mb-4">
                  New Launch
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight">
                  RRL <br /><span className="text-gold-400">Palm Altezze</span>
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light mt-4">
                  Where luxury meets tranquility. 2 & 3 BHK premium apartments designed for the modern lifestyle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-8 pt-4"
              >
                <div className="border-l-2 border-gold-500 pl-4">
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Project Area</p>
                  <p className="text-white text-xl font-bold">2 Acres</p>
                </div>
                <div className="border-l-2 border-gold-500 pl-4">
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
                  <p className="text-white text-xl font-bold">Varthur</p>
                </div>
                <div className="border-l-2 border-gold-500 pl-4">
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Status</p>
                  <p className="text-emerald-400 text-xl font-bold">Open for Booking</p>
                </div>
                <div className="border-l-2 border-gold-500 pl-4">
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Units</p>
                  <p className="text-white text-xl font-bold">115 Units</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6"
              >
                <Link href="/projects/palm-altezze">
                  <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-black font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105">
                    View Full Details <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Tall Image */}
          <div className="lg:w-1/2 w-full">
  <div
    className="
      relative w-full rounded-2xl overflow-hidden
      border border-gold-500/30 shadow-2xl
      aspect-[348/729] md:aspect-auto
      md:h-[500px] lg:h-[150vh]
    "
  >
    {/* Mobile Tall Image (348 × 729) */}
    <Image
      src="https://ik.imagekit.io/j0xzq9pns/palm-altezze%20(20).jpeg"
      alt="Palm Altezze Interior"
      fill
      className="block md:hidden object-cover"
      sizes="100vw"
    />

    {/* Desktop Tall Image */}
    <Image
      src="https://ik.imagekit.io/j0xzq9pns/palm-altezze%20(20).jpeg"
      alt="Palm Altezze Interior"
      fill
      className="hidden md:block object-cover lg:object-fill lg:object-top"
      sizes="50vw"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

    {/* Caption */}
    <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 z-10">
      <p className="text-white font-playfair text-lg">
        High-rise apartment
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

function HorizontalBrochureForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsappUpdates: false,
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Basic Validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all fields.")
      setLoading(false)
      return
    }

    try {
      // Send data to Formspree
      const res = await fetch("https://formspree.io/f/xgvnpbwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        // Auto-download the brochure
        const link = document.createElement("a")
        link.href = "/brochures/rrl-company-brochure.pdf"
        link.download = "RRL-Company-Brochure.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Open thank you page
        window.open("/c3/thankyou", "_blank")

        setFormData({ name: "", email: "", phone: "", whatsappUpdates: false })
      } else {
        alert("Failed to send details. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-neutral-900 border-y border-gold-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white font-playfair flex items-center justify-center lg:justify-start gap-2">
              <Download className="text-gold-500 h-6 w-6" />
              Download Project Brochure
            </h3>
            <p className="text-gray-400 mt-2">
              Get the complete floor plans, pricing, and amenities list instantly.
            </p>
          </div>

          <form onSubmit={handleDownloadSubmit} className="lg:w-2/3 w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="h-12 bg-black/50 text-white border-gold-700/50 focus:border-gold-500 w-full"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full md:w-auto px-8 bg-gold-500 hover:bg-gold-600 text-black font-bold whitespace-nowrap"
              >
                {loading ? "Processing..." : "Download Now"}
              </Button>
            </div>
            <div className="flex items-center space-x-2 mt-3 justify-center lg:justify-start">
              <Checkbox
                id="whatsapp-updates-hor"
                name="whatsappUpdates"
                checked={formData.whatsappUpdates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))
                }
                className="border-gold-700 data-[state=checked]:bg-gold-500"
              />
              <label htmlFor="whatsapp-updates-hor" className="text-sm text-gray-400 cursor-pointer">
                I agree to receive updates via WhatsApp
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


// ========== AWARDS SECTION (Restored & Corrected) ==========
const AwardsSection = () => {
  return (
    <section className="py-24 bg-black text-white relative border-t border-[#333]">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Times Real Estate <br /><span className="text-[#d9a406]">Icon Awards, 2025</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#d9a406] rounded-full"></div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              RRL Groups has been honored with the prestigious award for <span className="text-white font-semibold">Builder of the Year</span> in
              the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
            </p>

            <div className="space-y-6">
              {[
                ["Builder of the Year 2025", "Mid-segment housing category by Times Real Estate"],
                ["Global Real Estate Brand Awards 2023", "Winner in Affordability category"],
                ["Excellence in Amenities Premium", "Mid-Segment Homes 2024"],
              ].map(([title, desc], i) => (
                <div key={i} className="flex items-start space-x-4 group p-4 rounded-xl border border-transparent hover:border-[#d9a406]/30 hover:bg-[#111] transition-all duration-300">
                  <div className="w-10 h-10 bg-[#d9a406]/10 border border-[#d9a406] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#d9a406] transition-colors duration-300">
                    <Star className="h-5 w-5 text-[#d9a406] group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons Area - Partner Link Included */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/awards">
                <Button className="rounded-full px-8 py-7 bg-transparent border-2 border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black transition-all duration-300 font-bold text-lg w-full sm:w-auto">
                  View All Awards
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/channel-partners">
                <Button className="rounded-full px-8 py-7 bg-[#d9a406] text-black hover:bg-white border-2 border-[#d9a406] hover:border-white transition-all duration-300 font-bold text-lg w-full sm:w-auto">
                  <Handshake className="mr-3 h-6 w-6" />
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#d9a406]/20 rounded-3xl blur-2xl"></div>
            {/* Responsive Awards Image */}
            <picture>
              {/* Mobile Image */}
              <source
                media="(max-width: 768px)"
                // srcSet="https://res.cloudinary.com/dsj3kcbf4/image/upload/w_768,c_scale/v1766055536/awardhome_wvhw2f.jpg"
                srcSet="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/awardhome.jpeg"
              />
              {/* Desktop Image */}
              <img
                // src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766055536/awardhome_wvhw2f.jpg"
                src="https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/awardhome.jpeg"
                alt="RRL Awards Ceremony 2025"
                className="relative rounded-3xl w-full h-auto shadow-2xl border border-[#333] z-10"
              />
            </picture>

            {/* Floating Badge */}
            {/* <div className="absolute -bottom-8 -left-8 bg-black border border-[#d9a406] p-8 rounded-2xl shadow-2xl z-20 hidden lg:block">
                <p className="text-[#d9a406] font-bold text-5xl mb-1">2025</p>
                <p className="text-white text-sm uppercase tracking-[0.2em] font-bold">Icon Awards</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== 3. LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <motion.section
      className="relative overflow-hidden bg-light-black py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
          <Users className="h-5 w-5" />
          <span className="font-semibold">Leadership Excellence</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <div className="container relative mx-auto px-4">
        {/* Pillars Content */}
        <div className="mb-20 text-center max-w-4xl mx-auto bg-gray-900/40 p-8 rounded-3xl border border-gold-800/30 backdrop-blur-sm">
          <div className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-6 uppercase tracking-wider">
            Pillars of RRL Group
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-playfair">
            RRL Builders and Developers is led by the strong partnership of twin brothers <span className="text-white font-semibold">Mr. Ram</span> and <span className="text-white font-semibold">Mr. Lakshman</span>. Their shared commitment to quality and smart strategy is the main reason RRL is known for delivering modern, award-winning luxury homes.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white font-playfair lg:text-5xl">
                Young Entrepreneurs: <span className="text-gold-400 block">Transforming The Real Estate Landscape</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-400">
                When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
                Ram Reddy and Mr. Lakshman from RRL Builders and Developers stand out with their innovative approach.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
                {/* Mobile Image */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
                  alt="Mr. Ram Reddy"
                  width={300}
                  height={400}
                  className="block md:hidden h-auto w-full rounded-2xl shadow-lg"
                />
                {/* Desktop Image */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
                  alt="Mr. Ram Reddy"
                  width={300}
                  height={400}
                  className="hidden md:block h-auto w-full rounded-2xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-white">Mr. Ram Reddy</h3>
                  <p className="text-sm text-gray-400">Director</p>
                </div>
              </div>
              <div className="rounded-3xl bg-gray-900 p-6 shadow-xl border border-gold-800">
                {/* Mobile Image */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
                  alt="Mr. Lakshman Reddy"
                  width={300}
                  height={400}
                  className="block md:hidden h-auto w-full rounded-2xl shadow-lg"
                />
                {/* Desktop Image */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
                  alt="Mr. Lakshman Reddy"
                  width={300}
                  height={400}
                  className="hidden md:block h-auto w-full rounded-2xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-white">Mr. Lakshman Reddy</h3>
                  <p className="text-sm text-gray-400">Chairman</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-12">
          <Link href="/about">
            <Button variant="outline" className="bg-[#D9A406] border-gold-500 text-black hover:bg-gold-500 hover:text-white rounded-full px-8 py-6">
              About us
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 4. PROPERTIES COMPONENT (NO TOGGLE, MERGED LIST) ==========
function Properties() {
  // Updated data with Possession/Handover timelines
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
  const residentialProperties = [
    {
      id: "palm-altezze",
      name: "RRL Palm Altezze",
      location: "Varthur, Bangalore",
      type: "Luxury Apartment",
      status: "Booking Open",
      image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863",
      mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863",
      bedrooms: "2, 3 BHK",
      devSize: "1 acre 38 Guntas", // Updated
      totalUnits: "115 Units", // Updated
      timeline: "Possession: 2027",
      timelineSub: "Next Handover Phase"
    },
    {
      id: "nc-216", // NEW PROJECT
      name: " RRL NC 216",
      location: "Bangalore",
      type: "Mid size Apartment",
      status: "EOI is Open",
      image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/NC%20216.png?updatedAt=1766849714503", // Placeholder image 
      mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/NC%20216.png?updatedAt=1766849714503",
      bedrooms: "2, 3 BHK",
      devSize: "2.06 Acres",
      totalUnits: "216 Units",
      timeline: "Booking Open Soon",
      timelineSub: "Open For EOI"
    },
    {
      id: "palacio",
      name: "RRL Palacio",
      location: "Medahalli, Bangalore",
      type: "Upper Mid-Size Apartment",
      status: "READY TO MOVE",
      image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531",
      mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531",
      bedrooms: "2, 3 BHK",
      devSize: "1.5 Acres",
      totalUnits: "103 Units", // Updated
      timeline: "Early possession", // Updated
      timelineSub: null
    },
    {
      id: "nature-woods",
      name: "RRL Nature Woods",
      location: "Sarjapur, Bangalore",
      type: "Premium Apartment",
      status: "COMPLETED",
      image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502",
      mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502",
      bedrooms: "2, 3 BHK",
      devSize: "1.5 Acres", // Updated
      totalUnits: "148 Units", // Updated
      timeline: "Early possession granted", // Updated
      timelineSub: null
    },
  ]

  const commercialProperties = [
    {
      id: "commercial",
      name: "RRL Towers",
      location: "Sarjapur", // Updated
      type: "Commercial", // Updated
      status: "COMPLETED",
      image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451",
      mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451",
      bedrooms: null, // Hidden
      devSize: null, // Hidden
      totalUnits: null, // Hidden
      timeline: "Operational",
      timelineSub: "Ready for Fitouts"
    },
    {
      id: "commercial",
      name: "RRL Complex",
      location: "Attibele Sarjapur Road", // Updated
      type: "Commercial",
      status: "COMPLETED",
      image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360",
      mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360",
      bedrooms: null, // Hidden
      devSize: null, // Hidden
      totalUnits: null, // Hidden
      timeline: "Completed",
      timelineSub: "Commercial Project"
    },
  ]

  // Combine both lists into one
  const allProperties = [...residentialProperties, ...commercialProperties];

  return (
    <section className="bg-black py-24 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-gold-400"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Premium Collections</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-4xl font-bold font-playfair text-white lg:text-5xl"
          >
            Explore <span className="text-gold-400">RRL Projects</span>
          </motion.h2>
        </div>

        {/* PROPERTIES LIST - HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {allProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-neutral-900 border border-gold-900/50 shadow-xl transition-all hover:border-gold-500/50 hover:shadow-gold-900/20"
            >
              {/* LEFT: Image Section (55% width on desktop) - Responsive */}
              <div
  className="
    relative shrink-0 overflow-hidden
    aspect-[366/256] md:aspect-auto
    md:h-64 lg:h-auto lg:w-[55%]
  "
>

                {/* Mobile Image */}
                <Image
  src={property.mobileImage || property.image || "/placeholder.svg"}
  alt={property.name}
  fill
  className="block md:hidden object-fill transition-transform duration-700 group-hover:scale-105"
/>

                {/* Desktop Image */}
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  fill
                  className="hidden md:block object-fill transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Status Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                    {property.status}
                  </span>
                </div>
              </div>

              {/* RIGHT: Content Section */}
              <div className="flex flex-col p-6 lg:p-8 w-full bg-neutral-900 h-auto lg:h-full">
                {/* Header: Title & Logo Area */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-playfair mb-1 group-hover:text-gold-400 transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="mr-1.5 h-3.5 w-3.5 text-gold-500" />
                      {property.location}
                    </div>
                  </div>
                  {/* Placeholder for Project Logo if needed, currently using Icon */}
                  <div className="h-10 w-10 rounded-full bg-gold-900/30 flex items-center justify-center border border-gold-500/30">
                    <Building2 className="text-gold-400 h-5 w-5" />
                  </div>
                </div>

                {/* --- NEW HIGHLIGHTED TIMELINE SECTION --- */}
                <div className="mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
                  <div className="flex items-start gap-2">
                    <CalendarClock className="h-4 w-4 text-gold-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">{property.timeline}</p>
                      {property.timelineSub && (
                        <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                          {property.timelineSub.includes("done") || property.timelineSub.includes("Handover") ? (
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                          ) : (
                            <Clock className="h-3 w-3 text-blue-500" />
                          )}
                          {property.timelineSub}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Grid Details (Reference Layout) */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 border-t border-b border-gray-800 py-6">
                  {/* Item 1 - Project Type (Always Show) */}
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-gold-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Project Type</p>
                      <p className="text-sm font-semibold text-gray-200">{property.type}</p>
                    </div>
                  </div>

                  {/* Item 2 - Configuration (Hidden for Commercial if null) */}
                  {property.bedrooms && (
                    <div className="flex items-start space-x-3">
                      <Home className="h-5 w-5 text-gold-500 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Configuration</p>
                        <p className="text-sm font-semibold text-gray-200">{property.bedrooms}</p>
                      </div>
                    </div>
                  )}

                  {/* Item 3 - Dev Size (Hidden for Commercial if null) */}
                  {property.devSize && (
                    <div className="flex items-start space-x-3">
                      <Maximize className="h-5 w-5 text-gold-500 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Land Size</p>
                        <p className="text-sm font-semibold text-gray-200">{property.devSize}</p>
                      </div>
                    </div>
                  )}

                  {/* Item 4 - Total Units (Hidden for Commercial if null) */}
                  {property.totalUnits && (
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-gold-500 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Total Units</p>
                        <p className="text-sm font-semibold text-gray-200">{property.totalUnits}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer: Actions with WhatsApp */}
                <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex gap-3 w-full">
                    {/* WhatsApp Button - NEW */}
                    <a
                      href="https://wa.me/918494966966"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-none flex items-center justify-center h-12 w-12 rounded-lg border border-gray-600 text-white hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                    </a>

                    {/* Phone Button */}
                    <a
                      href="tel:+918494966966"
                      className="flex-none flex items-center justify-center h-12 w-12 rounded-lg border border-gray-600 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
                    >
                      <Phone className="h-5 w-5" />
                    </a>

                    {/* Details Link */}
                    <Link href={`/projects/${property.id}`} className="flex-1">
                      <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold h-12 px-6 rounded-lg flex items-center justify-center">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full px-8 py-6">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const JourneySection = () => {
  // Exact 5 points from the "RRL Milestones" box in the image
  const milestones = [
    {
      year: "Recognition",
      title: "Award Winning Developers",
      description: "Recognized for excellence in construction quality and architectural innovation.",
      icon: Trophy,
    },
    {
      year: "Delivery",
      title: "Early Possessions",
      description: "Successfully completed 2 projects and offered possession ahead of schedule.",
      icon: Key,
    },
    {
      year: "Expertise",
      title: "High-Rise & Premium",
      description: "Accommodates high-rise premium projects and mid-size luxury homes with A1 quality.",
      icon: Building2,
    },
    {
      year: "Innovation",
      title: "Pioneer in Commercial",
      description: "Leading the way in landmark commercial projects.",
      icon: Briefcase,
    },
    {
      year: "Growth",
      title: "200% Appreciation",
      description: "Our completed projects have seen a massive 200% capital appreciation in just 2 years.",
      icon: TrendingUp,
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-black to-black"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Discover Our <span className="text-[#d9a406]">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#d9a406] mx-auto rounded-full"
          />
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#333] -translate-x-1/2 md:translate-x-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-[#d9a406] origin-top"
            />
          </div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-6 rounded-2xl border border-[#d9a406]/30 bg-[#111] hover:border-[#d9a406] transition-all duration-300 group relative hover:shadow-[0_0_30px_rgba(217,164,6,0.15)] ${index % 2 === 0 ? "md:text-left md:mr-12" : "md:text-right md:ml-12"
                    }`}>
                    {/* Arrow pointing to center */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#111] border-t border-r border-[#d9a406]/30 group-hover:border-[#d9a406] rotate-45 transition-colors ${index % 2 === 0 ? "-right-2.5 border-l-0 border-b-0" : "-left-2.5 border-t-0 border-r-0 border-b border-l"
                      }`}></div>

                    <div className={`flex items-center gap-4 mb-3 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="p-3 bg-[#d9a406]/10 rounded-lg text-[#d9a406]">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-sm text-[#d9a406] font-bold tracking-widest uppercase">{item.year}</span>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-[#d9a406] relative z-10">
                    <div className="absolute inset-0 bg-[#d9a406] rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Empty Side for Layout Balance */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NRI CLIENTS BANNER (From Bottom Box in Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#d9a406]/50 bg-gradient-to-r from-[#1a1a1a] to-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9a406] rounded-full filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 bg-[#d9a406] rounded-full shadow-[0_0_20px_rgba(217,164,6,0.4)]">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">Global Trust</h3>
                <p className="text-xl text-[#d9a406] font-semibold">5% of our clients are NRIs</p>
                <p className="text-gray-400 max-w-md">
                  Across all completed projects, we are the preferred choice for international investors.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <Button
                className="bg-transparent border-2 border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black px-8 py-6 text-lg font-bold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(217,164,6,0.4)]"
                onClick={() => window.location.href = '/nri-corner'}
              >
                Explore Milestone <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
// ========== 5. CLIENT GALLERY ==========
function HappyClientsGallery() {
  const clientImages = [
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560219/20250731_121250_nq8l6b.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560213/20250808_115517_vitgx0.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560198/20250728_164509_qpnvtc.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560193/20250801_121200_sorava.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560094/WhatsApp_Image_2025-11-29_at_20.11.09_qb0dfy.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560079/WhatsApp_Image_2025-11-29_at_20.11.07_uwd8ac.jpg",
    "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764560033/20250805_115305_qoouj2.jpg",
  ]

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Header */}
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

      {/* Scroll Wrapper */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-neutral-50 to-transparent" />

        {/* Scroll Row */}
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
                {/* Image */}
                <div className="relative h-full w-full">
                  <Image
                    src={img}
                    alt={`Happy Client ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Text */}
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


function LifeAtRRLGallery() {
  const lifeAtRRLImages = [
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057521/IMG-20251218-WA0011_nssvkw.jpg",
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057521/IMG-20251218-WA0010_q2r24l.jpg",
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057539/IMG-20251218-WA0018_nuy29a.jpg",
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057532/IMG-20251218-WA0007_bhqie0.jpg",
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057527/IMG-20251218-WA0012_v8llfl.jpg",
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057525/IMG-20251218-WA0008_mnbwk5.jpg",
    // "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766057521/IMG-20251218-WA0020_xcy5dw.jpg",
    "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008",
    "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg?updatedAt=1767702779226",
    "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM%20(1).jpeg?updatedAt=1767702778813",
    "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM.jpeg?updatedAt=1767702779051",
    "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.22%20PM.jpeg?updatedAt=1767702798945",
    "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM.jpeg?updatedAt=1767702775424",
  ]

  return (
    <section className="py-24 bg-[#111] border-y border-gold-900/30 overflow-hidden relative">

      {/* Header */}
      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-white">
            Life at <span className="text-gold-500">RRL</span>
          </h2>
          <p className="text-sm sm:text-xl text-gold-400 uppercase tracking-widest font-medium">
            Team Outing Gallery
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex w-full overflow-hidden group">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-r from-[#111] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-l from-[#111] to-transparent" />

        <motion.div
          className="flex gap-4 sm:gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...lifeAtRRLImages, ...lifeAtRRLImages].map((src, i) => (
            <div
              key={i}
              className="
                relative flex-shrink-0 overflow-hidden rounded-3xl
                w-[200px] h-[260px]
                sm:w-[240px] sm:h-[320px]
                md:w-[300px] md:h-[400px]
                lg:w-[380px] lg:h-[480px]
                grayscale hover:grayscale-0
                transition-all duration-500
                border border-white/5 hover:border-gold-500
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(217,164,6,0.3)]
              "
            >
              <Image
                src={src}
                alt="Life at RRL"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 300px, 380px"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


// ========== STATS COMPONENT (RESTORED) ==========
function Stats() {
  const statsData = [
    {
      icon: Users,
      value: "1000+",
      label: "Happy Families",
      description: "Satisfied customers",
    },
    {
      icon: Building,
      value: "5+",
      label: "Projects Completed",
      description: "Premium residential developments",
    },
    {
      icon: Target,
      value: "500+",
      label: "Trusted Partners",
      description: "Total construction area delivered",
    },
    {
      icon: Award,
      value: "150+",
      label: "Proud Employees",
      description: "Professional team members",
    },
  ]

  return (
    <motion.section
      className="py-24 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-6 text-4xl font-bold text-black font-playfair lg:text-5xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            The Outstanding <span className="text-gold-600">Growth</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-xl text-gray-800"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
          >
            Celebrating Growth: Highlights of Our Accomplishments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="rounded-3xl border border-gold-300 bg-white/50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-lg">
                      <stat.icon className="h-10 w-10 text-black" />
                    </div>
                  </div>
                  <div className="mb-2 text-5xl font-bold text-black">{stat.value}</div>
                  <div className="mb-3 text-lg font-semibold text-gray-800">{stat.label}</div>
                  <div className="text-sm leading-relaxed text-gray-600">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QUOTE BOX ADDED FROM OLD FILE */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl p-8 border border-gold-300 bg-white/50">
            <p className="text-lg italic leading-relaxed text-gray-800">
              "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
              you make well-informed decisions. Let us build an affordable society together."
            </p>
            <div className="mt-4 font-semibold text-gold-600">- RRL Groups</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ========== 6. TESTIMONIALS COMPONENT (UPDATED ROLES) ==========
// ========== 6. TESTIMONIALS COMPONENT (COMBINED CONTENT - ORIGINAL UI) ==========
function Testimonials() {
  const testimonialData = [
    {
      type: "text",
      name: "Anusha V",
      role: "Happy Home Buyer",
      location: "RRL Palacio",
      rating: 5,
      testimonial: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool.",
    },
    {
      type: "text",
      name: "Rama Krishna Kanupuri",
      role: "Happy Home Buyer",
      location: "RRL Nature Woods",
      rating: 5,
      testimonial: "Best apartments with good amenities. Build quality is excellent. Ram and Lakshman are genuine, humble and have great knowledge in construction. Highly recommend for a visit!",
    },
    {
      type: "video",
      name: "VideoTestimonial1",
      videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
    },
    {
      type: "text",
      name: "Kishore Babu",
      role: "Happy Home Buyer",
      location: "RRL Palm Altezze",
      rating: 5,
      testimonial: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym, open barbeque facing swimming pool. Very impressed with CRECHE and Automation (Schneider make). Best choice for anyone!",
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
      name: "VideoTestimonial2",
      videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
    },
    {
      type: "text",
      name: "Prabhakaran Surineni",
      role: "Happy Home Buyer",
      location: "RRL Palm Altezze",
      rating: 5,
      testimonial: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional - always available to answer questions and treated us politely. RRL Builders deliver good quality with a great team!",
    },
    {
      type: "text",
      name: "Rahil R",
      role: "Happy Home Buyer",
      location: "RRL Palacio",
      rating: 5,
      testimonial: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!",
    },
    {
      type: "text",
      name: "Ravi Viswanathan",
      role: "Happy Home Buyer",
      location: "RRL Nature Woods",
      rating: 5,
      testimonial: "One of the best apartments with good amenities in Bengaluru at a non-polluted area. Ram and Lakshmanan are friendly and polite. Worth investment!",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* BACKGROUND IMAGE - Responsive */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/CLIENTS%20BACKGROUND.png?updatedAt=1766848385247"
          />
          <img
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/CLIENTS%20BACKGROUND.png?updatedAt=1766848385247"
            alt="Clients background"
            className="w-full h-full object-fill"
          />
        </picture>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hear From Our <span className="text-[#d9a406]">Clients</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Real stories from families across Palacio, Palm Altezze & Nature Woods who found their dream home with RRL.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((item, index) =>
            item.type === "video" ? (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-black
                           aspect-video md:aspect-[4/3] lg:aspect-[4/3]"
              >
                <iframe
                  src={item.videoUrl}
                  title={item.name}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl
                           flex flex-col h-full"
              >
                {/* STARS */}
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#d9a406]">★</span>
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6">
                  “{item.testimonial}”
                </p>

                {/* FOOTER */}
                <div className="mt-auto border-t pt-4">
                  <h4 className="font-bold text-black">{item.name}</h4>
                  <p className="text-[#d9a406] text-sm font-semibold">{item.role}</p>
                  <p className="text-gray-400 text-xs">{item.location}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

// ========== 7. PARTNERS SECTION (RESTORED) ==========
function PartnersSection() {
  const bankingPartners = [
    { name: "SBI", src: "/logos/SBI-Logo.png" },
    { name: "HDFC Bank", src: "/logos/hdfc-bank.png" },
    { name: "Bank of Baroda", src: "/logos/bank-of-baroda.png" },
    { name: "Union Bank", src: "/logos/union-bank.png" },
    { name: "ICICI Bank", src: "/logos/icici-bank.png" },
    { name: "Axis Bank", src: "/logos/axis-bank.svg" },
    { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
    { name: "Bajaj Finserv", src: "/logos/bajaj-finserv.png" },
    { name: "TATA Capital", src: "/logos/tata-capital.png" },
  ]

  const trustedBrands = [
    { name: "Kerovit", src: "/logos/kerovit.png" },
    { name: "Schneider", src: "/logos/schneider.png" },
    { name: "One Touch", src: "/logos/one-touch.png" },
    { name: "Designhive", src: "/logos/Designhive.png" },
    { name: "Polycab", src: "/logos/polycab.png" },
    { name: "SVT", src: "/logos/svt.png" },
    { name: "Shivam Enterprise", src: "/logos/shivam.png" },
    { name: "Nippon", src: "/logos/nippon.png" },
    { name: "Fenstect", src: "/logos/fenstect.png" },
    { name: "Saint Gobain", src: "/logos/saint-gobain.png" },
    { name: "Philips", src: "/logos/philips.png" },
    { name: "Wipro", src: "/logos/wipro.jpg" },
  ]

  const marketingPartners = [
    { name: "Magic Bricks", src: "/logos/magic-bricks.png" },
    { name: "Housing.com", src: "/logos/housing-com.png" },
    { name: "Marketly", src: "/logos/marketly.jpg" },
    { name: "99acres", src: "/logos/99acres.png" },
  ]

  const duplicatedBankingPartners = [...bankingPartners, ...bankingPartners]
  const duplicatedTrustedBrands = [...trustedBrands, ...trustedBrands]
  const duplicatedMarketingPartners = [...marketingPartners, ...marketingPartners]

  return (
    <motion.section
      className="overflow-hidden py-20 bg-light-gold"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-playfair">
            Our Valued <span className="text-gold-600">Partners</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-800">
            Collaborating with industry leaders to bring you the best in real estate.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-black">Banking Partners</h2>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex flex-nowrap"
                animate={{ x: ["0%", `-${(100 / 2) * (bankingPartners.length / 6)}%`] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
              >
                {duplicatedBankingPartners.map((partner, index) => (
                  // FIXED: Changed width for mobile from 1/3 to 1/2 for better visibility
                  <div key={`banking-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                      <Image
                        src={partner.src || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-black">Trusted Brands</h2>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex flex-nowrap"
                animate={{ x: [`-${(100 / 2) * (trustedBrands.length / 6)}%`, "0%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
              >
                {duplicatedTrustedBrands.map((brand, index) => (
                  // FIXED: Changed width for mobile
                  <div key={`trusted-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                      <Image
                        src={brand.src || "/placeholder.svg"}
                        alt={brand.name}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold text-black">Marketing Partners</h2>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex flex-nowrap"
                animate={{ x: ["0%", `-${(100 / 2) * (marketingPartners.length / 6)}%`] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
              >
                {duplicatedMarketingPartners.map((partner, index) => (
                  // FIXED: Changed width for mobile
                  <div key={`marketing-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/6 p-4">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                      <Image
                        src={partner.src || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
interface FAQSectionProps {
  title?: string
  subtitle?: string
  defaultLocation?: "sarjapur" | "varthur"
}
function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
  defaultLocation = "sarjapur",
}: FAQSectionProps) {
  const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
  const [openItems, setOpenItems] = useState<string[]>([])

  const sarjapurFAQs = [
    {
      question: "What is the price of a 2 BHK flat in Sarjapur?",
      answer:
        "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
    },
    {
      question: "Where can I buy a 2 BHK flat in Bangalore?",
      answer:
        "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
    },
    {
      question: "Are there apartments in Sarjapur Road for sale?",
      answer:
        "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
    },
    {
      question: "What makes Luxury Apartments in Sarjapur Road special?",
      answer:
        "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
    },
  ]

  const varthurFAQs = [
    {
      question: "Is Varthur a good area to live in Bangalore?",
      answer:
        "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
    },
    {
      question: "What is the price of a flat in Varthur?",
      answer:
        "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
    },
    {
      question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
      answer:
        "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
    },
    {
      question: "What are the options for apartments in Varthur?",
      answer:
        "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
    },
  ]

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleLocationChange = (location: "sarjapur" | "varthur") => {
    setActiveLocation(location)
    setOpenItems([])
  }

  const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
  const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"

  return (
    <section className="bg-black py-20 text-white ">
      <div className="container mx-auto px-4 ">
        <div className="mb-16 text-center ">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 ">
            <HelpCircle className="h-5 w-5" />
            <span className="font-semibold">FAQ</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">{title}</h2>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">{subtitle}</p>

          {/* FIXED: Added flex-wrap for mobile */}
          <div className="mb-4 inline-flex flex-wrap justify-center items-center rounded-full bg-gray-900 p-1 ">
            <button
              onClick={() => handleLocationChange("sarjapur")}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
                }`}
            >
              <MapPin className="h-4 w-4" />
              <span>Sarjapur</span>
            </button>
            <button
              onClick={() => handleLocationChange("varthur")}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
                }`}
            >
              <MapPin className="h-4 w-4" />
              <span>Varthur</span>
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <h3 className="mb-6 text-center text-2xl font-bold">{currentLocationTitle}</h3>

          <div className="space-y-4">
            {currentFAQs.map((faq, index) => {
              const itemId = `${activeLocation}-${index}`
              const isOpen = openItems.includes(itemId)

              return (
                <div
                  key={itemId}
                  className="overflow-hidden rounded-2xl bg-gray-900 border border-gold-800 transition-shadow duration-300 hover:border-gold-700"
                >
                  <button
                    onClick={() => toggleItem(itemId)}
                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                  >
                    <h4 className="pr-4 text-lg font-semibold">{faq.question}</h4>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gold-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-8 pb-6">
                      <p className="leading-relaxed text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gray-900/50 border border-gold-800 p-8">
            <h3 className="mb-4 text-2xl font-bold">Still have questions about {currentLocationTitle}?</h3>
            <p className="mb-6 text-gray-400">
              Our expert team is here to help you find your perfect property. Get in touch for personalized assistance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600"
              >
                Contact Our Experts
              </a>
              <a
                href="tel:+91-8494966966"
                className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20"
              >
                Call: +91-8494966966
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChannelPartnerCTA() {
  return (
    <motion.section
      className="bg-black py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gray-900/50 border border-gold-800 p-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold text-white font-playfair lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Become a <span className="text-gold-400">Channel Partner</span>
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Are you a real estate agent or a firm? Partner with us to get access to exclusive inventory, attractive
            commissions, and dedicated support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/channel-partners">
              <Button
                size="lg"
                className="group rounded-full px-8 py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
              >
                Join Our Network
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function CallToAction() {
  const [formData, setFormData] = useState({ name: "", contact: "", property: "", message: "" })
  const router = useRouter()

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   try {
  //     const res = await fetch("https://formspree.io/f/xwprwzdq", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })

  //     if (res.ok) {
  //       router.push("/c1/thankyou")
  //     } else {
  //       alert("Failed to send your request. Please try again.")
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error)
  //     alert("Something went wrong. Please try again.")
  //   }
  // }
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const data = new FormData()
  data.append("name", formData.name)
  data.append("contact", formData.contact)
  data.append("property", formData.property)
  data.append("message", formData.message)

  try {
    const res = await fetch("https://formspree.io/f/xwprwzdq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (res.ok) {
      router.push("/c1/thankyou/")
    } else if (res.status === 429) {
      alert("Too many requests. Please wait a moment and try again.")
    } else {
      alert("Failed to send your request. Please try again.")
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    alert("Network error. Please try again.")
  }
}


  return (
    <section className="relative overflow-hidden bg-light-gold py-24 text-black">
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Request A Call Back</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-800">
            Contact Us: Let's Start Your Real Estate Journey Together
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <motion.div
              className="rounded-3xl p-8 bg-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-100 focus:border-gold-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-600">Contact Number *</label>
                    <Input
                      placeholder="Your phone number"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="bg-gray-100 focus:border-gold-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">I'm interested in *</label>
                  <Select
                    value={formData.property}
                    onValueChange={(value) => setFormData({ ...formData, property: value })}
                  >
                    <SelectTrigger className="bg-gray-100">
                      <SelectValue placeholder="Select a property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="palacio">RRL Palacio</SelectItem>
                      <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
                      <SelectItem value="sequoia">RRL Sequoia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">Message</label>
                  <Textarea
                    placeholder="Your query in brief"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] bg-gray-100 focus:border-gold-500"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="group w-full rounded-full py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
                >
                  Submit Request
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
                <p className="mb-8 leading-relaxed text-gray-700">
                  Take the first step towards your real estate goals. Contact our expert team for personalised
                  assistance.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
                    <a
                      href="tel:+918494966966"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      +91-8494966966
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
                    <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg bg-gold-500">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
                    <p className="text-gray-700">
                      RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== FINAL PAGE EXPORT ==========
export default function HomePage() {
  return (
    <>
      <HeroImageBanner />
      <Hero />
      <Properties />
      <HappyClientsGallery />
      <JourneySection />
      {/* <Stats /> */}
      <Testimonials />
      <AwardsSection />
      <LifeAtRRLGallery />
      <Leadership />
      {/* <PartnersSection /> */}
      {/* <FAQSection /> */}
      <ChannelPartnerCTA />
      <CallToAction />
    </>
  )
}