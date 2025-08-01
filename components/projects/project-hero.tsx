"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Award } from "lucide-react"

interface ProjectHeroProps {
  project: {
    name: string
    subtitle: string
    description: string
    status: string
    heroImage: string
  }
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            {project.status.includes("Award") && <Award className="h-4 w-4" />}
            {project.status.includes("Coming") && <Calendar className="h-4 w-4" />}
            {!project.status.includes("Award") && !project.status.includes("Coming") && <MapPin className="h-4 w-4" />}
            <span>{project.status}</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-4">{project.name}</h1>

          <p className="text-xl text-slate-200 mb-6">{project.subtitle}</p>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">{project.description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
            >
              Request Site Visit
            </Button>

            {project.name === "RRL Palacio" || project.name === "RRL Nature Woods" ? (
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold bg-transparent"
                onClick={() => {
                  const brochureUrl =
                    project.name === "RRL Palacio"
                      ? "/brochures/rrl-palacio-brochure.pdf"
                      : "/brochures/rrl-nature-woods-brochure.pdf"
                  const link = document.createElement("a")
                  link.href = brochureUrl
                  link.download = `${project.name}-Brochure.pdf`
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                Download Brochure
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold bg-transparent"
              >
                Get Project Info
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
