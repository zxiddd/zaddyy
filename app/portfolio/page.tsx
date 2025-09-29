'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Filter, ExternalLink, Github, Award, Users, Zap, Smartphone, Globe, Trophy } from 'lucide-react'
import Header from '../../components/Header'

// Portfolio data organized by categories
const portfolioData = {
  'SaaS Products': [
    {
      id: 1,
      title: 'Zaddy.agency – AI-Powered Agency Platform',
      description: 'Full-stack SaaS platform for digital agency management. Features: client onboarding, project tracking, AI-powered insights, automated reporting. Built with Next.js + TypeScript + Supabase.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'AI Integration'],
      category: 'SaaS Products',
      icon: <Users className="w-6 h-6" />,
      highlight: 'AI-Powered SaaS',
      color: 'neon-blue',
      projectUrl: 'https://zaddy.agency'
    },
    {
      id: 2,
      title: 'Qubit Wave Technology – ML Platform',
      description: 'Enterprise machine learning platform for Saudi tech companies. Features: model deployment, data pipelines, real-time analytics. Reduced ML iteration cycles by 85%.',
      tags: ['Machine Learning', 'Enterprise', '85% Faster'],
      category: 'SaaS Products',
      icon: <Zap className="w-6 h-6" />,
      highlight: '85% Faster ML Cycles',
      color: 'neon-green',
      projectUrl: 'https://www.qubitwavetech.com'
    },
    {
      id: 3,
      title: 'Gulf Asia Medical Center – Patient Portal',
      description: 'Healthcare SaaS for patient management and appointment scheduling. Features: medical records, telemedicine integration, billing automation. Serves 10,000+ patients.',
      tags: ['Healthcare', 'Patient Management', '10K+ Users'],
      category: 'SaaS Products',
      icon: <Award className="w-6 h-6" />,
      highlight: '10,000+ Patients',
      color: 'neon-purple',
      projectUrl: 'https://www.gamc.com.sa'
    }
  ],
  'AI & Automation': [
    {
      id: 4,
      title: 'Gulf Asia Medical Center – AI Workflow Automation',
      description: 'LangChain + OpenAI integration for medical workflow automation. Automated patient data processing, appointment scheduling, and report generation. Reduced staff workload by 40%.',
      tags: ['LangChain', 'OpenAI', '40% Efficiency'],
      category: 'AI & Automation',
      icon: <Zap className="w-6 h-6" />,
      highlight: '40% Workload Reduction',
      color: 'neon-blue',
      projectUrl: 'https://www.gamc.com.sa'
    },
    {
      id: 5,
      title: 'Qubit Wave Technology – ML Pipeline Automation',
      description: 'End-to-end ML pipeline automation for Saudi tech company. Reduced model iteration from 2 weeks to 2 days. Stack: Python + TensorFlow + Apache Airflow.',
      tags: ['Python', 'TensorFlow', 'Airflow'],
      category: 'AI & Automation',
      icon: <Zap className="w-6 h-6" />,
      highlight: '2 weeks → 2 days',
      color: 'neon-green',
      projectUrl: 'https://www.qubitwavetech.com'
    },
    {
      id: 6,
      title: 'Saudi Consulting Firm – Document Automation Pipeline',
      description: 'AI-powered document workflow system for consulting operations. Google Drive integration, auto-amendments, SOW generation, PDF merging. Saved 80+ staff hours weekly processing 300+ files.',
      tags: ['Python', 'OpenAI API', 'Google Drive API'],
      category: 'AI & Automation',
      icon: <Award className="w-6 h-6" />,
      highlight: '80+ Hours Saved Weekly',
      color: 'neon-purple',
      projectUrl: 'https://github.com/zxiddd/doc-automation-pipeline'
    },
    {
      id: 7,
      title: 'Saudi Tech Company – Business Analytics Dashboard',
      description: 'Real-time KPI dashboard for executive decision making. Features predictive revenue models and automated reporting. Stack: Next.js + D3.js + Firebase.',
      tags: ['Next.js', 'D3.js', 'Predictive Models'],
      category: 'AI & Automation',
      icon: <Award className="w-6 h-6" />,
      highlight: 'Real-time KPIs',
      color: 'neon-blue',
      projectUrl: 'https://saudi-tech.com.sa'
    }
  ],
  'Internal Mobile Apps': [
    {
      id: 8,
      title: 'Saudi Tech Company – Workforce Manager App',
      description: 'Internal HR & task tracking mobile application. Features: attendance tracking, leave management, push notifications, performance analytics. Tech: Flutter + Firebase.',
      tags: ['Flutter', 'Firebase', 'HR Management'],
      category: 'Internal Mobile Apps',
      icon: <Smartphone className="w-6 h-6" />,
      highlight: 'HR Automation',
      color: 'neon-blue',
      projectUrl: 'https://saudi-tech.com.sa'
    },
    {
      id: 9,
      title: 'Gulf Asia Medical Center – Facility Maintenance App',
      description: 'Staff mobile app for logging facility issues (AC, IT, electrical). Smart routing system reduced issue resolution time by 50%. Tech: React Native + Firebase.',
      tags: ['React Native', 'Smart Routing', '50% Faster'],
      category: 'Internal Mobile Apps',
      icon: <Zap className="w-6 h-6" />,
      highlight: '50% Faster Resolution',
      color: 'neon-green',
      projectUrl: 'https://www.gamc.com.sa'
    },
    {
      id: 10,
      title: 'Zaddy.agency – Internal Project Management App',
      description: 'Internal CMS for managing Zaddy projects, intern coordination, and expense tracking. Built with Flutter + Firebase. Features APK distribution system.',
      tags: ['Flutter', 'CMS', 'Internal Distribution'],
      category: 'Internal Mobile Apps',
      icon: <Users className="w-6 h-6" />,
      highlight: 'Project Management',
      color: 'neon-purple',
      projectUrl: 'https://zaddy.agency'
    }
  ],
  'Web & Freelance': [
    {
      id: 11,
      title: 'Community Chatroom – VPS Deployment Project',
      description: 'Built a real-time community chatroom in just 8 days, starting from zero React/backend knowledge. Features: Dynamic Zoom link integration with admin panel controls, formatting toolbar in chat comments, auto-clearing real-time chatrooms for community discussions. Migrated & deployed the entire project on a VPS server, handling GitHub integration & CI/CD workflows, server setup, firewall config, and Nginx reverse proxy. Created a step-by-step GitHub guide on VPS hosting & website deployment.',
      tags: ['React', 'Node.js', 'MongoDB', 'VPS (Linux)', 'GitHub CI/CD'],
      category: 'Web & Freelance',
      icon: <Globe className="w-6 h-6" />,
      highlight: '8 Days Build + VPS Deploy',
      color: 'neon-blue',
      projectUrl: 'https://github.com/zxiddd/vps_hosting'
    },
    {
      id: 12,
      title: 'Opinod.com – Social Media Platform',
      description: 'Twitter-like social media platform with posts, likes, comments, and user profiles. Built with React + Firebase. Focus on clean UI/UX and real-time interactions.',
      tags: ['React', 'Firebase', 'Social Media'],
      category: 'Web & Freelance',
      icon: <Globe className="w-6 h-6" />,
      highlight: 'Social Platform',
      color: 'neon-green',
      projectUrl: 'https://opinod.com'
    },
    {
      id: 13,
      title: 'Charcoal Station – Restaurant Website',
      description: 'Modern restaurant website with interactive menu, table reservations, and online ordering system. Built with Next.js + Tailwind CSS for optimal performance.',
      tags: ['Next.js', 'Tailwind', 'Restaurant'],
      category: 'Web & Freelance',
      icon: <Award className="w-6 h-6" />,
      highlight: 'Online Ordering',
      color: 'neon-purple',
      projectUrl: 'https://charcoalstation.com'
    },
    {
      id: 14,
      title: 'Deccan Palm Hotel – Luxury Website',
      description: 'Luxury hotel website with integrated booking system, photo gallery, and amenities showcase. Fully responsive design with seamless user experience.',
      tags: ['Booking System', 'Responsive', 'Luxury'],
      category: 'Web & Freelance',
      icon: <Globe className="w-6 h-6" />,
      highlight: 'Booking System',
      color: 'neon-blue',
      projectUrl: 'https://deccanpalm.in'
    },
    {
      id: 15,
      title: 'Shawafel Restaurant Chain – Multi-location Website',
      description: 'Multi-location restaurant website with franchise information, location-specific menus, and contact forms. SEO optimized for local search visibility.',
      tags: ['Multi-location', 'SEO', 'Franchise'],
      category: 'Web & Freelance',
      icon: <Users className="w-6 h-6" />,
      highlight: 'Multi-location',
      color: 'neon-green',
      projectUrl: 'https://shawafel.com'
    },
    {
      id: 16,
      title: 'Reliable Constructions – Corporate Website',
      description: 'Professional corporate website for construction company featuring project portfolio, services showcase, and client contact forms.',
      tags: ['Corporate', 'Portfolio', 'Construction'],
      category: 'Web & Freelance',
      icon: <Award className="w-6 h-6" />,
      highlight: 'Corporate Site',
      color: 'neon-purple',
      projectUrl: 'https://reliableconstructions.in'
    },
    {
      id: 17,
      title: 'Al Rubaki Business – Professional Website',
      description: 'Professional business website with comprehensive services showcase, team member profiles, and client testimonials section.',
      tags: ['Business', 'Professional', 'Testimonials'],
      category: 'Web & Freelance',
      icon: <Globe className="w-6 h-6" />,
      highlight: 'Professional',
      color: 'neon-blue',
      projectUrl: 'https://alrubaki.com'
    }
  ],
  'Community & Achievements': [
    {
      id: 18,
      title: 'Google Developer Group – Design Team Lead (2024–25)',
      description: 'Leading design, events, and branding initiatives for Google Developer Group. Managing team coordination and community engagement programs for tech enthusiasts.',
      tags: ['Leadership', 'Google', 'Community'],
      category: 'Community & Achievements',
      icon: <Trophy className="w-6 h-6" />,
      highlight: 'Google Developer Group',
      color: 'neon-blue',
      projectUrl: 'https://gdg.community.dev'
    },
    {
      id: 19,
      title: 'National Business Plan Competition – 2nd Place Winner (2024)',
      description: 'Achieved 2nd place in national business plan competition with innovative SaaS and AI solution demonstrations. Competed against top universities nationwide.',
      tags: ['National Competition', 'SaaS Demo', 'AI Innovation'],
      category: 'Community & Achievements',
      icon: <Award className="w-6 h-6" />,
      highlight: 'National Recognition',
      color: 'neon-green',
      projectUrl: 'https://businessplan.gov.sa'
    },
    {
      id: 20,
      title: 'Digital Products Portfolio – 20+ Projects Delivered',
      description: 'Successfully built and delivered 20+ digital products across SaaS platforms, AI automation, mobile applications, and web development. Comprehensive full-stack development experience.',
      tags: ['20+ Products', 'Full-stack', 'Multi-domain'],
      category: 'Community & Achievements',
      icon: <Zap className="w-6 h-6" />,
      highlight: '20+ Products Built',
      color: 'neon-purple',
      projectUrl: 'https://github.com/zxiddd'
    }
  ]
}

const categories = ['All', 'SaaS Products', 'AI & Automation', 'Internal Mobile Apps', 'Web & Freelance', 'Community & Achievements']

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'SaaS Products': return <Users className="w-5 h-5" />
    case 'AI & Automation': return <Zap className="w-5 h-5" />
    case 'Internal Mobile Apps': return <Smartphone className="w-5 h-5" />
    case 'Web & Freelance': return <Globe className="w-5 h-5" />
    case 'Community & Achievements': return <Trophy className="w-5 h-5" />
    default: return <Filter className="w-5 h-5" />
  }
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Get all projects or filter by category
  const allProjects = Object.values(portfolioData).flat()
  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : portfolioData[activeCategory as keyof typeof portfolioData] || []

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Header Navigation */}
      <Header />
      
      {/* Portfolio Header */}
      <section className="relative py-16 overflow-hidden border-b border-dark-border/30 mt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-2xl border border-neon-blue/30">
                <Trophy className="w-8 h-8 text-neon-blue" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive showcase of 20+ projects spanning SaaS products, AI automation, 
              mobile applications, web development, and community achievements.
            </p>
            
            {/* Portfolio Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-xl p-4 border border-dark-border/50"
              >
                <div className="text-2xl font-bold text-neon-blue mb-1">20+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-xl p-4 border border-dark-border/50"
              >
                <div className="text-2xl font-bold text-neon-green mb-1">5</div>
                <div className="text-sm text-gray-400">Categories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass rounded-xl p-4 border border-dark-border/50"
              >
                <div className="text-2xl font-bold text-neon-purple mb-1">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass rounded-xl p-4 border border-dark-border/50"
              >
                <div className="text-2xl font-bold text-neon-blue mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore <span className="text-gradient">All Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Filter through different categories to discover projects that showcase expertise 
              in various technologies and industries. Each project represents real-world solutions 
              built for clients and personal development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-neon-blue to-neon-green text-white neon-glow-blue'
                    : 'bg-dark-secondary/50 text-gray-300 hover:bg-dark-secondary hover:text-white border border-dark-border/30 hover:border-neon-blue/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category)}
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <p className="text-gray-400">
              Showing <span className="text-neon-green font-semibold">{filteredProjects.length}</span> projects
              {activeCategory !== 'All' && (
                <span> in <span className="text-neon-blue font-semibold">{activeCategory}</span></span>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative glass rounded-3xl p-8 h-full hover:scale-[1.03] transition-all duration-500 border border-dark-border/30 hover:border-neon-blue/50 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-dark-secondary/40 to-dark-bg/60 shadow-2xl hover:shadow-neon-blue/20">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-purple/20 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                  
                  {/* Project Icon & Highlight */}
                  <div className="relative flex items-center justify-between mb-6">
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-br from-${project.color}/20 to-${project.color}/10 text-${project.color} border border-${project.color}/20 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.icon}
                    </motion.div>
                    <motion.span 
                      className={`px-4 py-2 bg-gradient-to-r from-${project.color}/20 to-${project.color}/10 text-${project.color} rounded-full text-sm font-semibold border border-${project.color}/30 shadow-lg backdrop-blur-sm`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.highlight}
                    </motion.span>
                  </div>

                  {/* Project Title */}
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300 leading-tight"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-base line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-2 bg-gradient-to-r from-dark-secondary/60 to-dark-secondary/40 text-gray-300 rounded-xl text-sm border border-dark-border/40 hover:border-neon-blue/40 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105"
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Category Badge & Link */}
                  <div className="relative flex items-center justify-between pt-4 border-t border-dark-border/30">
                    <span className="px-4 py-2 bg-gradient-to-r from-dark-secondary/50 to-dark-secondary/30 text-gray-400 rounded-full text-sm font-medium border border-dark-border/40 backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.projectUrl && (
                      <motion.a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl bg-gradient-to-br from-${project.color}/20 to-${project.color}/10 text-${project.color} hover:from-${project.color}/30 hover:to-${project.color}/20 transition-all duration-300 border border-${project.color}/30 shadow-lg backdrop-blur-sm`}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  {/* Enhanced Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/5 via-neon-green/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-green/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="text-gradient">Next Project</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's collaborate and bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg font-semibold text-white neon-glow-blue text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/#contact'}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}