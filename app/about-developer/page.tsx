"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactModal from "@/components/contact-modal";

export default function AboutDeveloper() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing during SSR to prevent hydration issues
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl tracking-tight mb-6 orbit-heading">
              Hi, I'm <span className="orbit-font brand-glow text-lg">Sai Saketh Gooty Kase</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI Engineer & Full-Stack Developer transforming ideas into impactful solutions
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-12 flex justify-center fade-in delay-1">
            <div className="flex flex-wrap space-x-2 bg-white/5 p-2 rounded-lg shadow-lg">
              <button 
                onClick={() => setActiveTab("story")}
                className={`px-5 py-3 rounded-md transition-all ${activeTab === "story" ? "bg-white/10 text-white shadow-md" : "text-white/70 hover:text-white/90 hover:bg-white/5"}`}
              >
                My Story
              </button>
              <button 
                onClick={() => setActiveTab("skills")}
                className={`px-5 py-3 rounded-md transition-all ${activeTab === "skills" ? "bg-white/10 text-white shadow-md" : "text-white/70 hover:text-white/90 hover:bg-white/5"}`}
              >
                Skills & Expertise
              </button>
              <button 
                onClick={() => setActiveTab("projects")}
                className={`px-5 py-3 rounded-md transition-all ${activeTab === "projects" ? "bg-white/10 text-white shadow-md" : "text-white/70 hover:text-white/90 hover:bg-white/5"}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab("approach")}
                className={`px-5 py-3 rounded-md transition-all ${activeTab === "approach" ? "bg-white/10 text-white shadow-md" : "text-white/70 hover:text-white/90 hover:bg-white/5"}`}
              >
                My Approach
              </button>
            </div>
          </div>

          {/* Content Sections */}
          <div className="fade-in delay-2">
            {activeTab === "story" && (
              <div className="bg-white/5 p-8 md:p-10 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl mb-6 orbit-heading">My Journey</h2>
                
                <p className="mb-4">
                  My journey in technology began in Manchester, New Hampshire, where I discovered my passion for solving complex problems through code. What started as curiosity quickly evolved into a career-defining pursuit.
                </p>
                
                <div className="story-quote text-sm my-6 p-4 bg-white/5 rounded-lg border-l-4 border-primary">
                  "Staying in orbit requires continuous acceleration - just like staying ahead in technology means never stopping learning. I embrace the momentum and evolve with every new challenge."
                </div>
                
                <p className="mb-4">
                  Throughout my career, I've consistently pushed boundaries by embracing new technologies and methodologies. I thrive in environments where innovation is valued, and I can contribute my unique perspective to challenging projects.
                </p>
                
                <p className="mb-4">
                  My experience spans from developing enterprise-level applications to creating innovative AI solutions. I've worked with diverse teams across various industries, giving me a unique perspective on how technology can transform businesses.
                </p>
                
                <p>
                  Today, I'm focused on leveraging AI to create intelligent systems that automate workflows and deliver actionable insights. My current project, <span className="orbit-font brand-glow text-lg">0rbiΔccel</span>, represents the culmination of my expertise in AI, databases, web development, and user experience design.
                </p>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="bg-white/5 p-8 md:p-10 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl mb-6 orbit-heading">My Technical Arsenal</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg mb-4 orbit-subheading">AI & Machine Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="story-skill">TensorFlow</span>
                      <span className="story-skill">PyTorch</span>
                      <span className="story-skill">NLP</span>
                      <span className="story-skill">Computer Vision</span>
                      <span className="story-skill">LLM Integration</span>
                      <span className="story-skill">Data Analysis</span>
                      <span className="story-skill">OpenAI</span>
                      <span className="story-skill">Hugging Face</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg mb-4 orbit-subheading">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="story-skill">React</span>
                      <span className="story-skill">Next.js</span>
                      <span className="story-skill">TypeScript</span>
                      <span className="story-skill">Tailwind CSS</span>
                      <span className="story-skill">UI/UX Design</span>
                      <span className="story-skill">Responsive Design</span>
                      <span className="story-skill">Figma</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg mb-4 orbit-subheading">Backend & Infrastructure</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="story-skill">Node.js</span>
                      <span className="story-skill">Express.js</span>
                      <span className="story-skill">Python</span>
                      <span className="story-skill">Azure</span>
                      <span className="story-skill">CI/CD</span>
                      <span className="story-skill">Postman</span>
                      <span className="story-skill">JIRA</span>
                      <span className="story-skill">Git</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg mb-4 orbit-subheading">Databases & APIs</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="story-skill">PostgreSQL</span>
                      <span className="story-skill">SQL Server</span>
                      <span className="story-skill">Supabase</span>
                      <span className="story-skill">GraphQL</span>
                      <span className="story-skill">REST API Design</span>
                      <span className="story-skill">Data Modeling</span>
                      <span className="story-skill">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="bg-white/5 p-8 md:p-10 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl mb-6 orbit-heading">Projects & Impact</h2>
                
                <div className="space-y-8">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl mb-2 orbit-subheading">
                      <span className="orbit-font brand-glow text-lg">0rbiΔccel</span>
                    </h3>
                    <p className="mb-3">
                      I'm currently working on a project that transforms grant research workflows through AI integration. The system leverages DeepSeek and OpenAI models to automate complex data extraction and analysis processes.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Implementing custom NLP pipelines for entity recognition that identify funding opportunities, eligibility criteria, and submission deadlines, Currently achieving 92% accuracy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Building a vector database system using Supabase and pgvector for semantic search capabilities, enabling similarity matching between organization profiles and grant requirements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Developing a Next.js frontend with server-side rendering and incremental static regeneration for optimal performance and SEO</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Implementing a Chrome extension that integrates with the platform, allowing users to analyze grant opportunities in real-time while browsing</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">DeepSeek API</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">OpenAI API</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Supabase</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">pgvector</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Chrome API</span>
                    </div>
                    <p className="text-sm text-white/70">
                      <strong>Impact:</strong> Projected to reduce manual research time by 78% and improve match accuracy by 65% for organizations seeking grant funding. Currently in active development with beta testing scheduled for Q2 2025.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl mb-2 orbit-subheading">BrainWave - AI-Powered Chrome Extension</h3>
                    <p className="mb-3">
                      I developed a sophisticated Chrome extension that leverages advanced AI models to analyze web content in real-time, extracting key information and providing contextual insights to users.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Built with React 18, TypeScript, and Vite for a performant and type-safe extension architecture with hot module replacement during development</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Implemented Azure OAuth 2.0 authentication with Entra ID, including PKCE flow for enhanced security, JWT validation, and role-based access control</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Integrated custom-trained NER (Named Entity Recognition) models to identify and categorize key entities in web content with 87% precision</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Developed a context-aware question-answering system that allows users to query information about the current webpage</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">React</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Vite</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Azure AD</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">OAuth 2.0</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">LLM Integration</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Chrome Extensions API</span>
                    </div>
                    <p className="text-sm text-white/70">
                      <strong>Impact:</strong> Users reported 42% time savings in extracting insights from web content and 68% improvement in information extraction accuracy.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl mb-2 orbit-subheading">Fine-tuned LLM with RAG Architecture</h3>
                    <p className="mb-3">
                      I fine-tuned and deployed a specialized language model optimized for domain-specific knowledge retrieval and generation, implementing a sophisticated Retrieval-Augmented Generation (RAG) architecture.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Fine-tuned BloomZ-560M using LoRA (Low-Rank Adaptation) to reduce training parameters while maintaining model quality</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Implemented a RAG architecture with vector embeddings (using FAISS) for efficient similarity search across a knowledge base of 1.2M documents</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Developed a custom evaluation framework using ROUGE, BLEU, and human evaluation metrics, achieving a 32% improvement over baseline models</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>Optimized inference latency through model quantization (8-bit precision) and efficient prompt engineering techniques</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">PyTorch</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Hugging Face</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">PEFT/LoRA</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">RAG</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Model Quantization</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs">ROUGE/BLEU</span>
                    </div>
                    <p className="text-sm text-white/70">
                      <strong>Impact:</strong> Reduced response generation time by 67% while improving factual accuracy by 43%.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "approach" && (
              <div className="bg-white/5 p-8 md:p-10 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl mb-6 orbit-heading">My Approach & Values</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/5 p-5 rounded-lg">
                    <h3 className="text-lg mb-3 orbit-subheading">User-Centric Design</h3>
                    <p>
                      I believe technology should serve people, not the other way around. I create solutions that prioritize user experience, making complex systems intuitive and accessible.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-lg">
                    <h3 className="text-lg mb-3 orbit-subheading">Data-Driven Decisions</h3>
                    <p>
                      I leverage analytics and user feedback to continuously improve products. Every feature I build is measured against real-world impact and user satisfaction.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-lg">
                    <h3 className="text-lg mb-3 orbit-subheading">Continuous Innovation</h3>
                    <p>
                      I stay at the forefront of technology trends, constantly learning and experimenting with new tools and methodologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
                
                <div className="story-quote text-sm my-6 p-4 bg-white/5 rounded-lg border-l-4 border-primary">
                  "I design solutions that keep workflows in motion, solving real problems with speed and precision."
                </div>
                
                <p className="mb-6">
                  My approach combines technical expertise with business acumen. I understand that successful technology solutions must align with organizational goals and deliver tangible ROI. This perspective allows me to bridge the gap between technical possibilities and business realities.
                </p>
                
                <p>
                  When you work with me, you're not just getting a developer - you're getting a partner who is invested in your success. I take ownership of projects and approach each challenge with creativity, analytical thinking, and a commitment to excellence.
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-white/5 p-8 md:p-10 rounded-xl shadow-lg text-center fade-in delay-3">
            <h2 className="text-2xl md:text-3xl mb-6 orbit-heading">Let's Create Something Amazing Together</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a complete digital solution or guidance on your technology strategy, I'm here to help.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
} 