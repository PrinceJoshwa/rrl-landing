import { Calendar, Award, Building, Users } from "lucide-react"

const milestones = [
  {
    year: "1996",
    title: "Company Founded",
    description: "RRL Builders and Developers established with a vision to provide affordable luxury homes.",
    icon: Building,
  },
  {
    year: "2020",
    title: "Major Expansion",
    description: "Expanded operations across Bangalore with multiple residential projects.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Won the Global Real Estate Brand Awards 2023 in the Affordability category.",
    icon: Award,
  },
  {
    year: "2025",
    title: "Times Real Estate Icon",
    description: "Crowned as Builder of the Year in Mid-segment housing by Times Real Estate ICON Awards.",
    icon: Calendar,
  },
]

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Marking Our Imprints</h2>
          <p className="text-xl text-slate-600">A journey of excellence, innovation, and commitment to quality</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-600 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-50 rounded-2xl p-8 md:ml-0 ml-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">{milestone.year}</div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>

                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
