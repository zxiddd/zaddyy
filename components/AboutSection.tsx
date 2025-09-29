'use client'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Center, Float, Sphere, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Zap, Target, Users, TrendingUp, Award } from 'lucide-react'
import * as THREE from 'three'

function BrainMesh() {
  const groupRef = useRef<THREE.Group>(null)
  
  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Central Core */}
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#00D4FF"
            metalness={0.8}
            roughness={0.2}
            emissive="#00D4FF"
            emissiveIntensity={0.2}
          />
        </Sphere>
        
        {/* Neural Network Nodes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 2.5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          
          return (
            <Float key={i} speed={2 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.5}>
              <Sphere args={[0.2, 16, 16]} position={[x, 0, z]}>
                <meshStandardMaterial
                  color="#8B5CF6"
                  metalness={0.9}
                  roughness={0.1}
                  emissive="#8B5CF6"
                  emissiveIntensity={0.3}
                />
              </Sphere>
            </Float>
          )
        })}
        
        {/* Connecting Rings */}
        <Float speed={0.5} rotationIntensity={1} floatIntensity={0.2}>
          <Torus args={[2, 0.1, 8, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="#8B5CF6"
              metalness={0.9}
              roughness={0.1}
              emissive="#8B5CF6"
              emissiveIntensity={0.1}
            />
          </Torus>
        </Float>
        
        <Float speed={0.8} rotationIntensity={1} floatIntensity={0.3}>
          <Torus args={[2.2, 0.08, 8, 32]} rotation={[0, Math.PI / 2, 0]}>
            <meshStandardMaterial
              color="#00FF88"
              metalness={0.9}
              roughness={0.1}
              emissive="#00FF88"
              emissiveIntensity={0.1}
            />
          </Torus>
        </Float>
      </Float>
    </group>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[0, 10, -10]} intensity={0.3} color="#00FF88" />
      
      <BrainMesh />
    </>
  )
}

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/30 to-dark-bg" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Enhanced Header */}
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-sm font-medium text-neon-blue">About Our Agency</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Zaddy
                </span>
              </h2>
            </div>
            
            {/* Enhanced Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative p-6 bg-gradient-to-r from-dark-secondary/40 to-dark-card/40 border border-neon-blue/20 rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-2xl" />
                <p className="text-xl text-gray-200 leading-relaxed relative z-10">
                  We're a team of innovators building futuristic digital solutions. Crazy problems need crazy builders 💀
                </p>
              </div>
            </motion.div>

            {/* Enhanced Values Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: '🚀', title: 'Innovation First', desc: 'Pushing boundaries with cutting-edge tech', color: 'neon-blue' },
                { icon: '⚡', title: 'Lightning Fast', desc: 'Rapid development without compromising quality', color: 'neon-green' },
                { icon: '🎯', title: 'Results Driven', desc: 'Focused on measurable business impact', color: 'neon-purple' },
                { icon: '🔮', title: 'Future Ready', desc: 'Building solutions for tomorrow\'s challenges', color: 'neon-cyan' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className={`group relative p-6 bg-gradient-to-br from-dark-secondary/50 to-dark-card/30 border border-${value.color}/20 rounded-2xl backdrop-blur-sm hover:border-${value.color}/40 transition-all duration-500 hover:shadow-xl hover:shadow-${value.color}/20 hover:scale-105 overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/10 to-${value.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon Container */}
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br from-${value.color}/20 to-${value.color}/10 border border-${value.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  
                  <h3 className={`font-semibold text-white mb-2 group-hover:text-${value.color} transition-colors duration-300 text-lg`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {value.desc}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${value.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button 
                className="group relative px-10 py-5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg shadow-neon-blue/30 border border-neon-blue/30 backdrop-blur-sm overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Let's Work Together
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Right 3D Scene */}
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* 3D Canvas Container */}
            <div className="relative h-full bg-gradient-to-br from-dark-secondary/40 to-dark-card/20 border border-neon-blue/20 rounded-3xl backdrop-blur-sm overflow-hidden">
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <Scene3D />
              </Canvas>
              
              {/* Enhanced Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-float opacity-60"
                    style={{
                      width: `${2 + Math.random() * 4}px`,
                      height: `${2 + Math.random() * 4}px`,
                      background: `linear-gradient(45deg, ${
                        i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#8B5CF6' : '#00FF88'
                      }, transparent)`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 6}s`,
                      animationDuration: `${5 + Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>

              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-blue/15 via-neon-purple/10 to-transparent rounded-3xl" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="relative p-10 bg-gradient-to-r from-dark-secondary/50 to-dark-card/30 border border-neon-purple/30 rounded-3xl backdrop-blur-sm max-w-5xl mx-auto overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
            
            <div className="relative z-10">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why Choose{' '}
                  <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                    Zaddy
                  </span>
                  ?
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  We deliver exceptional results with cutting-edge technology and unmatched dedication
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: '3+', label: 'Years Experience', icon: '📅', color: 'neon-blue' },
                  { number: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'neon-purple' },
                  { number: '24/7', label: 'Support Available', icon: '🛠️', color: 'neon-green' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={`group text-center p-6 bg-gradient-to-br from-dark-bg/50 to-dark-secondary/30 border border-${stat.color}/20 rounded-2xl hover:border-${stat.color}/40 transition-all duration-300 hover:scale-105`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/10 border border-${stat.color}/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{stat.icon}</span>
                    </div>
                    <div className={`text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}