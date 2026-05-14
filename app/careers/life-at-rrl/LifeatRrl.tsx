// "use client"

// import { motion } from "framer-motion"
// import { Users, Target, HeartPulse, Sparkles, MapPin, Coffee, Sprout } from "lucide-react"
// import Image from "next/image"

// const outingImagesData = [
//   {
//     // src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg",
//     src: "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/clubcabana.jpeg",
//     title: "Team RRL Unwinding at Club Cabana",
//     dateLocation: "Club Cabana, Sarjapur,Bengaluru | Jan 2025",
//     content: "A day of pure joy and relaxation for the RRL family. We believe a team that plays together stays together, building stronger bonds away from the blueprint.",
//   },
//   {
//    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM.jpeg",
//     title: "RRL Team Townhall & Presentation",
//     dateLocation: "Sarjapur,Bengaluru | Jan 2024",
//     content: "Our team members sharing a moment of friendly competition during a cricket match. It's about finding that perfect balance between focus on site and fun on the field.",
//   },
//   {
//     src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.22%20PM.jpeg",
//     title: "Wellness Workshop - Yoga Session",
//     dateLocation: "Sarjapur,Bengaluru | May 2025",
//     content: "Our monthly wellness session, focusing on mindfulness and relaxation through yoga. A relaxed mind is a creative mind, and it shows in our work!",
//   },
//   {
//     // src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM.jpeg",
//     src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg",
//     title: "Annual Recognition Awards",
//     dateLocation: "Sarjapur,Bengaluru | Dec 2024",
//     content: "Celebrating the hard work and dedication of our stellar team members who go above and beyond to make RRL properties feel like home.",
//   }
// ];

// const healthWellnessData = [
//   {
//     icon: HeartPulse,
//     title: "Comprehensive Health Support",
//     content: "Our well-being package includes comprehensive health insurance and on-site annual medical check-ups, so our team and their families have peace of mind.",
//   },
//   {
//     icon: Target,
//     title: "On-Site Wellness Stations",
//     content: "We provide dedicated wellness zones with standing desks, ergonomic chairs, and hydration stations to promote comfort and physical well-being throughout the workday.",
//   },
//   {
//     icon: Sprout,
//     title: "Healthy Dining Options",
//     content: "Our workplace cafe offers curated, nutritious meals and a 'healthy-snack-of-the-month' initiative, making it easy to make healthy choices.",
//   },
//   {
//     icon: Coffee,
//     title: "Mindfulness & Growth Seminars",
//     content: "Regularly scheduled sessions on stress management, financial literacy, and career growth, empowering our team beyond the desk.",
//   },
// ];

// const eventsData = [
//   {
//     icon: Users,
//     title: "Monthly Family Potlucks",
//     content: "A beautiful tradition where the entire RRL family comes together, sharing home-cooked food and great stories. These are moments of connection.",
//   },
//   {
//     icon: Sparkles,
//     title: "Annual Sports Day",
//     content: "Our internal Olympics, where friendly competition, teamwork, and high energy define the day. A space for everyone's hidden talents to shine!",
//   },
//   {
//     icon: Target,
//     title: "Quarterly Learning Fairs",
//     content: "A cross-functional knowledge exchange platform where engineers share insights, marketing presents campaigns, and everyone learns together.",
//   },
//   {
//     icon: Coffee,
//     title: "Friday 'Chai & Chat'",
//     content: "An informal end-of-week gathering for open dialogue and fun. It's a space for ideas, relaxation, and celebrating the week's wins.",
//   },
// ];

// export default function LifeAtRRLPage() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* 1. HERO SECTION */}
//       <section className="relative h-[65vh] flex items-center justify-center border-b border-white/10">
//         <Image
//           src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg"
//           alt="Life at RRL"
//           fill
//           className="object-cover opacity-40"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
//           >
//             <Users className="w-5 h-5 text-gold-500" />
//             <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Our Culture & People</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-7xl font-bold mb-6 font-playfair leading-tight"
//           >
//             A Place to Call Home: <br/><span className="text-gold-500">The RRL Family</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto"
//           >
//             RRL Builders is not just a workplace; it's a family that prioritizes your physical and mental well-being above all. Welcome to the heart of what makes us unique.
//           </motion.p>
//         </div>
//       </section>

//       {/* 2. TEAM OUTING GALLERY */}
//       <section className="py-20 bg-black overflow-hidden relative border-y border-white/10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
//         <div className="container mx-auto px-4 relative z-10 text-center mb-16 max-w-4xl">
//           <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Recent Family Gatherings</h2>
//           <p className="text-lg text-gray-400 font-light">
//             We strongly believe that a team that plays together, stays together. Recently, the RRL family took a step back from our sites and blueprints to unwind, connect, and make lasting memories at Club Cabana.
//           </p>
//         </div>

//         <div className="relative flex w-full overflow-hidden group py-10">
//           <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-r from-black to-transparent" />
//           <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-l from-black to-transparent" />

//           <motion.div
//             className="flex gap-4 sm:gap-6 whitespace-nowrap"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
//           >
//             {[...outingImagesData, ...outingImagesData].map((imageData, i) => (
//               <div
//                 key={i}
//                 className="w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[420px] md:h-[500px] flex-shrink-0 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-gold-500/50"
//               >
//                 <div className="relative h-2/3 w-full">
//                   <Image src={imageData.src} alt={imageData.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-6 h-1/3 flex flex-col justify-between">
//                   <div>
//                     <h4 className="text-xl font-bold text-white font-playfair line-clamp-1">{imageData.title}</h4>
//                     <div className="flex items-center gap-1.5 text-gold-400 text-sm mt-1">
//                       <MapPin className="w-4 h-4" />
//                       <span>{imageData.dateLocation}</span>
//                     </div>
//                   </div>
//                   <p className="text-gray-400 text-sm line-clamp-2 mt-2">{imageData.content}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* 3. HEALTH & WELLNESS SECTION */}
//       <section className="py-24 bg-neutral-950 border-y border-white/10">
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="text-center mb-20 max-w-4xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
//               A Healthy Heart, a Thriving Mind: <br/><span className="text-gold-500">Employee Well-being</span>
//             </h2>
//             <p className="text-lg text-gray-400 font-light">
//               To build incredible homes, we must nurture an incredible team. Your mental and physical health are our highest priorities.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {healthWellnessData.map((item, index) => (
//               <div key={index} className="bg-black p-8 rounded-2xl border border-white/5 group hover:border-gold-500/50 hover:shadow-2xl transition-all duration-300">
//                 <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300 border border-gold-500/20">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 font-playfair">{item.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. EVENTS & GROWTH SECTION */}
//       <section className="py-24 bg-black border-y border-white/10">
//         <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center mb-16 max-w-4xl">
//           <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
//             Connecting, Sharing, <span className="text-gold-500">Learning</span>
//           </h2>
//           <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
//             Our unique culture is built on the pillars of continuous learning, open communication, and shared success. Beyond the work, we find every opportunity to connect.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 max-w-7xl">
//             {eventsData.map((item, i) => (
//               <div key={i} className="bg-zinc-900 border border-white/5 rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:border-gold-500/50">
//                 <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6 text-gold-500 border border-white/10 group-hover:border-gold-500/30">
//                   <item.icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="text-lg font-bold font-playfair text-white mb-3">{item.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
//               </div>
//             ))}
//         </div>
//       </section>

//       {/* 5. CTA SECTION */}
//       <section className="py-24 bg-gold-500 text-black text-center">
//         <div className="container mx-auto px-4">
//           <Sparkles className="w-12 h-12 mx-auto mb-6 text-black/50" />
//           <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Build Your Career With Us</h2>
//           <p className="text-xl max-w-2xl mx-auto mb-10 font-medium opacity-90">
//             Join the RRL family and experience a workplace that truly cares about your well-being, growth, and happiness.
//           </p>
//           <a href="/careers" className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all duration-300">
//             View Open Positions
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client"

import { motion } from "framer-motion"
import { Users, Target, HeartPulse, Sparkles, MapPin, Coffee, Sprout } from "lucide-react"
import Image from "next/image"

const outingImagesData = [
  {
    src: "https://ik.imagekit.io/j0xzq9pns/RRL%20Awards/clubcabana.jpeg",
    title: "Team RRL Unwinding at Club Cabana",
    dateLocation: "Club Cabana, Sarjapur,Bengaluru | Jan 2025",
    content: "A day of pure joy and relaxation for the RRL family. We believe a team that plays together stays together, building stronger bonds away from the blueprint.",
  },
  {
   src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.26%20PM.jpeg",
    title: "RRL Team Townhall & Presentation",
    dateLocation: "Sarjapur,Bengaluru | Jan 2024",
    content: "Our team members sharing a moment of friendly competition during a cricket match. It's about finding that perfect balance between focus on site and fun on the field.",
  },
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.22%20PM.jpeg",
    title: "Wellness Workshop - Yoga Session",
    dateLocation: "Sarjapur,Bengaluru | May 2025",
    content: "Our monthly wellness session, focusing on mindfulness and relaxation through yoga. A relaxed mind is a creative mind, and it shows in our work!",
  },
  {
    src: "https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.25%20PM.jpeg",
    title: "Annual Recognition Awards",
    dateLocation: "Sarjapur,Bengaluru | Dec 2024",
    content: "Celebrating the hard work and dedication of our stellar team members who go above and beyond to make RRL properties feel like home.",
  }
];

const healthWellnessData = [
  {
    icon: HeartPulse,
    title: "Comprehensive Health Support",
    content: "Our well-being package includes comprehensive health insurance and on-site annual medical check-ups, so our team and their families have peace of mind.",
  },
  {
    icon: Target,
    title: "On-Site Wellness Stations",
    content: "We provide dedicated wellness zones with standing desks, ergonomic chairs, and hydration stations to promote comfort and physical well-being throughout the workday.",
  },
  {
    icon: Sprout,
    title: "Healthy Dining Options",
    content: "Our workplace cafe offers curated, nutritious meals and a 'healthy-snack-of-the-month' initiative, making it easy to make healthy choices.",
  },
  {
    icon: Coffee,
    title: "Mindfulness & Growth Seminars",
    content: "Regularly scheduled sessions on stress management, financial literacy, and career growth, empowering our team beyond the desk.",
  },
];

const eventsData = [
  {
    icon: Users,
    title: "Monthly Family Potlucks",
    content: "A beautiful tradition where the entire RRL family comes together, sharing home-cooked food and great stories. These are moments of connection.",
  },
  {
    icon: Sparkles,
    title: "Annual Sports Day",
    content: "Our internal Olympics, where friendly competition, teamwork, and high energy define the day. A space for everyone's hidden talents to shine!",
  },
  {
    icon: Target,
    title: "Quarterly Learning Fairs",
    content: "A cross-functional knowledge exchange platform where engineers share insights, marketing presents campaigns, and everyone learns together.",
  },
  {
    icon: Coffee,
    title: "Friday 'Chai & Chat'",
    content: "An informal end-of-week gathering for open dialogue and fun. It's a space for ideas, relaxation, and celebrating the week's wins.",
  },
];

export default function LifeAtRRLPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center border-b border-white/10">
        <Image
          src="https://ik.imagekit.io/j0xzq9pns/WhatsApp%20Image%202025-12-18%20at%203.42.24%20PM%20(1).jpeg"
          alt="Life at RRL"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-gold-500/50 bg-gold-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
          >
            <Users className="w-5 h-5 text-gold-500" />
            <span className="text-gold-200 text-sm font-semibold uppercase tracking-widest">Our Culture & People</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair leading-tight"
          >
            A Place to Call Home: <br/><span className="text-gold-500">The RRL Family</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto"
          >
            RRL Builders is not just a workplace; it's a family that prioritizes your physical and mental well-being above all. Welcome to the heart of what makes us unique.
          </motion.p>
        </div>
      </section>

      {/* 2. TEAM OUTING GALLERY */}
      <section className="py-20 bg-black overflow-hidden relative border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 leading-tight">Recent Family Gatherings</h2>
          <p className="text-lg text-gray-400 font-light">
            We strongly believe that a team that plays together, stays together. Recently, the RRL family took a step back from our sites and blueprints to unwind, connect, and make lasting memories at Club Cabana.
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden group py-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-48 bg-gradient-to-l from-black to-transparent" />

<motion.div
            className="flex gap-4 sm:gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...outingImagesData, ...outingImagesData].map((imageData, i) => (
              <div
                key={i}
                // FIX 1: Slightly taller mobile card (380px) and added `flex flex-col`
                className="w-[280px] h-[380px] sm:w-[340px] sm:h-[440px] md:w-[420px] md:h-[500px] flex-shrink-0 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-gold-500/50 flex flex-col"
              >
                {/* FIX 2: Image takes 55% height on mobile, 66% on desktop */}
                <div className="relative h-[55%] sm:h-[60%] md:h-2/3 w-full shrink-0">
                  <Image src={imageData.src} alt={imageData.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* FIX 3: Reduced mobile padding (p-4), use flex-1 to auto-fill space */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center sm:justify-between gap-1.5 sm:gap-0">
                  <div>
                    {/* FIX 4: Scaled typography slightly down for mobile */}
                    <h4 className="text-lg sm:text-xl font-bold text-white font-playfair line-clamp-1">{imageData.title}</h4>
                    <div className="flex items-center gap-1 sm:gap-1.5 text-gold-400 text-xs sm:text-sm mt-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                      <span className="truncate">{imageData.dateLocation}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mt-1 sm:mt-2">{imageData.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. HEALTH & WELLNESS SECTION */}
      <section className="py-24 bg-neutral-950 border-y border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 leading-tight">
              A Healthy Heart, a Thriving Mind: <br/><span className="text-gold-500">Employee Well-being</span>
            </h2>
            <p className="text-lg text-gray-400 font-light">
              To build incredible homes, we must nurture an incredible team. Your mental and physical health are our highest priorities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthWellnessData.map((item, index) => (
              <div key={index} className="bg-black p-8 rounded-2xl border border-white/5 group hover:border-gold-500/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300 border border-gold-500/20">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-playfair">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENTS & GROWTH SECTION */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 leading-tight">
            Connecting, Sharing, <span className="text-gold-500">Learning</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
            Our unique culture is built on the pillars of continuous learning, open communication, and shared success. Beyond the work, we find every opportunity to connect.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 max-w-7xl">
            {eventsData.map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-white/5 rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:border-gold-500/50">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6 text-gold-500 border border-white/10 group-hover:border-gold-500/30">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold font-playfair text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-gold-500 text-black text-center">
        <div className="container mx-auto px-4">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-black/50" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 leading-tight">Build Your Career With Us</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 font-medium opacity-90">
            Join the RRL family and experience a workplace that truly cares about your well-being, growth, and happiness.
          </p>
          <a href="/careers" className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all duration-300">
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}