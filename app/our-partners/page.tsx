import { PartnersSection } from "@/components/partners/partners-section";
import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
    title: "Our Partners | RRL Builders and Developers",
    description: "Meet the partners who help RRL Builders and Developers create quality homes and communities.",
    alternates: { canonical: canonicalUrl("/our-partners") },
}

export default function OurPartnersPage() {
    return (
        <>
            <PartnersSection />
        </>
    );
}
