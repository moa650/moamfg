import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "content/posts")

export type PostMeta = {
  slug: string
  title: string
  publishedDate: string
  excerpt: string
}

export type Post = PostMeta & {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf8")
      const { data } = matter(raw)
      const rawDate = data.publishedDate
      const publishedDate = rawDate instanceof Date
        ? rawDate.toISOString().slice(0, 10)
        : (rawDate ?? "")
      return {
        slug,
        title: data.title ?? slug,
        publishedDate,
        excerpt: data.excerpt ?? "",
      }
    })
    .sort((a, b) => (a.publishedDate > b.publishedDate ? -1 : 1))
}

export function getPost(slug: string): Post | null {
  const filepath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, "utf8")
  const { data, content } = matter(raw)
  const rawDate = data.publishedDate
  const publishedDate = rawDate instanceof Date
    ? rawDate.toISOString().slice(0, 10)
    : (rawDate ?? "")
  return {
    slug,
    title: data.title ?? slug,
    publishedDate,
    excerpt: data.excerpt ?? "",
    content,
  }
}
