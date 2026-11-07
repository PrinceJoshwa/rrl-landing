import type { Metadata } from "next"
import CommercialPageClient from "./CommercialPageClient"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "RRL Commercial Projects | Premium Office & Retail Spaces in Bangalore",
  description:
    "RRL Towers & RRL Complex – Premium commercial spaces in Sarjapur, Attibele Sarjapur Road, Bangalore. Operational commercial complexes by RRL Builders and Developers.",
  alternates: { canonical: canonicalUrl("/projects/commercial") },
}

export default function CommercialPage() {
  return <CommercialPageClient />
}
