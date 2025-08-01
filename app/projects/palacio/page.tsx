import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectSpecifications } from "@/components/projects/project-specifications"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ContactForm } from "@/components/contact/contact-form"

export default function PalacioPage() {
  const projectData = {
    name: "RRL Palacio",
    subtitle: "2 & 3 BHK Apartments in Medahalli",
    description:
      "RRL Builders and Developers presents premium Affordable 2 & 3 BHK Apartments for Sale in Medahalli. The new 1st premium part of Bangalore South.",
    status: "Ready to Move",
    heroImage:
      "/palacio.gif",
    features: [
      "RERA#2551/309/PR/220424/006827",
      "2 BHK and 3 BHK Premium Flats with 4G and 5G units respectively",
      "Located at Medahalli",
      "The presence of industrial hubs like Hosur and Krishnagiri offers ample employment opportunities for residents. IT establishments, such as STC Global, Infosys Technology Park, and GR Tech Park in Whitefield, are within 10 km",
      "Educational institutes, such as STC Global of Krishnagiri and Sri Vidyanikethan School, are in the locality",
      "Public parks, such as Seegehalli and Bharatahalli Udyavanava, are within a 3 km distance. Cheemasandra Lake and Hale Lake View Point are tourist spots located at a distance of about 4 km",
      "The locality is a popular choice among tenants with affordable rentals and easy access to employment hubs",
    ],
    fundedBy: "Aditya Birla Housing Finance Limited",
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
      <ProjectGallery projectName="RRL Palacio" />
      <ContactForm />
    </>
  )
}
