'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { ArticleType } from '../data/articles'
import ArticleTags from './ArticleTags'

interface ArticleListProps {
  articles: ArticleType[]
  showViewAll?: boolean
}

export default function ArticleList({ articles, showViewAll = false }: ArticleListProps) {
  const [visibleArticles, setVisibleArticles] = useState(6)
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  const loadMore = () => {
    setVisibleArticles(prev => prev + 6)
  }
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-display font-bold text-primary">Latest Articles</h2>
          {showViewAll && (
            <Link href="/articles" className="text-accent hover:text-accent/80 font-medium transition-colors duration-300">
              View all articles
              <span className="ml-1">→</span>
            </Link>
          )}
        </div>
        
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {articles.slice(0, visibleArticles).map((article) => (
            <motion.article 
              key={article.slug} 
              variants={item}
              className="border-b border-primary/10 pb-8 last:border-0"
            >
              <Link href={`/articles/${article.slug}`} className="block group">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary/60 mb-2 text-sm">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                    <span>•</span>
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-primary/80 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="mb-4">
                    <ArticleTags tags={article.tags} variant="compact" maxVisible={3} />
                  </div>
                  
                  <div className="mt-auto">
                    <span className="text-accent group-hover:text-accent/80 font-medium transition-colors duration-300 flex items-center">
                      Read more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
        
        {visibleArticles < articles.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary/20 hover:bg-primary/5 hover:border-accent/50 transition-all duration-300 flex items-center"
            >
              Load more articles
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 