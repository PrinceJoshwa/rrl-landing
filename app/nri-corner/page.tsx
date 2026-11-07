import type { Metadata } from "next"
import NriPageClient from "./NriPageClient"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
    title: "NRI Corner | Invest in Bangalore Real Estate from Abroad",
    description:
        "RRL Builders NRI Corner – Seamless property investment in Bangalore for Non-Resident Indians. Get guidance on RBI regulations, FEMA guidelines, home loans, and our premium projects.",
    alternates: { canonical: canonicalUrl("/nri-corner") },
}

export default function NriCornerPage() {
    return <NriPageClient />
}
