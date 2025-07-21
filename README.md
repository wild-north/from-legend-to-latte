# ☕ Coffee: From Legend to Latte

A coffee-focused blog built with Next.js, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```

## 📦 GitHub Pages Deployment

### 1. Repository Setup
1. Create a new repository on GitHub named `from-legend-to-latte`
2. Add your code to the repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/from-legend-to-latte.git
git branch -M main
git push -u origin main
```

### 2. GitHub Actions Configuration
The project includes `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

### 3. GitHub Settings
1. Go to `Settings` → `Actions` → `General`
2. Set `Workflow permissions` to "Read and write permissions"
3. Go to `Settings` → `Pages`
4. Under `Source`, select `Deploy from a branch`
5. Choose `gh-pages` branch and `/ (root)` folder
6. Save the settings

After pushing, your code will be automatically built and deployed to `https://YOUR_USERNAME.github.io/from-legend-to-latte/`.

## 📝 Adding New Articles

Articles are stored in `src/lib/blog.ts` in the `sampleArticles` array. To add a new article:

1. Open `src/lib/blog.ts`
2. Add a new object to the `sampleArticles` array:

```typescript
{
  slug: 'url-friendly-title',
  title: 'Article Title',
  excerpt: 'Brief description of the article...',
  content: `<div class="prose prose-lg max-w-none">
    <p>Your HTML content here...</p>
  </div>`,
  publishedAt: '2024-01-20',
  author: 'Your Name',
  category: 'Category',
  tags: ['tag1', 'tag2'],
  readingTime: 5,
  featured: false,
  coverImage: getImagePath('/images/article-image.jpg')
}
```

## 🛠 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static type checking
- **Tailwind CSS v4** - Utility-first CSS framework
- **@tailwindcss/typography** - Content styling

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── articles/          # Article list and individual articles
│   ├── about/             # About page
│   └── layout.tsx         # Main layout
├── components/            # React components
│   ├── Header.tsx         # Navigation
│   └── ArticleCard.tsx    # Article card component
├── lib/                   # Utilities
│   └── blog.ts           # Blog logic and articles
└── types/                 # TypeScript types
    └── blog.ts           # Blog-related types
```

## 🎯 Features

- ✅ Static site optimized for GitHub Pages
- ✅ Responsive design
- ✅ TypeScript for reliability
- ✅ SEO optimization
- ✅ Fast navigation
- ✅ Readable typography
- ✅ Image optimization with proper basePath handling
- ✅ Active navigation highlighting

## 📷 Images

Place images in the `public/images/` directory. The project uses a helper function `getImagePath()` to ensure proper image paths for GitHub Pages deployment.

## 🤝 Content Management

For adding new content, you can:
1. Edit the `src/lib/blog.ts` file directly
2. Add HTML content in the `content` field
3. Integrate a Markdown parser (requires additional setup)
4. Connect a headless CMS (Contentful, Sanity, etc.)

## 🌍 Live Demo

Visit the live site: [https://wild-north.github.io/from-legend-to-latte/](https://wild-north.github.io/from-legend-to-latte/)

---

**Author:** Serhii S.  
**Technologies:** Next.js, TypeScript, Tailwind CSS  
**Purpose:** Coffee blog for GitHub Pages deployment
