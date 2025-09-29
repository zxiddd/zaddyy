'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ArrowUpRight, Users, Award, TrendingUp, CheckCircle } from 'lucide-react'

// Static clients data with enhanced information
const staticClients = [
  {
    id: '1',
    name: 'TechCorp',
    logo: '/api/placeholder/120/60',
    description: 'Leading technology solutions provider',
    website: 'https://techcorp.com',
    industry: 'Technology',
    color: 'neon-blue'
  },
  {
    id: '2',
    name: 'InnovateLab',
    logo: '/api/placeholder/120/60',
    description: 'Innovation and research company',
    website: 'https://innovatelab.com',
    industry: 'Research',
    color: 'neon-purple'
  },
  {
    id: '3',
    name: 'FutureWorks',
    logo: '/api/placeholder/120/60',
    description: 'Future-focused digital agency',
    website: 'https://futureworks.com',
    industry: 'Digital',
    color: 'neon-green'
  },
  {
    id: '4',
    name: 'DataFlow',
    logo: '/api/placeholder/120/60',
    description: 'Data analytics and insights platform',
    website: 'https://dataflow.com',
    industry: 'Analytics',
    color: 'neon-cyan'
  },
  {
    id: '5',
    name: 'CloudSync',
    logo: '/api/placeholder/120/60',
    description: 'Cloud infrastructure solutions',
    website: 'https://cloudsync.com',
    industry: 'Cloud',
    color: 'neon-blue'
  },
  {
    id: '6',
    name: 'AI Dynamics',
    logo: '/api/placeholder/120/60',
    description: 'Artificial intelligence solutions',
    website: 'https://aidynamics.com',
    industry: 'AI/ML',
    color: 'neon-purple'
  }
]

export default function ClientsSection() {
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
        <div className="absolute top-32 left-20 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-neon-blue/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-purple/10 to-neon-green/10 border border-neon-purple/30 rounded-full backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Award className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-medium text-neon-purple">Trusted Partners</span>
            <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-green to-neon-cyan bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We've partnered with amazing brands to deliver exceptional digital experiences and drive measurable results
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-green" />
                <span>50+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-neon-blue" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-neon-purple" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {staticClients.map((client, index) => (
            <motion.div
              key={client.id}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`
                relative p-6 rounded-3xl bg-gradient-to-br from-dark-secondary/50 to-dark-card/30 
                backdrop-blur-lg border border-${client.color}/20 
                transition-all duration-500 ease-out cursor-pointer overflow-hidden
                hover:border-${client.color}/40 hover:scale-110 hover:shadow-2xl hover:shadow-${client.color}/20
                group-hover:bg-gradient-to-br group-hover:from-${client.color}/10 group-hover:to-${client.color}/5
              `}>
                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 shadow-2xl shadow-${client.color}/30
                `} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                
                {/* Top Glow Line */}
                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${client.color}/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  {/* Enhanced Logo */}
                  <div className={`
                    w-20 h-20 mx-auto mb-4 rounded-2xl
                    bg-gradient-to-br from-${client.color}/20 to-${client.color}/10
                    border border-${client.color}/30 flex items-center justify-center
                    group-hover:from-${client.color}/40 group-hover:to-${client.color}/20
                    group-hover:border-${client.color}/60 group-hover:scale-110
                    transition-all duration-300 overflow-hidden shadow-lg shadow-${client.color}/20
                  `}>
                    <span className={`text-xl font-bold text-${client.color} group-hover:text-white transition-colors duration-300`}>
                      {client.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Enhanced Client Info */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold text-gray-300 group-hover:text-${client.color} transition-colors duration-300`}>
                      {client.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                      <div className={`w-1 h-1 rounded-full bg-${client.color} opacity-60`} />
                      <span className="text-xs text-gray-400 font-medium">{client.industry}</span>
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-gradient-to-r from-${client.color} via-${client.color}/60 to-${client.color}
                  p-[1px]
                `}>
                  <div className="w-full h-full rounded-3xl bg-dark-bg" />
                </div>

                {/* Decorative Elements */}
                <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full bg-${client.color}/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <ArrowUpRight className={`absolute top-3 right-3 w-4 h-4 text-gray-400 group-hover:text-${client.color} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Testimonial Section */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative p-10 bg-gradient-to-br from-dark-secondary/50 to-dark-card/30 backdrop-blur-lg border border-neon-purple/30 rounded-3xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-green/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-green/20 border border-neon-purple/30 flex items-center justify-center shadow-lg shadow-neon-purple/20">
                  <Quote className="w-8 h-8 text-neon-purple" />
                </div>
              </div>
              
              {/* Enhanced Testimonial */}
              <blockquote className="text-2xl md:text-3xl text-gray-300 mb-8 italic leading-relaxed font-light">
                "Zaddy transformed our digital presence with their{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent font-medium">
                  innovative approach
                </span>
                . Their AI automation solutions increased our efficiency by{' '}
                <span className="text-neon-green font-semibold">40%</span>{' '}
                and delivered results beyond our expectations."
              </blockquote>
              
              {/* Enhanced Author Info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center shadow-lg shadow-neon-blue/30">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl text-white mb-1">Restaurant Partner</div>
                  <div className="text-gray-400 mb-2">CEO, Deccan Palm</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-neon-green fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Partnership CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="relative p-8 bg-gradient-to-r from-dark-secondary/50 to-dark-card/30 border border-neon-green/30 rounded-3xl backdrop-blur-sm max-w-3xl mx-auto overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-cyan/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to{' '}
                <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                  Join Our Success Stories
                </span>
                ?
              </h3>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                Let's create something amazing together and add your brand to our growing list of successful partners
              </p>
              
              <motion.button 
                className="group relative px-10 py-4 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue rounded-2xl font-semibold text-lg text-white shadow-lg shadow-neon-green/30 border border-neon-green/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}