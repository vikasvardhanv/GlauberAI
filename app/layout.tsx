import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GlauberAI - Smart AI Routing for Every Query',
  description: 'Intelligent AI model routing platform that automatically selects the best foundation model for each query to optimize cost and performance.',
  keywords: ['AI', 'Machine Learning', 'API', 'Routing', 'GPT', 'Claude', 'Gemini'],
  authors: [{ name: 'GlauberAI Team' }],
  creator: 'GlauberAI',
  publisher: 'GlauberAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://glauber.ai.'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GlauberAI - Smart AI Routing for Every Query',
    description: 'Intelligent AI model routing platform that automatically selects the best foundation model for each query to optimize cost and performance.',
    url: 'https://glauber.ai',
    siteName: 'GlauberAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GlauberAI - Smart AI Routing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlauberAI - Smart AI Routing for Every Query',
    description: 'Intelligent AI model routing platform that automatically selects the best foundation model for each query to optimize cost and performance.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}