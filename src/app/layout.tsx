import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://music.harshdeepsingh.in'),
  title: {
    default: 'tatv',
    template: '%s | tatv'
  },
  description: 'tatv | musician and songwriter who sings and raps | Dehradun (UK07)',
  keywords: [
    'tatv', 'tatvmusic', 'harshdeep singh', 'harshdeep', 'indian musician', 'indian rapper', 'dehradun artist', 'uk07', 'hindi', 'urdu', 'lyrics', 'poet', 'songwriter', 'independent music'
  ],
  authors: [{ name: 'Harshdeep Singh', url: 'https://music.harshdeepsingh.in' }],
  creator: 'Harshdeep Singh',
  publisher: 'Harshdeep Singh',
  alternates: {
    canonical: 'https://music.harshdeepsingh.in'
  },
  openGraph: {
    title: 'tatv',
    description: 'tatv | musician and songwriter who sings and raps | Dehradun (UK07)',
    url: 'https://music.harshdeepsingh.in',
    siteName: 'tatv',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tatv',
    description: 'tatv | musician and songwriter who sings and raps | Dehradun (UK07)',
    creator: '@tatvmusic'
  },
  icons: {
    icon: '/favicon.ico'
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
        <link rel="canonical" href="https://music.harshdeepsingh.in" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Harshdeep Singh" />
        <meta name="application-name" content="tatv" />
        <meta name="apple-mobile-web-app-title" content="tatv" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'tatv',
              alternateName: ['तत्व', 'Harshdeep Singh', 'हर्षदीप'],
              description: 'tatv is an independent musician and songwriter from Dehradun, Uttarakhand (UK07), who sings and raps in Hindi and Urdu. Rooted in the hills. Poetry, storytelling and nostalgia, with raw emotion in every line.',
              url: 'https://music.harshdeepsingh.in',
              sameAs: [
                'https://instagram.com/tatvmusic',
                'https://youtube.com/@tatvmusic',
                'https://open.spotify.com/artist/0JMna4VWG7Pc7XN9XG79n6'
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
