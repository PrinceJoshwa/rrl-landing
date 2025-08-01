import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectSpecifications } from "@/components/projects/project-specifications"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ContactForm } from "@/components/contact/contact-form"

export default function NatureWoodsPage() {
  const projectData = {
    name: "RRL Nature Woods",
    subtitle: "2 & 3 BHK Apartments in Sarjapur Road",
    description:
      "Settled between Whitefield & Electronic City, Soul Tree at Sompura Gate offers close proximity to Wipro IT Park, Infosys at Huskur, Marathahalli, and Koramangala all while being conveniently tucked away from the concrete jungle's hustle and bustle.",
    status: "Award Winner",
    heroImage:
      "/naturalwood.png",
    features: [
      "RERA No: PRM/KA/RERA/1251/308/PR/171023/005654",
      "Occupying an area of 1.53 acres on the NH-7 and scaling upto G+7 floors, the project offers spacious 2 BHK and 3 BHK apartments",
      "Located at Sarjapur Road which is located in south-east Bangalore, is one of the fastest growing parts of the city which makes it a perfect & favoured property investment destination",
      "15 to 40 mins drive away from all the major IT hubs, connecting Sarjapur Road in confluence to Whitefield, Electronic City and the Outer Ring Road in SEZ areas",
      "Near to some of the topmost & best-rated schools in Bangalore such as Azim Premji University (Wipro), Greenwood High (ICSE) School, LNK Management School and more",
      "Provides best in class amenities for a life of leisure and luxury within the project, at the lap of nature",
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
      <ProjectAmenities />
      <ProjectSpecifications specifications={projectData.specifications} />
      <ProjectGallery projectName="RRL Nature Woods" />
      <ContactForm />
    </>
  )
}
