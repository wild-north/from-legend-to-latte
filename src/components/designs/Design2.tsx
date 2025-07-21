import { BlogMetadata } from '@/types/blog';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

interface Design2Props {
  featuredPosts: BlogMetadata[];
  recentPosts: BlogMetadata[];
}

export default function Design2({ featuredPosts, recentPosts }: Design2Props) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-6xl">☕</span>
            </div>
            <h1 className="text-7xl font-black mb-6 tracking-tight">
              FROM <span className="text-yellow-300">LEGEND</span><br />
              TO <span className="text-yellow-300">LATTE</span>
            </h1>
            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100">
              Dive deep into the world of coffee with bold stories, cutting-edge techniques, 
              and the passionate community that fuels our coffee obsession.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/articles"
                className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                🚀 Start Reading
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">🔥 Hot Picks</h2>
              <p className="text-xl text-gray-600">The articles everyone's talking about</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredPosts.map((article) => (
                <div key={article.slug} className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-8 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-bold">
                        {article.category}
                      </span>
                      <span className="text-orange-100">•</span>
                      <span className="text-orange-100">{article.readingTime} min</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-200 transition-colors">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-orange-100 mb-6 text-lg">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-200">By {article.author}</span>
                      <Link
                        href={`/articles/${article.slug}`}
                        className="bg-white text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-gray-900">🆕 Fresh Brews</h2>
              <Link
                href="/articles"
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2"
              >
                View All
                <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((article) => (
                <div key={article.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ⚡ Powered by Caffeine & Curiosity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of coffee enthusiasts exploring the intersection of tradition and innovation, 
            one story at a time.
          </p>
        </div>
      </div>
    </div>
  );
} 