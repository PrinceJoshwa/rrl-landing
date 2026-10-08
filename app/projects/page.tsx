import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Real Estate Projects Near Me & 3 BHK Flats in Sarjapur Road",
  description:
    "Premium 3 BHK flats near you in top real estate projects. Explore modern homes with great amenities, prime locations, and value.",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
