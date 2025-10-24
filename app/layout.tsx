import type React from 'react';
import type { Metadata } from 'next';
import { Victor_Mono } from 'next/font/google';
import './globals.css';

const victorMono = Victor_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Editorial Portfolio',
  description: 'A minimalist, editorial-style personal portfolio',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${victorMono.variable}`}>
      <body className="font-mono antialiased bg-white text-black">{children}</body>
    </html>
  );
}
