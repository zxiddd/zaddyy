'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Featured projects from portfolio - showcasing 3 best projects
const recentProjects = [
  {
    id: 1,
    title: "Saudi Consulting Firm – Document Automation Pipeline",
    client: "Saudi Consulting Firm",
    category: "AI & Automation",
    duration: "4 months",
    technologies: ["Python", "Google Drive API", "OpenAI API", "Flask"],
    description: "Designed a document workflow automation system with Google Drive auto-fetch, AI-based amendments & SOW generation, automatic PDF merging, and built-in cross-verification pipeline.",
    results: ["Reduced manual effort on 300+ files", "Saved 80+ staff hours weekly", "Zero delivery errors with cross-verification"],
    image: "/api/placeholder/400/300",
    projectUrl: "https://github.com/zxiddd/doc-automation-pipeline"
  },
  {
    id: 2,
    title: "Zaddy.agency – AI-Powered Agency Platform",
    client: "Zaddy Agency",
    category: "SaaS Products",
    duration: "8 months",
    technologies: ["Next.js", "TypeScript", "Supabase", "AI Integration"],
    description: "Full-stack SaaS platform for digital agency management. Features: client onboarding, project tracking, AI-powered insights, automated reporting, and comprehensive dashboard analytics.",
    results: ["AI-powered client insights", "Automated reporting system", "Streamlined agency operations"],
    image: "/api/placeholder/400/300",
    projectUrl: "https://zaddy.agency"
  },
  {
    id: 3,
    title: "Community Chatroom – VPS Deployment Project",
    client: "Personal Project",
    category: "Web & Freelance",
    duration: "8 days",
    technologies: ["React", "Node.js", "MongoDB", "VPS (Linux)", "GitHub CI/CD"],
    description: "Built a real-time community chatroom from zero React/backend knowledge. Features dynamic Zoom integration, formatting toolbar, auto-clearing chatrooms. Full VPS deployment with GitHub CI/CD, server setup, firewall config, and Nginx reverse proxy.",
    results: ["8 days from zero to deployment", "Full DevOps pipeline setup", "Step-by-step deployment guide created"],
    image: "/api/placeholder/400/300",
    projectUrl: "https://github.com/zxiddd/vps_hosting"
  }
]

export default function ProjectsSection() {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover some of our latest successful projects and case studies. We've helped businesses 
            across various industries achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative glass rounded-3xl p-8 h-full hover:scale-[1.03] transition-all duration-500 border border-dark-border/30 hover:border-neon-blue/50 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-dark-secondary/40 to-dark-bg/60 shadow-2xl hover:shadow-neon-blue/20">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-purple/20 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Project Header */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-blue/10 text-neon-blue rounded-full text-sm font-semibold border border-neon-blue/30 shadow-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      {project.projectUrl && (
                        <motion.a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-br from-neon-blue/20 to-neon-blue/10 hover:from-neon-blue/30 hover:to-neon-blue/20 text-neon-blue rounded-xl transition-all duration-300 border border-neon-blue/30 shadow-lg backdrop-blur-sm"
                          title="View Project"
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                    <motion.span 
                      className="px-3 py-2 bg-gradient-to-r from-dark-secondary/60 to-dark-secondary/40 text-gray-400 rounded-full text-sm font-medium border border-dark-border/40 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.duration}
                    </motion.span>
                  </div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 leading-tight"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-neon-green font-semibold text-lg"
                    whileHover={{ x: 3 }}
                  >
                    {project.client}
                  </motion.p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-2 bg-gradient-to-r from-dark-secondary/60 to-dark-secondary/40 text-gray-300 rounded-xl text-sm border border-dark-border/40 hover:border-neon-blue/40 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
                        whileHover={{ y: -2, scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span 
                        className="px-3 py-2 bg-gradient-to-r from-dark-secondary/60 to-dark-secondary/40 text-gray-400 rounded-xl text-sm border border-dark-border/40 backdrop-blur-sm"
                        whileHover={{ y: -2, scale: 1.05 }}
                      >
                        +{project.technologies.length - 3} more
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Key Results */}
                <div className="relative">
                  <h4 className="text-white font-semibold mb-4 text-base flex items-center">
                    <motion.div 
                      className="w-2 h-2 bg-neon-green rounded-full mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Key Results:
                  </h4>
                  <ul className="space-y-3">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <motion.li 
                        key={resultIndex} 
                        className="flex items-start text-gray-300 text-sm leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + resultIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-neon-green rounded-full mr-3 mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.3 }}
                        />
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/5 via-neon-green/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg font-semibold text-white neon-glow-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}