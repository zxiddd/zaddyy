'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Text3D, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function FloatingDevice({ position, rotation, color }: { position: [number, number, number], rotation: [number, number, number], color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen */}
      <mesh position={[position[0], position[1], position[2] + 0.06]} rotation={rotation}>
        <boxGeometry args={[1.8, 1, 0.01]} />
        <meshStandardMaterial color="#000" emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      <FloatingDevice position={[-3, 1, 0]} rotation={[0.1, 0.3, 0]} color="#00D4FF" />
      <FloatingDevice position={[3, -1, -1]} rotation={[-0.1, -0.3, 0]} color="#8B5CF6" />
      <FloatingDevice position={[0, 2, -2]} rotation={[0.2, 0, 0.1]} color="#00FF88" />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

const caseStudies = [
  {
    title: 'Restaurant Automation Suite',
    description: 'AI-powered ordering and inventory management system for multiple restaurant chains',
    tech: ['Next.js', 'AI/ML', 'Node.js', 'MongoDB'],
    impact: '40% efficiency increase',
    color: 'neon-blue'
  },
  {
    title: 'IEEE Research Platform',
    description: 'Advanced research collaboration platform with real-time data visualization',
    tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    impact: '500+ researchers',
    color: 'neon-purple'
  },
  {
    title: 'Smart Business Analytics',
    description: 'Machine learning dashboard for predictive business intelligence',
    tech: ['Vue.js', 'TensorFlow', 'FastAPI', 'Redis'],
    impact: '60% better insights',
    color: 'neon-green'
  }
]

export default function ShowcaseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [floatingElements, setFloatingElements] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    // Generate floating elements on client side only to avoid hydration mismatch
    const generatedElements = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setFloatingElements(generatedElements);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-card/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into reality with cutting-edge technology and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Mockups */}
          <motion.div
            className="h-96 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <Scene3D />
            </Canvas>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {floatingElements.map((element, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full animate-float"
                  style={{
                    left: element.left,
                    top: element.top,
                    animationDelay: element.delay,
                    animationDuration: element.duration,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className="group relative"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                <div className={`
                  bg-dark-bg/60 backdrop-blur-lg border border-neon-cyan/10 rounded-2xl p-6 hover:border-neon-cyan/20 transition-all duration-500 hover:shadow-lg hover:shadow-neon-cyan/20 group border-l-4 border-${study.color}
                  hover:scale-105
                  hover:bg-gradient-to-r hover:from-${study.color}/10 hover:to-transparent
                `}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold font-poppins text-white group-hover:text-white transition-colors">
                      {study.title}
                    </h3>
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      bg-${study.color}/20 text-${study.color} border border-${study.color}/30
                    `}>
                      {study.impact}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-card rounded-full text-sm text-gray-300 border border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '25+', label: 'Happy Clients' },
            { number: '99%', label: 'Success Rate' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`
                text-3xl md:text-4xl font-bold font-poppins mb-2
                bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent
              `}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}