import { type NextRequest, NextResponse } from 'next/server';
import { resolveGoSong } from '@/data/songs';
import type { PlatformId } from '@/data/platforms';

// NFC/QR smart link: reads the device and bounces straight to the right
// streaming app for the current (or overridden) release. Always resolved
// per-request from the User-Agent header, so it can't be prerendered.
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const songOverride = request.nextUrl.searchParams.get('song');
  const song = resolveGoSong(songOverride);

  // Deliberately excludes "Macintosh" so desktop Macs fall through to the
  // catalog instead of being treated like an iPhone/iPad.
  const isApple = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  const platform: PlatformId | null = isApple ? 'apple-music' : isAndroid ? 'spotify' : null;
  const songUrl = `https://music.harshdeepsingh.in/music/${song.slug}`;

  if (!platform) {
    return NextResponse.redirect('https://music.harshdeepsingh.in/catalog', 302);
  }

  const hasPlatformLink = song.links.some((l) => l.platform === platform);
  // The song page auto-opens `platform` on load, then leaves every other
  // link on screen underneath — a fallback for iPhone users who don't use
  // Apple Music, Android users without Spotify, etc.
  const destination = hasPlatformLink ? `${songUrl}?open=${platform}` : songUrl;

  return NextResponse.redirect(destination, 302);
}
