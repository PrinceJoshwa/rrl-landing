"use client"

import { motion } from "framer-motion"
import { Briefcase, Search, FileText, Users, CheckCircle, Award, Shield, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const jobOpenings = [
  {
    title: "Senior Sales Manager",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Lead our dynamic sales team, drive strategy, and exceed sales targets for our premium residential projects.",
  },
  {
    title: "Project Engineer (Civil)",
    location: "Sarjapur, Bengaluru",
    type: "Full-time",
    description: "Oversee on-site construction activities, ensure quality standards, and manage timelines for our upcoming projects.",
  },
  {
    title: "Marketing Executive",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Develop and execute innovative marketing campaigns, manage digital presence, and generate high-quality leads.",
  },
]

export default function CareersPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 sm:py-32 bg-light-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            <Briefcase className="h-5 w-5" />
            <span className="font-semibold">Join Our Team</span>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold font-playfair sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          >
            Build Your Future at <span className="text-gold-400">RRL</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          >
            We are hiring passionate and well-rounded individuals who love what they do. We offer opportunities for you to grow and make an impact alongside a dynamic and driven team.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Workplace Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-playfair sm:text-4xl">Our Workplace Culture</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">We encourage our employees to achieve their potential by creating opportunities to grow in a supportive environment. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="bg-gray-900/50 border-gold-800 text-center p-6">
                    <Shield className="h-10 w-10 text-gold-400 mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Health & Safety</h3>
                    <p className="text-gray-400 text-sm">Prioritizing the well-being of our team above all else. </p>
                </Card>
                 <Card className="bg-gray-900/50 border-gold-800 text-center p-6">
                    <Users className="h-10 w-10 text-gold-400 mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Teamwork</h3>
                    <p className="text-gray-400 text-sm">Fostering collaboration to achieve collective success. </p>
                </Card>
                 <Card className="bg-gray-900/50 border-gold-800 text-center p-6">
                    <Lightbulb className="h-10 w-10 text-gold-400 mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Passion for Innovation</h3>
                    <p className="text-gray-400 text-sm">Constantly seeking new ways to shape the future of real estate. </p>
                </Card>
            </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-16 sm:py-24 bg-light-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-playfair sm:text-4xl">Our Hiring Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">A simple and transparent process to help you join our team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-700 bg-gold-900/20 mb-4"><Search className="h-8 w-8 text-gold-400" /></div>
              <h3 className="text-xl font-bold mb-2">1. Explore</h3>
              <p className="text-gray-400">Understand the job description and how we shape the future with innovation. </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-700 bg-gold-900/20 mb-4"><FileText className="h-8 w-8 text-gold-400" /></div>
              <h3 className="text-xl font-bold mb-2">2. Apply</h3>
              <p className="text-gray-400">Tell us why you want to join our journey. Submit your application today! </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-700 bg-gold-900/20 mb-4"><Users className="h-8 w-8 text-gold-400" /></div>
              <h3 className="text-xl font-bold mb-2">3. Connect</h3>
              <p className="text-gray-400">If you're a good fit, we'll contact you for interviews. Be yourself and prepare. </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-700 bg-gold-900/20 mb-4"><CheckCircle className="h-8 w-8 text-gold-400" /></div>
              <h3 className="text-xl font-bold mb-2">4. Decision</h3>
              <p className="text-gray-400">If selected, we'll offer you a role. If not, you can reapply after 6 months. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-playfair sm:text-4xl">Current Openings</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">If you have a passion for planning and want to work for a rapidly growing company, check out the listings below. </p>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
                {jobOpenings.map((job, index) => (
                    <Card key={index} className="bg-gray-900/50 border border-gold-800 hover:border-gold-600 transition-all">
                        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                           <div className="md:col-span-3">
                             <h3 className="text-xl font-bold text-gold-400">{job.title}</h3>
                             <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                                <span>{job.location}</span>
                                <span className="h-4 w-px bg-gold-800"></span>
                                <span>{job.type}</span>
                             </div>
                             <p className="text-gray-300 mt-3 text-sm">{job.description}</p>
                           </div>
                           <div className="md:text-right">
                                <Button asChild className="bg-gold-500 hover:bg-gold-600 text-black font-semibold">
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                           </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-gray-400">Don't see a role that fits? Send your resume to <a href="mailto:careers@rrl.com" className="text-gold-400 hover:underline">careers@rrl.com</a>.</p>
            </div>
        </div>
      </section>
    </div>
  )
}