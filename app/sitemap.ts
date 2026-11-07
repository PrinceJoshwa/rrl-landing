import type { MetadataRoute } from "next"
import { canonicalUrl } from "@/lib/seo"

const WORDPRESS_API = "https://blog.rrlbuildersanddevelopers.com/wp-json/wp/v2/posts"

export const dynamic = "force-static"

const staticRoutes = [
  "/",
  "/about",
  "/awards",
  "/blogs",
  "/careers",
  "/careers/life-at-rrl",
  "/channel-partners",
  "/contact",
  "/csr",
  "/emi-calculator",
  "/events-media-news",
  "/faq",
  "/nri-corner",
  "/our-partners",
  "/partners",
  "/privacy",
  "/projects",
  "/projects/commercial",
  "/projects/complex",
  "/projects/confident-atria",
  "/projects/nature-woods",
  "/projects/nc-216",
  "/projects/palacio",
  "/projects/palm-altezze",
  "/projects/towers",
  "/terms",
  "/walkin-form",
]

type WordPressPost = { slug: string; modified_gmt?: string }

async function getPublishedPosts() {
  const posts: WordPressPost[] = []
  let page = 1
  let totalPages = 1

  do {
    const response = await fetch(
      `${WORDPRESS_API}?per_page=100&page=${page}&_fields=slug,modified_gmt`,
      { cache: "force-cache" },
    )
    if (!response.ok) {
      throw new Error(`Could not fetch WordPress posts for the sitemap (HTTP ${response.status}).`)
    }

    posts.push(...(await response.json() as WordPressPost[]))
    totalPages = Number(response.headers.get("X-WP-TotalPages") ?? "1")
    page += 1
  } while (page <= totalPages)

  return posts
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts] = await Promise.all([getPublishedPosts()])

  return [
    ...staticRoutes.map((route) => ({
      url: canonicalUrl(route),
      changeFrequency: route === "/blogs" ? "daily" as const : "monthly" as const,
      priority: route === "/" ? 1 : route === "/blogs" ? 0.9 : 0.7,
    })),
    ...posts.filter((post) => post.slug).map((post) => ({
      url: canonicalUrl(`/blogs/${post.slug}`),
      lastModified: post.modified_gmt ? new Date(`${post.modified_gmt}Z`) : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
