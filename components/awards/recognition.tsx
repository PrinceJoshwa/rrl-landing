// import { Button } from "@/components/ui/button"
// import { Quote, Users, Building } from "lucide-react"

// export function Recognition() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//                 The Global Real Estate Brand Awards, 2023
//               </h2>

//               <p className="text-lg text-slate-600 leading-relaxed">
//                 RRL Nature Woods, our latest premium property has been awarded the Global Real Estate Brand Awards, 2023
//                 in the category 'Property Award of the Year - Affordable'.
//               </p>
//             </div>

//             {/* Recognition Stats */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="text-center p-4 bg-slate-50 rounded-lg">
//                 <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Users className="h-6 w-6 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-slate-900">600+</div>
//                 <div className="text-sm text-slate-600">Happy Families</div>
//               </div>

//               <div className="text-center p-4 bg-slate-50 rounded-lg">
//                 <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Building className="h-6 w-6 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-slate-900">7+</div>
//                 <div className="text-sm text-slate-600">Award-Winning Projects</div>
//               </div>
//             </div>

//             <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">RRL Recognition</Button>
//           </div>

//           {/* Right Content - Quote */}
//           <div className="relative">
//             <div className="bg-slate-900 text-white rounded-2xl p-8 relative">
//               <Quote className="h-12 w-12 text-yellow-400 mb-6" />

//               <blockquote className="text-lg leading-relaxed mb-6">
//                 "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
//                 you make well-informed decisions. Honesty and transparency form the core of our values. You can trust us
//                 to provide straightforward advice and maintain open communication throughout the process. Let us build
//                 an affordable society together."
//               </blockquote>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold">RRL</span>
//                 </div>
//                 <div>
//                   <div className="font-semibold">RRL Developers and Builders</div>
//                   <div className="text-slate-400 text-sm">Leadership Team</div>
//                 </div>
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-600 rounded-full opacity-20"></div>
//               <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-600 rounded-full opacity-10"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Button } from "@/components/ui/button"
import { Quote, Users, Building } from "lucide-react"

export function Recognition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900">
                The Global Real Estate Brand Awards, 2023
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                RRL Nature Woods, our latest premium property has been awarded the Global Real Estate Brand Awards, 2023
                in the category 'Property Award of the Year - Affordable'.
              </p>
            </div>

            {/* Recognition Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900">600+</div>
                <div className="text-sm text-slate-600">Happy Families</div>
              </div>

              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900">7+</div>
                <div className="text-sm text-slate-600">Award-Winning Projects</div>
              </div>
            </div>

            <Button className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
              RRL Recognition
            </Button>
          </div>

          {/* Right Content - Quote */}
          <div className="relative">
            <div className="bg-slate-900 text-white rounded-2xl p-8 relative">
              <Quote className="h-12 w-12 text-amber-400 mb-6" />

              <blockquote className="text-lg leading-relaxed mb-6">
                "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
                you make well-informed decisions. Honesty and transparency form the core of our values. You can trust us
                to provide straightforward advice and maintain open communication throughout the process. Let us build
                an affordable society together."
              </blockquote>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RRL</span>
                </div>
                <div>
                  <div className="font-semibold">RRL Developers and Builders</div>
                  <div className="text-slate-400 text-sm">Leadership Team</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
