import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the website terms and conditions for RRL Builders and Developers project information and enquiries.",
}

export default function TermsPage() {
  return (
    <main className="bg-black text-white">
      <section className="container mx-auto max-w-4xl px-4 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#d9a406]">
          RRL Builders and Developers
        </p>
        <h1 className="mb-8 font-playfair text-4xl font-bold md:text-5xl">Terms and Conditions</h1>

        <div className="space-y-6 text-base leading-8 text-gray-300">
          <p>
            The information on this website is provided for general project awareness and
            enquiry purposes. Project details, specifications, pricing, availability, and
            timelines may change without prior notice.
          </p>
          <p>
            Images, plans, amenities, and visual material may be indicative or representational.
            Visitors should confirm current details with the RRL Builders and Developers team
            before making a purchase decision.
          </p>
          <p>
            Submitting an enquiry form authorizes our team to contact you by phone, email, or
            messaging channels regarding the selected project or related services.
          </p>
          <p>
            Continued use of this website indicates acceptance of these terms.
          </p>
        </div>
      </section>
    </main>
  )
}