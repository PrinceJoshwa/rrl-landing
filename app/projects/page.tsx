import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Near Me 3 BHK Flat in Bangalore by RRL Builders",
  description:
    "Explore spacious 3 BHK flats near me with RRL Builders. Get modern 3 BHK flat in Bangalore designed with comfort, style and premium living for families.",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
