export const siteName = "Aristos Collective";

export const siteDescription =
  "Fine art travel photography prints by Aristos Collective. The Riviera, Paris and Majorca, printed on archival paper for your walls.";

// The address Google should list. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom
// domain is connected; until then Vercel's own production address is used.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
