import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Header    from '@/components/Header/Header'
import "./globals.css";
import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TestWork7621',
  description: 'test work7621',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
