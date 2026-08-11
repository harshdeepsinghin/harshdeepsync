import type { Metadata } from 'next';
import Link from 'next/link';
import { songs } from '@/data/songs';
import { getCoverArt } from '@/lib/cover-art';
import { PLATFORMS } from '@/data/platforms';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'catalog',
  description: 'every harsh&deep release, latest first — tap a song for all the ways to listen.',
  alternates: { canonical: 'https://music.harshdeepsingh.in/catalog' },
};

export default async function CatalogPage() {
  const sorted = [...songs].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
  const covers = await Promise.all(sorted.map((song) => getCoverArt(song)));

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl tracking-tight leading-tight mb-3 lowercase text-center">
            catalog
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-12 md:mb-16 lowercase text-center">
            every release, latest first.
          </p>

          <div className="flex flex-col gap-4 md:gap-5">
            {sorted.map((song, i) => {
              const platformIcons = song.links.map(({ platform, url: link }) => {
                const config = PLATFORMS[platform];
                if (!config) return null;
                const Icon = config.icon;
                return (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`listen on ${config.label}`}
                    className={cn(
                      'text-muted-foreground transition-all duration-200 hover:scale-110',
                      config.hoverTextClass
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              });

              return (
                <div
                  key={song.slug}
                  className="group border-2 border-foreground rounded-xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
                >
                  <div className="flex items-center gap-5">
                    <Link href={`/music/${song.slug}`} className="flex items-center gap-5 min-w-0 flex-1">
                      {covers[i] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={covers[i]!}
                          alt={`${song.title} cover art`}
                          width={72}
                          height={72}
                          className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-lg border border-foreground/20 object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-lg border border-foreground/20 shrink-0 flex items-center justify-center">
                          <span className="font-headline text-2xl">♪</span>
                        </div>
                      )}
                      <div className="min-w-0 flex-1 text-left">
                        <p className="font-headline text-xl md:text-2xl tracking-tight leading-tight lowercase truncate">
                          {song.title}
                        </p>
                        <p className="font-body text-muted-foreground text-sm md:text-base lowercase">
                          {new Date(song.releaseDate).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-3 shrink-0">
                      {platformIcons}
                    </div>

                    <Link
                      href={`/music/${song.slug}`}
                      aria-label={`open ${song.title}`}
                      className="shrink-0"
                    >
                      <span className="font-headline text-2xl text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                        →
                      </span>
                    </Link>
                  </div>

                  <div className="flex md:hidden items-center gap-4 mt-4 pl-[calc(4rem+1.25rem)]">
                    {platformIcons}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
