'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CategoryFilterProps {
  categories: string[]
  selectedCategories: string[]
  onChange: (categories: string[]) => void
}

export default function CategoryFilter({ 
  categories, 
  selectedCategories,
  onChange 
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  
  // sort alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b))

  // handle clicks outside the popup to close it
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

  // togle
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter(c => c !== category))
    } else {
      onChange([...selectedCategories, category])
    }
  }

  // clear
  const clearAll = () => {
    onChange([])
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="mb-2 flex justify-between items-center">
        <label className="block text-space-blue/80 text-sm">Categories</label>
        {selectedCategories.length > 0 && (
          <button 
            onClick={clearAll}
            className="text-xs text-precision-teal hover:text-precision-teal/80 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-50 border border-gray-200 rounded-md py-2 px-4 text-space-blue w-full focus:outline-none focus:ring-2 focus:ring-precision-teal/50 transition-all duration-300 flex justify-between items-center"
      >
        <span className="truncate">
          {selectedCategories.length === 0 
            ? 'All Categories' 
            : selectedCategories.length === 1 
              ? selectedCategories[0] 
              : `${selectedCategories.length} categories selected`}
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-space-blue/90 rounded-lg shadow-lg z-50 backdrop-blur-sm border border-lab-white/10"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-space-blue dark:text-lab-white">Filter by categories</h4>
              <span className="text-xs text-space-blue/60">
                {selectedCategories.length} selected
              </span>
            </div>
            
            <div className="max-h-[250px] overflow-y-auto pr-2 -mr-2 space-y-1">
              {sortedCategories.map((category) => (
                <div 
                  key={category} 
                  className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                  onClick={() => toggleCategory(category)}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    selectedCategories.includes(category) 
                      ? 'bg-precision-teal border-precision-teal' 
                      : 'border-gray-300'
                  }`}>
                    {selectedCategories.includes(category) && (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="ml-2 text-sm text-space-blue">{category}</span>
                </div>
              ))}
            </div>
            
            {selectedCategories.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between">
                <button
                  onClick={clearAll}
                  className="text-sm text-space-blue/70 hover:text-space-blue transition-colors"
                >
                  Clear all
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-precision-teal hover:text-precision-teal/80 transition-colors"
                >
                  Apply filters
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 