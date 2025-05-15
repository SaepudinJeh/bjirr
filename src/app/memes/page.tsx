"use client";

import { Playfair_Display, EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({ subsets: ['latin'], display: 'swap' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], display: 'swap' });

import useMemeStore from "@/stores/meme.store"
import Link from 'next/link';

export default function MemeTableContent() {
    const memes = useMemeStore(state => state.memes)

    return (
        <div className="w-full flex flex-col items-center justify-center text-center p-4 min-h-screen">
            <h1 className={`${playfairDisplay.className} mb-5 font-medium text-xl`}>Daftar Isi</h1>
            <ul className="flex flex-col gap-1">
                {memes.map((meme) => (
                    <li key={meme.slug} className={`${ebGaramond.className}`}>
                        <Link href={`/memes/${meme.slug}`}>{meme.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}