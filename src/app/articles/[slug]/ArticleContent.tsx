'use client';

import { formatDate } from '@/lib/blog';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { BlogPost } from '@/types/blog';

interface ArticleContentProps {
  post: BlogPost;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="mb-8">
          <Link
            href="/articles"
            className="text-sm uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-600 hover:border-gray-900 pb-1"
          >
            <FormattedMessage id="article.backToAll" />
          </Link>
        </div>

        <article>
          <header className="mb-16 pb-16 border-b border-gray-100">
            <div className="flex items-center gap-4 text-sm mb-6">
              <span className="text-gray-400 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <time className="text-gray-400" dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-gray-400">
                <FormattedMessage 
                  id="article.readingTime" 
                  values={{ minutes: post.readingTime }}
                />
              </span>
            </div>
            
            <h1 className="text-5xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                <FormattedMessage 
                  id="article.by" 
                  values={{ author: post.author }}
                />
              </span>
              
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {post.coverImage && (
            <div className="mb-16">
              <div className="bg-gray-100 aspect-[16/9] rounded-sm overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div 
            className="prose prose-xl max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-a:text-gray-900 prose-a:border-b prose-a:border-gray-300 prose-a:no-underline hover:prose-a:border-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
              <FormattedMessage id="article.likedArticle" />
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              <FormattedMessage id="article.exploreMore" />
            </p>
            <Link
              href="/articles"
              className="inline-block text-sm uppercase tracking-widest border-b-2 border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1 font-medium"
            >
              <FormattedMessage id="article.readMoreArticles" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 