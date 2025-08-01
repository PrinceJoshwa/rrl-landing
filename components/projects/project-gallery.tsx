import Image from "next/image"
import { BrochureDownload } from "./brochure-download"

interface ProjectGalleryProps {
  projectName: string
}

export function ProjectGallery({ projectName }: ProjectGalleryProps) {
  const galleryImages = [
    { src: "/LookProject1.jpeg", alt: "Exterior View" },
    { src: "/LookProject2.jpeg", alt: "Children's Play Area" },
    { src: "/LookProject3.jpeg", alt: "Modern Gymnasium" },
    { src: "/LookProject4.jpeg", alt: "Clubhouse Interior" },
    { src: "/LookProject5.jpeg", alt: "Swimming Pool" },
    { src: "/LookProject6.jpeg", alt: "Landscaped Gardens" },
    { src: "/LookProject7.jpeg", alt: "Sample Apartment" },
    { src: "/LookProject8.jpeg", alt: "Jogging Track" },
    { src: "/LookProject9.jpeg", alt: "Building Facade" },
    { src: "/LookProject10.jpeg", alt: "Covered Parking" },
    { src: "/LookProject11.jpeg", alt: "Community Hall" },
    { src: "/LookProject12.jpeg", alt: "Entrance Lobby" },
  ]

  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Look of the Project</h2>
          <p className="text-xl text-slate-600">Discover Your Perfect Match: Our Exclusive Property Listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`${projectName} - ${image.alt}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              The Brochure
            </button>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              The Floor Plan
            </button>
            <button className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              The Master Plan
            </button>
            <button className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
              The Address
            </button>
          </div>

          <BrochureDownload
            projectName={projectName}
            brochureUrl={
              projectName === "RRL Palacio"
                ? "/brochures/rrl-palacio-brochure.pdf"
                : projectName === "RRL Nature Woods"
                  ? "/brochures/rrl-nature-woods-brochure.pdf"
                  : undefined
            }
          />
        </div>
      </div>
    </section>
  )
}
