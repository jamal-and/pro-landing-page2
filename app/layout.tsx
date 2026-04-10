import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const BASE_URL = 'https://protein-tracker-pro.vercel.app';
const APP_ICON = 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f4/7e/46/f47e4665-92e6-7493-2f07-f1cc305133f0/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // --- Core ---
  title: {
    default: 'Protein Tracker Pro — AI Protein Tracking App for iOS & Android',
    template: '%s | Protein Tracker Pro',
  },
  description:
    'Track your daily protein intake effortlessly with AI food scanning, barcode lookup, and 1M+ food database. Free on App Store & Google Play. Used by 100K+ people.',
  keywords: [
    'protein tracker',
    'protein tracking app',
    'AI food scanner',
    'macro tracker',
    'daily protein goal',
    'nutrition app',
    'health and fitness app',
    'protein counter',
    'food diary',
    'protein intake',
    'high protein diet',
    'meal tracker',
    'protein tracker pro',
    'iOS nutrition app',
    'Android protein app',
  ],
  authors: [{ name: 'JamalTek', url: BASE_URL }],
  creator: 'JamalTek',
  publisher: 'JamalTek',
  category: 'Health & Fitness',

  // --- Canonical ---
  alternates: {
    canonical: BASE_URL,
  },

  // --- Open Graph ---
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Protein Tracker Pro',
    title: 'Protein Tracker Pro — AI Protein Tracking App for iOS & Android',
    description:
      'Track your daily protein intake effortlessly with AI food scanning, barcode lookup, and 1M+ food database. Free on App Store & Google Play.',
    images: [
      {
        url: APP_ICON,
        width: 512,
        height: 512,
        alt: 'Protein Tracker Pro App Icon',
      },
    ],
    locale: 'en_US',
  },

  // --- Twitter / X Card ---
  twitter: {
    card: 'summary',
    title: 'Protein Tracker Pro — AI Protein Tracking App',
    description:
      'Hit your daily protein goals with AI food scanning. Free on App Store & Google Play. 100K+ users.',
    images: [APP_ICON],
    creator: '@jamaltek',
  },

  // --- App Links (tells Google / crawlers about the native app) ---
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/us/app/protein-tracker-pro/id1660036988',
      app_store_id: '1660036988',
    },
    android: {
      package: 'com.jamal.proteinTrackerPro',
      url: 'https://play.google.com/store/apps/details?id=com.jamal.proteinTrackerPro',
    },
  },

  // --- Icons ---
  icons: {
    icon: APP_ICON,
    apple: APP_ICON,
  },

  // --- Crawling ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // --- Google Search Console ---
  verification: {
    google: 'googlee9b84fa3f6b9c8da',
  },

  // --- Theme ---
  themeColor: '#399eb7',
};

// JSON-LD Structured Data — SoftwareApplication schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Protein Tracker Pro',
  description:
    'Track your daily protein intake effortlessly with AI food scanning, barcode lookup, and a 1M+ food database. Free on App Store & Google Play.',
  url: BASE_URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '32',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Person',
    name: 'JamalTek',
    url: BASE_URL,
  },
  image: APP_ICON,
  downloadUrl: 'https://apps.apple.com/us/app/protein-tracker-pro/id1660036988',
  softwareVersion: '1.2.32',
  datePublished: '2023-01-01',
  dateModified: '2025-07-29',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <Script
          id="json-ld-software-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
