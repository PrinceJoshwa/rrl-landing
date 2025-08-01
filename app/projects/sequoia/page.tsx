import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ContactForm } from "@/components/contact/contact-form"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ProjectSpecifications } from "@/components/projects/project-specifications"

export default function SequoiaPage() {
  const projectData = {
    name: "RRL Sequoia",
    subtitle: "Premium Villas at Varthur, Bangalore",
    description: "Our latest Luxurious Villa located at Varthur, Bangalore",
    status: "Villas Coming Soon",
    heroImage:
      "/Sequoia.jpg",
    features: [
      "RRL Sequoia is our latest project in Villa sector with the space range from 2.5x100 sqft to 4.5X100 sqft.",
      "Total Villas provides are 100+, with variety in pricing range.",
      "Pricing range is divided into Affordable, Mid, Luxury bracket.",
      "Each Villa will be provides with separate Lift, Home Theatre.",
      "Anantapura (8.52 km), Yelahanka (9.69 km), Yelahanka New Town (10.43 km), Yelahanka Satellite Town (11.42 km) are the nearby areas to Madappanahalli.",
      "Madappanahalli has been chosen as par with Whitefield and Sarjapura in terms of returns on investments.",
      "Neighbourhood consists of Railway Station, Cafes, Hospitals and more, makes it favourable spot.",
    ],
    additionalInfo: {
      description: `RRL Builders and Developers presents our Premium Villas Project in the heart of the eastern part of Bangalore South - the Varthur.

As noted by 99acres, Villas are reported as the 3rd best highest searches from the Varthur location, whopping of 8% of total volume. With reputed builders stepping in Madappanahalli, real estate booming is expected in next 5 years.

We take the opportunity to announce our first villa project at the Madappanahalli, Varthur location. Our villas will be luxurious with individual lift and home-theatre for each villa. For more info, please check the pointers.

We will update more details soon, for any clarification - please contact us.`,
    },
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
