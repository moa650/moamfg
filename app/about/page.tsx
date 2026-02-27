import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | MOA",
  description: "About MOA — a bipedal robotics R&D project.",
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">About MOA</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          MOA is a bipedal robotics R&D project — named after the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Moa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
          >
            Moa
          </a>
          , an extinct flightless bird native to New Zealand.
        </p>
        <p>
          The project tracks developments from leading robotics labs and companies —
          Boston Dynamics, Agility Robotics, Figure, NVIDIA, and others — and shares
          news, analysis, and commentary for engineers and curious minds.
        </p>
      </div>
    </div>
  )
}
