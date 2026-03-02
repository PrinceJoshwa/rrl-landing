import type { Metadata } from "next"
import NatureWoodsPageClient from "./NatureWoodsPageClient"

export const metadata: Metadata = {
  title: "RRL Nature Woods | Luxury 1, 2 & 3 BHK Apartments in Thindlu, Bangalore",
  description:
    "RRL Nature Woods – Award-winning luxury apartments in Thindlu, Sarjapur Road, Bangalore. 140 units, B+G+7 Floors. Ready to move. Explore floor plans and pricing.",
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