import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ContactForm from "@/components/contact-form"
import SubscribeForm from "@/components/subscribe-form"
import PostCard from "@/components/blog/post-card"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 border-b border-border">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-muted-foreground">
            Mechanical Original Art
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none">
            MOA
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Documenting the frontier of robotics, embodied AI, and mechanical design.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild>
              <Link href="/news">Read the Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Recent Posts</h2>
            <Link
              href="/news"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <Separator />

      {/* Subscribe */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Stay in the loop</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Get notified when new posts go up. No spam, unsubscribe any time.
          </p>
          <SubscribeForm />
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Questions, collaborations, or just want to talk robots — reach out.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
