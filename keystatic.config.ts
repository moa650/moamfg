import { config, collection, fields } from "@keystatic/core"

export default config({
  storage: process.env.NODE_ENV === "production"
    ? {
        kind: "github",
        repo: {
          owner: "moa650",
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
