'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ArticleLayout from '../../components/ArticleLayout'
import { articles, ArticleType } from '../../data/articles'

export default function ArticlePage() {
  const [loading, setLoading] = useState(true);
  const [currentArticle, setCurrentArticle] = useState<ArticleType | null>(null);
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundArticle = articles.find(article => article.slug === slug);
      setCurrentArticle(foundArticle || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto py-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <h1 className="text-3xl font-bold mb-4">Loading article...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (!currentArticle) {
    return (
      <div className="container mx-auto py-16 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-6">Article not found</h1>
          <p className="mb-6">Sorry, we couldn&apos;t find the article you were looking for.</p>
          <Link href="/articles" className="button-primary">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ArticleLayout 
      title={currentArticle.title}
      author={currentArticle.author}
      date={currentArticle.date}
      readTime={currentArticle.readTime}
      tags={currentArticle.tags}
    >
      <div className="prose prose-lg max-w-none">
        {currentArticle.content ? (
          currentArticle.content
        ) : (
          <div>
            <p className="lead">{currentArticle.excerpt}</p>
            <p className="mt-4">This is a placeholder for the full article content. Please visit one of our specialized article pages for complete content.</p>
          </div>
        )}
      </div>
      
      {currentArticle.references && currentArticle.references.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-light">
          <h3 className="text-xl font-semibold mb-4">References</h3>
          <ul className="list-decimal pl-5 space-y-2">
            {currentArticle.references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </div>
      )}
    </ArticleLayout>
  );
}