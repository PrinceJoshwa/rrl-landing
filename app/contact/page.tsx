import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Modern 2 BHK Flat in Bangalore by RRL Builders",
  description:
    "Find the perfect 2 BHK flat in Bangalore with RRL Builders. Explore modern flats in Bangalore designed for comfort, style and quality living worldwide.",
  alternates: { canonical: canonicalUrl("/contact") },
}

export default function ContactPage() {
  return <ContactPageClient />
}
