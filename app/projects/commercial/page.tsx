import type { Metadata } from "next"
import CommercialPageClient from "./CommercialPageClient"

export const metadata: Metadata = {
  title: "RRL Commercial Projects | Premium Office & Retail Spaces in Bangalore",
  description:
    "RRL Towers & RRL Complex – Premium commercial spaces in Sarjapur, Attibele Sarjapur Road, Bangalore. Operational commercial complexes by RRL Builders and Developers.",
}

export default function CommercialPage() {
  return <CommercialPageClient />
}