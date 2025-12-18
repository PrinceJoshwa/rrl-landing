// // import { ProjectHero } from "@/components/projects/project-hero"
// // import { ProjectDetails } from "@/components/projects/project-details"
// // import { ProjectAmenities } from "@/components/projects/project-amenities"
// // import { ProjectSpecifications } from "@/components/projects/project-specifications"
// // import { ProjectGallery } from "@/components/projects/project-gallery"
// // import { ContactForm } from "@/components/contact/contact-form"

// // export default function PalacioPage() {
// //   const projectData = {
// //     name: "RRL Palacio",
// //     subtitle: "2 & 3 BHK Apartments in Medahalli",
// //     description:
// //       "RRL Builders and Developers presents premium Affordable 2 & 3 BHK Apartments for Sale in Medahalli. The new 1st premium part of Bangalore South.",
// //     status: "Ready to Move",
// //     heroImage:
// //       "/palacio.gif",
// //     features: [
// //       "RERA#2551/309/PR/220424/006827",
// //       "2 BHK and 3 BHK Premium Flats with 4G and 5G units respectively",
// //       "Located at Medahalli",
// //       "The presence of industrial hubs like Hosur and Krishnagiri offers ample employment opportunities for residents. IT establishments, such as STC Global, Infosys Technology Park, and GR Tech Park in Whitefield, are within 10 km",
// //       "Educational institutes, such as STC Global of Krishnagiri and Sri Vidyanikethan School, are in the locality",
// //       "Public parks, such as Seegehalli and Bharatahalli Udyavanava, are within a 3 km distance. Cheemasandra Lake and Hale Lake View Point are tourist spots located at a distance of about 4 km",
// //       "The locality is a popular choice among tenants with affordable rentals and easy access to employment hubs",
// //     ],
// //     fundedBy: "Aditya Birla Housing Finance Limited",
// //     specifications: {
// //       civil: [
// //         "Structure: R.C.C framed structure, designed as per relevant IS codes for earthquake resistance and structurally efficient systems implemented",
// //         'Walls: External walls with 6" solid blocks and internal walls with 4" solid blocks',
// //         "Plastering: Sponge finish for external walls with smooth cement finish for internal walls",
// //         "Amenities: Swimming Pool, Amphitheatre, Jogging Track, Kids' Park, Indoor and Outdoor Gym, Closed Parking for 2 and 3 Wheelers",
// //         "Automation: Pump, Light provision has been automated for seamless experience",
// //       ],
// //       architecture: [
// //         "Doors: Main Door - Teak wood frame with OT shutter, Internal doors - Hardwood with flush door shutters",
// //         "Kitchen: Granite slab of 40mm thick with stainless steel sink, glazed tiles dado upto 2ft. height above the granite slab",
// //         "Electrical: Concealed copper wiring with Anchor/Roma switches, sockets, and slides",
// //         "Paint: External walls - Apex paints. And Internal walls - Emulsion paints",
// //         "Windows: 3 Track fabrication windows for living and bedroom with safety grills and mosquito mesh. & 2 track for kitchen and bathroom with safety grills",
// //       ],
// //       services: [
// //         "Sanitary: Jaguar CP fittings and Taps or Hindware Sanitary with Geyser provision",
// //         "Washrooms: Anti skid ceramic tiles flooring and Glazed tile dado upto 7ft height",
// //         "Grid Power And Back-Up: Generator for common UPS Lift & for each flat (lighting points)",
// //         "Elevator: Fully automated 4 lifts of 6 Passenger capacity elevator of reputed make",
// //         "Electrical Points: Provision of electrical points for Refrigerator, chimney and washing machine. Individual TV & Telephone points in the living & Master bedroom",
// //       ],
// //     },
// //   }

// //   return (
// //     <>
// //       <ProjectHero project={projectData} />
// //       <ProjectDetails project={projectData} />
// //       <ProjectAmenities />
// //       <ProjectSpecifications specifications={projectData.specifications} />
// //       <ProjectGallery projectName="RRL Palacio" />
// //       <ContactForm />
// //     </>
// //   )
// // }


// "use client"

// import { ProjectHero } from "@/components/projects/project-hero"
// import { ProjectDetails } from "@/components/projects/project-details"
// import { ProjectAmenities } from "@/components/projects/project-amenities"
// import { ProjectSpecifications } from "@/components/projects/project-specifications"
// import { ProjectGallery } from "@/components/projects/project-gallery"
// import { ContactForm } from "@/components/contact/contact-form"
// import { motion } from "framer-motion"
// import { Maximize, Compass, ArrowRight } from "lucide-react"

// export default function PalacioPage() {
//   const projectData = {
//     name: "RRL Palacio",
//     subtitle: "2 & 3 BHK Luxury Apartments on Sarjapura Road",
//     tagline: "Every corner echoes with regal tales, where luxury meets legacy.",
//     rera: "PRM/KA/RERA/1251/308/PR/220424/006827",
//     status: "Ready to Move In",
//     heroImage: "/palacio.gif",
    
//     description:
//       "RRL Palacio offers a premium lifestyle with a significant 50% Undivided Share of Land (UDS), ensuring high asset value. Located on the prime Sarjapura Road, this B+G+6 structure spans 1.20 acres and features 103 vastu-compliant units designed for excellent airflow and sunlight. The project is BMRDA Approved and Ready to Move In, offering a seamless transition to your new home.",

//     features: [
//       "Special Offer: Free Interiors - Your home comes fully designed",
//       "50% Undivided Share of Land (UDS) - High Resale Value",
//       "RERA & BMRDA Approved Project",
//       "Structure: B+G+6 Floors | Land Extent: 1.20 Acres",
//       "Total Units: 103 | Configurations: 2 & 3 BHK",
//       "100% Power Backup for Apartments, Lifts & Common Areas",
//       "Vastu Compliant Units with No Common Walls",
//       "Funded by Aditya Birla Housing Finance Limited",
//     ],

//     amenities: {
//       fiveStar: [
//         "Steam Bath & Sauna Room",
//         "Home Theater (Cinema Experience)",
//         "Open Barbeque Kitchen on Roof Top",
//         "Skating Rink",
//         "Basketball Court",
//         "Outdoor Gym",
//         "Drive Way & Jogging Track",
//         "Senior Seating Area",
//         "Club House",
//         "Indoor Games: Table Tennis, Foosball, Carrom, Chess"
//       ],
//       fourStar: [
//         "Swimming Pool with Toddler Pool",
//         "Ultra-Modern Gym",
//         "Children's Play Area (Indoor)",
//         "Party Hall for Every Occasion",
//         "Yoga Corner - A space for calm & clarity",
//         "Library - Where knowledge comes to life",
//         "Recreation Zone"
//       ]
//     },

//     specifications: {
//       civil: [
//         "Structure: RCC framed structure (Earthquake Resistant)",
//         "Walls: 6\" solid cement blocks (Exterior) & 4\" solid cement blocks (Interior)",
//         "Plastering: Sponge finish for external walls & smooth cement finish for internal walls",
//         "Flooring: Vitrified tiles for entire flooring & Anti-skid ceramic tiles in balconies",
//         "Car Parking: Exclusive covered car parking at stilt level"
//       ],
//       architecture: [
//         "Doors: Main Door - WPC frame with WPC shutters. Internal - Hardwood frame with flush shutters",
//         "Windows: 3-Track fabrication with safety grills & mosquito mesh (Living/Bedroom). 2-Track (Kitchen/Bath)",
//         "Kitchen: 20mm Granite slab with Stainless Steel sink, glazed tiles dado up to 2ft height",
//         "Paint: Emulsion paint for internal walls. Apex paints for exterior walls"
//       ],
//       services: [
//         "Electrical: Concealed copper wiring with Schneider switches, sockets, and slides",
//         "Sanitary: Kajaria CP fittings & Kerovit Sanitary ware",
//         "Power Backup: Generator for common area, Lift & lighting points for each flat",
//         "Lift: Fully Automatic 4 lifts (8 Passenger capacity)",
//         "Water: 24hrs Borewell water with Overhead tank & Sump. Cauvery water provision in kitchen",
//         "Security: Intercom facility for all flats connecting to security",
//         "Connectivity: TV & Telephone points in Living and Master Bedroom"
//       ]
//     },

//     locationHighlights: {
//       work: [
//         "Wipro SEZ", "Infosys Ltd", "BHEL", "Titan New Campus", "Electronic City", "Jigani Industrial Area", "RGA Tech Park"
//       ],
//       education: [
//         "Indus International School", "Greenwood High", "Oakridge International", "TISB", "Azim Premji University", 
//         "St. Philomena's School", "New Baldwin International", "GEAR Innovative Intl School", "Christ Academy"
//       ],
//       hospitals: [
//         "Narayana Health City (Institute of Cardiac Science)", "Athreya Hospital", "Motherhood Super Specialty", 
//         "Vimalalaya Hospital", "Sathya Sai Hospital", "Town Hospital Sarjapur", "Spandana Heart & Super Specialty"
//       ],
//       shopping: [
//         "D-Mart", "Metro", "Chandrapura Market", "Family Big Mart", "Festo Hyper Market", "Blue Mart", "The Big Market"
//       ]
//     },

//     floorPlans: [
//       { id: "01", type: "2 BHK", facing: "North", area: "1125 SFT", details: "Living: 11'6\"x16'0\" | M.Bed: 11'0\"x11'9\" | Dining: 12'0\"x8'3\"" },
//       { id: "02", type: "2 BHK", facing: "North", area: "1105 SFT", details: "Living: 16'9\"x11'0\" | M.Bed: 11'0\"x11'9\" | Dining: 12'9\"x8'0\"" },
//       { id: "03", type: "2 BHK", facing: "North", area: "1080 SFT", details: "Living: 11'6\"x16'0\" | M.Bed: 11'0\"x11'9\" | Dining: 12'0\"x8'3\"" },
//       { id: "04", type: "3 BHK", facing: "North", area: "1425 SFT", details: "Living: 16'3\"x11'6\" | M.Bed: 11'0\"x12'0\" | Dining: 12'3\"x9'6\"" },
//       { id: "05", type: "3 BHK", facing: "East", area: "1525 SFT", details: "Living: 16'3\"x14'0\" | M.Bed: 12'0\"x13'0\" | Dining: 8'0\"x9'6\"" },
//       { id: "06", type: "3 BHK", facing: "East", area: "1360 SFT", details: "Living/Dining: 23'6\"x11'0\" | M.Bed: 12'0\"x12'0\" | Kitchen: 8'0\"x9'6\"" },
//       { id: "07", type: "2 BHK", facing: "East", area: "1245 SFT", details: "Living: 11'6\"x19'3\" | M.Bed: 12'0\"x12'0\" | Dining: 13'0\"x8'0\"" },
//       { id: "08", type: "3 BHK", facing: "East", area: "1400 SFT", details: "Living/Dining: 24'6\"x11'6\" | M.Bed: 12'0\"x12'0\" | Kitchen: 11'3\"x8'0\"" },
//       { id: "09", type: "3 BHK", facing: "East", area: "1460 SFT", details: "Living/Dining: 11'6\"x18'9\" | M.Bed: 12'0\"x12'6\" | Kitchen: 11'6\"x8'6\"" },
//       { id: "10", type: "2 BHK", facing: "North", area: "1125 SFT", details: "Living: 11'6\"x16'0\" | M.Bed: 11'0\"x11'9\" | Dining: 12'0\"x8'3\"" },
//       { id: "11", type: "2 BHK", facing: "North", area: "1105 SFT", details: "Living: 16'9\"x11'0\" | M.Bed: 11'0\"x11'9\" | Dining: 12'9\"x8'0\"" },
//       { id: "12", type: "2 BHK", facing: "North", area: "1120 SFT", details: "Living: 11'3\"x16'0\" | M.Bed: 11'0\"x11'9\" | Dining: 12'9\"x8'0\"" },
//       { id: "13", type: "3 BHK", facing: "East", area: "1485 SFT", details: "Living/Dining: 26'6\"x11'6\" | M.Bed: 12'0\"x12'0\" | Kitchen: 11'3\"x8'0\"" },
//       { id: "14", type: "2 BHK", facing: "East", area: "1250 SFT", details: "Living: 11'6\"x19'3\" | M.Bed: 12'0\"x12'0\" | Dining: 13'0\"x8'0\"" },
//       { id: "15", type: "3 BHK", facing: "East", area: "1400 SFT", details: "Living/Dining: 24'6\"x11'6\" | M.Bed: 11'0\"x12'0\" | Kitchen: 11'6\"x8'0\"" },
//       { id: "16", type: "3 BHK", facing: "East", area: "1540 SFT", details: "Living/Dining: 11'6\"x22'9\" | M.Bed: 12'0\"x12'6\" | Kitchen: 11'6\"x8'6\"" }
//     ]
//   }

//   return (
//     <>
//       <ProjectHero project={projectData} />
//       <ProjectDetails project={projectData} />
//       <ProjectAmenities amenities={projectData.amenities} />
      
//       {/* Floor Plans Section Logic Inline - Clean Version */}
//       <section className="py-20 bg-slate-50" id="floor-plans">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
//             >
//               Unit Configurations
//             </motion.h2>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-slate-600 max-w-2xl mx-auto"
//             >
//               Explore our wide range of Vastu-compliant layouts designed for maximum space and ventilation.
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projectData.floorPlans.map((plan, index) => (
//               <motion.div
//                 key={plan.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 group"
//               >
//                 {/* Header */}
//                 <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
//                   <div className="flex items-center gap-2">
//                     <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded">
//                       FLAT {plan.id}
//                     </span>
//                     <span className="font-semibold">{plan.type}</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-slate-300 text-sm">
//                     <Compass className="w-4 h-4" />
//                     <span>{plan.facing}</span>
//                   </div>
//                 </div>

//                 {/* Body */}
//                 <div className="p-6">
//                   <div className="mb-6">
//                     <div className="flex items-center gap-2 text-slate-600 mb-2">
//                       <Maximize className="w-4 h-4 text-amber-600" />
//                       <span className="text-sm font-medium">Total Area</span>
//                     </div>
//                     <div className="text-2xl font-bold text-slate-900">
//                       {plan.area}
//                     </div>
//                   </div>

//                   {/* Dimensions Grid */}
//                   <div className="bg-slate-50 rounded-lg p-4 mb-4">
//                     <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
//                       Key Dimensions
//                     </h4>
//                     <div className="space-y-2">
//                       {plan.details.split("|").map((detail, i) => (
//                         <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
//                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
//                           {detail.trim()}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
//                     <span className="text-xs text-slate-400">
//                       *Dimensions in Feet/Inches
//                     </span>
//                     <div className="text-amber-600 group-hover:translate-x-1 transition-transform duration-300">
//                       <ArrowRight className="w-5 h-5" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ProjectSpecifications specifications={projectData.specifications} />
//       <ProjectGallery projectName="RRL Palacio" />
//       <ContactForm />
//     </>
//   )
// }

"use client"

import { useState } from "react"
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
  Music, 
  MonitorPlay, 
  Gamepad2, 
  Coffee, 
  Trees, 
  School, 
  Hospital, 
  ShoppingCart, 
  Maximize2,
  ArrowRight,
  CheckCircle2,
  Menu,
  Smartphone,
  User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
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
  type: "2BHK" | "3BHK"
  facing: "North" | "East"
  area: number
  dims: {
    living?: string
    dining?: string
    kitchen: string
    masterBed: string
    bed2?: string
    bed3?: string
  }
}

// --- Data ---
const floorPlans: FloorPlan[] = [
  { id: "01", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" } },
  { id: "02", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" } },
  { id: "03", type: "2BHK", facing: "North", area: 1080, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" } },
  { id: "04", type: "3BHK", facing: "North", area: 1425, dims: { living: "16'3\" x 11'6\"", dining: "12'3\" x 9'6\"", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'6\"", bed2: "11'0\" x 11'6\"", bed3: "11'0\" x 11'0\"" } },
  { id: "05", type: "3BHK", facing: "East", area: 1525, dims: { living: "16'3\" x 14'0\"", dining: "8'0\" x 9'6\"", masterBed: "12'0\" x 13'0\"", kitchen: "8'0\" x 9'6\"", bed2: "11'0\" x 11'0\"", bed3: "11'0\" x 12'0\"" } },
  { id: "06", type: "3BHK", facing: "East", area: 1360, dims: { living: "23'6\" x 11'0\" (Living/Dining)", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'9\" x 11'0\"" } },
  { id: "07", type: "2BHK", facing: "East", area: 1245, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"" } },
  { id: "08", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\" (Living/Dining)", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" } },
  { id: "09", type: "3BHK", facing: "East", area: 1460, dims: { living: "11'6\" x 18'9\" (Living/Dining)", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" } },
  { id: "10", type: "2BHK", facing: "North", area: 1125, dims: { living: "11'6\" x 16'0\"", dining: "12'0\" x 8'3\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'3\"", bed2: "11'6\" x 11'0\"" } },
  { id: "11", type: "2BHK", facing: "North", area: 1105, dims: { living: "16'9\" x 11'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'6\"", bed2: "11'0\" x 11'0\"" } },
  { id: "12", type: "2BHK", facing: "North", area: 1120, dims: { living: "11'3\" x 16'0\"", dining: "12'9\" x 8'0\"", masterBed: "11'0\" x 11'9\"", kitchen: "8'0\" x 8'0\"", bed2: "11'6\" x 11'0\"" } },
  { id: "13", type: "3BHK", facing: "East", area: 1485, dims: { living: "26'6\" x 11'6\" (Living/Dining)", masterBed: "12'0\" x 12'0\"", kitchen: "11'3\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" } },
  { id: "14", type: "2BHK", facing: "East", area: 1250, dims: { living: "11'6\" x 19'3\"", dining: "13'0\" x 8'0\"", masterBed: "12'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "10'6\" x 11'0\"" } },
  { id: "15", type: "3BHK", facing: "East", area: 1400, dims: { living: "24'6\" x 11'6\" (Living/Dining)", masterBed: "11'0\" x 12'0\"", kitchen: "11'0\" x 8'0\"", bed2: "11'6\" x 11'0\"", bed3: "11'6\" x 11'0\"" } },
  { id: "16", type: "3BHK", facing: "East", area: 1540, dims: { living: "11'6\" x 22'9\" (Living/Dining)", masterBed: "12'0\" x 12'6\"", kitchen: "11'6\" x 8'6\"", bed2: "12'0\" x 11'6\"", bed3: "12'0\" x 11'0\"" } },
]

export default function PalacioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // --- Animation Variants ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  // --- Form Handler ---
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your enquiry! We will contact you shortly.")
    setIsModalOpen(false)
  }

// ========== HERO SECTION ==========
const HeroSection = () => (
  <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center pt-24 pb-12">
    
    {/* --- 1. NEW BACKGROUND IMAGE START --- */}
    <div className="absolute inset-0 z-0">
       {/* Replace src with your actual project image */}
       <img 
         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766056600/HOME_HERO_2_ahmbpj.png" 
         alt="Luxury Living" 
         className="w-full h-full object-cover"
       />
       {/* Dark Overlay: Essential for reading white text over a photo */}
       <div className="absolute inset-0 bg-black/70"></div>
    </div>
    {/* --- BACKGROUND IMAGE END --- */}

    {/* --- 2. PRESERVED GOLD GRADIENT EFFECT --- */}
    {/* This keeps that "luxury gold tint" from your original code */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d9a406]/30 via-black/40 to-black/80 opacity-70 z-0 mix-blend-overlay"></div>
    
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
               BMRDA & RERA Approved
             </Badge>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Where Luxury <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#fcd34d]">
              Meets Legacy
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-gray-200 max-w-xl mb-10 leading-relaxed border-l-4 border-[#d9a406] pl-6 italic drop-shadow-md">
            "Every corner echoes with regal tales." <br/>
            Experience the royal lifestyle with 50% UDS and Free Interiors.
          </motion.p>

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
          </motion.div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
        >
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9a406] to-transparent"></div>
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
                  <p className="text-gray-300 text-sm mt-1">Get exclusive offers & floor plans.</p>
               </div>
               
               <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-black/50 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-black/50 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-black/50 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#d9a406] focus:ring-1 focus:ring-[#d9a406] outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <Button className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold text-lg h-12 shadow-[0_0_20px_rgba(217,164,6,0.2)] hover:shadow-[0_0_30px_rgba(217,164,6,0.4)] transition-all">
                    Get Call Back
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our privacy policy.
                  </p>
               </form>
            </Card>
        </motion.div>
      </div>
    </div>

    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d9a406]/80"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="w-10 h-10" />
    </motion.div>
  </section>
)

  // ========== KEY HIGHLIGHTS ==========
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
            { icon: Award, title: "Free Interiors", desc: "Fully designed & ready to live homes. More value, less hassle." },
            { icon: ShieldCheck, title: "50% UDS", desc: "Own a significant share of the land. Higher resale potential." },
            { icon: Zap, title: "100% Power Backup", desc: "Generators for all flats, lifts & common areas." },
            { icon: Building2, title: "Ready To Move In", desc: "No waiting, no delays. Start living your lifestyle today." }
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

  // ========== AMENITIES SECTION ==========
  const AmenitiesSection = () => {
    const amenities5Star = [
      { name: "Steam Bath", icon: Wind },
      { name: "Outdoor Games", icon: Gamepad2 },
      { name: "Basket Ball Court", icon: CheckCircle2 },
      { name: "Home Theater", icon: MonitorPlay },
      { name: "Skating Rink", icon: Gamepad2 },
      { name: "Rooftop BBQ", icon: Coffee },
      { name: "Jogging Track", icon: Trees },
      { name: "Club House", icon: Building2 },
      { name: "Outdoor Gym", icon: Dumbbell },
      { name: "Drive Way", icon: CheckCircle2 },
      { name: "Senior Seating", icon: Coffee },
      { name: "Indoor Games", icon: Gamepad2 }
    ]

    const amenities4Star = [
      { name: "Swimming Pool", sub: "With Toddler Pool", icon: Waves },
      { name: "Ultra-Modern Gym", sub: "For fitness enthusiasts", icon: Dumbbell },
      { name: "Kids Play Area", sub: "Indoor Safe Zone", icon: Gamepad2 },
    ]

    return (
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9a406]/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">World Class <span className="text-[#d9a406]">Amenities</span></h2>
            <p className="text-gray-400 max-w-2xl">Meticulously curated amenities designed for a modern & comfortable lifestyle.</p>
          </div>

          <Tabs defaultValue="5star" className="w-full">
            <TabsList className="bg-transparent border-b border-white/10 w-full justify-start rounded-none h-auto p-0 mb-10">
              <TabsTrigger 
                value="5star" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none"
              >
                5 Star Amenities
              </TabsTrigger>
              <TabsTrigger 
                value="4star" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-[#d9a406] data-[state=active]:border-b-2 data-[state=active]:border-[#d9a406] text-gray-400 text-xl font-bold px-0 py-4 mr-8 rounded-none"
              >
                4 Star Amenities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="5star">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {amenities5Star.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[#d9a406]/50 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4"
                  >
                    <div className="p-3 bg-black rounded-lg text-[#d9a406] group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="4star">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {amenities4Star.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative h-64 rounded-2xl overflow-hidden group border border-white/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                    {/* Placeholder for amenity image */}
                    <div className="absolute inset-0 bg-[#222] group-hover:scale-110 transition-transform duration-700"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                      <div className="bg-[#d9a406] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-black">
                        <item.icon className="w-6 h-6" />
                      </div>
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
    const filteredPlans = activeTab === "all" ? floorPlans : floorPlans.filter(p => p.type === activeTab)

    return (
      <section className="py-24 bg-[#050505]" id="floorplans">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
              <p className="text-gray-400 max-w-xl">
                103 Units | B+G+6 Floors | No Common Walls <br/>
                Choose from our range of 16 distinct unit layouts designed for maximum space and light.
              </p>
            </div>
            
            <div className="flex gap-2 bg-[#111] p-1 rounded-lg border border-white/10">
              {["all", "2BHK", "3BHK"].map((tab) => (
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
                          {plan.facing} Facing
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-white/5 hover:bg-[#d9a406] hover:text-black text-white border border-white/10 transition-colors">
                            <Maximize2 className="w-4 h-4 mr-2" /> View Plan
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#111] border border-[#333] text-white max-w-3xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-[#d9a406]">
                              Unit {plan.id} - {plan.type} ({plan.area} SFT)
                            </DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 grid md:grid-cols-2 gap-8">
                            <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center border border-dashed border-white/20">
                               <span className="text-gray-500">Floor Plan Image Placeholder</span>
                            </div>
                            <div className="space-y-6">
                              <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Dimensions</h4>
                              <dl className="grid grid-cols-2 gap-4 text-sm">
                                <dt className="text-gray-400">Facing</dt>
                                <dd className="font-medium text-right">{plan.facing}</dd>
                                
                                <dt className="text-gray-400">Living Area</dt>
                                <dd className="font-medium text-right">{plan.dims.living}</dd>
                                
                                {plan.dims.dining && (
                                  <>
                                    <dt className="text-gray-400">Dining</dt>
                                    <dd className="font-medium text-right">{plan.dims.dining}</dd>
                                  </>
                                )}
                                
                                <dt className="text-gray-400">Master Bedroom</dt>
                                <dd className="font-medium text-right">{plan.dims.masterBed}</dd>
                                
                                {plan.dims.bed2 && (
                                  <>
                                    <dt className="text-gray-400">Bedroom 2</dt>
                                    <dd className="font-medium text-right">{plan.dims.bed2}</dd>
                                  </>
                                )}
                                
                                {plan.dims.bed3 && (
                                  <>
                                    <dt className="text-gray-400">Bedroom 3</dt>
                                    <dd className="font-medium text-right">{plan.dims.bed3}</dd>
                                  </>
                                )}
                                
                                <dt className="text-gray-400">Kitchen</dt>
                                <dd className="font-medium text-right">{plan.dims.kitchen}</dd>
                              </dl>
                              <Button className="w-full bg-[#d9a406] text-black font-bold mt-4" onClick={() => setIsModalOpen(true)}>
                                Enquire This Unit
                              </Button>
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

  // ========== LOCATION SECTION ==========
  const LocationSection = () => (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-[#d9a406] text-black mb-4 hover:bg-[#d9a406]">Prime Location</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connected to <span className="text-[#d9a406]">Everything</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Strategically located near Electronic City, Wipro SEZ & Sarjapura Road. Enjoy low traffic volumes with easy accessibility to ORR.
            </p>

            <div className="space-y-8">
               <div className="border-l-2 border-[#333] pl-6 relative">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#d9a406] rounded-full"></div>
                 <h4 className="text-white font-bold text-lg mb-2">Work Hubs</h4>
                 <p className="text-gray-500">Electronic City, Wipro SEZ, Infosys Ltd, BHEL, Bommasandra Ind. Area.</p>
               </div>
               <div className="border-l-2 border-[#333] pl-6 relative">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
                 <h4 className="text-white font-bold text-lg mb-2">Education</h4>
                 <p className="text-gray-500">PES College, Christ Academy, Greenwood High, Indus Intl. School.</p>
               </div>
               <div className="border-l-2 border-[#333] pl-6 relative">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#222] border-2 border-[#d9a406] rounded-full"></div>
                 <h4 className="text-white font-bold text-lg mb-2">Essentials</h4>
                 <p className="text-gray-500">D-Mart, Chandrapura Market, Vimalalaya Hospital, Narayana Health City.</p>
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-[#111] border border-white/10 p-2 rounded-xl">
               {/* Map Placeholder */}
               <div className="w-full h-[500px] bg-[#000] rounded-lg flex items-center justify-center flex-col gap-4">
                  <MapPin className="w-16 h-16 text-[#d9a406] animate-bounce" />
                  <p className="text-gray-500">Map View Placeholder</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )

  // ========== FOOTER / CTA ==========
  const FooterSection = () => (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
       <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience <span className="text-[#d9a406]">Royalty?</span></h2>
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
               <h3 className="text-2xl font-bold text-white mb-4">RRL <span className="text-[#d9a406]">Palacio</span></h3>
               <p className="text-gray-500 text-sm">PRM/KA/RERA/1251/308/ PR/220424/006827</p>
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
               <p className="text-gray-500 text-sm mb-2">Near Electronic City, Bangalore</p>
               <p className="text-gray-500 text-sm">+91 99999 99999</p>
               <p className="text-gray-500 text-sm">sales@rrlpalacio.com</p>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-700 text-xs">
            © 2024 RRL Palacio. All rights reserved. Disclaimer: Images are for representation purpose only.
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
            
            <div className="text-center mb-8">
               <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
               <p className="text-[#d9a406] text-sm">Fill the form to unlock exclusive offers</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-black border border-[#333] p-4 rounded-lg text-white focus:border-[#d9a406] outline-none transition-colors" 
                  required 
                />
              </div>
              <Button className="w-full bg-[#d9a406] text-black font-bold text-lg h-12 hover:bg-[#b08505] mt-2">
                Submit Enquiry
              </Button>
            </form>
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
               RRL <span className="text-[#d9a406]">Palacio</span>
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

      <HeroSection />
      <HighlightsSection />
      <AmenitiesSection />
      <FloorPlansSection />
      <SpecsSection />
      <LocationSection />
      {/* <FooterSection /> */}
      <EnquiryModal />
    </main>
  )
}