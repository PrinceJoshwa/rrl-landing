// // import Image from "next/image"

// export function MediaCoverage() {
//   return (
//     <section className="py-20 gradient-bg">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Token of Success - Media Coverages</h2>
//           <p className="text-xl text-slate-600">Success Stories: Noteworthy Achievements in Real Estate</p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             {/* <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Awards%201.png-FksyLN1g6wHuUiW2glPRE7i36SyyTN.jpeg"
//               alt="Media Coverage of RRL Awards and Recognition"
//               width={1200}
//               height={800}
//               className="rounded-lg w-full h-auto"
//             /> */}
//           </div>

//           <div className="text-center mt-8">
//             <p className="text-slate-600 max-w-3xl mx-auto">
//               Our achievements have been featured across leading publications and media outlets, showcasing our
//               commitment to excellence in real estate development and customer satisfaction.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image"
import { Newspaper, Globe, Award } from "lucide-react"

const mediaOutlets = [
  {
    name: "ZEE5 Business",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token4-rJgVrC4ZKpXxrJCNc4fUufEvGeSlRl.jpeg",
    description: "Featured coverage of RRL's award-winning achievements in real estate",
  },
  {
    name: "Multiple International Outlets",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token2-agM5EwaEeqJv2glMoBTPDLVxczDH3B.jpeg",
    description: "Coverage across US World Today, Daily Hunt, Indo-Asian News Service, and more",
  },
  {
    name: "The Print",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-lNU4TqNDvpQhVpKy6LYfNmWQ6KP4UZ.jpeg",
    description: "In-depth coverage of the 5th Global Real Estate Brand Awards 2023",
  },
  {
    name: "British Columbia Times",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token1-LtctPGKlJ54DeYjMfknXCMBTaxglJv.jpeg",
    description: "International recognition of RRL's remarkable achievements",
  },
  {
    name: "London Channel News",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token3-8TEGbwM0sMobG9OpTWtl0ODNH4VBij.jpeg",
    description: "Global media coverage highlighting RRL's industry leadership",
  },
  {
    name: "World News Network",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token6-0aTqnZLkY2wKtVR86VOJYszKP4InKp.jpeg",
    description: "Comprehensive coverage of distinguished honorees in real estate",
  },
]

export function MediaCoverage() {
  return (
    <section className="py-24 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-amber-800 mb-6">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold">Media Recognition</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-slate-900 mb-6">
            Token of Success -<span className="text-gradient block">Media Coverage</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Success Stories: Noteworthy Achievements in Real Estate. Our accomplishments have been featured across
            leading publications and media outlets worldwide, showcasing our commitment to excellence in real estate
            development and customer satisfaction.
          </p>
        </div>

        {/* Featured Media Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mediaOutlets.slice(0, 2).map((outlet, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={outlet.image || "/placeholder.svg"}
                  alt={`${outlet.name} - RRL Media Coverage`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{outlet.name}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{outlet.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Media Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaOutlets.slice(2).map((outlet, index) => (
            <div
              key={index + 2}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={outlet.image || "/placeholder.svg"}
                  alt={`${outlet.name} - RRL Media Coverage`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h4 className="font-bold text-slate-900 mb-2 line-clamp-1">{outlet.name}</h4>
                <p className="text-sm text-slate-600 line-clamp-2">{outlet.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center glass-effect rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
            <div className="text-slate-600">Media Outlets</div>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Newspaper className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Press Features</div>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">Global</div>
            <div className="text-slate-600">Recognition</div>
          </div>
        </div>
      </div>
    </section>
  )
}
