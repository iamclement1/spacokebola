import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RootLayoutProps } from '@/lib/types';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: "%s | spacokebola",
    default: "spacokebola",
  },
  description: "Oke Bola Archdeaconry",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "./img/SPAC-LOGO.png",
    },
    {
      rel: "apple",
      url: "./icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
