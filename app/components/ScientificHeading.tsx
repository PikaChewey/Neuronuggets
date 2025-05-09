'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScientificHeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4
  className?: string
  underline?: boolean
  align?: 'left' | 'center' | 'right'
  color?: 'default' | 'teal' | 'amber' | 'red'
  animate?: boolean
}

export default function ScientificHeading({
  children,
  level = 2,
  className = '',
  underline = false,
  align = 'left',
  color = 'default',
  animate = true,
}: ScientificHeadingProps) {
  // alignment ass
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // colour vs color
  const colorClasses = {
    default: 'text-space-blue dark:text-lab-white',
    teal: 'text-precision-teal',
    amber: 'text-analytical-amber',
    red: 'text-neural-red',
  };
  
  // size and weight based on heading level
  const sizeClasses = {
    1: 'text-4xl md:text-5xl font-bold tracking-tight',
    2: 'text-3xl md:text-4xl font-bold tracking-tight',
    3: 'text-2xl md:text-3xl font-bold tracking-tight',
    4: 'text-xl md:text-2xl font-bold tracking-tight',
  };
  
  // anime var
  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // underline classes
  const underlineClass = underline ? 'precision-underline' : '';
  
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <motion.div
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={headingVariants}
      className={`${alignClasses[align]} font-display ${className}`}
    >
      <HeadingTag className={`
        ${colorClasses[color]}
        ${sizeClasses[level]}
        ${underlineClass}
        leading-tight
      `}>
        {children}
      </HeadingTag>
    </motion.div>
  )
} 