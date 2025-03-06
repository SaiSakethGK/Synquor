import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | 0rbiΔccel",
  description: "AI-powered grant research and analysis platform",
};

export default function GrantResearch() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl mb-6 orbit-heading">
          AI-Powered Solutions
        </h1>
        <p className="text-lg mb-8 max-w-3xl">
          Discover relevant funding opportunities and increase your success rate with our
          AI-powered grant research platform. We analyze thousands of grants to find the
          perfect match for your organization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Grant Analysis */}
          <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg hover:shadow-xl transition-all orbit-card">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-primary"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
            </div>
            <h3 className="text-xl mb-2 orbit-subheading">Grant Analysis</h3>
            <p className="mb-4">
              Our AI analyzes grant requirements and matches them with your organization's profile
              to find the most relevant opportunities.
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-white/10 text-white">
                Available
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
} 