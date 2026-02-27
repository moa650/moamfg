import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "MOA | Mechanical Original Art",
  description:
    "Mechanical Original Art — exploring robotics, embodied AI, and mechanical design.",
  openGraph: {
    title: "MOA | Mechanical Original Art",
    description: "Exploring robotics, embodied AI, and mechanical design.",
    url: "https://moamfg.com",
    siteName: "Mechanical Original Art",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mechanical Original Art</p>
        </footer>
      </body>
    </html>
  )
}
