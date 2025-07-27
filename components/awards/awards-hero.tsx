import { Trophy, Award, Star } from "lucide-react"
// import Image from "next/image"

export function AwardsHero() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                <Trophy className="h-4 w-4" />
                <span>RRL Awards</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Times Real Estate Icon Awards, 2025</h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
                ICON Awards, 2025.
              </p>
            </div>

            {/* Award Highlights */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Builder of the Year 2025</h3>
                  <p className="text-slate-600 text-sm">Mid-segment housing category by Times Real Estate</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Global Real Estate Brand Awards 2023</h3>
                  <p className="text-slate-600 text-sm">Winner in Affordability category</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Excellence in Amenities Premium</h3>
                  <p className="text-slate-600 text-sm">Mid-Segment Homes 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Awards Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20About%202-zM9MmpwqCq6RKBnrSJZ3uTXYC1oaYS.png"
                alt="RRL Awards Ceremony 2023"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              /> */}
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -top-6 -right-6 bg-yellow-600 text-white p-4 rounded-full shadow-lg">
              <Award className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
