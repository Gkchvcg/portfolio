import type { Metadata, Viewport } from 'next';
import { Rajdhani, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GothamSoundtrackProvider } from '@/components/gotham/GothamSoundtrackContext';
import { GothamIntro } from '@/components/gotham/GothamIntro';
import { GothamAtmosphere } from '@/components/gotham/GothamAtmosphere';

const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050608',
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
      className={`${inter.variable} ${rajdhani.variable} ${jetbrainsMono.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#050608] text-[#E2E8F0] font-sans selection:bg-[#D4A338] selection:text-black">
        <ThemeProvider>
          <GothamSoundtrackProvider>
            <GothamAtmosphere />
            <GothamIntro />
            <Navbar />
            <div className="flex-1 relative z-10">{children}</div>
            <Footer />
          </GothamSoundtrackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
