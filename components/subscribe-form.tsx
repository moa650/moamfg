"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return <p className="text-sm text-muted-foreground">You&apos;re on the list.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
      <Input
        name="email"
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1"
        disabled={status === "loading"}
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "..." : "Subscribe"}
      </Button>
      {status === "error" && (
        <p className="text-xs text-destructive mt-1">Failed. Try again.</p>
      )}
    </form>
  )
}
