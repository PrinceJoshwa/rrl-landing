"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, MapPin, Building2, User, Mail, Phone, Globe } from "lucide-react"

// UI Components (Assuming these exist in your project based on provided files)
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Header } from "@/components/layout/header" // Integrating your existing Header component

export default function WalkinPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    location: "",
    project: "",
    remarks: "",
  })

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle Select Changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Replace with your actual Formspree Form ID
      const res = await fetch("https://formspree.io/f/xaqwanga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Walk-in Enquiry - ${formData.name}`, // Subject line for email
        }),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({
            name: "",
            email: "",
            phone: "",
            source: "",
            location: "",
            project: "",
            remarks: "",
        })
      } else {
        alert("Failed to submit the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9a406] selection:text-black">
      {/* Include existing Header */}
      {/* <div className="relative z-50">
        <Header />
      </div> */}

      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-[#d9a406]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#d9a406]/5 blur-[100px]" />

        <div className="container relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 px-4 py-2 text-[#d9a406] mb-4">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Site Visit Registration</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
                Welcome to <span className="text-[#d9a406]">RRL Group</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Please fill in your details to register your walk-in enquiry.
              </p>
            </div>

            <Card className="bg-neutral-900/80 border-[#d9a406]/30 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-white">Walk-in Form</CardTitle>
                <CardDescription className="text-gray-400">
                  Fields marked with * are mandatory
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                        <Send className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                    <p className="text-gray-400 max-w-md">
                      Your details have been successfully registered. Our executive will attend to you shortly.
                    </p>
                    <Button 
                        onClick={() => setSuccess(false)}
                        variant="outline"
                        className="mt-6 border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black"
                    >
                        Register Another Enquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <User className="h-4 w-4 text-[#d9a406]" /> Name *
                        </label>
                        <Input
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-black/50 border-gray-700 focus:border-[#d9a406] text-white h-12"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[#d9a406]" /> Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-black/50 border-gray-700 focus:border-[#d9a406] text-white h-12"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Phone className="h-4 w-4 text-[#d9a406]" /> Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="Enter 10-digit number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          className="bg-black/50 border-gray-700 focus:border-[#d9a406] text-white h-12"
                        />
                      </div>

                      {/* Your Location */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#d9a406]" /> Your Location *
                        </label>
                        <Input
                          name="location"
                          placeholder="e.g. Indiranagar, Bangalore"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="bg-black/50 border-gray-700 focus:border-[#d9a406] text-white h-12"
                        />
                      </div>

                      {/* Source of Lead */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Globe className="h-4 w-4 text-[#d9a406]" /> Source of Lead *
                        </label>
                        <Input
                          name="source"
                          placeholder="e.g. Google, Instagram, Referral"
                          value={formData.source}
                          onChange={handleInputChange}
                          required
                          className="bg-black/50 border-gray-700 focus:border-[#d9a406] text-white h-12"
                        />
                      </div>

                      {/* Project Inquired */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-[#d9a406]" /> Project Inquired *
                        </label>
                        <Select 
                          value={formData.project} 
                          onValueChange={(val) => handleSelectChange("project", val)}
                          required
                        >
                          <SelectTrigger className="bg-black/50 border-gray-700 focus:ring-[#d9a406] text-white h-12">
                            <SelectValue placeholder="Select a project" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-900 border-[#d9a406]/30 text-white">
                            <SelectItem value="RRL Palacio">RRL Palacio</SelectItem>
                            <SelectItem value="RRL Palm Altezze">RRL Palm Altezze</SelectItem>
                            <SelectItem value="RRL NC216">RRL NC216</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Remarks */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Remarks (Optional)</label>
                      <Textarea
                        name="remarks"
                        placeholder="Any specific requirements or comments..."
                        value={formData.remarks}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 focus:border-[#d9a406] text-white min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 text-lg font-bold bg-[#d9a406] text-black hover:bg-[#b08505] transition-all duration-300 rounded-lg mt-6"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                        </>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  )
}