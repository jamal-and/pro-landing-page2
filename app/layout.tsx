import type {Metadata} from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Protein Tracker Pro | Protein Tracking. Perfected.',
  description: 'The smartest way to hit your daily protein goals — powered by AI, designed for real life.',
  icons: {
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f4/7e/46/f47e4665-92e6-7493-2f07-f1cc305133f0/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
