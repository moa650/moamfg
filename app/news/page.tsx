import type { Metadata } from "next"
import PostList from "@/components/blog/post-list"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "News | MOA",
  description: "Robotics and embodied AI news from MOA.",
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">News</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">Posts coming soon.</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  )
}
