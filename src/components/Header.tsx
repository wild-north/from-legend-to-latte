import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-light text-gray-900 tracking-wider">
              ☕ COFFEE
            </Link>
          </div>
          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="text-sm uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors pb-1">
              Home
            </Link>
            <Link href="/articles" className="text-sm uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors pb-1">
              Articles
            </Link>
            <Link href="/designs" className="text-sm uppercase tracking-widest text-gray-900 border-b border-gray-900 transition-colors pb-1">
              Designs
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors pb-1">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 