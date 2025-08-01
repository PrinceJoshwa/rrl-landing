import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ContactForm } from "@/components/contact/contact-form"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectSpecifications } from "@/components/projects/project-specifications"
import { ProjectGallery } from "@/components/projects/project-gallery"

export default function OasisPage() {
  const projectData = {
    name: "RRL Oasis",
    subtitle: "Commercial Mall at Sarjapur, Bangalore",
    description: "Our latest Commercial Mall located at Sarjapur, Bangalore",
    status: "Commercial Mall Coming Soon",
    heroImage: "/Oasis.jpg",
    features: [
      "Commercial Mall situated on Sarjapur Attibele Road, Bangalore",
      "Total area = 1 Lakh sqft",
      "The Mall space includes Parking, Retail Spaces, Common Areas, Restrooms and Amenities",
      "Entertainment Zones and Food court will be spaced for kids, families and elderly people fun time",
      "Keeping up with the pace, Technology integration will be provided, integrating Automation and digital directories",
      "Keeping Bangalore green, energy-efficient lighting and HVAC systems",
      "Known retail hubs like The Big Market Attebele, Blue Mart, People's Mart, and Fashion Bazar are expected to be part of",
      "This route is strategically connected to NH-44, which offers direct access to Electronic City, expected to make IT sector part of",
    ],
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
        "Kitchen: Granite slab of 40mm thick with stainless steel sink, glazed tiles dado upto 2ft. height above the granite slab",
        "Electrical: Concealed copper wiring with Anchor/Roma switches, sockets, and slides",
        "Paint: External walls - Apex paints. And Internal walls - Emulsion paints",
        "Windows: 3 Track fabrication windows for living and bedroom with safety grills and mosquito mesh. & 2 track for kitchen and bathroom with safety grills",
      ],
      services: [
        "Sanitary: Jaguar CP fittings and Taps or Hindware Sanitary with Geyser provision",
        "Washrooms: Anti skid ceramic tiles flooring and Glazed tile dado upto 7ft height",
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
      <ProjectAmenities />
      <ProjectSpecifications specifications={projectData.specifications} />
      <ProjectGallery projectName="RRL Oasis" />
      <ContactForm />
    </>
  )
}
