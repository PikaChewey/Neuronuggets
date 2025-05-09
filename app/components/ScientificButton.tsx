'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ScientificButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function ScientificButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  whileHover = { scale: 1.02 },
  whileTap = { scale: 0.98 },
  ...props
}: ScientificButtonProps) {
  // base class
  const baseClasses = 'relative font-medium rounded focus:outline-none transition-all duration-200 neural-activation flex items-center justify-center';
  
  // size
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  // variant
  const variantClasses = {
    primary: 'bg-space-blue text-gray-100 hover:shadow-button-glow transform hover:-translate-y-0.5',
    secondary: 'border border-neural-red text-neural-red hover:bg-neural-red hover:bg-opacity-10',
    ghost: 'text-space-blue hover:bg-space-blue hover:bg-opacity-5',
  };
  
  // icon space
  const iconSpacing = icon ? (iconPosition === 'left' ? 'space-x-2' : 'flex-row-reverse space-x-2 space-x-reverse') : '';
  
  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${iconSpacing} ${className}`}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
      
      <span className="absolute inset-0 overflow-hidden rounded pointer-events-none">
      </span>
    </motion.button>
  )
} 