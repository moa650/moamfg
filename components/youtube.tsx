function getYouTubeId(urlOrId: string): string {
  // youtu.be/ID
  const shortMatch = urlOrId.match(/youtu\.be\/([^?&/]+)/)
  if (shortMatch) return shortMatch[1]
  // ?v=ID
  const vMatch = urlOrId.match(/[?&]v=([^?&]+)/)
  if (vMatch) return vMatch[1]
  // /shorts/ID or /embed/ID
  const pathMatch = urlOrId.match(/\/(?:shorts|embed)\/([^?&/]+)/)
  if (pathMatch) return pathMatch[1]
  // bare ID
  return urlOrId
}

export default function YouTube({ id, url }: { id?: string; url?: string }) {
  const videoId = url ? getYouTubeId(url) : (id ?? "")
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", marginTop: "1rem" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        allowFullScreen
        title="YouTube video"
      />
    </div>
  )
}
