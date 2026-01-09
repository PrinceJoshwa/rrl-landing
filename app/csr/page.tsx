"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Users, Building2, CheckCircle2, Sprout, HandHeart, Sparkles } from "lucide-react"
import Image from "next/image"

export default function CSRPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          {/* Use a community/event related image here */}
          <Image 
            src="/LookProject5.jpeg" 
            alt="CSR Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
          >
            <Heart className="w-4 h-4 text-gold-500" />
            <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Community First</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Building <span className="text-gold-500">Communities</span>, <br /> Not Just Homes.
          </motion.h1>
        </motion.div>
      </section>

      {/* 2. MISSION STATEMENT */}
      <section className="py-20 bg-white text-black relative">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
                    Our Social <span className="text-gold-600">Commitment</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                    RRL Builders and Developers, recognized as trusted builders in Bangalore and a leading name in Sarjapur, actively contributes to social harmony and community welfare. Our CSR initiatives reflect our deep commitment to building stronger communities rooted in trust, unity, and heritage.
                </p>
            </div>

            {/* 3 PILLARS GRID */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair mb-4">Community Harmony</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We regularly host community events that foster inclusivity and cultural exchange. These gatherings bring together residents and local leaders to promote a sense of belonging.
                    </p>
                </motion.div>

                {/* Pillar 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
                        <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair mb-4">Heritage Preservation</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We support temple renovations and donations, recognizing them as vital centers of life. These contributions help preserve heritage and uplift local economies.
                    </p>
                </motion.div>

                {/* Pillar 3 */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair mb-4">Trusted Development</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Every project reflects not just architectural excellence, but social responsibility. We demonstrate to our investors that we are builders of a better society.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. IMPACT STATISTICS / HIGHLIGHTS */}
      <section className="py-20 bg-neutral-900 border-y border-gold-900/30">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                    { icon: Sprout, label: "Eco Initiatives", value: "100+" },
                    { icon: HandHeart, label: "Community Events", value: "50+" },
                    { icon: Building2, label: "Temples Supported", value: "12+" },
                    { icon: Users, label: "Lives Impacted", value: "5000+" },
                ].map((stat, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6"
                    >
                        <stat.icon className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                        <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
                        <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">
                Moments of <span className="text-gold-500">Giving Back</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
                {/* Large Main Image */}
                <div className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-neutral-800">
                    <Image 
                        src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg?updatedAt=1767702799008" 
                        alt="Community Event"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                        {/* <p className="text-white font-bold text-xl">Local Temple Renovation</p> */}
                    </div>
                </div>
                
                {/* Side Stack */}
                <div className="flex flex-col gap-6">
                    <div className="relative flex-1 rounded-2xl overflow-hidden group border border-neutral-800">
                        <Image 
                            src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg?updatedAt=1767702779226" 
                            alt="CSR Activity"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* <div className="relative flex-1 rounded-2xl overflow-hidden group border border-neutral-800">
                         <Image 
                            src="/LookProject5.jpeg" 
                            alt="Community Gathering"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div> */}
                </div>
            </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-gold-500 text-black text-center">
        <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-black/50" />
            <h2 className="text-4xl font-playfair font-bold mb-6">Partner in Our Journey</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 font-medium opacity-80">
                Join us in creating spaces that not only shelter families but also nurture the communities around them.
            </p>
        </div>
      </section>
    </div>
  )
}