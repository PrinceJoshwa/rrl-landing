"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import WhatsAppChat from "@/components/Whatsappchat"

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname?.replace(/\/$/, "") === "/diwali") return children

  return <>
    <Header />
    <main>{children}</main>
    <WhatsAppChat />
    <Footer />
  </>
}
