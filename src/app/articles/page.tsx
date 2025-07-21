import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { formatDate } from '@/lib/blog';
import Image from 'next/image';

export default async function ArticlesPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        
        <header className="text-center mb-20 border-b border-gray-100 pb-20">
          <h1 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">
            ARTICLES
          </h1>
          <div className="h-px bg-gray-300 w-24 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Досліджуйте нашу колекцію історій про каву, гайдів та інсайтів
          </p>
        </header>

        <div className="space-y-16">
          {posts.map((article) => (
            <article key={article.slug} className="group border-b border-gray-100 pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400 uppercase tracking-wider">{article.category}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <time className="text-gray-400" dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-400">{article.readingTime} хв читання</span>
                  </div>
                  
                  <h2 className="text-3xl font-light text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-gray-400 uppercase tracking-wider">By {article.author}</span>
                    
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 aspect-[4/3] rounded-sm overflow-hidden">
                  {article.coverImage ? (
                    <img 
                      src={article.coverImage} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-3xl">☕</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-20 pt-16 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light">
            Це всі наші статті на даний момент. Слідкуйте за новими публікаціями!
          </p>
        </div>
      </div>
    </div>
  );
} 