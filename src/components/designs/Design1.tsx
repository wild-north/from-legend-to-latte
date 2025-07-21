import { BlogMetadata } from '@/types/blog';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

interface Design1Props {
  featuredPosts: BlogMetadata[];
  recentPosts: BlogMetadata[];
}

export default function Design1({ featuredPosts, recentPosts }: Design1Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <section className="py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Coffee: From Legend to <span className="text-amber-600">Latte</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the rich history, diverse cultures, and artful techniques that make coffee 
              the world's most beloved beverage. Join us on a journey from ancient Ethiopian highlands 
              to modern specialty coffee culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Explore Articles
              </Link>
              <Link
                href="/about"
                className="border border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                About the Blog
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((article) => (
              <div key={article.slug} className="transform hover:-translate-y-1 transition-transform duration-200">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              href="/articles"
              className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="py-20 text-center bg-amber-600 -mx-4 sm:-mx-6 lg:-mx-8 mt-16 rounded-t-3xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              ☕ Brewing Knowledge, One Cup at a Time
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              From the ancient legend of Kaldi's dancing goats to the perfect espresso shot, 
              we're here to share the stories, techniques, and culture that make coffee extraordinary.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 