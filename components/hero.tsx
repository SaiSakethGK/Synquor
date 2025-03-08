"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [activeContainer, setActiveContainer] = useState("ai-solutions");
  const [isMounted, setIsMounted] = useState(false);
  
  // Refs for each section
  const heroSectionRef = useRef(null);
  const mainSolutionRef = useRef(null);
  const whyChooseRef = useRef(null);
  
  // Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [mainSolutionVisible, setMainSolutionVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);

  useEffect(() => {
    // Set initial visibility for the hero section
    setHeroVisible(true);
    setIsMounted(true);
    
    // Create intersection observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2 // 20% of the element must be visible
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Determine which section was observed and update its state
        if (entry.target === mainSolutionRef.current) {
          setMainSolutionVisible(entry.isIntersecting);
        } else if (entry.target === whyChooseRef.current) {
          setWhyChooseVisible(entry.isIntersecting);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe sections
    if (mainSolutionRef.current) observer.observe(mainSolutionRef.current);
    if (whyChooseRef.current) observer.observe(whyChooseRef.current);
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Define the main solution
  const mainSolution = {
    id: "ai-solutions",
    title: "Accelerate Your Workflows",
    description: "Turn complex data into clear, actionable insights - work smarter, make faster decisions, and drive business growth.",
    icon: (
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
        className="h-8 w-8"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
    link: "/solutions",
  };

  if (!isMounted) {
    return null; // Return nothing during SSR to prevent hydration issues
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div 
            ref={heroSectionRef}
            className="text-center mb-12 sm:mb-16 fade-in"
          >
            <div className="py-4 sm:py-6 md:py-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 sm:mb-8 orbit-heading">
                Let's make workflows<span className="inline-block w-2 sm:w-4"></span>
                <span className="word-smarter">smarter</span>, <span className="word-faster">faster</span>, and more <span className="word-efficient">efficient</span> with <span className="ai-glow relative inline-block">
                  <span className="gold-star-1 absolute"></span>
                  <span className="gold-star-2 absolute"></span>
                  <span className="white-star absolute"></span>
                  Ai
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6 sm:mt-8">
                OrbiAccel transforms repetitive workflows into smooth, automated cycles - <em>just like a perfectly balanced orbit</em>. It analyzes complex data, finds patterns, and delivers smart recommendations to accelerate decision-making. By reducing manual work, OrbiAccel helps teams focus on bigger goals, work faster, and achieve more with less effort.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Button asChild className="orbit-button rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  <Link href="/solutions">
                    Explore Solutions
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  <Link href="/about-developer">
                    About Developer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Solution Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <div 
            ref={mainSolutionRef}
            className="max-w-5xl mx-auto mb-10 sm:mb-12 fade-in delay-1"
          >
            <div 
              className="orbit-card p-6 sm:p-8 md:p-10 rounded-xl shadow-lg"
              onMouseEnter={() => setActiveContainer(mainSolution.id)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                <div className="bg-primary/10 p-4 sm:p-5 rounded-full">
                  {mainSolution.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl orbit-subheading">{mainSolution.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">{mainSolution.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex flex-col items-center md:items-start p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="font-medium">Pattern Recognition</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Uncover hidden insights in your data</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="font-medium">Workflow Automation</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Eliminate repetitive manual tasks</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="font-medium">Predictive Insights</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Make confident strategic decisions</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center md:justify-start gap-3 bg-primary/5 p-4 rounded-lg">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlnsXlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 48 48" 
                      width="24" 
                      height="24"
                      className="text-white"
                    >
                      <defs>
                        <linearGradient id="chrome-a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#d93025"/>
                          <stop offset="1" stopColor="#ea4335"/>
                        </linearGradient>
                        <linearGradient id="chrome-b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#fcc934"/>
                          <stop offset="1" stopColor="#fbbc04"/>
                        </linearGradient>
                        <linearGradient id="chrome-c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#1e8e3e"/>
                          <stop offset="1" stopColor="#34a853"/>
                        </linearGradient>
                      </defs>
                      <circle cx="24" cy="23.9947" r="12" fill="#fff"/>
                      <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" fill="none"/>
                      <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="url(#chrome-a)"/>
                      <circle cx="24" cy="24" r="9.5" fill="#1a73e8"/>
                      <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="url(#chrome-b)"/>
                      <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="url(#chrome-c)"/>
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-white">Orbi's Chrome Extension</span>
                      <p className="text-xs text-muted-foreground">Access AI capabilities directly in your browser as you surf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div 
            ref={whyChooseRef}
            className="max-w-5xl mx-auto mb-12 fade-in delay-2"
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-center orbit-heading">
              Why Choose <span className="orbit-font brand-glow text-lg">0rbiΔccel</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="orbit-card p-8 rounded-xl shadow-lg fade-in delay-3">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-6">
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
                      className="h-8 w-8"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl mb-4 orbit-subheading">Smart Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Instantly transform raw data into actionable intelligence with AI that thinks like an expert
                  </p>
                </div>
              </div>
              <div className="orbit-card p-8 rounded-xl shadow-lg fade-in delay-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-6">
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
                      className="h-8 w-8"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl mb-4 orbit-subheading">Self-Optimizing</h3>
                  <p className="text-sm text-muted-foreground">
                    Workflows that learn and adapt with each cycle, becoming more efficient without manual intervention
                  </p>
                </div>
              </div>
              <div className="orbit-card p-8 rounded-xl shadow-lg fade-in delay-5">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-6">
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
                      className="h-8 w-8"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl mb-4 orbit-subheading">Time Reclaimed</h3>
                  <p className="text-sm text-muted-foreground">
                    Recover hours of productivity by automating routine tasks while maintaining accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
