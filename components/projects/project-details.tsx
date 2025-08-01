import { Check } from "lucide-react"

interface ProjectDetailsProps {
  project: {
    name: string
    features: string[]
    fundedBy?: string
    additionalInfo?: {
      description?: string
    }
  }
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6">{project.name}</h2>

            <div className="prose prose-slate max-w-none">
              {project.additionalInfo?.description ? (
                <div className="space-y-4">
                  {project.additionalInfo.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-lg text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg text-slate-600 leading-relaxed">
                  RRL Builders and Developers presents our Joint Venture Project - {project.name}, a state-of-the-art
                  development at the heart of Bangalore South.
                </p>
              )}
            </div>

            {project.fundedBy && (
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Project Funded By</h3>
                <p className="text-slate-700">{project.fundedBy}</p>
              </div>
            )}
          </div>

          {/* Right Content - Features */}
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Key Features & Highlights</h3>

            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
