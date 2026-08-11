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