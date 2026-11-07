import type { Metadata } from "next"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator | RRL Builders and Developers",
  description: "Estimate your home loan EMI with the RRL Builders and Developers EMI calculator.",
  alternates: { canonical: canonicalUrl("/emi-calculator") },
}

export default function EmiCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
