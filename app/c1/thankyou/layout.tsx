import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = { alternates: { canonical: canonicalUrl("/c1/thankyou") } }

export default function ThankYouLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
