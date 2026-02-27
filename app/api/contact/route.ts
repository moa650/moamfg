import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.migadu.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"MOA Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "mike@moamfg.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <p style="white-space:pre-wrap;">${message}</p>
          <hr/>
          <p style="color:#888;font-size:12px;">Sent from moamfg.com contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
