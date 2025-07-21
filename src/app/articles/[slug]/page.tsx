import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="mb-8">
          <Link
            href="/articles"
            className="text-sm uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-600 hover:border-gray-900 pb-1"
          >
            ← Всі статті
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
              <span className="text-gray-400">{post.readingTime} хв читання</span>
            </div>
            
            <h1 className="text-5xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                By {post.author}
              </span>
              
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
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

          <div 
            className="prose prose-xl max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-a:text-gray-900 prose-a:border-b prose-a:border-gray-300 prose-a:no-underline hover:prose-a:border-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
              Сподобалася стаття?
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              Досліджуйте більше історій та гайдів про каву
            </p>
            <Link
              href="/articles"
              className="inline-block text-sm uppercase tracking-widest border-b-2 border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1 font-medium"
            >
              Читати більше статей
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 