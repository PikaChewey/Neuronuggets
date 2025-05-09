'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScientificSectionProps {
  children: ReactNode
  className?: string
  layout?: 'symmetric' | 'asymmetric' | 'asymmetric-reverse' | 'grid'
  backgroundStyle?: 'solid' | 'gradient' | 'none'
  animate?: boolean
}

export default function ScientificSection({
  children,
  className = '',
  layout = 'symmetric',
  backgroundStyle = 'none',
  animate = true,
}: ScientificSectionProps) {
  // layout classes
  const getLayoutClasses = () => {
    switch (layout) {
      case 'asymmetric':
        return 'asymmetric-layout';
      case 'asymmetric-reverse':
        return 'asymmetric-layout-reverse';
      case 'grid':
        return 'scientific-grid';
      default:
        return 'max-w-4xl mx-auto';
    }
  };
  
  // background
  const getBackgroundClasses = () => {
    switch (backgroundStyle) {
      case 'solid':
        return 'bg-lab-white dark:bg-space-blue';
      case 'gradient':
        return 'gradient-scientific';
      default:
        return '';
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <motion.section
      className={`py-16 ${getBackgroundClasses()} ${className}`}
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className={`golden-container ${getLayoutClasses()}`}>
        {children}
      </div>
    </motion.section>
  )
} 