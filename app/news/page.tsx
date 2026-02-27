import type { Metadata } from "next"
import PostCard from "@/components/blog/post-card"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "News | MOA",
  description: "Robotics and embodied AI news from Mechanical Original Art.",
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">News</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">Posts coming soon.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
