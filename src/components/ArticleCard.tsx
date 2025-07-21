import Link from 'next/link';
import { BlogMetadata } from '@/types/blog';
import { formatDate } from '@/lib/blog';

interface ArticleCardProps {
  article: BlogMetadata;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group relative bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
          <span>•</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span>•</span>
          <span>{article.readingTime} min read</span>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-200 mb-2">
          <Link href={`/articles/${article.slug}`} className="before:absolute before:inset-0">
            {article.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            By {article.author}
          </span>
          
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
} 