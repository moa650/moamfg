import { Tweet as ReactTweet } from "react-tweet"

function getTweetId(urlOrId: string): string {
  const match = urlOrId.match(/\/status\/(\d+)/)
  return match ? match[1] : urlOrId
}

export default function Tweet({ id, url }: { id?: string; url?: string }) {
  const tweetId = url ? getTweetId(url) : (id ?? "")
  return <ReactTweet id={tweetId} />
}
