import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        
        <header className="text-center mb-20 border-b border-gray-100 pb-20">
          <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-8">
            <span className="text-2xl text-white">☕</span>
          </div>
          <h1 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">
            ABOUT
          </h1>
          <div className="h-px bg-gray-300 w-24 mx-auto mb-8"></div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
            Coffee: From Legend to Latte
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Де культура кави зустрічається з мистецтвом оповідання
          </p>
        </header>

        <div className="prose prose-lg max-w-none font-light text-gray-600 leading-relaxed">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Наша історія</h2>
          <p className="mb-8">
            Ласкаво просимо до <strong>Coffee: From Legend to Latte</strong> – блогу, присвяченого дослідженню 
            багатого гобелену кавової культури, що охоплює століття та континенти. Від древньої 
            легенди про козопаса Калді в ефіопських високогір&apos;ях до витончених еспресо-барів 
            сучасних міст, ми святкуємо кожен аспект цього неймовірного напою.
          </p>

          <h2 className="text-3xl font-light text-gray-900 mb-6">Що ми висвітлюємо</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
            <div className="p-8 border border-gray-100 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">Історія</h3>
              <p className="text-gray-600 font-light">Зануртесь у захоплюючі витоки та культурне значення кави в різних цивілізаціях.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">Техніки</h3>
              <p className="text-gray-600 font-light">Опануйте мистецтво та науку заварювання кави з детальними гайдами та технологіями.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">Культура</h3>
              <p className="text-gray-600 font-light">Досліджуйте, як різні культури приймали та трансформували кавові традиції.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">Сучасність</h3>
              <p className="text-gray-600 font-light">Будьте в курсі останніх розробок у specialty каві та інноваціях заварювання.</p>
            </div>
          </div>

          <h2 className="text-3xl font-light text-gray-900 mb-6">Наша місія</h2>
          <p className="mb-8">
            Ми віримо, що кожна чашка кави розповідає історію. Наша місія – поділитися цими історіями – 
            від фермерів, які вирощують зерна, до баристів, які створюють ідеальну чашку. Незалежно від того, 
            чи ви новачок у каві, чи досвідчений ентузіаст, ви знайдете тут щось, що поглибить ваше розуміння 
            цього неймовірного напою.
          </p>

          <h2 className="text-3xl font-light text-gray-900 mb-6">Приєднуйтесь до нашої спільноти</h2>
          <p className="mb-12">
            Кавою найкраще ділитися. Ми запрошуємо вас приєднатися до нашої зростаючої спільноти 
            любителів кави, які цінують майстерність, культуру та історії за кожним заварюванням. 
            Слідкуйте за нашою подорожжю, поки ми досліджуємо минуле, сьогодення та майбутнє кави – 
            одну статтю за раз.
          </p>
        </div>

        <div className="text-center border-t border-gray-100 pt-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
              Готові до дослідження?
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              Почніть свою подорож світом кави з наших рекомендованих статей
            </p>
            <Link
              href="/articles"
              className="inline-block text-sm uppercase tracking-widest border-b-2 border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1 font-medium"
            >
              Переглянути статті
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 