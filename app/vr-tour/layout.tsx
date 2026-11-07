import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Virtual Tour | RRL Builders and Developers",
  description: "Take a virtual tour of RRL Builders and Developers homes.",
  alternates: { canonical: canonicalUrl("/vr-tour") },
}

export default function VRTourLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
