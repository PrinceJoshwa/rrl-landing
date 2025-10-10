// import type React from "react"
// import type { Metadata } from "next"
// import { Inter, Playfair_Display } from "next/font/google"
// import "./globals.css"
// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
// const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

// export const metadata: Metadata = {
//   title: "RRL Builders & Developers - Award-Winning Real Estate in Bangalore",
//   description:
//     "RRL Group - Pioneers of affordable luxury residential and commercial spaces in Bangalore since 1996. Times Real Estate Icon Awards 2025 winner.",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }


// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "RRL Builders and Developers | Premium Builders in Bangalore",
  description:
    "We are RRL Builders and Developers, part of RRL Group of Companies. We provide Premium Living at Affordable Prices in Bangalore Prime Locations. Check us out!",
  keywords: [
    "rrl nature wood",
    "upcoming apartments in sarjapur road",
    "new apartments for sale bangalore",
    "apartments in varthur",
    "mall near me within 1.6 km",
    "apartments near me",
    "real estate projects near me",
    "under construction apartments near me",
    "apartments in sarjapur road for sale",
    "top builders in bangalore",
    "apartments for sale near me",
    "3 bhk flats for sale bangalore",
    "real estate developers near me",
    "nearby apartments",
    "properties near me",
    "flats for sale bangalore",
    "sarjapur road apartments",
    "flats at sarjapur",
    "apartment for sale in sarjapur",
    "flats for sale in varthur",
    "apartment for sale near me",
    "sarjapur road",
    "house for sale in sarjapur road",
    "villas in varthur",
    "sarjapur flats",
    "flats in varthur",
    "apartments for sale in sarjapur road",
    "house for sale in varthur",
    "sarjapur flats for sale",
    "property in sarjapur",
    "flats in sarjapur",
    "ready to move flats in sarjapur road",
    "properties in sarjapur",
    "flats in sarjapur road bangalore",
    "apartments in bangalore sarjapur road"
  ],  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Google Tag Manager (head) */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBHLRV77');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-63XBJFEXLL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-63XBJFEXLL');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBHLRV77"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
