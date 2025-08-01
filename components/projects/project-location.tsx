import { MapPin, Phone } from "lucide-react"

interface ProjectLocationProps {
  project: {
    name: string
    location: {
      address: string
      contact: string
    }
    businessAdvantages?: string[]
  }
}

export function ProjectLocation({ project }: ProjectLocationProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-playfair font-bold text-slate-900">The Location</h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Address:</h3>
                  <p className="text-slate-600">{project.location.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Contact Number:</h3>
                  <p className="text-slate-600">{project.location.contact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Interactive Map Location</p>
              <p className="text-sm text-slate-500 mt-2">{project.name}</p>
            </div>
          </div>
        </div>

        {/* Business Advantages */}
        {project.businessAdvantages && (
          <div className="mt-16">
            <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-8 text-center">
              Why Choose {project.name.split(" ").slice(-1)[0]} for Commercial Space
            </h3>

            <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8">
              <div className="space-y-6">
                {project.businessAdvantages.map((advantage, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed">
                    {advantage}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
