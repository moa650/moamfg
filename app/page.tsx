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
      <section className="flex flex-col items-center justify-center text-center min-h-[90svh] px-4 sm:px-6 border-b border-border">
        <div className="max-w-2xl w-full space-y-6 py-16">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight leading-none">
            WELCOME
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            MOA is an R&D project inspired by research at some of the top robotics
            programs in the world. Coincidentally, the Moa is also a (temporarily)
            extinct bipedal land animal native to New Zealand; believed to be hunted
            to extinction by the{" "}
            <a
              href="https://en.wikipedia.org/wiki/M%C4%81ori_people"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              Māori
            </a>
            , and to a lesser degree the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Haast%27s_eagle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              Haast&apos;s Eagle
            </a>
            , over five centuries ago.
          </p>
          <p className="text-muted-foreground italic">Hold my beer.</p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black border border-black hover:bg-gray-100"
            >
              <Link href="#contact">Contact Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-6">
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Stay in the loop</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Get notified when new posts go up. No spam, unsubscribe any time.
          </p>
          <SubscribeForm />
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Questions, collaborations — reach out.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
