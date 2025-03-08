"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function GrantResearch() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing during SSR to prevent hydration issues
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="text-center fade-in mb-16">
          <h1 className="text-5xl mb-6 orbit-heading">
          AI-Powered Solutions
        </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
          I believe in the transformative power of AI to solve complex challenges. Inspired by the orbital mechanics that guide celestial bodies through space, OrbiAccel provides solutions that create perfect trajectories for your ideas to reach their full potential. Creating intelligent systems that adapt to your unique needs.
        </p>
        </div>

        {/* Solutions Overview */}
        <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg mb-16 fade-in delay-3">
          <h3 className="text-2xl mb-6 orbit-subheading text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">1. Create Your Profile</h4>
              <p className="text-muted-foreground">Set up your organization's profile with key information about your mission, focus areas, and funding needs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
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
                  className="h-8 w-8 text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" x2="22" y1="12" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">2. Browse with AI Assistance</h4>
              <p className="text-muted-foreground">Use our Chrome Extension to analyze grant opportunities as you browse, with real-time compatibility scoring.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">3. Manage & Apply</h4>
              <p className="text-muted-foreground">Save promising opportunities to your database, track deadlines, and collaborate with your team on applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-8 orbit-heading text-center">Our Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Chrome Extension */}
          <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 orbit-card fade-in delay-1 h-full flex flex-col">
            <div className="mb-6 flex justify-center">
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
                className="h-12 w-12 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" x2="12" y1="8" y2="8"></line>
                <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
              </svg>
            </div>
            <h3 className="text-xl mb-3 orbit-subheading text-center">Grant Analyzer Extension</h3>
            <p className="mb-4 text-muted-foreground">
              This project brings AI-powered grant analysis directly to your browser, helping you make informed decisions while browsing funding opportunities.
            </p>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Real-time eligibility assessment as you browse grant listings</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>AI-powered requirement extraction and compatibility scoring</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>One-click saving of promising opportunities to your dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Decision-making assistance with pros/cons analysis</span>
              </li>
            </ul>
            <div className="mt-auto text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400">
                In Progress
              </span>
            </div>
          </div>

          {/* Database Platform */}
          <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 orbit-card fade-in delay-2 h-full flex flex-col">
            <div className="mb-6 flex justify-center">
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
                className="h-12 w-12 text-primary"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 className="text-xl mb-3 orbit-subheading text-center">Grant DB Managemeer</h3>
            <p className="mb-4 text-muted-foreground">
              This project bridges the gap between discovery and management, creating a seamless workflow from finding grants to tracking applications.
            </p>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Centralized storage of all grants identified via the Chrome Extension</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Advanced analytics dashboard with historical performance metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Automated deadline reminders and application progress tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Collaborative workspace for team-based grant applications</span>
              </li>
            </ul>
            <div className="mt-auto text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                Coming Soon
              </span>
          </div>
        </div>

          {/* Empty Project - Planning */}
          <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 orbit-card fade-in delay-3 h-full flex flex-col">
            <div className="mb-6 flex justify-center">
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
                className="h-12 w-12 text-primary"
                >
                <path d="M2 12h20M16 6l6 6-6 6"></path>
                </svg>
            </div>
            <h3 className="text-xl mb-3 orbit-subheading text-center">Future Project</h3>
            <p className="mb-4 text-muted-foreground text-center">
              New solution in planning phase.
            </p>
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center text-white/40 italic">
                Details coming soon
              </div>
            </div>
            <div className="mt-auto text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                Planning
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 