"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600">Take the First Step towards Your Real Estate Goals</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <Input
                  placeholder="Kindly enter your name here"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number *</label>
                <Input
                  placeholder="Kindly enter your phone number here"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Let's Talk About *</label>
              <Select
                value={formData.property}
                onValueChange={(value) => setFormData({ ...formData, property: value })}
              >
                <SelectTrigger>
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
              <p className="text-xs text-slate-500 mt-1">Kindly select the option for further communication</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <Textarea
                placeholder="Kindly write your query in brief"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
