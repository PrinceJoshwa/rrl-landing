// "use client"

// import { useEffect, useState } from "react"
// import { Users, Building, Target, Award } from "lucide-react"

// const stats = [
//   {
//     icon: Users,
//     value: 600,
//     suffix: "+",
//     label: "Happy Families",
//     description: "Satisfied customers across Bangalore",
//     color: "from-blue-400 to-blue-600",
//   },
//   {
//     icon: Building,
//     value: 3,
//     suffix: "+",
//     label: "Projects Completed",
//     description: "Premium residential developments",
//     color: "from-emerald-400 to-emerald-600",
//   },
//   {
//     icon: Target,
//     value: 999,
//     suffix: "+",
//     label: "Sq Ft Covered",
//     description: "Total construction area delivered",
//     color: "bg-[#d9a406]",
//   },
//   {
//     icon: Award,
//     value: 150,
//     suffix: "+",
//     label: "Dedicated Employees",
//     description: "Professional team members",
//     color: "from-purple-400 to-purple-600",
//   },
// ]

// function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     let startTime: number
//     let animationFrame: number

//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime
//       const progress = Math.min((currentTime - startTime) / duration, 1)

//       setCount(Math.floor(progress * end))

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate)
//       }
//     }

//     animationFrame = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(animationFrame)
//   }, [end, duration])

//   return <span>{count}</span>
// }

// export function Stats() {
//   return (
//     <section className="py-24 gradient-secondary relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "3s" }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
//             The Outstanding
//             <span className="text-gradient block">Growth</span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Celebrating Growth: Highlights of Our Accomplishments
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
//               {/* Card */}
//               <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
//                 {/* Background Gradient */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
//                 ></div>

//                 {/* Icon */}
//                 <div className="relative mb-6">
//                   <div
//                     className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//                   >
//                     <stat.icon className="h-10 w-10 text-white" />
//                   </div>

//                   {/* Floating Ring */}
//                   <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current opacity-20 scale-110 group-hover:scale-125 transition-all duration-300"></div>
//                 </div>

//                 {/* Stats */}
//                 <div className="text-center relative">
//                   <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
//                     <CountUp end={stat.value} />
//                     <span>{stat.suffix}</span>
//                   </div>

//                   <div className="text-lg font-semibold text-slate-700 mb-3">{stat.label}</div>

//                   <div className="text-sm text-slate-500 leading-relaxed">{stat.description}</div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
//                 <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Quote */}
//         <div className="text-center mt-16">
//           <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8">
//             <p className="text-lg text-slate-700 italic leading-relaxed">
//               "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
//               you make well-informed decisions. Let us build an affordable society together."
//             </p>
//             <div className="text-amber-600 font-semibold mt-4">- RRL Developers and Builders</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Users, Building, Target, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Happy Families",
    description: "Satisfied customers",
    // color: "from-blue-400 to-blue-600",
    color: "bg-[#d9a406]",

  },
  {
    icon: Building,
    value: "3+",
    label: "Projects Completed",
    description: "Premium residential developments",
    // color: "from-emerald-400 to-emerald-600",
    color: "bg-black",
  },
  {
    icon: Target,
    value: "999+",
    label: "Sq Ft Covered",
    description: "Total construction area delivered",
    color: "bg-[#d9a406]",
  },
  {
    icon: Award,
    value: "150+",
    label: "Dedicated Employees",
    description: "Professional team members",
    // color: "from-purple-400 to-purple-600",
    color: "bg-black",
  },
]

export function Stats() {
  return (
    <section className="py-24 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            The Outstanding
            <span className="text-gradient block">Growth</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Celebrating Growth: Highlights of Our Accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              {/* Fixed Height Card */}
              <div className="card-consistent bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-68">
                <div className="card-content">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <stat.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-slate-700 mb-3">{stat.label}</div>
                    <div className="text-sm text-slate-500 leading-relaxed">{stat.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8">
            <p className="text-lg text-slate-700 italic leading-relaxed">
              "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
              you make well-informed decisions. Let us build an affordable society together."
            </p>
            <div className="text-amber-600 font-semibold mt-4">- RRL Developers and Builders</div>
          </div>
        </div>
      </div>
    </section>
  )
}
