import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const properties = [
  {
    name: "RRL Palacio",
    description: "Our newly constructed luxury property, situated in Medahalli",
    location: "Medahalli",
  },
  {
    name: "RRL Palm Altezze",
    description: "Our latest premium property located at Varthur, Bangalore",
    location: "Varthur, Bangalore",
  },
  {
    name: "RRL Sequoia",
    description: "Our latest luxurious Villa located at Varthur, Bangalore",
    location: "Varthur, Bangalore",
  },
  {
    name: "RRL Nature Woods",
    description: "Our premium awarded property, situated in heart of Sarjapur",
    location: "Sarjapur",
  },
  {
    name: "RRL Tower",
    description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
    location: "Sampige Jala, Sarjapur",
  },
  {
    name: "RRL Complex",
    description: "Our 12th Commercial Building situated in South of Bangalore",
    location: "South Bangalore",
  },
]

export function PropertyLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience The Art of Living</h2>
          <p className="text-xl text-slate-600">Visit our Properties for a walk-in</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">{property.name}</h3>
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-slate-600" />
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">{property.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                  Explore Location
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
