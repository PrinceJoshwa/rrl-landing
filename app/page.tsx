import { Hero } from "../components/home/hero"
import { Awards } from "../components/home/awards"
import { Stats } from "../components/home/stats"
import { Properties } from "../components/home/properties"
import { Testimonials } from "../components/home/testimonials"
import { Leadership } from "../components/home/leadership"
import { CallToAction } from "../components/home/call-to-action"
import { PartnersSection } from "@/components/partners/partners-section"
import { FAQSection } from "@/components/faq/faq-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Properties />
      <Testimonials />
      <Leadership />
      <PartnersSection />
            <FAQSection 
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about RRL properties, pricing, and locations in Bangalore"
            />
      <CallToAction />

    </>
  )
}
