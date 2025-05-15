"use client";

import useMemeStore from '@/stores/meme.store';
import type { Metadata } from 'next';
import { Playfair_Display, EB_Garamond } from 'next/font/google';
import Link from 'next/link';

const ebGaramond = EB_Garamond({ subsets: ['latin'], display: 'swap' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Dokumen dengan Daftar Isi',
  description: 'Contoh implementasi daftar isi dengan Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const memes = useMemeStore(state => state.memes)

  return (
      <div className={`bg-white dark:bg-gray-900`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <main id="main-content" className="flex-1 prose dark:prose-invert w-full">
              {children}
            </main>
            <aside className="lg:w-4/12 hidden lg:block">
              <h2 className={`${playfairDisplay.className} mb-3`}>Daftar Isi</h2>

              <ul className={`${ebGaramond.className} flex flex-col`}>
                { memes?.map((meme) => (
                  <li key={meme.slug}><Link href={`/memes/${meme.slug}`}>{meme.title}</Link></li>
                )) }
              </ul>
            </aside>
          </div>
        </div>
      </div>
  );
}