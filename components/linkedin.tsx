function getLinkedInUrn(urlOrUrn: string): string {
  // Already a URN
  if (urlOrUrn.startsWith("urn:")) return urlOrUrn
  // Share URL: ...ugcPost-7424851789503483904-...
  const ugcMatch = urlOrUrn.match(/ugcPost-(\d+)/)
  if (ugcMatch) return `urn:li:ugcPost:${ugcMatch[1]}`
  // Embed URL containing urn:li:...
  const urnMatch = urlOrUrn.match(/(urn:li:[^?&\s]+)/)
  if (urnMatch) return urnMatch[1]
  return urlOrUrn
}

export default function LinkedIn({ urn, url }: { urn?: string; url?: string }) {
  const postUrn = url ? getLinkedInUrn(url) : (urn ?? "")
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${postUrn}?collapsed=1`}
        height={596}
        width={504}
        frameBorder={0}
        allowFullScreen
        title="LinkedIn post"
      />
    </div>
  )
}
