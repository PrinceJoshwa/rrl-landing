import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "RRL Builders and Developers | Premium Builders in Bangalore",
  description:
    "RRL Builders and Developers – Award-winning real estate projects in Bangalore. Explore 2 & 3 BHK luxury apartments in Sarjapur, Varthur, and Medahalli. Book a site visit today.",
  keywords: [
    "RRL Builders Bangalore",
    "luxury apartments bangalore",
    "2 bhk apartments sarjapur",
    "3 bhk flats varthur",
    "premium builder bangalore",
    "ready to move flats bangalore",
  ],
}

export default function HomePage() {
  return <HomePageClient />
}