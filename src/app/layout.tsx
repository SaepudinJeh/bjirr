import { NextUiProviders } from '@/providers/nextui.provider';
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Comfortaa, Sevillana, Noto_Sans_Javanese } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin', "cyrillic"], display: "swap", variable: "--font-comfortaa" });
const sevillana = Sevillana({ subsets: ['latin'], display: "swap", weight: "400", variable: "--font-sevillana" })
const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], display: "swap", variable: "--font-javanese" });

const metaDesc: string = "Wkwkwkw";

const metaTitle: string = 'Bjirr | Wkwkwkw: Awokwokwok!';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,

  generator: 'Bjirrr generator',
  applicationName: 'Bjirrr',
  referrer: 'origin-when-cross-origin',
  keywords: ['Bjirrr', 'bjirr'],
  authors: [{ name: 'Bjirrr author' }, { name: 'Saepudin' }],
  creator: 'Bjirrr Creator',
  publisher: 'Bjirrr Publisher',
  category: 'absurd story',

  appleWebApp: {
    title: metaTitle,
    capable: true,
    statusBarStyle: 'default'
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'id-ID': '/id-ID',
    // },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },

  // Opengraph
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: '/',
    siteName: 'Bjirrr',
    type: "website"
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDesc,
    creator: 'Bjirrr Creator',
    // images: ['https://nextjs.org/og.png'],
  },

};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${comfortaa.variable} ${sevillana.variable} ${javanese.variable}`}>
        <NextUiProviders>
          {children}
        </NextUiProviders>
      </body>
    </html>
  )
}
