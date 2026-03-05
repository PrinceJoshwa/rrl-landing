import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Modern 2 BHK Flat in Bangalore by RRL Builders",
  description:
    "Contact RRL Builders and Developers for inquiries about our premium residential projects in Bangalore. Call us at +91 84949 66966 or fill the form and our team will get back to you.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
