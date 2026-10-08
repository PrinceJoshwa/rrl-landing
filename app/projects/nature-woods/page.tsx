import type { Metadata } from "next"
import NatureWoodsPageClient from "./NatureWoodsPageClient"

export const metadata: Metadata = {
  title: "Apartments for Sale in Whitefield Bangalore & Nearby Apartments",
  description:
    "Find Top property in Whitefield Bangalore with modern apartments for sale. Discover nearby apartments with top amenities and great connectivity.",
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
