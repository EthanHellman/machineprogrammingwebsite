import type { Metadata } from "next";
import { Lato } from 'next/font/google';
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Machine Programming Lecture Day",
  description: "Join us for an extraordinary afternoon featuring distinguished leaders at the intersection of AI, software development, and computing systems. Stanford CS 329M presents a special lecture series featuring innovators from Atlas Computing, Pasteur Labs, CNCF, and IBM.",
  icons: {
    icon: [
      { url: '/images/m_logo.jpeg', sizes: 'any' },
    ],
  },
  openGraph: {
    title: 'Machine Programming Lecture Day - Stanford CS 329M',
    description: 'Join us for an extraordinary afternoon featuring distinguished leaders at the intersection of AI, software development, and computing systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}