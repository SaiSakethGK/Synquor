const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "0rbiΔccel",
  description: "Transforming static workflows into dynamic orbits with AI. 0rbiΔccel helps organizations accelerate their workflows with AI-powered solutions.",
  keywords: "AI, automation, decision-making, grants, funding, research, non-profits, organizations",
  openGraph: {
    title: "0rbiΔccel",
    description: "Transforming static workflows into dynamic orbits with AI",
    url: defaultUrl,
    siteName: "0rbiΔccel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0rbiΔccel",
    description: "Transforming static workflows into dynamic orbits with AI",
  },
}; 