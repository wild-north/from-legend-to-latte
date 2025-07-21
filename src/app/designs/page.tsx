import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import Design1 from '@/components/designs/Design1';
import Design2 from '@/components/designs/Design2';
import Design3 from '@/components/designs/Design3';
import Design4 from '@/components/designs/Design4';
import Link from 'next/link';

export default async function DesignsPage() {
  const featuredPosts = await getFeaturedPosts();
  const allPosts = await getAllPosts();
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Оберіть дизайн для блогу
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ось 4 варіанти дизайну для твого кавового блогу. Натисни на номер дизайну, щоб побачити його у повному розмірі.
          </p>
          <Link
            href="/"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            ← Повернутися на головну
          </Link>
        </div>

        <div className="space-y-20">
          
          <section id="design1" className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-amber-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Дизайн #1: Елегантний мінімалізм</h2>
              <p className="text-amber-100">
                М'який градієнт, чисті лінії, акцент на amber кольорах. Підходить для серйозного контенту з професійним виглядом.
              </p>
            </div>
            <div className="bg-white">
              <Design1 featuredPosts={featuredPosts} recentPosts={recentPosts} />
            </div>
          </section>

          <section id="design2" className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Дизайн #2: Сучасний і яскравий</h2>
              <p className="text-orange-100">
                Смілі кольори, великі заголовки, динамічні градієнти. Ідеально для молодої аудиторії та яскравого контенту.
              </p>
            </div>
            <div className="bg-white">
              <Design2 featuredPosts={featuredPosts} recentPosts={recentPosts} />
            </div>
          </section>

          <section id="design3" className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-amber-700 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Дизайн #3: Затишний вінтаж</h2>
              <p className="text-amber-100">
                Теплі коричневі відтінки, serif шрифти, затишна атмосфера. Створює відчуття домашнього комфорту та традицій.
              </p>
            </div>
            <div className="bg-white">
              <Design3 featuredPosts={featuredPosts} recentPosts={recentPosts} />
            </div>
          </section>

          <section id="design4" className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Дизайн #4: Мінімалістичний журнал</h2>
              <p className="text-gray-300">
                Чистий білий фон, мінімум кольорів, акцент на типографіці. Схожий на преміум журнали про лайфстайл.
              </p>
            </div>
            <div className="bg-white">
              <Design4 featuredPosts={featuredPosts} recentPosts={recentPosts} />
            </div>
          </section>
        </div>

        <div className="text-center mt-16 p-8 bg-white rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Який дизайн тобі найбільше подобається?
          </h3>
          <p className="text-gray-600 mb-6">
            Кожен дизайн має свій унікальний характер і підходить для різних цілей:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <strong className="text-amber-800">Дизайн #1</strong><br />
              Професійний, надійний, універсальний
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <strong className="text-orange-800">Дизайн #2</strong><br />
              Енергійний, молодіжний, захоплюючий
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-300">
              <strong className="text-amber-900">Дизайн #3</strong><br />
              Затишний, теплий, традиційний
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <strong className="text-gray-800">Дизайн #4</strong><br />
              Елегантний, простий, преміум
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 