import { Shield, Award, Users, Wrench, Car, Wifi } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Premium Security",
    description: "24/7 security with CCTV surveillance and access control systems",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Architecturally acclaimed designs with modern aesthetics",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Vibrant community spaces and recreational facilities",
  },
  {
    icon: Wrench,
    title: "Premium Amenities",
    description: "Gymnasium, swimming pool, clubhouse, and landscaped gardens",
  },
  {
    icon: Car,
    title: "Ample Parking",
    description: "Dedicated parking spaces with visitor parking facilities",
  },
  {
    icon: Wifi,
    title: "Smart Connectivity",
    description: "High-speed internet and smart home automation features",
  },
]

export function ProjectFeatures() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose RRL Properties</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every RRL property comes with premium features and amenities designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>

              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
