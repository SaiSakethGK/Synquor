import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Research | 0rbiΔccel",
  description: "AI-powered grant research and analysis tools",
};

export default function GrantResearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 