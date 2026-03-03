export default function LinkedIn({ urn }: { urn: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`}
        height={596}
        width={504}
        frameBorder={0}
        allowFullScreen
        title="LinkedIn post"
      />
    </div>
  )
}
