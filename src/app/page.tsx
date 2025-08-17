"use client";

import { Button } from '@/components/ui/button';
import { SpotifyIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons';
import Link from 'next/link';

export default function Home() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
    { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
    { name: 'Spotify', href: 'https://spotify.com', icon: SpotifyIcon },
    { name: 'YouTube', href: 'https://youtube.com', icon: YoutubeIcon },
  ];

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center p-8 text-center text-foreground bg-background">
      <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline tracking-widest text-center uppercase animate-fade-in-down">
            Harshdeep.studio
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-body animate-fade-in-up">
            Crafting sounds and stories. A glimpse into my world of music, art, and everything in between.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button asChild size="lg" className="font-headline text-lg tracking-wider">
            <a href="#socials">Follow My Journey</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline text-lg tracking-wider border-2 hover:bg-foreground hover:text-background">
            <a href="mailto:contact@harshdeep.studio">Contact Me</a>
          </Button>
        </div>

        <div id="socials" className="pt-16 md:pt-24 w-full">
            <h2 className="font-headline text-3xl md:text-4xl tracking-wider mb-8 uppercase animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Find me on</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {socialLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Harshdeep's ${link.name}`}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <div className="aspect-square border-2 border-foreground rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 transform group-hover:-translate-y-1">
                    <link.icon className="w-1/2 h-1/2 text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </div>
                </Link>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
}
