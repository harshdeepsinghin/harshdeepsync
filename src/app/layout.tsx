import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Harshdeep.studio',
  description: 'The creative space of Harshdeep.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased pt-14">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
