import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for RRL Builders and Developers, including how enquiry information is collected and used.",
}

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white">
      <section className="container mx-auto max-w-4xl px-4 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#d9a406]">
          RRL Builders and Developers
        </p>
        <h1 className="mb-8 font-playfair text-4xl font-bold md:text-5xl">Privacy Policy</h1>

        <div className="space-y-6 text-base leading-8 text-gray-300">
          <p>
            RRL Builders and Developers collects enquiry details such as name, phone number,
            email address, property interest, and message content when visitors submit forms
            on this website.
          </p>
          <p>
            This information is used to respond to enquiries, schedule site visits, share
            project details, and provide customer support. We do not sell personal information
            to third parties.
          </p>
          <p>
            Website analytics and advertising tools may collect standard usage information to
            help us understand site performance and improve our communication.
          </p>
          <p>
            To request an update or removal of your enquiry details, contact us at
            enquiry@rrlbuildersanddevelopers.com.
          </p>
        </div>
      </section>
    </main>
  )
}