import { BlogMetadata } from '@/types/blog';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

interface Design3Props {
  featuredPosts: BlogMetadata[];
  recentPosts: BlogMetadata[];
}

export default function Design3({ featuredPosts, recentPosts }: Design3Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <section className="py-24 relative">
          <div className="absolute inset-0 opacity-20 bg-amber-100"></div>
          <div className="relative text-center">
            <div className="inline-block p-4 bg-amber-100 rounded-full mb-8 shadow-lg">
              <span className="text-6xl">☕</span>
            </div>
            <h1 className="text-6xl font-serif text-amber-900 mb-6 leading-tight">
              Coffee: From <span className="italic text-amber-700">Legend</span> to <span className="italic text-amber-700">Latte</span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Step into the warm embrace of coffee culture, where every bean tells a story, 
              every cup holds tradition, and every sip connects us to centuries of human passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="bg-amber-700 text-amber-50 px-8 py-4 rounded-xl font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl"
              >
                🍂 Discover Stories
              </Link>
              <Link
                href="/about"
                className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-amber-100 transition-all"
              >
                📖 Our Journey
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Featured Tales</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-700 italic">Stories worth savoring</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((article) => (
              <div key={article.slug} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-200 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-amber-600">☕</span>
                    <span className="text-amber-600 text-sm">{article.readingTime} min</span>
                  </div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-600 italic">By {article.author}</span>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-amber-700 hover:text-amber-900 font-medium flex items-center gap-2 group"
                    >
                      Read more
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-serif text-amber-900 mb-2">Latest Brewing</h2>
              <p className="text-amber-700 italic">Fresh from our coffee journal</p>
            </div>
            <Link
              href="/articles"
              className="bg-amber-700 text-amber-50 px-6 py-3 rounded-xl font-semibold hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-lg"
            >
              View All Articles
              <span>📚</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((article) => (
              <div key={article.slug} className="transform hover:-translate-y-2 transition-transform duration-300">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-amber-700 to-orange-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative">
              <h2 className="text-4xl font-serif mb-4">
                ☕ Where Every Bean Has a Story
              </h2>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto italic">
                "From the misty highlands of Ethiopia to your morning cup, we celebrate the rich tapestry 
                of coffee culture that connects hearts and minds across the globe."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}