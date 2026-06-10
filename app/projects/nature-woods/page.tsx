import type { Metadata } from "next"
import NatureWoodsPageClient from "./NatureWoodsPageClient"

export const metadata: Metadata = {
  title: "Property in Whitefield Bangalore | Apartments for Sale Today",
  description:
    "Find premium apartments in Whitefield Bangalore with modern amenities, great connectivity, and comfortable living spaces. Book your dream home today.",
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
