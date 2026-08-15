import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { songs } from '@/data/songs';
import { PLATFORMS, type PlatformId } from '@/data/platforms';
import { cn } from '@/lib/utils';
import { getCoverArt } from '@/lib/cover-art';

// Rendered on-demand rather than pre-generated: this deploy's Cloudflare
// Worker uses a no-op incremental cache, so a build-time-static dynamic
// route ([slug]) would 404 on every request (cache miss + no fallback).
export const dynamic = 'force-dynamic';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const song = songs.find((s) => s.slug === slug);
  if (!song) return {};

  const cover = await getCoverArt(song);
  const description = `listen to "${song.title}" by harsh&deep on spotify, apple music, youtube and more.`;
  const url = `https://music.harshdeepsingh.in/music/${song.slug}`;

  return {
    title: song.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: song.title,
      description,
      url,
      images: cover ? [{ url: cover, width: 640, height: 640 }] : undefined,
      type: 'music.song',
    },
    twitter: {
      card: cover ? 'summary_large_image' : 'summary',
      title: song.title,
      description,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function SongPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ open?: string }>;
}) {
  const { slug } = await params;
  const song = songs.find((s) => s.slug === slug);
  if (!song) notFound();

  const { open } = await searchParams;
  const matchedPlatform = open as PlatformId | undefined;
  const autoOpenUrl = matchedPlatform
    ? song.links.find((l) => l.platform === matchedPlatform)?.url
    : undefined;

  // Matched platform (if any) goes first so it's the obvious thing to tap —
  // this is the real fallback: iOS Safari blocks script-triggered popups
  // outright, so the auto-open below is best-effort only. A real tap on this
  // link (already target="_blank") reliably opens the app/new tab and always
  // leaves this page open behind it.
  const orderedLinks = matchedPlatform
    ? [...song.links].sort((a, b) =>
        a.platform === matchedPlatform ? -1 : b.platform === matchedPlatform ? 1 : 0
      )
    : song.links;

  const cover = await getCoverArt(song);
  const url = `https://music.harshdeepsingh.in/music/${song.slug}`;

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MusicRecording',
            name: song.title,
            url,
            byArtist: { '@type': 'Person', name: 'Harshdeep' },
            image: cover ?? undefined,
          }),
        }}
      />
      {autoOpenUrl && (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `try { window.open(${JSON.stringify(autoOpenUrl)}, '_blank', 'noopener'); } catch (e) {}`,
          }}
        />
      )}
      <div className="w-full max-w-md mx-auto text-center flex flex-col items-center">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={`${song.title} cover art`}
            width={256}
            height={256}
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl border-2 border-foreground object-cover mb-8"
          />
        ) : (
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl border-2 border-foreground mb-8 flex items-center justify-center">
            <span className="font-headline text-5xl">♪</span>
          </div>
        )}

        <h1 className="font-headline text-3xl md:text-5xl tracking-tight leading-tight mb-2 lowercase">
          {song.title}
        </h1>
        <p className="font-body text-muted-foreground text-base md:text-lg mb-2 lowercase">
          harsh&amp;deep
        </p>
        {autoOpenUrl && (
          <p className="font-body text-muted-foreground text-xs md:text-sm mb-8 lowercase">
            opening on {PLATFORMS[matchedPlatform!].label.toLowerCase()} — if it doesn&apos;t, tap it below.
          </p>
        )}
        {!autoOpenUrl && <div className="mb-10" />}

        <div className="w-full flex flex-col gap-4">
          {orderedLinks.map(({ platform, url: link }) => {
            const config = PLATFORMS[platform];
            if (!config) return null;
            const Icon = config.icon;
            const isMatched = platform === matchedPlatform;
            return (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`listen on ${config.label}`}
                className={cn(
                  'group w-full flex items-center gap-4 border-2 rounded-xl px-5 py-4 transition-all duration-300 transform hover:-translate-y-0.5',
                  isMatched ? 'border-primary bg-primary/5' : 'border-foreground',
                  config.hoverClass
                )}
              >
                <Icon className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-headline text-lg md:text-xl tracking-tight lowercase">
                  {config.label.toLowerCase()}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
