import type { Metadata } from "next"
import AwardsPageClient from "./AwardsPageClient"

export const metadata: Metadata = {
  title: "Awards & Recognition | RRL Builders Bangalore",
  description:
    "RRL Builders and Developers – Times Real Estate Icon Awards 2025 winner (Builder of the Year), Global Real Estate Brand Awards 2023 winner. Recognized by ZEE5, The Print & more.",
}

export default function AwardsPage() {
  return <AwardsPageClient />
}