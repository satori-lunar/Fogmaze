import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blind Maze - A Minimalist Puzzle Game',
  description: 'Navigate through mazes with limited visibility in this minimalist puzzle game with fog of war mechanics.',
  keywords: ['puzzle game', 'maze', 'fog of war', 'minimalist', 'browser game'],
  authors: [{ name: 'Blind Maze' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#0d0d0d',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
