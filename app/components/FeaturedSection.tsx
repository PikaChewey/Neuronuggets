'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FeaturedSectionProps {
  title: string
  description: string
  children: ReactNode
  backgroundStyle?: 'default' | 'alt'
  align?: 'left' | 'center' | 'right'
}

export default function FeaturedSection({
  title,
  description,
  children,
  backgroundStyle = 'default',
  align = 'left'
}: FeaturedSectionProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const bgClasses = {
    default: 'bg-lab-white dark:bg-space-blue',
    alt: 'bg-primary-50 dark:bg-primary-900/20'
  }
  
  return (
    <section className={`py-24 relative overflow-hidden ${bgClasses[backgroundStyle]}`}>
      {/* dec, alt background style */}
      {backgroundStyle === 'alt' && (
        <>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-precision-teal/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-analytical-amber/10 blur-3xl"></div>
          </div>
        </>
      )}
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={alignClasses[align]}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-primary">{title}</h2>
            <p className="text-xl text-primary/80">{description}</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
} 