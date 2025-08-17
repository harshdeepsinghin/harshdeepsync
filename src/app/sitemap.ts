import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://harshdeep.studio';
  return [
    { url: base + '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: base + '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/connect', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
