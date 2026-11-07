import type { Metadata } from "next"
import DiwaliCampaign from "./DiwaliCampaign"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Refer & Earn 2% | RRL Builders & Developers",
  description:
    "Refer a friend to any RRL Group project and earn a 2% reward on a successful sale. Explore RRL homes and submit a referral.",
  alternates: { canonical: canonicalUrl("/diwali") },
  openGraph: {
    title: "Refer & Earn 2% | RRL Group",
    description: "Refer a friend to RRL Group projects and earn a 2% reward on a successful sale.",
    images: ["/diwali-referral.jpg"],
  },
}

export default function DiwaliPage() {
  return <DiwaliCampaign />
}
