import type { PlatformId } from '@/data/platforms';

export interface Song {
  /** URL slug -> music.harshdeepsingh.in/music/<slug> */
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD). Drives sort order on /catalog, latest first. */
  releaseDate: string;
  /** Spotify track URL, also used to auto-fetch cover art (no API key needed). */
  spotifyUrl?: string;
  /** Platform links, in the order they should appear on the page. */
  links: { platform: PlatformId; url: string }[];
}

// /go (the NFC/QR smart link) normally auto-targets whichever song has the
// latest `releaseDate`. Set this to a slug to pin /go at a specific release
// instead — e.g. during a single's launch week, or if you want the NFC card
// to keep pointing at one song regardless of what you release next. Set back
// to null to resume auto-following the latest release.
export const PINNED_SONG_SLUG: string | null = null;

// To add a new song: add an object below with a unique `slug`, its release
// date (controls catalog order, latest first), and its platform links (order
// = display order on the song page). To drop a platform from a song, just
// remove that entry from its `links` array. No code changes needed.
export const songs: Song[] = [
  {
    slug: 'mere-baara-saal',
    title: 'mere baara saal',
    releaseDate: '2026-08-10',
    spotifyUrl: 'https://open.spotify.com/track/43B8JczIxrrl7PNBRyFBNA',
    links: [
      { platform: 'youtube', url: 'https://youtu.be/oeVGWyzoHvs' },
      { platform: 'spotify', url: 'https://open.spotify.com/track/43B8JczIxrrl7PNBRyFBNA' },
      { platform: 'apple-music', url: 'https://music.apple.com/us/album/mere-baara-saal-single/6791546050' },
      { platform: 'amazon-music', url: 'https://music.amazon.in/tracks/B0H94TB6RQ' },
      { platform: 'jiosaavn', url: 'https://www.jiosaavn.com/song/mere-baara-saal/XQ0TdjZHbmA' },
    ],
  },
  {
    slug: 'mai-parinda-home-studio-version',
    title: 'mai parinda (home studio version)',
    releaseDate: '2025-06-26',
    links: [
      { platform: 'youtube', url: 'https://youtu.be/NkRz3b625qI' },
    ],
  },
];

/** Latest release by `releaseDate`, used as the default /go target. */
export function getLatestSong(): Song {
  return [...songs].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))[0];
}

/** Resolves which song /go should point at: ?song= override > PINNED_SONG_SLUG > latest. */
export function resolveGoSong(songSlugOverride?: string | null): Song {
  if (songSlugOverride) {
    const song = songs.find((s) => s.slug === songSlugOverride);
    if (song) return song;
  }
  if (PINNED_SONG_SLUG) {
    const song = songs.find((s) => s.slug === PINNED_SONG_SLUG);
    if (song) return song;
  }
  return getLatestSong();
}