'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  position: 'top' | 'bottom'
  color?: 'default' | 'precision-teal' | 'analytical-amber' | 'neural-red'
}

export default function SectionDivider({ 
  position, 
  color = 'default' 
}: SectionDividerProps) {
  const colorClasses = {
    'default': 'from-lab-white dark:from-space-blue',
    'precision-teal': 'from-precision-teal/20',
    'analytical-amber': 'from-analytical-amber/20',
    'neural-red': 'from-neural-red/20'
  }
  
  return (
    <div className="relative h-24 overflow-hidden z-10">
      {position === 'top' ? (
        <motion.div 
          className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b ${colorClasses[color]} to-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-[1px] bg-lab-white/10 dark:bg-space-blue/20 absolute bottom-0"></div>
          
        </motion.div>
      ) : (
        <motion.div 
          className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-t ${colorClasses[color]} to-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-[1px] bg-lab-white/10 dark:bg-space-blue/20 absolute top-0"></div>
          
        </motion.div>
      )}
    </div>
  )
} 