import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Cookie, Database, Eye, FileText, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | RRL Builders and Developers",
  description:
    "Learn how RRL Builders and Developers collects, uses, and protects information submitted through this website.",
}

const sections = [
  {
    id: "information",
    title: "Information we collect",
    body: "We collect information you choose to provide through enquiry, brochure, callback, and site visit forms. This can include your name, phone number, email address, preferred project, visit date, and the details you add to your message. When you browse the site, our analytics and advertising tools may collect technical and usage information such as pages viewed, approximate location derived from your IP address, device and browser type, and interactions with the site.",
  },
  {
    id: "use",
    title: "How we use information",
    body: "We use your details to respond to questions, contact you about the property or service you asked about, arrange and confirm site visits, provide requested brochures or project information, and manage customer support. We use site usage data to understand performance, improve the website, and measure marketing campaigns. We may also use or keep information where needed to protect our business, meet legal obligations, or resolve a dispute.",
  },
  {
    id: "sharing",
    title: "When information is shared",
    body: "We do not sell your personal information. We may share relevant information with our authorised team and service providers who help us host the website, process forms, manage enquiries, or measure site performance and advertising. For example, some website forms are submitted through Formspree, and analytics or campaign measurement may use Google services. These providers process information under their own terms and privacy practices. We may also disclose information if required by law or to protect the rights, safety, and security of our customers, team, or business. Some providers may process information on systems located outside your state or country.",
  },
  {
    id: "cookies",
    title: "Cookies, analytics, and advertising",
    body: "We use Google Analytics and Google Tag Manager on this website, and may use cookies or similar technologies for analytics and advertising measurement. These tools help us understand visits and campaign performance. You can block or delete cookies in your browser settings. If you do, some website features or measurement may not work as intended. You can also use Google’s browser controls to manage Google Analytics measurement.",
  },
  {
    id: "retention-security",
    title: "Retention and security",
    body: "We keep enquiry information for as long as reasonably needed to respond to you, provide requested services, maintain business records, and meet applicable legal requirements. Retention periods may vary depending on the nature of the enquiry and our obligations. We use reasonable administrative and technical safeguards designed to protect information, but no online system or transmission can be guaranteed completely secure.",
  },
  {
    id: "choices",
    title: "Your choices and requests",
    body: "You can ask us to confirm, correct, or delete enquiry information you have submitted, subject to applicable law and records we may need to keep. You can also ask us to stop sending promotional communications; we may still contact you to respond to an active enquiry or service request. To make a request, use the contact details below. We may need to verify your identity before acting on it.",
  },
  {
    id: "children",
    title: "Children’s information",
    body: "This website and our property enquiry services are intended for adults. We do not knowingly seek to collect personal information from children through this website. If you believe a child has submitted information to us, contact us so we can review and remove it where appropriate.",
  },
  {
    id: "updates",
    title: "Updates to this policy",
    body: "We may update this policy when our website, services, or information practices change. The latest version will be published on this page with its updated date. Please review it from time to time.",
  },
]

const sectionIcons = [Database, Eye, UserRound, Cookie, LockKeyhole, FileText, UserRound, FileText]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,6,0.18),transparent_55%)]" />
        <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-700/70 bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-300">
              <ShieldCheck className="h-4 w-4" /> Your information matters
            </div>
            <h1 className="font-playfair text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Privacy <span className="text-gold-400">Policy</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Clear information about what we collect, why we use it, and the choices
              available to you when you visit our website or contact RRL.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span>RRL Builders and Developers Pvt. Ltd.</span><span className="hidden text-gray-700 sm:inline">•</span><span>Last updated: November 4, 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[250px_1fr] md:gap-14 md:py-16">
        <aside className="h-fit rounded-2xl border border-gold-900/70 bg-[#101010] p-6 md:sticky md:top-28">
          <div className="mb-4 flex items-center gap-3 text-gold-300">
            <LockKeyhole className="h-5 w-5" />
            <h2 className="font-semibold">At a glance</h2>
          </div>
          <p className="text-sm leading-6 text-gray-400">
            We use enquiry details to respond to your request and improve our services.
            We do not sell your personal information.
          </p>
          <nav aria-label="Privacy policy sections" className="mt-6 border-t border-white/10 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">On this page</p>
            <ul className="space-y-2">
              {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-sm text-gray-400 transition-colors hover:text-gold-300">{section.title}</a></li>)}
              <li><a href="#contact" className="text-sm text-gray-400 transition-colors hover:text-gold-300">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-300 hover:text-gold-200">
            Contact us <ArrowUpRight className="h-4 w-4" />
          </a>
        </aside>

        <div className="space-y-4">
          {sections.map((section, index) => {
            const Icon = sectionIcons[index]
            return (
            <article id={section.id} key={section.id} className="scroll-mt-28 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-6 transition-colors hover:border-gold-900/70 sm:p-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-800/70 bg-gold-500/10 text-gold-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">Section {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="font-playfair text-xl font-semibold sm:text-2xl">{section.title}</h2>
                </div>
              </div>
              <p className="text-sm leading-7 text-gray-400 sm:text-base">{section.body}</p>
            </article>
          )})}

          <article id="contact" className="rounded-2xl border border-gold-800 bg-gold-500/[0.07] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-gold-500/15 p-3 text-gold-300"><Mail className="h-5 w-5" /></div>
              <div>
                <h2 className="font-playfair text-xl font-semibold sm:text-2xl">Need help with a privacy request?</h2>
                <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
                  Contact RRL Builders and Developers and our team will help with your request.
                </p>
                <Link href="mailto:enquiry@rrlbuildersanddevelopers.com" className="mt-4 inline-flex font-semibold text-gold-300 underline decoration-gold-700 underline-offset-4 hover:text-gold-200">
                  enquiry@rrlbuildersanddevelopers.com
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
