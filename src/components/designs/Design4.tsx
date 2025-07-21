import { BlogMetadata } from '@/types/blog';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

interface Design4Props {
  featuredPosts: BlogMetadata[];
  recentPosts: BlogMetadata[];
}

export default function Design4({ featuredPosts, recentPosts }: Design4Props) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <section className="py-32 border-b border-gray-100">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">☕</span>
              </div>
            </div>
            <h1 className="text-7xl font-light text-gray-900 mb-8 tracking-tight leading-none">
              COFFEE
            </h1>
            <div className="h-px bg-gray-300 w-32 mx-auto mb-8"></div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
              From Legend to Latte
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              A curated collection of stories exploring the intersection of tradition, culture, 
              and craftsmanship in the world of coffee.
            </p>
            <div className="mt-12">
              <Link
                href="/articles"
                className="inline-block text-sm uppercase tracking-widest border-b-2 border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1 font-medium"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Featured</h2>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>
          <div className="space-y-16">
            {featuredPosts.map((article, index) => (
              <article key={article.slug} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-400 uppercase tracking-wider">{article.category}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-gray-400">{article.readingTime} min</span>
                      </div>
                      <h3 className="text-4xl font-light text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
                        <Link href={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-gray-400 uppercase tracking-wider">By {article.author}</span>
                        <Link
                          href={`/articles/${article.slug}`}
                          className="text-sm uppercase tracking-widest border-b border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`bg-gray-100 aspect-[4/3] rounded-sm ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-4xl">☕</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-gray-100">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">Latest</h2>
              <div className="h-px bg-gray-200 w-32"></div>
            </div>
            <Link
              href="/articles"
              className="text-sm uppercase tracking-widest border-b border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {recentPosts.map((article) => (
              <article key={article.slug} className="group">
                <div className="space-y-4">
                  <div className="bg-gray-100 aspect-[4/3] rounded-sm mb-4">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-2xl">☕</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-gray-400 uppercase tracking-wider">{article.category}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-400">{article.readingTime} min</span>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">By {article.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="py-16 border-t border-gray-100 text-center">
          <div className="space-y-4">
            <div className="w-8 h-8 mx-auto bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">☕</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Coffee: From Legend to Latte
            </p>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Celebrating the art, science, and culture of coffee through thoughtful storytelling.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
} 