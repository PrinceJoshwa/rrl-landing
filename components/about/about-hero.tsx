import { Building, Users, Award, Target } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                <Building className="h-4 w-4" />
                <span>About RRL</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Pioneers of Affordable Luxury Residential and Commercial Spaces in Bangalore
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                We are RRL Builders and Developers, serving in the field of real estate since 1996. The Global Real
                Estate Brand, 2023 winner. Let us help you in finding your dream home and we believe in Affordability.
              </p>
            </div>

            {/* Company Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-slate-900">Since 1996</span>
                </div>
                <p className="text-sm text-slate-600">We are serving Global Legacy from 1996</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-slate-900">Awarded</span>
                </div>
                <p className="text-sm text-slate-600">Property Award of the year - Affordable, 2023</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-slate-900">Core Values</span>
                </div>
                <p className="text-sm text-slate-600">Transparency, Innovation, and Quality</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-slate-900">Goal</span>
                </div>
                <p className="text-sm text-slate-600">Making Homeownership a Reality for Many</p>
              </div>
            </div>
          </div>

          {/* Right Content - Company Logo */}
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl p-12 text-center">
              <div className="text-yellow-400 text-6xl font-bold mb-4">RRL</div>
              <div className="text-white text-xl font-semibold mb-2">RRL GROUP OF COMPANIES</div>
              <div className="text-yellow-400 text-sm">GROUP LEGACY SINCE 1996</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
