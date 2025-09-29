'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      <AnimatedSphere position={[-4, 2, -2]} color="#00D4FF" speed={1.5} />
      <AnimatedSphere position={[4, -2, -1]} color="#8B5CF6" speed={2} />
      <AnimatedSphere position={[0, 0, -3]} color="#00FF88" speed={1} />
      <AnimatedSphere position={[-2, -3, 0]} color="#00D4FF" speed={1.8} />
      <AnimatedSphere position={[3, 3, -2]} color="#8B5CF6" speed={1.2} />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    const generatedParticles = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/20 to-dark-bg/80 z-10" />
      
      {/* Particle Background */}
      <div className="absolute inset-0 z-5">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-30 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 leading-tight bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
            We Build Web, App & AI Solutions That Automate the Future
          </h1>
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Zaddy is a futuristic agency delivering automation, ML, and digital solutions.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button 
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg neon-glow-blue overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Work With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-green rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
          
          <motion.button 
            onClick={() => window.location.href = '/#contact'}
            className="group relative px-8 py-4 bg-transparent border-2 border-neon-green rounded-lg font-semibold text-lg text-neon-green transition-all duration-300 hover:bg-neon-green hover:text-dark-bg hover:scale-105 hover:shadow-lg overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(34, 211, 238, 1)",
              color: "rgba(15, 23, 42, 1)",
              boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}