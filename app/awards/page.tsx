"use client" 

import Image from "next/image"
import { Trophy, Award, Star, Medal, Newspaper, Globe, Quote, Users, Building } from "lucide-react"
import { motion } from "framer-motion"

function AwardsHero() {
  return (
    <motion.section 
      className="py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              <Trophy className="h-4 w-4" />
              <span>RRL Awards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold">
              Times Real Estate Icon Awards, 2025
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              RRL Groups has been honored with the prestigious award for Builder of the Year in the Mid-Segment Housing category by the Times Real Estate ICON Awards, 2025.
            </p>

            {/* Award Highlights - ADDED FROM OLD FILE */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Builder of the Year 2025</h3>
                  <p className="text-gray-500 text-sm">Mid-segment housing category by Times Real Estate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Global Real Estate Brand Awards 2023</h3>
                  <p className="text-gray-500 text-sm">Winner in Affordability category</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-3 w-3 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Excellence in Amenities Premium</h3>
                  <p className="text-gray-500 text-sm">Mid-Segment Homes 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/awardhome.jpeg"
              alt="RRL Awards Ceremony 2025"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-2xl shadow-gold-900/50"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function AwardsList() {
  // AWARD DESCRIPTIONS ADDED
  const awards = [
    { 
      year: "2025", 
      title: "Times Real Estate Icon Awards", 
      category: "Builder of the Year - Mid Segment Housing", 
      description: "Recognized for excellence in affordable luxury housing development",
      icon: Trophy 
    },
    { 
      year: "2024", 
      title: "Excellence in Amenities Premium", 
      category: "Mid-Segment Homes", 
      description: "Awarded for outstanding amenities in residential projects",
      icon: Medal 
    },
    { 
      year: "2023", 
      title: "Global Real Estate Brand Awards", 
      category: "Affordability Category Winner", 
      description: "Global recognition for making luxury housing affordable",
      icon: Award 
    },
    { 
      year: "2023", 
      title: "Property Award of the Year", 
      category: "Affordable and High-end Property", 
      description: "Dual recognition for both affordable and premium segments",
      icon: Star 
    },
  ]

  return (
    <section className="py-20 bg-light-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
            RRL's Legacy of Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Committed to Results: Highlights of Our Real Estate Success
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <award.icon className="h-8 w-8 text-black" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold text-gold-600">{award.year}</span>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">{award.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{award.title}</h3>
                  {/* DESCRIPTION RENDERED */}
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MediaCoverage() {
  // FULL LIST OF MEDIA OUTLETS AND DESCRIPTIONS RESTORED
  const mediaOutlets = [
    {
      name: "ZEE5 Business",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token4-rJgVrC4ZKpXxrJCNc4fUufEvGeSlRl.jpeg",
      description: "Featured coverage of RRL's award-winning achievements in real estate",
    },
    {
      name: "Multiple International Outlets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token2-agM5EwaEeqJv2glMoBTPDLVxczDH3B.jpeg",
      description: "Coverage across US World Today, Daily Hunt, Indo-Asian News Service, and more",
    },
    {
      name: "The Print",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token5-lNU4TqNDvpQhVpKy6LYfNmWQ6KP4UZ.jpeg",
      description: "In-depth coverage of the 5th Global Real Estate Brand Awards 2023",
    },
    {
      name: "British Columbia Times",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token1-LtctPGKlJ54DeYjMfknXCMBTaxglJv.jpeg",
      description: "International recognition of RRL's remarkable achievements",
    },
    {
      name: "London Channel News",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token3-8TEGbwM0sMobG9OpTWtl0ODNH4VBij.jpeg",
      description: "Global media coverage highlighting RRL's industry leadership",
    },
    {
      name: "World News Network",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Token6-0aTqnZLkY2wKtVR86VOJYszKP4InKp.jpeg",
      description: "Comprehensive coverage of distinguished honorees in real estate",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20 mb-6">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold">Media Recognition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Media Coverage
          </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our accomplishments have been featured across leading publications and media outlets worldwide, showcasing our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mediaOutlets.slice(0, 6).map((outlet, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-64">
                <Image src={outlet.image || "/placeholder.svg"} alt={outlet.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{outlet.name}</h3>
                </div>
                 {/* DESCRIPTION RENDERED */}
                <p className="text-gray-400 leading-relaxed">{outlet.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" mt-10 mb-16 text-center">
                <div className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20">
                  <Newspaper className="h-5 w-5" />
                  <span className="font-semibold">Featured In</span>
                </div>
                <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">
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
                      <h4 className="text-lg font-bold text-white">ThePrint: Global Real Estate Brand Awards</h4>
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
                      <h4 className="text-lg font-bold text-white">Times of India: Builder of the Year</h4>
                      <p className="mt-2 text-sm text-gray-400">
                        RRL Builders named Builder of the Year in Mid-Segment Housing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </section>
  )
}

// ========== 4. RECOGNITION COMPONENT - ADDED FROM OLD FILE ==========
function Recognition() {
    return (
      <section className="py-20 bg-light-gold">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black">
                  The Global Real Estate Brand Awards, 2023
                </h2>
  
                <p className="text-lg text-gray-700 leading-relaxed">
                  RRL Nature Woods, our latest premium property has been awarded the Global Real Estate Brand Awards, 2023
                  in the category 'Property Award of the Year - Affordable'.
                </p>
              </div>
  
              {/* Recognition Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-black">1000+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
  
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-black">7+</div>
                  <div className="text-sm text-gray-600">Award-Winning Projects</div>
                </div>
              </div>
            </div>
  
            {/* Right Content - Quote */}
            <div className="relative">
              <div className="bg-black text-white rounded-2xl p-8 relative shadow-2xl">
                <Quote className="h-12 w-12 text-gold-400 mb-6" />
  
                <blockquote className="text-lg leading-relaxed mb-6">
                  "With our in-depth knowledge of the local market and industry trends, we offer valuable insights to help
                  you make well-informed decisions. Honesty and transparency form the core of our values."
                </blockquote>
  
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">RRL</span>
                  </div>
                  <div>
                    <div className="font-semibold">RRL Developers and Builders</div>
                    <div className="text-gray-400 text-sm">Leadership Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default function AwardsPage() {
  return (
    <>
      <AwardsHero />
      <AwardsList />
      <MediaCoverage />
      <Recognition /> {/* ADDED TO PAGE */}
    </>
  )
}