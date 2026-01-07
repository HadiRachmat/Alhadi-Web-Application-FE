'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/5 dark:border-white/10 backdrop-blur supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white font-bold">
            P
          </span>
          <span>Pesantren</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <Link href="#peta" className="hover:text-foreground">
            Peta
          </Link>
          <Link href="#daftar" className="hover:text-foreground">
            Daftar
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
