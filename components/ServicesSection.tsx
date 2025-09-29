'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Smartphone, Zap, Brain, Code, Database, Cloud, Shield, Cpu, Monitor, Palette, Search, ArrowUpRight, Star } from 'lucide-react'

// Icon mapping for services
const iconMap = {
  Globe,
  Smartphone,
  Zap,
  Brain,
  Code,
  Database,
  Cloud,
  Shield,
  Cpu,
  Monitor,
  Palette,
  Search
}

// Static services data
const staticServices = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices for optimal performance.',
    icon: 'Globe',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
    color: 'neon-blue',
    popular: true
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
    icon: 'Smartphone',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
    color: 'neon-purple',
    popular: false
  },
  {
    id: '3',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
    icon: 'Brain',
    features: ['Custom AI Models', 'Data Analysis', 'Automation', 'Predictive Analytics'],
    color: 'neon-green',
    popular: true
  },
  {
    id: '4',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for enterprise-grade applications.',
    icon: 'Cloud',
    features: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Auto-scaling'],
    color: 'neon-cyan',
    popular: false
  },
  {
    id: '5',
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for high-performance data management.',
    icon: 'Database',
    features: ['SQL/NoSQL', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
    color: 'neon-purple',
    popular: false
  },
  {
    id: '6',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: 'Shield',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment'],
    color: 'neon-green',
    popular: true
  }
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/20 to-dark-bg" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-full backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-neon-blue">Premium Services</span>
            <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We deliver cutting-edge solutions that transform businesses and automate the future with innovative technology
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-green" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-blue" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-purple" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Globe;
            
            return (
              <motion.div
                key={service.id}
                className={`group relative bg-gradient-to-br from-dark-secondary/50 to-dark-card/30 backdrop-blur-lg border border-${service.color}/20 rounded-3xl p-8 hover:border-${service.color}/40 transition-all duration-500 hover:shadow-2xl hover:shadow-${service.color}/20 hover:scale-105 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-neon-green/20 to-neon-green/10 border border-neon-green/30 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-medium text-neon-green flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 via-transparent to-${service.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                
                {/* Glow Effects */}
                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${service.color}/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Enhanced Icon and Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 border border-${service.color}/30 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:border-${service.color}/60 transition-all duration-300 shadow-lg shadow-${service.color}/20`}>
                        <IconComponent className={`w-8 h-8 text-${service.color} group-hover:text-white transition-colors duration-300`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold text-white group-hover:text-${service.color} transition-colors duration-300 mb-1`}>
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full bg-${service.color} opacity-60`} />
                          <span className="text-xs text-gray-400 font-medium">Professional Service</span>
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 text-gray-400 group-hover:text-${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`} />
                  </div>
                  
                  {/* Enhanced Description */}
                  <div className="mb-8">
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Enhanced Features List */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-4 h-4 rounded-lg bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 border border-${service.color}/30 flex items-center justify-center`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-300">Key Features</span>
                    </div>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-${service.color} to-${service.color}/60 mr-3 group-hover:scale-110 transition-transform duration-300`} />
                        <span className="group-hover:font-medium transition-all duration-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-700/30"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <button className={`w-full py-3 px-4 bg-gradient-to-r from-${service.color}/10 to-${service.color}/5 border border-${service.color}/20 rounded-xl text-${service.color} font-medium hover:border-${service.color}/40 hover:bg-${service.color}/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${service.color}/20 flex items-center justify-center gap-2`}>
                      Learn More
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute bottom-4 left-4 w-3 h-3 rounded-full bg-${service.color}/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute top-1/2 right-0 w-px h-16 bg-gradient-to-b from-transparent via-${service.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative p-10 bg-gradient-to-r from-dark-secondary/50 to-dark-card/30 border border-neon-blue/30 rounded-3xl backdrop-blur-sm max-w-4xl mx-auto overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to{' '}
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Transform
                </span>{' '}
                Your Business?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals and automate your success
              </p>
              
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-2xl font-semibold text-lg text-white shadow-lg shadow-neon-blue/30 border border-neon-blue/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Today
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}