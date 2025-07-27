// import { Button } from "@/components/ui/button"
// import { Trophy, Award, Star, Medal, Calendar } from "lucide-react"
// import Image from "next/image"

// const awards = [
//   {
//     year: "2025",
//     title: "Times Real Estate Icon Awards",
//     category: "Builder of the Year - Mid Segment Housing",
//     icon: Trophy,
//     color: "from-amber-400 to-amber-600",
//   },
//   {
//     year: "2024",
//     title: "Excellence in Amenities Premium",
//     category: "Mid-Segment Homes",
//     icon: Medal,
//     color: "from-blue-400 to-blue-600",
//   },
//   {
//     year: "2023",
//     title: "Global Real Estate Brand Awards",
//     category: "Affordability Category Winner",
//     icon: Award,
//     color: "from-emerald-400 to-emerald-600",
//   },
//   {
//     year: "2023",
//     title: "Property Award of the Year",
//     category: "Affordable and High-end Property",
//     icon: Star,
//     color: "from-purple-400 to-purple-600",
//   },
// ]

// export function Awards() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
//             <Trophy className="h-5 w-5" />
//             <span className="font-semibold">RRL Legacy of Achievements</span>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
//             Committed to Results: Highlights of Our
//             <span className="text-gradient block">Real Estate Success</span>
//           </h2>

//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
//             commitment to delivering exceptional real estate services to our valued clients.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
//           {/* Awards List */}
//           <div className="space-y-6">
//             {awards.map((award, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     <award.icon className="h-8 w-8 text-white" />
//                   </div>

//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-2">
//                       <span className="text-2xl font-bold text-amber-600">{award.year}</span>
//                       <div className="h-6 w-px bg-slate-300"></div>
//                       <span className="text-sm text-slate-500 uppercase tracking-wide font-medium">
//                         {award.category}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
//                       {award.title}
//                     </h3>

//                     <div className="flex items-center space-x-2">
//                       <Calendar className="h-4 w-4 text-slate-400" />
//                       <span className="text-sm text-slate-600">Awarded in {award.year}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Awards Image */}
//           <div className="relative">
//             <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-8 shadow-2xl">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Awards%202.png-nDwSQYu66l4zY7gYDnLhrYo6e3UbQi.jpeg"
//                 alt="RRL Awards and Recognition Ceremony"
//                 width={600}
//                 height={500}
//                 className="rounded-2xl w-full h-auto shadow-lg"
//               />

//               {/* Floating Award Badge */}
//               <div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-lg">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-amber-600">4+</div>
//                   <div className="text-xs text-slate-600 font-medium">Major Awards</div>
//                 </div>
//               </div>

//               {/* Quote Overlay */}
//               <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-6">
//                 <p className="text-sm text-slate-700 italic mb-3">
//                   "Honesty and transparency form the core of our values. You can trust us to provide straightforward
//                   advice and maintain open communication throughout the process."
//                 </p>
//                 <div className="text-xs font-semibold text-amber-600">- RRL Developers and Builders</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <Button
//             size="lg"
//             className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
//           >
//             Explore RRL Awards
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Button } from "@/components/ui/button"
import { Trophy, Award, Star, Medal, Calendar } from "lucide-react"
// import Image from "next/image"

const awards = [
  {
    year: "2025",
    title: "Times Real Estate Icon Awards",
    category: "Builder of the Year - Mid Segment Housing",
    icon: Trophy,
    color: "from-amber-400 to-amber-600",
  },
  {
    year: "2024",
    title: "Excellence in Amenities Premium",
    category: "Mid-Segment Homes",
    icon: Medal,
    color: "from-blue-400 to-blue-600",
  },
  {
    year: "2023",
    title: "Global Real Estate Brand Awards",
    category: "Affordability Category Winner",
    icon: Award,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    year: "2023",
    title: "Property Award of the Year",
    category: "Affordable and High-end Property",
    icon: Star,
    color: "from-purple-400 to-purple-600",
  },
]

export function Awards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
            <Trophy className="h-5 w-5" />
            <span className="font-semibold">RRL Legacy of Achievements</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            Committed to Results: Highlights of Our
            <span className="text-gradient block">Real Estate Success</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
            commitment to delivering exceptional real estate services to our valued clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Awards List - Fixed Height Cards */}
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 h-32"
              >
                <div className="flex items-center space-x-4 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <award.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-amber-600">{award.year}</span>
                      <div className="h-6 w-px bg-slate-300"></div>
                      <span className="text-sm text-slate-500 uppercase tracking-wide font-medium truncate">
                        {award.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {award.title}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">Awarded in {award.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-8 shadow-2xl">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Awards%202.png-nDwSQYu66l4zY7gYDnLhrYo6e3UbQi.jpeg"
                alt="RRL Awards and Recognition Ceremony"
                width={600}
                height={500}
                className="rounded-2xl w-full h-auto shadow-lg"
              /> */}

              {/* Static Award Badge */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">4+</div>
                  <div className="text-xs text-slate-600 font-medium">Major Awards</div>
                </div>
              </div>

              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-6">
                <p className="text-sm text-slate-700 italic mb-3">
                  "Honesty and transparency form the core of our values. You can trust us to provide straightforward
                  advice and maintain open communication throughout the process."
                </p>
                <div className="text-xs font-semibold text-amber-600">- RRL Developers and Builders</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
          >
            Explore RRL Awards
          </Button>
        </div>
      </div>
    </section>
  )
}
