// import Image from "next/image"

export function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Young Entrepreneurs Transforming The Real Estate Landscape
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The legacy since 1996 and with over 10 years of experience in the field, they have showcased exceptional
            business acumen and established themselves as leading developers specialising in commercial spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Leadership Images */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Home%202-BTGq2jWHJXPHjrYSDBujfEjUbwpoLK.png"
                alt="RRL Leadership Team"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              /> */}
            </div>
          </div>

          {/* Leadership Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Visionary Leadership</h3>
              <p className="text-slate-600 leading-relaxed">
                When it comes to young entrepreneurs making a mark in the real estate industry, the dynamic duo of Mr.
                Ram Reddy and Mr. Lakshman from RRL Builders and Developers Pvt Ltd stand out in the industry with their
                innovative approach.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With over 10 years of experience in the field, they have showcased exceptional business acumen and
                established themselves as leading developers specialising in commercial spaces. With years of experience
                in the real estate industry, they have developed a deep understanding of market trends, local
                preferences, and the ever-changing dynamics of the industry.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
              <p className="text-slate-700 text-sm">
                RRL Builders and Developers provide luxurious living spaces ensuring affordability, making homeownership
                a reality for many.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
