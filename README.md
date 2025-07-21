# ☕ Coffee: From Legend to Latte

Блог про каву, створений з використанням Next.js, TypeScript та Tailwind CSS.

## 🎨 Варіанти дизайну

Проект містить 4 різні варіанти дизайну:

1. **Елегантний мінімалізм** - М'який градієнт, чисті лінії, amber кольори
2. **Сучасний і яскравий** - Смілі кольори, динамічні градієнти
3. **Затишний вінтаж** - Теплі коричневі відтінки, serif шрифти
4. **Мінімалістичний журнал** - Чистий білий фон, акцент на типографіці

Переглянути всі дизайни можна на сторінці `/designs`.

## 🚀 Швидкий старт

### Встановлення залежностей
```bash
npm install
```

### Запуск сервера розробки
```bash
npm run dev
```

Сайт буде доступний за адресою [http://localhost:3000](http://localhost:3000).

### Збірка для продакшна
```bash
npm run build
```

## 📦 Деплой на GitHub Pages

### 1. Налаштування репозиторія
1. Створи новий репозиторій на GitHub з назвою `from-legend-to-latte`
2. Додай код до репозиторія:
```bash
git remote add origin https://github.com/YOUR_USERNAME/from-legend-to-latte.git
git branch -M main
git push -u origin main
```

### 2. Налаштування GitHub Actions
Створи файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

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

### 3. Налаштування в GitHub
1. Перейди в `Settings` → `Pages`
2. В розділі `Source` обери `Deploy from a branch`
3. Обери гілку `gh-pages` та папку `/ (root)`
4. Збережи налаштування

Після пушу код буде автоматично збиратися та деплоїтися на `https://YOUR_USERNAME.github.io/from-legend-to-latte/`.

## 📝 Додавання нових статей

Статті зберігаються в файлі `src/lib/blog.ts` в масиві `sampleArticles`. Для додавання нової статті:

1. Відкрий `src/lib/blog.ts`
2. Додай новий об'єкт в масив `sampleArticles`:

```typescript
{
  slug: 'url-friendly-title',
  title: 'Заголовок статті',
  excerpt: 'Короткий опис статті...',
  content: `<div class="prose prose-lg max-w-none">
    <p>Тут твій HTML контент...</p>
  </div>`,
  publishedAt: '2024-01-20',
  author: 'Serhii',
  category: 'Category',
  tags: ['tag1', 'tag2'],
  readingTime: 5,
  featured: false,
  coverImage: '/images/article-image.jpg'
}
```

## 🛠 Технології

- **Next.js 15** - React фреймворк з App Router
- **TypeScript** - Статична типізація
- **Tailwind CSS v4** - Utility-first CSS фреймворк
- **@tailwindcss/typography** - Стилізація контенту

## 📁 Структура проекту

```
src/
├── app/                    # Next.js App Router
│   ├── designs/           # Сторінка з варіантами дизайну
│   ├── articles/          # Список та окремі статті
│   ├── about/             # Про блог
│   └── layout.tsx         # Головний layout
├── components/            # React компоненти
│   ├── designs/           # 4 варіанти дизайну
│   ├── Header.tsx         # Навігація
│   └── ArticleCard.tsx    # Карточка статті
├── lib/                   # Утиліти
│   └── blog.ts           # Логіка блогу та статті
└── types/                 # TypeScript типи
    └── blog.ts           # Типи для блогу
```

## 🎯 Функціонал

- ✅ 4 різні дизайни на вибір
- ✅ Статичний сайт для GitHub Pages
- ✅ Адаптивний дизайн
- ✅ TypeScript для надійності
- ✅ SEO-оптимізація
- ✅ Швидка навігація
- ✅ Читабельна типографіка

## 🤝 Додавання контенту

Для додавання нового контенту можна:
1. Редагувати файл `src/lib/blog.ts` напряму
2. Додавати HTML контент у поле `content`
3. Використовувати Markdown (потрібно буде додати парсер)
4. Інтегрувати CMS (Contentful, Sanity тощо)

---

**Автор:** Serhii  
**Технології:** Next.js, TypeScript, Tailwind CSS  
**Призначення:** Блог про каву для GitHub Pages
