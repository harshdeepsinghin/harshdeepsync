import type { Song } from '@/data/songs';

async function getSpotifyCoverArt(spotifyUrl: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string };
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}

function extractYoutubeId(youtubeUrl: string): string | null {
  try {
    const u = new URL(youtubeUrl);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1) || null;
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v');
      const match = u.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);
      if (match) return match[1];
    }
    return null;
  } catch {
    return null;
  }
}

// YouTube thumbnails are 16:9 (or 4:3 for hqdefault); pages render them inside
// a square box with object-cover, which crops the sides to fill it.
async function getYoutubeCoverArt(youtubeUrl: string): Promise<string | null> {
  const id = extractYoutubeId(youtubeUrl);
  if (!id) return null;

  const maxres = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  try {
    const res = await fetch(maxres, { method: 'HEAD' });
    // Missing maxres either 404s or falls back to a ~1KB grey placeholder.
    if (res.ok && Number(res.headers.get('content-length') ?? '0') > 2000) {
      return maxres;
    }
  } catch {
    // fall through to hqdefault
  }
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export async function getCoverArt(song: Song): Promise<string | null> {
  if (song.spotifyUrl) {
    const cover = await getSpotifyCoverArt(song.spotifyUrl);
    if (cover) return cover;
  }
  const youtubeUrl = song.links.find((l) => l.platform === 'youtube')?.url;
  if (youtubeUrl) return getYoutubeCoverArt(youtubeUrl);
  return null;
}
