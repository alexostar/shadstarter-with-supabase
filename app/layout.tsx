import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ui/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Kortagátt VÍN',
  description: 'Kortagátt Vina íslenskrar náttúru',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
