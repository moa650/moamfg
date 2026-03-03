import { config, collection, fields } from "@keystatic/core"
import { block } from "@keystatic/core/content-components"

const tweetBlock = block({
  label: "X / Twitter Post",
  description: "Paste the URL of any X or Twitter post",
  schema: {
    url: fields.text({
      label: "Post URL",
      description: "e.g. https://x.com/username/status/123456789",
    }),
  },
})

const youtubeBlock = block({
  label: "YouTube Video",
  description: "Paste any YouTube video URL",
  schema: {
    url: fields.text({
      label: "Video URL",
      description: "e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...",
    }),
  },
})

const linkedinBlock = block({
  label: "LinkedIn Post",
  description: "Paste the share URL of any LinkedIn post",
  schema: {
    url: fields.text({
      label: "Post URL",
      description: "e.g. https://www.linkedin.com/posts/...",
    }),
  },
})

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
        content: fields.mdx({
          label: "Content",
          components: {
            Tweet: tweetBlock,
            YouTube: youtubeBlock,
            LinkedIn: linkedinBlock,
          },
        }),
      },
    }),
  },
})
