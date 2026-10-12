import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#08090d' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://maroofhusain.dev'),
  title: {
    default: 'Maroof Husain | Computer Science Engineer & Software Developer',
    template: '%s | Maroof Husain',
  },
  description:
    'Production portfolio of Maroof Husain, Computer Science & Engineering undergraduate at Dr. A.P.J. Abdul Kalam Technical University (2023–2027). Specializing in full-stack engineering, AI/ML pipelines, and blockchain systems.',
  keywords: [
    'Maroof Husain',
    'Software Development Engineer',
    'Full Stack Developer',
    'AI/ML Engineer',
    'Data Structures and Algorithms',
    'LeetCode',
    'DataKart',
    'Flatmate Finder',
    'AKTU',
    'Web3',
    'Solidity',
    'Next.js',
    'React',
    'Python',
  ],
  authors: [{ name: 'Maroof Husain', url: 'https://github.com/Gkchvcg' }],
  creator: 'Maroof Husain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maroofhusain.dev',
    title: 'Maroof Husain | Computer Science Engineer & Software Developer',
    description:
      'Explore full-stack applications, AI intelligence pipelines, and verified projects by Maroof Husain. Download verified resume and inspect source code.',
    siteName: 'Maroof Husain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maroof Husain | Software Development Engineer',
    description:
      'Computer Science & Engineering undergraduate building full-stack applications, AI systems, and blockchain solutions.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#08090d] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
