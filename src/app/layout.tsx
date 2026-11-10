import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

// Matches --background (hsl(41 56% 94%)) so Android Chrome / PWA toolbars blend
// with the paper background instead of showing a white or black strip.
const THEME_COLOR = '#f8f3e7';

export const viewport: Viewport = {
  themeColor: THEME_COLOR
};

export const metadata: Metadata = {
  metadataBase: new URL('https://music.harshdeepsingh.in'),
  applicationName: 'tatv',
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
  robots: {
    index: true,
    follow: true
  },
  appleWebApp: {
    capable: true,
    title: 'tatv',
    statusBarStyle: 'black-translucent'
  },
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
