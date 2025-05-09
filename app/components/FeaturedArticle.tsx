'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FeaturedArticleProps {
  title: string
  description: string
  imageUrl: string
  date: string
  author: string
  authorImage?: string
  slug: string
}

export default function FeaturedArticle({
  title,
  description,
  imageUrl,
  date,
  author,
  slug,
}: FeaturedArticleProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        {/* img */}
        <div className="md:w-1/2 relative">
          <div 
            className="h-64 md:h-full" 
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className={`absolute inset-0 bg-gradient-to-br from-analytical-amber/30 to-neural-red/20 transition-opacity duration-500 ${
            isHovered ? 'opacity-70' : 'opacity-50'
          }`}></div>
          
          <div className="absolute top-4 left-4 bg-precision-teal text-space-blue text-xs font-medium uppercase tracking-wider py-1 px-2 rounded">
            Featured
          </div>
        </div>
        
        {/* content */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <time className="text-sm text-space-blue/60">{date}</time>
            </div>
            
            <Link href={`/articles/${slug}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-space-blue mb-3 hover:text-precision-teal transition-colors duration-250">
                {title}
              </h2>
            </Link>
            
            <p className="text-space-blue/70 mb-6">
              {description}
            </p>
          </div>
          
          {/* author */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-precision-teal/20 mr-4 flex items-center justify-center text-space-blue font-medium">
              {author?.charAt(0) || '?'}
            </div>
            <div>
              <p className="font-medium text-space-blue">{author || 'Anonymous'}</p>
            </div>
          </div>
          
          {/* read more */}
          <div className="mt-6">
            <Link 
              href={`/articles/${slug}`}
              className="inline-flex items-center text-precision-teal font-medium group"
            >
              Read full article
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform transition-transform duration-250 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 