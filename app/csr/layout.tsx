import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "CSR | RRL Builders and Developers",
  description: "Learn about RRL Builders and Developers' community and social responsibility initiatives.",
  alternates: { canonical: canonicalUrl("/csr") },
}

export default function CSRLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
