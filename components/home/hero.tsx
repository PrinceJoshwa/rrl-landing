// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Award, ArrowRight, Play, Star, Building } from "lucide-react"
// import Image from "next/image"

// export function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       title: "Times Real Estate Icons Award",
//       subtitle: "2025 Winner",
//       description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20About%202-zM9MmpwqCq6RKBnrSJZ3uTXYC1oaYS.png",
//       badge: "Award Winner",
//     },
//     {
//       title: "Global Real Estate Brand",
//       subtitle: "2023 Champion",
//       description: "Recognized globally for excellence in affordable luxury real estate development",
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Awards%201.png-FksyLN1g6wHuUiW2glPRE7i36SyyTN.jpeg",
//       badge: "Global Recognition",
//     },
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [slides.length])

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 gradient-secondary">
//         <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
//         <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 animate-slide-up">
//             {/* Award Badge */}
//             <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-6 py-3 text-amber-800">
//               <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
//                 <Award className="h-4 w-4 text-white" />
//               </div>
//               <span className="font-semibold text-sm">Times Real Estate Icon Awards 2025 Winner</span>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-4">
//               <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-slate-900 leading-tight">
//                 RRL Builders &<span className="text-gradient block">Developers</span>
//               </h1>

//               <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
//                 Pioneers of affordable luxury residential and commercial spaces in Bangalore. With our in-depth
//                 knowledge of the local market and industry trends, we offer valuable insights to help you make
//                 well-informed decisions.
//               </p>
//             </div>

//             {/* Key Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-slate-900">600+</div>
//                 <div className="text-sm text-slate-600">Happy Families</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-slate-900">29</div>
//                 <div className="text-sm text-slate-600">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-slate-900">3+</div>
//                 <div className="text-sm text-slate-600">Projects Completed</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-slate-900">999+</div>
//                 <div className="text-sm text-slate-600">Sq Ft Covered</div>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
//               >
//                 Explore RRL Properties
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold group bg-transparent"
//               >
//                 <Play className="mr-2 h-5 w-5" />
//                 Watch Our Story
//               </Button>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex items-center space-x-6 pt-4">
//               <div className="flex items-center space-x-2">
//                 <div className="flex -space-x-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
//                   ))}
//                 </div>
//                 <span className="text-sm text-slate-600 font-medium">4.9/5 Customer Rating</span>
//               </div>

//               <div className="h-6 w-px bg-slate-300"></div>

//               <div className="flex items-center space-x-2">
//                 <Building className="h-5 w-5 text-amber-600" />
//                 <span className="text-sm text-slate-600 font-medium">150+ Dedicated Employees</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Dynamic Slider */}
//           <div className="relative">
//             <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
//               <Image
//                 src={slides[currentSlide].image || "/placeholder.svg"}
//                 alt={slides[currentSlide].title}
//                 width={600}
//                 height={400}
//                 className="rounded-2xl w-full h-auto"
//               />

//               {/* Slide Content Overlay */}
//               <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-6">
//                 <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
//                   {slides[currentSlide].badge}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">{slides[currentSlide].title}</h3>
//                 <p className="text-sm text-slate-600">{slides[currentSlide].description}</p>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-6 -right-6 w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-lg">
//                 <Award className="h-6 w-6 text-white" />
//               </div>
//             </div>

//             {/* Slide Indicators */}
//             <div className="flex justify-center space-x-2 mt-6">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide ? "bg-amber-600 w-8" : "bg-slate-300"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Background Decorations */}
//             <div className="absolute -z-10 top-10 -left-10 w-20 h-20 bg-amber-200/50 rounded-full blur-xl"></div>
//             <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Award, ArrowRight, Play, Star, Building } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Times Real Estate Icons Award",
      subtitle: "2025 Winner",
      description: "RRL Groups has crowned esteem award as builder of the year in Mid segment housing",
      // image:
      //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20About%202-zM9MmpwqCq6RKBnrSJZ3uTXYC1oaYS.png",
      badge: "Award Winner",
    },
    {
      title: "Global Real Estate Brand",
      subtitle: "2023 Champion",
      description: "Recognized globally for excellence in affordable luxury real estate development",
      // image:
      //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Awards%201.png-FksyLN1g6wHuUiW2glPRE7i36SyyTN.jpeg",
      badge: "Global Recognition",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 gradient-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Award Badge */}
            <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-6 py-3 text-amber-800">
              <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Times Real Estate Icon Awards 2025 Winner</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-slate-900 leading-tight">
                RRL Builders &<span className="text-gradient block">Developers</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Pioneers of affordable luxury residential and commercial spaces in Bangalore. With our in-depth
                knowledge of the local market and industry trends, we offer valuable insights to help you make
                well-informed decisions.
              </p>
            </div>

            {/* Key Stats - Fixed Height Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center h-20 flex flex-col justify-center">
                <div className="text-3xl font-bold text-slate-900">600+</div>
                <div className="text-sm text-slate-600">Happy Families</div>
              </div>
              <div className="text-center h-20 flex flex-col justify-center">
                <div className="text-3xl font-bold text-slate-900">29</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center h-20 flex flex-col justify-center">
                <div className="text-3xl font-bold text-slate-900">3+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center h-20 flex flex-col justify-center">
                <div className="text-3xl font-bold text-slate-900">999+</div>
                <div className="text-sm text-slate-600">Sq Ft Covered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
              >
                Explore RRL Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-slate-600 font-medium">4.9/5 Customer Rating</span>
              </div>

              <div className="h-6 w-px bg-slate-300"></div>

              <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-amber-600" />
                <span className="text-sm text-slate-600 font-medium">150+ Dedicated Employees</span>
              </div>
            </div>
          </div>

          {/* Right Content - Static Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              {/* <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto"
              /> */}

              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-6">
                <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {slides[currentSlide].badge}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{slides[currentSlide].title}</h3>
                <p className="text-sm text-slate-600">{slides[currentSlide].description}</p>
              </div>

              {/* Award Badge */}
              <div className="absolute -top-6 -right-6 w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-amber-600 w-8" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
