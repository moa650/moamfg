import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    hasClientId: !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    hasClientSecret: !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    hasSecret: !!process.env.KEYSTATIC_SECRET,
    clientIdPrefix: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.slice(0, 6),
    clientIdLength: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.length,
    clientSecretLength: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET?.length,
    clientSecretSuffix: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET?.slice(-4),
    secretLength: process.env.KEYSTATIC_SECRET?.length,
  })
}
