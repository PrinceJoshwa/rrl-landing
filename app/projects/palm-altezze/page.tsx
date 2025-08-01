import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectSpecifications } from "@/components/projects/project-specifications"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ContactForm } from "@/components/contact/contact-form"

export default function PalmAltezzePage() {
  const projectData = {
    name: "RRL Palm Altezze",
    subtitle: "2 & 3 BHK Apartments in Varthur, Bangalore",
    description:
      "RRL Builders and Developers presents our Premium 2 & 3 BHK Apartments in Varthur in the heart of the eastern part of Bangalore North. The Varthur is near Sarjapur Layout, Balagere and Varthur Road. This locality has 200+ properties to buy and 90+ properties to rent. The residents of Varthur rated this locality at 4/5 in terms of connectivity, whereas for safety, they rated it 4/5. As noted by 99acres, the Year-on-Year average price for Apartments in Varthur is around 38.9%. The neighbouring areas offering properties in the same price segment are Balagere, Siddapura, Thubarahalli, Gunjur.",
    status: "Under Construction",
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/palmalt.jpg-TsgHUHy8mq8OkWoBefDX1a8aQsqr4a.jpeg", // palmalt.jpg
    features: [
      "2 BHK and 3 BHK Premium Flats at Affordable cost.",
      "Located along State Highway 35, which connects it to Sarjapur, Whitefield, Brookfield and various other areas",
      "Nallurahalli bus stand, Nallurahalli metro station, Kajjisona industrial area metro station offer connectivity to Varthur.",
      "Leading hospitals, such as Hairline International, Government Hospital, Agarwal Eye Hospital are located in and around the area",
      "Several educational institutions around the locality include Bright Beginnings Preschool, the Dunmore House Preschool.",
      "Residents enjoy access to active shopping and recreational hubs such as Looking Good Furniture, Vidyapeeka Multiplex, Innovative Multiplex.",
      "RRL Aerospace Museum, Kundalahalli Lake and Nallurahalli Lake are a few popular tourist destinations within 8 km radius",
    ],
    // Assuming similar amenities and specifications as other residential projects if not explicitly provided
    // You can adjust these or remove if not applicable for this project
    specifications: {
      civil: [
        "Structure: R.C.C framed structure, designed as per relevant IS codes for earthquake resistance and structurally efficient systems implemented",
        'Walls: External walls with 6" solid blocks and internal walls with 4" solid blocks',
        "Plastering: Sponge finish for external walls with smooth cement finish for internal walls",
        "Amenities: Swimming Pool, Amphitheatre, Jogging Track, Kids' Park, Indoor and Outdoor Gym, Closed Parking for 2 and 3 Wheelers",
        "Automation: Pump, Light provision has been automated for seamless experience",
      ],
      architecture: [
        "Doors: Main Door - Teak wood frame with OT shutter, Internal doors - Hardwood with flush door shutters",
        "Flooring: Vitrified tiles for entire flooring in bedrooms, living and balconies. Granite flooring for common areas",
        "Bathroom: Floor - Anti skid ceramic tiles flooring. And, Walls - Glazed tile dado upto 7' height",
        "Paint: External walls - Apex paints. And Internal walls - Emulsion paints",
        "Windows: 3 Track fabrication windows for living and bedroom with safety grills and mosquito mesh. & 2 track for kitchen and bathroom with safety grills",
      ],
      services: [
        "Sanitary: Jaguar CP fittings and Taps or Hindware Sanitary with Geyser provision",
        "Electricals: Concealed copper wiring with Anchor/Roma switches and sockets",
        "Grid Power And Back-Up: Generator for common UPS Lift & for each flat (lighting points)",
        "Elevator: Fully automated 4 lifts of 6 Passenger capacity elevator of reputed make",
        "Electrical Points: Provision of electrical points for Refrigerator, chimney and washing machine. Individual TV & Telephone points in the living & Master bedroom",
      ],
    },
  }

  return (
    <>
      <ProjectHero project={projectData} />
      <ProjectDetails project={projectData} />
      {/* Assuming Palm Altezze has similar amenities and specifications as other residential projects */}
      <ProjectAmenities />
      <ProjectSpecifications specifications={projectData.specifications} />
      <ProjectGallery projectName="RRL Palm Altezze" />
      <ContactForm />
    </>
  )
}
