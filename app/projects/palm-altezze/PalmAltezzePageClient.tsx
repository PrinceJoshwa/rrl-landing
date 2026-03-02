"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Building2,
  Leaf,
  Users,
  Zap,
  Train,
  Hospital,
  BookOpen,
  ShoppingCart,
  Award,
  Mail,
  MapPin,
  ChevronDown,
  X,
  Wind,
  Footprints,
  Waves,
  Music,
  Dumbbell,
  MonitorPlay,
  Landmark,
  Sun,
  ShieldCheck,
  LayoutDashboard,
  Trees,
  Coffee,
  Table2,
  Construction,
  Download,
  Paintbrush,
  Maximize,
  Lightbulb,
  Maximize2,
  Lock,
  Unlock,
  ArrowLeft,
  ArrowRight,
  Star,
  Globe,
  Utensils,
  Gamepad2,
  Tv,
  Flower2,
  Briefcase,
  TrendingUp,
  Key,
  Glasses,
  Frame,
  BrickWall,
  DoorOpen,
  AppWindow,
  Layers,
  Bath,
  Wrench,
  PaintRoller,
  ArrowUpFromLine,
  BatteryCharging,
  Droplets,
  CheckCircle,
  User,
  Smartphone,
  Calendar,
  Loader2
} from "lucide-react"
import type React from "react"
import { useForm, ValidationError } from '@formspree/react'
import TowerBrochureModal from "@/components/TowerBrochureModal"
import BrochureCTAModal from "@/components/BrochureCTAModal"

// --- Shared Form Data Type ---
type FormData = {
  name: string
  email: string
  phone: string
  message?: string
}

// --- Floor Plans Data ---
const floorPlansData = [
  { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "11'0\" x 16'0\"", dining: "10'6\" x 10'0\"", masterBed: "11'0\" x 13'0\"", kitchen: "8'0\" x 8'0\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "11'0\" x 16'0\"", dining: "10'6\" x 12'6\"", masterBed: "12'0\" x 13'0\"", kitchen: "8'6\" x 9'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "12'0\" x 18'0\"", dining: "11'0\" x 13'0\"", masterBed: "13'0\" x 14'0\"", kitchen: "9'0\" x 10'0\"", bed2: "12'0\" x 12'0\"", bed3: "11'0\" x 12'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "16'6\" x 11'0\"", dining: "12'0\" x 11'0\"", masterBed: "12'0\" x 14'0\"", kitchen: "10'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "16'6\" x 11'0\"", dining: "12'0\" x 11'0\"", masterBed: "12'0\" x 14'0\"", kitchen: "10'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "06", type: "2BHK", facing: "West", area: 1280, dims: { living: "11'0\" x 16'0\"", dining: "10'0\" x 10'0\"", masterBed: "11'6\" x 13'0\"", kitchen: "8'0\" x 9'0\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "07", type: "3BHK", facing: "West", area: 1520, dims: { living: "12'0\" x 16'0\"", dining: "11'0\" x 12'0\"", masterBed: "12'6\" x 13'0\"", kitchen: "9'0\" x 9'0\"", bed2: "11'6\" x 11'0\"", bed3: "10'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "08", type: "3BHK", facing: "North", area: 1610, dims: { living: "12'0\" x 18'0\"", dining: "11'0\" x 13'0\"", masterBed: "13'0\" x 14'0\"", kitchen: "9'0\" x 10'0\"", bed2: "12'0\" x 12'0\"", bed3: "11'0\" x 12'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "09", type: "2BHK", facing: "East", area: 1255, dims: { living: "11'0\" x 16'0\"", dining: "10'6\" x 10'0\"", masterBed: "11'0\" x 13'0\"", kitchen: "8'0\" x 8'0\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "10", type: "3BHK", facing: "West", area: 1550, dims: { living: "16'6\" x 11'0\"", dining: "12'0\" x 11'0\"", masterBed: "12'0\" x 14'0\"", kitchen: "10'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "11", type: "2BHK", facing: "North", area: 1290, dims: { living: "11'6\" x 16'0\"", dining: "10'6\" x 10'6\"", masterBed: "12'0\" x 13'0\"", kitchen: "8'6\" x 8'6\"", bed2: "11'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "12", type: "3BHK", facing: "East", area: 1580, dims: { living: "12'6\" x 17'0\"", dining: "11'6\" x 12'6\"", masterBed: "13'0\" x 14'0\"", kitchen: "9'6\" x 10'0\"", bed2: "12'0\" x 12'0\"", bed3: "11'6\" x 11'6\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "13", type: "3BHK", facing: "East", area: 1485, dims: { living: "26'6\" x 11'6\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "14", type: "2BHK", facing: "East", area: 1250, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "10'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "15", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
  { id: "16", type: "3BHK", facing: "East", area: 1540, dims: { living: "11'6\" x 22'9\"", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" }, image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766430807/Screenshot_2025-12-23_004149_qp72pb.png" },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  // --- UPDATED: Handle Submit accepts a specific form ID ---
  const handleFormSubmit = async (data: FormData, formId: string): Promise<boolean> => {
    // CRM – fire and forget
    fetch('/enquire-now-api.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: data.name, phone: data.phone, email: data.email, project: 'RRL Palm Altezze' }),
    }).catch(console.error)

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (response.ok) {
        router.push("/c4/thankyou")
        return true
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.")
        return false
      }
    } catch (error) {
      alert("An error occurred. Please check your connection and try again.")
      return false
    }
  }

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // --- Animated Counter Helper ---
  const AnimatedCounter = ({ start = 0, end, duration = 2000, suffix = "", separator = false }: { start?: number; end: number; duration?: number; suffix?: string; separator?: boolean; }) => {
    const [count, setCount] = useState(start)

    useEffect(() => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        setCount(current);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [start, end, duration]);

    return <span>{separator ? count.toLocaleString() : count}{suffix}</span>
  }

  const HeroImageBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
      {
        id: 1,
        desktop:
          "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png",
        mobile:
          "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/ok.png?updatedAt=1766849914416",
        alt: "RRL Palm Altezze Hero Banner",
      },
      // {
      //   id: 2,
      //   desktop:
      //     "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/HOME%20HERO%201.png?updatedAt=1766848463108",
      //   mobile:
      //     "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/HOME%20HERO%201.png?updatedAt=1766849907651",
      //   alt: "RRL Palm Altezze Hero Banner",
      // },
      // {
      //   id: 3,
      //   desktop:
      //     "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%201.1.png?updatedAt=1766848553544",
      //   mobile:
      //     "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/PALM%20ALTEZZE%201.1.png?updatedAt=1766849906858",
      //   alt: "RRL Palm Altezze Hero Banner",
      // },
    ];

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [images.length]);

    return (
      <section className="relative w-full bg-black border-y border-[#333] overflow-hidden">

        {/* ================= MOBILE SLIDER (400 × 300) ================= */}
        <div className="block md:hidden">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={images[currentSlide].mobile}
                alt={images[currentSlide].alt}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AnimatePresence>

            {/* Dots (Mobile) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${currentSlide === index
                    ? "bg-[#d9a406] w-6"
                    : "bg-white/50 w-2"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= DESKTOP SLIDER (UNCHANGED) ================= */}
        <div className="hidden md:block h-[60vh] lg:h-[80vh]">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={images[currentSlide].desktop}
                alt={images[currentSlide].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-fill"
              />
            </AnimatePresence>

            {/* Dots (Desktop) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                    ? "bg-[#d9a406] w-8"
                    : "bg-white/50 w-2 hover:bg-white"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
    );
  };



  // ========== HERO SECTION ==========
  const HeroSection = () => {
    const [heroFormData, setHeroFormData] = useState({ name: "", email: "", phone: "" })

    const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHeroFormData({ ...heroFormData, [e.target.name]: e.target.value })
    }

    const onHeroSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      // UPDATED: Using specific ID for Hero Form
      const success = await handleFormSubmit(heroFormData, "xldarjon")
      if (success) setHeroFormData({ name: "", email: "", phone: "" })
    }

    return (
      <section className="relative w-full min-h-screen bg-black overflow-hidden pt-24 pb-12 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-black opacity-90 z-0" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#d9a406] rounded-full opacity-10 blur-[100px]"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#d9a406]/10 text-[#d9a406] px-4 py-2 rounded-full text-sm font-semibold border border-[#d9a406]/50"
                variants={itemVariants}
              >
                <motion.span
                  className="w-2 h-2 bg-[#d9a406] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Possession: Mid 2027
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  A Lifestyle That <br /><span className="text-[#d9a406]">Stands Tall</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Premium 2 & 3 BHK Apartments in Varthur. <br />
                  <span className="text-sm opacity-60 font-normal">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
                </p>
              </motion.div>

              {/* === STATS GRID === */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-white/10 pt-8"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="space-y-1">
                  <p className="text-3xl font-bold text-[#d9a406]">
                    <AnimatedCounter end={50} suffix="%" />
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">UDS Share</p>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <p className="text-3xl font-bold text-[#d9a406]">
                    <AnimatedCounter end={92} suffix="%" />
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Open Space</p>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <p className="text-3xl font-bold text-[#d9a406]">
                    <AnimatedCounter end={70} suffix="%" />
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Carpet Area</p>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1 relative">
                  <p className="text-3xl font-bold text-[#d9a406] flex items-center">
                    <AnimatedCounter start={10} end={5} duration={3000} />
                  </p>
                  <p className="text-xs text-white font-bold uppercase tracking-wide">Units / Floor</p>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d9a406] rounded-full animate-ping opacity-75"></span>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <p className="text-3xl font-bold text-[#d9a406]">
                    <AnimatedCounter end={16000} separator={true} />
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Sq.ft Clubhouse</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT: Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <Card className="p-8 bg-white shadow-2xl rounded-2xl border-t-4 border-[#d9a406]">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Enquire Now</h3>
                  <p className="text-gray-500 text-sm">Register to avail pre-launch benefits & priority site visit.</p>
                </div>
                <form onSubmit={onHeroSubmit} className="space-y-4">
                  <input
                    type="text" name="name" value={heroFormData.name} onChange={handleHeroChange} placeholder="Your Name" required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d9a406] transition-all text-gray-800"
                  />
                  <input
                    type="tel" name="phone" value={heroFormData.phone} onChange={handleHeroChange} placeholder="Mobile Number" required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d9a406] transition-all text-gray-800"
                  />
                  <input
                    type="email" name="email" value={heroFormData.email} onChange={handleHeroChange} placeholder="Email Address" required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d9a406] transition-all text-gray-800"
                  />
                  <Button type="submit" size="lg" className="w-full bg-black hover:bg-[#333] text-[#d9a406] font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all border border-[#d9a406]">
                    Get Instant Call Back
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </Card>
            </motion.div>

          </div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronDown className="w-6 h-6 text-[#d9a406]" />
        </motion.div>
      </section>
    )
  }

  const TowerShowcaseSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* IMAGE SIDE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[4/3] md:h-[500px]"
              >
                <div className="absolute inset-0 bg-[#d9a406] rounded-2xl -rotate-2 opacity-20" />

                <img
                  src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg"
                  alt="RRL Palm Altezze Tower Elevation"
                  className="relative w-full h-full object-fill rounded-2xl shadow-2xl border-4 border-white"
                />

                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#d9a406]">
                  <p className="text-sm text-gray-500 font-bold uppercase">
                    Structure
                  </p>
                  <p className="text-xl font-bold text-[#d9a406]">
                    23 Floors
                  </p>
                </div>
              </motion.div>

              {/* CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                  An Iconic <br />
                  <span className="text-[#d9a406]">Landmark</span>
                </h2>

                <div className="w-20 h-1 bg-[#d9a406] rounded-full" />

                <p className="text-lg text-gray-600 leading-relaxed">
                  Rising majestically above Varthur, Palm Altezze is more than just
                  a residence; it's a statement of prestige.
                </p>

                <div className="pt-6">
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black hover:bg-[#333] text-[#d9a406] gap-2 border border-[#d9a406]"
                  >
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* MODAL */}
        <TowerBrochureModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  };

  // ========== PROJECT AT A GLANCE ==========
  const ProjectGlanceSection = () => {
    const specs = [
      { label: "Land Extent", value: "1.38 Acres" },
      { label: "Structure", value: "B + G + 23 Floors" },
      { label: "Units", value: "115 Units" },
      { label: "Configuration", value: "2 & 3 BHK" },
      { label: "Size Range", value: "1265 - 1630 Sq.ft" },
      { label: "Construction", value: "Mivan Technology" },
    ]

    return (
      <section className="py-20 bg-black border-t border-[#333]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#d9a406] mb-4" variants={itemVariants}>Project At A Glance</motion.h2>
            <motion.p className="text-xl text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
              RERA & BMRDA Approved | Off Varthur Road
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            {specs.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-[#d9a406]/20 bg-[#111] h-full flex flex-col justify-center shadow-lg">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-lg font-bold text-[#d9a406]">{item.value}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  // ========== ARCHITECTURE SECTION ==========
  const ArchitectureSection = () => {
    return (
      <section className="py-20 bg-[#050505] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#d9a406]">Architecture <br /> Reimagined</h2>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <h4></h4>
                <p>
                  Built for the Future. <br />
                  At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle, your commute just got shorter and your view just got better.
                </p>
                <div className="pt-4 border-l-4 border-[#d9a406] pl-6">
                  <p className="text-xl font-bold text-white uppercase tracking-wider">A WORLD CRAFTED FOR THE ART OF LIVING WELL</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-[#d9a406] rounded-2xl transform rotate-3 opacity-30"></div>
              <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="RRL Palm Altezze Architecture" className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  // ========== VR SHOWCASE SECTION ==========
  const VRShowcaseSection = () => {
    const [isVRModalOpen, setIsVRModalOpen] = useState(false)
    const router = useRouter()
    // Formspree Integration (ID: xkgkyavn)
    const [state, handleSubmit] = useForm("xkgkyavn");

    // Dual-submit: CRM + Formspree
    const handleVRSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
      const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
      const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
      // CRM – fire and forget
      fetch('/book-vr-experience-api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: 'RRL Palm Altezze' }),
      }).catch(console.error)
      await handleSubmit(e)
    }

    useEffect(() => {
      if (state.succeeded) {
        const timer = setTimeout(() => {
          setIsVRModalOpen(false)
          window.location.href = "/vr-tour"
        }, 1000)

        return () => clearTimeout(timer)
      }
    }, [state.succeeded])



    return (
      <section className="py-20 bg-black border-t border-[#333]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Visualize Your <br />
                <span className="text-[#d9a406]">Home Virtually</span>
              </h2>
              <div className="w-16 h-1 bg-[#d9a406] rounded-full"></div>
              <p className="text-xl text-gray-400">
                Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.
              </p>
              <Button
                size="lg"
                className="bg-[#d9a406] text-black hover:bg-white font-bold gap-2"
                onClick={() => setIsVRModalOpen(true)}
              >
                <Glasses className="w-5 h-5" /> Book a VR Session Today
              </Button>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="
              relative w-full rounded-2xl overflow-hidden border border-[#333]
              aspect-[584/500] md:aspect-auto
              md:h-[450px]
            "
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

              <picture className="block w-full h-full">
                {/* Mobile Image */}
                <source
                  media="(max-width: 768px)"
                  srcSet="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/Visualize%20Your%20Home%20Virtually.png?updatedAt=1766849722950"
                />
                {/* Desktop Image */}
                <img
                  src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png?updatedAt=1766849828982"
                  alt="VR Interior Showcase"
                  loading="lazy"
                  className="w-full h-full object-fill transition-transform duration-700 hover:scale-105"
                />
              </picture>
            </motion.div>
          </div>
        </div>

        {/* ========== VR BOOKING MODAL ========== */}
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
                  // Success State
                  <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-500">
                    <CheckCircle className="w-16 h-16 text-[#d9a406] mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-400 mb-6">We'll contact you shortly to schedule your VR experience.</p>
                    <Button onClick={() => setIsVRModalOpen(false)} variant="outline" className="border-white/20 text-black hover:bg-white hover:text-black">Close</Button>
                  </div>
                ) : (
                  // Form State
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Book <span className="text-[#d9a406]">VR Experience</span>
                      </h3>
                      <p className="text-gray-400 text-sm">Fill in your details to schedule a session.</p>
                    </div>

                    <form onSubmit={handleVRSubmit} className="space-y-4">
                      <input type="hidden" name="subject" value="New VR Session Booking" />

                      {/* Name */}
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

                      {/* Phone */}
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

                      {/* Email */}
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

                      {/* Preferred Date (Optional Text) */}
                      <div className="space-y-2">
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <input
                            name="preferred_date"
                            type="text"
                            placeholder="Preferred Date/Time (Optional)"
                            className="w-full bg-black border border-[#333] py-3 pl-10 pr-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors"
                          />
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
      </section>
    )
  }
  // ========== SOLAR POWER SECTION ==========
  const SolarPowerSection = () => {
    return (
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#001f3f]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
              relative w-full rounded-2xl overflow-hidden
              border border-[#d9a406]/30
              shadow-[0_0_50px_rgba(217,164,6,0.1)]
              aspect-[584/500] md:aspect-auto
              md:h-[400px]
            "
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay" />

              <picture className="block w-full h-full">
                {/* Mobile Image (584 × 500) */}
                <source
                  media="(max-width: 768px)"
                  srcSet="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png?updatedAt=1766849830876"
                />

                {/* Desktop Image */}
                <img
                  src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png?updatedAt=1766849830876"
                  alt="Solar Power Integration"
                  loading="lazy"
                  className="w-full h-full object-fill transition-transform duration-700 hover:scale-105"
                />
              </picture>
            </motion.div>

            {/* Right Side - Content (UNCHANGED) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Sun className="w-8 h-8 text-[#d9a406] animate-spin-slow" />
                <span className="text-[#d9a406] font-bold tracking-widest uppercase text-sm">
                  Sustainability
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Power Up <br /> With <span className="text-[#d9a406]">Solar</span>
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Solar lights for common areas — reducing your current bill every month.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    )
  }

  // ========== USP SECTION ==========
  const USPSection = () => {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose <span className="text-[#d9a406]">Palm Altezze?</span></h2>
            <p className="text-gray-400">Unmatched features that set us apart from the competition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#111] p-8 rounded-2xl shadow-xl border-t-4 border-[#d9a406] group hover:bg-[#161616] transition-colors">
              <div className="w-16 h-16 bg-[#d9a406]/10 rounded-full flex items-center justify-center mb-6">
                <Construction className="w-8 h-8 text-[#d9a406]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mivan Technology</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#d9a406]" /> Strong Monolithic Structures</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#d9a406]" /> Leak-proof walls</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#d9a406]" /> Earthquake Resistant</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#111] p-8 rounded-2xl shadow-xl border-t-4 border-white group hover:bg-[#161616] transition-colors">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#d9a406] mb-4">Solar Powered</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-white" /> Solar lighting (Common Areas)</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-white" /> Reduced maintenance</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-white" /> Eco-friendly Energy</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-[#111] p-8 rounded-2xl shadow-xl border-t-4 border-[#d9a406] group hover:bg-[#161616] transition-colors">
              <div className="w-16 h-16 bg-[#d9a406]/10 rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8 text-[#d9a406]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">50% UDS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#d9a406]" /> True 50% Undivided Share</li>
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#d9a406]" /> Higher appreciation</li>
                <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#d9a406]" /> Rare in Bangalore</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  //   // ========== HEALTHY LIVING SECTION ==========
  const HealthyLivingSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Step Into <br />
              <span className="text-[#d9a406]">Healthy Living</span>
            </h2>

            <div className="border-l-4 border-[#d9a406] pl-4 lg:pl-6 mb-8 lg:mb-12 mx-auto lg:mx-0 max-w-md">
              <p className="text-gray-300 font-bold uppercase tracking-wide text-xs sm:text-sm leading-relaxed">
                AT RRL PALM ALTEZZE, YOU DON'T JUST GET A HOME —
                YOU GET A LIFESTYLE.
              </p>
            </div>

            {/* ICON FEATURES */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center lg:justify-start">

              <div className="flex flex-col items-center lg:items-start gap-4 group text-center lg:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d9a406]/10 flex items-center justify-center group-hover:bg-[#d9a406] transition-colors duration-300 border border-[#d9a406]/30">
                  <Wind className="w-7 h-7 sm:w-8 sm:h-8 text-[#d9a406] group-hover:text-black transition-colors duration-300" />
                </div>
                <p className="font-bold text-white text-xs sm:text-sm max-w-[150px] leading-tight uppercase">
                  FRESH AIR & <br />GREEN SURROUNDINGS
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4 group text-center lg:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d9a406]/10 flex items-center justify-center group-hover:bg-[#d9a406] transition-colors duration-300 border border-[#d9a406]/30">
                  <Footprints className="w-7 h-7 sm:w-8 sm:h-8 text-[#d9a406] group-hover:text-black transition-colors duration-300" />
                </div>
                <p className="font-bold text-white text-xs sm:text-sm max-w-[150px] leading-tight uppercase">
                  SAFE, WELL-LIT <br />TRACK FOR ALL AGES
                </p>
              </div>

            </div>
          </motion.div>

          {/* ===== MOBILE IMAGE (336 × 448) ===== */}
          <div className="block lg:hidden">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border border-[#d9a406]/20">
              <img
                src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png?updatedAt=1766849830763"
                alt="RRL Palm Altezze Healthy Living Mobile"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* ===== DESKTOP IMAGE (UNCHANGED) ===== */}
          <motion.div
            className="hidden lg:block relative h-full"
            initial="hidden"
            animate="visible"
            variants={scaleVariants}
          >
            <img
              src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png?updatedAt=1766849830763"
              alt="RRL Palm Altezze Healthy Living"
              className="w-full h-full object-contain rounded-2xl shadow-2xl border border-[#d9a406]/20"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )


  // ========== DETAILED AMENITIES ==========
  const AmenitiesSection = () => {
    // Reusable Pill Component
    const AmenityPill = ({ icon: Icon, label }: { icon: any, label: string }) => (
      <div className="flex items-center gap-4 bg-[#111] border border-[#333] p-4 rounded-xl hover:border-[#d9a406] transition-colors group cursor-default">
        <div className="w-2 h-2 rounded-full bg-[#d9a406] group-hover:scale-150 transition-transform"></div>
        {Icon && <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#d9a406] transition-colors" />}
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{label}</span>
      </div>
    )

    // Helper icon
    const Activity = ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    )

    return (
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">30+ World-Class Amenities</h2>
            <p className="text-xl text-gray-400">A 16,000 Sq.ft Clubhouse where leisure meets lifestyle.</p>
          </motion.div>

          <Tabs defaultValue="clubhouse" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-[#222] p-1 rounded-full border border-[#333]">
                <TabsTrigger
                  value="clubhouse"
                  className="rounded-full px-8 py-3 data-[state=active]:bg-[#d9a406] data-[state=active]:text-black text-gray-400 transition-all font-semibold"
                >
                  Clubhouse (16,000 Sft)
                </TabsTrigger>
                <TabsTrigger
                  value="outdoor"
                  className="rounded-full px-8 py-3 data-[state=active]:bg-[#d9a406] data-[state=active]:text-black text-gray-400 transition-all font-semibold"
                >
                  Outdoor & Recreational
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="clubhouse">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <AmenityPill icon={LayoutDashboard} label="Reception Hall" />
                <AmenityPill icon={BookOpen} label="Reading Lounge" />
                <AmenityPill icon={Gamepad2} label="Indoor Games" />
                <AmenityPill icon={Users} label="Kids Play Area" />
                <AmenityPill icon={Leaf} label="Meditation Hall" />
                <AmenityPill icon={Coffee} label="Lounge Area" />
                <AmenityPill icon={Music} label="Party Hall" />
                <AmenityPill icon={Utensils} label="Dining Area" />
                <AmenityPill icon={Dumbbell} label="Ultra Gym" />
                <AmenityPill icon={Wind} label="Steam & Sauna" />
                <AmenityPill icon={Footprints} label="Cardio Room" />
                <AmenityPill icon={MonitorPlay} label="Mini Theatre" />
                <AmenityPill icon={Table2} label="Billiards Table" />
                <AmenityPill icon={Table2} label="Table Tennis" />
                <AmenityPill icon={Users} label="Association Room" />
                <AmenityPill icon={Tv} label="Guest Rooms" />
              </div>
            </TabsContent>

            <TabsContent value="outdoor">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <AmenityPill icon={Waves} label="Swimming Pool" />
                <AmenityPill icon={Waves} label="Kids Pool" />
                <AmenityPill icon={Waves} label="Jacuzzi" />
                <AmenityPill icon={LayoutDashboard} label="Multipurpose Court" />
                <AmenityPill icon={Activity} label="Cricket Pitch" />
                <AmenityPill icon={Activity} label="Basketball Court" />
                <AmenityPill icon={Activity} label="Throwball Court" />
                <AmenityPill icon={Footprints} label="Skating Rink" />
                <AmenityPill icon={Footprints} label="Jogging Track" />
                <AmenityPill icon={Landmark} label="Amphitheatre" />
                <AmenityPill icon={Flower2} label="Butterfly Garden" />
                <AmenityPill icon={Users} label="Senior Seating" />
                <AmenityPill icon={Waves} label="Fountain" />
                <AmenityPill icon={Trees} label="Planting Deck" />
                <AmenityPill icon={LayoutDashboard} label="Chess Pawn" />
                <AmenityPill icon={Footprints} label="Hopscotch" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    )
  }

  // ========== SPECIFICATIONS ==========
  const Specifications = () => {
    return (
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white text-center">
              Premium
            </h2>
            <p className="text-3xl md:text-3xl font-light uppercase tracking-widest text-[#d9a406] text-center">
              Specifications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-0">
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><Frame className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Framed Structure</h4><p className="text-gray-400 text-sm leading-relaxed">Mivan Constructions</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><BrickWall className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Walls</h4><p className="text-gray-400 text-sm leading-relaxed">8" RCC walls (Concrete walls)</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><DoorOpen className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Doors</h4><p className="text-gray-400 text-sm leading-relaxed">WPC Doors for Main & Internal doors</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><AppWindow className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Window</h4><p className="text-gray-400 text-sm leading-relaxed">UPVC windows with mosquito mesh</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><Layers className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Flooring</h4><p className="text-gray-400 text-sm leading-relaxed">2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15"x15" Anti-skid tiles for balcony.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><Bath className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Toilet</h4><p className="text-gray-400 text-sm leading-relaxed">Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles. Provision for exhaust fan.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200 lg:border-b-0">
                <div className="shrink-0 pt-1"><Wrench className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Plumbing</h4><p className="text-gray-400 text-sm leading-relaxed">Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware sanitary fittings.</p></div>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative h-full min-h-[600px] w-full hidden lg:block">
              <div className="absolute inset-0 bg-[#d9a406]/5 rounded-t-full"></div>
              <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Premium Apartment Interior" className="w-full h-full object-fill rounded-t-full shadow-2xl" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-0">
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><PaintRoller className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Painting</h4><p className="text-gray-400 text-sm leading-relaxed">2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><Zap className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Electrical</h4><p className="text-gray-400 text-sm leading-relaxed">Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches. A/C point in Bedrooms & Geyser with separate circuits.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><Tv className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Communication</h4><p className="text-gray-400 text-sm leading-relaxed">Telephone points in Living & TV point in Living and Master Bedroom.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><Droplets className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Water Supply</h4><p className="text-gray-400 text-sm leading-relaxed">Water supply from bore well with overhead tank.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200">
                <div className="shrink-0 pt-1"><ArrowUpFromLine className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Lift</h4><p className="text-gray-400 text-sm leading-relaxed">3 Lifts of fully Automatic with 8 passenger and 1 service lift of KONE / OTIS / Equivalent make.</p></div>
              </div>
              <div className="flex gap-5 py-6 border-b border-gray-200 lg:border-b-0">
                <div className="shrink-0 pt-1"><BatteryCharging className="w-8 h-8 text-[#d9a406]" strokeWidth={1.5} /></div>
                <div><h4 className="font-bold text-lg uppercase mb-1">Generator</h4><p className="text-gray-400 text-sm leading-relaxed">100% power back-up for each flat, lift, motor & common area lighting.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ========== FLOOR PLANS SECTION (UPDATED WITH LOCK/UNLOCK LOGIC) ==========
  const FloorPlansSection = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
    const [formOpenId, setFormOpenId] = useState<string | null>(null);

    const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

    const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        message: `Request to unlock floor plan for Unit ${planId}`
      };

      // UPDATED: Use the dedicated Floorplan Form ID
      const success = await handleFormSubmit(data, "xldarjon");

      if (success) {
        // Mark as unlocked
        setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
        // Close the form view (switch back to dimensions view)
        setFormOpenId(null);
      }
    };

    return (
      <section className="py-24 bg-[#050505]" id="floorplans">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
              <p className="text-gray-400 max-w-xl">103 Units | B+G+6 Floors <br />Choose from our range of 16 distinct unit layouts.</p>
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
                        <div className="bg-white/10 text-white hover:bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.facing} Facing</div>
                      </div>
                      <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{plan.area}</span><span className="text-gray-500 font-medium">SFT</span></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between text-sm"><span className="text-gray-500">Living</span><span className="text-gray-300">{plan.dims.living || "N/A"}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-gray-500">Master Bed</span><span className="text-gray-300">{plan.dims.masterBed}</span></div>
                    </div>
                    <div className="p-4 bg-black">
                      <Dialog onOpenChange={(open) => { if (!open) setFormOpenId(null); }}>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
                            <Maximize2 className="w-4 h-4 mr-2" /> View Floor Plans
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
                                    <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-white" onClick={() => setFormOpenId(null)} />
                                    <h4 className="text-xl font-semibold text-white">Unlock Access</h4>
                                  </div>
                                  <p className="text-sm text-gray-400 mb-6">Enter your details to instantly view the floor plan.</p>
                                  <form onSubmit={(e) => handleUnlockSubmit(e, plan.id)} className="space-y-4">
                                    <div className="space-y-2"><Label className="text-gray-300">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                    <div className="space-y-2"><Label className="text-gray-300">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                    <div className="space-y-2"><Label className="text-gray-300">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#111] border-white/20 text-white focus:border-[#d9a406]" /></div>
                                    <Button type="submit" className="w-full bg-[#d9a406] hover:bg-[#b38605] text-black font-bold mt-2"><Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan</Button>
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

  // ========== BROCHURE CTA SECTION ==========
  const BrochureCTASection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              className="
              relative rounded-2xl overflow-hidden group
              border border-[#d9a406]/30
              h-[360px] md:h-[400px]
            "
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-8 space-y-6">
                <h2 className="text-2xl md:text-5xl font-serif tracking-wider text-white">
                  GET COST SHEET & BROCHURE
                </h2>

                <div className="w-20 md:w-24 h-1 bg-[#d9a406] rounded-full" />

                <p className="text-gray-300 max-w-xl text-sm md:text-lg font-light">
                  Click below to download brochure of Palm Altezze &
                  register for special offers.
                </p>

                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#d9a406] hover:bg-white text-black px-10 md:px-12 py-5 md:py-6 text-sm md:text-lg rounded-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(217,164,6,0.4)]"
                >
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA MODAL */}
        <BrochureCTAModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  };


  // ========== REVIEWS SECTION ==========
  const ReviewsSection = () => {
    // --- TESTIMONIAL DATA ---
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
        name: "Rahil R",
        role: "Happy Home Buyer",
        location: "RRL Palacio",
        rating: 5,
        testimonial: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!",
      },
      {
        type: "video",
        name: "VideoTestimonial1",
        videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1",
      },
      {
        type: "text",
        name: "Chaitanya Samprajan",
        role: "Happy Home Buyer",
        location: "RRL Palacio",
        rating: 5,
        testimonial: "Good builder & team. Value for money. Well planned & organised. Shout out to Kavya - she works tirelessly to accommodate customers. They won best amenities award!",
      },
      {
        type: "text",
        name: "Nagarajan K",
        role: "Happy Home Buyer",
        location: "RRL Palacio",
        rating: 5,
        testimonial: "The marketing team was very supportive with documents and responded to all queries on time. Premium amenities at an affordable price point in this neighborhood.",
      },
      {
        type: "video",
        name: "VideoTestimonial2",
        videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1",
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
        name: "Prabhakaran Surineni",
        role: "Happy Home Buyer",
        location: "RRL Palm Altezze",
        rating: 5,
        testimonial: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional - always available to answer questions and treated us politely. RRL Builders deliver good quality with a great team!",
      },
      {
        type: "text",
        name: "Sagar Mana",
        role: "Happy Home Buyer",
        location: "RRL Palm Altezze",
        rating: 5,
        testimonial: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offices, units, R&D Centers including manufacturing firms. Potential growth in this area!",
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
            // Ensure image_0.png is in your /public folder
            backgroundImage: `url('https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766479785/CLIENTS_BACKGROUND_1_sfkdst.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content Container (z-10 to sit above background) */}
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
                  // Using fill-[#FFB400] for solid gold stars
                  <Star key={i} className="w-5 h-5 text-[#FFB400] fill-[#FFB400]" />
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
                  // --- Video Card (Wrapped to look like Text Card) ---
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
                    {/* Optional: Footer for consistency */}
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
                    // Added backdrop-blur for better contrast against bg image
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
                          <Star key={i} className="w-4 h-4 text-[#FFB400] fill-[#FFB400]" />
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

  // ========== MID PAGE CTA ==========
  const MidPageCtaSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
    const initialData = { name: "", email: "", phone: "" }
    const [data, setData] = useState(initialData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setData((prev) => ({ ...prev, [name]: value }))
    }

    const localSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const success = await onSubmit(data)
      if (success) setData(initialData)
    }

    return (
      <section className="py-20 bg-gradient-to-r from-black via-[#111] to-black border-y border-[#d9a406]/20">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-[#d9a406]">Download the Official Brochure</h2>
            <p className="mb-6 opacity-80 text-gray-300">Get the detailed floor plans, cost sheet, and complete amenities list delivered to your inbox.</p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="gap-2 font-bold bg-[#d9a406] text-black hover:bg-white"><Download className="w-4 h-4" /> Download PDF</Button>
            </div>
          </div>
          <Card className="flex-1 p-8 bg-[#111] border border-[#333] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Request a Call Back</h3>
            <form onSubmit={localSubmit} className="space-y-4">
              <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full px-4 py-2 bg-[#222] border border-[#444] rounded-lg text-white focus:border-[#d9a406] outline-none transition" placeholder="Name" />
              <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full px-4 py-2 bg-[#222] border border-[#444] rounded-lg text-white focus:border-[#d9a406] outline-none transition" placeholder="Phone" />
              <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full px-4 py-2 bg-[#222] border border-[#444] rounded-lg text-white focus:border-[#d9a406] outline-none transition" placeholder="Email" />
              <Button type="submit" className="w-full bg-[#d9a406] hover:bg-white text-black font-bold">Submit</Button>
            </form>
          </Card>
        </div>
      </section>
    )
  }

  // ========== CONNECTIVITY ==========
  const ConnectivitySection = () => (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#d9a406] mb-4">Prime Location</h2>
          <p className="text-gray-400">Off Varthur Road. Connected to everything that matters.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Building2, title: "Tech Hubs", items: ["ITPL Main Road", "Wipro SEZ", "RGA Tech Park", "Sigma Tech Park"] },
            { icon: ShoppingCart, title: "Malls", items: ["Nexus Whitefield", "Nexus Shantiniketan", "Phoenix Marketcity", "Inorbit Mall"] },
            { icon: BookOpen, title: "Education", items: ["Chrysalis High", "Vagdevi Vilas", "Ryan International", "Delhi Public School"] },
            { icon: Hospital, title: "Hospitals", items: ["Manipal Varthur", "Sahasra Hospital", "Cloudnine Hospital", "Sankara Eye Hospital"] },
          ].map((cat, i) => (
            <Card key={i} className="p-6 border-0 shadow-lg bg-[#111] hover:bg-[#151515] transition-all group">
              <cat.icon className="w-8 h-8 text-[#d9a406] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {cat.items.map((item, idx) => <li key={idx} className="flex items-start gap-2"><span className="text-[#d9a406]">•</span> {item}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )


  // ========== CONNECTIVITY (Black Version) ==========
  const Connectivity = () => {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content Blocks */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                  Quick Access to <br /> <span className="text-[#d9a406]">Varthur Road</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Palm Altezze benefits from low traffic volumes on Varthur Road.
                  The community enjoys easy accessibility, with three roads seamlessly connecting to the main road in minutes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Block 1: Public Transport */}
                <div className="bg-[#111] p-6 rounded-2xl border border-[#d9a406]/30 hover:border-[#d9a406] transition-colors group">
                  <div className="flex items-center gap-3 mb-4 border-b border-[#333] pb-3">
                    <Train className="w-6 h-6 text-[#d9a406]" />
                    <h3 className="font-bold text-lg text-white group-hover:text-[#d9a406] transition-colors">Transport</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Purple Line Metro</li>
                    <li>• Carmelaram Station</li>
                    <li>• BMTC / Ola / Uber</li>
                    <li>• SH-35 Connectivity</li>
                  </ul>
                </div>

                {/* Block 2: Schools */}
                <div className="bg-[#111] p-6 rounded-2xl border border-[#d9a406]/30 hover:border-[#d9a406] transition-colors group">
                  <div className="flex items-center gap-3 mb-4 border-b border-[#333] pb-3">
                    <BookOpen className="w-6 h-6 text-[#d9a406]" />
                    <h3 className="font-bold text-lg text-white group-hover:text-[#d9a406] transition-colors">Schools</h3>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-400 leading-relaxed">
                    <li>• Vasishta & Vagdevi Vilas</li>
                    <li>• The Foundation School</li>
                    <li>• Orchids International</li>
                    <li>• VIBGYOR High School</li>
                    <li>• The Prodigies Int.</li>
                  </ul>
                </div>

                {/* Block 3: Malls */}
                <div className="bg-[#111] p-6 rounded-2xl border border-[#d9a406]/30 hover:border-[#d9a406] transition-colors group">
                  <div className="flex items-center gap-3 mb-4 border-b border-[#333] pb-3">
                    <ShoppingCart className="w-6 h-6 text-[#d9a406]" />
                    <h3 className="font-bold text-lg text-white group-hover:text-[#d9a406] transition-colors">Malls</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Phoenix Marketcity</li>
                    <li>• Virginia Mall</li>
                    <li>• Park Square Mall</li>
                    <li>• Inorbit Mall</li>
                  </ul>
                </div>

                {/* Block 4: Hospitals */}
                <div className="bg-[#111] p-6 rounded-2xl border border-[#d9a406]/30 hover:border-[#d9a406] transition-colors group">
                  <div className="flex items-center gap-3 mb-4 border-b border-[#333] pb-3">
                    <Hospital className="w-6 h-6 text-[#d9a406]" />
                    <h3 className="font-bold text-lg text-white group-hover:text-[#d9a406] transition-colors">Hospitals</h3>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-400 leading-relaxed">
                    <li>• Manipal Hospital</li>
                    <li>• City Hospital</li>
                    <li>• Sahasra Hospitals</li>
                    <li>• Cloudnine Hospital</li>
                    <li>• The Eye Foundation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Map Integration */}
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-[#333] bg-[#111] flex items-center justify-center group">
              {/* Interactive Google Map Iframe */}
              <iframe
                src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0 border-0 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RRL Palm Altezze Location"
              ></iframe>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-black/90 p-4 rounded-xl border border-[#d9a406] shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-[#d9a406]" />
                  <div>
                    <p className="text-white font-bold text-sm">RRL Palm Altezze</p>
                    <p className="text-xs text-gray-400">Janthagondanahalli, Varthur</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }

  // ========== FAQS SECTION (UPDATED COLOR PALETTE) ==========
  const FAQsSection = () => {
    const faqs = [
      {
        category: "General",
        questions: [
          {
            q: "What is the total area of RRL Palm Altezze?",
            a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors.",
          },
          {
            q: "How many units are there per floor?",
            a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments with varying configurations.",
          },
          {
            q: "What is the price range?",
            a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments.",
          },
        ],
      },
      {
        category: "Amenities",
        questions: [
          {
            q: "How many amenities are available?",
            a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts, and much more.",
          },
          {
            q: "Is there a clubhouse?",
            a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities spread across ground, 1st, and 2nd floors.",
          },
          {
            q: "Are there facilities for children?",
            a: "Yes, we have indoor and outdoor children's play areas, kids' pool, and various recreational facilities.",
          },
        ],
      },
      {
        category: "Construction & Specifications",
        questions: [
          {
            q: "What construction technology is used?",
            a: "We use Mivan construction technology with RCC framed structure designed as per IS codes for earthquake resistance.",
          },
          {
            q: "What is the power backup arrangement?",
            a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting.",
          },
          {
            q: "What are the flooring specifications?",
            a: "Vitrified tiles (2'x4') for living, dining, kitchen & bedrooms, and anti-skid tiles for balconies.",
          },
        ],
      },
      {
        category: "Location & Connectivity",
        questions: [
          {
            q: "How is the connectivity to Whitefield?",
            a: "Located along State Highway 35, which directly connects to Whitefield, Brookfield, and other major areas.",
          },
          {
            q: "Is there metro connectivity?",
            a: "Yes, Nallurahalli Metro Station is nearby, providing easy access to the Purple Line.",
          },
          {
            q: "What schools and hospitals are nearby?",
            a: "Multiple schools including Chrysalis High, Delhi Public School, and hospitals like Manipal Hospital are within proximity.",
          },
        ],
      },
      {
        category: "Payment & Possession",
        questions: [
          {
            q: "What is the payment plan?",
            a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available.",
          },
          {
            q: "When is the expected possession?",
            a: "Possession is expected as per the project timeline. Contact our sales team for specific details.",
          },
          {
            q: "Are there any hidden charges?",
            a: "No hidden charges. All costs are transparent and clearly mentioned in the agreement.",
          },
        ],
      },
    ]

    const [openQuestions, setOpenQuestions] = useState<Record<number, number | null>>({})

    const toggleQuestion = (sectionIndex: number, qIndex: number) => {
      setOpenQuestions((prev) => ({
        ...prev,
        [sectionIndex]: prev[sectionIndex] === qIndex ? null : qIndex,
      }))
    }

    return (
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d9a406] mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about RRL Palm Altezze
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-2xl font-bold text-[#d9a406] mb-6 pb-4 border-b-2 border-[#d9a406] text-center">
                  {section.category}
                </h3>

                <div className="space-y-4">
                  {section.questions.map((item, qIndex) => {
                    const isOpen = openQuestions[sectionIndex] === qIndex

                    return (
                      <Card
                        key={qIndex}
                        onClick={() => toggleQuestion(sectionIndex, qIndex)}
                        className={`p-4 border-0 bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden ${isOpen ? "bg-gradient-to-r from-[#fff7d6] to-white" : ""
                          }`}
                      >
                        <div className="flex justify-between items-center gap-4">
                          <h4 className="font-bold text-base sm:text-lg text-[#d9a406]">
                            {item.q}
                          </h4>
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            className="text-2xl font-bold text-[#d9a406]"
                          >
                            +
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 pl-4"
                            >
                              <p className="text-gray-700 leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#d9a406] to-[#b89305] rounded-2xl p-8 md:p-12 text-center text-black shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our sales team is ready to help you with any queries
            </p>
            <a
              href="tel:+918494966966"
              className="inline-block bg-black text-[#d9a406] font-bold px-8 py-3 rounded-lg hover:bg-[#111] transition-colors"
            >
              Call: 84 94 966 966
            </a>
          </div>

        </div>
      </section>
    )
  }

  // ========== JOURNEY SECTION ==========
  const Journey = () => {
    const milestones = [
      { year: "Trust", title: "On-Time Delivery", description: "We take pride in our track record of delivering projects on or before schedule, as promised.", icon: Key },
      { year: "Expertise", title: "High-Rise & Premium", description: "Accommodates high-rise premium projects and mid-size luxury homes with A1 quality.", icon: Building2 },
      { year: "Innovation", title: "Pioneer in Commercial", description: "Leading the way in landmark commercial projects.", icon: Briefcase },
      { year: "Growth", title: "200% Appreciation", description: "Our completed projects have seen a massive 200% capital appreciation in just 2 years.", icon: TrendingUp },
    ]

    return (
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9a406]/5 via-black to-black"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Discover Our <span className="text-[#d9a406]">Journey</span></motion.h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} className="h-1 bg-[#d9a406] mx-auto rounded-full" />
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#333] -translate-x-1/2 md:translate-x-0">
              <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="w-full bg-[#d9a406] origin-top" />
            </div>
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className={`p-6 rounded-2xl border border-[#d9a406]/30 bg-[#111] hover:border-[#d9a406] transition-all duration-300 group relative hover:shadow-[0_0_30px_rgba(217,164,6,0.15)] ${index % 2 === 0 ? "md:text-left md:mr-12" : "md:text-right md:ml-12"}`}>
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#111] border-t border-r border-[#d9a406]/30 group-hover:border-[#d9a406] rotate-45 transition-colors ${index % 2 === 0 ? "-right-2.5 border-l-0 border-b-0" : "-left-2.5 border-t-0 border-r-0 border-b border-l"}`}></div>
                      <div className={`flex items-center gap-4 mb-3 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="p-3 bg-[#d9a406]/10 rounded-lg text-[#d9a406]"><item.icon className="w-6 h-6" /></div>
                        <div><span className="block text-sm text-[#d9a406] font-bold tracking-widest uppercase">{item.year}</span><h3 className="text-xl font-bold text-white">{item.title}</h3></div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-black border-2 border-[#d9a406] relative z-10"><div className="absolute inset-0 bg-[#d9a406] rounded-full animate-ping opacity-75"></div></div>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ========== COMPLETE PROJECT SECTION ==========
  const CompleteProject = () => {
    const WhatsAppIcon = ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    )

    const projects = [
      {
        name: "RRL Palacio",
        location: "Medahalli, Bangalore",
        type: "Luxury Apartment",
        status: "READY TO MOVE",
        image:
          "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531",
        mobileImage:
          "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531",
        href: "/projects/palacio",
        acres: "1.5 Acres",
        units: "103 Units",
        config: "2, 3 BHK",
        possession: "Early possession granted",
      },
      {
        name: "RRL Nature Woods",
        location: "Sarjapur, Bangalore",
        type: "Premium Apartment",
        status: "Completed",
        image:
          "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502",
        mobileImage:
          "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502",
        href: "/projects/nature-woods",
        acres: "1.5 Acres",
        units: "148 Units",
        config: "2, 3 BHK",
        possession: "Early possession granted",
      },
    ]

    return (
      <section className="py-20 bg-light-gold">
        <h1 className="text-[#d9a406] font-serif mb-12 text-5xl font-bold text-center">
          Successfully Completed Projects
        </h1>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-2xl transition-all">

                  {/* IMAGE SECTION */}
                  <Link
                    href={project.href}
                    className="
                    relative w-full overflow-hidden
                    aspect-[366/256] md:aspect-[16/9]
                  "
                  >
                    {/* Mobile Image */}
                    <Image
                      src={project.mobileImage}
                      alt={project.name}
                      fill
                      className="block md:hidden object-fill group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Desktop Image */}
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      priority={index === 0}
                      className="hidden md:block object-fill group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <span className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide border border-gold-500">
                      {project.status}
                    </span>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">
                      {project.type}
                    </p>

                    <Link href={project.href}>
                      <h3 className="text-xl font-bold text-black hover:text-gold-600 transition-colors">
                        {project.name}
                      </h3>
                    </Link>

                    <div className="mt-4 mb-6 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20">
                      <p className="text-sm font-bold text-gray-900">
                        {project.possession}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-4 mb-6">
                      <div>
                        <p className="text-xs uppercase text-gray-500">Location</p>
                        <p className="text-sm font-medium text-black">
                          {project.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gray-500">Config</p>
                        <p className="text-sm font-medium text-black">
                          {project.config}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gray-500">Area</p>
                        <p className="text-sm font-medium text-black">
                          {project.acres}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gray-500">Units</p>
                        <p className="text-sm font-medium text-black">
                          {project.units}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex gap-2">
                      <a
                        href="https://wa.me/918494966966"
                        target="_blank"
                        className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-300 text-green-600 hover:bg-green-600 hover:text-white transition-all"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                      </a>

                      <a
                        href="tel:+918494966966"
                        className="flex-none flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-black hover:border-black hover:text-white transition-all bg-white shadow-sm"
                      >
                        <Phone className="h-4 w-4" />
                      </a>

                      <Link href={project.href} className="flex-1">
                        <button className="w-full h-10 bg-black text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-gold-500 transition-all duration-300">
                          Details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }


  // ========== CONTACT ==========
  const ContactSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
    const initialData = { name: "", email: "", phone: "", message: "" }
    const [data, setData] = useState(initialData)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [e.target.name]: e.target.value })
    const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) setData(initialData); }

    return (
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#d9a406] mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-white" /><p className="text-gray-400">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p></div>
                <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-white" /><a href="tel:+918494966966" className="text-gray-400 font-bold hover:text-[#d9a406] transition-colors">+91 84 94 966 966</a></div>
                <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-white" /><a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-gray-400 hover:text-[#d9a406] transition-colors">enquiry@rrlbuildersanddevelopers.com</a></div>
              </div>
            </div>
            <Card className="p-8 shadow-xl bg-[#111] border border-[#333]">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={localSubmit} className="space-y-4">
                <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Name" />
                <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Email" />
                <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Phone" />
                <textarea name="message" value={data.message} onChange={handleChange} rows={4} className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Message"></textarea>
                <Button type="submit" className="w-full bg-[#d9a406] hover:bg-white text-black font-bold h-12">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // ========== MODAL ==========
  const EnquiryModal = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
    const initialData = { name: "", email: "", phone: "" }
    const [data, setData] = useState(initialData)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })
    const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) { setData(initialData); setIsModalOpen(false); } }

    return (
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="relative w-full max-w-md p-8 bg-[#111] border border-[#d9a406] rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setIsModalOpen(false)}><X className="w-5 h-5" /></Button>
              <h3 className="text-2xl font-bold text-[#d9a406] mb-6 text-center">Quick Enquiry</h3>
              <form onSubmit={localSubmit} className="space-y-4">
                <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Name" />
                <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Email" />
                <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-3 bg-[#222] border border-[#444] rounded text-white focus:border-[#d9a406] outline-none transition" placeholder="Phone" />
                <Button type="submit" className="w-full bg-[#d9a406] hover:bg-white text-black font-bold">Submit</Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // ========== AWARDS SECTION ==========
  const AwardsSection = () => {
    return (
      <section className="py-20 bg-black border-t border-[#333]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#d9a406] mb-8">Awards & Recognition</h2>
          <p className="text-gray-400">Awarded for Premium Architecture & Sustainable Development.</p>
        </div>
      </section>
    )
  }

  return (
    <main className="w-full bg-black min-h-screen text-gray-200 overflow-x-hidden">
      <HeroImageBanner />
      <HeroSection />
      <TowerShowcaseSection />
      <ProjectGlanceSection />
      <ArchitectureSection />
      <VRShowcaseSection />
      <SolarPowerSection />
      <USPSection />
      <HealthyLivingSection />
      <FloorPlansSection />
      <AmenitiesSection />
      {/* <SpecificationsSection /> */}
      <Specifications />
      {/* <MidPageCtaSection onSubmit={handleFormSubmit} /> */}
      <BrochureCTASection />
      <ReviewsSection />
      <ConnectivitySection />
      {/* <PremiumSpecifications /> */}
      <Connectivity />
      <FAQsSection />
      {/* <AwardsSection /> */}
      <CompleteProject />
      <Journey />
      <ContactSection onSubmit={(data) => handleFormSubmit(data, "xldarjon")} />
      <EnquiryModal onSubmit={(data) => handleFormSubmit(data, "xldarjon")} />
    </main>
  )
}