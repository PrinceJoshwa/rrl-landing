"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Link, Medal, Newspaper, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

function MediaSection() {  
  const awardsData = [
    {
      year: "2025",
      title: "Times Real Estate Icon Awards",
      category: "Builder of the Year - Mid Segment Housing",
      icon: Trophy,
      color: "bg-gold-500",
    },
    {
      year: "2024",
      title: "Excellence in Amenities Premium",
      category: "Mid-Segment Homes",
      icon: Medal,
      color: "bg-gray-700",
    },
    {
      year: "2023",
      title: "Global Real Estate Brand Awards",
      category: "Affordability Category Winner",
      icon: Award,
      color: "bg-gold-500",
    },
    {
      year: "2023",
      title: "Property Award of the Year",
      category: "Affordable and High-end Property",
      icon: Star,
      color: "bg-gray-700",
    },
  ]
  return (
    <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
            <Trophy className="h-5 w-5" />
            <span className="font-semibold">RRL Legacy of Achievements</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold font-playfair sm:text-4xl lg:text-5xl">
            Committed to Results: Highlights of Our
            <span className="text-gold-400 block">Real Estate Success</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            At RRL Builders and Developers Pvt Ltd, we take immense pride in our dedication to excellence and our
            commitment to delivering exceptional real estate services to our valued clients.
          </p>
        </div>

        <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="group flex min-h-32 rounded-2xl border border-gold-800 bg-gray-900/50 p-4 sm:p-6 shadow-lg transition-all duration-300 hover:border-gold-600 hover:shadow-2xl"
              >
                <div className="flex w-full items-center space-x-4">
                  <div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg ${award.color}`}
                  >
                    <award.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* THIS IS THE KEY FIX: Stacks vertically on mobile, row on sm screens up */}
                    <div className="mb-2 flex flex-col items-start sm:flex-row sm:items-center sm:space-x-3">
                      <span className="text-xl font-bold text-gold-400">{award.year}</span>
                      <div className="h-6 w-px bg-gold-800 hidden sm:block"></div>
                      <span className="text-sm font-medium uppercase tracking-wide text-gray-500 line-clamp-2 sm:truncate">
                        {award.category}
                      </span>
                    </div>

                    <h3 className="line-clamp-2 mb-2 text-lg font-bold text-white transition-colors group-hover:text-gold-400 sm:text-xl">
                      {award.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
              alt="RRL Awards Ceremony"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Other sections with similar responsive adjustments */}
        <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl">
            <Image
              src="/zee.jpeg"
              alt="5th Global Real Estate Brand Awards 2023"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6 ">
            <h3 className="text-2xl font-bold font-playfair md:text-3xl">
              The Global Real Estate Brand Awards, 2023
            </h3>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              Bengaluru (Karnataka) [India], June 1: The Indian real estate industry's stars gathered at the
              illustrious 5th edition of the Global Real Estate Brand Awards 2023. Held at Hotel Ritz Carlton,
              Bengaluru...
            </p>
<Link href="/awards">
  <Button
    size="lg"
    className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
  >
    RRL RECOGNITION
  </Button>
</Link>
          </div>
        </div>

        <div className="mb-12 md:mb-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 md:order-1 order-2">
            <h3 className="text-2xl font-bold font-playfair md:text-3xl">Times Real Estate Icons Award, 2025</h3>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              RRL Groups has crowned esteem award as builder of the year in Mid segment housing by Times Real Estate
              ICON Awards, 2025.
            </p>
             <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              Thrilled to present award-winning projects after RRL Nature Wood, now its turn for RRL Palacio, powered by
              RRL Builders and developers...
            </p>
<Link href="/awards">
  <Button
    size="lg"
    className="mt-10 rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300"
  >
    RRL RECOGNITION
  </Button>
</Link>
          </div>
          <div className="relative rounded-3xl bg-black/30 border border-gold-800 p-4 sm:p-6 shadow-2xl md:order-2 order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award1-NuACJEgdde3nzeEta7nJjCLE0v4k7w.jpeg"
              alt="Times Real Estate Icons Award 2025"
              width={600}
              height={400}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold">Featured In</span>
          </div>
          <h3 className="mb-8 text-2xl font-bold font-playfair md:text-3xl">
            Our Achievements in the <span className="text-gold-400 block">News</span>
          </h3>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-qDHHyNYjDinRiMkHs0aLMdWqIsg1A3.jpeg"
                alt="ThePrint Media Coverage"
                width={500}
                height={300}
                className="h-auto w-full rounded-t-2xl object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">ThePrint: Global Real Estate Brand Awards</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Coverage of the 5th edition of the Global Real Estate Brand Awards 2023.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gold-800 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-a2nth21OR71xLxlXXXOwOeVuSveGXL.png"
                alt="Times of India Media Coverage"
                width={500}
                height={300}
                className="h-auto w-full rounded-t-2xl object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">Times of India: Builder of the Year</h4>
                <p className="mt-2 text-sm text-gray-400">
                  RRL Builders named Builder of the Year in Mid-Segment Housing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <Link href="/awards">
            <Button size="lg" className="rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-all duration-300">
              Explore All RRL Awards
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default function EventsMediaNewsPage() {
    return <MediaSection />;
}