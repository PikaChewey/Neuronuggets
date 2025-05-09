'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { articles } from '../data/articles'
import ArticleTags from '../components/ArticleTags'
import CategoryFilter from '../components/CategoryFilter'

// Extract all unique categories from the articles
const categories = Array.from(
  new Set(
    articles.flatMap(article => article.tags)
  )
).sort();

export default function ArticlesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter articles based on selected categories and search query
  const filteredArticles = articles
    .filter(article => {
      // If no categories selected, show all articles
      // Otherwise, check if article has at least one of the selected categories
      const matchesCategories = 
        selectedCategories.length === 0 || 
        article.tags.some(tag => selectedCategories.includes(tag));
      
      const matchesSearch = 
        searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategories && matchesSearch;
    })
    // Sort articles chronologically (newest first)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="min-h-screen bg-lab-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-space-blue">Latest Research & Insights</h1>
          <p className="text-xl text-space-blue/70 max-w-3xl mx-auto">
            Explore our collection of articles covering the latest breakthroughs in neuroscience, from neural networks to cognitive processes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Search bar for mobile */}
            <div className="mb-6 block md:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 pl-10 bg-space-blue/5 border border-space-blue/10 rounded-md text-space-blue placeholder-space-blue/50 focus:outline-none focus:ring-2 focus:ring-precision-teal/50 w-full"
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-space-blue/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            
            {/* Results count */}
            <div className="mb-6 flex items-center justify-between">
              <div className="text-space-blue/70">
                Showing <span className="font-semibold text-space-blue">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'article' : 'articles'}
                {selectedCategories.length > 0 && (
                  <span> with selected categories</span>
                )}
              </div>
              
              {/* Selected categories pills (mobile) */}
              {selectedCategories.length > 0 && (
                <button 
                  onClick={() => setSelectedCategories([])}
                  className="text-xs text-precision-teal hover:text-precision-teal/80 transition-colors hidden md:block"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            {/* Selected categories pills (mobile) */}
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 md:hidden">
                {selectedCategories.map(category => (
                  <div key={category} className="bg-precision-teal/10 text-space-blue rounded-full px-3 py-1 text-sm flex items-center">
                    {category}
                    <button 
                      onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== category))}
                      className="ml-2 text-space-blue/70 hover:text-space-blue transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => setSelectedCategories([])}
                  className="text-xs text-precision-teal hover:text-precision-teal/80 transition-colors self-center"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {/* Articles grid */}
            <div className="grid grid-cols-1 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <motion.article 
                    key={article.slug}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-precision-teal/30 transition-all duration-300 shadow-md hover:shadow-lg group hover:-translate-y-1 transform-gpu"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link href={`/articles/${article.slug}`} className="flex flex-col h-full p-6">
                      <div className="flex items-center gap-2 text-space-blue/60 mb-3 text-sm">
                        <time dateTime={article.date}>{article.date}</time>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl font-display font-semibold mb-3 group-hover:text-precision-teal transition-colors duration-300">{article.title}</h2>
                      
                      <p className="text-space-blue/80 mb-4 flex-grow">{article.excerpt}</p>
                      
                      <div className="mt-4">
                        <ArticleTags tags={article.tags} variant="compact" maxVisible={3} />
                      </div>
                      
                      <div className="flex items-center mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-precision-teal/30 flex items-center justify-center overflow-hidden">
                            {article.authorImage ? (
                              <img 
                                src={article.authorImage} 
                                alt={article.author} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-sm font-medium">{article.author.charAt(0)}</span>
                            )}
                          </div>
                          <span className="text-sm font-medium">{article.author}</span>
                        </div>
                        
                        <div className="ml-auto">
                          <span className="text-precision-teal font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            Read article
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))
              ) : (
                <div className="text-center py-16 text-space-blue/70">
                  <svg 
                    className="w-16 h-16 mx-auto mb-4 text-space-blue/30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSelectedCategories([])
                      setSearchQuery('')
                    }}
                    className="mt-4 text-precision-teal hover:text-precision-teal/80 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-display font-semibold mb-6">Filter Articles</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-space-blue/80 mb-2 text-sm">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="bg-gray-50 border border-gray-200 rounded-md py-2 px-4 pl-10 text-space-blue w-full focus:outline-none focus:ring-2 focus:ring-precision-teal/50 transition-all duration-300"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg
                      className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-space-blue/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <CategoryFilter 
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onChange={setSelectedCategories}
                  />
                </div>
              </div>
              
              {/* Stats about articles */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-4">Article Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-space-blue/70">Total articles:</span>
                    <span className="font-medium">{articles.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-space-blue/70">Categories:</span>
                    <span className="font-medium">{categories.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-space-blue/70">Filtered results:</span>
                    <span className="font-medium">{filteredArticles.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 