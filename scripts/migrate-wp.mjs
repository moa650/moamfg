/**
 * One-time WordPress → MDX migration script
 * Run: node scripts/migrate-wp.mjs
 *
 * Fetches all posts from the live WordPress REST API and writes them as
 * MDX files to content/posts/. Strips HTML tags from content.
 */

import fs from "fs"
import path from "path"

const WP_API = "https://moamfg.com/wp-json/wp/v2"
const OUT_DIR = path.join(process.cwd(), "content/posts")

function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

async function fetchAllPosts() {
  let page = 1
  let all = []
  while (true) {
    const res = await fetch(`${WP_API}/posts?per_page=100&page=${page}`)
    if (!res.ok) break
    const posts = await res.json()
    if (!posts.length) break
    all = all.concat(posts)
    if (posts.length < 100) break
    page++
  }
  return all
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  console.log("Fetching posts from WordPress...")
  const posts = await fetchAllPosts()
  console.log(`Found ${posts.length} posts`)

  for (const post of posts) {
    const slug = post.slug || slugify(post.title.rendered)
    const title = post.title.rendered.replace(/"/g, '\\"')
    const date = post.date ? post.date.split("T")[0] : ""
    const excerpt = stripHtml(post.excerpt?.rendered ?? "")
      .split("\n")[0]
      .slice(0, 200)
      .replace(/"/g, '\\"')
    const content = stripHtml(post.content?.rendered ?? "")

    const mdx = `---
title: "${title}"
publishedDate: "${date}"
excerpt: "${excerpt}"
---

${content}
`

    const filepath = path.join(OUT_DIR, `${slug}.mdx`)
    fs.writeFileSync(filepath, mdx, "utf8")
    console.log(`  ✓ ${slug}`)
  }

  console.log(`\nDone. ${posts.length} posts written to content/posts/`)
}

main().catch(console.error)
