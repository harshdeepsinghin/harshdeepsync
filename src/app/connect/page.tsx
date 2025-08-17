import { Button } from '@/components/ui/button';
import { SpotifyIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/components/social-icons';
import Link from 'next/link';

export default function ConnectPage() {
    const socialLinks = [
        { name: 'instagram', href: 'https://instagram.com/harshdeepsync', icon: InstagramIcon },
        { name: 'spotify', href: 'https://open.spotify.com/user/zgearbiszvaowgdl6yvyx362k', icon: SpotifyIcon },
        { name: 'youtube', href: 'https://youtube.com/@harshdeepsync', icon: YoutubeIcon },
      ];

    const brandStyles: Record<string, string> = {
      instagram: 'group-hover:border-[#E1306C] group-hover:text-[#E1306C] group-hover:bg-[#E1306C]/10',
      spotify: 'group-hover:border-[#1DB954] group-hover:text-[#1DB954] group-hover:bg-[#1DB954]/10',
      youtube: 'group-hover:border-[#FF0000] group-hover:text-[#FF0000] group-hover:bg-[#FF0000]/10',
      twitter: 'group-hover:border-[#1DA1F2] group-hover:text-[#1DA1F2] group-hover:bg-[#1DA1F2]/10'
    };

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
    <div className="max-w-3xl mx-auto">
      <h1 className="font-headline text-5xl md:text-8xl tracking-tight leading-[1.1] mb-6 lowercase">
        connect
      </h1>
      <p className="font-body text-lg md:text-2xl leading-snug md:leading-normal mb-10 max-w-2xl mx-auto lowercase">
        have a project in mind, a question, or just want to say hello? get in touch. for professional inquiries, please reach out via email.
      </p>
      <Button asChild size="lg" className="font-headline text-base md:text-lg tracking-tight px-8 md:px-10 mb-20">
        <a href="mailto:contact@harshdeep.studio">contact@harshdeep.studio</a>
      </Button>

      <h2 className="font-headline text-3xl md:text-4xl tracking-tight leading-tight mb-10 lowercase">
        follow the journey
      </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-2xl mx-auto">
              {socialLinks.map((link) => {
                const Hover = brandStyles[link.name] || '';
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`harshdeep ${link.name}`}
                    className="group"
                  >
                    <div className={`w-28 h-28 md:w-32 md:h-32 border-2 border-foreground rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-1 ${Hover}`}>
                      <link.icon className="w-12 h-12 md:w-14 md:h-14 text-foreground transition-all duration-300 group-hover:scale-110" />
                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
}
