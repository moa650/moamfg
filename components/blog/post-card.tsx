import Link from "next/link"
import type { PostMeta } from "@/lib/posts"

export default function PostCard({ post }: { post: PostMeta }) {
  const date = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  return (
    <Link
      href={`/news/${post.slug}`}
      className="block border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors group"
    >
      {date && (
        <p className="text-xs text-muted-foreground mb-2 font-mono">{date}</p>
      )}
      <h2 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      {post.excerpt && (
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
      )}
    </Link>
  )
}
