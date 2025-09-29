'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Instagram, Github, Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 px-4 border-t border-dark-border/50 overflow-hidden" ref={ref}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-secondary/20 to-dark-card/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-green p-[2px] shadow-lg shadow-neon-blue/30">
                  <div className="w-full h-full rounded-xl bg-dark-bg flex items-center justify-center">
                    <span className="text-white font-bold text-xl bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">Z</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold font-poppins bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    Zaddy
                  </h3>
                  <span className="text-xs text-gray-400 font-medium tracking-wider">
                    FUTURISTIC AGENCY
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">
                Building futuristic digital solutions that automate the future. We transform crazy problems into elegant solutions with cutting-edge technology.
              </p>
              
              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark-secondary/40 border border-dark-border/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/50 transition-all duration-300 backdrop-blur-sm"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl font-semibold text-white shadow-lg shadow-neon-blue/30 border border-neon-blue/30 backdrop-blur-sm overflow-hidden group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Subscribe
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
            
            {/* Enhanced Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { name: 'LinkedIn', icon: Linkedin, color: 'neon-blue', href: 'https://www.linkedin.com/company/zaddyy/' },
                { name: 'Instagram', icon: Instagram, color: 'neon-purple', href: 'https://www.instagram.com/zaddy.tech?igsh=MTBldDJvemI2OWxqMA%3D%3D&utm_source=qr' },
                { name: 'GitHub', icon: Github, color: 'neon-green', href: 'https://github.com/zxiddd' }
              ].map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative w-12 h-12 rounded-xl bg-gradient-to-br from-${social.color}/20 to-${social.color}/5
                      border border-${social.color}/30 flex items-center justify-center
                      hover:border-${social.color}/60 transition-all duration-300
                      hover:bg-${social.color}/10 hover:shadow-lg hover:shadow-${social.color}/20
                      backdrop-blur-sm overflow-hidden
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Hover Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${social.color}/30 to-${social.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <IconComponent className={`w-5 h-5 text-${social.color} group-hover:text-white transition-colors duration-300 relative z-10`} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* Enhanced Services Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                <span className="text-neon-green text-sm">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Services</h4>
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', desc: 'Modern web applications' },
                { name: 'App Development', desc: 'Mobile & desktop apps' },
                { name: 'AI Automation', desc: 'Intelligent workflows' },
                { name: 'ML Solutions', desc: 'Machine learning models' }
              ].map((service) => (
                <li key={service.name}>
                  <motion.a
                    href="#"
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-dark-secondary/30 border border-transparent hover:border-neon-green/30 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <div className="text-gray-200 group-hover:text-white font-medium transition-colors duration-300">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {service.desc}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-neon-green opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                <Mail className="w-4 h-4 text-neon-purple" />
              </div>
              <h4 className="text-xl font-semibold text-white">Contact</h4>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'hello@zaddy.agency', color: 'neon-purple', href: 'mailto:hello@zaddy.agency' },
                { icon: Phone, text: '+91 98765 43210', color: 'neon-green', href: 'tel:+919876543210' },
                { icon: MapPin, text: 'Hyderabad, India', color: 'neon-blue', href: '#' }
              ].map((contact) => {
                const IconComponent = contact.icon
                return (
                  <li key={contact.text}>
                    <motion.a
                      href={contact.href}
                      className={`group flex items-center gap-4 p-3 rounded-xl hover:bg-dark-secondary/30 border border-transparent hover:border-${contact.color}/30 transition-all duration-300`}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${contact.color}/20 to-${contact.color}/10 border border-${contact.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-4 h-4 text-${contact.color}`} />
                      </div>
                      <span className={`text-gray-300 group-hover:text-${contact.color} transition-colors duration-300 font-medium`}>
                        {contact.text}
                      </span>
                    </motion.a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-dark-border/50 bg-gradient-to-r from-dark-secondary/20 to-dark-secondary/10 rounded-2xl p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>© {currentYear} Zaddy Agency. All rights reserved.</span>
              <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-neon-blue font-medium">Building the Future</span>
            </div>
            
            <div className="flex space-x-8 text-sm">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookies Policy', href: '#' }
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-neon-blue transition-all duration-300 relative group font-medium"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green group-hover:w-full transition-all duration-300 rounded-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-float opacity-20"
              style={{
                background: `linear-gradient(45deg, ${
                  i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#8B5CF6' : '#00FF88'
                }, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Glow Effects */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-60" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
    </footer>
  )
}