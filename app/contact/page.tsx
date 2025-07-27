import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { LocationMap } from "@/components/contact/location-map"
import { PropertyLocations } from "@/components/contact/property-locations"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <PropertyLocations />
    </>
  )
}
