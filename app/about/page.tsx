import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | MOA",
  description: "About Mechanical Original Art — who we are and what we do.",
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">About MOA</h1>
      <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Mechanical Original Art (MOA) is an independent project focused on documenting
          and discussing the rapidly evolving world of robotics, embodied AI, and
          mechanical design.
        </p>
        <p>
          We track developments from leading robotics labs and companies — Boston Dynamics,
          Agility Robotics, Figure, NVIDIA, and others — and share news, analysis,
          and commentary for enthusiasts, engineers, and curious minds.
        </p>
        <p>
          The name reflects a belief that machines in motion are a form of art — that
          there is something genuinely beautiful in watching a legged robot navigate
          rough terrain or a manipulator learn a new skill.
        </p>
      </div>
    </div>
  )
}
