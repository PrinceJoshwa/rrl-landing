// import { MapPin, ArrowRight, Calendar } from "lucide-react"
// import Image from "next/image"

// const projects = [
//   {
//     name: "RRL Palacio",
//     location: "Medahalli",
//     type: "Luxury Property",
//     status: "Ready to Move",
//     description: "Our newly constructed luxury property, situated in Medahalli",
//     image: "/placeholder.svg?height=300&width=400",
//     features: ["3 BHK", "2 BHK", "Premium Amenities"],
//   },
//   {
//     name: "RRL Palm Altezze",
//     location: "Varthur, Bangalore",
//     type: "Premium Property",
//     status: "Under Construction",
//     description: "Our latest premium property located at Varthur, Bangalore",
//     image: "/placeholder.svg?height=300&width=400",
//     features: ["2 BHK", "3 BHK", "Garden View"],
//   },
//   {
//     name: "RRL Sequoia",
//     location: "Varthur, Bangalore",
//     type: "Luxurious Villa",
//     status: "Ready to Move",
//     description: "Our latest luxurious Villa located at Varthur, Bangalore",
//     image: "/placeholder.svg?height=300&width=400",
//     features: ["4 BHK Villa", "Private Garden", "Premium Location"],
//   },
//   {
//     name: "RRL Nature Woods",
//     location: "Sarjapur",
//     type: "Premium Property",
//     status: "Launching Soon",
//     description: "Our premium awarded property, situated in heart of Sarjapur",
//     image: "/placeholder.svg?height=300&width=400",
//     features: ["2 BHK", "3 BHK", "Nature View"],
//   },
//   {
//     name: "RRL Oasis",
//     location: "Bangalore",
//     type: "Residential Complex",
//     status: "Planning Phase",
//     description: "Upcoming residential project with modern amenities",
//     image: "/placeholder.svg?height=300&width=400",
//     features: ["1 BHK", "2 BHK", "Swimming Pool"],
//   },
//   {
//     name: "RRL Towers",
//     location: "Sampige Jala, Sarjapur",
//     type: "Commercial Tower",
//     status: "Operational",
//     description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
//     image: "/placeholder.svg?height=300&width=400",
//     features: ["Office Spaces", "Retail", "Corporate Hub"],
//   },
// ]

// export function ProjectGrid() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="group cursor-pointer">
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
//                 <div className="relative overflow-hidden">
//                   <Image
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.name}
//                     width={400}
//                     height={300}
//                     className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
//                     {project.type}
//                   </div>
//                   <div className="absolute top-4 right-4 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
//                     <Calendar className="h-3 w-3" />
//                     <span>{project.status}</span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>

//                   <div className="flex items-center space-x-2 text-slate-600 mb-3">
//                     <MapPin className="h-4 w-4" />
//                     <span className="text-sm">{project.location}</span>
//                   </div>

//                   <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.features.map((feature, idx) => (
//                       <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <span className="text-yellow-600 font-semibold">View Details</span>
//                     <ArrowRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { MapPin, ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "RRL Palacio",
    location: "Medahalli",
    type: "Luxury Property",
    status: "Ready to Move",
    description: "Our newly constructed luxury property, situated in Medahalli",
    image: "/LookProject2.jpeg",
    features: ["3 BHK", "2 BHK", "Premium Amenities"],
  },
  {
    name: "RRL Palm Altezze",
    location: "Varthur, Bangalore",
    type: "Premium Property",
    status: "Under Construction",
    description: "Our latest premium property located at Varthur, Bangalore",
    image: "/LookProject1.jpeg",
    features: ["2 BHK", "3 BHK", "Garden View"],
  },
  {
    name: "RRL Sequoia",
    location: "Varthur, Bangalore",
    type: "Luxurious Villa",
    status: "Ready to Move",
    description: "Our latest luxurious Villa located at Varthur, Bangalore",
    image: "/Sequoia.jpg",
    features: ["4 BHK Villa", "Private Garden", "Premium Location"],
  },
  {
    name: "RRL Nature Woods",
    location: "Sarjapur",
    type: "Premium Property",
    status: "Launching Soon",
    description: "Our premium awarded property, situated in heart of Sarjapur",
    image: "/LookProject5.jpeg",
    features: ["2 BHK", "3 BHK", "Nature View"],
  },
  {
    name: "RRL Oasis",
    location: "Bangalore",
    type: "Residential Complex",
    status: "Planning Phase",
    description: "Upcoming residential project with modern amenities",
    image: "/Oasis.jpg",
    features: ["1 BHK", "2 BHK", "Swimming Pool"],
  },
  {
    name: "RRL Towers",
    location: "Sampige Jala, Sarjapur",
    type: "Commercial Tower",
    status: "Operational",
    description: "Our 1st Commercial Tower, situated at Sampige Jala, Sarjapur",
    image: "/Tower.jpeg",
    features: ["Office Spaces", "Retail", "Corporate Hub"],
  },
]

export function ProjectGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>

                  <div className="flex items-center space-x-2 text-slate-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-yellow-600 font-semibold">View Details</span>
                    <ArrowRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
