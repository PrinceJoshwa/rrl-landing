import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About RRL Builders | Pioneers of Affordable Luxury Since 1996",
  description:
    "Learn about RRL Builders and Developers – Founded in 1996, led by Mr. Ram Reddy & Mr. Lakshman Reddy. Winners of Global Real Estate Brand Awards 2023 & Times Real Estate Icon Awards 2025.",
}

export default function AboutPage() {
  return <AboutPageClient />
}