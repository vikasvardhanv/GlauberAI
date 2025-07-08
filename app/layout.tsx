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
      <body className={`${inter.className} bg-pattern`}>
        {/* Futuristic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-pink/20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-neon-yellow/10 via-transparent to-neon-cyan/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-pink rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-yellow rounded-full animate-float opacity-70" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-neon-cyan rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-neon-cyan/5 to-transparent rounded-full animate-pulse-glow"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-neon-pink/5 to-transparent rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}