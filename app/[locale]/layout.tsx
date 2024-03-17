import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

import 'node_modules/flag-icons/css/flag-icons.min.css';
import SelectorIdioma from '@/components/LocaleSwitcherSelect';
import LocaleSwitcher from '@/components/LocaleSwitcher';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anime Vault',
  description: 'Your favorite anime, all in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <div className="absolute top-0 right-0">
            <LocaleSwitcher />
          </div>
          <Hero />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
