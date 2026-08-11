import type { Metadata } from 'next';
import Link from 'next/link';
import { songs } from '@/data/songs';
import { getCoverArt } from '@/lib/spotify-cover';

export const metadata: Metadata = {
  title: 'catalog',
  description: 'every harsh&deep release, latest first — tap a song for all the ways to listen.',
  alternates: { canonical: 'https://music.harshdeepsingh.in/catalog' },
};

export default async function CatalogPage() {
  const sorted = [...songs].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
  const covers = await Promise.all(sorted.map((song) => getCoverArt(song.spotifyUrl)));

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
            {sorted.map((song, i) => (
              <Link
                key={song.slug}
                href={`/music/${song.slug}`}
                className="group flex items-center gap-5 border-2 border-foreground rounded-xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
              >
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
                <span className="font-headline text-2xl text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
