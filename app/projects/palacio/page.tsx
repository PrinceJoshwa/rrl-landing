import type { Metadata } from "next"
import PalacioPageClient from "./PalacioPageClient"

export const metadata: Metadata = {
  title: "RRL Palacio | Ready to Move 2 & 3 BHK Flats in Medahalli, Bangalore",
  description:
    "RRL Palacio – Luxury 2 & 3 BHK fully furnished apartments in Medahalli, Bangalore. 103 units, 1.5 Acres. RERA approved. Ready to move. Enquire now for best price.",
  keywords: [
    "RRL Palacio",
    "apartments in medahalli",
    "flats in medahalli bangalore",
    "ready to move flats bangalore",
    "2 bhk medahalli",
    "3 bhk medahalli",
  ],
}

export default function PalacioPage() {
  return <PalacioPageClient />
}