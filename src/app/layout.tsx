import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://harshdeep.studio'),
  title: {
    default: 'harsh&deep',
    template: '%s | harsh&deep'
  },
  description: 'independent rapper, poet & songwriter crafting original sound from dehradun (uk07).',
  keywords: [
    'harshdeep', 'harsh&deep', 'harshdeepsync', 'indian rapper', 'dehradun artist', 'uk07', 'lyrics', 'poet', 'songwriter', 'independent music'
  ],
  authors: [{ name: 'Harshdeep', url: 'https://harshdeep.studio' }],
  creator: 'Harshdeep',
  publisher: 'Harshdeep',
  alternates: {
    canonical: 'https://harshdeep.studio'
  },
  openGraph: {
    title: 'harsh&deep',
    description: 'independent rapper, poet & songwriter crafting original sound from dehradun (uk07).',
    url: 'https://harshdeep.studio',
  siteName: 'harsh&deep',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'harsh&deep',
    description: 'independent rapper, poet & songwriter crafting original sound from dehradun (uk07).',
    creator: '@harshdeepsync'
  },
  icons: {
    icon: '/favicon.svg'
  },
  category: 'music'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://harshdeep.studio" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Harshdeep" />
        <meta name="application-name" content="harshdeep.studio" />
        <meta name="apple-mobile-web-app-title" content="harshdeep" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <link rel="icon" href="/favicon.svg" />
  <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Harshdeep',
              alternateName: ['harsh&deep', 'harshdeepsync'],
              description: 'Independent rapper, poet & songwriter crafting original sound from Dehradun (UK07).',
              url: 'https://harshdeep.studio',
              sameAs: [
                'https://instagram.com/harshdeepsync',
                'https://youtube.com/@harshdeepsync',
                'https://open.spotify.com/user/zgearbiszvaowgdl6yvyx362k'
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
  <main className="pt-14">
            {children}
        </main>
      </body>
    </html>
  );
}
