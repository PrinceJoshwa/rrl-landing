"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, BookOpen, CalendarDays, ChevronRight, ExternalLink, Newspaper } from "lucide-react"

const WORDPRESS_API = "https://blog.rrlbuildersanddevelopers.com/wp-json/wp/v2/posts"
const WORDPRESS_HOME = "https://blog.rrlbuildersanddevelopers.com/"
const POSTS_PER_PAGE = 9

type WordPressPost = {
  id: number
  date: string
  link: string
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    [key: string]: Array<{ source_url?: string; alt_text?: string; media_details?: { sizes?: { medium_large?: { source_url?: string }; large?: { source_url?: string } } } }>
  }
}

function plainText(html: string) {
  if (typeof window === "undefined") return html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim()
  const element = document.createElement("div")
  element.innerHTML = html
  return element.textContent?.replace(/\s+/g, " ").trim() ?? ""
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(date))
}

function getCoverImage(post: WordPressPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0]
  return media?.media_details?.sizes?.medium_large?.source_url ?? media?.media_details?.sizes?.large?.source_url ?? media?.source_url
}

export default function BlogListing() {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let active = true
    fetch(`${WORDPRESS_API}?_embed=1&per_page=${POSTS_PER_PAGE}&page=1`, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (!response.ok) throw new Error("WordPress posts could not be loaded")
        const pages = Number(response.headers.get("X-WP-TotalPages") ?? "1")
        setTotalPages(Number.isFinite(pages) ? pages : 1)
        return response.json() as Promise<WordPressPost[]>
      })
      .then((data) => { if (active) setPosts(data) })
      .catch(() => { if (active) setHasError(true) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  async function loadMore() {
    if (loadingMore || page >= totalPages) return
    const nextPage = page + 1
    setLoadingMore(true)
    try {
      const response = await fetch(`${WORDPRESS_API}?_embed=1&per_page=${POSTS_PER_PAGE}&page=${nextPage}`, { headers: { Accept: "application/json" } })
      if (!response.ok) throw new Error("More posts could not be loaded")
      const nextPosts = await response.json() as WordPressPost[]
      setPosts((current) => [...current, ...nextPosts])
      setPage(nextPage)
    } catch {
      setHasError(true)
    } finally {
      setLoadingMore(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-gold-900/60 bg-[#090909]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,6,0.18),transparent_55%)]" />
        <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-700/70 bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-300">
            <BookOpen className="h-4 w-4" /> Ideas for your next move
          </p>
          <h1 className="max-w-3xl font-playfair text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            The RRL <span className="text-gold-400">Journal</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Practical home buying guides, neighbourhood insights, and ideas for finding a home that fits your life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4 text-gold-400" /> From the RRL editorial team</span>
            <span className="hidden text-gray-700 sm:inline">•</span>
            <a href={WORDPRESS_HOME} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-gold-300 hover:text-gold-200">
              Visit the WordPress blog <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">Latest articles</p>
            <h2 className="font-playfair text-2xl font-semibold sm:text-3xl">Ideas, guides &amp; insights</h2>
          </div>
          {!loading && !hasError && posts.length > 0 && <span className="text-sm text-gray-500">{posts.length} articles</span>}
        </div>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading blog posts">
            {Array.from({ length: 6 }).map((_, index) => <div key={index} className="animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"><div className="aspect-[16/10] bg-white/[0.06]" /><div className="space-y-3 p-6"><div className="h-3 w-1/3 rounded bg-white/[0.08]" /><div className="h-5 w-full rounded bg-white/[0.08]" /><div className="h-4 w-4/5 rounded bg-white/[0.06]" /></div></div>)}
          </div>
        )}

        {!loading && hasError && (
          <div className="rounded-2xl border border-gold-900/70 bg-white/[0.03] px-6 py-12 text-center">
            <Newspaper className="mx-auto h-9 w-9 text-gold-400" />
            <h3 className="mt-4 font-playfair text-2xl font-semibold">The articles are on the WordPress blog</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-400">We couldn’t load the latest posts just now. Visit the RRL blog to read all published articles.</p>
            <a href={WORDPRESS_HOME} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-400">Open the RRL blog <ArrowRight className="h-4 w-4" /></a>
          </div>
        )}

        {!loading && !hasError && posts.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center text-gray-400">There are no published articles yet.</div>
        )}

        {!loading && !hasError && posts.length > 0 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const cover = getCoverImage(post)
                const title = plainText(post.title.rendered)
                const excerpt = plainText(post.excerpt.rendered)
                return (
                  <article key={post.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] transition-all duration-300 hover:-translate-y-1 hover:border-gold-800/80 hover:shadow-[0_16px_50px_rgba(217,164,6,0.08)]">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-gold-950/60 to-gray-900" aria-label={`Read ${title}`}>
                      {cover ? <Image src={cover} alt={title} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><BookOpen className="h-10 w-10 text-gold-500/50" /></div>}
                    </a>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-gold-400"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.date)}</p>
                      <h3 className="font-playfair text-xl font-semibold leading-snug text-white transition-colors group-hover:text-gold-300">{title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">{excerpt}</p>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold-300 hover:text-gold-200">
                        Read article <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>

            {page < totalPages && (
              <div className="mt-12 text-center">
                <button type="button" onClick={loadMore} disabled={loadingMore} className="inline-flex items-center gap-2 rounded-full border border-gold-700 px-6 py-3 font-semibold text-gold-300 transition-colors hover:bg-gold-500 hover:text-black disabled:cursor-wait disabled:opacity-60">
                  {loadingMore ? "Loading articles…" : "Load more articles"}<ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  )
}
