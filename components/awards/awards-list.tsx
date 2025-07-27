import { Trophy, Award, Medal, Star } from "lucide-react"

const awards = [
  {
    year: "2025",
    title: "Times Real Estate Icon Awards",
    category: "Builder of the Year - Mid Segment Housing",
    description: "Recognized for excellence in affordable luxury housing development",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Excellence in Amenities Premium",
    category: "Mid-Segment Homes",
    description: "Awarded for outstanding amenities in residential projects",
    icon: Medal,
  },
  {
    year: "2023",
    title: "Global Real Estate Brand Awards",
    category: "Affordability Category Winner",
    description: "Global recognition for making luxury housing affordable",
    icon: Award,
  },
  {
    year: "2023",
    title: "Property Award of the Year",
    category: "Affordable and High-end Property",
    description: "Dual recognition for both affordable and premium segments",
    icon: Star,
  },
]

export function AwardsList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">RRL Legacy of Achievements</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Committed to Results: Highlights of Our Real Estate Success
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-50 to-yellow-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <award.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold text-yellow-600">{award.year}</span>
                    <div className="h-6 w-px bg-slate-300"></div>
                    <span className="text-sm text-slate-500 uppercase tracking-wide">{award.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>

                  <p className="text-slate-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
