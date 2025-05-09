'use client'

import FeaturedArticle from './components/FeaturedArticle'
import { articles } from './data/articles'
import ArticleCard from './components/ArticleCard'
import CompanyIntro from './components/CompanyIntro'
import FeaturedSection from './components/FeaturedSection'
import HeroSection from './components/HeroSection'
import SectionDivider from './components/SectionDivider'
import dynamic from 'next/dynamic'

// dnyamci import  ParticleBackgroundWrapper for only the home page
const ParticleBackgroundWrapper = dynamic(
  () => import('./components/ParticleBackgroundWrapper').then(mod => mod.ParticleBackgroundWrapper),
  { ssr: false }
)

// gets 3 most recent articles for featured
const featuredArticles = articles.slice(0, 3).map((article, index) => ({
  id: index + 1,
  title: article.title,
  description: article.excerpt,
  imageUrl: article.image || "/images/articles/placeholder.jpg",
  date: article.date,
  author: article.author,
  authorImage: article.authorImage || "/images/authors/placeholder.jpg",
  slug: article.slug
}));

export default function Home() {
  return (
    <>
      {/* particle background just home page */}
      <ParticleBackgroundWrapper />
      
      <main>
        <HeroSection />
        <SectionDivider position="top" />
        
        <FeaturedSection
          title="Featured Article"
          description="Our editors' pick for thought-provoking neuroscience content"
        >
          <FeaturedArticle
            title={featuredArticles[0].title}
            description={featuredArticles[0].description}
            slug={featuredArticles[0].slug}
            date={featuredArticles[0].date}
            author={featuredArticles[0].author}
            authorImage={featuredArticles[0].authorImage}
            imageUrl={featuredArticles[0].imageUrl}
          />
        </FeaturedSection>
        
        <CompanyIntro />
        
        <FeaturedSection
          title="Latest Articles"
          description="Stay updated with our newest neuroscience insights"
          backgroundStyle="alt"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                slug={article.slug}
                date={article.date}
                authorName={article.author}
                readTime={article.readTime}
                tags={article.tags}
              />
            ))}
          </div>
        </FeaturedSection>
        
        <SectionDivider position="bottom" />
      </main>
    </>
  )
} 