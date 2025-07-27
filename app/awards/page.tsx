import { AwardsHero } from "@/components/awards/awards-hero"
import { AwardsList } from "@/components/awards/awards-list"
import { MediaCoverage } from "@/components/awards/media-coverage"
import { Recognition } from "@/components/awards/recognition"

export default function AwardsPage() {
  return (
    <>
      <AwardsHero />
      <AwardsList />
      <MediaCoverage />
      <Recognition />
    </>
  )
}
