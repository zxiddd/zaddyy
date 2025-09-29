'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message with form data
    const message = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `*Sent from:* Zaddy Agency Website`
    
    // WhatsApp number (including country code)
    const phoneNumber = '919665184616'
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank')
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/30 to-dark-bg" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#8B5CF6' : '#00FF88'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
              Crazy
            </span>{' '}
            Together 🚀
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="glass p-8 rounded-2xl border border-neon-blue/30 relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green p-[1px] rounded-2xl">
                <div className="w-full h-full bg-dark-bg/60 backdrop-blur-lg rounded-2xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`
                        w-full px-4 py-3 bg-dark-card/50 border rounded-lg
                        text-white placeholder-gray-400 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-neon-blue/50
                        ${focusedField === 'name' ? 'border-neon-blue neon-glow-blue' : 'border-dark-border'}
                      `}
                      placeholder="Your Name"
                      required
                    />
                    <div className={`
                      absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300
                      ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}
                      bg-gradient-to-r from-neon-blue/10 to-neon-purple/10
                    `} />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`
                        w-full px-4 py-3 bg-dark-card/50 border rounded-lg
                        text-white placeholder-gray-400 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-neon-purple/50
                        ${focusedField === 'email' ? 'border-neon-purple neon-glow-purple' : 'border-dark-border'}
                      `}
                      placeholder="your@email.com"
                      required
                    />
                    <div className={`
                      absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300
                      ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}
                      bg-gradient-to-r from-neon-purple/10 to-neon-green/10
                    `} />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`
                        w-full px-4 py-3 bg-dark-card/50 border rounded-lg
                        text-white placeholder-gray-400 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-neon-green/50 resize-none
                        ${focusedField === 'message' ? 'border-neon-green neon-glow-green' : 'border-dark-border'}
                      `}
                      placeholder="Tell us about your project..."
                      required
                    />
                    <div className={`
                      absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300
                      ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}
                      bg-gradient-to-r from-neon-green/10 to-neon-blue/10
                    `} />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="
                      group relative w-full px-6 py-4 
                      bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg 
                      font-semibold text-lg transition-all duration-300 
                      hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20
                      flex items-center justify-center space-x-2
                    "
                  >
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-green rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', info: 'hello@zaddy.agency', color: 'neon-blue' },
                { icon: Phone, title: 'Call Us', info: '+91 98765 43210', color: 'neon-purple' },
                { icon: MapPin, title: 'Visit Us', info: 'Hyderabad, India', color: 'neon-green' }
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.div
                    key={contact.title}
                    className="group flex items-center space-x-4 p-4 rounded-xl glass border border-dark-border hover:border-neon-blue/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`
                      w-12 h-12 rounded-lg bg-gradient-to-br from-${contact.color}/20 to-${contact.color}/5
                      border border-${contact.color}/30 flex items-center justify-center
                      group-hover:scale-110 group-hover:border-${contact.color}/60 transition-all duration-300
                    `}>
                      <Icon className={`w-6 h-6 text-${contact.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-white transition-colors">
                        {contact.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {contact.info}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="glass p-6 rounded-xl border border-neon-purple/30"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', color: 'neon-blue' },
                  { name: 'Instagram', color: 'neon-purple' },
                  { name: 'GitHub', color: 'neon-green' }
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`
                      w-12 h-12 rounded-lg bg-gradient-to-br from-${social.color}/20 to-${social.color}/5
                      border border-${social.color}/30 flex items-center justify-center
                      hover:scale-110 hover:border-${social.color}/60 transition-all duration-300
                      hover:bg-${social.color}/10
                    `}
                  >
                    <span className={`text-${social.color} font-bold text-sm`}>
                      {social.name.slice(0, 2)}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div
              className="glass p-6 rounded-xl border border-neon-green/30 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-white mb-2">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                We typically respond within 2-4 hours during business days
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}