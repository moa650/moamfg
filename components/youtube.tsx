export default function YouTube({ id }: { id: string }) {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", marginTop: "1rem" }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        allowFullScreen
        title="YouTube video"
      />
    </div>
  )
}
