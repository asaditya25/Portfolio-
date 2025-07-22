import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADITYA SINGH - Software Developer Portfolio',
  description: 'Passionate software developer creating innovative solutions and bringing ideas to life through code.',
  keywords: ['software developer', 'portfolio', 'web development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'ADITYA SINGH' }],
  creator: 'ADITYA SINGH',
  publisher: 'ADITYA SINGH',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'ADITYA SINGH - Software Developer Portfolio',
    description: 'Passionate software developer creating innovative solutions and bringing ideas to life through code.',
    siteName: 'ADITYA SINGH Portfolio',
    images: [
      {
        url: '/img/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'ADITYA SINGH - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADITYA SINGH - Software Developer Portfolio',
    description: 'Passionate software developer creating innovative solutions and bringing ideas to life through code.',
    images: ['/img/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
