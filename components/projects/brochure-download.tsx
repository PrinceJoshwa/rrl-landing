"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface BrochureDownloadProps {
  projectName: string
  brochureUrl?: string
}

export function BrochureDownload({ projectName, brochureUrl }: BrochureDownloadProps) {
  const handleDownload = () => {
    if (brochureUrl) {
      // Create a temporary link element and trigger download
      const link = document.createElement("a")
      link.href = brochureUrl
      link.download = `${projectName}-Brochure.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // Fallback - show alert or redirect to contact
      alert(`Brochure for ${projectName} will be sent to your email. Please contact us for immediate access.`)
    }
  }

  return (
    <div className="text-center py-8">
      <Button
        onClick={handleDownload}
        size="lg"
        className="gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
      >
        <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        Download The Brochure
      </Button>

      <p className="text-sm text-slate-600 mt-3">
        Get detailed information about {projectName} including floor plans, pricing, and amenities
      </p>
    </div>
  )
}
