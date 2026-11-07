import type { Metadata } from "next"
import WalkinPageClient from "./WalkinPageClient"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Walk-In Registration | Schedule a Site Visit – RRL Builders",
  description:
    "Register for a walk-in visit to RRL Builders' premium projects in Bangalore. Experience our luxury apartments in Sarjapur, Varthur & Medahalli in person. Schedule your visit today.",
  alternates: { canonical: canonicalUrl("/walkin-form") },
}

export default function WalkinFormPage() {
  return <WalkinPageClient />
}
