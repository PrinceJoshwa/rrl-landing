import type { Metadata } from "next"
import BlogListing from "./blog-listing"

export const metadata: Metadata = {
  title: "RRL Blog | Home Buying Guides and Property Insights",
  description:
    "Explore home buying guides, apartment advice, and property insights from RRL Builders and Developers.",
}

export default function BlogPage() {
  return <BlogListing />
}
