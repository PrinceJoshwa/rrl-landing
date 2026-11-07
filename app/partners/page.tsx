import { PartnersSection } from "@/components/partners/partners-section"
import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Partners | RRL Builders and Developers",
  description: "Explore RRL Builders and Developers' trusted project and business partners.",
  alternates: { canonical: canonicalUrl("/partners") },
}

export default function PartnersPage() {
  return (
    <>
      <PartnersSection />
    </>
  )
}
