// // // import { ContactHero } from "@/components/contact/contact-hero"
// // // import { ContactForm } from "@/components/contact/contact-form"
// // // import { LocationMap } from "@/components/contact/location-map"
// // // import { PropertyLocations } from "@/components/contact/property-locations"

// // // export default function ContactPage() {
// // //   return (
// // //     <>
// // //       <ContactHero />
// // //       <ContactForm />
// // //       <LocationMap />
// // //       <PropertyLocations />
// // //     </>
// // //   )
// // // }

// // "use client"

// // import type React from "react"
// // import { useState } from "react"

// // // UI Components (assuming these are in the specified paths)
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // // Icons from lucide-react
// // import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

// // // ========== 1. CONTACT HERO COMPONENT ==========
// // function ContactHero() {
// //   return (
// //     <section className="py-20 gradient-bg">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-8">
// //             <div className="space-y-4">
// //               <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact RRL</h1>

// //               <p className="text-xl text-slate-600 leading-relaxed">
// //                 Let's Discuss Your Property Needs. Get in touch with our expert team for personalized real estate
// //                 assistance.
// //               </p>
// //             </div>

// //             {/* Contact Info */}
// //             <div className="space-y-6">
// //               <div className="flex items-start space-x-4">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <Phone className="h-6 w-6 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
// //                   <p className="text-slate-600">+91-8068352626</p>
// //                   <p className="text-slate-600">+91-73378 16991</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-4">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <Mail className="h-6 w-6 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
// //                   <p className="text-slate-600">enquiry@rrlbuildersanddevelopers.com</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-4">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <MapPin className="h-6 w-6 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
// //                   <p className="text-slate-600">
// //                     RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-4">
// //                 <div className="w-12 h-12 bg-[#d9a406] rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <Clock className="h-6 w-6 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
// //                   <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
// //                   <p className="text-slate-600">Sunday: 10:00 AM - 4:00 PM</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Content - Image */}
// //           <div className="relative">
// //             <div className="bg-white rounded-2xl shadow-2xl p-8">
// //               <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="w-16 h-16 bg-[#d9a406] rounded-full flex items-center justify-center mx-auto mb-4">
// //                     <Phone className="h-8 w-8 text-white" />
// //                   </div>
// //                   <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Connect?</h3>
// //                   <p className="text-slate-600">We're here to help you find your dream property</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 2. CONTACT FORM COMPONENT ==========
// // function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     contact: "",
// //     property: "",
// //     message: "",
// //   })

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     // Handle form submission
// //     console.log("Form submitted:", formData)
// //   }

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
// //           <p className="text-xl text-slate-600">Take the First Step towards Your Real Estate Goals</p>
// //         </div>

// //         <div className="max-w-2xl mx-auto">
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
// //                 <Input
// //                   placeholder="Kindly enter your name here"
// //                   value={formData.name}
// //                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number *</label>
// //                 <Input
// //                   placeholder="Kindly enter your phone number here"
// //                   value={formData.contact}
// //                   onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-slate-700 mb-2">Let's Talk About *</label>
// //               <Select
// //                 value={formData.property}
// //                 onValueChange={(value) => setFormData({ ...formData, property: value })}
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue placeholder="Which Property are you looking for?" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="palacio">RRL Palacio</SelectItem>
// //                   <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
// //                   <SelectItem value="sequoia">RRL Sequoia</SelectItem>
// //                   <SelectItem value="nature-woods">RRL Nature Woods</SelectItem>
// //                   <SelectItem value="oasis">RRL Oasis</SelectItem>
// //                   <SelectItem value="towers">RRL Towers</SelectItem>
// //                   <SelectItem value="other">Other</SelectItem>
// //                 </SelectContent>
// //               </Select>
// //               <p className="text-xs text-slate-500 mt-1">Kindly select the option for further communication</p>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
// //               <Textarea
// //                 placeholder="Kindly write your query in brief"
// //                 value={formData.message}
// //                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //                 className="min-h-[120px]"
// //               />
// //             </div>

// //             <Button type="submit" size="lg" className="w-full bg-[#d9a406] hover:bg-yellow-700 text-white">
// //               Submit
// //             </Button>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 3. LOCATION MAP COMPONENT ==========
// // function LocationMap() {
// //   return (
// //     <section className="py-20 gradient-bg">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">RRL Corporate Office Location Map</h2>
// //           <p className="text-xl text-slate-600">Visit our office for personalized consultation and property tours</p>
// //         </div>

// //         <div className="max-w-4xl mx-auto">
// //           <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// //             <div className="aspect-video">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.362002591125!2d77.7882202758816!3d12.88458921676643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b93475563f%3A0x5340058237622d51!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1692789189912!5m2!1sen!2sin"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen={true}
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //                 title="RRL Corporate Office Location"
// //                 className="rounded-t-2xl"
// //               ></iframe>
// //             </div>

// //             {/* Address details below the map */}
// //             <div className="p-6 bg-slate-50">
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-slate-900 mb-2">RRL Corporate Office</h3>
// //                 <p className="text-slate-600 mb-2">
// //                   RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// //                 </p>
// //                 <div className="flex justify-center space-x-6 text-sm text-slate-500">
// //                   <span>📞 +91-8068352626</span>
// //                   <span>✉️ enquiry@rrlbuildersanddevelopers.com</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 4. PROPERTY LOCATIONS COMPONENT ==========
// // function PropertyLocations() {
// //   const properties = [
// //     {
// //       name: "RRL Palacio",
// //       description: "Our newly constructed luxury property, situated in Medahalli",
// //       location: "Medahalli",
// //     },
// //     {
// //       name: "RRL Palm Altezze",
// //       description: "Our latest premium property located at Varthur, Bangalore",
// //       location: "Varthur, Bangalore",
// //     },
// //     {
// //       name: "RRL Sequoia",
// //       description: "Our latest luxurious Villa located at Varthur, Bangalore",
// //       location: "Varthur, Bangalore",
// //     },
// //     {
// //       name: "RRL Nature Woods",
// //       description: "Our premium awarded property, situated in heart of Sarjapur",
// //       location: "Sarjapur",
// //     },
// //     {
// //       name: "RRL Tower",
// //       description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
// //       location: "Sampige Jala, Sarjapur",
// //     },
// //     {
// //       name: "RRL Complex",
// //       description: "Our 12th Commercial Building situated in South of Bangalore",
// //       location: "South Bangalore",
// //     },
// //   ]

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience The Art of Living</h2>
// //           <p className="text-xl text-slate-600">Visit our Properties for a walk-in</p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {properties.map((property, index) => (
// //             <div
// //               key={index}
// //               className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
// //             >
// //               <div className="flex items-start justify-between mb-4">
// //                 <h3 className="text-xl font-bold text-slate-900">{property.name}</h3>
// //                 <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
// //                   <MapPin className="h-4 w-4 text-slate-600" />
// //                 </div>
// //               </div>

// //               <p className="text-slate-600 mb-4 leading-relaxed">{property.description}</p>

// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center space-x-2 text-slate-500">
// //                   <MapPin className="h-4 w-4" />
// //                   <span className="text-sm">{property.location}</span>
// //                 </div>

// //                 <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
// //                   Explore Location
// //                   <ArrowRight className="h-4 w-4 ml-1" />
// //                 </Button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== FINAL PAGE EXPORT ==========
// // export default function ContactPage() {
// //   return (
// //     <>
// //       <ContactHero />
// //       <ContactForm />
// //       <LocationMap />
// //       <PropertyLocations />
// //     </>
// //   )
// // }

// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Phone, Mail, MapPin, Clock } from "lucide-react"

// function ContactHero() {
//   return (
//     <motion.section 
//       className="py-20 bg-black text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
//       <div className="container mx-auto px-4 relative">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-5xl font-bold font-playfair">Contact RRL</h1>
//           <p className="text-xl text-gray-400 leading-relaxed mt-4">
//             Let's discuss your property needs. Get in touch with our expert team for personalized real estate assistance.
//           </p>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// function ContactForm() {
//   return (
//     <section className="py-20 bg-light-gold">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <motion.div 
//               className="flex items-start space-x-4"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Phone className="h-6 w-6 text-black" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-black mb-1">Call Us</h3>
//                 <p className="text-gray-700">+91-8068352626</p>
//               </div>
//             </motion.div>
//             <motion.div 
//               className="flex items-start space-x-4"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Mail className="h-6 w-6 text-black" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-black mb-1">Email Us</h3>
//                 <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
//               </div>
//             </motion.div>
//             <motion.div 
//               className="flex items-start space-x-4"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <MapPin className="h-6 w-6 text-black" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-black mb-1">Visit Us</h3>
//                 <p className="text-gray-700">RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
//               </div>
//             </motion.div>
//           </div>
//           <motion.div 
//             className="bg-white rounded-2xl shadow-2xl p-8"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get In Touch</h2>
//             <form className="space-y-6">
//               <Input placeholder="Your Name" required />
//               <Input placeholder="Contact Number" required />
//               <Select>
//                 <SelectTrigger><SelectValue placeholder="I'm interested in..." /></SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="palacio">RRL Palacio</SelectItem>
//                   <SelectItem value="sequoia">RRL Sequoia</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Textarea placeholder="Your Message" className="min-h-[120px]" />
//               <Button type="submit" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-black">Submit</Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function LocationMap() {
//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Our Corporate Office</h2>
//         </div>
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
//             <div className="aspect-video">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.362002591125!2d77.7882202758816!3d12.88458921676643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b93475563f%3A0x5340058237622d51!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1692789189912!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen={true}
//                 loading="lazy"
//                 title="RRL Corporate Office Location"
//                 className="rounded-t-2xl"
//               ></iframe>
//             </div>
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-bold text-white mb-2">RRL Corporate Office</h3>
//               <p className="text-gray-400">RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// export default function ContactPage() {
//   return (
//     <>
//       <ContactHero />
//       <ContactForm />
//       <LocationMap />
//     </>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react" // Added for form state
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

function ContactHero() {
  return (
    <motion.section 
      className="py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair">Contact RRL</h1>
          <p className="text-xl text-gray-400 leading-relaxed mt-4">
            Let's discuss your property needs. Get in touch with our expert team for personalized real estate assistance.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

function ContactForm() {
  // ADDED: useState and handleSubmit for form functionality
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    property: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-light-gold">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Call Us</h3>
                <p className="text-gray-700">+91-8068352626</p>
                {/* ADDED: Second phone number */}
                {/* <p className="text-gray-700">+91-73378 16991</p> */}
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Email Us</h3>
                <p className="text-gray-700">enquiry@rrlbuildersanddevelopers.com</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Visit Us</h3>
                <p className="text-gray-700">RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
              </div>
            </motion.div>
            {/* ADDED: Business Hours section */}
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Business Hours</h3>
                <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get In Touch</h2>
            {/* ADDED: Form functionality */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
              <Input 
                placeholder="Contact Number" 
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required 
              />
              {/* ADDED: Full list of properties in Select */}
              <Select
                value={formData.property}
                onValueChange={(value) => setFormData({ ...formData, property: value })}
              >
                <SelectTrigger><SelectValue placeholder="I'm interested in..." /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="palacio">RRL Palacio</SelectItem>
                  <SelectItem value="altezze">RRL Palm Altezze</SelectItem>
                  <SelectItem value="sequoia">RRL Sequoia</SelectItem>
                  <SelectItem value="nature-woods">RRL Nature Woods</SelectItem>
                  <SelectItem value="oasis">RRL Oasis</SelectItem>
                  <SelectItem value="towers">RRL Towers</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea 
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px]" 
              />
              <Button type="submit" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-black">Submit</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LocationMap() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Our Corporate Office</h2>
          {/* ADDED: Subtitle for the map section */}
          <p className="text-xl text-gray-400">Visit our office for personalized consultation and property tours.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.362002591125!2d77.7882202758816!3d12.88458921676643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b93475563f%3A0x5340058237622d51!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1692789189912!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="RRL Corporate Office Location"
                className="rounded-t-2xl"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">RRL Corporate Office</h3>
              <p className="text-gray-400 mb-2">RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
              {/* ADDED: Contact details below the map */}
              <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>📞 +91-8068352626</span>
                <span>✉️ enquiry@rrlbuildersanddevelopers.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ADDED: Entire PropertyLocations component restored from old file and restyled
function PropertyLocations() {
    const properties = [
      {
        name: "RRL Palacio",
        description: "Our newly constructed luxury property, situated in Medahalli",
        location: "Medahalli",
      },
      {
        name: "RRL Palm Altezze",
        description: "Our latest premium property located at Varthur, Bangalore",
        location: "Varthur, Bangalore",
      },
      {
        name: "RRL Sequoia",
        description: "Our latest luxurious Villa located at Varthur, Bangalore",
        location: "Varthur, Bangalore",
      },
      {
        name: "RRL Nature Woods",
        description: "Our premium awarded property, situated in heart of Sarjapur",
        location: "Sarjapur",
      },
      {
        name: "RRL Tower",
        description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
        location: "Sampige Jala, Sarjapur",
      },
      {
        name: "RRL Complex",
        description: "Our 12th Commercial Building situated in South of Bangalore",
        location: "South Bangalore",
      },
    ]
  
    return (
      <section className="py-20 bg-light-gold">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-playfair">Experience The Art of Living</h2>
            <p className="text-xl text-gray-700">Visit our Properties for a walk-in</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black">{property.name}</h3>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
  
                <p className="text-gray-700 mb-4 leading-relaxed">{property.description}</p>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
  
                  <Button variant="ghost" size="sm" className="text-gold-600 hover:text-gold-700 hover:bg-gold-50">
                    Explore Location
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <LocationMap />
      {/* <PropertyLocations /> ADDED: Component added to the final page export */}
    </>
  )
}