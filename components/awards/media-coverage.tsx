// import Image from "next/image"

export function MediaCoverage() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Token of Success - Media Coverages</h2>
          <p className="text-xl text-slate-600">Success Stories: Noteworthy Achievements in Real Estate</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RRL%20Awards%201.png-FksyLN1g6wHuUiW2glPRE7i36SyyTN.jpeg"
              alt="Media Coverage of RRL Awards and Recognition"
              width={1200}
              height={800}
              className="rounded-lg w-full h-auto"
            /> */}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our achievements have been featured across leading publications and media outlets, showcasing our
              commitment to excellence in real estate development and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
