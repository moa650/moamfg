"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/#contact", label: "Contact" },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold tracking-widest text-sm uppercase">
          MOA
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-foreground ${
                pathname === href ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
