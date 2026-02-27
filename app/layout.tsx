import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "MOA",
  description:
    "MOA is a bipedal robotics R&D project inspired by the Moa — an extinct flightless bird of New Zealand.",
  openGraph: {
    title: "MOA",
    description:
      "A bipedal robotics R&D project inspired by the Moa — an extinct flightless bird of New Zealand.",
    url: "https://moamfg.com",
    siteName: "MOA",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MOA</p>
        </footer>
      </body>
    </html>
  )
}
