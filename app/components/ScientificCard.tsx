'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScientificCardProps {
  children: ReactNode
  className?: string
  highlightColor?: 'teal' | 'amber' | 'red' | 'none'
  elevation?: 'sm' | 'md' | 'lg'
  hoverEffect?: boolean
}

export default function ScientificCard({
  children,
  className = '',
  highlightColor = 'teal',
  elevation = 'md',
  hoverEffect = true
}: ScientificCardProps) {
  // border color
  const getHighlightColor = () => {
    switch (highlightColor) {
      case 'teal':
        return 'before:bg-precision-teal';
      case 'amber':
        return 'before:bg-analytical-amber';
      case 'red':
        return 'before:bg-neural-red';
      case 'none':
        return '';
      default:
        return 'before:bg-precision-teal';
    }
  };
  
  // shadow via elevation
  const getShadow = () => {
    switch (elevation) {
      case 'sm':
        return 'shadow-scientific-sm';
      case 'md':
        return 'shadow-scientific-md';
      case 'lg':
        return 'shadow-scientific-lg';
      default:
        return 'shadow-scientific-md';
    }
  };
  
  return (
    <motion.div
      className={`
        scientific-card relative overflow-hidden 
        ${getHighlightColor()} 
        ${getShadow()} 
        ${hoverEffect ? 'hover:shadow-card-elevation hover:-translate-y-1' : ''}
        ${className}
        before:absolute before:left-0 before:top-0 before:h-full before:w-1
      `}
      initial={hoverEffect ? { y: 0 } : undefined}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } } : undefined}
    >
      <div className="h-full w-full p-5">
        {children}
      </div>
    </motion.div>
  )
} 