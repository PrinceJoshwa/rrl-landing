import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays } from "lucide-react"
import { canonicalUrl } from "@/lib/seo"

const WORDPRESS_API = "https://blog.rrlbuildersanddevelopers.com/wp-json/wp/v2/posts"

type WordPressPost = {
  id: number
  date: string
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  yoast_head_json?: {
    title?: string
    description?: string
    og_image?: Array<{ url?: string }>
  }
  _embedded?: {
    [key: string]: Array<{
      source_url?: string
      alt_text?: string
      media_details?: { sizes?: { large?: { source_url?: string }; full?: { source_url?: string } } }
    }>
  }
}

type PageProps = { params: Promise<{ slug: string }> }

async function getPost(slug: string): Promise<WordPressPost | null> {
  const response = await fetch(`${WORDPRESS_API}?slug=${encodeURIComponent(slug)}&_embed=1`, { cache: "force-cache" })
  if (!response.ok) return null
  const posts = await response.json() as WordPressPost[]
  return posts[0] ?? null
}

function plainText(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim()
}

function getImage(post: WordPressPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0]
  return media?.media_details?.sizes?.large?.source_url ?? media?.media_details?.sizes?.full?.source_url ?? media?.source_url ?? post.yoast_head_json?.og_image?.[0]?.url
}

export async function generateStaticParams() {
  const slugs: Array<{ slug: string }> = []
  let currentPage = 1
  let totalPages = 1

  do {
    const response = await fetch(`${WORDPRESS_API}?per_page=100&page=${currentPage}&_fields=slug`, { cache: "force-cache" })
    if (!response.ok) {
      throw new Error(`Could not fetch WordPress post slugs (HTTP ${response.status}).`)
    }

    const posts = await response.json() as Array<{ slug: string }>
    slugs.push(...posts.filter((post) => post.slug).map((post) => ({ slug: post.slug })))
    totalPages = Number(response.headers.get("X-WP-TotalPages") ?? "1")
    currentPage += 1
  } while (currentPage <= totalPages)

  return slugs
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) {
    return {
      title: "Article not found | RRL Builders and Developers",
      robots: { index: false, follow: false },
      alternates: { canonical: canonicalUrl(`/blogs/${slug}`) },
    }
  }

  const title = post.yoast_head_json?.title || plainText(post.title.rendered)
  const description = post.yoast_head_json?.description || plainText(post.excerpt.rendered)
  const url = canonicalUrl(`/blogs/${post.slug}`)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      ...(post.yoast_head_json?.og_image?.[0]?.url
        ? { images: [post.yoast_head_json.og_image[0].url] }
        : {}),
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const image = getImage(post)
  const title = plainText(post.title.rendered)
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.date))

  return (
    <main className="min-h-screen bg-black text-white">
      <article>
        <header className="border-b border-gold-900/60 bg-[#090909]">
          <div className="container mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">RRL Blogs</p>
            <h1 className="font-playfair text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-gray-400">
              <CalendarDays className="h-4 w-4 text-gold-400" /> {date}
            </p>
            {image && (
              <div className="relative mt-9 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                <Image src={image} alt={title} fill unoptimized sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority />
              </div>
            )}
          </div>
        </header>

        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div
            className="wp-article-content [&_a]:text-gold-300 [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-gold-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-gray-500 [&_figure]:my-8 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-playfair [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-playfair [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl [&_li]:my-2 [&_li]:text-gray-300 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-6 [&_p]:text-base [&_p]:leading-8 [&_p]:text-gray-300 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </main>
  )
}
