import type { Metadata } from "next"
import Nc216PageClient from "./Nc216PageClient"

export const metadata: Metadata = {
  title: "RRL NC-216 | 2 & 3 BHK Pre-Launch Apartments in Sarjapur, Bangalore",
  description:
    "RRL Code Name NC-216 – Pre-launch 2 & 3 BHK premium apartments in Sarjapur Road, Bangalore. 216 units across 2.01 acres. Open for EOI. Register your interest today.",
  keywords: [
    "RRL NC-216",
    "NC 216 sarjapur",
    "pre launch apartments sarjapur",
    "apartments in sarjapur road",
    "2 bhk sarjapur",
    "3 bhk sarjapur road",
  ],
}

export default function Nc216Page() {
  return <Nc216PageClient />
}