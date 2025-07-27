import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectGrid } from "@/components/projects/project-grid"
import { ProjectFeatures } from "@/components/projects/project-features"

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectGrid />
      <ProjectFeatures />
    </>
  )
}
