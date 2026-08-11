import type { MetadataRoute } from 'next';
import { songs } from '@/data/songs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://music.harshdeepsingh.in';
  return [
    { url: base + '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: base + '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/connect', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/catalog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...songs.map((song) => ({
      url: `${base}/music/${song.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
