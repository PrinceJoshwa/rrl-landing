// // import Image from "next/image"

// export function Leadership() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Young Entrepreneurs Transforming The Real Estate Landscape
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             The legacy since 1996 and with over 10 years of experience in the field, they have showcased exceptional
//             business acumen and established themselves as leading developers specialising in commercial spaces.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Leadership Images */}
//           <div className="space-y-6">
//             <div className="bg-slate-50 rounded-2xl p-6">
//               {/* <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Home%202-BTGq2jWHJXPHjrYSDBujfEjUbwpoLK.png"
//                 alt="RRL Leadership Team"
//                 width={500}
//                 height={300}
//                 className="rounded-lg w-full h-auto"
//               /> */}
//             </div>
//           </div>

//           {/* Leadership Content */}
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-slate-900">Visionary Leadership</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
//                 Ram Reddy and Mr. Lakshman from RRL Builders and Developers Pvt Ltd stand out in the industry with their
//                 innovative approach.
//               </p>
//               <p className="text-slate-600 leading-relaxed">
//                 With over 10 years of experience in the field, they have showcased exceptional business acumen and
//                 established themselves as leading developers specialising in commercial spaces. With years of experience
//                 in the real estate industry, they have developed a deep understanding of market trends, local
//                 preferences, and the ever-changing dynamics of the industry.
//               </p>
//             </div>

//             <div className="bg-yellow-50 rounded-lg p-6">
//               <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
//               <p className="text-slate-700 text-sm">
//                 RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
//                 a reality for many.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { Button } from "@/components/ui/button"
import { Users, Award, Target, Lightbulb, Quote } from "lucide-react"
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Leadership Excellence</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            Young Entrepreneurs:
            <span className="text-gradient block">Transforming The Real Estate Landscape</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of{" "}
            <strong>Mr. Ram Reddy</strong> and <strong>Mr. Lakshman Reddy</strong> from RRL Builders and Developers Pvt
            Ltd stand out in the industry as Pioneers of Affordable Luxury Residential and Commercial Spaces in
            Bangalore.
          </p>
        </div>

        {/* Leadership Images and Quotes */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mr. Ram Reddy */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-6 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ram.jpg-pas5bMH3OcTcVZSxpZxq5DulrmyjEN.jpeg"
                alt="Mr. Ram Reddy - Director, RRL Builders & Developers"
                width={500}
                height={400}
                className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
              />

              {/* Quote Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl border-l-4 border-amber-600">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 italic font-medium mb-2">
                      "Coming together is a beginning. Keeping together is progress"
                    </p>
                    <p className="text-sm text-slate-500 font-semibold">Mr. Ram Reddy - Director Message</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <h3 className="font-bold text-xl text-slate-900">Mr. Ram Reddy</h3>
              <p className="text-slate-600">Director</p>
            </div>
          </div>

          {/* Mr. Lakshman Reddy */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-6 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laksh.jpg-wka36xEiCGuAbsGkhcr4O6n2ZrLOzL.jpeg"
                alt="Mr. Lakshman Reddy - Chairman, RRL Builders & Developers"
                width={500}
                height={400}
                className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
              />

              {/* Quote Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl border-l-4 border-emerald-600">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 italic font-medium mb-2">
                      "At RRL, quality is not just a goal; it's a commitment. We take pride in delivering homes that our
                      customers will cherish for generations to come."
                    </p>
                    <p className="text-sm text-slate-500 font-semibold">Mr. Lakshman Reddy - Chairman's Message</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <h3 className="font-bold text-xl text-slate-900">Mr. Lakshman Reddy</h3>
              <p className="text-slate-600">Chairman</p>
            </div>
          </div>
        </div>

        {/* Experience and Expertise Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Visionary Leadership</h3>
              <p className="text-slate-600 leading-relaxed">
                With <strong>over 10 years of experience in the field</strong>, they have showcased exceptional business
                acumen and established themselves as leading developers specialising in commercial spaces. With years of
                experience in the real estate industry, they have developed a deep understanding of market trends, local
                neighbourhoods, and the ever-changing dynamics of the industry.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
              <p className="text-slate-700 text-sm">
                RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
                a reality for many.
              </p>
            </div>
          </div>

          {/* Right Content - Leadership Highlights */}
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
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
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
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
            Read About RRL Leadership
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-lg hidden lg:block">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">29</div>
            <div className="text-xs text-slate-600 font-medium">Years Legacy</div>
          </div>
        </div>

        {/* <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-lg hidden lg:block">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">600+</div>
            <div className="text-xs text-slate-600 font-medium">Happy Families</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
