import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectDetails } from "@/components/projects/project-details"
import { ProjectLocation } from "@/components/projects/project-location"
import { ContactForm } from "@/components/contact/contact-form"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ProjectSpecifications } from "@/components/projects/project-specifications"

export default function ComplexPage() {
  const projectData = {
    name: "RRL Complex",
    subtitle: "Commercial Space for Rent in Bidaraguppa",
    description:
      "RRL Builders and Developers presents RRL Complex, our 18th Commercial Building. RRL Complex is constructed and maintained by RRL Group itself.",
    status: "Operational",
    heroImage: "/complex.jpg",
    features: [
      "It's a Commercial Space for Rent in Bidaraguppa, Sarjapur Attibele Road, Bangalore South",
      "RRL Complex is commodious enough to cover up Bangalore's famous Mayura Bakery to many SMEs like Fashion Fitness, Maple Beauty and Spa, Bluemart and many more",
      "For the convenience of the visitors, we have provided ample parking space, walking space and pet-friendly space",
      "Do visit for recreational activities or for your next investment",
    ],
    location: {
      address:
        "SY NO - 269, BIDURGUPPA VILLAGE, bus-stop, RRL COMPLEX, Sarjapur Attibele Rd, near Biderguppa, Bengaluru, Karnataka 562125",
      contact: "+91-7337816996",
    },
    businessAdvantages: [
      "Sarjapur Attibele Road is an affordable locality situated in the southern part of Bangalore South. It has been proven our one of the best investment, made 18 years ago.",
      "What does it have for Commercial Space owners? The answer is: this locality is near Chichuraganapalli, Billapura and Attibele Vallabhi. This locality has 200+ properties to rent. The residents of Sarjapur Attibele Road rated this locality at 5/5 in terms of connectivity, whereas for safety, they rated it 4/5.",
      "This Sarjapur Attibele belt is strategically connected to NH-44, which offers direct access to Electronic City, a famous IT hub. And the residential and commercial properties offer connectivity to employment hubs via highways. Retail hubs like The Big Market Attebele, Blue Mart, People's Mart, and Fashion Bazar are along the stretch, making it the best choice for rental, and residential owners. And with the influx of population, it will eventually benefit commercial owners and shops.",
      "Lots of inflow and outflow from this belt because of its connectivity and tourist spots. The road corridor is a part of SH-35 that provides connectivity to Electronic City and Kempegowda International Airport, located in Devanahalli, is well-connected to the housing belt via NH-44. The Huskur Kere, Bantalakere Lake, and Lake Island are tourist attractions that are close to areas along this belt.",
      "What is the future, if you ask. There are plenty of upcoming projects on this belt.",
      "There are plans to via Sarjapur-Attibele Road, which may help curb traffic issues",
      "Construction of a road from Bannerghatta to Hoskeote via Attibele-Sarjapur and Whitefield is on the cards.",
      "The upcoming Satellite Town Ring Road would pass through Attibele, offering easy access to Magadi",
      "As proved and claimed by 99 acres, Sarjapur Attibele Road has scored a whopping 4.2 rating out of 5, for its being one of the best investment plans. Anyone can take the benefit of early investment since this belt has lots of hopes in the near future.",
      "Why wait, when can be done now! Contact us for seamless guidance and experience.",
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
      <ProjectGallery projectName="RRL Complex" />
      <ProjectLocation project={projectData} />
      <ContactForm />
    </>
  )
}
