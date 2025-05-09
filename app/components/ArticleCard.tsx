'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ArticleTags from './ArticleTags'

interface ArticleCardProps {
  title: string
  subtitle?: string
  excerpt: string
  date: string
  slug: string
  authorName: string
  readTime: string
  tags?: string[]
  featured?: boolean
}

export default function ArticleCard({
  title,
  subtitle,
  excerpt,
  date,
  slug,
  authorName,
  readTime,
  tags = [],
  featured = false
}: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group rounded-xl overflow-hidden ${
        featured 
          ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-6 bg-white dark:bg-indigo-light shadow-md hover:shadow-xl' 
          : 'bg-white dark:bg-indigo-light shadow-md hover:shadow-xl'
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* header */}
      <div className={`relative ${featured ? 'h-64 md:h-full' : 'h-48'} overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-analytical-amber/30 to-neural-red/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-70' : 'opacity-50'
        }`}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-10 h-10 text-space-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
        </div>
      </div>

      {/* content */}
      <div className={`p-6`}>
        <div className="flex items-center space-x-2 mb-3">
          <time className="text-xs text-space-blue/60">{date}</time>
          <span className="text-space-blue/40">•</span>
          <span className="text-xs text-space-blue/60">{readTime}</span>
        </div>

        <Link href={`/articles/${slug}`}>
          <h3 className={`font-bold text-space-blue ${featured ? 'text-2xl mb-2' : 'text-xl mb-2'} group-hover:text-precision-teal transition-colors duration-250`}>
            {title}
          </h3>
        </Link>

        {subtitle && (
          <h4 className="text-space-blue/80 text-lg mb-3">{subtitle}</h4>
        )}

        <p className="text-space-blue/70 mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* tags */}
        {tags && tags.length > 0 && (
          <div className="mb-4">
            <ArticleTags tags={tags} variant="compact" maxVisible={3} />
          </div>
        )}

        {/* author */}
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-precision-teal/20 mr-3 flex items-center justify-center text-space-blue font-medium">
            {authorName.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-space-blue text-sm">{authorName}</p>
          </div>
        </div>

        {/* read more link feature articles */}
        {featured && (
          <div className="mt-5">
            <Link 
              href={`/articles/${slug}`}
              className="inline-flex items-center text-precision-teal font-medium text-sm group"
            >
              Read more
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transform transition-transform duration-250 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
} 