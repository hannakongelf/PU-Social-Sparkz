import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/header/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social Sparkz',
  description: "En nettside med flere 'bli-kjent' leker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <main className='container mx-auto max-w-6xl p-4'>
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
