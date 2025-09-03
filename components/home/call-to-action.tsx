"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    property: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">Request A Call Back</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Contact Us: Let's Start Your Real Estate Journey Together
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                    <Input
                      placeholder="Kindly enter your name here"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Contact Number *</label>
                    <Input
                      placeholder="Kindly enter your phone number here"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Let's Talk About *</label>
                  <Select
                    value={formData.property}
                    onValueChange={(value) => setFormData({ ...formData, property: value })}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Which Property are you looking for?" />
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
                  <p className="text-xs text-slate-400 mt-1">Kindly select the option for further communication</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Kindly write your query in brief"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-400 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white font-semibold py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
                >
                  Submit Request
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Take the First Step towards Your Real Estate Goals. Contact Our Expert Team for Personalised Real
                  Estate Assistance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                    <p className="text-slate-300">+91-8494966966</p>
                    {/* <p className="text-slate-300">+91-73378 16991</p> */}
                    <p className="text-xs text-slate-400 mt-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                    <p className="text-slate-300">info@rrl.com</p>
                    <p className="text-xs text-slate-400 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
                    <p className="text-slate-300">
                      RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Free parking available</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="glass-effect rounded-2xl p-6 mt-8">
                <h4 className="font-semibold mb-4">Why Choose RRL?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">29+ Years of Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">1000+ Happy Families</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Award-Winning Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Transparent & Honest Dealings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
