'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'
import ArticleTags from './ArticleTags'

interface ArticleLayoutProps {
  title: string
  author: string
  date: string
  readTime?: string
  tags: string[]
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  author,
  date,
  readTime,
  tags,
  children
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          href="/articles" 
          className="flex items-center text-gray-dark hover:text-precision-teal transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Articles
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-space-blue mb-6">{title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-dark mb-6">
            <span className="mr-4">{author}</span>
            <span className="mr-4">•</span>
            <span className="mr-4">{date}</span>
            {readTime && (
              <>
                <span className="mr-4">•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
          
          <div className="mb-12">
            <ArticleTags tags={tags} maxVisible={5} />
          </div>
          
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-light">
            <h3 className="text-xl font-semibold text-space-blue mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-gray-light text-gray-dark hover:bg-precision-teal hover:text-lab-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-light text-gray-dark hover:bg-precision-teal hover:text-lab-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-light text-gray-dark hover:bg-precision-teal hover:text-lab-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* delements */}
      <div className="fixed top-20 left-10 w-16 h-16 rounded-full bg-precision-teal/10 -z-10"></div>
      <div className="fixed bottom-20 right-10 w-24 h-24 rounded-full bg-neural-red/10 -z-10"></div>
      <div className="fixed top-1/2 right-1/4 w-32 h-32 rounded-full bg-space-blue/5 -z-10"></div>
    </div>
  )
} 