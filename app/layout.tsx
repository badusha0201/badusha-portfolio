import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'A. Badusha | Software Developer & UI/UX Designer',
  description: 'Premium portfolio of A. Badusha - Software Developer, UI/UX Designer, AI Enthusiast, and Business Strategist. Explore innovative projects and services.',
  keywords: ['Portfolio', 'Developer', 'Designer', 'AI', 'Data Science', 'Web Development'],
  authors: [{ name: 'A. Badusha' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://badusha.com',
    title: 'A. Badusha | Software Developer & UI/UX Designer',
    description: 'Premium portfolio with innovative projects and services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ParticleBackground />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
