import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Developer - 0rbiΔccel",
  description: "Learn about Sai Saketh Gooty Kase, the developer behind 0rbiΔccel's AI-powered solutions.",
};

export default function AboutDeveloperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 