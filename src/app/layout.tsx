import type { Metadata } from 'next';
import { Shippori_Mincho, Jost, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-shippori-mincho',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suge Coffee & Eatery — All is Well',
  description:
    'Suge Coffee & Eatery hadir sebagai ruang ketiga yang nyaman di Bintaro. Nikmati sajian Japanese-inspired coffee & food di suasana yang tenang dan hangat.',
  keywords: ['suge coffee', 'kafe bintaro', 'coffee & eatery', 'japanese coffee', 'matcha'],
  openGraph: {
    title: 'Suge Coffee & Eatery — All is Well',
    description:
      'Ruang ketiga yang nyaman di Bintaro. Coffee & food dengan sentuhan Japanese-inspired.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${shipporiMincho.variable} ${jost.variable} ${notoSerifJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
