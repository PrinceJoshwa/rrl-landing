import { Hero } from "../components/home/hero"
import { Awards } from "../components/home/awards"
import { Stats } from "../components/home/stats"
import { Properties } from "../components/home/properties"
import { Testimonials } from "../components/home/testimonials"
import { Leadership } from "../components/home/leadership"
import { CallToAction } from "../components/home/call-to-action"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Properties />
      <Testimonials />
      <Leadership />
      <CallToAction />
    </>
  )
}
