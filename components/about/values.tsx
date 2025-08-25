import { Shield, Lightbulb, Users, Heart, Target, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Our culture is built on simple that you achieve your real estate objectives and rewarding experience.",
  },
  {
    icon: Target,
    title: "Local Market",
    description: "As a locally rooted firm, we possess an in-depth understanding of the communities we serve.",
  },
  {
    icon: Lightbulb,
    title: "Solutions",
    description: "Whether you're a first-time buyer, an experienced investor, or a homeowner looking to sell.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Our team comprises seasoned professionals with extensive knowledge and estate professionals who.",
  },
  {
    icon: Heart,
    title: "Personalized",
    description:
      "We recognize that each client has unique needs and preferences. We tailor our services to match your.",
  },
  {
    icon: Award,
    title: "Satisfaction",
    description: "Your satisfaction is our top priority. We are committed to exceeding your expectations.",
  },
]

export function Values() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">RRL Values</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our core values guide everything we do, ensuring exceptional service and lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#d9a406] rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>

              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
