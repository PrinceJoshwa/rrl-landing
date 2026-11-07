export type ProjectCardData = {
  name: string
  location: string
  type: string
  status: string
  image: string
  mobileImage: string
  href: string
  acres: string | null
  units: string | null
  config: string | null
  possession: string
}

export const projectCards: ProjectCardData[] = [
  {
    name: "RRL Palm Altezze",
    location: "Varthur, Bangalore",
    type: "Premium Apartment",
    status: "Open For Booking",
    image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palm%20Altezze.png?updatedAt=1766849725863",
    href: "/projects/palm-altezze",
    acres: "1 acre 38 Guntas",
    units: "115 Units",
    config: "2, 3 BHK",
    possession: "Possession: 2027",
  },
  {
    name: "RRL Code Name - NC 216",
    location: "Sarjapur, Bangalore",
    type: "Premium Apartment",
    status: "Open for EOI",
    image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/NC%20216.png?updatedAt=1766849714503",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/NC%20216.png?updatedAt=1766849714503",
    href: "/projects/nc-216",
    acres: "2.01 Acres",
    units: "216 Units",
    config: "2, 3 BHK",
    possession: "Open for EOI",
  },
  {
    name: "RRL Palacio",
    location: "Medahalli, Bangalore",
    type: "Luxury Apartment",
    status: "READY TO MOVE",
    image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531",
    href: "/projects/palacio",
    acres: "1.5 Acres",
    units: "103 Units",
    config: "2, 3 BHK",
    possession: "Completed",
  },
  {
    name: "RRL Nature Woods",
    location: "Sarjapur, Bangalore",
    type: "Premium Apartment",
    status: "Completed",
    image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502",
    href: "/projects/nature-woods",
    acres: "1.5 Acres",
    units: "148 Units",
    config: "2, 3 BHK",
    possession: "Early possession granted",
  },
  {
    name: "RRL Towers",
    location: "Sarjapur",
    type: "Commercial Complex",
    status: "OPERATIONAL",
    image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Towers.png?updatedAt=1766849720451",
    href: "/projects/commercial",
    acres: null,
    units: null,
    config: null,
    possession: "Operational",
  },
  {
    name: "RRL Complex",
    location: "Attibele Sarjapur Road",
    type: "Commercial Project",
    status: "COMPLETED",
    image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Complex.png?updatedAt=1766849724360",
    href: "/projects/commercial",
    acres: null,
    units: null,
    config: null,
    possession: "Commercial Project",
  },
  {
    name: "Confident Atria",
    location: "Sarjapura - Attibele Road",
    type: "Premium Villa",
    status: "Possession in 4 Months",
    image: "https://ik.imagekit.io/j0xzq9pns/svt/Atria%20poster%20web.png",
    mobileImage: "https://ik.imagekit.io/j0xzq9pns/svt/Atria%20poster%20web.png",
    href: "/projects/confident-atria",
    acres: "25 Acres",
    units: "319 Units",
    config: "4 BHK",
    possession: "Possession: 4 Months",
  },
]
