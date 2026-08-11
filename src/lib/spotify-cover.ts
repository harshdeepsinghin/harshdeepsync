export async function getCoverArt(spotifyUrl?: string): Promise<string | null> {
  if (!spotifyUrl) return null;
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
