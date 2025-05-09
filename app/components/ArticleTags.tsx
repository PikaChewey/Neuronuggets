'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ArticleTagsProps {
  tags: string[]
  variant?: 'default' | 'compact' | 'minimal'
  maxVisible?: number
}

export default function ArticleTags({ 
  tags = [], 
  variant = 'default',
  maxVisible = 3 
}: ArticleTagsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // no tags dont render 
  if (tags.length === 0) return null
  
  const getTagClasses = () => {
    switch (variant) {
      case 'compact':
        return 'px-2 py-0.5 text-xs'
      case 'minimal':
        return 'text-xs underline'
      case 'default':
      default:
        return 'px-3 py-1 text-sm'
    }
  }
  
  const baseTagClasses = `${getTagClasses()} bg-primary/10 text-space-blue rounded-full font-medium transition-colors duration-200 hover:bg-primary/20`
  const moreTagsClasses = `${getTagClasses()} bg-primary/5 text-space-blue/60 rounded-full cursor-pointer hover:bg-primary/15 transition-colors duration-200`
  
  // remove dupes
  const uniqueTags = Array.from(new Set(tags))
  
  // visible and hidden tags
  const visibleTags = uniqueTags.slice(0, maxVisible)
  const hiddenTags = uniqueTags.slice(maxVisible)
  const hasMoreTags = uniqueTags.length > maxVisible

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => (
          <span key={tag} className={baseTagClasses}>
            {tag}
          </span>
        ))}
        
        {hasMoreTags && (
          <span 
            className={moreTagsClasses}
            onClick={() => setIsOpen(!isOpen)}
          >
            +{hiddenTags.length} more
          </span>
        )}
      </div>
      
      {/* popup for all tags */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 p-4 bg-white dark:bg-space-blue/90 rounded-lg shadow-lg z-50 min-w-[250px] max-w-[320px] backdrop-blur-sm border border-lab-white/10"
          >
            <h4 className="text-sm font-semibold text-space-blue dark:text-lab-white mb-3">All Tags</h4>
            <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
              {uniqueTags.map((tag) => (
                <span key={tag} className={baseTagClasses}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 