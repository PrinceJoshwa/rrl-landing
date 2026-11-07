import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Channel Partners | RRL Builders and Developers",
  description: "Partner with RRL Builders and Developers to market quality residential and commercial projects.",
  alternates: { canonical: canonicalUrl("/channel-partners") },
}

export default function ChannelPartnersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
