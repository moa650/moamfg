import { config, collection, fields } from "@keystatic/core"

const hasGithubCreds = !!(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
  process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
  process.env.KEYSTATIC_SECRET
)

export default config({
  storage: hasGithubCreds
    ? {
        kind: "github",
        repo: {
          owner: process.env.NEXT_PUBLIC_GITHUB_OWNER ?? "mrossi650",
          name: "moamfg",
        },
      }
    : { kind: "local" },
  ui: {
    brand: { name: "MOA" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedDate: fields.date({ label: "Published Date" }),
        excerpt: fields.text({ label: "Excerpt", multiline: true }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
})
