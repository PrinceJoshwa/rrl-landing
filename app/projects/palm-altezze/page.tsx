import type { Metadata } from "next"
import PalmAltezzePageClient from "./PalmAltezzePageClient"

export const metadata: Metadata = {
  title: "RRL Palm Altezze | Premium 2 & 3 BHK Apartments in Varthur, Bangalore",
  description:
    "RRL Palm Altezze – High-rise premium 2 & 3 BHK apartments in Varthur, Bangalore. 115 units across 1 acre 38 guntas. Possession in 2027. Open for booking. Download brochure.",
  keywords: [
    "RRL Palm Altezze",
    "apartments in varthur",
    "flats in varthur bangalore",
    "2 bhk varthur",
    "3 bhk varthur",
    "palm altezze varthur",
  ],
}

export default function PalmAltezzePage() {
  return <PalmAltezzePageClient />
}