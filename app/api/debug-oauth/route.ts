import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const error = searchParams.get("error")

  if (error) {
    return NextResponse.json({ githubError: error, description: searchParams.get("error_description") })
  }

  if (!code) {
    return NextResponse.json({ message: "No code received from GitHub" })
  }

  const url = new URL("https://github.com/login/oauth/access_token")
  url.searchParams.set("client_id", process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "")
  url.searchParams.set("client_secret", process.env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? "")
  url.searchParams.set("code", code)

  const res = await fetch(url, {
    method: "POST",
    headers: { Accept: "application/json" },
  })

  const data = await res.json()
  return NextResponse.json({ status: res.status, githubResponse: data })
}
