"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Handshake, UserCheck, Star, Zap, BarChart, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ChannelPartnersPage() {
    const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", message: "" });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Partner registration submitted:", formData);
        alert("Thank you for your interest! Our team will contact you shortly.");
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 sm:py-32 bg-light-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            <Handshake className="h-5 w-5" />
            <span className="font-semibold">RRL: THE BRIDGE</span>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold font-playfair sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          >
            Become a <span className="text-gold-400">Channel Partner</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          >
            Collaborate, connect, and unlock new opportunities in real estate. Let's build the future together. 
          </motion.p>
        </div>
      </motion.section>

      {/* Why Partner Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-playfair sm:text-4xl">Empowering Success in Real Estate</h2>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-gray-400">
                At RRL, we know success is about more than transactions—it's about building strong relationships. Our channel partner program, "The Bridge," is built on a foundation of mutual growth, trust, and innovation. [cite: 148, 151, 152] Our dedicated partners are the backbone of our vision, helping us create lasting value for clients and transforming the real estate landscape together. 
            </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-light-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-playfair sm:text-4xl">Benefits of Partnering with RRL</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">Gain a competitive edge with our exclusive partner program.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold-500 mx-auto mb-4"><BarChart className="h-8 w-8 text-black" /></div>
                    <h3 className="text-xl font-bold">Real Estate Training</h3>
                    <p className="text-gray-400 mt-2">Comprehensive training and sales techniques to stay ahead in the market. [cite: 168, 169]</p>
                </div>
                <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold-500 mx-auto mb-4"><UserCheck className="h-8 w-8 text-black" /></div>
                    <h3 className="text-xl font-bold">Dedicated Partner Team</h3>
                    <p className="text-gray-400 mt-2">Access RRL's expert team for personalized support whenever you need it. </p>
                </div>
                <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold-500 mx-auto mb-4"><Calendar className="h-8 w-8 text-black" /></div>
                    <h3 className="text-xl font-bold">Exclusive Events</h3>
                    <p className="text-gray-400 mt-2">Invitations to pre-launch events, partner meetings, and networking opportunities. </p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-playfair sm:text-4xl">Insights from Our Partners</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">Hear from our partners about how our collaboration fuels mutual growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-gray-900/50 border-gold-800">
                    <CardContent className="p-8">
                        <Star className="h-6 w-6 text-gold-400 mb-4" />
                        <p className="text-gray-300 italic">"The best part of any RRL product is the value it provides. They consistently deliver the best returns and on-time handovers to residents, which makes our job easy. It all comes down to delivering customer happiness." [cite: 163, 164]</p>
                        <div className="mt-4 pt-4 border-t border-gold-800">
                            <p className="font-bold text-white">Mudit Sharma</p>
                            <p className="text-sm text-gray-400">Sales Head, Brick By Brick Consulting [cite: 159]</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gold-800">
                    <CardContent className="p-8">
                        <Star className="h-6 w-6 text-gold-400 mb-4" />
                        <p className="text-gray-300 italic">"Our strategic partnership with RRL has fostered sustained growth and mutual achievement. We have had the chance to collaborate closely, and we are fully aligned with their vision of quality and customer satisfaction." [cite: 160, 162]</p>
                        <div className="mt-4 pt-4 border-t border-gold-800">
                            <p className="font-bold text-white">Shreyansh Chamaria</p>
                            <p className="text-sm text-gray-400">Senior Vice President, Square Yards [cite: 160]</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 sm:py-24 bg-light-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-gray-900/50 border-gold-800 p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair text-gold-400">Become a Channel Partner</CardTitle>
              <p className="text-gray-400 mt-2">Register with us by filling out the form below. [cite: 166]</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="h-12 bg-black/30 border-gold-700 focus:border-gold-500" />
                  <Input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} required className="h-12 bg-black/30 border-gold-700 focus:border-gold-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="h-12 bg-black/30 border-gold-700 focus:border-gold-500" />
                  <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="h-12 bg-black/30 border-gold-700 focus:border-gold-500" />
                </div>
                <div>
                  <Textarea placeholder="Tell us about your company (Optional)" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-black/30 border-gold-700 focus:border-gold-500 min-h-[100px]" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                  Register Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}