import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Events, Media and News | RRL Builders and Developers",
  description: "Read the latest events, media coverage, and news about RRL Builders and Developers.",
  alternates: { canonical: canonicalUrl("/events-media-news") },
}

export default function EventsMediaNewsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
