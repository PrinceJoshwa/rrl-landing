// // import { ProjectHero } from "@/components/projects/project-hero"
// // import { ProjectDetails } from "@/components/projects/project-details"
// // import { ProjectAmenities } from "@/components/projects/project-amenities"
// // import { ProjectSpecifications } from "@/components/projects/project-specifications"
// // import { ProjectGallery } from "@/components/projects/project-gallery"
// // import { ContactForm } from "@/components/contact/contact-form"

// // export default function PalmAltezzePage() {
// //   const projectData = {
// //     name: "RRL Palm Altezze",
// //     subtitle: "2 & 3 BHK Apartments in Varthur, Bangalore",
// //     description:
// //       "RRL Builders and Developers presents our Premium 2 & 3 BHK Apartments in Varthur in the heart of the eastern part of Bangalore North. The Varthur is near Sarjapur Layout, Balagere and Varthur Road. This locality has 200+ properties to buy and 90+ properties to rent. The residents of Varthur rated this locality at 4/5 in terms of connectivity, whereas for safety, they rated it 4/5. As noted by 99acres, the Year-on-Year average price for Apartments in Varthur is around 38.9%. The neighbouring areas offering properties in the same price segment are Balagere, Siddapura, Thubarahalli, Gunjur.",
// //     status: "Under Construction",
// //     heroImage:
// //       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/palmalt.jpg-TsgHUHy8mq8OkWoBefDX1a8aQsqr4a.jpeg", // palmalt.jpg
// //     features: [
// //       "2 BHK and 3 BHK Premium Flats at Affordable cost.",
// //       "Located along State Highway 35, which connects it to Sarjapur, Whitefield, Brookfield and various other areas",
// //       "Nallurahalli bus stand, Nallurahalli metro station, Kajjisona industrial area metro station offer connectivity to Varthur.",
// //       "Leading hospitals, such as Hairline International, Government Hospital, Agarwal Eye Hospital are located in and around the area",
// //       "Several educational institutions around the locality include Bright Beginnings Preschool, the Dunmore House Preschool.",
// //       "Residents enjoy access to active shopping and recreational hubs such as Looking Good Furniture, Vidyapeeka Multiplex, Innovative Multiplex.",
// //       "RRL Aerospace Museum, Kundalahalli Lake and Nallurahalli Lake are a few popular tourist destinations within 8 km radius",
// //     ],
// //     // Assuming similar amenities and specifications as other residential projects if not explicitly provided
// //     // You can adjust these or remove if not applicable for this project
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
// //         "Flooring: Vitrified tiles for entire flooring in bedrooms, living and balconies. Granite flooring for common areas",
// //         "Bathroom: Floor - Anti skid ceramic tiles flooring. And, Walls - Glazed tile dado upto 7' height",
// //         "Paint: External walls - Apex paints. And Internal walls - Emulsion paints",
// //         "Windows: 3 Track fabrication windows for living and bedroom with safety grills and mosquito mesh. & 2 track for kitchen and bathroom with safety grills",
// //       ],
// //       services: [
// //         "Sanitary: Jaguar CP fittings and Taps or Hindware Sanitary with Geyser provision",
// //         "Electricals: Concealed copper wiring with Anchor/Roma switches and sockets",
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
// //       {/* Assuming Palm Altezze has similar amenities and specifications as other residential projects */}
// //       <ProjectAmenities />
// //       <ProjectSpecifications specifications={projectData.specifications} />
// //       <ProjectGallery projectName="RRL Palm Altezze" />
// //       <ContactForm />
// //     </>
// //   )
// // }
// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   Phone,
//   Download,
//   Building2,
//   Leaf,
//   Users,
//   Zap,
//   Train,
//   Hospital,
//   BookOpen,
//   ShoppingCart,
//   Award,
//   Mail,
//   MapPin,
// } from "lucide-react"
// import type React from "react"

// export default function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     setFormData({ name: "", email: "", phone: "", message: "" })
//   }

//   // Hero Section
//   const HeroSection = () => (
//     <section className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-40"
//         style={{
//           backgroundImage:
//             "url(/placeholder.svg?height=1080&width=1920&query=modern-luxury-apartment-building-exterior)",
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
//       <div className="relative h-full flex items-center">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6 z-10">
//               <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
//                 <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
//                 Just Launched
//               </div>
//               <div className="space-y-4">
//                 <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//                   Own Your <span className="text-blue-600">Dream Home</span>
//                 </h1>
//                 <p className="text-xl text-gray-600">Premium 2 & 3 BHK Apartments in Varthur, Bangalore</p>
//               </div>
//               <div className="grid grid-cols-3 gap-4 py-6">
//                 <div className="space-y-1">
//                   <p className="text-3xl font-bold text-blue-600">₹1CR</p>
//                   <p className="text-sm text-gray-600">Onwards</p>
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-3xl font-bold text-blue-600">23</p>
//                   <p className="text-sm text-gray-600">Floors</p>
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-3xl font-bold text-blue-600">30+</p>
//                   <p className="text-sm text-gray-600">Amenities</p>
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
//                   <Phone className="w-4 h-4" />
//                   Call Now: 84 94 966 966
//                 </Button>
//                 <Button size="lg" variant="outline" className="gap-2 bg-transparent">
//                   <Download className="w-4 h-4" />
//                   Download Brochure
//                 </Button>
//               </div>
//               <div className="flex items-center gap-2 text-gray-700 pt-4">
//                 <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="font-semibold">Varthur, Bangalore</span>
//               </div>
//             </div>
//             <div className="hidden lg:block relative h-full">
//               <img
//                 src="/palm-altezze/palm-altezze (18).jpeg"
//                 alt="RRL Palm Altezze Building"
//                 className="w-full h-full object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </div>
//     </section>
//   )

//   // Overview Section
//   const OverviewSection = () => {
//     const highlights = [
//       {
//         icon: Building2,
//         title: "Premium Construction",
//         description: "RCC framed structure with Mivan construction technology",
//       },
//       {
//         icon: Leaf,
//         title: "92% Open Space",
//         description: "Abundant greenery and landscaped gardens throughout",
//       },
//       {
//         icon: Users,
//         title: "Family Focused",
//         description: "30+ world-class amenities for all age groups",
//       },
//       {
//         icon: Zap,
//         title: "100% Power Backup",
//         description: "Generator backup for flats, lifts, and common areas",
//       },
//     ]

//     return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">A Lifestyle That Stands Tall</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Solar-powered common spaces, lower bills, and brighter living. Experience premium residential living
//               redefined.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, index) => {
//               const Icon = item.icon
//               return (
//                 <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
//                   <div className="flex flex-col items-start gap-4">
//                     <div className="p-3 bg-blue-100 rounded-lg">
//                       <Icon className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 </Card>
//               )
//             })}
//           </div>
//           <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 md:p-12">
//             <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 "2 BHK and 3 BHK Premium Flats",
//                 "Located along State Highway 35",
//                 "Close to Whitefield & Brookfield",
//                 "Near Nallurahalli Metro Station",
//                 "Leading hospitals nearby",
//                 "Top educational institutions",
//                 "Shopping & recreational hubs",
//                 "Tourist destinations within 8km",
//                 "Well-connected to all major areas",
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
//                     <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // Amenities Section
//   const AmenitiesSection = () => {
//    const amenities = [
//   { name: "Reception Hall", image: "/palm-altezze/palm-altezze (1).jpeg" },
//   { name: "Lounge Area", image: "/palm-altezze/palm-altezze (2).jpeg" },
//   { name: "Lounge / Seating Area", image: "/palm-altezze/palm-altezze (3).jpeg" },
//   { name: "Kids Play Area Indoor", image: "/palm-altezze/palm-altezze (4).jpeg" },
//   { name: "Library / Reading Lounge", image: "/palm-altezze/palm-altezze (5).jpeg" },
//   { name: "Kids Creche / Play School", image: "/palm-altezze/palm-altezze (6).jpeg" },
//   { name: "Well-equipped Gymnasium", image: "/palm-altezze/palm-altezze (7).jpeg" },
//   { name: "Reception Desk", image: "/palm-altezze/palm-altezze (8).jpeg" },
//   { name: "Billiards / Pool Table", image: "/palm-altezze/palm-altezze (9).jpeg" },
//   { name: "Mini Theatre", image: "/palm-altezze/palm-altezze (10).jpeg" },
//   { name: "Gymnasium", image: "/palm-altezze/palm-altezze (11).jpeg" },
//   { name: "Party Hall", image: "/palm-altezze/palm-altezze (12).jpeg" },
//   { name: "Clubhouse Exterior", image: "/palm-altezze/palm-altezze (13).jpeg" },
//   { name: "Clubhouse Rooftop", image: "/palm-altezze/palm-altezze (14).jpeg" },
//   { name: "Vertical Garden / Green Wall", image: "/palm-altezze/palm-altezze (15).jpeg" },
//   { name: "Squash Court", image: "/palm-altezze/palm-altezze (16).jpeg" },
//   { name: "Swimming Pool", image: "/palm-altezze/palm-altezze (17).jpeg" },
//   { name: "High-rise Apartment Building", image: "/palm-altezze/palm-altezze (18).jpeg" },
//   { name: "Jacuzzi", image: "/palm-altezze/palm-altezze (19).jpeg" },
//   { name: "Building Exterior View", image: "/palm-altezze/palm-altezze (20).jpeg" },
//   { name: "Building Facade / Balconies", image: "/palm-altezze/palm-altezze (21).jpeg" },
//   { name: "Landscaped Walkway", image: "/palm-altezze/palm-altezze (22).jpeg" },
//   { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
//   { name: "Jogging Track", image: "/palm-altezze/palm-altezze (24).jpeg" },
//   { name: "Landscaped Garden", image: "/palm-altezze/palm-altezze (25).jpeg" },
//   { name: "Landscaped Garden with Seating", image: "/palm-altezze/palm-altezze (26).jpeg" },
//   { name: "Amphitheatre", image: "/palm-altezze/palm-altezze (27).jpeg" },
//   { name: "Central Garden / Seating Area", image: "/palm-altezze/palm-altezze (28).jpeg" },
//   { name: "Children Play Area", image: "/palm-altezze/palm-altezze (29).jpeg" },
//   { name: "Children Play Area", image: "/palm-altezze/palm-altezze (30).jpeg" },
//   { name: "Park and Play Area", image: "/palm-altezze/palm-altezze (31).jpeg" },
//   { name: "Landscaped Lawn", image: "/palm-altezze/palm-altezze (32).jpeg" },
//   { name: "Swimming Pool View", image: "/palm-altezze/palm-altezze (33).jpeg" },
//   { name: "Multipurpose Court", image: "/palm-altezze/palm-altezze (34).jpeg" },
//   { name: "Rooftop Soccer Pitch", image: "/palm-altezze/palm-altezze (35).jpeg" },
//   { name: "Aerial View of Complex", image: "/palm-altezze/palm-altezze (36).jpeg" },
//   { name: "Aerial View of Tower", image: "/palm-altezze/palm-altezze (37).jpeg" },
//   // { name: "Organic Waste Converter", image: "/palm-altezze/palm-altezze (38).jpeg" },
//   // { name: "Rain Water Harvesting", image: "/palm-altezze/palm-altezze (39).jpeg" },
//   // { name: "Planting Deck", image: "/palm-altezze/palm-altezze (40).jpeg" },
//   { name: "Reception Hall", image: "/palm-altezze/palm-altezze (1).jpeg" },
//   { name: "Lounge Area", image: "/palm-altezze/palm-altezze (2).jpeg" },
//   { name: "Lounge / Seating Area", image: "/palm-altezze/palm-altezze (3).jpeg" },
// ];


//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">World-Class Amenities</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               RRL Palm Altezze features 40+ premium amenities that cater to every age group. From infinity-edge pools to
//               yoga decks, your lifestyle extends far beyond your home.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {amenities.map((amenity, index) => (
//               <Card
//                 key={index}
//                 className="overflow-hidden cursor-pointer group"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div className="relative h-40 overflow-hidden bg-gray-200">
//                   <img
//                     src={amenity.image || "/placeholder.svg"}
//                     alt={amenity.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
//                     <p className="text-white font-semibold text-sm">{amenity.name}</p>
//                   </div>
//                 </div>
//                 {hoveredIndex === index && (
//                   <div className="p-3 bg-blue-50">
//                     <p className="text-sm font-medium text-blue-600">{amenity.name}</p>
//                   </div>
//                 )}
//               </Card>
//             ))}
//           </div>
//           <div className="mt-16 bg-white rounded-xl p-8 md:p-12 border border-gray-200">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities Overview</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h4 className="font-bold text-lg text-blue-600 mb-4">Ground Floor</h4>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Reception Hall</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Library</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Indoor Kids Play Area</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Indoor Games</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Meditation Hall</span>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg text-blue-600 mb-4">1st & 2nd Floor</h4>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Lounge Area with Party Hall</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Ultra Gym with Steam & Sauna Bath</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Cardio Exercise Room</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-600 font-bold">•</span>
//                     <span>Mini Theatre</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // Specifications Section
//   const SpecificationsSection = () => (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium Specifications</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Built with world-class materials and cutting-edge construction technology
//           </p>
//         </div>
//         <Tabs defaultValue="structure" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 mb-8">
//             <TabsTrigger value="structure">Structure</TabsTrigger>
//             <TabsTrigger value="architecture">Architecture</TabsTrigger>
//             <TabsTrigger value="services">Services</TabsTrigger>
//           </TabsList>
//           <TabsContent value="structure" className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { title: "Framed Structure", desc: "Mivan Constructions - Advanced formwork system" },
//                 { title: "External Walls", desc: '8" RCC walls with texture finish plastering' },
//                 { title: "Internal Walls", desc: '6" solid blocks with smooth cement finish' },
//                 { title: "Earthquake Resistant", desc: "Designed as per relevant IS codes" },
//                 { title: "Automation", desc: "Pump and light provision automated" },
//                 { title: "Structural Efficiency", desc: "Optimized design for maximum space" },
//               ].map((item, index) => (
//                 <Card key={index} className="p-6 border-l-4 border-l-blue-600">
//                   <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//           <TabsContent value="architecture" className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { title: "Main Doors", desc: "Teak wood frame with Veneer polish" },
//                 { title: "Internal Doors", desc: "Salwood frames with designer skin molded shutters" },
//                 { title: "Windows", desc: "UPVC windows with mosquito mesh" },
//                 { title: "Flooring", desc: "2'x4' vitrified tiles for living, dining, kitchen & bedrooms" },
//                 { title: "Balcony Flooring", desc: '15"x15" Anti-skid tiles' },
//                 { title: "Bathroom Tiles", desc: "2'x1' anti-skid ceramic tiles with 7' height dado" },
//                 { title: "Painting", desc: "2 coats Nippon Putty, primer & 2 coats emulsion" },
//                 { title: "Exterior Paint", desc: "Nippon Exterior for weather resistance" },
//               ].map((item, index) => (
//                 <Card key={index} className="p-6 border-l-4 border-l-blue-600">
//                   <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//           <TabsContent value="services" className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { title: "Plumbing", desc: "Supreme/Ashirvad CPVC fittings with Jaguar/Parryware sanitary" },
//                 { title: "Electrical", desc: "Concealed Finolex/Anchor copper wiring with Anchor Roma switches" },
//                 { title: "AC Points", desc: "AC point in bedrooms with separate circuits" },
//                 { title: "Geyser", desc: "Geyser provision with separate circuit" },
//                 { title: "Communication", desc: "Telephone & TV points in living and master bedroom" },
//                 { title: "Water Supply", desc: "Bore well with overhead tank supply" },
//                 { title: "Lifts", desc: "3 fully automatic lifts - 2x8 passenger, 1x service lift (KONE/OTIS)" },
//                 { title: "Generator Backup", desc: "100% power backup for flats, lifts, motor & common areas" },
//               ].map((item, index) => (
//                 <Card key={index} className="p-6 border-l-4 border-l-blue-600">
//                   <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   )

//   // Floor Plans Section
//   const FloorPlansSection = () => {
//     const floorPlans = [
//       {
//         type: "2 BHK",
//         facing: "North",
//         area: "1265 sq.ft",
//         description: "Compact and efficient layout perfect for small families",
//       },
//       {
//         type: "2 BHK",
//         facing: "North",
//         area: "1495 sq.ft",
//         description: "Spacious 2-bedroom with premium finishes",
//       },
//       {
//         type: "3 BHK",
//         facing: "North",
//         area: "1630 sq.ft",
//         description: "Luxurious 3-bedroom with ample living space",
//       },
//       {
//         type: "3 BHK",
//         facing: "East",
//         area: "1560 sq.ft",
//         description: "East-facing with natural light throughout",
//       },
//       {
//         type: "3 BHK",
//         facing: "East",
//         area: "1510 sq.ft",
//         description: "Premium 3-bedroom with optimized layout",
//       },
//     ]

//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Floor Plans</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Thoughtfully designed layouts with optimal space utilization
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
//             {floorPlans.map((plan, index) => (
//               <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
//                 <div className="space-y-4">
//                   <div className="bg-blue-100 rounded-lg p-4">
//                     <p className="text-2xl font-bold text-blue-600">{plan.type}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600">Facing</p>
//                     <p className="font-semibold text-gray-900">{plan.facing}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600">Saleable Area</p>
//                     <p className="font-semibold text-gray-900">{plan.area}</p>
//                   </div>
//                   <p className="text-sm text-gray-600 italic">{plan.description}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <Card className="overflow-hidden">
//               <div className="bg-gray-200 h-96 flex items-center justify-center">
//                 <img
//                   src="/placeholder.svg?height=400&width=500"
//                   alt="Master Plan"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-lg text-gray-900 mb-2">Master Plan</h3>
//                 <p className="text-gray-600 text-sm">
//                   Comprehensive site layout showing all amenities, open spaces, and building placement
//                 </p>
//               </div>
//             </Card>
//             <Card className="overflow-hidden">
//               <div className="bg-gray-200 h-96 flex items-center justify-center">
//                 <img
//                   src="/placeholder.svg?height=400&width=500"
//                   alt="Typical Floor Plan"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-lg text-gray-900 mb-2">Typical Floor Plan</h3>
//                 <p className="text-gray-600 text-sm">
//                   Detailed layout of a typical residential floor with all apartment configurations
//                 </p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // Connectivity Section
//   const ConnectivitySection = () => {
//     const connectivity = [
//       {
//         icon: Train,
//         title: "Public Transport",
//         items: [
//           "Purple Line Metro - Near Whitefield",
//           "BMTC Buses",
//           "Ola, Uber, Rapido",
//           "State Highway 35 connectivity",
//         ],
//       },
//       {
//         icon: Hospital,
//         title: "Hospitals Nearby",
//         items: [
//           "Manipal Hospital, Varthur",
//           "City Hospital",
//           "Suraksha Multispeciality Hospital",
//           "Silicon City Hospital Pvt. Ltd.",
//         ],
//       },
//       {
//         icon: BookOpen,
//         title: "Schools Nearby",
//         items: ["Vasishta", "Samruddhi", "Vagdevi", "Chrysalis High"],
//       },
//       {
//         icon: ShoppingCart,
//         title: "Malls Nearby",
//         items: ["Phoenix Marketcity - Whitefield", "Virginia Mall", "Park Square Mall", "Inorbit Mall"],
//       },
//     ]

//     return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Prime Location</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Strategically located in the heart of IT Hub with excellent connectivity to all major areas
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {connectivity.map((item, index) => {
//               const Icon = item.icon
//               return (
//                 <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-3 bg-blue-100 rounded-lg">
//                       <Icon className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
//                   </div>
//                   <ul className="space-y-2">
//                     {item.items.map((subitem, subindex) => (
//                       <li key={subindex} className="flex items-start gap-2 text-sm text-gray-600">
//                         <span className="text-blue-600 font-bold mt-1">→</span>
//                         <span>{subitem}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               )
//             })}
//           </div>
//           <Card className="overflow-hidden">
//             <div className="bg-gray-200 h-96 flex items-center justify-center">
//               <img
//                 src="/placeholder.svg?height=400&width=1000"
//                 alt="Location Map"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="font-bold text-lg text-gray-900 mb-2">Varthur, Bangalore</h3>
//               <p className="text-gray-600">
//                 RRL Palm Altezze is strategically positioned in Varthur, one of Bangalore's fastest-growing residential
//                 areas, offering seamless connectivity to Whitefield, Sarjapur, and other major business hubs.
//               </p>
//             </div>
//           </Card>
//         </div>
//       </section>
//     )
//   }

//   // FAQs Section
//   const FAQsSection = () => {
//     const faqs = [
//       {
//         category: "General",
//         questions: [
//           {
//             q: "What is the total area of RRL Palm Altezze?",
//             a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors.",
//           },
//           {
//             q: "How many units are there per floor?",
//             a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments with varying configurations.",
//           },
//           {
//             q: "What is the price range?",
//             a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments.",
//           },
//         ],
//       },
//       {
//         category: "Amenities",
//         questions: [
//           {
//             q: "How many amenities are available?",
//             a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts, and much more.",
//           },
//           {
//             q: "Is there a clubhouse?",
//             a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities spread across ground, 1st, and 2nd floors.",
//           },
//           {
//             q: "Are there facilities for children?",
//             a: "Yes, we have indoor and outdoor children's play areas, kids' pool, and various recreational facilities.",
//           },
//         ],
//       },
//       {
//         category: "Construction & Specifications",
//         questions: [
//           {
//             q: "What construction technology is used?",
//             a: "We use Mivan construction technology with RCC framed structure designed as per IS codes for earthquake resistance.",
//           },
//           {
//             q: "What is the power backup arrangement?",
//             a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting.",
//           },
//           {
//             q: "What are the flooring specifications?",
//             a: "Vitrified tiles (2'x4') for living, dining, kitchen & bedrooms, and anti-skid tiles for balconies.",
//           },
//         ],
//       },
//       {
//         category: "Location & Connectivity",
//         questions: [
//           {
//             q: "How is the connectivity to Whitefield?",
//             a: "Located along State Highway 35, which directly connects to Whitefield, Brookfield, and other major areas.",
//           },
//           {
//             q: "Is there metro connectivity?",
//             a: "Yes, Nallurahalli Metro Station is nearby, providing easy access to the Purple Line.",
//           },
//           {
//             q: "What schools and hospitals are nearby?",
//             a: "Multiple schools including Chrysalis High, Delhi Public School, and hospitals like Manipal Hospital are within proximity.",
//           },
//         ],
//       },
//       {
//         category: "Payment & Possession",
//         questions: [
//           {
//             q: "What is the payment plan?",
//             a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available.",
//           },
//           {
//             q: "When is the expected possession?",
//             a: "Possession is expected as per the project timeline. Contact our sales team for specific details.",
//           },
//           {
//             q: "Are there any hidden charges?",
//             a: "No hidden charges. All costs are transparent and clearly mentioned in the agreement.",
//           },
//         ],
//       },
//     ]

//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Find answers to common questions about RRL Palm Altezze
//             </p>
//           </div>
//           <div className="space-y-12">
//             {faqs.map((section, sectionIndex) => (
//               <div key={sectionIndex}>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
//                   {section.category}
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {section.questions.map((item, qIndex) => (
//                     <Card key={qIndex} className="p-6">
//                       <h4 className="font-bold text-lg text-gray-900 mb-3 text-blue-600">Q: {item.q}</h4>
//                       <p className="text-gray-700 leading-relaxed">
//                         <span className="font-semibold text-gray-900">A: </span>
//                         {item.a}
//                       </p>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center text-white">
//             <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
//             <p className="text-lg mb-6 opacity-90">Our sales team is ready to help you with any queries</p>
//             <a
//               href="tel:+918494966966"
//               className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               Call: 84 94 966 966
//             </a>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // Awards Section
//   const AwardsSection = () => {
//     const awards = [
//       {
//         title: "Best Residential Project",
//         year: "2024",
//         organization: "Bangalore Real Estate Awards",
//       },
//       {
//         title: "Sustainable Development Award",
//         year: "2024",
//         organization: "Green Building Council",
//       },
//       {
//         title: "Premium Architecture Design",
//         year: "2023",
//         organization: "Indian Architecture Forum",
//       },
//       {
//         title: "Customer Choice Award",
//         year: "2023",
//         organization: "Real Estate Excellence",
//       },
//     ]

//     return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Recognized for excellence in design, construction, and customer satisfaction
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {awards.map((award, index) => (
//               <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-4 bg-yellow-100 rounded-full">
//                     <Award className="w-8 h-8 text-yellow-600" />
//                   </div>
//                 </div>
//                 <h3 className="font-bold text-lg text-gray-900 mb-2">{award.title}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
//                 <p className="text-sm font-semibold text-blue-600">{award.year}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   // Contact Section
//   const ContactSection = () => (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Download our brochure or connect with our sales team
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
//                     <Phone className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Phone</p>
//                     <a href="tel:+918494966966" className="text-blue-600 hover:underline">
//                       +91 84 94 966 966
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
//                     <Mail className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Email</p>
//                     <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-blue-600 hover:underline">
//                       enquiry@rrlbuildersanddevelopers.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Address</p>
//                     <p className="text-gray-600">
//                       73/5, RRL Palm Altezze, Janthagondanahalli,
//                       <br />
//                       Varthur, Bengaluru, Karnataka - 562 125
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
//                     <Download className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Download Brochure</p>
//                     <Button variant="outline" size="sm" className="mt-2 bg-transparent">
//                       Download PDF
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="pt-8 border-t border-gray-200">
//               <p className="text-gray-600">
//                 <span className="font-semibold">Website:</span>{" "}
//                 <a href="https://www.rrlbuildersanddevelopers.com" className="text-blue-600 hover:underline">
//                   www.rrlbuildersanddevelopers.com
//                 </a>
//               </p>
//             </div>
//           </div>
//           <Card className="p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
//                   placeholder="+91 XXXXX XXXXX"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
//                   placeholder="Your message..."
//                 />
//               </div>
//               <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>
//         <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
//           <p>RERA No.: PRM/KA/RERA/1251/308/PR/141025/008167</p>
//           <p className="mt-2">
//             This brochure is only conceptual and not a legal offering. The promoters and developers reserve all rights
//             to add/delete/alter any detail/specifications mentioned herein without prior notice.
//           </p>
//         </div>
//       </div>
//     </section>
//   )

//   return (
//     <main className="w-full">
//       <HeroSection />
//       <OverviewSection />
//       <AmenitiesSection />
//       <SpecificationsSection />
//       <FloorPlansSection />
//       <ConnectivitySection />
//       <FAQsSection />
//       <AwardsSection />
//       <ContactSection />
//     </main>
//   )
// }


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Download,
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
} from "lucide-react"
import type React from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Hero Section
  const HeroSection = () => (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1E5BA8] via-[#2B6CB8] to-[#1E5BA8] overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574] rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div className="space-y-6 z-10" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#D4A574]/20 text-[#D4A574] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4A574]/30"
                variants={itemVariants}
              >
                <motion.span
                  className="w-2 h-2 bg-[#D4A574] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Just Launched
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                  Own Your <span className="text-[#D4A574]">Dream Home</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90">Premium 2 & 3 BHK Apartments in Varthur, Bangalore</p>
              </motion.div>

              <motion.div className="grid grid-cols-3 gap-4 py-6" variants={containerVariants}>
                {[
                  { value: "₹1CR", label: "Onwards" },
                  { value: "23", label: "Floors" },
                  { value: "30+", label: "Amenities" },
                ].map((stat, index) => (
                  <motion.div key={index} className="space-y-1" variants={itemVariants}>
                    <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <Button
                    size="lg"
                    className="bg-[#D4A574] hover:bg-[#C49564] text-[#1E5BA8] gap-2 font-bold text-base"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: 84 94 966 966
                  </Button>
                </motion.div>
                {/* <motion.div variants={itemVariants}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </Button>
                </motion.div> */}
              </motion.div>

              <motion.div className="flex items-center gap-2 text-white pt-4" variants={itemVariants}>
                <MapPin className="w-5 h-5 text-[#D4A574]" />
                <span className="font-semibold">Varthur, Bangalore</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:block relative h-full"
              initial="hidden"
              animate="visible"
              variants={scaleVariants}
            >
              <img
                src="/palm-altezze/palm-altezze (18).jpeg"
                alt="RRL Palm Altezze Building"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-6 h-6 text-[#D4A574]" />
      </motion.div>
    </section>
  )

  // Overview Section
  const OverviewSection = () => {
    const highlights = [
      {
        icon: Building2,
        title: "Premium Construction",
        description: "RCC framed structure with Mivan construction technology",
      },
      {
        icon: Leaf,
        title: "92% Open Space",
        description: "Abundant greenery and landscaped gardens throughout",
      },
      {
        icon: Users,
        title: "Family Focused",
        description: "30+ world-class amenities for all age groups",
      },
      {
        icon: Zap,
        title: "100% Power Backup",
        description: "Generator backup for flats, lifts, and common areas",
      },
    ]

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
              variants={itemVariants}
            >
              A Lifestyle That Stands Tall
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              Solar-powered common spaces, lower bills, and brighter living. Experience premium residential living
              redefined.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:border-[#D4A574]/20">
                    <div className="flex flex-col items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg">
                        <Icon className="w-6 h-6 text-[#1E5BA8]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-[#1E5BA8]/5 to-[#D4A574]/5 rounded-2xl p-8 md:p-12 border border-[#1E5BA8]/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInVariants}
          >
            <h3 className="text-2xl font-bold text-[#1E5BA8] mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "2 BHK and 3 BHK Premium Flats",
                "Located along State Highway 35",
                "Close to Whitefield & Brookfield",
                "Near Nallurahalli Metro Station",
                "Leading hospitals nearby",
                "Top educational institutions",
                "Shopping & recreational hubs",
                "Tourist destinations within 8km",
                "Well-connected to all major areas",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#D4A574] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Amenities Section
  const AmenitiesSection = () => {
    const amenities = [
      { name: "Reception Hall", image: "/palm-altezze/palm-altezze (1).jpeg" },
      { name: "Lounge Area", image: "/palm-altezze/palm-altezze (2).jpeg" },
      { name: "Lounge / Seating Area", image: "/palm-altezze/palm-altezze (3).jpeg" },
      { name: "Kids Play Area Indoor", image: "/palm-altezze/palm-altezze (4).jpeg" },
      { name: "Library / Reading Lounge", image: "/palm-altezze/palm-altezze (5).jpeg" },
      { name: "Kids Creche / Play School", image: "/palm-altezze/palm-altezze (6).jpeg" },
      { name: "Well-equipped Gymnasium", image: "/palm-altezze/palm-altezze (7).jpeg" },
      { name: "Reception Desk", image: "/palm-altezze/palm-altezze (8).jpeg" },
      { name: "Billiards / Pool Table", image: "/palm-altezze/palm-altezze (9).jpeg" },
      { name: "Mini Theatre", image: "/palm-altezze/palm-altezze (10).jpeg" },
      { name: "Gymnasium", image: "/palm-altezze/palm-altezze (11).jpeg" },
      { name: "Party Hall", image: "/palm-altezze/palm-altezze (12).jpeg" },
      { name: "Clubhouse Exterior", image: "/palm-altezze/palm-altezze (13).jpeg" },
      { name: "Clubhouse Rooftop", image: "/palm-altezze/palm-altezze (14).jpeg" },
      { name: "Vertical Garden / Green Wall", image: "/palm-altezze/palm-altezze (15).jpeg" },
      { name: "Squash Court", image: "/palm-altezze/palm-altezze (16).jpeg" },
      { name: "Swimming Pool", image: "/palm-altezze/palm-altezze (17).jpeg" },
      { name: "High-rise Apartment Building", image: "/palm-altezze/palm-altezze (18).jpeg" },
      { name: "Jacuzzi", image: "/palm-altezze/palm-altezze (19).jpeg" },
      { name: "Building Exterior View", image: "/palm-altezze/palm-altezze (20).jpeg" },
      { name: "Building Facade / Balconies", image: "/palm-altezze/palm-altezze (21).jpeg" },
      { name: "Landscaped Walkway", image: "/palm-altezze/palm-altezze (22).jpeg" },
      { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
      { name: "Jogging Track", image: "/palm-altezze/palm-altezze (24).jpeg" },
      { name: "Landscaped Garden", image: "/palm-altezze/palm-altezze (25).jpeg" },
      { name: "Landscaped Garden with Seating", image: "/palm-altezze/palm-altezze (26).jpeg" },
      { name: "Amphitheatre", image: "/palm-altezze/palm-altezze (27).jpeg" },
      { name: "Central Garden / Seating Area", image: "/palm-altezze/palm-altezze (28).jpeg" },
      { name: "Children Play Area", image: "/palm-altezze/palm-altezze (29).jpeg" },
      { name: "Children Play Area", image: "/palm-altezze/palm-altezze (30).jpeg" },
      { name: "Park and Play Area", image: "/palm-altezze/palm-altezze (31).jpeg" },
      { name: "Landscaped Lawn", image: "/palm-altezze/palm-altezze (32).jpeg" },
      { name: "Swimming Pool View", image: "/palm-altezze/palm-altezze (33).jpeg" },
      { name: "Multipurpose Court", image: "/palm-altezze/palm-altezze (34).jpeg" },
      { name: "Rooftop Soccer Pitch", image: "/palm-altezze/palm-altezze (35).jpeg" },
      { name: "Aerial View of Complex", image: "/palm-altezze/palm-altezze (36).jpeg" },
      { name: "Aerial View of Tower", image: "/palm-altezze/palm-altezze (37).jpeg" },
      { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
      { name: "Park and Play Area", image: "/palm-altezze/palm-altezze (31).jpeg" },
      { name: "Paved Pathway", image: "/palm-altezze/palm-altezze (23).jpeg" },
    ]

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
              variants={itemVariants}
            >
              World-Class Amenities
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              RRL Palm Altezze features 40+ premium amenities that cater to every age group. From infinity-edge pools to
              yoga decks, your lifestyle extends far beyond your home.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {amenities.map((amenity, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="overflow-hidden cursor-pointer group border-0 shadow-md hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <motion.img
                      src={amenity.image || "/placeholder.svg"}
                      alt={amenity.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#1E5BA8]/80 to-transparent flex items-end p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-white font-semibold text-sm">{amenity.name}</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-[#1E5BA8]/10 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInVariants}
          >
            <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Amenities Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg text-[#D4A574] mb-4">Ground Floor</h4>
                <ul className="space-y-2 text-gray-700">
                  {["Reception Hall", "Library", "Indoor Kids Play Area", "Indoor Games", "Meditation Hall"].map(
                    (item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4A574] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#D4A574] mb-4">1st & 2nd Floor</h4>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Lounge Area with Party Hall",
                    "Ultra Gym with Steam & Sauna Bath",
                    "Cardio Exercise Room",
                    "Mini Theatre",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4A574] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Specifications Section
  const SpecificationsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
            variants={itemVariants}
          >
            Premium Specifications
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Built with world-class materials and cutting-edge construction technology
          </motion.p>
        </motion.div>

        <Tabs defaultValue="structure" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100">
            <TabsTrigger value="structure" className="data-[state=active]:bg-[#1E5BA8] data-[state=active]:text-white">
              Structure
            </TabsTrigger>
            <TabsTrigger
              value="architecture"
              className="data-[state=active]:bg-[#1E5BA8] data-[state=active]:text-white"
            >
              Architecture
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-[#1E5BA8] data-[state=active]:text-white">
              Services
            </TabsTrigger>
          </TabsList>

          {["structure", "architecture", "services"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {(tab === "structure"
                  ? [
                    { title: "Framed Structure", desc: "Mivan Constructions - Advanced formwork system" },
                    { title: "External Walls", desc: '8" RCC walls with texture finish plastering' },
                    { title: "Internal Walls", desc: '6" solid blocks with smooth cement finish' },
                    { title: "Earthquake Resistant", desc: "Designed as per relevant IS codes" },
                    { title: "Automation", desc: "Pump and light provision automated" },
                    { title: "Structural Efficiency", desc: "Optimized design for maximum space" },
                  ]
                  : tab === "architecture"
                    ? [
                      { title: "Main Doors", desc: "Teak wood frame with Veneer polish" },
                      { title: "Internal Doors", desc: "Salwood frames with designer skin molded shutters" },
                      { title: "Windows", desc: "UPVC windows with mosquito mesh" },
                      { title: "Flooring", desc: "2'x4' vitrified tiles for living, dining, kitchen & bedrooms" },
                      { title: "Balcony Flooring", desc: '15"x15" Anti-skid tiles' },
                      { title: "Bathroom Tiles", desc: "2'x1' anti-skid ceramic tiles with 7' height dado" },
                      { title: "Painting", desc: "2 coats Nippon Putty, primer & 2 coats emulsion" },
                      { title: "Exterior Paint", desc: "Nippon Exterior for weather resistance" },
                    ]
                    : [
                      { title: "Plumbing", desc: "Supreme/Ashirvad CPVC fittings with Jaguar/Parryware sanitary" },
                      {
                        title: "Electrical",
                        desc: "Concealed Finolex/Anchor copper wiring with Anchor Roma switches",
                      },
                      { title: "AC Points", desc: "AC point in bedrooms with separate circuits" },
                      { title: "Geyser", desc: "Geyser provision with separate circuit" },
                      { title: "Communication", desc: "Telephone & TV points in living and master bedroom" },
                      { title: "Water Supply", desc: "Bore well with overhead tank supply" },
                      {
                        title: "Lifts",
                        desc: "3 fully automatic lifts - 2x8 passenger, 1x service lift (KONE/OTIS)",
                      },
                      { title: "Generator Backup", desc: "100% power backup for flats, lifts, motor & common areas" },
                    ]
                ).map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="p-6 border-l-4 border-l-[#D4A574] bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-lg text-[#1E5BA8] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )

  // Floor Plans Section
  const FloorPlansSection = () => {
    const floorPlans = [
      {
        type: "2 BHK",
        facing: "North",
        area: "1265 sq.ft",
        description: "Compact and efficient layout perfect for small families",
      },
      {
        type: "2 BHK",
        facing: "North",
        area: "1495 sq.ft",
        description: "Spacious 2-bedroom with premium finishes",
      },
      {
        type: "3 BHK",
        facing: "North",
        area: "1630 sq.ft",
        description: "Luxurious 3-bedroom with ample living space",
      },
      {
        type: "3 BHK",
        facing: "East",
        area: "1560 sq.ft",
        description: "East-facing with natural light throughout",
      },
      {
        type: "3 BHK",
        facing: "East",
        area: "1510 sq.ft",
        description: "Premium 3-bedroom with optimized layout",
      },
    ]

    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
              variants={itemVariants}
            >
              Floor Plans
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              Thoughtfully designed layouts with optimal space utilization
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {floorPlans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-[#1E5BA8]">{plan.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Facing</p>
                      <p className="font-semibold text-gray-900">{plan.facing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Saleable Area</p>
                      <p className="font-semibold text-gray-900">{plan.area}</p>
                    </div>
                    <p className="text-sm text-gray-600 italic">{plan.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                title: "Master Plan",
                desc: "Comprehensive site layout showing all amenities, open spaces, and building placement",
                image: "/palm-altezze/masterplan.png", // 🖼️ your master plan image path
              },
              {
                title: "Typical Floor Plan",
                desc: "Detailed layout of a typical residential floor with all apartment configurations",
                image: "/palm-altezze/floorplan.png", // 🖼️ your floor plan image path
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gray-200 h-[800px] flex items-center justify-center">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{plan.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>
    )
  }

  // Connectivity Section
  const ConnectivitySection = () => {
    const connectivity = [
      {
        icon: Train,
        title: "Public Transport",
        items: [
          "Purple Line Metro - Near Whitefield",
          "BMTC Buses",
          "Ola, Uber, Rapido",
          "State Highway 35 connectivity",
        ],
      },
      {
        icon: Hospital,
        title: "Hospitals Nearby",
        items: [
          "Manipal Hospital, Varthur",
          "City Hospital",
          "Suraksha Multispeciality Hospital",
          "Silicon City Hospital Pvt. Ltd.",
        ],
      },
      {
        icon: BookOpen,
        title: "Schools Nearby",
        items: ["Vasishta", "Samruddhi", "Vagdevi", "Chrysalis High"],
      },
      {
        icon: ShoppingCart,
        title: "Malls Nearby",
        items: ["Phoenix Marketcity - Whitefield", "Virginia Mall", "Park Square Mall", "Inorbit Mall"],
      },
    ]

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
              variants={itemVariants}
            >
              Prime Location
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              Strategically located in the heart of IT Hub with excellent connectivity to all major areas
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {connectivity.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg">
                        <Icon className="w-6 h-6 text-[#1E5BA8]" />
                      </div>
                      <h3 className="font-bold text-lg text-[#1E5BA8]">{item.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((subitem, subindex) => (
                        <li key={subindex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#D4A574] font-bold mt-1">→</span>
                          <span>{subitem}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInVariants}>
  <Card className="overflow-hidden border-0 shadow-lg">
    <div className="h-96 w-full">
      <iframe
        title="Varthur Map"
        width="100%"
        height="100%"
        className="border-0"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed"
      ></iframe>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">Varthur, Bangalore</h3>
      <p className="text-gray-600 leading-relaxed">
        RRL Palm Altezze is strategically positioned in Varthur, one of Bangalore's fastest-growing
        residential areas, offering seamless connectivity to Whitefield, Sarjapur, and other major business
        hubs.
      </p>
    </div>
  </Card>
</motion.div>

        </div>
      </section>
    )
  }

  // FAQs Section
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
  ];

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (sectionIndex, qIndex) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === qIndex ? null : qIndex,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about RRL Palm Altezze
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-12">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6 pb-4 border-b-2 border-[#D4A574] text-center">
                {section.category}
              </h3>

              <div className="space-y-4">
                {section.questions.map((item, qIndex) => {
                  const isOpen = openQuestions[sectionIndex] === qIndex;

                  return (
                    <Card
                      key={qIndex}
                      className={`p-4 border-0 bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden ${
                        isOpen ? "bg-gradient-to-r from-[#E8F1FF] to-white" : ""
                      }`}
                      onClick={() => toggleQuestion(sectionIndex, qIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-lg text-[#D4A574]">
                          {item.q}
                        </h4>
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          className="text-2xl font-bold text-[#1E5BA8]"
                        >
                          +
                        </motion.div>
                      </div>

                      {/* Animated answer */}
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="mt-16 bg-gradient-to-r from-[#1E5BA8] to-[#2B6CB8] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our sales team is ready to help you with any queries
          </p>
          <a
            href="tel:+918494966966"
            className="inline-block bg-[#D4A574] text-[#1E5BA8] font-bold px-8 py-3 rounded-lg hover:bg-[#C49564] transition-colors"
          >
            Call: 84 94 966 966
          </a>
        </div>
      </div>
    </section>
    )
  }

  // Awards Section
  const AwardsSection = () => {
    const awards = [
      {
        title: "Best Residential Project",
        year: "2024",
        organization: "Bangalore Real Estate Awards",
      },
      {
        title: "Sustainable Development Award",
        year: "2024",
        organization: "Green Building Council",
      },
      {
        title: "Premium Architecture Design",
        year: "2023",
        organization: "Indian Architecture Forum",
      },
      {
        title: "Customer Choice Award",
        year: "2023",
        organization: "Real Estate Excellence",
      },
    ]

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
              variants={itemVariants}
            >
              Awards & Recognition
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              Recognized for excellence in design, construction, and customer satisfaction
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {awards.map((award, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-[#D4A574]/20 to-[#D4A574]/10 rounded-full">
                      <Award className="w-8 h-8 text-[#D4A574]" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#1E5BA8] mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
                  <p className="text-sm font-semibold text-[#D4A574]">{award.year}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  // Contact Section
  const ContactSection = () => (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1E5BA8] mb-4 text-balance"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Download our brochure or connect with our sales team
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={containerVariants}>
            <div>
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 84 94 966 966",
                    href: "tel:+918494966966",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "enquiry@rrlbuildersanddevelopers.com",
                    href: "mailto:enquiry@rrlbuildersanddevelopers.com",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "73/5, RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 562 125",
                  },
                  // {
                  //   icon: Download,
                  //   title: "Download Brochure",
                  //   content: "PDF",
                  // },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                      <div className="p-3 bg-gradient-to-br from-[#1E5BA8]/10 to-[#D4A574]/10 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#1E5BA8]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E5BA8]">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#D4A574] hover:underline">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                        {item.title === "Download Brochure" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-transparent border-[#1E5BA8] text-[#1E5BA8] hover:bg-[#1E5BA8]/10"
                          >
                            Download PDF
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            {/* <motion.div className="pt-8 border-t border-gray-200" variants={itemVariants}>
              <p className="text-gray-600">
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://www.rrlbuildersanddevelopers.com" className="text-[#D4A574] hover:underline">
                  www.rrlbuildersanddevelopers.com
                </a>
              </p>
            </motion.div> */}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <h3 className="text-2xl font-bold text-[#1E5BA8] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E5BA8] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5BA8] focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" className="w-full bg-[#1E5BA8] hover:bg-[#154A8A] text-white font-bold">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <p>RERA No.: PRM/KA/RERA/1251/308/PR/141025/008167</p>
          <p className="mt-2">
            This brochure is only conceptual and not a legal offering. The promoters and developers reserve all rights
            to add/delete/alter any detail/specifications mentioned herein without prior notice.
          </p>
        </motion.div> */}
      </div>
    </section>
  )

  return (
    <main className="w-full">
      <HeroSection />
      <OverviewSection />
      <AmenitiesSection />
      <SpecificationsSection />
      <FloorPlansSection />
      <ConnectivitySection />
      <FAQsSection />
      <AwardsSection />
      <ContactSection />
    </main>
  )
}
