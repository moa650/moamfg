import { makeRouteHandler } from "@keystatic/next/route-handler"
import config from "@/keystatic.config"

// Workaround for Keystatic sending localhost as redirect_uri on Vercel
// See: https://github.com/Thinkmill/keystatic/issues/1022
function rewriteUrl(request: Request) {
  const forwardedHost = request.headers.get("x-forwarded-host")
  const forwardedProto = request.headers.get("x-forwarded-proto")

  if (forwardedHost && forwardedProto) {
    const url = new URL(request.url)
    url.hostname = forwardedHost
    url.protocol = forwardedProto
    url.port = ""
    return new Request(url, request)
  }
  return request
}

const handler = makeRouteHandler({
  config,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: process.env.KEYSTATIC_SECRET,
})

export async function GET(request: Request) {
  return handler.GET(rewriteUrl(request))
}

export async function POST(request: Request) {
  return handler.POST(rewriteUrl(request))
}
