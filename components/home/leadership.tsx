// import { Button } from "@/components/ui/button"
// import { Users, Award, Target, Lightbulb } from "lucide-react"
// // import Image from "next/image"

// export function Leadership() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800">
//                 <Users className="h-5 w-5" />
//                 <span className="font-semibold">Leadership Excellence</span>
//               </div>

//               <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900">
//                 Young Entrepreneurs:
//                 <span className="text-gradient block">Transforming The Real Estate Landscape</span>
//               </h2>

//               <p className="text-lg text-slate-600 leading-relaxed">
//                 When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
//                 Ram Reddy and Mr. Lakshman from RRL Builders and Developers Pvt Ltd stand out in the industry with their
//                 innovative approach.
//               </p>
//             </div>

//             {/* Leadership Highlights */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
//                   <Award className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-slate-900">10+ Years Experience</h3>
//                 <p className="text-sm text-slate-600">
//                   Exceptional business acumen and established leadership in commercial spaces
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
//                   <Target className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-slate-900">Market Understanding</h3>
//                 <p className="text-sm text-slate-600">
//                   Deep understanding of market trends, local preferences, and industry dynamics
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center">
//                   <Lightbulb className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-slate-900">Innovation Focus</h3>
//                 <p className="text-sm text-slate-600">
//                   Innovative approach to real estate development and customer satisfaction
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
//                   <Users className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-slate-900">Customer Centric</h3>
//                 <p className="text-sm text-slate-600">
//                   Dedicated to providing luxurious living spaces ensuring affordability
//                 </p>
//               </div>
//             </div>

//             <Button className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
//               Read About RRL
//             </Button>
//           </div>

//           {/* Right Content - Leadership Images */}
//           <div className="relative">
//             <div className="grid grid-cols-2 gap-6">
//               {/* Main Leadership Image */}
//               <div className="col-span-2">
//                 <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-6 shadow-xl">
//                   {/* <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Home%202-BTGq2jWHJXPHjrYSDBujfEjUbwpoLK.png"
//                     alt="RRL Leadership Team"
//                     width={500}
//                     height={300}
//                     className="rounded-2xl w-full h-auto shadow-lg"
//                   /> */}

//                   {/* Leadership Info Overlay */}
//                   <div className="mt-4 glass-effect rounded-2xl p-4">
//                     <h3 className="font-bold text-slate-900 mb-2">Visionary Leadership</h3>
//                     <p className="text-sm text-slate-600">
//                       Mr. Ram Reddy & Mr. Lakshman - Leading RRL Builders & Developers with innovation and excellence
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Stats */}
//             <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-lg">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-amber-600">29</div>
//                 <div className="text-xs text-slate-600 font-medium">Years Legacy</div>
//               </div>
//             </div>

//             <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-lg">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-emerald-600">1000+</div>
//                 <div className="text-xs text-slate-600 font-medium">Happy Families</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Button } from "@/components/ui/button"
import { Users, Award, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

export function Leadership() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Leadership Excellence</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900">
                Young Entrepreneurs:
                <span className="text-gradient block">Transforming The Real Estate Landscape</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
                Ram Reddy and Mr. Lakshman from RRL Builders and Developers Pvt Ltd stand out in the industry with their
                innovative approach.
              </p>
            </div>

            {/* Leadership Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">10+ Years Experience</h3>
                <p className="text-sm text-slate-600">
                  Exceptional business acumen and established leadership in commercial spaces
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Market Understanding</h3>
                <p className="text-sm text-slate-600">
                  Deep understanding of market trends, local preferences, and industry dynamics
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#d9a406] rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Innovation Focus</h3>
                <p className="text-sm text-slate-600">
                  Innovative approach to real estate development and customer satisfaction
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900">Customer Centric</h3>
                <p className="text-sm text-slate-600">
                  Dedicated to providing luxurious living spaces ensuring affordability
                </p>
              </div>
            </div>

            <Button className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
              Read About RRL
            </Button>
          </div>

          {/* Right Content - Leadership Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Mr. Ram Reddy */}
              <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-6 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-AngebUTWPT0KPEF4v7sTr9hEyJ2ze2.jpeg"
                  alt="Mr. Ram Reddy - Co-Founder, RRL Builders & Developers"
                  width={300}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-slate-900">Mr. Ram Reddy</h3>
                  <p className="text-sm text-slate-600">Co-Founder & Director</p>
                </div>
              </div>

              {/* Mr. Lakshman */}
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-6 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-3CxmlRD88SRT3S6vzyz37wTrkmDwgZ.jpeg"
                  alt="Mr. Lakshman - Co-Founder, RRL Builders & Developers"
                  width={300}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-slate-900">Mr. Lakshman</h3>
                  <p className="text-sm text-slate-600">Co-Founder & Director</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">29</div>
                <div className="text-xs text-slate-600 font-medium">Years Legacy</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">1000+</div>
                <div className="text-xs text-slate-600 font-medium">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

