import type { Metadata } from "next"
import DiwaliCampaign from "./DiwaliCampaign"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "A Diwali of Bright Beginnings | RRL Builders & Developers",
  description:
    "Celebrate Diwali with RRL Builders & Developers. Explore our homes, discover NC216, and join our Refer a Friend programme.",
  alternates: { canonical: canonicalUrl("/diwali") },
  openGraph: {
    title: "A Diwali of Bright Beginnings | RRL Group",
    description:
      "Wishing you a bright and prosperous Diwali. Find your next beginning with RRL.",
    images: ["/diwali-referral.jpg"],
  },
}

export default function DiwaliPage() {
  return <DiwaliCampaign />
}
