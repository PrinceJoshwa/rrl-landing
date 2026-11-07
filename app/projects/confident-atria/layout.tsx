import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Confident Atria | Premium Villas near Sarjapur",
  description: "Explore Confident Atria premium villas near Sarjapur, presented by RRL Builders and Developers.",
  alternates: { canonical: canonicalUrl("/projects/confident-atria") },
}

export default function ConfidentAtriaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
