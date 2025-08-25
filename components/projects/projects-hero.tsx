import { Building, MapPin, Home } from "lucide-react"

export function ProjectsHero() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="h-4 w-4" />
            <span>Our Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">RRL Premium Properties</h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Your Next Address: Tour Our Exceptional Properties. From spacious bedrooms and state-of-the-art kitchens to
            breathtaking views and meticulously designed interiors, we provide you with a comprehensive overview of what
            each property has to offer.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900">7+</div>
              <div className="text-slate-600">Active Projects</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900">5+</div>
              <div className="text-slate-600">Prime Locations</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900">999+</div>
              <div className="text-slate-600">Sq Ft Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
