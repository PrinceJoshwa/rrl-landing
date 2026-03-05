import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Near Me 3 BHK Flat in Bangalore by RRL Builders",
  description:
    "Explore RRL Group's award-winning real estate portfolio: RRL Palm Altezze (Varthur), RRL NC-216 (Sarjapur), RRL Palacio (Medahalli), RRL Nature Woods & Commercial Projects in Bangalore.",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
