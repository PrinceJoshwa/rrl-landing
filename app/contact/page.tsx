// // "use client"

// // import React, { useState } from "react"
// // import { motion } from "framer-motion"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { Phone, Mail, MapPin, Clock } from "lucide-react"

// // function ContactHero() {
// //   return (
// //     <motion.section
// //       className="py-20 bg-black text-white relative"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 1 }}
// //     >
// //       <div className="absolute inset-0 bg-grid-white/[0.05]" />
// //       <div className="container mx-auto px-4 relative">
// //         <div className="text-center">
// //           <h1 className="text-4xl md:text-5xl font-bold font-playfair">Contact RRL</h1>
// //           <p className="text-xl text-gray-400 leading-relaxed mt-4">
// //             Let's discuss your property needs. Get in touch with our expert team for personalized real estate assistance.
// //           </p>
// //         </div>
// //       </div>
// //     </motion.section>
// //   )
// // }

// // function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     contact: "",
// //     property: "",
// //     message: "",
// //   })
// //   const [loading, setLoading] = useState(false)

// //   const handleChange = (field: string, value: string) => {
// //     setFormData(prev => ({ ...prev, [field]: value }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault()
// //     setLoading(true)

// //     try {
// //       const res = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       })

// //       const data = await res.json()

// //       if (data.success) {
// //         alert("✅ Message sent successfully!")
// //         setFormData({ name: "", contact: "", property: "", message: "" })
// //       } else {
// //         alert("❌ Failed to send message. Please try again later.")
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //       alert("⚠️ Something went wrong. Please try again.")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <section className="py-20 bg-light-gold">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* LEFT SIDE INFO */}
// //           <div className="space-y-6">
// //             <InfoItem icon={Phone} title="Call Us" text="+91-8494966966" />
// //             <InfoItem icon={Mail} title="Email Us" text="enquiry@rrlbuildersanddevelopers.com" />
// //             <InfoItem
// //               icon={MapPin}
// //               title="Visit Us"
// //               text="RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113"
// //             />
// //             <InfoItem
// //               icon={Clock}
// //               title="Business Hours"
// //               text="Mon–Sat: 9:00 AM – 6:00 PM\nSunday: 10:00 AM – 4:00 PM"
// //             />
// //           </div>

// //           {/* RIGHT SIDE FORM */}
// //           <motion.div
// //             className="bg-white rounded-2xl shadow-2xl p-8"
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get In Touch</h2>

// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <Input
// //                 placeholder="Your Name"
// //                 value={formData.name}
// //                 onChange={(e) => handleChange("name", e.target.value)}
// //                 required
// //               />

// //               <Input
// //                 placeholder="Contact Number"
// //                 value={formData.contact}
// //                 onChange={(e) => handleChange("contact", e.target.value)}
// //                 required
// //               />

// //               <Select
// //                 value={formData.property}
// //                 onValueChange={(value) => handleChange("property", value)}
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue placeholder="I'm interested in..." />
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

// //               <Textarea
// //                 placeholder="Your Message"
// //                 value={formData.message}
// //                 onChange={(e) => handleChange("message", e.target.value)}
// //                 className="min-h-[120px]"
// //               />

// //               <Button
// //                 type="submit"
// //                 size="lg"
// //                 className="w-full bg-gold-500 hover:bg-gold-600 text-black"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Sending..." : "Submit"}
// //               </Button>
// //             </form>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // function InfoItem({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
// //   return (
// //     <motion.div
// //       className="flex items-start space-x-4"
// //       initial={{ opacity: 0, x: -50 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
// //         <Icon className="h-6 w-6 text-black" />
// //       </div>
// //       <div>
// //         <h3 className="font-semibold text-black mb-1">{title}</h3>
// //         {text.split("\n").map((line, i) => (
// //           <p key={i} className="text-gray-700">
// //             {line}
// //           </p>
// //         ))}
// //       </div>
// //     </motion.div>
// //   )
// // }

// // function LocationMap() {
// //   return (
// //     <section className="py-20 bg-black">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
// //             Our Corporate Office
// //           </h2>
// //           <p className="text-xl text-gray-400">
// //             Visit our office for personalized consultation and property tours.
// //           </p>
// //         </div>

// //         <div className="max-w-4xl mx-auto">
// //           <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
// //             <div className="aspect-video">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.362002591125!2d77.7882202758816!3d12.88458921676643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b93475563f%3A0x5340058237622d51!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1692789189912!5m2!1sen!2sin"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen
// //                 loading="lazy"
// //                 title="RRL Corporate Office Location"
// //                 className="rounded-t-2xl"
// //               ></iframe>
// //             </div>

// //             <div className="p-6 text-center">
// //               <h3 className="text-xl font-bold text-white mb-2">RRL Corporate Office</h3>
// //               <p className="text-gray-400 mb-2">
// //                 RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
// //               </p>
// //               <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
// //                 <span>📞 +91-8494966966</span>
// //                 <span>✉️ enquiry@rrlbuildersanddevelopers.com</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default function ContactPage() {
// //   return (
// //     <>
// //       <ContactHero />
// //       <ContactForm />
// //       <LocationMap />
// //     </>
// //   )
// // }


"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

function ContactHero() {
  return (
    <motion.section
      className="py-20 bg-black text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
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
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    property: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // MODIFICATION: This function now submits to a Formspree endpoint.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Replace 'YOUR_CONTACT_FORM_ID' with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/mldpovyy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert("✅ Message sent successfully!")
        setFormData({ name: "", contact: "", property: "", message: "" })
      } else {
        alert("❌ Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("⚠️ Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-light-gold">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE INFO */}
          <div className="space-y-6">
            <InfoItem icon={Phone} title="Call Us" text="+91-8494966966" />
            <InfoItem icon={Mail} title="Email Us" text="enquiry@rrlbuildersanddevelopers.com" />
            <InfoItem
              icon={MapPin}
              title="Visit Us"
              text="RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113"
            />
            <InfoItem
              icon={Clock}
              title="Business Hours"
              text="Mon–Sat: 9:00 AM – 6:00 PM\nSunday: 10:00 AM – 4:00 PM"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />

              <Input
                placeholder="Contact Number"
                value={formData.contact}
                onChange={(e) => handleChange("contact", e.target.value)}
                required
              />

              <Select
                value={formData.property}
                onValueChange={(value) => handleChange("property", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="I'm interested in..." />
                </SelectTrigger>
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
                onChange={(e) => handleChange("message", e.target.value)}
                className="min-h-[120px]"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold-500 hover:bg-gold-600 text-black"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <motion.div
      className="flex items-start space-x-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="h-6 w-6 text-black" />
      </div>
      <div>
        <h3 className="font-semibold text-black mb-1">{title}</h3>
        {text.split("\n").map((line, i) => (
          <p key={i} className="text-gray-700">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

function LocationMap() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Our Corporate Office
          </h2>
          <p className="text-xl text-gray-400">
            Visit our office for personalized consultation and property tours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.362002591125!2d77.7882202758816!3d12.88458921676643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b93475563f%3A0x5340058237622d51!2sRRL%20Towers!5e0!3m2!1sen!2sin!4v1692789189912!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="RRL Corporate Office Location"
                className="rounded-t-2xl"
              ></iframe>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">RRL Corporate Office</h3>
              <p className="text-gray-400 mb-2">
                RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
              </p>
              <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span>📞 +91-8494966966</span>
                <span>✉️ enquiry@rrlbuildersanddevelopers.com</span>
              </div>
            </div>
          </div>
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
    </>
  )
}
