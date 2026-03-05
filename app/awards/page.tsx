import type { Metadata } from "next"
import AwardsPageClient from "./AwardsPageClient"

export const metadata: Metadata = {
  title: "Award Winning Real Estate Projects Near Me | RRL Builders",
  description:
    "Discover award winning real estate projects near me by RRL Builders and Developers. Trusted name in quality homes, luxury living and modern construction.",
}

export default function AwardsPage() {
  return <AwardsPageClient />
}
