import { config, collection, fields } from "@keystatic/core"

export default config({
  storage: process.env.NODE_ENV === "production"
    ? {
        kind: "github",
        repo: {
          owner: "moa650",
          name: "moamfg",
        },
        githubAppSlug: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG!,
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
