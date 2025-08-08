// "use client"

// import { useState } from "react"
// import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const testimonials = [
//   {
//     name: "Rita Chauhan",
//     role: "Happy Customer",
//     location: "Sarjapur, Bengaluru",
//     rating: 5,
//     image: "/placeholder.svg?height=80&width=80&text=RC",
//     testimonial:
//       "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
//   },
//   {
//     name: "Rajesh Kumar",
//     role: "Property Investor",
//     location: "Varthur, Bengaluru",
//     rating: 5,
//     image: "/placeholder.svg?height=80&width=80&text=RK",
//     testimonial:
//       "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
//   },
//   {
//     name: "Priya Sharma",
//     role: "Homeowner",
//     location: "Medahalli, Bengaluru",
//     rating: 5,
//     image: "/placeholder.svg?height=80&width=80&text=PS",
//     testimonial:
//       "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
//   },
// ]

// export function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <section className="py-24 gradient-secondary relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
//             Hear From Our
//             <span className="text-gradient block">Clients</span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Beyond Real Estate: Personal Stories of Satisfaction
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto">
//           {/* Main Testimonial */}
//           <div className="relative">
//             <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
//               {/* Background Pattern */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

//               {/* Quote Icon */}
//               <div className="absolute top-8 left-8">
//                 <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
//                   <Quote className="h-8 w-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="pt-16">
//                 {/* Rating */}
//                 <div className="flex items-center space-x-1 mb-6">
//                   {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
//                   ))}
//                 </div>

//                 {/* Testimonial Text */}
//                 <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 italic">
//                   "{testimonials[currentTestimonial].testimonial}"
//                 </blockquote>

//                 {/* Author Info */}
//                 <div className="flex items-center space-x-4">
//                   <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-lg">
//                     <span className="text-white font-bold text-lg">
//                       {testimonials[currentTestimonial].name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonial].name}</div>
//                     <div className="text-slate-600">{testimonials[currentTestimonial].role}</div>
//                     <div className="text-sm text-slate-500">{testimonials[currentTestimonial].location}</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation */}
//               <div className="absolute top-1/2 -translate-y-1/2 -left-0">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={prevTestimonial}
//                   className="w-12 h-12 rounded-full bg-white shadow-lg border-slate-200 hover:bg-slate-50"
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </Button>
//               </div>

//               <div className="absolute top-1/2 -translate-y-1/2 -right-0">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={nextTestimonial}
//                   className="w-12 h-12 rounded-full bg-white shadow-lg border-slate-200 hover:bg-slate-50"
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial Indicators */}
//           <div className="flex justify-center space-x-3 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentTestimonial(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentTestimonial ? "bg-[#d9a406] w-8" : "bg-slate-300 hover:bg-slate-400"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* All Testimonials Preview */}
//           <div className="grid md:grid-cols-3 gap-6 mt-16">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
//                   index === currentTestimonial
//                     ? "bg-white shadow-lg border-2 border-amber-200"
//                     : "bg-white/50 hover:bg-white/80 border border-slate-200"
//                 }`}
//                 onClick={() => setCurrentTestimonial(index)}
//               >
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
//                     <span className="text-white font-bold text-sm">
//                       {testimonial.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </span>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
//                     <div className="text-xs text-slate-600">{testimonial.role}</div>
//                   </div>
//                 </div>
//                 <p className="text-sm text-slate-600 line-clamp-3">"{testimonial.testimonial}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Rita Chauhan",
    role: "Happy Customer",
    location: "Sarjapur, Bengaluru",
    rating: 5,
    testimonial:
      "I invested in the current building which is located in Sarjapur in Bengaluru. The builder of this apartment Mr. Ram and Mr. Lakshman are a very nice person who accommodated my requests each and every time, there is a great transparency in his business and they will also suggest you the best possible ways in case if you are looking for any customisation of flats. RRL is offering very spacious flats for a very reasonable price, I am really happy with my purchase. You can blindly go with RRL Builders and Developers.",
  },
  {
    name: "Rajesh Kumar",
    role: "Property Investor",
    location: "Varthur, Bengaluru",
    rating: 5,
    testimonial:
      "Exceptional service and quality construction. The team at RRL Builders is professional and delivers on their promises. The amenities and location of RRL Palm Altezze exceeded my expectations. Highly recommended for anyone looking for premium properties in Bangalore.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Medahalli, Bengaluru",
    rating: 5,
    testimonial:
      "RRL Palacio has been a dream come true for our family. The construction quality is top-notch, and the customer service throughout the buying process was excellent. The location is perfect with great connectivity and all necessary amenities nearby.",
  },
  {
    name: "Suman Narayan",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Excellent! Nice workmanship, got interiors done in lesser time than I thought. It's quick, nice and neat.Even budget friendly too.I highly recommend RRL for interior designing.",
  },
  {
    name: "Subhash S",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Nice place to get your design in mind to make live, highly recommend for designing your dream office and home.",
  },
  {
    name: "Neelima Maryam",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Very happy with the designs and budget.",
  },
  {
    name: "Attili Nikhil",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Had a great experience with RRL. They execute what we tell them.I highly recommend to their 3D designs. They respond to us with great patience and even their price is very reasonable when compared with other interior designers quotations. And when it comes to green he is very nice guy who responds very well and gives us great designs and ideas. So I strongly recommend to go with RRL.",
  },
  {
    name: "Bipul Kumar Singh",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "We are very happy with the service provided by RRL. They handles all the requirements very carefully starting from the inception the model to delivering the good ideas for my flat with lots of transparency in the material.I would highly recommend RRL.",
  },
  {
    name: "Devam Rajaguru",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "We are very happy about the work, outcome is very nice.Thank you so much RRL team for turning this so well.",
  },
  {
    name: "Raaj Kumar",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "I had an exceptional experience with RRL. From layout analysis to execution, every aspect of their work was impeccable. Mr. Ram and Mr. Lakshman ensured the project was delivered on time and within the budget, paying close attention to detail. Despite being abroad, I felt reassured by Mr. Ram's regular visits and dedication to smooth project progress. For those seeking top-notch interior designs, I highly recommend RRL. Thank you for the fantastic work!",
  },
  {
    name: "Rubina A",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "We are so grateful to RRL who converted our flat into a beautiful home. From planning the perfect layout to the timely execution, we absolutely love their work. Mr. Ram and his team really took my space to next level that too in given time frame. Great value for the price. Will highly recommend RRL for his amazing communication skill and customer service. Thank you so much team.",
  },
  {
    name: "Karishma Jattan",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Happie wid the service provided.Good team.Reasonable price and wonders at designs.",
  },
  {
    name: "Basavaraj SP",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Very impressive interior designer, I am one of their customer. I can rate 5 out of 5.",
  },
  {
    name: "Sand Deep",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "An excellent piece of work by RRL. The design and work was well executed. We are very happy with the flawless execution and timely customer interaction by Mr. Pawan. His politeness, patience and perseverance are highly appreciated. Thanks to the entire team for highly professional work.",
  },
  {
    name: "Sanjay Sanju",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Amazing designs, almost future interior home ideas, good service.",
  },
  {
    name: "Rambabu Gajula",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Had good experience with RRL. Budget friendly interiors with good designs.",
  },
  {
    name: "Rajan Parmar",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "The services provided by RRL were smooth and satisfactory. Products and goods delivered were up to satisfaction... and compared to market price, strongly recommend.",
  },
  {
    name: "Rakshith Venkat",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "Happie with the maintenance and designs.U provide good carpenters team.",
  },
  {
    name: "Ramesh Kannan",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "They are very reasonable in price and very patiently deal with customers. There outputs are awesome they ensure high usability with the right designs and ensure the customer are delighted during designs and execution time.Happy that we got associated with them our interiors have come out very well.We are very much satisfied...Thank You.",
  },
  {
    name: "Manabjyoti Sharma",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "I am very happy with the service provided by RRL. Being myself remote, Mr. Pawan Kumar handles the work very nicely, quickly and responsibly. Thank you and I would recommend them for future projects.",
  },
  {
    name: "Harith Gowda",
    role: "Client",
    location: "Bengaluru",
    rating: 5,
    testimonial:
      "The Best design's with affordable price.Truly loved with the service.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            Hear From Our
            <span className="text-gradient block">Clients</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Beyond Real Estate: Personal Stories of Satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              {/* Testimonial Text */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 italic line-clamp-5">
                "{testimonial.testimonial}"
              </blockquote>
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-base">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  <div className="text-xs text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
