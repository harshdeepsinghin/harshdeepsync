import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveGoSong } from '@/data/songs';
import type { PlatformId } from '@/data/platforms';

// NFC/QR smart link: reads the device (User-Agent) and, for the current (or
// overridden) release, sends you to the matching platform.
//
// iPhone: opens Apple Music in a new tab, this tab settles on the catalog —
// so tapping the NFC card always leaves you on music.harshdeepsingh.in/catalog
// with the app opening alongside it.
//
// Android: navigates this tab straight to an `intent://` URL so Chrome hands
// off to the Spotify app directly (skipping any "open with…" prompt).
// `intent://` only works as a real top-level navigation — Chrome silently
// blocks it as a window.open() popup — so unlike iPhone there's no separate
// new tab / catalog landing here; the intent's own browser_fallback_url
// covers the "app not installed" case in the same tab.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'opening…',
  robots: { index: false, follow: false },
};

const ANDROID_PACKAGES: Partial<Record<PlatformId, string>> = {
  spotify: 'com.spotify.music',
};

function toAndroidIntentUrl(httpsUrl: string, packageName: string): string {
  const withoutScheme = httpsUrl.replace(/^https?:\/\//, '');
  return `intent://${withoutScheme}#Intent;scheme=https;package=${packageName};S.browser_fallback_url=${encodeURIComponent(httpsUrl)};end`;
}

export default async function GoPage({
  searchParams,
}: {
  searchParams: Promise<{ song?: string }>;
}) {
  const headersList = await headers();
  const ua = headersList.get('user-agent') || '';
  const { song: songOverride } = await searchParams;
  const song = resolveGoSong(songOverride);

  // Deliberately excludes "Macintosh" so desktop Macs fall through to the
  // catalog instead of being treated like an iPhone/iPad.
  const isApple = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  const platform: PlatformId | null = isApple ? 'apple-music' : isAndroid ? 'spotify' : null;

  const catalogUrl = 'https://music.harshdeepsingh.in/catalog';
  const link = platform ? song.links.find((l) => l.platform === platform) : undefined;

  let script: string;
  let fallbackHref: string | null = null;
  let fallbackOpensNewTab = false;

  if (link && isApple) {
    // New tab for the app, current tab settles on the catalog.
    script = `try { window.open(${JSON.stringify(link.url)}, '_blank', 'noopener'); } catch (e) {}\nwindow.location.replace(${JSON.stringify(catalogUrl)});`;
    fallbackHref = link.url;
    fallbackOpensNewTab = true;
  } else if (link && isAndroid) {
    const androidPackage = ANDROID_PACKAGES[link.platform];
    const intentUrl = androidPackage ? toAndroidIntentUrl(link.url, androidPackage) : link.url;
    script = `window.location.href = ${JSON.stringify(intentUrl)};`;
    fallbackHref = intentUrl;
    fallbackOpensNewTab = false;
  } else {
    script = `window.location.replace(${JSON.stringify(catalogUrl)});`;
  }

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-16 text-center">
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p className="font-body text-muted-foreground lowercase text-sm md:text-base max-w-sm">
        opening {song.title}
        {fallbackHref && (
          <>
            {' '}— if it doesn&apos;t open,{' '}
            <a
              href={fallbackHref}
              {...(fallbackOpensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              tap here
            </a>
          </>
        )}
        {fallbackOpensNewTab ? ', taking you to the catalog…' : '…'}
      </p>
    </div>
  );
}
