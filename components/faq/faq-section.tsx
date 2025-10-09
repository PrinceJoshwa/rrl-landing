// "use client"

// import { useState } from "react"
// import { ChevronDown, ChevronUp, HelpCircle, MapPin } from 'lucide-react'
// import { cn } from "@/lib/utils"

// const sarjapurFAQs = [
//   {
//     question: "What is the price of a 2 BHK flat in Sarjapur?",
//     answer: "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities. Properties in newer developments or luxury projects may be priced higher, reflecting the area's growing popularity and demand."
//   },
//   {
//     question: "Where can I buy a 2 BHK flat in Bangalore?",
//     answer: "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala. Sarjapur Road, in particular, offers a mix of modern apartment projects, ranging from budget-friendly options to luxury flats, making it a great choice for homebuyers."
//   },
//   {
//     question: "Are there apartments in Sarjapur Road for sale?",
//     answer: "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs and the excellent infrastructure. Apartments for sale in Sarjapur Road offer a range of options, from budget flats to luxury living spaces."
//   },
//   {
//     question: "What makes Luxury Apartments in Sarjapur Road special?",
//     answer: "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities. These properties offer top-notch facilities such as swimming pools, fitness centers, landscaped gardens, and 24/7 security. Many luxury projects also provide smart home features, ensuring a high standard of living in the heart of Bangalore's booming real estate market."
//   },
//   {
//     question: "What are the upcoming apartments in Sarjapur Road?",
//     answer: "Sarjapur Road is seeing several upcoming apartment projects that cater to a wide range of budgets. New projects in Sarjapur include modern developments with 2 BHK, 3 BHK, and luxury flats, offering amenities like gyms, swimming pools, and community spaces. These upcoming projects reflect the growing demand for residential properties in Sarjapur Road due to its connectivity and proximity to IT hubs."
//   },
//   {
//     question: "Are there flats for sale in Sarjapur Road?",
//     answer: "Yes, flats for sale in Sarjapur Road are readily available. With its growing popularity, there are numerous options ranging from affordable flats to high-end apartments in both completed and under-construction projects. Many developers are focusing on delivering homes that offer convenience, luxury, and easy access to essential services, making it an ideal place for buyers."
//   }
// ]

// const varthurFAQs = [
//   {
//     question: "Is Varthur a good area to live in Bangalore?",
//     answer: "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs. The area is well-connected, with schools, hospitals, and shopping centers nearby. Whether you're looking for an apartment or a villa, Varthur has a variety of properties to suit different lifestyles."
//   },
//   {
//     question: "What is the price of a flat in Varthur?",
//     answer: "The price of flats in Varthur can vary depending on the size and the project. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore. If you're interested in a luxurious property, like those offered by RRL Palm Altezze, the price may be on the higher end but with excellent amenities and a great location."
//   },
//   {
//     question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
//     answer: "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices. If you're looking for a well-built 2 BHK flat with modern amenities, RRL Palm Altezze has some fantastic options to explore."
//   },
//   {
//     question: "Are there 3 BHK flats for sale in Varthur, Bangalore?",
//     answer: "Definitely! Varthur has many 3 BHK flats available for sale. Whether you're a family looking for extra space or someone who enjoys living in a more spacious environment, Varthur offers a variety of options. RRL Palm Altezze, for example, provides stylish 3 BHK apartments that are both spacious and affordable."
//   },
//   {
//     question: "What are the options for apartments in Varthur?",
//     answer: "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options. The area is home to many new projects, like RRL Palm Altezze, which offer modern amenities such as swimming pools, gyms, and beautiful green spaces. If you're looking for an apartment in Varthur, you'll definitely find something that suits your needs."
//   },
//   {
//     question: "What are the best villas and properties in Varthur?",
//     answer: "Varthur also has some beautiful villa projects. Whether you're looking for something luxurious or more affordable, there are plenty of options available. RRL Palm Altezze is a great example of a project offering both apartments and villas, with high-quality construction and a great location, making it a top choice for many homebuyers."
//   },
//   {
//     question: "Are there any new projects in Varthur?",
//     answer: "Yes, Varthur is developing rapidly, and there are many new projects in the area. Whether you're interested in flats or villas, you'll find something that fits your style and budget. RRL Palm Altezze is one of the exciting new developments in Varthur, offering modern living spaces with great amenities and connectivity."
//   }
// ]

// interface FAQSectionProps {
//   title?: string
//   subtitle?: string
//   defaultLocation?: "sarjapur" | "varthur"
// }

// export function FAQSection({ 
//   title = "Frequently Asked Questions", 
//   subtitle = "Find answers to common questions about our properties and services",
//   defaultLocation = "sarjapur"
// }: FAQSectionProps) {
//   const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
//   const [openItems, setOpenItems] = useState<string[]>([])

//   const toggleItem = (id: string) => {
//     setOpenItems(prev => 
//       prev.includes(id) 
//         ? prev.filter(item => item !== id)
//         : [...prev, id]
//     )
//   }

//   // Clear open items when switching locations
//   const handleLocationChange = (location: "sarjapur" | "varthur") => {
//     setActiveLocation(location)
//     setOpenItems([]) // Close all accordions when switching
//   }

//   const currentFAQs = activeLocation === "sarjapur" ? sarjapurFAQs : varthurFAQs
//   const currentLocationTitle = activeLocation === "sarjapur" ? "Sarjapur Area" : "Varthur Area"

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
//             <HelpCircle className="h-5 w-5" />
//             <span className="font-semibold">FAQ</span>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
//             {title}
//           </h2>

//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
//             {subtitle}
//           </p>

//           {/* Location Toggle */}
//           <div className="inline-flex items-center bg-slate-100 rounded-full p-1 mb-4">
//             <button
//               onClick={() => handleLocationChange("sarjapur")}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeLocation === "sarjapur"
//                   ? "bg-white text-amber-600 shadow-md"
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               <MapPin className="h-4 w-4" />
//               <span>Sarjapur</span>
//             </button>
//             <button
//               onClick={() => handleLocationChange("varthur")}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeLocation === "varthur" 
//                   ? "bg-white text-amber-600 shadow-md" 
//                   : "text-slate-600 hover:text-slate-900"
//               }`}
//             >
//               <MapPin className="h-4 w-4" />
//               <span>Varthur</span>
//             </button>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
//             {currentLocationTitle}
//           </h3>

//           <div className="space-y-4">
//             {currentFAQs.map((faq, index) => {
//               const itemId = `${activeLocation}-${index}`
//               const isOpen = openItems.includes(itemId)

//               return (
//                 <div
//                   key={itemId}
//                   className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//                 >
//                   <button
//                     onClick={() => toggleItem(itemId)}
//                     className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
//                   >
//                     <h4 className="text-lg font-semibold text-slate-900 pr-4">
//                       {faq.question}
//                     </h4>
//                     <div className="flex-shrink-0">
//                       {isOpen ? (
//                         <ChevronUp className="h-5 w-5 text-amber-600" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5 text-slate-400" />
//                       )}
//                     </div>
//                   </button>

//                   <div
//                     className={cn(
//                       "overflow-hidden transition-all duration-300 ease-in-out",
//                       isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                     )}
//                   >
//                     <div className="px-8 pb-6">
//                       <p className="text-slate-600 leading-relaxed">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Contact CTA */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">
//               Still have questions about {currentLocationTitle}?
//             </h3>
//             <p className="text-slate-600 mb-6">
//               Our expert team is here to help you find your perfect property in {activeLocation === "sarjapur" ? "Sarjapur" : "Varthur"}. Get in touch for personalized assistance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-8 py-3 bg-[#d9a406] text-white font-semibold rounded-full hover:bg-amber-700 transition-colors duration-300"
//               >
//                 Contact Our Experts
//               </a>
//               <a
//                 href="tel:+91-8494966966"
//                 className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors duration-300"
//               >
//                 Call: +91-8494966966
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { HelpCircle, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FAQSectionProps {
    title?: string
    subtitle?: string
    defaultLocation?: "sarjapur" | "varthur"
}

// Note the 'export' keyword, which makes this function importable
export function FAQSection({
    title = "Frequently Asked Questions",
    subtitle = "Everything you need to know about RRL properties, pricing, and locations in Bangalore",
    defaultLocation = "sarjapur",
  }: FAQSectionProps) {
    const [activeLocation, setActiveLocation] = useState<"sarjapur" | "varthur">(defaultLocation)
    const [openItems, setOpenItems] = useState<string[]>([])
  
    const sarjapurFAQs = [
      {
        question: "What is the price of a 2 BHK flat in Sarjapur?",
        answer: "The price of a 2 BHK flat in Sarjapur typically ranges from ₹75 lakh to ₹1 crore, depending on the project's location, size, and amenities.",
      },
      {
        question: "Where can I buy a 2 BHK flat in Bangalore?",
        answer: "You can buy a 2 BHK flat in several prime areas of Bangalore, such as Sarjapur Road, Whitefield, Yelahanka, and Koramangala.",
      },
      {
        question: "Are there apartments in Sarjapur Road for sale?",
        answer: "Yes, there are several apartments in Sarjapur Road for sale. This area has witnessed a surge in new residential projects due to its proximity to major tech hubs.",
      },
      {
        question: "What makes Luxury Apartments in Sarjapur Road special?",
        answer: "Luxury apartments in Sarjapur Road are known for their spacious layouts, premium finishes, and modern amenities like pools, gyms, and smart home features.",
      },
    ]
  
    const varthurFAQs = [
      {
        question: "Is Varthur a good area to live in Bangalore?",
        answer: "Yes, Varthur is a great place to live! It offers a peaceful environment while being close to important places like Whitefield and other IT hubs.",
      },
      {
        question: "What is the price of a flat in Varthur?",
        answer: "The price of flats in Varthur can vary. On average, a 2 BHK or 3 BHK apartment might cost anywhere from ₹50 lakh to ₹1 crore.",
      },
      {
        question: "Are there 2 BHK flats for sale in Varthur, Bangalore?",
        answer: "Yes, you can find plenty of 2 BHK flats for sale in Varthur. The area is known for offering spacious homes at reasonable prices.",
      },
      {
        question: "What are the options for apartments in Varthur?",
        answer: "Varthur offers a range of apartments, from budget-friendly 2 BHK flats to more luxurious 3 BHK options with modern amenities.",
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
  
            <div className="mb-4 inline-flex items-center rounded-full bg-gray-900 p-1 ">
              <button
                onClick={() => handleLocationChange("sarjapur")}
                className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  activeLocation === "sarjapur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>Sarjapur</span>
              </button>
              <button
                onClick={() => handleLocationChange("varthur")}
                className={`flex items-center space-x-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  activeLocation === "varthur" ? "bg-gold-500 text-black shadow-md" : "text-gray-400 hover:text-white"
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
  
                    <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
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
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gold-600">
                  Contact Our Experts
                </a>
                <a href="tel:+91-8494966966" className="inline-flex items-center justify-center rounded-full border-2 border-gold-700 px-8 py-3 font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-900/20">
                  Call: +91-8494966966
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }