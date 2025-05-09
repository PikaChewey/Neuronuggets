'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const taglines = [
    "Making complex neuroscience accessible",
    "Translating discoveries into understanding",
    "Bridging research and curiosity",
    "Democratizing scientific knowledge"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center px-4 pt-24 pb-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* bg gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-precision-teal/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full bg-analytical-amber/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl font-bold text-space-blue sm:text-5xl lg:text-6xl">
            Discover the <span className="text-precision-teal">frontier</span> of neuroscience
          </h1>
          
          <motion.div 
            key={currentTagline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="h-8 mt-3"
          >
            <p className="text-lg text-space-blue/90 font-mono">
              {taglines[currentTagline]}
            </p>
          </motion.div>
          
          <p className="mt-6 text-lg text-space-blue/80 lg:text-xl">
            Exploring the latest research, breakthroughs, and discussions in the world of neuroscience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
        >
          <Link 
            href="#featured-articles" 
            className="btn btn-primary"
          >
            Explore Articles
          </Link>
          <Link 
            href="/about" 
            className="btn btn-neural"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 