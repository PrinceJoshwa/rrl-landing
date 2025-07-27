"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rita Chauhan",
    role: "Happy Customer",
    location: "Sarjapur, Bengaluru",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=RC",
    testimonial:
      "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
  },
  {
    name: "Rajesh Kumar",
    role: "Property Investor",
    location: "Varthur, Bengaluru",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=RK",
    testimonial:
      "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Medahalli, Bengaluru",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=PS",
    testimonial:
      "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
  },
]

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            Hear From Our
            <span className="text-gradient block">Clients</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Beyond Real Estate: Personal Stories of Satisfaction
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              {/* Quote Icon */}
              <div className="absolute top-8 left-8">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-16">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-slate-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-sm text-slate-500">{testimonials[currentTestimonial].location}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-0">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white shadow-lg border-slate-200 hover:bg-slate-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-0">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white shadow-lg border-slate-200 hover:bg-slate-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-amber-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-white shadow-lg border-2 border-amber-200"
                    : "bg-white/50 hover:bg-white/80 border border-slate-200"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 line-clamp-3">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
