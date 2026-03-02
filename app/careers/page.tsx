import type { Metadata } from "next"
import CareersPageClient from "./CareersPageClient"

export const metadata: Metadata = {
  title: "Careers at RRL Builders | Join Our Growing Team in Bangalore",
  description:
    "Build your career with RRL Builders and Developers. We are hiring Sales Executives, Marketing Managers, Site Engineers & more. Apply now and join one of Bangalore's top real estate builders.",
}

export default function CareersPage() {
  return <CareersPageClient />
}