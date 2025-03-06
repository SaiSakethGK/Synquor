"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactModal from "@/components/contact-modal";

export default function AboutDeveloper() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing during SSR to prevent hydration issues
  }

  return (
    <div className="py-12 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl tracking-tight mb-4 orbit-heading">The Journey of a Developer</h1>
            <p className="text-xl text-muted-foreground">
              A story of code, creativity, and continuous learning
            </p>
          </div>
          
          <div className="story-container">
            {/* Chapter 1: Origins */}
            <div className="story-chapter fade-in delay-1">
              <h2 className="story-title">Chapter I: Origins</h2>
              <div className="story-content">
                <p>
                  In the digital landscape of Manchester, New Hampshire, a developer named <span className="story-highlight">Sai Saketh Gooty Kase</span> began his journey. 
                  With a passion for solving complex problems and a curiosity that knew no bounds, he embarked on a path that would lead him through the ever-evolving world of software development.
                </p>
                <div className="story-quote">
                  "Every line of code tells a story, and every project is a new chapter waiting to be written."
                </div>
                <p>
                  Armed with a strong foundation in computer science and a keen eye for detail, Sai navigated through various technologies and frameworks, 
                  each adding a new dimension to his growing expertise.
                </p>
              </div>
            </div>
            
            {/* Chapter 2: Skills & Expertise */}
            <div className="story-chapter fade-in delay-2">
              <h2 className="story-title">Chapter II: The Arsenal</h2>
              <div className="story-content">
                <p>
                  As his journey progressed, Sai cultivated a diverse set of skills, each becoming a powerful tool in his developer arsenal:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div>
                    <h3 className="text-lg mb-2 orbit-subheading">Languages & Frameworks</h3>
                    <div className="flex flex-wrap">
                      <span className="story-skill">JavaScript</span>
                      <span className="story-skill">TypeScript</span>
                      <span className="story-skill">React</span>
                      <span className="story-skill">Next.js</span>
                      <span className="story-skill">Node.js</span>
                      <span className="story-skill">Python</span>
                      <span className="story-skill">Java</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 orbit-subheading">Tools & Technologies</h3>
                    <div className="flex flex-wrap">
                      <span className="story-skill">AWS</span>
                      <span className="story-skill">Docker</span>
                      <span className="story-skill">Git</span>
                      <span className="story-skill">CI/CD</span>
                      <span className="story-skill">Supabase</span>
                      <span className="story-skill">PostgreSQL</span>
                      <span className="story-skill">MongoDB</span>
                    </div>
                  </div>
                </div>
                <p>
                  With these tools at his disposal, Sai crafted solutions that bridged the gap between complex problems and elegant implementations.
                  His approach was always methodical yet creative, finding the perfect balance between functionality and user experience.
                </p>
              </div>
            </div>
            
            {/* Chapter 3: Projects & Achievements */}
            <div className="story-chapter fade-in delay-3">
              <h2 className="story-title">Chapter III: The Creations</h2>
              <div className="story-content">
                <p>
                  Throughout his journey, Sai brought numerous ideas to life, each project a testament to his growth and innovation:
                </p>
                <ul className="space-y-4 my-6">
                  <li>
                    <h3 className="text-lg orbit-subheading"><span className="orbit-font brand-glow text-lg">0rbiΔccel</span></h3>
                    <p>An AI-powered platform transforming static workflows into dynamic orbits, revolutionizing how organizations approach grant research and funding opportunities.</p>
                  </li>
                  <li>
                    <h3 className="text-lg orbit-subheading">Data Visualization Dashboard</h3>
                    <p>A comprehensive analytics platform that transformed complex datasets into intuitive visualizations, enabling data-driven decision making for businesses.</p>
                  </li>
                  <li>
                    <h3 className="text-lg orbit-subheading">E-Commerce Solution</h3>
                    <p>A scalable online marketplace built with Next.js and Supabase, featuring real-time inventory management and personalized shopping experiences.</p>
                  </li>
                </ul>
                <p>
                  Each project was not just a technical achievement but a story of collaboration, problem-solving, and continuous improvement.
                </p>
              </div>
            </div>
            
            {/* Chapter 4: Philosophy & Approach */}
            <div className="story-chapter fade-in delay-4">
              <h2 className="story-title">Chapter IV: The Philosophy</h2>
              <div className="story-content">
                <p>
                  At the heart of Sai's approach to development lies a set of core principles that guide every project:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-lg mb-2 orbit-subheading">User-Centric Design</h3>
                    <p>Creating solutions that prioritize the end-user experience, making technology accessible and intuitive.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-lg mb-2 orbit-subheading">Continuous Learning</h3>
                    <p>Embracing new technologies and methodologies, always staying at the forefront of industry developments.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-lg mb-2 orbit-subheading">Collaborative Growth</h3>
                    <p>Believing in the power of teamwork and knowledge sharing to create solutions greater than the sum of their parts.</p>
                  </div>
                </div>
                <div className="story-quote">
                  "The best code is not just functional but sustainable, readable, and adaptable to future needs."
                </div>
              </div>
            </div>
            
            {/* Chapter 5: The Future */}
            <div className="story-chapter fade-in delay-4">
              <h2 className="story-title">Chapter V: The Horizon</h2>
              <div className="story-content">
                <p>
                  As Sai continues his journey, he looks toward new horizons and challenges. The next chapters will explore emerging technologies like AI, 
                  machine learning, and blockchain, always with the goal of creating meaningful solutions that make a difference.
                </p>
                <p className="mt-4">
                  The story is far from complete, with many exciting chapters yet to be written. If you're looking to collaborate on the next chapter, 
                  Sai is always open to new opportunities and connections.
                </p>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                  <Button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="orbit-button w-full md:w-auto"
                  >
                    Start a Conversation
                  </Button>
                  <Link href="https://linkedin.com/in/saisaketh" target="_blank">
                    <Button variant="outline" className="w-full md:w-auto">
                      Connect on LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:saisaketh.gootykase@gmail.com">
                    <Button variant="outline" className="w-full md:w-auto">
                      Send an Email
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/">
              <Button variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
} 