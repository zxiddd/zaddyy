'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '/#services', type: 'scroll' },
    { name: 'Portfolio', href: '/portfolio', type: 'link' },
    { name: 'Career', href: '/career', type: 'link' },
    { name: 'About', href: '/#about', type: 'scroll' },
    { name: 'Contact', href: '/#contact', type: 'scroll' }
  ]

  const scrollToSection = (href: string) => {
    // Remove the leading slash and keep only the hash part
    const sectionId = href.startsWith('/#') ? href.substring(1) : href
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (item: { name: string; href: string; type: string }) => {
    if (item.type === 'scroll') {
      scrollToSection(item.href)
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-blue to-neon-green p-[2px]">
                <div className="w-full h-full rounded-lg bg-dark-bg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Zaddy
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                item.type === 'link' ? (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer relative group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green transition-all duration-300 group-hover:w-full"></span>
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green transition-all duration-300 group-hover:w-full"></span>
                  </motion.button>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-md border-b border-gray-800/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  item.type === 'link' ? (
                    <Link key={item.name} href={item.href}>
                      <motion.span
                        className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2 cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href)
                        setIsMobileMenuOpen(false)
                      }}
                      className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  )
                ))}
                <motion.button
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg font-semibold text-white"
                  onClick={() => {
                    scrollToSection('#contact')
                    setIsMobileMenuOpen(false)
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}