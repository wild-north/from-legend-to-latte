export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  coverImage?: string;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  coverImage?: string;
} 