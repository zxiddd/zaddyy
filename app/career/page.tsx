'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Users, MapPin, Clock, Search, Filter, Star, ArrowRight, Building, Globe } from 'lucide-react'
import Header from '../../components/Header'

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations']

  const stats = [
    { label: 'Team Members', value: '25+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries', value: '5+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Projects Delivered', value: '100+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-green/5 to-neon-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 mb-6">
              <Briefcase className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-gray-300">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
                Build the Future
              </span>
              <br />
              <span className="text-white">With Zaddy</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our innovative team of creators, builders, and visionaries. We're shaping the future of digital experiences with cutting-edge technology and creative solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-dark-secondary/40 to-dark-card/20 border border-dark-border/40 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-secondary/40 border border-dark-border/40 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/50 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="pl-12 pr-8 py-4 bg-dark-secondary/40 border border-dark-border/40 rounded-2xl text-white focus:outline-none focus:border-neon-blue/50 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="bg-dark-secondary text-white">
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* No Openings Message */}
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 flex items-center justify-center mx-auto mb-8">
                <Building className="w-12 h-12 text-neon-blue" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                No Current Openings
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We don't have any open positions at the moment, but we're always looking for exceptional talent. 
                Feel free to reach out if you think you'd be a great fit for our team!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-2xl font-semibold text-white shadow-lg shadow-neon-blue/30 border border-neon-blue/30 backdrop-blur-sm overflow-hidden group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 bg-dark-secondary/40 border border-dark-border/40 rounded-2xl font-semibold text-white hover:border-neon-purple/50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Newsletter
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Company Culture Section */}
          <motion.div
            className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-dark-secondary/40 to-dark-card/20 border border-dark-border/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Work With Us?</h3>
              <p className="text-gray-300">We believe in creating an environment where innovation thrives</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Innovation First',
                  description: 'Work with cutting-edge technologies and push the boundaries of what\'s possible',
                  icon: <Star className="w-6 h-6" />
                },
                {
                  title: 'Global Impact',
                  description: 'Your work will reach clients and users across multiple countries and industries',
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: 'Growth Focused',
                  description: 'Continuous learning opportunities and career advancement in a fast-growing company',
                  icon: <ArrowRight className="w-6 h-6" />
                }
              ].map((benefit, index) => (
                <div key={benefit.title} className="text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green/20 to-neon-blue/20 border border-neon-green/30 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}