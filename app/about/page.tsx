import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "2 BHK Flats in Bangalore & Luxury Homes & Apartments",
  description:
    "Get premium 2 BHK flats in Bangalore with modern amenities. Explore luxury houses and upcoming apartments near you for comfortable living.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
