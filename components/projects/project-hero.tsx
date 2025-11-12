// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { MapPin, Calendar, Award } from 'lucide-react'
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Card, CardContent } from "@/components/ui/card"
// import { useState } from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"

// interface ProjectHeroProps {
//   project: {
//     name: string
//     subtitle: string
//     description: string
//     status: string
//     heroImage: string
//   }
// }

// export function ProjectHero({ project }: ProjectHeroProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     whatsappUpdates: false,
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     alert("Thank you for your inquiry! We will get back to you shortly.")
//     setFormData({ name: "", phone: "", whatsappUpdates: false })
//   }

//   const canDownloadBrochure = project.name === "RRL Palacio" || project.name === "RRL Nature Woods";
  
//   const handleDownload = () => {
//     if (!canDownloadBrochure) return;
//     const brochureUrl = project.name === "RRL Palacio"
//       ? "/brochures/rrl-palacio-brochure.pdf"
//       : "/brochures/rrl-nature-woods-brochure.pdf";
//     const link = document.createElement("a");
//     link.href = brochureUrl;
//     link.download = `${project.name}-Brochure.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }

//   return (
//     <section className="relative min-h-[80vh] flex items-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={project.heroImage || "/placeholder.svg"}
//           alt={project.name}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
//       </div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <motion.div 
//             className="max-w-3xl text-white space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
//               {project.status.includes("Award") && <Award className="h-4 w-4" />}
//               {project.status.includes("Coming") && <Calendar className="h-4 w-4" />}
//               {!project.status.includes("Award") && !project.status.includes("Coming") && <MapPin className="h-4 w-4" />}
//               <span>{project.status}</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-playfair font-bold">{project.name}</h1>
//             <p className="text-xl text-gray-300">{project.subtitle}</p>
//             <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">{project.description}</p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button size="lg" className="bg-gold-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-gold-600 transition-all">
//                 Request Site Visit
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-gold-700 text-gold-300 hover:bg-gold-900/20 hover:text-gold-300 px-8 py-3 rounded-full font-semibold bg-transparent"
//                 onClick={canDownloadBrochure ? handleDownload : undefined}
//               >
//                 {canDownloadBrochure ? "Download Brochure" : "Get Project Info"}
//               </Button>
//             </div>
//           </motion.div>

//           {/* Right Content - Contact Form */}
//           <motion.div 
//             className="flex justify-center lg:justify-end"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Card className="w-full max-w-md rounded-2xl shadow-2xl p-8 bg-white/10 backdrop-blur-md border border-gold-800">
//               <CardContent className="p-0">
//                 <h2 className="text-2xl font-bold text-white mb-6 text-center">
//                   Get a Free Quote for Your Dream Property
//                 </h2>
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500" />
//                   <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} required className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500" />
//                   <div className="flex items-center space-x-2">
//                     <Checkbox id="whatsapp-updates" name="whatsappUpdates" checked={formData.whatsappUpdates} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))} className="border-gold-700 data-[state=checked]:bg-gold-500 data-[state=checked]:text-black"/>
//                     <label htmlFor="whatsapp-updates" className="text-sm font-medium text-gray-300">Send me updates on Whatsapp</label>
//                   </div>
//                   <Button type="submit" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg">
//                     Request Quote
//                   </Button>
//                   <p className="text-xs text-gray-400 text-center mt-4">
//                     By submitting, you agree to the{" "}
//                     <Link href="/privacy" className="text-gold-400 hover:underline">privacy policy</Link> &{" "}
//                     <Link href="/terms" className="text-gold-400 hover:underline">terms</Link>.
//                   </p>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Award } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProjectHeroProps {
  project: {
    name: string
    subtitle: string
    description: string
    status: string
    heroImage: string
  }
}

const properties = [
  "RRL Palacio",
  "RRL Palm Altezze",
  "RRL Nature Woods",
  "RRL Sequoia",
  "RRL Oasis",
  "RRL Towers",
  "RRL Complex",
];

export function ProjectHero({ project }: ProjectHeroProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    property: "",
    whatsappUpdates: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handlePropertyChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      property: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // UPDATED: Add validation check for the property field
    if (!formData.property) {
      alert("Please select a property.");
      return; // Stop the submission if no property is selected
    }

    try {
      const response = await fetch("https://formspree.io/f/xvgdpkbn", { // <-- ⚠️ REPLACE WITH YOUR FORMSPREE ID
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Thank you for your inquiry! We will get back to you shortly.")
        setFormData({ name: "", phone: "", property: "", whatsappUpdates: false })
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
       alert("An error occurred. Please check your connection and try again.");
    }
  }

  const canDownloadBrochure = project.name === "RRL Palacio" || project.name === "RRL Nature Woods";
  
  const handleDownload = () => {
    if (!canDownloadBrochure) return;
    const brochureUrl = project.name === "RRL Palacio"
      ? "/brochures/rrl-palacio-brochure.pdf"
      : "/brochures/rrl-nature-woods-brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = `${project.name}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="max-w-3xl text-white space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              {project.status.includes("Award") && <Award className="h-4 w-4" />}
              {project.status.includes("Coming") && <Calendar className="h-4 w-4" />}
              {!project.status.includes("Award") && !project.status.includes("Coming") && <MapPin className="h-4 w-4" />}
              <span>{project.status}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold">{project.name}</h1>
            <p className="text-xl text-gray-300">{project.subtitle}</p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">{project.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-gold-600 transition-all">
                Request Site Visit
              </Button>
             </Link> 
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold-700 text-gold-300 hover:bg-gold-900/20 hover:text-gold-300 px-8 py-3 rounded-full font-semibold bg-transparent"
                onClick={canDownloadBrochure ? handleDownload : undefined}
              >
                {canDownloadBrochure ? "Download Brochure" : "Get Project Info"}
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-full max-w-md rounded-2xl shadow-2xl p-8 bg-white/10 backdrop-blur-md border border-gold-800">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Get a Free Quote for Your Dream Property
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500" />
                  <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} required className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500" />
                  
                  {/* Select Property Dropdown */}
                  <Select name="property" onValueChange={handlePropertyChange} value={formData.property} required>
                    <SelectTrigger className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500 data-[placeholder]:text-gray-400">
                      {/* UPDATED: Changed placeholder text to indicate it's required */}
                      <SelectValue placeholder="Select a Property (Required)" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 text-white border-gold-700 backdrop-blur-md">
                      {properties.map((prop) => (
                        <SelectItem 
                          key={prop} 
                          value={prop} 
                          className="hover:bg-gold-900/50 focus:bg-gold-900/50"
                        >
                          {prop}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="whatsapp-updates" name="whatsappUpdates" checked={formData.whatsappUpdates} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, whatsappUpdates: !!checked }))} className="border-gold-700 data-[state=checked]:bg-gold-500 data-[state=checked]:text-black"/>
                    <label htmlFor="whatsapp-updates" className="text-sm font-medium text-gray-300">Send me updates on Whatsapp</label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg">
                    Request Quote
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting, you agree to the{" "}
                    <Link href="/privacy" className="text-gold-400 hover:underline">privacy policy</Link> &{" "}
                    <Link href="/terms" className="text-gold-400 hover:underline">terms</Link>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}