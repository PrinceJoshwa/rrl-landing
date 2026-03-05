import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "Luxury Houses & Upcoming Apartments Near Me in Karnataka",
  description:
    "Discover stylish luxury houses and upcoming apartments near me in Karnataka. RRL Builders offers modern homes with comfort, convenience, and quality.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
