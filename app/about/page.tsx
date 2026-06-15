import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "2 BHK Flats in Bangalore & Luxury Homes & Apartments",
  description:
    "Get 2 BHK flats in Bangalore and luxury homes in prime locations. Explore upcoming apartments with modern amenities and great value.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
