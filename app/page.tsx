import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Affordable Apartments & Flats for Sale in Sarjapur Road",
  description:
    "Explore modern apartments in Sarjapur Road with 1, 2 & 3 BHK options. Find the best flats for sale in Sarjapur Road near you with RRL Builders.",
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
