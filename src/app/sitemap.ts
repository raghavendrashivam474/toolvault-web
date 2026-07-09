import type { MetadataRoute } from 'next'
import { SITE } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
