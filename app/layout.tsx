import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RootLayoutProps } from '@/lib/types';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      type: "image/ico",
      url: "/favicon.ico",
    },
    {
      rel: "apple",
      url: "/favicon.ico",
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
