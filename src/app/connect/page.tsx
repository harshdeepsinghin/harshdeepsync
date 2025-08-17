import { Button } from '@/components/ui/button';
import { SpotifyIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons';
import Link from 'next/link';

export default function ConnectPage() {
    const socialLinks = [
        { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
        { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
        { name: 'Spotify', href: 'https://spotify.com', icon: SpotifyIcon },
        { name: 'YouTube', href: 'https://youtube.com', icon: YoutubeIcon },
      ];

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-5xl md:text-8xl tracking-wider uppercase mb-4">
                Connect
            </h1>
            <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Have a project in mind, a question, or just want to say hello? Get in touch. For professional inquiries, please reach out via email.
            </p>
            <Button asChild size="lg" className="font-headline text-xl tracking-wider mb-16">
                <a href="mailto:contact@harshdeep.studio">contact@harshdeep.studio</a>
            </Button>
            
            <h2 className="font-headline text-3xl md:text-4xl tracking-wider mb-8 uppercase">
                Follow the Journey
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-xl mx-auto">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Harshdeep's ${link.name}`}
                  className="group"
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
