import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ProjectLocation } from "@/components/projects/project-location"
import { ContactForm } from "@/components/contact/contact-form"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ProjectSpecifications } from "@/components/projects/project-specifications"

export default function TowersPage() {
  const projectData = {
    name: "RRL Towers",
    subtitle: "Commercial Space for Rent in Sarjapur Attibele",
    description:
      "RRL Builders and Developers presents prime Commercial Space for Rent in RRL Towers was the first commercial tower started by RRL Groups in 1996 and later renovated in the year 2016.",
    status: "Commercial Space Open for Rent",
    heroImage: "/Tower.jpeg",
    features: [
      "RRL Towers For rental space from Government Offices to SMEs, do visit as per your requirement - as we have space for you",
      "Sub Registrar Office",
      "RRL Corporate Office",
      "Usagi Upahar, Advocates, Offices, and More",
    ],
    location: {
      address: "RRL Towers, 4th Floor, Sampige Jala, Sarjapur - Attibele Rd, Bengaluru, Karnataka 562125",
      contact: "+91-7337816996",
    },
    businessAdvantages: [
      "Sarjapur Road, known as Sarjapur-Marathahalli Road, is a premium housing belt primarily offering 3 BHK, 2 BHK, residential apartments and Villas. And the location is booming, which is attracting many investments and investors.",
      "The most trusted popular localities such as Marathahalli, Doddakannelli, Kadubeesanahalli, HSR Layout and Carmelaram. Sarjapur Road is well connected to industrial hubs located in Sarjapur & Bommanahalli. This prominent belt is well connected to major Roads, State Highway-35 and the Outer Ring Road.",
      "Localities along Sarjapur Road witness higher rental demand due to proximity to IT hubs & competitive rentals. As compared to Sarjapur has witnessed 27% rental growth year-on-year. And that's why we move chosen to have our corporate office at this particular location.",
      "Prominent hospitals, such as Columbia Asia and Doctor Levine Memorial, are present on Sarjapur Road. Carmelaram Railway Station offers a sound rail network to the areas located on Sarjapur Road. Connectivity was never an issue here and will never be.",
      "Having a shop here or acquiring rental space, will definitely going to be a profitable decision. Contact us, for rental space investment and count yourself among the smart and successful investors.",
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
      <ProjectGallery projectName="RRL Towers" />
      <ProjectLocation project={projectData} />
      <ContactForm />
    </>
  )
}
