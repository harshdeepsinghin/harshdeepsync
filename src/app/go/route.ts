import { type NextRequest, NextResponse } from 'next/server';
import { resolveGoSong } from '@/data/songs';
import type { PlatformId } from '@/data/platforms';

// NFC/QR smart link: reads the device and bounces straight to the latest (or
// overridden) release's links page — never /catalog — so that page is what
// stays open behind whatever app opens. A plain server-side 302: no
// intermediate script, nothing for iOS Safari's popup blocker to fight with.
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const songOverride = request.nextUrl.searchParams.get('song');
  const song = resolveGoSong(songOverride);

  // Deliberately excludes "Macintosh" so desktop Macs fall through to the
  // song page unopened, instead of being treated like an iPhone/iPad.
  const isApple = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  const platform: PlatformId | null = isApple ? 'apple-music' : isAndroid ? 'spotify' : null;

  const songUrl = `https://music.harshdeepsingh.in/music/${song.slug}`;
  const hasPlatformLink = platform ? song.links.some((l) => l.platform === platform) : false;
  const destination = hasPlatformLink ? `${songUrl}?open=${platform}` : songUrl;

  return NextResponse.redirect(destination, 302);
}
