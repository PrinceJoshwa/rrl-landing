"use client"

import Image from "next/image"
import { useState } from "react"
import { MapPin, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Assuming data structures are defined elsewhere as they were before
// FloorPlanContent, AddressContent, floorPlanDetails, addressDetails types/consts

interface ProjectGalleryProps {
  projectName: string
}

// Data would be here
const floorPlanDetails: Record<string, any> = { /* ... your floor plan data ... */ };
const addressDetails: Record<string, any> = { /* ... your address data ... */ };

export function ProjectGallery({ projectName }: ProjectGalleryProps) {
  const galleryImages = [
    { src: "/LookProject1.jpeg", alt: "Exterior View" }, { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
    { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" }, { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
    { src: "/LookProject5.jpeg", alt: "Swimming Pool" }, { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
    { src: "/LookProject7.jpeg", alt: "Sample Apartment" }, { src: "/LookProject8.jpeg", alt: "Jogging Track" },
    { src: "/LookProject9.jpeg", alt: "Building Facade" }, { src: "/LookProject10.jpeg", alt: "Covered Parking" },
    { src: "/LookProject11.jpeg", alt: "Community Hall" }, { src: "/LookProject12.jpeg", alt: "Entrance Lobby" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  // Rest of the component logic (activeTab, data fetching etc.) remains the same
  const [activeTab, setActiveTab] = useState<"brochure" | "floor-plan" | "address">("brochure")
  const currentProjectFloorPlan = floorPlanDetails[projectName]?.["floor-plan-1"] || {};
  const currentProjectAddress = addressDetails[projectName] || {};
  const brochureUrl = projectName === "RRL Palacio" ? "/brochures/rrl-palacio-brochure.pdf" : projectName === "RRL Nature Woods" ? "/brochures/rrl-nature-woods-brochure.pdf" : undefined;


  return (
    <>
      <motion.section
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Project Gallery</h2>
            <p className="text-xl text-[#D9A406;]">A Glimpse into Your Future Home</p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative aspect-square"
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`${projectName} - ${image.alt}`}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">{image.alt}</p>
                 </div>
              </motion.div>
            ))}
          </motion.div>

           {/* ... Rest of the tab section logic from previous steps ... */}

        </div>
      </motion.section>
      
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxIndex}
      />
    </>
  )
}