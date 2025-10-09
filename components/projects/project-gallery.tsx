// // // // // // import Image from "next/image"
// // // // // // import { BrochureDownload } from "./brochure-download"

// // // // // // interface ProjectGalleryProps {
// // // // // //   projectName: string
// // // // // // }

// // // // // // export function ProjectGallery({ projectName }: ProjectGalleryProps) {
// // // // // //   const galleryImages = [
// // // // // //     { src: "/LookProject1.jpeg", alt: "Exterior View" },
// // // // // //     { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
// // // // // //     { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" },
// // // // // //     { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
// // // // // //     { src: "/LookProject5.jpeg", alt: "Swimming Pool" },
// // // // // //     { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
// // // // // //     { src: "/LookProject7.jpeg", alt: "Sample Apartment" },
// // // // // //     { src: "/LookProject8.jpeg", alt: "Jogging Track" },
// // // // // //     { src: "/LookProject9.jpeg", alt: "Building Facade" },
// // // // // //     { src: "/LookProject10.jpeg", alt: "Covered Parking" },
// // // // // //     { src: "/LookProject11.jpeg", alt: "Community Hall" },
// // // // // //     { src: "/LookProject12.jpeg", alt: "Entrance Lobby" },
// // // // // //   ]

// // // // // //   return (
// // // // // //     <section className="py-20 gradient-secondary">
// // // // // //       <div className="container mx-auto px-4">
// // // // // //         <div className="text-center mb-16">
// // // // // //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Look of the Project</h2>
// // // // // //           <p className="text-xl text-slate-600">Discover Your Perfect Match: Our Exclusive Property Listings</p>
// // // // // //         </div>

// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// // // // // //           {galleryImages.map((image, index) => (
// // // // // //             <div
// // // // // //               key={index}
// // // // // //               className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
// // // // // //             >
// // // // // //               <Image
// // // // // //                 src={image.src || "/placeholder.svg"}
// // // // // //                 alt={`${projectName} - ${image.alt}`}
// // // // // //                 width={400}
// // // // // //                 height={300}
// // // // // //                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// // // // // //               />
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         <div className="text-center space-y-6">
// // // // // //           <div className="inline-flex flex-wrap justify-center gap-4">
// // // // // //             <button className="bg-[#d9a406] text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
// // // // // //               The Brochure
// // // // // //             </button>
// // // // // //             <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
// // // // // //               The Floor Plan
// // // // // //             </button>
// // // // // //             <button className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
// // // // // //               The Master Plan
// // // // // //             </button>
// // // // // //             <button className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
// // // // // //               The Address
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           <BrochureDownload
// // // // // //             projectName={projectName}
// // // // // //             brochureUrl={
// // // // // //               projectName === "RRL Palacio"
// // // // // //                 ? "/brochures/rrl-palacio-brochure.pdf"
// // // // // //                 : projectName === "RRL Nature Woods"
// // // // // //                   ? "/brochures/rrl-nature-woods-brochure.pdf"
// // // // // //                   : undefined
// // // // // //             }
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   )
// // // // // // }

// // // // // "use client"

// // // // // import Image from "next/image"
// // // // // import { BrochureDownload } from "./brochure-download"
// // // // // import { useState } from "react"
// // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// // // // // import { MapPin, Download } from 'lucide-react'
// // // // // import { Button } from "@/components/ui/button"
// // // // // import { cn } from "@/lib/utils"

// // // // // interface ProjectGalleryProps {
// // // // //   projectName: string
// // // // // }

// // // // // // Define a type for the floor plan details to ensure consistency
// // // // // type FloorPlanContent = {
// // // // //   description: string;
// // // // //   downloadUrl?: string; // Made optional as some might not have a direct download
// // // // //   saleableAreas?: string[]; // Added for specific floor plan details
// // // // //   roomDimensions?: string[]; // Added for specific floor plan details
// // // // // };

// // // // // // Define a type for the address details
// // // // // type AddressContent = {
// // // // //   address?: string;
// // // // //   contact?: string;
// // // // //   mapUrl?: string;
// // // // // };

// // // // // // Data for floor plans and their descriptions/download URLs
// // // // // const floorPlanDetails: Record<string, { [key: string]: FloorPlanContent }> = {
// // // // //   "RRL Palacio": {
// // // // //     "floor-plan-1": {
// // // // //       description: "Spread over 1.53 acres and comprising 140 units, this grand property boasts comfortable and spacious rooms with pleasing views of the city. We have 2, 3 BHK Premium Furniture Apartments",
// // // // //       downloadUrl: "/brochures/rrl-palacio-floor-plan-1.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Located on NH-275, in between Whitefield, Bellandur & Electronic City, and Soul Tree at Sompura Gate, all while being conveniently tucked away from the concrete jungle of today's Bangalore.",
// // // // //       downloadUrl: "/brochures/rrl-palacio-floor-plan-2.pdf",
// // // // //     }
// // // // //   },
// // // // //   "RRL Nature Woods": {
// // // // //     "floor-plan-1": {
// // // // //       description: "Spread over 1.53 acres and comprising 140 units, this grand property boasts comfortable and spacious rooms with pleasing views of the city. We have 2, 3 BHK Premium Furniture Apartments",
// // // // //       downloadUrl: "/brochures/rrl-nature-woods-floor-plan-1.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Located on NH-275, in between Whitefield, Bellandur & Electronic City, and Soul Tree at Sompura Gate, all while being conveniently tucked away from the concrete jungle of today's Bangalore.",
// // // // //       downloadUrl: "/brochures/rrl-nature-woods-floor-plan-2.pdf",
// // // // //     }
// // // // //   },
// // // // //   "RRL Palm Altezze": {
// // // // //     "floor-plan-1": {
// // // // //       description: "Discover the thoughtfully designed layouts of RRL Palm Altezze. Our 2 & 3 BHK apartments offer optimal space utilization and modern living. Download the detailed floor plan to explore various configurations.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-1.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Explore alternative floor plan options for RRL Palm Altezze. These layouts provide flexibility and comfort, catering to diverse family needs. Download the second floor plan for more details.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     }
// // // // //   },
// // // // //   "RRL Oasis": {
// // // // //     "floor-plan-1": {
// // // // //       description: "As a commercial mall, traditional floor plans with room dimensions are not applicable. Please contact us for detailed layouts of retail spaces and common areas.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Detailed layouts for specific commercial units and entertainment zones are available upon request. Please reach out to our sales team for more information.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     }
// // // // //   },
// // // // //   "RRL Sequoia": {
// // // // //     "floor-plan-1": {
// // // // //       description: "Detailed floor plans for RRL Sequoia villas, including individual lift and home theatre layouts, are available upon request. Please contact us for more information.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Specific layouts for different villa configurations and plot sizes are available. Please reach out to our sales team for detailed floor plans and customization options.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     }
// // // // //   },
// // // // //   "RRL Complex": {
// // // // //     "floor-plan-1": {
// // // // //       description: "As a commercial building, traditional floor plans with room dimensions are not applicable. Please contact us for detailed layouts of rental spaces and common areas.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Detailed layouts for specific commercial units and amenities are available upon request. Please reach out to our sales team for more information.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     }
// // // // //   },
// // // // //   "RRL Towers": {
// // // // //     "floor-plan-1": {
// // // // //       description: "As a commercial tower, traditional floor plans with room dimensions are not applicable. Please contact us for detailed layouts of office spaces and retail units.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     },
// // // // //     "floor-plan-2": {
// // // // //       description: "Detailed layouts for specific commercial units and amenities are available upon request. Please reach out to our sales team for more information.",
// // // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // // //     }
// // // // //   }
// // // // // };

// // // // // // Data for addresses and map URLs
// // // // // const addressDetails: Record<string, AddressContent> = {
// // // // //   "RRL Palacio": {
// // // // //     address: "RQMJ+XQ, Sarjapura – Attibele Rd, near OM/Home Classic, Billapura, Bengaluru, Karnataka 562125",
// // // // //     contact: "073378 16991",
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Placeholder, ideally specific to Palacio
// // // // //   },
// // // // //   "RRL Nature Woods": {
// // // // //     address: "RRL Nature Woods, Sompura Gate, Sarjapur Road, Bengaluru, Karnataka 562125",
// // // // //     contact: "+91-8494966966",
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Placeholder, ideally specific to Nature Woods
// // // // //   },
// // // // //   "RRL Palm Altezze": {
// // // // //     address: "RRL Palm Altezze, Varthur, Bengaluru, Karnataka 560087",
// // // // //     contact: "+91-8494966966",
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Placeholder, ideally specific to Palm Altezze
// // // // //   },
// // // // //   "RRL Oasis": {
// // // // //     address: "Sarjapur Attibele Road, Bengaluru, Karnataka",
// // // // //     contact: "+91-8494966966", // Using general contact as specific not provided
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // // //   },
// // // // //   "RRL Sequoia": {
// // // // //     address: "Varthur, Bengaluru, Karnataka",
// // // // //     contact: "+91-8494966966", // Using general contact as specific not provided
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // // //   },
// // // // //   "RRL Complex": {
// // // // //     address: "SY NO - 269, BIDURGUPPA VILLAGE, bus-stop, RRL COMPLEX, Sarjapur Attibele Rd, near Biderguppa, Bengaluru, Karnataka 562125",
// // // // //     contact: "+91-7337816996",
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // // //   },
// // // // //   "RRL Towers": {
// // // // //     address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru, Karnataka 562125",
// // // // //     contact: "+91-7337816996",
// // // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // // //   }
// // // // // };

// // // // // export function ProjectGallery({ projectName }: ProjectGalleryProps) {
// // // // //   const galleryImages = [
// // // // //     { src: "/LookProject1.jpeg", alt: "Exterior View" },
// // // // //     { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
// // // // //     { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" },
// // // // //     { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
// // // // //     { src: "/LookProject5.jpeg", alt: "Swimming Pool" },
// // // // //     { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
// // // // //     { src: "/LookProject7.jpeg", alt: "Sample Apartment" },
// // // // //     { src: "/LookProject8.jpeg", alt: "Jogging Track" },
// // // // //     { src: "/LookProject9.jpeg", alt: "Building Facade" },
// // // // //     { src: "/LookProject10.jpeg", alt: "Covered Parking" },
// // // // //     { src: "/LookProject11.jpeg", alt: "Community Hall" },
// // // // //     { src: "/LookProject12.jpeg", "alt": "Entrance Lobby" },
// // // // //   ]

// // // // //   const [activeTab, setActiveTab] = useState<"brochure" | "floor-plan-1" | "floor-plan-2" | "address">("brochure")

// // // // //   // Safely access project-specific data
// // // // //   const currentProjectFloorPlans = floorPlanDetails[projectName] || {};
// // // // //   const currentProjectAddress = addressDetails[projectName] || {};

// // // // //   const handleDownload = (url?: string, fileName?: string) => {
// // // // //     if (url && fileName) {
// // // // //       const link = document.createElement("a")
// // // // //       link.href = url
// // // // //       link.download = fileName
// // // // //       document.body.appendChild(link)
// // // // //       link.click()
// // // // //       document.body.removeChild(link)
// // // // //     } else {
// // // // //       alert(`Brochure/Floor Plan for ${projectName} is not available for download. Please contact us for more information.`)
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <section className="py-20 gradient-secondary">
// // // // //       <div className="container mx-auto px-4">
// // // // //         <div className="text-center mb-16">
// // // // //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Look of the Project</h2>
// // // // //           <p className="text-xl text-slate-600">Discover Your Perfect Match: Our Exclusive Property Listings</p>
// // // // //         </div>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// // // // //           {galleryImages.map((image, index) => (
// // // // //             <div
// // // // //               key={index}
// // // // //               className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
// // // // //             >
// // // // //               <Image
// // // // //                 src={image.src || "/placeholder.svg"}
// // // // //                 alt={`${projectName} - ${image.alt}`}
// // // // //                 width={400}
// // // // //                 height={300}
// // // // //                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// // // // //               />
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         <div className="text-center space-y-6">
// // // // //           {/* Tab Buttons */}
// // // // //           <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
// // // // //             <button
// // // // //               onClick={() => setActiveTab("brochure")}
// // // // //               className={cn(
// // // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // // //                 activeTab === "brochure"
// // // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // // //               )}
// // // // //             >
// // // // //               The Brochure
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab("floor-plan-1")}
// // // // //               className={cn(
// // // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // // //                 activeTab === "floor-plan-1"
// // // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // // //               )}
// // // // //             >
// // // // //               The Floor Plan
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab("floor-plan-2")}
// // // // //               className={cn(
// // // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // // //                 activeTab === "floor-plan-2"
// // // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // // //               )}
// // // // //             >
// // // // //               The Floor Plan - 2
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab("address")}
// // // // //               className={cn(
// // // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // // //                 activeTab === "address"
// // // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // // //               )}
// // // // //             >
// // // // //               The Address
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Tab Content */}
// // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 text-left max-w-4xl mx-auto">
// // // // //             {activeTab === "brochure" && (
// // // // //               <div className="space-y-6">
// // // // //                 <p className="text-lg text-slate-600 leading-relaxed">
// // // // //                   RRL Builders and Developers Pvt Ltd presents premium apartments at the heart of Bangalore – the Sarjapur Road located in south-east Bangalore, is one of the fastest-growing parts of the city which makes it a perfect & favoured property investment destination.
// // // // //                 </p>
// // // // //                 <Button
// // // // //                   onClick={() => handleDownload(
// // // // //                     projectName === "RRL Palacio" ? "/brochures/rrl-palacio-brochure.pdf" : "/brochures/rrl-nature-woods-brochure.pdf",
// // // // //                     `${projectName}-Brochure.pdf`
// // // // //                   )}
// // // // //                   size="lg"
// // // // //                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
// // // // //                 >
// // // // //                   <Download className="mr-2 h-5 w-5" />
// // // // //                   DOWNLOAD THE BROCHURE
// // // // //                 </Button>
// // // // //               </div>
// // // // //             )}

// // // // //             {activeTab === "floor-plan-1" && (
// // // // //               <div className="space-y-6">
// // // // //                 <p className="text-lg text-slate-600 leading-relaxed mb-4">
// // // // //                   {currentProjectFloorPlans["floor-plan-1"]?.description || "Floor plan details are not available for this project."}
// // // // //                 </p>
// // // // //                 {(currentProjectFloorPlans["floor-plan-1"]?.saleableAreas || currentProjectFloorPlans["floor-plan-1"]?.roomDimensions) && (
// // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                     {currentProjectFloorPlans["floor-plan-1"]?.saleableAreas && (
// // // // //                       <div>
// // // // //                         <h3 className="font-bold text-slate-900 mb-3">Saleable Areas:</h3>
// // // // //                         <ul className="list-disc list-inside text-slate-700 space-y-1">
// // // // //                           {currentProjectFloorPlans["floor-plan-1"].saleableAreas.map((area, idx) => (
// // // // //                             <li key={idx}>{area}</li>
// // // // //                           ))}
// // // // //                         </ul>
// // // // //                       </div>
// // // // //                     )}
// // // // //                     {currentProjectFloorPlans["floor-plan-1"]?.roomDimensions && (
// // // // //                       <div>
// // // // //                         <h3 className="font-bold text-slate-900 mb-3">Room Dimensions:</h3>
// // // // //                         <ul className="list-disc list-inside text-slate-700 space-y-1">
// // // // //                           {currentProjectFloorPlans["floor-plan-1"].roomDimensions.map((dim, idx) => (
// // // // //                             <li key={idx}>{dim}</li>
// // // // //                           ))}
// // // // //                         </ul>
// // // // //                       </div>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}
// // // // //                 <Button
// // // // //                   onClick={() => handleDownload(
// // // // //                     currentProjectFloorPlans["floor-plan-1"]?.downloadUrl,
// // // // //                     `${projectName}-FloorPlan1.pdf`
// // // // //                   )}
// // // // //                   size="lg"
// // // // //                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
// // // // //                   disabled={!currentProjectFloorPlans["floor-plan-1"]?.downloadUrl}
// // // // //                 >
// // // // //                   <Download className="mr-2 h-5 w-5" />
// // // // //                   DOWNLOAD THE FLOOR PLAN
// // // // //                 </Button>
// // // // //               </div>
// // // // //             )}

// // // // //             {activeTab === "floor-plan-2" && (
// // // // //               <div className="space-y-6">
// // // // //                 <p className="text-lg text-slate-600 leading-relaxed mb-4">
// // // // //                   {currentProjectFloorPlans["floor-plan-2"]?.description || "Second floor plan details are not available for this project."}
// // // // //                 </p>
// // // // //                 {currentProjectFloorPlans["floor-plan-2"]?.roomDimensions && (
// // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                     <div>
// // // // //                       <h3 className="font-bold text-slate-900 mb-3">Room Dimensions:</h3>
// // // // //                       <ul className="list-disc list-inside text-slate-700 space-y-1">
// // // // //                         {currentProjectFloorPlans["floor-plan-2"].roomDimensions.map((dim, idx) => (
// // // // //                           <li key={idx}>{dim}</li>
// // // // //                         ))}
// // // // //                       </ul>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}
// // // // //                 <Button
// // // // //                   onClick={() => handleDownload(
// // // // //                     currentProjectFloorPlans["floor-plan-2"]?.downloadUrl,
// // // // //                     `${projectName}-FloorPlan2.pdf`
// // // // //                   )}
// // // // //                   size="lg"
// // // // //                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
// // // // //                   disabled={!currentProjectFloorPlans["floor-plan-2"]?.downloadUrl}
// // // // //                 >
// // // // //                   <Download className="mr-2 h-5 w-5" />
// // // // //                   DOWNLOAD THE FLOOR PLAN
// // // // //                 </Button>
// // // // //               </div>
// // // // //             )}

// // // // //             {activeTab === "address" && (
// // // // //               <div className="grid lg:grid-cols-2 gap-8 items-start">
// // // // //                 <div className="space-y-4">
// // // // //                   <div>
// // // // //                     <h3 className="font-bold text-slate-900 mb-2">Address:</h3>
// // // // //                     <p className="text-slate-700 leading-relaxed">
// // // // //                       {currentProjectAddress.address || "Address details not available."}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="font-bold text-slate-900 mb-2">Contact Number:</h3>
// // // // //                     <p className="text-slate-700">
// // // // //                       {currentProjectAddress.contact || "Contact number not available."}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
// // // // //                   {currentProjectAddress.mapUrl ? (
// // // // //                     <iframe
// // // // //                       src={currentProjectAddress.mapUrl}
// // // // //                       width="100%"
// // // // //                       height="100%"
// // // // //                       style={{ border: 0 }}
// // // // //                       allowFullScreen={true}
// // // // //                       loading="lazy"
// // // // //                       referrerPolicy="no-referrer-when-downgrade"
// // // // //                       title={`${projectName} Location Map`}
// // // // //                     ></iframe>
// // // // //                   ) : (
// // // // //                     <div className="flex items-center justify-center h-full bg-slate-100 text-slate-500">
// // // // //                       Map not available for this location.
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   )
// // // // // }

// // // // "use client"

// // // // import Image from "next/image"
// // // // import { BrochureDownload } from "./brochure-download"
// // // // import { useState } from "react"
// // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// // // // import { MapPin, Download } from 'lucide-react'
// // // // import { Button } from "@/components/ui/button"
// // // // import { cn } from "@/lib/utils"
// // // // import { motion, AnimatePresence } from "framer-motion"
// // // // import { Variants, easeOut, easeIn } from "framer-motion";


// // // // interface ProjectGalleryProps {
// // // //   projectName: string
// // // // }

// // // // // Define a type for the floor plan details to ensure consistency
// // // // type FloorPlanContent = {
// // // //   description: string;
// // // //   downloadUrl?: string; // Made optional as some might not have a direct download
// // // //   saleableAreas?: string[]; // Added for specific floor plan details
// // // //   roomDimensions?: string[]; // Added for specific floor plan details
// // // // };

// // // // // Define a type for the address details
// // // // type AddressContent = {
// // // //   address?: string;
// // // //   contact?: string;
// // // //   mapUrl?: string;
// // // // };

// // // // // Data for floor plans and their descriptions/download URLs
// // // // const floorPlanDetails: Record<string, { [key: string]: FloorPlanContent }> = {
// // // //   "RRL Palacio": {
// // // //     "floor-plan-1": {
// // // //       description: "Spread over 1.53 acres and comprising 140 units, this grand property boasts comfortable and spacious rooms with pleasing views of the city. We have 2, 3 BHK Premium Furniture Apartments",
// // // //       downloadUrl: "/brochures/rrl-palacio-floor-plan-1.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Located on NH-275, in between Whitefield, Bellandur & Electronic City, and Soul Tree at Sompura Gate, all while being conveniently tucked away from the concrete jungle of today's Bangalore.",
// // // //       downloadUrl: "/brochures/rrl-palacio-floor-plan-2.pdf",
// // // //     }
// // // //   },
// // // //   "RRL Nature Woods": {
// // // //     "floor-plan-1": {
// // // //       description: "Spread over 1.53 acres and comprising 140 units, this grand property boasts comfortable and spacious rooms with pleasing views of the city. We have 2, 3 BHK Premium Furniture Apartments",
// // // //       downloadUrl: "/brochures/rrl-nature-woods-floor-plan-1.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Located on NH-275, in between Whitefield, Bellandur & Electronic City, and Soul Tree at Sompura Gate, all while being conveniently tucked away from the concrete jungle of today's Bangalore.",
// // // //       downloadUrl: "/brochures/rrl-nature-woods-floor-plan-2.pdf",
// // // //     }
// // // //   },
// // // //   "RRL Palm Altezze": {
// // // //     "floor-plan-1": {
// // // //       description: "Discover the thoughtfully designed layouts of RRL Palm Altezze. Our 2 & 3 BHK apartments offer optimal space utilization and modern living. Download the detailed floor plan to explore various configurations.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-1.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Explore alternative floor plan options for RRL Palm Altezze. These layouts provide flexibility and comfort, catering to diverse family needs. Download the second floor plan for more details.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     }
// // // //   },
// // // //   "RRL Oasis": {
// // // //     "floor-plan-1": {
// // // //       description: "As a commercial mall, traditional floor plans with room dimensions are not applicable. Please contact us for detailed layouts of retail spaces and common areas.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Detailed layouts for specific commercial units and entertainment zones are available upon request. Please reach out to our sales team for more information.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     }
// // // //   },
// // // //   "RRL Sequoia": {
// // // //     "floor-plan-1": {
// // // //       description: "Detailed floor plans for RRL Sequoia villas, including individual lift and home theatre layouts, are available upon request. Please contact us for more information.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Specific layouts for different villa configurations and plot sizes are available. Please reach out to our sales team for detailed floor plans and customization options.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     }
// // // //   },
// // // //   "RRL Complex": {
// // // //     "floor-plan-1": {
// // // //       description: "As a commercial building, traditional floor plans with room dimensions are not applicable. Please contact us for detailed layouts of rental spaces and common areas.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Detailed layouts for specific commercial units and amenities are available upon request. Please reach out to our sales team for more information.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     }
// // // //   },
// // // //   "RRL Towers": {
// // // //     "floor-plan-1": {
// // // //       description: "As a commercial tower, traditional floor plans with room dimensions are not applicable. Please contact us for detailed layouts of office spaces and retail units.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     },
// // // //     "floor-plan-2": {
// // // //       description: "Detailed layouts for specific commercial units and amenities are available upon request. Please reach out to our sales team for more information.",
// // // //       downloadUrl: "/brochures/rrl-palm-altezze-floor-plan-2.pdf",
// // // //     }
// // // //   }
// // // // };

// // // // // Data for addresses and map URLs
// // // // const addressDetails: Record<string, AddressContent> = {
// // // //   "RRL Palacio": {
// // // //     address: "RQMJ+XQ, Sarjapura – Attibele Rd, near OM/Home Classic, Billapura, Bengaluru, Karnataka 562125",
// // // //     contact: "073378 16991",
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Placeholder, ideally specific to Palacio
// // // //   },
// // // //   "RRL Nature Woods": {
// // // //     address: "RRL Nature Woods, Sompura Gate, Sarjapur Road, Bengaluru, Karnataka 562125",
// // // //     contact: "+91-8494966966",
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Placeholder, ideally specific to Nature Woods
// // // //   },
// // // //   "RRL Palm Altezze": {
// // // //     address: "RRL Palm Altezze, Varthur, Bengaluru, Karnataka 560087",
// // // //     contact: "+91-8494966966",
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Placeholder, ideally specific to Palm Altezze
// // // //   },
// // // //   "RRL Oasis": {
// // // //     address: "Sarjapur Attibele Road, Bengaluru, Karnataka",
// // // //     contact: "+91-8494966966", // Using general contact as specific not provided
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // //   },
// // // //   "RRL Sequoia": {
// // // //     address: "Varthur, Bengaluru, Karnataka",
// // // //     contact: "+91-8494966966", // Using general contact as specific not provided
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // //   },
// // // //   "RRL Complex": {
// // // //     address: "SY NO - 269, BIDURGUPPA VILLAGE, bus-stop, RRL COMPLEX, Sarjapur Attibele Rd, near Biderguppa, Bengaluru, Karnataka 562125",
// // // //     contact: "+91-7337816996",
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // //   },
// // // //   "RRL Towers": {
// // // //     address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru, Karnataka 562125",
// // // //     contact: "+91-7337816996",
// // // //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Generic map for now
// // // //   }
// // // // };

// // // // export function ProjectGallery({ projectName }: ProjectGalleryProps) {
// // // //   const galleryImages = [
// // // //     { src: "/LookProject1.jpeg", alt: "Exterior View" },
// // // //     { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
// // // //     { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" },
// // // //     { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
// // // //     { src: "/LookProject5.jpeg", alt: "Swimming Pool" },
// // // //     { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
// // // //     { src: "/LookProject7.jpeg", alt: "Sample Apartment" },
// // // //     { src: "/LookProject8.jpeg", alt: "Jogging Track" },
// // // //     { src: "/LookProject9.jpeg", alt: "Building Facade" },
// // // //     { src: "/LookProject10.jpeg", alt: "Covered Parking" },
// // // //     { src: "/LookProject11.jpeg", alt: "Community Hall" },
// // // //     { src: "/LookProject12.jpeg", "alt": "Entrance Lobby" },
// // // //   ]

// // // //   const [activeTab, setActiveTab] = useState<"brochure" | "floor-plan-1" | "floor-plan-2" | "address">("brochure")

// // // //   // Safely access project-specific data
// // // //   const currentProjectFloorPlans = floorPlanDetails[projectName] || {};
// // // //   const currentProjectAddress = addressDetails[projectName] || {};

// // // //   const handleDownload = (url?: string, fileName?: string) => {
// // // //     if (url && fileName) {
// // // //       const link = document.createElement("a")
// // // //       link.href = url
// // // //       link.download = fileName
// // // //       document.body.appendChild(link)
// // // //       link.click()
// // // //       document.body.removeChild(link)
// // // //     } else {
// // // //       alert(`Brochure/Floor Plan for ${projectName} is not available for download. Please contact us for more information.`)
// // // //     }
// // // //   }

// // // // const sectionVariants: Variants = {
// // // //   hidden: { opacity: 0, y: 50 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     y: 0,
// // // //     transition: {
// // // //       duration: 0.8,
// // // //       ease: easeOut // ✅ instead of "easeOut"
// // // //     }
// // // //   }
// // // // };


// // // // const imageVariants = {
// // // //   hidden: { opacity: 0, scale: 0.8 },
// // // //   visible: { opacity: 1, scale: 1 },
// // // // };

// // // // const tabContentVariants = {
// // // //   hidden: { opacity: 0, y: 20 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     y: 0,
// // // //     transition: { duration: 0.5, ease: easeOut }, // ✅ replaced string with easing function
// // // //   },
// // // //   exit: {
// // // //     opacity: 0,
// // // //     y: -20,
// // // //     transition: { duration: 0.3, ease: easeIn }, // ✅ replaced string with easing function
// // // //   },
// // // // };

// // // //   return (
// // // //     <motion.section
// // // //       className="py-20 gradient-secondary"
// // // //       initial="hidden"
// // // //       whileInView="visible"
// // // //       viewport={{ once: true, amount: 0.2 }}
// // // //       variants={sectionVariants}
// // // //     >
// // // //       <div className="container mx-auto px-4">
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Look of the Project</h2>
// // // //           <p className="text-xl text-slate-600">Discover Your Perfect Match: Our Exclusive Property Listings</p>
// // // //         </div>

// // // //         <motion.div
// // // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
// // // //           variants={{
// // // //             visible: {
// // // //               transition: {
// // // //                 staggerChildren: 0.1,
// // // //               },
// // // //             },
// // // //           }}
// // // //         >
// // // //           {galleryImages.map((image, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
// // // //               variants={imageVariants}
// // // //             >
// // // //               <Image
// // // //                 src={image.src || "/placeholder.svg"}
// // // //                 alt={`${projectName} - ${image.alt}`}
// // // //                 width={400}
// // // //                 height={300}
// // // //                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// // // //               />
// // // //             </motion.div>
// // // //           ))}
// // // //         </motion.div>

// // // //         <div className="text-center space-y-6">
// // // //           {/* Tab Buttons */}
// // // //           <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
// // // //             <motion.button
// // // //               onClick={() => setActiveTab("brochure")}
// // // //               className={cn(
// // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // //                 activeTab === "brochure"
// // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // //               )}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //             >
// // // //               The Brochure
// // // //             </motion.button>
// // // //             <motion.button
// // // //               onClick={() => setActiveTab("floor-plan-1")}
// // // //               className={cn(
// // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // //                 activeTab === "floor-plan-1"
// // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // //               )}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //             >
// // // //               The Floor Plan
// // // //             </motion.button>
// // // //             <motion.button
// // // //               onClick={() => setActiveTab("floor-plan-2")}
// // // //               className={cn(
// // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // //                 activeTab === "floor-plan-2"
// // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // //               )}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //             >
// // // //               The Floor Plan - 2
// // // //             </motion.button>
// // // //             <motion.button
// // // //               onClick={() => setActiveTab("address")}
// // // //               className={cn(
// // // //                 "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
// // // //                 activeTab === "address"
// // // //                   ? "bg-[#d9a406] text-white shadow-md"
// // // //                   : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
// // // //               )}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //             >
// // // //               The Address
// // // //             </motion.button>
// // // //           </div>

// // // //           {/* Tab Content */}
// // // //           <AnimatePresence mode="wait">
// // // //             <motion.div
// // // //               key={activeTab} // Key changes to trigger exit/enter animations
// // // //               className="bg-white rounded-2xl shadow-xl p-8 text-left max-w-4xl mx-auto"
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               exit="exit"
// // // //               variants={tabContentVariants}
// // // //             >
// // // //               {activeTab === "brochure" && (
// // // //                 <div className="space-y-6">
// // // //                   <p className="text-lg text-slate-600 leading-relaxed">
// // // //                     RRL Builders and Developers Pvt Ltd presents premium apartments at the heart of Bangalore – the Sarjapur Road located in south-east Bangalore, is one of the fastest-growing parts of the city which makes it a perfect & favoured property investment destination.
// // // //                   </p>
// // // //                   <Button
// // // //                     onClick={() => handleDownload(
// // // //                       projectName === "RRL Palacio" ? "/brochures/rrl-palacio-brochure.pdf" : "/brochures/rrl-nature-woods-brochure.pdf",
// // // //                       `${projectName}-Brochure.pdf`
// // // //                     )}
// // // //                     size="lg"
// // // //                     className="w-full bg-black hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
// // // //                   >
// // // //                     <Download className="mr-2 h-5 w-5" />
// // // //                     DOWNLOAD THE BROCHURE
// // // //                   </Button>
// // // //                 </div>
// // // //               )}

// // // //               {activeTab === "floor-plan-1" && (
// // // //                 <div className="space-y-6">
// // // //                   <p className="text-lg text-slate-600 leading-relaxed mb-4">
// // // //                     {currentProjectFloorPlans["floor-plan-1"]?.description || "Floor plan details are not available for this project."}
// // // //                   </p>
// // // //                   {(currentProjectFloorPlans["floor-plan-1"]?.saleableAreas || currentProjectFloorPlans["floor-plan-1"]?.roomDimensions) && (
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                       {currentProjectFloorPlans["floor-plan-1"]?.saleableAreas && (
// // // //                         <div>
// // // //                           <h3 className="font-bold text-slate-900 mb-3">Saleable Areas:</h3>
// // // //                           <ul className="list-disc list-inside text-slate-700 space-y-1">
// // // //                             {currentProjectFloorPlans["floor-plan-1"].saleableAreas.map((area, idx) => (
// // // //                               <li key={idx}>{area}</li>
// // // //                             ))}
// // // //                           </ul>
// // // //                         </div>
// // // //                       )}
// // // //                       {currentProjectFloorPlans["floor-plan-1"]?.roomDimensions && (
// // // //                         <div>
// // // //                           <h3 className="font-bold text-slate-900 mb-3">Room Dimensions:</h3>
// // // //                           <ul className="list-disc list-inside text-slate-700 space-y-1">
// // // //                             {currentProjectFloorPlans["floor-plan-1"].roomDimensions.map((dim, idx) => (
// // // //                               <li key={idx}>{dim}</li>
// // // //                             ))}
// // // //                           </ul>
// // // //                         </div>
// // // //                       )}
// // // //                     </div>
// // // //                   )}
// // // //                   <Button
// // // //                     onClick={() => handleDownload(
// // // //                       currentProjectFloorPlans["floor-plan-1"]?.downloadUrl,
// // // //                       `${projectName}-FloorPlan1.pdf`
// // // //                     )}
// // // //                     size="lg"
// // // //                     className="w-full bg-black hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
// // // //                     disabled={!currentProjectFloorPlans["floor-plan-1"]?.downloadUrl}
// // // //                   >
// // // //                     <Download className="mr-2 h-5 w-5" />
// // // //                     DOWNLOAD THE FLOOR PLAN
// // // //                   </Button>
// // // //                 </div>
// // // //               )}

// // // //               {activeTab === "floor-plan-2" && (
// // // //                 <div className="space-y-6">
// // // //                   <p className="text-lg text-slate-600 leading-relaxed mb-4">
// // // //                     {currentProjectFloorPlans["floor-plan-2"]?.description || "Second floor plan details are not available for this project."}
// // // //                   </p>
// // // //                   {currentProjectFloorPlans["floor-plan-2"]?.roomDimensions && (
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                       <div>
// // // //                         <h3 className="font-bold text-slate-900 mb-3">Room Dimensions:</h3>
// // // //                         <ul className="list-disc list-inside text-slate-700 space-y-1">
// // // //                           {currentProjectFloorPlans["floor-plan-2"].roomDimensions.map((dim, idx) => (
// // // //                             <li key={idx}>{dim}</li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                   <Button
// // // //                     onClick={() => handleDownload(
// // // //                       currentProjectFloorPlans["floor-plan-2"]?.downloadUrl,
// // // //                       `${projectName}-FloorPlan2.pdf`
// // // //                     )}
// // // //                     size="lg"
// // // //                     className="w-full bg-black hover:bg-blue-700 text-white font-semibold py-4 rounded-lg"
// // // //                     disabled={!currentProjectFloorPlans["floor-plan-2"]?.downloadUrl}
// // // //                   >
// // // //                     <Download className="mr-2 h-5 w-5" />
// // // //                     DOWNLOAD THE FLOOR PLAN
// // // //                   </Button>
// // // //                 </div>
// // // //               )}

// // // //               {activeTab === "address" && (
// // // //                 <div className="grid lg:grid-cols-2 gap-8 items-start">
// // // //                   <div className="space-y-4">
// // // //                     <div>
// // // //                       <h3 className="font-bold text-slate-900 mb-2">Address:</h3>
// // // //                       <p className="text-slate-700 leading-relaxed">
// // // //                         {currentProjectAddress.address || "Address details not available."}
// // // //                       </p>
// // // //                     </div>
// // // //                     <div>
// // // //                       <h3 className="font-bold text-slate-900 mb-2">Contact Number:</h3>
// // // //                       <p className="text-slate-700">
// // // //                         {currentProjectAddress.contact || "Contact number not available."}
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
// // // //                     {currentProjectAddress.mapUrl ? (
// // // //                       <iframe
// // // //                         src={currentProjectAddress.mapUrl}
// // // //                         width="100%"
// // // //                         height="100%"
// // // //                         style={{ border: 0 }}
// // // //                         allowFullScreen={true}
// // // //                         loading="lazy"
// // // //                         referrerPolicy="no-referrer-when-downgrade"
// // // //                         title={`${projectName} Location Map`}
// // // //                       ></iframe>
// // // //                     ) : (
// // // //                       <div className="flex items-center justify-center h-full bg-slate-100 text-slate-500">
// // // //                         Map not available for this location.
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </motion.div>
// // // //           </AnimatePresence>
// // // //         </div>
// // // //       </div>
// // // //     </motion.section>
// // // //   )
// // // // }

// // // "use client"

// // // import Image from "next/image"
// // // import { useState } from "react"
// // // import { MapPin, Download } from 'lucide-react'
// // // import { Button } from "@/components/ui/button"
// // // import { cn } from "@/lib/utils"
// // // import { motion, AnimatePresence, Variants, easeOut, easeIn } from "framer-motion";

// // // interface ProjectGalleryProps {
// // //   projectName: string
// // // }

// // // type FloorPlanContent = {
// // //   description: string;
// // //   downloadUrl?: string;
// // // };

// // // type AddressContent = {
// // //   address?: string;
// // //   contact?: string;
// // //   mapUrl?: string;
// // // };

// // // // Data for floor plans and their descriptions/download URLs
// // // const floorPlanDetails: Record<string, { [key: string]: FloorPlanContent }> = {
// // //     "RRL Palacio": { "floor-plan-1": { description: "Spread over 1.53 acres and comprising 140 units, this grand property boasts comfortable and spacious rooms with pleasing views of the city. We have 2, 3 BHK Premium Furniture Apartments", downloadUrl: "/brochures/rrl-palacio-brochure.pdf" } },
// // //     "RRL Nature Woods": { "floor-plan-1": { description: "Located on NH-275, in between Whitefield, Bellandur & Electronic City, this project offers a serene escape. Download the floor plan to see the spacious layouts.", downloadUrl: "/brochures/rrl-nature-woods-brochure.pdf" } },
// // //     "RRL Palm Altezze": { "floor-plan-1": { description: "Discover the thoughtfully designed layouts of RRL Palm Altezze. Our 2 & 3 BHK apartments offer optimal space utilization and modern living.", downloadUrl: "/brochures/rrl-palm-altezze-brochure.pdf" } },
// // //     "RRL Sequoia": { "floor-plan-1": { description: "Detailed floor plans for RRL Sequoia villas, including individual lift and home theatre layouts, are available upon request." } },
// // //     "RRL Towers": { "floor-plan-1": { description: "As a commercial tower, traditional floor plans are not applicable. Please contact us for detailed layouts of office spaces and retail units." } },
// // //     "RRL Complex": { "floor-plan-1": { description: "As a commercial building, traditional floor plans are not applicable. Please contact us for detailed layouts of rental spaces and common areas." } },
// // //     "RRL Oasis": { "floor-plan-1": { description: "As a commercial mall, traditional floor plans are not applicable. Please contact us for detailed layouts of retail spaces and common areas." } },
// // // };

// // // // Data for addresses and map URLs
// // // const addressDetails: Record<string, AddressContent> = {
// // //     "RRL Palacio": { address: "RQMJ+XQ, Sarjapura – Attibele Rd, near OM/Home Classic, Billapura, Bengaluru, Karnataka 562125", contact: "073378 16991", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // //     "RRL Nature Woods": { address: "RRL Nature Woods, Sompura Gate, Sarjapur Road, Bengaluru, Karnataka 562125", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // //     "RRL Palm Altezze": { address: "RRL Palm Altezze, Varthur, Bengaluru, Karnataka 560087", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // //     "RRL Sequoia": { address: "Varthur, Bengaluru, Karnataka", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // //     "RRL Towers": { address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru, Karnataka 562125", contact: "+91-7337816996", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // //     "RRL Complex": { address: "SY NO - 269, BIDURGUPPA VILLAGE, bus-stop, RRL COMPLEX, Sarjapur Attibele Rd, near Biderguppa, Bengaluru, Karnataka 562125", contact: "+91-7337816996", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // //     "RRL Oasis": { address: "Sarjapur Attibele Road, Bengaluru, Karnataka", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // // };

// // // export function ProjectGallery({ projectName }: ProjectGalleryProps) {
// // //   const galleryImages = [
// // //     { src: "/LookProject1.jpeg", alt: "Exterior View" }, { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
// // //     { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" }, { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
// // //     { src: "/LookProject5.jpeg", alt: "Swimming Pool" }, { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
// // //   ]

// // //   const [activeTab, setActiveTab] = useState<"brochure" | "floor-plan" | "address">("brochure")

// // //   const currentProjectFloorPlan = floorPlanDetails[projectName]?.["floor-plan-1"] || {};
// // //   const currentProjectAddress = addressDetails[projectName] || {};
  
// // //   const brochureUrl = projectName === "RRL Palacio" ? "/brochures/rrl-palacio-brochure.pdf" : projectName === "RRL Nature Woods" ? "/brochures/rrl-nature-woods-brochure.pdf" : undefined;

// // //   const sectionVariants: Variants = {
// // //     hidden: { opacity: 0, y: 50 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
// // //   };

// // //   const imageVariants = {
// // //     hidden: { opacity: 0, scale: 0.8 },
// // //     visible: { opacity: 1, scale: 1 },
// // //   };

// // //   const tabContentVariants = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
// // //     exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: easeIn } },
// // //   };

// // //   return (
// // //     <motion.section
// // //       className="py-20 bg-light-gold"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.1 }}
// // //       variants={sectionVariants}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">Look of the Project</h2>
// // //           <p className="text-xl text-gray-700">A Glimpse into Your Future Home</p>
// // //         </div>

// // //         <motion.div
// // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.1 }}
// // //           variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
// // //         >
// // //           {galleryImages.map((image, index) => (
// // //             <motion.div
// // //               key={index}
// // //               className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
// // //               variants={imageVariants}
// // //             >
// // //               <Image
// // //                 src={image.src || "/placeholder.svg"}
// // //                 alt={`${projectName} - ${image.alt}`}
// // //                 width={400} height={300}
// // //                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// // //               />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         <div className="text-center space-y-8">
// // //           <div className="inline-flex flex-wrap justify-center gap-2 mb-8 bg-white/50 p-2 rounded-full border border-gold-200">
// // //             {(["brochure", "floor-plan", "address"] as const).map(tab => (
// // //               <button
// // //                 key={tab}
// // //                 onClick={() => setActiveTab(tab)}
// // //                 className={cn(
// // //                   "px-6 py-3 rounded-full font-semibold transition-all duration-300 relative",
// // //                   "text-black hover:text-black/80"
// // //                 )}
// // //               >
// // //                 {activeTab === tab && (
// // //                   <motion.div layoutId="active-tab" className="absolute inset-0 bg-gold-500 rounded-full" />
// // //                 )}
// // //                 <span className="relative z-10 capitalize">{tab.replace("-", " ")}</span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <AnimatePresence mode="wait">
// // //             <motion.div
// // //               key={activeTab}
// // //               className="bg-white rounded-2xl shadow-xl p-8 text-left max-w-4xl mx-auto"
// // //               initial="hidden" animate="visible" exit="exit"
// // //               variants={tabContentVariants}
// // //             >
// // //               {activeTab === "brochure" && (
// // //                 <div className="space-y-6 text-center">
// // //                   <h3 className="text-2xl font-bold text-black">Project Brochure</h3>
// // //                   <p className="text-lg text-gray-700 leading-relaxed">
// // //                     Download the official brochure to get a comprehensive overview of {projectName}, including amenities, features, and project highlights.
// // //                   </p>
// // //                   <Button asChild size="lg" disabled={!brochureUrl} className="bg-gold-500 hover:bg-gold-600 text-black font-semibold py-4 rounded-full w-full sm:w-auto">
// // //                     <a href={brochureUrl} download={`${projectName}-Brochure.pdf`}>
// // //                       <Download className="mr-2 h-5 w-5" /> Download Brochure
// // //                     </a>
// // //                   </Button>
// // //                 </div>
// // //               )}
// // //               {activeTab === "floor-plan" && (
// // //                 <div className="space-y-6 text-center">
// // //                   <h3 className="text-2xl font-bold text-black">Floor Plan</h3>
// // //                   <p className="text-lg text-gray-700 leading-relaxed mb-4">
// // //                     {currentProjectFloorPlan.description}
// // //                   </p>
// // //                   <Button asChild size="lg" disabled={!currentProjectFloorPlan.downloadUrl} className="bg-gold-500 hover:bg-gold-600 text-black font-semibold py-4 rounded-full w-full sm:w-auto">
// // //                     <a href={currentProjectFloorPlan.downloadUrl} download={`${projectName}-Floor-Plan.pdf`}>
// // //                       <Download className="mr-2 h-5 w-5" /> Download Floor Plan
// // //                     </a>
// // //                   </Button>
// // //                 </div>
// // //               )}
// // //               {activeTab === "address" && (
// // //                 <div className="grid lg:grid-cols-2 gap-8 items-center">
// // //                   <div className="space-y-4">
// // //                     <div>
// // //                       <h3 className="font-bold text-black mb-2">Address:</h3>
// // //                       <p className="text-gray-700 leading-relaxed">{currentProjectAddress.address}</p>
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="font-bold text-black mb-2">Contact for Visit:</h3>
// // //                       <p className="text-gray-700">{currentProjectAddress.contact}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
// // //                     <iframe src={currentProjectAddress.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${projectName} Location Map`}></iframe>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </motion.div>
// // //           </AnimatePresence>
// // //         </div>
// // //       </div>
// // //     </motion.section>
// // //   )
// // // }
// // "use client"

// // import Image from "next/image"
// // import { useState } from "react"
// // import { MapPin, Download } from 'lucide-react'
// // import { Button } from "@/components/ui/button"
// // import { cn } from "@/lib/utils"
// // import { motion, AnimatePresence, Variants, easeOut, easeIn } from "framer-motion";

// // interface ProjectGalleryProps {
// //   projectName: string
// // }

// // type FloorPlanContent = {
// //   description: string;
// //   downloadUrl?: string;
// // };

// // type AddressContent = {
// //   address?: string;
// //   contact?: string;
// //   mapUrl?: string;
// // };

// // const floorPlanDetails: Record<string, { [key: string]: FloorPlanContent }> = {
// //     "RRL Palacio": { "floor-plan-1": { description: "Spread over 1.53 acres and comprising 140 units, this grand property boasts comfortable and spacious rooms with pleasing views of the city. We have 2, 3 BHK Premium Furniture Apartments", downloadUrl: "/brochures/rrl-palacio-brochure.pdf" } },
// //     "RRL Nature Woods": { "floor-plan-1": { description: "Located on NH-275, in between Whitefield, Bellandur & Electronic City, this project offers a serene escape. Download the floor plan to see the spacious layouts.", downloadUrl: "/brochures/rrl-nature-woods-brochure.pdf" } },
// //     "RRL Palm Altezze": { "floor-plan-1": { description: "Discover the thoughtfully designed layouts of RRL Palm Altezze. Our 2 & 3 BHK apartments offer optimal space utilization and modern living.", downloadUrl: "/brochures/rrl-palm-altezze-brochure.pdf" } },
// //     "RRL Sequoia": { "floor-plan-1": { description: "Detailed floor plans for RRL Sequoia villas, including individual lift and home theatre layouts, are available upon request." } },
// //     "RRL Towers": { "floor-plan-1": { description: "As a commercial tower, traditional floor plans are not applicable. Please contact us for detailed layouts of office spaces and retail units." } },
// //     "RRL Complex": { "floor-plan-1": { description: "As a commercial building, traditional floor plans are not applicable. Please contact us for detailed layouts of rental spaces and common areas." } },
// //     "RRL Oasis": { "floor-plan-1": { description: "As a commercial mall, traditional floor plans are not applicable. Please contact us for detailed layouts of retail spaces and common areas." } },
// // };

// // const addressDetails: Record<string, AddressContent> = {
// //     "RRL Palacio": { address: "RQMJ+XQ, Sarjapura – Attibele Rd, near OM/Home Classic, Billapura, Bengaluru, Karnataka 562125", contact: "073378 16991", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// //     "RRL Nature Woods": { address: "RRL Nature Woods, Sompura Gate, Sarjapur Road, Bengaluru, Karnataka 562125", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// //     "RRL Palm Altezze": { address: "RRL Palm Altezze, Varthur, Bengaluru, Karnataka 560087", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// //     "RRL Sequoia": { address: "Varthur, Bengaluru, Karnataka", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// //     "RRL Towers": { address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru, Karnataka 562125", contact: "+91-7337816996", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// //     "RRL Complex": { address: "SY NO - 269, BIDURGUPPA VILLAGE, bus-stop, RRL COMPLEX, Sarjapur Attibele Rd, near Biderguppa, Bengaluru, Karnataka 562125", contact: "+91-7337816996", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// //     "RRL Oasis": { address: "Sarjapur Attibele Road, Bengaluru, Karnataka", contact: "+91-8494966966", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9000000000004!2d77.7012345!3d12.899999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131111111111%3A0x1111111111111111!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" },
// // };

// // export function ProjectGallery({ projectName }: ProjectGalleryProps) {
// //   const galleryImages = [
// //     { src: "/LookProject1.jpeg", alt: "Exterior View" }, { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
// //     { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" }, { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
// //     { src: "/LookProject5.jpeg", alt: "Swimming Pool" }, { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
// //     { src: "/LookProject7.jpeg", alt: "Sample Apartment" }, { src: "/LookProject8.jpeg", alt: "Jogging Track" },
// //     { src: "/LookProject9.jpeg", alt: "Building Facade" }, { src: "/LookProject10.jpeg", alt: "Covered Parking" },
// //     { src: "/LookProject11.jpeg", alt: "Community Hall" }, { src: "/LookProject12.jpeg", alt: "Entrance Lobby" },
// //   ]

// //   const [activeTab, setActiveTab] = useState<"brochure" | "floor-plan" | "address">("brochure")

// //   const currentProjectFloorPlan = floorPlanDetails[projectName]?.["floor-plan-1"] || {};
// //   const currentProjectAddress = addressDetails[projectName] || {};
  
// //   const brochureUrl = projectName === "RRL Palacio" ? "/brochures/rrl-palacio-brochure.pdf" : projectName === "RRL Nature Woods" ? "/brochures/rrl-nature-woods-brochure.pdf" : undefined;

// //   const sectionVariants: Variants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
// //   };

// //   const imageVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: { opacity: 1, scale: 1 },
// //   };

// //   const tabContentVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
// //     exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: easeIn } },
// //   };

// //   return (
// //     <motion.section
// //       className="py-20 bg-light-gold"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.1 }}
// //       variants={sectionVariants}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">Look of the Project</h2>
// //           <p className="text-xl text-gray-700">A Glimpse into Your Future Home</p>
// //         </div>

// //         <motion.div
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.1 }}
// //           variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
// //         >
// //           {galleryImages.map((image, index) => (
// //             <motion.div
// //               key={index}
// //               className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
// //               variants={imageVariants}
// //             >
// //               <Image
// //                 src={image.src || "/placeholder.svg"}
// //                 alt={`${projectName} - ${image.alt}`}
// //                 width={400} height={300}
// //                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
// //               />
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         <div className="text-center space-y-8">
// //           <div className="inline-flex flex-wrap justify-center gap-2 mb-8 bg-white/50 p-2 rounded-full border border-gold-200">
// //             {(["brochure", "floor-plan", "address"] as const).map(tab => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={cn(
// //                   "px-6 py-3 rounded-full font-semibold transition-all duration-300 relative",
// //                   "text-black hover:text-black/80"
// //                 )}
// //               >
// //                 {activeTab === tab && (
// //                   <motion.div layoutId="active-tab" className="absolute inset-0 bg-gold-500 rounded-full" />
// //                 )}
// //                 <span className="relative z-10 capitalize">{tab.replace("-", " ")}</span>
// //               </button>
// //             ))}
// //           </div>

// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={activeTab}
// //               className="bg-white rounded-2xl shadow-xl p-8 text-left max-w-4xl mx-auto"
// //               initial="hidden" animate="visible" exit="exit"
// //               variants={tabContentVariants}
// //             >
// //               {activeTab === "brochure" && (
// //                 <div className="space-y-6 text-center">
// //                   <h3 className="text-2xl font-bold text-black">Project Brochure</h3>
// //                   <p className="text-lg text-gray-700 leading-relaxed">
// //                     Download the official brochure to get a comprehensive overview of {projectName}, including amenities, features, and project highlights.
// //                   </p>
// //                   <Button asChild size="lg" disabled={!brochureUrl} className="bg-gold-500 hover:bg-gold-600 text-black font-semibold py-4 rounded-full w-full sm:w-auto">
// //                     <a href={brochureUrl} download={`${projectName}-Brochure.pdf`}>
// //                       <Download className="mr-2 h-5 w-5" /> Download Brochure
// //                     </a>
// //                   </Button>
// //                 </div>
// //               )}
// //               {activeTab === "floor-plan" && (
// //                 <div className="space-y-6 text-center">
// //                   <h3 className="text-2xl font-bold text-black">Floor Plan</h3>
// //                   <p className="text-lg text-gray-700 leading-relaxed mb-4">
// //                     {currentProjectFloorPlan.description}
// //                   </p>
// //                   <Button asChild size="lg" disabled={!currentProjectFloorPlan.downloadUrl} className="bg-gold-500 hover:bg-gold-600 text-black font-semibold py-4 rounded-full w-full sm:w-auto">
// //                     <a href={currentProjectFloorPlan.downloadUrl} download={`${projectName}-Floor-Plan.pdf`}>
// //                       <Download className="mr-2 h-5 w-5" /> Download Floor Plan
// //                     </a>
// //                   </Button>
// //                 </div>
// //               )}
// //               {activeTab === "address" && (
// //                 <div className="grid lg:grid-cols-2 gap-8 items-center">
// //                   <div className="space-y-4">
// //                     <div>
// //                       <h3 className="font-bold text-black mb-2">Address:</h3>
// //                       <p className="text-gray-700 leading-relaxed">{currentProjectAddress.address}</p>
// //                     </div>
// //                     <div>
// //                       <h3 className="font-bold text-black mb-2">Contact for Visit:</h3>
// //                       <p className="text-gray-700">{currentProjectAddress.contact}</p>
// //                     </div>
// //                   </div>
// //                   <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
// //                     <iframe src={currentProjectAddress.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${projectName} Location Map`}></iframe>
// //                   </div>
// //                 </div>
// //               )}
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import { MapPin, Download } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import { motion, AnimatePresence } from "framer-motion";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// // Assuming data structures are defined elsewhere as they were before
// // FloorPlanContent, AddressContent, floorPlanDetails, addressDetails types/consts

// interface ProjectGalleryProps {
//   projectName: string
// }

// // Data would be here
// const floorPlanDetails: Record<string, any> = { /* ... your floor plan data ... */ };
// const addressDetails: Record<string, any> = { /* ... your address data ... */ };

// export function ProjectGallery({ projectName }: ProjectGalleryProps) {
//   const galleryImages = [
//     { src: "/LookProject1.jpeg", alt: "Exterior View" }, { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
//     { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" }, { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
//     { src: "/LookProject5.jpeg", alt: "Swimming Pool" }, { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
//     { src: "/LookProject7.jpeg", alt: "Sample Apartment" }, { src: "/LookProject8.jpeg", alt: "Jogging Track" },
//     { src: "/LookProject9.jpeg", alt: "Building Facade" }, { src: "/LookProject10.jpeg", alt: "Covered Parking" },
//     { src: "/LookProject11.jpeg", alt: "Community Hall" }, { src: "/LookProject12.jpeg", alt: "Entrance Lobby" },
//   ];

//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   const openLightbox = (index: number) => {
//     setLightboxIndex(index);
//     setLightboxOpen(true);
//   };
  
//   // Rest of the component logic (activeTab, data fetching etc.) remains the same
//   const [activeTab, setActiveTab] = useState<"brochure" | "floor-plan" | "address">("brochure")
//   const currentProjectFloorPlan = floorPlanDetails[projectName]?.["floor-plan-1"] || {};
//   const currentProjectAddress = addressDetails[projectName] || {};
//   const brochureUrl = projectName === "RRL Palacio" ? "/brochures/rrl-palacio-brochure.pdf" : projectName === "RRL Nature Woods" ? "/brochures/rrl-nature-woods-brochure.pdf" : undefined;


//   return (
//     <>
//       <motion.section
//         className="py-24 bg-light-gold"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">Project Gallery</h2>
//             <p className="text-xl text-gray-700">A Glimpse into Your Future Home</p>
//           </div>

//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//             variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{once: true}}
//           >
//             {galleryImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative aspect-square"
//                 variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
//                 onClick={() => openLightbox(index)}
//               >
//                 <Image
//                   src={image.src || "/placeholder.svg"}
//                   alt={`${projectName} - ${image.alt}`}
//                   fill
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <p className="text-white font-bold text-lg">{image.alt}</p>
//                  </div>
//               </motion.div>
//             ))}
//           </motion.div>

//            {/* ... Rest of the tab section logic from previous steps ... */}

//         </div>
//       </motion.section>
      
//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         slides={galleryImages}
//         index={lightboxIndex}
//       />
//     </>
//   )
// }


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