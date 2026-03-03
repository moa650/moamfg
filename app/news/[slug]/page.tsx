import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Tweet } from "react-tweet"
import YouTube from "@/components/youtube"
import LinkedIn from "@/components/linkedin"
import { getAllPosts, getPost } from "@/lib/posts"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} | MOA`, description: post.excerpt }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const date = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-12">
        {date && (
          <p className="text-xs font-mono text-muted-foreground mb-3 tracking-widest uppercase">
            {date}
          </p>
        )}
        <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
        {post.excerpt && (
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        )}
      </header>
      <div className="prose prose-invert prose-lg max-w-none">
        <MDXRemote source={post.content} components={{ Tweet, YouTube, LinkedIn }} />
      </div>
    </article>
  )
}
