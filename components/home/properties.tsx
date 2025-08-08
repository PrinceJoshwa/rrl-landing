
// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { MapPin, Home, ArrowRight, Star, Calendar, Building2 } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// const residentialProperties = [
//   {
//     id: "palacio",
//     name: "RRL Palacio",
//     location: "Medahalli",
//     type: "Luxury Property",
//     status: "Ready to Move",
//     description: "Our newly constructed luxury property, situated in Medahalli",
//     image: "/LookProject2.jpeg",
//     features: [ "Premium Amenities", "Funrished smart homes"],
//     rating: 4.8,
//     price: "₹45 Lakhs onwards",
//   },
//   {
//     id: "palm-altezze",
//     name: "RRL Palm Altezze",
//     location: "Varthur, Bangalore",
//     type: "Premium Property",
//     status: "Under Construction",
//     description: "Our latest premium property located at Varthur, Bangalore",
//     image: "/LookProject1.jpeg",
//     features: ["High Raise  Apartment", "Premium Apartment"],
//     rating: 4.9,
//     price: "₹38 Lakhs onwards",
//   },
//   {
//     id: "sequoia",
//     name: "RRL Sequoia",
//     location: "Varthur, Bangalore",
//     type: "Luxurious Villa",
//     status: "Available",
//     description: "Our latest luxurious Villa located at Varthur, Bangalore",
//     image: "/Sequoia.jpg",
//     features: ["4 BHK Villa", "Garden", "Premium Location"],
//     rating: 4.7,
//     price: "₹85 Lakhs onwards",
//   },
//   {
//     id: "nature-woods",
//     name: "RRL Nature Woods",
//     location: "Sarjapur",
//     type: "Premium Property",
//     status: "Award Winner",
//     description: "Our premium awarded property, situated in heart of Sarjapur",
//     image: "/LookProject5.jpeg",
//     features: ["Nature View", "High end award winning amenties"],
//     rating: 4.9,
//     price: "₹42 Lakhs onwards",
//   },
  
// ]

// const commercialProperties = [
//   {
//     id: "towers",
//     name: "RRL Towers",
//     location: "Sampige Jala, Sarjapur",
//     type: "Commercial Tower",
//     status: "Operational",
//     description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
//     image: "/Tower.jpeg",
//     features: ["Office Spaces", "Retail", "Corporate Hub"],
//     rating: 4.8,
//     price: "₹65 Lakhs onwards",
//   },
//   {
//     id: "complex",
//     name: "RRL Complex",
//     location: "South Bangalore",
//     type: "Commercial Building",
//     status: "Operational",
//     description: "Our 12th Commercial Building situated in South of Bangalore",
//     image: "/complex.jpg",
//     features: ["Multi-tenant", "Parking", "Modern Facilities"],
//     rating: 4.7,
//     price: "₹55 Lakhs onwards",
//   },
//   {
//     id: "oasis",
//     name: "RRL Oasis",
//     location: "Bangalore",
//     type: "Commercial Building",
//     status: "Operational",
//     description: "Upcoming residential project with modern amenities",
//     image: "/Oasis.jpg",
//     features: ["1 BHK", "2 BHK", "Swimming Pool"],
//     rating: 4.6,
//     price: "₹28 Lakhs onwards",
//   },
// ]

// export function Properties() {
//   const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

//   const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties
//   const displayProperties = currentProperties.slice(0, 4) // Show first 4 properties

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
//             <Home className="h-5 w-5" />
//             <span className="font-semibold">Find Your Dream Property</span>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
//             RRL Premium
//             <span className="text-gradient block">Properties</span>
//           </h2>

//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
//             Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms and state-of-the-art facilities
//             to breathtaking views and meticulously designed spaces, we provide you with a comprehensive overview of what
//             each property has to offer.
//           </p>

//           {/* Property Type Toggle */}
//           <div className="inline-flex items-center bg-slate-100 rounded-full p-1 mb-8">
//             <button
//               onClick={() => setActiveTab("residential")}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeTab === "residential"
//                   ? "bg-white text-amber-600 shadow-md"
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               <Home className="h-4 w-4" />
//               <span>Residential</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("commercial")}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeTab === "commercial" ? "bg-white text-amber-600 shadow-md" : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               <Building2 className="h-4 w-4" />
//               <span>Commercial</span>
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {displayProperties.map((property, index) => (
//             <Link key={property.id} href={`/projects/${property.id}`} className="group cursor-pointer">
//               {/* Fixed Height Card */}
//               <div className="card-consistent bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 h-[540px]">
//                 {/* Image Container - Fixed Height */}
//                 <div className="relative overflow-hidden h-56">
//                   <Image
//                     src={property.image || "/placeholder.svg"}
//                     alt={property.name}
//                     width={400}
//                     height={300}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />

//                   {/* Status Badge */}
//                   <div className="absolute top-4 left-4">
//                     <div
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         property.status === "Award Winner"
//                           ? "bg-[#d9a406] text-white"
//                           : property.status === "Ready to Move" || property.status === "Operational"
//                             ? "bg-emerald-600 text-white"
//                             : "bg-blue-600 text-white"
//                       }`}
//                     >
//                       {property.status}
//                     </div>
//                   </div>

//                   {/* Rating */}
//                   <div className="absolute top-4 right-4 glass-effect rounded-full px-2 py-1">
//                     <div className="flex items-center space-x-1">
//                       <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
//                       <span className="text-xs font-semibold text-slate-700">{property.rating}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content - Flexible Height */}
//                 <div className="card-content p-6 flex flex-col">
//                   <div className="flex items-start justify-between mb-3">
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
//                         {property.name}
//                       </h3>
//                       <div className="flex items-center space-x-2 text-slate-500 mt-1">
//                         <MapPin className="h-4 w-4 flex-shrink-0" />
//                         <span className="text-sm line-clamp-1">{property.location}</span>
//                       </div>
//                     </div>
//                     <div className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full whitespace-nowrap ml-2 flex-shrink-0">
//                       {property.type}
//                     </div>
//                   </div>

//                   <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{property.description}</p>

//                   {/* Price */}
//                   {/* <div className="text-lg font-bold text-slate-900 mb-4">{property.price}</div> */}

//                   {/* Features */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {property.features.slice(0, 3).map((feature, idx) => (
//                       <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-lg text-xs font-medium">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Footer - Always at bottom */}
//                   <div className="mt-auto">
//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                       <div className="flex items-center space-x-2 flex-shrink-0">
//                         <Calendar className="h-4 w-4 text-slate-400 flex-shrink-0" />
//                         <span className="text-xs text-slate-500 whitespace-nowrap">
//                           {property.status === "Ready to Move" || property.status === "Operational"
//                             ? "Available Now"
//                             : "Coming Soon"}
//                         </span>
//                       </div>
//                       <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Property Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div className="text-center glass-effect rounded-2xl p-6">
//             <div className="text-3xl font-bold text-slate-900 mb-2">{activeTab === "residential" ? "5+" : "3+"}</div>
//             <div className="text-slate-600">
//               {activeTab === "residential" ? "Residential Projects" : "Commercial Projects"}
//             </div>
//           </div>

//           <div className="text-center glass-effect rounded-2xl p-6">
//             <div className="text-3xl font-bold text-slate-900 mb-2">600+</div>
//             <div className="text-slate-600">Happy Customers</div>
//           </div>

//           <div className="text-center glass-effect rounded-2xl p-6">
//             <div className="text-3xl font-bold text-slate-900 mb-2">999+</div>
//             <div className="text-slate-600">Sq Ft Delivered</div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <Link href="/projects">
//             <Button
//               size="lg"
//               className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
//             >
//               Explore More {activeTab === "residential" ? "Residential" : "Commercial"} Properties
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Home, ArrowRight, Star, Calendar, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const residentialProperties = [
  {
    id: "palacio",
    name: "RRL Palacio",
    location: "Medahalli",
    type: "Luxury Property",
    status: "Ready to Move",
    description: "Our newly constructed luxury property, situated in Medahalli",
    image: "/LookProject2.jpeg",
    features: ["Premium Amenities", "Furnished smart homes"],
    rating: 4.8,
    price: "₹45 Lakhs onwards",
  },
  {
    id: "palm-altezze",
    name: "RRL Palm Altezze",
    location: "Varthur, Bangalore",
    type: "Premium Property",
    status: "Under Construction",
    description: "Our latest premium property located at Varthur, Bangalore",
    image: "/LookProject1.jpeg",
    features: ["High Rise Apartment", "Premium Apartment"],
    rating: 4.9,
    price: "₹38 Lakhs onwards",
  },
  {
    id: "sequoia",
    name: "RRL Sequoia",
    location: "Varthur, Bangalore",
    type: "Luxurious Villa",
    status: "Available",
    description: "Our latest luxurious Villa located at Varthur, Bangalore",
    image: "/Sequoia.jpg",
    features: ["4 BHK Villa", "Garden", "Premium Location"],
    rating: 4.7,
    price: "₹85 Lakhs onwards",
  },
  {
    id: "nature-woods",
    name: "RRL Nature Woods",
    location: "Sarjapur",
    type: "Premium Property",
    status: "Award Winner",
    description: "Our premium awarded property, situated in heart of Sarjapur",
    image: "/LookProject5.jpeg",
    features: ["Nature View", "High end award winning amenities"],
    rating: 4.9,
    price: "₹42 Lakhs onwards",
  },
]

const commercialProperties = [
  {
    id: "towers",
    name: "RRL Towers",
    location: "Sampige Jala, Sarjapur",
    type: "Commercial Tower",
    status: "Operational",
    description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
    image: "/Tower.jpeg",
    features: ["Office Spaces", "Retail", "Corporate Hub"],
    rating: 4.8,
    price: "₹65 Lakhs onwards",
  },
  {
    id: "complex",
    name: "RRL Complex",
    location: "South Bangalore",
    type: "Commercial Building",
    status: "Operational",
    description: "Our 12th Commercial Building situated in South of Bangalore",
    image: "/complex.jpg",
    features: ["Multi-tenant", "Parking", "Modern Facilities"],
    rating: 4.7,
    price: "₹55 Lakhs onwards",
  },
  {
    id: "oasis",
    name: "RRL Oasis",
    location: "Bangalore",
    type: "Commercial Building",
    status: "Operational",
    description: "Upcoming residential project with modern amenities",
    image: "/Oasis.jpg",
    features: ["1 BHK", "2 BHK", "Swimming Pool"],
    rating: 4.6,
    price: "₹28 Lakhs onwards",
  },
]

export function Properties() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

  const currentProperties = activeTab === "residential" ? residentialProperties : commercialProperties
  const displayProperties = currentProperties.slice(0, 4)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-[#d9a406] mb-6">
            <Home className="h-5 w-5" />
            <span className="font-semibold">Find Your Dream Property</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            RRL Premium
            <span className="text-gradient block">Properties</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms and state-of-the-art facilities
            to breathtaking views and meticulously designed spaces, we provide you with a comprehensive overview of what
            each property has to offer.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-full p-1 mb-8">
            <button
              onClick={() => setActiveTab("residential")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "residential"
                  ? "bg-white text-amber-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Residential</span>
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "commercial" ? "bg-white text-[#d9a406] shadow-md" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Commercial</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayProperties.map((property) => (
            <Link key={property.id} href={`/projects/${property.id}`} className="group cursor-pointer">
              <div
                className={`rounded-3xl overflow-hidden transition-all duration-300 h-[450px] ${
                  activeTab === "commercial"
                    ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white hover:shadow-2xl"
                    : "bg-white shadow-lg border border-slate-100 hover:shadow-2xl"
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${activeTab === "commercial" ? "h-48" : "h-56"}`}>
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    width={400}
                    height={300}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      activeTab === "commercial" ? "opacity-90" : ""
                    }`}
                  />
                  {/* Status */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        activeTab === "commercial"
                          ? "bg-yellow-500 text-black"
                          : property.status === "Award Winner"
                          ? "bg-[#d9a406] text-white"
                          : property.status === "Ready to Move" || property.status === "Operational"
                          ? "bg-emerald-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {property.status}
                    </div>
                  </div>
                  {/* Rating */}
                  <div
                    className={`absolute top-4 right-4 rounded-full px-2 py-1 ${
                      activeTab === "commercial" ? "bg-slate-700" : "glass-effect"
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <Star
                        className={`h-3 w-3 ${
                          activeTab === "commercial"
                            ? "text-yellow-400 fill-yellow-400"
                            : "fill-amber-400 text-amber-400"
                        }`}
                      />
                      <span
                        className={`text-xs font-semibold ${
                          activeTab === "commercial" ? "text-white" : "text-slate-700"
                        }`}
                      >
                        {property.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xl font-bold line-clamp-1 group-hover:text-amber-600 ${
                          activeTab === "commercial" ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {property.name}
                      </h3>
                      <div
                        className={`flex items-center space-x-2 mt-1 ${
                          activeTab === "commercial" ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm line-clamp-1">{property.location}</span>
                      </div>
                    </div>
                    <div
                      className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2 flex-shrink-0 ${
                        activeTab === "commercial"
                          ? "bg-slate-700 text-white"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {property.type}
                    </div>
                  </div>

                  <p
                    className={`text-sm mb-4 line-clamp-2 leading-relaxed ${
                      activeTab === "commercial" ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {property.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          activeTab === "commercial"
                            ? "bg-slate-700 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <span
                      className={`text-lg font-bold ${
                        activeTab === "commercial" ? "text-yellow-400" : "text-slate-900"
                      }`}
                    >
                      {property.price}
                    </span>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <Calendar
                        className={`h-4 w-4 ${
                          activeTab === "commercial" ? "text-slate-400" : "text-slate-400"
                        }`}
                      />
                      <span
                        className={`text-xs whitespace-nowrap ${
                          activeTab === "commercial" ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {property.status === "Ready to Move" || property.status === "Operational"
                          ? "Available Now"
                          : "Coming Soon"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold text-slate-900 mb-2">{activeTab === "residential" ? "5+" : "3+"}</div>
            <div className="text-slate-600">
              {activeTab === "residential" ? "Residential Projects" : "Commercial Projects"}
            </div>
          </div>

          <div className="text-center glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold text-slate-900 mb-2">600+</div>
            <div className="text-slate-600">Happy Customers</div>
          </div>

          <div className="text-center glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold text-slate-900 mb-2">999+</div>
            <div className="text-slate-600">Sq Ft Delivered</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/projects">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
            >
              Explore More {activeTab === "residential" ? "Residential" : "Commercial"} Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
