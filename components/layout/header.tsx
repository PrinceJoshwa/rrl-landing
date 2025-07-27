"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Projects",
    href: "/projects",
    submenu: [
      { name: "RRL Palacio", href: "/projects/palacio" },
      { name: "RRL Palm Altezze", href: "/projects/palm-altezze" },
      { name: "RRL Sequoia", href: "/projects/sequoia" },
      { name: "RRL Nature Woods", href: "/projects/nature-woods" },
    ],
  },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <span>+91-8068352626</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3" />
              <span>enquiry@rrlbuildersanddevelopers.com</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span>🏆 Times Real Estate Icon Awards 2025 Winner</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">RRL</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
              </div>
              <div>
                <div className="font-playfair font-bold text-2xl text-slate-900">RRL GROUP</div>
                <div className="text-xs text-slate-600 font-medium">BUILDERS & DEVELOPERS</div>
                <div className="text-xs text-gradient font-semibold">SINCE 1996</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-1 text-slate-700 hover:text-amber-600 font-medium transition-colors py-2",
                      pathname === item.href && "text-amber-600",
                    )}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="gradient-primary text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-slate-700 hover:text-amber-600 font-medium transition-colors",
                      pathname === item.href && "text-amber-600",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="gradient-primary text-white font-semibold w-fit rounded-full">
                  Get Free Consultation
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
