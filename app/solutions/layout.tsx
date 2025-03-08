import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | 0rbiΔccel",
  description: "AI-powered grant analysis and decision-making tools",
};

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 