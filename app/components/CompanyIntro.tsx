'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function CompanyIntro() {
  return (
    <section className="bg-lab-white dark:bg-space-blue pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-precision-teal/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-analytical-amber/10 blur-3xl"></div>
      </div>

      <div className="golden-container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl font-bold text-space-blue dark:text-lab-white md:text-5xl lg:text-6xl mb-6">
              Bridging Science and Society
            </h1>
            <p className="text-lg text-space-blue/80 dark:text-lab-white/80 mb-8 max-w-prose">
              Neuronuggets was founded with a mission to make cutting-edge neuroscience research accessible to everyone, regardless of their scientific background. We believe that scientific knowledge should be shared with the world in an engaging, accurate, and accessible manner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/team" 
                className="btn btn-primary"
              >
                Meet Our Team
              </Link>
              <Link 
                href="/opportunities" 
                className="btn btn-neural"
              >
                Join Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/full.jpg"
                alt="Neuronuggets Visual Representation"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 