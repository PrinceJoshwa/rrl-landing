import type { Metadata } from "next"
import NatureWoodsPageClient from "./NatureWoodsPageClient"

export const metadata: Metadata = {
  title: "Nearby Apartment Sales in Bangalore | RRL Builders",
  description:
    "Discover apartment sales in Bangalore and nearby apartments with RRL Builders. Get modern, stylish, and spacious homes designed for comfort and luxury living.",
  keywords: [
    "RRL Nature Woods",
    "apartments in sarjapur road",
    "flats in thindlu bangalore",
    "nature woods sarjapur",
    "1 bhk 2 bhk 3 bhk sarjapur",
    "ready to move apartments sarjapur",
  ],
}

export default function NatureWoodsPage() {
  return <NatureWoodsPageClient />
}
